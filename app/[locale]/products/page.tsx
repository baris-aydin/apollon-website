import Link from "next/link"
import { Bike, Car, type LucideIcon } from "lucide-react"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { LargeCategoryCard } from "@/components/products/LargeCategoryCard"
import { FeaturedProductCard } from "@/components/products/FeaturedProductCard"
import { type Locale } from "@/lib/i18n"
import { Reveal } from "@/components/motion/Reveal"
import { CAR_GROUP_LABELS, getCarProduct } from "@/lib/products/car"

type ProductsPageProps = {
  params: Promise<{ locale: Locale }>
}

// ─── Content types ──────────────────────────────────────────────────────────

type CategoryItem = {
  title: string
  description: string
  features: string[]
  href: string
  icon: LucideIcon
  status: "available" | "coming-soon"
  ctaLabel: string
  badge?: string
}

type ProductItem = {
  name: string
  category: string
  description: string
  href: string
  status: "available" | "coming-soon" | "new"
  ctaLabel: string
}

type ValueItem = {
  title: string
  body: string
}

type PageContent = {
  heroEyebrow: string
  heroTitle: string
  heroSubtitle: string
  heroPrimary: string
  heroSecondary: string
  categoriesEyebrow: string
  categoriesTitle: string
  categories: CategoryItem[]
  featuredEyebrow: string
  featuredTitle: string
  products: ProductItem[]
  viewProductLabel: string
  whyTitle: string
  whyIntro: string
  values: ValueItem[]
  inquiryTitle: string
  inquiryBody: string
  inquiryPrimary: string
  inquirySecondary: string
  inquiryTertiary: string
}

// ─── Static content ──────────────────────────────────────────────────────────

const content: Record<Locale, PageContent> = {
  en: {
    heroEyebrow: "APOLLON PRODUCT CATALOG",
    heroTitle: "Premium mobility technology for motorcycles and cars.",
    heroSubtitle:
      "Two product families — the MotoPlay Series for motorcycles and Car Technology Systems for connected cameras, 360° vision and premium multimedia.",
    heroPrimary: "Explore Categories",
    heroSecondary: "Product Inquiry",
    categoriesEyebrow: "Product Families",
    categoriesTitle: "Two product families. One mobility vision.",
    categories: [
      {
        title: "Motorcycle",
        description:
          "The MotoPlay Series — riding-focused smart displays and cameras that bring wireless CarPlay, Android Auto, navigation and recording to motorcycles.",
        features: [
          "Wireless Apple CarPlay",
          "Android Auto",
          "Water resistant displays",
          "Mini dash camera option",
          "GPS and Bluetooth",
        ],
        href: "/products/motorcycle",
        icon: Bike,
        status: "available",
        ctaLabel: "Explore MotoPlay Series",
      },
      {
        title: "Car Technology Systems",
        description:
          "One unified automotive family: connected dash cameras, multi-channel and 360° vision systems, and Qualcomm-based premium multimedia platforms.",
        features: [
          "4G connected cameras",
          "Multi-channel recording",
          "360° camera system",
          "Qualcomm multimedia platforms",
          "Wireless CarPlay / Android Auto",
        ],
        href: "/products/car",
        icon: Car,
        status: "available",
        ctaLabel: "Explore Car Systems",
      },
    ],
    featuredEyebrow: "Featured Products",
    featuredTitle: "Selected from the Apollon catalog.",
    products: [
      {
        name: "APOLLON RIDE VISION",
        category: "MotoPlay Series",
        description:
          "A smart motorcycle riding display with Apple CarPlay, Android Auto, smartphone navigation and an integrated 1080P riding camera.",
        href: "/products/motorcycle/mdc-smart02",
        status: "available",
        ctaLabel: "View Product",
      },
      {
        name: "APOLLON RX ONE ZM3",
        category: "MotoPlay Series",
        description:
          "A 4K smart motorcycle camera with a 1.5\" IPS display, GPS, Wi-Fi and Bluetooth 5.0, plus loop recording, a G-sensor and parking surveillance.",
        href: "/products/motorcycle/moto-dash-cam-tr-v2",
        status: "available",
        ctaLabel: "View Product",
      },
    ],
    viewProductLabel: "View Product",
    whyTitle: "Why Apollon?",
    whyIntro:
      "Apollon is built as more than a product supplier. It is a premium mobility technology brand designed for drivers, riders, installers, and distributors who expect refined products, clear communication, and long-term product direction.",
    values: [
      {
        title: "Premium product direction",
        body: "A focused catalog built around modern mobility: screens, safety, motorcycle technology, and future sound experiences.",
      },
      {
        title: "Compatibility-first approach",
        body: "For vehicle-specific systems, the right product depends on exact model, year, trim, and factory system. Apollon guides customers through compatibility before purchase.",
      },
      {
        title: "Distributor and installer focus",
        body: "The website is designed to support product inquiries, installer communication, and distributor partnerships across Turkey.",
      },
      {
        title: "Brand with cultural character",
        body: "Apollon combines modern engineering, global production partnerships, and cultural inspiration into a distinctive mobility technology identity.",
      },
    ],
    inquiryTitle: "Need help choosing the right product?",
    inquiryBody:
      "Tell us your vehicle, motorcycle, or business need. Apollon can help with product information, compatibility questions, installation guidance, and distributor opportunities.",
    inquiryPrimary: "Product Inquiry",
    inquirySecondary: "Contact Us",
    inquiryTertiary: "Become a Distributor",
  },
  tr: {
    heroEyebrow: "APOLLON ÜRÜN KATALOĞU",
    heroTitle: "Motosikletler ve otomobiller için premium mobilite teknolojileri.",
    heroSubtitle:
      "İki ürün ailesi — motosikletler için MotoPlay Series ve bağlantılı kameralar, 360° görüş ve premium multimedya için Otomobil Teknoloji Sistemleri.",
    heroPrimary: "Kategorileri Keşfet",
    heroSecondary: "Ürün Bilgisi Al",
    categoriesEyebrow: "Ürün Aileleri",
    categoriesTitle: "İki ürün ailesi. Tek mobilite vizyonu.",
    categories: [
      {
        title: "Motosiklet",
        description:
          "MotoPlay Series — motosikletlere kablosuz CarPlay, Android Auto, navigasyon ve kayıt özelliklerini taşıyan sürüş odaklı akıllı ekranlar ve kameralar.",
        features: [
          "Kablosuz Apple CarPlay",
          "Android Auto",
          "Suya dayanıklı ekranlar",
          "Mini araç kamerası seçeneği",
          "GPS ve Bluetooth",
        ],
        href: "/products/motorcycle",
        icon: Bike,
        status: "available",
        ctaLabel: "MotoPlay Series'i Keşfet",
      },
      {
        title: "Otomobil Teknoloji Sistemleri",
        description:
          "Tek bir otomotiv ailesi: bağlantılı araç kameraları, çok kanallı ve 360° görüş sistemleri ve Qualcomm tabanlı premium multimedya platformları.",
        features: [
          "4G bağlantılı kameralar",
          "Çok kanallı kayıt",
          "360° kamera sistemi",
          "Qualcomm multimedya platformları",
          "Kablosuz CarPlay / Android Auto",
        ],
        href: "/products/car",
        icon: Car,
        status: "available",
        ctaLabel: "Otomobil Sistemlerini Keşfet",
      },
    ],
    featuredEyebrow: "Öne Çıkan Ürünler",
    featuredTitle: "Apollon kataloğundan seçmeler.",
    products: [
      {
        name: "APOLLON RIDE VISION",
        category: "MotoPlay Series",
        description:
          "Apple CarPlay, Android Auto, akıllı telefon üzerinden navigasyon ve entegre 1080P sürüş kamerası sunan akıllı motosiklet sürüş ekranı.",
        href: "/products/motorcycle/mdc-smart02",
        status: "available",
        ctaLabel: "Ürünü İncele",
      },
      {
        name: "APOLLON RX ONE ZM3",
        category: "MotoPlay Series",
        description:
          "1.5\" IPS ekran, GPS, Wi-Fi ve Bluetooth 5.0 bağlantısının yanı sıra döngüsel kayıt, G-sensör ve park gözetimi sunan 4K akıllı motosiklet kamerası.",
        href: "/products/motorcycle/moto-dash-cam-tr-v2",
        status: "available",
        ctaLabel: "Ürünü İncele",
      },
    ],
    viewProductLabel: "Ürünü İncele",
    whyTitle: "Neden Apollon?",
    whyIntro:
      "Apollon yalnızca bir ürün tedarikçisi olarak değil; sürücüler, motosiklet kullanıcıları, montaj noktaları ve distribütörler için rafine ürünler, net iletişim ve uzun vadeli ürün vizyonu sunan premium bir mobilite teknolojisi markası olarak konumlanır.",
    values: [
      {
        title: "Premium ürün vizyonu",
        body: "Modern mobilite etrafında şekillenen odaklı bir katalog: ekranlar, güvenlik, motosiklet teknolojileri ve geleceğin ses deneyimleri.",
      },
      {
        title: "Uyumluluk odaklı yaklaşım",
        body: "Araca özel sistemlerde doğru ürün; model, yıl, donanım paketi ve fabrika sistemine göre değişir. Apollon, satın alma öncesinde uyumluluk odaklı yönlendirme sağlar.",
      },
      {
        title: "Distribütör ve montaj odağı",
        body: "Website; ürün taleplerini, montaj noktalarıyla iletişimi ve Türkiye genelindeki distribütörlük iş birliklerini desteklemek için tasarlanır.",
      },
      {
        title: "Kültürel karaktere sahip marka",
        body: "Apollon; modern mühendisliği, global üretim iş birliklerini ve kültürel ilhamı ayırt edici bir mobilite teknolojisi kimliğinde birleştirir.",
      },
    ],
    inquiryTitle: "Doğru ürünü seçmek için yardıma mı ihtiyacınız var?",
    inquiryBody:
      "Araç, motosiklet veya iş ihtiyacınızı bize iletin. Apollon; ürün bilgisi, uyumluluk soruları, montaj yönlendirmesi ve distribütörlük fırsatları konusunda yardımcı olabilir.",
    inquiryPrimary: "Ürün Bilgisi Al",
    inquirySecondary: "İletişime Geç",
    inquiryTertiary: "Distribütör Ol",
  },
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function ProductsPage({ params }: ProductsPageProps) {
  const { locale } = await params
  const h = content[locale]

  // Motorcycle picks come from this page's content; car picks are derived from
  // the central catalogue so names and copy stay in sync with the product data.
  const carFeatured = ["vx5", "vision-360", "q8-signature", "q4-prime"].flatMap((slug) => {
    const product = getCarProduct(slug)
    if (!product) return []
    return [{
      name: product.name,
      category: CAR_GROUP_LABELS[product.group][locale].title,
      description: product[locale].shortDescription,
      href: `/products/car/${product.slug}`,
      status: "available" as const,
      ctaLabel: h.viewProductLabel,
    }]
  })
  const featured = [...h.products, ...carFeatured]

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
                {h.heroEyebrow}
              </span>
              <span className="h-px w-10 bg-bronze/40" />
            </div>
            <h1 className="font-heading text-4xl font-bold leading-[1.12] tracking-tight md:text-5xl lg:text-6xl pb-[0.14em]">
              {h.heroTitle}
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {h.heroSubtitle}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#categories"
                className="inline-flex items-center rounded-sm border border-bronze bg-bronze px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-bronze/90 hover:shadow-[0_0_24px_oklch(0.70_0.12_65_/_0.35)]"
              >
                {h.heroPrimary}
              </a>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center rounded-sm border border-border px-7 py-3 text-sm font-semibold text-foreground transition-all hover:border-bronze/40 hover:text-bronze"
              >
                {h.heroSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Category Cards */}
      <section id="categories" className="border-t border-border/30 py-24">
        <div className="section-container space-y-14">
          <Reveal><SectionHeading eyebrow={h.categoriesEyebrow} title={h.categoriesTitle} /></Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {h.categories.map((cat, i) => (
              <Reveal key={cat.href} delay={i * 80}>
                <LargeCategoryCard
                  {...cat}
                  href={`/${locale}${cat.href}`}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Products */}
      <section className="border-t border-border/30 py-24">
        <div className="section-container space-y-14">
          <Reveal><SectionHeading eyebrow={h.featuredEyebrow} title={h.featuredTitle} /></Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal key={p.name} delay={i * 60}>
                <FeaturedProductCard
                  {...p}
                  href={`/${locale}${p.href}`}
                  locale={locale}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Apollon */}
      <section className="border-t border-border/30 py-24">
        <div className="section-container space-y-14">
          <Reveal className="space-y-5">
            <h2 className="font-heading text-3xl font-bold leading-[1.15] tracking-tight text-foreground md:text-4xl lg:text-5xl pb-[0.1em]">
              {h.whyTitle}
            </h2>
            <p className="max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {h.whyIntro}
            </p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {h.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 70}>
                <div className="glass-card rounded-sm p-7 space-y-4 h-full">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-bronze/35 tabular-nums">
                      0{i + 1}
                    </span>
                    <span className="h-px flex-1 bg-bronze/10" />
                  </div>
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    {v.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{v.body}</p>
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
              <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
                {h.inquiryTitle}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {h.inquiryBody}
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href={`/${locale}/contact`}
                className="rounded-sm border border-bronze bg-bronze px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-bronze/90 hover:shadow-[0_0_24px_oklch(0.70_0.12_65_/_0.3)]"
              >
                {h.inquiryPrimary}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="rounded-sm border border-border/60 px-7 py-3 text-sm font-semibold text-foreground transition-all hover:border-bronze/40 hover:text-bronze"
              >
                {h.inquirySecondary}
              </Link>
              <Link
                href={`/${locale}/contact?type=distributor#contact-form`}
                className="rounded-sm border border-border/60 px-7 py-3 text-sm font-semibold text-foreground transition-all hover:border-bronze/40 hover:text-bronze"
              >
                {h.inquiryTertiary}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
