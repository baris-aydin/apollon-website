import { NextResponse } from "next/server"
import { createClient } from "next-sanity"

// TODO: Install resend when ready: npm install resend
// TODO: Add to .env.local:
//   SANITY_API_WRITE_TOKEN=your_server_only_write_token
//   RESEND_API_KEY=your_resend_api_key
//   PARTNER_NOTIFICATION_EMAIL=internal@yourdomain.com
//   PARTNER_FROM_EMAIL=noreply@yourdomain.com  (must be verified in Resend)
// TODO: Add rate limiting (e.g. upstash/ratelimit) before production launch
// TODO: Add Cloudflare Turnstile or reCAPTCHA after basic setup is confirmed working
// TODO: Review KVKK / privacy consent wording with legal before launch

type PartnerApplicationPayload = {
  companyName: string
  country: string
  city: string
  contactPerson: string
  phone: string
  email: string
  businessType: string
  interestedCategories: string[]
  salesChannels: string[]
  message?: string
  consent: boolean
  locale: "tr" | "en"
  _hp?: string // honeypot — reject silently if non-empty
}

function createWriteClient() {
  return createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-05-26",
    token: process.env.SANITY_API_WRITE_TOKEN,
    useCdn: false,
  })
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function trim(v: unknown): string {
  return typeof v === "string" ? v.trim() : ""
}

function sanitizeStringArray(v: unknown): string[] {
  if (!Array.isArray(v)) return []
  return v.filter((s): s is string => typeof s === "string").map((s) => s.trim()).filter(Boolean)
}

export async function POST(request: Request) {
  let body: PartnerApplicationPayload

  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    )
  }

  // Honeypot — silent reject to not signal bot detection
  if (body._hp) {
    return NextResponse.json({ success: true, message: "ok" })
  }

  // Sanitize all inputs server-side — never trust the client
  const companyName = trim(body.companyName)
  const country = trim(body.country)
  const city = trim(body.city)
  const contactPerson = trim(body.contactPerson)
  const phone = trim(body.phone)
  const email = trim(body.email)
  const businessType = trim(body.businessType)
  const interestedCategories = sanitizeStringArray(body.interestedCategories)
  const salesChannels = sanitizeStringArray(body.salesChannels)
  const message = trim(body.message).slice(0, 2000)
  const consent = body.consent === true
  const locale = body.locale === "en" ? "en" : "tr"

  // Server-side validation
  const errors: Record<string, string> = {}
  if (!companyName) errors.companyName = "Required"
  if (!country) errors.country = "Required"
  if (!city) errors.city = "Required"
  if (!contactPerson) errors.contactPerson = "Required"
  if (!phone) errors.phone = "Required"
  if (!email) errors.email = "Required"
  else if (!isValidEmail(email)) errors.email = "Invalid email address"
  if (!businessType) errors.businessType = "Required"
  if (interestedCategories.length === 0)
    errors.interestedCategories = "Select at least one category"
  if (!consent) errors.consent = "Consent is required"

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { success: false, message: "Please check the required fields.", errors },
      { status: 400 }
    )
  }

  // ── Save to Sanity ────────────────────────────────────────────────────────
  let savedToSanity = false
  try {
    if (!process.env.SANITY_API_WRITE_TOKEN) {
      // During development, log the lead rather than crashing
      // TODO: Set SANITY_API_WRITE_TOKEN before production launch
      console.warn("[partner-application] SANITY_API_WRITE_TOKEN not set — lead not persisted")
    } else {
      const writeClient = createWriteClient()
      await writeClient.create({
        _type: "partnerLead",
        companyName,
        country,
        city,
        contactPerson,
        phone,
        email,
        businessType,
        interestedCategories,
        salesChannels,
        message: message || undefined,
        consent,
        locale,
        status: "new",
        source: "partner-distributor-page",
        createdAt: new Date().toISOString(),
      })
      savedToSanity = true
    }
  } catch (err) {
    console.error("[partner-application] Sanity write error:", err)
  }

  // ── Email notification ────────────────────────────────────────────────────
  // Lead save is primary; email is secondary. Failure here does not block success.
  //
  // TODO: Uncomment when Resend is installed (npm install resend) and env vars are set:
  //
  // try {
  //   const { Resend } = await import("resend")
  //   const resend = new Resend(process.env.RESEND_API_KEY)
  //   await resend.emails.send({
  //     from: process.env.PARTNER_FROM_EMAIL!,
  //     to: process.env.PARTNER_NOTIFICATION_EMAIL!,
  //     subject: `New Apollon Partner Application — ${companyName}`,
  //     html: `
  //       <h2>New Partner Application</h2>
  //       <p><strong>Company:</strong> ${companyName}</p>
  //       <p><strong>Contact:</strong> ${contactPerson}</p>
  //       <p><strong>Email:</strong> ${email}</p>
  //       <p><strong>Phone:</strong> ${phone}</p>
  //       <p><strong>Country:</strong> ${country}</p>
  //       <p><strong>City:</strong> ${city}</p>
  //       <p><strong>Business Type:</strong> ${businessType}</p>
  //       <p><strong>Categories:</strong> ${interestedCategories.join(", ")}</p>
  //       <p><strong>Sales Channels:</strong> ${salesChannels.join(", ")}</p>
  //       <p><strong>Message:</strong> ${message || "—"}</p>
  //       <p><strong>Locale:</strong> ${locale}</p>
  //       <p><strong>Submitted:</strong> ${new Date().toISOString()}</p>
  //     `,
  //   })
  // } catch (emailErr) {
  //   console.error("[partner-application] Email notification failed:", emailErr)
  // }

  // Fallback log during setup so no lead is lost silently
  if (!savedToSanity) {
    console.log("[partner-application] Lead (not saved to Sanity):", {
      companyName,
      country,
      city,
      contactPerson,
      email,
      businessType,
      interestedCategories,
      submittedAt: new Date().toISOString(),
    })
  }

  return NextResponse.json(
    { success: true, message: "Partnership application received." },
    { status: 201 }
  )
}
