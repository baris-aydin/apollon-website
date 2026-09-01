'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { type Locale } from "@/lib/i18n"

export type NavItem = {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

type MobileNavProps = {
  locale: Locale
  items: NavItem[]
  otherLocale: string
}

export function MobileNav({ locale, items, otherLocale }: MobileNavProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="flex h-9 w-9 items-center justify-center rounded-sm border border-border/60 text-muted-foreground transition-colors hover:border-bronze/40 hover:text-bronze md:hidden"
      >
        <Menu className="h-4 w-4" />
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-background">
          {/* Top bar */}
          <div className="flex h-16 items-center justify-between border-b border-border/60 px-6">
            <Link
              href={`/${locale}`}
              onClick={() => setOpen(false)}
              className="font-heading text-xl font-bold tracking-[0.12em]"
            >
              APOLLON
            </Link>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-9 w-9 items-center justify-center rounded-sm border border-border/60 text-muted-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-1 flex-col justify-center gap-1 overflow-y-auto px-6 py-6">
            {items.map((item) => (
              <div key={item.href} className="border-b border-border/30">
                <Link
                  href={`/${locale}${item.href}`}
                  onClick={() => setOpen(false)}
                  className="block py-5 font-heading text-2xl font-semibold text-foreground transition-colors hover:text-bronze"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="-mt-1 space-y-1 pb-5 pl-4">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={`/${locale}${child.href}`}
                          onClick={() => setOpen(false)}
                          className="block py-2 text-base text-muted-foreground transition-colors hover:text-bronze"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>

          {/* Bottom bar */}
          <div className="flex items-center justify-between border-t border-border/60 px-6 py-8">
            <Link
              href={`/${locale}/contact`}
              onClick={() => setOpen(false)}
              className="rounded-sm border border-bronze bg-bronze px-6 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              {locale === "tr" ? "İletişim" : "Contact"}
            </Link>
            <Link
              href={`/${otherLocale}`}
              onClick={() => setOpen(false)}
              className="rounded-sm border border-border/60 px-4 py-2.5 text-sm font-medium uppercase tracking-widest text-muted-foreground"
            >
              {otherLocale}
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
