import { Hero } from "@/components/home/Hero"
import { BrandPositioning } from "@/components/home/BrandPositioning"
import { ProductCategories } from "@/components/home/ProductCategories"
import { MotorcyclePreview } from "@/components/home/MotorcyclePreview"
import { CarTechnologyPreview } from "@/components/home/CarTechnologyPreview"
import { SignatureAudioPreview } from "@/components/home/SignatureAudioPreview"
import { BrandStory } from "@/components/home/BrandStory"
import { ContactCTA } from "@/components/home/ContactCTA"
import { type Locale } from "@/lib/i18n"
import { Reveal } from "@/components/motion/Reveal"

type HomePageProps = {
  params: Promise<{ locale: Locale }>
}

const heroContent = {
  tr: {
    title: "Apollon Entertainment Systems",
    subtitle:
      "Otomobil ve motosikletler için premium eğlence, güvenlik ve bağlantı sistemleri.",
  },
  en: {
    title: "Apollon Entertainment Systems",
    subtitle:
      "Premium mobility entertainment systems inspired by sound, safety, and culture.",
  },
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params
  const hero = heroContent[locale]

  return (
    <main>
      {/* 1. Hero */}
      <Hero locale={locale} title={hero.title} subtitle={hero.subtitle} />

      {/* 2. Brand Positioning */}
      <Reveal><BrandPositioning locale={locale} /></Reveal>

      {/* 3. Product Categories */}
      <Reveal><ProductCategories locale={locale} /></Reveal>

      {/* 4. Motorcycle — MotoPlay Series */}
      <Reveal><MotorcyclePreview locale={locale} /></Reveal>

      {/* 5. Car — Car Technology Systems */}
      <Reveal><CarTechnologyPreview locale={locale} /></Reveal>

      {/* 6. Signature Audio Coming Soon */}
      <Reveal><SignatureAudioPreview locale={locale} /></Reveal>

      {/* 7. Brand Story */}
      <Reveal><BrandStory locale={locale} /></Reveal>

      {/* 8. Contact CTA */}
      <Reveal><ContactCTA locale={locale} /></Reveal>
    </main>
  )
}
