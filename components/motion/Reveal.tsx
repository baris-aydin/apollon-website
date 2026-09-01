'use client'

import { useEffect, useRef, type ReactNode } from 'react'

type Props = {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'section' | 'li'
}

export function Reveal({ children, delay = 0, className, as: Tag = 'div' }: Props) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    el.style.opacity = '0'
    el.style.transform = 'translateY(20px)'

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.transition = `opacity 0.55s ${delay}ms cubic-bezier(0.22,1,0.36,1), transform 0.55s ${delay}ms cubic-bezier(0.22,1,0.36,1)`
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
            observer.disconnect()
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    // @ts-expect-error — ref type depends on Tag; HTMLElement covers all three variants
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}
