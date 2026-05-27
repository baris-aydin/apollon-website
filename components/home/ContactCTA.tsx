import Link from "next/link"
import { type Locale } from "@/lib/i18n"

const content = {
  tr: {
    eyebrow: "İletişim",
    heading: "Apollon ürünlerini keşfetmeye hazır mısınız?",
    body: "Ürün bilgisi, araç uyumluluğu, distribütörlük fırsatları veya montajla ilgili sorularınız için bizimle iletişime geçin.",
    contact: "İletişime Geç",
    contactHref: "/contact",
    inquiry: "Ürün Bilgisi Al",
    inquiryHref: "/contact",
    whatsapp: "WhatsApp",
    whatsappMessage: "Merhaba, Apollon ürünleri hakkında bilgi almak istiyorum.",
  },
  en: {
    eyebrow: "Contact",
    heading: "Ready to explore Apollon products?",
    body: "Contact us for product information, vehicle compatibility, distributor opportunities, or installation-related questions.",
    contact: "Contact Us",
    contactHref: "/contact",
    inquiry: "Product Inquiry",
    inquiryHref: "/contact",
    whatsapp: "WhatsApp",
    whatsappMessage: "Hello, I'd like to learn more about Apollon products.",
  },
}

const waNumber = "905000000000"

export function ContactCTA({ locale }: { locale: Locale }) {
  const c = content[locale]
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(c.whatsappMessage)}`

  return (
    <section className="border-t border-border/30 py-24">
      <div className="section-container">
        <div className="mx-auto max-w-3xl space-y-10 text-center">
          <div className="space-y-5">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-bronze/40" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-bronze/70">
                {c.eyebrow}
              </span>
              <span className="h-px w-8 bg-bronze/40" />
            </div>
            <h2 className="font-heading text-3xl font-semibold leading-[1.15] md:text-4xl lg:text-5xl pb-[0.1em]">
              {c.heading}
            </h2>
            <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {c.body}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href={`/${locale}${c.contactHref}`}
              className="rounded-sm border border-bronze bg-bronze px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-bronze/90 hover:shadow-[0_0_24px_oklch(0.70_0.12_65_/_0.3)]"
            >
              {c.contact}
            </Link>
            <Link
              href={`/${locale}${c.inquiryHref}`}
              className="rounded-sm border border-border/60 px-7 py-3 text-sm font-semibold text-foreground transition-all hover:border-bronze/40 hover:text-bronze"
            >
              {c.inquiry}
            </Link>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-sm border border-[#25D366]/30 px-7 py-3 text-sm font-semibold text-[#25D366]/80 transition-all hover:border-[#25D366]/60 hover:text-[#25D366]"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {c.whatsapp}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
