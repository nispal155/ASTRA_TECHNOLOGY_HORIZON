<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:2563EB,100:F59E0B&height=200&section=header&text=Astra%20Technology%20Horizon&fontSize=50&fontAlignY=38&desc=Engineering%20Excellence,%20Forging%20Futures.&descAlignY=60&descAlign=50&fontColor=ffffff" alt="Astra Technology Horizon Banner"/>

  <h1>🚀 Astra Technology Horizon</h1>
  
  <p><strong>A premier IT consulting and software engineering firm based in Itahari, Nepal.</strong></p>

  <p>
    <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" alt="Next.js"/></a>
    <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react" alt="React"/></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/></a>
    <a href="https://www.framer.com/motion/"><img src="https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer" alt="Framer Motion"/></a>
    <a href="https://github.com/nispal155/ASTRA_TECHNOLOGY_HORIZON/commits/main"><img src="https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=for-the-badge" alt="Maintained"></a>
  </p>
</div>

<br />

> [!NOTE] 
> This project is a state-of-the-art, high-performance web application serving as the digital storefront for Astra Technology Horizon. It showcases services, a portfolio, client testimonials, and more through an incredibly polished and cinematic user experience.

---

## ✨ Premium Features Implemented

We have heavily invested in the UI/UX of this platform, engineering a world-class, premium feel. Here is a comprehensive list of the features and upgrades implemented:

<details open>
<summary><b>📐 1. Modern Architecture & Design</b></summary>
<br/>

- **Next.js 16 App Router** with Turbopack for lightning-fast local development and optimal production builds.
- **Tailwind CSS** for responsive, utility-first styling.
- **Custom Color Palette:** A carefully curated Navy / Amber / Light-Slate aesthetic, strictly avoiding generic neon or pure black themes for a sophisticated corporate look.
- **Fully Responsive:** Mobile-first design ensuring perfect layouts on phones, tablets, and massive desktop monitors.

</details>

<details open>
<summary><b>🎬 2. Advanced Interactions & Animations</b></summary>
<br/>

- 🪄 **Custom Branded Preloader:** A sleek loading screen featuring the company logo and a glowing progress bar that builds anticipation while heavy assets load.
- 🌌 **Interactive WebGL Background:** The Hero section features a real-time, interactive 3D particle network built with `@react-three/fiber` and `three.js`. The particle cloud gently rotates and reacts to mouse movements, creating a high-tech "wow" factor.
- 🧲 **Magnetic UI Elements:** Key Call-to-Action (CTA) buttons physically pull toward the user's cursor using Framer Motion spring physics, creating a highly tactile and playful interaction.
- 🖱️ **Context-Aware Custom Cursor:** The standard mouse pointer is replaced with a custom trailing cursor that dynamically reacts to context. (e.g., hovering over a project expands the cursor into a massive amber bubble that says **"View"**).
- 🎥 **Cinematic Parallax Scrolling:** The About section utilizes `useScroll` and `useTransform` to move background orbs, text content, and statistic cards at entirely different speeds, adding immense depth.
- 🎭 **Text-Masking Reveals:** Headings elegantly animate upward from behind invisible masks as the user scrolls, giving the typography a cinematic, storyboard-like quality.

</details>

<details open>
<summary><b>🧩 3. Comprehensive Sections</b></summary>
<br/>

- 🧭 **Dynamic Navbar:** Responsive navigation with a glassmorphism effect that tracks scroll progress.
- 🌟 **Hero Section:** High-impact introduction with 3D particles and magnetic CTA buttons.
- 📊 **About / Process:** Parallax scrolling statistics and company mission.
- 🛠️ **Services:** Interactive grid detailing software engineering, IT consulting, etc.
- 💻 **Portfolio & Projects Page:** A dedicated `/projects` page showcasing past projects featuring the context-aware "View" cursor.
- 💼 **Careers & Internships:** A dedicated `/careers` page with live job listings and a tailored application form.
- ✉️ **Contact:** Fully functional contact form via Web3Forms, Google Maps integration, and business hours.
- ❓ **FAQ:** Expandable accordion with "Expand All" functionality for frequently asked questions.
- 🤖 **AI Chatbot:** An animated floating AI Assistant designed to answer inquiries instantly.

</details>

<details open>
<summary><b>♿ 4. Accessibility & User Convenience</b></summary>
<br/>

- ⬆️ **Floating Scroll-to-Top Arrow:** Automatically appears when scrolling down, allowing users to smoothly jump back to the top of the page.
- 💬 **Floating WhatsApp Integration:** A persistent, pulsing WhatsApp button in the bottom right corner allowing instant communication with the team.

</details>

---

## 🚀 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/nispal155/ASTRA_TECHNOLOGY_HORIZON.git

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

> [!TIP]
> Open [http://localhost:3000](http://localhost:3000) with your browser to see the live result!

---

<div align="center">
  <h2>📫 Connect With Us</h2>
  <p>
    <strong>📍 Astra Technology Horizon</strong><br/>
    Itahari-4, Sunsari, Nepal<br/><br/>
    📞 <strong>9852048719</strong><br/>
    ✉️ <a href="mailto:contact@astratechnologyhorizon.com">contact@astratechnologyhorizon.com</a><br/>
  </p>

  <br/>
  
  <p align="center">
    <img src="https://capsule-render.vercel.app/api?type=waving&color=0:F59E0B,100:2563EB&height=100&section=footer" alt="Footer Banner"/>
  </p>
</div>

---

## ⚙️ Environment Variables

Copy `.env.example` to `.env.local` (or set them in your hosting dashboard). **Everything is optional** — each feature stays switched off until its variable is set.

| Variable | Enables |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL (default `https://astratech.com.np`) |
| `NEXT_PUBLIC_SHOW_DRAFTS` | Show draft content outside development (use on preview deployments) |
| `NEXT_PUBLIC_OFFICE_MAP_QUERY` | Exact map pin — coordinates like `26.6646,87.2718` (also added to LocalBusiness schema) |
| `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY` | Optional Maps Embed API key |
| `RESEND_API_KEY`, `FORM_TO_EMAIL`, `FORM_FROM_EMAIL` | **Required for forms to deliver.** Server-side email for contact, quote, careers (with CV) and newsletter |
| `RESEND_AUDIENCE_ID` | Store newsletter sign-ups in a Resend audience |
| `NEXT_PUBLIC_CALENDLY_URL` | Booking widget on `/contact` |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 + cookie consent banner |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Plausible analytics (cookieless) |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, `NEXT_PUBLIC_BING_SITE_VERIFICATION` | Search Console / Bing Webmaster verification |
| `NEXT_PUBLIC_GOOGLE_BUSINESS_URL`, `NEXT_PUBLIC_GOOGLE_REVIEW_URL` | Google Business Profile link and "Leave a review" button |
| `NEXT_PUBLIC_SENTRY_DSN` (+ `SENTRY_ORG`, `SENTRY_PROJECT`, `SENTRY_AUTH_TOKEN`) | Error monitoring |

Analytics events tracked automatically: `form_submit`, `phone_click`, `email_click`, `whatsapp_click`, `search`, `estimate_quote_click`.

## ✏️ Editing Content (no code needed)

All content lives in the `content/` folder — edit the files on GitHub and the site rebuilds:

| File | What it controls |
| --- | --- |
| `content/services.json` | Services (titles, descriptions, features, technologies; `icon` is a [lucide](https://lucide.dev) icon name) |
| `content/projects.json` | Portfolio projects and their case studies |
| `content/jobs.json` | Job openings and internships (`/careers`) |
| `content/blog/*.md` | Blog articles (Markdown with a front-matter header) |
| `content/pricing.json` | Pricing packages and the cost estimator |
| `content/locations.json` | Location landing pages (`/locations/...`) |
| `content/testimonials.json` | Written and video testimonials |
| `content/clients.json` | "Trusted by" client logos |
| `content/team.json` | Leadership team |
| `content/faqs.json` | FAQ section (also used for FAQ structured data) |
| `content/ne.json` | Nepali landing page (`/ne`) |

### Drafts

Anything with `"draft": true` (or `draft: true` in a blog post) is visible in development and on previews with `NEXT_PUBLIC_SHOW_DRAFTS=true`, but **hidden from the live site, sitemap and search engines**. Currently in draft and waiting for real information:

- **Pricing** — all prices are `0`/TODO (`content/pricing.json`)
- **Case studies** — client, challenge, solution and results are TODO (`content/projects.json`)
- **Blog articles** — written and ready for review (`content/blog/`)
- **Locations** — Biratnagar, Dharan and Kathmandu need confirmation and unique copy
- **Nepali page** — published, but should be reviewed by a native speaker

## 🧪 Quality

```bash
npm run lint && npm run typecheck && npm run build
npm test            # Playwright smoke + axe accessibility tests (desktop & mobile, light & dark)
```

GitHub Actions (`.github/workflows/ci.yml`) runs lint, type-check, build, tests and Lighthouse CI (budgets in `lighthouserc.json`) on every pull request.

**Uptime monitoring:** point UptimeRobot / Better Stack at `https://astratech.com.np/api/health`.

## 🔎 SEO

- Business details (name, address, phone, email, hours) live in `src/lib/site.ts`.
- Per-page metadata uses `pageMetadata()` from `src/lib/seo.ts`; structured data builders are in `src/lib/schema.ts`.
- `/sitemap.xml`, `/robots.txt`, `/rss.xml`, `/manifest.webmanifest` and the Open Graph image are generated automatically.
- Security headers (CSP, HSTS, etc.) are set in `next.config.ts` — add any new third-party domain there.
- Design tokens (light & dark palettes) and `btn-primary` / `btn-secondary` / `card` utilities live in `src/app/globals.css`.
