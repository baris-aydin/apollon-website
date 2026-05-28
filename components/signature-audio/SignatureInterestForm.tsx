'use client'

import { useState } from "react"
import { type Locale } from "@/lib/i18n"

const labels = {
  en: {
    name: "Name",
    email: "Email",
    phone: "Phone",
    company: "Company",
    interestType: "Interest Type",
    country: "Country",
    city: "City",
    message: "Message",
    submit: "Get Notified",
    placeholder: "Select your interest type",
    success:
      "Thank you for your interest in Signature Audio Series. We will be in touch as this audio direction develops.",
    error: "An error occurred. Please try again.",
    interestOptions: [
      { value: "customer", label: "Customer" },
      { value: "distributor", label: "Distributor" },
      { value: "installer", label: "Installer" },
      { value: "audio-partner", label: "Audio partner" },
      { value: "press", label: "Press / media" },
      { value: "other", label: "Other" },
    ],
  },
  tr: {
    name: "Ad Soyad",
    email: "E-posta",
    phone: "Telefon",
    company: "Şirket",
    interestType: "İlgi Türü",
    country: "Ülke",
    city: "Şehir",
    message: "Mesaj",
    submit: "Haberdar Ol",
    placeholder: "İlgi türünüzü seçin",
    success:
      "Signature Audio Series'e gösterdiğiniz ilgi için teşekkürler. Bu ses vizyonu geliştikçe sizinle iletişime geçeceğiz.",
    error: "Bir hata oluştu. Lütfen tekrar deneyin.",
    interestOptions: [
      { value: "customer", label: "Müşteri" },
      { value: "distributor", label: "Distribütör" },
      { value: "installer", label: "Montaj noktası" },
      { value: "audio-partner", label: "Ses iş ortağı" },
      { value: "press", label: "Basın / medya" },
      { value: "other", label: "Diğer" },
    ],
  },
}

const inputClass =
  "w-full rounded-sm border border-border/60 bg-input px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-bronze/50 focus:outline-none focus:ring-1 focus:ring-bronze/25"
const labelClass = "block text-xs font-medium uppercase tracking-widest text-muted-foreground"

type Props = { locale: Locale }

export function SignatureInterestForm({ locale }: Props) {
  const l = labels[locale]
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    interestType: "",
    country: "",
    city: "",
    message: "",
  })

  const set =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }))

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch("/api/product-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          product: "Signature Audio Series",
          type: "signature-audio-interest",
        }),
      })
      if (res.ok) {
        setStatus("success")
        setForm({
          name: "",
          email: "",
          phone: "",
          company: "",
          interestType: "",
          country: "",
          city: "",
          message: "",
        })
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
        <p className="text-sm leading-relaxed text-bronze/70">{l.success}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label className={labelClass}>{l.name}</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={set("name")}
            className={inputClass}
          />
        </div>
        <div className="space-y-1.5">
          <label className={labelClass}>{l.email}</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={set("email")}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label className={labelClass}>{l.phone}</label>
          <input
            type="tel"
            value={form.phone}
            onChange={set("phone")}
            className={inputClass}
          />
        </div>
        <div className="space-y-1.5">
          <label className={labelClass}>{l.company}</label>
          <input
            type="text"
            value={form.company}
            onChange={set("company")}
            className={inputClass}
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className={labelClass}>{l.interestType}</label>
        <select
          value={form.interestType}
          onChange={set("interestType")}
          className={`${inputClass} appearance-none`}
        >
          <option value="">{l.placeholder}</option>
          {l.interestOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label className={labelClass}>{l.country}</label>
          <input
            type="text"
            value={form.country}
            onChange={set("country")}
            className={inputClass}
          />
        </div>
        <div className="space-y-1.5">
          <label className={labelClass}>{l.city}</label>
          <input
            type="text"
            value={form.city}
            onChange={set("city")}
            className={inputClass}
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className={labelClass}>{l.message}</label>
        <textarea
          rows={4}
          value={form.message}
          onChange={set("message")}
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <p className="text-xs text-destructive">{l.error}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-sm border border-bronze bg-bronze px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-bronze/90 hover:shadow-[0_0_24px_oklch(0.70_0.12_65_/_0.35)] disabled:opacity-50"
      >
        {status === "loading" ? "..." : l.submit}
      </button>
    </form>
  )
}
