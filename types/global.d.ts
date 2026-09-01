// Global type extensions injected at runtime (e.g. Google Analytics gtag snippet)

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export {}
