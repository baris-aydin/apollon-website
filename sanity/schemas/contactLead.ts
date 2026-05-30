import { defineField, defineType } from "sanity"

export const contactLead = defineType({
  name: "contactLead",
  title: "Contact Lead",
  type: "document",
  preview: {
    select: {
      title: "subject",
      subtitle: "name",
      inquiryType: "inquiryType",
      status: "status",
    },
    prepare(selection) {
      const { title, subtitle, inquiryType, status } = selection as {
        title?: string
        subtitle?: string
        inquiryType?: string
        status?: string
      }
      return {
        title: title || "No subject",
        subtitle: `${subtitle || "Unknown"}  ·  ${inquiryType || ""}  ·  ${status || "new"}`,
      }
    },
  },
  fields: [
    defineField({
      name: "name",
      title: "Name",
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
      name: "phone",
      title: "Phone",
      type: "string",
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "string",
    }),
    defineField({
      name: "inquiryType",
      title: "Inquiry Type",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subject",
      title: "Subject",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "message",
      title: "Message",
      type: "text",
      rows: 6,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "vehicleBrand",
      title: "Vehicle Brand",
      type: "string",
    }),
    defineField({
      name: "vehicleModel",
      title: "Vehicle Model",
      type: "string",
    }),
    defineField({
      name: "vehicleYear",
      title: "Vehicle Year",
      type: "string",
    }),
    defineField({
      name: "preferredContactMethod",
      title: "Preferred Contact Method",
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
          { title: "Reviewing", value: "reviewing" },
          { title: "Contacted", value: "contacted" },
          { title: "Resolved", value: "resolved" },
          { title: "Closed", value: "closed" },
        ],
      },
    }),
    defineField({
      name: "source",
      title: "Source",
      type: "string",
      initialValue: "contact-page",
    }),
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
})
