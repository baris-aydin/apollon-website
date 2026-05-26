import Link from "next/link"
import { type Locale } from "@/lib/i18n"

type HeroProps = {
  locale: Locale
  title: string
  subtitle: string
}

const labels = {
  tr: {
    explore: "Ürünleri Keşfet",
    distributor: "Distribütör Ol",
    contact: "İletişime Geç",
  },
  en: {
    explore: "Explore Products",
    distributor: "Become a Distributor",
    contact: "Contact Us",
  },
}

export function Hero({ locale, title, subtitle }: HeroProps) {
  const t = labels[locale]

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6 pt-20">
      {/* Radial glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,oklch(0.22_0.08_245_/_0.25),transparent)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze to-transparent opacity-25" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl space-y-8 text-center">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-bronze/40" />
          <span className="text-xs font-medium uppercase tracking-[0.35em] text-bronze/70">
            Apollon Entertainment Systems
          </span>
          <span className="h-px w-10 bg-bronze/40" />
        </div>

        {/* Headline */}
        <h1 className="font-heading text-5xl font-bold leading-[1.15] tracking-tight md:text-7xl lg:text-8xl pb-1">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          {subtitle}
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href={`/${locale}/products`}
            className="inline-flex items-center rounded-sm border border-bronze bg-bronze px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-bronze/90 hover:shadow-[0_0_24px_oklch(0.70_0.12_65_/_0.35)]"
          >
            {t.explore}
          </Link>
          <Link
            href={`/${locale}/partner-distributor`}
            className="inline-flex items-center rounded-sm border border-border px-7 py-3 text-sm font-semibold text-foreground transition-all hover:border-bronze/40 hover:text-bronze"
          >
            {t.distributor}
          </Link>
        </div>

        {/* Tertiary CTA */}
        <div>
          <Link
            href={`/${locale}/contact`}
            className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-bronze hover:underline"
          >
            {t.contact}
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="h-10 w-px bg-gradient-to-b from-transparent to-foreground" />
      </div>
    </section>
  )
}
