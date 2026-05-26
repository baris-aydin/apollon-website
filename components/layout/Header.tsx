import Link from "next/link"
import { type Locale } from "@/lib/i18n"

type HeaderProps = {
  locale: Locale
}

const navItems = {
  tr: [
    { label: "Ürünler", href: "/products" },
    { label: "Hakkımızda", href: "/about" },
    { label: "Journal", href: "/journal" },
    { label: "Distribütörlük", href: "/partner-distributor" },
    { label: "İletişim", href: "/contact" },
  ],
  en: [
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Journal", href: "/journal" },
    { label: "Partner", href: "/partner-distributor" },
    { label: "Contact", href: "/contact" },
  ],
}

export function Header({ locale }: HeaderProps) {
  const otherLocale = locale === "tr" ? "en" : "tr"

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href={`/${locale}`} className="font-semibold tracking-wide">
          APOLLON
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems[locale].map((item) => (
            <Link
              key={item.href}
              href={`/${locale}${item.href}`}
              className="text-sm text-neutral-300 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href={`/${otherLocale}`}
          className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase text-neutral-300 hover:text-white"
        >
          {otherLocale}
        </Link>
      </div>
    </header>
  )
}