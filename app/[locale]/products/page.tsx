import Link from "next/link"
import { Monitor, Shield, Bike, Music, type LucideIcon } from "lucide-react"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { LargeCategoryCard } from "@/components/products/LargeCategoryCard"
import { FeaturedProductCard } from "@/components/products/FeaturedProductCard"
import { VehicleBrandCard } from "@/components/products/VehicleBrandCard"
import { type Locale } from "@/lib/i18n"

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

type BrandItem = {
  brand: string
  slug: string
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
  brandsTitle: string
  brandsSubtitle: string
  brandsCta: string
  brandsViewLabel: string
  brands: BrandItem[]
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
    heroTitle: "Premium mobility systems for cars, motorcycles, safety, and sound.",
    heroSubtitle:
      "Explore Apollon's product families — from Android multimedia systems and connected dashcams to motorcycle smart displays and future premium audio experiences.",
    heroPrimary: "Explore Categories",
    heroSecondary: "Product Inquiry",
    categoriesEyebrow: "Product Categories",
    categoriesTitle: "Four product families. One mobility vision.",
    categories: [
      {
        title: "Car Multimedia Systems",
        description:
          "Vehicle-specific and universal Android multimedia systems designed to modernize the cabin while preserving the identity of the car.",
        features: [
          "Universal Android screens",
          "Vehicle-specific fitment",
          "Apple CarPlay / Android Auto",
          "Navigation and entertainment",
          "Compatibility-focused inquiry flow",
        ],
        href: "/products/car-multimedia",
        icon: Monitor,
        status: "available",
        ctaLabel: "Explore Car Multimedia",
      },
      {
        title: "Car Safety & Security",
        description:
          "Smart dashcams and connected safety systems designed to protect the vehicle, the driver, and every journey.",
        features: [
          "Smart dashcams",
          "Front/rear camera support",
          "4G remote access on supported models",
          "Cloud support on supported models",
          "Parking and driving protection",
        ],
        href: "/products/car-safety-security",
        icon: Shield,
        status: "available",
        ctaLabel: "Explore Safety Systems",
      },
      {
        title: "Motorcycle Smart Systems",
        description:
          "Riding-focused smart displays and camera systems that bring wireless CarPlay, Android Auto, navigation, audio, and safety features to motorcycles.",
        features: [
          "Wireless Apple CarPlay",
          "Android Auto",
          "Waterproof display design",
          "Camera and DVR options",
          "Tire pressure monitoring on supported models",
        ],
        href: "/products/motorcycle-smart-systems",
        icon: Bike,
        status: "available",
        ctaLabel: "Explore Motorcycle Systems",
      },
      {
        title: "Signature Audio Series",
        description:
          "A future premium audio line shaped by sound, design, cultural inspiration, and Apollon's long-term vision for mobility experiences.",
        features: [
          "Premium sound direction",
          "Research & development phase",
          "Boutique audio positioning",
          "Inspired by culture and movement",
          "Early partnership opportunities",
        ],
        href: "/products/signature-audio-series",
        icon: Music,
        status: "coming-soon",
        ctaLabel: "View Coming Soon",
        badge: "Coming Soon / R&D",
      },
    ],
    featuredEyebrow: "Featured Products",
    featuredTitle: "Selected from the Apollon catalog.",
    products: [
      {
        name: "MDC-SMART02",
        category: "Motorcycle Smart Systems",
        description:
          "A motorcycle smart display system with wireless CarPlay, Android Auto, high-brightness screen support, camera integration, and riding-focused control features.",
        href: "/products/motorcycle-smart-systems",
        status: "available",
        ctaLabel: "View Product",
      },
      {
        name: "MDC-PLUS02",
        category: "Motorcycle Smart Systems",
        description:
          "A connected motorcycle display and DVR-focused system designed for navigation, media, camera recording, Bluetooth audio, and daily riding convenience.",
        href: "/products/motorcycle-smart-systems",
        status: "available",
        ctaLabel: "View Product",
      },
      {
        name: "Moto Dash Cam TR V2",
        category: "Motorcycle Smart Systems",
        description:
          "A compact motorcycle dashcam solution with Full HD recording, Wi-Fi app connection, loop recording, and weather-resistant design.",
        href: "/products/motorcycle-smart-systems",
        status: "available",
        ctaLabel: "View Product",
      },
      {
        name: "DC-UHD04 Smart Dashcam",
        category: "Car Safety & Security",
        description:
          "A connected smart dashcam with 2K recording, front/rear camera support, 4G remote access, cloud support, electronic fence, push notifications, and TF card storage.",
        href: "/products/car-safety-security",
        status: "available",
        ctaLabel: "View Product",
      },
      {
        name: "DC-UHD5 4G Dashcam",
        category: "Car Safety & Security",
        description:
          "A 4G smart dashcam option for connected vehicle monitoring, remote access, cloud-supported safety features, and modern driving security.",
        href: "/products/car-safety-security",
        status: "available",
        ctaLabel: "View Product",
      },
      {
        name: "Signature Audio Series",
        category: "Signature Audio Series",
        description:
          "Apollon's future premium audio direction, currently in R&D, shaped by sound, design, culture, and the emotional side of mobility.",
        href: "/products/signature-audio-series",
        status: "coming-soon",
        ctaLabel: "Learn More",
      },
    ],
    brandsTitle: "Vehicle-specific multimedia systems",
    brandsSubtitle:
      "Explore Android multimedia systems organized by vehicle brand. Compatibility depends on model, year, trim, and factory system, so Apollon uses an inquiry-first approach instead of a generic checkout flow.",
    brandsCta: "Check Compatibility",
    brandsViewLabel: "View Category",
    brands: [
      { brand: "Universal Android Screens", slug: "universal-android-screens" },
      { brand: "Audi", slug: "audi" },
      { brand: "BMW", slug: "bmw" },
      { brand: "Mercedes-Benz", slug: "mercedes-benz" },
      { brand: "Porsche", slug: "porsche" },
      { brand: "Toyota", slug: "toyota" },
      { brand: "Lexus", slug: "lexus" },
      { brand: "Range Rover / Land Rover", slug: "range-rover-land-rover" },
    ],
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
    heroTitle: "Otomobiller, motosikletler, güvenlik ve ses için premium mobilite sistemleri.",
    heroSubtitle:
      "Android multimedya sistemlerinden bağlantılı araç kameralarına, motosiklet akıllı ekranlarından geleceğin premium ses deneyimlerine kadar Apollon ürün ailelerini keşfedin.",
    heroPrimary: "Kategorileri Keşfet",
    heroSecondary: "Ürün Bilgisi Al",
    categoriesEyebrow: "Ürün Kategorileri",
    categoriesTitle: "Dört ürün ailesi. Tek mobilite vizyonu.",
    categories: [
      {
        title: "Araç Multimedya Sistemleri",
        description:
          "Aracın kimliğini korurken kabin deneyimini modernleştiren araca özel ve universal Android multimedya sistemleri.",
        features: [
          "Universal Android ekranlar",
          "Araca özel uyumluluk",
          "Apple CarPlay / Android Auto",
          "Navigasyon ve eğlence",
          "Uyumluluk odaklı ürün danışmanlığı",
        ],
        href: "/products/car-multimedia",
        icon: Monitor,
        status: "available",
        ctaLabel: "Araç Multimedya Sistemlerini Keşfet",
      },
      {
        title: "Araç Güvenlik Sistemleri",
        description:
          "Aracı, sürücüyü ve her yolculuğu korumaya yardımcı olan akıllı araç kameraları ve bağlantılı güvenlik sistemleri.",
        features: [
          "Akıllı araç kameraları",
          "Ön/arka kamera desteği",
          "Desteklenen modellerde 4G uzaktan erişim",
          "Desteklenen modellerde bulut desteği",
          "Sürüş ve park güvenliği",
        ],
        href: "/products/car-safety-security",
        icon: Shield,
        status: "available",
        ctaLabel: "Güvenlik Sistemlerini Keşfet",
      },
      {
        title: "Motosiklet Akıllı Sistemleri",
        description:
          "Kablosuz CarPlay, Android Auto, navigasyon, ses ve güvenlik özelliklerini motosikletlere taşıyan sürüş odaklı akıllı ekran ve kamera sistemleri.",
        features: [
          "Kablosuz Apple CarPlay",
          "Android Auto",
          "Suya dayanıklı ekran tasarımı",
          "Kamera ve DVR seçenekleri",
          "Desteklenen modellerde lastik basınç takibi",
        ],
        href: "/products/motorcycle-smart-systems",
        icon: Bike,
        status: "available",
        ctaLabel: "Motosiklet Sistemlerini Keşfet",
      },
      {
        title: "Signature Audio Series",
        description:
          "Ses, tasarım, kültürel ilham ve Apollon'un uzun vadeli mobilite deneyimi vizyonuyla şekillenen geleceğin premium ses serisi.",
        features: [
          "Premium ses vizyonu",
          "Araştırma ve geliştirme aşaması",
          "Boutique audio konumlandırması",
          "Kültür ve hareketten ilham alan tasarım",
          "Erken iş ortaklığı fırsatları",
        ],
        href: "/products/signature-audio-series",
        icon: Music,
        status: "coming-soon",
        ctaLabel: "Yakında Sayfasını Gör",
        badge: "Yakında / Ar-Ge",
      },
    ],
    featuredEyebrow: "Öne Çıkan Ürünler",
    featuredTitle: "Apollon kataloğundan seçmeler.",
    products: [
      {
        name: "MDC-SMART02",
        category: "Motosiklet Akıllı Sistemleri",
        description:
          "Kablosuz CarPlay, Android Auto, yüksek parlaklıklı ekran desteği, kamera entegrasyonu ve sürüş odaklı kontrol özellikleri sunan motosiklet akıllı ekran sistemi.",
        href: "/products/motorcycle-smart-systems",
        status: "available",
        ctaLabel: "Ürünü İncele",
      },
      {
        name: "MDC-PLUS02",
        category: "Motosiklet Akıllı Sistemleri",
        description:
          "Navigasyon, medya, kamera kaydı, Bluetooth ses ve günlük sürüş kolaylığı için tasarlanan bağlantılı motosiklet ekran ve DVR odaklı sistem.",
        href: "/products/motorcycle-smart-systems",
        status: "available",
        ctaLabel: "Ürünü İncele",
      },
      {
        name: "Moto Dash Cam TR V2",
        category: "Motosiklet Akıllı Sistemleri",
        description:
          "Full HD kayıt, Wi-Fi uygulama bağlantısı, döngüsel kayıt ve hava koşullarına dayanıklı tasarım sunan kompakt motosiklet araç kamerası çözümü.",
        href: "/products/motorcycle-smart-systems",
        status: "available",
        ctaLabel: "Ürünü İncele",
      },
      {
        name: "DC-UHD04 Smart Dashcam",
        category: "Araç Güvenlik Sistemleri",
        description:
          "2K kayıt, ön/arka kamera desteği, 4G uzaktan erişim, bulut desteği, elektronik çit, bildirimler ve TF kart depolama sunan bağlantılı akıllı araç kamerası.",
        href: "/products/car-safety-security",
        status: "available",
        ctaLabel: "Ürünü İncele",
      },
      {
        name: "DC-UHD5 4G Dashcam",
        category: "Araç Güvenlik Sistemleri",
        description:
          "Bağlantılı araç takibi, uzaktan erişim, bulut destekli güvenlik özellikleri ve modern sürüş güvenliği için 4G akıllı araç kamerası seçeneği.",
        href: "/products/car-safety-security",
        status: "available",
        ctaLabel: "Ürünü İncele",
      },
      {
        name: "Signature Audio Series",
        category: "Signature Audio Series",
        description:
          "Apollon'un ses, tasarım, kültür ve mobilitenin duygusal yönüyle şekillenen, şu anda Ar-Ge aşamasındaki gelecek premium ses vizyonu.",
        href: "/products/signature-audio-series",
        status: "coming-soon",
        ctaLabel: "Detayları Gör",
      },
    ],
    brandsTitle: "Araca özel multimedya sistemleri",
    brandsSubtitle:
      "Android multimedya sistemlerini araç markasına göre keşfedin. Uyumluluk; model, yıl, donanım paketi ve fabrika sistemine göre değiştiği için Apollon genel bir satın alma akışı yerine danışmanlık ve uyumluluk odaklı bir süreç kullanır.",
    brandsCta: "Uyumluluk Sor",
    brandsViewLabel: "Kategoriyi Gör",
    brands: [
      { brand: "Universal Android Ekranlar", slug: "universal-android-screens" },
      { brand: "Audi", slug: "audi" },
      { brand: "BMW", slug: "bmw" },
      { brand: "Mercedes-Benz", slug: "mercedes-benz" },
      { brand: "Porsche", slug: "porsche" },
      { brand: "Toyota", slug: "toyota" },
      { brand: "Lexus", slug: "lexus" },
      { brand: "Range Rover / Land Rover", slug: "range-rover-land-rover" },
    ],
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
          <SectionHeading eyebrow={h.categoriesEyebrow} title={h.categoriesTitle} />
          <div className="grid gap-6 md:grid-cols-2">
            {h.categories.map((cat) => (
              <LargeCategoryCard
                key={cat.href}
                {...cat}
                href={`/${locale}${cat.href}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Products */}
      <section className="border-t border-border/30 py-24">
        <div className="section-container space-y-14">
          <SectionHeading eyebrow={h.featuredEyebrow} title={h.featuredTitle} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {h.products.map((p) => (
              <FeaturedProductCard
                key={p.name}
                {...p}
                href={`/${locale}${p.href}`}
                locale={locale}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Vehicle Brand Categories */}
      <section className="border-t border-border/30 py-24">
        <div className="section-container space-y-14">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="space-y-4 md:max-w-xl">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                {h.brandsTitle}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {h.brandsSubtitle}
              </p>
            </div>
            <Link
              href={`/${locale}/contact`}
              className="shrink-0 inline-flex items-center rounded-sm border border-bronze bg-bronze px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-bronze/90 hover:shadow-[0_0_20px_oklch(0.70_0.12_65_/_0.3)]"
            >
              {h.brandsCta}
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {h.brands.map((b) => (
              <VehicleBrandCard
                key={b.slug}
                brand={b.brand}
                href={`/${locale}/products/car-multimedia/${b.slug}`}
                ctaLabel={h.brandsViewLabel}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Apollon */}
      <section className="border-t border-border/30 py-24">
        <div className="section-container space-y-14">
          <div className="space-y-5">
            <h2 className="font-heading text-3xl font-bold leading-[1.15] tracking-tight text-foreground md:text-4xl lg:text-5xl pb-[0.1em]">
              {h.whyTitle}
            </h2>
            <p className="max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {h.whyIntro}
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {h.values.map((v, i) => (
              <div key={v.title} className="glass-card rounded-sm p-7 space-y-4">
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
            ))}
          </div>
        </div>
      </section>

      {/* 6. Inquiry CTA */}
      <section className="border-t border-border/30 py-24">
        <div className="section-container">
          <div className="mx-auto max-w-2xl space-y-10 text-center">
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
                href={`/${locale}/partner-distributor`}
                className="rounded-sm border border-border/60 px-7 py-3 text-sm font-semibold text-foreground transition-all hover:border-bronze/40 hover:text-bronze"
              >
                {h.inquiryTertiary}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
