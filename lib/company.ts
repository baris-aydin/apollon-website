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
