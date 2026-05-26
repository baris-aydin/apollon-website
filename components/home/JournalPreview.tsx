import Link from "next/link"
import { BlogCard } from "@/components/ui/BlogCard"
import { type Locale } from "@/lib/i18n"

const headings = {
  tr: {
    eyebrow: "Journal",
    title: "Journal",
    subtitle:
      "Akıllı mobilite, Android multimedya sistemleri, motosiklet teknolojileri, araç kameraları, premium ses ve Apollon markasının arkasındaki kültür üzerine içerikler.",
    viewAll: "Tüm Yazıları Gör",
  },
  en: {
    eyebrow: "Journal",
    title: "Journal",
    subtitle:
      "Insights on smart mobility, Android multimedia systems, motorcycle technology, dashcams, premium sound, and the culture behind the Apollon brand.",
    viewAll: "View All Posts",
  },
}

const posts = {
  tr: [
    {
      title: "Apple CarPlay nedir ve neden önemlidir?",
      excerpt:
        "Apple CarPlay, iPhone'unuzu aracınızın infotainment sisteminin merkezine taşır. Ne yapar, hangi araçlar destekler ve sonradan montaj neden bu kadar büyüyor?",
      slug: "apple-carplay-nedir",
      category: "Multimedya",
      publishedAt: "20 Mayıs 2026",
    },
    {
      title: "Android multimedya sistemleri eski araçları nasıl modernleştirir?",
      excerpt:
        "2000'lerin ortasından 2015'e kadar üretilen araçlarda Android ekranlar, aracın karakterini bozmadan kabin deneyimini dönüştürüyor.",
      slug: "android-multimedia-modernize",
      category: "Multimedya",
      publishedAt: "18 Mayıs 2026",
    },
    {
      title: "Akıllı araç kameraları neden giderek daha önemli hale geliyor?",
      excerpt:
        "Modern araç kameraları kayıttan çok daha fazlasını yapıyor. Uzaktan erişim, bulut yedekleme ve elektronik çit onları araç güvenliğinin temel parçası haline getiriyor.",
      slug: "akilli-arac-kameralari",
      category: "Güvenlik",
      publishedAt: "15 Mayıs 2026",
    },
    {
      title: "Motosiklet CarPlay sistemleri: sürücüler için daha güvenli navigasyon",
      excerpt:
        "Telefona dokunmadan Siri, Apple Haritalar ve Waze. Kablosuz CarPlay'in motosiklet navigasyonunu nasıl temelden daha güvenli hale getirdiğine bir bakış.",
      slug: "motosiklet-carplay",
      category: "Motosiklet",
      publishedAt: "12 Mayıs 2026",
    },
  ],
  en: [
    {
      title: "What is Apple CarPlay and why does it matter?",
      excerpt:
        "Apple CarPlay turns your iPhone into the center of your car's infotainment system. What it does, which vehicles support it, and why aftermarket installation is growing fast.",
      slug: "what-is-apple-carplay",
      category: "Multimedia",
      publishedAt: "May 20, 2026",
    },
    {
      title: "How Android multimedia systems modernize older vehicles",
      excerpt:
        "From mid-2000s sedans to 2015 SUVs, Android screens are transforming how drivers interact with their vehicles — without changing the vehicle's character.",
      slug: "android-multimedia-modernize",
      category: "Multimedia",
      publishedAt: "May 18, 2026",
    },
    {
      title: "Why smart dashcams are becoming essential",
      excerpt:
        "Modern dashcams go far beyond recording. Remote access, cloud backup, electronic fencing, and push notifications are making them a key part of vehicle security.",
      slug: "smart-dashcams-essential",
      category: "Safety",
      publishedAt: "May 15, 2026",
    },
    {
      title: "Motorcycle CarPlay systems: safer navigation for riders",
      excerpt:
        "Siri voice control, Apple Maps, and Waze without touching your phone. A look at how wireless CarPlay systems are making motorcycle navigation fundamentally safer.",
      slug: "motorcycle-carplay-navigation",
      category: "Motorcycle",
      publishedAt: "May 12, 2026",
    },
  ],
}

export function JournalPreview({ locale }: { locale: Locale }) {
  const h = headings[locale]
  const items = posts[locale]
  return (
    <section className="border-t border-border/30 py-24">
      <div className="section-container space-y-14">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-bronze/40" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-bronze/70">
                {h.eyebrow}
              </span>
            </div>
            <h2 className="font-heading text-3xl font-semibold md:text-4xl">{h.title}</h2>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              {h.subtitle}
            </p>
          </div>
          <Link
            href={`/${locale}/journal`}
            className="shrink-0 rounded-sm border border-border/60 px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-bronze/40 hover:text-bronze"
          >
            {h.viewAll}
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((post) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              slug={post.slug}
              locale={locale}
              category={post.category}
              publishedAt={post.publishedAt}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
