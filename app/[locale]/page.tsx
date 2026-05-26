import { Hero } from "@/components/home/Hero"
import { ProductCategories } from "@/components/home/ProductCategories"
import { CTABlock } from "@/components/ui/CTABlock"
import { type Locale } from "@/lib/i18n"

type HomePageProps = {
  params: Promise<{ locale: Locale }>
}

const heroContent = {
  tr: {
    title: "Ruhu Olan Teknoloji",
    subtitle: "Otomobil ve motosikletler için premium eğlence, güvenlik ve bağlantı sistemleri.",
  },
  en: {
    title: "Technology With Soul",
    subtitle: "Premium mobility entertainment systems for cars, motorcycles, safety, and sound.",
  },
}

const ctaContent = {
  tr: {
    eyebrow: "Distribütörlük",
    title: "Türkiye'de distribütörümüz olun",
    description: "Premium mobilite teknolojilerini bölgenize taşıyın. Distribütör ve bayi başvuruları için bizimle iletişime geçin.",
    primaryLabel: "Başvuru Yap",
    primaryHref: "/partner-distributor",
    secondaryLabel: "Bize Ulaşın",
    secondaryHref: "/contact",
  },
  en: {
    eyebrow: "Partnership",
    title: "Become a distributor in your region",
    description: "Bring premium mobility technology to your market. Contact us for distributor and dealer applications.",
    primaryLabel: "Apply Now",
    primaryHref: "/partner-distributor",
    secondaryLabel: "Contact Us",
    secondaryHref: "/contact",
  },
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params
  const hero = heroContent[locale]
  const cta = ctaContent[locale]

  return (
    <main>
      <Hero locale={locale} title={hero.title} subtitle={hero.subtitle} />
      <ProductCategories locale={locale} />
      <CTABlock
        eyebrow={cta.eyebrow}
        title={cta.title}
        description={cta.description}
        primaryLabel={cta.primaryLabel}
        primaryHref={`/${locale}${cta.primaryHref}`}
        secondaryLabel={cta.secondaryLabel}
        secondaryHref={`/${locale}${cta.secondaryHref}`}
      />
    </main>
  )
}
