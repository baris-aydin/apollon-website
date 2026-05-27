'use client'

import { useState } from "react"
import { type Locale } from "@/lib/i18n"

const labels = {
  tr: {
    name: "Ad Soyad",
    phone: "Telefon",
    email: "E-posta",
    vehicleBrand: "Araç Markası",
    vehicleModel: "Araç Modeli",
    vehicleYear: "Araç Yılı",
    currentSystem: "Mevcut Ekran / Sistem",
    message: "Mesaj",
    submit: "Uyumluluk Sor",
    success: "Talebiniz alındı. En kısa sürede dönüş yapacağız.",
    error: "Bir hata oluştu. Lütfen tekrar deneyin.",
  },
  en: {
    name: "Full Name",
    phone: "Phone",
    email: "Email",
    vehicleBrand: "Vehicle Brand",
    vehicleModel: "Vehicle Model",
    vehicleYear: "Vehicle Year",
    currentSystem: "Current Screen / System",
    message: "Message",
    submit: "Check Compatibility",
    success: "Request received. We will get back to you shortly.",
    error: "An error occurred. Please try again.",
  },
}

const inputClass =
  "w-full rounded-sm border border-border/60 bg-input px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-bronze/50 focus:outline-none focus:ring-1 focus:ring-bronze/25"
const labelClass = "block text-xs font-medium uppercase tracking-widest text-muted-foreground"

type Props = {
  locale: Locale
  prefilledBrand?: string
}

export function CompatibilityForm({ locale, prefilledBrand = "" }: Props) {
  const l = labels[locale]
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    vehicleBrand: prefilledBrand,
    vehicleModel: "",
    vehicleYear: "",
    currentSystem: "",
    message: "",
  })

  const set =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
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
          product: `Car Multimedia — ${form.vehicleBrand || "General"}`,
        }),
      })
      if (res.ok) {
        setStatus("success")
        setForm({
          name: "",
          phone: "",
          email: "",
          vehicleBrand: prefilledBrand,
          vehicleModel: "",
          vehicleYear: "",
          currentSystem: "",
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
      <div className="rounded-sm border border-emerald-400/20 bg-emerald-400/5 p-6 text-center">
        <p className="text-sm text-emerald-400">{l.success}</p>
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
          <label className={labelClass}>{l.phone}</label>
          <input
            type="tel"
            required
            value={form.phone}
            onChange={set("phone")}
            className={inputClass}
          />
        </div>
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

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="space-y-1.5">
          <label className={labelClass}>{l.vehicleBrand}</label>
          <input
            type="text"
            value={form.vehicleBrand}
            onChange={set("vehicleBrand")}
            className={inputClass}
          />
        </div>
        <div className="space-y-1.5">
          <label className={labelClass}>{l.vehicleModel}</label>
          <input
            type="text"
            value={form.vehicleModel}
            onChange={set("vehicleModel")}
            className={inputClass}
          />
        </div>
        <div className="space-y-1.5">
          <label className={labelClass}>{l.vehicleYear}</label>
          <input
            type="text"
            placeholder="2018"
            value={form.vehicleYear}
            onChange={set("vehicleYear")}
            className={inputClass}
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className={labelClass}>{l.currentSystem}</label>
        <input
          type="text"
          value={form.currentSystem}
          onChange={set("currentSystem")}
          className={inputClass}
        />
      </div>

      <div className="space-y-1.5">
        <label className={labelClass}>{l.message}</label>
        <textarea
          rows={3}
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
        className="rounded-sm border border-bronze bg-bronze px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-bronze/90 disabled:opacity-50"
      >
        {status === "loading" ? "..." : l.submit}
      </button>
    </form>
  )
}
