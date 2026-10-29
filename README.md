# 👻 DeadNet Ectoplasm Browser
### *An Autonomous Digital Archaeology & Web Resurrection Engine Powered by Open-Weight AI, Headless Cloud Browsing, and Durable Workflows*

[![Next.js 16](https://img.shields.io/badge/Next.js-16.4.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.3-61dafb?style=for-the-badge&logo=react)](https://react.dev/)
[![Gemma 3 Open-Weight AI](https://img.shields.io/badge/Gemma_3-Open--Weight_AI-4285F4?style=for-the-badge&logo=google)](https://ai.google.dev/gemma)
[![Stagehand v4](https://img.shields.io/badge/Stagehand_v4-Browserbase-00E599?style=for-the-badge)](https://browserbase.com)
[![Temporal Workflows](https://img.shields.io/badge/Temporal-Durable_Workflows-000000?style=for-the-badge&logo=temporal)](https://temporal.io)
[![Sentry Agent Tracing](https://img.shields.io/badge/Sentry-Agent_Tracing-362D59?style=for-the-badge&logo=sentry)](https://sentry.io)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Finusha-thathsara%2Fdeadnet-ectoplasm-browser&project-name=deadnet-ectoplasm-browser&repo-name=deadnet-ectoplasm-browser&env=OPENROUTER_API_KEY,ELEVENLABS_API_KEY,BROWSERBASE_API_KEY,BROWSERBASE_PROJECT_ID)

---

## 🧭 Executive Summary & Digital Archaeology Mission

A vast majority of the early web (1995–2008)—including GeoCities fan shrines, pioneering open-source tutorials, indie game compendiums, and personal webmaster logs—has either vanished completely or decayed into digital skeletons. Even when snapshots survive inside the Internet Archive's Wayback Machine, they are frequently crippled by **secondary link rot**: missing external stylesheets, 0×0 broken image tags, broken frame sets, defunct server-side CGI scripts (`/cgi-bin/guestbook.pl`), and missing subpages that return HTTP 404 or 500 errors.

**DeadNet Ectoplasm Browser** is an autonomous digital archaeology engine and dual-engine web browser that exhumes decaying late-1990s and 2000s websites and resurrects them into living, interactive software in real time. Rather than presenting a static, broken archival screenshot, DeadNet:
1. Dispatches a live headless cloud browser (**Browserbase + Stagehand v4**) to examine the rotting DOM tree and extract broken element pathologies.
2. Uncovers surviving historical context across USENET records, Reddit, and web indices via **SerpApi**.
3. Channels an open-weight language model (**Gemma 3** via local Ollama or cloud fallback) through a 3-pass necromancy pipeline to heal missing assets, rebuild dead subpages with transparent provenance markers, and transpile dead CGI scripts into working client-side JavaScript shims.
4. Orchestrates the excavation with **Temporal durable workflows** to survive archive rate-limits (HTTP 429) with exponential retry policies.
5. Instruments the entire LLM and browser pipeline with **Sentry AI Agent Tracing** for latency and token observability.

### Cultural Preservation Philosophy

| Preservation Angle | Interpretation & Execution in DeadNet |
| :--- | :--- |
| **🔍 Forensic DOM Inspection** | The UI functions as a paranormal DOM inspector. As the headless browser crawls a dead URL, it isolates decayed elements (404 subpages, missing GIF assets, dead Perl scripts) and surrounds them with glowing spectral telemetry before reanimating them. |
| **🕯️ Digital Heritage & Living Ofrenda** | Early webmasters poured countless hours into passion sites, tutorials, and early open-source libraries before centralized social platforms wiped them out. DeadNet preserves each creator's authentic voice, layout philosophy, and community artifacts with full ethical attribution. |

---

## 🎚️ The Signature UX: The "Ectoplasm Slider"

At the top of the DeadNet viewport sits an interactive morphing control that scrubs seamlessly across time:

```
[ 0% — 1998 CRT MODE ] <========> [ 50% — HAUNTED X-RAY MODE ] <========> [ 100% — 2026 REINCARNATED ]
```

- **0% (1998 CRT Mode):** Renders the healed original website in authentic HTML 3.2 inside an isolated iframe, complete with retro CRT scanlines (`crt-overlay`), working webring hops, and client-side JavaScript shims for dead CGI guestbooks and hit counters. Accompanied by Web Audio retro square-wave sound effects.
- **50% (Haunted X-Ray Mode):** Illuminates the DOM in glowing emerald ectoplasm (`#39ff14`). Every AI-reconstructed node is tagged with `data-ectoplasm="reconstructed"` and exposes hoverable tooltips citing the exact SerpApi/USENET evidence used to reconstruct it.
- **100% (2026 Reincarnated Mode):** Dynamically morphs the extracted semantic entities (articles, specs, guestbooks, downloads) into a clean, modern, accessible Next.js 16 application with dark mode styling and zero loss of historical content.
- **🔊 Eerie Voice Whispers (ElevenLabs):** Clicking the audio button plays deep, atmospheric narrations synthesized via ElevenLabs Turbo v2.5 reciting the reconstructed webmaster's lost comments and warnings.

---

## ⚖️ Why Open-Source AI is Non-Negotiable

DeadNet is founded on three core architectural principles that make open-weight AI foundational to digital web archaeology:

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│                   WHY CLOSED LLMs FAIL VS. WHY OPEN GEMMA WINS                  │
├──────────────────────────────────────┬───────────────────────────────────────────┤
│ Closed Cloud APIs (OpenAI / Anthropic)│ Open-Weight Gemma 3 (Ollama / Local / vLLM)│
├──────────────────────────────────────┼───────────────────────────────────────────┤
│ 1. API Link Rot Repeated:            │ 1. Permanent Archival Independence:       │
│ Closed APIs deprecate model weights  │ Open-weight Gemma runs fully offline on   │
│ every 12-18 months. Building digital │ local hardware or self-hosted GPU nodes.  │
│ preservation on a closed API repeats │ In 2046, researchers can run this exact   │
│ the exact mistake that killed Web 1.0│ model without vendor keys or licenses.    │
├──────────────────────────────────────┼───────────────────────────────────────────┤
│ 2. Sterile RLHF "Corporate Voice":   │ 2. Period-Accurate 1998 Vernacular:       │
│ Commercial models aggressively scrub │ Gemma 3 embraces authentic chaotic HTML   │
│ out nested tables, inline font tags, │ 3.2 (<marquee>, nested <table border=3>)  │
│ and authentic 1990s webmaster voice  │ and dialect without sterilizing the       │
│ to force clean Tailwind/React code.  │ author's historical personality.          │
├──────────────────────────────────────┼───────────────────────────────────────────┤
│ 3. Extreme Token Anxiety:            │ 3. Zero Marginal Token Cost:              │
│ Verbose 1990s legacy DOMs with spacer│ Local or flat-rate GPU inference allows   │
│ GIFs consume 30,000+ tokens per crawl│ crawling entire deep webrings without     │
│ ($$$ on proprietary metered models). │ incurring hundreds of dollars in API fees.│
└──────────────────────────────────────┴───────────────────────────────────────────┘
```

---

## 🏛️ System Architecture & Engineering Pipeline

```text
┌─────────────────────────────────────────────────────────────────────────────────────────────────┐
│                           NEXT.JS 16 FRONTEND (React 19 + Tailwind CSS 4)                       │
│  ┌─────────────────────────┐   ┌──────────────────────────┐   ┌──────────────────────────────┐  │
│  │   0% — 1998 CRT Mode    │   │  50% — Haunted X-Ray     │   │     100% — 2026 Reincarnated │  │
│  │ (Healed HTML 3.2 + CRT) │◀─▶│ (Emerald Ectoplasm Glow) │◀─▶│   (Modern Semantic React UI) │  │
│  └───────────▲─────────────┘   └────────────▲─────────────┘   └──────────────▲───────────────┘  │
└──────────────┼──────────────────────────────┼────────────────────────────────┼──────────────────┘
               │                              │                                │
               └──────────────────────────────┼────────────────────────────────┘
                                              │ Streams SSE Events & Telemetry
                                              ▼
┌─────────────────────────────────────────────────────────────────────────────────────────────────┐
│                    TEMPORAL DURABLE WORKFLOW ENGINE (ResurrectionPipeline)                      │
│     Guarantees state persistence, exponential backoff on 429s, and resilient activity retries   │
├─────────────────────────┬──────────────────────────────┬────────────────────────────────────────┤
│  Activity 1: Discovery  │   Activity 2: Exhumation     │    Activity 3: Necromancy Engine       │
│  • Wayback CDX API      │   • Browserbase Cloud Grid   │    • Gemma 3 (Open-Weight LLM)         │
│  • id_ Modifier Strip   │   • Stagehand v4 SDK         │    • 3-Pass DOM Healer & Transpiler    │
│  • SerpApi Forum Lore   │   • DeadDomManifest Zod      │    • CGI-to-JS Reanimation Shims       │
└──────────────┬──────────┴──────────────┬───────────────┴────────────────────┬───────────────────┘
               │                         │                                    │
               └─────────────────────────┼────────────────────────────────────┘
                                         ▼
┌─────────────────────────────────────────────────────────────────────────────────────────────────┐
│                         OBSERVABILITY, TELEMETRY & AUDIO LAYER                                  │
│  • Sentry AI Agent Tracing (Token throughput, latency spans, and workflow error boundaries)     │
│  • ElevenLabs Turbo v2.5 (Synthesizes eerie webmaster voice whispers on demand)                 │
└─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### The 5 Architectural Layers

1. **Discovery & Grounding Layer (`src/lib/waybackClient.ts`, `src/lib/serpApiClient.ts`):**
   - Queries `web.archive.org/cdx/search/cdx` with the `id_` modifier to strip injected archive toolbars.
   - Searches historical forums, USENET archives, and Reddit via SerpApi to discover what originally existed at 404 subpages.
2. **Headless DOM Exhumation Layer (`src/lib/stagehandExtractor.ts`):**
   - Dispatches Browserbase cloud browser sessions via the Stagehand v4 SDK.
   - Parses the dead DOM tree against the strict Zod `DeadDomManifestSchema` to categorize missing images, dead anchors, and defunct form actions.
3. **Open-Weight Necromancy Engine (`src/lib/ollamaClient.ts`, `src/lib/gemmaPrompts.ts`):**
   - **Pass 1 (HTML 3.2 Context Healer):** Restores missing text and table cells in the original webmaster's voice.
   - **Pass 2 (CGI-to-JS Reanimator):** Intercepts dead `/cgi-bin/*.pl` forms and injects working client-side localStorage shims.
   - **Pass 3 (Semantic 2026 Transpiler):** Extracts clean entities into `Reincarnated2026View` for the modern view.
4. **Durable Orchestration Layer (`src/temporal/workflows.ts`):**
   - Implements Temporal retry policies to seamlessly survive Internet Archive rate-limiting (HTTP 429) and network partitions.
5. **Observability & Audio Layer (`src/app/api/whisper/route.ts`, Sentry):**
   - Tracks LLM token usage and Stagehand latency with Sentry trace spans.
   - Synthesizes period-accurate voice whispers via ElevenLabs TTS.

---

## ⚰️ Built-in Graveyard Presets

Explore 3 instant golden presets or paste any arbitrary live Wayback URL:

1. **The Spiral: Sega Dreamcast 9.9.99 Fanatics (1999)**
   - *Original URL:* `http://www.geocities.com/Tokyo/Flats/9999/dreamcast_underground.html`
   - *Pathology:* Broken VMU hex editor download links, missing animated swirl GIFs, defunct Perl guestbook.
   - *Resurrection:* Reanimated guestbook saving to client state; SerpApi-grounded VMU save offsets.
2. **Aura3D Sound Engine Open-Source Project (2002)**
   - *Original URL:* `http://www.aura3d-audio.org/cvs_snapshot_2002/index.html`
   - *Pathology:* Dead SourceForge CVS mirrors, broken Aureal A3D API specs, missing WAV download samples.
   - *Resurrection:* Reconstructed C++ header declarations and API architecture diagrams.
3. **SpecterNet: Paranormal & UFO Investigation Network (1998)**
   - *Original URL:* `http://www.specternet.org/investigations/salem_field_1998.html`
   - *Pathology:* 0×0 broken Polaroid images, defunct visitor hit counter, broken webring hops.
   - *Resurrection:* Functional odometer hit counter, reconstructed EVP audio observation transcripts.

---

## 🚀 Getting Started & Local Installation

### Prerequisites
- **Node.js**: v20.0.0 or higher
- **npm** or **pnpm**
- **Ollama** (optional, for local Gemma 3 inference): `ollama run gemma2:9b`

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/your-username/deadnet-ectoplasm-browser.git
cd deadnet-ectoplasm-browser
npm install
```

### 2. Configure Environment Variables
Copy the template configuration file:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your API keys:
```env
# 1. Historical Search & Grounding (SerpApi)
SERPAPI_API_KEY=your_serpapi_key

# 2. Headless Cloud Browser (Browserbase + Stagehand v4)
BROWSERBASE_API_KEY=your_browserbase_key
BROWSERBASE_PROJECT_ID=your_project_id

# 3. Open-Weight AI (Gemma 3 via Local Ollama or OpenRouter Fallback)
OLLAMA_BASE_URL=http://localhost:11434
OLLAMA_MODEL=gemma2:9b
OPENROUTER_API_KEY=your_openrouter_key

# 4. Observability (Sentry Agent Tracing)
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
SENTRY_AUTH_TOKEN=your_sentry_auth_token

# 5. Durable Orchestration (Temporal)
TEMPORAL_ADDRESS=localhost:7233
TEMPORAL_NAMESPACE=default

# 6. Optional Eerie Synthesized Voice (ElevenLabs)
ELEVENLABS_API_KEY=your_elevenlabs_key
```

> **Note:** DeadNet is architected with resilient offline fallbacks. Even with missing or empty keys, the browser uses cached historical lore and heuristic restoration to guarantee zero runtime crashes!

### 3. Verify System Health & Run Automated Tests
Run the built-in test suite and cloud audit scripts:
```bash
# Run automated regression test suite (10 unit & integration tests)
npm test

# Verify API keys, ElevenLabs TTS, and Sentry configuration
node scripts/verify-env.mjs

# Verify Browserbase cloud headless browser connection
node scripts/verify-session.mjs
```

### 4. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Cloud & Production Deployment

#### Option A: 1-Click Vercel Deployment (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Finusha-thathsara%2Fdeadnet-ectoplasm-browser&project-name=deadnet-ectoplasm-browser&repo-name=deadnet-ectoplasm-browser&env=OPENROUTER_API_KEY,ELEVENLABS_API_KEY,BROWSERBASE_API_KEY,BROWSERBASE_PROJECT_ID)

Or deploy via the Vercel CLI:
```bash
# 1. Login to Vercel
npx vercel login

# 2. Deploy to production
npx vercel --prod
```

#### Option B: Production Docker Deployment
DeadNet can be spun up in an isolated multi-stage container alongside a local Ollama instance:
```bash
# Build and run the production container stack
docker-compose up -d --build

# Inspect production healthcheck diagnostics
curl http://localhost:3000/api/health
```

---

## 📂 Project Structure

```
deadnet-ectoplasm-browser/
├── .do/app.yaml                  # DigitalOcean App Platform production spec
├── .github/workflows/ci.yml      # Automated GitHub Actions CI workflow
├── Dockerfile                    # Production multi-stage Alpine container
├── docker-compose.yml            # Full-stack DeadNet + Ollama composition
├── render.yaml                   # 1-Click Render cloud deploy blueprint
├── public/                       # Static brand assets & icons
├── scripts/
│   ├── verify-env.mjs            # Environment audit & live API verification
│   └── verify-session.mjs        # Stagehand + Browserbase cloud browser verification
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── exhume/route.ts   # SSE streaming endpoint with SSRF protection
│   │   │   ├── health/route.ts   # Real-time healthcheck & diagnostics endpoint
│   │   │   └── whisper/route.ts  # ElevenLabs eerie voice synthesis route
│   │   ├── error.tsx             # Production error boundary with retry mechanism
│   │   ├── globals.css           # Tailwind 4, CRT scanlines & ectoplasm glow shaders
│   │   ├── layout.tsx            # Root layout with OpenGraph & Twitter metadata
│   │   ├── loading.tsx           # Production streaming skeleton UI
│   │   ├── not-found.tsx         # 404 digital tombstone void page
│   │   ├── page.tsx              # Main browser interface with slider & audio controls
│   │   ├── robots.ts             # Search engine crawl directives
│   │   └── sitemap.ts            # Dynamic XML sitemap generator
│   ├── components/
│   │   ├── ArchaeologyTerminal.tsx # Live telemetry terminal with sonar radar
│   │   ├── Card3D.tsx              # Interactive 3D mouse parallax tilt cards
│   │   ├── DualDomViewport.tsx     # 0% CRT Iframe / 50% X-Ray / 100% Modern React view
│   │   ├── EctoplasmSlider.tsx     # 0%–50%–100% time scrubber control
│   │   ├── Header.tsx              # Navigation bar, URL input & preset selector
│   │   └── Spectral3DCanvas.tsx    # Interactive 360° 3D DOM topology holocron
│   ├── lib/
│   │   ├── gemmaPrompts.ts       # 3-Pass Gemma 3 system prompts & restoration rules
│   │   ├── ollamaClient.ts       # Local Ollama & OpenRouter Gemma inference client
│   │   ├── security.ts           # SSRF protection, URL sanitizer & input validator
│   │   ├── serpApiClient.ts      # Historical forum & USENET grounding client
│   │   ├── stagehandExtractor.ts # Stagehand v4 + Browserbase DOM pathology extractor
│   │   └── waybackClient.ts      # Wayback CDX client with 'id_' modifier
│   ├── presets/
│   │   └── index.ts              # 3 Golden Presets with full archival telemetry & DOMs
│   ├── temporal/
│   │   └── workflows.ts          # Resilient multi-step excavation workflow definition
│   └── types/
│       └── index.ts              # Zod schemas (DeadDomManifest) & TypeScript contracts
├── tests/
│   └── pipeline.test.mjs         # Production automated test suite (node:test)
├── .env.example                  # Environment variable reference
├── AGENTS.md                     # Next.js 16 agent rules
├── package.json                  # Dependencies, build & test scripts
└── tsconfig.json                 # TypeScript strict configuration
```

---

## 📜 Ethical AI Provenance & Digital Archaeology Principles

1. **Never Confuse AI Hallucination with Historical Truth:** Every reconstructed node is explicitly marked with `data-ectoplasm="reconstructed"` and visually highlighted in 50% X-Ray Mode.
2. **Preserve Authentic Voice:** System prompts instruct Gemma 3 never to sanitize the author's idiosyncratic style into sterile modern corporate prose.
3. **No External CGI Vulnerabilities:** Server-side scripts (`/cgi-bin/`) are transpiled into client-side sandboxed JavaScript shims running entirely within the user's browser, preventing remote code execution.

---

## 📄 License & Community Acknowledgments

This project is open-source software licensed under the **MIT License**.

Built with respect and reverence for the pioneer webmasters of 1995–2008 who hand-crafted the foundations of the open web.

*Dedicated to the preservation of early open web culture, indie webmasters, and digital history.*
