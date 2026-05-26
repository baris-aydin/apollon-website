import Link from "next/link"
import { Check, ChevronRight, type LucideIcon } from "lucide-react"

type LargeCategoryCardProps = {
  title: string
  description: string
  features: string[]
  href: string
  icon: LucideIcon
  status?: "available" | "coming-soon"
  ctaLabel: string
  badge?: string
}

export function LargeCategoryCard({
  title,
  description,
  features,
  href,
  icon: Icon,
  status = "available",
  ctaLabel,
  badge,
}: LargeCategoryCardProps) {
  return (
    <Link
      href={href}
      className="group glass-card relative flex flex-col gap-6 rounded-sm p-8 transition-all hover:border-bronze/40 hover:shadow-[0_0_40px_oklch(0.70_0.12_65_/_0.08)]"
    >
      {(status === "coming-soon" || badge) && (
        <span className="absolute right-5 top-5 rounded-full border border-bronze/30 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-widest text-bronze/60">
          {badge ?? "Soon"}
        </span>
      )}

      <div
        className="flex h-12 w-12 items-center justify-center rounded-sm border border-bronze/20 text-bronze"
        style={{ background: "oklch(0.70 0.12 65 / 0.08)" }}
      >
        <Icon className="h-6 w-6" />
      </div>

      <div className="space-y-2">
        <h3 className="font-heading text-xl font-semibold leading-snug text-foreground transition-colors group-hover:text-bronze">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>

      <ul className="space-y-2">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
            <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-bronze/50" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-center gap-1.5 text-sm font-medium text-bronze/60 transition-colors group-hover:text-bronze">
        <span>{ctaLabel}</span>
        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  )
}
