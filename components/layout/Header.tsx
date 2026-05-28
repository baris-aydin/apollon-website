import Link from "next/link"
import Image from "next/image"
import { type Locale } from "@/lib/i18n"
import { MobileNav } from "./MobileNav"

type HeaderProps = { locale: Locale }

const navItems = {
  tr: [
    { label: "Ürünler", href: "/products" },
    { label: "Hakkımızda", href: "/about" },
    { label: "Journal", href: "/journal" },
    { label: "Distribütörlük", href: "/partner-distributor" },
  ],
  en: [
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Journal", href: "/journal" },
    { label: "Partner", href: "/partner-distributor" },
  ],
}

const contactLabel = { tr: "İletişim", en: "Contact" }

export function Header({ locale }: HeaderProps) {
  const otherLocale = locale === "tr" ? "en" : "tr"
  const items = navItems[locale]

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="section-container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center">
          <Image
            src="/logos/apollon-logo-dark.jpeg"
            alt="Apollon Entertainment Systems"
            width={180}
            height={48}
            priority
            className="h-11 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {items.map((item) => (
            <Link
              key={item.href}
              href={`/${locale}${item.href}`}
              className="relative text-sm text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-bronze after:transition-[width] hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <Link
            href={`/${otherLocale}`}
            className="hidden rounded-sm border border-border/60 px-3 py-1.5 text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:border-bronze/40 hover:text-bronze md:block"
          >
            {otherLocale}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="hidden rounded-sm border border-bronze bg-bronze px-4 py-1.5 text-xs font-semibold text-primary-foreground transition-all hover:bg-bronze/90 hover:shadow-[0_0_16px_oklch(0.70_0.12_65_/_0.35)] md:block"
          >
            {contactLabel[locale]}
          </Link>
          <MobileNav locale={locale} items={items} otherLocale={otherLocale} />
        </div>
      </div>
    </header>
  )
}
