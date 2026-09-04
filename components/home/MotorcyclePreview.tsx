import Image from "next/image"
import Link from "next/link"
import { type Locale } from "@/lib/i18n"
import { MOTOPLAY_IMAGE_BY_NAME } from "@/lib/products/motoplay"

type Product = {
  name: string
  description: string
  tags: string[]
}

const content = {
  tr: {
    eyebrow: "MotoPlay Series",
    heading: "Sürücünün dünyası için akıllı teknoloji.",
    body: "Apollon MotoPlay Series; kablosuz Apple CarPlay, Android Auto, yüksek parlaklıklı ekran, kamera, lastik basınç takibi, Bluetooth ses ve suya dayanıklı tasarımı sürüş odaklı tek bir deneyimde birleştirir.",
    cta: "MotoPlay Series'i Keşfet",
    ctaHref: "/products/motorcycle",
    products: [
      {
        name: "APOLLON RIDE VISION",
        description: "1080P kamera, CarPlay, Android Auto ve navigasyon",
        tags: ["1080P Kamera", "CarPlay", "Android Auto", "Navigasyon"],
      },
      {
        name: "APOLLON RIDE ONE",
        description: "5.5\" IPS ekran, CarPlay, Android Auto ve navigasyon",
        tags: ["5.5\" IPS", "CarPlay", "Android Auto", "Navigasyon"],
      },
      {
        name: "APOLLON RX ONE ZM3",
        description: "4K, GPS ve Wi-Fi’li akıllı motosiklet kamerası",
        tags: ["4K", "GPS", "Wi-Fi", "Bluetooth 5.0"],
      },
    ] as Product[],
  },
  en: {
    eyebrow: "MotoPlay Series",
    heading: "Smart technology for the rider's world.",
    body: "Apollon MotoPlay Series brings wireless Apple CarPlay, Android Auto, high-brightness displays, cameras, tire pressure monitoring, Bluetooth audio, and waterproof design into one riding-focused experience.",
    cta: "Explore MotoPlay Series",
    ctaHref: "/products/motorcycle",
    products: [
      {
        name: "APOLLON RIDE VISION",
        description: "1080P camera, CarPlay, Android Auto and navigation",
        tags: ["1080P Camera", "CarPlay", "Android Auto", "Navigation"],
      },
      {
        name: "APOLLON RIDE ONE",
        description: "5.5\" IPS display with CarPlay, Android Auto and navigation",
        tags: ["5.5\" IPS", "CarPlay", "Android Auto", "Navigation"],
      },
      {
        name: "APOLLON RX ONE ZM3",
        description: "4K smart motorcycle camera with GPS and Wi-Fi",
        tags: ["4K", "GPS", "Wi-Fi", "Bluetooth 5.0"],
      },
    ] as Product[],
  },
}

export function MotorcyclePreview({ locale }: { locale: Locale }) {
  const c = content[locale]
  return (
    <section className="border-t border-border/30 py-24">
      <div className="section-container space-y-14">
        <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
          <div className="space-y-4">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-bronze/70">
              {c.eyebrow}
            </span>
            <h2 className="font-heading text-3xl font-semibold leading-[1.15] md:text-4xl pb-[0.1em]">
              {c.heading}
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              {c.body}
            </p>
          </div>
          <Link
            href={`/${locale}${c.ctaHref}`}
            className="shrink-0 rounded-sm border border-bronze bg-bronze px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-bronze/90"
          >
            {c.cta}
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {c.products.map((product) => (
            <Link
              key={product.name}
              href={`/${locale}${c.ctaHref}`}
              className="group glass-card flex flex-col gap-4 rounded-sm p-5 transition-all hover:border-bronze/40 hover:shadow-[0_0_30px_oklch(0.70_0.12_65_/_0.06)]"
            >
              {/* Same main.png as the MotoPlay listing cards and detail pages.
                  White panel to match that section — the supplied product
                  photography has a white background. */}
              <div
                className="relative h-40 overflow-hidden rounded-sm border border-border/40"
                style={{ background: "#ffffff" }}
              >
                {MOTOPLAY_IMAGE_BY_NAME[product.name] && (
                  <Image
                    src={MOTOPLAY_IMAGE_BY_NAME[product.name]}
                    alt={product.name}
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-3"
                  />
                )}
              </div>
              <div className="space-y-1.5">
                <h3 className="font-heading text-sm font-semibold text-foreground transition-colors group-hover:text-bronze">
                  {product.name}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-bronze/20 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-bronze/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
