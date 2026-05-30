import type { Metadata } from "next"
import Link from "next/link"
import { type Locale } from "@/lib/i18n"
import { ContactForm } from "@/components/forms/ContactForm"
import { WhatsAppButton } from "@/components/ui/WhatsAppButton"

type PageProps = { params: Promise<{ locale: Locale }> }

// ─── WhatsApp config ─────────────────────────────────────────────────────────
// TODO: Add final WhatsApp number to .env.local:
//   NEXT_PUBLIC_WHATSAPP_NUMBER=905XXXXXXXXX  (international format, no spaces, no + prefix)

function buildWhatsappUrl(locale: Locale): string {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? ""
  const message =
    locale === "tr"
      ? "Merhaba, Apollon ürünleri hakkında bilgi almak istiyorum."
      : "Hello, I would like to get information about Apollon products."
  if (!number) return "#"
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

// ─── Types ───────────────────────────────────────────────────────────────────

type ContactMethod = { title: string; text: string; cta: string; href: string; external?: boolean }
type TeamMember = { name: string; role: string; description: string }
type SocialLink = {
  platform: string
  description: string
  url: string
  badge?: string
  available: boolean
}

type PageContent = {
  meta: { title: string; description: string }
  hero: { eyebrow: string; title: string; subtitle: string; primaryCta: string; secondaryCta: string }
  methods: { heading: string; intro: string; cards: ContactMethod[] }
  whatsapp: { heading: string; text: string; button: string }
  team: { heading: string; intro: string; members: TeamMember[] }
  office: {
    heading: string
    text: string
    addressPlaceholder: string
    hoursPlaceholder: string
    mapsButton: string
  }
  form: { heading: string; description: string }
  social: { heading: string; text: string; links: SocialLink[] }
  cta: { heading: string; text: string; product: string; whatsapp: string; partner: string }
}

// ─── Content ─────────────────────────────────────────────────────────────────

const content: Record<Locale, PageContent> = {
  en: {
    meta: {
      title: "Contact Apollon Entertainment Systems",
      description:
        "Contact Apollon for car multimedia systems, smart dashcams, motorcycle technologies, compatibility support, installation guidance, dealer information, and partnership opportunities.",
    },
    hero: {
      eyebrow: "CONTACT APOLLON",
      title: "Let's talk about the right mobility solution.",
      subtitle:
        "Contact Apollon for product information, vehicle compatibility, motorcycle system questions, installation guidance, dealer information, or partnership opportunities.",
      primaryCta: "Send a Message",
      secondaryCta: "Contact on WhatsApp",
    },
    methods: {
      heading: "How can we help?",
      intro:
        "Choose the most relevant contact path and tell us what you need. Our team can guide you toward product information, compatibility support, installation communication, or partnership discussions.",
      cards: [
        {
          title: "General information",
          text: "For general questions about Apollon, product families, brand information, and website inquiries.",
          cta: "Send a Message",
          href: "#contact-form",
        },
        {
          title: "Product and compatibility inquiry",
          text: "For car multimedia compatibility, motorcycle system selection, dashcam questions, and product information.",
          cta: "Request Product Information",
          href: "#contact-form",
        },
        {
          title: "Installation and dealer information",
          text: "For questions about installation requirements, dealer communication, and product-fit guidance.",
          cta: "Ask About Installation",
          href: "#contact-form",
        },
        {
          title: "Partnership and distribution",
          text: "For distributor, dealer, installer, reseller, and strategic partnership opportunities.",
          cta: "Become a Partner",
          href: "/en/partner-distributor",
        },
      ],
    },
    whatsapp: {
      heading: "Prefer a faster conversation?",
      text: "Reach Apollon through WhatsApp for product questions, compatibility details, installation guidance, and general inquiries.",
      button: "Contact on WhatsApp",
    },
    team: {
      heading: "Contact our team",
      intro:
        "Reach the appropriate Apollon contact for brand, operations, and business-related questions.",
      // TODO: Obtain founder approval for public display of names, roles, contact details, and photos before publishing
      members: [
        {
          name: "Erdinç İlban",
          // TODO: Confirm exact role title with founder
          role: "Founder & Brand Director",
          description:
            "For brand direction, strategic relationships, and long-term collaboration discussions.",
          // TODO: Add approved public email address
          // TODO: Add approved public phone number
          // TODO: Add approved WhatsApp link
          // TODO: Add profile photo
        },
        {
          name: "Osman Mervan Erdem",
          // TODO: Confirm exact role title with founder
          role: "Operations Manager",
          description:
            "For operational coordination, product communication, and business-related inquiries.",
          // TODO: Add approved public email address
          // TODO: Add approved public phone number
          // TODO: Add approved WhatsApp link
          // TODO: Add profile photo
        },
      ],
    },
    office: {
      heading: "Office location",
      text: "Visit Apollon or use the map below to find the office location. Please confirm availability before visiting.",
      // TODO: Add final approved office address before launch
      addressPlaceholder: "Office address will be added after confirmation.",
      // TODO: Add confirmed business hours
      hoursPlaceholder: "Working hours to be confirmed.",
      mapsButton: "Open in Google Maps",
    },
    form: {
      heading: "Send us a message",
      description:
        "Tell us what you need and our team will review your message. For vehicle-specific questions, include the brand, model, year, and current system details where possible.",
    },
    social: {
      heading: "Follow Apollon",
      text: "Follow Apollon for product updates, new releases, brand stories, and future mobility technology developments.",
      links: [
        {
          platform: "Instagram",
          description: "Product visuals, updates, and brand stories.",
          // TODO: Add final approved Instagram URL
          url: "#",
          available: true,
        },
        {
          platform: "TikTok",
          description: "Short-form product highlights and mobility content.",
          // TODO: Add final approved TikTok URL
          url: "#",
          available: true,
        },
        {
          platform: "YouTube",
          description: "Product videos, guides, and future brand content.",
          // TODO: Add YouTube channel URL when channel is ready
          url: "#",
          badge: "Coming Soon",
          available: false,
        },
      ],
    },
    cta: {
      heading: "Ready to explore Apollon products?",
      text: "Contact us for product information, compatibility support, installation guidance, or partnership discussions.",
      product: "Request Product Information",
      whatsapp: "Contact on WhatsApp",
      partner: "Become a Partner",
    },
  },
  tr: {
    meta: {
      title: "Apollon Entertainment Systems İletişim",
      description:
        "Araç multimedya sistemleri, akıllı araç kameraları, motosiklet teknolojileri, uyumluluk desteği, montaj yönlendirmesi, bayi bilgisi ve iş ortaklığı fırsatları için Apollon ile iletişime geçin.",
    },
    hero: {
      eyebrow: "APOLLON İLETİŞİM",
      title: "Doğru mobilite çözümünü birlikte konuşalım.",
      subtitle:
        "Ürün bilgisi, araç uyumluluğu, motosiklet sistemleri, montaj yönlendirmesi, bayi bilgisi veya iş ortaklığı fırsatları için Apollon ile iletişime geçin.",
      primaryCta: "Mesaj Gönder",
      secondaryCta: "WhatsApp'tan İletişime Geç",
    },
    methods: {
      heading: "Size nasıl yardımcı olabiliriz?",
      intro:
        "Size en uygun iletişim yolunu seçin ve ihtiyacınızı bize iletin. Ekibimiz ürün bilgisi, uyumluluk desteği, montaj iletişimi veya iş ortaklığı görüşmeleri konusunda yardımcı olabilir.",
      cards: [
        {
          title: "Genel bilgi",
          text: "Apollon, ürün aileleri, marka bilgileri ve web sitesiyle ilgili genel sorular için.",
          cta: "Mesaj Gönder",
          href: "#contact-form",
        },
        {
          title: "Ürün ve uyumluluk talebi",
          text: "Araç multimedya uyumluluğu, motosiklet sistemi seçimi, araç kamerası soruları ve ürün bilgisi için.",
          cta: "Ürün Bilgisi Al",
          href: "#contact-form",
        },
        {
          title: "Montaj ve bayi bilgisi",
          text: "Montaj gereksinimleri, bayi iletişimi ve ürün uyumluluk yönlendirmesiyle ilgili sorular için.",
          cta: "Montaj Bilgisi Sor",
          href: "#contact-form",
        },
        {
          title: "İş ortaklığı ve distribütörlük",
          text: "Distribütörlük, bayilik, montaj noktası, satıcılık ve stratejik iş ortaklığı fırsatları için.",
          cta: "İş Ortağımız Ol",
          href: "/tr/partner-distributor",
        },
      ],
    },
    whatsapp: {
      heading: "Daha hızlı iletişim mi tercih ediyorsunuz?",
      text: "Ürün soruları, uyumluluk detayları, montaj yönlendirmesi ve genel talepleriniz için Apollon'a WhatsApp üzerinden ulaşın.",
      button: "WhatsApp'tan İletişime Geç",
    },
    team: {
      heading: "Ekibimizle iletişime geçin",
      intro:
        "Marka, operasyon ve iş geliştirme konularında ilgili Apollon yetkilisine ulaşın.",
      // TODO: Obtain founder approval for public display of names, roles, contact details, and photos before publishing
      members: [
        {
          name: "Erdinç İlban",
          // TODO: Confirm exact role title with founder
          role: "Kurucu & Marka Direktörü",
          description:
            "Marka yönelimi, stratejik ilişkiler ve uzun vadeli iş birliği görüşmeleri için.",
        },
        {
          name: "Osman Mervan Erdem",
          // TODO: Confirm exact role title with founder
          role: "Operasyon Müdürü",
          description:
            "Operasyon koordinasyonu, ürün iletişimi ve işle ilgili talepler için.",
        },
      ],
    },
    office: {
      heading: "Ofis konumu",
      text: "Apollon'u ziyaret etmek veya ofis konumunu görüntülemek için aşağıdaki haritayı kullanın. Ziyaret öncesinde uygunluğu doğrulayın.",
      // TODO: Add final approved office address before launch
      addressPlaceholder: "Ofis adresi onaylandıktan sonra eklenecektir.",
      // TODO: Add confirmed business hours
      hoursPlaceholder: "Çalışma saatleri onaylanacaktır.",
      mapsButton: "Google Maps'te Aç",
    },
    form: {
      heading: "Bize mesaj gönderin",
      description:
        "İhtiyacınızı paylaşın, ekibimiz mesajınızı değerlendirsin. Araca özel sorular için mümkünse marka, model, yıl ve mevcut sistem bilgilerini ekleyin.",
    },
    social: {
      heading: "Apollon'u takip edin",
      text: "Ürün güncellemeleri, yeni lansmanlar, marka hikâyeleri ve gelecek mobilite teknolojileri için Apollon'u takip edin.",
      links: [
        {
          platform: "Instagram",
          description: "Ürün görselleri, güncellemeler ve marka hikâyeleri.",
          // TODO: Add final approved Instagram URL
          url: "#",
          available: true,
        },
        {
          platform: "TikTok",
          description: "Kısa ürün tanıtımları ve mobilite içerikleri.",
          // TODO: Add final approved TikTok URL
          url: "#",
          available: true,
        },
        {
          platform: "YouTube",
          description: "Ürün videoları, rehberler ve gelecek marka içerikleri.",
          // TODO: Add YouTube channel URL when channel is ready
          url: "#",
          badge: "Yakında",
          available: false,
        },
      ],
    },
    cta: {
      heading: "Apollon ürünlerini keşfetmeye hazır mısınız?",
      text: "Ürün bilgisi, uyumluluk desteği, montaj yönlendirmesi veya iş ortaklığı görüşmeleri için bizimle iletişime geçin.",
      product: "Ürün Bilgisi Al",
      whatsapp: "WhatsApp'tan İletişime Geç",
      partner: "İş Ortağımız Ol",
    },
  },
}

// ─── Shared styles ────────────────────────────────────────────────────────────

const eyebrowClass =
  "text-xs font-medium uppercase tracking-[0.3em] text-bronze/70"
const sectionHeadingClass =
  "font-heading text-3xl font-semibold leading-[1.15] tracking-tight md:text-4xl pb-[0.1em]"
const glassCard =
  "rounded-sm border border-border/40 bg-card/40 p-6 backdrop-blur-sm"

// ─── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const c = content[locale]
  return {
    title: c.meta.title,
    description: c.meta.description,
  }
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params
  const c = content[locale]
  const partnerHref = `/${locale}/partner-distributor`

  // TODO: Add final WhatsApp number to .env.local before launch (NEXT_PUBLIC_WHATSAPP_NUMBER)
  const whatsappUrl = buildWhatsappUrl(locale)
  // TODO: Add final Google Maps embed URL before launch
  const mapsEmbedUrl = ""
  // TODO: Add final Google Maps open URL before launch
  const mapsOpenUrl = "#"

  return (
    <main className="min-h-screen">

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
          <div className="mx-auto max-w-3xl text-center">
            <p className={`${eyebrowClass} mb-4`}>{c.hero.eyebrow}</p>
            <h1 className="font-heading text-4xl font-semibold leading-[1.12] tracking-tight md:text-5xl lg:text-6xl pb-[0.14em] mb-6">
              {c.hero.title}
            </h1>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg mb-8 max-w-2xl mx-auto">
              {c.hero.subtitle}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="#contact-form"
                className="rounded-sm border border-bronze bg-bronze px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-bronze/90 hover:shadow-[0_0_24px_oklch(0.70_0.12_65_/_0.35)]"
              >
                {c.hero.primaryCta}
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm border border-border/60 bg-card/40 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-border hover:bg-card/60"
              >
                {c.hero.secondaryCta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Contact Methods ──────────────────────────────────── */}
      <section className="py-20">
        <div className="section-container">
          <div className="mb-12 max-w-2xl">
            <h2 className={`${sectionHeadingClass} mb-4`}>{c.methods.heading}</h2>
            <p className="text-base leading-relaxed text-muted-foreground">{c.methods.intro}</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {c.methods.cards.map((card) => {
              const isInternal = !card.href.startsWith("http") && !card.href.startsWith("#")
              const isAnchor = card.href.startsWith("#")

              return (
                <div key={card.title} className={`${glassCard} flex flex-col`}>
                  <h3 className="mb-2 font-heading text-base font-semibold leading-[1.3] text-foreground">
                    {card.title}
                  </h3>
                  <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {card.text}
                  </p>
                  {isAnchor ? (
                    <a
                      href={card.href}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-bronze/80 transition-colors hover:text-bronze"
                    >
                      {card.cta} <span aria-hidden>→</span>
                    </a>
                  ) : isInternal ? (
                    <Link
                      href={card.href}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-bronze/80 transition-colors hover:text-bronze"
                    >
                      {card.cta} <span aria-hidden>→</span>
                    </Link>
                  ) : (
                    <a
                      href={card.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-bronze/80 transition-colors hover:text-bronze"
                    >
                      {card.cta} <span aria-hidden>→</span>
                    </a>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: WhatsApp CTA ─────────────────────────────────────── */}
      <section className="py-16">
        <div className="section-container">
          <div className="relative overflow-hidden rounded-sm border border-green-500/20 bg-green-950/20 px-8 py-10 backdrop-blur-sm">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_0%_50%,oklch(0.35_0.12_155_/_0.08),transparent)]" />
            <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-xl">
                <h2 className="mb-2 font-heading text-xl font-semibold leading-[1.3] text-foreground">
                  {c.whatsapp.heading}
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{c.whatsapp.text}</p>
              </div>
              <WhatsAppButton
                href={whatsappUrl}
                label={c.whatsapp.button}
                locale={locale}
                gaSource="contact_page"
                className={`shrink-0 rounded-sm border px-6 py-3 text-sm font-semibold transition-all ${
                  whatsappUrl === "#"
                    ? "cursor-not-allowed border-border/40 text-muted-foreground opacity-50"
                    : "border-green-500/60 bg-green-500/10 text-green-400 hover:bg-green-500/20 hover:shadow-[0_0_20px_oklch(0.65_0.17_155_/_0.15)]"
                }`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Contact Team ─────────────────────────────────────── */}
      {/* TODO: Remove this section or replace with generic "Apollon Team" card if founders do not approve public display */}
      <section className="py-20">
        <div className="section-container">
          <div className="mb-12 max-w-2xl">
            <h2 className={`${sectionHeadingClass} mb-4`}>{c.team.heading}</h2>
            <p className="text-base leading-relaxed text-muted-foreground">{c.team.intro}</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-3xl">
            {c.team.members.map((member) => (
              <div key={member.name} className={`${glassCard} flex gap-5`}>
                {/* TODO: Replace with approved profile photo */}
                <div className="h-14 w-14 shrink-0 rounded-full border border-border/40 bg-card/60 flex items-center justify-center">
                  <span className="text-xl font-semibold text-bronze/60">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <div className="min-w-0">
                  {/* TODO: Confirm name and role publicly approved before launch */}
                  <p className="font-heading text-sm font-semibold text-foreground">{member.name}</p>
                  <p className="mb-2 text-xs text-bronze/70">{member.role}</p>
                  <p className="text-xs leading-relaxed text-muted-foreground">{member.description}</p>
                  {/* TODO: Add approved contact email, phone, and WhatsApp link here */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTIONS 5 & 6: Office Location + Maps ──────────────────────── */}
      <section className="py-20 border-t border-border/30">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* Office info */}
            <div>
              <h2 className={`${sectionHeadingClass} mb-4`}>{c.office.heading}</h2>
              <p className="mb-8 text-base leading-relaxed text-muted-foreground">{c.office.text}</p>

              <div className={`${glassCard} space-y-5`}>
                {/* Address */}
                <div className="flex gap-3">
                  <div className="mt-0.5 h-5 w-5 shrink-0 text-bronze/60">
                    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-medium uppercase tracking-widest text-muted-foreground/60">
                      {locale === "tr" ? "Adres" : "Address"}
                    </p>
                    {/* TODO: Replace placeholder with final confirmed office address */}
                    <p className="text-sm leading-relaxed text-muted-foreground italic">
                      {c.office.addressPlaceholder}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-3">
                  <div className="mt-0.5 h-5 w-5 shrink-0 text-bronze/60">
                    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-medium uppercase tracking-widest text-muted-foreground/60">
                      {locale === "tr" ? "Çalışma Saatleri" : "Working Hours"}
                    </p>
                    {/* TODO: Replace placeholder with confirmed business hours */}
                    <p className="text-sm leading-relaxed text-muted-foreground italic">
                      {c.office.hoursPlaceholder}
                    </p>
                  </div>
                </div>

                {/* Open in Maps button */}
                <div className="pt-2">
                  <a
                    href={mapsOpenUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-sm border border-border/60 bg-card/40 px-4 py-2 text-xs font-medium text-foreground transition-all hover:border-border hover:bg-card/60"
                  >
                    {c.office.mapsButton} <span aria-hidden>↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="overflow-hidden rounded-sm border border-border/40">
              {mapsEmbedUrl ? (
                <iframe
                  src={mapsEmbedUrl}
                  width="100%"
                  height="420"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={locale === "tr" ? "Apollon ofis konumu" : "Apollon office location"}
                  className="w-full"
                />
              ) : (
                /* TODO: Replace this placeholder with the Google Maps iframe once the embed URL is confirmed */
                <div className="flex h-[420px] items-center justify-center bg-card/20 px-8 text-center">
                  <div>
                    <div className="mb-3 text-bronze/30">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="mx-auto h-12 w-12"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-xs text-muted-foreground/50">
                      {locale === "tr"
                        ? "Harita, ofis adresi onaylandıktan sonra eklenecektir."
                        : "Map will be added after the office address is confirmed."}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: Contact Form ─────────────────────────────────────── */}
      <section id="contact-form" className="py-20 scroll-mt-20 border-t border-border/30">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:items-start">
            {/* Heading col */}
            <div>
              <h2 className={`${sectionHeadingClass} mb-4`}>{c.form.heading}</h2>
              <p className="text-base leading-relaxed text-muted-foreground">{c.form.description}</p>
            </div>

            {/* Form col */}
            <div className={glassCard}>
              <ContactForm locale={locale} />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: Social Media Links ──────────────────────────────── */}
      <section className="py-20 border-t border-border/30">
        <div className="section-container">
          <div className="mb-10 max-w-xl">
            <h2 className={`${sectionHeadingClass} mb-3`}>{c.social.heading}</h2>
            <p className="text-base leading-relaxed text-muted-foreground">{c.social.text}</p>
          </div>

          <div className="flex flex-wrap gap-5">
            {c.social.links.map((link) => {
              const inner = (
                <div
                  className={`${glassCard} flex min-w-[200px] flex-1 flex-col gap-2 transition-colors ${
                    link.available
                      ? "hover:border-bronze/30 hover:bg-card/60"
                      : "opacity-50"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-heading text-sm font-semibold text-foreground">
                      {link.platform}
                    </p>
                    {link.badge && (
                      <span className="rounded-full border border-border/60 bg-card/40 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground/60">
                        {link.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs leading-relaxed text-muted-foreground">{link.description}</p>
                </div>
              )

              if (!link.available || link.url === "#") {
                return <div key={link.platform}>{inner}</div>
              }

              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block flex-1"
                >
                  {inner}
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 9: Final CTA ────────────────────────────────────────── */}
      <section className="py-20 border-t border-border/30">
        <div className="section-container">
          <div className="relative overflow-hidden rounded-sm border border-border/40 bg-card/30 px-8 py-16 text-center backdrop-blur-sm">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,oklch(0.22_0.08_245_/_0.20),transparent)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_50%_100%,oklch(0.70_0.12_65_/_0.04),transparent)]" />

            <div className="relative space-y-6">
              <h2 className={`${sectionHeadingClass} mx-auto max-w-xl`}>{c.cta.heading}</h2>
              <p className="mx-auto max-w-lg text-base leading-relaxed text-muted-foreground">
                {c.cta.text}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#contact-form"
                  className="rounded-sm border border-bronze bg-bronze px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-bronze/90 hover:shadow-[0_0_24px_oklch(0.70_0.12_65_/_0.35)]"
                >
                  {c.cta.product}
                </a>
                <WhatsAppButton
                  href={whatsappUrl}
                  label={c.cta.whatsapp}
                  locale={locale}
                  gaSource="contact_cta"
                  className="rounded-sm border border-border/60 bg-card/40 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-border hover:bg-card/60"
                />
                <Link
                  href={partnerHref}
                  className="rounded-sm border border-border/60 bg-card/40 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-border hover:bg-card/60"
                >
                  {c.cta.partner}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
