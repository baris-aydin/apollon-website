import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { type Locale } from "@/lib/i18n"

type Status = "available" | "coming-soon" | "new"

const statusStyles: Record<Status, string> = {
  available: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  "coming-soon": "text-bronze/70 border-bronze/30 bg-[oklch(0.70_0.12_65_/_0.08)]",
  new: "text-blue-400 border-blue-400/30 bg-blue-400/10",
}

const statusLabels: Record<Status, Record<Locale, string>> = {
  available: { tr: "Mevcut", en: "Available" },
  "coming-soon": { tr: "Yakında", en: "Coming Soon" },
  new: { tr: "Yeni", en: "New" },
}

type FeaturedProductCardProps = {
  name: string
  category: string
  description: string
  href: string
  status?: Status
  ctaLabel: string
  locale: Locale
}

export function FeaturedProductCard({
  name,
  category,
  description,
  href,
  status = "available",
  ctaLabel,
  locale,
}: FeaturedProductCardProps) {
  return (
    <Link
      href={href}
      className="group glass-card flex flex-col gap-4 rounded-sm p-6 transition-all hover:border-bronze/40 hover:shadow-[0_0_30px_oklch(0.70_0.12_65_/_0.08)]"
    >
      <div className="flex items-start justify-between gap-2">
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-bronze/50">
          {category}
        </span>
        <span
          className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-widest ${statusStyles[status]}`}
        >
          {statusLabels[status][locale]}
        </span>
      </div>

      <div className="space-y-1.5">
        <h3 className="font-heading text-base font-semibold text-foreground transition-colors group-hover:text-bronze">
          {name}
        </h3>
        <p className="line-clamp-3 pb-1.5 text-xs leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>

      <div className="mt-auto flex items-center gap-1 text-xs font-medium text-bronze/60 transition-colors group-hover:text-bronze">
        <span>{ctaLabel}</span>
        <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  )
}
