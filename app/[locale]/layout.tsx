import { notFound } from "next/navigation"
import { Footer } from "@/components/layout/Footer"
import { Header } from "@/components/layout/Header"
import { isValidLocale, type Locale } from "@/lib/i18n"

type LocaleLayoutProps = {
  children: React.ReactNode
  params: Promise<{
    locale: string
  }>
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params

  if (!isValidLocale(locale)) {
    notFound()
  }

  const validLocale = locale as Locale

  return (
    <>
      <Header locale={validLocale} />
      {children}
      <Footer locale={validLocale} />
    </>
  )
}