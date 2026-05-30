import { defineField, defineType } from "sanity"

export const partnerLead = defineType({
  name: "partnerLead",
  title: "Partner Lead",
  type: "document",
  preview: {
    select: { title: "companyName", subtitle: "city", status: "status" },
    prepare(selection) {
      const { title, subtitle, status } = selection as {
        title?: string
        subtitle?: string
        status?: string
      }
      return {
        title: title || "Unknown Company",
        subtitle: `${subtitle || ""}  ·  ${status || "new"}`,
      }
    },
  },
  fields: [
    defineField({
      name: "companyName",
      title: "Company Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "country",
      title: "Country",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "city",
      title: "City",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "contactPerson",
      title: "Contact Person",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "businessType",
      title: "Business Type",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "interestedCategories",
      title: "Interested Categories",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "salesChannels",
      title: "Sales Channels",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "message",
      title: "Message",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "consent",
      title: "Consent Given",
      type: "boolean",
    }),
    defineField({
      name: "locale",
      title: "Locale",
      type: "string",
    }),
    defineField({
      name: "status",
      title: "Lead Status",
      type: "string",
      initialValue: "new",
      options: {
        list: [
          { title: "New", value: "new" },
          { title: "Reviewing", value: "reviewing" },
          { title: "Contacted", value: "contacted" },
          { title: "Qualified", value: "qualified" },
          { title: "Rejected", value: "rejected" },
          { title: "Closed", value: "closed" },
        ],
      },
    }),
    defineField({
      name: "source",
      title: "Source",
      type: "string",
      initialValue: "partner-distributor-page",
    }),
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
})
