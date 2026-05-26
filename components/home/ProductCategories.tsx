import { Monitor, Shield, Bike, Music } from "lucide-react"
import { ProductCategoryCard } from "@/components/products/ProductCategoryCard"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { type Locale } from "@/lib/i18n"

type ProductCategoriesProps = { locale: Locale }

const categories = {
  tr: [
    {
      title: "Araç Multimedya Sistemleri",
      description:
        "Daha akıllı ve bağlantılı bir sürüş deneyimi için araca özel ve universal Android multimedya sistemleri.",
      href: "/products/car-multimedia",
      icon: Monitor,
      status: "available" as const,
      ctaLabel: "Araç Sistemlerini Keşfet",
    },
    {
      title: "Araç Güvenlik & Kamera",
      description:
        "Her yolculuğu daha güvenli hale getirmek için tasarlanan akıllı araç kameraları ve bağlantılı güvenlik sistemleri.",
      href: "/products/car-safety-security",
      icon: Shield,
      status: "available" as const,
      ctaLabel: "Güvenlik Sistemlerini Keşfet",
    },
    {
      title: "Motosiklet Akıllı Sistemleri",
      description:
        "Motosikletler için kablosuz CarPlay, Android Auto, kamera, navigasyon ve sürüş odaklı akıllı ekran sistemleri.",
      href: "/products/motorcycle-smart-systems",
      icon: Bike,
      status: "available" as const,
      ctaLabel: "Motosiklet Sistemlerini Keşfet",
    },
    {
      title: "Signature Audio Serisi",
      description:
        "Ses, tasarım ve kültürel ilhamla şekillenen geleceğin premium ses serisi.",
      href: "/products/signature-audio-series",
      icon: Music,
      status: "coming-soon" as const,
      ctaLabel: "Yakında",
    },
  ],
  en: [
    {
      title: "Car Multimedia Systems",
      description:
        "Vehicle-specific and universal Android multimedia systems for a smarter, more connected driving experience.",
      href: "/products/car-multimedia",
      icon: Monitor,
      status: "available" as const,
      ctaLabel: "Explore Car Systems",
    },
    {
      title: "Car Safety & Security",
      description:
        "Smart dashcams and connected safety systems designed to protect every journey.",
      href: "/products/car-safety-security",
      icon: Shield,
      status: "available" as const,
      ctaLabel: "Explore Safety Systems",
    },
    {
      title: "Motorcycle Smart Systems",
      description:
        "Wireless CarPlay, Android Auto, cameras, navigation, and riding-focused smart displays for motorcycles.",
      href: "/products/motorcycle-smart-systems",
      icon: Bike,
      status: "available" as const,
      ctaLabel: "Explore Motorcycle Systems",
    },
    {
      title: "Signature Audio Series",
      description:
        "A future premium audio line shaped by sound, design, and cultural inspiration.",
      href: "/products/signature-audio-series",
      icon: Music,
      status: "coming-soon" as const,
      ctaLabel: "Coming Soon",
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
    <section className="border-t border-border/30 py-24">
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
