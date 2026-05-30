"use client"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

type WhatsAppButtonProps = {
  href: string
  label: string
  locale: string
  className?: string
  gaSource?: string
}

export function WhatsAppButton({
  href,
  label,
  locale,
  className,
  gaSource = "contact_page",
}: WhatsAppButtonProps) {
  const disabled = href === "#"

  function handleClick() {
    window.gtag?.("event", "whatsapp_click", {
      page: "contact",
      source: gaSource,
      locale,
    })
  }

  return (
    <a
      href={href}
      target={disabled ? undefined : "_blank"}
      rel={disabled ? undefined : "noopener noreferrer"}
      onClick={disabled ? undefined : handleClick}
      aria-disabled={disabled}
      className={className}
    >
      {label}
    </a>
  )
}
