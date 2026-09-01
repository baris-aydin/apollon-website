'use client'

import { useState } from "react"
import { type Locale } from "@/lib/i18n"
import { trackEvent } from "@/lib/analytics"

const labels = {
  en: {
    name: "Full Name", phone: "Phone", email: "Email Address",
    product: "Product of Interest", productPlaceholder: "e.g. Apollon MotoPlay M1",
    vehicleBrand: "Vehicle Brand", vehicleBrandPlaceholder: "e.g. Toyota",
    vehicleModel: "Vehicle Model", vehicleModelPlaceholder: "e.g. Corolla",
    vehicleYear: "Year", vehicleYearPlaceholder: "e.g. 2022",
    message: "Message", messagePlaceholder: "Tell us more about your needs…",
    vehicleSection: "Vehicle Details (optional)",
    submit: "Request Information", submitting: "Sending…",
    successTitle: "Request received.",
    successText: "We will get back to you shortly.",
    errorText: "Something went wrong. Please try again.",
    required: "Required",
    invalidEmail: "Please enter a valid email address",
  },
  tr: {
    name: "Ad Soyad", phone: "Telefon", email: "E-posta Adresi",
    product: "İlgilenilen Ürün", productPlaceholder: "ör. Apollon MotoPlay M1",
    vehicleBrand: "Araç Markası", vehicleBrandPlaceholder: "ör. Toyota",
    vehicleModel: "Araç Modeli", vehicleModelPlaceholder: "ör. Corolla",
    vehicleYear: "Model Yılı", vehicleYearPlaceholder: "ör. 2022",
    message: "Mesaj", messagePlaceholder: "İhtiyacınızı paylaşın…",
    vehicleSection: "Araç Bilgileri (isteğe bağlı)",
    submit: "Bilgi Talep Et", submitting: "Gönderiliyor…",
    successTitle: "Talebiniz alındı.",
    successText: "En kısa sürede dönüş yapacağız.",
    errorText: "Bir hata oluştu. Lütfen tekrar deneyin.",
    required: "Zorunlu",
    invalidEmail: "Geçerli bir e-posta adresi girin",
  },
}

const inputClass =
  "w-full rounded-sm border border-border/60 bg-input px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-bronze/50 focus:outline-none focus:ring-1 focus:ring-bronze/25"
const labelClass =
  "block text-xs font-medium uppercase tracking-widest text-muted-foreground"
const errorClass = "mt-1 text-xs text-destructive"

type Props = { locale: Locale; preselectedProduct?: string }

export function ProductInquiryForm({ locale, preselectedProduct = "" }: Props) {
  const l = labels[locale]
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [form, setForm] = useState({
    name: "", phone: "", email: "",
    product: preselectedProduct,
    vehicleBrand: "", vehicleModel: "", vehicleYear: "",
    message: "",
    website: "", // honeypot
  })

  const set =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [k]: e.target.value }))
      if (fieldErrors[k])
        setFieldErrors((prev) => { const n = { ...prev }; delete n[k]; return n })
    }

  function validate(): boolean {
    const errs: Record<string, string> = {}
    if (!form.name.trim()) errs.name = l.required
    if (!form.phone.trim()) errs.phone = l.required
    if (!form.email.trim()) errs.email = l.required
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errs.email = l.invalidEmail
    if (!form.product.trim()) errs.product = l.required
    if (!form.message.trim()) errs.message = l.required
    setFieldErrors(errs)
    return Object.keys(errs).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setStatus("loading")

    try {
      const res = await fetch("/api/product-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, locale }),
      })
      const data = await res.json()

      if (res.ok && data.success) {
        setStatus("success")
        trackEvent("product_inquiry_submit", {
          form_type: "product_inquiry",
          product: form.product,
          locale,
        })
        setForm({ name: "", phone: "", email: "", product: "", vehicleBrand: "", vehicleModel: "", vehicleYear: "", message: "", website: "" })
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
        <p className="mb-2 font-heading text-base font-semibold text-foreground">{l.successTitle}</p>
        <p className="text-sm leading-relaxed text-muted-foreground">{l.successText}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Honeypot — hidden from real users */}
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

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label className={labelClass}>{l.name} *</label>
          <input type="text" autoComplete="name" value={form.name} onChange={set("name")} className={inputClass} />
          {fieldErrors.name && <p className={errorClass}>{fieldErrors.name}</p>}
        </div>
        <div className="space-y-1.5">
          <label className={labelClass}>{l.phone} *</label>
          <input type="tel" autoComplete="tel" value={form.phone} onChange={set("phone")} className={inputClass} />
          {fieldErrors.phone && <p className={errorClass}>{fieldErrors.phone}</p>}
        </div>
      </div>

      <div className="space-y-1.5">
        <label className={labelClass}>{l.email} *</label>
        <input type="email" autoComplete="email" value={form.email} onChange={set("email")} className={inputClass} />
        {fieldErrors.email && <p className={errorClass}>{fieldErrors.email}</p>}
      </div>

      <div className="space-y-1.5">
        <label className={labelClass}>{l.product} *</label>
        <input type="text" placeholder={l.productPlaceholder} value={form.product} onChange={set("product")} className={inputClass} />
        {fieldErrors.product && <p className={errorClass}>{fieldErrors.product}</p>}
      </div>

      <div className="space-y-3 rounded-sm border border-border/30 bg-card/20 p-4">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground/60">{l.vehicleSection}</p>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="space-y-1.5">
            <label className={labelClass}>{l.vehicleBrand}</label>
            <input type="text" placeholder={l.vehicleBrandPlaceholder} value={form.vehicleBrand} onChange={set("vehicleBrand")} className={inputClass} />
          </div>
          <div className="space-y-1.5">
            <label className={labelClass}>{l.vehicleModel}</label>
            <input type="text" placeholder={l.vehicleModelPlaceholder} value={form.vehicleModel} onChange={set("vehicleModel")} className={inputClass} />
          </div>
          <div className="space-y-1.5">
            <label className={labelClass}>{l.vehicleYear}</label>
            <input type="text" inputMode="numeric" placeholder={l.vehicleYearPlaceholder} value={form.vehicleYear} onChange={set("vehicleYear")} className={inputClass} />
          </div>
        </div>
      </div>

      <div className="space-y-1.5">
        <label className={labelClass}>{l.message} *</label>
        <textarea rows={4} placeholder={l.messagePlaceholder} value={form.message} onChange={set("message")} className={`${inputClass} resize-none`} />
        {fieldErrors.message && <p className={errorClass}>{fieldErrors.message}</p>}
      </div>

      {status === "error" && (
        <p className="rounded-sm border border-destructive/20 bg-destructive/5 px-4 py-3 text-xs text-destructive">
          {l.errorText}
        </p>
      )}

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
