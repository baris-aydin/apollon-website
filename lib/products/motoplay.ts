// ─── MotoPlay Series — shared product identity ───────────────────────────────
//
// The slug, the customer-facing name, and the primary product photo. Consumed
// by every surface that shows a MotoPlay product card, so the same product
// always shows the same image site-wide:
//   components/home/MotorcyclePreview.tsx           (homepage cards)
//   app/[locale]/products/motorcycle/page.tsx       (MotoPlay listing cards)
//
// The detail pages in app/[locale]/products/motorcycle/[slug]/page.tsx carry
// the same `main.png` as their hero image, alongside their per-locale copy.
//
// Slugs are the legacy ids. They are internal keys that keep the existing
// product URLs working — nothing customer-facing renders them.

export type MotoPlayProduct = {
  slug: string
  name: string
  /** Original supplied PNG. Rendered unoptimized and object-contain. */
  mainImage: string
}

export const MOTOPLAY_PRODUCTS: MotoPlayProduct[] = [
  {
    slug: "mdc-smart02",
    name: "APOLLON RIDE VISION",
    mainImage: "/images/motoplay-series/ride-vision/main.png",
  },
  {
    slug: "mdc-plus02",
    name: "APOLLON RIDE ONE",
    mainImage: "/images/motoplay-series/ride-one/main.png",
  },
  {
    slug: "moto-dash-cam-tr-v2",
    name: "APOLLON RX ONE",
    mainImage: "/images/motoplay-series/rx-one/main.png",
  },
]

export const MOTOPLAY_IMAGE_BY_SLUG: Record<string, string> = Object.fromEntries(
  MOTOPLAY_PRODUCTS.map((p) => [p.slug, p.mainImage])
)

export const MOTOPLAY_IMAGE_BY_NAME: Record<string, string> = Object.fromEntries(
  MOTOPLAY_PRODUCTS.map((p) => [p.name, p.mainImage])
)
