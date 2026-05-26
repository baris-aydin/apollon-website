'use client'

import { useState } from "react"
import { type Locale } from "@/lib/i18n"

const t = {
  tr: {
    company: "Şirket Adı", country: "Ülke", city: "Şehir", contactPerson: "İletişim Kişisi",
    phone: "Telefon", email: "E-posta", businessType: "İş Tipi", categories: "İlgilenilen Ürün Kategorileri",
    salesChannels: "Mevcut Satış Kanalları", message: "Mesaj / Notlar", submit: "Başvuruyu Gönder",
    success: "Başvurunuz alındı. Ekibimiz en kısa sürede sizinle iletişime geçecek.",
    error: "Bir hata oluştu. Lütfen tekrar deneyin.",
    businessTypes: ["Araç Aksesuar Mağazası", "Oto Servis / Atölye", "Elektronik Mağaza", "Online Satıcı", "Diğer"],
    categoryLabels: ["Araç Multimedya", "Güvenlik & Dashcam", "Motosiklet Sistemleri", "Signature Audio"],
  },
  en: {
    company: "Company Name", country: "Country", city: "City", contactPerson: "Contact Person",
    phone: "Phone", email: "Email", businessType: "Business Type", categories: "Interested Product Categories",
    salesChannels: "Current Sales Channels", message: "Message / Notes", submit: "Submit Application",
    success: "Application received. Our team will contact you shortly.",
    error: "An error occurred. Please try again.",
    businessTypes: ["Car Accessories Store", "Auto Service / Workshop", "Electronics Store", "Online Retailer", "Other"],
    categoryLabels: ["Car Multimedia", "Safety & Dashcam", "Motorcycle Systems", "Signature Audio"],
  },
}

const inputClass = "w-full rounded-sm border border-border/60 bg-input px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-bronze/50 focus:outline-none focus:ring-1 focus:ring-bronze/25"
const labelClass = "block text-xs font-medium uppercase tracking-widest text-muted-foreground"
const selectClass = `${inputClass} cursor-pointer`

const categoryValues = ["car-multimedia", "car-safety-security", "motorcycle-smart-systems", "signature-audio-series"]

export function DistributorForm({ locale }: { locale: Locale }) {
  const l = t[locale]
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [form, setForm] = useState({
    company: "", country: "", city: "", contactPerson: "",
    phone: "", email: "", businessType: "", salesChannels: "", message: "",
  })
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  function toggleCategory(value: string) {
    setSelectedCategories((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    )
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch("/api/distributor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, interestedCategories: selectedCategories }),
      })
      if (res.ok) {
        setStatus("success")
        setForm({ company: "", country: "", city: "", contactPerson: "", phone: "", email: "", businessType: "", salesChannels: "", message: "" })
        setSelectedCategories([])
      } else setStatus("error")
    } catch { setStatus("error") }
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-emerald-400/20 bg-emerald-400/5 p-6 text-center">
        <p className="text-sm text-emerald-400">{l.success}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label className={labelClass}>{l.company}</label>
          <input type="text" required value={form.company} onChange={set("company")} className={inputClass} />
        </div>
        <div className="space-y-1.5">
          <label className={labelClass}>{l.contactPerson}</label>
          <input type="text" required value={form.contactPerson} onChange={set("contactPerson")} className={inputClass} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label className={labelClass}>{l.country}</label>
          <input type="text" required value={form.country} onChange={set("country")} className={inputClass} />
        </div>
        <div className="space-y-1.5">
          <label className={labelClass}>{l.city}</label>
          <input type="text" required value={form.city} onChange={set("city")} className={inputClass} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label className={labelClass}>{l.phone}</label>
          <input type="tel" required value={form.phone} onChange={set("phone")} className={inputClass} />
        </div>
        <div className="space-y-1.5">
          <label className={labelClass}>{l.email}</label>
          <input type="email" required value={form.email} onChange={set("email")} className={inputClass} />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className={labelClass}>{l.businessType}</label>
        <select value={form.businessType} onChange={set("businessType")} className={selectClass}>
          <option value="" disabled>{locale === "tr" ? "Seçin..." : "Select..."}</option>
          {l.businessTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <div className="space-y-2.5">
        <label className={labelClass}>{l.categories}</label>
        <div className="grid grid-cols-2 gap-2">
          {categoryValues.map((value, i) => (
            <label
              key={value}
              className={`flex cursor-pointer items-center gap-3 rounded-sm border px-3.5 py-2.5 text-sm transition-colors ${
                selectedCategories.includes(value)
                  ? "border-bronze/40 text-foreground"
                  : "border-border/60 text-muted-foreground hover:border-border"
              }`}
            >
              <input
                type="checkbox"
                className="accent-bronze"
                checked={selectedCategories.includes(value)}
                onChange={() => toggleCategory(value)}
              />
              {l.categoryLabels[i]}
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-1.5">
        <label className={labelClass}>{l.salesChannels}</label>
        <input type="text" value={form.salesChannels} onChange={set("salesChannels")} className={inputClass} />
      </div>

      <div className="space-y-1.5">
        <label className={labelClass}>{l.message}</label>
        <textarea rows={4} value={form.message} onChange={set("message")} className={`${inputClass} resize-none`} />
      </div>

      {status === "error" && <p className="text-xs text-destructive">{l.error}</p>}

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
