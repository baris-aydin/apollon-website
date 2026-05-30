import type { Metadata } from "next"
import Link from "next/link"
import { type Locale } from "@/lib/i18n"
import { JournalUpdateForm } from "@/components/forms/JournalUpdateForm"
import { BlogCard } from "@/components/ui/BlogCard"
import { sanityClient } from "@/sanity/lib/client"
import { publishedPostsQuery } from "@/sanity/lib/queries"

type PageProps = { params: Promise<{ locale: Locale }> }

// ─── Types ───────────────────────────────────────────────────────────────────

type CategoryCard = { title: string; description: string }
type Principle = { title: string; description: string }

type PageContent = {
  meta: { title: string; description: string }
  hero: {
    eyebrow: string
    badge: string
    title: string
    subtitle: string
    primaryCta: string
    secondaryCta: string
  }
  comingSoon: {
    heading: string
    text: string
    badges: string[]
  }
  editorial: {
    heading: string
    text: string
  }
  categories: {
    heading: string
    items: CategoryCard[]
  }
  principles: {
    heading: string
    intro: string
    items: Principle[]
  }
  form: {
    heading: string
    description: string
  }
  cta: {
    heading: string
    text: string
    primary: string
    secondary: string
    tertiary: string
  }
  listing: {
    eyebrow: string
    heading: string
    subtitle: string
    empty: string
  }
}

// ─── Content ─────────────────────────────────────────────────────────────────

const content: Record<Locale, PageContent> = {
  en: {
    meta: {
      title: "Apollon Journal | Coming Soon",
      description:
        "Apollon Journal is coming soon. Explore future content about smart mobility, car multimedia systems, motorcycle technology, dashcams, premium sound, and brand culture.",
    },
    hero: {
      eyebrow: "APOLLON JOURNAL",
      badge: "Coming Soon",
      title: "Stories, ideas, and technology for the road ahead.",
      subtitle:
        "The Apollon Journal will explore smart mobility, connected driving, motorcycle technology, premium sound, product education, and the cultural ideas shaping the brand.",
      primaryCta: "Get Journal Updates",
      secondaryCta: "Explore Products",
    },
    comingSoon: {
      heading: "The Journal is being prepared.",
      text: "We are building a thoughtful editorial space for drivers, riders, installers, distributors, and anyone interested in modern mobility technology. The first articles will be published after content review and technical approval.",
      badges: [
        "Coming Soon",
        "Product Education",
        "Smart Mobility",
        "Brand Culture",
        "Technical Review First",
      ],
    },
    editorial: {
      heading: "What the Apollon Journal will explore",
      text: "The Journal will combine practical product education with a broader view of mobility, safety, design, sound, and culture. Content should help readers understand technologies clearly while reflecting Apollon's long-term brand identity.",
    },
    categories: {
      heading: "Future content categories",
      items: [
        {
          title: "Car Multimedia Systems",
          description:
            "Android multimedia screens, vehicle-specific fitment, connectivity, navigation, and cabin modernization.",
        },
        {
          title: "Motorcycle Smart Systems",
          description:
            "Rider-focused displays, navigation, camera systems, Bluetooth audio, and connected motorcycle experiences.",
        },
        {
          title: "Dashcam Technology",
          description:
            "Recording quality, connected safety features, remote monitoring, installation considerations, and practical dashcam guidance.",
        },
        {
          title: "Apple CarPlay & Android Auto",
          description:
            "Simple explanations of smartphone integration, navigation, media, communication, and everyday usability.",
        },
        {
          title: "Premium Sound",
          description:
            "The role of sound, atmosphere, listening experiences, and the future direction of Signature Audio Series.",
        },
        {
          title: "Culture and Design",
          description:
            "The cultural references, design ideas, and East–West perspective shaping the Apollon identity.",
        },
        {
          title: "Installation Guides",
          description:
            "Future technically reviewed guides for product fitment, installation preparation, and compatibility questions.",
        },
        {
          title: "Brand Updates",
          description:
            "Approved company news, product launches, partnership announcements, and future Apollon developments.",
        },
      ],
    },
    principles: {
      heading: "Useful content, reviewed before publication.",
      intro:
        "Apollon Journal content will be written to inform, not to fill space. Product guides and technical articles should be reviewed before publication. Brand stories should reflect real developments. Distributor news should only be published after approval.",
      items: [
        {
          title: "Accurate",
          description: "Technical claims should be reviewed before publication.",
        },
        {
          title: "Useful",
          description:
            "Each article should answer a real customer, rider, installer, or distributor question.",
        },
        {
          title: "Honest",
          description:
            "Do not invent stories, announcements, partnerships, or product claims.",
        },
        {
          title: "Consistent",
          description:
            "Content should reflect Apollon's premium mobility technology identity.",
        },
      ],
    },
    form: {
      heading: "Get notified when the Journal launches.",
      description:
        "Leave your email address to receive updates when the first Apollon Journal articles are published.",
    },
    cta: {
      heading: "Explore Apollon while the Journal is being prepared.",
      text: "Discover premium mobility technology across car multimedia systems, smart dashcams, motorcycle systems, and the future Signature Audio Series.",
      primary: "Explore Products",
      secondary: "Contact Us",
      tertiary: "Become a Partner",
    },
    listing: {
      eyebrow: "APOLLON JOURNAL",
      heading: "Latest articles",
      subtitle:
        "Insights on smart mobility, car multimedia systems, motorcycle technology, dashcams, premium sound, and the culture behind the Apollon brand.",
      empty: "No articles published yet. Check back soon.",
    },
  },

  tr: {
    meta: {
      title: "Apollon Journal | Yakında",
      description:
        "Apollon Journal yakında yayında. Akıllı mobilite, araç multimedya sistemleri, motosiklet teknolojileri, araç kameraları, premium ses ve marka kültürü üzerine gelecek içerikleri keşfedin.",
    },
    hero: {
      eyebrow: "APOLLON JOURNAL",
      badge: "Yakında",
      title: "Yolun ilerisi için hikâyeler, fikirler ve teknoloji.",
      subtitle:
        "Apollon Journal; akıllı mobiliteyi, bağlantılı sürüşü, motosiklet teknolojilerini, premium sesi, ürün bilgilendirmelerini ve markayı şekillendiren kültürel fikirleri ele alacak.",
      primaryCta: "Journal Güncellemelerini Al",
      secondaryCta: "Ürünleri Keşfet",
    },
    comingSoon: {
      heading: "Journal hazırlanıyor.",
      text: "Sürücüler, motosiklet kullanıcıları, montaj noktaları, distribütörler ve modern mobilite teknolojileriyle ilgilenen herkes için özenli bir içerik alanı hazırlıyoruz. İlk yazılar, içerik değerlendirmesi ve teknik onay süreci tamamlandıktan sonra yayınlanacaktır.",
      badges: [
        "Yakında",
        "Ürün Bilgilendirmesi",
        "Akıllı Mobilite",
        "Marka Kültürü",
        "Önce Teknik İnceleme",
      ],
    },
    editorial: {
      heading: "Apollon Journal neleri ele alacak?",
      text: "Journal; pratik ürün bilgilendirmelerini mobilite, güvenlik, tasarım, ses ve kültür üzerine daha geniş bir bakış açısıyla bir araya getirecek. İçerikler, teknolojileri anlaşılır şekilde anlatırken Apollon'un uzun vadeli marka kimliğini de yansıtacaktır.",
    },
    categories: {
      heading: "Gelecek içerik kategorileri",
      items: [
        {
          title: "Araç Multimedya Sistemleri",
          description:
            "Android multimedya ekranları, araca özel uyumluluk, bağlantı, navigasyon ve kabin modernizasyonu.",
        },
        {
          title: "Motosiklet Akıllı Sistemleri",
          description:
            "Sürüş odaklı ekranlar, navigasyon, kamera sistemleri, Bluetooth ses ve bağlantılı motosiklet deneyimleri.",
        },
        {
          title: "Araç Kamerası Teknolojileri",
          description:
            "Kayıt kalitesi, bağlantılı güvenlik özellikleri, uzaktan izleme, montaj değerlendirmeleri ve pratik araç kamerası rehberleri.",
        },
        {
          title: "Apple CarPlay & Android Auto",
          description:
            "Akıllı telefon entegrasyonu, navigasyon, medya, iletişim ve günlük kullanım hakkında anlaşılır açıklamalar.",
        },
        {
          title: "Premium Ses",
          description:
            "Sesin, atmosferin, dinleme deneyiminin ve Signature Audio Series'in gelecek vizyonunun rolü.",
        },
        {
          title: "Kültür ve Tasarım",
          description:
            "Apollon kimliğini şekillendiren kültürel referanslar, tasarım fikirleri ve Doğu–Batı perspektifi.",
        },
        {
          title: "Montaj Rehberleri",
          description:
            "Ürün uyumluluğu, montaj hazırlığı ve teknik sorular için gelecekte yayınlanacak, teknik incelemeden geçmiş rehberler.",
        },
        {
          title: "Marka Güncellemeleri",
          description:
            "Onaylanmış şirket haberleri, ürün lansmanları, iş ortaklığı duyuruları ve gelecek Apollon gelişmeleri.",
        },
      ],
    },
    principles: {
      heading: "Yayın öncesi incelenen, faydalı içerikler.",
      intro:
        "Apollon Journal içerikleri yalnızca alan doldurmak için değil, bilgi vermek için hazırlanacaktır. Ürün rehberleri ve teknik yazılar yayın öncesinde incelenmelidir. Marka hikâyeleri gerçek gelişmeleri yansıtmalıdır. Distribütörlük haberleri yalnızca onay sonrasında yayınlanmalıdır.",
      items: [
        {
          title: "Doğru",
          description: "Teknik iddialar yayın öncesinde incelenmelidir.",
        },
        {
          title: "Faydalı",
          description:
            "Her yazı gerçek bir müşteri, motosiklet kullanıcısı, montaj noktası veya distribütör sorusuna yanıt vermelidir.",
        },
        {
          title: "Dürüst",
          description:
            "Hikâyeler, duyurular, iş birlikleri veya ürün iddiaları uydurulmamalıdır.",
        },
        {
          title: "Tutarlı",
          description:
            "İçerikler Apollon'un premium mobilite teknolojisi kimliğini yansıtmalıdır.",
        },
      ],
    },
    form: {
      heading: "Journal yayına başladığında haberdar olun.",
      description:
        "İlk Apollon Journal yazıları yayınlandığında güncelleme almak için e-posta adresinizi bırakın.",
    },
    cta: {
      heading: "Journal hazırlanırken Apollon ürünlerini keşfedin.",
      text: "Araç multimedya sistemleri, akıllı araç kameraları, motosiklet sistemleri ve geleceğin Signature Audio Series ürünleriyle premium mobilite teknolojilerini keşfedin.",
      primary: "Ürünleri Keşfet",
      secondary: "İletişime Geç",
      tertiary: "İş Ortağımız Ol",
    },
    listing: {
      eyebrow: "APOLLON JOURNAL",
      heading: "Son yazılar",
      subtitle:
        "Akıllı mobilite, araç multimedya sistemleri, motosiklet teknolojileri, araç kameraları, premium ses ve Apollon markasının arkasındaki kültür üzerine içerikler.",
      empty: "Henüz yayınlanmış yazı yok. Yakında tekrar kontrol edin.",
    },
  },
}

// ─── Sanity post type (matches publishedPostsQuery projection) ───────────────

type PublishedPost = {
  _id: string
  title: string
  slug: { current: string }
  excerpt?: string
  category?: string
  publishedAt?: string
  authorName?: string
  featured?: boolean
  coverImage?: string
}

// ─── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const c = content[locale]
  return { title: c.meta.title, description: c.meta.description }
}

// ─── Shared styles ───────────────────────────────────────────────────────────

const eyebrowClass =
  "text-xs font-medium uppercase tracking-[0.3em] text-bronze/70"
const sectionHeadingClass =
  "font-heading text-3xl font-semibold leading-[1.15] tracking-tight md:text-4xl pb-[0.1em]"
const glassCard =
  "rounded-sm border border-border/40 bg-card/40 p-6 backdrop-blur-sm"

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function JournalPage({ params }: PageProps) {
  const { locale } = await params
  const c = content[locale]

  // Query for published, approved articles — silently falls through if Sanity is unreachable
  let posts: PublishedPost[] = []
  try {
    posts = await sanityClient.fetch<PublishedPost[]>(publishedPostsQuery, {
      locale,
    })
  } catch {
    // No articles → show coming-soon state
  }

  const hasArticles = posts.length > 0

  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* ── SECTION 1: Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-24">
        {/* Background layers */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "oklch(0.09 0.015 245 / 0.6)" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,oklch(0.22_0.08_245_/_0.45),transparent)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_50%_50%,oklch(0.70_0.12_65_/_0.04),transparent)]" />
        <div className="pointer-events-none absolute left-0 right-0 top-[40%] h-px bg-gradient-to-r from-transparent via-bronze/10 to-transparent" />

        <div className="section-container relative">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left: text */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-bronze/40" />
                <span className={eyebrowClass}>{c.hero.eyebrow}</span>
              </div>

              {/* Coming soon badge (hidden when articles exist) */}
              {!hasArticles && (
                <div>
                  <span className="inline-flex items-center gap-2 rounded-sm border border-bronze/20 bg-bronze/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-bronze/80">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-bronze/70" />
                    {c.hero.badge}
                  </span>
                </div>
              )}

              <h1 className="font-heading text-4xl font-semibold leading-[1.12] tracking-tight md:text-5xl lg:text-6xl pb-[0.14em]">
                {c.hero.title}
              </h1>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg max-w-xl">
                {c.hero.subtitle}
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#journal-update-form"
                  className="rounded-sm border border-bronze bg-bronze px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-bronze/90 hover:shadow-[0_0_24px_oklch(0.70_0.12_65_/_0.35)]"
                >
                  {c.hero.primaryCta}
                </a>
                <Link
                  href={`/${locale}/products`}
                  className="rounded-sm border border-border/60 px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:border-bronze/40 hover:text-bronze"
                >
                  {c.hero.secondaryCta}
                </Link>
              </div>
            </div>

            {/* Right: abstract editorial visual */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                {/* Decorative top line group */}
                <div className="mb-4 space-y-2 opacity-30">
                  <div className="h-px bg-gradient-to-r from-bronze/60 via-bronze/20 to-transparent" />
                  <div className="flex gap-3 text-[8px] font-medium uppercase tracking-[0.4em] text-bronze/70">
                    <span>Smart Mobility</span>
                    <span className="text-border/40">·</span>
                    <span>Technology</span>
                    <span className="text-border/40">·</span>
                    <span>Culture</span>
                  </div>
                </div>

                {/* Card stack composition */}
                <div className="relative h-64">
                  {/* Back card */}
                  <div className="absolute bottom-0 left-6 right-6 top-10 rounded-sm border border-border/15 bg-card/8" />
                  {/* Middle card */}
                  <div className="absolute bottom-3 left-3 right-3 top-5 rounded-sm border border-border/20 bg-card/12 backdrop-blur-sm" />
                  {/* Front card */}
                  <div className="absolute inset-0 rounded-sm border border-border/40 bg-card/30 p-6 backdrop-blur-sm">
                    <div className="h-full space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="h-px w-4 bg-bronze/50" />
                        <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-bronze/50">
                          APOLLON JOURNAL
                        </span>
                      </div>
                      {/* Simulated article lines */}
                      <div className="space-y-2">
                        <div className="h-2 w-3/4 rounded-sm bg-foreground/8" />
                        <div className="h-2 w-full rounded-sm bg-foreground/6" />
                        <div className="h-2 w-5/6 rounded-sm bg-foreground/8" />
                        <div className="h-2 w-2/3 rounded-sm bg-foreground/5" />
                      </div>
                      <div className="h-px w-full bg-border/25" />
                      <div className="space-y-1.5">
                        <div className="h-1.5 w-full rounded-sm bg-foreground/5" />
                        <div className="h-1.5 w-4/5 rounded-sm bg-foreground/5" />
                        <div className="h-1.5 w-full rounded-sm bg-foreground/5" />
                      </div>
                      <div className="mt-auto flex items-center gap-2 pt-2">
                        <div className="h-4 w-4 rounded-full bg-border/20" />
                        <div className="h-1.5 w-14 rounded-sm bg-border/20" />
                        <div className="ml-auto h-1.5 w-10 rounded-sm bg-bronze/20" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative bottom line group */}
                <div className="mt-4 space-y-2 opacity-30">
                  <div className="flex justify-end gap-3 text-[8px] font-medium uppercase tracking-[0.4em] text-muted-foreground/60">
                    <span>Premium Sound</span>
                    <span className="text-border/40">·</span>
                    <span>Motorcycle</span>
                    <span className="text-border/40">·</span>
                    <span>Dashcam</span>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTICLE LISTING (shown only when approved articles exist) ────── */}
      {hasArticles && (
        <section className="border-t border-border/30 py-24">
          <div className="section-container space-y-14">
            <div className="mx-auto max-w-2xl space-y-4 text-center">
              <div className="flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-bronze/40" />
                <span className={eyebrowClass}>{c.listing.eyebrow}</span>
                <span className="h-px w-8 bg-bronze/40" />
              </div>
              <h2 className={sectionHeadingClass}>{c.listing.heading}</h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {c.listing.subtitle}
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard
                  key={post._id}
                  title={post.title}
                  excerpt={post.excerpt ?? ""}
                  slug={post.slug.current}
                  locale={locale}
                  category={post.category}
                  publishedAt={post.publishedAt}
                  coverImage={post.coverImage}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── SECTIONS 2–5: Coming soon (shown only when no articles exist) ── */}
      {!hasArticles && (
        <>
          {/* ── SECTION 2: Coming Soon message ──────────────────────────── */}
          <section className="border-t border-border/30 py-24">
            <div className="section-container">
              <div className="mx-auto max-w-3xl space-y-10">
                <div className="space-y-6 text-center">
                  <h2 className={sectionHeadingClass}>{c.comingSoon.heading}</h2>
                  <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                    {c.comingSoon.text}
                  </p>
                </div>

                {/* Info badges */}
                <div className="flex flex-wrap justify-center gap-2">
                  {c.comingSoon.badges.map((badge, i) => (
                    <span
                      key={i}
                      className={`rounded-sm border px-3 py-1.5 text-xs font-medium ${
                        i === 0
                          ? "border-bronze/30 bg-bronze/5 text-bronze/80"
                          : "border-border/40 bg-card/30 text-muted-foreground"
                      }`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── SECTION 3: Editorial direction ──────────────────────────── */}
          <section className="border-t border-border/30 py-24">
            <div className="section-container">
              <div className="mx-auto max-w-3xl space-y-6 text-center">
                <h2 className={sectionHeadingClass}>{c.editorial.heading}</h2>
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  {c.editorial.text}
                </p>
              </div>
            </div>
          </section>

          {/* ── SECTION 4: Future content categories ────────────────────── */}
          <section className="border-t border-border/30 py-24">
            <div className="section-container space-y-12">
              <div className="text-center">
                <h2 className={sectionHeadingClass}>{c.categories.heading}</h2>
              </div>

              {/* 8 category cards — future content, not existing posts */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {c.categories.items.map((item, i) => (
                  <div
                    key={i}
                    className="group rounded-sm border border-border/40 bg-card/30 p-5 backdrop-blur-sm transition-colors hover:border-bronze/20"
                  >
                    <div className="mb-3 flex items-center gap-2">
                      <span className="text-xs font-medium tabular-nums text-bronze/40">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="h-px flex-1 bg-border/30" />
                    </div>
                    <h3 className="font-heading mb-2 text-sm font-semibold leading-[1.3] text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── SECTION 5: Editorial principles ─────────────────────────── */}
          <section className="border-t border-border/30 py-24">
            <div className="section-container space-y-12">
              <div className="mx-auto max-w-2xl space-y-5 text-center">
                <h2 className={sectionHeadingClass}>{c.principles.heading}</h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {c.principles.intro}
                </p>
              </div>

              <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
                {c.principles.items.map((item, i) => (
                  <div key={i} className={`${glassCard} space-y-3`}>
                    <div className="flex items-start gap-4">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-sm border border-bronze/20 bg-bronze/5 text-xs font-semibold text-bronze/70">
                        {i + 1}
                      </span>
                      <h3 className="font-heading text-base font-semibold leading-[1.3] text-foreground">
                        {item.title}
                      </h3>
                    </div>
                    <p className="pl-11 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ── SECTION 6: Journal update form ──────────────────────────────── */}
      <section
        id="journal-update-form"
        className="border-t border-border/30 py-24 scroll-mt-20"
      >
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            {/* Left: heading + description */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-px w-6 bg-bronze/40" />
                <span className={eyebrowClass}>JOURNAL</span>
              </div>
              <h2 className={sectionHeadingClass}>{c.form.heading}</h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {c.form.description}
              </p>
            </div>

            {/* Right: form */}
            <div className="relative rounded-sm border border-border/40 bg-card/30 p-8 backdrop-blur-sm">
              <JournalUpdateForm locale={locale} />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: Explore Products CTA ─────────────────────────────── */}
      <section className="border-t border-border/30 py-24">
        <div className="section-container">
          <div className="relative overflow-hidden rounded-sm border border-border/40 bg-card/30 px-8 py-16 text-center backdrop-blur-sm">
            {/* Background glow */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,oklch(0.22_0.08_245_/_0.20),transparent)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_50%_100%,oklch(0.70_0.12_65_/_0.04),transparent)]" />

            <div className="relative space-y-6">
              <h2 className="font-heading text-3xl font-semibold leading-[1.15] tracking-tight md:text-4xl pb-[0.1em]">
                {c.cta.heading}
              </h2>
              <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground">
                {c.cta.text}
              </p>
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Link
                  href={`/${locale}/products`}
                  className="rounded-sm border border-bronze bg-bronze px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-bronze/90 hover:shadow-[0_0_24px_oklch(0.70_0.12_65_/_0.35)]"
                >
                  {c.cta.primary}
                </Link>
                <Link
                  href={`/${locale}/contact`}
                  className="rounded-sm border border-border/60 px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:border-bronze/40 hover:text-bronze"
                >
                  {c.cta.secondary}
                </Link>
                <Link
                  href={`/${locale}/partner-distributor`}
                  className="rounded-sm border border-border/60 px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:border-bronze/40 hover:text-bronze"
                >
                  {c.cta.tertiary}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
