'use client'

import { useState } from "react"
import { type Locale } from "@/lib/i18n"
import { trackEvent } from "@/lib/analytics"
import { DISTRIBUTOR_INQUIRY_TYPE, isInquiryType } from "@/lib/inquiryTypes"
import { PRODUCT_FAMILY_LABELS, PRODUCT_OPTION_GROUPS } from "@/lib/products/catalogue"

// ─── Labels ──────────────────────────────────────────────────────────────────

const labels = {
  en: {
    name: "Name",
    contactPerson: "Contact Person",
    email: "Email Address",
    phone: "Phone Number",
    company: "Company",
    inquiryType: "Inquiry Type",
    inquiryTypePlaceholder: "Select inquiry type",
    subject: "Subject",
    subjectPlaceholder: "Briefly describe your inquiry",
    message: "Message",
    messagePlaceholder:
      "Tell us what you need. For vehicle-specific questions, include the brand, model, year, and current system details where possible.",
    vehicleBrand: "Vehicle Brand",
    vehicleBrandPlaceholder: "e.g. Toyota",
    vehicleModel: "Vehicle Model",
    vehicleModelPlaceholder: "e.g. Corolla",
    vehicleYear: "Vehicle Year",
    vehicleYearPlaceholder: "e.g. 2021",
    preferredContact: "Preferred Contact Method",
    preferredContactPlaceholder: "Select preferred method",
    consent: "I agree that Apollon may contact me regarding this inquiry.",
    submit: "Send Message",
    submitting: "Sending…",
    vehicleSection: "Vehicle Details (optional)",
    businessSection: "Business Details",
    businessSectionNote:
      "Requested because you selected a distributor / partnership inquiry.",
    country: "Country",
    city: "City",
    businessType: "Business Type",
    businessTypePlaceholder: "Select your business type",
    categories: "Interested Product Categories",
    product: "Product of Interest",
    productPlaceholder: "Select a product (optional)",
    successTitle: "Thank you for your message.",
    successText:
      "Your message has been received. Our team will review your inquiry and contact you through your preferred communication method when appropriate.",
    errorText:
      "Something went wrong while sending your message. Please try again or contact us through WhatsApp.",
    required: "Required",
    invalidEmail: "Please enter a valid email address",
    messageTooShort: "Message must be at least 10 characters",
    consentRequired: "Consent is required to submit this form",
    selectCategory: "Select at least one category",
    inquiryTypeOptions: [
      { value: "general", label: "General Inquiry" },
      { value: "product", label: "Product Inquiry" },
      { value: "distributor", label: "Distributor / Partnership Inquiry" },
      { value: "technical-support", label: "Technical Support" },
      { value: "other", label: "Other" },
    ],
    preferredContactOptions: [
      { value: "email", label: "Email" },
      { value: "phone", label: "Phone" },
      { value: "whatsapp", label: "WhatsApp" },
    ],
    businessTypeOptions: [
      { value: "distributor", label: "Distributor" },
      { value: "dealer-reseller", label: "Dealer / Reseller" },
      { value: "installation-center", label: "Installation Center" },
      { value: "automotive-accessories-store", label: "Automotive Accessories Store" },
      { value: "motorcycle-accessories-store", label: "Motorcycle Accessories Store" },
      { value: "ecommerce-seller", label: "E-commerce Seller" },
      { value: "fleet-corporate", label: "Fleet / Corporate" },
      { value: "other", label: "Other" },
    ],
    categoryOptions: [
      { value: "motorcycle", label: "Motorcycle — MotoPlay Series" },
      { value: "car", label: "Car Technology Systems" },
      { value: "signature-audio-series", label: "Signature Audio Series" },
    ],
  },
  tr: {
    name: "Ad Soyad",
    contactPerson: "Yetkili Kişi",
    email: "E-posta Adresi",
    phone: "Telefon Numarası",
    company: "Şirket",
    inquiryType: "Talep Türü",
    inquiryTypePlaceholder: "Talep türünü seçin",
    subject: "Konu",
    subjectPlaceholder: "Talebinizi kısaca açıklayın",
    message: "Mesaj",
    messagePlaceholder:
      "İhtiyacınızı paylaşın. Araca özel sorular için mümkünse marka, model, yıl ve mevcut sistem bilgilerini ekleyin.",
    vehicleBrand: "Araç Markası",
    vehicleBrandPlaceholder: "ör. Toyota",
    vehicleModel: "Araç Modeli",
    vehicleModelPlaceholder: "ör. Corolla",
    vehicleYear: "Araç Yılı",
    vehicleYearPlaceholder: "ör. 2021",
    preferredContact: "Tercih Edilen İletişim Yöntemi",
    preferredContactPlaceholder: "Tercih ettiğiniz yöntemi seçin",
    consent:
      "Apollon'un bu talebim hakkında benimle iletişime geçmesini kabul ediyorum.",
    submit: "Mesaj Gönder",
    submitting: "Gönderiliyor…",
    vehicleSection: "Araç Bilgileri (isteğe bağlı)",
    businessSection: "İşletme Bilgileri",
    businessSectionNote:
      "Distribütörlük / iş ortaklığı talebi seçtiğiniz için isteniyor.",
    country: "Ülke",
    city: "Şehir",
    businessType: "İşletme Türü",
    businessTypePlaceholder: "İşletme türünüzü seçin",
    categories: "İlgilenilen Ürün Kategorileri",
    product: "İlgilendiğiniz Ürün",
    productPlaceholder: "Bir ürün seçin (isteğe bağlı)",
    successTitle: "Mesajınız için teşekkür ederiz.",
    successText:
      "Mesajınız alınmıştır. Ekibimiz talebinizi değerlendirecek ve uygun olduğunda tercih ettiğiniz iletişim yöntemi üzerinden sizinle iletişime geçecektir.",
    errorText:
      "Mesajınız gönderilirken bir sorun oluştu. Lütfen tekrar deneyin veya WhatsApp üzerinden bizimle iletişime geçin.",
    required: "Zorunlu",
    invalidEmail: "Geçerli bir e-posta adresi girin",
    messageTooShort: "Mesaj en az 10 karakter olmalıdır",
    consentRequired: "Formu göndermek için onay gereklidir",
    selectCategory: "En az bir kategori seçin",
    inquiryTypeOptions: [
      { value: "general", label: "Genel İletişim" },
      { value: "product", label: "Ürün Hakkında Bilgi" },
      { value: "distributor", label: "Distribütörlük / İş Ortaklığı" },
      { value: "technical-support", label: "Teknik Destek" },
      { value: "other", label: "Diğer" },
    ],
    preferredContactOptions: [
      { value: "email", label: "E-posta" },
      { value: "phone", label: "Telefon" },
      { value: "whatsapp", label: "WhatsApp" },
    ],
    businessTypeOptions: [
      { value: "distributor", label: "Distribütör" },
      { value: "dealer-reseller", label: "Bayi / Satıcı" },
      { value: "installation-center", label: "Montaj Noktası" },
      { value: "automotive-accessories-store", label: "Otomotiv Aksesuar Mağazası" },
      { value: "motorcycle-accessories-store", label: "Motosiklet Aksesuar Mağazası" },
      { value: "ecommerce-seller", label: "E-ticaret Satıcısı" },
      { value: "fleet-corporate", label: "Filo / Kurumsal" },
      { value: "other", label: "Diğer" },
    ],
    categoryOptions: [
      { value: "motorcycle", label: "Motosiklet — MotoPlay Series" },
      { value: "car", label: "Otomobil Teknoloji Sistemleri" },
      { value: "signature-audio-series", label: "Signature Audio Series" },
    ],
  },
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const inputClass =
  "w-full rounded-sm border border-border/60 bg-input px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-bronze/50 focus:outline-none focus:ring-1 focus:ring-bronze/25"
const labelClass =
  "block text-xs font-medium uppercase tracking-widest text-muted-foreground"
const errorClass = "mt-1 text-xs text-destructive"

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  inquiryType: "",
  product: "",
  subject: "",
  message: "",
  vehicleBrand: "",
  vehicleModel: "",
  vehicleYear: "",
  preferredContactMethod: "",
  country: "",
  city: "",
  businessType: "",
  website: "", // honeypot
}

// ─── Component ────────────────────────────────────────────────────────────────

type Props = {
  locale: Locale
  /** Preselects the inquiry type — e.g. from /contact?type=distributor */
  initialInquiryType?: string
}

export function ContactForm({ locale, initialInquiryType }: Props) {
  const l = labels[locale]

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [form, setForm] = useState({
    ...emptyForm,
    inquiryType: isInquiryType(initialInquiryType) ? initialInquiryType : "",
  })
  const [interestedCategories, setInterestedCategories] = useState<string[]>([])
  const [consent, setConsent] = useState(false)

  const isDistributor = form.inquiryType === DISTRIBUTOR_INQUIRY_TYPE
  const isProductInquiry = form.inquiryType === "product"

  const clearError = (k: string) =>
    setFieldErrors((prev) => {
      if (!prev[k]) return prev
      const next = { ...prev }
      delete next[k]
      return next
    })

  const set =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((f) => ({ ...f, [k]: e.target.value }))
      clearError(k)
    }

  function toggleCategory(value: string) {
    setInterestedCategories((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    )
    clearError("interestedCategories")
  }

  function validate(): boolean {
    const errs: Record<string, string> = {}
    if (!form.name.trim()) errs.name = l.required
    if (!form.email.trim()) errs.email = l.required
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      errs.email = l.invalidEmail
    if (!form.inquiryType) errs.inquiryType = l.required
    if (!form.subject.trim()) errs.subject = l.required
    if (!form.message.trim()) errs.message = l.required
    else if (form.message.trim().length < 10) errs.message = l.messageTooShort
    if (!consent) errs.consent = l.consentRequired

    // Distributor / partnership inquiries need the business profile
    if (isDistributor) {
      if (!form.company.trim()) errs.company = l.required
      if (!form.phone.trim()) errs.phone = l.required
      if (!form.country.trim()) errs.country = l.required
      if (!form.city.trim()) errs.city = l.required
      if (!form.businessType) errs.businessType = l.required
      if (interestedCategories.length === 0)
        errs.interestedCategories = l.selectCategory
    }

    setFieldErrors(errs)
    return Object.keys(errs).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setStatus("loading")
    setFieldErrors({})

    // Only send the fields relevant to the selected inquiry type
    const {
      country,
      city,
      businessType,
      vehicleBrand,
      vehicleModel,
      vehicleYear,
      product,
      ...base
    } = form

    const payload = {
      ...base,
      ...(isDistributor
        ? { country, city, businessType, interestedCategories }
        : { vehicleBrand, vehicleModel, vehicleYear }),
      ...(isProductInquiry ? { product } : {}),
      consent,
      locale,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setStatus("success")
        trackEvent("contact_form_submit", {
          form_type: "contact",
          inquiry_type: form.inquiryType,
          product: form.product,
          preferred_contact_method: form.preferredContactMethod,
          locale,
        })
        setForm({ ...emptyForm })
        setInterestedCategories([])
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
        name="website"
        tabIndex={-1}
        aria-hidden="true"
        className="absolute -left-[9999px] opacity-0"
        autoComplete="off"
        value={form.website}
        onChange={set("website")}
      />

      {/* Inquiry Type — drives the rest of the form */}
      <div className="space-y-1.5">
        <label className={labelClass}>{l.inquiryType} *</label>
        <select
          value={form.inquiryType}
          onChange={set("inquiryType")}
          className={`${inputClass} cursor-pointer appearance-none`}
        >
          <option value="" disabled>
            {l.inquiryTypePlaceholder}
          </option>
          {l.inquiryTypeOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {fieldErrors.inquiryType && <p className={errorClass}>{fieldErrors.inquiryType}</p>}
      </div>

      {/* Product of interest — product inquiries only */}
      {isProductInquiry && (
        <div className="space-y-1.5">
          <label className={labelClass}>{l.product}</label>
          <select
            value={form.product}
            onChange={set("product")}
            className={`${inputClass} cursor-pointer appearance-none`}
          >
            <option value="">{l.productPlaceholder}</option>
            {PRODUCT_OPTION_GROUPS.map((group) => (
              <optgroup
                key={group.family}
                label={PRODUCT_FAMILY_LABELS[group.family][locale]}
              >
                {group.products.map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>
      )}

      {/* Row 1 — Name + Email */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label className={labelClass}>
            {isDistributor ? l.contactPerson : l.name} *
          </label>
          <input
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={set("name")}
            className={inputClass}
          />
          {fieldErrors.name && <p className={errorClass}>{fieldErrors.name}</p>}
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

      {/* Row 2 — Phone + Company */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label className={labelClass}>
            {l.phone}
            {isDistributor && " *"}
          </label>
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
          <label className={labelClass}>
            {l.company}
            {isDistributor && " *"}
          </label>
          <input
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={set("company")}
            className={inputClass}
          />
          {fieldErrors.company && <p className={errorClass}>{fieldErrors.company}</p>}
        </div>
      </div>

      {/* Subject */}
      <div className="space-y-1.5">
        <label className={labelClass}>{l.subject} *</label>
        <input
          type="text"
          value={form.subject}
          onChange={set("subject")}
          placeholder={l.subjectPlaceholder}
          className={inputClass}
        />
        {fieldErrors.subject && <p className={errorClass}>{fieldErrors.subject}</p>}
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label className={labelClass}>{l.message} *</label>
        <textarea
          rows={5}
          value={form.message}
          onChange={set("message")}
          placeholder={l.messagePlaceholder}
          className={`${inputClass} resize-none`}
        />
        {fieldErrors.message && <p className={errorClass}>{fieldErrors.message}</p>}
      </div>

      {/* Business details — distributor / partnership inquiries only */}
      {isDistributor && (
        <div className="space-y-4 rounded-sm border border-bronze/20 bg-bronze/5 p-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-bronze/70">
              {l.businessSection}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground/70">
              {l.businessSectionNote}
            </p>
          </div>

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

          <div className="space-y-1.5">
            <label className={labelClass}>{l.businessType} *</label>
            <select
              value={form.businessType}
              onChange={set("businessType")}
              className={`${inputClass} cursor-pointer appearance-none`}
            >
              <option value="" disabled>
                {l.businessTypePlaceholder}
              </option>
              {l.businessTypeOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            {fieldErrors.businessType && (
              <p className={errorClass}>{fieldErrors.businessType}</p>
            )}
          </div>

          <div className="space-y-2.5">
            <label className={labelClass}>{l.categories} *</label>
            <div className="grid gap-2 sm:grid-cols-2">
              {l.categoryOptions.map((opt) => (
                <label
                  key={opt.value}
                  className={`flex cursor-pointer items-center gap-3 rounded-sm border px-3.5 py-2.5 text-sm transition-colors ${
                    interestedCategories.includes(opt.value)
                      ? "border-bronze/40 text-foreground"
                      : "border-border/60 text-muted-foreground hover:border-border"
                  }`}
                >
                  <input
                    type="checkbox"
                    className="accent-bronze shrink-0"
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
        </div>
      )}

      {/* Vehicle details (optional) — not relevant to partnership inquiries */}
      {!isDistributor && (
        <div className="space-y-3 rounded-sm border border-border/30 bg-card/20 p-4">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground/60">
            {l.vehicleSection}
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-1.5">
              <label className={labelClass}>{l.vehicleBrand}</label>
              <input
                type="text"
                value={form.vehicleBrand}
                onChange={set("vehicleBrand")}
                placeholder={l.vehicleBrandPlaceholder}
                className={inputClass}
              />
            </div>
            <div className="space-y-1.5">
              <label className={labelClass}>{l.vehicleModel}</label>
              <input
                type="text"
                value={form.vehicleModel}
                onChange={set("vehicleModel")}
                placeholder={l.vehicleModelPlaceholder}
                className={inputClass}
              />
            </div>
            <div className="space-y-1.5">
              <label className={labelClass}>{l.vehicleYear}</label>
              <input
                type="text"
                inputMode="numeric"
                value={form.vehicleYear}
                onChange={set("vehicleYear")}
                placeholder={l.vehicleYearPlaceholder}
                className={inputClass}
              />
            </div>
          </div>
        </div>
      )}

      {/* Preferred contact method */}
      <div className="space-y-1.5">
        <label className={labelClass}>{l.preferredContact}</label>
        <select
          value={form.preferredContactMethod}
          onChange={set("preferredContactMethod")}
          className={`${inputClass} cursor-pointer appearance-none`}
        >
          <option value="">{l.preferredContactPlaceholder}</option>
          {l.preferredContactOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Consent */}
      {/* TODO: Review KVKK consent wording with legal before launch */}
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
              clearError("consent")
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
