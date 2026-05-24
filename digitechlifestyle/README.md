# DigitechLifestyle

Production-ready Next.js publishing platform for **digital living, wealth, AI, automation, affiliate content, newsletter growth, and digital products**.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- MDX article drafts stored in `src/content/articles`
- File-based sitemap and robots routes
- SEO metadata and article schema
- CMS-ready data modules for tools, categories, and pillar pages

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

Set `NEXT_PUBLIC_SITE_URL` to the production domain before deployment:

```bash
NEXT_PUBLIC_SITE_URL=https://digitechlifestyle.com
```

## Deployment

This project is ready for Vercel or any Next.js-compatible host.

1. Push the `digitechlifestyle` folder to a Git repository.
2. Import the project in Vercel.
3. Set the build command to `npm run build`.
4. Set the environment variable `NEXT_PUBLIC_SITE_URL`.
5. Deploy.

## Content workflow

Articles live in `src/content/articles` as `.mdx` files with frontmatter:

```mdx
---
title: "Article title"
description: "SEO meta description"
category: "AI Tools"
date: "2026-05-08"
author: "DigitechLifestyle Editorial"
readingTime: "7 min read"
featured: "true"
---
```

The blog index and sitemap automatically read the files. Use lowercase, hyphenated filenames because each filename becomes the URL slug.

## Tool directory

Tool cards are managed in `src/lib/tools.ts`. Each tool supports:

- Name
- Category
- Description
- Best-for label
- Pricing label
- Internal guide URL
- Featured flag

## Pillar pages

Pillar page metadata and bullets are managed in `src/lib/pages.ts`. The current categories are:

- AI Tools
- Digital Wealth
- Automation
- Smart Lifestyle
- Make Money Online

## Advertising and affiliate areas

Reusable advertising placeholders live in `src/components/AdSlot.tsx` and are currently placed in:

- Header
- Footer
- Right sidebar

Affiliate call-to-action sections live in `src/components/AffiliateCta.tsx`.

## Newsletter

The newsletter form is in `src/components/NewsletterForm.tsx`. A popup-ready hidden component is included in `src/components/NewsletterPopup.tsx` so a future email platform integration can activate it without redesigning the site.

## Legal

Starter pages are included for:

- Privacy Policy
- Affiliate Disclosure
- Terms

Review these pages with qualified legal counsel before public launch.
