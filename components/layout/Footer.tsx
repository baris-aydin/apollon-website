import Link from "next/link"
import { type Locale } from "@/lib/i18n"
import {
  COMPANY_ADDRESS_LINES,
  COMPANY_EMAIL,
  COMPANY_PHONE_DISPLAY,
  whatsappUrl,
} from "@/lib/company"

type FooterProps = { locale: Locale }

const products = {
  tr: [
    { label: "Motosiklet — MotoPlay Series", href: "/products/motorcycle" },
    { label: "Otomobil Teknoloji Sistemleri", href: "/products/car" },
  ],
  en: [
    { label: "Motorcycle — MotoPlay Series", href: "/products/motorcycle" },
    { label: "Car Technology Systems", href: "/products/car" },
  ],
}

const company = {
  tr: [
    { label: "Hakkımızda", href: "/about" },
    { label: "Journal", href: "/journal" },
    { label: "Distribütörlük", href: "/contact?type=distributor" },
    { label: "İletişim", href: "/contact" },
  ],
  en: [
    { label: "About", href: "/about" },
    { label: "Journal", href: "/journal" },
    { label: "Partnership", href: "/contact?type=distributor" },
    { label: "Contact", href: "/contact" },
  ],
}

const legal = {
  tr: [
    { label: "Garanti", href: "/warranty" },
    { label: "KVKK / Gizlilik", href: "/privacy" },
    { label: "Kullanım Şartları", href: "/terms" },
  ],
  en: [
    { label: "Warranty", href: "/warranty" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
}

const tagline = {
  tr: "Otomobil ve motosikletler için premium mobilite teknolojileri.",
  en: "Premium mobility technology for cars and motorcycles.",
}

const h = {
  tr: { products: "Ürünler", company: "Şirket", contact: "İletişim" },
  en: { products: "Products", company: "Company", contact: "Contact" },
}

export function Footer({ locale }: FooterProps) {
  const year = new Date().getFullYear()
  const labels = h[locale]

  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="section-container py-16">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div className="space-y-6">
            <Link
              href={`/${locale}`}
              className="font-heading text-xl font-bold tracking-[0.14em] text-foreground transition-colors hover:text-bronze"
            >
              APOLLON
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {tagline[locale]}
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/apollonentertainmentsystems?igsh=MTA1aTEzbnR0eHhmMw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Visit Apollon on Instagram" className="flex h-8 w-8 items-center justify-center rounded-sm border border-border/60 text-muted-foreground transition-colors hover:border-bronze/40 hover:text-bronze">
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4.5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="https://www.tiktok.com/@apollones0701?_r=1&_t=ZS-96JBOiEZH8B" target="_blank" rel="noopener noreferrer" aria-label="Visit Apollon on TikTok" className="flex h-8 w-8 items-center justify-center rounded-sm border border-border/60 text-muted-foreground transition-colors hover:border-bronze/40 hover:text-bronze">
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05z"/></svg>
              </a>
              <a href="#" aria-label="YouTube" className="flex h-8 w-8 items-center justify-center rounded-sm border border-border/60 text-muted-foreground transition-colors hover:border-bronze/40 hover:text-bronze">
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="flex h-8 w-8 items-center justify-center rounded-sm border border-border/60 text-muted-foreground transition-colors hover:border-bronze/40 hover:text-bronze">
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-foreground">
              {labels.products}
            </p>
            <ul className="space-y-3">
              {products[locale].map((item) => (
                <li key={item.href}>
                  <Link
                    href={`/${locale}${item.href}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-foreground">
              {labels.company}
            </p>
            <ul className="space-y-3">
              {company[locale].map((item) => (
                <li key={item.href}>
                  <Link
                    href={`/${locale}${item.href}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-foreground">
              {labels.contact}
            </p>
            <address className="not-italic space-y-2.5">
              <p>
                <a
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {COMPANY_EMAIL}
                </a>
              </p>
              <p>
                <a
                  href={whatsappUrl(locale)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {COMPANY_PHONE_DISPLAY}
                </a>
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {COMPANY_ADDRESS_LINES[locale].map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/50">
        <div className="section-container flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground/60">
            © {year} Apollon Entertainment Systems.{" "}
            {locale === "tr" ? "Tüm hakları saklıdır." : "All rights reserved."}
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {legal[locale].map((item) => (
              <Link
                key={item.href}
                href={`/${locale}${item.href}`}
                className="text-xs text-muted-foreground/60 transition-colors hover:text-muted-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
