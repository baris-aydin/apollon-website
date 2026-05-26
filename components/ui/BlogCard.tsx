import Link from "next/link"
import Image from "next/image"

type BlogCardProps = {
  title: string
  excerpt: string
  slug: string
  locale: string
  category?: string
  publishedAt?: string
  coverImage?: string
}

export function BlogCard({
  title,
  excerpt,
  slug,
  locale,
  category,
  publishedAt,
  coverImage,
}: BlogCardProps) {
  return (
    <Link
      href={`/${locale}/journal/${slug}`}
      className="group glass-card flex flex-col overflow-hidden rounded-sm transition-all hover:border-bronze/40"
    >
      <div className="relative aspect-video overflow-hidden bg-muted">
        {coverImage ? (
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-surface-raised" />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        {category && (
          <span className="text-xs font-medium uppercase tracking-widest text-bronze/70">
            {category}
          </span>
        )}
        <h3 className="font-heading text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-bronze line-clamp-2 pb-0.5">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3 pb-0.5">
          {excerpt}
        </p>
        {publishedAt && (
          <time className="mt-auto text-xs text-muted-foreground/60">
            {publishedAt}
          </time>
        )}
      </div>
    </Link>
  )
}
