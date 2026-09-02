'use client'

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
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

  // Lock body scroll and close on Escape while the drawer is open.
  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", onKeyDown)

    // Rotating a phone can cross the md breakpoint, which hides the drawer via
    // CSS. Close it so the scroll lock is released with it.
    const desktop = window.matchMedia("(min-width: 768px)")
    const onBreakpoint = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false)
    }
    desktop.addEventListener("change", onBreakpoint)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener("keydown", onKeyDown)
      desktop.removeEventListener("change", onBreakpoint)
    }
  }, [open])

  const close = () => setOpen(false)

  const drawer = (
    <div className="md:hidden">
      {/* Overlay — tapping outside the panel closes the menu */}
      <div
        onClick={close}
        aria-hidden
        className="animate-overlay-in fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm"
      />

      {/* Left drawer */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label={locale === "tr" ? "Menü" : "Menu"}
        className="animate-drawer-in fixed inset-y-0 left-0 z-[100] flex w-[82%] max-w-[340px] flex-col border-r border-border/60 bg-background shadow-[8px_0_40px_rgb(0,0,0,0.5)] sm:w-1/2 sm:max-w-[400px]"
      >
        {/* Top bar */}
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-border/60 px-5">
          <Link
            href={`/${locale}`}
            onClick={close}
            className="-ml-1 flex min-h-11 items-center px-1 font-heading text-xl font-bold tracking-[0.12em]"
          >
            APOLLON
          </Link>
          <button
            type="button"
            onClick={close}
            aria-label={locale === "tr" ? "Menüyü kapat" : "Close menu"}
            className="-mr-1 flex h-11 w-11 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:text-bronze"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto overscroll-contain px-5 py-4">
          {items.map((item) => (
            <div key={item.href} className="border-b border-border/30 py-1">
              <Link
                href={`/${locale}${item.href}`}
                onClick={close}
                className="block py-3.5 font-heading text-xl font-semibold text-foreground transition-colors hover:text-bronze"
              >
                {item.label}
              </Link>
              {item.children && (
                <ul className="-mt-1 space-y-0.5 pb-3">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={`/${locale}${child.href}`}
                        onClick={close}
                        className="block py-2.5 pl-4 text-base text-muted-foreground transition-colors hover:text-bronze"
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
        <div className="flex shrink-0 items-center gap-3 border-t border-border/60 px-5 py-5">
          <Link
            href={`/${locale}/contact`}
            onClick={close}
            className="flex min-h-11 flex-1 items-center justify-center rounded-sm border border-bronze bg-bronze px-5 text-sm font-semibold text-primary-foreground"
          >
            {locale === "tr" ? "İletişim" : "Contact"}
          </Link>
          <Link
            href={`/${otherLocale}`}
            onClick={close}
            className="flex min-h-11 items-center justify-center rounded-sm border border-border/60 px-4 text-sm font-medium uppercase tracking-widest text-muted-foreground"
          >
            {otherLocale}
          </Link>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={locale === "tr" ? "Menüyü aç" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        className="flex h-9 w-9 items-center justify-center rounded-sm border border-border/60 text-muted-foreground transition-colors hover:border-bronze/40 hover:text-bronze md:hidden"
      >
        <Menu className="h-4 w-4" />
      </button>

      {/* Portalled to <body>: the header sets `backdrop-blur`, which makes it a
          containing block for fixed-position descendants. Rendered in place, the
          drawer would resolve `fixed inset-0` against the 64px-tall header
          instead of the viewport.

          `open` starts false, so the server render never reaches this branch and
          `document` is always defined by the time it does. */}
      {open && createPortal(drawer, document.body)}
    </>
  )
}
