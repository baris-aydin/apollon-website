import type { Metadata } from "next"
import { Geist, Geist_Mono, Syne } from "next/font/google"
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const syne = Syne({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: {
    default: "Apollon Entertainment Systems",
    template: "%s | Apollon Entertainment Systems",
  },
  description:
    "Premium mobility entertainment systems for cars, motorcycles, safety, and sound.",
  metadataBase: new URL("https://apollonentertainment.com"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        <GoogleAnalytics
          measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
        />
      </body>
    </html>
  )
}
