import { defineField, defineType } from "sanity"

export const formLead = defineType({
  name: "formLead",
  title: "Product Inquiry Lead",
  type: "document",
  preview: {
    select: { title: "product", subtitle: "name", status: "status" },
    prepare(selection) {
      const { title, subtitle, status } = selection as {
        title?: string
        subtitle?: string
        status?: string
      }
      return {
        title: title || "Unknown Product",
        subtitle: `${subtitle || ""}  ·  ${status || "new"}`,
      }
    },
  },
  fields: [
    defineField({
      name: "formType",
      title: "Form Type",
      type: "string",
      initialValue: "product-inquiry",
      options: {
        list: [
          { title: "Contact", value: "contact" },
          { title: "Product Inquiry", value: "product-inquiry" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "name", title: "Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "email", title: "Email", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({ name: "product", title: "Product of Interest", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "vehicleBrand", title: "Vehicle Brand", type: "string" }),
    defineField({ name: "vehicleModel", title: "Vehicle Model", type: "string" }),
    defineField({ name: "vehicleYear", title: "Vehicle Year", type: "string" }),
    defineField({ name: "message", title: "Message", type: "text", rows: 5 }),
    defineField({ name: "locale", title: "Locale", type: "string" }),
    defineField({
      name: "status",
      title: "Lead Status",
      type: "string",
      initialValue: "new",
      options: {
        list: [
          { title: "New", value: "new" },
          { title: "Contacted", value: "contacted" },
          { title: "Qualified", value: "qualified" },
          { title: "Closed", value: "closed" },
          { title: "Rejected", value: "rejected" },
        ],
      },
    }),
    defineField({ name: "source", title: "Source", type: "string" }),
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
})
