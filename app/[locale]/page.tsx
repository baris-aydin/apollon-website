import { Hero } from "@/components/home/Hero"
import { BrandPositioning } from "@/components/home/BrandPositioning"
import { ProductCategories } from "@/components/home/ProductCategories"
import { CarMultimediaPreview } from "@/components/home/CarMultimediaPreview"
import { MotorcyclePreview } from "@/components/home/MotorcyclePreview"
import { SafetyPreview } from "@/components/home/SafetyPreview"
import { SignatureAudioPreview } from "@/components/home/SignatureAudioPreview"
import { BrandStory } from "@/components/home/BrandStory"
import { CTABlock } from "@/components/ui/CTABlock"
import { JournalPreview } from "@/components/home/JournalPreview"
import { ContactCTA } from "@/components/home/ContactCTA"
import { type Locale } from "@/lib/i18n"

type HomePageProps = {
  params: Promise<{ locale: Locale }>
}

const heroContent = {
  tr: {
    title: "Ruhu Olan Teknoloji",
    subtitle:
      "Otomobil ve motosikletler için premium eğlence, güvenlik ve bağlantı sistemleri.",
  },
  en: {
    title: "Technology With Soul",
    subtitle:
      "Premium mobility entertainment systems inspired by sound, safety, and culture.",
  },
}

const partnerContent = {
  tr: {
    eyebrow: "Distribütörlük",
    title: "Apollon'u pazarınıza taşıyın.",
    description:
      "Premium mobilite teknolojileri için distribütör ve montaj ağı kuruyoruz. Otomotiv aksesuarları, motosiklet teknolojileri, araç elektroniği, montaj hizmetleri veya bölgesel dağıtım alanında faaliyet gösteriyorsanız sizinle görüşmek isteriz.",
    primaryLabel: "Distribütör Başvurusu",
    primaryHref: "/partner-distributor",
  },
  en: {
    eyebrow: "Partnership",
    title: "Bring Apollon to your market.",
    description:
      "We are building a distributor and installer network for premium mobility technology products. If you operate in automotive accessories, motorcycle technology, vehicle electronics, installation services, or regional distribution, we would like to hear from you.",
    primaryLabel: "Become a Distributor",
    primaryHref: "/partner-distributor",
  },
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params
  const hero = heroContent[locale]
  const partner = partnerContent[locale]

  return (
    <main>
      {/* 1. Hero */}
      <Hero locale={locale} title={hero.title} subtitle={hero.subtitle} />

      {/* 2. Brand Positioning */}
      <BrandPositioning locale={locale} />

      {/* 3. Product Categories */}
      <ProductCategories locale={locale} />

      {/* 4. Car Multimedia Preview */}
      <CarMultimediaPreview locale={locale} />

      {/* 5. Motorcycle Smart Systems Preview */}
      <MotorcyclePreview locale={locale} />

      {/* 6. Car Safety & Security Preview */}
      <SafetyPreview locale={locale} />

      {/* 7. Signature Audio Coming Soon */}
      <SignatureAudioPreview locale={locale} />

      {/* 8. Brand Story */}
      <BrandStory locale={locale} />

      {/* 9. Partner / Distributor CTA */}
      <CTABlock
        eyebrow={partner.eyebrow}
        title={partner.title}
        description={partner.description}
        primaryLabel={partner.primaryLabel}
        primaryHref={`/${locale}${partner.primaryHref}`}
        variant="muted"
      />

      {/* 10. Journal Preview */}
      <JournalPreview locale={locale} />

      {/* 11. Contact CTA */}
      <ContactCTA locale={locale} />
    </main>
  )
}
