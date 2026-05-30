import { blogPost } from "./blogPost"
import { category } from "./category"
import { contactLead } from "./contactLead"
import { formLead } from "./formLead"
import { homepage } from "./homepage"
import { journalInterestLead } from "./journalInterestLead"
import { partnerLead } from "./partnerLead"
import { product } from "./product"
import { siteSettings } from "./siteSettings"

export const schemaTypes = [
  product,
  category,
  blogPost,
  homepage,
  siteSettings,
  formLead,
  partnerLead,
  contactLead,
  journalInterestLead,
]