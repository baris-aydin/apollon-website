import { homepageQuery } from "@/sanity/lib/queries"
import { sanityClient } from "@/sanity/lib/client"

type HomePageProps = {
  params: Promise<{
    locale: "tr" | "en"
  }>
}

type HomepageData = {
  heroTitle?: string
  heroSubtitle?: string
  seoTitle?: string
  seoDescription?: string
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params

  const data = await sanityClient.fetch<HomepageData>(homepageQuery, {
    locale,
  })

  const fallback = {
    tr: {
      title: "Ruhu Olan Teknoloji",
      description:
        "Otomobil ve motosikletler için premium eğlence, güvenlik ve bağlantı sistemleri.",
      cta: "Ürünleri Keşfet",
    },
    en: {
      title: "Technology With Soul",
      description:
        "Premium mobility entertainment systems for cars, motorcycles, safety, and sound.",
      cta: "Explore Products",
    },
  }[locale]

  const title = data?.heroTitle || fallback.title
  const description = data?.heroSubtitle || fallback.description

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 pt-16">
      <section className="max-w-4xl text-center space-y-6">
        <p className="text-sm uppercase tracking-[0.35em] text-neutral-400">
          Apollon Entertainment Systems
        </p>

        <h1 className="text-5xl md:text-7xl font-semibold">{title}</h1>

        <p className="mx-auto max-w-2xl text-lg text-neutral-300">
          {description}
        </p>

        <a
          href={`/${locale}/products`}
          className="inline-flex rounded-full border border-neutral-700 px-6 py-3 text-sm font-medium hover:bg-white hover:text-black transition"
        >
          {fallback.cta}
        </a>
      </section>
    </main>
  )
}