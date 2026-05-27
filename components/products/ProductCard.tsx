import Link from "next/link"
import Image from "next/image"
import { type Locale } from "@/lib/i18n"

type ProductCardProps = {
  title: string
  description: string
  href: string
  imageSrc?: string
  status?: "available" | "coming-soon" | "new"
  locale: Locale
}

const statusLabels = {
  available:    { tr: "Mevcut",  en: "Available"   },
  "coming-soon":{ tr: "Yakında", en: "Coming Soon" },
  new:          { tr: "Yeni",    en: "New"          },
}

const statusStyles = {
  available:    "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  "coming-soon":"text-bronze/70  border-bronze/30   bg-[oklch(0.70_0.12_65_/_0.08)]",
  new:          "text-blue-400   border-blue-400/30  bg-blue-400/10",
}

export function ProductCard({
  title,
  description,
  href,
  imageSrc,
  status = "available",
  locale,
}: ProductCardProps) {
  return (
    <Link
      href={href}
      className="group glass-card flex flex-col overflow-hidden rounded-sm transition-all hover:border-bronze/40 hover:shadow-[0_0_30px_oklch(0.70_0.12_65_/_0.08)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-surface-raised" />
        )}
        <div className="absolute right-3 top-3">
          <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-widest ${statusStyles[status]}`}>
            {statusLabels[status][locale]}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-heading text-base font-semibold text-foreground transition-colors group-hover:text-bronze">
          {title}
        </h3>
        <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2 pb-1.5">
          {description}
        </p>
      </div>
    </Link>
  )
}
