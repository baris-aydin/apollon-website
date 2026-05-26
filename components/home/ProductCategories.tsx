import { Monitor, Shield, Bike, Music } from "lucide-react"
import { ProductCategoryCard } from "@/components/products/ProductCategoryCard"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { type Locale } from "@/lib/i18n"

type ProductCategoriesProps = { locale: Locale }

const categories = {
  tr: [
    {
      title: "Araç Multimedya Sistemleri",
      description: "Audi, BMW, Mercedes ve daha fazlası için OEM uyumlu Android multimedya ekranları.",
      href: "/products/car-multimedia",
      icon: Monitor,
      status: "available" as const,
    },
    {
      title: "Araç Güvenlik & Kamera",
      description: "4G bağlantılı akıllı dashcam sistemleri, uzaktan izleme ve bulut desteği.",
      href: "/products/car-safety-security",
      icon: Shield,
      status: "available" as const,
    },
    {
      title: "Motosiklet Akıllı Sistemleri",
      description: "Kablosuz CarPlay, Android Auto ve navigasyon. Sürüşünüzü yeniden tanımlayın.",
      href: "/products/motorcycle-smart-systems",
      icon: Bike,
      status: "available" as const,
    },
    {
      title: "Signature Audio Serisi",
      description: "Premium ses mimarisi. Müzik, kültür ve mobiliteyi birleştiren koleksiyon.",
      href: "/products/signature-audio-series",
      icon: Music,
      status: "coming-soon" as const,
    },
  ],
  en: [
    {
      title: "Car Multimedia Systems",
      description: "OEM-compatible Android multimedia screens for Audi, BMW, Mercedes and more.",
      href: "/products/car-multimedia",
      icon: Monitor,
      status: "available" as const,
    },
    {
      title: "Car Safety & Security",
      description: "4G-connected smart dashcam systems with remote monitoring and cloud support.",
      href: "/products/car-safety-security",
      icon: Shield,
      status: "available" as const,
    },
    {
      title: "Motorcycle Smart Systems",
      description: "Wireless CarPlay, Android Auto, and navigation. Redefine your ride.",
      href: "/products/motorcycle-smart-systems",
      icon: Bike,
      status: "available" as const,
    },
    {
      title: "Signature Audio Series",
      description: "Premium audio architecture. Where music, culture, and mobility converge.",
      href: "/products/signature-audio-series",
      icon: Music,
      status: "coming-soon" as const,
    },
  ],
}

const headings = {
  tr: { eyebrow: "Ürün Kategorileri", title: "Her sürüş için bir sistem" },
  en: { eyebrow: "Product Categories", title: "A system for every ride" },
}

export function ProductCategories({ locale }: ProductCategoriesProps) {
  const cats = categories[locale]
  const h = headings[locale]

  return (
    <section className="bg-background py-24">
      <div className="section-container space-y-14">
        <SectionHeading eyebrow={h.eyebrow} title={h.title} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cats.map((cat) => (
            <ProductCategoryCard
              key={cat.href}
              {...cat}
              href={`/${locale}${cat.href}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
