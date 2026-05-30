import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { type Locale } from "@/lib/i18n"
import { sanityClient } from "@/sanity/lib/client"
import {
  publishedPostBySlugQuery,
  publishedSlugsByLocaleQuery,
} from "@/sanity/lib/queries"

// TODO: Install @portabletext/react when the first article is ready to publish:
//   npm install @portabletext/react
// Then replace the <ArticleBody> placeholder below with a real PortableText renderer.

type ArticlePageProps = {
  params: Promise<{ locale: Locale; slug: string }>
}

// ─── Sanity projection types ─────────────────────────────────────────────────

type RelatedPost = {
  _id: string
  title: string
  slug: { current: string }
  excerpt?: string
  category?: string
  publishedAt?: string
  coverImage?: string
}

type ArticleDetail = {
  _id: string
  title: string
  slug: { current: string }
  excerpt?: string
  category?: string
  publishedAt?: string
  authorName?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content?: any[]
  coverImage?: string
  seoTitle?: string
  seoDescription?: string
  relatedPosts?: RelatedPost[]
}

// ─── generateStaticParams ────────────────────────────────────────────────────
// Returns an empty array when no approved articles exist — the route stays
// dynamic. Once articles are published, slugs populate at build time.

export async function generateStaticParams() {
  try {
    const locales: Locale[] = ["tr", "en"]
    const allParams: { locale: string; slug: string }[] = []

    for (const locale of locales) {
      const slugs = await sanityClient.fetch<string[]>(
        publishedSlugsByLocaleQuery,
        { locale }
      )
      for (const slug of slugs ?? []) {
        allParams.push({ locale, slug })
      }
    }

    return allParams
  } catch {
    return []
  }
}

// ─── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { locale, slug } = await params

  try {
    const article = await sanityClient.fetch<ArticleDetail | null>(
      publishedPostBySlugQuery,
      { locale, slug }
    )
    if (!article) return {}

    return {
      title: article.seoTitle ?? article.title,
      description: article.seoDescription ?? article.excerpt,
    }
  } catch {
    return {}
  }
}

// ─── Shared styles ───────────────────────────────────────────────────────────

const eyebrowClass =
  "text-xs font-medium uppercase tracking-[0.3em] text-bronze/70"

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatDate(iso: string, locale: Locale): string {
  try {
    return new Intl.DateTimeFormat(locale === "tr" ? "tr-TR" : "en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(iso))
  } catch {
    return iso
  }
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function ArticleHero({
  article,
  locale,
}: {
  article: ArticleDetail
  locale: Locale
}) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "oklch(0.09 0.015 245 / 0.6)" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,oklch(0.22_0.08_245_/_0.45),transparent)]" />

      <div className="section-container relative">
        <div className="mx-auto max-w-3xl space-y-8">
          {/* Back link */}
          <Link
            href={`/${locale}/journal`}
            className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-bronze"
          >
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            {locale === "tr" ? "Journal'a Dön" : "Back to Journal"}
          </Link>

          {/* Category */}
          {article.category && (
            <span className={eyebrowClass}>{article.category}</span>
          )}

          {/* Title */}
          <h1 className="font-heading text-3xl font-semibold leading-[1.15] tracking-tight md:text-4xl lg:text-5xl pb-[0.1em]">
            {article.title}
          </h1>

          {/* Excerpt */}
          {article.excerpt && (
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {article.excerpt}
            </p>
          )}

          {/* Metadata row */}
          <div className="flex flex-wrap items-center gap-4 border-t border-border/30 pt-5 text-sm text-muted-foreground">
            {article.authorName && (
              <span className="font-medium text-foreground">
                {article.authorName}
              </span>
            )}
            {article.publishedAt && (
              <time dateTime={article.publishedAt}>
                {formatDate(article.publishedAt, locale)}
              </time>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function ArticleBody({
  content,
  locale,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any[] | undefined
  locale: Locale
}) {
  if (!content || content.length === 0) {
    return (
      <div className="rounded-sm border border-border/30 bg-card/20 px-8 py-12 text-center text-sm text-muted-foreground">
        {locale === "tr"
          ? "İçerik hazırlanıyor."
          : "Content is being prepared."}
      </div>
    )
  }

  // TODO: Replace with @portabletext/react when package is installed
  // import { PortableText } from "@portabletext/react"
  // return <PortableText value={content} />
  return (
    <div className="rounded-sm border border-border/30 bg-card/20 px-8 py-12 text-center text-sm text-muted-foreground">
      {locale === "tr"
        ? "İçerik oluşturucu hazırlanıyor — @portabletext/react yüklendiğinde aktif olacak."
        : "Content renderer pending — will activate when @portabletext/react is installed."}
    </div>
  )
}

function RelatedArticles({
  posts,
  locale,
}: {
  posts: RelatedPost[]
  locale: Locale
}) {
  if (posts.length === 0) return null

  return (
    <section className="border-t border-border/30 py-16">
      <div className="section-container space-y-10">
        <h2 className="font-heading text-2xl font-semibold leading-[1.2] tracking-tight">
          {locale === "tr" ? "İlgili Yazılar" : "Related Articles"}
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post._id}
              href={`/${locale}/journal/${post.slug.current}`}
              className="group rounded-sm border border-border/40 bg-card/30 p-5 backdrop-blur-sm transition-colors hover:border-bronze/30"
            >
              {post.category && (
                <p className="mb-2 text-xs font-medium uppercase tracking-widest text-bronze/60">
                  {post.category}
                </p>
              )}
              <h3 className="font-heading text-base font-semibold leading-[1.3] text-foreground transition-colors group-hover:text-bronze line-clamp-2">
                {post.title}
              </h3>
              {post.excerpt && (
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                  {post.excerpt}
                </p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { locale, slug } = await params

  let article: ArticleDetail | null = null
  try {
    article = await sanityClient.fetch<ArticleDetail | null>(
      publishedPostBySlugQuery,
      { locale, slug }
    )
  } catch {
    notFound()
  }

  // notFound() for any post that is not published + approved + has publishedAt
  if (!article) notFound()

  const relatedPosts = article.relatedPosts ?? []

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <ArticleHero article={article} locale={locale} />

      {/* Article body */}
      <section className="border-t border-border/30 py-16">
        <div className="section-container">
          <div className="mx-auto max-w-3xl">
            <ArticleBody content={article.content} locale={locale} />
          </div>
        </div>
      </section>

      {/* Related articles — only shown when approved related posts exist */}
      <RelatedArticles posts={relatedPosts} locale={locale} />

      {/* Journal CTA */}
      <section className="border-t border-border/30 py-16">
        <div className="section-container">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <p className={eyebrowClass}>APOLLON JOURNAL</p>
              <p className="font-heading text-xl font-semibold leading-[1.2]">
                {locale === "tr"
                  ? "Daha fazla içerik için Journal'a dönün."
                  : "Return to the Journal for more."}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={`/${locale}/journal`}
                className="rounded-sm border border-bronze bg-bronze px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-bronze/90"
              >
                {locale === "tr" ? "Tüm Yazılar" : "All Articles"}
              </Link>
              <Link
                href={`/${locale}/products`}
                className="rounded-sm border border-border/60 px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-bronze/40 hover:text-bronze"
              >
                {locale === "tr" ? "Ürünleri Keşfet" : "Explore Products"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
