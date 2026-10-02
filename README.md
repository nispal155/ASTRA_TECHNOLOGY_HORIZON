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

Copy `.env.example` to `.env.local` and fill in as needed. All are optional — the site builds without them.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical production URL (default `https://astratech.com.np`). Used for canonical tags, sitemap, Open Graph and JSON-LD. |
| `NEXT_PUBLIC_OFFICE_MAP_QUERY` | Exact office location for the Google Map and directions link — coordinates like `26.6646,87.2718` (also added to LocalBusiness schema) or a place name. Defaults to the street address. |
| `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY` | Optional Maps Embed API key (restrict it to your domain). Without it, a keyless embed is used. |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Web3Forms key for the contact, quote and careers forms. |

## 🔎 SEO

- Business details (name, address, phone, email, hours) live in `src/lib/site.ts` — update them there and every page, the footer, the map and structured data stay consistent.
- Per-page titles/descriptions/canonicals use `pageMetadata()` from `src/lib/seo.ts`.
- `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest` and the Open Graph image are generated by `src/app/sitemap.ts`, `robots.ts`, `manifest.ts` and `opengraph-image.tsx`.
- Design tokens (colours, radius, shadows) and the `btn-primary` / `btn-secondary` / `card` utilities live in `src/app/globals.css`.
