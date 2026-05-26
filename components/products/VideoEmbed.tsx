type VideoEmbedProps = {
  url: string
  title?: string
  aspectRatio?: "16/9" | "4/3"
}

function toEmbedUrl(url: string): string {
  const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/)
  if (yt) return `https://www.youtube-nocookie.com/embed/${yt[1]}`

  const vimeo = url.match(/vimeo\.com\/(\d+)/)
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`

  return url
}

export function VideoEmbed({ url, title, aspectRatio = "16/9" }: VideoEmbedProps) {
  const padding = aspectRatio === "16/9" ? "56.25%" : "75%"

  return (
    <div className="overflow-hidden rounded-sm border border-border/60">
      {title && (
        <div className="border-b border-border/60 px-4 py-3">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
        </div>
      )}
      <div className="relative" style={{ paddingBottom: padding }}>
        <iframe
          src={toEmbedUrl(url)}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    </div>
  )
}
