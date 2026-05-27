import type { Metadata } from "next"
import Link from "next/link"
import { Check } from "lucide-react"
import { VehicleBrandCard } from "@/components/products/VehicleBrandCard"
import { type Locale } from "@/lib/i18n"

type PageProps = { params: Promise<{ locale: Locale }> }

// ─── Content ────────────────────────────────────────────────────────────────

const content = {
  en: {
    meta: {
      title: "Car Multimedia Systems | Apollon Entertainment Systems",
      description:
        "Explore Apollon Android car multimedia systems, universal screens, vehicle-specific fitment, CarPlay, Android Auto, navigation, and premium cabin integration.",
    },
    hero: {
      eyebrow: "CAR MULTIMEDIA SYSTEMS",
      title: "Premium Android multimedia systems for modern cabins.",
      subtitle:
        "Upgrade the driving experience with universal and vehicle-specific Android multimedia systems designed for connectivity, navigation, entertainment, and refined cabin integration.",
      primaryCta: "Check Compatibility",
      secondaryCta: "Explore Vehicle Brands",
    },
    brands: {
      heading: "Find the right multimedia system for your vehicle.",
      subtitle:
        "Choose your vehicle brand or explore universal Android screen options. Compatibility may vary depending on model, year, trim level, original screen, and factory system.",
      ctaLabel: "Check Compatibility",
      viewLabel: "View Systems",
      items: [
        { name: "Universal Android Screens", slug: "universal-android-screens" },
        { name: "Audi", slug: "audi" },
        { name: "BMW", slug: "bmw" },
        { name: "Mercedes-Benz", slug: "mercedes-benz" },
        { name: "Porsche", slug: "porsche" },
        { name: "Toyota", slug: "toyota" },
        { name: "Lexus", slug: "lexus" },
        { name: "Range Rover / Land Rover", slug: "range-rover-land-rover" },
      ],
    },
    universal: {
      eyebrow: "Universal Android Screens",
      heading: "Universal Android Screens",
      text: "For vehicles that need a flexible upgrade path, Apollon universal Android screens bring a larger display, modern connectivity, navigation, media, and smartphone integration into the cabin.",
      features: [
        "Universal installation approach",
        "Large touch screen options",
        "Apple CarPlay / Android Auto support",
        "Navigation and media experience",
        "Compatibility check recommended before installation",
      ],
      products: ["Universal 13-Inch", "Universal 11.5-Inch", "Universal 2K"],
      cta: "Explore Universal Screens",
    },
    vehicleSpecific: {
      eyebrow: "Vehicle-Specific Systems",
      heading: "Vehicle-specific systems",
      text: "Apollon organizes vehicle-specific multimedia systems by brand so customers, installers, and distributors can start with the correct compatibility path.",
      viewLabel: "View Systems",
      items: [
        {
          name: "Audi",
          slug: "audi",
          description: "Vehicle-specific systems for selected Audi A4, A5, and B-platform models.",
        },
        {
          name: "BMW",
          slug: "bmw",
          description:
            "Android multimedia upgrades for selected BMW 5 Series models including F10 and F11.",
        },
        {
          name: "Mercedes-Benz",
          slug: "mercedes-benz",
          description: "Multimedia systems for selected ML, GL, GLE, A-Class, CLA, and GLA models.",
        },
        {
          name: "Porsche",
          slug: "porsche",
          description:
            "Premium multimedia upgrade options for selected Cayenne and Panamera models.",
        },
        {
          name: "Toyota",
          slug: "toyota",
          description: "Android head units for selected Toyota Prado models across generations.",
        },
        {
          name: "Lexus",
          slug: "lexus",
          description: "CarPlay and Android Auto navigation upgrades for selected RX and NX models.",
        },
      ],
    },
    tech: {
      eyebrow: "Technology",
      heading: "Technology highlights",
      cards: [
        {
          title: "Display quality",
          description:
            "Large, high-resolution display options help modernize the cabin and improve navigation, media, and everyday usability.",
        },
        {
          title: "Smartphone integration",
          description:
            "Apple CarPlay and Android Auto support bring familiar apps, maps, music, and communication into the vehicle interface.",
        },
        {
          title: "Performance hardware",
          description:
            "Selected systems use modern processor platforms and memory configurations designed for smooth daily operation.",
        },
        {
          title: "Audio processing",
          description:
            "DSP and advanced equalizer options on selected models help improve the in-cabin listening experience.",
        },
        {
          title: "Original system integration",
          description:
            "Vehicle-specific systems are designed to preserve the identity of the original cabin while adding modern functionality.",
        },
        {
          title: "Installation-oriented design",
          description:
            "Selected models support plug-in harnesses and damage-free installation approaches depending on vehicle configuration.",
        },
      ],
    },
    compat: {
      eyebrow: "Compatibility",
      heading: "Compatibility comes first.",
      text: "Car multimedia fitment depends on the exact vehicle model, model year, trim level, original screen size, factory system, and wiring configuration. For this reason, Apollon uses an inquiry-first process instead of a generic online checkout. Share your vehicle details and our team can guide you toward the correct product path.",
      cta: "Check Compatibility",
    },
    inquiry: {
      heading: "Need help choosing the right system?",
      text: "Send your vehicle brand, model, year, and current screen or system details. We will help you check compatibility and product options.",
      primaryCta: "Check Compatibility",
      secondaryCta: "Request Product Information",
      tertiaryCta: "Contact for Installation / Dealer Info",
    },
  },
  tr: {
    meta: {
      title: "Araç Multimedya Sistemleri | Apollon Entertainment Systems",
      description:
        "Apollon Android araç multimedya sistemlerini, universal ekranları, araca özel uyumluluk seçeneklerini, CarPlay, Android Auto, navigasyon ve premium kabin entegrasyonunu keşfedin.",
    },
    hero: {
      eyebrow: "ARAÇ MULTİMEDYA SİSTEMLERİ",
      title: "Modern kabinler için premium Android multimedya sistemleri.",
      subtitle:
        "Universal ve araca özel Android multimedya sistemleriyle bağlantı, navigasyon, eğlence ve rafine kabin entegrasyonu sunan daha modern bir sürüş deneyimi keşfedin.",
      primaryCta: "Uyumluluk Sor",
      secondaryCta: "Araç Markalarını Keşfet",
    },
    brands: {
      heading: "Aracınız için doğru multimedya sistemini bulun.",
      subtitle:
        "Araç markanızı seçin veya universal Android ekran seçeneklerini keşfedin. Uyumluluk; model, yıl, donanım seviyesi, orijinal ekran ve fabrika sistemine göre değişebilir.",
      ctaLabel: "Uyumluluk Sor",
      viewLabel: "Sistemleri Gör",
      items: [
        { name: "Universal Android Ekranlar", slug: "universal-android-screens" },
        { name: "Audi", slug: "audi" },
        { name: "BMW", slug: "bmw" },
        { name: "Mercedes-Benz", slug: "mercedes-benz" },
        { name: "Porsche", slug: "porsche" },
        { name: "Toyota", slug: "toyota" },
        { name: "Lexus", slug: "lexus" },
        { name: "Range Rover / Land Rover", slug: "range-rover-land-rover" },
      ],
    },
    universal: {
      eyebrow: "Universal Android Ekranlar",
      heading: "Universal Android Ekranlar",
      text: "Esnek bir yükseltme çözümüne ihtiyaç duyan araçlar için Apollon universal Android ekranlar; daha büyük ekran, modern bağlantı, navigasyon, medya ve akıllı telefon entegrasyonunu kabine taşır.",
      features: [
        "Universal montaj yaklaşımı",
        "Geniş dokunmatik ekran seçenekleri",
        "Apple CarPlay / Android Auto desteği",
        "Navigasyon ve medya deneyimi",
        "Montaj öncesi uyumluluk kontrolü önerilir",
      ],
      products: ["Universal 13 İnç", "Universal 11.5 İnç", "Universal 2K"],
      cta: "Universal Ekranları Keşfet",
    },
    vehicleSpecific: {
      eyebrow: "Araca Özel Sistemler",
      heading: "Araca özel sistemler",
      text: "Apollon, müşterilerin, montaj noktalarının ve distribütörlerin doğru uyumluluk sürecinden başlaması için araca özel multimedya sistemlerini marka bazında düzenler.",
      viewLabel: "Sistemleri Gör",
      items: [
        {
          name: "Audi",
          slug: "audi",
          description: "Seçili Audi A4, A5 ve B-platform modelleri için araca özel sistemler.",
        },
        {
          name: "BMW",
          slug: "bmw",
          description:
            "F10 ve F11 dahil seçili BMW 5 Serisi modelleri için Android multimedya yükseltmeleri.",
        },
        {
          name: "Mercedes-Benz",
          slug: "mercedes-benz",
          description:
            "Seçili ML, GL, GLE, A Serisi, CLA ve GLA modelleri için multimedya sistemleri.",
        },
        {
          name: "Porsche",
          slug: "porsche",
          description:
            "Seçili Cayenne ve Panamera modelleri için premium multimedya yükseltme seçenekleri.",
        },
        {
          name: "Toyota",
          slug: "toyota",
          description:
            "Birden fazla nesil seçili Toyota Prado modelleri için Android head unit seçenekleri.",
        },
        {
          name: "Lexus",
          slug: "lexus",
          description:
            "Seçili RX ve NX modelleri için CarPlay ve Android Auto navigasyon yükseltmeleri.",
        },
      ],
    },
    tech: {
      eyebrow: "Teknoloji",
      heading: "Teknoloji öne çıkanlar",
      cards: [
        {
          title: "Ekran kalitesi",
          description:
            "Büyük ve yüksek çözünürlüklü ekran seçenekleri; navigasyon, medya ve günlük kullanım deneyimini modernleştirmeye yardımcı olur.",
        },
        {
          title: "Akıllı telefon entegrasyonu",
          description:
            "Apple CarPlay ve Android Auto desteği; harita, müzik, iletişim ve favori uygulamaları araç arayüzüne taşır.",
        },
        {
          title: "Performans donanımı",
          description:
            "Seçili sistemlerde günlük kullanımda akıcı deneyim için modern işlemci platformları ve bellek yapılandırmaları kullanılır.",
        },
        {
          title: "Ses işleme",
          description:
            "Seçili modellerde DSP ve gelişmiş ekolayzer seçenekleri kabin içi dinleme deneyimini iyileştirmeye yardımcı olur.",
        },
        {
          title: "Orijinal sistem entegrasyonu",
          description:
            "Araca özel sistemler, modern fonksiyonlar eklerken orijinal kabin kimliğini korumaya odaklanır.",
        },
        {
          title: "Montaj odaklı tasarım",
          description:
            "Seçili modeller, araç yapılandırmasına bağlı olarak soket uyumlu bağlantı ve kesme-biçme gerektirmeyen montaj yaklaşımını destekler.",
        },
      ],
    },
    compat: {
      eyebrow: "Uyumluluk",
      heading: "Önce uyumluluk.",
      text: "Araç multimedya uyumluluğu; aracın modeli, üretim yılı, donanım seviyesi, orijinal ekran ölçüsü, fabrika sistemi ve tesisat yapısına göre değişir. Bu nedenle Apollon, genel bir online satın alma akışı yerine uyumluluk ve danışmanlık odaklı bir süreç kullanır. Araç bilgilerinizi paylaşın, ekibimiz sizi doğru ürün yoluna yönlendirsin.",
      cta: "Uyumluluk Sor",
    },
    inquiry: {
      heading: "Doğru sistemi seçmek için yardıma mı ihtiyacınız var?",
      text: "Araç markanızı, modelinizi, yılını ve mevcut ekran veya sistem bilgilerinizi paylaşın. Uyumluluk ve ürün seçenekleri konusunda size yardımcı olalım.",
      primaryCta: "Uyumluluk Sor",
      secondaryCta: "Ürün Bilgisi Al",
      tertiaryCta: "Montaj / Bayi Bilgisi İçin İletişime Geç",
    },
  },
} as const

// ─── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  return {
    title: content[locale].meta.title,
    description: content[locale].meta.description,
  }
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function CarMultimediaPage({ params }: PageProps) {
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
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center rounded-sm border border-bronze bg-bronze px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-bronze/90 hover:shadow-[0_0_24px_oklch(0.70_0.12_65_/_0.35)]"
              >
                {c.hero.primaryCta}
              </Link>
              <a
                href="#brands"
                className="inline-flex items-center rounded-sm border border-border px-7 py-3 text-sm font-semibold text-foreground transition-all hover:border-bronze/40 hover:text-bronze"
              >
                {c.hero.secondaryCta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Brand Selector Grid */}
      <section id="brands" className="border-t border-border/30 py-24">
        <div className="section-container space-y-12">
          <div className="space-y-5">
            <h2 className="font-heading text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl pb-[0.1em]">
              {c.brands.heading}
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              {c.brands.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {c.brands.items.map((b) => (
              <VehicleBrandCard
                key={b.slug}
                brand={b.name}
                href={`/${locale}/products/car-multimedia/${b.slug}`}
                ctaLabel={c.brands.viewLabel}
              />
            ))}
          </div>
          <div className="flex justify-start">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center rounded-sm border border-bronze bg-bronze px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-bronze/90 hover:shadow-[0_0_20px_oklch(0.70_0.12_65_/_0.3)]"
            >
              {c.brands.ctaLabel}
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Universal Android Screens Preview */}
      <section className="border-t border-border/30 py-24">
        <div className="section-container">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Product visual */}
            <div className="space-y-4">
              {c.universal.products.map((name) => (
                <div key={name} className="glass-card flex items-center gap-4 rounded-sm p-4">
                  <div className="h-16 w-24 shrink-0 rounded-sm bg-surface-raised" />
                  <div className="flex-1 space-y-1">
                    <p className="font-heading text-sm font-semibold text-foreground">{name}</p>
                    <p className="text-xs text-muted-foreground">
                      {c.universal.eyebrow}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-bronze/30 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-widest text-bronze/70">
                    Android
                  </span>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-bronze/70">
                  {c.universal.eyebrow}
                </span>
                <h2 className="font-heading text-3xl font-semibold leading-[1.15] md:text-4xl pb-[0.1em]">
                  {c.universal.heading}
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {c.universal.text}
                </p>
              </div>
              <ul className="space-y-2.5">
                {c.universal.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-sm border border-bronze/20 text-bronze"
                      style={{ background: "oklch(0.70 0.12 65 / 0.08)" }}
                    >
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={`/${locale}/products/car-multimedia/universal-android-screens`}
                className="inline-flex rounded-sm border border-bronze bg-bronze px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-bronze/90"
              >
                {c.universal.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured Vehicle-Specific Systems */}
      <section className="border-t border-border/30 py-24">
        <div className="section-container space-y-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-bronze/40" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-bronze/70">
                {c.vehicleSpecific.eyebrow}
              </span>
            </div>
            <h2 className="font-heading text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl pb-[0.1em]">
              {c.vehicleSpecific.heading}
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              {c.vehicleSpecific.text}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {c.vehicleSpecific.items.map((item) => (
              <Link
                key={item.slug}
                href={`/${locale}/products/car-multimedia/${item.slug}`}
                className="group glass-card flex flex-col gap-4 rounded-sm p-6 transition-all hover:border-bronze/40 hover:shadow-[0_0_30px_oklch(0.70_0.12_65_/_0.08)]"
              >
                <h3 className="font-heading text-base font-semibold text-foreground transition-colors group-hover:text-bronze">
                  {item.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                <span className="mt-auto text-xs font-medium text-bronze/60 transition-colors group-hover:text-bronze">
                  {c.vehicleSpecific.viewLabel} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Technology Highlights */}
      <section className="border-t border-border/30 py-24">
        <div className="section-container space-y-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-bronze/40" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-bronze/70">
                {c.tech.eyebrow}
              </span>
            </div>
            <h2 className="font-heading text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl pb-[0.1em]">
              {c.tech.heading}
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {c.tech.cards.map((card, i) => (
              <div key={card.title} className="glass-card rounded-sm p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-bronze/35 tabular-nums">
                    0{i + 1}
                  </span>
                  <span className="h-px flex-1 bg-bronze/10" />
                </div>
                <h3 className="font-heading text-sm font-semibold text-foreground">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Compatibility Note */}
      <section className="border-t border-border/30 py-24">
        <div className="section-container">
          <div className="relative rounded-sm border border-bronze/20 p-10 md:p-14" style={{ background: "oklch(0.22 0.08 245 / 0.12)" }}>
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-sm">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_100%_50%,oklch(0.70_0.12_65_/_0.05),transparent)]" />
            </div>
            <div className="relative mx-auto max-w-2xl space-y-6 text-center">
              <div className="flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-bronze/40" />
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-bronze/70">
                  {c.compat.eyebrow}
                </span>
                <span className="h-px w-8 bg-bronze/40" />
              </div>
              <h2 className="font-heading text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl pb-[0.1em]">
                {c.compat.heading}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {c.compat.text}
              </p>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex rounded-sm border border-bronze bg-bronze px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-bronze/90 hover:shadow-[0_0_24px_oklch(0.70_0.12_65_/_0.3)]"
              >
                {c.compat.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Inquiry CTA */}
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
