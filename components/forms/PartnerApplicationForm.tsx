'use client'

import { useState } from "react"
import { type Locale } from "@/lib/i18n"

// Extend Window to include gtag (injected by GoogleAnalytics component)
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

// ─── Labels ──────────────────────────────────────────────────────────────────

const labels = {
  en: {
    companyName: "Company Name",
    country: "Country",
    city: "City",
    contactPerson: "Contact Person",
    phone: "Phone Number",
    email: "Email Address",
    businessType: "Business Type",
    businessTypePlaceholder: "Select your business type",
    categories: "Interested Product Categories",
    salesChannels: "Current Sales Channels",
    message: "Message",
    messagePlaceholder: "Tell us more about your business, region, or partnership interest (optional)",
    consent: "I agree that Apollon may contact me regarding this partnership application.",
    submit: "Submit Partnership Application",
    submitting: "Submitting…",
    successTitle: "Thank you for your application.",
    successText:
      "Your partnership application has been received. Our team will review your information and contact you if there is a suitable opportunity.",
    errorText:
      "Something went wrong while submitting your application. Please try again or contact us directly.",
    required: "Required",
    selectAtLeastOne: "Please select at least one category.",
    consentRequired: "Consent is required to submit the application.",
    businessTypeOptions: [
      "Distributor",
      "Dealer / Reseller",
      "Installation Center",
      "Automotive Accessories Store",
      "Motorcycle Accessories Store",
      "E-commerce Seller",
      "Fleet / Corporate",
      "Strategic Partner",
      "Other",
    ],
    categoryOptions: [
      { value: "car-multimedia", label: "Car Multimedia Systems" },
      { value: "car-safety-security", label: "Car Safety & Security" },
      { value: "motorcycle-smart-systems", label: "Motorcycle Smart Systems" },
      { value: "signature-audio-series", label: "Signature Audio Series" },
      { value: "multiple-categories", label: "Multiple Categories" },
    ],
    salesChannelOptions: [
      { value: "physical-store", label: "Physical Store" },
      { value: "installation-center", label: "Installation Center" },
      { value: "distributor-network", label: "Distributor Network" },
      { value: "ecommerce-website", label: "E-commerce Website" },
      { value: "online-marketplace", label: "Online Marketplace" },
      { value: "social-media-sales", label: "Social Media Sales" },
      { value: "b2b-sales", label: "B2B Sales" },
      { value: "fleet-corporate-sales", label: "Fleet / Corporate Sales" },
      { value: "other", label: "Other" },
    ],
  },
  tr: {
    companyName: "Şirket Adı",
    country: "Ülke",
    city: "Şehir",
    contactPerson: "Yetkili Kişi",
    phone: "Telefon Numarası",
    email: "E-posta Adresi",
    businessType: "İşletme Türü",
    businessTypePlaceholder: "İşletme türünüzü seçin",
    categories: "İlgilenilen Ürün Kategorileri",
    salesChannels: "Mevcut Satış Kanalları",
    message: "Mesaj",
    messagePlaceholder: "İşletmeniz, bölgeniz veya iş ortaklığı ilginiz hakkında bilgi verin (isteğe bağlı)",
    consent:
      "Apollon'un bu iş ortaklığı başvurusu hakkında benimle iletişime geçmesini kabul ediyorum.",
    submit: "İş Ortaklığı Başvurusunu Gönder",
    submitting: "Gönderiliyor…",
    successTitle: "Başvurunuz için teşekkür ederiz.",
    successText:
      "İş ortaklığı başvurunuz alınmıştır. Ekibimiz bilgilerinizi değerlendirecek ve uygun bir fırsat bulunması halinde sizinle iletişime geçecektir.",
    errorText:
      "Başvurunuz gönderilirken bir sorun oluştu. Lütfen tekrar deneyin veya doğrudan bizimle iletişime geçin.",
    required: "Zorunlu",
    selectAtLeastOne: "Lütfen en az bir kategori seçin.",
    consentRequired: "Başvuruyu göndermek için onay gereklidir.",
    businessTypeOptions: [
      "Distribütör",
      "Bayi / Satıcı",
      "Montaj Noktası",
      "Otomotiv Aksesuar Mağazası",
      "Motosiklet Aksesuar Mağazası",
      "E-ticaret Satıcısı",
      "Filo / Kurumsal",
      "Stratejik İş Ortağı",
      "Diğer",
    ],
    categoryOptions: [
      { value: "car-multimedia", label: "Araç Multimedya Sistemleri" },
      { value: "car-safety-security", label: "Araç Güvenlik Sistemleri" },
      { value: "motorcycle-smart-systems", label: "Motosiklet Akıllı Sistemleri" },
      { value: "signature-audio-series", label: "Signature Audio Series" },
      { value: "multiple-categories", label: "Birden Fazla Kategori" },
    ],
    salesChannelOptions: [
      { value: "physical-store", label: "Fiziksel Mağaza" },
      { value: "installation-center", label: "Montaj Noktası" },
      { value: "distributor-network", label: "Distribütör Ağı" },
      { value: "ecommerce-website", label: "E-ticaret Sitesi" },
      { value: "online-marketplace", label: "Online Pazaryeri" },
      { value: "social-media-sales", label: "Sosyal Medya Satışı" },
      { value: "b2b-sales", label: "B2B Satış" },
      { value: "fleet-corporate-sales", label: "Filo / Kurumsal Satış" },
      { value: "other", label: "Diğer" },
    ],
  },
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const inputClass =
  "w-full rounded-sm border border-border/60 bg-input px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-bronze/50 focus:outline-none focus:ring-1 focus:ring-bronze/25"
const labelClass =
  "block text-xs font-medium uppercase tracking-widest text-muted-foreground"
const errorClass = "mt-1 text-xs text-destructive"

// ─── GA helper ────────────────────────────────────────────────────────────────

function trackPartnerApplicationSubmit({
  locale,
  businessType,
  interestedCategories,
}: {
  locale: string
  businessType: string
  interestedCategories: string[]
}) {
  if (typeof window === "undefined") return
  window.gtag?.("event", "partner_application_submit", {
    form_type: "partner_application",
    locale,
    business_type: businessType,
    interested_categories: interestedCategories.join(","),
  })
}

// ─── Component ────────────────────────────────────────────────────────────────

type Props = { locale: Locale }

export function PartnerApplicationForm({ locale }: Props) {
  const l = labels[locale]

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [form, setForm] = useState({
    companyName: "",
    country: "",
    city: "",
    contactPerson: "",
    phone: "",
    email: "",
    businessType: "",
    message: "",
  })
  const [interestedCategories, setInterestedCategories] = useState<string[]>([])
  const [salesChannels, setSalesChannels] = useState<string[]>([])
  const [consent, setConsent] = useState(false)

  const set =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((f) => ({ ...f, [k]: e.target.value }))
      if (fieldErrors[k]) setFieldErrors((prev) => { const next = { ...prev }; delete next[k]; return next })
    }

  function toggleCategory(value: string) {
    setInterestedCategories((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    )
    if (fieldErrors.interestedCategories)
      setFieldErrors((prev) => { const next = { ...prev }; delete next.interestedCategories; return next })
  }

  function toggleChannel(value: string) {
    setSalesChannels((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    )
  }

  // Client-side pre-flight validation for immediate feedback
  function validate(): boolean {
    const errs: Record<string, string> = {}
    if (!form.companyName.trim()) errs.companyName = l.required
    if (!form.country.trim()) errs.country = l.required
    if (!form.city.trim()) errs.city = l.required
    if (!form.contactPerson.trim()) errs.contactPerson = l.required
    if (!form.phone.trim()) errs.phone = l.required
    if (!form.email.trim()) errs.email = l.required
    if (!form.businessType) errs.businessType = l.required
    if (interestedCategories.length === 0) errs.interestedCategories = l.selectAtLeastOne
    if (!consent) errs.consent = l.consentRequired
    setFieldErrors(errs)
    return Object.keys(errs).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setStatus("loading")
    setFieldErrors({})

    try {
      const res = await fetch("/api/partner-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          interestedCategories,
          salesChannels,
          consent,
          locale,
          _hp: "", // honeypot always empty from real users
        }),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setStatus("success")
        trackPartnerApplicationSubmit({
          locale,
          businessType: form.businessType,
          interestedCategories,
        })
        // Reset form
        setForm({ companyName: "", country: "", city: "", contactPerson: "", phone: "", email: "", businessType: "", message: "" })
        setInterestedCategories([])
        setSalesChannels([])
        setConsent(false)
      } else if (data.errors) {
        setFieldErrors(data.errors)
        setStatus("idle")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-bronze/20 bg-bronze/5 p-8 text-center">
        <p className="mb-2 font-heading text-base font-semibold text-foreground">
          {l.successTitle}
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">{l.successText}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot — hidden from real users, bots fill it */}
      <input
        type="text"
        name="_hp"
        tabIndex={-1}
        aria-hidden="true"
        className="absolute -left-[9999px] opacity-0"
        autoComplete="off"
      />

      {/* Row 1 — Company + Contact Person */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label className={labelClass}>{l.companyName} *</label>
          <input
            type="text"
            autoComplete="organization"
            value={form.companyName}
            onChange={set("companyName")}
            className={inputClass}
          />
          {fieldErrors.companyName && <p className={errorClass}>{fieldErrors.companyName}</p>}
        </div>
        <div className="space-y-1.5">
          <label className={labelClass}>{l.contactPerson} *</label>
          <input
            type="text"
            autoComplete="name"
            value={form.contactPerson}
            onChange={set("contactPerson")}
            className={inputClass}
          />
          {fieldErrors.contactPerson && <p className={errorClass}>{fieldErrors.contactPerson}</p>}
        </div>
      </div>

      {/* Row 2 — Country + City */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label className={labelClass}>{l.country} *</label>
          <input
            type="text"
            autoComplete="country-name"
            value={form.country}
            onChange={set("country")}
            className={inputClass}
          />
          {fieldErrors.country && <p className={errorClass}>{fieldErrors.country}</p>}
        </div>
        <div className="space-y-1.5">
          <label className={labelClass}>{l.city} *</label>
          <input
            type="text"
            autoComplete="address-level2"
            value={form.city}
            onChange={set("city")}
            className={inputClass}
          />
          {fieldErrors.city && <p className={errorClass}>{fieldErrors.city}</p>}
        </div>
      </div>

      {/* Row 3 — Phone + Email */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label className={labelClass}>{l.phone} *</label>
          <input
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={set("phone")}
            className={inputClass}
          />
          {fieldErrors.phone && <p className={errorClass}>{fieldErrors.phone}</p>}
        </div>
        <div className="space-y-1.5">
          <label className={labelClass}>{l.email} *</label>
          <input
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={set("email")}
            className={inputClass}
          />
          {fieldErrors.email && <p className={errorClass}>{fieldErrors.email}</p>}
        </div>
      </div>

      {/* Business Type */}
      <div className="space-y-1.5">
        <label className={labelClass}>{l.businessType} *</label>
        <select
          value={form.businessType}
          onChange={set("businessType")}
          className={`${inputClass} cursor-pointer appearance-none`}
        >
          <option value="" disabled>{l.businessTypePlaceholder}</option>
          {l.businessTypeOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        {fieldErrors.businessType && <p className={errorClass}>{fieldErrors.businessType}</p>}
      </div>

      {/* Interested Product Categories */}
      <div className="space-y-2.5">
        <label className={labelClass}>{l.categories} *</label>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {l.categoryOptions.map((opt) => (
            <label
              key={opt.value}
              className={`flex cursor-pointer items-center gap-3 rounded-sm border px-3.5 py-2.5 text-sm transition-colors ${
                interestedCategories.includes(opt.value)
                  ? "border-bronze/40 bg-bronze/5 text-foreground"
                  : "border-border/60 text-muted-foreground hover:border-border/80"
              }`}
            >
              <input
                type="checkbox"
                className="accent-bronze"
                checked={interestedCategories.includes(opt.value)}
                onChange={() => toggleCategory(opt.value)}
              />
              {opt.label}
            </label>
          ))}
        </div>
        {fieldErrors.interestedCategories && (
          <p className={errorClass}>{fieldErrors.interestedCategories}</p>
        )}
      </div>

      {/* Current Sales Channels */}
      <div className="space-y-2.5">
        <label className={labelClass}>{l.salesChannels}</label>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {l.salesChannelOptions.map((opt) => (
            <label
              key={opt.value}
              className={`flex cursor-pointer items-center gap-3 rounded-sm border px-3.5 py-2.5 text-sm transition-colors ${
                salesChannels.includes(opt.value)
                  ? "border-bronze/40 bg-bronze/5 text-foreground"
                  : "border-border/60 text-muted-foreground hover:border-border/80"
              }`}
            >
              <input
                type="checkbox"
                className="accent-bronze"
                checked={salesChannels.includes(opt.value)}
                onChange={() => toggleChannel(opt.value)}
              />
              {opt.label}
            </label>
          ))}
        </div>
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label className={labelClass}>{l.message}</label>
        <textarea
          rows={4}
          value={form.message}
          onChange={set("message")}
          placeholder={l.messagePlaceholder}
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Consent */}
      <div className="space-y-1.5">
        <label
          className={`flex cursor-pointer items-start gap-3 rounded-sm border px-4 py-3 text-sm transition-colors ${
            consent ? "border-bronze/30" : "border-border/60"
          }`}
        >
          <input
            type="checkbox"
            className="accent-bronze mt-0.5 shrink-0"
            checked={consent}
            onChange={(e) => {
              setConsent(e.target.checked)
              if (fieldErrors.consent)
                setFieldErrors((prev) => { const next = { ...prev }; delete next.consent; return next })
            }}
          />
          <span className="text-muted-foreground">{l.consent}</span>
        </label>
        {fieldErrors.consent && <p className={errorClass}>{fieldErrors.consent}</p>}
      </div>

      {/* Server error */}
      {status === "error" && (
        <p className="rounded-sm border border-destructive/20 bg-destructive/5 px-4 py-3 text-xs text-destructive">
          {l.errorText}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-sm border border-bronze bg-bronze px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-bronze/90 hover:shadow-[0_0_24px_oklch(0.70_0.12_65_/_0.35)] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === "loading" ? l.submitting : l.submit}
      </button>
    </form>
  )
}
