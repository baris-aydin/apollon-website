export type SpecRow = {
  label: string
  value: string
}

type SpecsTableProps = {
  specs: SpecRow[]
  title?: string
}

export function SpecsTable({ specs, title }: SpecsTableProps) {
  return (
    <div className="space-y-4">
      {title && (
        <h3 className="text-xs font-semibold uppercase tracking-widest text-bronze/70">
          {title}
        </h3>
      )}
      <div className="overflow-hidden rounded-sm border border-border/60">
        {specs.map((row, i) => (
          <div
            key={i}
            className={`flex gap-4 px-4 py-3 text-sm ${i % 2 === 0 ? "bg-muted/40" : "bg-transparent"}`}
          >
            <span className="w-2/5 shrink-0 text-muted-foreground">{row.label}</span>
            <span className="text-foreground">{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
