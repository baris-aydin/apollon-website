import Link from "next/link"
import { type Locale } from "@/lib/i18n"

type FooterProps = {
  locale: Locale
}

export function Footer({ locale }: FooterProps) {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
        <div className="space-y-3">
          <p className="font-semibold">APOLLON</p>
          <p className="max-w-xs text-sm text-neutral-400">
            {locale === "tr"
              ? "Otomobil ve motosikletler için premium mobilite teknolojileri."
              : "Premium mobility technology for cars and motorcycles."}
          </p>
        </div>

        <div>
          <p className="mb-3 text-sm font-medium">
            {locale === "tr" ? "Ürünler" : "Products"}
          </p>
          <ul className="space-y-2 text-sm text-neutral-400">
            <li>
              <Link href={`/${locale}/products/car-multimedia`}>
                Car Multimedia
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/products/car-safety-security`}>
                Safety & Security
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/products/motorcycle-smart-systems`}>
                Motorcycle Systems
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-medium">
            {locale === "tr" ? "Şirket" : "Company"}
          </p>
          <ul className="space-y-2 text-sm text-neutral-400">
            <li>
              <Link href={`/${locale}/about`}>About</Link>
            </li>
            <li>
              <Link href={`/${locale}/partner-distributor`}>Partner</Link>
            </li>
            <li>
              <Link href={`/${locale}/contact`}>Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-medium">Contact</p>
          <p className="text-sm text-neutral-400">info@apollon.example</p>
        </div>
      </div>
    </footer>
  )
}