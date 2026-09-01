import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Check, ChevronRight } from "lucide-react"
import { SpecsTable, type SpecRow } from "@/components/products/SpecsTable"
import { type Locale } from "@/lib/i18n"
import { Reveal } from "@/components/motion/Reveal"
import {
  CAR_PRODUCTS,
  CAR_GROUP_LABELS,
  getCarProduct,
  type CarProduct,
} from "@/lib/products/car"

type PageProps = { params: Promise<{ locale: Locale; slug: string }> }

// ─── Static copy ─────────────────────────────────────────────────────────────

const ui = {
  en: {
    backLabel: "Car Technology Systems",
    featuresHeading: "Key features",
    specsTitle: "Product information",
    galleryTitle: "Gallery",
    galleryPending: "Product photography coming soon",
    imagePending: "Product image coming soon",
    inquiryTitle: "Interested in this product?",
    inquiryText:
      "Contact Apollon for availability, vehicle fitment, installation guidance, and dealer or distributor information.",
    inquiryPrimary: "Request Product Information",
    inquirySecondary: "Contact for Installation / Dealer Info",
    specLabels: {
      name: "Product name",
      family: "Product family",
      group: "Category",
      type: "Product type",
      configuration: "Configuration",
      model: "Model",
    },
    family: "Car Technology Systems",
    related: "Other products in this range",
    featuresEyebrow: "Features",
    sectionsHeading: "What it offers",
  },
  tr: {
    backLabel: "Otomobil Teknoloji Sistemleri",
    featuresHeading: "Öne çıkan özellikler",
    specsTitle: "Ürün bilgileri",
    galleryTitle: "Galeri",
    galleryPending: "Ürün fotoğrafları yakında",
    imagePending: "Ürün görseli yakında",
    inquiryTitle: "Bu ürünle ilgileniyor musunuz?",
    inquiryText:
      "Stok durumu, araç uyumluluğu, montaj yönlendirmesi ve bayi veya distribütör bilgisi için Apollon ile iletişime geçin.",
    inquiryPrimary: "Ürün Bilgisi Al",
    inquirySecondary: "Montaj / Bayi Bilgisi İçin İletişime Geç",
    specLabels: {
      name: "Ürün adı",
      family: "Ürün ailesi",
      group: "Kategori",
      type: "Ürün tipi",
      configuration: "Donanım",
      model: "Model",
    },
    family: "Otomobil Teknoloji Sistemleri",
    related: "Bu seriden diğer ürünler",
    featuresEyebrow: "Özellikler",
    sectionsHeading: "Neler sunar",
  },
}

// ─── Specs ───────────────────────────────────────────────────────────────────
// Built strictly from catalogue-confirmed fields. Nothing is inferred.

function buildSpecs(product: CarProduct, locale: Locale): SpecRow[] {
  const l = ui[locale]
  const rows: SpecRow[] = [
    { label: l.specLabels.name, value: product.name },
  ]
  if (product.modelReference) {
    rows.push({ label: l.specLabels.model, value: product.modelReference })
  }
  rows.push(
    { label: l.specLabels.family, value: l.family },
    { label: l.specLabels.group, value: CAR_GROUP_LABELS[product.group][locale].title }
  )
  if (product.configuration) {
    rows.push({ label: l.specLabels.configuration, value: product.configuration })
  } else {
    rows.push({ label: l.specLabels.type, value: product[locale].productType })
  }
  return rows
}

// Note: no generateStaticParams here. The parent [locale] segment does not
// enumerate its params, and the surrounding layout renders per request, so this
// route stays request-rendered like every other product route in the app.

// ─── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params
  const product = getCarProduct(slug)
  if (!product) return {}
  const c = product[locale]
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    openGraph: {
      title: c.metaTitle,
      description: c.metaDescription,
      type: "website",
    },
  }
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function CarProductPage({ params }: PageProps) {
  const { locale, slug } = await params
  const product = getCarProduct(slug)
  if (!product) notFound()

  const c = product[locale]
  const l = ui[locale]
  const specs = buildSpecs(product, locale)
  const related = CAR_PRODUCTS.filter(
    (p) => p.group === product.group && p.slug !== product.slug
  ).slice(0, 3)

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
              href={`/${locale}/products/car`}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-bronze"
            >
              <ChevronRight className="h-3 w-3 rotate-180" />
              {l.backLabel}
            </Link>
          </div>

          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-bronze/40" />
              <span className="text-xs font-medium uppercase tracking-[0.35em] text-bronze/70">
                {CAR_GROUP_LABELS[product.group][locale].title}
              </span>
              <span className="h-px w-10 bg-bronze/40" />
            </div>

            <h1 className="font-heading text-4xl font-bold leading-[1.12] tracking-tight md:text-5xl lg:text-6xl pb-[0.14em]">
              {product.name}
            </h1>

            {/* Product type / configuration subtitle */}
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-bronze/70">
              {c.productType}
            </p>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {c.shortDescription}
            </p>

            {c.summary && (
              <p className="mx-auto max-w-2xl text-xs leading-relaxed tracking-wide text-bronze/60">
                {c.summary}
              </p>
            )}

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href={`/${locale}/contact?type=product#contact-form`}
                className="inline-flex items-center rounded-sm border border-bronze bg-bronze px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-bronze/90 hover:shadow-[0_0_24px_oklch(0.70_0.12_65_/_0.35)]"
              >
                {l.inquiryPrimary}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center rounded-sm border border-border px-7 py-3 text-sm font-semibold text-foreground transition-all hover:border-bronze/40 hover:text-bronze"
              >
                {l.inquirySecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Product intro - official description */}
      {c.descriptionParagraphs && c.descriptionParagraphs.length > 0 && (
        <section className="border-t border-border/30 py-16">
          <div className="section-container">
            <Reveal className="mx-auto max-w-3xl space-y-5">
              {c.descriptionParagraphs.map((para, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed text-muted-foreground md:text-lg"
                >
                  {para}
                </p>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {/* 3. Key Features + Product Image */}
      <section className="border-t border-border/30 py-20">
        <div className="section-container">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
            <Reveal className="space-y-6">
              <h2 className="font-heading text-2xl font-bold leading-[1.15] tracking-tight md:text-3xl pb-[0.1em]">
                {l.featuresHeading}
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
            </Reveal>

            {/* Product image. Where photography has not been supplied yet a
                neutral placeholder stands in - never a stock or stand-in photo.
                Real shots render unoptimized with object-contain so the full
                hardware stays visible at the supplied resolution. */}
            <Reveal delay={150}>
              {c.mainImage ? (
                <div
                  className="relative w-full overflow-hidden rounded-sm border border-border/40"
                  style={{ aspectRatio: "4 / 3", background: "#ffffff" }}
                >
                  <Image
                    src={c.mainImage.src}
                    alt={c.mainImage.alt}
                    fill
                    priority
                    unoptimized
                    className="object-contain"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              ) : (
                <div className="glass-card flex aspect-[4/3] items-center justify-center rounded-sm">
                  <div className="space-y-2 px-6 text-center">
                    <p className="text-xs font-medium uppercase tracking-[0.3em] text-bronze/40">
                      {product.name}
                    </p>
                    <p className="text-xs text-muted-foreground/40">{l.imagePending}</p>
                  </div>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Feature detail cards - official feature explanations */}
      {c.featureSections && c.featureSections.length > 0 && (
        <section className="border-t border-border/30 py-20">
          <div className="section-container space-y-6">
            <Reveal className="mb-10 space-y-3">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-bronze/40" />
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-bronze/70">
                  {l.featuresEyebrow}
                </span>
              </div>
              <h2 className="font-heading text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl pb-[0.1em]">
                {l.sectionsHeading}
              </h2>
            </Reveal>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {c.featureSections.map((section, i) => (
                <Reveal key={section.heading} delay={i * 60}>
                  <div className="glass-card h-full space-y-4 rounded-sm p-6">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs tabular-nums text-bronze/35">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="h-px flex-1 bg-bronze/10" />
                    </div>
                    <h3 className="font-heading text-sm font-semibold leading-[1.3] text-foreground">
                      {section.heading}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {section.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Product information + Gallery */}
      <section className="border-t border-border/30 py-20">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal className="space-y-8">
              <h2 className="font-heading text-2xl font-bold leading-[1.15] tracking-tight md:text-3xl pb-[0.1em]">
                {l.specsTitle}
              </h2>
              <SpecsTable specs={specs} />
            </Reveal>

            <Reveal delay={150} className="space-y-4">
              <h2 className="font-heading text-2xl font-bold leading-[1.15] tracking-tight md:text-3xl pb-[0.1em]">
                {l.galleryTitle}
              </h2>
              {c.galleryImages && c.galleryImages.length > 0 ? (
                <div className="grid grid-cols-2 gap-2">
                  {c.galleryImages.map((img, i) => {
                    const isLast = i === (c.galleryImages?.length ?? 0) - 1
                    return (
                      <div
                        key={img.src}
                        className={`relative overflow-hidden rounded-sm border border-border/40${isLast ? " col-span-2" : ""}`}
                        style={{ aspectRatio: "4 / 3", background: "#ffffff" }}
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          unoptimized
                          className="object-contain"
                          sizes={
                            isLast
                              ? "(min-width: 1024px) 50vw, 100vw"
                              : "(min-width: 1024px) 25vw, 50vw"
                          }
                        />
                      </div>
                    )
                  })}
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex aspect-square items-center justify-center rounded-sm border border-border/40 bg-surface-raised"
                    >
                      <span className="px-2 text-center text-[10px] uppercase tracking-widest text-muted-foreground/30">
                        {l.galleryPending}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. Related products in the same group */}
      {related.length > 0 && (
        <section className="border-t border-border/30 py-20">
          <div className="section-container space-y-10">
            <Reveal>
              <h2 className="font-heading text-2xl font-bold leading-[1.15] tracking-tight md:text-3xl pb-[0.1em]">
                {l.related}
              </h2>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 70}>
                  <Link
                    href={`/${locale}/products/car/${p.slug}`}
                    className="group glass-card flex h-full flex-col gap-3 rounded-sm p-6 transition-all hover:border-bronze/40 hover:shadow-[0_0_24px_oklch(0.70_0.12_65_/_0.08)]"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bronze/50">
                      {p[locale].cardType ?? p[locale].productType}
                    </span>
                    <h3 className="font-heading text-base font-semibold leading-[1.3] text-foreground transition-colors group-hover:text-bronze">
                      {p.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {p[locale].shortDescription}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. Inquiry CTA */}
      <section className="border-t border-border/30 py-24">
        <div className="section-container">
          <Reveal className="mx-auto max-w-2xl space-y-10 text-center">
            <div className="space-y-5">
              <h2 className="font-heading text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl pb-[0.1em]">
                {l.inquiryTitle}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">{l.inquiryText}</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href={`/${locale}/contact?type=product#contact-form`}
                className="rounded-sm border border-bronze bg-bronze px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-bronze/90 hover:shadow-[0_0_24px_oklch(0.70_0.12_65_/_0.3)]"
              >
                {l.inquiryPrimary}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="rounded-sm border border-border/60 px-7 py-3 text-sm font-semibold text-foreground transition-all hover:border-bronze/40 hover:text-bronze"
              >
                {l.inquirySecondary}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
