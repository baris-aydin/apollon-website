import type { Metadata } from "next"
import Link from "next/link"
import { Music, Layers, Wind, BookOpen } from "lucide-react"
import { type Locale } from "@/lib/i18n"
import { SignatureInterestForm } from "@/components/signature-audio/SignatureInterestForm"

type PageProps = { params: Promise<{ locale: Locale }> }

// ─── Types ───────────────────────────────────────────────────────────────────

type ValueCard = { title: string; text: string }
type Pillar = { title: string; text: string }

type PageContent = {
  meta: { title: string; description: string }
  hero: {
    eyebrow: string
    badge: string
    title: string
    subtitle: string
    primaryCta: string
    secondaryCta: string
  }
  rd: {
    heading: string
    text: string
    badges: string[]
  }
  whySound: {
    heading: string
    text: string
    cards: ValueCard[]
  }
  architecture: {
    heading: string
    text: string
    pillars: Pillar[]
  }
  anatolia: {
    heading: string
    text: string
  }
  partnership: {
    heading: string
    text: string
    primaryCta: string
    secondaryCta: string
    tertiaryCta: string
  }
  form: {
    title: string
    description: string
  }
}

// ─── Content ─────────────────────────────────────────────────────────────────

const content: Record<Locale, PageContent> = {
  en: {
    meta: {
      title: "Signature Audio Series | Apollon Entertainment Systems",
      description:
        "Discover Apollon's future premium audio direction. Signature Audio Series is a coming-soon R&D line inspired by sound, culture, design, and modern mobility.",
    },
    hero: {
      eyebrow: "SIGNATURE AUDIO SERIES",
      badge: "Coming Soon · R&D",
      title: "The Spirit of Sound",
      subtitle:
        "Apollon's future premium audio direction — shaped by music, design, cultural memory, and the emotional side of mobility.",
      primaryCta: "Get Notified",
      secondaryCta: "Contact for Partnership",
    },
    rd: {
      heading: "Currently in research and development.",
      text: "Signature Audio Series is Apollon's future-facing audio direction. The line is currently in research and development, with the goal of exploring premium sound experiences for modern mobility environments.",
      badges: ["Coming Soon", "R&D Phase", "Premium Audio Direction", "Early Partnership Interest"],
    },
    whySound: {
      heading: "Why sound matters to Apollon",
      text: "For Apollon, technology is not only about screens, cameras, and hardware. It is also about atmosphere. Sound shapes the way people feel inside a vehicle, during a ride, or within a personal mobility experience. Signature Audio Series represents Apollon's ambition to turn mobility technology into something more emotional, memorable, and alive.",
      cards: [
        {
          title: "Emotion",
          text: "Sound gives technology feeling. It turns a cabin or ride into a personal experience.",
        },
        {
          title: "Identity",
          text: "A premium audio direction helps Apollon build a stronger brand identity beyond hardware.",
        },
        {
          title: "Atmosphere",
          text: "Audio changes the mood of mobility — from calm city drives to long-distance journeys.",
        },
        {
          title: "Memory",
          text: "Music and sound create emotional memory. Signature Audio Series is designed around that idea.",
        },
      ],
    },
    architecture: {
      heading: "Premium audio architecture, still being shaped.",
      text: "Signature Audio Series is envisioned as a future product direction around clarity, depth, balance, and refined sound character. The final product architecture, technical specifications, and launch timeline will be announced after the R&D phase progresses.",
      pillars: [
        {
          title: "Clarity",
          text: "A focus on clean, intelligible, and refined sound character.",
        },
        {
          title: "Depth",
          text: "A future direction built around presence, space, and emotional listening.",
        },
        {
          title: "Balance",
          text: "Audio that supports the driving or riding experience without overwhelming it.",
        },
        {
          title: "Integration",
          text: "Designed to become part of a broader premium mobility ecosystem.",
        },
        {
          title: "Craft",
          text: "A boutique audio direction shaped by design discipline, material feeling, and brand identity.",
        },
      ],
    },
    anatolia: {
      heading: "Inspired by Anatolia, engineered for mobility.",
      text: "Apollon's brand language draws from the meeting point of East and West, cultural memory, movement, and modern engineering. Signature Audio Series carries this idea into sound: a future audio direction inspired by place, rhythm, texture, and journey.",
    },
    partnership: {
      heading: "Be part of the next Apollon chapter.",
      text: "We are opening early conversations with partners, distributors, installers, and audio-focused collaborators who want to follow the development of Signature Audio Series.",
      primaryCta: "Contact for Partnership",
      secondaryCta: "Become an Early Distributor",
      tertiaryCta: "Get Notified",
    },
    form: {
      title: "Join the Signature Audio interest list.",
      description:
        "Leave your contact information and tell us whether you are interested as a customer, distributor, installer, or potential partner.",
    },
  },
  tr: {
    meta: {
      title: "Signature Audio Series | Apollon Entertainment Systems",
      description:
        "Apollon'un ses, kültür, tasarım ve modern mobiliteden ilham alan gelecek premium ses vizyonu Signature Audio Series'i keşfedin. Yakında / Ar-Ge aşamasında.",
    },
    hero: {
      eyebrow: "SIGNATURE AUDIO SERIES",
      badge: "Yakında · Ar-Ge",
      title: "Sesin Ruhu",
      subtitle:
        "Apollon'un müzik, tasarım, kültürel hafıza ve mobilitenin duygusal yönüyle şekillenen gelecek premium ses vizyonu.",
      primaryCta: "Haberdar Ol",
      secondaryCta: "İş Birliği İçin İletişime Geç",
    },
    rd: {
      heading: "Şu anda araştırma ve geliştirme aşamasında.",
      text: "Signature Audio Series, Apollon'un gelecek odaklı ses vizyonudur. Seri şu anda araştırma ve geliştirme aşamasındadır ve modern mobilite ortamları için premium ses deneyimlerini keşfetmeyi hedefler.",
      badges: ["Yakında", "Ar-Ge Aşaması", "Premium Ses Vizyonu", "Erken İş Ortaklığı İlgisi"],
    },
    whySound: {
      heading: "Ses Apollon için neden önemli?",
      text: "Apollon için teknoloji yalnızca ekranlardan, kameralardan ve donanımdan ibaret değildir. Aynı zamanda atmosferle ilgilidir. Ses; insanların bir araç içinde, bir sürüş sırasında veya kişisel mobilite deneyiminde nasıl hissettiğini şekillendirir. Signature Audio Series, Apollon'un mobilite teknolojisini daha duygusal, daha akılda kalıcı ve daha canlı bir deneyime dönüştürme hedefini temsil eder.",
      cards: [
        {
          title: "Duygu",
          text: "Ses, teknolojiye duygu katar. Bir kabini veya sürüşü kişisel bir deneyime dönüştürür.",
        },
        {
          title: "Kimlik",
          text: "Premium ses vizyonu, Apollon'un donanımın ötesinde daha güçlü bir marka kimliği kurmasına yardımcı olur.",
        },
        {
          title: "Atmosfer",
          text: "Ses; sakin şehir sürüşlerinden uzun yolculuklara kadar mobilitenin atmosferini değiştirir.",
        },
        {
          title: "Hafıza",
          text: "Müzik ve ses duygusal hafıza oluşturur. Signature Audio Series bu fikir etrafında şekillenir.",
        },
      ],
    },
    architecture: {
      heading: "Şekillenmeye devam eden premium ses mimarisi.",
      text: "Signature Audio Series; netlik, derinlik, denge ve rafine ses karakteri etrafında şekillenen gelecek bir ürün yönelimi olarak planlanmaktadır. Final ürün mimarisi, teknik özellikler ve lansman takvimi Ar-Ge süreci ilerledikten sonra açıklanacaktır.",
      pillars: [
        {
          title: "Netlik",
          text: "Temiz, anlaşılır ve rafine bir ses karakterine odaklanan yaklaşım.",
        },
        {
          title: "Derinlik",
          text: "Varlık hissi, alan duygusu ve duygusal dinleme deneyimi etrafında şekillenen gelecek vizyonu.",
        },
        {
          title: "Denge",
          text: "Sürüş veya yolculuk deneyimini baskılamadan destekleyen ses yaklaşımı.",
        },
        {
          title: "Entegrasyon",
          text: "Daha geniş bir premium mobilite ekosisteminin parçası olacak şekilde tasarlanan yaklaşım.",
        },
        {
          title: "Zanaat",
          text: "Tasarım disiplini, malzeme hissi ve marka kimliğiyle şekillenen boutique audio yaklaşımı.",
        },
      ],
    },
    anatolia: {
      heading: "Anadolu'dan ilham alan, mobilite için tasarlanan ses.",
      text: "Apollon'un marka dili; Doğu ile Batı'nın kesişiminden, kültürel hafızadan, hareketten ve modern mühendislikten beslenir. Signature Audio Series bu fikri sese taşır: yerden, ritimden, dokudan ve yolculuktan ilham alan gelecek bir ses vizyonu.",
    },
    partnership: {
      heading: "Apollon'un sonraki bölümünde yer alın.",
      text: "Signature Audio Series'in gelişimini takip etmek isteyen iş ortakları, distribütörler, montaj noktaları ve ses odaklı iş birlikleriyle erken görüşmelere açığız.",
      primaryCta: "İş Birliği İçin İletişime Geç",
      secondaryCta: "Erken Distribütör Ol",
      tertiaryCta: "Haberdar Ol",
    },
    form: {
      title: "Signature Audio ilgi listesine katılın.",
      description:
        "İletişim bilgilerinizi bırakın ve müşteri, distribütör, montaj noktası veya potansiyel iş ortağı olarak ilgilenip ilgilenmediğinizi belirtin.",
    },
  },
}

// ─── Decorative audio wave bar heights ───────────────────────────────────────

const waveHeights = [14, 26, 40, 34, 56, 72, 52, 66, 82, 60, 70, 48, 40, 54, 36, 22]

// ─── Icon map for value cards ─────────────────────────────────────────────────

const soundCardIcons = [Music, Layers, Wind, BookOpen]

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  return {
    title: content[locale].meta.title,
    description: content[locale].meta.description,
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function SignatureAudioSeriesPage({ params }: PageProps) {
  const { locale } = await params
  const c = content[locale]

  return (
    <main>
      {/* 1. Hero */}
      <section className="relative border-b border-border/30 bg-background pb-28 pt-36">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Deep indigo crown glow — more dramatic than other product pages */}
          <div
            className="absolute inset-0"
            style={{ background: "oklch(0.09 0.015 245 / 0.5)" }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-5%,oklch(0.22_0.08_245_/_0.50),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_40%,oklch(0.70_0.12_65_/_0.05),transparent)]" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze to-transparent opacity-30" />
        </div>

        <div className="section-container relative">
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-bronze/30 px-5 py-1.5 text-[11px] font-medium uppercase tracking-[0.3em] text-bronze/70">
              {c.hero.badge}
            </span>

            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-bronze/30" />
              <span className="text-xs font-medium uppercase tracking-[0.4em] text-bronze/50">
                {c.hero.eyebrow}
              </span>
              <span className="h-px w-12 bg-bronze/30" />
            </div>

            {/* Title */}
            <h1 className="font-heading text-5xl font-bold leading-[1.08] tracking-tight md:text-6xl lg:text-7xl pb-[0.14em]">
              {c.hero.title}
            </h1>

            {/* Subtitle */}
            <p className="mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              {c.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="#interest-form"
                className="inline-flex items-center rounded-sm border border-bronze bg-bronze px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-bronze/90 hover:shadow-[0_0_32px_oklch(0.70_0.12_65_/_0.40)]"
              >
                {c.hero.primaryCta}
              </a>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center rounded-sm border border-border/60 px-8 py-3.5 text-sm font-semibold text-foreground/80 transition-all hover:border-bronze/40 hover:text-bronze"
              >
                {c.hero.secondaryCta}
              </Link>
            </div>

            {/* Audio wave decoration */}
            <div className="flex items-center justify-center gap-[3px] pt-6 opacity-40">
              {waveHeights.map((h, i) => (
                <div
                  key={i}
                  className="w-[2px] rounded-full bg-bronze"
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. R&D Phase */}
      <section className="border-t border-border/30 py-20">
        <div className="section-container">
          <div className="mx-auto max-w-3xl space-y-8">
            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {c.rd.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-bronze/25 px-4 py-1 text-[11px] font-medium uppercase tracking-[0.25em] text-bronze/60"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Heading + text with left accent */}
            <div className="border-l-2 border-bronze/20 pl-7 space-y-4">
              <h2 className="font-heading text-2xl font-bold leading-[1.15] tracking-tight md:text-3xl pb-[0.1em]">
                {c.rd.heading}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                {c.rd.text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Sound Matters */}
      <section className="border-t border-border/30 py-28">
        <div className="section-container space-y-16">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-bronze/30" />
              <span className="text-xs font-medium uppercase tracking-[0.35em] text-bronze/50">
                {locale === "tr" ? "Vizyon" : "Vision"}
              </span>
              <span className="h-px w-10 bg-bronze/30" />
            </div>
            <h2 className="font-heading text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl pb-[0.1em]">
              {c.whySound.heading}
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {c.whySound.text}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {c.whySound.cards.map((card, i) => {
              const Icon = soundCardIcons[i]
              return (
                <div
                  key={i}
                  className="glass-card rounded-sm p-8 space-y-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-bronze/20"
                    style={{ background: "oklch(0.70 0.12 65 / 0.06)" }}
                  >
                    <Icon className="h-4 w-4 text-bronze/60" />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-foreground leading-[1.3]">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{card.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. Premium Audio Architecture */}
      <section className="border-t border-border/30 py-28">
        <div className="section-container space-y-14">
          <div className="mx-auto max-w-3xl space-y-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-bronze/30" />
              <span className="text-xs font-medium uppercase tracking-[0.35em] text-bronze/50">
                {locale === "tr" ? "Mimari" : "Architecture"}
              </span>
            </div>
            <h2 className="font-heading text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl pb-[0.1em]">
              {c.architecture.heading}
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {c.architecture.text}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {c.architecture.pillars.map((pillar, i) => (
              <div key={i} className="glass-card rounded-sm p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-bronze/30 tabular-nums">0{i + 1}</span>
                  <span className="h-px flex-1 bg-bronze/10" />
                </div>
                <h3 className="font-heading text-sm font-semibold text-foreground leading-[1.3]">
                  {pillar.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Inspired by Anatolia */}
      <section className="border-t border-border/30 py-28">
        <div className="section-container">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            {/* Text */}
            <div className="space-y-7">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-bronze/30" />
                  <span className="text-xs font-medium uppercase tracking-[0.35em] text-bronze/50">
                    {locale === "tr" ? "İlham" : "Inspiration"}
                  </span>
                </div>
                <h2 className="font-heading text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl pb-[0.1em]">
                  {c.anatolia.heading}
                </h2>
              </div>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                {c.anatolia.text}
              </p>

              {/* Manifesto keywords */}
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {(locale === "tr"
                  ? ["Ritim", "Doku", "Yolculuk", "Hafıza", "Atmosfer"]
                  : ["Rhythm", "Texture", "Journey", "Memory", "Atmosphere"]
                ).map((word) => (
                  <span
                    key={word}
                    className="text-xs font-medium uppercase tracking-[0.3em] text-bronze/40"
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>

            {/* Decorative — concentric sound rings */}
            <div className="flex items-center justify-center py-8">
              <div className="relative flex h-64 w-64 items-center justify-center md:h-80 md:w-80">
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <div className="absolute h-[280px] w-[280px] rounded-full border border-bronze/6 md:h-[340px] md:w-[340px]" />
                  <div className="absolute h-[210px] w-[210px] rounded-full border border-bronze/10 md:h-[260px] md:w-[260px]" />
                  <div className="absolute h-[145px] w-[145px] rounded-full border border-bronze/15 md:h-[180px] md:w-[180px]" />
                  <div className="absolute h-[88px] w-[88px] rounded-full border border-bronze/20 md:h-[110px] md:w-[110px]" />
                  <div
                    className="absolute h-[44px] w-[44px] rounded-full border border-bronze/30 md:h-[56px] md:w-[56px]"
                    style={{ background: "oklch(0.70 0.12 65 / 0.04)" }}
                  />
                </div>
                <div
                  className="relative h-5 w-5 rounded-full"
                  style={{ background: "oklch(0.70 0.12 65 / 0.50)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Early Partnership CTA */}
      <section className="border-t border-border/30 py-28">
        <div className="section-container">
          <div
            className="relative overflow-hidden rounded-sm border border-bronze/20 px-10 py-16 text-center md:px-20 md:py-20"
            style={{ background: "oklch(0.09 0.015 245 / 0.4)" }}
          >
            {/* Ring decorations */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="absolute h-[700px] w-[700px] rounded-full border border-bronze/5" />
              <div className="absolute h-[500px] w-[500px] rounded-full border border-bronze/7" />
              <div className="absolute h-[320px] w-[320px] rounded-full border border-bronze/10" />
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_50%,oklch(0.70_0.12_65_/_0.05),transparent)]" />

            {/* Content */}
            <div className="relative mx-auto max-w-2xl space-y-10">
              <div className="space-y-5">
                <h2 className="font-heading text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl pb-[0.1em]">
                  {c.partnership.heading}
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  {c.partnership.text}
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href={`/${locale}/contact`}
                  className="rounded-sm border border-bronze bg-bronze px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-bronze/90 hover:shadow-[0_0_28px_oklch(0.70_0.12_65_/_0.35)]"
                >
                  {c.partnership.primaryCta}
                </Link>
                <Link
                  href={`/${locale}/contact`}
                  className="rounded-sm border border-border/60 px-7 py-3 text-sm font-semibold text-foreground/80 transition-all hover:border-bronze/40 hover:text-bronze"
                >
                  {c.partnership.secondaryCta}
                </Link>
                <a
                  href="#interest-form"
                  className="rounded-sm border border-border/60 px-7 py-3 text-sm font-semibold text-foreground/80 transition-all hover:border-bronze/40 hover:text-bronze"
                >
                  {c.partnership.tertiaryCta}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Interest Form */}
      <section id="interest-form" className="border-t border-border/30 py-28">
        <div className="section-container">
          <div className="mx-auto max-w-2xl">
            <div className="space-y-10">
              {/* Heading */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-bronze/30" />
                  <span className="text-xs font-medium uppercase tracking-[0.35em] text-bronze/50">
                    {locale === "tr" ? "İlgi Listesi" : "Interest List"}
                  </span>
                </div>
                <h2 className="font-heading text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl pb-[0.1em]">
                  {c.form.title}
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {c.form.description}
                </p>
              </div>

              {/* Form */}
              <div className="glass-card rounded-sm p-8 md:p-10">
                <SignatureInterestForm locale={locale} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
