'use client'

import { useState } from "react"
import { type Locale } from "@/lib/i18n"

const t = {
  tr: { name: "Ad Soyad", email: "E-posta", phone: "Telefon", message: "Mesaj", submit: "Gönder", success: "Mesajınız alındı. En kısa sürede dönüş yapacağız.", error: "Bir hata oluştu. Lütfen tekrar deneyin." },
  en: { name: "Full Name", email: "Email", phone: "Phone", message: "Message", submit: "Send Message", success: "Message received. We will get back to you shortly.", error: "An error occurred. Please try again." },
}

const inputClass = "w-full rounded-sm border border-border/60 bg-input px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-bronze/50 focus:outline-none focus:ring-1 focus:ring-bronze/25"
const labelClass = "block text-xs font-medium uppercase tracking-widest text-muted-foreground"

export function ContactForm({ locale }: { locale: Locale }) {
  const l = t[locale]
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" })

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }))

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) })
      if (res.ok) { setStatus("success"); setForm({ name: "", email: "", phone: "", message: "" }) }
      else setStatus("error")
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label className={labelClass}>{l.name}</label>
          <input type="text" required value={form.name} onChange={set("name")} className={inputClass} />
        </div>
        <div className="space-y-1.5">
          <label className={labelClass}>{l.email}</label>
          <input type="email" required value={form.email} onChange={set("email")} className={inputClass} />
        </div>
      </div>
      <div className="space-y-1.5">
        <label className={labelClass}>{l.phone}</label>
        <input type="tel" value={form.phone} onChange={set("phone")} className={inputClass} />
      </div>
      <div className="space-y-1.5">
        <label className={labelClass}>{l.message}</label>
        <textarea required rows={5} value={form.message} onChange={set("message")} className={`${inputClass} resize-none`} />
      </div>
      {status === "error" && <p className="text-xs text-destructive">{l.error}</p>}
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-sm border border-bronze bg-bronze px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-bronze/90 hover:shadow-[0_0_16px_oklch(0.70_0.12_65_/_0.3)] disabled:opacity-50"
      >
        {status === "loading" ? "..." : l.submit}
      </button>
    </form>
  )
}
