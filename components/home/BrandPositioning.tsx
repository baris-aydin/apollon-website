import { type Locale } from "@/lib/i18n"

const content = {
  tr: {
    heading: "Karakter sahibi mobilite teknolojisi.",
    body: "Apollon; akıllı ekranları, bağlantılı güvenlik sistemlerini, motosiklet teknolojilerini ve geleceğin premium ses deneyimlerini tek bir rafine mobilite markası altında buluşturur. Sıradan donanımdan fazlasını bekleyen sürücüler, motosiklet kullanıcıları, montaj noktaları ve distribütörler için tasarlanmıştır.",
  },
  en: {
    heading: "Mobility technology, designed with character.",
    body: "Apollon brings together intelligent screens, connected safety systems, motorcycle technologies, and future premium audio experiences under one refined mobility brand. Built for modern drivers, riders, installers, and distributors who expect more than ordinary hardware.",
  },
}

export function BrandPositioning({ locale }: { locale: Locale }) {
  const c = content[locale]
  return (
    <section className="border-t border-border/30 py-24">
      <div className="section-container">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
            <div className="space-y-5">
              <div className="h-px w-12 bg-bronze/50" />
              <h2 className="font-heading text-3xl font-semibold leading-[1.15] tracking-tight md:text-4xl lg:text-[2.75rem] pb-[0.1em]">
                {c.heading}
              </h2>
            </div>
            <div className="flex items-start lg:pt-10">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {c.body}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
