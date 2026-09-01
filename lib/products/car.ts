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
//  • `specs` are limited to catalogue-confirmed facts (type, configuration).
//    No CPU model, resolution, sensor, dimensions, IP rating, voltage, frame
//    rate, field of view, OS version or warranty is asserted anywhere.
//  • `cataloguePriceReferenceUsd` is reference data only. The site is a
//    showroom without public pricing, so it is never rendered.
//  • Product photography exists for VX1–VX5. Products without images fall
//    back to a neutral placeholder; `imageBase` records where their assets
//    belong. See docs/image-sources/car-technology-systems.md.

import { type Locale } from "@/lib/i18n"

export type CarProductGroup = "connected-cameras" | "premium-multimedia"

export type ProductImage = { src: string; alt: string }

export type FeatureSection = { heading: string; text: string }

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
    name: "APOLLON VX5",
    modelReference: "APOLLON VX5 / B5",
    group: "connected-cameras",
    cataloguePriceReferenceUsd: 150,
    imageBase: "/images/car-safety-and-security/vx5",
    en: {
      productType: "3-Channel 4K Premium Dash Camera System",
      cardType: "3-Channel 4K Premium System",
      shortDescription:
        "A three-channel 4K dash camera system covering front, cabin and rear, with night vision, WiFi, parking mode and a G-sensor.",
      descriptionParagraphs: [
        "Front. Cabin. Rear. Three separate angles, one single system.",
        "APOLLON VX5 / B5 is one of the most comprehensive recording solutions in the VX series. It brings a 3-channel camera layout, covering front, cabin and rear, together with 4K resolution, WiFi, night vision, parking mode and a G-sensor.",
      ],
      summary:
        "3 Channels • Front + Cabin + Rear • 4K Resolution • Night Vision • WiFi • Parking Mode • G-Sensor",
      features: [
        "3-Channel Recording",
        "Front + Cabin + Rear",
        "4K Resolution",
        "Night Vision",
        "WiFi",
        "Parking Mode",
        "G-Sensor",
        "Loop Recording",
      ],
      featureSections: [
        {
          heading: "3-Channel Recording",
          text: "Records different areas of the vehicle under a single system, with front, cabin and rear cameras.",
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
          heading: "WiFi",
          text: "Wireless connectivity features make the system easier to use.",
        },
        {
          heading: "Parking Mode",
          text: "Supports security functions while your vehicle is parked.",
        },
        {
          heading: "G-Sensor",
          text: "Helps detect impacts and sudden movements.",
        },
        {
          heading: "Loop Recording",
          text: "Helps preserve continuous recording once the memory is full.",
        },
      ],
      highlights: ["Front + Cabin + Rear", "4K", "Night Vision", "WiFi"],
      mainImage: {
        src: "/images/car-safety-and-security/vx5/main.png",
        alt: "APOLLON VX5 front camera, front view showing the lens, the 4K WiFi marking and the windscreen mount",
      },
      galleryImages: [
        {
          src: "/images/car-safety-and-security/vx5/gallery/vx5-gallery-01.png",
          alt: "APOLLON VX5 front camera at an angle, showing the cylindrical body, the lens and the windscreen mount",
        },
        {
          src: "/images/car-safety-and-security/vx5/gallery/vx5-gallery-02.png",
          alt: "APOLLON VX5 unit with the display open, showing the rotating cabin camera and the USB-C and AV ports on the mount",
        },
        {
          src: "/images/car-safety-and-security/vx5/gallery/vx5-gallery-03.png",
          alt: "APOLLON VX5 front camera from the opposite angle, showing the lens, the microphone opening and the 4K WiFi marking",
        },
        {
          src: "/images/car-safety-and-security/vx5/gallery/vx5-gallery-04.png",
          alt: "APOLLON VX5 front camera in three-quarter view, showing the lens with its protective film and the mount label",
        },
        {
          src: "/images/car-safety-and-security/vx5/gallery/vx5-gallery-05.png",
          alt: "APOLLON VX5 rear three-quarter view, showing the display, the memory card slot and the cabin camera",
        },
        {
          src: "/images/car-safety-and-security/vx5/gallery/vx5-gallery-06.png",
          alt: "APOLLON VX5 in use, with a live view and an on-screen timestamp shown on the display",
        },
        {
          src: "/images/car-safety-and-security/vx5/gallery/vx5-gallery-07.png",
          alt: "APOLLON VX5 accessories: additional camera with its mounting bracket, plus the in-car charger and USB-C cable",
        },
      ],
      metaTitle:
        "APOLLON VX5 / B5 — 3-Channel 4K Premium Dash Camera System | Apollon",
      metaDescription:
        "APOLLON VX5 / B5 is a 3-channel 4K dash camera system recording front, cabin and rear, with night vision, WiFi, parking mode, a G-sensor and loop recording.",
    },
    tr: {
      productType: "3 Kanallı 4K Premium Araç Kamera Sistemi",
      cardType: "3 Kanallı 4K Premium Sistem",
      shortDescription:
        "Ön, kabin ve arkayı kapsayan; gece görüşü, WiFi, park modu ve G-sensörü sunan 3 kanallı 4K araç kamera sistemi.",
      descriptionParagraphs: [
        "Ön. Kabin. Arka. Üç farklı açı, tek bir sistem.",
        "APOLLON VX5/B5, VX serisinin kapsamlı kayıt çözümlerinden biridir. Ön + kabin + arka olmak üzere 3 kanallı kamera yapısını 4K çözünürlük, WiFi, gece görüşü, park modu ve G-Sensörüyle bir araya getirir.",
      ],
      summary:
        "3 Kanal • Ön + Kabin + Arka • 4K Çözünürlük • Gece Görüşü • WiFi • Park Modu • G-Sensörü",
      features: [
        "3 Kanallı Kayıt",
        "Ön + Kabin + Arka",
        "4K Çözünürlük",
        "Gece Görüşü",
        "WiFi",
        "Park Modu",
        "G-Sensörü",
        "Döngüsel Kayıt",
      ],
      featureSections: [
        {
          heading: "3 Kanallı Kayıt",
          text: "Ön, kabin ve arka kameralarla aracın farklı bölgelerini aynı sistem altında kayıt altına alır.",
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
          heading: "WiFi",
          text: "Kablosuz bağlantı özellikleriyle kullanım kolaylığı sağlar.",
        },
        {
          heading: "Park Modu",
          text: "Aracınız park halindeyken güvenlik fonksiyonlarını destekler.",
        },
        {
          heading: "G-Sensörü",
          text: "Darbe ve ani hareketlerin algılanmasına yardımcı olur.",
        },
        {
          heading: "Döngüsel Kayıt",
          text: "Hafıza dolduğunda kayıt sürekliliğinin korunmasına yardımcı olur.",
        },
      ],
      highlights: ["Ön + Kabin + Arka", "4K", "Gece Görüşü", "WiFi"],
      mainImage: {
        src: "/images/car-safety-and-security/vx5/main.png",
        alt: "APOLLON VX5 ön kamerası; lens, 4K WiFi işareti ve ön cam aparatıyla önden görünüm",
      },
      galleryImages: [
        {
          src: "/images/car-safety-and-security/vx5/gallery/vx5-gallery-01.png",
          alt: "APOLLON VX5 ön kamerası açılı görünümde; silindirik gövde, lens ve ön cam aparatı",
        },
        {
          src: "/images/car-safety-and-security/vx5/gallery/vx5-gallery-02.png",
          alt: "APOLLON VX5 ünitesi ekran açık hâldeyken; döner kabin kamerası ve aparat üzerindeki USB-C ile AV portları",
        },
        {
          src: "/images/car-safety-and-security/vx5/gallery/vx5-gallery-03.png",
          alt: "APOLLON VX5 ön kamerası ters açıdan; lens, mikrofon deliği ve 4K WiFi işareti",
        },
        {
          src: "/images/car-safety-and-security/vx5/gallery/vx5-gallery-04.png",
          alt: "APOLLON VX5 ön kamerası üçte bir görünümde; koruyucu filmiyle lens ve aparat etiketi",
        },
        {
          src: "/images/car-safety-and-security/vx5/gallery/vx5-gallery-05.png",
          alt: "APOLLON VX5 arka üçte bir görünüm; ekran, hafıza kartı yuvası ve kabin kamerası",
        },
        {
          src: "/images/car-safety-and-security/vx5/gallery/vx5-gallery-06.png",
          alt: "APOLLON VX5 kullanım hâlinde; ekranda canlı görüntü ve zaman damgası",
        },
        {
          src: "/images/car-safety-and-security/vx5/gallery/vx5-gallery-07.png",
          alt: "APOLLON VX5 aksesuarları: montaj aparatıyla ek kamera, araç içi şarj adaptörü ve USB-C kablo",
        },
      ],
      metaTitle:
        "APOLLON VX5 / B5 — 3 Kanallı 4K Premium Araç Kamera Sistemi | Apollon",
      metaDescription:
        "APOLLON VX5 / B5; ön, kabin ve arkayı kaydeden, gece görüşü, WiFi, park modu, G-sensörü ve döngüsel kayıt sunan 3 kanallı 4K araç kamera sistemidir.",
    },
  },
  {
    // Official product document received 2026-08-30. Supersedes the earlier
    // provisional entry, which positioned VX2 as a 4G / GPS camera. The
    // official document lists neither 4G nor GPS for this model.
    slug: "vx2",
    name: "APOLLON VX2",
    modelReference: "APOLLON VX2 / F6",
    group: "connected-cameras",
    cataloguePriceReferenceUsd: 160,
    imageBase: "/images/car-safety-and-security/vx2",
    en: {
      productType: "3-Camera WiFi Smart Dash Camera System",
      cardType: "3-Camera WiFi System",
      shortDescription:
        "A three-camera dash camera system combining WiFi connectivity, 1080P video, night vision, parking surveillance and mobile app control.",
      descriptionParagraphs: [
        "Do not settle for a single angle. Record your journey with three separate cameras.",
        "APOLLON VX2 / F6 is built for drivers who want comprehensive recording, from everyday use to long journeys, combining a three-camera layout with WiFi connectivity, 1080P image quality, night vision and mobile app support.",
      ],
      summary:
        "3 Cameras • WiFi • 1080P • Mobile App • Night Vision • Parking Surveillance • Emergency Recording Lock",
      features: [
        "3-Camera System",
        "WiFi Connectivity",
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
          text: "A three-camera layout that makes broader recording coverage possible.",
        },
        {
          heading: "WiFi Connectivity",
          text: "Wireless connectivity lets you make more practical use of the device's smart features.",
        },
        {
          heading: "1080P Video",
          text: "Records clear, usable footage while you drive.",
        },
        {
          heading: "Mobile App",
          text: "Makes operating the camera more practical from a mobile device.",
        },
        {
          heading: "Night Vision",
          text: "Supports recording performance in low-light conditions.",
        },
        {
          heading: "Parking Surveillance",
          text: "Supports the security of your vehicle while it is parked, not only while you are driving.",
        },
        {
          heading: "Loop Recording",
          text: "Helps use storage efficiently for an uninterrupted recording experience.",
        },
        {
          heading: "Emergency Recording Lock",
          text: "A recording-safety feature that helps protect important footage.",
        },
      ],
      highlights: ["3 Cameras", "WiFi", "1080P", "Night Vision"],
      mainImage: {
        src: "/images/car-safety-and-security/vx2/main.png",
        alt: "APOLLON VX2 front view, showing the wide-angle main lens beside the attached second camera module",
      },
      galleryImages: [
        {
          src: "/images/car-safety-and-security/vx2/gallery/vx2-gallery-01.png",
          alt: "APOLLON VX2 angled front view, showing the main lens, the attached second camera and the windscreen mount",
        },
        {
          src: "/images/car-safety-and-security/vx2/gallery/vx2-gallery-02.png",
          alt: "APOLLON VX2 angled rear view, showing the display, the memory card slot and the USB-C and jack ports on the mount",
        },
        {
          src: "/images/car-safety-and-security/vx2/gallery/vx2-gallery-03.png",
          alt: "APOLLON VX2 rear view, showing the full display and the rotating second camera module",
        },
        {
          src: "/images/car-safety-and-security/vx2/gallery/vx2-gallery-04.png",
          alt: "APOLLON VX2 accessories: additional camera with its mounting bracket, plus the in-car charger and USB-C cable",
        },
      ],
      metaTitle:
        "APOLLON VX2 / F6 — 3-Camera WiFi Smart Dash Camera System | Apollon",
      metaDescription:
        "APOLLON VX2 / F6 is a three-camera WiFi dash camera system with 1080P video, mobile app support, night vision, parking surveillance, loop recording and an emergency recording lock.",
    },
    tr: {
      productType: "3 Kameralı WiFi Akıllı Araç Kayıt Sistemi",
      cardType: "3 Kameralı WiFi Sistem",
      shortDescription:
        "WiFi bağlantısı, 1080P görüntü kalitesi, gece görüşü, park gözetimi ve mobil uygulama desteğini bir araya getiren üç kameralı araç kayıt sistemi.",
      descriptionParagraphs: [
        "Tek açıyla yetinmeyin. Yolculuğunuzu üç farklı kamerayla kayıt altına alın.",
        "APOLLON VX2/F6, 3 kameralı yapısı, WiFi bağlantısı, 1080P görüntü kalitesi, gece görüşü ve mobil uygulama desteğiyle günlük kullanımdan uzun yolculuklara kadar kapsamlı kayıt isteyen sürücüler için tasarlanmıştır.",
      ],
      summary:
        "3 Kamera • WiFi • 1080P • Mobil Uygulama • Gece Görüşü • Park Gözetimi • Acil Durum Kilidi",
      features: [
        "3 Kameralı Sistem",
        "WiFi Bağlantısı",
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
          text: "Daha geniş kapsamlı kayıt imkânı sağlayan üç kameralı yapı.",
        },
        {
          heading: "WiFi Bağlantısı",
          text: "Kablosuz bağlantıyla cihazın akıllı özelliklerinden daha pratik şekilde yararlanabilirsiniz.",
        },
        {
          heading: "1080P Görüntü Kalitesi",
          text: "Sürüş sırasında net ve kullanılabilir görüntüler kaydeder.",
        },
        {
          heading: "Mobil Uygulama",
          text: "Kamera kullanımını mobil cihaz üzerinden daha pratik hale getirir.",
        },
        {
          heading: "Gece Görüşü",
          text: "Düşük ışıklı ortamlarda kayıt performansını destekler.",
        },
        {
          heading: "Park Gözetimi",
          text: "Sadece sürüş sırasında değil, park halindeki aracın güvenliğini de destekler.",
        },
        {
          heading: "Döngüsel Kayıt",
          text: "Depolama alanının verimli kullanılmasına yardımcı olarak kesintisiz kayıt deneyimi sunar.",
        },
        {
          heading: "Acil Durum Kilidi",
          text: "Önemli görüntülerin korunmasına yardımcı olan kayıt güvenliği özelliğidir.",
        },
      ],
      highlights: ["3 Kamera", "WiFi", "1080P", "Gece Görüşü"],
      mainImage: {
        src: "/images/car-safety-and-security/vx2/main.png",
        alt: "APOLLON VX2 önden görünüm; geniş açılı ana lens ve yanına bağlanan ikinci kamera modülü",
      },
      galleryImages: [
        {
          src: "/images/car-safety-and-security/vx2/gallery/vx2-gallery-01.png",
          alt: "APOLLON VX2 açılı önden görünüm; ana lens, bağlı ikinci kamera ve ön cam aparatı",
        },
        {
          src: "/images/car-safety-and-security/vx2/gallery/vx2-gallery-02.png",
          alt: "APOLLON VX2 açılı arka görünüm; ekran, hafıza kartı yuvası ve aparat üzerindeki USB-C ile jak portları",
        },
        {
          src: "/images/car-safety-and-security/vx2/gallery/vx2-gallery-03.png",
          alt: "APOLLON VX2 arkadan görünüm; ekranın tamamı ve döner ikinci kamera modülü",
        },
        {
          src: "/images/car-safety-and-security/vx2/gallery/vx2-gallery-04.png",
          alt: "APOLLON VX2 aksesuarları: montaj aparatıyla ek kamera, araç içi şarj adaptörü ve USB-C kablo",
        },
      ],
      metaTitle:
        "APOLLON VX2 / F6 — 3 Kameralı WiFi Akıllı Araç Kayıt Sistemi | Apollon",
      metaDescription:
        "APOLLON VX2 / F6; 1080P görüntü kalitesi, mobil uygulama desteği, gece görüşü, park gözetimi, döngüsel kayıt ve acil durum kilidi sunan 3 kameralı WiFi akıllı araç kayıt sistemidir.",
    },
  },
  {
    // Official product document received 2026-08-26. Supersedes the earlier
    // provisional catalogue entry (which listed Wi-Fi / G-Sensor / App Control
    // and made no mention of 4G, GPS, cloud access or fleet tracking).
    slug: "vx1",
    name: "APOLLON VX1",
    modelReference: "APOLLON VX1 / F8",
    group: "connected-cameras",
    cataloguePriceReferenceUsd: 170,
    imageBase: "/images/car-safety-and-security/vx1",
    en: {
      productType: "4G Smart Dual-Camera Vehicle Recording & Tracking System",
      cardType: "4G Dual-Camera Vehicle System",
      shortDescription:
        "A 4G smart dual-camera vehicle recording and tracking system combining GPS, 1080P recording, cloud access, fleet tracking and parking surveillance.",
      descriptionParagraphs: [
        "Stay in control of your vehicle, even when you are not in it.",
        "APOLLON VX1 / F8 is an advanced vehicle security and tracking solution that brings 4G connectivity, GPS, a dual-camera system, 1080P recording, fleet tracking and cloud access together in a single platform. Alongside personal use, it is a capable option for businesses that need to monitor their vehicles remotely.",
      ],
      summary:
        "4G • GPS • Dual Camera • 1080P • Cloud Access • Fleet Tracking • Parking Surveillance • Remote Notifications",
      features: [
        "4G Connectivity",
        "GPS",
        "Dual-Camera System",
        "1080P Recording",
        "Cloud Access",
        "Fleet Tracking",
        "Parking Surveillance",
        "Loop Recording",
        "Remote Notifications",
      ],
      featureSections: [
        {
          heading: "4G Connectivity",
          text: "Lets you take advantage of connected vehicle technologies and remote access features.",
        },
        {
          heading: "GPS",
          text: "Strengthens control over your vehicle through location-based tracking.",
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
          heading: "Cloud Access",
          text: "Makes recording and tracking more functional through a connected usage experience.",
        },
        {
          heading: "Fleet Tracking",
          text: "Suits commercial vehicle and fleet use as well as individual vehicles.",
        },
        {
          heading: "Parking Surveillance",
          text: "Adds an extra layer of security while your vehicle is parked.",
        },
        {
          heading: "Loop Recording",
          text: "Simplifies storage management and supports continuous recording.",
        },
        {
          heading: "Remote Notifications",
          text: "Smart notification infrastructure that helps you keep track of important events from a distance.",
        },
      ],
      highlights: ["4G", "GPS", "Dual Camera", "1080P"],
      mainImage: {
        src: "/images/car-safety-and-security/vx1/main.png",
        alt: "APOLLON VX1 dash camera, front view showing the wide-angle lens and windscreen mount",
      },
      galleryImages: [
        {
          src: "/images/car-safety-and-security/vx1/gallery/vx1-gallery-01.png",
          alt: "APOLLON VX1 second camera with its mounting bracket, connection lead and power cable",
        },
        {
          src: "/images/car-safety-and-security/vx1/gallery/vx1-gallery-02.png",
          alt: "APOLLON VX1 angled rear view showing the display, memory card slot and the mount connection ports",
        },
        {
          src: "/images/car-safety-and-security/vx1/gallery/vx1-gallery-03.png",
          alt: "APOLLON VX1 rear view showing the display and the connection ports on top of the mount",
        },
        {
          src: "/images/car-safety-and-security/vx1/gallery/vx1-gallery-04.png",
          alt: "APOLLON VX1 angled rear view showing the display and the product label on the side of the unit",
        },
        {
          src: "/images/car-safety-and-security/vx1/gallery/vx1-gallery-05.png",
          alt: "APOLLON VX1 in use, with the display showing a live camera view and on-screen timestamp",
        },
      ],
      metaTitle:
        "APOLLON VX1 / F8 - 4G Smart Dual-Camera Vehicle Recording & Tracking System | Apollon",
      metaDescription:
        "APOLLON VX1 / F8 brings 4G connectivity, GPS, a dual-camera system, 1080P recording, cloud access, fleet tracking, parking surveillance, loop recording and remote notifications together in one vehicle security and tracking platform.",
    },
    tr: {
      productType: "4G Akıllı Çift Kameralı Araç Kayıt ve Takip Sistemi",
      cardType: "4G Çift Kameralı Araç Sistemi",
      shortDescription:
        "GPS, 1080P kayıt, bulut erişimi, filo takibi ve park gözetimini bir araya getiren 4G akıllı çift kameralı araç kayıt ve takip sistemi.",
      descriptionParagraphs: [
        "Aracınız siz yanında değilken bile kontrolünüzden çıkmasın.",
        "APOLLON VX1/F8; 4G bağlantısı, GPS, çift kamera, 1080P kayıt, filo takibi ve bulut erişimini tek sistemde bir araya getiren gelişmiş araç güvenlik ve takip çözümüdür. Bireysel kullanımın yanı sıra araçlarını uzaktan takip etmek isteyen işletmeler için de güçlü bir alternatif sunar.",
      ],
      summary:
        "4G • GPS • Çift Kamera • 1080P • Bulut Erişimi • Filo Takibi • Park Gözetimi • Uzaktan Bildirim",
      features: [
        "4G Bağlantısı",
        "GPS",
        "Çift Kameralı Sistem",
        "1080P Kayıt",
        "Bulut Erişimi",
        "Filo Takibi",
        "Park Gözetimi",
        "Döngüsel Kayıt",
        "Uzaktan Bildirimler",
      ],
      featureSections: [
        {
          heading: "4G Bağlantısı",
          text: "Bağlantılı araç teknolojilerinden ve uzaktan erişim özelliklerinden yararlanmanızı sağlar.",
        },
        {
          heading: "GPS",
          text: "Konum tabanlı takip özellikleriyle aracınızın kontrolünü güçlendirir.",
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
          heading: "Bulut Erişimi",
          text: "Bağlantılı kullanım deneyimiyle kayıt ve takip özelliklerini daha fonksiyonel hale getirir.",
        },
        {
          heading: "Filo Takibi",
          text: "Bireysel araçların yanında ticari araç ve filo kullanımına da uygun bir yapı sunar.",
        },
        {
          heading: "Park Gözetimi",
          text: "Park halindeki aracınız için ek bir güvenlik katmanı sağlar.",
        },
        {
          heading: "Döngüsel Kayıt",
          text: "Hafıza yönetimini kolaylaştırarak sürekli kayıt kullanımını destekler.",
        },
        {
          heading: "Uzaktan Bildirimler",
          text: "Önemli durumların uzaktan takip edilmesine yardımcı olan akıllı bildirim altyapısı sunar.",
        },
      ],
      highlights: ["4G", "GPS", "Çift Kamera", "1080P"],
      mainImage: {
        src: "/images/car-safety-and-security/vx1/main.png",
        alt: "APOLLON VX1 araç kamerası; geniş açılı lensi ve ön cam bağlantısıyla önden görünüm",
      },
      galleryImages: [
        {
          src: "/images/car-safety-and-security/vx1/gallery/vx1-gallery-01.png",
          alt: "APOLLON VX1 ikinci kamerası; montaj aparatı, bağlantı kablosu ve güç kablosuyla birlikte",
        },
        {
          src: "/images/car-safety-and-security/vx1/gallery/vx1-gallery-02.png",
          alt: "APOLLON VX1 açılı arka görünüm; ekran, hafıza kartı yuvası ve bağlantı portları",
        },
        {
          src: "/images/car-safety-and-security/vx1/gallery/vx1-gallery-03.png",
          alt: "APOLLON VX1 arkadan görünüm; ekran ve bağlantı aparatı üzerindeki portlar",
        },
        {
          src: "/images/car-safety-and-security/vx1/gallery/vx1-gallery-04.png",
          alt: "APOLLON VX1 açılı arka görünüm; ekran ve cihazın yan yüzeyindeki ürün etiketi",
        },
        {
          src: "/images/car-safety-and-security/vx1/gallery/vx1-gallery-05.png",
          alt: "APOLLON VX1 kullanım hâlinde; ekranda canlı kamera görüntüsü ve zaman damgası",
        },
      ],
      metaTitle:
        "APOLLON VX1 / F8 - 4G Akıllı Çift Kameralı Araç Kayıt ve Takip Sistemi | Apollon",
      metaDescription:
        "APOLLON VX1 / F8; 4G bağlantısı, GPS, çift kamera, 1080P kayıt, bulut erişimi, filo takibi, park gözetimi, döngüsel kayıt ve uzaktan bildirim özelliklerini tek bir araç güvenlik ve takip sisteminde birleştirir.",
    },
  },
  {
    // Official product document received 2026-08-30. Supersedes the earlier
    // provisional entry, which positioned VX3 as a three-camera WiFi system.
    // The official document describes a 4G + GPS connected camera instead.
    slug: "vx3",
    name: "APOLLON VX3",
    modelReference: "APOLLON VX3 / B4",
    group: "connected-cameras",
    cataloguePriceReferenceUsd: 180,
    imageBase: "/images/car-safety-and-security/vx3",
    en: {
      productType: "4G + GPS Smart Vehicle Camera",
      shortDescription:
        "A 4G-connected smart vehicle camera with GPS, 1080P recording, remote viewing, app control, night vision and parking surveillance.",
      descriptionParagraphs: [
        "More than a recorder: a smart camera system that keeps you connected to your vehicle.",
        "APOLLON VX3 / B4 brings 4G connectivity, GPS, 1080P recording, remote viewing and app control together. It is a strong solution developed for users who take connected vehicle security seriously.",
      ],
      summary:
        "4G • GPS • 1080P • Remote Viewing • App Control • Night Vision • Parking Surveillance",
      features: [
        "4G Connectivity",
        "GPS",
        "1080P Recording",
        "Remote Viewing",
        "App Control",
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
          heading: "1080P Recording",
          text: "Captures moments on the road clearly.",
        },
        {
          heading: "Remote Viewing",
          text: "Lets you make use of the camera's connected features from a distance.",
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
      highlights: ["4G", "GPS", "1080P", "Remote Viewing"],
      mainImage: {
        src: "/images/car-safety-and-security/vx3/1.png",
        alt: "APOLLON VX3 front view, showing the lens, the 4G marking on the body and the GPS mount above it",
      },
      galleryImages: [
        {
          src: "/images/car-safety-and-security/vx3/gallery/vx3-gallery-01.png",
          alt: "APOLLON VX3 angled front view, showing the GPS mount with its power input and the 4G marking on the body",
        },
        {
          src: "/images/car-safety-and-security/vx3/gallery/vx3-gallery-02.png",
          alt: "APOLLON VX3 rear three-quarter view, showing the button, the vents and the ports on the side of the mount",
        },
        {
          src: "/images/car-safety-and-security/vx3/gallery/vx3-gallery-03.png",
          alt: "APOLLON VX3 angled view from the other side, showing the lens with its protective film and the microphone opening",
        },
        {
          src: "/images/car-safety-and-security/vx3/gallery/vx3-gallery-04.png",
          alt: "APOLLON VX3 accessories: additional camera with its mounting bracket, plus the in-car charger and USB-C cable",
        },
      ],
      metaTitle:
        "APOLLON VX3 / B4 — 4G + GPS Smart Vehicle Camera | Apollon",
      metaDescription:
        "APOLLON VX3 / B4 is a 4G + GPS smart vehicle camera with 1080P recording, remote viewing, app control, night vision, parking surveillance and loop recording.",
    },
    tr: {
      productType: "4G + GPS Akıllı Araç Kamerası",
      shortDescription:
        "GPS, 1080P kayıt, uzaktan görüntüleme, uygulama kontrolü, gece görüşü ve park gözetimi sunan 4G bağlantılı akıllı araç kamerası.",
      descriptionParagraphs: [
        "Sadece kayıt yapan değil, aracınızla bağlantıda kalmanızı sağlayan akıllı kamera sistemi.",
        "APOLLON VX3/B4; 4G bağlantısı, GPS, 1080P kayıt, uzaktan görüntüleme ve uygulama kontrolünü bir araya getirir. Bağlantılı araç güvenliğine önem veren kullanıcılar için geliştirilmiş güçlü bir çözümdür.",
      ],
      summary:
        "4G • GPS • 1080P • Uzaktan Görüntüleme • Uygulama Kontrolü • Gece Görüşü • Park Gözetimi",
      features: [
        "4G Bağlantısı",
        "GPS",
        "1080P Kayıt",
        "Uzaktan Görüntüleme",
        "Uygulama Kontrolü",
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
          heading: "1080P Kayıt",
          text: "Sürüş anlarının net şekilde kayıt altına alınmasını sağlar.",
        },
        {
          heading: "Uzaktan Görüntüleme",
          text: "Kameranın bağlantılı özelliklerinden uzaktan yararlanılmasını destekler.",
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
      highlights: ["4G", "GPS", "1080P", "Uzaktan Görüntüleme"],
      mainImage: {
        src: "/images/car-safety-and-security/vx3/1.png",
        alt: "APOLLON VX3 önden görünüm; lens, gövde üzerindeki 4G işareti ve üstteki GPS aparatı",
      },
      galleryImages: [
        {
          src: "/images/car-safety-and-security/vx3/gallery/vx3-gallery-01.png",
          alt: "APOLLON VX3 açılı önden görünüm; güç girişiyle birlikte GPS aparatı ve gövdedeki 4G işareti",
        },
        {
          src: "/images/car-safety-and-security/vx3/gallery/vx3-gallery-02.png",
          alt: "APOLLON VX3 arka üçte bir görünüm; tuş, havalandırma kanalları ve aparatın yanındaki portlar",
        },
        {
          src: "/images/car-safety-and-security/vx3/gallery/vx3-gallery-03.png",
          alt: "APOLLON VX3 diğer taraftan açılı görünüm; koruyucu filmiyle lens ve mikrofon deliği",
        },
        {
          src: "/images/car-safety-and-security/vx3/gallery/vx3-gallery-04.png",
          alt: "APOLLON VX3 aksesuarları: montaj aparatıyla ek kamera, araç içi şarj adaptörü ve USB-C kablo",
        },
      ],
      metaTitle:
        "APOLLON VX3 / B4 — 4G + GPS Akıllı Araç Kamerası | Apollon",
      metaDescription:
        "APOLLON VX3 / B4; 1080P kayıt, uzaktan görüntüleme, uygulama kontrolü, gece görüşü, park gözetimi ve döngüsel kayıt sunan 4G + GPS akıllı araç kamerasıdır.",
    },
  },
  {
    // Official product document received 2026-08-30. Supersedes the earlier
    // provisional entry, which positioned VX4 as a 3-channel 1080P camera.
    // The official document describes a front + rear 4K WiFi system.
    slug: "vx4",
    name: "APOLLON VX4",
    modelReference: "APOLLON VX4 / F7",
    group: "connected-cameras",
    cataloguePriceReferenceUsd: 200,
    imageBase: "/images/car-safety-and-security/vx4",
    en: {
      productType: "4K Front + Rear WiFi Dash Camera System",
      cardType: "4K Front + Rear WiFi System",
      shortDescription:
        "A 4K front and rear dash camera system with WiFi, app control, parking mode, loop recording and G-sensor event capture.",
      descriptionParagraphs: [
        "Record the road ahead and the road behind, both at 4K levels of detail.",
        "APOLLON VX4 / F7 combines a front and rear camera system and 4K resolution with WiFi and app control. It is one of the strongest options in the APOLLON VX series for drivers who put image quality first.",
      ],
      summary:
        "Front + Rear Cameras • 4K Resolution • WiFi • App Control • Parking Mode • G-Sensor",
      features: [
        "Front + Rear Cameras",
        "4K Resolution",
        "WiFi",
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
          heading: "WiFi",
          text: "Wireless connectivity makes the camera more practical to use.",
        },
        {
          heading: "App Control",
          text: "Supports access to the device's features through a compatible mobile app.",
        },
        {
          heading: "Parking Mode",
          text: "Adds a further security function for the parked vehicle.",
        },
        {
          heading: "Loop Recording",
          text: "Manages storage automatically to support continuous recording.",
        },
        {
          heading: "G-Sensor",
          text: "Sensor technology that helps detect impacts and sudden movements.",
        },
      ],
      highlights: ["Front + Rear Cameras", "4K", "WiFi", "Parking Mode"],
      mainImage: {
        src: "/images/car-safety-and-security/vx4/main.png",
        alt: "APOLLON VX4 front view, showing the 4K Dash Cam body, the wide-angle lens and the windscreen mount",
      },
      galleryImages: [
        {
          src: "/images/car-safety-and-security/vx4/gallery/vx4-gallery-01.png",
          alt: "APOLLON VX4 angled front view, showing the lens, the textured front panel and the windscreen mount",
        },
        {
          src: "/images/car-safety-and-security/vx4/gallery/vx4-gallery-02.png",
          alt: "APOLLON VX4 angled view from the other side, showing the USB-C, memory card and AV connections",
        },
        {
          src: "/images/car-safety-and-security/vx4/gallery/vx4-gallery-03.png",
          alt: "APOLLON VX4 rear view, showing the full display and the underside of the mount",
        },
        {
          src: "/images/car-safety-and-security/vx4/gallery/vx4-gallery-04.png",
          alt: "APOLLON VX4 side profile, showing the control buttons and the depth of the lens barrel",
        },
        {
          src: "/images/car-safety-and-security/vx4/gallery/vx4-gallery-05.png",
          alt: "APOLLON VX4 accessories: additional camera with its mounting bracket, plus the in-car charger and USB-C cable",
        },
      ],
      metaTitle:
        "APOLLON VX4 / F7 — 4K Front + Rear WiFi Dash Camera System | Apollon",
      metaDescription:
        "APOLLON VX4 / F7 is a 4K front and rear WiFi dash camera system with app control, parking mode, loop recording and a G-sensor.",
    },
    tr: {
      productType: "4K Ön + Arka WiFi Araç Kamera Sistemi",
      cardType: "4K Ön + Arka WiFi Sistem",
      shortDescription:
        "WiFi, uygulama kontrolü, park modu, döngüsel kayıt ve G-sensörü sunan 4K ön ve arka araç kamera sistemi.",
      descriptionParagraphs: [
        "Yolun önünü de arkasını da 4K detay seviyesiyle kayıt altına alın.",
        "APOLLON VX4/F7, ön + arka kamera sistemi ve 4K çözünürlüğü WiFi ve uygulama kontrolüyle birleştirir. Görüntü kalitesini ön planda tutan sürücüler için APOLLON VX serisinin güçlü seçeneklerinden biridir.",
      ],
      summary:
        "Ön + Arka Kamera • 4K Çözünürlük • WiFi • Uygulama Kontrolü • Park Modu • G-Sensörü",
      features: [
        "Ön + Arka Kamera",
        "4K Çözünürlük",
        "WiFi",
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
          heading: "WiFi",
          text: "Kablosuz bağlantı sayesinde kamera kullanımını daha pratik hale getirir.",
        },
        {
          heading: "Uygulama Kontrolü",
          text: "Uyumlu mobil uygulama üzerinden cihaz özelliklerine erişimi destekler.",
        },
        {
          heading: "Park Modu",
          text: "Park halindeki araç için ek güvenlik fonksiyonu sunar.",
        },
        {
          heading: "Döngüsel Kayıt",
          text: "Depolama alanını otomatik yöneterek kayıt sürekliliğini destekler.",
        },
        {
          heading: "G-Sensörü",
          text: "Darbe ve ani hareketlerin algılanmasına yardımcı olan sensör teknolojisidir.",
        },
      ],
      highlights: ["Ön + Arka Kamera", "4K", "WiFi", "Park Modu"],
      mainImage: {
        src: "/images/car-safety-and-security/vx4/main.png",
        alt: "APOLLON VX4 önden görünüm; 4K Dash Cam gövdesi, geniş açılı lens ve ön cam aparatı",
      },
      galleryImages: [
        {
          src: "/images/car-safety-and-security/vx4/gallery/vx4-gallery-01.png",
          alt: "APOLLON VX4 açılı önden görünüm; lens, dokulu ön panel ve ön cam aparatı",
        },
        {
          src: "/images/car-safety-and-security/vx4/gallery/vx4-gallery-02.png",
          alt: "APOLLON VX4 diğer taraftan açılı görünüm; USB-C, hafıza kartı ve AV bağlantıları",
        },
        {
          src: "/images/car-safety-and-security/vx4/gallery/vx4-gallery-03.png",
          alt: "APOLLON VX4 arkadan görünüm; ekranın tamamı ve aparatın alt yüzeyi",
        },
        {
          src: "/images/car-safety-and-security/vx4/gallery/vx4-gallery-04.png",
          alt: "APOLLON VX4 yandan görünüm; kontrol tuşları ve lens gövdesinin derinliği",
        },
        {
          src: "/images/car-safety-and-security/vx4/gallery/vx4-gallery-05.png",
          alt: "APOLLON VX4 aksesuarları: montaj aparatıyla ek kamera, araç içi şarj adaptörü ve USB-C kablo",
        },
      ],
      metaTitle:
        "APOLLON VX4 / F7 — 4K Ön + Arka WiFi Araç Kamera Sistemi | Apollon",
      metaDescription:
        "APOLLON VX4 / F7; uygulama kontrolü, park modu, döngüsel kayıt ve G-sensörü sunan 4K ön + arka WiFi araç kamera sistemidir.",
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
      metaTitle: "APOLLON VISION 360 — Universal 360° Camera System | Apollon",
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
