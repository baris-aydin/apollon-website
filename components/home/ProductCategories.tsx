import { ProductCategoryCard } from "@/components/products/ProductCategoryCard"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { type Locale } from "@/lib/i18n"

type ProductCategoriesProps = { locale: Locale }

const categoryImages = {
  motorcycle: {
    src: "/images/home/categories/motorcycle-smart-systems.jpg",
    alt: "Royal Enfield motorcycle digital speedometer smart display",
  },
  car: {
    // Cinematic night shot: no infotainment UI, so no region-specific text.
    src: "/images/car-technology-systems/hero/car-technology-night.jpg",
    alt: "Modern car at night with headlights cutting through fog on an open road",
    position: "center 62%",
  },
}

const categories = {
  tr: [
    {
      title: "Motosiklet",
      description:
        "MotoPlay Series — motosikletler için kablosuz CarPlay, Android Auto, kamera ve sürüş odaklı akıllı ekran sistemleri.",
      href: "/products/motorcycle",
      image: categoryImages.motorcycle,
      status: "available" as const,
      ctaLabel: "MotoPlay Series'i Keşfet",
    },
    {
      title: "Otomobil",
      description:
        "Otomobil Teknoloji Sistemleri — bağlantılı araç kameraları, 360° görüş sistemleri ve premium multimedya platformları.",
      href: "/products/car",
      image: categoryImages.car,
      status: "available" as const,
      ctaLabel: "Otomobil Sistemlerini Keşfet",
    },
  ],
  en: [
    {
      title: "Motorcycle",
      description:
        "MotoPlay Series — wireless CarPlay, Android Auto, cameras, and riding-focused smart displays for motorcycles.",
      href: "/products/motorcycle",
      image: categoryImages.motorcycle,
      status: "available" as const,
      ctaLabel: "Explore MotoPlay Series",
    },
    {
      title: "Car",
      description:
        "Car Technology Systems — connected dash cameras, 360° vision systems, and premium multimedia platforms.",
      href: "/products/car",
      image: categoryImages.car,
      status: "available" as const,
      ctaLabel: "Explore Car Systems",
    },
  ],
}

const headings = {
  tr: { eyebrow: "Ürün Aileleri", title: "Her sürüş için bir sistem" },
  en: { eyebrow: "Product Families", title: "A system for every ride" },
}

export function ProductCategories({ locale }: ProductCategoriesProps) {
  const cats = categories[locale]
  const h = headings[locale]

  return (
    <section className="border-t border-border/30 py-24">
      <div className="section-container space-y-14">
        <SectionHeading eyebrow={h.eyebrow} title={h.title} />
        <div className="grid gap-4 sm:grid-cols-2">
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
