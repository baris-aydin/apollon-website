// Flat catalogue of every active Apollon product, grouped by family.
// Used by the Contact Form's "Product of Interest" selector.
// Official model names are identical in every locale and are never translated.

import { type Locale } from "@/lib/i18n"
import { CAR_PRODUCTS } from "@/lib/products/car"

export const MOTORCYCLE_PRODUCT_NAMES = [
  "APOLLON RX ONE ZM3",
  "APOLLON RIDE ONE",
  "APOLLON RIDE VISION",
] as const

export const CAR_PRODUCT_NAMES = CAR_PRODUCTS.map((p) => p.name)

export const PRODUCT_FAMILY_LABELS: Record<"motorcycle" | "car", Record<Locale, string>> = {
  motorcycle: { en: "Motorcycle — MotoPlay Series", tr: "Motosiklet — MotoPlay Series" },
  car: { en: "Car Technology Systems", tr: "Otomobil Teknoloji Sistemleri" },
}

export type ProductOptionGroup = { family: "motorcycle" | "car"; products: string[] }

export const PRODUCT_OPTION_GROUPS: ProductOptionGroup[] = [
  { family: "motorcycle", products: [...MOTORCYCLE_PRODUCT_NAMES] },
  { family: "car", products: CAR_PRODUCT_NAMES },
]

const ALL_PRODUCT_NAMES = new Set(
  PRODUCT_OPTION_GROUPS.flatMap((g) => g.products)
)

export function isKnownProduct(value: string): boolean {
  return ALL_PRODUCT_NAMES.has(value)
}
