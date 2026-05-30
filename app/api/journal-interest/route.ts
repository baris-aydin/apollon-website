import { NextResponse } from "next/server"
import { createClient } from "next-sanity"

// TODO: Confirm newsletter provider (Resend / Brevo / Mailchimp / other) before launch
// TODO: Review KVKK / privacy consent wording with legal before launch
// TODO: Add rate limiting (e.g. upstash/ratelimit) before production launch
// TODO: Add Cloudflare Turnstile or reCAPTCHA after basic setup is confirmed working
// TODO: Confirm whether leads should be stored in Sanity or migrated to a newsletter platform
// TODO: Add email notification to internal team when a new journal interest lead is received

type JournalInterestPayload = {
  name?: string
  email: string
  interestType?: string
  consent: boolean
  locale: "tr" | "en"
  website?: string // honeypot — reject silently if non-empty
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

export async function POST(request: Request) {
  let body: JournalInterestPayload

  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    )
  }

  // Honeypot — silent reject to not signal bot detection
  if (body.website) {
    return NextResponse.json({ success: true, message: "ok" })
  }

  const email = trim(body.email)
  const name = trim(body.name)
  const interestType = trim(body.interestType)
  const consent = body.consent === true
  const locale = body.locale === "en" ? "en" : "tr"

  const errors: Record<string, string> = {}
  if (!email) errors.email = "Required"
  else if (!isValidEmail(email)) errors.email = "Invalid email address"
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
      // TODO: Set SANITY_API_WRITE_TOKEN before production launch
      console.warn(
        "[journal-interest] SANITY_API_WRITE_TOKEN not set — lead not persisted"
      )
    } else {
      const writeClient = createWriteClient()
      await writeClient.create({
        _type: "journalInterestLead",
        name: name || undefined,
        email,
        interestType: interestType || "all",
        consent,
        locale,
        status: "new",
        source: "journal-page",
        createdAt: new Date().toISOString(),
      })
      savedToSanity = true
    }
  } catch (err) {
    console.error("[journal-interest] Sanity write error:", err)
  }

  // Fallback log during setup so no lead is lost silently
  if (!savedToSanity) {
    console.log("[journal-interest] Lead (not saved to Sanity):", {
      name,
      email,
      interestType,
      locale,
      submittedAt: new Date().toISOString(),
    })
  }

  return NextResponse.json(
    { success: true, message: "Journal interest recorded." },
    { status: 201 }
  )
}
