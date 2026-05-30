import { defineField, defineType } from "sanity"

export const journalInterestLead = defineType({
  name: "journalInterestLead",
  title: "Journal Interest Lead",
  type: "document",
  preview: {
    select: {
      title: "email",
      subtitle: "interestType",
      status: "status",
    },
    prepare(selection) {
      const { title, subtitle, status } = selection as {
        title?: string
        subtitle?: string
        status?: string
      }
      return {
        title: title || "No email",
        subtitle: `${subtitle || "all"}  ·  ${status || "new"}`,
      }
    },
  },
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "interestType",
      title: "Interest Type",
      type: "string",
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
          { title: "Contacted", value: "contacted" },
          { title: "Unsubscribed", value: "unsubscribed" },
        ],
      },
    }),
    defineField({
      name: "source",
      title: "Source",
      type: "string",
      initialValue: "journal-page",
    }),
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
})
