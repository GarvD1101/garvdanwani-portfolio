# Portfolio Website — Implementation Plan

## Overview

Build a complete Next.js (App Router) portfolio site for **Garv Danwani, AI Systems Engineer**, at `dev_portfolio/`. The site targets recruiters and hiring managers at AI/health-tech companies who skim fast and look for production impact evidence.

Two visual modes from one design system:
- **Landing page** — clinical minimalism, generous whitespace, data-forward
- **Case study pages** — editorial/magazine layout, full-bleed sections, pull quotes, stat callouts

---

## Design Direction (per `frontend-design` skill)

### Typography System

| Role | Font | Rationale |
|------|------|-----------|
| **Display / Case Study Headlines** | **Newsreader** (serif, Google Fonts) | Editorial gravitas of a technical journal — variable optical sizing, not overused in AI-generated sites. Warm but serious. |
| **Body / UI Chrome** | **Geist Sans** (via `next/font`) | Vercel's own typeface — precise, quiet, built for interfaces. Not Inter/Roboto. Ships with Next.js. |
| **Data / Metrics** | **Geist Mono** (via `next/font`) | Monospace for latency figures, percentages, pipeline numbers. Nods to engineering without being a gimmick. |

Type scale (modular, 1.25 ratio):
```
12px / 14px / 16px (body) / 20px / 25px / 31px / 39px / 49px / 61px
```

### Color Palette (Light Mode Primary)

| Token | Hex | Role |
|-------|-----|------|
| `--ink` | `#1A1A1A` | Primary text, headings |
| `--ink-secondary` | `#555555` | Secondary text, captions |
| `--ink-tertiary` | `#888888` | Tertiary / muted |
| `--surface` | `#FAFAF9` | Page background (warm off-white, not pure white, not cream-#F4F1EA) |
| `--surface-elevated` | `#FFFFFF` | Cards, elevated surfaces |
| `--accent` | `#2563EB` | Links, interactive (a restrained blue — not purple, not terracotta) |
| `--accent-subtle` | `#EFF6FF` | Accent background wash |
| `--border` | `#E5E5E3` | Subtle dividers |
| `--metric-highlight` | `#0F172A` | Large stat numbers (near-black for maximum weight) |

### Signature Element

**The "metric strip"** — a horizontal band of 3–4 large-type statistics using Geist Mono, each with a small Geist Sans label beneath. This appears on the landing page and is echoed as sidebar metric annotations in case study pages. It's the one memorable structural device: numbers as architecture, not decoration.

### Layout Concept

**Landing page:** Single-column, max-width ~720px body content, centered. Metric strip breaks the column at full-bleed width. Sections separated by generous vertical rhythm (80–120px), not decorative dividers.

**Case study pages:** Wider max-width (~880px) with a sticky sidebar rail (200px) for metric callouts on desktop. Full-bleed section breaks between major parts. Pull quotes set in Newsreader italic at 25px.

```
Landing page (ASCII):
┌─────────────────────────────────┐
│        [nav — name + links]     │
│                                 │
│   Name                          │
│   Title                         │
│   One-line positioning          │
│                        [photo]  │
│                                 │
│ ─── Focus Areas (tag row) ───── │
│                                 │
│ ████ METRIC ████ METRIC ████    │  ← full-bleed metric strip
│                                 │
│   Featured Case Studies         │
│   ┌─────────┐  ┌─────────┐     │
│   │ Card 1  │  │ Card 2  │     │
│   └─────────┘  └─────────┘     │
│                                 │
│   Experience · Education        │
│   Tech Stack (grouped)          │
│   Contact / Footer              │
└─────────────────────────────────┘

Case study page (ASCII):
┌─────────────────────────────────────┐
│  [back to home]        [nav links]  │
│                                     │
│  HEADLINE (Newsreader, large)       │
│  subtitle / context                 │
│                                     │
│  ┌──────────────────┐ ┌──────────┐  │
│  │                  │ │ METRIC   │  │
│  │  Body content    │ │ sidebar  │  │
│  │  (Geist Sans)    │ │ (sticky) │  │
│  │                  │ │          │  │
│  └──────────────────┘ └──────────┘  │
│                                     │
│  ── Pull Quote (Newsreader) ──────  │
│                                     │
│  ┌──────────────────┐ ┌──────────┐  │
│  │  More content    │ │ More     │  │
│  │                  │ │ metrics  │  │
│  └──────────────────┘ └──────────┘  │
│                                     │
│  Tech Stack · Footer                │
└─────────────────────────────────────┘
```

### Motion

Restrained. Scroll-reveal fade-up on sections (using `IntersectionObserver`, 200ms ease-out), hover lift on case study cards (subtle `translateY(-2px)` + shadow). No page transitions for V1 (can add View Transitions later). `prefers-reduced-motion` respected.

---

## User Review Required

> [!IMPORTANT]
> **Typography choice**: I'm proposing **Newsreader** (serif) for headlines + **Geist Sans/Mono** for body and data. This avoids the overused AI-default fonts (Inter, Space Grotesk) while pairing a journal-quality serif with a precision grotesk. Does this direction feel right, or do you have a preference?

> [!IMPORTANT]
> **Color**: The palette intentionally avoids the three AI-design defaults (cream+terracotta, dark+acid-green, broadsheet). The accent is a single restrained blue. The background is a warm stone-white `#FAFAF9`. Any preferences here?

> [!IMPORTANT]
> **Photo treatment**: Your photo is professional and high-quality. I plan to use it at ~180×180px with a subtle `border-radius: 8px` in the hero section (tasteful, not a giant portrait-first hero). Good?

---

## Open Questions

> [!NOTE]
> **Domain name**: AGENTS.md mentions buying a domain. Do you have one already, or should the site just deploy to `*.vercel.app` for now?

> [!NOTE]
> **Hackathons/Extracurriculars**: The resume includes hackathon participation and club leadership. AGENTS.md Section 3 doesn't explicitly include these. Should I add a small "Hackathons & Leadership" subsection below Education, or keep them out?

> [!NOTE]
> **Certifications**: The resume lists NPTEL, Microsoft, Deloitte, Tata certifications. Include on the site or omit for conciseness?

---

## Proposed Changes

### Next.js Project Initialization

#### [NEW] Next.js App Router project at `dev_portfolio/`

Initialize with `npx -y create-next-app@latest ./` using these flags:
- `--app` (App Router)
- `--ts` (TypeScript)
- `--no-tailwind` (vanilla CSS per AGENTS.md)
- `--eslint`
- `--src-dir`
- `--import-alias "@/*"`
- `--no-turbopack`

Install Google Font `Newsreader` via `next/font/google`. Geist ships with `create-next-app`.

---

### Design System & Global Styles

#### [NEW] [`src/app/globals.css`](file:///c:/Users/garvd/dev_portfolio/src/app/globals.css)
Complete design system: CSS custom properties for all tokens (color, type scale, spacing scale), base typography rules, responsive breakpoints, utility classes, the metric-strip component styles, scroll-reveal animation keyframes, reduced-motion overrides.

#### [MODIFY] [`src/app/layout.tsx`](file:///c:/Users/garvd/dev_portfolio/src/app/layout.tsx)
Root layout with `<html>`, font loading (Geist Sans, Geist Mono, Newsreader), metadata (title, description, OG tags), and shared `<Nav>` / `<Footer>` components.

---

### Shared Components

#### [NEW] `src/components/Nav.tsx`
Minimal top nav: "Garv Danwani" name on left, "Work · About · Contact" links on right. Collapses to hamburger on mobile.

#### [NEW] `src/components/Footer.tsx`
Contact links (email, LinkedIn, GitHub), copyright line.

#### [NEW] `src/components/MetricStrip.tsx`
Reusable horizontal band of large stat callouts. Props: array of `{ value: string, label: string }`. Used on landing page and adaptable as sidebar metrics on case study pages.

#### [NEW] `src/components/CaseStudyCard.tsx`
Teaser card for the landing page: project name, one-line hook, primary metric, link to full case study. Hover lift animation.

#### [NEW] `src/components/ScrollReveal.tsx`
Client component wrapping children with IntersectionObserver-based fade-up on scroll enter. Respects `prefers-reduced-motion`.

#### [NEW] `src/components/MetricSidebar.tsx`
Sticky sidebar for case study pages with vertically stacked metric callouts (Geist Mono numbers, Geist Sans labels).

#### [NEW] `src/components/PullQuote.tsx`
Full-width pull quote in Newsreader italic for case study pages.

#### [NEW] `src/components/TechStackGrid.tsx`
Grouped tech stack display — categories as section headers with inline items. Not a flat tag cloud.

---

### Pages

#### [NEW] `src/app/page.tsx` — Landing Page (Minimal Mode)

Sections in order:
1. **Hero** — Name, title, positioning statement, photo (180×180, border-radius 8px)
2. **Focus Areas** — Horizontal tag row
3. **Metric Strip** — 4 key numbers: "40%+ pipeline latency cut", "1 of 5 founding engineers", "CDSCO regulatory pathway", "Sub-4s target voice AI"
4. **Featured Case Studies** — 2-column grid of `CaseStudyCard` components, ordered: BwellCheck, Voice AI Pipeline, OmniFlix, Learning System, Financial Platform
5. **Experience Snapshot** — Current role, company, dates, one-line framing
6. **Education & Recognition** — B.Tech, SGPA, Sarvam CODE beta selection
7. **Tech Stack** — Grouped by category using `TechStackGrid`
8. **Contact/Footer** — email, LinkedIn, GitHub

#### [NEW] `src/app/work/bwellcheck/page.tsx` — BwellCheck Case Study (Editorial Mode)

Full editorial treatment:
- Hero: Title + context paragraph
- Metric sidebar: ~25–30% signal stability, CDSCO regulatory progress
- Body: rPPG implementation (CHROM, POS, FFT, HRV), MediaPipe ROI tracking, Random Forest integration
- **Regulatory callout box** (visually prominent, not a throwaway bullet) — CDSCO pathway, HTA, QMS, test licences
- Pull quote about regulatory differentiator
- Stack section
- Back link to home

#### [NEW] `src/app/work/voice-ai/page.tsx` — Voice AI Pipeline Case Study (Editorial Mode)

Full editorial treatment:
- Hero: "Multi-Provider Real-Time Voice AI Pipeline"
- Metric sidebar: 40%+ latency cut, LLM ~4–8s → ~2.1–2.3s, pipeline ~10–15s → ~5–8s
- Body: ASR→NMT→LLM→TTS architecture, streaming (WebRTC/WebSockets), model benchmarking, multi-provider architecture, GPU infrastructure
- Before → After latency motif
- Stack section

#### [NEW] `src/app/work/omniflix/page.tsx` — OmniFlix Case Study (Shorter Editorial)

Shorter treatment but same visual template:
- Hybrid recommendation system
- Multi-dataset unification (IMDb, TMDB, MyAnimeList)
- Cold-start handling
- Stack: Pandas, NumPy, Scikit-learn, LightFM

#### [NEW] `src/app/work/learning-system/page.tsx` — Personalized Learning System (Shorter Editorial)

- Data-driven learning paths
- Predictive models (Decision Trees, Random Forest)
- Power BI dashboards

#### [NEW] `src/app/work/financial-platform/page.tsx` — Financial Automation Platform (Shorter Editorial)

- Frontend architecture
- Modular React.js/Next.js interfaces
- Performance optimization

---

### Static Assets

#### [NEW] `public/photo.png`
Copy and optimize `biodata/photo.png` for web serving. Use Next.js `<Image>` component with responsive sizing.

---

### SEO & Metadata

Each page gets:
- Descriptive `<title>` tag
- `<meta name="description">` with compelling summary
- Open Graph tags (title, description, type)
- Proper `<h1>` hierarchy
- Semantic HTML5 elements (`<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`)

---

## Verification Plan

### Automated Tests

```bash
npm run build          # Verify production build succeeds
npm run lint           # ESLint passes
```

### Manual Verification

1. `npm run dev` — visual inspection of all pages at desktop (1440px), tablet (768px), and mobile (375px)
2. Verify WCAG AA contrast on all text/background pairs using computed values
3. Verify all links work (case study cards → case study pages, back links, external links)
4. Verify photo loads and is sized correctly
5. Verify Geist + Newsreader fonts render correctly
6. Verify scroll-reveal animations play and respect reduced-motion
7. Run `design-auditor` skill against built pages
8. Run `web-design-guidelines` skill against built pages

### Post-Build Audits (per AGENTS.md Section 0, Steps 6–7)

- **Step 6**: `design-auditor` — full 19-category audit on all pages, fix everything flagged (especially Accessibility, Typography)
- **Step 7**: `web-design-guidelines` — Vercel Web Interface Guidelines compliance check, fix flagged issues
