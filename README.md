# Auto Glass Marketing Pros

A new, high-converting marketing website for **Auto Glass Marketing Pros** — the
marketing agency built exclusively for auto glass repair & replacement shops.

Built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and
**Tailwind CSS v4**.

## Features

- ⚡️ Fast, static-first pages (SSG) with strong Core Web Vitals
- 🎨 Custom dark, "glass"-inspired design system with reusable components
- 📱 Fully responsive with an accessible mobile navigation
- 🔍 SEO-ready: per-page metadata, Open Graph, JSON-LD, `sitemap.xml`, `robots.txt`
- 🧭 Pages: Home, Services overview, 4 per-service landing pages, About, Reviews,
  Contact (working form + API route), Resources/Blog (index + articles),
  Privacy, Terms, custom 404
- 📝 File-based content for services and blog posts (`src/lib/`)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

## Project structure

```
src/
  app/                 # App Router pages & routes
    api/contact/       # Lead form endpoint
    services/[slug]/   # Per-service landing pages
    blog/[slug]/       # Blog articles
  components/          # Reusable UI (Navbar, Footer, ui primitives, icons…)
  lib/                 # Site config, services content, blog posts
```

## Customizing content

- **Business info** (name, phone, email, pricing, socials): `src/lib/site.ts`
- **Service pages** copy: `src/lib/services-content.ts`
- **Blog posts**: `src/lib/posts.ts`
- **Colors / fonts / theme tokens**: `src/app/globals.css`

## Next steps for production

- Wire the contact form endpoint (`src/app/api/contact/route.ts`) to your email/CRM
- Replace illustrative reviews with real, named client testimonials
- Add real client logos and shop photos
- Point the domain and confirm the phone number / email in `src/lib/site.ts`
