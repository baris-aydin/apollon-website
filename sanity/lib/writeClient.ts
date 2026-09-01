import { createClient } from "next-sanity"

// Server-only write client — never import this from client components.
// SANITY_API_WRITE_TOKEN must NOT be prefixed with NEXT_PUBLIC_.
export function getWriteClient() {
  return createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-05-26",
    token: process.env.SANITY_API_WRITE_TOKEN,
    useCdn: false,
  })
}
