# SnoozeWar — Chronotype-Aware Behavior Enforcement App

## Brand Name: SnoozeWar
- **Domain:** snoozewar.com, snoozewar.app
- **Social handles:** @snoozewar (YouTube, TikTok, Instagram)
- **Tagline:** "69% of people wake up in the wrong timezone. It's called social jet lag. We fix it."

## Project Structure
All project files are in the `snoozewar/` subdirectory.

## Auto-Resume Instructions

**IMPORTANT:** Every time a new conversation starts in this directory, Claude MUST automatically:
1. Read `snoozewar/PROJECT_STATE.md` silently — has current phase, all decisions, session log
2. Read `snoozewar/MASTER-REFERENCE.md` silently — has index of ALL 45+ research documents, organized by feature
3. Skim recent files in `snoozewar/concepts/` and `snoozewar/validation/` silently
4. Give the user a 2-3 line status update: current phase, last session summary, and what's next
5. Do NOT wait for the user to ask — just do it on first message

**IMPORTANT:** At the END of every conversation (when the user says bye, done, exit, or stops responding), Claude MUST automatically:
1. Update `snoozewar/PROJECT_STATE.md` with what was done, decisions made, and next steps
2. Add a session log entry with today's date
3. Update any TODO items that were completed or added
4. Update `snoozewar/MASTER-REFERENCE.md` if new research files were created

**IMPORTANT:** When working on ANY specific feature or topic:
1. Check `snoozewar/MASTER-REFERENCE.md` FIRST to find all relevant research files
2. Read those files before making suggestions or writing anything
3. Never contradict the science — all features are backed by peer-reviewed research
4. Never suggest features that violate the decisions already made (listed below)

## The App — What It Is

A **chronotype-aware behavior enforcement app** that helps people wake up at THEIR intended time and own the first 30 minutes after waking. Built on neuroscience, not motivation.

**Core positioning:** "69% of people wake up in the wrong timezone. It's called social jet lag. We fix it."

**What we are NOT:**
- NOT a "5 AM Club" app — we don't care what time you wake up
- NOT a meditation or wellness app
- NOT a generic habit tracker
- NOT an AI chatbot (AI is a feature, not the product)
- NOT a sleep tracker (we enforce, not track)

## Science Foundation (Non-Negotiable)

Every feature is grounded in peer-reviewed research. DO NOT suggest features that contradict these:

- **Chronotype is ~50% genetic** (351 variants, GWAS n=697,828) — app adapts to biology, doesn't fight it
- **Social jet lag affects 69-70%** of population (Roenneberg) — our core problem
- **Sleep inertia lasts 15-70 min** — validates the "decision void" after waking
- **Habit formation takes 66 days avg** (Lally, UCL) — NOT 21 days (myth)
- **Ego depletion/willpower is DEBUNKED** (36 labs, 3,531 participants) — don't use willpower framing
- **Snoozing isn't as harmful as claimed** (Sundelin 2024) — allow one snooze, penalize excessive
- **Chronotype shifts relapse in 1-2 weeks without maintenance** — subscription justification
- **Variable rewards beat fixed** (Schultz 1997) — Dare Engine responses should vary
- **Loss aversion: 2-2.5x** (Kahneman) — score drops hit harder than gains
- **Telling goals reduces follow-through** (Gollwitzer 2009) — social sharing = results, not intentions
- **Phone within 5 min of waking = 31% higher cortisol** at 90 min
- **Consistent wake time > sleep duration** for health outcomes
- **Max chronotype shift: 1.8-2.4 hours** — never promise more
- **Phone screen ≠ light therapy** (~110 lux vs 2,500+ needed) — never claim it does

## Key Decisions Made (Do NOT re-open these)

### Product
- **NOT a 5 AM app** — helps users wake at THEIR intended time, respecting chronotype biology
- **Chronotype = intelligence LAYER, not Day 0 hero** (updated 2026-04-16) — core product is enforcement of required sleep-wake schedule. Chronotype activates passively/opt-in post-Day 0. See `snoozewar/strategy/revenue-model-v2.md` and `snoozewar/prd/onboarding-prd.md` V3.0.
- **Freemium with 7-usage consumption trial** (2026-04-16 pivot) — NOT hard paywall + calendar trial. Users get 7 full-experience mornings + 500 welcome credits. After usage #7: drops to free tier OR upgrades at 50% off (48h grace).
- **No ads, ever** — premium positioning choice
- **Credit wallet + referral program in V1.0** — users earn credits via referrals (200 each), install (50), streak milestones
- **Dare Engine personality** — cocky, challenging, never preachy. IS the product differentiator.
- **Life Score (0-100)** — weighted: 30% wake consistency, 25% routine, 20% streak, 15% chronotype alignment, 10% protocol compliance
- **"Shift Your Clock" 14-day program** — gradual chronotype shifting (15 min/2 days, 5 zeitgebers) — V1.1 feature (post-launch)
- **3-era retention strategy** — Enforcement (M1-2) → Insight (M3-6) → Identity (M6+)

### Technical
- **Tech stack:** Expo (dev client) + React Native + Node.js + MongoDB
- **Cross-platform from day 1** — no iOS-first
- **AlarmKit (iOS 26)** — system-level alarm capabilities for third-party apps
- **iOS passive screen detection is IMPOSSIBLE** — use quiz + HealthKit + alarm timestamps instead
- **On-device processing** for sleep/chronotype data — privacy first

### Business
- **B2C, freemium + subscription + IAP, global from day 1**
- **Budget:** ₹10K/month initially, scaling with revenue
- **Retail subscription pricing:** $39.99/yr annual, $5.99/mo monthly, $89 lifetime (US). ₹999/yr annual (India).
- **Trial discount:** 50% off annual during 7-usage trial + 48h grace = $19.99 / ₹499
- **Streak freeze:** credit-based (99 credits per save) OR $0.99 cash IAP fallback
- **Feature IAPs:** Photo mission ($4.99), Barcode ($2.99), Math ($2.99), Night Mode ($4.99), Full Dare Engine library ($4.99), sound packs ($1.99)
- **Credit value anchor:** 1 credit = $0.01. Welcome gift: 500 credits. Referral reward: 200 credits (completes when friend finishes 7 mornings)
- **Top-up packs (post-trial):** single $1.99, 5-pack $7.99, 10-pack $12.99, 20-pack $19.99 — deliberately 9-18x more expensive per usage than subscription

### Regulatory
- **Melatonin must be geo-fenced** — prescription in India, UK, Denmark, Czech Republic, Norway
- **GDPR:** sleep/chronotype = Article 9 special category health data → dedicated explicit consent
- **Health claims:** behavioral framing ("discipline score"), not clinical ("health score")
- **Pre-launch legal review:** $2-5K budgeted

### Marketing
- **Social jet lag = core marketing angle** — "69% of people wake up in the wrong timezone"
- **Organic first:** ASO + TikTok + Reddit + ProductHunt + free web calculator
- **First-mover window: 12-18 months** before someone claims "social jet lag" as a category

## Ideas We REJECTED (never re-pitch)

1. **Privacy-first budget app** — Niche audience, high CAC
2. **Phone storage cleaner** — OS eating the category, scam reputation
3. **Subscription tracker** — Target users hate subscriptions
4. **Warranty/receipt tracker** — Users don't trust warranties
5. **Before/after photo tool** — Usage too infrequent (2-3x/year)
6. **AI food label scanner** — Users already know what to avoid
7. **AI photo recovery** — Technically impossible beyond 30/60 days on mobile

## What The User Values

- Market demand over personal passion
- Proven revenue potential over cool ideas
- Daily/frequent usage that justifies subscription
- AI/automation that creates "magic moments"
- Score/streak mechanics for retention
- Low maintenance (no content creation)
- Global from day 1 with minimal localization
- **Science-backed** — genuinely wants to help users, not exploit them
- **Honest about limits** — won't promise to make night owls into 5 AM risers

## Working Style

- User is sharp at rejecting — every rejection has been valid
- "Complaints ≠ willingness to pay"
- The user prefers subscription over one-time purchase
- User can build anything (design, backend, frontend, marketing) — solo dev
- User wants to bulletproof the idea before building
- User wants ALL information preserved and findable for when they build specific features

## Project Structure

```
/Desktop/app-research/
├── CLAUDE.md              ← THIS FILE (project instructions for Claude)
├── README.md              ← Project overview
├── PROJECT_STATE.md       ← Living doc: status, decisions, session log, TODOs
├── MASTER-REFERENCE.md    ← Index of ALL research, organized by feature
├── PRE-DEV-PLAYBOOK.md    ← 130+ deliverables across 7 pre-dev phases
├── competitors/           ← Competitor analysis (Alarmy, sleep apps, focus apps)
├── concepts/              ← Feature designs and product concepts
│   ├── feature-*.md       ← Individual feature specs
│   ├── marketing-*.md     ← Marketing strategies
│   └── technical-architecture.md
├── market/                ← Market research, neuroscience, psychology
│   ├── neuroscience-*.md  ← Habit formation, mornings, behavior change
│   ├── chronotype-*.md    ← Chronotype detection, shifting, onboarding
│   ├── *-market-*.md      ← Market sizing, trends
│   └── organic-acquisition-stress-test.md
├── strategy/              ← Business strategy documents
│   ├── vision.md          ← Mission, vision, positioning, moats
│   ├── financial-model.md ← 3-year projections
│   ├── pricing-strategy.md
│   ├── business-model-canvas.md
│   └── user-persona.md
├── validation/            ← Stress tests and validation
│   ├── stress-test-*.md   ← Revenue, retention, uninstall, regulatory
│   ├── user-pain-points.md
│   ├── willingness-to-pay.md
│   └── mvp-features.md
└── notes/                 ← Session notes (currently empty)
```

## How To Resume Context

1. Read `snoozewar/PROJECT_STATE.md` — current status, all decisions, what's next
2. Read `MASTER-REFERENCE.md` — find ANY research by feature/topic
3. When working on a specific feature: look it up in MASTER-REFERENCE, read the listed files
4. Never re-pitch rejected ideas
5. Never contradict the science foundation
6. Never re-open settled decisions without the user asking

## Cross-Session Memory

Persistent memory is stored in claude-mem MCP (project: "app-research"). Search it when:
- User references past conversations
- You need context on why a decision was made
- Looking for research that might not be in the files
