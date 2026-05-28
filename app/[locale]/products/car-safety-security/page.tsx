import type { Metadata } from "next"
import Link from "next/link"
import { Check, ChevronRight } from "lucide-react"
import { type Locale } from "@/lib/i18n"

type PageProps = { params: Promise<{ locale: Locale }> }

// ─── Types ───────────────────────────────────────────────────────────────────

type ProductCard = {
  slug: string
  title: string
  category: string
  description: string
  features: string[]
  cta: string
  status: "available" | "needs-confirmation" | "draft"
  statusLabel: string
  statusNote?: string
}

type ComparisonRow = {
  product: string
  recording: string
  cameraSupport: string
  connectivity: string
  cloudSupport: string
  fence: string
  status: string
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
  products: ProductCard[]
  comparison: {
    heading: string
    intro: string
    cols: string[]
    rows: ComparisonRow[]
  }
  warranty: {
    heading: string
    text: string
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
      title: "Car Safety & Security Systems | Apollon Entertainment Systems",
      description:
        "Explore Apollon smart dashcams and connected vehicle safety systems, including DC-UHD04, DC-UHD5, and L3 Smart Dashcam product options.",
    },
    hero: {
      eyebrow: "CAR SAFETY & SECURITY",
      title: "Smart security for modern mobility.",
      subtitle:
        "Connected dashcams and vehicle safety systems designed to support recording, remote monitoring, parking protection, and everyday driving confidence.",
      primaryCta: "Explore Dashcams",
      secondaryCta: "Product Inquiry",
    },
    products: [
      {
        slug: "dc-uhd04",
        title: "DC-UHD04 Smart Dashcam",
        category: "Smart Dashcam",
        description:
          "A connected smart dashcam designed with 2K recording, front/rear camera support, 4G remote access, cloud support, electronic fence, push notifications, and TF card storage.",
        features: [
          "2K recording",
          "Front/rear camera support",
          "4G remote live viewing",
          "Cloud support",
          "Electronic fence and push notifications",
          "TF card storage",
        ],
        cta: "View Product",
        status: "available",
        statusLabel: "Available",
      },
      {
        slug: "dc-uhd5",
        title: "DC-UHD5 4G Dashcam",
        category: "4G Smart Dashcam",
        description:
          "A 4G smart dashcam option for connected vehicle monitoring, remote access, cloud-supported safety features, and modern driving security.",
        features: [
          "4G connected dashcam",
          "Remote viewing support",
          "Cloud-supported safety features",
          "Electronic fence capability",
          "Vehicle monitoring focus",
        ],
        cta: "View Product",
        status: "needs-confirmation",
        statusLabel: "Needs Confirmation",
        statusNote: "Content needs final confirmation.",
      },
      {
        slug: "l3-smart-dashcam",
        title: "L3 Smart Dashcam",
        category: "Smart Dashcam",
        description:
          "A smart dashcam product page template prepared for Apollon's safety catalog. Final technical description and specifications should be completed after confirming the product manual and co-founder content.",
        features: [
          "Smart dashcam category",
          "Product page template ready",
          "Final specs pending",
          "Inquiry-first product flow",
        ],
        cta: "View Draft Page",
        status: "draft",
        statusLabel: "Draft / Specs Pending",
        statusNote: "Draft content — requires final product details.",
      },
    ],
    comparison: {
      heading: "Compare smart safety features",
      intro:
        "Different dashcam models may support different levels of recording, connectivity, cloud access, and monitoring. Final availability depends on product configuration.",
      cols: ["Product", "Recording", "Camera Support", "Connectivity", "Cloud Support", "Electronic Fence", "Status"],
      rows: [
        {
          product: "DC-UHD04",
          recording: "2K recording",
          cameraSupport: "Front/rear camera support",
          connectivity: "4G remote live viewing",
          cloudSupport: "Supported",
          fence: "Supported",
          status: "Strong content available",
        },
        {
          product: "DC-UHD5",
          recording: "Needs final confirmation",
          cameraSupport: "Needs final confirmation",
          connectivity: "4G remote access",
          cloudSupport: "Supported / needs confirmation",
          fence: "Supported / needs confirmation",
          status: "Needs final content confirmation",
        },
        {
          product: "L3 Smart Dashcam",
          recording: "Needs final confirmation",
          cameraSupport: "Needs final confirmation",
          connectivity: "Needs final confirmation",
          cloudSupport: "Needs final confirmation",
          fence: "Needs final confirmation",
          status: "Draft / template first",
        },
      ],
    },
    warranty: {
      heading: "Installation and warranty guidance",
      text: "Dashcam performance depends on correct installation, power connection, camera placement, storage configuration, and network setup on connected models. Apollon recommends confirming installation requirements before purchase and using qualified installation support where needed.",
    },
    inquiry: {
      heading: "Need help choosing a dashcam?",
      text: "Tell us your vehicle, installation needs, and preferred safety features. Apollon can help you choose the right smart dashcam path.",
      primaryCta: "Product Inquiry",
      secondaryCta: "Contact Us",
      tertiaryCta: "Installation / Dealer Info",
    },
  },
  tr: {
    meta: {
      title: "Araç Güvenlik Sistemleri | Apollon Entertainment Systems",
      description:
        "Apollon akıllı araç kameralarını ve bağlantılı araç güvenlik sistemlerini keşfedin. DC-UHD04, DC-UHD5 ve L3 Smart Dashcam ürün seçeneklerini inceleyin.",
    },
    hero: {
      eyebrow: "ARAÇ GÜVENLİK SİSTEMLERİ",
      title: "Modern mobilite için akıllı güvenlik.",
      subtitle:
        "Kayıt, uzaktan izleme, park güvenliği ve günlük sürüş güvenini desteklemek için tasarlanan bağlantılı araç kameraları ve güvenlik sistemleri.",
      primaryCta: "Araç Kameralarını Keşfet",
      secondaryCta: "Ürün Bilgisi Al",
    },
    products: [
      {
        slug: "dc-uhd04",
        title: "DC-UHD04 Smart Dashcam",
        category: "Akıllı Araç Kamerası",
        description:
          "2K kayıt, ön/arka kamera desteği, 4G uzaktan erişim, bulut desteği, elektronik çit, bildirimler ve TF kart depolama özellikleriyle tasarlanan bağlantılı akıllı araç kamerası.",
        features: [
          "2K kayıt",
          "Ön/arka kamera desteği",
          "4G uzaktan canlı izleme",
          "Bulut desteği",
          "Elektronik çit ve bildirimler",
          "TF kart depolama",
        ],
        cta: "Ürünü İncele",
        status: "available",
        statusLabel: "Mevcut",
      },
      {
        slug: "dc-uhd5",
        title: "DC-UHD5 4G Dashcam",
        category: "4G Akıllı Araç Kamerası",
        description:
          "Bağlantılı araç takibi, uzaktan erişim, bulut destekli güvenlik özellikleri ve modern sürüş güvenliği için 4G akıllı araç kamerası seçeneği.",
        features: [
          "4G bağlantılı araç kamerası",
          "Uzaktan izleme desteği",
          "Bulut destekli güvenlik özellikleri",
          "Elektronik çit özelliği",
          "Araç takibi odaklı kullanım",
        ],
        cta: "Ürünü İncele",
        status: "needs-confirmation",
        statusLabel: "Onay Gerekiyor",
        statusNote: "İçerik final onay gerektiriyor.",
      },
      {
        slug: "l3-smart-dashcam",
        title: "L3 Smart Dashcam",
        category: "Akıllı Araç Kamerası",
        description:
          "Apollon güvenlik kataloğu için hazırlanan akıllı araç kamerası ürün sayfası şablonu. Final teknik açıklama ve özellikler, ürün kılavuzu ve kurucu içerikleri onaylandıktan sonra tamamlanmalıdır.",
        features: [
          "Akıllı araç kamerası kategorisi",
          "Ürün sayfası şablonu hazır",
          "Final teknik özellikler bekleniyor",
          "Ürün bilgisi odaklı akış",
        ],
        cta: "Taslak Sayfayı Gör",
        status: "draft",
        statusLabel: "Taslak / Özellikler Bekleniyor",
        statusNote: "Taslak içerik — final ürün detayları gerekiyor.",
      },
    ],
    comparison: {
      heading: "Akıllı güvenlik özelliklerini karşılaştırın",
      intro:
        "Farklı araç kamerası modelleri; kayıt, bağlantı, bulut erişimi ve izleme özelliklerinde farklı seviyeler sunabilir. Final özellikler ürün yapılandırmasına göre değişir.",
      cols: ["Ürün", "Kayıt", "Kamera Desteği", "Bağlantı", "Bulut Desteği", "Elektronik Çit", "Durum"],
      rows: [
        {
          product: "DC-UHD04",
          recording: "2K kayıt",
          cameraSupport: "Ön/arka kamera desteği",
          connectivity: "4G uzaktan canlı izleme",
          cloudSupport: "Desteklenir",
          fence: "Desteklenir",
          status: "Güçlü içerik mevcut",
        },
        {
          product: "DC-UHD5",
          recording: "Final onay gerekiyor",
          cameraSupport: "Final onay gerekiyor",
          connectivity: "4G uzaktan erişim",
          cloudSupport: "Desteklenir / onay gerekiyor",
          fence: "Desteklenir / onay gerekiyor",
          status: "Final içerik onayı gerekiyor",
        },
        {
          product: "L3 Smart Dashcam",
          recording: "Final onay gerekiyor",
          cameraSupport: "Final onay gerekiyor",
          connectivity: "Final onay gerekiyor",
          cloudSupport: "Final onay gerekiyor",
          fence: "Final onay gerekiyor",
          status: "Taslak / önce şablon",
        },
      ],
    },
    warranty: {
      heading: "Montaj ve garanti bilgilendirmesi",
      text: "Araç kamerası performansı; doğru montaj, güç bağlantısı, kamera konumu, depolama yapılandırması ve bağlantılı modellerde ağ kurulumuna bağlıdır. Apollon, satın alma öncesinde montaj gereksinimlerinin doğrulanmasını ve gerektiğinde yetkili/uzman montaj desteği alınmasını önerir.",
    },
    inquiry: {
      heading: "Doğru araç kamerasını seçmek için yardıma mı ihtiyacınız var?",
      text: "Araç bilgilerinizi, montaj ihtiyacınızı ve istediğiniz güvenlik özelliklerini paylaşın. Apollon doğru akıllı araç kamerası seçeneğini belirlemenize yardımcı olabilir.",
      primaryCta: "Ürün Bilgisi Al",
      secondaryCta: "İletişime Geç",
      tertiaryCta: "Montaj / Bayi Bilgisi",
    },
  },
}

// ─── Status styles ────────────────────────────────────────────────────────────

const statusStyles = {
  available: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  "needs-confirmation": "text-amber-400 border-amber-400/30 bg-amber-400/10",
  draft: "text-muted-foreground border-border/60 bg-muted/40",
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

export default async function CarSafetyPage({ params }: PageProps) {
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

      {/* 2. Product Cards */}
      <section id="products" className="border-t border-border/30 py-24">
        <div className="section-container">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {c.products.map((product) => (
              <div
                key={product.slug}
                className="glass-card flex flex-col gap-5 rounded-sm p-6"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-bronze/50">
                    {product.category}
                  </span>
                  <span
                    className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-widest ${statusStyles[product.status]}`}
                  >
                    {product.statusLabel}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-lg font-semibold text-foreground leading-[1.3]">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>

                {/* Status note */}
                {product.statusNote && (
                  <p className="text-xs text-amber-400/70 italic">{product.statusNote}</p>
                )}

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
                  href={`/${locale}/products/car-safety-security/${product.slug}`}
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

      {/* 3. Feature Comparison */}
      <section className="border-t border-border/30 py-24">
        <div className="section-container space-y-10">
          <div className="space-y-4">
            <h2 className="font-heading text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl pb-[0.1em]">
              {c.comparison.heading}
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              {c.comparison.intro}
            </p>
          </div>

          <div className="overflow-x-auto rounded-sm border border-border/60">
            <table className="w-full min-w-[700px] text-sm">
              <thead>
                <tr className="border-b border-border/60 bg-muted/40">
                  {c.comparison.cols.map((col) => (
                    <th
                      key={col}
                      className="px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-widest text-bronze/60"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.comparison.rows.map((row, i) => (
                  <tr
                    key={row.product}
                    className={`border-b border-border/40 last:border-0 ${i % 2 === 0 ? "bg-transparent" : "bg-muted/20"}`}
                  >
                    <td className="px-4 py-3 font-heading text-xs font-semibold text-foreground">
                      {row.product}
                    </td>
                    <td className="px-4 py-3 text-xs text-muted-foreground">{row.recording}</td>
                    <td className="px-4 py-3 text-xs text-muted-foreground">{row.cameraSupport}</td>
                    <td className="px-4 py-3 text-xs text-muted-foreground">{row.connectivity}</td>
                    <td className="px-4 py-3 text-xs text-muted-foreground">{row.cloudSupport}</td>
                    <td className="px-4 py-3 text-xs text-muted-foreground">{row.fence}</td>
                    <td className="px-4 py-3 text-xs text-muted-foreground">{row.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Warranty / Installation Note */}
      <section className="border-t border-border/30 py-24">
        <div className="section-container">
          <div
            className="relative rounded-sm border border-bronze/20 p-10 md:p-14"
            style={{ background: "oklch(0.22 0.08 245 / 0.12)" }}
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-sm">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_0%_50%,oklch(0.70_0.12_65_/_0.05),transparent)]" />
            </div>
            <div className="relative max-w-2xl space-y-4">
              <h2 className="font-heading text-2xl font-bold leading-[1.15] tracking-tight md:text-3xl pb-[0.1em]">
                {c.warranty.heading}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">{c.warranty.text}</p>
            </div>
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
