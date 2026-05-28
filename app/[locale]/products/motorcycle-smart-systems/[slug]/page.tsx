import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Check, ChevronRight } from "lucide-react"
import { SpecsTable, type SpecRow } from "@/components/products/SpecsTable"
import { type Locale } from "@/lib/i18n"

type PageProps = { params: Promise<{ locale: Locale; slug: string }> }

// ─── Types ───────────────────────────────────────────────────────────────────

type FeatureSection = {
  heading: string
  text: string
}

type ProductLocale = {
  heroEyebrow: string
  heroTitle: string
  heroSubtitle: string
  heroPrimary: string
  heroSecondary: string
  promise: string
  featuresHeading: string
  features: string[]
  sectionsHeading: string
  sections: FeatureSection[]
  specs: SpecRow[]
  specsTitle: string
  packageTitle: string
  packageNote: string
  galleryTitle: string
  galleryNote: string
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
    en: {
      heroEyebrow: "MOTORCYCLE SMART DISPLAY",
      heroTitle: "MDC-SMART02",
      heroSubtitle:
        "A rider-focused smart display system combining wireless CarPlay, Android Auto, a high-brightness IPS screen, optional camera support, tire pressure monitoring, and stable power architecture.",
      heroPrimary: "Request Product Information",
      heroSecondary: "Contact for Installation / Dealer Info",
      promise:
        "MDC-SMART02 is designed to bring wireless CarPlay and Android Auto into the motorcycle cockpit alongside a 6.2-inch high-brightness IPS display, optional front/rear BSD camera system, tire pressure monitoring, and stable power architecture. The system is built around a rider-focused experience that supports navigation, media, communication, and riding awareness.",
      featuresHeading: "Key features",
      features: [
        "Wireless Apple CarPlay",
        "Android Auto",
        "6.2-inch high-brightness IPS display",
        "Optional front/rear BSD camera system",
        "Tire pressure monitoring",
        "Stable power architecture",
        "TF card support",
      ],
      sectionsHeading: "What MDC-SMART02 offers",
      sections: [
        {
          heading: "Your apps, maps, and music — built for the ride.",
          text: "MDC-SMART02 brings wireless Apple CarPlay and Android Auto into the motorcycle cockpit, helping riders access navigation, media, communication, and familiar smartphone functions through a riding-friendly display.",
        },
        {
          heading: "6.2-inch high-brightness IPS display.",
          text: "The 6.2-inch IPS display is designed to support clearer viewing during rides, with a screen size that balances visibility, control, and motorcycle-friendly installation.",
        },
        {
          heading: "Optional camera awareness.",
          text: "Supported configurations can include optional front/rear BSD camera functionality, helping improve rider awareness around the motorcycle.",
        },
        {
          heading: "Monitor what matters.",
          text: "Tire pressure monitoring support helps riders stay aware of key tire information before and during rides.",
        },
        {
          heading: "Stable power for everyday riding.",
          text: "MDC-SMART02 is positioned with a stable power architecture designed to support consistent operation in motorcycle use cases.",
        },
        {
          heading: "Storage support for riding data.",
          text: "TF card support allows compatible recording and storage workflows depending on configuration.",
        },
      ],
      specs: [
        { label: "Product name", value: "MDC-SMART02" },
        { label: "Category", value: "Motorcycle Smart Systems" },
        { label: "Display", value: "6.2-inch high-brightness IPS display" },
        { label: "Connectivity", value: "Wireless Apple CarPlay / Android Auto" },
        { label: "Camera support", value: "Optional front/rear BSD camera system" },
        { label: "Monitoring", value: "Tire pressure monitoring" },
        { label: "Storage", value: "TF card support" },
        { label: "Power", value: "Stable power architecture" },
        { label: "Status", value: "Published / content available" },
      ],
      specsTitle: "Technical specifications",
      packageTitle: "Package contents",
      packageNote:
        "Package contents may vary by configuration. Please confirm final kit contents before order or installation.",
      galleryTitle: "Product gallery",
      galleryNote: "Product images will be added when official visuals are available.",
      inquiryTitle: "Interested in this motorcycle system?",
      inquiryText:
        "Share your motorcycle model, installation needs, and preferred features. Apollon can help with product information, installation guidance, and dealer/distributor communication.",
      inquiryPrimary: "Request Product Information",
      inquirySecondary: "Contact for Installation / Dealer Info",
      backLabel: "Motorcycle Smart Systems",
      metaTitle: "MDC-SMART02 Motorcycle Smart Display | Apollon",
      metaDescription:
        "Discover MDC-SMART02, a motorcycle smart display with wireless CarPlay, Android Auto, 6.2-inch high-brightness IPS display, optional camera support, tire pressure monitoring, and TF card support.",
    },
    tr: {
      heroEyebrow: "MOTOSİKLET AKILLI EKRAN SİSTEMİ",
      heroTitle: "MDC-SMART02",
      heroSubtitle:
        "Kablosuz CarPlay, Android Auto, yüksek parlaklıklı IPS ekran, opsiyonel kamera desteği, lastik basınç takibi ve stabil güç mimarisini bir araya getiren sürücü odaklı akıllı ekran sistemi.",
      heroPrimary: "Ürün Bilgisi Al",
      heroSecondary: "Montaj / Bayi Bilgisi İçin İletişime Geç",
      promise:
        "MDC-SMART02, kablosuz CarPlay ve Android Auto özelliklerini motosiklet kokpitine taşımak için tasarlanmıştır. 6.2 inç yüksek parlaklıklı IPS ekran, opsiyonel ön/arka BSD kamera sistemi, lastik basınç takibi ve stabil güç mimarisini bünyesinde barındıran sistem; navigasyon, medya, iletişim ve sürüş farkındalığını destekleyen sürücü odaklı bir deneyim sunar.",
      featuresHeading: "Öne çıkan özellikler",
      features: [
        "Kablosuz Apple CarPlay",
        "Android Auto",
        "6.2 inç yüksek parlaklıklı IPS ekran",
        "Opsiyonel ön/arka BSD kamera sistemi",
        "Lastik basınç takibi",
        "Stabil güç mimarisi",
        "TF kart desteği",
      ],
      sectionsHeading: "MDC-SMART02 neler sunar",
      sections: [
        {
          heading: "Uygulamalarınız, haritalarınız ve müziğiniz sürüşe hazır.",
          text: "MDC-SMART02, kablosuz Apple CarPlay ve Android Auto özelliklerini motosiklet kokpitine taşıyarak sürücülerin navigasyon, medya, iletişim ve tanıdık akıllı telefon fonksiyonlarına sürüşe uygun bir ekran üzerinden erişmesine yardımcı olur.",
        },
        {
          heading: "6.2 inç yüksek parlaklıklı IPS ekran.",
          text: "6.2 inç IPS ekran, sürüş sırasında daha net görüşü desteklemek ve görünürlük, kontrol ve motosiklet uyumlu montaj arasında dengeli bir deneyim sunmak için tasarlanır.",
        },
        {
          heading: "Opsiyonel kamera farkındalığı.",
          text: "Desteklenen yapılandırmalarda opsiyonel ön/arka BSD kamera fonksiyonu bulunabilir ve motosiklet çevresinde sürüş farkındalığını artırmaya yardımcı olabilir.",
        },
        {
          heading: "Önemli bilgileri takip edin.",
          text: "Lastik basınç takibi desteği, sürücülerin sürüş öncesinde ve sırasında önemli lastik bilgilerini takip etmesine yardımcı olur.",
        },
        {
          heading: "Günlük sürüş için stabil güç mimarisi.",
          text: "MDC-SMART02, motosiklet kullanım senaryolarında tutarlı çalışmayı desteklemek için stabil güç mimarisiyle konumlandırılır.",
        },
        {
          heading: "Sürüş verileri için depolama desteği.",
          text: "TF kart desteği, yapılandırmaya bağlı olarak uyumlu kayıt ve depolama süreçlerine olanak tanır.",
        },
      ],
      specs: [
        { label: "Ürün adı", value: "MDC-SMART02" },
        { label: "Kategori", value: "Motosiklet Akıllı Sistemleri" },
        { label: "Ekran", value: "6.2 inç yüksek parlaklıklı IPS ekran" },
        { label: "Bağlantı", value: "Kablosuz Apple CarPlay / Android Auto" },
        { label: "Kamera desteği", value: "Opsiyonel ön/arka BSD kamera sistemi" },
        { label: "Takip", value: "Lastik basınç takibi" },
        { label: "Depolama", value: "TF kart desteği" },
        { label: "Güç", value: "Stabil güç mimarisi" },
        { label: "Durum", value: "Yayına hazır / içerik mevcut" },
      ],
      specsTitle: "Teknik özellikler",
      packageTitle: "Paket içeriği",
      packageNote:
        "Paket içeriği yapılandırmaya göre değişebilir. Sipariş veya montaj öncesinde final kit içeriğini doğrulayın.",
      galleryTitle: "Ürün galerisi",
      galleryNote: "Resmi görseller hazır olduğunda ürün fotoğrafları eklenecektir.",
      inquiryTitle: "Bu motosiklet sistemiyle ilgileniyor musunuz?",
      inquiryText:
        "Motosiklet modelinizi, montaj ihtiyacınızı ve istediğiniz özellikleri paylaşın. Apollon ürün bilgisi, montaj yönlendirmesi ve bayi/distribütör iletişimi konusunda yardımcı olabilir.",
      inquiryPrimary: "Ürün Bilgisi Al",
      inquirySecondary: "Montaj / Bayi Bilgisi İçin İletişime Geç",
      backLabel: "Motosiklet Akıllı Sistemleri",
      metaTitle: "MDC-SMART02 Motosiklet Akıllı Ekran | Apollon",
      metaDescription:
        "Kablosuz CarPlay, Android Auto, 6.2 inç yüksek parlaklıklı IPS ekran, opsiyonel kamera desteği, lastik basınç takibi ve TF kart desteği sunan MDC-SMART02 modelini keşfedin.",
    },
  },

  "mdc-plus02": {
    en: {
      heroEyebrow: "MOTORCYCLE DISPLAY + DVR",
      heroTitle: "MDC-PLUS02",
      heroSubtitle:
        "A connected motorcycle smart display and DVR-focused system designed for navigation, recording, Bluetooth audio, calls, media, day/night viewing, and touch control.",
      heroPrimary: "Request Product Information",
      heroSecondary: "Contact for Installation / Dealer Info",
      promise:
        "MDC-PLUS02 is designed to combine wireless CarPlay and Android Auto with DVR recording capability, Bluetooth helmet or earphone support, music and call management, day/night display mode, and a touch interface — bringing a fuller connected experience into the motorcycle cockpit.",
      featuresHeading: "Key features",
      features: [
        "Wireless CarPlay & Android Auto",
        "Front/rear DVR recording",
        "Bluetooth helmet / earphone support",
        "Music and call management",
        "Day/night display mode",
        "Touch interface",
      ],
      sectionsHeading: "What MDC-PLUS02 offers",
      sections: [
        {
          heading: "Connected navigation and media.",
          text: "MDC-PLUS02 brings wireless CarPlay and Android Auto into the riding experience, helping riders access navigation, media, and communication features through a motorcycle-friendly interface.",
        },
        {
          heading: "Front and rear DVR recording.",
          text: "With front/rear DVR recording support, MDC-PLUS02 helps riders capture key road moments and add another layer of visibility to the ride.",
        },
        {
          heading: "Audio that moves with you.",
          text: "Bluetooth helmet and earphone support makes it easier to listen to guidance, music, and call audio while riding.",
        },
        {
          heading: "Control music and calls with less distraction.",
          text: "MDC-PLUS02 is designed to support music and call management through a touch-focused interface built around rider convenience.",
        },
        {
          heading: "Ready for changing light conditions.",
          text: "Day/night display modes help the interface remain more comfortable across different riding environments.",
        },
        {
          heading: "Simple touch control.",
          text: "The touch interface keeps key controls accessible for navigation, media, calls, and recording-related functions.",
        },
      ],
      specs: [
        { label: "Product name", value: "MDC-PLUS02" },
        { label: "Category", value: "Motorcycle Smart Systems" },
        { label: "Connectivity", value: "Wireless CarPlay / Android Auto" },
        { label: "Recording", value: "Front/rear DVR recording" },
        { label: "Audio", value: "Bluetooth helmet / earphone support" },
        { label: "Controls", value: "Music and call management" },
        { label: "Display mode", value: "Day/night display mode" },
        { label: "Interface", value: "Touch interface" },
        { label: "Status", value: "Published / content available" },
      ],
      specsTitle: "Technical specifications",
      packageTitle: "Package contents",
      packageNote:
        "Package contents may vary by configuration. Please confirm final kit contents before order or installation.",
      galleryTitle: "Product gallery",
      galleryNote: "Product images will be added when official visuals are available.",
      inquiryTitle: "Interested in this motorcycle system?",
      inquiryText:
        "Share your motorcycle model, installation needs, and preferred features. Apollon can help with product information, installation guidance, and dealer/distributor communication.",
      inquiryPrimary: "Request Product Information",
      inquirySecondary: "Contact for Installation / Dealer Info",
      backLabel: "Motorcycle Smart Systems",
      metaTitle: "MDC-PLUS02 Motorcycle Display and DVR | Apollon",
      metaDescription:
        "Explore MDC-PLUS02, a motorcycle smart display and DVR system with wireless CarPlay, Android Auto, front/rear DVR recording, Bluetooth helmet support, day/night mode, and touch interface.",
    },
    tr: {
      heroEyebrow: "MOTOSİKLET EKRAN + DVR",
      heroTitle: "MDC-PLUS02",
      heroSubtitle:
        "Navigasyon, kayıt, Bluetooth ses, aramalar, medya, gündüz/gece görüntüleme ve dokunmatik kontrol için tasarlanan bağlantılı motosiklet akıllı ekran ve DVR odaklı sistem.",
      heroPrimary: "Ürün Bilgisi Al",
      heroSecondary: "Montaj / Bayi Bilgisi İçin İletişime Geç",
      promise:
        "MDC-PLUS02, kablosuz CarPlay ve Android Auto özelliklerini DVR kayıt kabiliyeti, Bluetooth kask veya kulaklık desteği, müzik ve arama yönetimi, gündüz/gece ekran modu ve dokunmatik arayüzle bir araya getirecek şekilde tasarlanmıştır. Motosiklet kokpitine daha kapsamlı bir bağlantılı deneyim kazandırır.",
      featuresHeading: "Öne çıkan özellikler",
      features: [
        "Kablosuz CarPlay & Android Auto",
        "Ön/arka DVR kaydı",
        "Bluetooth kask / kulaklık desteği",
        "Müzik ve arama yönetimi",
        "Gündüz/gece ekran modu",
        "Dokunmatik arayüz",
      ],
      sectionsHeading: "MDC-PLUS02 neler sunar",
      sections: [
        {
          heading: "Bağlantılı navigasyon ve medya.",
          text: "MDC-PLUS02, kablosuz CarPlay ve Android Auto özelliklerini sürüş deneyimine taşıyarak sürücülerin navigasyon, medya ve iletişim özelliklerine motosiklet kullanımına uygun bir arayüzden erişmesine yardımcı olur.",
        },
        {
          heading: "Ön ve arka DVR kaydı.",
          text: "Ön/arka DVR kayıt desteğiyle MDC-PLUS02, önemli yol anlarını kaydetmeye ve sürüşe ek bir görüş katmanı kazandırmaya yardımcı olur.",
        },
        {
          heading: "Sizinle hareket eden ses.",
          text: "Bluetooth kask ve kulaklık desteği, sürüş sırasında yönlendirme, müzik ve arama seslerini daha kolay takip etmeyi sağlar.",
        },
        {
          heading: "Müzik ve aramaları daha az dikkat dağınıklığıyla yönetin.",
          text: "MDC-PLUS02, sürüş kolaylığına odaklanan dokunmatik arayüzüyle müzik ve arama yönetimini desteklemek için tasarlanır.",
        },
        {
          heading: "Değişen ışık koşullarına hazır.",
          text: "Gündüz/gece ekran modları, farklı sürüş ortamlarında arayüzün daha konforlu kullanılmasına yardımcı olur.",
        },
        {
          heading: "Basit dokunmatik kontrol.",
          text: "Dokunmatik arayüz; navigasyon, medya, aramalar ve kayıtla ilgili temel kontrolleri erişilebilir tutar.",
        },
      ],
      specs: [
        { label: "Ürün adı", value: "MDC-PLUS02" },
        { label: "Kategori", value: "Motosiklet Akıllı Sistemleri" },
        { label: "Bağlantı", value: "Kablosuz CarPlay / Android Auto" },
        { label: "Kayıt", value: "Ön/arka DVR kaydı" },
        { label: "Ses", value: "Bluetooth kask / kulaklık desteği" },
        { label: "Kontroller", value: "Müzik ve arama yönetimi" },
        { label: "Ekran modu", value: "Gündüz/gece ekran modu" },
        { label: "Arayüz", value: "Dokunmatik arayüz" },
        { label: "Durum", value: "Yayına hazır / içerik mevcut" },
      ],
      specsTitle: "Teknik özellikler",
      packageTitle: "Paket içeriği",
      packageNote:
        "Paket içeriği yapılandırmaya göre değişebilir. Sipariş veya montaj öncesinde final kit içeriğini doğrulayın.",
      galleryTitle: "Ürün galerisi",
      galleryNote: "Resmi görseller hazır olduğunda ürün fotoğrafları eklenecektir.",
      inquiryTitle: "Bu motosiklet sistemiyle ilgileniyor musunuz?",
      inquiryText:
        "Motosiklet modelinizi, montaj ihtiyacınızı ve istediğiniz özellikleri paylaşın. Apollon ürün bilgisi, montaj yönlendirmesi ve bayi/distribütör iletişimi konusunda yardımcı olabilir.",
      inquiryPrimary: "Ürün Bilgisi Al",
      inquirySecondary: "Montaj / Bayi Bilgisi İçin İletişime Geç",
      backLabel: "Motosiklet Akıllı Sistemleri",
      metaTitle: "MDC-PLUS02 Motosiklet Ekran ve DVR | Apollon",
      metaDescription:
        "Kablosuz CarPlay, Android Auto, ön/arka DVR kayıt, Bluetooth kask desteği, gündüz/gece modu ve dokunmatik arayüz sunan MDC-PLUS02 modelini inceleyin.",
    },
  },

  "moto-dash-cam-tr-v2": {
    en: {
      heroEyebrow: "MOTORCYCLE DASHCAM",
      heroTitle: "Moto Dash Cam TR V2",
      heroSubtitle:
        "A compact motorcycle dashcam solution designed for Full HD 1080P recording, Wi-Fi mobile app connection, IP66 water resistance, loop recording, and TF card storage.",
      heroPrimary: "Request Product Information",
      heroSecondary: "Contact for Installation / Dealer Info",
      promise:
        "Moto Dash Cam TR V2 is designed to add recording capability to the motorcycle without a complex setup — combining Full HD 1080P recording, Wi-Fi mobile app connection, IP66 weather resistance, loop recording, and TF card storage in a compact form factor built for real riding conditions.",
      featuresHeading: "Key features",
      features: [
        "Compact motorcycle camera design",
        "Full HD 1080P recording",
        "Wi-Fi mobile app connection",
        "IP66 water resistance",
        "Loop recording",
        "TF card storage",
      ],
      sectionsHeading: "What Moto Dash Cam TR V2 offers",
      sections: [
        {
          heading: "Compact protection for the ride.",
          text: "Moto Dash Cam TR V2 is designed as a compact camera solution that adds recording capability without overwhelming the motorcycle setup.",
        },
        {
          heading: "Full HD 1080P recording.",
          text: "Full HD 1080P recording helps capture road moments with clear detail for daily rides and longer journeys.",
        },
        {
          heading: "Connect through the mobile app.",
          text: "Wi-Fi mobile app connection allows supported viewing, control, and file access workflows depending on device configuration.",
        },
        {
          heading: "Built for changing weather.",
          text: "IP66 water resistance supports motorcycle use in changing weather and road conditions.",
        },
        {
          heading: "Continuous recording support.",
          text: "Loop recording helps manage storage by continuously recording and overwriting older footage when needed.",
        },
        {
          heading: "TF card storage.",
          text: "TF card support provides local storage for recorded footage depending on card capacity and configuration.",
        },
      ],
      specs: [
        { label: "Product name", value: "Moto Dash Cam TR V2" },
        { label: "Category", value: "Motorcycle Smart Systems" },
        { label: "Product type", value: "Motorcycle dashcam" },
        { label: "Recording", value: "Full HD 1080P" },
        { label: "Connectivity", value: "Wi-Fi mobile app connection" },
        { label: "Water resistance", value: "IP66" },
        { label: "Recording mode", value: "Loop recording" },
        { label: "Storage", value: "TF card storage" },
        { label: "Status", value: "Published / content available" },
      ],
      specsTitle: "Technical specifications",
      packageTitle: "Package contents",
      packageNote:
        "Package contents may vary by configuration. Please confirm final kit contents before order or installation.",
      galleryTitle: "Product gallery",
      galleryNote: "Product images will be added when official visuals are available.",
      inquiryTitle: "Interested in this motorcycle system?",
      inquiryText:
        "Share your motorcycle model, installation needs, and preferred features. Apollon can help with product information, installation guidance, and dealer/distributor communication.",
      inquiryPrimary: "Request Product Information",
      inquirySecondary: "Contact for Installation / Dealer Info",
      backLabel: "Motorcycle Smart Systems",
      metaTitle: "Moto Dash Cam TR V2 | Apollon",
      metaDescription:
        "Discover Moto Dash Cam TR V2, a compact motorcycle dashcam with Full HD 1080P recording, Wi-Fi mobile app connection, IP66 water resistance, loop recording, and TF card storage.",
    },
    tr: {
      heroEyebrow: "MOTOSİKLET ARAÇ KAMERASI",
      heroTitle: "Moto Dash Cam TR V2",
      heroSubtitle:
        "Full HD 1080P kayıt, Wi-Fi mobil uygulama bağlantısı, IP66 suya dayanıklılık, döngüsel kayıt ve TF kart depolama için tasarlanan kompakt motosiklet araç kamerası çözümü.",
      heroPrimary: "Ürün Bilgisi Al",
      heroSecondary: "Montaj / Bayi Bilgisi İçin İletişime Geç",
      promise:
        "Moto Dash Cam TR V2, karmaşık bir kurulum gerektirmeden motosiklete kayıt kabiliyeti katmak için tasarlanmıştır. Full HD 1080P kayıt, Wi-Fi mobil uygulama bağlantısı, IP66 hava koşullarına dayanıklılık, döngüsel kayıt ve TF kart depolama özelliklerini gerçek sürüş koşulları için geliştirilmiş kompakt bir tasarımda bir araya getirir.",
      featuresHeading: "Öne çıkan özellikler",
      features: [
        "Kompakt motosiklet kamera tasarımı",
        "Full HD 1080P kayıt",
        "Wi-Fi mobil uygulama bağlantısı",
        "IP66 suya dayanıklılık",
        "Döngüsel kayıt",
        "TF kart depolama",
      ],
      sectionsHeading: "Moto Dash Cam TR V2 neler sunar",
      sections: [
        {
          heading: "Sürüş için kompakt koruma.",
          text: "Moto Dash Cam TR V2, motosiklet kurulumunu kalabalıklaştırmadan kayıt kabiliyeti ekleyen kompakt bir kamera çözümü olarak tasarlanır.",
        },
        {
          heading: "Full HD 1080P kayıt.",
          text: "Full HD 1080P kayıt, günlük sürüşlerde ve uzun yolculuklarda yol anlarını net detaylarla kaydetmeye yardımcı olur.",
        },
        {
          heading: "Mobil uygulama üzerinden bağlanın.",
          text: "Wi-Fi mobil uygulama bağlantısı, cihaz yapılandırmasına bağlı olarak görüntüleme, kontrol ve dosya erişimi süreçlerini destekler.",
        },
        {
          heading: "Değişen hava koşulları için tasarlandı.",
          text: "IP66 suya dayanıklılık, değişen hava ve yol koşullarında motosiklet kullanımını destekler.",
        },
        {
          heading: "Kesintisiz kayıt desteği.",
          text: "Döngüsel kayıt, gerektiğinde eski görüntülerin üzerine yazarak depolama yönetimine yardımcı olur.",
        },
        {
          heading: "TF kart depolama.",
          text: "TF kart desteği, kart kapasitesi ve yapılandırmaya bağlı olarak kayıt görüntüleri için yerel depolama sağlar.",
        },
      ],
      specs: [
        { label: "Ürün adı", value: "Moto Dash Cam TR V2" },
        { label: "Kategori", value: "Motosiklet Akıllı Sistemleri" },
        { label: "Ürün tipi", value: "Motosiklet araç kamerası" },
        { label: "Kayıt", value: "Full HD 1080P" },
        { label: "Bağlantı", value: "Wi-Fi mobil uygulama bağlantısı" },
        { label: "Suya dayanıklılık", value: "IP66" },
        { label: "Kayıt modu", value: "Döngüsel kayıt" },
        { label: "Depolama", value: "TF kart depolama" },
        { label: "Durum", value: "Yayına hazır / içerik mevcut" },
      ],
      specsTitle: "Teknik özellikler",
      packageTitle: "Paket içeriği",
      packageNote:
        "Paket içeriği yapılandırmaya göre değişebilir. Sipariş veya montaj öncesinde final kit içeriğini doğrulayın.",
      galleryTitle: "Ürün galerisi",
      galleryNote: "Resmi görseller hazır olduğunda ürün fotoğrafları eklenecektir.",
      inquiryTitle: "Bu motosiklet sistemiyle ilgileniyor musunuz?",
      inquiryText:
        "Motosiklet modelinizi, montaj ihtiyacınızı ve istediğiniz özellikleri paylaşın. Apollon ürün bilgisi, montaj yönlendirmesi ve bayi/distribütör iletişimi konusunda yardımcı olabilir.",
      inquiryPrimary: "Ürün Bilgisi Al",
      inquirySecondary: "Montaj / Bayi Bilgisi İçin İletişime Geç",
      backLabel: "Motosiklet Akıllı Sistemleri",
      metaTitle: "Moto Dash Cam TR V2 Motosiklet Kamerası | Apollon",
      metaDescription:
        "Full HD 1080P kayıt, Wi-Fi mobil uygulama bağlantısı, IP66 suya dayanıklılık, döngüsel kayıt ve TF kart depolama sunan Moto Dash Cam TR V2 modelini keşfedin.",
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
              href={`/${locale}/products/motorcycle-smart-systems`}
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
          <div className="mx-auto max-w-3xl">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {c.promise}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Key Features */}
      <section className="border-t border-border/30 py-20">
        <div className="section-container">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
            {/* Feature list */}
            <div className="space-y-6">
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
            </div>

            {/* Product visual placeholder */}
            <div className="space-y-4">
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
          </div>
        </div>
      </section>

      {/* 4. Feature Sections */}
      <section className="border-t border-border/30 py-20">
        <div className="section-container space-y-6">
          <div className="mb-10 space-y-3">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-bronze/40" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-bronze/70">
                {locale === "tr" ? "Özellikler" : "Features"}
              </span>
            </div>
            <h2 className="font-heading text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl pb-[0.1em]">
              {c.sectionsHeading}
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {c.sections.map((section, i) => (
              <div key={i} className="glass-card rounded-sm p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-bronze/35 tabular-nums">
                    0{i + 1}
                  </span>
                  <span className="h-px flex-1 bg-bronze/10" />
                </div>
                <h3 className="font-heading text-sm font-semibold text-foreground leading-[1.3]">
                  {section.heading}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{section.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Technical Specs */}
      <section className="border-t border-border/30 py-20">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="space-y-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-bronze/40" />
                  <span className="text-xs font-medium uppercase tracking-[0.3em] text-bronze/70">
                    {locale === "tr" ? "Teknik Detaylar" : "Technical Details"}
                  </span>
                </div>
                <h2 className="font-heading text-2xl font-bold leading-[1.15] tracking-tight md:text-3xl pb-[0.1em]">
                  {c.specsTitle}
                </h2>
              </div>
              <SpecsTable specs={c.specs} />
            </div>

            {/* Package + Gallery */}
            <div className="space-y-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-bronze/40" />
                  <span className="text-xs font-medium uppercase tracking-[0.3em] text-bronze/70">
                    {locale === "tr" ? "Paket" : "Package"}
                  </span>
                </div>
                <h2 className="font-heading text-2xl font-bold leading-[1.15] tracking-tight md:text-3xl pb-[0.1em]">
                  {c.packageTitle}
                </h2>
              </div>
              <div className="glass-card rounded-sm p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">{c.packageNote}</p>
              </div>

              {/* Gallery placeholder */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-bronze/40" />
                  <span className="text-xs font-medium uppercase tracking-[0.3em] text-bronze/70">
                    {locale === "tr" ? "Galeri" : "Gallery"}
                  </span>
                </div>
                <h2 className="font-heading text-2xl font-bold leading-[1.15] tracking-tight md:text-3xl pb-[0.1em]">
                  {c.galleryTitle}
                </h2>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Inquiry CTA */}
      <section className="border-t border-border/30 py-24">
        <div className="section-container">
          <div className="mx-auto max-w-2xl space-y-10 text-center">
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
          </div>
        </div>
      </section>
    </main>
  )
}
