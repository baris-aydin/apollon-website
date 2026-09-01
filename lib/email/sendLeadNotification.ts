// TODO: Confirm FORM_NOTIFICATION_EMAIL and FORM_FROM_EMAIL in Vercel env vars before launch
// TODO: FORM_FROM_EMAIL domain must be verified in Resend
// TODO: Replace "onboarding@resend.dev" test sender with verified domain address before production

import { Resend } from "resend"
import {
  DISTRIBUTOR_INQUIRY_TYPE,
  businessTypeLabel,
  inquiryTypeLabel,
  productCategoryLabel,
} from "@/lib/inquiryTypes"

// ─── Payload types ────────────────────────────────────────────────────────────

export type ContactLeadPayload = {
  type: "contact"
  name: string
  email: string
  phone?: string
  company?: string
  inquiryType: string
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
  locale: string
  submittedAt: string
}

export type ProductInquiryLeadPayload = {
  type: "product-inquiry"
  name: string
  email: string
  phone: string
  product: string
  vehicleBrand?: string
  vehicleModel?: string
  vehicleYear?: string
  message?: string
  locale: string
  submittedAt: string
}

export type LeadEmailPayload = ContactLeadPayload | ProductInquiryLeadPayload

// ─── Email builder ────────────────────────────────────────────────────────────

function row(label: string, value: string | undefined | null): string {
  const display = value?.trim() || "—"
  return `
    <tr>
      <td style="padding:8px 12px;width:160px;vertical-align:top;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#888888;white-space:nowrap;border-bottom:1px solid #f0f0f0;">${label}</td>
      <td style="padding:8px 12px;vertical-align:top;font-size:14px;color:#222222;border-bottom:1px solid #f0f0f0;">${display}</td>
    </tr>`
}

/** Like `row`, but omitted entirely when the value is empty — keeps conditional
 *  sections (e.g. distributor business details) out of unrelated inquiries. */
function optRow(label: string, value: string | undefined | null): string {
  return value?.trim() ? row(label, value) : ""
}

/** Section divider inside the details table. */
function sectionRow(title: string): string {
  return `
    <tr>
      <td colspan="2" style="padding:14px 12px 6px 12px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:#b5892a;border-bottom:1px solid #f0f0f0;">${title}</td>
    </tr>`
}

function buildHtml(title: string, formLabel: string, rows: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#f4f4f4;padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="max-width:600px;background:#ffffff;border-radius:4px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr>
          <td style="background:#111111;padding:24px 28px;border-bottom:3px solid #b5892a;">
            <div style="font-size:11px;font-weight:600;letter-spacing:0.25em;text-transform:uppercase;color:#b5892a;margin-bottom:6px;">Apollon Entertainment Systems</div>
            <div style="font-size:20px;font-weight:700;color:#ffffff;">${title}</div>
            <div style="font-size:12px;color:#888888;margin-top:4px;">${formLabel}</div>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:4px 0 0 0;">
            <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
              ${rows}
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f9f9f9;padding:16px 28px;border-top:1px solid #eeeeee;">
            <p style="margin:0;font-size:12px;color:#aaaaaa;text-align:center;">
              This notification was generated automatically by the Apollon website lead system.
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`
}

function buildText(title: string, lines: string[]): string {
  return [`Apollon Entertainment Systems — ${title}`, "=".repeat(50), "", ...lines, "", "---", "This is an automated lead notification."].join("\n")
}

// ─── Subject + HTML builders per form type ───────────────────────────────────

function buildContact(p: ContactLeadPayload) {
  const typeLabel = inquiryTypeLabel(p.inquiryType)
  const isDistributor = p.inquiryType === DISTRIBUTOR_INQUIRY_TYPE
  const categories = p.interestedCategories?.map(productCategoryLabel).join(", ")
  const business = p.businessType ? businessTypeLabel(p.businessType) : undefined

  // Distributor leads are identified by company first — that is what the
  // founders recognise the lead by.
  const who = isDistributor && p.company?.trim() ? p.company.trim() : p.name
  const subject = `[Apollon Website] ${typeLabel} — ${who}`

  const businessRows = isDistributor
    ? sectionRow("Business Details") +
      optRow("Company Name", p.company) +
      optRow("Contact Person", p.name) +
      optRow("Country", p.country) +
      optRow("City", p.city) +
      optRow("Business Type", business) +
      optRow("Interested Categories", categories)
    : ""

  const rows =
    row("Inquiry Type", typeLabel) +
    optRow("Product of Interest", p.product) +
    row("Name", p.name) +
    row("Email", p.email) +
    optRow("Phone", p.phone) +
    optRow("Company", isDistributor ? undefined : p.company) +
    row("Subject", p.subject) +
    row("Message", p.message) +
    optRow("Vehicle Brand", p.vehicleBrand) +
    optRow("Vehicle Model", p.vehicleModel) +
    optRow("Vehicle Year", p.vehicleYear) +
    businessRows +
    sectionRow("Submission") +
    optRow("Preferred Contact", p.preferredContactMethod) +
    row("Locale", p.locale) +
    row("Submitted At", p.submittedAt)

  const html = buildHtml(`${typeLabel} — ${who}`, "Contact Form", rows)

  const textLines = [
    `Inquiry Type: ${typeLabel}`,
    ...(p.product ? [`Product of Interest: ${p.product}`] : []),
    `Name: ${p.name}`,
    `Email: ${p.email}`,
    ...(p.phone ? [`Phone: ${p.phone}`] : []),
    ...(!isDistributor && p.company ? [`Company: ${p.company}`] : []),
    `Subject: ${p.subject}`,
    `Message: ${p.message}`,
    ...(p.vehicleBrand ? [`Vehicle Brand: ${p.vehicleBrand}`] : []),
    ...(p.vehicleModel ? [`Vehicle Model: ${p.vehicleModel}`] : []),
    ...(p.vehicleYear ? [`Vehicle Year: ${p.vehicleYear}`] : []),
    ...(isDistributor
      ? [
          "",
          "-- Business Details --",
          ...(p.company ? [`Company Name: ${p.company}`] : []),
          `Contact Person: ${p.name}`,
          ...(p.country ? [`Country: ${p.country}`] : []),
          ...(p.city ? [`City: ${p.city}`] : []),
          ...(business ? [`Business Type: ${business}`] : []),
          ...(categories ? [`Interested Categories: ${categories}`] : []),
          "",
        ]
      : []),
    ...(p.preferredContactMethod
      ? [`Preferred Contact: ${p.preferredContactMethod}`]
      : []),
    `Locale: ${p.locale}`,
    `Submitted At: ${p.submittedAt}`,
  ]

  return { subject, html, text: buildText(typeLabel, textLines) }
}

function buildProductInquiry(p: ProductInquiryLeadPayload) {
  const subject = `New Apollon Product Inquiry — ${p.product} — ${p.name}`
  const rows =
    row("Form Type", "Product Inquiry") +
    row("Name", p.name) +
    row("Phone", p.phone) +
    row("Email", p.email) +
    row("Product", p.product) +
    row("Vehicle Brand", p.vehicleBrand) +
    row("Vehicle Model", p.vehicleModel) +
    row("Vehicle Year", p.vehicleYear) +
    row("Message", p.message) +
    row("Locale", p.locale) +
    row("Submitted At", p.submittedAt)
  const html = buildHtml(`Product Inquiry — ${p.product}`, "Product Inquiry Form", rows)
  const text = buildText("Product Inquiry", [
    `Name: ${p.name}`,
    `Phone: ${p.phone}`,
    `Email: ${p.email}`,
    `Product: ${p.product}`,
    `Vehicle Brand: ${p.vehicleBrand || "—"}`,
    `Vehicle Model: ${p.vehicleModel || "—"}`,
    `Vehicle Year: ${p.vehicleYear || "—"}`,
    `Message: ${p.message || "—"}`,
    `Locale: ${p.locale}`,
    `Submitted At: ${p.submittedAt}`,
  ])
  return { subject, html, text }
}

// ─── Public API ───────────────────────────────────────────────────────────────

export async function sendLeadNotification(payload: LeadEmailPayload): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.FORM_NOTIFICATION_EMAIL
  // TODO: Replace with your verified Resend sender domain before production launch
  // During development you can use "onboarding@resend.dev" to test with any recipient.
  const from = process.env.FORM_FROM_EMAIL || "onboarding@resend.dev"

  if (!apiKey || !to) {
    console.warn("[sendLeadNotification] RESEND_API_KEY or FORM_NOTIFICATION_EMAIL not set — email skipped")
    return
  }

  let subject: string
  let html: string
  let text: string

  if (payload.type === "contact") {
    ;({ subject, html, text } = buildContact(payload))
  } else {
    ;({ subject, html, text } = buildProductInquiry(payload))
  }

  const resend = new Resend(apiKey)
  await resend.emails.send({ from, to, subject, html, text })
}
