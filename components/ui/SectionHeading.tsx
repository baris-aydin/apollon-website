type SectionHeadingProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={`space-y-4 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <div className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
          <span className="h-px w-8 bg-bronze/40" />
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-bronze/70">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="font-heading text-3xl font-bold leading-[1.2] tracking-tight text-foreground md:text-4xl lg:text-5xl pb-0.5">
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg ${centered ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
