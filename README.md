# Portfolio — CS Personal Site

A high-quality, production-ready portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

---

## 🚀 Quick Start

```bash
# 1. Clone or unzip this project
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Open in browser
open http://localhost:3000
```

---

## 📁 Folder Structure

```
portfolio/
├── public/
│   ├── favicon.svg              # SVG favicon (monogram)
│   └── og-image.png             # Open Graph preview image (add your own!)
│
├── src/
│   ├── app/
│   │   ├── globals.css          # Design tokens (CSS vars), base styles
│   │   ├── layout.tsx           # Root layout: fonts, ThemeProvider, SEO metadata
│   │   └── page.tsx             # Main page, composes all sections
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Nav.tsx          # Sticky nav, active section, theme toggle, mobile menu
│   │   │   ├── Footer.tsx       # Minimal footer with links + back-to-top
│   │   │   └── ThemeProvider.tsx # next-themes wrapper
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.tsx         # Full-height hero, rotating words, CTA, tech marquee
│   │   │   ├── About.tsx        # Narrative + focus areas + stats
│   │   │   ├── Projects.tsx     # Card-based projects with hover depth
│   │   │   ├── Skills.tsx       # Categorized skill grid with color-coded pills
│   │   │   ├── Experience.tsx   # Vertical timeline with animated dots
│   │   │   └── Contact.tsx      # Email CTA, copy button, social links
│   │   │
│   │   └── ui/
│   │       ├── FadeIn.tsx       # Reusable scroll-triggered fade/slide animations
│   │       └── SectionHeader.tsx # Consistent section label + title + subtitle pattern
│   │
│   ├── hooks/
│   │   └── useScrollProgress.ts # useScroll + useSpring utilities
│   │
│   ├── lib/
│   │   └── utils.ts             # cn() — clsx + tailwind-merge helper
│   │
│   └── types/
│       └── index.ts             # Shared TypeScript types (Project, Skill, Experience)
│
├── tailwind.config.ts           # Design tokens, custom animations, font variables
├── tsconfig.json
├── next.config.mjs
└── package.json
```

---

## 🎨 Customizing Your Content

All content is in component files under `src/components/sections/`. Search for:

| What to change | Where |
|---|---|
| Your name | `Hero.tsx` — `<h1>` |
| One-liner / bio | `Hero.tsx` — `<p>` after h1 |
| About text | `About.tsx` — narrative paragraphs |
| Stats (startup, hackathon) | `About.tsx` — `STATS` array |
| Projects | `Projects.tsx` — `PROJECTS` array |
| Skills | `Skills.tsx` — `SKILL_CATEGORIES` array |
| Experience | `Experience.tsx` — `EXPERIENCES` array |
| Email / social links | `Contact.tsx` + `Footer.tsx` |
| SEO metadata | `app/layout.tsx` — `metadata` export |
| Domain | `app/layout.tsx` — `metadataBase` |

---

## 🌈 Design Tokens

Defined in `globals.css` as CSS custom properties:

```css
/* Dark (default) */
--background: 0 0% 4%;         /* #0a0a0a */
--foreground: 0 0% 95%;        /* off-white */
--accent: 38 92% 55%;          /* amber #F5A623 */
--card: 0 0% 7%;
--border: 0 0% 14%;

/* Light */
--background: 0 0% 98%;
--foreground: 0 0% 6%;
--accent: 38 92% 55%;          /* same accent in both modes */
```

To change the accent color, update `--accent` in both `:root` and `.dark` in `globals.css`.

---

## ☁️ Deploy to Vercel

### Option 1 — Vercel CLI (fastest)

```bash
# Install Vercel CLI
npm i -g vercel

# From your project root:
vercel

# Follow prompts. On first deploy, it'll ask:
# - Set up and deploy? → Y
# - Which scope? → your account
# - Link to existing project? → N (new project)
# - Detect Next.js? → Yes (auto-detected)

# Production deploy:
vercel --prod
```

### Option 2 — GitHub Integration (recommended for ongoing use)

1. Push this project to a GitHub repo
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repo
4. Vercel auto-detects Next.js — click **Deploy**
5. Done. Every `git push` to `main` auto-deploys.

### Custom Domain

```bash
vercel domains add rishitsingh.dev
```

Or add it in Vercel dashboard under **Project → Settings → Domains**.

### Environment Variables

None required for this project. If you add a contact form or analytics later, add them in **Vercel Dashboard → Settings → Environment Variables**.

---

## 🔧 Adding an OG Image

Create a 1200×630px image and save it to `public/og-image.png`. This appears when your link is shared on Twitter/LinkedIn/Slack.

You can generate one dynamically with Next.js OG image generation:

```tsx
// src/app/opengraph-image.tsx
import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    <div style={{ display: 'flex', background: '#0a0a0a', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ color: '#F5A623', fontWeight: 800, fontSize: 80 }}>Rishit Singh</h1>
    </div>
  )
}
```

---

## ✨ 3 Ways to Elevate Beyond Most CS Portfolios

### 1. 🎞 Add a Live Product Demo or Case Study

Most portfolios just list projects. A short (60–90 second) screen recording embedded on the page — or a proper "case study" page per project with: Problem → Research → Design Decisions → Technical Tradeoffs → Outcome — shows you think like a product person, not just a coder.

Add per-project pages at `src/app/projects/[slug]/page.tsx` with MDX content.

### 2. 📊 Add a Real "Now" or "Building" section

A `now.rishitsingh.dev` page (or section) showing what you're *actively* building right now, what you're reading, what's on your mind. This signals intellectual curiosity and authenticity. Update it monthly. It becomes a lightweight blog that doesn't require the pressure of perfect posts.

### 3. 🧪 Make One Section Technically Impressive

Swap the static skills section for an interactive demo — e.g., a live WebGL shader, a tiny embedded system simulator, or a real-time accessibility analyzer. This shows > tells. One memorable interaction beats ten bullet points.

---

## 🛠 Scripts

```bash
npm run dev       # Start local dev server
npm run build     # Production build
npm run start     # Start production server locally
npm run lint      # Run ESLint
```

---

## 📦 Key Dependencies

| Package | Purpose |
|---|---|
| `next` 14 | App Router, Server Components, fonts |
| `framer-motion` | Scroll animations, micro-interactions |
| `next-themes` | Dark/light mode with no flash |
| `tailwindcss` | Utility-first CSS with design tokens |
| `lucide-react` | Clean icon set |
| `clsx` + `tailwind-merge` | Safe className composition |

---

*Built with intention. No templates were harmed in the making of this portfolio.*
