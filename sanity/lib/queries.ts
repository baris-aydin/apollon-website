import { groq } from "next-sanity"

export const homepageQuery = groq`
  *[_type == "homepage" && language == $locale][0]{
    heroTitle,
    heroSubtitle,
    seoTitle,
    seoDescription
  }
`