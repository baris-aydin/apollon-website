import Link from "next/link"
import { Check } from "lucide-react"
import { type Locale } from "@/lib/i18n"

const content = {
  tr: {
    eyebrow: "Araç Multimedya Sistemleri",
    heading: "Sürüşü yükseltin. Aracın ruhunu koruyun.",
    body: "Universal Android ekranlardan Audi, BMW, Mercedes-Benz, Porsche, Toyota, Lexus ve Range Rover / Land Rover için araca özel multimedya sistemlerine kadar Apollon, aracın kimliğini koruyarak kabin deneyimini modernleştirir.",
    features: [
      "Universal Android ekranlar",
      "Araca özel uyumluluk",
      "Apple CarPlay / Android Auto desteği",
      "Navigasyon ve eğlence",
      "Montaj odaklı premium ürün kataloğu",
    ],
    brandsLabel: "Desteklenen Markalar",
    browseCta: "Araç Sistemlerini Keşfet",
    browseHref: "/products/car-multimedia",
    contactCta: "Uyumluluk Sor",
    contactHref: "/contact",
  },
  en: {
    eyebrow: "Car Multimedia Systems",
    heading: "Upgrade the drive. Keep the soul of the car.",
    body: "From universal Android screens to vehicle-specific multimedia systems for Audi, BMW, Mercedes-Benz, Porsche, Toyota, Lexus, and Range Rover / Land Rover, Apollon helps modernize the cabin without losing the identity of the vehicle.",
    features: [
      "Universal Android screens",
      "Vehicle-specific fitment",
      "Apple CarPlay / Android Auto support",
      "Navigation and entertainment",
      "Premium installation-oriented product catalog",
    ],
    brandsLabel: "Supported Brands",
    browseCta: "Explore Car Systems",
    browseHref: "/products/car-multimedia",
    contactCta: "Check Compatibility",
    contactHref: "/contact",
  },
}

const brands = ["Audi", "BMW", "Mercedes-Benz", "Porsche", "Toyota", "Lexus", "Range Rover"]

export function CarMultimediaPreview({ locale }: { locale: Locale }) {
  const c = content[locale]
  return (
    <section className="border-t border-border/30 py-24">
      <div className="section-container">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-bronze/70">
                {c.eyebrow}
              </span>
              <h2 className="font-heading text-3xl font-semibold leading-[1.2] md:text-4xl pb-0.5">
                {c.heading}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {c.body}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={`/${locale}${c.browseHref}`}
                className="rounded-sm border border-bronze bg-bronze px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-bronze/90"
              >
                {c.browseCta}
              </Link>
              <Link
                href={`/${locale}${c.contactHref}`}
                className="rounded-sm border border-border/60 px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-bronze/40 hover:text-bronze"
              >
                {c.contactCta}
              </Link>
            </div>
          </div>

          <div className="glass-card space-y-6 rounded-sm p-7">
            <ul className="space-y-3.5">
              {c.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-sm border border-bronze/20 text-bronze"
                    style={{ background: "oklch(0.70 0.12 65 / 0.08)" }}
                  >
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="border-t border-border/30 pt-5">
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground/60">
                {c.brandsLabel}
              </p>
              <div className="flex flex-wrap gap-2">
                {brands.map((brand) => (
                  <span
                    key={brand}
                    className="rounded-sm border border-border/40 px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
