import Link from "next/link"
import Image from "next/image"
import { ChevronRight, type LucideIcon } from "lucide-react"

type ProductCategoryCardProps = {
  title: string
  description: string
  href: string
  icon?: LucideIcon
  image?: { src: string; alt: string; position?: string }
  status?: "available" | "coming-soon"
  ctaLabel?: string
}

export function ProductCategoryCard({
  title,
  description,
  href,
  icon: Icon,
  image,
  status = "available",
  ctaLabel = "Explore",
}: ProductCategoryCardProps) {
  return (
    <Link
      href={href}
      className="group glass-card relative flex flex-col rounded-sm overflow-hidden transition-all hover:border-bronze/40 hover:shadow-[0_0_30px_oklch(0.70_0.12_65_/_0.08)]"
    >
      {status === "coming-soon" && (
        <span className="absolute right-4 top-4 z-10 rounded-full border border-bronze/30 px-2 py-0.5 text-[10px] font-medium uppercase tracking-widest text-bronze/60">
          Soon
        </span>
      )}

      {image ? (
        <div className="relative h-44 w-full shrink-0">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            style={{ objectPosition: image.position ?? "center" }}
            sizes="(max-width: 640px) 100vw, 50vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
        </div>
      ) : Icon ? (
        <div className="p-6 pb-0">
          <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-bronze/20 text-bronze" style={{ background: "oklch(0.70 0.12 65 / 0.08)" }}>
            <Icon className="h-5 w-5" />
          </div>
        </div>
      ) : null}

      <div className="flex flex-col gap-5 p-6">
        <div className="space-y-2">
          <h3 className="font-heading text-lg font-semibold leading-[1.3] text-foreground transition-colors group-hover:text-bronze">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
        </div>

        <div className="mt-auto flex items-center gap-1 text-xs font-medium text-bronze/60 transition-colors group-hover:text-bronze">
          <span>{ctaLabel}</span>
          <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}
