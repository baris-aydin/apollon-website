import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Check, ChevronRight } from "lucide-react"
import { type Locale } from "@/lib/i18n"
import { Reveal } from "@/components/motion/Reveal"
import { MOTOPLAY_IMAGE_BY_SLUG } from "@/lib/products/motoplay"

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

// ─── Feature Icons (locale-independent) ─────────────────────────────────────

const featureIconData: { icon: string; iconAlt: string }[] = [
  { icon: "/images/motoplay-series/features/wireless-apple-carplay.webp", iconAlt: "Wireless Apple CarPlay" },
  { icon: "/images/motoplay-series/features/android-auto.webp", iconAlt: "Android Auto" },
  { icon: "/images/motoplay-series/features/waterproof-design.webp", iconAlt: "Waterproof Design" },
  { icon: "/images/motoplay-series/features/high-brightness-ips-display.webp", iconAlt: "High-Brightness IPS Display" },
  { icon: "/images/motoplay-series/features/bluetooth-audio.webp", iconAlt: "Bluetooth Audio Connection" },
  { icon: "/images/motoplay-series/features/tire-pressure-monitoring.webp", iconAlt: "Tire Pressure Monitoring Support" },
  { icon: "/images/motoplay-series/features/handlebar-control.webp", iconAlt: "Handlebar Control Support" },
  { icon: "/images/motoplay-series/features/front-rear-camera.webp", iconAlt: "Front and Rear Camera Integration" },
  { icon: "/images/motoplay-series/features/gps-navigation.webp", iconAlt: "GPS / Navigation" },
  { icon: "/images/motoplay-series/features/voice-assistant.webp", iconAlt: "Voice Assistant Support" },
]

// ─── Content ─────────────────────────────────────────────────────────────────

const content: Record<Locale, PageContent> = {
  en: {
    meta: {
      title: "MotoPlay Series | Apollon Entertainment Systems",
      description:
        "Explore Apollon MotoPlay Series — smart motorcycle display and dashcam systems with wireless CarPlay, Android Auto, DVR recording, Bluetooth audio, navigation, and rider-focused features.",
    },
    hero: {
      eyebrow: "MOTOPLAY SERIES",
      title: "Redesign the way you ride.",
      subtitle:
        "Smart motorcycle display and camera systems designed to bring wireless CarPlay, Android Auto, navigation, recording, Bluetooth audio, and riding-focused control into one connected experience.",
      primaryCta: "Explore MotoPlay Series",
      secondaryCta: "Product Inquiry",
    },
    motoplay: {
      heading: "One connected cockpit for the road.",
      intro:
        "Apollon MotoPlay Series is designed to simplify the riding experience with display, navigation, media, communication, camera, and monitoring features built around the rider.",
      features: [
        {
          title: "Wireless Apple CarPlay",
          text: "Access maps, music, calls, and compatible iPhone features through a motorcycle-focused display.",
        },
        {
          title: "Android Auto",
          text: "Bring navigation, media, communication, and supported Android functionality into the riding experience.",
        },
        {
          title: "Waterproof Design",
          text: "Designed for motorcycle use with weather-aware construction suitable for changing riding conditions.",
        },
        {
          title: "High-Brightness IPS Display",
          text: "A clear, high-brightness IPS screen designed to remain readable across varied daylight conditions.",
        },
        {
          title: "Bluetooth Audio Connection",
          text: "Connect compatible helmet audio or Bluetooth earphones for calls, music, and guidance.",
        },
        {
          title: "Tire Pressure Monitoring Support",
          text: "Monitor supported tire-pressure data and improve awareness during everyday rides.",
        },
        {
          title: "Handlebar Control Support",
          text: "Access compatible display and media functions using supported handlebar controls.",
        },
        {
          title: "Front & Rear Camera Integration",
          text: "Connect supported front and rear cameras for improved visibility and riding documentation.",
        },
        {
          title: "GPS / Navigation",
          text: "Follow navigation guidance on the display for urban commuting, touring and longer journeys — through your connected smartphone, or the model’s own GPS where fitted.",
        },
        {
          title: "Voice Assistant Support",
          text: "Access supported voice-controlled functions while minimizing manual interaction during the ride.",
        },
      ],
    },
    products: [
      {
        slug: "mdc-smart02",
        title: "APOLLON RIDE VISION",
        category: "1080P Camera Motorcycle Riding Display",
        description:
          "A smart motorcycle riding system combining Apple CarPlay, Android Auto, navigation support and an integrated 1080P riding camera in a single water-resistant device.",
        features: [
          "1080P Camera",
          "CarPlay",
          "Android Auto",
          "Navigation",
        ],
        cta: "View Product",
      },
      {
        slug: "mdc-plus02",
        title: "APOLLON RIDE ONE",
        category: "5.5\" Smart Motorcycle Riding Display",
        description:
          "A 5.5-inch IPS smart riding display for motorcycle use, bringing Apple CarPlay, Android Auto, smartphone navigation and Bluetooth to a water-resistant body.",
        features: [
          "5.5\" IPS",
          "CarPlay",
          "Android Auto",
          "Navigation",
        ],
        cta: "View Product",
      },
      {
        slug: "moto-dash-cam-tr-v2",
        title: "APOLLON RX ONE ZM3",
        category: "4K Smart Motorcycle Camera",
        description:
          "A compact smart riding camera combining 4K video recording, a 1.5\" IPS display, GPS, Wi-Fi and Bluetooth 5.0 with G-sensor protection and parking surveillance.",
        features: [
          "4K",
          "GPS",
          "Wi-Fi",
          "Bluetooth 5.0",
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
      title: "MotoPlay Series | Apollon Entertainment Systems",
      description:
        "Kablosuz CarPlay, Android Auto, DVR kayıt, Bluetooth ses, navigasyon ve sürüş odaklı özellikler sunan Apollon MotoPlay Series motosiklet akıllı ekran ve kamera sistemlerini keşfedin.",
    },
    hero: {
      eyebrow: "MOTOPLAY SERIES",
      title: "Sürüşünüzü yeniden tasarlayın.",
      subtitle:
        "Kablosuz CarPlay, Android Auto, navigasyon, kayıt, Bluetooth ses ve sürüş odaklı kontrol özelliklerini tek bir bağlantılı deneyimde birleştiren akıllı motosiklet ekran ve kamera sistemleri.",
      primaryCta: "MotoPlay Series'i Keşfet",
      secondaryCta: "Ürün Bilgisi Al",
    },
    motoplay: {
      heading: "Yol için bağlantılı bir kokpit.",
      intro:
        "Apollon MotoPlay Series; ekran, navigasyon, medya, iletişim, kamera ve takip özelliklerini sürücü odaklı bir deneyimde bir araya getirmek için tasarlanmıştır.",
      features: [
        {
          title: "Kablosuz Apple CarPlay",
          text: "Haritalar, müzik, aramalar ve uyumlu iPhone özelliklerine motosiklet odaklı ekran deneyimiyle erişin.",
        },
        {
          title: "Android Auto",
          text: "Navigasyon, medya, iletişim ve desteklenen Android işlevlerini sürüş deneyimine taşıyın.",
        },
        {
          title: "Su Geçirmez Tasarım",
          text: "Değişen yol koşullarına uygun hava duyarlı yapısıyla motosiklet kullanımı için geliştirilmiştir.",
        },
        {
          title: "Yüksek Parlaklıklı IPS Ekran",
          text: "Farklı gün ışığı koşullarında okunabilirliği korumak için tasarlanmış net, yüksek parlaklıklı IPS ekran.",
        },
        {
          title: "Bluetooth Ses Bağlantısı",
          text: "Arama, müzik ve navigasyon yönlendirmesi için uyumlu kask sesi veya Bluetooth kulaklıkla bağlantı kurun.",
        },
        {
          title: "Lastik Basıncı İzleme Desteği",
          text: "Desteklenen lastik basıncı verilerini izleyin ve günlük sürüşlerde farkındalığı artırın.",
        },
        {
          title: "Gidon Kontrol Desteği",
          text: "Desteklenen gidon kontrolleriyle uyumlu ekran ve medya işlevlerine erişin.",
        },
        {
          title: "Ön & Arka Kamera Entegrasyonu",
          text: "Geliştirilmiş görüş ve sürüş belgesi kaydı için desteklenen ön ve arka kameraları bağlayın.",
        },
        {
          title: "GPS / Navigasyon",
          text: "Şehir içi ulaşım, tur ve uzun yolculuklarda navigasyon yönlendirmesini ekrandan takip edin — bağlı akıllı telefonunuz veya modelin kendi GPS’i üzerinden.",
        },
        {
          title: "Sesli Asistan Desteği",
          text: "Sürüş sırasında manuel etkileşimi en aza indirirken desteklenen sesle kontrol işlevlerine erişin.",
        },
      ],
    },
    products: [
      {
        slug: "mdc-smart02",
        title: "APOLLON RIDE VISION",
        category: "1080P Kameralı Motosiklet Sürüş Ekranı",
        description:
          "Apple CarPlay, Android Auto, navigasyon desteği ve entegre 1080P sürüş kamerasını suya dayanıklı tek bir cihazda bir araya getiren akıllı motosiklet sürüş sistemi.",
        features: [
          "1080P Kamera",
          "CarPlay",
          "Android Auto",
          "Navigasyon",
        ],
        cta: "Ürünü İncele",
      },
      {
        slug: "mdc-plus02",
        title: "APOLLON RIDE ONE",
        category: "5.5\" Motosiklet Akıllı Sürüş Ekranı",
        description:
          "Motosiklet kullanımı için geliştirilmiş; Apple CarPlay, Android Auto, bağlı telefon üzerinden navigasyon ve Bluetooth sunan, suya dayanıklı gövdeli 5.5 inç IPS akıllı sürüş ekranı.",
        features: [
          "5.5\" IPS",
          "CarPlay",
          "Android Auto",
          "Navigasyon",
        ],
        cta: "Ürünü İncele",
      },
      {
        slug: "moto-dash-cam-tr-v2",
        title: "APOLLON RX ONE ZM3",
        category: "4K Akıllı Motosiklet Kamerası",
        description:
          "4K video kaydı, 1.5\" IPS ekran, GPS, Wi-Fi ve Bluetooth 5.0 bağlantısını G-Sensör koruması ve park gözetimiyle bir araya getiren kompakt akıllı sürüş kamerası.",
        features: [
          "4K",
          "GPS",
          "Wi-Fi",
          "Bluetooth 5.0",
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

// ─── Use Case Images ──────────────────────────────────────────────────────────

const useCaseImages: { src: string; alt: string; position?: string }[] = [
  {
    src: "/images/motorcycle-smart-systems/use-cases/city-riding.jpg",
    alt: "Motorcyclist riding through blurred city lights at night",
  },
  {
    src: "/images/motorcycle-smart-systems/use-cases/touring-riding.jpg",
    alt: "Man riding a touring motorcycle on a scenic open road",
  },
  {
    src: "/images/motorcycle-smart-systems/use-cases/adventure-riding.jpg",
    alt: "Rider on a dirt bike navigating rocky mountain terrain",
  },
]

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  return {
    title: content[locale].meta.title,
    description: content[locale].meta.description,
  }
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default async function MotorcycleSmartSystemsPage({ params }: PageProps) {
  const { locale } = await params
  const c = content[locale]

  return (
    <main>
      {/* 1. Hero */}
      <section className="relative bg-background overflow-hidden">
        {/* Background gradients */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_25%_-10%,oklch(0.22_0.08_245_/_0.20),transparent)]" />
        </div>

        {/* Hero image — right side, desktop only */}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] lg:block">
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src="/images/motorcycle-smart-systems/hero/motoplay-hero.png"
              alt="MotoPlay motorcycle display integrated into a connected riding cockpit"
              fill
              priority
              unoptimized
              className="object-cover object-center"
              sizes="(min-width: 1536px) 700px, 46vw"
            />
            {/* Fade left edge into dark background */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-background/25 to-transparent" />
            {/* Subtle dark overlay */}
            <div className="pointer-events-none absolute inset-0 bg-black/20" />
          </div>
        </div>

        <div className="section-container relative">
          <div className="py-28 lg:max-w-[56%]">
            <div className="space-y-8 text-center lg:text-left">
              <div className="flex items-center justify-center gap-3 lg:justify-start">
                <span className="h-px w-10 bg-bronze/40" />
                <span className="text-xs font-medium uppercase tracking-[0.35em] text-bronze/70">
                  {c.hero.eyebrow}
                </span>
                <span className="h-px w-10 bg-bronze/40" />
              </div>
              <h1 className="font-heading text-4xl font-bold leading-[1.12] tracking-tight md:text-5xl lg:text-6xl pb-[0.14em]">
                {c.hero.title}
              </h1>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground lg:mx-0">
                {c.hero.subtitle}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
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
        </div>
      </section>

      {/* 2. MotoPlay Feature Grid */}
      <section className="border-t border-border/30 py-24">
        <div className="section-container space-y-14">
          <Reveal className="mx-auto max-w-2xl space-y-5 text-center">
            <h2 className="font-heading text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl pb-[0.1em]">
              {c.motoplay.heading}
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">{c.motoplay.intro}</p>
          </Reveal>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {c.motoplay.features.map((feature, i) => (
              <Reveal key={i} delay={i * 40}>
                <div className="glass-card rounded-sm overflow-hidden h-full flex flex-col">
                  {/* Icon container */}
                  <div className="flex items-center justify-center p-5 border-b border-border/15">
                    <div
                      className="relative flex h-[88px] w-[88px] shrink-0 items-center justify-center overflow-hidden rounded-sm border border-bronze/20"
                      style={{ background: "radial-gradient(circle at center, oklch(0.14 0.02 245), oklch(0.09 0.015 245))" }}
                    >
                      <Image
                        src={featureIconData[i].icon}
                        alt=""
                        fill
                        quality={92}
                        className="object-contain p-[3px]"
                        sizes="88px"
                      />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="p-4 space-y-2.5 flex-1 flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-bronze/35 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="h-px flex-1 bg-bronze/10" />
                    </div>
                    <h3 className="font-heading text-xs font-semibold text-foreground leading-[1.35]">
                      {feature.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-muted-foreground">{feature.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Product Cards */}
      <section id="products" className="border-t border-border/30 py-24">
        <div className="section-container">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {c.products.map((product, i) => (
              <Reveal key={product.slug} delay={i * 80}>
              <div
                className="glass-card flex flex-col gap-5 rounded-sm p-6 h-full"
              >
                {/* Product image */}
                {MOTOPLAY_IMAGE_BY_SLUG[product.slug] && (
                  <div
                    className="relative aspect-[16/10] overflow-hidden rounded-sm border border-border/40"
                    style={{ background: "#ffffff" }}
                  >
                    <Image
                      src={MOTOPLAY_IMAGE_BY_SLUG[product.slug]}
                      alt={product.title}
                      fill
                      unoptimized
                      className="object-contain p-2"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                )}

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
                  href={`/${locale}/products/motorcycle/${product.slug}`}
                  className="mt-auto flex items-center gap-1.5 text-sm font-medium text-bronze/60 transition-colors hover:text-bronze"
                >
                  <span>{product.cta}</span>
                  <ChevronRight className="h-4 w-4 transition-transform hover:translate-x-0.5" />
                </Link>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Use Cases */}
      <section className="border-t border-border/30 py-24">
        <div className="section-container space-y-12">
          <Reveal className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-bronze/40" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-bronze/70">
                {locale === "tr" ? "Kullanım Senaryoları" : "Use Cases"}
              </span>
            </div>
            <h2 className="font-heading text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl pb-[0.1em]">
              {c.useCases.heading}
            </h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {c.useCases.cases.map((useCase, useCaseIdx) => (
              <Reveal key={useCase.label} delay={useCaseIdx * 80}>
                <div
                  className="relative rounded-sm border border-border/60 overflow-hidden h-full"
                  style={{ background: "oklch(0.22 0.08 245 / 0.08)" }}
                >
                  <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-sm">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,oklch(0.70_0.12_65_/_0.04),transparent)]" />
                  </div>
                  <div className="relative h-48 w-full border-b border-border/20">
                    <Image
                      src={useCaseImages[useCaseIdx].src}
                      alt={useCaseImages[useCaseIdx].alt}
                      fill
                      className="object-cover"
                      style={{ objectPosition: useCaseImages[useCaseIdx].position ?? "center" }}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 to-black/50" />
                  </div>
                  <div className="relative z-10 p-8 space-y-4">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-bronze/60">
                      {useCase.label}
                    </span>
                    <p className="text-sm leading-relaxed text-muted-foreground">{useCase.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Inquiry CTA */}
      <section className="border-t border-border/30 py-24">
        <div className="section-container">
          <Reveal className="mx-auto max-w-2xl space-y-10 text-center">
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
          </Reveal>
        </div>
      </section>
    </main>
  )
}
