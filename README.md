# FlowState — Premium Social Media Management Platform

AI-powered social media management. Create, schedule, and publish across all major platforms.

## Stack
- **Next.js 16** (App Router) + TypeScript
- **Prisma 7** + SQLite (dev) / PostgreSQL (prod)
- **NextAuth v5** — credentials auth
- **Stripe** — subscriptions + billing portal
- **Anthropic Claude** — AI content generation
- **Tailwind CSS** — premium dark design system

## Pricing
| Plan | Price | Posts/day | AI Credits |
|------|-------|-----------|------------|
| Free | $0 | 2 | 5/mo |
| Pro | $29.99/mo | 5 | 100/mo |
| Agency | $99.99/mo | 20 | 500/mo |

## Quick Start

```bash
cd flowstate-app
npm install

# Copy and fill in your keys
cp .env.example .env

# Run database migration
npx prisma migrate dev

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Required API Keys (in `.env`)

| Key | Where to get |
|-----|-------------|
| `ANTHROPIC_API_KEY` | [console.anthropic.com](https://console.anthropic.com) |
| `STRIPE_SECRET_KEY` | [dashboard.stripe.com](https://dashboard.stripe.com) |
| `STRIPE_PUBLISHABLE_KEY` | Stripe dashboard |
| `STRIPE_WEBHOOK_SECRET` | `stripe listen --forward-to localhost:3000/api/stripe/webhook` |
| `STRIPE_PRICE_PRO` | Create a product + price in Stripe dashboard |
| `STRIPE_PRICE_AGENCY` | Create a product + price in Stripe dashboard |
| `NEXTAUTH_SECRET` | Run `openssl rand -base64 32` |

## Features
- ✅ Premium dark landing page
- ✅ Register / login (email + password)
- ✅ AI content generation (social posts, blog, SEO blog)
- ✅ Content calendar
- ✅ Multi-platform selector (Twitter, Facebook, Instagram, LinkedIn, TikTok, Pinterest)
- ✅ WordPress REST API integration
- ✅ Stripe subscriptions with 3 tiers
- ✅ Analytics dashboard
- ✅ Per-plan post limits enforced server-side
- ✅ Dashboard with sidebar nav

## Stripe Setup
1. Create two products in Stripe: **Pro ($29.99/mo)** and **Agency ($99.99/mo)**
2. Copy the price IDs to `.env`
3. For local testing: `stripe listen --forward-to localhost:3000/api/stripe/webhook`

## WordPress Integration
Users connect their WordPress sites from **Dashboard → Platforms**.
Requires WordPress Application Passwords (WordPress 5.6+):
`Users → Your Profile → Application Passwords`

## Deployment (Vercel)
1. Push to GitHub
2. Import repo in Vercel
3. Add all env vars
4. Switch `DATABASE_URL` to a PostgreSQL URL (Railway, Supabase, Neon)
5. Update Prisma schema: change `provider = "sqlite"` → `"postgresql"` and add url
