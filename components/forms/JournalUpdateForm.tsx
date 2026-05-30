"use client"

import { useState } from "react"
import { type Locale } from "@/lib/i18n"

// TODO: Review KVKK consent wording with legal before launch
// TODO: Confirm newsletter provider (Resend / Brevo / Mailchimp / other)
// TODO: Confirm whether leads should be stored in Sanity or a newsletter platform
// TODO: Add Cloudflare Turnstile or reCAPTCHA after basic setup is confirmed working

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

const labels = {
  en: {
    name: "Name",
    namePlaceholder: "Your name",
    email: "Email Address",
    emailPlaceholder: "your@email.com",
    interestType: "Interested In",
    selectPlaceholder: "Select your interest",
    interestOptions: [
      { value: "car-multimedia", label: "Car Multimedia Systems" },
      { value: "motorcycle-smart", label: "Motorcycle Smart Systems" },
      { value: "dashcam", label: "Dashcam Technology" },
      { value: "premium-sound", label: "Premium Sound" },
      { value: "brand-updates", label: "Brand Updates" },
      { value: "all", label: "All Journal Updates" },
    ],
    consent:
      "I agree that Apollon may contact me with Journal and product updates.",
    submit: "Get Journal Updates",
    submitting: "Submitting...",
    success:
      "Thank you. You will be notified when Apollon Journal content is published.",
    error: "Something went wrong. Please try again.",
    required: "Required",
    invalidEmail: "Invalid email address",
  },
  tr: {
    name: "Ad Soyad",
    namePlaceholder: "Adınız",
    email: "E-posta Adresi",
    emailPlaceholder: "eposta@adresiniz.com",
    interestType: "İlgi Alanı",
    selectPlaceholder: "İlgi alanınızı seçin",
    interestOptions: [
      { value: "car-multimedia", label: "Araç Multimedya Sistemleri" },
      { value: "motorcycle-smart", label: "Motosiklet Akıllı Sistemleri" },
      { value: "dashcam", label: "Araç Kamerası Teknolojileri" },
      { value: "premium-sound", label: "Premium Ses" },
      { value: "brand-updates", label: "Marka Güncellemeleri" },
      { value: "all", label: "Tüm Journal Güncellemeleri" },
    ],
    consent:
      "Apollon'un Journal ve ürün güncellemeleri hakkında benimle iletişime geçmesini kabul ediyorum.",
    submit: "Journal Güncellemelerini Al",
    submitting: "Gönderiliyor...",
    success:
      "Teşekkür ederiz. Apollon Journal içerikleri yayınlandığında bilgilendirileceksiniz.",
    error: "Bir sorun oluştu. Lütfen tekrar deneyin.",
    required: "Gerekli",
    invalidEmail: "Geçerli bir e-posta adresi girin",
  },
}

type FormStatus = "idle" | "loading" | "success" | "error"

export function JournalUpdateForm({ locale }: { locale: Locale }) {
  const l = labels[locale]

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [interestType, setInterestType] = useState("")
  const [consent, setConsent] = useState(false)
  const [website, setWebsite] = useState("") // honeypot — do not label or display

  const [formStatus, setFormStatus] = useState<FormStatus>("idle")
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

  function clearError(field: string) {
    setFieldErrors((prev) => {
      const next = { ...prev }
      delete next[field]
      return next
    })
  }

  function validate(): boolean {
    const errors: Record<string, string> = {}
    if (!email.trim()) {
      errors.email = l.required
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errors.email = l.invalidEmail
    }
    if (!consent) {
      errors.consent = l.required
    }
    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return

    setFormStatus("loading")
    try {
      const res = await fetch("/api/journal-interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, interestType, consent, locale, website }),
      })
      const data = await res.json()

      if (!res.ok) {
        if (data.errors) setFieldErrors(data.errors)
        setFormStatus("error")
        return
      }

      window.gtag?.("event", "journal_interest_submit", {
        form_type: "journal_interest",
        locale,
        interest_type: interestType || "all",
      })

      setFormStatus("success")
    } catch {
      setFormStatus("error")
    }
  }

  if (formStatus === "success") {
    return (
      <div className="rounded-sm border border-bronze/20 bg-bronze/5 px-8 py-12 text-center">
        <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-bronze/30 bg-bronze/10">
          <svg
            className="h-5 w-5 text-bronze"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <p className="text-base font-medium text-foreground">{l.success}</p>
      </div>
    )
  }

  const inputBase =
    "w-full rounded-sm border bg-card/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 backdrop-blur-sm transition-colors"
  const inputNormal =
    "border-border/60 focus:border-bronze/40 focus:ring-bronze/20"
  const inputError =
    "border-red-500/60 focus:border-red-500/60 focus:ring-red-500/20"

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Honeypot — hidden from real users */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <input
          type="text"
          name="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Name + Email row */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">{l.name}</label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
              clearError("name")
            }}
            placeholder={l.namePlaceholder}
            className={`${inputBase} ${inputNormal}`}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            {l.email}{" "}
            <span className="text-bronze/70" aria-hidden="true">
              *
            </span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              clearError("email")
            }}
            placeholder={l.emailPlaceholder}
            className={`${inputBase} ${fieldErrors.email ? inputError : inputNormal}`}
          />
          {fieldErrors.email && (
            <p className="text-xs text-red-400">{fieldErrors.email}</p>
          )}
        </div>
      </div>

      {/* Interest type */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">
          {l.interestType}
        </label>
        <select
          value={interestType}
          onChange={(e) => setInterestType(e.target.value)}
          className={`${inputBase} ${inputNormal}`}
        >
          <option value="">{l.selectPlaceholder}</option>
          {l.interestOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Consent */}
      <div className="space-y-1">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => {
              setConsent(e.target.checked)
              clearError("consent")
            }}
            className="mt-0.5 h-4 w-4 accent-bronze"
          />
          <span className="text-sm leading-relaxed text-muted-foreground">
            {l.consent}
          </span>
        </label>
        {fieldErrors.consent && (
          <p className="ml-7 text-xs text-red-400">{fieldErrors.consent}</p>
        )}
      </div>

      {/* Generic error (no field-level errors) */}
      {formStatus === "error" && Object.keys(fieldErrors).length === 0 && (
        <p className="rounded-sm border border-red-500/20 bg-red-950/20 px-4 py-3 text-sm text-red-400">
          {l.error}
        </p>
      )}

      <button
        type="submit"
        disabled={formStatus === "loading"}
        className="rounded-sm border border-bronze bg-bronze px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-bronze/90 hover:shadow-[0_0_24px_oklch(0.70_0.12_65_/_0.35)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {formStatus === "loading" ? l.submitting : l.submit}
      </button>
    </form>
  )
}
