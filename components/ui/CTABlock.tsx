import Link from "next/link"

type CTABlockProps = {
  eyebrow?: string
  title: string
  description?: string
  primaryLabel: string
  primaryHref: string
  secondaryLabel?: string
  secondaryHref?: string
  variant?: "default" | "muted"
}

export function CTABlock({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  variant = "default",
}: CTABlockProps) {
  return (
    <section className={`py-24 ${variant === "muted" ? "bg-muted" : "relative overflow-hidden bg-background"}`}>
      {variant !== "muted" && (
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,oklch(0.22_0.08_245_/_0.15),transparent)]" />
      )}

      <div className="section-container relative">
        <div className="mx-auto max-w-3xl space-y-8 text-center">
          {eyebrow && (
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-bronze/40" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-bronze/70">
                {eyebrow}
              </span>
              <span className="h-px w-8 bg-bronze/40" />
            </div>
          )}

          <h2 className="font-heading text-3xl font-bold tracking-tight md:text-5xl">
            {title}
          </h2>

          {description && (
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {description}
            </p>
          )}

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href={primaryHref}
              className="inline-flex items-center gap-2 rounded-sm border border-bronze bg-bronze px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-bronze/90 hover:shadow-[0_0_20px_oklch(0.70_0.12_65_/_0.3)]"
            >
              {primaryLabel}
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link
                href={secondaryHref}
                className="inline-flex items-center gap-2 rounded-sm border border-border px-7 py-3 text-sm font-semibold text-foreground transition-all hover:border-bronze/40 hover:text-bronze"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
