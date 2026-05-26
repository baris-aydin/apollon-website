import Link from "next/link"
import { Check } from "lucide-react"
import { type Locale } from "@/lib/i18n"

type Product = {
  name: string
  subtitle: string
  tag: string
}

const content = {
  tr: {
    eyebrow: "Araç Güvenlik & Kamera",
    heading: "Her yolculuk için bağlantılı güvenlik.",
    body: "Apollon akıllı araç kameraları; kayıt, uzaktan erişim, bulut desteği, sürüş güvenliği ve modern araç izleme özelliklerini bir araya getirerek sürücüleri yolda ve park halindeyken korumaya yardımcı olur.",
    features: [
      "Modele göre 2K / Full HD kayıt",
      "Ön/arka kamera desteği",
      "Desteklenen modellerde 4G uzaktan erişim",
      "Desteklenen modellerde bulut desteği",
      "Elektronik çit ve anlık bildirim",
      "TF kart depolama",
    ],
    cta: "Araç Kameralarını Keşfet",
    ctaHref: "/products/car-safety-security",
    products: [
      { name: "DC-UHD04", subtitle: "Akıllı Araç Kamerası", tag: "2K" },
      { name: "DC-UHD5", subtitle: "4G Araç Kamerası", tag: "4G" },
      { name: "L3", subtitle: "Akıllı Araç Kamerası", tag: "Full HD" },
    ] as Product[],
  },
  en: {
    eyebrow: "Car Safety & Security",
    heading: "Connected protection for every journey.",
    body: "Apollon smart dashcams combine recording, remote access, cloud support, driving security, and modern vehicle monitoring features to protect drivers on the road and while parked.",
    features: [
      "2K / Full HD recording depending on model",
      "Front/rear camera support",
      "4G remote access on supported models",
      "Cloud support on supported models",
      "Electronic fence and push notification",
      "TF card storage",
    ],
    cta: "Explore Dashcams",
    ctaHref: "/products/car-safety-security",
    products: [
      { name: "DC-UHD04", subtitle: "Smart Dashcam", tag: "2K" },
      { name: "DC-UHD5", subtitle: "4G Dashcam", tag: "4G" },
      { name: "L3", subtitle: "Smart Dashcam", tag: "Full HD" },
    ] as Product[],
  },
}

export function SafetyPreview({ locale }: { locale: Locale }) {
  const c = content[locale]
  return (
    <section className="border-t border-border/30 py-24">
      <div className="section-container">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-4">
            {c.products.map((product) => (
              <div
                key={product.name}
                className="glass-card flex items-center gap-4 rounded-sm p-4"
              >
                <div className="h-20 w-28 shrink-0 rounded-sm bg-surface-raised" />
                <div className="flex-1 space-y-1">
                  <p className="font-heading text-sm font-semibold text-foreground">
                    {product.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{product.subtitle}</p>
                </div>
                <span className="shrink-0 rounded-full border border-bronze/30 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-widest text-bronze/70">
                  {product.tag}
                </span>
              </div>
            ))}
          </div>

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

            <ul className="space-y-2.5">
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

            <Link
              href={`/${locale}${c.ctaHref}`}
              className="inline-flex rounded-sm border border-bronze bg-bronze px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-bronze/90"
            >
              {c.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
