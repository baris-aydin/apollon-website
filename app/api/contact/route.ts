// TODO: Set SANITY_API_WRITE_TOKEN in Vercel env vars before production launch
// TODO: Set RESEND_API_KEY, FORM_NOTIFICATION_EMAIL, FORM_FROM_EMAIL in Vercel env vars
// TODO: Verify FORM_FROM_EMAIL domain in Resend dashboard before production
// TODO: Add rate limiting (e.g. @upstash/ratelimit) before production launch
// TODO: Add Cloudflare Turnstile or reCAPTCHA after basic setup is confirmed working
// TODO: Review final KVKK / privacy consent wording with legal before launch

import { NextResponse } from "next/server"
import { getWriteClient } from "@/sanity/lib/writeClient"
import { sendLeadNotification } from "@/lib/email/sendLeadNotification"
import { DISTRIBUTOR_INQUIRY_TYPE, isInquiryType } from "@/lib/inquiryTypes"
import { isKnownProduct } from "@/lib/products/catalogue"

type ContactFormPayload = {
  name: string
  email: string
  phone?: string
  company?: string
  inquiryType: string
  /** Product inquiries only — an official catalogue name. */
  product?: string
  subject: string
  message: string
  vehicleBrand?: string
  vehicleModel?: string
  vehicleYear?: string
  preferredContactMethod?: string
  // Distributor / partnership inquiries only
  country?: string
  city?: string
  businessType?: string
  interestedCategories?: string[]
  consent: boolean
  locale: "tr" | "en"
  website?: string // honeypot — reject silently if non-empty
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function trim(v: unknown): string {
  return typeof v === "string" ? v.trim() : ""
}

function sanitizeStringArray(v: unknown): string[] {
  if (!Array.isArray(v)) return []
  return v
    .filter((s): s is string => typeof s === "string")
    .map((s) => s.trim())
    .filter(Boolean)
}

export async function POST(request: Request) {
  let body: ContactFormPayload

  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    )
  }

  // Honeypot — silent success to avoid signalling bot detection
  if (body.website) {
    return NextResponse.json({ success: true, message: "ok" })
  }

  const name = trim(body.name)
  const email = trim(body.email)
  const phone = trim(body.phone).slice(0, 50)
  const company = trim(body.company)
  const inquiryType = trim(body.inquiryType)
  const product = trim(body.product)
  const subject = trim(body.subject)
  const message = trim(body.message).slice(0, 2000)
  const vehicleBrand = trim(body.vehicleBrand)
  const vehicleModel = trim(body.vehicleModel)
  const vehicleYear = trim(body.vehicleYear).slice(0, 20)
  const preferredContactMethod = trim(body.preferredContactMethod)
  const country = trim(body.country)
  const city = trim(body.city)
  const businessType = trim(body.businessType)
  const interestedCategories = sanitizeStringArray(body.interestedCategories)
  const consent = body.consent === true
  const locale = body.locale === "en" ? "en" : "tr"

  const isDistributor = inquiryType === DISTRIBUTOR_INQUIRY_TYPE
  // Only accept a product name that exists in the catalogue, and only for
  // product inquiries — anything else is dropped rather than stored.
  const selectedProduct =
    inquiryType === "product" && isKnownProduct(product) ? product : ""

  const errors: Record<string, string> = {}
  if (!name) errors.name = "Required"
  if (!email) errors.email = "Required"
  else if (!isValidEmail(email)) errors.email = "Invalid email address"
  if (!inquiryType) errors.inquiryType = "Required"
  else if (!isInquiryType(inquiryType)) errors.inquiryType = "Invalid inquiry type"
  if (!subject) errors.subject = "Required"
  if (!message) errors.message = "Required"
  else if (message.length < 10) errors.message = "Message must be at least 10 characters"
  if (!consent) errors.consent = "Consent is required"

  // Distributor / partnership inquiries carry a business profile
  if (isDistributor) {
    if (!company) errors.company = "Required"
    if (!phone) errors.phone = "Required"
    if (!country) errors.country = "Required"
    if (!city) errors.city = "Required"
    if (!businessType) errors.businessType = "Required"
    if (interestedCategories.length === 0)
      errors.interestedCategories = "Select at least one category"
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { success: false, message: "Please check the required fields.", errors },
      { status: 400 }
    )
  }

  const submittedAt = new Date().toISOString()

  // Distributor-specific fields are never stored/sent for other inquiry types
  const businessFields: {
    country?: string
    city?: string
    businessType?: string
    interestedCategories?: string[]
  } = isDistributor
    ? {
        country: country || undefined,
        city: city || undefined,
        businessType: businessType || undefined,
        interestedCategories:
          interestedCategories.length > 0 ? interestedCategories : undefined,
      }
    : {}

  const vehicleFields: {
    vehicleBrand?: string
    vehicleModel?: string
    vehicleYear?: string
  } = isDistributor
    ? {}
    : {
        vehicleBrand: vehicleBrand || undefined,
        vehicleModel: vehicleModel || undefined,
        vehicleYear: vehicleYear || undefined,
      }

  // ── Save to Sanity (primary — must succeed) ───────────────────────────────
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    // TODO: Remove this warning and set the token before production
    console.warn("[contact] SANITY_API_WRITE_TOKEN not set — lead not persisted to Sanity")
  } else {
    try {
      await getWriteClient().create({
        _type: "contactLead",
        name,
        email,
        phone: phone || undefined,
        company: company || undefined,
        inquiryType,
        product: selectedProduct || undefined,
        subject,
        message,
        ...vehicleFields,
        ...businessFields,
        preferredContactMethod: preferredContactMethod || undefined,
        consent,
        locale,
        status: "new",
        source: "contact-page",
        createdAt: submittedAt,
      })
    } catch (err) {
      console.error("[contact] Sanity write error:", err)
      return NextResponse.json(
        { success: false, message: "Something went wrong. Please try again." },
        { status: 500 }
      )
    }
  }

  // ── Email notification (secondary — failure does not block success) ────────
  try {
    await sendLeadNotification({
      type: "contact",
      name,
      email,
      phone: phone || undefined,
      company: company || undefined,
      inquiryType,
      product: selectedProduct || undefined,
      subject,
      message,
      ...vehicleFields,
      ...businessFields,
      preferredContactMethod: preferredContactMethod || undefined,
      locale,
      submittedAt,
    })
  } catch (emailErr) {
    console.error("[contact] Email notification failed:", emailErr)
    // Lead is already saved — return success
  }

  return NextResponse.json(
    { success: true, message: "Contact request received." },
    { status: 201 }
  )
}
