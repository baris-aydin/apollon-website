import Link from "next/link"
import { Check } from "lucide-react"
import { type Locale } from "@/lib/i18n"
import { CAR_GROUP_LABELS, carProductsByGroup } from "@/lib/products/car"

// Homepage teaser for the unified Car family. Shows one representative product
// from each Car subgroup — the full catalogue lives on /products/car.
const FEATURED_SLUGS = ["vx5", "q8-signature"]

const content = {
  tr: {
    eyebrow: "Otomobil Teknoloji Sistemleri",
    heading: "Modern araç için bağlantılı teknoloji.",
    body: "Apollon Otomobil Teknoloji Sistemleri; bağlantılı araç kameralarını, çok kanallı ve 360° görüş çözümlerini ve premium multimedya platformlarını tek bir ürün ailesinde birleştirir.",
    cta: "Otomobil Sistemlerini Keşfet",
    ctaHref: "/products/car",
  },
  en: {
    eyebrow: "Car Technology Systems",
    heading: "Connected technology for the modern vehicle.",
    body: "Apollon Car Technology Systems brings connected dash cameras, multi-channel and 360° vision solutions, and premium multimedia platforms together in a single product family.",
    cta: "Explore Car Systems",
    ctaHref: "/products/car",
  },
}

export function CarTechnologyPreview({ locale }: { locale: Locale }) {
  const c = content[locale]

  const groups = (["connected-cameras", "premium-multimedia"] as const).map((group) => ({
    group,
    label: CAR_GROUP_LABELS[group][locale],
    products: carProductsByGroup(group),
  }))

  const featured = groups.map((g) => ({
    label: g.label.title,
    product: g.products.find((p) => FEATURED_SLUGS.includes(p.slug)) ?? g.products[0],
    count: g.products.length,
  }))

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
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">{c.body}</p>
          </div>
          <Link
            href={`/${locale}${c.ctaHref}`}
            className="shrink-0 rounded-sm border border-bronze bg-bronze px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-bronze/90"
          >
            {c.cta}
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {featured.map(({ label, product, count }) => (
            <Link
              key={product.slug}
              href={`/${locale}/products/car/${product.slug}`}
              className="group glass-card flex flex-col gap-4 rounded-sm p-6 transition-all hover:border-bronze/40 hover:shadow-[0_0_30px_oklch(0.70_0.12_65_/_0.06)]"
            >
              <div className="flex items-baseline justify-between gap-3">
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-bronze/50">
                  {label}
                </span>
                <span className="shrink-0 font-mono text-[10px] tabular-nums text-muted-foreground/50">
                  {count} {locale === "tr" ? "ürün" : "products"}
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="font-heading text-lg font-semibold text-foreground transition-colors group-hover:text-bronze">
                  {product.name}
                </h3>
                <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-bronze/60">
                  {product[locale].productType}
                </p>
              </div>

              <ul className="flex flex-wrap gap-x-4 gap-y-2">
                {product[locale].highlights.slice(0, 3).map((h) => (
                  <li
                    key={h}
                    className="flex items-center gap-1.5 text-xs text-muted-foreground"
                  >
                    <Check className="h-3.5 w-3.5 shrink-0 text-bronze/50" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
