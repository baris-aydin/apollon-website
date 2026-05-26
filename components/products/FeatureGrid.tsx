import { type LucideIcon } from "lucide-react"

export type Feature = {
  icon: LucideIcon
  title: string
  description: string
}

type FeatureGridProps = {
  features: Feature[]
  columns?: 2 | 3 | 4
}

const colMap = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
}

export function FeatureGrid({ features, columns = 3 }: FeatureGridProps) {
  return (
    <div className={`grid gap-5 ${colMap[columns]}`}>
      {features.map((feature, i) => {
        const Icon = feature.icon
        return (
          <div key={i} className="glass-card flex flex-col gap-4 rounded-sm p-5">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-sm border border-bronze/20 text-bronze"
              style={{ background: "oklch(0.70 0.12 65 / 0.08)" }}
            >
              <Icon className="h-4 w-4" />
            </div>
            <div className="space-y-1.5">
              <h4 className="font-heading text-sm font-semibold text-foreground">
                {feature.title}
              </h4>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
