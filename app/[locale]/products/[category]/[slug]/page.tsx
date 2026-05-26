type ProductDetailPageProps = {
  params: Promise<{
    locale: "tr" | "en"
    category: string
    slug: string
  }>
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { locale, category, slug } = await params

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="mx-auto max-w-6xl space-y-4">
        <p className="text-neutral-500">
          {locale} / {category}
        </p>
        <h1 className="text-5xl font-semibold">{slug}</h1>
      </div>
    </main>
  )
}