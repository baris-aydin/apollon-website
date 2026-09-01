import Image from "next/image"
import Link from "next/link"
import { type Locale } from "@/lib/i18n"

type HeroProps = {
  locale: Locale
  title: string
  subtitle: string
}

const eyebrow = {
  tr: "Ruhu Olan Teknoloji",
  en: "Technology With Soul",
}

const labels = {
  tr: {
    explore: "Ürünleri Keşfet",
    distributor: "Distribütör Ol",
    contact: "İletişime Geç",
    followUs: "Bizi Takip Edin",
  },
  en: {
    explore: "Explore Products",
    distributor: "Become a Distributor",
    contact: "Contact Us",
    followUs: "Follow Us",
  },
}

const INSTAGRAM_URL =
  "https://www.instagram.com/apollonentertainmentsystems?igsh=MTA1aTEzbnR0eHhmMw%3D%3D&utm_source=qr"
const TIKTOK_URL =
  "https://www.tiktok.com/@apollones0701?_r=1&_t=ZS-96JBOiEZH8B"

export function Hero({ locale, title, subtitle }: HeroProps) {
  const t = labels[locale]
  const eyebrowText = eyebrow[locale]

  return (
    <section className="relative isolate flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-20">
      {/* ── Background image ────────────────────────────────────────────── */}
      <Image
        src="/images/home/apollon-design.png"
        alt=""
        fill
        priority
        sizes="100vw"
        unoptimized
        className="object-cover [object-position:68%_center] md:[object-position:62%_center] lg:object-right"
      />

      {/* ── Overlay stack (bottom → top, each pointer-events-none) ──────── */}

      {/* 1. Subtle overall dark wash */}
      <div className="pointer-events-none absolute inset-0 bg-black/30" />

      {/* 2. Left-to-right readability gradient — keeps text side dark */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.70) 42%, rgba(0,0,0,0.30) 72%, rgba(0,0,0,0.18) 100%)",
        }}
      />

      {/* 3. Vertical vignette — gentle top/bottom darkening */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.08) 55%, rgba(0,0,0,0.65) 100%)",
        }}
      />

      {/* 4. Bottom fade — blends hero into the next black section */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.80), transparent)" }}
      />

      {/* 5. Bronze accent line */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze to-transparent opacity-25" />

      {/* ── Hero content ────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-[880px] space-y-8 text-center lg:mx-0 lg:ml-[7vw] lg:text-left xl:ml-[8vw]">
          {/* Eyebrow — "Technology With Soul" */}
          <div className="flex items-center justify-center gap-3 lg:justify-start">
            <span className="h-px w-10 bg-bronze/40" />
            <span className="text-xs font-medium uppercase tracking-[0.35em] text-bronze/70">
              {eyebrowText}
            </span>
            <span className="h-px w-10 bg-bronze/40" />
          </div>

          {/* Headline — "Apollon Entertainment Systems" */}
          <h1 className="font-heading text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl pb-[0.14em]">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl lg:mx-0">
            {subtitle}
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 lg:justify-start">
            <Link
              href={`/${locale}/products`}
              className="inline-flex items-center rounded-sm border border-bronze bg-bronze px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-bronze/90 hover:shadow-[0_0_24px_oklch(0.70_0.12_65_/_0.35)]"
            >
              {t.explore}
            </Link>
            <Link
              href={`/${locale}/contact?type=distributor#contact-form`}
              className="inline-flex items-center rounded-sm border border-border px-7 py-3 text-sm font-semibold text-foreground transition-all hover:border-bronze/40 hover:text-bronze"
            >
              {t.distributor}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center rounded-sm border border-border px-7 py-3 text-sm font-semibold text-foreground transition-all hover:border-bronze/40 hover:text-bronze"
            >
              {t.contact}
            </Link>
          </div>

          {/* Social row */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1 lg:justify-start">
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground/40 pr-1">
              {t.followUs}
            </span>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Apollon on Instagram"
              className="group inline-flex items-center gap-2 rounded-sm border border-border/40 bg-card/20 px-4 py-2 text-xs font-medium text-foreground/70 backdrop-blur-sm transition-all
                hover:border-[#c13584]/40 hover:bg-card/40 hover:text-foreground hover:shadow-[0_0_14px_rgba(193,53,132,0.12)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-bronze/50"
            >
              <svg
                className="h-3.5 w-3.5 shrink-0 transition-colors group-hover:text-[#e1306c]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4.5" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              Instagram
            </a>
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Apollon on TikTok"
              className="group inline-flex items-center gap-2 rounded-sm border border-border/40 bg-card/20 px-4 py-2 text-xs font-medium text-foreground/70 backdrop-blur-sm transition-all
                hover:border-[#69c9d0]/40 hover:bg-card/40 hover:text-foreground hover:shadow-[0_0_14px_rgba(105,201,208,0.10)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-bronze/50"
            >
              <svg
                className="h-3.5 w-3.5 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.83a8.18 8.18 0 0 0 4.78 1.52V6.9a4.84 4.84 0 0 1-1.01-.21z"
                  fill="currentColor"
                />
              </svg>
              TikTok
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="h-10 w-px bg-gradient-to-b from-transparent to-foreground" />
      </div>
    </section>
  )
}
