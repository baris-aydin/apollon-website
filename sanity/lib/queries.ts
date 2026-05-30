import { groq } from "next-sanity"

export const homepageQuery = groq`
  *[_type == "homepage" && language == $locale][0]{
    heroTitle,
    heroSubtitle,
    seoTitle,
    seoDescription
  }
`

// Only returns posts that are explicitly published, approved, and have a publishedAt date.
// Draft, under-review, approved, and archived posts are never exposed publicly.
export const publishedPostsQuery = groq`
  *[
    _type == "blogPost"
    && language == $locale
    && status == "published"
    && approvedForPublication == true
    && defined(publishedAt)
  ] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    category,
    publishedAt,
    authorName,
    featured,
    "coverImage": coverImage.asset->url
  }
`

export const publishedPostBySlugQuery = groq`
  *[
    _type == "blogPost"
    && language == $locale
    && slug.current == $slug
    && status == "published"
    && approvedForPublication == true
    && defined(publishedAt)
  ][0]{
    _id,
    title,
    slug,
    excerpt,
    category,
    publishedAt,
    authorName,
    content,
    "coverImage": coverImage.asset->url,
    seoTitle,
    seoDescription,
    relatedPosts[]->{
      _id,
      title,
      slug,
      excerpt,
      category,
      publishedAt,
      "coverImage": coverImage.asset->url
    }
  }
`

// All published slugs for a locale — used in generateStaticParams when articles exist
export const publishedSlugsByLocaleQuery = groq`
  *[
    _type == "blogPost"
    && language == $locale
    && status == "published"
    && approvedForPublication == true
    && defined(publishedAt)
  ].slug.current
`
