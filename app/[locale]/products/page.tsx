type ProductsPageProps = {
  params: Promise<{
    locale: "tr" | "en"
  }>
}

export default async function ProductsPage({ params }: ProductsPageProps) {
  const { locale } = await params

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="mx-auto max-w-6xl space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
          {locale === "tr" ? "Ürünler" : "Products"}
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold">
          {locale === "tr"
            ? "Mobilite teknolojileri kataloğu"
            : "Mobility technology catalog"}
        </h1>
      </div>
    </main>
  )
}