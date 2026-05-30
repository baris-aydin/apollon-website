import type { Metadata } from "next"
import Link from "next/link"
import { type Locale } from "@/lib/i18n"
import { PartnerApplicationForm } from "@/components/forms/PartnerApplicationForm"
import { FAQAccordion, type FAQItem } from "@/components/ui/FAQAccordion"

type PageProps = { params: Promise<{ locale: Locale }> }

// ─── Types ───────────────────────────────────────────────────────────────────

type Card = { title: string; text: string }
type CategoryCard = { title: string; text: string; cta: string; href: string; badge?: string }
type ProcessStep = { title: string; text: string }
type Badge = string

type PageContent = {
  meta: { title: string; description: string }
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    primaryCta: string
    secondaryCta: string
    badges: Badge[]
  }
  whoFor: { heading: string; intro: string; cards: Card[] }
  benefits: { heading: string; intro: string; cards: Card[] }
  categories: { heading: string; intro: string; cards: CategoryCard[] }
  process: { heading: string; steps: ProcessStep[] }
  vision: { heading: string; text1: string; text2: string }
  form: { heading: string; description: string }
  faq: { heading: string; items: FAQItem[] }
  cta: { heading: string; text: string; primary: string; secondary: string; tertiary: string }
}

// ─── Content ─────────────────────────────────────────────────────────────────

const content: Record<Locale, PageContent> = {
  en: {
    meta: {
      title: "Become an Apollon Partner | Distributor Application",
      description:
        "Apply to become an Apollon distributor, dealer, installer, or mobility technology partner. Explore partnership opportunities across car multimedia, dashcams, motorcycle smart systems, and future premium audio products.",
    },
    hero: {
      eyebrow: "PARTNER WITH APOLLON",
      title: "Bring premium mobility technology to your market.",
      subtitle:
        "Join Apollon's growing network of distributors, dealers, installers, and mobility technology partners. Build new opportunities around car multimedia, smart safety systems, motorcycle technologies, and future premium audio products.",
      primaryCta: "Apply for Partnership",
      secondaryCta: "Explore Products",
      badges: [
        "Distributor Network",
        "Installer Partnerships",
        "Product Inquiry Support",
        "Turkey-Focused Growth",
      ],
    },
    whoFor: {
      heading: "Who we want to work with",
      intro:
        "Apollon is building relationships with businesses that understand automotive technology, motorcycle products, installation services, regional sales, and customer support.",
      cards: [
        {
          title: "Distributors",
          text: "Regional or national businesses interested in representing and distributing Apollon product categories.",
        },
        {
          title: "Dealers and resellers",
          text: "Automotive and motorcycle-focused retailers that want to offer selected Apollon products to their customers.",
        },
        {
          title: "Installation centers",
          text: "Qualified businesses that provide vehicle electronics, multimedia, dashcam, or motorcycle system installation services.",
        },
        {
          title: "E-commerce sellers",
          text: "Online retailers interested in selected product categories and structured product information support.",
        },
        {
          title: "Fleet and corporate partners",
          text: "Businesses exploring safety, monitoring, or mobility technology solutions for vehicle-based operations.",
        },
        {
          title: "Strategic collaborators",
          text: "Technology, audio, mobility, media, or regional partners interested in long-term collaboration opportunities.",
        },
      ],
    },
    benefits: {
      heading: "Why partner with Apollon?",
      intro:
        "Apollon is building a focused mobility technology brand around carefully selected product families, clear communication, compatibility guidance, and long-term partnership development.",
      cards: [
        {
          title: "Focused product catalog",
          text: "A structured catalog built around car multimedia systems, smart safety, motorcycle technologies, and future premium audio products.",
        },
        {
          title: "Compatibility-first guidance",
          text: "For vehicle-specific systems, product selection depends on model, year, trim, and factory configuration. Apollon supports a guidance-first approach.",
        },
        {
          title: "Product category diversity",
          text: "Partners can explore multiple mobility categories instead of relying on a single product line.",
        },
        {
          title: "Local market communication",
          text: "Apollon focuses on Turkish-market communication, product organization, and business relationship development.",
        },
        {
          title: "Long-term brand direction",
          text: "The goal is not only short-term product sales. Apollon is building a recognizable mobility technology identity and future product ecosystem.",
        },
        {
          title: "Early growth opportunity",
          text: "Partners can begin conversations while Apollon is expanding its network, catalog, and market presence.",
        },
      ],
    },
    categories: {
      heading: "Product categories for partnership discussions",
      intro:
        "Explore Apollon's current and future product families. Product availability, inventory, region, and partnership structure can be discussed based on your business profile.",
      cards: [
        {
          title: "Car Multimedia Systems",
          text: "Universal and vehicle-specific Android multimedia systems for selected vehicle brands, including Audi, BMW, Mercedes-Benz, Porsche, Toyota, Lexus, and Range Rover / Land Rover.",
          cta: "Explore Car Multimedia",
          href: "/products/car-multimedia",
        },
        {
          title: "Car Safety & Security",
          text: "Smart dashcams and connected safety products, including DC-UHD04, DC-UHD5, and L3 Smart Dashcam product directions.",
          cta: "Explore Safety Systems",
          href: "/products/car-safety-security",
        },
        {
          title: "Motorcycle Smart Systems",
          text: "Rider-focused display and camera solutions, including MDC-SMART02, MDC-PLUS02, and Moto Dash Cam TR V2.",
          cta: "Explore Motorcycle Systems",
          href: "/products/motorcycle-smart-systems",
        },
        {
          title: "Signature Audio Series",
          text: "A future premium audio direction currently in research and development. Early partnership interest is welcome.",
          cta: "View Signature Audio",
          href: "/products/signature-audio-series",
          badge: "Coming Soon · R&D",
        },
      ],
    },
    process: {
      heading: "How the partnership process works",
      steps: [
        {
          title: "Tell us about your business",
          text: "Submit your company profile, location, business type, current sales channels, and product interests.",
        },
        {
          title: "We review the fit",
          text: "Our team reviews your application based on business profile, region, product categories, and potential collaboration model.",
        },
        {
          title: "Discuss product and partnership scope",
          text: "We clarify product availability, target categories, communication needs, installation capabilities, and next steps.",
        },
        {
          title: "Build the relationship",
          text: "If there is a strong fit, we move forward with the appropriate commercial and operational discussion.",
        },
      ],
    },
    vision: {
      heading: "Turkey-first growth, informed by global production.",
      text1:
        "Apollon combines production access in China with market-focused brand development in Turkey. The goal is to support local business relationships with a product catalog shaped by global sourcing, practical market needs, and a long-term premium mobility vision.",
      text2:
        "The first priority is to build a strong partner network in Turkey. Over time, Apollon can explore broader regional opportunities through a disciplined and partnership-focused approach.",
    },
    form: {
      heading: "Apply to become an Apollon partner",
      description:
        "Tell us about your business, market, and product interests. Our team will review your application and contact you if there is a suitable partnership opportunity.",
    },
    faq: {
      heading: "Frequently asked questions",
      items: [
        {
          question: "Who can apply to become an Apollon partner?",
          answer:
            "Distributors, dealers, installers, automotive and motorcycle accessory businesses, e-commerce sellers, fleet-focused companies, and strategic partners can apply. Each application is reviewed based on business profile, region, and product interest.",
        },
        {
          question: "Can I apply for only one product category?",
          answer:
            "Yes. You can apply for one or multiple product categories depending on your business focus.",
        },
        {
          question: "Does Apollon offer exclusive regional distribution rights?",
          answer:
            "Regional structure and commercial terms are evaluated individually. Any exclusivity arrangement would need to be discussed and confirmed separately.",
        },
        {
          question: "Do I need installation capability?",
          answer:
            "Not always. Some partners may focus on distribution or sales, while others may also provide installation services. Please describe your business capabilities in the application form.",
        },
        {
          question: "Are all products immediately available?",
          answer:
            "Product availability may vary by category, model, inventory, and partnership structure. Details can be discussed after application review.",
        },
        {
          question: "Can businesses outside Turkey apply?",
          answer:
            "Yes. Apollon's initial focus is Turkey, but businesses from other markets can submit an application for future regional opportunities.",
        },
      ],
    },
    cta: {
      heading: "Let's build the next Apollon chapter together.",
      text: "Submit your partnership application and tell us where your business fits into the future of premium mobility technology.",
      primary: "Apply Now",
      secondary: "Explore Products",
      tertiary: "Contact Us",
    },
  },

  tr: {
    meta: {
      title: "Apollon İş Ortağı Olun | Distribütörlük Başvurusu",
      description:
        "Apollon distribütörü, bayisi, montaj noktası veya mobilite teknolojisi iş ortağı olmak için başvurun. Araç multimedya, araç kamerası, motosiklet akıllı sistemleri ve geleceğin premium ses ürünleri için iş ortaklığı fırsatlarını keşfedin.",
    },
    hero: {
      eyebrow: "APOLLON İLE İŞ ORTAKLIĞI",
      title: "Premium mobilite teknolojilerini pazarınıza taşıyın.",
      subtitle:
        "Apollon'un büyüyen distribütör, bayi, montaj noktası ve mobilite teknolojisi iş ortağı ağına katılın. Araç multimedya sistemleri, akıllı güvenlik ürünleri, motosiklet teknolojileri ve geleceğin premium ses ürünleri etrafında yeni fırsatlar geliştirin.",
      primaryCta: "İş Ortaklığı Başvurusu",
      secondaryCta: "Ürünleri Keşfet",
      badges: [
        "Distribütör Ağı",
        "Montaj İş Birlikleri",
        "Ürün Bilgisi Desteği",
        "Türkiye Odaklı Büyüme",
      ],
    },
    whoFor: {
      heading: "Kimlerle çalışmak istiyoruz?",
      intro:
        "Apollon; otomotiv teknolojilerini, motosiklet ürünlerini, montaj hizmetlerini, bölgesel satış süreçlerini ve müşteri desteğini anlayan işletmelerle ilişkiler kuruyor.",
      cards: [
        {
          title: "Distribütörler",
          text: "Apollon ürün kategorilerini temsil etmek ve dağıtmak isteyen bölgesel veya ulusal işletmeler.",
        },
        {
          title: "Bayiler ve satıcılar",
          text: "Seçili Apollon ürünlerini müşterilerine sunmak isteyen otomotiv ve motosiklet odaklı perakendeciler.",
        },
        {
          title: "Montaj noktaları",
          text: "Araç elektroniği, multimedya, araç kamerası veya motosiklet sistemi montaj hizmeti sunan uzman işletmeler.",
        },
        {
          title: "E-ticaret satıcıları",
          text: "Seçili ürün kategorileri ve düzenli ürün bilgisi desteğiyle ilgilenen online satış işletmeleri.",
        },
        {
          title: "Filo ve kurumsal iş ortakları",
          text: "Araç temelli operasyonları için güvenlik, takip veya mobilite teknolojisi çözümlerini değerlendiren işletmeler.",
        },
        {
          title: "Stratejik iş ortakları",
          text: "Uzun vadeli iş birliği fırsatlarıyla ilgilenen teknoloji, ses, mobilite, medya veya bölgesel iş ortakları.",
        },
      ],
    },
    benefits: {
      heading: "Neden Apollon ile iş ortaklığı?",
      intro:
        "Apollon; özenle seçilmiş ürün aileleri, net iletişim, uyumluluk yönlendirmesi ve uzun vadeli iş ortaklığı gelişimi etrafında odaklı bir mobilite teknolojisi markası oluşturuyor.",
      cards: [
        {
          title: "Odaklı ürün kataloğu",
          text: "Araç multimedya sistemleri, akıllı güvenlik, motosiklet teknolojileri ve geleceğin premium ses ürünleri etrafında düzenlenen odaklı katalog.",
        },
        {
          title: "Uyumluluk odaklı yönlendirme",
          text: "Araca özel sistemlerde ürün seçimi; model, yıl, donanım paketi ve fabrika yapılandırmasına göre değişir. Apollon, yönlendirme odaklı bir yaklaşımı destekler.",
        },
        {
          title: "Ürün kategori çeşitliliği",
          text: "İş ortakları tek bir ürün serisine bağlı kalmak yerine birden fazla mobilite kategorisini değerlendirebilir.",
        },
        {
          title: "Yerel pazar iletişimi",
          text: "Apollon, Türkiye pazarına yönelik iletişime, ürün organizasyonuna ve iş ilişkilerinin gelişimine odaklanır.",
        },
        {
          title: "Uzun vadeli marka yönelimi",
          text: "Amaç yalnızca kısa vadeli ürün satışı değildir. Apollon, tanınabilir bir mobilite teknolojisi kimliği ve gelecek ürün ekosistemi oluşturur.",
        },
        {
          title: "Erken büyüme fırsatı",
          text: "İş ortakları, Apollon ağını, kataloğunu ve pazar varlığını büyütürken erken aşamada görüşmelere başlayabilir.",
        },
      ],
    },
    categories: {
      heading: "İş ortaklığı görüşmeleri için ürün kategorileri",
      intro:
        "Apollon'un mevcut ve gelecek ürün ailelerini keşfedin. Ürün bulunabilirliği, stok, bölge ve iş ortaklığı yapısı işletme profilinize göre görüşülebilir.",
      cards: [
        {
          title: "Araç Multimedya Sistemleri",
          text: "Audi, BMW, Mercedes-Benz, Porsche, Toyota, Lexus ve Range Rover / Land Rover dahil olmak üzere seçili araç markaları için universal ve araca özel Android multimedya sistemleri.",
          cta: "Araç Multimedya Sistemlerini Keşfet",
          href: "/products/car-multimedia",
        },
        {
          title: "Araç Güvenlik Sistemleri",
          text: "DC-UHD04, DC-UHD5 ve L3 Smart Dashcam ürün yönelimlerini içeren akıllı araç kameraları ve bağlantılı güvenlik ürünleri.",
          cta: "Güvenlik Sistemlerini Keşfet",
          href: "/products/car-safety-security",
        },
        {
          title: "Motosiklet Akıllı Sistemleri",
          text: "MDC-SMART02, MDC-PLUS02 ve Moto Dash Cam TR V2 dahil olmak üzere sürüş odaklı ekran ve kamera çözümleri.",
          cta: "Motosiklet Sistemlerini Keşfet",
          href: "/products/motorcycle-smart-systems",
        },
        {
          title: "Signature Audio Series",
          text: "Şu anda araştırma ve geliştirme aşamasında olan gelecek premium ses vizyonu. Erken iş ortaklığı ilgisi değerlendirilmektedir.",
          cta: "Signature Audio Sayfasını Gör",
          href: "/products/signature-audio-series",
          badge: "Yakında · Ar-Ge",
        },
      ],
    },
    process: {
      heading: "İş ortaklığı süreci nasıl işler?",
      steps: [
        {
          title: "İşletmenizi tanıtın",
          text: "Şirket profilinizi, konumunuzu, işletme türünüzü, mevcut satış kanallarınızı ve ilgilendiğiniz ürünleri paylaşın.",
        },
        {
          title: "Uygunluğu değerlendirelim",
          text: "Ekibimiz başvurunuzu işletme profili, bölge, ürün kategorileri ve olası iş birliği modeli açısından değerlendirir.",
        },
        {
          title: "Ürün ve iş ortaklığı kapsamını görüşelim",
          text: "Ürün bulunabilirliğini, hedef kategorileri, iletişim ihtiyaçlarını, montaj kabiliyetlerini ve sonraki adımları netleştirelim.",
        },
        {
          title: "İş ilişkisini geliştirelim",
          text: "Güçlü bir uyum bulunması halinde uygun ticari ve operasyonel görüşmelerle ilerleyelim.",
        },
      ],
    },
    vision: {
      heading: "Türkiye odaklı büyüme, global üretim deneyimiyle destekleniyor.",
      text1:
        "Apollon, Çin'deki üretim erişimini Türkiye'deki pazar odaklı marka gelişimiyle bir araya getirir. Amaç; global tedarik, pratik pazar ihtiyaçları ve uzun vadeli premium mobilite vizyonuyla şekillenen bir ürün kataloğunu yerel iş ilişkileriyle desteklemektir.",
      text2:
        "İlk öncelik Türkiye'de güçlü bir iş ortağı ağı kurmaktır. Zaman içinde Apollon, disiplinli ve iş ortaklığı odaklı bir yaklaşımla daha geniş bölgesel fırsatları değerlendirebilir.",
    },
    form: {
      heading: "Apollon iş ortağı olmak için başvurun",
      description:
        "İşletmeniz, pazarınız ve ilgilendiğiniz ürün kategorileri hakkında bilgi verin. Ekibimiz başvurunuzu değerlendirecek ve uygun bir iş ortaklığı fırsatı bulunması halinde sizinle iletişime geçecektir.",
    },
    faq: {
      heading: "Sıkça sorulan sorular",
      items: [
        {
          question: "Kimler Apollon iş ortağı olmak için başvurabilir?",
          answer:
            "Distribütörler, bayiler, montaj noktaları, otomotiv ve motosiklet aksesuar işletmeleri, e-ticaret satıcıları, filo odaklı şirketler ve stratejik iş ortakları başvurabilir. Her başvuru işletme profili, bölge ve ürün ilgisine göre değerlendirilir.",
        },
        {
          question: "Yalnızca tek bir ürün kategorisi için başvurabilir miyim?",
          answer:
            "Evet. İşletme odağınıza göre bir veya birden fazla ürün kategorisi için başvurabilirsiniz.",
        },
        {
          question: "Apollon bölgesel münhasır distribütörlük hakkı sunuyor mu?",
          answer:
            "Bölgesel yapı ve ticari şartlar her başvuru için ayrı değerlendirilir. Herhangi bir münhasırlık düzenlemesi ayrıca görüşülmeli ve doğrulanmalıdır.",
        },
        {
          question: "Montaj kabiliyetine sahip olmam gerekiyor mu?",
          answer:
            "Her zaman değil. Bazı iş ortakları dağıtım veya satışa odaklanırken bazıları montaj hizmeti de sunabilir. Lütfen işletme kabiliyetlerinizi başvuru formunda açıklayın.",
        },
        {
          question: "Tüm ürünler hemen temin edilebilir mi?",
          answer:
            "Ürün bulunabilirliği kategoriye, modele, stok durumuna ve iş ortaklığı yapısına göre değişebilir. Detaylar başvuru değerlendirmesinden sonra görüşülebilir.",
        },
        {
          question: "Türkiye dışındaki işletmeler başvurabilir mi?",
          answer:
            "Evet. Apollon'un ilk odağı Türkiye olsa da diğer pazarlardaki işletmeler gelecek bölgesel fırsatlar için başvuru gönderebilir.",
        },
      ],
    },
    cta: {
      heading: "Apollon'un sonraki bölümünü birlikte inşa edelim.",
      text: "İş ortaklığı başvurunuzu gönderin ve işletmenizin premium mobilite teknolojilerinin geleceğinde nasıl yer alabileceğini bizimle paylaşın.",
      primary: "Şimdi Başvur",
      secondary: "Ürünleri Keşfet",
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

const eyebrowClass = "text-xs font-medium uppercase tracking-[0.3em] text-bronze/70"
const sectionHeadingClass =
  "font-heading text-3xl font-semibold leading-[1.15] tracking-tight md:text-4xl pb-[0.1em]"
const glassCard = "rounded-sm border border-border/40 bg-card/40 p-6 backdrop-blur-sm"

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function PartnerDistributorPage({ params }: PageProps) {
  const { locale } = await params
  const c = content[locale]

  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* ── SECTION 1: Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "oklch(0.09 0.015 245 / 0.6)" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,oklch(0.22_0.08_245_/_0.45),transparent)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_50%_60%,oklch(0.70_0.12_65_/_0.04),transparent)]" />
        <div className="pointer-events-none absolute left-0 right-0 top-[45%] h-px bg-gradient-to-r from-transparent via-bronze/10 to-transparent" />

        <div className="section-container relative">
          <div className="mx-auto max-w-3xl space-y-8 text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-bronze/40" />
              <span className={eyebrowClass}>{c.hero.eyebrow}</span>
              <span className="h-px w-8 bg-bronze/40" />
            </div>

            <h1 className="font-heading text-4xl font-semibold leading-[1.12] tracking-tight md:text-5xl lg:text-6xl pb-[0.14em]">
              {c.hero.title}
            </h1>

            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {c.hero.subtitle}
            </p>

            {/* Support badges */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {c.hero.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-border/50 px-3.5 py-1.5 text-xs font-medium text-muted-foreground"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href="#partner-form"
                className="rounded-sm border border-bronze bg-bronze px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-bronze/90 hover:shadow-[0_0_24px_oklch(0.70_0.12_65_/_0.35)]"
              >
                {c.hero.primaryCta}
              </a>
              <Link
                href={`/${locale}/products`}
                className="rounded-sm border border-border/60 px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:border-bronze/40 hover:text-bronze"
              >
                {c.hero.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Who This Is For ──────────────────────────────────── */}
      <section className="border-t border-border/30 py-24">
        <div className="section-container space-y-12">
          <div className="mx-auto max-w-2xl space-y-4 text-center">
            <h2 className={sectionHeadingClass}>{c.whoFor.heading}</h2>
            <p className="text-base leading-relaxed text-muted-foreground">{c.whoFor.intro}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {c.whoFor.cards.map((card, i) => (
              <div key={i} className={`${glassCard} space-y-3`}>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium tabular-nums text-bronze/50">0{i + 1}</span>
                  <span className="h-px flex-1 bg-border/40" />
                </div>
                <h3 className="font-heading text-base font-semibold leading-[1.3]">{card.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Partnership Benefits ─────────────────────────────── */}
      <section className="border-t border-border/30 py-24">
        <div className="section-container space-y-12">
          <div className="mx-auto max-w-2xl space-y-4 text-center">
            <h2 className={sectionHeadingClass}>{c.benefits.heading}</h2>
            <p className="text-base leading-relaxed text-muted-foreground">{c.benefits.intro}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {c.benefits.cards.map((card, i) => (
              <div
                key={i}
                className="group rounded-sm border border-border/40 bg-card/30 p-5 backdrop-blur-sm transition-colors hover:border-bronze/20"
              >
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-bronze/60" />
                  <h3 className="font-heading text-sm font-semibold text-foreground">{card.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Product Categories ───────────────────────────────── */}
      <section className="border-t border-border/30 py-24">
        <div className="section-container space-y-12">
          <div className="mx-auto max-w-2xl space-y-4 text-center">
            <h2 className={sectionHeadingClass}>{c.categories.heading}</h2>
            <p className="text-base leading-relaxed text-muted-foreground">{c.categories.intro}</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {c.categories.cards.map((cat, i) => (
              <div
                key={i}
                className="flex flex-col rounded-sm border border-border/40 bg-card/30 p-6 backdrop-blur-sm"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <h3 className="font-heading text-base font-semibold leading-[1.3]">{cat.title}</h3>
                  {cat.badge && (
                    <span className="shrink-0 rounded-full border border-bronze/30 px-2.5 py-0.5 text-xs font-medium text-bronze/70">
                      {cat.badge}
                    </span>
                  )}
                </div>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{cat.text}</p>
                <Link
                  href={`/${locale}${cat.href}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-bronze/70 transition-colors hover:text-bronze"
                >
                  {cat.cta}
                  <span aria-hidden>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: Partnership Process ──────────────────────────────── */}
      <section className="border-t border-border/30 py-24">
        <div className="section-container space-y-12">
          <div className="text-center">
            <h2 className={sectionHeadingClass}>{c.process.heading}</h2>
          </div>

          <div className="mx-auto max-w-2xl">
            <div className="relative space-y-0">
              {c.process.steps.map((step, i) => (
                <div key={i} className="relative flex gap-6 pb-10 last:pb-0">
                  {i < c.process.steps.length - 1 && (
                    <div className="absolute left-[15px] top-8 h-full w-px bg-border/40" />
                  )}
                  <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-bronze/30 bg-background text-xs font-semibold text-bronze/70">
                    {i + 1}
                  </div>
                  <div className="space-y-1.5 pt-0.5">
                    <h3 className="font-heading text-base font-semibold leading-[1.3]">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: Turkey-First Vision ──────────────────────────────── */}
      <section className="border-t border-border/30 py-24">
        <div className="section-container">
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className={`${sectionHeadingClass} text-center`}>{c.vision.heading}</h2>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>{c.vision.text1}</p>
              <p>{c.vision.text2}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: Partner Application Form ─────────────────────────── */}
      {/* TODO: Review KVKK / privacy consent wording with legal before launch */}
      <section id="partner-form" className="border-t border-border/30 py-24 scroll-mt-20">
        <div className="section-container">
          <div className="mx-auto max-w-2xl">
            <div className="mb-10 space-y-3">
              <h2 className={sectionHeadingClass}>{c.form.heading}</h2>
              <p className="text-base leading-relaxed text-muted-foreground">{c.form.description}</p>
            </div>
            <PartnerApplicationForm locale={locale} />
          </div>
        </div>
      </section>

      {/* ── SECTION 8: FAQ ───────────────────────────────────────────────── */}
      <section className="border-t border-border/30 py-24">
        <div className="section-container">
          <div className="mx-auto max-w-2xl">
            <h2 className={`${sectionHeadingClass} mb-10`}>{c.faq.heading}</h2>
            <FAQAccordion items={c.faq.items} />
          </div>
        </div>
      </section>

      {/* ── SECTION 9: Final CTA ─────────────────────────────────────────── */}
      <section className="border-t border-border/30 py-24">
        <div className="section-container">
          <div className="relative overflow-hidden rounded-sm border border-border/40 bg-card/30 px-8 py-16 text-center backdrop-blur-sm">
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
                <a
                  href="#partner-form"
                  className="rounded-sm border border-bronze bg-bronze px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-bronze/90 hover:shadow-[0_0_24px_oklch(0.70_0.12_65_/_0.35)]"
                >
                  {c.cta.primary}
                </a>
                <Link
                  href={`/${locale}/products`}
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
