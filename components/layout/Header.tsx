import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { type Locale } from "@/lib/i18n"
import { MobileNav, type NavItem } from "./MobileNav"

type HeaderProps = { locale: Locale }

const navItems: Record<Locale, NavItem[]> = {
  tr: [
    {
      label: "Ürünler",
      href: "/products",
      children: [
        { label: "Motosiklet", href: "/products/motorcycle" },
        { label: "Otomobil", href: "/products/car" },
      ],
    },
    { label: "Hakkımızda", href: "/about" },
    { label: "Journal", href: "/journal" },
  ],
  en: [
    {
      label: "Products",
      href: "/products",
      children: [
        { label: "Motorcycle", href: "/products/motorcycle" },
        { label: "Car", href: "/products/car" },
      ],
    },
    { label: "About", href: "/about" },
    { label: "Journal", href: "/journal" },
  ],
}

const contactLabel = { tr: "İletişim", en: "Contact" }

const navLinkClass =
  "relative text-sm text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-bronze after:transition-[width] hover:after:w-full"

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
            width={220}
            height={56}
            priority
            className="h-auto w-[135px] md:w-[165px] lg:w-[175px]"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {items.map((item) =>
            item.children ? (
              // CSS-only submenu — opens on hover and on keyboard focus, so the
              // header stays a server component.
              <div key={item.href} className="group relative">
                <Link
                  href={`/${locale}${item.href}`}
                  className={`${navLinkClass} inline-flex items-center gap-1`}
                >
                  {item.label}
                  <ChevronDown
                    className="h-3 w-3 transition-transform group-hover:rotate-180"
                    aria-hidden
                  />
                </Link>
                <div className="invisible absolute left-1/2 top-full z-10 w-56 -translate-x-1/2 pt-3 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <ul className="overflow-hidden rounded-sm border border-border/60 bg-background/95 py-1.5 shadow-[0_8px_30px_rgb(0,0,0,0.35)] backdrop-blur-xl">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={`/${locale}${child.href}`}
                          className="block px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-card/60 hover:text-bronze"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link key={item.href} href={`/${locale}${item.href}`} className={navLinkClass}>
                {item.label}
              </Link>
            )
          )}
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
