import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Check, ChevronRight } from "lucide-react"
import { CompatibilityForm } from "@/components/car-multimedia/CompatibilityForm"
import { type Locale } from "@/lib/i18n"

type PageProps = { params: Promise<{ locale: Locale; brand: string }> }

// ─── Types ───────────────────────────────────────────────────────────────────

type BrandLocale = {
  title: string
  subtitle: string
  modelsLabel: string
  modelsNote: string
  featuresLabel: string
  features: string[]
  formTitle: string
  formDesc: string
  compatibilityCta: string
  productsCta: string
  backLabel: string
  metaTitle: string
  metaDescription: string
}

type BrandData = {
  en: BrandLocale
  tr: BrandLocale
  prefilledBrand: { en: string; tr: string }
  models: string[]
  products: { name: string; description: { en: string; tr: string } }[]
}

// ─── Brand Data ──────────────────────────────────────────────────────────────

const brands: Record<string, BrandData> = {
  "universal-android-screens": {
    prefilledBrand: {
      en: "Universal Android Screens",
      tr: "Universal Android Ekranlar",
    },
    models: [],
    products: [
      {
        name: "Universal 13-Inch Android Multimedia System",
        description: {
          en: "A universal 13-inch Android multimedia screen for vehicles needing a modern display upgrade. Supports Apple CarPlay, Android Auto, navigation, and media without vehicle-specific fitment constraints.",
          tr: "Modern ekran yükseltmesi isteyen araçlar için universal 13 inç Android multimedya ekranı. Araç spesifik uyumluluk kısıtlaması olmadan Apple CarPlay, Android Auto, navigasyon ve medya desteği sunar.",
        },
      },
      {
        name: "Universal 11.5-Inch Touch Screen Multimedia System",
        description: {
          en: "A compact-footprint universal Android touch screen for vehicles with tighter installation space or different mounting requirements. Supports CarPlay, Android Auto, and multimedia functions.",
          tr: "Daha dar montaj alanına sahip araçlar için kompakt yapıda universal Android dokunmatik ekran seçeneği. CarPlay, Android Auto ve multimedya işlevlerini destekler.",
        },
      },
      {
        name: "Universal 2K Android Screen Option",
        description: {
          en: "A universal 2K Android multimedia screen for sharper display quality, navigation clarity, and improved in-cabin visual experience. Compatibility check recommended before installation.",
          tr: "Daha net görüntü kalitesi ve navigasyon netliği için universal 2K Android multimedya ekranı. Montaj öncesi uyumluluk kontrolü önerilir.",
        },
      },
    ],
    en: {
      title: "Universal Android Screens",
      subtitle:
        "Flexible Android multimedia screen options for vehicles that need a modern display, smarter connectivity, navigation, and entertainment upgrade.",
      modelsLabel: "Vehicle compatibility",
      modelsNote:
        "Suitable for a wide range of vehicles depending on dashboard structure, installation space, wiring, and mounting requirements.",
      featuresLabel: "Key features",
      features: [
        "Universal installation approach",
        "Large touch screen options",
        "Apple CarPlay / Android Auto support",
        "Navigation and media experience",
        "Compatibility check recommended before installation",
      ],
      formTitle: "Ask for compatibility",
      formDesc:
        "Send your vehicle details and our team will help confirm the correct multimedia system path.",
      compatibilityCta: "Check Compatibility",
      productsCta: "Request Product Information",
      backLabel: "Car Multimedia Systems",
      metaTitle: "Universal Android Screens | Apollon Car Multimedia",
      metaDescription:
        "Apollon universal Android screens bring CarPlay, Android Auto, navigation, and media to a wide range of vehicles. Check compatibility before installation.",
    },
    tr: {
      title: "Universal Android Ekranlar",
      subtitle:
        "Modern ekran, daha akıllı bağlantı, navigasyon ve eğlence yükseltmesi isteyen araçlar için esnek Android multimedya ekran seçenekleri.",
      modelsLabel: "Araç uyumluluğu",
      modelsNote:
        "Göğüs yapısı, montaj alanı, tesisat ve bağlantı ihtiyaçlarına göre birçok farklı araç için değerlendirilebilir.",
      featuresLabel: "Öne çıkan özellikler",
      features: [
        "Universal montaj yaklaşımı",
        "Geniş dokunmatik ekran seçenekleri",
        "Apple CarPlay / Android Auto desteği",
        "Navigasyon ve medya deneyimi",
        "Montaj öncesi uyumluluk kontrolü önerilir",
      ],
      formTitle: "Uyumluluk sorun",
      formDesc:
        "Araç bilgilerinizi gönderin, ekibimiz doğru multimedya sistemi seçeneğini belirlemenize yardımcı olsun.",
      compatibilityCta: "Uyumluluk Sor",
      productsCta: "Ürün Bilgisi Al",
      backLabel: "Araç Multimedya Sistemleri",
      metaTitle: "Universal Android Ekranlar | Apollon Araç Multimedya",
      metaDescription:
        "Apollon universal Android ekranlar; CarPlay, Android Auto, navigasyon ve medya özellikleriyle birçok araca modern ekran yükseltmesi sunar.",
    },
  },

  audi: {
    prefilledBrand: { en: "Audi", tr: "Audi" },
    models: [
      "Audi A4",
      "Audi A5",
      "Audi B8 / B9 platform examples",
      "Other models after compatibility check",
    ],
    products: [
      {
        name: "For Audi A4 / A5 Android Multimedia System",
        description: {
          en: "An Android multimedia system designed for selected Audi A4 and A5 models. Supports Apple CarPlay, Android Auto, high-resolution display, and original cabin integration on supported configurations.",
          tr: "Seçili Audi A4 ve A5 modelleri için tasarlanmış Android multimedya sistemi. Desteklenen yapılandırmalarda Apple CarPlay, Android Auto, yüksek çözünürlüklü ekran ve orijinal kabin entegrasyonunu destekler.",
        },
      },
    ],
    en: {
      title: "Audi Multimedia Systems",
      subtitle:
        "Vehicle-specific Android multimedia upgrade options for selected Audi models, designed to bring modern display, navigation, CarPlay, Android Auto, and audio features into the cabin.",
      modelsLabel: "Compatible model examples",
      modelsNote: "Compatibility depends on model, year, trim level, and factory system.",
      featuresLabel: "Key features",
      features: [
        "Multiple screen size options depending on model",
        "Apple CarPlay / Android Auto support",
        "DSP audio options on selected models",
        "Plug-in installation approach on selected configurations",
        "Original cabin integration focus",
      ],
      formTitle: "Ask for compatibility",
      formDesc:
        "Send your Audi model, year, and current system details. Our team will confirm the correct multimedia system path.",
      compatibilityCta: "Check Compatibility",
      productsCta: "Request Product Information",
      backLabel: "Car Multimedia Systems",
      metaTitle: "Audi Android Multimedya Sistemleri | Apollon",
      metaDescription:
        "Audi modelleri için Android multimedya, CarPlay, Android Auto, navigasyon ve araca özel ekran seçeneklerini keşfedin. Uyumluluk için Apollon ile iletişime geçin.",
    },
    tr: {
      title: "Audi Multimedya Sistemleri",
      subtitle:
        "Seçili Audi modelleri için modern ekran, navigasyon, CarPlay, Android Auto ve ses özelliklerini kabine taşıyan araca özel Android multimedya yükseltme seçenekleri.",
      modelsLabel: "Uyumlu model örnekleri",
      modelsNote: "Uyumluluk; model, yıl, donanım seviyesi ve fabrika sistemine göre değişir.",
      featuresLabel: "Öne çıkan özellikler",
      features: [
        "Modele göre farklı ekran boyutu seçenekleri",
        "Apple CarPlay / Android Auto desteği",
        "Seçili modellerde DSP ses seçenekleri",
        "Seçili yapılandırmalarda soket uyumlu montaj yaklaşımı",
        "Orijinal kabin entegrasyonu odağı",
      ],
      formTitle: "Uyumluluk sorun",
      formDesc:
        "Audi modelinizi, yılını ve mevcut sistem bilgilerinizi gönderin. Ekibimiz doğru multimedya sistemi yolunu doğrulasın.",
      compatibilityCta: "Uyumluluk Sor",
      productsCta: "Ürün Bilgisi Al",
      backLabel: "Araç Multimedya Sistemleri",
      metaTitle: "Audi Android Multimedya Sistemleri | Apollon",
      metaDescription:
        "Seçili Audi modelleri için Android multimedya, CarPlay, Android Auto, navigasyon ve araca özel ekran seçeneklerini keşfedin. Uyumluluk için Apollon ile iletişime geçin.",
    },
  },

  bmw: {
    prefilledBrand: { en: "BMW", tr: "BMW" },
    models: [
      "BMW 5 Series F10 / F11",
      "CIC / NBT system examples",
      "Other models after compatibility check",
    ],
    products: [
      {
        name: "For BMW 5 Series F10 / F11 Android Multimedia System",
        description: {
          en: "An Android multimedia system compatible with selected BMW 5 Series F10 and F11 models. Designed to integrate with CIC or NBT factory systems while bringing modern screen quality and smartphone connectivity.",
          tr: "Seçili BMW 5 Serisi F10 ve F11 modelleriyle uyumlu Android multimedya sistemi. CIC veya NBT fabrika sistemleriyle entegrasyon sağlarken modern ekran kalitesi ve akıllı telefon bağlantısı sunar.",
        },
      },
    ],
    en: {
      title: "BMW Multimedia Systems",
      subtitle:
        "Android multimedia upgrade options for selected BMW models, designed to enhance screen quality, connectivity, navigation, and everyday cabin usability.",
      modelsLabel: "Compatible model examples",
      modelsNote: "Compatibility depends on model, year, trim level, and factory system variant.",
      featuresLabel: "Key features",
      features: [
        "High-resolution display options",
        "Anti-glare viewing features on selected models",
        "Apple CarPlay / Android Auto support",
        "Original system integration",
        "Compatibility depends on factory system",
      ],
      formTitle: "Ask for compatibility",
      formDesc:
        "Send your BMW model, year, and factory system details. We will help you find the correct multimedia upgrade path.",
      compatibilityCta: "Check Compatibility",
      productsCta: "Request Product Information",
      backLabel: "Car Multimedia Systems",
      metaTitle: "BMW Android Multimedia Systems | Apollon",
      metaDescription:
        "Android multimedia upgrades for selected BMW models. CarPlay, Android Auto, navigation, and original system integration. Check compatibility with Apollon.",
    },
    tr: {
      title: "BMW Multimedya Sistemleri",
      subtitle:
        "Seçili BMW modelleri için ekran kalitesi, bağlantı, navigasyon ve günlük kabin kullanımını geliştirmeye odaklanan Android multimedya yükseltme seçenekleri.",
      modelsLabel: "Uyumlu model örnekleri",
      modelsNote: "Uyumluluk; model, yıl, donanım seviyesi ve fabrika sistemi varyantına göre değişir.",
      featuresLabel: "Öne çıkan özellikler",
      features: [
        "Yüksek çözünürlüklü ekran seçenekleri",
        "Seçili modellerde parlama önleyici görüntü özellikleri",
        "Apple CarPlay / Android Auto desteği",
        "Orijinal sistem entegrasyonu",
        "Uyumluluk fabrika sistemine göre değişir",
      ],
      formTitle: "Uyumluluk sorun",
      formDesc:
        "BMW modelinizi, yılını ve fabrika sistemi bilgilerini gönderin. Doğru multimedya yükseltme yolunu bulmanıza yardımcı olalım.",
      compatibilityCta: "Uyumluluk Sor",
      productsCta: "Ürün Bilgisi Al",
      backLabel: "Araç Multimedya Sistemleri",
      metaTitle: "BMW Android Multimedya Sistemleri | Apollon",
      metaDescription:
        "Seçili BMW modelleri için Android ekran, CarPlay, Android Auto, navigasyon ve premium kabin entegrasyonu sunan multimedya seçeneklerini inceleyin.",
    },
  },

  "mercedes-benz": {
    prefilledBrand: { en: "Mercedes-Benz", tr: "Mercedes-Benz" },
    models: [
      "Mercedes-Benz ML",
      "Mercedes-Benz GL",
      "Mercedes-Benz GLE",
      "Mercedes-Benz A-Class",
      "Mercedes-Benz CLA",
      "Mercedes-Benz GLA",
      "Other models after compatibility check",
    ],
    products: [
      {
        name: "Mercedes-Benz ML / GL / GLE Apple CarPlay Radio",
        description: {
          en: "An Apple CarPlay-capable multimedia radio upgrade for selected Mercedes-Benz ML, GL, and GLE models. Brings wireless smartphone connectivity, navigation, and media control into the original cabin interface.",
          tr: "Seçili Mercedes-Benz ML, GL ve GLE modelleri için Apple CarPlay destekli multimedya radyo yükseltmesi. Orijinal kabin arayüzüne kablosuz akıllı telefon bağlantısı, navigasyon ve medya kontrolü ekler.",
        },
      },
      {
        name: "Mercedes-Benz A / CLA / GLA Android System",
        description: {
          en: "An Android multimedia system for selected Mercedes-Benz A-Class, CLA, and GLA models. Designed to modernize the cabin interface with Android connectivity, navigation, and media features.",
          tr: "Seçili Mercedes-Benz A Serisi, CLA ve GLA modelleri için Android multimedya sistemi. Kabin arayüzünü Android bağlantısı, navigasyon ve medya özellikleriyle modernleştirmeye yönelik tasarım.",
        },
      },
    ],
    en: {
      title: "Mercedes-Benz Multimedia Systems",
      subtitle:
        "Vehicle-specific Android multimedia systems for selected Mercedes-Benz models, built to modernize the interface while respecting the original premium cabin.",
      modelsLabel: "Compatible model examples",
      modelsNote: "Compatibility depends on model, year, trim level, and original system variant.",
      featuresLabel: "Key features",
      features: [
        "12.3-inch display options on selected models",
        "2K screen examples depending on model",
        "Qualcomm / automotive-grade processor options on selected models",
        "Original system switching",
        "Premium cabin integration",
      ],
      formTitle: "Ask for compatibility",
      formDesc:
        "Send your Mercedes-Benz model, year, and current system details. We will confirm the right multimedia upgrade path.",
      compatibilityCta: "Check Compatibility",
      productsCta: "Request Product Information",
      backLabel: "Car Multimedia Systems",
      metaTitle: "Mercedes-Benz Android Multimedia Systems | Apollon",
      metaDescription:
        "Android multimedia systems for selected Mercedes-Benz models. CarPlay, Android Auto, navigation, and original system integration. Contact Apollon to check compatibility.",
    },
    tr: {
      title: "Mercedes-Benz Multimedya Sistemleri",
      subtitle:
        "Seçili Mercedes-Benz modelleri için orijinal premium kabin hissini korurken araç arayüzünü modernleştirmeye odaklanan araca özel Android multimedya sistemleri.",
      modelsLabel: "Uyumlu model örnekleri",
      modelsNote: "Uyumluluk; model, yıl, donanım seviyesi ve orijinal sistem varyantına göre değişir.",
      featuresLabel: "Öne çıkan özellikler",
      features: [
        "Seçili modellerde 12.3 inç ekran seçenekleri",
        "Modele göre 2K ekran örnekleri",
        "Seçili modellerde Qualcomm / otomotiv sınıfı işlemci seçenekleri",
        "Orijinal sistem geçişi",
        "Premium kabin entegrasyonu",
      ],
      formTitle: "Uyumluluk sorun",
      formDesc:
        "Mercedes-Benz modelinizi, yılını ve mevcut sistem bilgilerini gönderin. Doğru multimedya yükseltme yolunu doğrulayalım.",
      compatibilityCta: "Uyumluluk Sor",
      productsCta: "Ürün Bilgisi Al",
      backLabel: "Araç Multimedya Sistemleri",
      metaTitle: "Mercedes-Benz Android Multimedya Sistemleri | Apollon",
      metaDescription:
        "Seçili Mercedes-Benz modelleri için Android multimedya ekran, CarPlay, Android Auto, navigasyon ve orijinal sistem entegrasyonu odaklı çözümleri keşfedin.",
    },
  },

  porsche: {
    prefilledBrand: { en: "Porsche", tr: "Porsche" },
    models: [
      "Porsche Cayenne 2010–2017",
      "Porsche Panamera",
      "Other models after compatibility check",
    ],
    products: [
      {
        name: "Porsche Cayenne Android Car Stereo",
        description: {
          en: "An Android car stereo upgrade for selected Porsche Cayenne models (approximately 2010–2017). Supports wireless CarPlay, Android Auto, DSP audio, and navigation on compatible configurations.",
          tr: "Seçili Porsche Cayenne modelleri için Android araç müziği yükseltmesi (yaklaşık 2010–2017). Uyumlu yapılandırmalarda kablosuz CarPlay, Android Auto, DSP ses ve navigasyonu destekler.",
        },
      },
      {
        name: "Porsche Panamera Multimedia System",
        description: {
          en: "A multimedia upgrade option for selected Porsche Panamera models. Designed to bring modern Android connectivity and display quality while respecting the premium character of the original cabin.",
          tr: "Seçili Porsche Panamera modelleri için multimedya yükseltme seçeneği. Orijinal kabinin premium karakterini korurken modern Android bağlantısı ve ekran kalitesi sağlamaya odaklanır.",
        },
      },
    ],
    en: {
      title: "Porsche Multimedia Systems",
      subtitle:
        "Premium Android multimedia upgrade options for selected Porsche models, focused on performance, display quality, wireless connectivity, and refined cabin integration.",
      modelsLabel: "Compatible model examples",
      modelsNote: "Compatibility depends on model, year, trim level, and factory system.",
      featuresLabel: "Key features",
      features: [
        "12.3-inch HD display examples",
        "Snapdragon processor options on selected systems",
        "DSP and advanced sound field options",
        "Wireless CarPlay / Android Auto",
        "Vehicle-specific integration",
      ],
      formTitle: "Ask for compatibility",
      formDesc:
        "Send your Porsche model, year, and current system details. Our team will guide you to the correct multimedia upgrade.",
      compatibilityCta: "Check Compatibility",
      productsCta: "Request Product Information",
      backLabel: "Car Multimedia Systems",
      metaTitle: "Porsche Android Multimedia Systems | Apollon",
      metaDescription:
        "Premium Android multimedia upgrades for selected Porsche Cayenne and Panamera models. Wireless CarPlay, Android Auto, DSP audio. Contact Apollon for compatibility.",
    },
    tr: {
      title: "Porsche Multimedya Sistemleri",
      subtitle:
        "Seçili Porsche modelleri için performans, ekran kalitesi, kablosuz bağlantı ve rafine kabin entegrasyonuna odaklanan premium Android multimedya yükseltme seçenekleri.",
      modelsLabel: "Uyumlu model örnekleri",
      modelsNote: "Uyumluluk; model, yıl, donanım seviyesi ve fabrika sistemine göre değişir.",
      featuresLabel: "Öne çıkan özellikler",
      features: [
        "12.3 inç HD ekran örnekleri",
        "Seçili sistemlerde Snapdragon işlemci seçenekleri",
        "DSP ve gelişmiş ses alanı seçenekleri",
        "Kablosuz CarPlay / Android Auto",
        "Araca özel entegrasyon",
      ],
      formTitle: "Uyumluluk sorun",
      formDesc:
        "Porsche modelinizi, yılını ve mevcut sistem bilgilerini gönderin. Ekibimiz doğru multimedya yükseltmesine yönlendirsin.",
      compatibilityCta: "Uyumluluk Sor",
      productsCta: "Ürün Bilgisi Al",
      backLabel: "Araç Multimedya Sistemleri",
      metaTitle: "Porsche Android Multimedya Sistemleri | Apollon",
      metaDescription:
        "Seçili Porsche Cayenne ve Panamera modelleri için premium Android multimedya yükseltmeleri. Kablosuz CarPlay, Android Auto, DSP ses. Uyumluluk için Apollon ile iletişime geçin.",
    },
  },

  toyota: {
    prefilledBrand: { en: "Toyota", tr: "Toyota" },
    models: [
      "Toyota Prado LC250",
      "Toyota Prado LC150",
      "Toyota Prado LC125",
      "Toyota Prado LC120",
      "Other models after compatibility check",
    ],
    products: [
      {
        name: "Toyota Prado Android Multimedia Head Unit",
        description: {
          en: "An Android multimedia head unit designed for selected Toyota Prado models across multiple generations. Supports navigation, media, Apple CarPlay, and modern vehicle display features.",
          tr: "Birden fazla nesil seçili Toyota Prado modeli için tasarlanmış Android multimedya head unit. Navigasyon, medya, Apple CarPlay ve modern araç ekran özelliklerini destekler.",
        },
      },
    ],
    en: {
      title: "Toyota Multimedia Systems",
      subtitle:
        "Android multimedia systems for selected Toyota models, designed to improve navigation, display clarity, audio control, and connected driving features.",
      modelsLabel: "Compatible model examples",
      modelsNote: "Compatibility depends on model generation, year, trim level, and factory system.",
      featuresLabel: "Key features",
      features: [
        "Wide-view high-resolution display examples",
        "8-core processor options",
        "Radio and amplifier chip combinations depending on model",
        "EQ sound adjustments on selected models",
        "Navigation and media upgrade",
      ],
      formTitle: "Ask for compatibility",
      formDesc:
        "Send your Toyota model, year, and current system details. We will help you find the right multimedia system path.",
      compatibilityCta: "Check Compatibility",
      productsCta: "Request Product Information",
      backLabel: "Car Multimedia Systems",
      metaTitle: "Toyota Android Multimedia Systems | Apollon",
      metaDescription:
        "Android multimedia head units for selected Toyota Prado models. CarPlay, navigation, DSP audio. Contact Apollon to check compatibility.",
    },
    tr: {
      title: "Toyota Multimedya Sistemleri",
      subtitle:
        "Seçili Toyota modelleri için navigasyon, ekran netliği, ses kontrolü ve bağlantılı sürüş özelliklerini geliştirmeye yönelik Android multimedya sistemleri.",
      modelsLabel: "Uyumlu model örnekleri",
      modelsNote: "Uyumluluk; model nesli, yıl, donanım seviyesi ve fabrika sistemine göre değişir.",
      featuresLabel: "Öne çıkan özellikler",
      features: [
        "Geniş görüş açılı yüksek çözünürlüklü ekran örnekleri",
        "8 çekirdekli işlemci seçenekleri",
        "Modele göre radyo ve amplifikatör çip kombinasyonları",
        "Seçili modellerde EQ ses ayarları",
        "Navigasyon ve medya yükseltmesi",
      ],
      formTitle: "Uyumluluk sorun",
      formDesc:
        "Toyota modelinizi, yılını ve mevcut sistem bilgilerini gönderin. Doğru multimedya sistemi yolunu bulmanıza yardımcı olalım.",
      compatibilityCta: "Uyumluluk Sor",
      productsCta: "Ürün Bilgisi Al",
      backLabel: "Araç Multimedya Sistemleri",
      metaTitle: "Toyota Android Multimedya Sistemleri | Apollon",
      metaDescription:
        "Seçili Toyota Prado modelleri için Android multimedya head unit seçenekleri. CarPlay, navigasyon, DSP ses. Uyumluluk için Apollon ile iletişime geçin.",
    },
  },

  lexus: {
    prefilledBrand: { en: "Lexus", tr: "Lexus" },
    models: [
      "Lexus RX 270",
      "Lexus RX 350",
      "Lexus RX 450",
      "Lexus NX 200",
      "Lexus NX 300",
      "Other models after compatibility check",
    ],
    products: [
      {
        name: "Lexus RX Android Multimedia Head Unit",
        description: {
          en: "An Android multimedia head unit for selected Lexus RX models including RX 270, RX 350, and RX 450. Designed for vehicle-specific screen integration, CarPlay, Android Auto, and navigation functions.",
          tr: "RX 270, RX 350 ve RX 450 dahil seçili Lexus RX modelleri için Android multimedya head unit. Araca özel ekran entegrasyonu, CarPlay, Android Auto ve navigasyon işlevleri için tasarlanmıştır.",
        },
      },
      {
        name: "Lexus NX Android Auto and CarPlay Navigation Hub",
        description: {
          en: "An Android Auto and CarPlay navigation hub for selected Lexus NX models including NX 200 and NX 300. Brings modern connectivity and navigation to the vehicle cabin on supported configurations.",
          tr: "NX 200 ve NX 300 dahil seçili Lexus NX modelleri için Android Auto ve CarPlay navigasyon hub'ı. Desteklenen yapılandırmalarda modern bağlantı ve navigasyonu araç kabinine taşır.",
        },
      },
    ],
    en: {
      title: "Lexus Multimedia Systems",
      subtitle:
        "Vehicle-specific Android multimedia options for selected Lexus models, created to add modern navigation, CarPlay, Android Auto, and smarter screen control.",
      modelsLabel: "Compatible model examples",
      modelsNote: "Compatibility depends on model, year, trim level, and factory system variant.",
      featuresLabel: "Key features",
      features: [
        "Vehicle-specific screen integration",
        "Apple CarPlay / Android Auto",
        "Navigation hub functionality",
        "Original cabin compatibility focus",
        "Model-year dependent fitment",
      ],
      formTitle: "Ask for compatibility",
      formDesc:
        "Send your Lexus model, year, and current system details. Our team will help you find the correct multimedia path.",
      compatibilityCta: "Check Compatibility",
      productsCta: "Request Product Information",
      backLabel: "Car Multimedia Systems",
      metaTitle: "Lexus Android Multimedia Systems | Apollon",
      metaDescription:
        "Android multimedia systems for selected Lexus RX and NX models. CarPlay, Android Auto, navigation. Check compatibility with Apollon.",
    },
    tr: {
      title: "Lexus Multimedya Sistemleri",
      subtitle:
        "Seçili Lexus modelleri için modern navigasyon, CarPlay, Android Auto ve daha akıllı ekran kontrolü eklemeye yönelik araca özel Android multimedya seçenekleri.",
      modelsLabel: "Uyumlu model örnekleri",
      modelsNote: "Uyumluluk; model, yıl, donanım seviyesi ve fabrika sistemi varyantına göre değişir.",
      featuresLabel: "Öne çıkan özellikler",
      features: [
        "Araca özel ekran entegrasyonu",
        "Apple CarPlay / Android Auto",
        "Navigasyon hub işlevi",
        "Orijinal kabin uyumluluğu odağı",
        "Model yılına bağlı montaj uyumluluğu",
      ],
      formTitle: "Uyumluluk sorun",
      formDesc:
        "Lexus modelinizi, yılını ve mevcut sistem bilgilerini gönderin. Ekibimiz doğru multimedya yolunu bulmanıza yardımcı olsun.",
      compatibilityCta: "Uyumluluk Sor",
      productsCta: "Ürün Bilgisi Al",
      backLabel: "Araç Multimedya Sistemleri",
      metaTitle: "Lexus Android Multimedya Sistemleri | Apollon",
      metaDescription:
        "Seçili Lexus RX ve NX modelleri için Android multimedya sistemleri. CarPlay, Android Auto, navigasyon. Uyumluluk için Apollon ile iletişime geçin.",
    },
  },

  "range-rover-land-rover": {
    prefilledBrand: { en: "Range Rover / Land Rover", tr: "Range Rover / Land Rover" },
    models: [
      "Range Rover",
      "Range Rover Sport",
      "Land Rover models after compatibility check",
    ],
    products: [
      {
        name: "Range Rover Android Multimedia System",
        description: {
          en: "An Android multimedia upgrade for selected Range Rover and Range Rover Sport models. Designed for premium cabin integration with modern connectivity, navigation, and media features.",
          tr: "Seçili Range Rover ve Range Rover Sport modelleri için Android multimedya yükseltmesi. Modern bağlantı, navigasyon ve medya özellikleriyle premium kabin entegrasyonuna yönelik tasarım.",
        },
      },
    ],
    en: {
      title: "Range Rover / Land Rover Multimedia Systems",
      subtitle:
        "Premium multimedia upgrade options for selected Range Rover and Land Rover models, designed for refined cabin integration and modern connected driving.",
      modelsLabel: "Compatible model examples",
      modelsNote: "Compatibility depends on model, year, trim level, and factory system. A compatibility check is required before ordering.",
      featuresLabel: "Key features",
      features: [
        "Premium cabin integration",
        "Android multimedia upgrade path",
        "Navigation and media support",
        "CarPlay / Android Auto support depending on model",
        "Compatibility check required",
      ],
      formTitle: "Ask for compatibility",
      formDesc:
        "Send your Range Rover or Land Rover model, year, and current system details. Our team will guide you toward the correct multimedia system.",
      compatibilityCta: "Check Compatibility",
      productsCta: "Request Product Information",
      backLabel: "Car Multimedia Systems",
      metaTitle: "Range Rover / Land Rover Multimedia Systems | Apollon",
      metaDescription:
        "Premium Android multimedia upgrades for selected Range Rover and Land Rover models. CarPlay, Android Auto, navigation. Contact Apollon for compatibility.",
    },
    tr: {
      title: "Range Rover / Land Rover Multimedya Sistemleri",
      subtitle:
        "Seçili Range Rover ve Land Rover modelleri için rafine kabin entegrasyonu ve modern bağlantılı sürüş deneyimine odaklanan premium multimedya yükseltme seçenekleri.",
      modelsLabel: "Uyumlu model örnekleri",
      modelsNote: "Uyumluluk; model, yıl, donanım seviyesi ve fabrika sistemine göre değişir. Sipariş öncesinde uyumluluk kontrolü gereklidir.",
      featuresLabel: "Öne çıkan özellikler",
      features: [
        "Premium kabin entegrasyonu",
        "Android multimedya yükseltme yolu",
        "Navigasyon ve medya desteği",
        "Modele göre CarPlay / Android Auto desteği",
        "Uyumluluk kontrolü gereklidir",
      ],
      formTitle: "Uyumluluk sorun",
      formDesc:
        "Range Rover veya Land Rover modelinizi, yılını ve mevcut sistem bilgilerini gönderin. Ekibimiz doğru multimedya sistemine yönlendirsin.",
      compatibilityCta: "Uyumluluk Sor",
      productsCta: "Ürün Bilgisi Al",
      backLabel: "Araç Multimedya Sistemleri",
      metaTitle: "Range Rover / Land Rover Multimedya Sistemleri | Apollon",
      metaDescription:
        "Seçili Range Rover ve Land Rover modelleri için premium Android multimedya yükseltmeleri. CarPlay, Android Auto, navigasyon. Uyumluluk için Apollon ile iletişime geçin.",
    },
  },
}

// ─── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, brand } = await params
  const data = brands[brand]
  if (!data) return {}
  return {
    title: data[locale].metaTitle,
    description: data[locale].metaDescription,
  }
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function BrandPage({ params }: PageProps) {
  const { locale, brand } = await params
  const data = brands[brand]
  if (!data) notFound()

  const c = data[locale]
  const prefilledBrand = data.prefilledBrand[locale]

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
              href={`/${locale}/products/car-multimedia`}
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
                Car Multimedia Systems
              </span>
              <span className="h-px w-10 bg-bronze/40" />
            </div>
            <h1 className="font-heading text-4xl font-bold leading-[1.12] tracking-tight md:text-5xl lg:text-6xl pb-[0.14em]">
              {c.title}
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {c.subtitle}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#compatibility-form"
                className="inline-flex items-center rounded-sm border border-bronze bg-bronze px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-bronze/90 hover:shadow-[0_0_24px_oklch(0.70_0.12_65_/_0.35)]"
              >
                {c.compatibilityCta}
              </a>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center rounded-sm border border-border px-7 py-3 text-sm font-semibold text-foreground transition-all hover:border-bronze/40 hover:text-bronze"
              >
                {c.productsCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Compatible Models */}
      <section className="border-t border-border/30 py-20">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="space-y-6">
              <h2 className="font-heading text-2xl font-bold leading-[1.15] tracking-tight md:text-3xl pb-[0.1em]">
                {c.modelsLabel}
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">{c.modelsNote}</p>
              {data.models.length > 0 && (
                <ul className="space-y-2">
                  {data.models.map((model) => (
                    <li key={model} className="flex items-center gap-3 text-sm">
                      <span className="h-px w-4 shrink-0 bg-bronze/40" />
                      <span className="text-foreground/80">{model}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Feature Highlights */}
            <div className="space-y-6">
              <h2 className="font-heading text-2xl font-bold leading-[1.15] tracking-tight md:text-3xl pb-[0.1em]">
                {c.featuresLabel}
              </h2>
              <ul className="space-y-2.5">
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
          </div>
        </div>
      </section>

      {/* 3. Product Cards */}
      <section className="border-t border-border/30 py-20">
        <div className="section-container space-y-10">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-bronze/40" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-bronze/70">
                {locale === "tr" ? "Ürünler" : "Products"}
              </span>
            </div>
            <h2 className="font-heading text-2xl font-bold leading-[1.15] tracking-tight md:text-3xl pb-[0.1em]">
              {locale === "tr" ? "Ürün seçenekleri" : "Product options"}
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.products.map((product) => (
              <div
                key={product.name}
                className="glass-card flex flex-col gap-5 rounded-sm p-6"
              >
                <div className="h-32 w-full rounded-sm bg-surface-raised" />
                <div className="space-y-2 flex-1">
                  <h3 className="font-heading text-sm font-semibold text-foreground leading-[1.3]">
                    {product.name}
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {product.description[locale]}
                  </p>
                </div>
                <a
                  href="#compatibility-form"
                  className="mt-auto inline-flex items-center rounded-sm border border-bronze/40 px-4 py-2 text-xs font-semibold text-bronze/80 transition-all hover:border-bronze hover:text-bronze"
                >
                  {c.compatibilityCta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Compatibility Form */}
      <section id="compatibility-form" className="border-t border-border/30 py-20">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-bronze/40" />
                  <span className="text-xs font-medium uppercase tracking-[0.3em] text-bronze/70">
                    {locale === "tr" ? "Uyumluluk" : "Compatibility"}
                  </span>
                </div>
                <h2 className="font-heading text-2xl font-bold leading-[1.15] tracking-tight md:text-3xl pb-[0.1em]">
                  {c.formTitle}
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">{c.formDesc}</p>
              </div>

              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze/50" />
                  <span>
                    {locale === "tr"
                      ? "Tüm araç bilgilerini eksiksiz doldurun: marka, model, yıl ve mevcut ekran."
                      : "Fill in all vehicle details completely: brand, model, year, and current screen."}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze/50" />
                  <span>
                    {locale === "tr"
                      ? "Uyumluluk onayı sonrasında ürün bilgisi ve fiyatlandırma paylaşılır."
                      : "Product information and pricing are shared after compatibility confirmation."}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze/50" />
                  <span>
                    {locale === "tr"
                      ? "Montaj noktası veya distribütörlük için de iletişime geçebilirsiniz."
                      : "You can also reach out for installation point or distributor inquiries."}
                  </span>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-sm p-6 md:p-8">
              <CompatibilityForm locale={locale} prefilledBrand={prefilledBrand} />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section className="border-t border-border/30 py-16">
        <div className="section-container">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-bronze/70">
                {locale === "tr" ? "Araç Multimedya Sistemleri" : "Car Multimedia Systems"}
              </p>
              <p className="text-sm text-muted-foreground">
                {locale === "tr"
                  ? "Diğer araç markalarını keşfedin veya ürün sorgusu başlatın."
                  : "Explore other vehicle brands or start a product inquiry."}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href={`/${locale}/products/car-multimedia`}
                className="rounded-sm border border-border/60 px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-bronze/40 hover:text-bronze"
              >
                {c.backLabel}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="rounded-sm border border-bronze bg-bronze px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-bronze/90"
              >
                {c.productsCta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
