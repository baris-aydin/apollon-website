'use client'

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

type GalleryImage = { src: string; alt: string }

type ProductGalleryProps = {
  images: GalleryImage[]
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [index, setIndex] = useState<number | null>(null)

  const prev = () => setIndex((i) => i !== null ? (i - 1 + images.length) % images.length : null)
  const next = () => setIndex((i) => i !== null ? (i + 1) % images.length : null)

  return (
    <>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
        {images.map((image, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="group relative aspect-square overflow-hidden rounded-sm border border-border/60 transition-colors hover:border-bronze/40"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {index !== null && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setIndex(null)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video">
              <Image
                src={images[index].src}
                alt={images[index].alt}
                fill
                className="object-contain"
              />
            </div>
          </div>

          <button
            onClick={() => setIndex(null)}
            aria-label="Close"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-sm border border-border/60 bg-background/80 text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            aria-label="Previous"
            className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-sm border border-border/60 bg-background/80 text-foreground"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label="Next"
            className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-sm border border-border/60 bg-background/80 text-foreground"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </>
  )
}
