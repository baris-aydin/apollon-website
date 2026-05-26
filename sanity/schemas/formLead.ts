import { defineField, defineType } from "sanity"

export const formLead = defineType({
  name: "formLead",
  title: "Form Lead",
  type: "document",
  fields: [
    defineField({
      name: "formType",
      title: "Form Type",
      type: "string",
      options: {
        list: [
          { title: "Contact", value: "contact" },
          { title: "Product Inquiry", value: "product-inquiry" },
          { title: "Distributor", value: "distributor" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
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
      name: "country",
      title: "Country",
      type: "string",
    }),
    defineField({
      name: "city",
      title: "City",
      type: "string",
    }),
    defineField({
      name: "interestedProduct",
      title: "Interested Product",
      type: "string",
    }),
    defineField({
      name: "message",
      title: "Message",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "status",
      title: "Lead Status",
      type: "string",
      options: {
        list: [
          { title: "New", value: "new" },
          { title: "Contacted", value: "contacted" },
          { title: "Closed", value: "closed" },
        ],
      },
      initialValue: "new",
    }),
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
})