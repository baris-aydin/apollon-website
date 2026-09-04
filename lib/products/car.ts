// ─── Car Technology Systems — product catalogue ──────────────────────────────
//
// Single source of truth for the Car family. Consumed by:
//   app/[locale]/products/car/page.tsx          (landing page)
//   app/[locale]/products/car/[slug]/page.tsx   (detail pages)
//   components/forms/ContactForm.tsx            (product selector)
//
// Content rules for this catalogue:
//  • Every feature string comes verbatim from the official Apollon catalogue.
//  • Descriptions restate those features only — no invented technical claims.
//  • `techSpecs` carry the hardware figures published on the official Apollon
//    storefront listings (2026-09-04): resolution, camera layout, display size,
//    memory configuration, connectivity, warranty. Nothing beyond those
//    listings is asserted — no CPU model, sensor, dimensions, IP rating,
//    voltage, frame rate or OS version appears anywhere.
//  • Where the storefront listing contradicts an earlier product document, the
//    listing wins (it is the newer source) and the change is noted in place.
//  • `cataloguePriceReferenceUsd` is reference data only. The site is a
//    showroom without public pricing, so it is never rendered.
//  • Product photography exists for VX1–VX5. Products without images fall
//    back to a neutral placeholder; `imageBase` records where their assets
//    belong. See docs/image-sources/car-technology-systems.md.

import { type Locale } from "@/lib/i18n"

export type CarProductGroup = "connected-cameras" | "premium-multimedia"

export type ProductImage = { src: string; alt: string }

export type FeatureSection = { heading: string; text: string }

export type SpecEntry = { label: string; value: string }

export type CarProductLocale = {
  /** Product type, or the configuration string for the Q-series. */
  productType: string
  /** Shorter label for listing cards. Falls back to `productType`. */
  cardType?: string
  shortDescription: string
  /** Full official description, rendered as the detail-page intro. */
  descriptionParagraphs?: string[]
  /** Bullet-separated one-line spec summary from the official document. */
  summary?: string
  features: string[]
  /** Official feature explanations, rendered as the "what it offers" cards. */
  featureSections?: FeatureSection[]
  /** 2–4 card highlights — a subset of `features`. */
  highlights: string[]
  /**
   * Hardware figures from the official storefront listing, rendered as extra
   * rows in the detail page's product-information table.
   */
  techSpecs?: SpecEntry[]
  mainImage?: ProductImage
  galleryImages?: ProductImage[]
  metaTitle: string
  metaDescription: string
}

export type CarProduct = {
  slug: string
  /** Official model name — identical in every locale, never translated. */
  name: string
  group: CarProductGroup
  /** Q-series only — shown as a model/configuration subtitle. */
  configuration?: string
  /** Full official designation where it differs from the catalogue name. */
  modelReference?: string
  cataloguePriceReferenceUsd: number
  /** Asset folder for this product's photography. */
  imageBase: string
  en: CarProductLocale
  tr: CarProductLocale
}

export const CAR_PRODUCTS: CarProduct[] = [
  // ── Connected Cameras & Driving Vision ────────────────────────────────────
  {
    // Official product document received 2026-08-30. Supersedes the earlier
    // provisional entry, which positioned VX5 as a 4G dual-camera system with
    // GPS, fleet tracking and cloud access. The official document lists none
    // of those; it describes a 3-channel 4K WiFi system.
    slug: "vx5",
    // The paired model designation is part of the public name as of the
    // 2026-09-04 storefront listings, so it is no longer a separate
    // `modelReference` row that would repeat the name back to the reader.
    name: "APOLLON VX5/B5",
    group: "connected-cameras",
    cataloguePriceReferenceUsd: 150,
    imageBase: "/images/car-safety-and-security/vx5",
    en: {
      productType: "4K Front + Cabin + Rear Triple-Camera Wi-Fi Vehicle Camera",
      cardType: "4K Triple-Camera Wi-Fi System",
      shortDescription:
        "A three-channel 4K dash camera system covering front, cabin and rear, with night vision, Wi-Fi, parking mode and a G-sensor.",
      descriptionParagraphs: [
        "Front. Cabin. Rear. Three separate angles, one single system.",
        "APOLLON VX5/B5 is one of the most comprehensive recording solutions in the VX series. It brings a 3-channel camera layout, covering front, cabin and rear, together with 4K resolution, Wi-Fi, night vision, parking mode and a G-sensor.",
      ],
      summary:
        "3 Channels • Front + Cabin + Rear • 4K Resolution • Night Vision • Wi-Fi • Parking Mode • G-Sensor",
      features: [
        "4K Ultra HD",
        "Front + Cabin + Rear Triple-Camera System",
        "Adjustable Cabin Camera",
        "External Rear Camera",
        "4K Resolution",
        "Night Vision",
        "Wi-Fi",
        "Parking Mode",
        "G-Sensor",
        "Loop Recording",
      ],
      featureSections: [
        {
          heading: "Front + Cabin + Rear Triple-Camera System",
          text: "Covers three areas under one system: the road ahead, the interior cabin and the vehicle rear.",
        },
        {
          heading: "Adjustable Cabin Camera",
          text: "The cabin camera can be positioned to suit different interior viewing angles.",
        },
        {
          heading: "External Rear Camera",
          text: "A separate rear camera covers the road behind the vehicle.",
        },
        {
          heading: "4K Resolution",
          text: "High-resolution recording technology delivers a greater level of detail in your footage.",
        },
        {
          heading: "Night Vision",
          text: "Supports recording performance on night drives and in low-light conditions.",
        },
        {
          heading: "Wi-Fi",
          text: "Wireless connectivity features make the system easier to use.",
        },
        {
          heading: "Parking Mode",
          text: "Supports security functions while your vehicle is parked. Parking mode/surveillance functionality requires appropriate installation and electrical connection.",
        },
        {
          heading: "G-Sensor",
          text: "When a sudden impact or vibration is detected, the G-Sensor helps protect the relevant recording from being overwritten during loop recording.",
        },
        {
          heading: "Loop Recording",
          text: "Helps preserve continuous recording once the memory is full.",
        },
      ],
      highlights: ["4K", "Triple Camera", "Wi-Fi", "Night Vision"],
      techSpecs: [
        { label: "Video resolution", value: "4K Ultra HD / 2160p" },
        { label: "Camera configuration", value: "Front + Cabin + Rear (3 cameras)" },
        { label: "Cabin camera", value: "Adjustable" },
        { label: "Rear camera", value: "External" },
        { label: "Display", value: "Built-in display, 3.0\"" },
        { label: "Connectivity", value: "Wi-Fi" },
        { label: "Connection", value: "USB Type-C" },
        { label: "Memory configuration", value: "128 GB" },
        { label: "Parking mode requirement", value: "Appropriate installation and electrical connection" },
        { label: "Vehicle compatibility", value: "Universal" },
        { label: "Warranty", value: "2 years" },
      ],
      mainImage: {
        src: "/images/car-safety-and-security/vx5/main.png",
        alt: "APOLLON VX5/B5 front camera, front view showing the lens, the 4K WiFi marking and the windscreen mount",
      },
      galleryImages: [
        {
          src: "/images/car-safety-and-security/vx5/gallery/vx5-gallery-01.png",
          alt: "APOLLON VX5/B5 front camera at an angle, showing the cylindrical body, the lens and the windscreen mount",
        },
        {
          src: "/images/car-safety-and-security/vx5/gallery/vx5-gallery-02.png",
          alt: "APOLLON VX5/B5 unit with the display open, showing the rotating cabin camera and the USB-C and AV ports on the mount",
        },
        {
          src: "/images/car-safety-and-security/vx5/gallery/vx5-gallery-03.png",
          alt: "APOLLON VX5/B5 front camera from the opposite angle, showing the lens, the microphone opening and the 4K WiFi marking",
        },
        {
          src: "/images/car-safety-and-security/vx5/gallery/vx5-gallery-04.png",
          alt: "APOLLON VX5/B5 front camera in three-quarter view, showing the lens with its protective film and the mount label",
        },
        {
          src: "/images/car-safety-and-security/vx5/gallery/vx5-gallery-05.png",
          alt: "APOLLON VX5/B5 rear three-quarter view, showing the display, the memory card slot and the cabin camera",
        },
        {
          src: "/images/car-safety-and-security/vx5/gallery/vx5-gallery-06.png",
          alt: "APOLLON VX5/B5 in use, with a live view and an on-screen timestamp shown on the display",
        },
        {
          src: "/images/car-safety-and-security/vx5/gallery/vx5-gallery-07.png",
          alt: "APOLLON VX5/B5 accessories: additional camera with its mounting bracket, plus the in-car charger and USB-C cable",
        },
      ],
      metaTitle:
        "APOLLON VX5/B5 — 4K Front + Cabin + Rear Triple-Camera Wi-Fi Vehicle Camera | Apollon Entertainment Systems",
      metaDescription:
        "APOLLON VX5/B5 is a 3-channel 4K dash camera system recording front, cabin and rear, with night vision, Wi-Fi, parking mode, a G-sensor and loop recording.",
    },
    tr: {
      productType: "4K Ön + Kabin + Arka 3 Kameralı Wi-Fi Araç Kamerası",
      cardType: "4K 3 Kameralı Wi-Fi Sistem",
      shortDescription:
        "Ön, kabin ve arkayı kapsayan; gece görüşü, Wi-Fi, park modu ve G-sensörü sunan 3 kanallı 4K araç kamera sistemi.",
      descriptionParagraphs: [
        "Ön. Kabin. Arka. Üç farklı açı, tek bir sistem.",
        "APOLLON VX5/B5, VX serisinin kapsamlı kayıt çözümlerinden biridir. Ön + kabin + arka olmak üzere 3 kanallı kamera yapısını 4K çözünürlük, Wi-Fi, gece görüşü, park modu ve G-Sensörüyle bir araya getirir.",
      ],
      summary:
        "3 Kanal • Ön + Kabin + Arka • 4K Çözünürlük • Gece Görüşü • Wi-Fi • Park Modu • G-Sensörü",
      features: [
        "4K Ultra HD",
        "Ön + Kabin + Arka 3 Kamera Sistemi",
        "Ayarlanabilir Kabin Kamerası",
        "Harici Arka Kamera",
        "4K Çözünürlük",
        "Gece Görüşü",
        "Wi-Fi",
        "Park Modu",
        "G-Sensörü",
        "Döngüsel Kayıt",
      ],
      featureSections: [
        {
          heading: "Ön + Kabin + Arka 3 Kamera Sistemi",
          text: "Tek sistem altında üç bölgeyi kapsar: yolun önü, iç kabin ve aracın arkası.",
        },
        {
          heading: "Ayarlanabilir Kabin Kamerası",
          text: "Kabin kamerası, farklı iç mekân görüş açılarına uyacak şekilde konumlandırılabilir.",
        },
        {
          heading: "Harici Arka Kamera",
          text: "Ayrı bir arka kamera, aracın arkasındaki yolu kapsar.",
        },
        {
          heading: "4K Çözünürlük",
          text: "Yüksek çözünürlüklü kayıt teknolojisiyle görüntülerde daha yüksek detay seviyesi sağlar.",
        },
        {
          heading: "Gece Görüşü",
          text: "Gece sürüşlerinde ve düşük ışıklı ortamlarda kayıt performansını destekler.",
        },
        {
          heading: "Wi-Fi",
          text: "Kablosuz bağlantı özellikleriyle kullanım kolaylığı sağlar.",
        },
        {
          heading: "Park Modu",
          text: "Aracınız park halindeyken güvenlik fonksiyonlarını destekler. Park modu/gözetimi özelliğinin kullanılabilmesi uygun montaj ve elektrik bağlantısına bağlıdır.",
        },
        {
          heading: "G-Sensörü",
          text: "Ani darbe veya sarsıntı algılandığında ilgili kaydın korunmasına yardımcı olur ve önemli görüntülerin döngüsel kayıt sırasında üzerine yazılmasını önlemeye yardımcı olur.",
        },
        {
          heading: "Döngüsel Kayıt",
          text: "Hafıza dolduğunda kayıt sürekliliğinin korunmasına yardımcı olur.",
        },
      ],
      highlights: ["4K", "Üç Kamera", "Wi-Fi", "Gece Görüşü"],
      techSpecs: [
        { label: "Video çözünürlüğü", value: "4K Ultra HD / 2160p" },
        { label: "Kamera yapısı", value: "Ön + Kabin + Arka (3 kamera)" },
        { label: "Kabin kamerası", value: "Ayarlanabilir" },
        { label: "Arka kamera", value: "Harici" },
        { label: "Ekran", value: "Ekranlı tasarım, 3.0\"" },
        { label: "Bağlantı", value: "Wi-Fi" },
        { label: "Bağlantı arayüzü", value: "USB Type-C" },
        { label: "Hafıza yapılandırması", value: "128 GB" },
        { label: "Park modu gereksinimi", value: "Uygun montaj ve elektrik bağlantısı" },
        { label: "Araç uyumluluğu", value: "Universal" },
        { label: "Garanti", value: "2 yıl" },
      ],
      mainImage: {
        src: "/images/car-safety-and-security/vx5/main.png",
        alt: "APOLLON VX5/B5 ön kamerası; lens, 4K WiFi işareti ve ön cam aparatıyla önden görünüm",
      },
      galleryImages: [
        {
          src: "/images/car-safety-and-security/vx5/gallery/vx5-gallery-01.png",
          alt: "APOLLON VX5/B5 ön kamerası açılı görünümde; silindirik gövde, lens ve ön cam aparatı",
        },
        {
          src: "/images/car-safety-and-security/vx5/gallery/vx5-gallery-02.png",
          alt: "APOLLON VX5/B5 ünitesi ekran açık hâldeyken; döner kabin kamerası ve aparat üzerindeki USB-C ile AV portları",
        },
        {
          src: "/images/car-safety-and-security/vx5/gallery/vx5-gallery-03.png",
          alt: "APOLLON VX5/B5 ön kamerası ters açıdan; lens, mikrofon deliği ve 4K WiFi işareti",
        },
        {
          src: "/images/car-safety-and-security/vx5/gallery/vx5-gallery-04.png",
          alt: "APOLLON VX5/B5 ön kamerası üçte bir görünümde; koruyucu filmiyle lens ve aparat etiketi",
        },
        {
          src: "/images/car-safety-and-security/vx5/gallery/vx5-gallery-05.png",
          alt: "APOLLON VX5/B5 arka üçte bir görünüm; ekran, hafıza kartı yuvası ve kabin kamerası",
        },
        {
          src: "/images/car-safety-and-security/vx5/gallery/vx5-gallery-06.png",
          alt: "APOLLON VX5/B5 kullanım hâlinde; ekranda canlı görüntü ve zaman damgası",
        },
        {
          src: "/images/car-safety-and-security/vx5/gallery/vx5-gallery-07.png",
          alt: "APOLLON VX5/B5 aksesuarları: montaj aparatıyla ek kamera, araç içi şarj adaptörü ve USB-C kablo",
        },
      ],
      metaTitle:
        "APOLLON VX5/B5 — 4K Ön + Kabin + Arka 3 Kameralı Wi-Fi Araç Kamerası | Apollon Entertainment Systems",
      metaDescription:
        "APOLLON VX5/B5; ön, kabin ve arkayı kaydeden, gece görüşü, Wi-Fi, park modu, G-sensörü ve döngüsel kayıt sunan 3 kanallı 4K araç kamera sistemidir.",
    },
  },
  {
    // Official product document received 2026-08-30. Supersedes the earlier
    // provisional entry, which positioned VX2 as a 4G / GPS camera. The
    // official document lists neither 4G nor GPS for this model.
    slug: "vx2",
    name: "APOLLON VX2/F6",
    group: "connected-cameras",
    cataloguePriceReferenceUsd: 160,
    imageBase: "/images/car-safety-and-security/vx2",
    en: {
      productType: "1080P Front + Rear + Cabin Triple-Camera Vehicle Camera",
      cardType: "1080P Triple-Camera System",
      shortDescription:
        "A three-camera dash camera system combining Wi-Fi connectivity, 1080P video, night vision, parking surveillance and mobile app control.",
      descriptionParagraphs: [
        "Do not settle for a single angle. Record your journey with three separate cameras.",
        "APOLLON VX2/F6 is built for drivers who want comprehensive recording, from everyday use to long journeys, combining a three-camera layout with Wi-Fi connectivity, 1080P image quality, night vision and mobile app support.",
      ],
      summary:
        "3 Cameras • Wi-Fi • 1080P • Mobile App • Night Vision • Parking Surveillance • Emergency Recording Lock",
      features: [
        "3-Camera System",
        "Wi-Fi Connectivity",
        "1080P Video",
        "Mobile App",
        "Night Vision",
        "Parking Surveillance",
        "Loop Recording",
        "Emergency Recording Lock",
      ],
      featureSections: [
        {
          heading: "3-Camera System",
          text: "Records three separate areas under one system: the road ahead, the vehicle rear and the interior cabin.",
        },
        {
          heading: "Wi-Fi Connectivity",
          text: "Wireless connectivity lets you make more practical use of the device's smart features.",
        },
        {
          heading: "1080P Video",
          text: "Records clear, usable footage while you drive.",
        },
        {
          heading: "Mobile App",
          text: "Access supported connection and recording features through the compatible mobile application.",
        },
        {
          heading: "Night Vision",
          text: "Supports recording performance in low-light conditions.",
        },
        {
          heading: "Parking Surveillance",
          text: "Supports the security of your vehicle while it is parked, not only while you are driving. Parking mode/surveillance functionality requires appropriate installation and electrical connection.",
        },
        {
          heading: "Loop Recording",
          text: "Helps use storage efficiently for an uninterrupted recording experience.",
        },
        {
          heading: "Emergency Recording Lock",
          text: "Helps protect important recordings from being overwritten during loop recording.",
        },
      ],
      highlights: ["1080P", "Triple Camera", "Wi-Fi", "Night Vision"],
      techSpecs: [
        { label: "Video resolution", value: "1080p" },
        { label: "Camera configuration", value: "Front + Rear + Cabin (3 cameras)" },
        { label: "Display", value: "Built-in display, 3.0\"" },
        { label: "Connectivity", value: "Wi-Fi" },
        { label: "Memory configuration", value: "128 GB" },
        { label: "Parking mode requirement", value: "Appropriate installation and electrical connection" },
        { label: "Vehicle compatibility", value: "Universal" },
        { label: "Warranty", value: "2 years" },
      ],
      mainImage: {
        src: "/images/car-safety-and-security/vx2/main.png",
        alt: "APOLLON VX2/F6 front view, showing the wide-angle main lens beside the attached second camera module",
      },
      galleryImages: [
        {
          src: "/images/car-safety-and-security/vx2/gallery/vx2-gallery-01.png",
          alt: "APOLLON VX2/F6 angled front view, showing the main lens, the attached second camera and the windscreen mount",
        },
        {
          src: "/images/car-safety-and-security/vx2/gallery/vx2-gallery-02.png",
          alt: "APOLLON VX2/F6 angled rear view, showing the display, the memory card slot and the USB-C and jack ports on the mount",
        },
        {
          src: "/images/car-safety-and-security/vx2/gallery/vx2-gallery-03.png",
          alt: "APOLLON VX2/F6 rear view, showing the full display and the rotating second camera module",
        },
        {
          src: "/images/car-safety-and-security/vx2/gallery/vx2-gallery-04.png",
          alt: "APOLLON VX2/F6 accessories: additional camera with its mounting bracket, plus the in-car charger and USB-C cable",
        },
      ],
      metaTitle:
        "APOLLON VX2/F6 — 1080P Front + Rear + Cabin Triple-Camera Vehicle Camera | Apollon Entertainment Systems",
      metaDescription:
        "APOLLON VX2/F6 is a three-camera Wi-Fi dash camera system with 1080P video, mobile app support, night vision, parking surveillance, loop recording and an emergency recording lock.",
    },
    tr: {
      productType: "1080P Ön + Arka + Kabin 3 Kameralı Araç Kamerası",
      cardType: "1080P 3 Kameralı Sistem",
      shortDescription:
        "Wi-Fi bağlantısı, 1080P görüntü kalitesi, gece görüşü, park gözetimi ve mobil uygulama desteğini bir araya getiren üç kameralı araç kayıt sistemi.",
      descriptionParagraphs: [
        "Tek açıyla yetinmeyin. Yolculuğunuzu üç farklı kamerayla kayıt altına alın.",
        "APOLLON VX2/F6, 3 kameralı yapısı, Wi-Fi bağlantısı, 1080P görüntü kalitesi, gece görüşü ve mobil uygulama desteğiyle günlük kullanımdan uzun yolculuklara kadar kapsamlı kayıt isteyen sürücüler için tasarlanmıştır.",
      ],
      summary:
        "3 Kamera • Wi-Fi • 1080P • Mobil Uygulama • Gece Görüşü • Park Gözetimi • Acil Durum Kilidi",
      features: [
        "3 Kameralı Sistem",
        "Wi-Fi Bağlantısı",
        "1080P Görüntü Kalitesi",
        "Mobil Uygulama",
        "Gece Görüşü",
        "Park Gözetimi",
        "Döngüsel Kayıt",
        "Acil Durum Kilidi",
      ],
      featureSections: [
        {
          heading: "3 Kameralı Sistem",
          text: "Tek sistem altında üç ayrı bölgeyi kaydeder: yolun önü, aracın arkası ve iç kabin.",
        },
        {
          heading: "Wi-Fi Bağlantısı",
          text: "Kablosuz bağlantıyla cihazın akıllı özelliklerinden daha pratik şekilde yararlanabilirsiniz.",
        },
        {
          heading: "1080P Görüntü Kalitesi",
          text: "Sürüş sırasında net ve kullanılabilir görüntüler kaydeder.",
        },
        {
          heading: "Mobil Uygulama",
          text: "Desteklenen bağlantı ve kayıt özelliklerine uyumlu mobil uygulama üzerinden erişin.",
        },
        {
          heading: "Gece Görüşü",
          text: "Düşük ışıklı ortamlarda kayıt performansını destekler.",
        },
        {
          heading: "Park Gözetimi",
          text: "Sadece sürüş sırasında değil, park halindeki aracın güvenliğini de destekler. Park modu/gözetimi özelliğinin kullanılabilmesi uygun montaj ve elektrik bağlantısına bağlıdır.",
        },
        {
          heading: "Döngüsel Kayıt",
          text: "Depolama alanının verimli kullanılmasına yardımcı olarak kesintisiz kayıt deneyimi sunar.",
        },
        {
          heading: "Acil Durum Kilidi",
          text: "Önemli görüntülerin döngüsel kayıt sırasında üzerine yazılmasını önlemeye yardımcı olur.",
        },
      ],
      highlights: ["1080P", "Üç Kamera", "Wi-Fi", "Gece Görüşü"],
      techSpecs: [
        { label: "Video çözünürlüğü", value: "1080p" },
        { label: "Kamera yapısı", value: "Ön + Arka + Kabin (3 kamera)" },
        { label: "Ekran", value: "Ekranlı tasarım, 3.0\"" },
        { label: "Bağlantı", value: "Wi-Fi" },
        { label: "Hafıza yapılandırması", value: "128 GB" },
        { label: "Park modu gereksinimi", value: "Uygun montaj ve elektrik bağlantısı" },
        { label: "Araç uyumluluğu", value: "Universal" },
        { label: "Garanti", value: "2 yıl" },
      ],
      mainImage: {
        src: "/images/car-safety-and-security/vx2/main.png",
        alt: "APOLLON VX2/F6 önden görünüm; geniş açılı ana lens ve yanına bağlanan ikinci kamera modülü",
      },
      galleryImages: [
        {
          src: "/images/car-safety-and-security/vx2/gallery/vx2-gallery-01.png",
          alt: "APOLLON VX2/F6 açılı önden görünüm; ana lens, bağlı ikinci kamera ve ön cam aparatı",
        },
        {
          src: "/images/car-safety-and-security/vx2/gallery/vx2-gallery-02.png",
          alt: "APOLLON VX2/F6 açılı arka görünüm; ekran, hafıza kartı yuvası ve aparat üzerindeki USB-C ile jak portları",
        },
        {
          src: "/images/car-safety-and-security/vx2/gallery/vx2-gallery-03.png",
          alt: "APOLLON VX2/F6 arkadan görünüm; ekranın tamamı ve döner ikinci kamera modülü",
        },
        {
          src: "/images/car-safety-and-security/vx2/gallery/vx2-gallery-04.png",
          alt: "APOLLON VX2/F6 aksesuarları: montaj aparatıyla ek kamera, araç içi şarj adaptörü ve USB-C kablo",
        },
      ],
      metaTitle:
        "APOLLON VX2/F6 — 1080P Ön + Arka + Kabin 3 Kameralı Araç Kamerası | Apollon Entertainment Systems",
      metaDescription:
        "APOLLON VX2/F6; 1080P görüntü kalitesi, mobil uygulama desteği, gece görüşü, park gözetimi, döngüsel kayıt ve acil durum kilidi sunan 3 kameralı Wi-Fi akıllı araç kayıt sistemidir.",
    },
  },
  {
    // Official product document received 2026-08-26. Supersedes the earlier
    // provisional catalogue entry (which listed Wi-Fi / G-Sensor / App Control
    // and made no mention of 4G, GPS, cloud access or fleet tracking).
    slug: "vx1",
    name: "APOLLON VX1/F8",
    group: "connected-cameras",
    cataloguePriceReferenceUsd: 170,
    imageBase: "/images/car-safety-and-security/vx1",
    en: {
      productType: "4G Front & Rear Smart Vehicle Camera",
      cardType: "4G Front & Rear Smart Camera",
      shortDescription:
        "A 4G smart dual-camera vehicle recording and tracking system combining GPS, 1080P recording, cloud access, fleet tracking and parking surveillance.",
      descriptionParagraphs: [
        "Stay in control of your vehicle, even when you are not in it.",
        "APOLLON VX1/F8 is an advanced vehicle security and tracking solution that brings 4G connectivity, GPS, a dual-camera system, 1080P recording, fleet tracking and cloud access together in a single platform. Alongside personal use, it is a capable option for businesses that need to monitor their vehicles remotely.",
      ],
      summary:
        "1080P • Front + Rear Cameras • 4G • GPS • Wi-Fi • Remote Viewing • Cloud Access • Parking Surveillance",
      features: [
        "1080P Recording",
        "Front + Rear Dual-Camera System",
        "4G Connectivity",
        "GPS Location Tracking",
        "Wi-Fi",
        "Remote Viewing",
        "Cloud Access",
        "170° Wide-Angle View",
        "Loop Recording",
        "Parking Surveillance",
      ],
      featureSections: [
        {
          heading: "4G Connectivity",
          text: "Lets you take advantage of connected vehicle technologies and remote access features.",
        },
        {
          heading: "GPS Location Tracking",
          text: "Location tracking that strengthens control over your vehicle. Suitable for individual vehicle use and for fleet-oriented monitoring scenarios.",
        },
        {
          heading: "Wi-Fi",
          text: "Wireless connectivity for setup and for transferring footage to a compatible device.",
        },
        {
          heading: "Dual-Camera System",
          text: "Provides more comprehensive recording coverage than a single-camera setup.",
        },
        {
          heading: "1080P Recording",
          text: "Captures everyday journeys and important moments clearly.",
        },
        {
          heading: "Remote Viewing & Cloud Access",
          text: "4G connectivity enables remote viewing and cloud-based access through the supported system and application.",
        },
        {
          heading: "Parking Surveillance",
          text: "Adds an extra layer of security while your vehicle is parked. Parking mode/surveillance functionality requires appropriate installation and electrical connection.",
        },
        {
          heading: "Loop Recording",
          text: "Simplifies storage management and supports continuous recording.",
        },
        {
          heading: "Remote Access",
          text: "Smart connectivity that helps you keep track of your vehicle from a distance.",
        },
      ],
      highlights: ["1080P", "Dual Camera", "4G", "GPS", "Wi-Fi"],
      techSpecs: [
        { label: "Video resolution", value: "1080p" },
        { label: "Camera configuration", value: "Front + Rear (2 cameras)" },
        { label: "Viewing angle", value: "170° wide-angle" },
        { label: "Display", value: "3.0\"" },
        { label: "Connectivity", value: "4G • GPS • Wi-Fi" },
        { label: "Remote viewing", value: "Supported over 4G" },
        { label: "Cloud access", value: "Supported through the compatible system" },
        { label: "Memory configuration", value: "128 GB" },
        { label: "Parking mode requirement", value: "Appropriate installation and electrical connection" },
        { label: "Vehicle compatibility", value: "Universal" },
        { label: "Warranty", value: "2 years" },
      ],
      mainImage: {
        src: "/images/car-safety-and-security/vx1/main.png",
        alt: "APOLLON VX1/F8 dash camera, front view showing the wide-angle lens and windscreen mount",
      },
      galleryImages: [
        {
          src: "/images/car-safety-and-security/vx1/gallery/vx1-gallery-01.png",
          alt: "APOLLON VX1/F8 second camera with its mounting bracket, connection lead and power cable",
        },
        {
          src: "/images/car-safety-and-security/vx1/gallery/vx1-gallery-02.png",
          alt: "APOLLON VX1/F8 angled rear view showing the display, memory card slot and the mount connection ports",
        },
        {
          src: "/images/car-safety-and-security/vx1/gallery/vx1-gallery-03.png",
          alt: "APOLLON VX1/F8 rear view showing the display and the connection ports on top of the mount",
        },
        {
          src: "/images/car-safety-and-security/vx1/gallery/vx1-gallery-04.png",
          alt: "APOLLON VX1/F8 angled rear view showing the display and the product label on the side of the unit",
        },
        {
          src: "/images/car-safety-and-security/vx1/gallery/vx1-gallery-05.png",
          alt: "APOLLON VX1/F8 in use, with the display showing a live camera view and on-screen timestamp",
        },
      ],
      metaTitle:
        "APOLLON VX1/F8 — 4G Front & Rear Smart Vehicle Camera | Apollon Entertainment Systems",
      metaDescription:
        "APOLLON VX1/F8 brings 4G connectivity, GPS, a dual-camera system, 1080P recording, cloud access, fleet tracking, parking surveillance, loop recording and remote notifications together in one vehicle security and tracking platform.",
    },
    tr: {
      productType: "4G Ön ve Arka Akıllı Araç Kamerası",
      cardType: "4G Ön ve Arka Akıllı Kamera",
      shortDescription:
        "GPS, 1080P kayıt, bulut erişimi, filo takibi ve park gözetimini bir araya getiren 4G akıllı çift kameralı araç kayıt ve takip sistemi.",
      descriptionParagraphs: [
        "Aracınız siz yanında değilken bile kontrolünüzden çıkmasın.",
        "APOLLON VX1/F8; 4G bağlantısı, GPS, çift kamera, 1080P kayıt, filo takibi ve bulut erişimini tek sistemde bir araya getiren gelişmiş araç güvenlik ve takip çözümüdür. Bireysel kullanımın yanı sıra araçlarını uzaktan takip etmek isteyen işletmeler için de güçlü bir alternatif sunar.",
      ],
      summary:
        "1080P • Ön + Arka Kamera • 4G • GPS • Wi-Fi • Uzaktan Görüntüleme • Bulut Erişimi • Park Gözetimi",
      features: [
        "1080P Kayıt",
        "Ön + Arka 2 Kamera Sistemi",
        "4G Bağlantısı",
        "GPS Konum Takibi",
        "Wi-Fi",
        "Uzaktan Görüntüleme",
        "Bulut Erişimi",
        "170° Geniş Açılı Görüş",
        "Döngüsel Kayıt",
        "Park Gözetimi",
      ],
      featureSections: [
        {
          heading: "4G Bağlantısı",
          text: "Bağlantılı araç teknolojilerinden ve uzaktan erişim özelliklerinden yararlanmanızı sağlar.",
        },
        {
          heading: "GPS Konum Takibi",
          text: "Aracınızın kontrolünü güçlendiren konum takibi. Bireysel araç kullanımının yanı sıra filo odaklı takip senaryoları için de uygundur.",
        },
        {
          heading: "Wi-Fi",
          text: "Kurulum ve görüntülerin uyumlu bir cihaza aktarılması için kablosuz bağlantı sunar.",
        },
        {
          heading: "Çift Kameralı Sistem",
          text: "Tek kameraya kıyasla daha kapsamlı bir kayıt deneyimi sunar.",
        },
        {
          heading: "1080P Kayıt",
          text: "Günlük sürüşlerin ve önemli anların net şekilde kayıt altına alınmasını sağlar.",
        },
        {
          heading: "Uzaktan Görüntüleme ve Bulut Erişimi",
          text: "4G bağlantısı, desteklenen sistem ve uygulama üzerinden uzaktan görüntüleme ve bulut tabanlı erişim sağlar.",
        },
        {
          heading: "Park Gözetimi",
          text: "Park halindeki aracınız için ek bir güvenlik katmanı sağlar. Park modu/gözetimi özelliğinin kullanılabilmesi uygun montaj ve elektrik bağlantısına bağlıdır.",
        },
        {
          heading: "Döngüsel Kayıt",
          text: "Hafıza yönetimini kolaylaştırarak sürekli kayıt kullanımını destekler.",
        },
        {
          heading: "Uzaktan Erişim",
          text: "Aracınızı uzaktan takip etmenize yardımcı olan bağlantılı kullanım altyapısı sunar.",
        },
      ],
      highlights: ["1080P", "Çift Kamera", "4G", "GPS", "Wi-Fi"],
      techSpecs: [
        { label: "Video çözünürlüğü", value: "1080p" },
        { label: "Kamera yapısı", value: "Ön + Arka (2 kamera)" },
        { label: "Görüş açısı", value: "170° geniş açı" },
        { label: "Ekran", value: "3.0\"" },
        { label: "Bağlantı", value: "4G • GPS • Wi-Fi" },
        { label: "Uzaktan görüntüleme", value: "4G üzerinden destekleniyor" },
        { label: "Bulut erişimi", value: "Uyumlu sistem üzerinden destekleniyor" },
        { label: "Hafıza yapılandırması", value: "128 GB" },
        { label: "Park modu gereksinimi", value: "Uygun montaj ve elektrik bağlantısı" },
        { label: "Araç uyumluluğu", value: "Universal" },
        { label: "Garanti", value: "2 yıl" },
      ],
      mainImage: {
        src: "/images/car-safety-and-security/vx1/main.png",
        alt: "APOLLON VX1/F8 araç kamerası; geniş açılı lensi ve ön cam bağlantısıyla önden görünüm",
      },
      galleryImages: [
        {
          src: "/images/car-safety-and-security/vx1/gallery/vx1-gallery-01.png",
          alt: "APOLLON VX1/F8 ikinci kamerası; montaj aparatı, bağlantı kablosu ve güç kablosuyla birlikte",
        },
        {
          src: "/images/car-safety-and-security/vx1/gallery/vx1-gallery-02.png",
          alt: "APOLLON VX1/F8 açılı arka görünüm; ekran, hafıza kartı yuvası ve bağlantı portları",
        },
        {
          src: "/images/car-safety-and-security/vx1/gallery/vx1-gallery-03.png",
          alt: "APOLLON VX1/F8 arkadan görünüm; ekran ve bağlantı aparatı üzerindeki portlar",
        },
        {
          src: "/images/car-safety-and-security/vx1/gallery/vx1-gallery-04.png",
          alt: "APOLLON VX1/F8 açılı arka görünüm; ekran ve cihazın yan yüzeyindeki ürün etiketi",
        },
        {
          src: "/images/car-safety-and-security/vx1/gallery/vx1-gallery-05.png",
          alt: "APOLLON VX1/F8 kullanım hâlinde; ekranda canlı kamera görüntüsü ve zaman damgası",
        },
      ],
      metaTitle:
        "APOLLON VX1/F8 — 4G Ön ve Arka Akıllı Araç Kamerası | Apollon Entertainment Systems",
      metaDescription:
        "APOLLON VX1/F8; 4G bağlantısı, GPS, çift kamera, 1080P kayıt, bulut erişimi, filo takibi, park gözetimi, döngüsel kayıt ve uzaktan bildirim özelliklerini tek bir araç güvenlik ve takip sisteminde birleştirir.",
    },
  },
  {
    // Official product document received 2026-08-30, revised against the
    // 2026-09-04 storefront listing. The listing supersedes the document on
    // resolution: it is a 2K Quad HD (1440p) camera, not 1080P. The listing
    // also confirms a front + rear pair, audio recording and a screenless body.
    slug: "vx3",
    name: "APOLLON VX3/B4",
    group: "connected-cameras",
    cataloguePriceReferenceUsd: 180,
    imageBase: "/images/car-safety-and-security/vx3",
    en: {
      productType: "2K Front + Rear 4G GPS Vehicle Camera",
      cardType: "2K Dual-Camera 4G GPS System",
      shortDescription:
        "A 4G-connected dual-camera vehicle security system with GPS, 2K Quad HD recording, remote access, app control and parking surveillance.",
      descriptionParagraphs: [
        "More than a recorder: a smart camera system that keeps you connected to your vehicle.",
        "APOLLON VX3/B4 brings 4G connectivity, GPS, 2K Quad HD recording, a front and rear camera pair, remote access and app control together. It is a strong solution developed for users who take connected vehicle security seriously.",
      ],
      summary:
        "2K Quad HD • Front + Rear Cameras • 4G • GPS • Remote Access • Audio Recording • Parking Surveillance",
      features: [
        "4G Connectivity",
        "GPS",
        "2K Quad HD Recording",
        "Front + Rear Cameras",
        "Remote Access",
        "App Control",
        "Audio Recording",
        "Compact Screenless Design",
        "External Rear Camera",
        "Night Vision",
        "Parking Surveillance",
        "Loop Recording",
      ],
      featureSections: [
        {
          heading: "4G Connectivity",
          text: "Provides the connected-use foundation that sets this camera apart from conventional recorders.",
        },
        {
          heading: "GPS",
          text: "Supports vehicle tracking through location-based features.",
        },
        {
          heading: "2K Quad HD Recording",
          text: "Captures moments on the road with a higher level of detail than 1080P systems.",
        },
        {
          heading: "Front + Rear Cameras",
          text: "Covers both directions of travel under a single connected system.",
        },
        {
          heading: "Remote Access",
          text: "Lets you make use of the camera's connected features from a distance.",
        },
        {
          heading: "Compact Screenless Design",
          text: "The compact screenless design enables a cleaner windshield installation while minimizing visual obstruction.",
        },
        {
          heading: "External Rear Camera",
          text: "A separate rear camera covers the road behind the vehicle.",
        },
        {
          heading: "Audio Recording",
          text: "A built-in microphone captures in-vehicle audio alongside the video record.",
        },
        {
          heading: "App Control",
          text: "Allows the camera's functions to be managed through a compatible app.",
        },
        {
          heading: "Night Vision",
          text: "Supports image performance on night drives and in low light.",
        },
        {
          heading: "Parking Surveillance",
          text: "Helps security functions continue while the vehicle is parked.",
        },
        {
          heading: "Loop Recording",
          text: "Manages memory automatically to support continuous recording.",
        },
      ],
      highlights: ["2K", "Dual Camera", "4G", "GPS"],
      techSpecs: [
        { label: "Video resolution", value: "2K Quad HD / 1440p" },
        { label: "Camera configuration", value: "Front + Rear (2 cameras)" },
        { label: "Rear camera", value: "External" },
        { label: "Display", value: "Screenless design (no built-in display)" },
        { label: "Audio", value: "Built-in microphone, audio recording" },
        { label: "Power", value: "Vehicle power adapter and connection cable" },
        { label: "Connectivity", value: "4G • GPS" },
        { label: "Memory card support", value: "128 GB" },
        { label: "Vehicle compatibility", value: "Universal" },
        { label: "Warranty", value: "2 years" },
      ],
      mainImage: {
        src: "/images/car-safety-and-security/vx3/1.png",
        alt: "APOLLON VX3/B4 front view, showing the lens, the 4G marking on the body and the GPS mount above it",
      },
      galleryImages: [
        {
          src: "/images/car-safety-and-security/vx3/gallery/vx3-gallery-01.png",
          alt: "APOLLON VX3/B4 angled front view, showing the GPS mount with its power input and the 4G marking on the body",
        },
        {
          src: "/images/car-safety-and-security/vx3/gallery/vx3-gallery-02.png",
          alt: "APOLLON VX3/B4 rear three-quarter view, showing the button, the vents and the ports on the side of the mount",
        },
        {
          src: "/images/car-safety-and-security/vx3/gallery/vx3-gallery-03.png",
          alt: "APOLLON VX3/B4 angled view from the other side, showing the lens with its protective film and the microphone opening",
        },
        {
          src: "/images/car-safety-and-security/vx3/gallery/vx3-gallery-04.png",
          alt: "APOLLON VX3/B4 accessories: additional camera with its mounting bracket, plus the in-car charger and USB-C cable",
        },
      ],
      metaTitle:
        "APOLLON VX3/B4 — 2K Front + Rear 4G GPS Vehicle Camera | Apollon Entertainment Systems",
      metaDescription:
        "APOLLON VX3/B4 is a 2K Quad HD front and rear vehicle camera with 4G, GPS, remote access, app control, audio recording, parking surveillance and loop recording.",
    },
    tr: {
      productType: "2K Ön + Arka 2 Kameralı 4G GPS Araç Kamerası",
      cardType: "2K 2 Kameralı 4G GPS Sistem",
      shortDescription:
        "GPS, 2K Quad HD kayıt, uzaktan erişim, uygulama kontrolü ve park gözetimi sunan 4G bağlantılı çift kameralı araç güvenlik sistemi.",
      descriptionParagraphs: [
        "Sadece kayıt yapan değil, aracınızla bağlantıda kalmanızı sağlayan akıllı kamera sistemi.",
        "APOLLON VX3/B4; 4G bağlantısı, GPS, 2K Quad HD kayıt, ön + arka kamera yapısı, uzaktan erişim ve uygulama kontrolünü bir araya getirir. Bağlantılı araç güvenliğine önem veren kullanıcılar için geliştirilmiş güçlü bir çözümdür.",
      ],
      summary:
        "2K Quad HD • Ön + Arka Kamera • 4G • GPS • Uzaktan Erişim • Ses Kaydı • Park Gözetimi",
      features: [
        "4G Bağlantısı",
        "GPS",
        "2K Quad HD Kayıt",
        "Ön + Arka Kamera",
        "Uzaktan Erişim",
        "Uygulama Kontrolü",
        "Ses Kaydı",
        "Ekransız Kompakt Tasarım",
        "Harici Arka Kamera",
        "Gece Görüşü",
        "Park Gözetimi",
        "Döngüsel Kayıt",
      ],
      featureSections: [
        {
          heading: "4G Bağlantısı",
          text: "Kamerayı klasik kayıt cihazlarından ayıran bağlantılı kullanım altyapısı sunar.",
        },
        {
          heading: "GPS",
          text: "Konum tabanlı özelliklerle araç takibini destekler.",
        },
        {
          heading: "2K Quad HD Kayıt",
          text: "Sürüş anlarını 1080P sistemlere kıyasla daha yüksek detay seviyesiyle kayıt altına alır.",
        },
        {
          heading: "Ön + Arka Kamera",
          text: "Yolun önünü ve arkasını tek bir bağlantılı sistem altında kapsar.",
        },
        {
          heading: "Uzaktan Erişim",
          text: "Kameranın bağlantılı özelliklerinden uzaktan yararlanılmasını destekler.",
        },
        {
          heading: "Ekransız Kompakt Tasarım",
          text: "Ekransız kompakt tasarım, ön camda daha temiz bir montaj sağlar ve görüş engelini en aza indirir.",
        },
        {
          heading: "Harici Arka Kamera",
          text: "Ayrı bir arka kamera, aracın arkasındaki yolu kapsar.",
        },
        {
          heading: "Ses Kaydı",
          text: "Dahili mikrofon, görüntü kaydının yanında araç içi sesi de kayıt altına alır.",
        },
        {
          heading: "Uygulama Kontrolü",
          text: "Kamera fonksiyonlarının uyumlu uygulama üzerinden yönetilmesine olanak sağlar.",
        },
        {
          heading: "Gece Görüşü",
          text: "Gece ve düşük ışıklı sürüşlerde görüntü performansını destekler.",
        },
        {
          heading: "Park Gözetimi",
          text: "Araç park halindeyken güvenlik fonksiyonlarının devam etmesine yardımcı olur.",
        },
        {
          heading: "Döngüsel Kayıt",
          text: "Hafıza alanını otomatik yöneterek kayıt sürekliliğini destekler.",
        },
      ],
      highlights: ["2K", "Çift Kamera", "4G", "GPS"],
      techSpecs: [
        { label: "Video çözünürlüğü", value: "2K Quad HD / 1440p" },
        { label: "Kamera yapısı", value: "Ön + Arka (2 kamera)" },
        { label: "Arka kamera", value: "Harici" },
        { label: "Ekran", value: "Ekransız tasarım (dahili ekran yok)" },
        { label: "Ses", value: "Dahili mikrofon, ses kaydı" },
        { label: "Güç", value: "Araç güç adaptörü ve bağlantı kablosu" },
        { label: "Bağlantı", value: "4G • GPS" },
        { label: "Hafıza kartı desteği", value: "128 GB" },
        { label: "Araç uyumluluğu", value: "Universal" },
        { label: "Garanti", value: "2 yıl" },
      ],
      mainImage: {
        src: "/images/car-safety-and-security/vx3/1.png",
        alt: "APOLLON VX3/B4 önden görünüm; lens, gövde üzerindeki 4G işareti ve üstteki GPS aparatı",
      },
      galleryImages: [
        {
          src: "/images/car-safety-and-security/vx3/gallery/vx3-gallery-01.png",
          alt: "APOLLON VX3/B4 açılı önden görünüm; güç girişiyle birlikte GPS aparatı ve gövdedeki 4G işareti",
        },
        {
          src: "/images/car-safety-and-security/vx3/gallery/vx3-gallery-02.png",
          alt: "APOLLON VX3/B4 arka üçte bir görünüm; tuş, havalandırma kanalları ve aparatın yanındaki portlar",
        },
        {
          src: "/images/car-safety-and-security/vx3/gallery/vx3-gallery-03.png",
          alt: "APOLLON VX3/B4 diğer taraftan açılı görünüm; koruyucu filmiyle lens ve mikrofon deliği",
        },
        {
          src: "/images/car-safety-and-security/vx3/gallery/vx3-gallery-04.png",
          alt: "APOLLON VX3/B4 aksesuarları: montaj aparatıyla ek kamera, araç içi şarj adaptörü ve USB-C kablo",
        },
      ],
      metaTitle:
        "APOLLON VX3/B4 — 2K Ön + Arka 2 Kameralı 4G GPS Araç Kamerası | Apollon Entertainment Systems",
      metaDescription:
        "APOLLON VX3/B4; 4G, GPS, uzaktan erişim, uygulama kontrolü, ses kaydı, park gözetimi ve döngüsel kayıt sunan 2K Quad HD ön + arka araç kamerasıdır.",
    },
  },
  {
    // Official product document received 2026-08-30. Supersedes the earlier
    // provisional entry, which positioned VX4 as a 3-channel 1080P camera.
    // The official document describes a front + rear 4K WiFi system.
    slug: "vx4",
    name: "APOLLON VX4/F7",
    group: "connected-cameras",
    cataloguePriceReferenceUsd: 200,
    imageBase: "/images/car-safety-and-security/vx4",
    en: {
      productType: "4K Front + Rear Wi-Fi Vehicle Camera",
      cardType: "4K Dual-Camera Wi-Fi System",
      shortDescription:
        "A 4K front and rear dash camera system with Wi-Fi, app control, parking mode, loop recording and G-sensor event capture.",
      descriptionParagraphs: [
        "Record the road ahead and the road behind, both at 4K levels of detail.",
        "APOLLON VX4/F7 combines a front and rear camera system and 4K resolution with Wi-Fi and app control. It is one of the strongest options in the APOLLON VX series for drivers who put image quality first.",
      ],
      summary:
        "Front + Rear Cameras • 4K Resolution • Wi-Fi • App Control • Parking Mode • G-Sensor",
      features: [
        "Front + Rear Cameras",
        "4K Resolution",
        "Wi-Fi",
        "App Control",
        "Parking Mode",
        "Loop Recording",
        "G-Sensor",
      ],
      featureSections: [
        {
          heading: "Front + Rear Cameras",
          text: "Offers more comprehensive recording in both directions of travel.",
        },
        {
          heading: "4K Resolution",
          text: "Delivers a higher-resolution recording experience than 1080P systems.",
        },
        {
          heading: "Wi-Fi",
          text: "Wireless connectivity makes the camera more practical to use.",
        },
        {
          heading: "Mobile App Control",
          text: "Manage supported recording and connectivity functions through the compatible mobile application.",
        },
        {
          heading: "Parking Mode",
          text: "Adds a further security function for the parked vehicle. Parking mode/surveillance functionality requires appropriate installation and electrical connection.",
        },
        {
          heading: "Loop Recording",
          text: "Manages storage automatically to support continuous recording.",
        },
        {
          heading: "G-Sensor",
          text: "When a sudden impact or vibration is detected, the G-Sensor helps protect the relevant recording from being overwritten during loop recording.",
        },
      ],
      highlights: ["4K", "Dual Camera", "Wi-Fi", "Mobile App"],
      techSpecs: [
        { label: "Video resolution", value: "4K / 2160p" },
        { label: "Camera configuration", value: "Front + Rear (2 cameras)" },
        { label: "Display", value: "Built-in display, 3.2\"" },
        { label: "Connectivity", value: "Wi-Fi" },
        { label: "Memory configuration", value: "128 GB" },
        { label: "Parking mode requirement", value: "Appropriate installation and electrical connection" },
        { label: "Vehicle compatibility", value: "Universal" },
        { label: "Warranty", value: "2 years" },
      ],
      mainImage: {
        src: "/images/car-safety-and-security/vx4/main.png",
        alt: "APOLLON VX4/F7 front view, showing the 4K Dash Cam body, the wide-angle lens and the windscreen mount",
      },
      galleryImages: [
        {
          src: "/images/car-safety-and-security/vx4/gallery/vx4-gallery-01.png",
          alt: "APOLLON VX4/F7 angled front view, showing the lens, the textured front panel and the windscreen mount",
        },
        {
          src: "/images/car-safety-and-security/vx4/gallery/vx4-gallery-02.png",
          alt: "APOLLON VX4/F7 angled view from the other side, showing the USB-C, memory card and AV connections",
        },
        {
          src: "/images/car-safety-and-security/vx4/gallery/vx4-gallery-03.png",
          alt: "APOLLON VX4/F7 rear view, showing the full display and the underside of the mount",
        },
        {
          src: "/images/car-safety-and-security/vx4/gallery/vx4-gallery-04.png",
          alt: "APOLLON VX4/F7 side profile, showing the control buttons and the depth of the lens barrel",
        },
        {
          src: "/images/car-safety-and-security/vx4/gallery/vx4-gallery-05.png",
          alt: "APOLLON VX4/F7 accessories: additional camera with its mounting bracket, plus the in-car charger and USB-C cable",
        },
      ],
      metaTitle:
        "APOLLON VX4/F7 — 4K Front + Rear Wi-Fi Vehicle Camera | Apollon Entertainment Systems",
      metaDescription:
        "APOLLON VX4/F7 is a 4K front and rear Wi-Fi dash camera system with app control, parking mode, loop recording and a G-sensor.",
    },
    tr: {
      productType: "4K Ön + Arka 2 Kameralı Wi-Fi Araç Kamerası",
      cardType: "4K 2 Kameralı Wi-Fi Sistem",
      shortDescription:
        "Wi-Fi, uygulama kontrolü, park modu, döngüsel kayıt ve G-sensörü sunan 4K ön ve arka araç kamera sistemi.",
      descriptionParagraphs: [
        "Yolun önünü de arkasını da 4K detay seviyesiyle kayıt altına alın.",
        "APOLLON VX4/F7, ön + arka kamera sistemi ve 4K çözünürlüğü Wi-Fi ve uygulama kontrolüyle birleştirir. Görüntü kalitesini ön planda tutan sürücüler için APOLLON VX serisinin güçlü seçeneklerinden biridir.",
      ],
      summary:
        "Ön + Arka Kamera • 4K Çözünürlük • Wi-Fi • Uygulama Kontrolü • Park Modu • G-Sensörü",
      features: [
        "Ön + Arka Kamera",
        "4K Çözünürlük",
        "Wi-Fi",
        "Uygulama Kontrolü",
        "Park Modu",
        "Döngüsel Kayıt",
        "G-Sensörü",
      ],
      featureSections: [
        {
          heading: "Ön + Arka Kamera",
          text: "Aracın iki yönünde daha kapsamlı kayıt imkânı sunar.",
        },
        {
          heading: "4K Çözünürlük",
          text: "1080P sistemlere kıyasla yüksek çözünürlüklü kayıt deneyimi sunar.",
        },
        {
          heading: "Wi-Fi",
          text: "Kablosuz bağlantı sayesinde kamera kullanımını daha pratik hale getirir.",
        },
        {
          heading: "Mobil Uygulama Kontrolü",
          text: "Desteklenen kayıt ve bağlantı fonksiyonlarını uyumlu mobil uygulama üzerinden yönetin.",
        },
        {
          heading: "Park Modu",
          text: "Park halindeki araç için ek güvenlik fonksiyonu sunar. Park modu/gözetimi özelliğinin kullanılabilmesi uygun montaj ve elektrik bağlantısına bağlıdır.",
        },
        {
          heading: "Döngüsel Kayıt",
          text: "Depolama alanını otomatik yöneterek kayıt sürekliliğini destekler.",
        },
        {
          heading: "G-Sensörü",
          text: "Ani darbe veya sarsıntı algılandığında ilgili kaydın korunmasına yardımcı olur ve önemli görüntülerin döngüsel kayıt sırasında üzerine yazılmasını önlemeye yardımcı olur.",
        },
      ],
      highlights: ["4K", "Çift Kamera", "Wi-Fi", "Mobil Uygulama"],
      techSpecs: [
        { label: "Video çözünürlüğü", value: "4K / 2160p" },
        { label: "Kamera yapısı", value: "Ön + Arka (2 kamera)" },
        { label: "Ekran", value: "Ekranlı tasarım, 3.2\"" },
        { label: "Bağlantı", value: "Wi-Fi" },
        { label: "Hafıza yapılandırması", value: "128 GB" },
        { label: "Park modu gereksinimi", value: "Uygun montaj ve elektrik bağlantısı" },
        { label: "Araç uyumluluğu", value: "Universal" },
        { label: "Garanti", value: "2 yıl" },
      ],
      mainImage: {
        src: "/images/car-safety-and-security/vx4/main.png",
        alt: "APOLLON VX4/F7 önden görünüm; 4K Dash Cam gövdesi, geniş açılı lens ve ön cam aparatı",
      },
      galleryImages: [
        {
          src: "/images/car-safety-and-security/vx4/gallery/vx4-gallery-01.png",
          alt: "APOLLON VX4/F7 açılı önden görünüm; lens, dokulu ön panel ve ön cam aparatı",
        },
        {
          src: "/images/car-safety-and-security/vx4/gallery/vx4-gallery-02.png",
          alt: "APOLLON VX4/F7 diğer taraftan açılı görünüm; USB-C, hafıza kartı ve AV bağlantıları",
        },
        {
          src: "/images/car-safety-and-security/vx4/gallery/vx4-gallery-03.png",
          alt: "APOLLON VX4/F7 arkadan görünüm; ekranın tamamı ve aparatın alt yüzeyi",
        },
        {
          src: "/images/car-safety-and-security/vx4/gallery/vx4-gallery-04.png",
          alt: "APOLLON VX4/F7 yandan görünüm; kontrol tuşları ve lens gövdesinin derinliği",
        },
        {
          src: "/images/car-safety-and-security/vx4/gallery/vx4-gallery-05.png",
          alt: "APOLLON VX4/F7 aksesuarları: montaj aparatıyla ek kamera, araç içi şarj adaptörü ve USB-C kablo",
        },
      ],
      metaTitle:
        "APOLLON VX4/F7 — 4K Ön + Arka 2 Kameralı Wi-Fi Araç Kamerası | Apollon Entertainment Systems",
      metaDescription:
        "APOLLON VX4/F7; uygulama kontrolü, park modu, döngüsel kayıt ve G-sensörü sunan 4K ön + arka Wi-Fi araç kamera sistemidir.",
    },
  },
  {
    slug: "vision-360",
    name: "APOLLON VISION 360",
    group: "connected-cameras",
    cataloguePriceReferenceUsd: 220,
    imageBase: "/images/products/car/vision-360",
    en: {
      productType: "Universal 360° Camera System",
      shortDescription:
        "A universal 360° camera system producing a bird's-eye view from HD cameras, with dynamic parking guidelines, calibration support and ADAS-ready support.",
      features: [
        "360° Bird's-Eye View",
        "HD Cameras",
        "Dynamic Parking Guidelines",
        "Calibration Support",
        "Universal Installation",
        "Night Vision",
        "ADAS-Ready Support",
      ],
      highlights: [
        "360° Bird's-Eye View",
        "HD Cameras",
        "Dynamic Parking Guidelines",
        "Universal Installation",
      ],
      metaTitle: "APOLLON VISION 360 — Universal 360° Camera System | Apollon Entertainment Systems",
      metaDescription:
        "APOLLON VISION 360 is a universal 360° camera system with bird's-eye view, HD cameras, dynamic parking guidelines, calibration support and night vision.",
    },
    tr: {
      productType: "Universal 360° Kamera",
      shortDescription:
        "HD kameralarla kuş bakışı görüş oluşturan; dinamik park çizgileri, kalibrasyon desteği ve ADAS desteğine hazır yapısıyla universal 360° kamera sistemi.",
      features: [
        "360° Kuş Bakışı Görüş",
        "HD Kameralar",
        "Dinamik Park Çizgileri",
        "Kalibrasyon Desteği",
        "Universal Montaj",
        "Gece Görüşü",
        "ADAS Desteğine Hazır",
      ],
      highlights: [
        "360° Kuş Bakışı Görüş",
        "HD Kameralar",
        "Dinamik Park Çizgileri",
        "Universal Montaj",
      ],
      metaTitle: "APOLLON VISION 360 — Universal 360° Kamera | Apollon",
      metaDescription:
        "APOLLON VISION 360; kuş bakışı görüş, HD kameralar, dinamik park çizgileri, kalibrasyon desteği ve gece görüşü sunan universal 360° kamera sistemidir.",
    },
  },

  // ── Premium Multimedia Systems ────────────────────────────────────────────
  {
    slug: "q4-prime",
    name: "APOLLON Q4 PRIME",
    group: "premium-multimedia",
    configuration: "Qualcomm 4GB | 64GB",
    cataloguePriceReferenceUsd: 270,
    imageBase: "/images/products/car/q4-prime",
    en: {
      productType: "Qualcomm 4GB | 64GB",
      shortDescription:
        "A 4GB/64GB Qualcomm multimedia system with a QLED display, wireless Apple CarPlay and Android Auto, Bluetooth 5.0, GPS navigation and ALPINE DSP certified audio technology.",
      features: [
        "Qualcomm Platform",
        "ALPINE DSP Certified Audio Technology",
        "QLED Display",
        "Wireless Apple CarPlay",
        "Wireless Android Auto",
        "Bluetooth 5.0",
        "GPS Navigation",
      ],
      highlights: [
        "QLED Display",
        "Wireless Apple CarPlay",
        "ALPINE DSP Certified Audio Technology",
        "GPS Navigation",
      ],
      metaTitle: "APOLLON Q4 PRIME — Qualcomm 4GB | 64GB Multimedia | Apollon",
      metaDescription:
        "APOLLON Q4 PRIME is a Qualcomm 4GB/64GB car multimedia system with QLED display, wireless Apple CarPlay and Android Auto, Bluetooth 5.0, GPS navigation and ALPINE DSP certified audio technology.",
    },
    tr: {
      productType: "Qualcomm 4GB | 64GB",
      shortDescription:
        "QLED ekran, kablosuz Apple CarPlay ve Android Auto, Bluetooth 5.0, GPS navigasyon ve ALPINE DSP sertifikalı ses teknolojisi sunan 4GB/64GB Qualcomm multimedya sistemi.",
      features: [
        "Qualcomm Platformu",
        "ALPINE DSP Sertifikalı Ses Teknolojisi",
        "QLED Ekran",
        "Kablosuz Apple CarPlay",
        "Kablosuz Android Auto",
        "Bluetooth 5.0",
        "GPS Navigasyon",
      ],
      highlights: [
        "QLED Ekran",
        "Kablosuz Apple CarPlay",
        "ALPINE DSP Sertifikalı Ses Teknolojisi",
        "GPS Navigasyon",
      ],
      metaTitle: "APOLLON Q4 PRIME — Qualcomm 4GB | 64GB Multimedya | Apollon",
      metaDescription:
        "APOLLON Q4 PRIME; QLED ekran, kablosuz Apple CarPlay ve Android Auto, Bluetooth 5.0, GPS navigasyon ve ALPINE DSP sertifikalı ses teknolojisi sunan Qualcomm 4GB/64GB araç multimedya sistemidir.",
    },
  },
  {
    slug: "q4-pro",
    name: "APOLLON Q4 PRO",
    group: "premium-multimedia",
    configuration: "Qualcomm 4GB | 64GB",
    cataloguePriceReferenceUsd: 270,
    imageBase: "/images/products/car/q4-pro",
    en: {
      productType: "Qualcomm 4GB | 64GB",
      shortDescription:
        "A 4GB/64GB Qualcomm multimedia system with an IPS/QLED display, 4G-ready connectivity, steering wheel control support, split screen, OTA updates and ALPINE DSP certified audio technology.",
      features: [
        "Qualcomm Platform",
        "ALPINE DSP Certified Audio Technology",
        "IPS/QLED Display",
        "4G Ready",
        "Steering Wheel Control Support",
        "Split Screen",
        "OTA Updates",
      ],
      highlights: [
        "IPS/QLED Display",
        "4G Ready",
        "ALPINE DSP Certified Audio Technology",
        "Split Screen",
      ],
      metaTitle: "APOLLON Q4 PRO — Qualcomm 4GB | 64GB Multimedia | Apollon",
      metaDescription:
        "APOLLON Q4 PRO is a Qualcomm 4GB/64GB car multimedia system with IPS/QLED display, 4G ready connectivity, steering wheel control support, split screen, OTA updates and ALPINE DSP certified audio technology.",
    },
    tr: {
      productType: "Qualcomm 4GB | 64GB",
      shortDescription:
        "IPS/QLED ekran, 4G desteğine hazır bağlantı, direksiyon kumandası desteği, bölünmüş ekran, OTA güncelleme ve ALPINE DSP sertifikalı ses teknolojisi sunan 4GB/64GB Qualcomm multimedya sistemi.",
      features: [
        "Qualcomm Platformu",
        "ALPINE DSP Sertifikalı Ses Teknolojisi",
        "IPS/QLED Ekran",
        "4G Desteğine Hazır",
        "Direksiyon Kumandası Desteği",
        "Bölünmüş Ekran",
        "OTA Güncelleme",
      ],
      highlights: [
        "IPS/QLED Ekran",
        "4G Desteğine Hazır",
        "ALPINE DSP Sertifikalı Ses Teknolojisi",
        "Bölünmüş Ekran",
      ],
      metaTitle: "APOLLON Q4 PRO — Qualcomm 4GB | 64GB Multimedya | Apollon",
      metaDescription:
        "APOLLON Q4 PRO; IPS/QLED ekran, 4G desteğine hazır bağlantı, direksiyon kumandası desteği, bölünmüş ekran, OTA güncelleme ve ALPINE DSP sertifikalı ses teknolojisi sunan Qualcomm 4GB/64GB araç multimedya sistemidir.",
    },
  },
  {
    slug: "q8-elite",
    name: "APOLLON Q8 ELITE",
    group: "premium-multimedia",
    configuration: "Qualcomm 8GB | 128GB",
    cataloguePriceReferenceUsd: 380,
    imageBase: "/images/products/car/q8-elite",
    en: {
      productType: "Qualcomm 8GB | 128GB",
      shortDescription:
        "An 8GB/128GB Qualcomm multimedia system with wireless CarPlay, Bluetooth 5.3, GPS and ALPINE DSP certified audio technology.",
      features: [
        "Qualcomm Platform",
        "ALPINE DSP Certified Audio Technology",
        "8GB RAM",
        "128GB Storage",
        "Wireless CarPlay",
        "Bluetooth 5.3",
        "GPS",
      ],
      highlights: [
        "8GB RAM",
        "128GB Storage",
        "Wireless CarPlay",
        "ALPINE DSP Certified Audio Technology",
      ],
      metaTitle: "APOLLON Q8 ELITE — Qualcomm 8GB | 128GB Multimedia | Apollon",
      metaDescription:
        "APOLLON Q8 ELITE is a Qualcomm 8GB/128GB car multimedia system with wireless CarPlay, Bluetooth 5.3, GPS and ALPINE DSP certified audio technology.",
    },
    tr: {
      productType: "Qualcomm 8GB | 128GB",
      shortDescription:
        "Kablosuz CarPlay, Bluetooth 5.3, GPS ve ALPINE DSP sertifikalı ses teknolojisi sunan 8GB/128GB Qualcomm multimedya sistemi.",
      features: [
        "Qualcomm Platformu",
        "ALPINE DSP Sertifikalı Ses Teknolojisi",
        "8GB RAM",
        "128GB Depolama",
        "Kablosuz CarPlay",
        "Bluetooth 5.3",
        "GPS",
      ],
      highlights: [
        "8GB RAM",
        "128GB Depolama",
        "Kablosuz CarPlay",
        "ALPINE DSP Sertifikalı Ses Teknolojisi",
      ],
      metaTitle: "APOLLON Q8 ELITE — Qualcomm 8GB | 128GB Multimedya | Apollon",
      metaDescription:
        "APOLLON Q8 ELITE; kablosuz CarPlay, Bluetooth 5.3, GPS ve ALPINE DSP sertifikalı ses teknolojisi sunan Qualcomm 8GB/128GB araç multimedya sistemidir.",
    },
  },
  {
    slug: "q8-signature",
    name: "APOLLON Q8 SIGNATURE",
    group: "premium-multimedia",
    configuration: "Qualcomm 8GB | 128GB",
    cataloguePriceReferenceUsd: 380,
    imageBase: "/images/products/car/q8-signature",
    en: {
      productType: "Qualcomm 8GB | 128GB",
      shortDescription:
        "A premium 8GB/128GB Qualcomm multimedia platform combining a QLED display, 4G LTE connectivity, ALPINE DSP certified audio technology and advanced multi-window functionality.",
      features: [
        "Premium Qualcomm",
        "ALPINE DSP Certified Audio Technology",
        "QLED Display",
        "Fast Startup",
        "4G LTE",
        "OTA Updates",
        "Multi-Window",
      ],
      highlights: [
        "QLED Display",
        "4G LTE",
        "ALPINE DSP Certified Audio Technology",
        "Multi-Window",
      ],
      metaTitle: "APOLLON Q8 SIGNATURE — Qualcomm 8GB | 128GB Multimedia | Apollon",
      metaDescription:
        "APOLLON Q8 SIGNATURE is a premium Qualcomm 8GB/128GB car multimedia platform with QLED display, fast startup, 4G LTE, OTA updates, multi-window and ALPINE DSP certified audio technology.",
    },
    tr: {
      productType: "Qualcomm 8GB | 128GB",
      shortDescription:
        "QLED ekran, 4G LTE bağlantısı, ALPINE DSP sertifikalı ses teknolojisi ve çoklu pencere özelliklerini 8GB/128GB Qualcomm platformuyla birleştiren premium multimedya sistemi.",
      features: [
        "Premium Qualcomm",
        "ALPINE DSP Sertifikalı Ses Teknolojisi",
        "QLED Ekran",
        "Hızlı Açılış",
        "4G LTE",
        "OTA Güncelleme",
        "Çoklu Pencere",
      ],
      highlights: [
        "QLED Ekran",
        "4G LTE",
        "ALPINE DSP Sertifikalı Ses Teknolojisi",
        "Çoklu Pencere",
      ],
      metaTitle: "APOLLON Q8 SIGNATURE — Qualcomm 8GB | 128GB Multimedya | Apollon",
      metaDescription:
        "APOLLON Q8 SIGNATURE; QLED ekran, hızlı açılış, 4G LTE, OTA güncelleme, çoklu pencere ve ALPINE DSP sertifikalı ses teknolojisi sunan premium Qualcomm 8GB/128GB araç multimedya platformudur.",
    },
  },
]

export function getCarProduct(slug: string): CarProduct | undefined {
  return CAR_PRODUCTS.find((p) => p.slug === slug)
}

export function carProductsByGroup(group: CarProductGroup): CarProduct[] {
  return CAR_PRODUCTS.filter((p) => p.group === group)
}

// ─── Group headings ──────────────────────────────────────────────────────────

export const CAR_GROUP_LABELS: Record<CarProductGroup, Record<Locale, { title: string; intro: string }>> = {
  "connected-cameras": {
    en: {
      title: "Connected Cameras & Driving Vision",
      intro:
        "Recording, connectivity and visibility systems — from single dash cameras to multi-channel and 360° coverage.",
    },
    tr: {
      title: "Bağlantılı Kameralar ve Sürüş Görüşü",
      intro:
        "Tek kameralı sistemlerden çok kanallı ve 360° çözümlere uzanan kayıt, bağlantı ve görüş sistemleri.",
    },
  },
  "premium-multimedia": {
    en: {
      title: "Premium Multimedia Systems",
      intro:
        "Qualcomm-based in-car multimedia platforms with wireless smartphone integration and ALPINE DSP certified audio technology.",
    },
    tr: {
      title: "Premium Multimedya Sistemleri",
      intro:
        "Kablosuz akıllı telefon entegrasyonu ve ALPINE DSP sertifikalı ses teknolojisi sunan Qualcomm tabanlı araç içi multimedya platformları.",
    },
  },
}

// ─── Vehicle brand compatibility ─────────────────────────────────────────────
// Compatibility only — these are deliberately NOT links to per-brand catalogues.
// No brand logo assets exist in this repository; see the Car landing page for
// how the strip renders and docs/image-sources/car-technology-systems.md for
// where logo files would go if licensed assets are supplied later.

export const COMPATIBLE_VEHICLE_BRANDS = [
  "Audi",
  "BMW",
  "Mercedes-Benz",
  "Land Rover / Range Rover",
  "Porsche",
  "Toyota",
  "Lexus",
] as const
