# Portfolio Website — AGENTS.md

## 0. Skills to use, and in what order

You have these skills installed: `frontend-design`, `superdesign`, `design-auditor`, `web-design-guidelines` (and any other Vercel skills you added), `canvas-design`, and selected skills from `wondelai/skills` (e.g. `web-typography`, `refactoring-ui`).

Use them in this sequence:

1. **`frontend-design`** — establish the design direction first (typography, palette, spacing, motion rules) before writing implementation code. Produce two distinct visual modes from one coherent system: a **minimal mode** for the landing page and an **editorial mode** for case-study pages (see Section 3).
2. **`superdesign`** (optional but recommended) — generate 2–3 landing-page draft directions on the canvas from the direction in step 1, so I can pick one before you build it for real. If I don't respond to a draft choice, proceed with your strongest option and tell me which one you picked and why.
3. **`web-typography` / `refactoring-ui`** (wondelai) — apply as refinement principles while implementing: type scale, spacing rhythm, visual hierarchy, alignment.
4. **`canvas-design`** — use for the landing page's compositional/layout thinking (grid precision, negative space) given the minimal direction I've chosen.
5. Build the site.
6. **`design-auditor`** — run a full audit against the built pages once implemented. Fix everything flagged, especially anything under Accessibility or Typography.
7. **`web-design-guidelines`** — run a second audit against Vercel's live Web Interface Guidelines for accessibility, forms, and UX-pattern compliance. Fix what's flagged.
8. Only then present the result as done.

---

## 1. Who this is for and what it needs to do

Site owner: **Garv Danwani**, AI Systems Engineer.

**Primary audience: recruiters and hiring managers at AI and health-tech companies.** Assume they are technically literate, are skimming fast, and are looking for evidence of *production* impact, not proof-of-concept work. Every case study should make the technical depth and the measurable outcome legible within a few seconds of scrolling — don't bury the numbers in prose.

**This is not a creative-industry portfolio.** No gimmicks, no need to impress with visual spectacle. The visual system should communicate precision and competence the same way his engineering does.

---

## 2. Visual direction

- **Landing page: minimalist, generous whitespace, self-introduction + contact.** Grid-based, functional typography, restrained color, nothing competing with the content. This is the "clinical minimalism" end of your design spectrum — not empty or cold, but unhurried and confident.
- **Case study pages: editorial / magazine style.** Full-bleed or large section breaks, pull quotes, large stat callouts, sidebar metrics, generous column widths for reading, more typographic personality in headlines than the landing page has. Think technical-journal feature article, not a blog post template.
- **Color mode: light mode primary.** Don't design a token-for-token dark clone as an afterthought — if you add a dark toggle later it can come as a follow-up, but ship light mode as the real, fully considered system.
- **Typography:** per `frontend-design` rules, do NOT default to Inter/Roboto/Arial or an obviously overused AI-generation font (e.g. Space Grotesk). Direction to work from: pair a display/headline face with genuine editorial character (something with the gravitas of a technical-journal or scientific-publication serif or refined display sans) for case-study headlines, with a precise, quiet grotesk for UI chrome and body copy, and consider a monospace accent specifically for data points and metric callouts (RTT numbers, latency figures, percentages) — it nods to his engineering domain without being a gimmick. Make the final specific font choices yourself per the skill's design-intelligence process; this is a brief, not a mandate.
- **Data-forward layout devices:** since almost every project has a hard number attached (40%+ latency cut, ~25–30% signal stability improvement, sub-4s target latency, SGPA 8.25, 1-of-5 founding engineers), give the design a repeatable way to make numbers visually prominent — large stat typography, an annotated metric sidebar, or a simple inline "before → after" motif — rather than leaving them embedded in paragraph text.
- **Motion:** restrained. Scroll-reveal and hover micro-interactions only. This audience is skimming for signal, not exploring a creative experience — don't slow them down.
- **Accessibility:** WCAG AA minimum on all text/background pairs, verified by the audits in Section 0.

---

## 3. Site architecture

**Home (single scroll, minimal mode):**
1. Hero — name, title, one-line positioning statement (see Section 4), and a quiet visual anchor (photo `[PHOTO]`, used tastefully, not as a giant portrait-first hero).
2. Focus areas (short tag list, from Section 4).
3. A highlight metrics strip — 3–4 of the strongest numbers, e.g. "40%+ pipeline latency cut," "1 of 5 founding engineers," "CDSCO regulatory pathway," "Sub-4s target for real-time multilingual voice AI."
4. Featured case studies — teaser cards (project name, one-line hook, primary metric) linking to full editorial pages. Order by weight: BwellCheck/rPPG first, Voice AI pipeline second, then the independent projects.
5. Brief experience snapshot — current role, company, dates, one-line framing (not a full duplicate of the case study).
6. Education + recognition snapshot (degree, SGPA, Sarvam CODE beta selection).
7. Tech stack, grouped by category (not a flat tag cloud — group the way his resume already does: Voice AI & NLP, Computer Vision & Signal Processing, ML, Backend, Frontend, Cloud, Data).
8. Contact/footer — email, LinkedIn, GitHub. **Phone number intentionally omitted** — see note above; add it back in if you want it public.

**Case study pages (editorial mode), one per major project — content in Section 5.**

---

## 4. Core content to use verbatim or near-verbatim

**Name / Title:** Garv Danwani — AI Systems Engineer | Computer Vision & Voice AI | Real-Time Systems

**Contact:** garvd2005@gmail.com · linkedin.com/in/garvdanwaniofficial · github.com/GarvD1101

**Positioning statement (for the hero — condense/rewrite for web tone, don't just paste the resume paragraph):**
Builds production AI, not proof-of-concepts. One of five founding engineers at BWell HealthTech, a government-incubated health-tech startup, owning systems end-to-end — model selection, latency optimization, infrastructure, and regulatory readiness.

**Focus areas:** Applied AI Systems · Real-Time System Design · Computer Vision · Voice AI Pipelines · AI Infrastructure · Regulatory & Compliance for Health AI

**Current role:** AI & ML Engineer, BWell HealthTech — Full-Time, New Delhi, India — Jan 2026–Present — Founding team (1 of 5) — Computer Vision, Healthcare AI, Voice AI, Real-Time Systems.

**Tech stack (group headers to reuse as-is):** Programming · Voice AI & NLP · Computer Vision & Signal Processing · Machine Learning · Backend & APIs · Frontend Development · Cloud & Infrastructure · Data & Analytics. (Full item lists are in the attached resume — pull them in directly rather than re-deriving.)

**Education:** B.Tech, Computer Science & Engineering (Data Science), Greater Noida Institute of Technology (GNIOT), AKTU — Oct 2022–Jun 2026. First Division overall, Final Semester SGPA 8.25.

**Recognition:** Selected as a Beta Tester for Sarvam CODE under Sarvam AI's EPOCH program (2026) — ran structured multi-session testing of the agentic coding CLI, found four reproducible bug classes including two critical trust-affecting failures, isolated a model-dependent failure via A/B testing, and documented root-cause hypotheses for the product team.

---

## 5. Case study briefs (build one editorial page per project)

### 1. BwellCheck — Contactless Physiological Monitoring (flagship)
- **Context:** AI-driven contactless physiological monitoring platform using rPPG (remote photoplethysmography) to estimate cardiovascular indicators from a standard RGB camera — moving through CDSCO regulatory clearance.
- **What he built:** Implemented CHROM and POS algorithms for contactless heart rate and respiratory signal extraction from facial video. Built a signal processing pipeline using FFT, respiratory filtering, and HRV metrics (RMSSD, LF/HF). Used MediaPipe FaceMesh-based ROI tracking to improve signal stability by ~25–30%. Integrated Random Forest models for physiological proxy estimation (blood pressure, glucose trends) from extracted signal features, and designed structured data collection for future proprietary model training.
- **Regulatory dimension (worth its own callout box):** Navigated the CDSCO regulatory pathway — HTA, QMS, software and clinical evaluation test licences; attended a government regulatory session and converted the notes into an internal compliance brief for the team. This is a differentiator most AI engineers can't claim — give it real visual weight, not a throwaway bullet.
- **Metrics to foreground:** ~25–30% signal stability improvement; regulatory pathway progress.
- **Stack:** Python, rPPG, MediaPipe, FFT, Random Forest, FastAPI, React.js/Next.js dashboards.

### 2. Multi-Provider Real-Time Voice AI Pipeline
- **Context:** Real-time voice AI pipeline (ASR → NMT → LLM → TTS) for low-latency, multilingual (Hindi, English, Bhojpuri) conversational systems, targeting sub-4-second end-to-end latency.
- **What he built:** Streaming layer using WebRTC and WebSockets. Reduced LLM latency from ~4–8s to ~2.1–2.3s through model selection and optimization. Cut end-to-end pipeline latency from ~10–15s to ~5–8s by resolving inference and streaming bottlenecks. Benchmarked faster-whisper, Kokoro TTS, and Qwen3-8B (vLLM) against Bhashini, Sarvam AI APIs, and NVIDIA Riva/NIM SDKs. Built a multi-provider architecture to remove single-provider dependency, optimizing Time-to-First-Token and streaming performance. Provisioned and managed GPU infrastructure across RunPod and AWS EC2, including custom AMI builds.
- **Metrics to foreground:** 40%+ end-to-end latency cut; LLM latency ~4–8s → ~2.1–2.3s; pipeline ~10–15s → ~5–8s.
- **Stack:** faster-whisper, Qwen3-8B/vLLM, Kokoro TTS, Silero VAD, Bhashini, Sarvam AI, NVIDIA Riva/NIM, WebRTC, WebSockets, RunPod, AWS EC2.

### 3. OmniFlix — Unified Movie, TV & Anime Recommendation System
- Hybrid recommendation system (content-based + collaborative filtering) unifying IMDb, TMDB, and MyAnimeList data into one multi-domain recommendation dataset. Built preprocessing/feature pipelines in Pandas/NumPy; implemented with Scikit-learn and LightFM, addressing cold-start scenarios, validated through similarity scoring and ranking analysis.

### 4. AI-Powered Personalized Learning System
- Data-driven learning recommendation platform personalizing learning paths from student performance and engagement analytics. Predictive models (Decision Trees, Random Forest) to identify knowledge gaps and recommend study modules. Power BI dashboards visualizing student progress and outcomes.

### 5. Financial Automation Platform Interface
- Frontend architecture for an enterprise financial automation platform — structured document workflows, modular React.js/Next.js interfaces integrated with backend APIs, responsive dashboards, clean API communication layers, performance optimization through component-level rendering and state management.

*(For projects 3–5, a shorter editorial treatment is fine — they don't need the same depth as 1–2, but should keep the same visual template for consistency.)*

---

## 6. Deliverable, stack & hosting

- **Framework: Next.js (App Router).** Build the whole site as a Next.js project at the `dev_portfolio/` root.
- **Deployment: GitHub + Vercel.** Push the project to a GitHub repo and connect it to Vercel — Vercel is built by the Next.js team, deploys on every push with zero config, and its free Hobby tier covers a personal portfolio at no cost, including a custom domain. (Note: this is *managed* hosting, not literally self-hosting your own server — Vercel's infrastructure runs it. That's the standard, zero-maintenance setup for a Next.js site and matches what you described, so the earlier Docker/Nginx self-host plan isn't needed unless you want that as a personal exercise later.)
- Fully responsive, mobile-first.
- Read the photo from `biodata/photo.png` (or `.jpg`) and optimize it for web (Next.js `<Image>`, correctly sized, served responsively) — don't ask me to attach it separately.
- Cross-reference `biodata/resume.pdf` if you need any detail not already covered in Section 4–5 below, but the phone number has already been removed from that copy — don't re-add it anywhere on the site.
- No tracking/analytics by default — ask me first if you think I need it.

---

## 7. Resolved decisions (for reference)

- **Phone number:** excluded from the site and from the resume copy in `biodata/`.
- **Hosting:** GitHub → Vercel (free Hobby tier, custom domain supported).
- **Stack:** Next.js, App Router.
- **Domain:** buy on any registrar (Namecheap, Porkbun, or Vercel's own domain purchase flow) and point it at the Vercel project — see the domain shortlist in the chat reply this file came with.
- **Photo/resume source:** `biodata/photo.png` and `biodata/resume.pdf`, both inside this project root — no separate attachment needed.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
