import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Check, ChevronRight } from "lucide-react"
import { SpecsTable, type SpecRow } from "@/components/products/SpecsTable"
import { type Locale } from "@/lib/i18n"
import { Reveal } from "@/components/motion/Reveal"

type PageProps = { params: Promise<{ locale: Locale; slug: string }> }

// ─── Types ───────────────────────────────────────────────────────────────────

type FeatureSection = {
  heading: string
  text: string
  list?: string[]
}

type ProductLocale = {
  heroEyebrow: string
  heroTitle: string
  heroSubtitle: string
  heroPrimary: string
  heroSecondary: string
  promise: string
  promiseBlocks?: string[]
  /** Bullet-separated one-line summary from the official product document. */
  summary?: string
  featuresHeading: string
  features: string[]
  sectionsHeading: string
  sections: FeatureSection[]
  mainImage?: { src: string; alt: string }
  mainImageContain?: boolean
  /** Panel colour behind contained images. Defaults to the dark surface. */
  imageBackground?: string
  specs: SpecRow[]
  specsTitle: string
  packageTitle: string
  packageNote: string
  galleryTitle: string
  galleryNote: string
  galleryImages?: { src: string; alt: string }[]
  galleryContain?: boolean
  galleryAspect?: string
  galleryColumns?: number
  galleryLastFullWidth?: boolean
  mainImageFade?: boolean
  mainImageAspect?: string
  mainImageFit?: "cover" | "contain"
  mainImageGridCols?: string
  imageColumnAuto?: boolean
  inquiryTitle: string
  inquiryText: string
  inquiryPrimary: string
  inquirySecondary: string
  backLabel: string
  metaTitle: string
  metaDescription: string
}

type ProductData = {
  en: ProductLocale
  tr: ProductLocale
}

// ─── Product Data ─────────────────────────────────────────────────────────────

const products: Record<string, ProductData> = {
  "mdc-smart02": {
    // APOLLON RIDE VISION.
    //
    // Detailed specification confirmed 2026-09-04. The camera is integrated
    // (previously listed as optional) and records at 1080P - the earlier
    // document's 1440P mode is no longer published, since 2K/4K must not be
    // claimed for this model.
    //
    // Navigation runs on the rider's connected phone via CarPlay / Android
    // Auto; no standalone satellite navigation is claimed. "Water-resistant"
    // is deliberate: no IP rating is confirmed, so "waterproof" is never used.
    //
    // The 6.2" IPS size and the 2GB-256GB card range come from the earlier
    // official document and are retained: the new specification does not
    // contradict them, it simply does not restate them.
    //
    // Slug kept as the legacy id so /products/motorcycle/mdc-smart02 keeps working.
    en: {
      heroPrimary: "Request Product Information",
      heroSecondary: "Contact for Installation / Dealer Info",
      featuresHeading: "Key features",
      specsTitle: "Technical specifications",
      packageTitle: "Package contents",
      packageNote: "Package contents may vary by configuration. Please confirm final kit contents before order or installation.",
      galleryTitle: "Product gallery",
      inquiryTitle: "Interested in this motorcycle system?",
      inquiryText: "Share your motorcycle model, installation needs, and preferred features. Apollon can help with product information, installation guidance, and dealer/distributor communication.",
      inquiryPrimary: "Request Product Information",
      inquirySecondary: "Contact for Installation / Dealer Info",
      backLabel: "Motorcycle Smart Systems",
      heroEyebrow: "1080P CAMERA MOTORCYCLE RIDING DISPLAY",
      heroTitle: "APOLLON RIDE VISION",
      heroSubtitle: "A smart motorcycle riding system combining Apple CarPlay, Android Auto, navigation support and a 1080P riding camera in a single device.",
      promise: "",
      promiseBlocks: [
        "Bring technology to your ride. Connectivity, navigation and a premium display experience in a single system.",
        "APOLLON RIDE VISION is a smart motorcycle riding system that combines Apple CarPlay, Android Auto, navigation support and a 1080P riding camera in a single device. A high-brightness IPS display and dual Bluetooth sit in a water-resistant construction developed for motorcycle riding conditions.",
      ],
      summary: "1080P Camera • CarPlay • Android Auto • Navigation • IPS Display • Dual Bluetooth • G-Sensor • Parking Mode",
      features: [
        "1080P Camera",
        "Apple CarPlay",
        "Android Auto",
        "IPS Display",
        "Dual Bluetooth",
        "Navigation",
        "G-Sensor",
        "Parking Mode",
      ],
      mainImage: {
        src: "/images/motoplay-series/ride-vision/main.png",
        alt: "APOLLON RIDE VISION motorcycle display, front view showing the Apollon start-up screen",
      },
      mainImageFit: "contain",
      mainImageAspect: "4 / 3",
      imageBackground: "#ffffff",
      sectionsHeading: "What APOLLON RIDE VISION offers",
      sections: [
        {
          heading: "1080P Riding Camera",
          text: "Record your rides in 1080P directly through Ride Vision’s integrated camera system.",
        },
        {
          heading: "CarPlay & Android Auto",
          text: "Access supported navigation, music, calls and smartphone functionality through the Ride Vision display.",
        },
        {
          heading: "GPS & Navigation Support",
          text: "Use compatible navigation applications through the connected smartphone and follow your route on the Ride Vision display.",
        },
        {
          heading: "IPS Display",
          text: "Wide viewing angles help keep essential information easy to follow during the ride.",
        },
        {
          heading: "Dual Bluetooth",
          text: "Connect compatible smartphones and Bluetooth devices through dual Bluetooth connectivity.",
        },
        {
          heading: "G-Sensor Protection",
          text: "When a sudden impact or shock is detected, the G-Sensor helps protect the relevant recording from being overwritten during loop recording.",
        },
        {
          heading: "Parking Mode",
          text: "Supports recording activation when an impact or vibration is detected while parked, when connected through the appropriate electrical setup.",
        },
        {
          heading: "Loop Recording",
          text: "Automatically manages storage by replacing older loop-recorded footage as space is needed.",
        },
      ],
      specs: [
        {
          label: "Product name",
          value: "APOLLON RIDE VISION",
        },
        {
          label: "Product type",
          value: "Smart Motorcycle Riding Display",
        },
        {
          label: "Model reference",
          value: "B3",
        },
        {
          label: "Category",
          value: "MotoPlay Series",
        },
        {
          label: "Display",
          value: "6.2-inch high-brightness IPS",
        },
        {
          label: "Apple CarPlay",
          value: "Wireless, supported",
        },
        {
          label: "Android Auto",
          value: "Supported",
        },
        {
          label: "Bluetooth",
          value: "Dual Bluetooth",
        },
        {
          label: "Bluetooth audio",
          value: "Supported",
        },
        {
          label: "Voice assistant",
          value: "Compatible",
        },
        {
          label: "Navigation support",
          value: "Yes, via connected compatible smartphone",
        },
        {
          label: "Tire-pressure monitoring",
          value: "Integrated support",
        },
        {
          label: "Camera",
          value: "Integrated",
        },
        {
          label: "Video resolution",
          value: "1080P",
        },
        {
          label: "Riding recording",
          value: "Yes",
        },
        {
          label: "Loop recording",
          value: "Yes",
        },
        {
          label: "G-sensor",
          value: "Yes",
        },
        {
          label: "Parking mode",
          value: "Yes",
        },
        {
          label: "Parking mode requirement",
          value: "Appropriate electrical connection",
        },
        {
          label: "Camera sensor",
          value: "Sony IMX307",
        },
        {
          label: "BSD",
          value: "Supported on compatible configurations",
        },
        {
          label: "Memory card support",
          value: "Yes — 2GB–256GB TF card",
        },
        {
          label: "Power architecture",
          value: "Button battery + Farad capacitor",
        },
        {
          label: "Power cable",
          value: "5V / 2A voltage-reducing cable",
        },
        {
          label: "Water resistance",
          value: "Water-resistant design",
        },
        {
          label: "Construction",
          value: "Motorcycle optimized",
        },
        {
          label: "Motorcycle compatibility",
          value: "Universal",
        },
        {
          label: "Warranty",
          value: "2 years",
        },
      ],
      galleryNote: "",
      galleryImages: [
        {
          src: "/images/motoplay-series/ride-vision/gallery/ride-vision-gallery-01.png",
          alt: "APOLLON RIDE VISION full kit: display, front and rear cameras, tyre-pressure sensors and the Apollon box",
        },
        {
          src: "/images/motoplay-series/ride-vision/gallery/ride-vision-gallery-02.png",
          alt: "APOLLON RIDE VISION opened retail box with the display, the two tyre-pressure sensors and the manual in the foam tray",
        },
        {
          src: "/images/motoplay-series/ride-vision/gallery/ride-vision-gallery-03.png",
          alt: "APOLLON RIDE VISION display with both cameras and both tyre-pressure sensors connected",
        },
        {
          src: "/images/motoplay-series/ride-vision/gallery/ride-vision-gallery-04.png",
          alt: "APOLLON RIDE VISION mounting hardware, wiring harness, control button, cameras and protective frame",
        },
        {
          src: "/images/motoplay-series/ride-vision/gallery/ride-vision-gallery-05.png",
          alt: "APOLLON RIDE VISION power line with inline fuse and ring terminals",
        },
        {
          src: "/images/motoplay-series/ride-vision/gallery/ride-vision-gallery-06.png",
          alt: "APOLLON RIDE VISION riding dashboard with compass, speedometer and front and rear tyre-pressure readouts",
        },
        {
          src: "/images/motoplay-series/ride-vision/gallery/ride-vision-gallery-07.png",
          alt: "APOLLON RIDE VISION dashboard in the gold theme, shown with the cameras and tyre-pressure sensors",
        },
        {
          src: "/images/motoplay-series/ride-vision/gallery/ride-vision-gallery-08.png",
          alt: "APOLLON RIDE VISION split-screen live view from the front and rear cameras",
        },
      ],
      galleryContain: true,
      galleryAspect: "4 / 3",
      metaTitle: "APOLLON RIDE VISION — 1080P Camera Motorcycle Riding Display | Apollon Entertainment Systems",
      metaDescription: "APOLLON RIDE VISION is a smart motorcycle riding display combining Apple CarPlay, Android Auto, navigation through your connected smartphone and an integrated 1080P riding camera with a G-sensor and parking mode.",
    },
    tr: {
      heroPrimary: "Ürün Bilgisi Al",
      heroSecondary: "Montaj / Bayi Bilgisi İçin İletişime Geç",
      featuresHeading: "Öne çıkan özellikler",
      specsTitle: "Teknik özellikler",
      packageTitle: "Paket içeriği",
      packageNote: "Paket içeriği yapılandırmaya göre değişebilir. Sipariş veya montaj öncesinde final kit içeriğini doğrulayın.",
      galleryTitle: "Ürün galerisi",
      inquiryTitle: "Bu motosiklet sistemiyle ilgileniyor musunuz?",
      inquiryText: "Motosiklet modelinizi, montaj ihtiyacınızı ve istediğiniz özellikleri paylaşın. Apollon ürün bilgisi, montaj yönlendirmesi ve bayi/distribütör iletişimi konusunda yardımcı olabilir.",
      inquiryPrimary: "Ürün Bilgisi Al",
      inquirySecondary: "Montaj / Bayi Bilgisi İçin İletişime Geç",
      backLabel: "Motosiklet Akıllı Sistemleri",
      heroEyebrow: "1080P KAMERALI MOTOSİKLET SÜRÜŞ EKRANI",
      heroTitle: "APOLLON RIDE VISION",
      heroSubtitle: "Apple CarPlay, Android Auto, navigasyon desteği ve 1080P sürüş kamerasını tek cihazda bir araya getiren akıllı motosiklet sürüş sistemi.",
      promise: "",
      promiseBlocks: [
        "Sürüşünüzü teknolojiyle buluşturun. Bağlantı, navigasyon ve premium ekran deneyimi tek sistemde.",
        "APOLLON RIDE VISION, motosiklet kullanımı için geliştirilen; CarPlay, Android Auto, navigasyon ve 1080P kamera özelliklerini tek cihazda bir araya getiren akıllı sürüş sistemidir. Yüksek parlaklıklı IPS ekran ve dual Bluetooth, motosiklet sürüş koşulları için geliştirilmiş suya dayanıklı bir gövdede yer alır.",
      ],
      summary: "1080P Kamera • CarPlay • Android Auto • Navigasyon • IPS Ekran • Dual Bluetooth • G-Sensör • Park Modu",
      features: [
        "1080P Kamera",
        "Apple CarPlay",
        "Android Auto",
        "IPS Ekran",
        "Dual Bluetooth",
        "Navigasyon",
        "G-Sensör",
        "Park Modu",
      ],
      mainImage: {
        src: "/images/motoplay-series/ride-vision/main.png",
        alt: "APOLLON RIDE VISION motosiklet ekranı; ekranında Apollon açılış görseliyle önden görünüm",
      },
      mainImageFit: "contain",
      mainImageAspect: "4 / 3",
      imageBackground: "#ffffff",
      sectionsHeading: "APOLLON RIDE VISION neler sunar",
      sections: [
        {
          heading: "1080P Sürüş Kamerası",
          text: "Ride Vision’ın entegre kamera sistemiyle sürüşlerinizi doğrudan 1080P kaydedin.",
        },
        {
          heading: "CarPlay ve Android Auto",
          text: "Desteklenen navigasyon, müzik, arama ve akıllı telefon fonksiyonlarına Ride Vision ekranı üzerinden erişin.",
        },
        {
          heading: "GPS ve Navigasyon Desteği",
          text: "Uyumlu navigasyon uygulamalarını bağlı telefon üzerinden kullanarak rotanızı Ride Vision ekranından takip edebilirsiniz.",
        },
        {
          heading: "IPS Ekran",
          text: "Geniş görüş açıları, sürüş sırasında önemli bilgilerin rahatça takip edilmesine yardımcı olur.",
        },
        {
          heading: "Dual Bluetooth",
          text: "Uyumlu akıllı telefonları ve Bluetooth cihazlarını çift Bluetooth bağlantısıyla bağlayın.",
        },
        {
          heading: "G-Sensör Koruması",
          text: "Ani darbe veya sarsıntı algılandığında ilgili kaydın korunmasına yardımcı olur ve önemli görüntülerin döngüsel kayıt sırasında üzerine yazılmasını önlemeye yardımcı olur.",
        },
        {
          heading: "Park Modu",
          text: "Park halindeyken darbe veya titreşim algılandığında kayıt başlatılmasını destekler; uygun elektrik bağlantısı ile çalışır.",
        },
        {
          heading: "Döngüsel Kayıt",
          text: "Alan gerektiğinde eski döngüsel kayıtların üzerine yazarak depolamayı otomatik yönetir.",
        },
      ],
      specs: [
        {
          label: "Ürün adı",
          value: "APOLLON RIDE VISION",
        },
        {
          label: "Ürün tipi",
          value: "Motosiklet Akıllı Sürüş Ekranı",
        },
        {
          label: "Model referansı",
          value: "B3",
        },
        {
          label: "Kategori",
          value: "MotoPlay Serisi",
        },
        {
          label: "Ekran",
          value: "6.2 inç yüksek parlaklıklı IPS",
        },
        {
          label: "Apple CarPlay",
          value: "Kablosuz, destekleniyor",
        },
        {
          label: "Android Auto",
          value: "Destekleniyor",
        },
        {
          label: "Bluetooth",
          value: "Çift Bluetooth",
        },
        {
          label: "Bluetooth ses",
          value: "Destekleniyor",
        },
        {
          label: "Sesli asistan",
          value: "Uyumlu",
        },
        {
          label: "Navigasyon desteği",
          value: "Bağlı uyumlu akıllı telefon üzerinden",
        },
        {
          label: "Lastik basınç takibi",
          value: "Entegre destek",
        },
        {
          label: "Kamera",
          value: "Entegre",
        },
        {
          label: "Video çözünürlüğü",
          value: "1080P",
        },
        {
          label: "Sürüş kaydı",
          value: "Var",
        },
        {
          label: "Döngüsel kayıt",
          value: "Var",
        },
        {
          label: "G-Sensör",
          value: "Var",
        },
        {
          label: "Park modu",
          value: "Var",
        },
        {
          label: "Park modu gereksinimi",
          value: "Uygun elektrik bağlantısı",
        },
        {
          label: "Kamera sensörü",
          value: "Sony IMX307",
        },
        {
          label: "Kör Nokta Algılama",
          value: "Uyumlu konfigürasyonlarda destekleniyor",
        },
        {
          label: "Hafıza kartı desteği",
          value: "Var — 2GB–256GB TF kart",
        },
        {
          label: "Güç mimarisi",
          value: "Düğme pil + Farad kapasitör",
        },
        {
          label: "Güç kablosu",
          value: "5V / 2A voltaj düşürücü kablo",
        },
        {
          label: "Su dayanıklılığı",
          value: "Suya dayanıklı tasarım",
        },
        {
          label: "Gövde yapısı",
          value: "Motosiklet optimizasyonlu",
        },
        {
          label: "Motosiklet uyumluluğu",
          value: "Evrensel",
        },
        {
          label: "Garanti",
          value: "2 yıl",
        },
      ],
      galleryNote: "",
      galleryImages: [
        {
          src: "/images/motoplay-series/ride-vision/gallery/ride-vision-gallery-01.png",
          alt: "APOLLON RIDE VISION tam set: ekran, ön ve arka kameralar, lastik basınç sensörleri ve Apollon kutusu",
        },
        {
          src: "/images/motoplay-series/ride-vision/gallery/ride-vision-gallery-02.png",
          alt: "APOLLON RIDE VISION açılmış kutusu; sünger tabla içinde ekran, iki lastik basınç sensörü ve kullanım kılavuzu",
        },
        {
          src: "/images/motoplay-series/ride-vision/gallery/ride-vision-gallery-03.png",
          alt: "APOLLON RIDE VISION ekranı; her iki kamera ve iki lastik basınç sensörü bağlı hâlde",
        },
        {
          src: "/images/motoplay-series/ride-vision/gallery/ride-vision-gallery-04.png",
          alt: "APOLLON RIDE VISION montaj donanımı, kablo seti, kontrol tuşu, kameralar ve koruyucu çerçeve",
        },
        {
          src: "/images/motoplay-series/ride-vision/gallery/ride-vision-gallery-05.png",
          alt: "APOLLON RIDE VISION güç kablosu; hat üstü sigorta ve bağlantı uçlarıyla",
        },
        {
          src: "/images/motoplay-series/ride-vision/gallery/ride-vision-gallery-06.png",
          alt: "APOLLON RIDE VISION sürüş göstergeleri; pusula, hız göstergesi ve ön/arka lastik basınç değerleri",
        },
        {
          src: "/images/motoplay-series/ride-vision/gallery/ride-vision-gallery-07.png",
          alt: "APOLLON RIDE VISION altın temalı gösterge ekranı; kameralar ve lastik basınç sensörleriyle birlikte",
        },
        {
          src: "/images/motoplay-series/ride-vision/gallery/ride-vision-gallery-08.png",
          alt: "APOLLON RIDE VISION ekranında ön ve arka kameradan bölünmüş canlı görüntü",
        },
      ],
      galleryContain: true,
      galleryAspect: "4 / 3",
      metaTitle: "APOLLON RIDE VISION — 1080P Kameralı Motosiklet Sürüş Ekranı | Apollon Entertainment Systems",
      metaDescription: "APOLLON RIDE VISION; Apple CarPlay, Android Auto, bağlı akıllı telefon üzerinden navigasyon ve entegre 1080P sürüş kamerasını G-Sensör ve park moduyla birleştiren akıllı motosiklet sürüş ekranıdır.",
    },
  },

  "mdc-plus02": {
    // APOLLON RIDE ONE.
    //
    // Detailed specification confirmed 2026-09-04. Navigation runs on the
    // rider's connected phone through CarPlay / Android Auto — the display has
    // no confirmed standalone satellite navigation, so the copy never claims
    // built-in GPS navigation. "Water-resistant" is deliberate: no IP rating
    // is confirmed for this model, so "waterproof" is never used.
    //
    // Slug kept as the legacy id so /products/motorcycle/mdc-plus02 keeps working.
    en: {
      heroPrimary: "Request Product Information",
      heroSecondary: "Contact for Installation / Dealer Info",
      featuresHeading: "Key features",
      specsTitle: "Technical specifications",
      packageTitle: "Package contents",
      packageNote: "Package contents may vary by configuration. Please confirm final kit contents before order or installation.",
      galleryTitle: "Product gallery",
      inquiryTitle: "Interested in this motorcycle system?",
      inquiryText: "Share your motorcycle model, installation needs, and preferred features. Apollon can help with product information, installation guidance, and dealer/distributor communication.",
      inquiryPrimary: "Request Product Information",
      inquirySecondary: "Contact for Installation / Dealer Info",
      backLabel: "Motorcycle Smart Systems",
      heroEyebrow: "5.5\" SMART MOTORCYCLE RIDING DISPLAY",
      heroTitle: "APOLLON RIDE ONE",
      heroSubtitle: "A 5.5-inch IPS smart riding display developed for motorcycle use, with Apple CarPlay and Android Auto on a water-resistant body.",
      promise: "",
      promiseBlocks: [
        "Keep your phone in your pocket. Keep your navigation, your connection and your riding information in front of you.",
        "APOLLON RIDE ONE is a 5.5-inch IPS smart riding display developed for motorcycle use. With Apple CarPlay and Android Auto support, compatible smartphone functions such as navigation, music, calls and other supported features can be accessed through the Ride One display. Its water-resistant construction is designed to suit the conditions motorcycles are used in.",
      ],
      summary: "5.5\" IPS • Apple CarPlay • Android Auto • Navigation • Bluetooth • Water-Resistant",
      features: [
        "5.5\" IPS Display",
        "Apple CarPlay",
        "Android Auto",
        "Navigation",
        "Bluetooth",
        "Water-Resistant Design",
      ],
      mainImage: {
        src: "/images/motoplay-series/ride-one/main.png",
        alt: "APOLLON RIDE ONE motorcycle display, front view with the riding dashboard on screen",
      },
      mainImageFit: "contain",
      mainImageAspect: "4 / 3",
      imageBackground: "#ffffff",
      sectionsHeading: "What APOLLON RIDE ONE offers",
      sections: [
        {
          heading: "5.5\" IPS Display",
          text: "A wide-view IPS display designed to keep essential riding information easy to follow on the road.",
        },
        {
          heading: "CarPlay & Android Auto",
          text: "Access supported navigation, music, calling and smartphone functionality through the Ride One display.",
        },
        {
          heading: "Navigation",
          text: "Follow compatible navigation applications from your connected smartphone directly on the Ride One display.",
        },
        {
          heading: "Bluetooth Connectivity",
          text: "Connect compatible smartphones and Bluetooth devices wirelessly.",
        },
        {
          heading: "Water-Resistant Design",
          text: "Developed for motorcycle use and changing riding conditions.",
        },
      ],
      specs: [
        {
          label: "Product name",
          value: "APOLLON RIDE ONE",
        },
        {
          label: "Product type",
          value: "Smart Motorcycle Riding Display",
        },
        {
          label: "Model reference",
          value: "B2",
        },
        {
          label: "Category",
          value: "MotoPlay Series",
        },
        {
          label: "Display",
          value: "5.5” IPS",
        },
        {
          label: "Wireless Apple CarPlay",
          value: "Supported",
        },
        {
          label: "Android Auto",
          value: "Supported",
        },
        {
          label: "DVR recording",
          value: "Front and rear supported",
        },
        {
          label: "Bluetooth",
          value: "Supported",
        },
        {
          label: "Bluetooth helmet / earphone",
          value: "Supported",
        },
        {
          label: "Media playback",
          value: "TF card",
        },
        {
          label: "TF card capacity",
          value: "Up to 64GB",
        },
        {
          label: "Navigation support",
          value: "Yes, via connected compatible smartphone",
        },
        {
          label: "Power connection",
          value: "USB (Type-C), 12V",
        },
        {
          label: "Display modes",
          value: "Day / Night",
        },
        {
          label: "Touch interface",
          value: "Supported",
        },
        {
          label: "EQ system",
          value: "10-band",
        },
        {
          label: "Screen saver",
          value: "Supported",
        },
        {
          label: "Language support",
          value: "Multiple languages",
        },
        {
          label: "Water resistance",
          value: "Water-resistant design",
        },
        {
          label: "Construction",
          value: "Motorcycle optimized",
        },
        {
          label: "Motorcycle compatibility",
          value: "Universal",
        },
        {
          label: "Warranty",
          value: "2 years",
        },
      ],
      galleryNote: "",
      galleryImages: [
        {
          src: "/images/motoplay-series/ride-one/gallery/ride-one-gallery-01.png",
          alt: "APOLLON RIDE ONE settings screen with Bluetooth pairing and the CarPlay and Android Auto launcher row",
        },
        {
          src: "/images/motoplay-series/ride-one/gallery/ride-one-gallery-02.png",
          alt: "APOLLON RIDE ONE Turkish-language settings menu covering screen sleep, language, time and date format",
        },
        {
          src: "/images/motoplay-series/ride-one/gallery/ride-one-gallery-03.png",
          alt: "APOLLON RIDE ONE package contents: handlebar mount hardware, protective frame, power cable, tools and the Apollon manual",
        },
        {
          src: "/images/motoplay-series/ride-one/gallery/ride-one-gallery-04.png",
          alt: "APOLLON RIDE ONE display showing the Apollon start-up screen",
        },
        {
          src: "/images/motoplay-series/ride-one/gallery/ride-one-gallery-05.png",
          alt: "APOLLON RIDE ONE beside its Apollon-branded retail box",
        },
      ],
      galleryContain: true,
      galleryAspect: "4 / 3",
      galleryLastFullWidth: true,
      metaTitle: "APOLLON RIDE ONE — Motorcycle CarPlay & Android Auto Display | Apollon Entertainment Systems",
      metaDescription: "APOLLON RIDE ONE is a 5.5\" IPS smart motorcycle riding display with Apple CarPlay, Android Auto, navigation through your connected smartphone, Bluetooth and a water-resistant design.",
    },
    tr: {
      heroPrimary: "Ürün Bilgisi Al",
      heroSecondary: "Montaj / Bayi Bilgisi İçin İletişime Geç",
      featuresHeading: "Öne çıkan özellikler",
      specsTitle: "Teknik özellikler",
      packageTitle: "Paket içeriği",
      packageNote: "Paket içeriği yapılandırmaya göre değişebilir. Sipariş veya montaj öncesinde final kit içeriğini doğrulayın.",
      galleryTitle: "Ürün galerisi",
      inquiryTitle: "Bu motosiklet sistemiyle ilgileniyor musunuz?",
      inquiryText: "Motosiklet modelinizi, montaj ihtiyacınızı ve istediğiniz özellikleri paylaşın. Apollon ürün bilgisi, montaj yönlendirmesi ve bayi/distribütör iletişimi konusunda yardımcı olabilir.",
      inquiryPrimary: "Ürün Bilgisi Al",
      inquirySecondary: "Montaj / Bayi Bilgisi İçin İletişime Geç",
      backLabel: "Motosiklet Akıllı Sistemleri",
      heroEyebrow: "5.5\" MOTOSİKLET AKILLI SÜRÜŞ EKRANI",
      heroTitle: "APOLLON RIDE ONE",
      heroSubtitle: "Motosiklet kullanımı için geliştirilmiş, Apple CarPlay ve Android Auto destekli, suya dayanıklı gövdeye sahip 5.5 inç IPS ekranlı akıllı sürüş sistemi.",
      promise: "",
      promiseBlocks: [
        "Telefonunuz cebinizde kalsın. Navigasyonunuz, bağlantınız ve sürüş bilgileriniz gözünüzün önünde olsun.",
        "APOLLON RIDE ONE, motosiklet kullanımı için geliştirilmiş 5.5 inç IPS ekranlı akıllı sürüş sistemidir. CarPlay ve Android Auto desteği sayesinde uyumlu akıllı telefonunuzun navigasyon, müzik, arama ve desteklenen fonksiyonlarını Ride One ekranı üzerinden kullanabilirsiniz. Suya dayanıklı yapısıyla motosiklet kullanım koşullarına uygun olarak tasarlanmıştır.",
      ],
      summary: "5.5\" IPS • CarPlay • Android Auto • Navigasyon • Bluetooth • Suya Dayanıklı",
      features: [
        "5.5\" IPS Ekran",
        "Apple CarPlay",
        "Android Auto",
        "Navigasyon",
        "Bluetooth",
        "Suya Dayanıklı Tasarım",
      ],
      mainImage: {
        src: "/images/motoplay-series/ride-one/main.png",
        alt: "APOLLON RIDE ONE motosiklet ekranı; ekranında sürüş göstergeleriyle önden görünüm",
      },
      mainImageFit: "contain",
      mainImageAspect: "4 / 3",
      imageBackground: "#ffffff",
      sectionsHeading: "APOLLON RIDE ONE neler sunar",
      sections: [
        {
          heading: "5.5\" IPS Ekran",
          text: "Yol üzerinde önemli sürüş bilgilerinin rahatça takip edilmesi için tasarlanmış geniş görüş açılı IPS ekran.",
        },
        {
          heading: "CarPlay ve Android Auto",
          text: "Desteklenen navigasyon, müzik, arama ve akıllı telefon fonksiyonlarına Ride One ekranı üzerinden erişin.",
        },
        {
          heading: "Navigasyon",
          text: "Bağlı akıllı telefonunuzdaki uyumlu navigasyon uygulamalarını doğrudan Ride One ekranından takip edin.",
        },
        {
          heading: "Bluetooth Bağlantısı",
          text: "Uyumlu akıllı telefonları ve Bluetooth cihazlarını kablosuz olarak bağlayın.",
        },
        {
          heading: "Suya Dayanıklı Tasarım",
          text: "Motosiklet kullanımı ve değişen sürüş koşulları için geliştirilmiştir.",
        },
      ],
      specs: [
        {
          label: "Ürün adı",
          value: "APOLLON RIDE ONE",
        },
        {
          label: "Ürün tipi",
          value: "Motosiklet Akıllı Sürüş Ekranı",
        },
        {
          label: "Model referansı",
          value: "B2",
        },
        {
          label: "Kategori",
          value: "MotoPlay Serisi",
        },
        {
          label: "Ekran",
          value: "5.5” IPS",
        },
        {
          label: "Kablosuz Apple CarPlay",
          value: "Destekleniyor",
        },
        {
          label: "Android Auto",
          value: "Destekleniyor",
        },
        {
          label: "DVR kaydı",
          value: "Ön ve arka destekli",
        },
        {
          label: "Bluetooth",
          value: "Destekleniyor",
        },
        {
          label: "Bluetooth kask / kulaklık",
          value: "Destekleniyor",
        },
        {
          label: "Medya oynatma",
          value: "TF kart",
        },
        {
          label: "TF kart kapasitesi",
          value: "64GB'a kadar",
        },
        {
          label: "Navigasyon desteği",
          value: "Bağlı uyumlu akıllı telefon üzerinden",
        },
        {
          label: "Güç bağlantısı",
          value: "USB (Type-C), 12V",
        },
        {
          label: "Ekran modları",
          value: "Gündüz / Gece",
        },
        {
          label: "Dokunmatik arayüz",
          value: "Destekleniyor",
        },
        {
          label: "EQ sistemi",
          value: "10 bantlı",
        },
        {
          label: "Ekran koruyucu",
          value: "Destekleniyor",
        },
        {
          label: "Dil desteği",
          value: "Çoklu dil",
        },
        {
          label: "Su dayanıklılığı",
          value: "Suya dayanıklı tasarım",
        },
        {
          label: "Gövde yapısı",
          value: "Motosiklet optimizasyonlu",
        },
        {
          label: "Motosiklet uyumluluğu",
          value: "Evrensel",
        },
        {
          label: "Garanti",
          value: "2 yıl",
        },
      ],
      galleryNote: "",
      galleryImages: [
        {
          src: "/images/motoplay-series/ride-one/gallery/ride-one-gallery-01.png",
          alt: "APOLLON RIDE ONE ayarlar ekranı; Bluetooth eşleştirme ile CarPlay ve Android Auto kısayol satırı",
        },
        {
          src: "/images/motoplay-series/ride-one/gallery/ride-one-gallery-02.png",
          alt: "APOLLON RIDE ONE Türkçe ayarlar menüsü; ekran uyku modu, dil, zaman ayarı ve tarih formatı",
        },
        {
          src: "/images/motoplay-series/ride-one/gallery/ride-one-gallery-03.png",
          alt: "APOLLON RIDE ONE paket içeriği: gidon montaj donanımı, koruyucu çerçeve, güç kablosu, aparatlar ve Apollon kullanım kılavuzu",
        },
        {
          src: "/images/motoplay-series/ride-one/gallery/ride-one-gallery-04.png",
          alt: "APOLLON RIDE ONE ekranında Apollon açılış görseli",
        },
        {
          src: "/images/motoplay-series/ride-one/gallery/ride-one-gallery-05.png",
          alt: "APOLLON RIDE ONE, Apollon markalı kutusunun yanında",
        },
      ],
      galleryContain: true,
      galleryAspect: "4 / 3",
      galleryLastFullWidth: true,
      metaTitle: "APOLLON RIDE ONE — Motosiklet CarPlay ve Android Auto Ekranı | Apollon Entertainment Systems",
      metaDescription: "APOLLON RIDE ONE; Apple CarPlay, Android Auto, bağlı akıllı telefon üzerinden navigasyon, Bluetooth ve suya dayanıklı tasarım sunan 5.5\" IPS motosiklet akıllı sürüş ekranıdır.",
    },
  },

  "moto-dash-cam-tr-v2": {
    // APOLLON RX ONE ZM3.
    //
    // Detailed specification confirmed 2026-09-04. This supersedes the
    // 2026-08-31 product document, which described a 1080P screenless camera:
    // it is a 4K camera with a 1.5" high-brightness IPS display.
    //
    // That document's 5V/1A power input is likewise superseded — the confirmed
    // operating voltage is 12-24V, matching the Apollon specification panel in
    // rx-one/gallery/rx-one-gallery-04.png.
    //
    // 256 GB is the maximum supported card capacity, not a bundled card.
    //
    // Slug kept as the legacy id so the existing product URL keeps working.
    en: {
      heroPrimary: "Request Product Information",
      heroSecondary: "Contact for Installation / Dealer Info",
      featuresHeading: "Key features",
      specsTitle: "Technical specifications",
      packageTitle: "Package contents",
      packageNote: "Package contents may vary by configuration. Please confirm final kit contents before order or installation.",
      galleryTitle: "Product gallery",
      inquiryTitle: "Interested in this motorcycle system?",
      inquiryText: "Share your motorcycle model, installation needs, and preferred features. Apollon can help with product information, installation guidance, and dealer/distributor communication.",
      inquiryPrimary: "Request Product Information",
      inquirySecondary: "Contact for Installation / Dealer Info",
      backLabel: "Motorcycle Smart Systems",
      heroEyebrow: "4K SMART MOTORCYCLE CAMERA",
      heroTitle: "APOLLON RX ONE ZM3",
      heroSubtitle: "A compact smart riding camera bringing 4K recording, GPS, Wi-Fi, Bluetooth 5.0, a G-sensor and parking surveillance together in a single system.",
      promise: "",
      promiseBlocks: [
        "Compact design. Uninterrupted recording. Every moment of your ride on record.",
        "APOLLON RX ONE ZM3 is a compact smart motorcycle riding camera, designed to combine 4K video recording, GPS, Wi-Fi, Bluetooth 5.0, G-sensor functionality and parking surveillance in a single system.",
      ],
      summary: "4K • 1.5\" IPS • GPS • Wi-Fi • Bluetooth 5.0 • G-Sensor • Parking Surveillance • Up to 256 GB",
      features: [
        "4K Video",
        "1.5\" IPS Display",
        "GPS",
        "Wi-Fi",
        "Bluetooth 5.0",
        "Mobile App",
        "G-Sensor",
        "Parking Surveillance",
        "Loop Recording",
        "Up to 256 GB Storage",
      ],
      mainImage: {
        src: "/images/motoplay-series/rx-one/main.png",
        alt: "APOLLON RX ONE ZM3 compact motorcycle camera, side view showing the carbon-textured body and wide-angle lens",
      },
      mainImageFit: "contain",
      mainImageAspect: "4 / 3",
      imageBackground: "#ffffff",
      sectionsHeading: "What APOLLON RX ONE ZM3 offers",
      sections: [
        {
          heading: "4K Recording",
          text: "Capture detailed riding footage in 4K resolution.",
        },
        {
          heading: "1.5\" IPS Display",
          text: "A compact high-brightness display provides quick access to device and recording information.",
        },
        {
          heading: "GPS Ride Data",
          text: "Record location-linked riding information including latitude, longitude, altitude and compass data.",
        },
        {
          heading: "Wireless Connectivity",
          text: "Connect through Wi-Fi and Bluetooth 5.0 with compatible devices.",
        },
        {
          heading: "Mobile App",
          text: "Access compatible functionality through iOS and Android devices.",
        },
        {
          heading: "G-Sensor Protection",
          text: "Selectable sensitivity levels help protect important recordings when an impact is detected.",
        },
        {
          heading: "Parking Surveillance",
          text: "Supports security-focused recording while the motorcycle is parked.",
        },
        {
          heading: "Up to 256 GB",
          text: "Supports external TF/microSD storage up to 256 GB, with Class 10 cards recommended.",
        },
      ],
      specs: [
        { label: "Product name", value: "APOLLON RX ONE ZM3" },
        { label: "Category", value: "MotoPlay Series" },
        { label: "Video resolution", value: "4K" },
        { label: "Video format", value: "H.264 / TS" },
        { label: "Display", value: "1.5\" high-brightness IPS" },
        { label: "GPS", value: "Yes" },
        { label: "GPS data", value: "Latitude, longitude, altitude, compass" },
        { label: "Wi-Fi", value: "Yes" },
        { label: "Bluetooth", value: "Bluetooth 5.0" },
        { label: "Mobile app", value: "iOS / Android" },
        { label: "G-sensor", value: "High / medium / low sensitivity" },
        { label: "Parking surveillance", value: "Yes" },
        { label: "Loop recording", value: "Yes" },
        { label: "Audio recording", value: "Yes" },
        { label: "Emergency recording lock", value: "Yes" },
        { label: "One-button recording lock", value: "Yes" },
        { label: "External storage", value: "TF / microSD" },
        { label: "Maximum storage", value: "256 GB" },
        { label: "Recommended card", value: "Class 10" },
        { label: "Operating voltage", value: "12–24V" },
        { label: "Operating temperature", value: "-20°C to 65°C" },
        { label: "Water resistance", value: "IP66" },
        { label: "Lens", value: "Built-in wide-angle lens" },
        { label: "Operating design", value: "Motorcycle optimized" },
        { label: "Compatibility", value: "Universal" },
        { label: "Warranty", value: "2 years" },
      ],
      galleryNote: "",
      galleryImages: [
        {
          src: "/images/motoplay-series/rx-one/gallery/rx-one-gallery-01.png",
          alt: "APOLLON RX ONE ZM3 three-quarter rear view showing the USB-C connection bay and the mounting threads",
        },
        {
          src: "/images/motoplay-series/rx-one/gallery/rx-one-gallery-02.png",
          alt: "APOLLON RX ONE ZM3 rear face with the orange power button and the carbon-fibre panel",
        },
        {
          src: "/images/motoplay-series/rx-one/gallery/rx-one-gallery-03.png",
          alt: "APOLLON RX ONE ZM3 package contents: camera, mounting bracket, USB-C cable, screws and tools",
        },
      ],
      galleryContain: true,
      galleryAspect: "4 / 3",
      galleryLastFullWidth: true,
      metaTitle: "APOLLON RX ONE ZM3 — 4K Motorcycle Camera | Apollon Entertainment Systems",
      metaDescription: "APOLLON RX ONE ZM3 is a 4K motorcycle camera with GPS, Wi-Fi, Bluetooth 5.0, a G-sensor, parking monitoring, loop recording and an emergency recording lock.",
    },
    tr: {
      heroPrimary: "Ürün Bilgisi Al",
      heroSecondary: "Montaj / Bayi Bilgisi İçin İletişime Geç",
      featuresHeading: "Öne çıkan özellikler",
      specsTitle: "Teknik özellikler",
      packageTitle: "Paket içeriği",
      packageNote: "Paket içeriği yapılandırmaya göre değişebilir. Sipariş veya montaj öncesinde final kit içeriğini doğrulayın.",
      galleryTitle: "Ürün galerisi",
      inquiryTitle: "Bu motosiklet sistemiyle ilgileniyor musunuz?",
      inquiryText: "Motosiklet modelinizi, montaj ihtiyacınızı ve istediğiniz özellikleri paylaşın. Apollon ürün bilgisi, montaj yönlendirmesi ve bayi/distribütör iletişimi konusunda yardımcı olabilir.",
      inquiryPrimary: "Ürün Bilgisi Al",
      inquirySecondary: "Montaj / Bayi Bilgisi İçin İletişime Geç",
      backLabel: "Motosiklet Akıllı Sistemleri",
      heroEyebrow: "4K AKILLI MOTOSİKLET KAMERASI",
      heroTitle: "APOLLON RX ONE ZM3",
      heroSubtitle: "4K video kaydı, GPS, Wi-Fi, Bluetooth 5.0, G-Sensör ve park gözetimi özelliklerini kompakt bir gövdede bir araya getiren akıllı motosiklet sürüş kamerası.",
      promise: "",
      promiseBlocks: [
        "Kompakt tasarım. Kesintisiz kayıt. Yolculuğunuzun her anı kayıt altında.",
        "APOLLON RX ONE ZM3, motosiklet kullanımı için geliştirilen; 4K video kaydı, GPS, Wi-Fi, Bluetooth 5.0, G-Sensör ve park gözetimi özelliklerini kompakt bir gövdede bir araya getiren akıllı motosiklet sürüş kamerasıdır.",
      ],
      summary: "4K • 1.5\" IPS • GPS • Wi-Fi • Bluetooth 5.0 • G-Sensör • Park Gözetimi • 256 GB’a Kadar",
      features: [
        "4K Video",
        "1.5\" IPS Ekran",
        "GPS",
        "Wi-Fi",
        "Bluetooth 5.0",
        "Mobil Uygulama",
        "G-Sensör",
        "Park Gözetimi",
        "Döngüsel Kayıt",
        "256 GB’a Kadar Depolama",
      ],
      mainImage: {
        src: "/images/motoplay-series/rx-one/main.png",
        alt: "APOLLON RX ONE ZM3 kompakt motosiklet kamerası; karbon dokulu gövdesi ve geniş açılı lensiyle yandan görünüm",
      },
      mainImageFit: "contain",
      mainImageAspect: "4 / 3",
      imageBackground: "#ffffff",
      sectionsHeading: "APOLLON RX ONE ZM3 neler sunar",
      sections: [
        {
          heading: "4K Kayıt",
          text: "Sürüş görüntülerinizi 4K çözünürlükte, detaylı bir şekilde kaydeder.",
        },
        {
          heading: "1.5\" IPS Ekran",
          text: "Kompakt ve yüksek parlaklıklı ekran, cihaz ve kayıt bilgilerine hızlı erişim sağlar.",
        },
        {
          heading: "GPS Sürüş Verisi",
          text: "Enlem, boylam, rakım ve pusula bilgisini içeren konum bağlantılı sürüş verilerini kaydeder.",
        },
        {
          heading: "Kablosuz Bağlantı",
          text: "Wi-Fi ve Bluetooth 5.0 ile uyumlu cihazlara bağlanır.",
        },
        {
          heading: "Mobil Uygulama",
          text: "iOS ve Android cihazlar üzerinden uyumlu fonksiyonlara erişim sunar.",
        },
        {
          heading: "G-Sensör Koruması",
          text: "Seçilebilir hassasiyet seviyeleri, darbe algılandığında önemli kayıtların korunmasına yardımcı olur.",
        },
        {
          heading: "Park Gözetimi",
          text: "Motosiklet park halindeyken güvenlik odaklı kayıt fonksiyonlarını destekler.",
        },
        {
          heading: "256 GB’a Kadar",
          text: "256 GB’a kadar harici TF/microSD depolamayı destekler; Class 10 kart önerilir.",
        },
      ],
      specs: [
        { label: "Ürün adı", value: "APOLLON RX ONE ZM3" },
        { label: "Kategori", value: "MotoPlay Serisi" },
        { label: "Video çözünürlüğü", value: "4K" },
        { label: "Video formatı", value: "H.264 / TS" },
        { label: "Ekran", value: "1.5\" yüksek parlaklıklı IPS" },
        { label: "GPS", value: "Var" },
        { label: "GPS verisi", value: "Enlem, boylam, rakım, pusula" },
        { label: "Wi-Fi", value: "Var" },
        { label: "Bluetooth", value: "Bluetooth 5.0" },
        { label: "Mobil uygulama", value: "iOS / Android" },
        { label: "G-Sensör", value: "Yüksek / orta / düşük hassasiyet" },
        { label: "Park gözetimi", value: "Var" },
        { label: "Döngüsel kayıt", value: "Var" },
        { label: "Ses kaydı", value: "Var" },
        { label: "Acil durum kayıt kilidi", value: "Var" },
        { label: "Tek tuşla kayıt kilidi", value: "Var" },
        { label: "Harici depolama", value: "TF / microSD" },
        { label: "Maksimum depolama", value: "256 GB" },
        { label: "Önerilen kart", value: "Class 10" },
        { label: "Çalışma voltajı", value: "12–24V" },
        { label: "Çalışma sıcaklığı", value: "-20°C – 65°C" },
        { label: "Su dayanıklılığı", value: "IP66" },
        { label: "Lens", value: "Dahili geniş açılı lens" },
        { label: "Kullanım yapısı", value: "Motosiklet optimizasyonlu" },
        { label: "Uyumluluk", value: "Universal" },
        { label: "Garanti", value: "2 yıl" },
      ],
      galleryNote: "",
      galleryImages: [
        {
          src: "/images/motoplay-series/rx-one/gallery/rx-one-gallery-01.png",
          alt: "APOLLON RX ONE ZM3 arka üçte bir görünüm; USB-C bağlantı yuvası ve montaj dişleri",
        },
        {
          src: "/images/motoplay-series/rx-one/gallery/rx-one-gallery-02.png",
          alt: "APOLLON RX ONE ZM3 arka yüzeyi; turuncu güç tuşu ve karbon fiber panel",
        },
        {
          src: "/images/motoplay-series/rx-one/gallery/rx-one-gallery-03.png",
          alt: "APOLLON RX ONE ZM3 paket içeriği: kamera, montaj aparatı, USB-C kablo, vidalar ve aparatlar",
        },
      ],
      galleryContain: true,
      galleryAspect: "4 / 3",
      galleryLastFullWidth: true,
      metaTitle: "APOLLON RX ONE ZM3 — 4K Motosiklet Kamerası | Apollon Entertainment Systems",
      metaDescription: "APOLLON RX ONE ZM3; GPS, Wi-Fi, Bluetooth 5.0, G-Sensörü, park gözetimi, döngüsel kayıt ve acil durum kayıt kilidi sunan 4K motosiklet kamerasıdır.",
    },
  },
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params
  const product = products[slug]
  if (!product) return {}
  return {
    title: product[locale].metaTitle,
    description: product[locale].metaDescription,
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function MotorcycleProductPage({ params }: PageProps) {
  const { locale, slug } = await params
  const product = products[slug]
  if (!product) notFound()

  const c = product[locale]

  return (
    <main>
      {/* 1. Hero */}
      <section className="relative border-b border-border/30 bg-background pb-24 pt-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,oklch(0.22_0.08_245_/_0.18),transparent)]" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-bronze to-transparent opacity-20" />
        </div>
        <div className="section-container relative">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              href={`/${locale}/products/motorcycle`}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-bronze"
            >
              <ChevronRight className="h-3 w-3 rotate-180" />
              {c.backLabel}
            </Link>
          </div>

          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-bronze/40" />
              <span className="text-xs font-medium uppercase tracking-[0.35em] text-bronze/70">
                {c.heroEyebrow}
              </span>
              <span className="h-px w-10 bg-bronze/40" />
            </div>

            <h1 className="font-heading text-4xl font-bold leading-[1.12] tracking-tight md:text-5xl lg:text-6xl pb-[0.14em]">
              {c.heroTitle}
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {c.heroSubtitle}
            </p>
            {c.summary && (
              <p className="mx-auto max-w-2xl text-xs leading-relaxed tracking-wide text-bronze/60">
                {c.summary}
              </p>
            )}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center rounded-sm border border-bronze bg-bronze px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-bronze/90 hover:shadow-[0_0_24px_oklch(0.70_0.12_65_/_0.35)]"
              >
                {c.heroPrimary}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center rounded-sm border border-border px-7 py-3 text-sm font-semibold text-foreground transition-all hover:border-bronze/40 hover:text-bronze"
              >
                {c.heroSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Product Promise */}
      <section className="border-t border-border/30 py-16">
        <div className="section-container">
          <Reveal className="mx-auto max-w-3xl space-y-4">
            {c.promiseBlocks && c.promiseBlocks.length > 0 ? (
              c.promiseBlocks.map((block, i) => (
                <p key={i} className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  {block}
                </p>
              ))
            ) : (
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                {c.promise}
              </p>
            )}
          </Reveal>
        </div>
      </section>

      {/* 3. Key Features */}
      <section className="border-t border-border/30 py-20">
        <div className="section-container">
          <div className={`grid gap-10 lg:gap-12 ${c.mainImageGridCols ?? (c.imageColumnAuto ? "lg:grid-cols-[1fr_auto]" : "lg:grid-cols-2")}`}>
            {/* Feature list */}
            <Reveal className="space-y-6">
              <h2 className="font-heading text-2xl font-bold leading-[1.15] tracking-tight md:text-3xl pb-[0.1em]">
                {c.featuresHeading}
              </h2>
              <ul className="space-y-3">
                {c.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-sm border border-bronze/20 text-bronze"
                      style={{ background: "oklch(0.70 0.12 65 / 0.08)" }}
                    >
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Product image */}
            <Reveal delay={150} className="flex justify-center lg:justify-start">
              {c.mainImage ? (
                c.mainImageContain ? (
                  /* Portrait / contain layout */
                  <div
                    className={`relative overflow-hidden rounded-sm ${c.imageColumnAuto ? "w-[350px]" : "w-full max-w-[350px]"}`}
                    style={{
                      aspectRatio: "2 / 3",
                      background: c.imageBackground ?? "oklch(0.07 0.01 245)",
                    }}
                  >
                    <Image
                      src={c.mainImage.src}
                      alt={c.mainImage.alt}
                      fill
                      unoptimized
                      className="object-contain"
                      sizes="(min-width: 1024px) 350px, 100vw"
                    />
                  </div>
                ) : (
                  /* Landscape layout — object-cover or object-contain based on mainImageFit */
                  <div
                    className="relative w-full overflow-hidden rounded-sm"
                    style={{
                      aspectRatio: c.mainImageAspect ?? "16 / 9",
                      background:
                        c.mainImageFit === "contain"
                          ? c.imageBackground ?? "oklch(0.07 0.01 245)"
                          : undefined,
                    }}
                  >
                    <Image
                      src={c.mainImage.src}
                      alt={c.mainImage.alt}
                      fill
                      unoptimized
                      className={c.mainImageFit === "contain" ? "object-contain" : "object-cover"}
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                    {c.mainImageFade && (
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/65 via-background/15 to-transparent" />
                    )}
                    {!c.mainImageFade && c.mainImageFit !== "contain" && (
                      <div className="pointer-events-none absolute inset-0 bg-black/10" />
                    )}
                  </div>
                )
              ) : (
                <div className="w-full space-y-4">
                  <div className="glass-card flex aspect-video items-center justify-center rounded-sm">
                    <div className="space-y-2 text-center">
                      <p className="text-xs font-medium uppercase tracking-[0.3em] text-bronze/40">
                        {c.heroTitle}
                      </p>
                      <p className="text-xs text-muted-foreground/40">
                        {locale === "tr" ? "Ürün görseli" : "Product image"}
                      </p>
                    </div>
                  </div>
                  <p className="text-center text-xs text-muted-foreground/50">{c.galleryNote}</p>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Feature Sections */}
      <section className="border-t border-border/30 py-20">
        <div className="section-container space-y-6">
          <Reveal className="mb-10 space-y-3">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-bronze/40" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-bronze/70">
                {locale === "tr" ? "Özellikler" : "Features"}
              </span>
            </div>
            <h2 className="font-heading text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl pb-[0.1em]">
              {c.sectionsHeading}
            </h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {c.sections.map((section, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="glass-card rounded-sm p-6 space-y-4 h-full">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-bronze/35 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-bronze/10" />
                  </div>
                  <h3 className="font-heading text-sm font-semibold text-foreground leading-[1.3]">
                    {section.heading}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{section.text}</p>
                  {section.list && (
                    <ul className="space-y-1.5">
                      {section.list.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full bg-bronze/40" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Technical Specs */}
      <section className="border-t border-border/30 py-20">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal className="space-y-8">
              <h2 className="font-heading text-2xl font-bold leading-[1.15] tracking-tight md:text-3xl pb-[0.1em]">
                {c.specsTitle}
              </h2>
              <SpecsTable specs={c.specs} />
            </Reveal>

            {/* Gallery */}
            <Reveal delay={150} className="space-y-4">
              <h2 className="font-heading text-2xl font-bold leading-[1.15] tracking-tight md:text-3xl pb-[0.1em]">
                {c.galleryTitle}
              </h2>
              {c.galleryImages && c.galleryImages.length > 0 ? (
                <div className={`grid gap-2 ${c.galleryColumns === 3 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-2"}`}>
                  {c.galleryImages.map((img, i) => {
                    const isLastFullWidth = Boolean(c.galleryLastFullWidth && i === (c.galleryImages?.length ?? 0) - 1)
                    return (
                      <div
                        key={i}
                        className={`relative overflow-hidden rounded-sm border border-border/40${isLastFullWidth ? " col-span-2" : ""}`}
                        style={{
                          aspectRatio: c.galleryAspect ?? (c.galleryContain ? "5 / 6" : "16 / 9"),
                          background: c.galleryContain
                            ? c.imageBackground ?? "oklch(0.07 0.01 245)"
                            : undefined,
                        }}
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          unoptimized
                          className={c.galleryContain ? "object-contain" : "object-cover"}
                          sizes={c.galleryColumns === 3 ? "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" : isLastFullWidth ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
                        />
                      </div>
                    )
                  })}
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-sm border border-border/40 bg-surface-raised flex items-center justify-center"
                    >
                      <span className="text-[10px] text-muted-foreground/30 uppercase tracking-widest">
                        {locale === "tr" ? "Görsel" : "Image"}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. Inquiry CTA */}
      <section className="border-t border-border/30 py-24">
        <div className="section-container">
          <Reveal className="mx-auto max-w-2xl space-y-10 text-center">
            <div className="space-y-5">
              <h2 className="font-heading text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl pb-[0.1em]">
                {c.inquiryTitle}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">{c.inquiryText}</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href={`/${locale}/contact`}
                className="rounded-sm border border-bronze bg-bronze px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-bronze/90 hover:shadow-[0_0_24px_oklch(0.70_0.12_65_/_0.3)]"
              >
                {c.inquiryPrimary}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="rounded-sm border border-border/60 px-7 py-3 text-sm font-semibold text-foreground transition-all hover:border-bronze/40 hover:text-bronze"
              >
                {c.inquirySecondary}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
