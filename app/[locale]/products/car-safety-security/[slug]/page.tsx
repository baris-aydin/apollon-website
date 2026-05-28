import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Check, ChevronRight } from "lucide-react"
import { SpecsTable, type SpecRow } from "@/components/products/SpecsTable"
import { type Locale } from "@/lib/i18n"

type PageProps = { params: Promise<{ locale: Locale; slug: string }> }

// ─── Types ───────────────────────────────────────────────────────────────────

type FeatureSection = {
  heading: string
  text: string
}

type ProductLocale = {
  heroEyebrow: string
  heroTitle: string
  heroSubtitle: string
  heroPrimary: string
  heroSecondary?: string
  statusBadge?: string
  promise: string
  featuresHeading: string
  features: string[]
  sectionsHeading?: string
  sections?: FeatureSection[]
  specs: SpecRow[]
  specsTitle: string
  packageNote: string
  packageTitle: string
  galleryTitle: string
  galleryNote: string
  inquiryTitle: string
  inquiryText: string
  inquiryPrimary: string
  inquirySecondary?: string
  backLabel: string
  metaTitle: string
  metaDescription: string
}

type ProductData = {
  status: "published" | "needs-confirmation" | "draft"
  en: ProductLocale
  tr: ProductLocale
}

// ─── Product Data ─────────────────────────────────────────────────────────────

const products: Record<string, ProductData> = {
  "dc-uhd04": {
    status: "published",
    en: {
      heroEyebrow: "SMART DASHCAM",
      heroTitle: "DC-UHD04 Smart Dashcam",
      heroSubtitle:
        "A connected 4G smart dashcam designed for high-resolution recording, remote access, cloud-supported safety, and smarter vehicle monitoring.",
      heroPrimary: "Request Product Information",
      heroSecondary: "Contact for Installation / Dealer Info",
      promise:
        "DC-UHD04 is designed to give drivers a smarter way to record, monitor, and protect their vehicle. With 2K recording, front/rear camera support, 4G connectivity, cloud features, electronic fence alerts, and TF card storage, it brings connected security into everyday mobility.",
      featuresHeading: "Key features",
      features: [
        "2K recording",
        "Front/rear camera support",
        "4G remote live streaming",
        "Cloud support",
        "Electronic fence alerts",
        "Push notifications",
        "TF card storage",
        "Compact / minimal design",
      ],
      sectionsHeading: "What DC-UHD04 offers",
      sections: [
        {
          heading: "Clear recording for the moments that matter.",
          text: "DC-UHD04 supports high-resolution 2K recording and front/rear camera coverage, helping capture important driving and security moments from multiple angles.",
        },
        {
          heading: "Remote access when you need it.",
          text: "With 4G connectivity, supported configurations can enable remote live viewing and connected vehicle monitoring from a distance.",
        },
        {
          heading: "Cloud-supported vehicle security.",
          text: "Cloud support helps extend the dashcam experience beyond local storage by enabling connected safety features and remote access workflows on supported models.",
        },
        {
          heading: "Smarter alerts for vehicle movement.",
          text: "Electronic fence and push notification features can help notify users when vehicle movement or location-based events occur, depending on configuration and service availability.",
        },
        {
          heading: "Designed to stay discreet.",
          text: "The DC-UHD04 is positioned as a modern smart dashcam with a compact, minimal design approach that fits into the vehicle without overwhelming the cabin.",
        },
      ],
      specs: [
        { label: "Product name", value: "DC-UHD04 Smart Dashcam" },
        { label: "Category", value: "Car Safety & Security" },
        { label: "Recording", value: "2K" },
        { label: "Camera support", value: "Front/rear camera support" },
        { label: "Connectivity", value: "4G" },
        { label: "Remote access", value: "Remote live streaming" },
        { label: "Cloud", value: "Cloud support" },
        { label: "Alerts", value: "Electronic fence / push notifications" },
        { label: "Storage", value: "TF card" },
        { label: "Status", value: "Published / strong content available" },
      ],
      specsTitle: "Technical specifications",
      packageTitle: "Package contents",
      packageNote:
        "Package contents may vary by configuration. Please confirm the final kit contents before order or installation.",
      galleryTitle: "Product gallery",
      galleryNote: "Product images will be added when official visuals are available.",
      inquiryTitle: "Interested in DC-UHD04?",
      inquiryText:
        "Share your vehicle and installation needs. Apollon can help with product information, installation guidance, and dealer/distributor communication.",
      inquiryPrimary: "Request Product Information",
      inquirySecondary: "Contact for Installation / Dealer Info",
      backLabel: "Car Safety & Security",
      metaTitle: "DC-UHD04 Smart Dashcam | Apollon",
      metaDescription:
        "Discover DC-UHD04, a connected smart dashcam with 2K recording, 4G remote access, cloud support, electronic fence alerts, and TF card storage.",
    },
    tr: {
      heroEyebrow: "AKILLI ARAÇ KAMERASI",
      heroTitle: "DC-UHD04 Smart Dashcam",
      heroSubtitle:
        "Yüksek çözünürlüklü kayıt, uzaktan erişim, bulut destekli güvenlik ve daha akıllı araç takibi için tasarlanan bağlantılı 4G akıllı araç kamerası.",
      heroPrimary: "Ürün Bilgisi Al",
      heroSecondary: "Montaj / Bayi Bilgisi İçin İletişime Geç",
      promise:
        "DC-UHD04, sürücülere araçlarını kaydetmek, izlemek ve korumak için daha akıllı bir yol sunmak üzere tasarlanmıştır. 2K kayıt, ön/arka kamera desteği, 4G bağlantı, bulut özellikleri, elektronik çit bildirimleri ve TF kart depolama ile günlük mobiliteye bağlantılı güvenlik kazandırır.",
      featuresHeading: "Öne çıkan özellikler",
      features: [
        "2K kayıt",
        "Ön/arka kamera desteği",
        "4G uzaktan canlı izleme",
        "Bulut desteği",
        "Elektronik çit uyarıları",
        "Anlık bildirimler",
        "TF kart depolama",
        "Kompakt / minimal tasarım",
      ],
      sectionsHeading: "DC-UHD04 neler sunar",
      sections: [
        {
          heading: "Önemli anlar için net kayıt.",
          text: "DC-UHD04, yüksek çözünürlüklü 2K kayıt ve ön/arka kamera desteğiyle önemli sürüş ve güvenlik anlarının birden fazla açıdan kaydedilmesine yardımcı olur.",
        },
        {
          heading: "İhtiyacınız olduğunda uzaktan erişim.",
          text: "4G bağlantı sayesinde desteklenen yapılandırmalarda uzaktan canlı izleme ve bağlantılı araç takibi yapılabilir.",
        },
        {
          heading: "Bulut destekli araç güvenliği.",
          text: "Bulut desteği, desteklenen modellerde bağlantılı güvenlik özellikleri ve uzaktan erişim süreçleriyle araç kamerası deneyimini yerel depolamanın ötesine taşımaya yardımcı olur.",
        },
        {
          heading: "Araç hareketleri için daha akıllı bildirimler.",
          text: "Elektronik çit ve anlık bildirim özellikleri, yapılandırma ve servis uygunluğuna bağlı olarak araç hareketi veya konum bazlı olaylarda kullanıcıları bilgilendirmeye yardımcı olabilir.",
        },
        {
          heading: "Dikkat çekmeden uyum sağlamak için tasarlandı.",
          text: "DC-UHD04, kabini gereksiz şekilde kalabalıklaştırmadan araca uyum sağlayan kompakt ve minimal tasarım yaklaşımına sahip modern bir akıllı araç kamerası olarak konumlanır.",
        },
      ],
      specs: [
        { label: "Ürün adı", value: "DC-UHD04 Smart Dashcam" },
        { label: "Kategori", value: "Araç Güvenlik Sistemleri" },
        { label: "Kayıt", value: "2K" },
        { label: "Kamera desteği", value: "Ön/arka kamera desteği" },
        { label: "Bağlantı", value: "4G" },
        { label: "Uzaktan erişim", value: "Uzaktan canlı izleme" },
        { label: "Bulut", value: "Bulut desteği" },
        { label: "Uyarılar", value: "Elektronik çit / anlık bildirimler" },
        { label: "Depolama", value: "TF kart" },
        { label: "Durum", value: "Yayında / güçlü içerik mevcut" },
      ],
      specsTitle: "Teknik özellikler",
      packageTitle: "Paket içeriği",
      packageNote:
        "Paket içeriği yapılandırmaya göre değişebilir. Sipariş veya montaj öncesinde final kit içeriğini doğrulayın.",
      galleryTitle: "Ürün galerisi",
      galleryNote: "Resmi görseller hazır olduğunda ürün fotoğrafları eklenecektir.",
      inquiryTitle: "DC-UHD04 ile ilgileniyor musunuz?",
      inquiryText:
        "Araç ve montaj ihtiyaçlarınızı paylaşın. Apollon ürün bilgisi, montaj yönlendirmesi ve bayi/distribütör iletişimi konusunda yardımcı olabilir.",
      inquiryPrimary: "Ürün Bilgisi Al",
      inquirySecondary: "Montaj / Bayi Bilgisi İçin İletişime Geç",
      backLabel: "Araç Güvenlik Sistemleri",
      metaTitle: "DC-UHD04 Akıllı Araç Kamerası | Apollon",
      metaDescription:
        "2K kayıt, 4G uzaktan erişim, bulut desteği, elektronik çit bildirimleri ve TF kart depolama sunan DC-UHD04 akıllı araç kamerasını keşfedin.",
    },
  },

  "dc-uhd5": {
    status: "needs-confirmation",
    en: {
      heroEyebrow: "4G SMART DASHCAM",
      heroTitle: "DC-UHD5 4G Dashcam",
      heroSubtitle:
        "A connected 4G dashcam option for remote vehicle monitoring, cloud-supported safety workflows, and modern driving security.",
      heroPrimary: "Request Product Information",
      heroSecondary: "Contact for Installation / Dealer Info",
      statusBadge: "Content needs final confirmation.",
      promise:
        "DC-UHD5 is positioned as a 4G smart dashcam for connected vehicle monitoring and remote access. Final feature availability, recording specifications, package contents, and configuration details should be confirmed before publishing as a finalized product page.",
      featuresHeading: "Main specifications",
      features: [
        "4G connectivity",
        "Remote access",
        "Cloud-supported features",
        "Electronic fence capability",
        "Vehicle monitoring focus",
        "Final specs pending confirmation",
      ],
      sections: [
        {
          heading: "Remote access when you need it.",
          text: "DC-UHD5 is designed around 4G connectivity for remote vehicle monitoring. Final remote access capabilities and supported configurations should be confirmed before installation.",
        },
        {
          heading: "Cloud-supported safety features.",
          text: "Cloud-supported features are expected on this model. Final cloud connectivity specifications and service availability should be confirmed.",
        },
        {
          heading: "Electronic fence capability.",
          text: "Electronic fence features are expected. Final configuration details and alert behavior depend on product setup and should be verified.",
        },
      ],
      specs: [
        { label: "Product name", value: "DC-UHD5 4G Dashcam" },
        { label: "Category", value: "Car Safety & Security" },
        { label: "Connectivity", value: "4G" },
        { label: "Remote access", value: "Supported / needs final confirmation" },
        { label: "Cloud", value: "Supported / needs final confirmation" },
        { label: "Electronic fence", value: "Supported / needs final confirmation" },
        { label: "Recording", value: "Needs final confirmation" },
        { label: "Camera support", value: "Needs final confirmation" },
        { label: "Storage", value: "Needs final confirmation" },
        { label: "Status", value: "Draft / final content needed" },
      ],
      specsTitle: "Specifications (needs confirmation)",
      packageTitle: "Package contents",
      packageNote:
        "Package contents are not yet confirmed. Please contact Apollon for current product configuration details.",
      galleryTitle: "Product gallery",
      galleryNote: "Product images will be added when official visuals are available.",
      inquiryTitle: "Interested in DC-UHD5?",
      inquiryText:
        "Share your vehicle and monitoring needs. Apollon can provide the latest product information and help confirm compatibility.",
      inquiryPrimary: "Request Product Information",
      inquirySecondary: "Contact for Installation / Dealer Info",
      backLabel: "Car Safety & Security",
      metaTitle: "DC-UHD5 4G Dashcam | Apollon",
      metaDescription:
        "Explore DC-UHD5, a 4G smart dashcam option for connected vehicle monitoring, remote access, and cloud-supported safety features.",
    },
    tr: {
      heroEyebrow: "4G AKILLI ARAÇ KAMERASI",
      heroTitle: "DC-UHD5 4G Dashcam",
      heroSubtitle:
        "Uzaktan araç takibi, bulut destekli güvenlik süreçleri ve modern sürüş güvenliği için bağlantılı 4G araç kamerası seçeneği.",
      heroPrimary: "Ürün Bilgisi Al",
      heroSecondary: "Montaj / Bayi Bilgisi İçin İletişime Geç",
      statusBadge: "İçerik final onay gerektiriyor.",
      promise:
        "DC-UHD5, bağlantılı araç takibi ve uzaktan erişim için 4G akıllı araç kamerası olarak konumlanır. Final özellik durumu, kayıt teknik özellikleri, paket içeriği ve yapılandırma detayları ürün sayfası kesinleşmeden önce onaylanmalıdır.",
      featuresHeading: "Ana özellikler",
      features: [
        "4G bağlantı",
        "Uzaktan erişim",
        "Bulut destekli özellikler",
        "Elektronik çit özelliği",
        "Araç takibi odaklı kullanım",
        "Final teknik özellikler onay bekliyor",
      ],
      sections: [
        {
          heading: "İhtiyacınız olduğunda uzaktan erişim.",
          text: "DC-UHD5, uzaktan araç takibi için 4G bağlantı etrafında tasarlanmıştır. Final uzaktan erişim özellikleri ve desteklenen yapılandırmalar montaj öncesinde doğrulanmalıdır.",
        },
        {
          heading: "Bulut destekli güvenlik özellikleri.",
          text: "Bu modelde bulut destekli özellikler beklenmektedir. Final bulut bağlantı özellikleri ve servis durumu onaylanmalıdır.",
        },
        {
          heading: "Elektronik çit özelliği.",
          text: "Elektronik çit özellikleri beklenmektedir. Final yapılandırma detayları ve uyarı davranışı ürün kurulumuna bağlıdır ve doğrulanmalıdır.",
        },
      ],
      specs: [
        { label: "Ürün adı", value: "DC-UHD5 4G Dashcam" },
        { label: "Kategori", value: "Araç Güvenlik Sistemleri" },
        { label: "Bağlantı", value: "4G" },
        { label: "Uzaktan erişim", value: "Desteklenir / onay gerekiyor" },
        { label: "Bulut", value: "Desteklenir / onay gerekiyor" },
        { label: "Elektronik çit", value: "Desteklenir / onay gerekiyor" },
        { label: "Kayıt", value: "Onay gerekiyor" },
        { label: "Kamera desteği", value: "Onay gerekiyor" },
        { label: "Depolama", value: "Onay gerekiyor" },
        { label: "Durum", value: "Taslak / final içerik gerekiyor" },
      ],
      specsTitle: "Teknik özellikler (onay gerekiyor)",
      packageTitle: "Paket içeriği",
      packageNote:
        "Paket içeriği henüz onaylanmamıştır. Güncel ürün yapılandırma detayları için Apollon ile iletişime geçin.",
      galleryTitle: "Ürün galerisi",
      galleryNote: "Resmi görseller hazır olduğunda ürün fotoğrafları eklenecektir.",
      inquiryTitle: "DC-UHD5 ile ilgileniyor musunuz?",
      inquiryText:
        "Araç ve izleme ihtiyaçlarınızı paylaşın. Apollon en güncel ürün bilgisini sunabilir ve uyumluluğu doğrulamanıza yardımcı olabilir.",
      inquiryPrimary: "Ürün Bilgisi Al",
      inquirySecondary: "Montaj / Bayi Bilgisi İçin İletişime Geç",
      backLabel: "Araç Güvenlik Sistemleri",
      metaTitle: "DC-UHD5 4G Araç Kamerası | Apollon",
      metaDescription:
        "Bağlantılı araç takibi, uzaktan erişim ve bulut destekli güvenlik özellikleri için DC-UHD5 4G akıllı araç kamerası seçeneğini inceleyin.",
    },
  },

  "l3-smart-dashcam": {
    status: "draft",
    en: {
      heroEyebrow: "SMART DASHCAM",
      heroTitle: "L3 Smart Dashcam",
      heroSubtitle:
        "A smart dashcam product page template prepared for Apollon's safety catalog. Final specifications and product copy should be completed after confirming the product manual and final co-founder content.",
      heroPrimary: "Request Product Information",
      statusBadge: "Draft / Specs pending",
      promise:
        "The L3 Smart Dashcam page is prepared as part of the Apollon Car Safety & Security catalog. Final feature descriptions, technical specifications, package contents, and gallery assets should be completed after product documentation is reviewed.",
      featuresHeading: "Features (placeholder)",
      features: [
        "Smart dashcam category",
        "Product page template ready",
        "Final specs pending",
        "Inquiry-first product flow",
      ],
      specs: [
        { label: "Product name", value: "L3 Smart Dashcam" },
        { label: "Category", value: "Car Safety & Security" },
        { label: "Recording", value: "To be confirmed" },
        { label: "Camera support", value: "To be confirmed" },
        { label: "Connectivity", value: "To be confirmed" },
        { label: "Storage", value: "To be confirmed" },
        { label: "App support", value: "To be confirmed" },
        { label: "Status", value: "Draft" },
      ],
      specsTitle: "Specifications (draft)",
      packageTitle: "Package contents",
      packageNote:
        "Package contents have not yet been confirmed. Please contact Apollon for current product details.",
      galleryTitle: "Product gallery",
      galleryNote: "Product images will be added when official visuals are confirmed.",
      inquiryTitle: "Interested in L3 Smart Dashcam?",
      inquiryText:
        "Share your vehicle and safety requirements. Apollon can provide the latest information and help you check options once the product is finalized.",
      inquiryPrimary: "Request Product Information",
      backLabel: "Car Safety & Security",
      metaTitle: "L3 Smart Dashcam | Apollon",
      metaDescription:
        "L3 Smart Dashcam product page — part of Apollon's Car Safety & Security catalog. Final specifications pending. Contact Apollon for product information.",
    },
    tr: {
      heroEyebrow: "AKILLI ARAÇ KAMERASI",
      heroTitle: "L3 Smart Dashcam",
      heroSubtitle:
        "Apollon güvenlik kataloğu için hazırlanan akıllı araç kamerası ürün sayfası şablonu. Final teknik özellikler ve ürün metni, ürün kılavuzu ve kurucu içerikleri onaylandıktan sonra tamamlanmalıdır.",
      heroPrimary: "Ürün Bilgisi Al",
      statusBadge: "Taslak / Teknik özellikler bekleniyor",
      promise:
        "L3 Smart Dashcam sayfası, Apollon Araç Güvenlik Sistemleri kataloğunun bir parçası olarak hazırlanmıştır. Final özellik açıklamaları, teknik özellikler, paket içeriği ve görsel alanları ürün dokümantasyonu incelendikten sonra tamamlanmalıdır.",
      featuresHeading: "Özellikler (yer tutucu)",
      features: [
        "Akıllı araç kamerası kategorisi",
        "Ürün sayfası şablonu hazır",
        "Final teknik özellikler bekleniyor",
        "Ürün bilgisi odaklı akış",
      ],
      specs: [
        { label: "Ürün adı", value: "L3 Smart Dashcam" },
        { label: "Kategori", value: "Araç Güvenlik Sistemleri" },
        { label: "Kayıt", value: "Onaylanacak" },
        { label: "Kamera desteği", value: "Onaylanacak" },
        { label: "Bağlantı", value: "Onaylanacak" },
        { label: "Depolama", value: "Onaylanacak" },
        { label: "Uygulama desteği", value: "Onaylanacak" },
        { label: "Durum", value: "Taslak" },
      ],
      specsTitle: "Teknik özellikler (taslak)",
      packageTitle: "Paket içeriği",
      packageNote:
        "Paket içeriği henüz onaylanmamıştır. Güncel ürün detayları için Apollon ile iletişime geçin.",
      galleryTitle: "Ürün galerisi",
      galleryNote: "Resmi görseller onaylandığında ürün fotoğrafları eklenecektir.",
      inquiryTitle: "L3 Smart Dashcam ile ilgileniyor musunuz?",
      inquiryText:
        "Araç ve güvenlik gereksinimlerinizi paylaşın. Apollon, ürün tamamlandığında en güncel bilgiyi sunabilir ve seçenekleri doğrulamanıza yardımcı olabilir.",
      inquiryPrimary: "Ürün Bilgisi Al",
      backLabel: "Araç Güvenlik Sistemleri",
      metaTitle: "L3 Smart Dashcam | Apollon",
      metaDescription:
        "L3 Smart Dashcam ürün sayfası — Apollon Araç Güvenlik Sistemleri kataloğunun parçası. Teknik özellikler bekleniyor. Ürün bilgisi için Apollon ile iletişime geçin.",
    },
  },
}

// ─── Status badge styles ──────────────────────────────────────────────────────

const statusBadgeStyles = {
  "needs-confirmation": "border-amber-400/30 bg-amber-400/10 text-amber-400",
  draft: "border-border/60 bg-muted/40 text-muted-foreground",
  published: "",
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params
  const product = products[slug]
  if (!product) return {}
  return {
    title: product[locale].metaTitle,
    description: product[locale].metaDescription,
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function ProductPage({ params }: PageProps) {
  const { locale, slug } = await params
  const product = products[slug]
  if (!product) notFound()

  const c = product[locale]
  const isDraft = product.status === "draft"
  const needsConfirmation = product.status === "needs-confirmation"

  return (
    <main>
      {/* 1. Hero */}
      <section className="relative border-b border-border/30 bg-background pb-24 pt-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,oklch(0.22_0.08_245_/_0.18),transparent)]" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze to-transparent opacity-20" />
        </div>
        <div className="section-container relative">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              href={`/${locale}/products/car-safety-security`}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-bronze"
            >
              <ChevronRight className="h-3 w-3 rotate-180" />
              {c.backLabel}
            </Link>
          </div>

          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-bronze/40" />
                <span className="text-xs font-medium uppercase tracking-[0.35em] text-bronze/70">
                  {c.heroEyebrow}
                </span>
                <span className="h-px w-10 bg-bronze/40" />
              </div>
              {c.statusBadge && (
                <span
                  className={`rounded-full border px-3 py-0.5 text-[10px] font-medium uppercase tracking-widest ${statusBadgeStyles[product.status as keyof typeof statusBadgeStyles] ?? ""}`}
                >
                  {c.statusBadge}
                </span>
              )}
            </div>

            <h1 className="font-heading text-4xl font-bold leading-[1.12] tracking-tight md:text-5xl lg:text-6xl pb-[0.14em]">
              {c.heroTitle}
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {c.heroSubtitle}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center rounded-sm border border-bronze bg-bronze px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-bronze/90 hover:shadow-[0_0_24px_oklch(0.70_0.12_65_/_0.35)]"
              >
                {c.heroPrimary}
              </Link>
              {c.heroSecondary && (
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center rounded-sm border border-border px-7 py-3 text-sm font-semibold text-foreground transition-all hover:border-bronze/40 hover:text-bronze"
                >
                  {c.heroSecondary}
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Product Promise */}
      <section className="border-t border-border/30 py-16">
        <div className="section-container">
          <div className="mx-auto max-w-3xl">
            {(isDraft || needsConfirmation) && (
              <div className="mb-6 rounded-sm border border-amber-400/20 bg-amber-400/5 px-5 py-3">
                <p className="text-sm text-amber-400/80">
                  {c.statusBadge}
                </p>
              </div>
            )}
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {c.promise}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Key Features */}
      <section className="border-t border-border/30 py-20">
        <div className="section-container">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
            {/* Feature list */}
            <div className="space-y-6">
              <h2 className="font-heading text-2xl font-bold leading-[1.15] tracking-tight md:text-3xl pb-[0.1em]">
                {c.featuresHeading}
              </h2>
              <ul className="space-y-3">
                {c.features.map((f) => (
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
            </div>

            {/* Product visual placeholder */}
            <div className="space-y-4">
              <div className="glass-card flex aspect-video items-center justify-center rounded-sm">
                <div className="text-center space-y-2">
                  <p className="text-xs font-medium uppercase tracking-[0.3em] text-bronze/40">
                    {c.heroTitle}
                  </p>
                  <p className="text-xs text-muted-foreground/40">
                    {locale === "tr" ? "Ürün görseli" : "Product image"}
                  </p>
                </div>
              </div>
              <p className="text-xs text-center text-muted-foreground/50">
                {c.galleryNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Feature Sections — DC-UHD04 and DC-UHD5 only */}
      {c.sections && c.sections.length > 0 && (
        <section className="border-t border-border/30 py-20">
          <div className="section-container space-y-6">
            {c.sectionsHeading && (
              <div className="space-y-3 mb-10">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-bronze/40" />
                  <span className="text-xs font-medium uppercase tracking-[0.3em] text-bronze/70">
                    {locale === "tr" ? "Özellikler" : "Features"}
                  </span>
                </div>
                <h2 className="font-heading text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl pb-[0.1em]">
                  {c.sectionsHeading}
                </h2>
              </div>
            )}
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {c.sections.map((section, i) => (
                <div key={i} className="glass-card rounded-sm p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-bronze/35 tabular-nums">
                      0{i + 1}
                    </span>
                    <span className="h-px flex-1 bg-bronze/10" />
                  </div>
                  <h3 className="font-heading text-sm font-semibold text-foreground leading-[1.3]">
                    {section.heading}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{section.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Technical Specs */}
      <section className="border-t border-border/30 py-20">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="space-y-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-bronze/40" />
                  <span className="text-xs font-medium uppercase tracking-[0.3em] text-bronze/70">
                    {locale === "tr" ? "Teknik Detaylar" : "Technical Details"}
                  </span>
                </div>
                <h2 className="font-heading text-2xl font-bold leading-[1.15] tracking-tight md:text-3xl pb-[0.1em]">
                  {c.specsTitle}
                </h2>
              </div>
              <SpecsTable specs={c.specs} />
            </div>

            {/* Package Contents */}
            <div className="space-y-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-bronze/40" />
                  <span className="text-xs font-medium uppercase tracking-[0.3em] text-bronze/70">
                    {locale === "tr" ? "Paket" : "Package"}
                  </span>
                </div>
                <h2 className="font-heading text-2xl font-bold leading-[1.15] tracking-tight md:text-3xl pb-[0.1em]">
                  {c.packageTitle}
                </h2>
              </div>
              <div className="glass-card rounded-sm p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">{c.packageNote}</p>
              </div>

              {/* Gallery placeholder */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-bronze/40" />
                  <span className="text-xs font-medium uppercase tracking-[0.3em] text-bronze/70">
                    {locale === "tr" ? "Galeri" : "Gallery"}
                  </span>
                </div>
                <h2 className="font-heading text-2xl font-bold leading-[1.15] tracking-tight md:text-3xl pb-[0.1em]">
                  {c.galleryTitle}
                </h2>
                <div className="grid grid-cols-2 gap-2">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-sm border border-border/40 bg-surface-raised flex items-center justify-center"
                    >
                      <span className="text-[10px] text-muted-foreground/30 uppercase tracking-widest">
                        {locale === "tr" ? "Görsel" : "Image"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Inquiry CTA */}
      <section className="border-t border-border/30 py-24">
        <div className="section-container">
          <div className="mx-auto max-w-2xl space-y-10 text-center">
            <div className="space-y-5">
              <h2 className="font-heading text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl pb-[0.1em]">
                {c.inquiryTitle}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">{c.inquiryText}</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href={`/${locale}/contact`}
                className="rounded-sm border border-bronze bg-bronze px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-bronze/90 hover:shadow-[0_0_24px_oklch(0.70_0.12_65_/_0.3)]"
              >
                {c.inquiryPrimary}
              </Link>
              {c.inquirySecondary && (
                <Link
                  href={`/${locale}/contact`}
                  className="rounded-sm border border-border/60 px-7 py-3 text-sm font-semibold text-foreground transition-all hover:border-bronze/40 hover:text-bronze"
                >
                  {c.inquirySecondary}
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
