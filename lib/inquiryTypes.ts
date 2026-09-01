// Single source of truth for the unified Contact Form inquiry types.
// Shared by the form, the /api/contact route, and the lead notification email.

export const INQUIRY_TYPES = [
  "general",
  "product",
  "distributor",
  "technical-support",
  "other",
] as const

export type InquiryType = (typeof INQUIRY_TYPES)[number]

/** The inquiry type that reveals the distributor / partnership business fields. */
export const DISTRIBUTOR_INQUIRY_TYPE: InquiryType = "distributor"

export function isInquiryType(value: unknown): value is InquiryType {
  return typeof value === "string" && INQUIRY_TYPES.includes(value as InquiryType)
}

/** English labels — used for internal lead emails regardless of visitor locale. */
export const INQUIRY_TYPE_LABELS: Record<InquiryType, string> = {
  general: "General Inquiry",
  product: "Product Inquiry",
  distributor: "Distributor / Partnership Inquiry",
  "technical-support": "Technical Support",
  other: "Other",
}

export function inquiryTypeLabel(value: string): string {
  return isInquiryType(value) ? INQUIRY_TYPE_LABELS[value] : value
}

// ─── Distributor / partnership option labels ─────────────────────────────────
// English labels for the internal lead email. Keys must stay in sync with the
// option values rendered by components/forms/ContactForm.tsx.

const BUSINESS_TYPE_LABELS: Record<string, string> = {
  distributor: "Distributor",
  "dealer-reseller": "Dealer / Reseller",
  "installation-center": "Installation Center",
  "automotive-accessories-store": "Automotive Accessories Store",
  "motorcycle-accessories-store": "Motorcycle Accessories Store",
  "ecommerce-seller": "E-commerce Seller",
  "fleet-corporate": "Fleet / Corporate",
  other: "Other",
}

const PRODUCT_CATEGORY_LABELS: Record<string, string> = {
  motorcycle: "Motorcycle — MotoPlay Series",
  car: "Car Technology Systems",
  "signature-audio-series": "Signature Audio Series",
}

export function businessTypeLabel(value: string): string {
  return BUSINESS_TYPE_LABELS[value] ?? value
}

export function productCategoryLabel(value: string): string {
  return PRODUCT_CATEGORY_LABELS[value] ?? value
}
