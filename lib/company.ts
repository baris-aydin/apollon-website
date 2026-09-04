// Single source of truth for Apollon's public contact details.
// Used by the Contact page office section and the site footer.

import { type Locale } from "@/lib/i18n"

/** Canonical single-line form. Also what the Google Maps query is built from. */
export const COMPANY_ADDRESS =
  "Sahil Mahallesi, Kocatepe Cd. 146C, 34524 Beylikdüzü/İstanbul, Türkiye"

/**
 * Display form, one string per rendered line.
 *
 * The street and neighbourhood names are proper address components and stay in
 * Turkish in both locales — only the İstanbul / Istanbul spelling differs.
 */
export const COMPANY_ADDRESS_LINES: Record<Locale, string[]> = {
  tr: [
    "Sahil Mahallesi, Kocatepe Cd. 146C",
    "34524 Beylikdüzü/İstanbul, Türkiye",
  ],
  en: [
    "Sahil Mahallesi, Kocatepe Cd. 146C",
    "34524 Beylikdüzü, Istanbul, Türkiye",
  ],
}

export const COMPANY_EMAIL = "info@apollones.com"

/** Public WhatsApp line. Displayed in this human-readable grouping. */
export const COMPANY_PHONE_DISPLAY = "+90 532 449 90 07"

/** Same number, normalised for wa.me and tel: (wa.me takes no "+" or spaces). */
const WHATSAPP_NUMBER = "905324499007"

export const COMPANY_PHONE_E164 = `+${WHATSAPP_NUMBER}`

/** Second founder's line. Reachable by phone; WhatsApp stays on the line above. */
export const COMPANY_PHONE_SECONDARY_DISPLAY = "+90 537 626 98 70"
export const COMPANY_PHONE_SECONDARY_E164 = "+905376269870"

export type CompanyPhone = {
  display: string
  /** `tel:` target — E.164, no spaces. */
  e164: string
  /** Whether this line also takes WhatsApp messages. */
  whatsapp: boolean
}

/**
 * Every public voice line, in the order they are presented.
 *
 * Both are clickable `tel:` links everywhere they appear. Only the first line
 * carries WhatsApp: the site's WhatsApp entry points (floating button, contact
 * CTAs) are single-destination by design, and routing some visitors to a
 * different inbox is a decision for Apollon, not a formatting detail.
 */
export const COMPANY_PHONES: CompanyPhone[] = [
  { display: COMPANY_PHONE_DISPLAY, e164: COMPANY_PHONE_E164, whatsapp: true },
  {
    display: COMPANY_PHONE_SECONDARY_DISPLAY,
    e164: COMPANY_PHONE_SECONDARY_E164,
    whatsapp: false,
  },
]

const WHATSAPP_MESSAGE: Record<Locale, string> = {
  tr: "Merhaba, Apollon ürünleri hakkında bilgi almak istiyorum.",
  en: "Hello, I would like to get information about Apollon products.",
}

/** Prefilled WhatsApp chat link for the given locale. */
export function whatsappUrl(locale: Locale): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE[locale]
  )}`
}

/** Open every day, 09:00–17:00 (Monday through Sunday). */
export const WORKING_HOURS: Record<Locale, string> = {
  tr: "Her gün, 09:00–17:00",
  en: "Every day, 09:00–17:00",
}

// Google resolves the pin from the address string itself, so there is no API
// key and no hardcoded coordinates involved.
const MAPS_QUERY = encodeURIComponent(COMPANY_ADDRESS)

/** Keyless embed — the classic `output=embed` form, no Maps JS API needed. */
export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`
export const MAPS_OPEN_URL = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`
