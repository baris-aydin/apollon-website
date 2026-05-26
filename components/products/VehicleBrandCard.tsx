import Link from "next/link"
import { ChevronRight } from "lucide-react"

type VehicleBrandCardProps = {
  brand: string
  href: string
  ctaLabel: string
}

export function VehicleBrandCard({ brand, href, ctaLabel }: VehicleBrandCardProps) {
  return (
    <Link
      href={href}
      className="group glass-card flex flex-col items-center justify-center gap-2.5 rounded-sm px-4 py-6 text-center transition-all hover:border-bronze/40 hover:shadow-[0_0_24px_oklch(0.70_0.12_65_/_0.08)]"
    >
      <span className="font-heading text-sm font-semibold text-foreground transition-colors group-hover:text-bronze">
        {brand}
      </span>
      <span className="flex items-center gap-1 text-[10px] font-medium uppercase tracking-wider text-bronze/40 transition-colors group-hover:text-bronze/70">
        {ctaLabel}
        <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  )
}
