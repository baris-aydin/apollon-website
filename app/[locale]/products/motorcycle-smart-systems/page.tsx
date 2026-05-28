import type { Metadata } from "next"
import Link from "next/link"
import { Check, ChevronRight } from "lucide-react"
import { type Locale } from "@/lib/i18n"

type PageProps = { params: Promise<{ locale: Locale }> }

// ─── Types ───────────────────────────────────────────────────────────────────

type FeatureCard = {
  title: string
  text: string
}

type ProductCard = {
  slug: string
  title: string
  category: string
  description: string
  features: string[]
  cta: string
}

type UseCase = {
  label: string
  text: string
}

type PageContent = {
  meta: { title: string; description: string }
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    primaryCta: string
    secondaryCta: string
  }
  motoplay: {
    heading: string
    intro: string
    features: FeatureCard[]
  }
  products: ProductCard[]
  useCases: {
    heading: string
    cases: UseCase[]
  }
  inquiry: {
    heading: string
    text: string
    primaryCta: string
    secondaryCta: string
    tertiaryCta: string
  }
}

// ─── Content ─────────────────────────────────────────────────────────────────

const content: Record<Locale, PageContent> = {
  en: {
    meta: {
      title: "Motorcycle Smart Systems | Apollon Entertainment Systems",
      description:
        "Explore Apollon motorcycle smart display and dashcam systems with wireless CarPlay, Android Auto, DVR recording, Bluetooth audio, navigation, and rider-focused features.",
    },
    hero: {
      eyebrow: "MOTORCYCLE SMART SYSTEMS",
      title: "Redesign the way you ride.",
      subtitle:
        "Smart motorcycle display and camera systems designed to bring wireless CarPlay, Android Auto, navigation, recording, Bluetooth audio, and riding-focused control into one connected experience.",
      primaryCta: "Explore Motorcycle Systems",
      secondaryCta: "Product Inquiry",
    },
    motoplay: {
      heading: "One connected cockpit for the road.",
      intro:
        "Apollon motorcycle smart systems are designed to simplify the riding experience with display, navigation, media, communication, camera, and monitoring features built around the rider.",
      features: [
        {
          title: "Wireless CarPlay",
          text: "Access maps, music, calls, and familiar iPhone features through a motorcycle-friendly display experience.",
        },
        {
          title: "Android Auto",
          text: "Bring navigation, media, and smart Android connectivity into your ride.",
        },
        {
          title: "Camera and DVR support",
          text: "Selected systems support camera input and DVR-style recording for added visibility and riding confidence.",
        },
        {
          title: "Bluetooth audio",
          text: "Connect with helmet audio or Bluetooth earphones for music, calls, and voice guidance.",
        },
        {
          title: "Tire pressure monitoring",
          text: "Supported models can help riders monitor tire pressure and improve riding awareness.",
        },
        {
          title: "Waterproof riding design",
          text: "Built around motorcycle use cases with weather-aware design and rider-focused control.",
        },
      ],
    },
    products: [
      {
        slug: "mdc-smart02",
        title: "MDC-SMART02",
        category: "Motorcycle Smart Display",
        description:
          "A motorcycle smart display system with wireless CarPlay, Android Auto, a 6.2-inch high-brightness IPS screen, optional front/rear BSD camera system, tire pressure monitoring, stable power architecture, and TF card support.",
        features: [
          "Wireless Apple CarPlay",
          "Android Auto",
          "6.2-inch high-brightness IPS display",
          "Optional front/rear BSD camera system",
          "Tire pressure monitoring",
          "TF card support",
        ],
        cta: "View Product",
      },
      {
        slug: "mdc-plus02",
        title: "MDC-PLUS02",
        category: "Motorcycle Smart Display + DVR",
        description:
          "A connected motorcycle display and DVR-focused system designed for wireless CarPlay, Android Auto, front/rear DVR recording, Bluetooth helmet or earphone support, music and call management, day/night display mode, and touch control.",
        features: [
          "Wireless CarPlay & Android Auto",
          "Front/rear DVR recording",
          "Bluetooth helmet / earphone support",
          "Music and call management",
          "Day/night display mode",
          "Touch interface",
        ],
        cta: "View Product",
      },
      {
        slug: "moto-dash-cam-tr-v2",
        title: "Moto Dash Cam TR V2",
        category: "Motorcycle Dashcam",
        description:
          "A compact motorcycle dashcam solution with Full HD 1080P recording, Wi-Fi mobile app connection, IP66 water resistance, loop recording, and TF card storage.",
        features: [
          "Compact motorcycle camera design",
          "Full HD 1080P recording",
          "Wi-Fi mobile app connection",
          "IP66 water resistance",
          "Loop recording",
          "TF card storage",
        ],
        cta: "View Product",
      },
    ],
    useCases: {
      heading: "Built for different riding styles.",
      cases: [
        {
          label: "City",
          text: "For daily commuting, urban navigation, quick route changes, calls, and safer awareness in traffic.",
        },
        {
          label: "Touring",
          text: "For longer journeys where navigation, music, camera recording, Bluetooth audio, and riding convenience matter more.",
        },
        {
          label: "Adventure",
          text: "For riders who need weather-aware design, visibility, monitoring, and reliable access to key information on the road.",
        },
      ],
    },
    inquiry: {
      heading: "Need help choosing a motorcycle system?",
      text: "Tell us your motorcycle model, riding style, and preferred features. Apollon can help you compare display, camera, DVR, and connectivity options.",
      primaryCta: "Product Inquiry",
      secondaryCta: "Contact Us",
      tertiaryCta: "Installation / Dealer Info",
    },
  },
  tr: {
    meta: {
      title: "Motosiklet Akıllı Sistemleri | Apollon Entertainment Systems",
      description:
        "Kablosuz CarPlay, Android Auto, DVR kayıt, Bluetooth ses, navigasyon ve sürüş odaklı özellikler sunan Apollon motosiklet akıllı ekran ve kamera sistemlerini keşfedin.",
    },
    hero: {
      eyebrow: "MOTOSİKLET AKILLI SİSTEMLERİ",
      title: "Sürüşünüzü yeniden tasarlayın.",
      subtitle:
        "Kablosuz CarPlay, Android Auto, navigasyon, kayıt, Bluetooth ses ve sürüş odaklı kontrol özelliklerini tek bir bağlantılı deneyimde birleştiren akıllı motosiklet ekran ve kamera sistemleri.",
      primaryCta: "Motosiklet Sistemlerini Keşfet",
      secondaryCta: "Ürün Bilgisi Al",
    },
    motoplay: {
      heading: "Yol için bağlantılı bir kokpit.",
      intro:
        "Apollon motosiklet akıllı sistemleri; ekran, navigasyon, medya, iletişim, kamera ve takip özelliklerini sürücü odaklı bir deneyimde bir araya getirmek için tasarlanır.",
      features: [
        {
          title: "Kablosuz CarPlay",
          text: "Haritalar, müzik, aramalar ve tanıdık iPhone özelliklerine motosiklet kullanımına uygun ekran deneyimiyle erişin.",
        },
        {
          title: "Android Auto",
          text: "Navigasyon, medya ve akıllı Android bağlantı özelliklerini sürüşünüze taşıyın.",
        },
        {
          title: "Kamera ve DVR desteği",
          text: "Seçili sistemler, daha fazla görüş ve sürüş güveni için kamera girişi ve DVR tarzı kayıt desteği sunar.",
        },
        {
          title: "Bluetooth ses",
          text: "Müzik, arama ve sesli yönlendirme için kask ses sistemi veya Bluetooth kulaklıklarla bağlantı kurun.",
        },
        {
          title: "Lastik basınç takibi",
          text: "Desteklenen modeller, sürücülerin lastik basıncını takip etmesine ve sürüş farkındalığını artırmasına yardımcı olabilir.",
        },
        {
          title: "Suya dayanıklı sürüş tasarımı",
          text: "Hava koşullarını dikkate alan tasarım ve sürüş odaklı kontrol yapısıyla motosiklet kullanım senaryoları için geliştirilmiştir.",
        },
      ],
    },
    products: [
      {
        slug: "mdc-smart02",
        title: "MDC-SMART02",
        category: "Motosiklet Akıllı Ekran Sistemi",
        description:
          "Kablosuz CarPlay, Android Auto, 6.2 inç yüksek parlaklıklı IPS ekran, opsiyonel ön/arka BSD kamera sistemi, lastik basınç takibi, stabil güç mimarisi ve TF kart desteği sunan motosiklet akıllı ekran sistemi.",
        features: [
          "Kablosuz Apple CarPlay",
          "Android Auto",
          "6.2 inç yüksek parlaklıklı IPS ekran",
          "Opsiyonel ön/arka BSD kamera sistemi",
          "Lastik basınç takibi",
          "TF kart desteği",
        ],
        cta: "Ürünü İncele",
      },
      {
        slug: "mdc-plus02",
        title: "MDC-PLUS02",
        category: "Motosiklet Akıllı Ekran + DVR",
        description:
          "Kablosuz CarPlay, Android Auto, ön/arka DVR kaydı, Bluetooth kask veya kulaklık desteği, müzik ve arama yönetimi, gündüz/gece ekran modu ve dokunmatik kontrol için tasarlanan bağlantılı motosiklet ekran sistemi.",
        features: [
          "Kablosuz CarPlay & Android Auto",
          "Ön/arka DVR kaydı",
          "Bluetooth kask / kulaklık desteği",
          "Müzik ve arama yönetimi",
          "Gündüz/gece ekran modu",
          "Dokunmatik arayüz",
        ],
        cta: "Ürünü İncele",
      },
      {
        slug: "moto-dash-cam-tr-v2",
        title: "Moto Dash Cam TR V2",
        category: "Motosiklet Araç Kamerası",
        description:
          "Full HD 1080P kayıt, Wi-Fi mobil uygulama bağlantısı, IP66 suya dayanıklılık, döngüsel kayıt ve TF kart depolama sunan kompakt motosiklet araç kamerası çözümü.",
        features: [
          "Kompakt motosiklet kamera tasarımı",
          "Full HD 1080P kayıt",
          "Wi-Fi mobil uygulama bağlantısı",
          "IP66 suya dayanıklılık",
          "Döngüsel kayıt",
          "TF kart depolama",
        ],
        cta: "Ürünü İncele",
      },
    ],
    useCases: {
      heading: "Farklı sürüş tarzları için tasarlandı.",
      cases: [
        {
          label: "Şehir",
          text: "Günlük ulaşım, şehir içi navigasyon, hızlı rota değişimleri, aramalar ve trafikte daha yüksek farkındalık için.",
        },
        {
          label: "Tur",
          text: "Navigasyon, müzik, kamera kaydı, Bluetooth ses ve sürüş kolaylığının daha önemli olduğu uzun yolculuklar için.",
        },
        {
          label: "Macera",
          text: "Hava koşullarını dikkate alan tasarım, görüş, takip ve yol üzerinde önemli bilgilere güvenilir erişim isteyen sürücüler için.",
        },
      ],
    },
    inquiry: {
      heading: "Doğru motosiklet sistemini seçmek için yardıma mı ihtiyacınız var?",
      text: "Motosiklet modelinizi, sürüş tarzınızı ve istediğiniz özellikleri paylaşın. Apollon ekran, kamera, DVR ve bağlantı seçeneklerini karşılaştırmanıza yardımcı olabilir.",
      primaryCta: "Ürün Bilgisi Al",
      secondaryCta: "İletişime Geç",
      tertiaryCta: "Montaj / Bayi Bilgisi",
    },
  },
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  return {
    title: content[locale].meta.title,
    description: content[locale].meta.description,
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function MotorcycleSmartSystemsPage({ params }: PageProps) {
  const { locale } = await params
  const c = content[locale]

  return (
    <main>
      {/* 1. Hero */}
      <section className="relative border-b border-border/30 bg-background pb-24 pt-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,oklch(0.22_0.08_245_/_0.20),transparent)]" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze to-transparent opacity-20" />
        </div>
        <div className="section-container relative">
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-bronze/40" />
              <span className="text-xs font-medium uppercase tracking-[0.35em] text-bronze/70">
                {c.hero.eyebrow}
              </span>
              <span className="h-px w-10 bg-bronze/40" />
            </div>
            <h1 className="font-heading text-4xl font-bold leading-[1.12] tracking-tight md:text-5xl lg:text-6xl pb-[0.14em]">
              {c.hero.title}
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {c.hero.subtitle}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#products"
                className="inline-flex items-center rounded-sm border border-bronze bg-bronze px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-bronze/90 hover:shadow-[0_0_24px_oklch(0.70_0.12_65_/_0.35)]"
              >
                {c.hero.primaryCta}
              </a>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center rounded-sm border border-border px-7 py-3 text-sm font-semibold text-foreground transition-all hover:border-bronze/40 hover:text-bronze"
              >
                {c.hero.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MotoPlay Feature Grid */}
      <section className="border-t border-border/30 py-24">
        <div className="section-container space-y-14">
          <div className="mx-auto max-w-2xl space-y-5 text-center">
            <h2 className="font-heading text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl pb-[0.1em]">
              {c.motoplay.heading}
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">{c.motoplay.intro}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {c.motoplay.features.map((feature, i) => (
              <div key={i} className="glass-card rounded-sm p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-bronze/35 tabular-nums">
                    0{i + 1}
                  </span>
                  <span className="h-px flex-1 bg-bronze/10" />
                </div>
                <h3 className="font-heading text-sm font-semibold text-foreground leading-[1.3]">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Product Cards */}
      <section id="products" className="border-t border-border/30 py-24">
        <div className="section-container">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {c.products.map((product) => (
              <div
                key={product.slug}
                className="glass-card flex flex-col gap-5 rounded-sm p-6"
              >
                {/* Header */}
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-bronze/50">
                  {product.category}
                </span>

                {/* Title */}
                <h3 className="font-heading text-lg font-semibold text-foreground leading-[1.3]">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-bronze/50" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={`/${locale}/products/motorcycle-smart-systems/${product.slug}`}
                  className="mt-auto flex items-center gap-1.5 text-sm font-medium text-bronze/60 transition-colors hover:text-bronze"
                >
                  <span>{product.cta}</span>
                  <ChevronRight className="h-4 w-4 transition-transform hover:translate-x-0.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Use Cases */}
      <section className="border-t border-border/30 py-24">
        <div className="section-container space-y-12">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-bronze/40" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-bronze/70">
                {locale === "tr" ? "Kullanım Senaryoları" : "Use Cases"}
              </span>
            </div>
            <h2 className="font-heading text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl pb-[0.1em]">
              {c.useCases.heading}
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {c.useCases.cases.map((useCase) => (
              <div
                key={useCase.label}
                className="relative rounded-sm border border-border/60 p-8 space-y-4"
                style={{ background: "oklch(0.22 0.08 245 / 0.08)" }}
              >
                <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-sm">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,oklch(0.70_0.12_65_/_0.04),transparent)]" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-bronze/60">
                  {useCase.label}
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">{useCase.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Inquiry CTA */}
      <section className="border-t border-border/30 py-24">
        <div className="section-container">
          <div className="mx-auto max-w-2xl space-y-10 text-center">
            <div className="space-y-5">
              <h2 className="font-heading text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl pb-[0.1em]">
                {c.inquiry.heading}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">{c.inquiry.text}</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href={`/${locale}/contact`}
                className="rounded-sm border border-bronze bg-bronze px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-bronze/90 hover:shadow-[0_0_24px_oklch(0.70_0.12_65_/_0.3)]"
              >
                {c.inquiry.primaryCta}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="rounded-sm border border-border/60 px-7 py-3 text-sm font-semibold text-foreground transition-all hover:border-bronze/40 hover:text-bronze"
              >
                {c.inquiry.secondaryCta}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="rounded-sm border border-border/60 px-7 py-3 text-sm font-semibold text-foreground transition-all hover:border-bronze/40 hover:text-bronze"
              >
                {c.inquiry.tertiaryCta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
