# Garv Danwani — Portfolio

This is my personal portfolio, built to showcase the work I actually ship, not a resume restated as a webpage. It's a one-page site (with five deeper case-study pages) covering my background as an AI Systems Engineer working across computer vision, real-time voice AI, and full-stack production systems.

## What's here

I'm one of five founding engineers at a government-incubated health-tech startup — referred to here as **Project No. 21** — where I own systems end-to-end — model selection, latency optimization, infrastructure, and regulatory readiness. The projects featured on this site reflect that range:

- **rPPG Health** — contactless physiological monitoring using rPPG (remote photoplethysmography) to estimate cardiovascular indicators from a standard RGB camera, currently moving through CDSCO regulatory clearance.
- **Multi-Provider Real-Time Voice AI Pipeline** — a low-latency, multilingual (Hindi/English/Bhojpuri) conversational pipeline (ASR → NMT → LLM → TTS), streamed over WebRTC.
- **OmniFlix** — a hybrid recommendation system unifying IMDb, TMDB, and MyAnimeList into one multi-domain dataset.
- **AI-Powered Personalized Learning System** — predictive modeling for student performance and learning-path recommendations.
- **Financial Automation Platform Interface** — frontend architecture for an enterprise document-automation platform.

The Tech Stack section on the site itself is deliberately honest about proficiency level, not just a flat list of buzzwords — it flags what's a primary tool versus what I'm still comfortable with or actively learning.

## How this was built

This site was built through an iterative, agent-assisted process rather than hand-coded line by line — but every real decision in it is mine: the color system, the content, the pivot away from an earlier design direction after getting feedback from a senior engineer, the animation choices, all of it. The agents (running on Google Antigravity, using both Claude and Gemini models depending on the task) did the implementation; I did the direction.

A meaningful part of the process was pulling in curated, open-source references rather than building blind:
- [Anthropic's `frontend-design` skill](https://github.com/anthropics/skills) for avoiding generic AI-generated design defaults
- [Superdesign](https://github.com/superdesigndev/superdesign-skill) for early visual drafting
- A [design-auditor skill](https://github.com/Ashutos1997/claude-design-auditor-skill) and [Vercel's web design guidelines](https://github.com/vercel-labs/agent-skills) for accessibility and UX compliance passes
- [wondelai/skills](https://github.com/wondelai/skills) for typography and UX craft references
- [motion.dev](https://motion.dev), [Kokonut UI](https://kokonutui.com), and [Bklit UI](https://github.com/bklit/bklit-ui) as named, cited references for the animation and chart work in the final visual pass

## Tech stack

- **Framework:** Next.js (App Router), TypeScript
- **Styling:** Vanilla CSS with custom properties — no Tailwind, no CSS framework
- **Animation:** [Motion](https://motion.dev) (the successor to Framer Motion)
- **Typography:** Newsreader (display), IBM Plex Sans (body), IBM Plex Mono (data/metrics)
- **Deployment:** [Vercel](https://vercel.com)

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
