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
    // APOLLON RIDE VISION / B3 — official product document received 2026-08-31.
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
      heroEyebrow: "PREMIUM IPS MOTORCYCLE CARPLAY SYSTEM",
      heroTitle: "APOLLON RIDE VISION",
      heroSubtitle: "The premium motorcycle smart-display system, uniting a premium IPS screen, high brightness, dual Bluetooth, Apple CarPlay, Android Auto and GPS in a water-resistant body.",
      promise: "",
      promiseBlocks: [
        "Bring technology to your ride. Connectivity, navigation and a premium display experience in a single system.",
        "APOLLON RIDE VISION / B3 is a top-tier smart riding system developed for motorcycle riders, bringing a premium IPS display, dual Bluetooth, Apple CarPlay, Android Auto, GPS and high brightness together in a water-resistant construction.",
      ],
      summary: "Premium IPS • High Brightness • Dual Bluetooth • CarPlay • Android Auto • GPS • Water Resistant",
      features: [
        "Premium IPS Display",
        "High Brightness",
        "Dual Bluetooth",
        "Apple CarPlay",
        "Android Auto",
        "GPS",
        "Water-Resistant Design",
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
          heading: "Premium IPS Display",
          text: "A vivid, sharp image experience that keeps the information you need comfortably readable while riding.",
        },
        {
          heading: "High Brightness",
          text: "A high-brightness panel that supports on-screen visibility in bright conditions.",
        },
        {
          heading: "Dual Bluetooth",
          text: "An advanced Bluetooth architecture that widens the connected-use options available on the motorcycle.",
        },
        {
          heading: "Apple CarPlay",
          text: "Lets you use compatible iPhone features through the motorcycle display.",
        },
        {
          heading: "Android Auto",
          text: "Supports a connected riding experience with compatible Android devices.",
        },
        {
          heading: "GPS",
          text: "Provides GPS support for navigation and route use.",
        },
        {
          heading: "Water Resistant",
          text: "A durable construction designed with motorcycle riding conditions in mind.",
        },
      ],
      specs: [
        {
          label: "Product name",
          value: "APOLLON RIDE VISION",
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
          label: "Navigation",
          value: "Real-time GPS compatible",
        },
        {
          label: "Tire-pressure monitoring",
          value: "Integrated support",
        },
        {
          label: "Camera system",
          value: "Optional front and rear",
        },
        {
          label: "Camera sensor",
          value: "Sony IMX307",
        },
        {
          label: "Recording modes",
          value: "1440P / 30FPS and 1080P / 30FPS",
        },
        {
          label: "BSD",
          value: "Supported on compatible configurations",
        },
        {
          label: "Storage",
          value: "2GB–256GB TF card",
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
          label: "Construction",
          value: "Water-resistant, motorcycle optimized",
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
      metaTitle: "APOLLON RIDE VISION — Premium IPS Motorcycle CarPlay System | Apollon",
      metaDescription: "APOLLON RIDE VISION / B3 is a premium IPS motorcycle CarPlay system with high brightness, dual Bluetooth, Apple CarPlay, Android Auto, GPS and a water-resistant design.",
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
      heroEyebrow: "PREMIUM IPS MOTOSİKLET CARPLAY SİSTEMİ",
      heroTitle: "APOLLON RIDE VISION",
      heroSubtitle: "Premium IPS ekran, yüksek parlaklık, çift Bluetooth, Apple CarPlay, Android Auto ve GPS özelliklerini suya dayanıklı bir yapıda birleştiren üst seviye motosiklet akıllı ekran sistemi.",
      promise: "",
      promiseBlocks: [
        "Sürüşünüzü teknolojiyle buluşturun. Bağlantı, navigasyon ve premium ekran deneyimi tek sistemde.",
        "APOLLON RIDE VISION/B3; motosiklet kullanıcıları için geliştirilen Premium IPS ekran, çift Bluetooth, Apple CarPlay, Android Auto, GPS ve yüksek parlaklık özelliklerini suya dayanıklı yapıyla bir araya getiren üst seviye akıllı sürüş sistemidir.",
      ],
      summary: "Premium IPS • Yüksek Parlaklık • Çift Bluetooth • CarPlay • Android Auto • GPS • Suya Dayanıklı",
      features: [
        "Premium IPS Ekran",
        "Yüksek Parlaklık",
        "Çift Bluetooth",
        "Apple CarPlay",
        "Android Auto",
        "GPS",
        "Suya Dayanıklı",
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
          heading: "Premium IPS Ekran",
          text: "Canlı ve net görüntü deneyimiyle sürüş sırasında ihtiyaç duyduğunuz bilgilerin rahat görüntülenmesini sağlar.",
        },
        {
          heading: "Yüksek Parlaklık",
          text: "Aydınlık ortamlarda ekran görünürlüğünü destekleyen yüksek parlaklık özelliği sunar.",
        },
        {
          heading: "Çift Bluetooth",
          text: "Gelişmiş Bluetooth bağlantı yapısıyla motosiklet üzerindeki bağlantılı kullanım seçeneklerini genişletir.",
        },
        {
          heading: "Apple CarPlay",
          text: "Uyumlu iPhone özelliklerini motosiklet ekranı üzerinden kullanmanızı sağlar.",
        },
        {
          heading: "Android Auto",
          text: "Uyumlu Android cihazlarla bağlantılı sürüş deneyimini destekler.",
        },
        {
          heading: "GPS",
          text: "Navigasyon ve rota kullanımını destekleyen GPS özelliği sunar.",
        },
        {
          heading: "Suya Dayanıklı",
          text: "Motosiklet kullanım şartları düşünülerek tasarlanmış dayanıklı yapı.",
        },
      ],
      specs: [
        {
          label: "Ürün adı",
          value: "APOLLON RIDE VISION",
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
          label: "Navigasyon",
          value: "Gerçek zamanlı GPS uyumlu",
        },
        {
          label: "Lastik basınç takibi",
          value: "Entegre destek",
        },
        {
          label: "Kamera sistemi",
          value: "Opsiyonel ön ve arka",
        },
        {
          label: "Kamera sensörü",
          value: "Sony IMX307",
        },
        {
          label: "Kayıt modları",
          value: "1440P / 30FPS ve 1080P / 30FPS",
        },
        {
          label: "Kör Nokta Algılama",
          value: "Uyumlu konfigürasyonlarda destekleniyor",
        },
        {
          label: "Depolama",
          value: "2GB–256GB TF kart",
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
          label: "Gövde yapısı",
          value: "Suya dayanıklı, motosiklet optimizasyonlu",
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
      metaTitle: "APOLLON RIDE VISION — Premium IPS Motosiklet CarPlay Sistemi | Apollon",
      metaDescription: "APOLLON RIDE VISION / B3; yüksek parlaklık, çift Bluetooth, Apple CarPlay, Android Auto, GPS ve suya dayanıklı tasarım sunan premium IPS motosiklet CarPlay sistemidir.",
    },
  },

  "mdc-plus02": {
    // APOLLON RIDE ONE / B2 — official product document received 2026-08-31.
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
      heroEyebrow: "5.5” IPS MOTORCYCLE CARPLAY SYSTEM",
      heroTitle: "APOLLON RIDE ONE",
      heroSubtitle: "A smart riding display that brings a 5.5” IPS screen, wireless Apple CarPlay, Android Auto, Bluetooth and GPS together in a water-resistant body built for motorcycle use.",
      promise: "",
      promiseBlocks: [
        "Keep your phone in your pocket. Keep your navigation, your connection and your riding information in front of you.",
        "APOLLON RIDE ONE / B2 is a smart riding display that brings a 5.5” IPS screen, wireless Apple CarPlay, Android Auto, Bluetooth and GPS together for motorcycle riders. Its water-resistant construction is designed to suit the conditions motorcycles are used in.",
      ],
      summary: "5.5” IPS • Wireless CarPlay • Android Auto • GPS • Bluetooth • Water Resistant",
      features: [
        "5.5” IPS Display",
        "Wireless Apple CarPlay",
        "Android Auto",
        "GPS",
        "Bluetooth",
        "Water-Resistant Design",
        "USB Power",
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
          heading: "5.5” IPS Display",
          text: "A colour display experience that makes navigation and connected features comfortable to use on a motorcycle.",
        },
        {
          heading: "Wireless Apple CarPlay",
          text: "Connect a compatible iPhone to the system wirelessly to make use of CarPlay features.",
        },
        {
          heading: "Android Auto",
          text: "Supports a connected riding experience with compatible Android phones.",
        },
        {
          heading: "GPS",
          text: "Brings your route onto the motorcycle display with GPS support for navigation.",
        },
        {
          heading: "Bluetooth",
          text: "Wireless connectivity support makes the system more practical to use while riding.",
        },
        {
          heading: "Water-Resistant Design",
          text: "A durable construction developed with motorcycle riding conditions in mind.",
        },
        {
          heading: "USB Power",
          text: "A practical power connection makes the system easy to use on the motorcycle.",
        },
      ],
      specs: [
        {
          label: "Product name",
          value: "APOLLON RIDE ONE",
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
          label: "Navigation interface",
          value: "GPS compatible",
        },
        {
          label: "Power",
          value: "Type-C / 12V",
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
          label: "Construction",
          value: "Water-resistant, motorcycle optimized",
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
      metaTitle: "APOLLON RIDE ONE — 5.5” IPS Motorcycle CarPlay System | Apollon",
      metaDescription: "APOLLON RIDE ONE / B2 is a 5.5” IPS motorcycle CarPlay system with wireless Apple CarPlay, Android Auto, GPS, Bluetooth, USB power and a water-resistant design.",
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
      heroEyebrow: "5.5” IPS MOTOSİKLET CARPLAY SİSTEMİ",
      heroTitle: "APOLLON RIDE ONE",
      heroSubtitle: "5.5” IPS ekran, kablosuz Apple CarPlay, Android Auto, Bluetooth ve GPS özelliklerini motosiklet kullanımına uygun suya dayanıklı bir yapıda bir araya getiren akıllı sürüş ekranı.",
      promise: "",
      promiseBlocks: [
        "Telefonunuz cebinizde kalsın. Navigasyonunuz, bağlantınız ve sürüş bilgileriniz gözünüzün önünde olsun.",
        "APOLLON RIDE ONE/B2, motosiklet kullanıcıları için 5.5” IPS ekran, kablosuz Apple CarPlay, Android Auto, Bluetooth ve GPS özelliklerini bir araya getiren akıllı sürüş ekranıdır. Suya dayanıklı yapısıyla motosiklet kullanım koşullarına uygun olarak tasarlanmıştır.",
      ],
      summary: "5.5” IPS • Kablosuz CarPlay • Android Auto • GPS • Bluetooth • Suya Dayanıklı",
      features: [
        "5.5” IPS Ekran",
        "Kablosuz Apple CarPlay",
        "Android Auto",
        "GPS",
        "Bluetooth",
        "Suya Dayanıklı Tasarım",
        "USB Güç Beslemesi",
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
          heading: "5.5” IPS Ekran",
          text: "Navigasyon ve bağlantılı özelliklerin motosiklet üzerinde rahat kullanılmasını sağlayan renkli ekran deneyimi sunar.",
        },
        {
          heading: "Kablosuz Apple CarPlay",
          text: "Uyumlu iPhone’unuzu kablosuz olarak sisteme bağlayarak CarPlay özelliklerinden yararlanmanızı sağlar.",
        },
        {
          heading: "Android Auto",
          text: "Uyumlu Android telefonlarla bağlantılı sürüş deneyimini destekler.",
        },
        {
          heading: "GPS",
          text: "Navigasyon kullanımını destekleyen GPS özelliğiyle rotanızı motosiklet ekranına taşır.",
        },
        {
          heading: "Bluetooth",
          text: "Kablosuz bağlantı desteğiyle sürüş sırasında daha pratik bir kullanım sunar.",
        },
        {
          heading: "Suya Dayanıklı Tasarım",
          text: "Motosiklet kullanım koşulları düşünülerek geliştirilen dayanıklı yapıya sahiptir.",
        },
        {
          heading: "USB Güç Beslemesi",
          text: "Pratik güç bağlantısıyla motosiklet üzerinde kullanım kolaylığı sağlar.",
        },
      ],
      specs: [
        {
          label: "Ürün adı",
          value: "APOLLON RIDE ONE",
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
          label: "Navigasyon arayüzü",
          value: "GPS uyumlu",
        },
        {
          label: "Güç",
          value: "Type-C / 12V",
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
          label: "Gövde yapısı",
          value: "Suya dayanıklı, motosiklet optimizasyonlu",
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
      metaTitle: "APOLLON RIDE ONE — 5.5” IPS Motosiklet CarPlay Sistemi | Apollon",
      metaDescription: "APOLLON RIDE ONE / B2; kablosuz Apple CarPlay, Android Auto, GPS, Bluetooth, USB güç beslemesi ve suya dayanıklı tasarım sunan 5.5” IPS motosiklet CarPlay sistemidir.",
    },
  },

  "moto-dash-cam-tr-v2": {
    // APOLLON RX ONE / ZM3 — official product document received 2026-08-31.
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
      heroEyebrow: "COMPACT 1080P MOTORCYCLE CAMERA",
      heroTitle: "APOLLON RX ONE",
      heroSubtitle: "A compact motorcycle camera bringing 1080P recording, a wide-angle view, a G-sensor, parking mode and loop recording together in a body sized for the motorcycle.",
      promise: "",
      promiseBlocks: [
        "Compact design. Uninterrupted recording. Every moment of your ride on record.",
        "APOLLON RX ONE / ZM3 is a practical recording solution that combines 1080P recording, a wide-angle view, a G-sensor, parking mode and loop recording in a compact form suited to motorcycle use. Its small dimensions let you record your rides without taking up unnecessary space on the motorcycle.",
      ],
      summary: "1080P • Wide Angle • G-Sensor • Parking Mode • Loop Recording • Compact Design",
      features: [
        "1080P Recording",
        "Wide-Angle View",
        "G-Sensor",
        "Parking Mode",
        "Loop Recording",
        "Easy Installation",
        "Compact Design",
      ],
      mainImage: {
        src: "/images/motoplay-series/rx-one/main.png",
        alt: "APOLLON RX ONE compact motorcycle camera, side view showing the carbon-textured body and wide-angle lens",
      },
      mainImageFit: "contain",
      mainImageAspect: "4 / 3",
      imageBackground: "#ffffff",
      sectionsHeading: "What APOLLON RX ONE offers",
      sections: [
        {
          heading: "1080P Recording",
          text: "Records your everyday rides with clear, usable image quality.",
        },
        {
          heading: "Wide-Angle View",
          text: "Helps bring a wider section of the road into the camera's field of view.",
        },
        {
          heading: "G-Sensor",
          text: "Sensor technology that helps detect impacts and sudden movements, supporting recording security.",
        },
        {
          heading: "Parking Mode",
          text: "Supports security functions while the motorcycle is parked.",
        },
        {
          heading: "Loop Recording",
          text: "Helps manage storage automatically so recording continues without interruption.",
        },
        {
          heading: "Easy Installation",
          text: "Its compact construction offers a practical installation experience on the motorcycle.",
        },
      ],
      specs: [
        {
          label: "Product name",
          value: "APOLLON RX ONE",
        },
        {
          label: "Model reference",
          value: "ZM3",
        },
        {
          label: "Category",
          value: "MotoPlay Series",
        },
        {
          label: "Video resolution",
          value: "1920×1080P / 30FPS",
        },
        {
          label: "Video format",
          value: "TS",
        },
        {
          label: "Water resistance",
          value: "IP66",
        },
        {
          label: "Storage",
          value: "TF card support",
        },
        {
          label: "Power input",
          value: "5V / 1A",
        },
        {
          label: "Lens",
          value: "Built-in wide-angle lens",
        },
        {
          label: "Recording mode",
          value: "Loop recording",
        },
        {
          label: "Parking mode",
          value: "Supported",
        },
        {
          label: "G-sensor",
          value: "Supported",
        },
        {
          label: "Operating design",
          value: "Motorcycle optimized",
        },
        {
          label: "Construction",
          value: "Vibration-resistant compact body",
        },
      ],
      galleryNote: "",
      galleryImages: [
        {
          src: "/images/motoplay-series/rx-one/gallery/rx-one-gallery-01.png",
          alt: "APOLLON RX ONE three-quarter rear view showing the USB-C connection bay and the mounting threads",
        },
        {
          src: "/images/motoplay-series/rx-one/gallery/rx-one-gallery-02.png",
          alt: "APOLLON RX ONE rear face with the orange power button and the carbon-fibre panel",
        },
        {
          src: "/images/motoplay-series/rx-one/gallery/rx-one-gallery-03.png",
          alt: "APOLLON RX ONE package contents: camera, mounting bracket, USB-C cable, screws and tools",
        },
      ],
      galleryContain: true,
      galleryAspect: "4 / 3",
      galleryLastFullWidth: true,
      metaTitle: "APOLLON RX ONE — Compact 1080P Motorcycle Camera | Apollon",
      metaDescription: "APOLLON RX ONE / ZM3 is a compact 1080P motorcycle camera with a wide-angle view, G-sensor, parking mode, loop recording and easy installation.",
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
      heroEyebrow: "KOMPAKT 1080P MOTOSİKLET KAMERASI",
      heroTitle: "APOLLON RX ONE",
      heroSubtitle: "1080P kayıt, geniş açı, G-Sensörü, park modu ve döngüsel kayıt özelliklerini motosiklete uygun kompakt bir gövdede bir araya getiren motosiklet kamerası.",
      promise: "",
      promiseBlocks: [
        "Kompakt tasarım. Kesintisiz kayıt. Yolculuğunuzun her anı kayıt altında.",
        "APOLLON RX ONE/ZM3; motosiklet kullanımına uygun kompakt yapısıyla 1080P kayıt, geniş açı, G-Sensörü, park modu ve döngüsel kayıt özelliklerini bir araya getiren pratik bir kayıt çözümüdür. Küçük boyutları sayesinde motosiklet üzerinde gereksiz yer kaplamadan sürüşlerinizi kayıt altına almanızı sağlar.",
      ],
      summary: "1080P • Geniş Açı • G-Sensörü • Park Modu • Döngüsel Kayıt • Kompakt Tasarım",
      features: [
        "1080P Kayıt",
        "Geniş Açı",
        "G-Sensörü",
        "Park Modu",
        "Döngüsel Kayıt",
        "Kolay Montaj",
        "Kompakt Tasarım",
      ],
      mainImage: {
        src: "/images/motoplay-series/rx-one/main.png",
        alt: "APOLLON RX ONE kompakt motosiklet kamerası; karbon dokulu gövdesi ve geniş açılı lensiyle yandan görünüm",
      },
      mainImageFit: "contain",
      mainImageAspect: "4 / 3",
      imageBackground: "#ffffff",
      sectionsHeading: "APOLLON RX ONE neler sunar",
      sections: [
        {
          heading: "1080P Kayıt",
          text: "Günlük sürüşlerinizi net ve kullanılabilir görüntü kalitesiyle kayıt altına alır.",
        },
        {
          heading: "Geniş Açı",
          text: "Yolun daha geniş bölümünün kamera görüş alanına alınmasına yardımcı olur.",
        },
        {
          heading: "G-Sensörü",
          text: "Darbe ve ani hareketlerin algılanmasına yardımcı olan sensör teknolojisiyle kayıt güvenliğini destekler.",
        },
        {
          heading: "Park Modu",
          text: "Motosiklet park halindeyken güvenlik fonksiyonlarını destekler.",
        },
        {
          heading: "Döngüsel Kayıt",
          text: "Depolama alanının otomatik yönetilmesine yardımcı olarak kayıt sürekliliğini destekler.",
        },
        {
          heading: "Kolay Montaj",
          text: "Kompakt yapısıyla motosiklet üzerinde pratik bir kurulum deneyimi sunar.",
        },
      ],
      specs: [
        {
          label: "Ürün adı",
          value: "APOLLON RX ONE",
        },
        {
          label: "Model referansı",
          value: "ZM3",
        },
        {
          label: "Kategori",
          value: "MotoPlay Serisi",
        },
        {
          label: "Video çözünürlüğü",
          value: "1920×1080P / 30FPS",
        },
        {
          label: "Video formatı",
          value: "TS",
        },
        {
          label: "Su dayanıklılığı",
          value: "IP66",
        },
        {
          label: "Depolama",
          value: "TF kart desteği",
        },
        {
          label: "Güç girişi",
          value: "5V / 1A",
        },
        {
          label: "Lens",
          value: "Dahili geniş açılı lens",
        },
        {
          label: "Kayıt modu",
          value: "Döngüsel kayıt",
        },
        {
          label: "Park modu",
          value: "Destekleniyor",
        },
        {
          label: "G-Sensörü",
          value: "Destekleniyor",
        },
        {
          label: "Kullanım yapısı",
          value: "Motosiklet optimizasyonlu",
        },
        {
          label: "Gövde yapısı",
          value: "Titreşime dayanıklı kompakt gövde",
        },
      ],
      galleryNote: "",
      galleryImages: [
        {
          src: "/images/motoplay-series/rx-one/gallery/rx-one-gallery-01.png",
          alt: "APOLLON RX ONE arka üçte bir görünüm; USB-C bağlantı yuvası ve montaj dişleri",
        },
        {
          src: "/images/motoplay-series/rx-one/gallery/rx-one-gallery-02.png",
          alt: "APOLLON RX ONE arka yüzeyi; turuncu güç tuşu ve karbon fiber panel",
        },
        {
          src: "/images/motoplay-series/rx-one/gallery/rx-one-gallery-03.png",
          alt: "APOLLON RX ONE paket içeriği: kamera, montaj aparatı, USB-C kablo, vidalar ve aparatlar",
        },
      ],
      galleryContain: true,
      galleryAspect: "4 / 3",
      galleryLastFullWidth: true,
      metaTitle: "APOLLON RX ONE — Kompakt 1080P Motosiklet Kamerası | Apollon",
      metaDescription: "APOLLON RX ONE / ZM3; geniş açı, G-Sensörü, park modu, döngüsel kayıt ve kolay montaj sunan kompakt 1080P motosiklet kamerasıdır.",
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
