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
    name: "Name",
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
    successTitle: "Thank you for your message.",
    successText:
      "Your message has been received. Our team will review your inquiry and contact you through your preferred communication method when appropriate.",
    errorText:
      "Something went wrong while sending your message. Please try again or contact us through WhatsApp.",
    required: "Required",
    invalidEmail: "Please enter a valid email address",
    messageTooShort: "Message must be at least 10 characters",
    consentRequired: "Consent is required to submit this form",
    inquiryTypeOptions: [
      { value: "general-information", label: "General Information" },
      { value: "product-information", label: "Product Information" },
      { value: "vehicle-compatibility", label: "Vehicle Compatibility" },
      { value: "motorcycle-system", label: "Motorcycle System Inquiry" },
      { value: "dashcam-safety", label: "Dashcam / Safety Product Inquiry" },
      { value: "installation-dealer", label: "Installation / Dealer Information" },
      { value: "partnership-distribution", label: "Partnership / Distribution" },
      { value: "other", label: "Other" },
    ],
    preferredContactOptions: [
      { value: "email", label: "Email" },
      { value: "phone", label: "Phone" },
      { value: "whatsapp", label: "WhatsApp" },
    ],
  },
  tr: {
    name: "Ad Soyad",
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
    successTitle: "Mesajınız için teşekkür ederiz.",
    successText:
      "Mesajınız alınmıştır. Ekibimiz talebinizi değerlendirecek ve uygun olduğunda tercih ettiğiniz iletişim yöntemi üzerinden sizinle iletişime geçecektir.",
    errorText:
      "Mesajınız gönderilirken bir sorun oluştu. Lütfen tekrar deneyin veya WhatsApp üzerinden bizimle iletişime geçin.",
    required: "Zorunlu",
    invalidEmail: "Geçerli bir e-posta adresi girin",
    messageTooShort: "Mesaj en az 10 karakter olmalıdır",
    consentRequired: "Formu göndermek için onay gereklidir",
    inquiryTypeOptions: [
      { value: "general-information", label: "Genel Bilgi" },
      { value: "product-information", label: "Ürün Bilgisi" },
      { value: "vehicle-compatibility", label: "Araç Uyumluluğu" },
      { value: "motorcycle-system", label: "Motosiklet Sistemi Talebi" },
      { value: "dashcam-safety", label: "Araç Kamerası / Güvenlik Ürünü Talebi" },
      { value: "installation-dealer", label: "Montaj / Bayi Bilgisi" },
      { value: "partnership-distribution", label: "İş Ortaklığı / Distribütörlük" },
      { value: "other", label: "Diğer" },
    ],
    preferredContactOptions: [
      { value: "email", label: "E-posta" },
      { value: "phone", label: "Telefon" },
      { value: "whatsapp", label: "WhatsApp" },
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

function trackContactFormSubmit({
  locale,
  inquiryType,
  preferredContactMethod,
}: {
  locale: string
  inquiryType: string
  preferredContactMethod: string
}) {
  if (typeof window === "undefined") return
  window.gtag?.("event", "contact_form_submit", {
    form_type: "contact",
    inquiry_type: inquiryType,
    preferred_contact_method: preferredContactMethod,
    locale,
  })
}

// ─── Component ────────────────────────────────────────────────────────────────

type Props = { locale: Locale }

export function ContactForm({ locale }: Props) {
  const l = labels[locale]

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    subject: "",
    message: "",
    vehicleBrand: "",
    vehicleModel: "",
    vehicleYear: "",
    preferredContactMethod: "",
    website: "", // honeypot
  })
  const [consent, setConsent] = useState(false)

  const set =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((f) => ({ ...f, [k]: e.target.value }))
      if (fieldErrors[k])
        setFieldErrors((prev) => {
          const next = { ...prev }
          delete next[k]
          return next
        })
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
    setFieldErrors(errs)
    return Object.keys(errs).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setStatus("loading")
    setFieldErrors({})

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, consent, locale }),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setStatus("success")
        trackContactFormSubmit({
          locale,
          inquiryType: form.inquiryType,
          preferredContactMethod: form.preferredContactMethod,
        })
        setForm({
          name: "",
          email: "",
          phone: "",
          company: "",
          inquiryType: "",
          subject: "",
          message: "",
          vehicleBrand: "",
          vehicleModel: "",
          vehicleYear: "",
          preferredContactMethod: "",
          website: "",
        })
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

      {/* Row 1 — Name + Email */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label className={labelClass}>{l.name} *</label>
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
          <label className={labelClass}>{l.phone}</label>
          <input
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={set("phone")}
            className={inputClass}
          />
        </div>
        <div className="space-y-1.5">
          <label className={labelClass}>{l.company}</label>
          <input
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={set("company")}
            className={inputClass}
          />
        </div>
      </div>

      {/* Inquiry Type */}
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

      {/* Vehicle details (optional) */}
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
              if (fieldErrors.consent)
                setFieldErrors((prev) => {
                  const next = { ...prev }
                  delete next.consent
                  return next
                })
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
