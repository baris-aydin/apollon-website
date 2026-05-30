import { defineField, defineType } from "sanity"

export const blogPost = defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  preview: {
    select: {
      title: "title",
      subtitle: "authorName",
      status: "status",
    },
    prepare(selection) {
      const { title, subtitle, status } = selection as {
        title?: string
        subtitle?: string
        status?: string
      }
      return {
        title: title || "Untitled",
        subtitle: `${subtitle || "No author"}  ·  ${status || "draft"}`,
      }
    },
  },
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "language",
      title: "Language",
      type: "string",
      options: {
        list: [
          { title: "Turkish", value: "tr" },
          { title: "English", value: "en" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "authorName",
      title: "Author Name",
      type: "string",
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    }),
    defineField({
      name: "status",
      title: "Publication Status",
      type: "string",
      initialValue: "draft",
      options: {
        list: [
          { title: "Draft", value: "draft" },
          { title: "Under Review", value: "under-review" },
          { title: "Approved", value: "approved" },
          { title: "Published", value: "published" },
          { title: "Archived", value: "archived" },
        ],
      },
    }),
    defineField({
      name: "approvedForPublication",
      title: "Approved for Publication",
      type: "boolean",
      initialValue: false,
      description:
        "Must be true AND status must be 'published' AND publishedAt must exist for the post to appear publicly.",
    }),
    defineField({
      name: "featured",
      title: "Featured Post",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "relatedPosts",
      title: "Related Posts",
      type: "array",
      of: [{ type: "reference", to: [{ type: "blogPost" }] }],
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 3,
    }),
  ],
})
