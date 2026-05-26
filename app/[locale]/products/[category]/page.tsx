type ProductCategoryPageProps = {
  params: Promise<{
    locale: "tr" | "en"
    category: string
  }>
}

export default async function ProductCategoryPage({
  params,
}: ProductCategoryPageProps) {
  const { locale, category } = await params

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="mx-auto max-w-6xl space-y-4">
        <p className="text-neutral-500">Locale: {locale}</p>
        <h1 className="text-5xl font-semibold">{category}</h1>
      </div>
    </main>
  )
}