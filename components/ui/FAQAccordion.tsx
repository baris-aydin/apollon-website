'use client'

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

export type FAQItem = {
  question: string
  answer: string
}

type FAQAccordionProps = {
  items: FAQItem[]
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="divide-y divide-border/60">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-start justify-between gap-4 py-5 text-left transition-colors hover:text-bronze"
          >
            <span className="text-base font-medium">{item.question}</span>
            {openIndex === i
              ? <Minus className="mt-0.5 h-4 w-4 shrink-0 text-bronze" />
              : <Plus className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
            }
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-96 pb-5" : "max-h-0"}`}>
            <p className="text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
