// TODO: Set SANITY_API_WRITE_TOKEN in Vercel env vars before production launch
// TODO: Set RESEND_API_KEY, FORM_NOTIFICATION_EMAIL, FORM_FROM_EMAIL in Vercel env vars
// TODO: Add rate limiting (e.g. @upstash/ratelimit) before production launch
// TODO: Add Cloudflare Turnstile or reCAPTCHA after basic setup is confirmed working
// TODO: Review final KVKK / privacy consent wording with legal before launch

import { NextResponse } from "next/server"
import { getWriteClient } from "@/sanity/lib/writeClient"
import { sendLeadNotification } from "@/lib/email/sendLeadNotification"

type ProductInquiryPayload = {
  name: string
  phone: string
  email: string
  product: string
  vehicleBrand?: string
  vehicleModel?: string
  vehicleYear?: string
  message?: string
  locale: "tr" | "en"
  website?: string // honeypot
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function trim(v: unknown): string {
  return typeof v === "string" ? v.trim() : ""
}

export async function POST(request: Request) {
  let body: ProductInquiryPayload

  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    )
  }

  // Honeypot
  if (body.website) {
    return NextResponse.json({ success: true, message: "ok" })
  }

  const name = trim(body.name)
  const phone = trim(body.phone).slice(0, 50)
  const email = trim(body.email)
  const product = trim(body.product)
  const vehicleBrand = trim(body.vehicleBrand)
  const vehicleModel = trim(body.vehicleModel)
  const vehicleYear = trim(body.vehicleYear).slice(0, 20)
  const message = trim(body.message).slice(0, 2000)
  const locale = body.locale === "en" ? "en" : "tr"

  const errors: Record<string, string> = {}
  if (!name) errors.name = "Required"
  if (!phone) errors.phone = "Required"
  if (!email) errors.email = "Required"
  else if (!isValidEmail(email)) errors.email = "Invalid email address"
  if (!product) errors.product = "Required"
  if (!message) errors.message = "Required"

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { success: false, message: "Please check the required fields.", errors },
      { status: 400 }
    )
  }

  const submittedAt = new Date().toISOString()

  // ── Save to Sanity (primary) ──────────────────────────────────────────────
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    console.warn("[product-inquiry] SANITY_API_WRITE_TOKEN not set — lead not persisted to Sanity")
  } else {
    try {
      await getWriteClient().create({
        _type: "formLead",
        formType: "product-inquiry",
        name,
        phone,
        email,
        product,
        vehicleBrand: vehicleBrand || undefined,
        vehicleModel: vehicleModel || undefined,
        vehicleYear: vehicleYear || undefined,
        message: message || undefined,
        locale,
        status: "new",
        source: "product-page",
        createdAt: submittedAt,
      })
    } catch (err) {
      console.error("[product-inquiry] Sanity write error:", err)
      return NextResponse.json(
        { success: false, message: "Something went wrong. Please try again." },
        { status: 500 }
      )
    }
  }

  // ── Email notification (secondary) ───────────────────────────────────────
  try {
    await sendLeadNotification({
      type: "product-inquiry",
      name,
      phone,
      email,
      product,
      vehicleBrand: vehicleBrand || undefined,
      vehicleModel: vehicleModel || undefined,
      vehicleYear: vehicleYear || undefined,
      message: message || undefined,
      locale,
      submittedAt,
    })
  } catch (emailErr) {
    console.error("[product-inquiry] Email notification failed:", emailErr)
  }

  return NextResponse.json(
    { success: true, message: "Product inquiry received." },
    { status: 201 }
  )
}
