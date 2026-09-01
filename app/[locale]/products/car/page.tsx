import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Check, ChevronRight } from "lucide-react"
import { type Locale } from "@/lib/i18n"
import { Reveal } from "@/components/motion/Reveal"
import {
  CAR_GROUP_LABELS,
  COMPATIBLE_VEHICLE_BRANDS,
  carProductsByGroup,
  type CarProductGroup,
} from "@/lib/products/car"

type PageProps = { params: Promise<{ locale: Locale }> }

// ─── Content ─────────────────────────────────────────────────────────────────

const content = {
  en: {
    meta: {
      title: "Car Technology Systems | Apollon Entertainment Systems",
      description:
        "Apollon Car Technology Systems — connected dash cameras, multi-channel and 360° vision systems, and Qualcomm-based premium multimedia platforms with ALPINE DSP certified audio technology.",
    },
    hero: {
      eyebrow: "APOLLON CAR",
      title: "Car Technology Systems",
      subtitle:
        "Connected driving, advanced visibility, and premium multimedia — engineered for the modern vehicle.",
      primaryCta: "Explore Products",
      secondaryCta: "Request Product Information",
    },
    brands: {
      heading: "Designed for the Cars You Drive",
      text: "Apollon multimedia solutions are available for a wide range of vehicle platforms, combining modern connectivity and premium in-car technology with vehicle-specific integration.",
      note: "Fitment depends on model, year, trim, and factory system. Contact Apollon to confirm compatibility for your vehicle.",
      cta: "Check Compatibility",
    },
    viewProduct: "View Product",
    inquiry: {
      heading: "Which system fits your vehicle?",
      text: "Tell us about your vehicle and how you use it. Our team can guide you toward the right camera or multimedia system and explain installation requirements.",
      primaryCta: "Request Product Information",
      secondaryCta: "Become a Partner",
    },
  },
  tr: {
    meta: {
      title: "Otomobil Teknoloji Sistemleri | Apollon Entertainment Systems",
      description:
        "Apollon Otomobil Teknoloji Sistemleri — bağlantılı araç kameraları, çok kanallı ve 360° görüş sistemleri ve ALPINE DSP sertifikalı ses teknolojisine sahip Qualcomm tabanlı premium multimedya platformları.",
    },
    hero: {
      eyebrow: "APOLLON OTOMOBİL",
      title: "Otomobil Teknoloji Sistemleri",
      subtitle:
        "Modern araçlar için bağlantı, gelişmiş görüş ve premium multimedya teknolojileri.",
      primaryCta: "Ürünleri Keşfet",
      secondaryCta: "Ürün Bilgisi Al",
    },
    brands: {
      heading: "Aracınıza Uyum Sağlayan Teknoloji",
      text: "Apollon multimedya çözümleri; modern bağlantı özelliklerini, premium araç içi teknolojileri ve araca özel entegrasyonu geniş bir araç yelpazesiyle buluşturur.",
      note: "Uyumluluk; model, yıl, donanım paketi ve fabrika sistemine göre değişir. Aracınız için uyumluluğu doğrulamak üzere Apollon ile iletişime geçin.",
      cta: "Uyumluluk Sor",
    },
    viewProduct: "Ürünü İncele",
    inquiry: {
      heading: "Aracınıza hangi sistem uygun?",
      text: "Aracınızı ve kullanım şeklinizi paylaşın. Ekibimiz doğru kamera veya multimedya sistemine yönlendirebilir ve montaj gereksinimlerini açıklayabilir.",
      primaryCta: "Ürün Bilgisi Al",
      secondaryCta: "İş Ortağımız Ol",
    },
  },
}

const GROUP_ORDER: CarProductGroup[] = ["connected-cameras", "premium-multimedia"]

// ─── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const c = content[locale]
  return {
    title: c.meta.title,
    description: c.meta.description,
    openGraph: {
      title: c.meta.title,
      description: c.meta.description,
      type: "website",
    },
  }
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function CarProductsPage({ params }: PageProps) {
  const { locale } = await params
  const c = content[locale]

  return (
    <main>
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-background">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_25%_-10%,oklch(0.22_0.08_245_/_0.20),transparent)]" />
        </div>

        {/* Hero image — right side, desktop only */}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] lg:block">
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src="/images/home/categories/car-multimedia.jpg"
              alt="Apple CarPlay touchscreen integrated into a modern vehicle dashboard"
              fill
              priority
              className="object-cover object-center"
              sizes="(min-width: 1536px) 700px, 46vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-background/25 to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-black/20" />
          </div>
        </div>

        <div className="section-container relative">
          <div className="py-28 lg:max-w-[56%]">
            <div className="space-y-8 text-center lg:text-left">
              <div className="flex items-center justify-center gap-3 lg:justify-start">
                <span className="h-px w-10 bg-bronze/40" />
                <span className="text-xs font-medium uppercase tracking-[0.35em] text-bronze/70">
                  {c.hero.eyebrow}
                </span>
                <span className="h-px w-10 bg-bronze/40" />
              </div>
              <h1 className="font-heading text-4xl font-bold leading-[1.12] tracking-tight md:text-5xl lg:text-6xl pb-[0.14em]">
                {c.hero.title}
              </h1>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground lg:mx-0">
                {c.hero.subtitle}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                <a
                  href="#products"
                  className="inline-flex items-center rounded-sm border border-bronze bg-bronze px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-bronze/90 hover:shadow-[0_0_24px_oklch(0.70_0.12_65_/_0.35)]"
                >
                  {c.hero.primaryCta}
                </a>
                <Link
                  href={`/${locale}/contact?type=product#contact-form`}
                  className="inline-flex items-center rounded-sm border border-border px-7 py-3 text-sm font-semibold text-foreground transition-all hover:border-bronze/40 hover:text-bronze"
                >
                  {c.hero.secondaryCta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Product groups */}
      <div id="products">
        {GROUP_ORDER.map((group, groupIdx) => {
          const g = CAR_GROUP_LABELS[group][locale]
          const products = carProductsByGroup(group)

          return (
            <section key={group} className="border-t border-border/30 py-24">
              <div className="section-container space-y-12">
                <Reveal className="max-w-2xl space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-bronze/40" />
                    <span className="font-mono text-xs text-bronze/50 tabular-nums">
                      0{groupIdx + 1}
                    </span>
                  </div>
                  <h2 className="font-heading text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl pb-[0.1em]">
                    {g.title}
                  </h2>
                  <p className="text-base leading-relaxed text-muted-foreground">{g.intro}</p>
                </Reveal>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {products.map((product, i) => (
                    <Reveal key={product.slug} delay={i * 60}>
                      <Link
                        href={`/${locale}/products/car/${product.slug}`}
                        className="group glass-card flex h-full flex-col gap-5 rounded-sm p-6 transition-all hover:border-bronze/40 hover:shadow-[0_0_30px_oklch(0.70_0.12_65_/_0.08)]"
                      >
                        {/* Product image where supplied; otherwise a neutral
                            placeholder. object-contain keeps the whole unit
                            visible and unoptimized preserves the original PNG. */}
                        {product[locale].mainImage ? (
                          <div
                            className="relative aspect-[16/10] overflow-hidden rounded-sm border border-border/40"
                            style={{ background: "#ffffff" }}
                          >
                            <Image
                              src={product[locale].mainImage.src}
                              alt={product[locale].mainImage.alt}
                              fill
                              unoptimized
                              className="object-contain p-2"
                              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                            />
                          </div>
                        ) : (
                          <div className="flex aspect-[16/10] items-center justify-center rounded-sm border border-border/40 bg-surface-raised">
                            <span className="px-3 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-bronze/30">
                              {product.name}
                            </span>
                          </div>
                        )}

                        <div className="space-y-1.5">
                          <h3 className="font-heading text-lg font-semibold leading-[1.3] text-foreground transition-colors group-hover:text-bronze">
                            {product.name}
                          </h3>
                          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-bronze/60">
                            {product[locale].cardType ?? product[locale].productType}
                          </p>
                        </div>

                        <ul className="space-y-2">
                          {product[locale].highlights.map((h) => (
                            <li
                              key={h}
                              className="flex items-start gap-2.5 text-xs text-muted-foreground"
                            >
                              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-bronze/50" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>

                        <span className="mt-auto flex items-center gap-1.5 text-sm font-medium text-bronze/60 transition-colors group-hover:text-bronze">
                          {c.viewProduct}
                          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>
          )
        })}
      </div>

      {/* 3. Vehicle brand compatibility — not a product catalogue, no links */}
      <section className="border-t border-border/30 py-24">
        <div className="section-container space-y-12">
          <Reveal className="mx-auto max-w-2xl space-y-4 text-center">
            <h2 className="font-heading text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl pb-[0.1em]">
              {c.brands.heading}
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">{c.brands.text}</p>
          </Reveal>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
            {COMPATIBLE_VEHICLE_BRANDS.map((brand, i) => (
              <Reveal key={brand} delay={i * 40}>
                <div className="glass-card flex h-full min-h-[84px] items-center justify-center rounded-sm px-4 py-6 text-center">
                  <span className="font-heading text-sm font-semibold leading-snug text-foreground/80">
                    {brand}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="flex flex-col items-center gap-5 text-center">
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground/70">
              {c.brands.note}
            </p>
            <Link
              href={`/${locale}/contact?type=product#contact-form`}
              className="inline-flex items-center rounded-sm border border-bronze bg-bronze px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-bronze/90 hover:shadow-[0_0_20px_oklch(0.70_0.12_65_/_0.3)]"
            >
              {c.brands.cta}
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 4. Inquiry CTA */}
      <section className="border-t border-border/30 py-24">
        <div className="section-container">
          <Reveal className="mx-auto max-w-2xl space-y-10 text-center">
            <div className="space-y-5">
              <h2 className="font-heading text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl pb-[0.1em]">
                {c.inquiry.heading}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">{c.inquiry.text}</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href={`/${locale}/contact?type=product#contact-form`}
                className="rounded-sm border border-bronze bg-bronze px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-bronze/90 hover:shadow-[0_0_24px_oklch(0.70_0.12_65_/_0.3)]"
              >
                {c.inquiry.primaryCta}
              </Link>
              <Link
                href={`/${locale}/contact?type=distributor#contact-form`}
                className="rounded-sm border border-border/60 px-7 py-3 text-sm font-semibold text-foreground transition-all hover:border-bronze/40 hover:text-bronze"
              >
                {c.inquiry.secondaryCta}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
