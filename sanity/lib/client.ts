import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

//export const client = createClient({
  //projectId,
  //dataset,
  //apiVersion,
  //useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
//})

// Fallback to "placeholder" so the module evaluates even when env vars are
// absent at build time. Actual fetch calls will fail gracefully via try/catch.
export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "placeholder",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2026-05-22",
  useCdn: true,
})