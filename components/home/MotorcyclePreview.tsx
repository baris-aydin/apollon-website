import Link from "next/link"
import { type Locale } from "@/lib/i18n"

type Product = {
  name: string
  description: string
  tags: string[]
}

const content = {
  tr: {
    eyebrow: "Motosiklet Akıllı Sistemleri",
    heading: "Sürücünün dünyası için akıllı teknoloji.",
    body: "Apollon motosiklet sistemleri; kablosuz Apple CarPlay, Android Auto, yüksek parlaklıklı ekran, kamera, lastik basınç takibi, Bluetooth ses ve suya dayanıklı tasarımı sürüş odaklı tek bir deneyimde birleştirir.",
    cta: "Motosiklet Sistemlerini Keşfet",
    ctaHref: "/products/motorcycle-smart-systems",
    products: [
      {
        name: "MDC-SMART02",
        description: "Kablosuz CarPlay & Android Auto entegrasyonu",
        tags: ["CarPlay", "Android Auto", "Su Geçirmez"],
      },
      {
        name: "MDC-PLUS02",
        description: "Gelişmiş bağlantı ve çoklu kamera desteği",
        tags: ["Gelişmiş Bağlantı", "Çoklu Kamera"],
      },
      {
        name: "Moto Dash Cam TR V2",
        description: "Suya dayanıklı motosiklet kayıt kamerası",
        tags: ["Kayıt", "Su Geçirmez"],
      },
    ] as Product[],
  },
  en: {
    eyebrow: "Motorcycle Smart Systems",
    heading: "Smart technology for the rider's world.",
    body: "Apollon motorcycle systems bring wireless Apple CarPlay, Android Auto, high-brightness displays, cameras, tire pressure monitoring, Bluetooth audio, and waterproof design into one riding-focused experience.",
    cta: "Explore Motorcycle Systems",
    ctaHref: "/products/motorcycle-smart-systems",
    products: [
      {
        name: "MDC-SMART02",
        description: "Wireless CarPlay & Android Auto integration",
        tags: ["CarPlay", "Android Auto", "Waterproof"],
      },
      {
        name: "MDC-PLUS02",
        description: "Advanced connectivity and multi-camera support",
        tags: ["Advanced Connectivity", "Multi-Camera"],
      },
      {
        name: "Moto Dash Cam TR V2",
        description: "Waterproof motorcycle recording camera system",
        tags: ["Recording", "Waterproof"],
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
              <div className="h-40 rounded-sm bg-surface-raised" />
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
