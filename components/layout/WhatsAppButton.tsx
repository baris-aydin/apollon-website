'use client'

import { MessageCircle } from "lucide-react"
import { type Locale } from "@/lib/i18n"
import { whatsappUrl } from "@/lib/company"

type WhatsAppButtonProps = {
  locale: Locale
}

export function WhatsAppButton({ locale }: WhatsAppButtonProps) {
  const url = whatsappUrl(locale)

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/30 transition-all hover:scale-110 hover:shadow-[0_0_24px_#25D36650]"
    >
      <MessageCircle className="h-6 w-6 fill-white text-white" />
      <span className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-sm border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
        WhatsApp
      </span>
    </a>
  )
}
