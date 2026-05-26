import Link from "next/link"
import { type Locale } from "@/lib/i18n"

const content = {
  tr: {
    badge: "Yakında · Ar-Ge",
    heading: "Sesin Ruhu",
    body: "Apollon Signature Audio Series şu anda araştırma ve geliştirme aşamasındadır. Bu gelecek seri; müzik, tasarım ve kültürel derinlikten ilham alan premium mobil ses mimarisini keşfedecektir.",
    cta: "Haberdar Ol",
    ctaHref: "/contact",
  },
  en: {
    badge: "Coming Soon · R&D",
    heading: "The Spirit of Sound",
    body: "Apollon's Signature Audio Series is currently in research and development. This future line will explore premium sound architecture for mobility, shaped by music, design, and cultural depth.",
    cta: "Get Notified",
    ctaHref: "/contact",
  },
}

export function SignatureAudioPreview({ locale }: { locale: Locale }) {
  const c = content[locale]
  return (
    <section className="relative overflow-hidden border-t border-border/30 py-32">
      <div
        className="absolute inset-0"
        style={{ background: "oklch(0.09 0.015 245 / 0.6)" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_50%_50%,oklch(0.22_0.08_245_/_0.4),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_50%_50%,oklch(0.70_0.12_65_/_0.04),transparent)]" />

      <div className="section-container relative z-10">
        <div className="mx-auto max-w-3xl space-y-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-bronze/30 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.3em] text-bronze/70">
            {c.badge}
          </span>

          <h2 className="font-heading text-4xl font-bold leading-[1.15] tracking-tight md:text-6xl lg:text-7xl pb-1">
            {c.heading}
          </h2>

          <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {c.body}
          </p>

          <Link
            href={`/${locale}${c.ctaHref}`}
            className="inline-flex rounded-sm border border-bronze/50 px-7 py-3 text-sm font-semibold text-foreground/80 transition-all hover:border-bronze hover:text-bronze"
          >
            {c.cta}
          </Link>
        </div>
      </div>
    </section>
  )
}
