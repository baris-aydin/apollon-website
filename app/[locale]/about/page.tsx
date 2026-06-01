import type { Metadata } from "next"
import Link from "next/link"
import { type Locale } from "@/lib/i18n"

type PageProps = { params: Promise<{ locale: Locale }> }

// ─── Types ───────────────────────────────────────────────────────────────────

type Card = { title: string; text: string }
type RoadmapStage = { title: string; text: string }
type TeamMember = { name: string; role: string; bio: string }

type PageContent = {
  meta: { title: string; description: string }
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    primaryCta: string
    secondaryCta: string
  }
  story: { heading: string; text1: string; text2: string; text3: string }
  vision: { heading: string; text: string; cards: Card[] }
  partnership: { heading: string; text1: string; text2: string; text3: string }
  beliefs: { heading: string; intro: string; cards: Card[] }
  values: { heading: string; cards: Card[] }
  team: {
    heading: string
    intro: string
    members: TeamMember[]
    approvalNote: string
  }
  roadmap: { heading: string; intro: string; stages: RoadmapStage[] }
  cta: {
    heading: string
    text: string
    primary: string
    secondary: string
    tertiary: string
  }
}

// ─── Content ─────────────────────────────────────────────────────────────────

const content: Record<Locale, PageContent> = {
  en: {
    meta: {
      title: "About Apollon Entertainment Systems",
      description:
        "Learn about Apollon Entertainment Systems, a Turkey-based premium mobility technology brand focused on car multimedia systems, dashcams, motorcycle smart systems, partnerships, and future audio products.",
    },
    hero: {
      eyebrow: "ABOUT APOLLON",
      title: "Technology with soul. Built for movement.",
      subtitle:
        "Apollon Entertainment Systems is a premium mobility technology brand bringing together smart displays, connected safety systems, motorcycle technologies, and future sound experiences.",
      primaryCta: "Explore Products",
      secondaryCta: "Become a Partner",
    },
    story: {
      heading: "A mobility brand shaped by technology, culture, and movement.",
      text1:
        "Apollon was created with a simple belief: technology should do more than function. It should improve the way people feel while they move.",
      text2:
        "From smart car multimedia systems and connected dashcams to motorcycle technologies and future premium audio experiences, Apollon brings together products that make everyday mobility more connected, more refined, and more personal.",
      text3:
        "The brand is built around a long-term goal: to create a distinctive mobility technology identity that combines modern engineering, carefully selected products, clear communication, and cultural character.",
    },
    vision: {
      heading: "Our vision",
      text: "Apollon aims to become a trusted premium mobility technology brand in Turkey and, over time, in broader markets. The goal is not only to distribute products, but to build a recognizable ecosystem around entertainment, safety, connectivity, motorcycle technology, and sound.",
      cards: [
        {
          title: "Connected mobility",
          text: "Bring smarter interfaces, navigation, safety, and digital access into everyday movement.",
        },
        {
          title: "Premium positioning",
          text: "Build a refined brand experience that goes beyond ordinary aftermarket accessories.",
        },
        {
          title: "Long-term ecosystem",
          text: "Grow through products, distributors, installers, partnerships, and future technology categories.",
        },
      ],
    },
    partnership: {
      heading: "Global production expertise, local market understanding.",
      text1:
        "Apollon brings together production capability in China and market-focused brand development in Turkey.",
      text2:
        "The company's hardware direction is supported by an experienced production partner in China, while Apollon focuses on selecting the right product categories, understanding local customer needs, building distributor and installer relationships, and shaping a premium brand identity for the Turkish market.",
      text3:
        "This partnership allows Apollon to combine global manufacturing access with local communication, practical product guidance, and a clearer customer experience.",
    },
    beliefs: {
      heading: "What Apollon believes",
      intro:
        "Apollon is guided by a simple idea: mobility technology should feel useful, refined, and alive.",
      cards: [
        {
          title: "Technology should feel personal.",
          text: "A screen, camera, or audio system should not feel like an isolated accessory. It should improve the way a driver or rider experiences the road.",
        },
        {
          title: "Compatibility matters.",
          text: "The right product depends on the vehicle, motorcycle, use case, and installation environment. Good guidance matters as much as the hardware itself.",
        },
        {
          title: "Safety and convenience should work together.",
          text: "Modern mobility technology should improve confidence, reduce friction, and support the everyday journey.",
        },
        {
          title: "Brand character matters.",
          text: "A premium technology brand should have a clear voice, visual identity, and long-term direction.",
        },
      ],
    },
    values: {
      heading: "Our values",
      cards: [
        {
          title: "Clarity",
          text: "Clear information, thoughtful product organization, and honest communication.",
        },
        {
          title: "Quality",
          text: "A focused product catalog built around carefully selected mobility technologies.",
        },
        {
          title: "Compatibility",
          text: "Guidance-first product selection for vehicles, motorcycles, and installation needs.",
        },
        {
          title: "Partnership",
          text: "Long-term relationships with distributors, installers, suppliers, and customers.",
        },
        {
          title: "Culture",
          text: "A brand identity inspired by movement, place, memory, and the meeting point of East and West.",
        },
        {
          title: "Ambition",
          text: "A long-term vision that grows beyond today's product catalog.",
        },
      ],
    },
    team: {
      heading: "The people behind Apollon",
      intro:
        "Apollon is being built by a small, focused team combining brand direction, operations, product research, and long-term market development.",
      // TODO: Confirm public display approval for names, titles, bios, photos, and contact links
      members: [
        {
          name: "Erdinç İlban",
          role: "Founder & Brand Director",
          // TODO: Confirm approved public bio
          bio: "Shapes Apollon's brand identity, product direction, and long-term vision across mobility technology categories.",
        },
        {
          name: "Osman Mervan Erdem",
          role: "Operations Manager",
          // TODO: Confirm approved public bio
          bio: "Supports operational planning, partner communication, product coordination, and the development of Apollon's market presence.",
        },
      ],
      approvalNote: "",
    },
    roadmap: {
      heading: "Where Apollon is going",
      intro:
        "Apollon's roadmap is designed around steady, focused growth — expanding the catalog, improving guidance, strengthening partnerships, and building future product lines.",
      stages: [
        {
          title: "Build the foundation",
          text: "Launch the premium website, organize the catalog, introduce core product families, and create a clear inquiry flow.",
        },
        {
          title: "Strengthen the network",
          text: "Grow distributor and installer relationships across Turkey and improve compatibility guidance.",
        },
        {
          title: "Expand the product ecosystem",
          text: "Add more vehicle-specific systems, motorcycle technologies, safety products, and richer digital tools.",
        },
        {
          title: "Develop the sound direction",
          text: "Advance the Signature Audio Series and explore future premium audio opportunities.",
        },
      ],
    },
    cta: {
      heading: "Build the next chapter with Apollon.",
      text: "We are building relationships with distributors, installers, mobility technology partners, and regional collaborators who want to grow with the Apollon brand.",
      primary: "Become a Partner",
      secondary: "Distributor Application",
      tertiary: "Contact Us",
    },
  },

  tr: {
    meta: {
      title: "Apollon Entertainment Systems Hakkında",
      description:
        "Araç multimedya sistemleri, akıllı araç kameraları, motosiklet teknolojileri, iş ortaklıkları ve geleceğin ses ürünlerine odaklanan premium mobilite teknolojisi markası Apollon'u tanıyın.",
    },
    hero: {
      eyebrow: "APOLLON HAKKINDA",
      title: "Ruhu olan teknoloji. Hareket için tasarlandı.",
      subtitle:
        "Apollon Entertainment Systems; akıllı ekranları, bağlantılı güvenlik sistemlerini, motosiklet teknolojilerini ve geleceğin ses deneyimlerini bir araya getiren premium bir mobilite teknolojisi markasıdır.",
      primaryCta: "Ürünleri Keşfet",
      secondaryCta: "İş Ortağımız Ol",
    },
    story: {
      heading: "Teknoloji, kültür ve hareketle şekillenen bir mobilite markası.",
      text1:
        "Apollon basit bir inançla doğdu: teknoloji yalnızca çalışmakla kalmamalı, insanların hareket halindeyken nasıl hissettiğini de iyileştirmelidir.",
      text2:
        "Akıllı araç multimedya sistemlerinden bağlantılı araç kameralarına, motosiklet teknolojilerinden geleceğin premium ses deneyimlerine kadar Apollon; günlük mobiliteyi daha bağlantılı, daha rafine ve daha kişisel hale getiren ürünleri bir araya getirir.",
      text3:
        "Marka, uzun vadeli bir hedef etrafında şekillenir: modern mühendisliği, özenle seçilmiş ürünleri, net iletişimi ve kültürel karakteri bir araya getiren ayırt edici bir mobilite teknolojisi kimliği oluşturmak.",
    },
    vision: {
      heading: "Vizyonumuz",
      text: "Apollon, Türkiye'de ve zaman içinde daha geniş pazarlarda güvenilen premium bir mobilite teknolojisi markası olmayı hedefler. Amaç yalnızca ürün dağıtmak değil; eğlence, güvenlik, bağlantı, motosiklet teknolojileri ve ses etrafında tanınabilir bir ekosistem kurmaktır.",
      cards: [
        {
          title: "Bağlantılı mobilite",
          text: "Daha akıllı arayüzleri, navigasyonu, güvenliği ve dijital erişimi günlük mobiliteye taşımak.",
        },
        {
          title: "Premium konumlandırma",
          text: "Sıradan satış sonrası aksesuar anlayışının ötesine geçen rafine bir marka deneyimi oluşturmak.",
        },
        {
          title: "Uzun vadeli ekosistem",
          text: "Ürünler, distribütörler, montaj noktaları, iş birlikleri ve gelecek teknoloji kategorileriyle büyümek.",
        },
      ],
    },
    partnership: {
      heading: "Global üretim deneyimi, yerel pazar anlayışı.",
      text1:
        "Apollon, Çin'deki üretim kabiliyetini Türkiye'deki pazar odaklı marka gelişimiyle bir araya getirir.",
      text2:
        "Şirketin donanım yönelimi Çin'deki deneyimli üretim ortağı tarafından desteklenirken Apollon; doğru ürün kategorilerini seçmeye, yerel müşteri ihtiyaçlarını anlamaya, distribütör ve montaj ilişkileri kurmaya ve Türkiye pazarı için premium bir marka kimliği şekillendirmeye odaklanır.",
      text3:
        "Bu iş birliği, Apollon'un global üretim erişimini yerel iletişim, pratik ürün yönlendirmesi ve daha net bir müşteri deneyimiyle birleştirmesine olanak tanır.",
    },
    beliefs: {
      heading: "Apollon'un inançları",
      intro:
        "Apollon basit bir ilkeyle yönlenir: mobilite teknolojisi kullanışlı, rafine ve canlı hissettirmelidir.",
      cards: [
        {
          title: "Teknoloji kişisel hissettirmelidir.",
          text: "Bir ekran, kamera veya ses sistemi yalnızca bağımsız bir aksesuar gibi hissettirmemelidir. Sürücünün veya motosiklet kullanıcısının yolu deneyimleme biçimini iyileştirmelidir.",
        },
        {
          title: "Uyumluluk önemlidir.",
          text: "Doğru ürün; araca, motosiklete, kullanım senaryosuna ve montaj ortamına göre değişir. İyi yönlendirme, donanımın kendisi kadar önemlidir.",
        },
        {
          title: "Güvenlik ve kolaylık birlikte çalışmalıdır.",
          text: "Modern mobilite teknolojisi güveni artırmalı, gereksiz zorlukları azaltmalı ve günlük yolculuğu desteklemelidir.",
        },
        {
          title: "Marka karakteri önemlidir.",
          text: "Premium bir teknoloji markasının net bir dili, görsel kimliği ve uzun vadeli yönelimi olmalıdır.",
        },
      ],
    },
    values: {
      heading: "Değerlerimiz",
      cards: [
        {
          title: "Netlik",
          text: "Net bilgi, düşünülmüş ürün organizasyonu ve dürüst iletişim.",
        },
        {
          title: "Kalite",
          text: "Özenle seçilmiş mobilite teknolojileri etrafında şekillenen odaklı ürün kataloğu.",
        },
        {
          title: "Uyumluluk",
          text: "Araç, motosiklet ve montaj ihtiyaçları için yönlendirme odaklı ürün seçimi.",
        },
        {
          title: "İş Ortaklığı",
          text: "Distribütörler, montaj noktaları, tedarikçiler ve müşterilerle uzun vadeli ilişkiler.",
        },
        {
          title: "Kültür",
          text: "Hareketten, yerden, hafızadan ve Doğu ile Batı'nın kesişiminden ilham alan marka kimliği.",
        },
        {
          title: "Hırs",
          text: "Bugünün ürün kataloğunun ötesine geçen uzun vadeli büyüme vizyonu.",
        },
      ],
    },
    team: {
      heading: "Apollon'un arkasındaki ekip",
      intro:
        "Apollon; marka yönelimi, operasyon, ürün araştırması ve uzun vadeli pazar gelişimini bir araya getiren odaklı bir ekip tarafından geliştirilmektedir.",
      // TODO: Confirm public display approval for names, titles, bios, photos, and contact links
      members: [
        {
          name: "Erdinç İlban",
          role: "Kurucu & Marka Direktörü",
          // TODO: Confirm approved public bio
          bio: "Apollon'un marka kimliğini, ürün yönelimini ve mobilite teknolojileri kategorilerindeki uzun vadeli vizyonunu şekillendirir.",
        },
        {
          name: "Osman Mervan Erdem",
          role: "Operasyon Müdürü",
          // TODO: Confirm approved public bio
          bio: "Operasyon planlamasını, iş ortağı iletişimini, ürün koordinasyonunu ve Apollon'un pazardaki varlığının gelişimini destekler.",
        },
      ],
      approvalNote: "",
    },
    roadmap: {
      heading: "Apollon nereye gidiyor?",
      intro:
        "Apollon'un yol haritası; kataloğu büyütmeye, yönlendirme deneyimini iyileştirmeye, iş birliklerini güçlendirmeye ve gelecek ürün serilerini geliştirmeye odaklanan istikrarlı bir büyüme yaklaşımı etrafında şekillenir.",
      stages: [
        {
          title: "Temeli oluşturmak",
          text: "Premium web sitesini yayına almak, kataloğu düzenlemek, ana ürün ailelerini tanıtmak ve net bir ürün talep süreci oluşturmak.",
        },
        {
          title: "Ağı güçlendirmek",
          text: "Türkiye genelinde distribütör ve montaj ilişkilerini büyütmek ve uyumluluk yönlendirmesini geliştirmek.",
        },
        {
          title: "Ürün ekosistemini genişletmek",
          text: "Daha fazla araca özel sistem, motosiklet teknolojisi, güvenlik ürünü ve daha zengin dijital araçlar eklemek.",
        },
        {
          title: "Ses vizyonunu geliştirmek",
          text: "Signature Audio Series'i ilerletmek ve geleceğin premium ses fırsatlarını keşfetmek.",
        },
      ],
    },
    cta: {
      heading: "Apollon'un sonraki bölümünü birlikte inşa edelim.",
      text: "Apollon markasıyla birlikte büyümek isteyen distribütörler, montaj noktaları, mobilite teknolojisi iş ortakları ve bölgesel iş birlikleriyle ilişkiler kuruyoruz.",
      primary: "İş Ortağımız Ol",
      secondary: "Distribütör Başvurusu",
      tertiary: "İletişime Geç",
    },
  },
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

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params
  const c = content[locale]

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

        {/* Decorative horizontal rule */}
        <div className="pointer-events-none absolute left-0 right-0 top-[40%] h-px bg-gradient-to-r from-transparent via-bronze/10 to-transparent" />

        <div className="section-container relative">
          <div className="mx-auto max-w-3xl space-y-8 text-center">
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-bronze/40" />
              <span className={eyebrowClass}>{c.hero.eyebrow}</span>
              <span className="h-px w-8 bg-bronze/40" />
            </div>

            {/* Title */}
            <h1 className="font-heading text-4xl font-semibold leading-[1.12] tracking-tight md:text-5xl lg:text-6xl pb-[0.14em]">
              {c.hero.title}
            </h1>

            {/* Subtitle */}
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {c.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href={`/${locale}/products`}
                className="rounded-sm border border-bronze bg-bronze px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-bronze/90 hover:shadow-[0_0_24px_oklch(0.70_0.12_65_/_0.35)]"
              >
                {c.hero.primaryCta}
              </Link>
              <Link
                href={`/${locale}/partner-distributor`}
                className="rounded-sm border border-border/60 px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:border-bronze/40 hover:text-bronze"
              >
                {c.hero.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Brand Story ──────────────────────────────────────── */}
      <section className="border-t border-border/30 py-24">
        <div className="section-container">
          <div className="mx-auto max-w-3xl space-y-8">
            <h2 className={`${sectionHeadingClass} text-center`}>
              {c.story.heading}
            </h2>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>{c.story.text1}</p>
              <p>{c.story.text2}</p>
              <p>{c.story.text3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Vision ───────────────────────────────────────────── */}
      <section className="border-t border-border/30 py-24">
        <div className="section-container space-y-12">
          <div className="mx-auto max-w-3xl space-y-5 text-center">
            <h2 className={sectionHeadingClass}>{c.vision.heading}</h2>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {c.vision.text}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {c.vision.cards.map((card, i) => (
              <div key={i} className={`${glassCard} space-y-3`}>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium tabular-nums text-bronze/50">
                    0{i + 1}
                  </span>
                  <span className="h-px flex-1 bg-border/40" />
                </div>
                <h3 className="font-heading text-base font-semibold leading-[1.3]">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: East–West Partnership ───────────────────────────── */}
      <section className="border-t border-border/30 py-24">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Text column */}
            <div className="space-y-6">
              <h2 className={sectionHeadingClass}>{c.partnership.heading}</h2>
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>{c.partnership.text1}</p>
                <p>{c.partnership.text2}</p>
                <p>{c.partnership.text3}</p>
              </div>
            </div>

            {/* World map — subtle outline visual */}
            <div className="flex items-center justify-center py-4 lg:py-0">
              <img
                src="/images/world-map-outline.svg"
                alt=""
                aria-hidden="true"
                className="w-full max-w-lg h-auto opacity-20 select-none pointer-events-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: What Apollon Believes ────────────────────────────── */}
      <section className="border-t border-border/30 py-24">
        <div className="section-container space-y-12">
          <div className="mx-auto max-w-2xl space-y-4 text-center">
            <h2 className={sectionHeadingClass}>{c.beliefs.heading}</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              {c.beliefs.intro}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {c.beliefs.cards.map((card, i) => (
              <div
                key={i}
                className="rounded-sm border border-border/40 bg-card/30 p-6 backdrop-blur-sm"
              >
                <div className="mb-4 flex items-start gap-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-sm border border-bronze/20 bg-bronze/5 text-xs font-semibold text-bronze/70">
                    {i + 1}
                  </span>
                  <h3 className="font-heading text-base font-semibold leading-[1.3] text-foreground">
                    {card.title}
                  </h3>
                </div>
                <p className="pl-11 text-sm leading-relaxed text-muted-foreground">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: Brand Values ──────────────────────────────────────── */}
      <section className="border-t border-border/30 py-24">
        <div className="section-container space-y-12">
          <div className="text-center">
            <h2 className={sectionHeadingClass}>{c.values.heading}</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {c.values.cards.map((card, i) => (
              <div
                key={i}
                className="group rounded-sm border border-border/40 bg-card/30 p-5 backdrop-blur-sm transition-colors hover:border-bronze/20"
              >
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-bronze/60" />
                  <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.15em] text-foreground">
                    {card.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: Team ──────────────────────────────────────────────── */}
      {/* TODO: Confirm public display approval for all team member details before publishing */}
      <section className="border-t border-border/30 py-24">
        <div className="section-container space-y-12">
          <div className="mx-auto max-w-2xl space-y-4 text-center">
            <h2 className={sectionHeadingClass}>{c.team.heading}</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              {c.team.intro}
            </p>
          </div>

          <div className="mx-auto grid max-w-2xl gap-5 sm:grid-cols-2">
            {c.team.members.map((member, i) => (
              <div
                key={i}
                className="rounded-sm border border-border/40 bg-card/30 p-6 backdrop-blur-sm"
              >
                {/* Photo placeholder — TODO: Add approved team photo */}
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-sm border border-border/40 bg-background/60">
                  <span className="text-xl font-semibold text-muted-foreground/40">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <div className="space-y-1">
                  {/* TODO: Confirm approved public name */}
                  <p className="font-heading text-base font-semibold text-foreground">
                    {member.name}
                  </p>
                  {/* TODO: Confirm exact approved role title */}
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-bronze/60">
                    {member.role}
                  </p>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {member.bio}
                </p>
                {/* TODO: Add LinkedIn / contact link if approved */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: Roadmap ───────────────────────────────────────────── */}
      {/* Note: stages represent direction, not guaranteed delivery dates */}
      <section className="border-t border-border/30 py-24">
        <div className="section-container space-y-12">
          <div className="mx-auto max-w-2xl space-y-4 text-center">
            <h2 className={sectionHeadingClass}>{c.roadmap.heading}</h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              {c.roadmap.intro}
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="relative space-y-0">
              {c.roadmap.stages.map((stage, i) => (
                <div key={i} className="relative flex gap-6 pb-10 last:pb-0">
                  {/* Vertical line */}
                  {i < c.roadmap.stages.length - 1 && (
                    <div className="absolute left-[15px] top-8 h-full w-px bg-border/40" />
                  )}

                  {/* Stage number node */}
                  <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-bronze/30 bg-background text-xs font-semibold text-bronze/70">
                    {i + 1}
                  </div>

                  {/* Stage content */}
                  <div className="space-y-1.5 pt-0.5">
                    <h3 className="font-heading text-base font-semibold leading-[1.3] text-foreground">
                      {stage.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {stage.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: Partner CTA ───────────────────────────────────────── */}
      <section className="border-t border-border/30 py-24">
        <div
          className="pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-bronze/15 to-transparent"
          aria-hidden
        />
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
                  href={`/${locale}/partner-distributor`}
                  className="rounded-sm border border-bronze bg-bronze px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-bronze/90 hover:shadow-[0_0_24px_oklch(0.70_0.12_65_/_0.35)]"
                >
                  {c.cta.primary}
                </Link>
                <Link
                  href={`/${locale}/partner-distributor`}
                  className="rounded-sm border border-border/60 px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:border-bronze/40 hover:text-bronze"
                >
                  {c.cta.secondary}
                </Link>
                <Link
                  href={`/${locale}/contact`}
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
