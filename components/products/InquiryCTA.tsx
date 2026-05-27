import Link from "next/link"

type InquiryCTAProps = {
  title: string
  description?: string
  ctaLabel: string
  ctaHref: string
  variant?: "card" | "banner"
}

export function InquiryCTA({
  title,
  description,
  ctaLabel,
  ctaHref,
  variant = "card",
}: InquiryCTAProps) {
  if (variant === "banner") {
    return (
      <div className="relative rounded-sm border border-bronze/20 p-8" style={{ background: "oklch(0.22 0.08 245 / 0.15)" }}>
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-sm">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_0%_50%,oklch(0.70_0.12_65_/_0.06),transparent)]" />
        </div>
        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <h3 className="font-heading text-xl font-semibold leading-[1.25]">{title}</h3>
            {description && (
              <p className="text-sm text-muted-foreground">{description}</p>
            )}
          </div>
          <Link
            href={ctaHref}
            className="inline-flex shrink-0 items-center rounded-sm border border-bronze bg-bronze px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-bronze/90"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="glass-card space-y-4 rounded-sm p-6">
      <h3 className="font-heading text-lg font-semibold">{title}</h3>
      {description && (
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      )}
      <Link
        href={ctaHref}
        className="inline-flex items-center rounded-sm border border-bronze bg-bronze px-5 py-2 text-sm font-semibold text-primary-foreground transition-all hover:bg-bronze/90"
      >
        {ctaLabel}
      </Link>
    </div>
  )
}
