import Link from "next/link"
import { ChevronRight, type LucideIcon } from "lucide-react"

type ProductCategoryCardProps = {
  title: string
  description: string
  href: string
  icon: LucideIcon
  status?: "available" | "coming-soon"
  ctaLabel?: string
}

export function ProductCategoryCard({
  title,
  description,
  href,
  icon: Icon,
  status = "available",
  ctaLabel = "Explore",
}: ProductCategoryCardProps) {
  return (
    <Link
      href={href}
      className="group glass-card relative flex flex-col gap-5 rounded-sm p-6 transition-all hover:border-bronze/40 hover:shadow-[0_0_30px_oklch(0.70_0.12_65_/_0.08)]"
    >
      {status === "coming-soon" && (
        <span className="absolute right-4 top-4 rounded-full border border-bronze/30 px-2 py-0.5 text-[10px] font-medium uppercase tracking-widest text-bronze/60">
          Soon
        </span>
      )}

      <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-bronze/20 text-bronze" style={{ background: "oklch(0.70 0.12 65 / 0.08)" }}>
        <Icon className="h-5 w-5" />
      </div>

      <div className="space-y-2">
        <h3 className="font-heading text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-bronze">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>

      <div className="mt-auto flex items-center gap-1 text-xs font-medium text-bronze/60 transition-colors group-hover:text-bronze">
        <span>{ctaLabel}</span>
        <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  )
}
