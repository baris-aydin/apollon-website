type PageProps = {
  params: Promise<{
    locale: "tr" | "en"
  }>
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-neutral-500">Locale: {locale}</p>
        <h1 className="text-5xl font-semibold">Page coming soon</h1>
      </div>
    </main>
  )
}