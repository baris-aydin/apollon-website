# Apollon Entertainment Systems Website

A bilingual digital showroom for **Apollon Entertainment Systems**, an automotive technology brand focused on premium multimedia, safety, and motorcycle smart systems.

The website is designed to present the brand, showcase its product portfolio, support distributor inquiries, and provide a scalable foundation for future growth in Türkiye and international markets.

> **Status:** Active development

---

## Overview

Apollon Entertainment Systems combines automotive technology with a premium, culture-driven brand identity. This project translates that vision into a modern web experience with a responsive interface, bilingual content, structured product pages, and clear inquiry flows.

The platform is built as a digital showroom rather than a traditional e-commerce store. Its primary goals are to:

- Introduce the Apollon brand and its positioning
- Present products in a clear and visually engaging way
- Help visitors explore products by category and compatible vehicle brand
- Support distributor and partnership inquiries
- Provide localized Turkish and English experiences
- Create a scalable base for future content, analytics, and product expansion

---

## Key Features

### Bilingual Experience

The website supports localized Turkish and English routes:

```text
/tr/...
/en/...
```

This allows the brand to serve the Turkish market while remaining ready for international expansion.

### Responsive Design

The interface is designed for:

- Desktop
- Tablet
- Mobile

Layouts, typography, navigation, and content sections adapt across screen sizes for a consistent experience.

### Product Catalog

The product architecture is organized into four main categories:

#### Car Multimedia Systems

- Universal Android screens
- Audi
- BMW
- Mercedes-Benz
- Porsche
- Toyota
- Lexus
- Range Rover / Land Rover

#### Car Safety & Security

- DC-UHD04 Smart Dashcam
- DC-UHD5 4G Dashcam
- L3 Smart Dashcam

#### Motorcycle Smart Systems

- MDC-SMART02
- MDC-PLUS02
- Moto Dash Cam TR V2

#### Signature Audio Series

- Coming Soon
- Research and development preview

### Distributor Inquiry Flow

The website includes a dedicated distributor and partnership section designed for prospective business partners. The inquiry flow can collect information such as:

- Company name
- Country and city
- Contact person
- Phone number
- Email address
- Business type
- Interested product categories
- Existing sales channels
- Additional message

### Brand-Focused Pages

The website structure includes:

- Home
- Products
- Product category pages
- Product detail pages
- About
- Distributor / Partnership
- Contact
- Signature Audio Series
- Journal / Coming Soon

### SEO-Ready Structure

The project is structured to support:

- Localized metadata
- Search-friendly routes
- Product-specific pages
- Open Graph metadata
- Sitemap generation
- Analytics integration
- Google Search Console integration

---

## Tech Stack

| Technology | Purpose |
| --- | --- |
| [Next.js](https://nextjs.org/) | Frontend framework and routing |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe development |
| [Tailwind CSS](https://tailwindcss.com/) | Responsive styling |
| [shadcn/ui](https://ui.shadcn.com/) | Reusable interface components |
| [Sanity CMS](https://www.sanity.io/) | Structured content management |
| [Vercel](https://vercel.com/) | Deployment and hosting |
| Google Analytics | Visitor and conversion tracking |
| Google Search Console | Search visibility monitoring |

---

## Planned Routes

```text
/[lang]
/[lang]/products
/[lang]/products/car-multimedia
/[lang]/products/car-multimedia/[brand]
/[lang]/products/car-safety-security
/[lang]/products/car-safety-security/[slug]
/[lang]/products/motorcycle-smart-systems
/[lang]/products/motorcycle-smart-systems/[slug]
/[lang]/products/signature-audio-series
/[lang]/about
/[lang]/distributor
/[lang]/contact
/[lang]/journal
```

Where `[lang]` is:

```text
tr
en
```

---

## Project Structure

A simplified structure may look like this:

```text
app/
├── [lang]/
│   ├── about/
│   ├── contact/
│   ├── distributor/
│   ├── journal/
│   ├── products/
│   ├── layout.tsx
│   └── page.tsx
├── api/
├── globals.css
└── layout.tsx

components/
├── layout/
├── sections/
├── shared/
└── ui/

lib/
├── sanity/
├── analytics/
└── utils/

public/
├── images/
├── logos/
└── icons/
```

The exact structure may evolve as the project grows.

---

## Getting Started

### Prerequisites

Install the following tools before running the project:

- Node.js 18 or newer
- npm, pnpm, or yarn
- Git

### Clone the Repository

```bash
git clone https://github.com/your-username/apollon-entertainment-systems.git
cd apollon-entertainment-systems
```

### Install Dependencies

Using npm:

```bash
npm install
```

Using pnpm:

```bash
pnpm install
```

### Configure Environment Variables

Create a `.env.local` file in the project root:

```bash
touch .env.local
```

Add the variables required by the project:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000

NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
SANITY_API_TOKEN=

NEXT_PUBLIC_GA_MEASUREMENT_ID=
```

Do not commit `.env.local` or any private credentials to the repository.

### Run the Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

### Build for Production

```bash
npm run build
npm run start
```

---

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the local development server |
| `npm run build` | Creates a production build |
| `npm run start` | Runs the production build locally |
| `npm run lint` | Runs linting checks |

---

## Content Management

Product and page content can be managed through Sanity CMS.

A product schema can include:

```text
name
category
slug
short description
long description
hero image
gallery
features
technical specifications
compatible vehicles
video URL
warranty information
inquiry CTA
SEO title
SEO description
language
publication status
```

This structure makes it easier to add new product pages without rebuilding the website architecture.

---

## Deployment

The project is designed for deployment on Vercel.

### Recommended Deployment Flow

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Add the required environment variables.
4. Deploy the project.
5. Connect the custom domain.
6. Configure analytics and search monitoring.

---

## Roadmap

### Version 1

- [ ] Complete responsive website layout
- [ ] Add Turkish and English content
- [ ] Publish core product category pages
- [ ] Add product detail templates
- [ ] Add distributor inquiry form
- [ ] Add contact page and social links
- [ ] Connect CMS
- [ ] Configure analytics and SEO
- [ ] Deploy production website

### Future Improvements

- [ ] Expand product catalog
- [ ] Add distributor lead management workflow
- [ ] Add newsletter integration
- [ ] Add journal content
- [ ] Add product comparison tools
- [ ] Add installation inquiry workflow
- [ ] Add richer CMS-based page editing
- [ ] Add customer support integrations

---

## Screenshots

Add project screenshots after the main pages are finalized.

```md
![Home Page](./public/screenshots/home-page.png)
![Products Page](./public/screenshots/products-page.png)
![Mobile View](./public/screenshots/mobile-view.png)
```

---

## Live Website

The production URL will be added after deployment.

```text
Coming soon
```

---

## Author

**Barış Alp Aydın**

- Portfolio: [baris-aydin.dev](https://baris-aydin.dev)
- GitHub: [github.com/baris-aydin](https://github.com/baris-aydin)

---

## License

This repository contains proprietary work developed for **Apollon Entertainment Systems**.

The source code, brand assets, product images, written content, and related materials may not be copied, redistributed, or used commercially without permission.
