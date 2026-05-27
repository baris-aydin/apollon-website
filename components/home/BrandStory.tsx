import Link from "next/link"
import { type Locale } from "@/lib/i18n"

const content = {
  tr: {
    eyebrow: "Apollon Hakkında",
    heading: "Mühendislik, kültür ve hareketin kesişiminden doğdu.",
    body: "Apollon yalnızca bir ürün kataloğu değildir. Doğu ile Batı'nın kesişiminden, modern mühendislikten ve kültürel kimliğe duyulan saygıdan beslenen bir mobilite teknolojisi markasıdır. Bağlantılı ekranlardan akıllı güvenlik sistemlerine ve geleceğin ses deneyimlerine kadar her ürün yönelimi basit bir fikre dayanır: teknoloji canlı hissettirmelidir.",
    cta: "Apollon'u Tanıyın",
    ctaHref: "/about",
  },
  en: {
    eyebrow: "About Apollon",
    heading: "Born between engineering, culture, and movement.",
    body: "Apollon is more than a product catalog. It is a mobility technology brand shaped by the meeting point of East and West, modern engineering, and a respect for cultural identity. From connected screens to smart safety systems and future sound experiences, every product direction is guided by a simple idea: technology should feel alive.",
    cta: "Learn About Apollon",
    ctaHref: "/about",
  },
}

export function BrandStory({ locale }: { locale: Locale }) {
  const c = content[locale]
  return (
    <section className="border-t border-border/30 py-24">
      <div className="section-container">
        <div className="mx-auto max-w-3xl space-y-10 text-center">
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-bronze/40" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-bronze/70">
                {c.eyebrow}
              </span>
              <span className="h-px w-8 bg-bronze/40" />
            </div>
            <h2 className="font-heading text-3xl font-semibold leading-[1.15] tracking-tight md:text-4xl lg:text-5xl pb-[0.1em]">
              {c.heading}
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {c.body}
            </p>
          </div>
          <Link
            href={`/${locale}${c.ctaHref}`}
            className="inline-flex rounded-sm border border-border/60 px-7 py-3 text-sm font-semibold text-foreground transition-all hover:border-bronze/40 hover:text-bronze"
          >
            {c.cta}
          </Link>
        </div>
      </div>
    </section>
  )
}
