# SnoozeWar — Project State
*Last Updated: 2026-04-17*

## Brand
- **Name:** SnoozeWar
- **Domains:** snoozewar.com, snoozewar.app (being purchased)
- **Social:** @snoozewar (YouTube, TikTok, Instagram)
- **Decided:** April 14, 2026

## Current Phase: Phase 1 COMPLETE → Strategic Pivot (Apr 16-17) → Finalizing V1.0 Specs

## Status
**Major strategic pivots completed April 16-17, 2026.** Monetization model changed from hard paywall + 7-day calendar trial to **freemium with 7-usage consumption trial + credit wallet + referral program**. Product positioning clarified: chronotype is INTELLIGENCE LAYER (post-Day 0), not Day 0 hero — core product is enforcement. Onboarding PRD rewritten to V3.0 (11 screens, ~85-95 sec, no chronotype quiz, no permissions in onboarding). New revenue model doc created: `strategy/revenue-model-v2.md`. Multiple strategy docs now superseded and need rebuild under new model (see flagged docs). Next: first-alarm-setup flow PRD + morning/night side product design + financial model rebuild.

## Session Log — April 16-17, 2026 (Strategic Pivots)

### Onboarding Brainstorm → Product Position Clarification
- Started session brainstorming on the V2.0 onboarding PRD (16-17 screens, chronotype-quiz-first)
- Surfaced a core contradiction: PRD positions chronotype as Day 0 hero, but project framing calls it "hook + intelligence, not destination." These conflict.
- Also surfaced data-quality problem: "If tomorrow was completely free, when would your body wake up?" — users answer aspirationally because they're in "set my alarm" mental mode. Garbage data in → garbage chronotype out.
- **Decision locked:** Product hero is ENFORCEMENT of required sleep-wake schedule. Chronotype is a LAYER that activates post-Day 0 (passively or opt-in). NOT the Day 0 hero.
- **Decision locked:** Core product in V1.0 = alarm + missions + bedtime + streak + Dare Engine + Life Score. Chronotype quiz DEFERRED to V1.1.

### Monetization Pivot — Rejected Hard Paywall + Trial
- User pushed back on hard paywall + 7-day trial model (previously locked). Arguments:
  - Trial contradicts own science (habit forms in 66 days, not 7)
  - User goal: retain first, monetize after habit forms
  - Doesn't believe in trials philosophically
  - Wants users to experience product before paying
- User also rejected ads (Alarmy's 70% revenue source) — premium positioning choice

### New Monetization Model: Freemium + 7-Usage Consumption Trial
- New users get 7 full-experience mornings + 500 credits welcome gift
- After usage #7: drops to free tier OR upgrades (50% off during trial + 48h grace)
- Free tier is meaningful (alarm + shake mission + basic Dare Engine + streak + score + 3-day history + bedtime reminder)
- Paid features: Photo mission ($4.99), Barcode ($2.99), Math ($2.99), Night Mode ($4.99), Full Dare Engine library ($4.99)
- Subscription: $39.99/yr / $5.99/mo / $89 lifetime
- Credit wallet + referral program in V1.0 scope (scope creep accepted)
- Post-trial top-up packs (deliberately expensive per usage vs subscription)
- Streak save = credit-based (99 credits) + $0.99 cash fallback
- Full model: `strategy/revenue-model-v2.md`

### Onboarding PRD V3.0 — Rewritten
- 11 screens, ~85-95 seconds (down from V2's 16-17 screens, ~2.5-3 min)
- Three explicit jobs: EDUCATE + BUILD BELIEF + GIFT WELCOME
- No chronotype quiz
- No alarm/mission/days configuration in onboarding
- No permissions in onboarding (all deferred to first-alarm setup flow)
- Phases: Hook → Educate (3 screens) → Trust (3 screens) → Personalize (name input) → Welcome Gift → Feature Showcase (carousel) → Home Entry
- Single emotional peak: Welcome Gift at S9
- Reframed from "trial" to "welcome gift" — no trial countdown, no "no card required" framing
- Full spec: `prd/onboarding-prd.md` V3.0 (overwrote V2.0, V2 in git history)

### Documents Superseded / Obsolete
- `strategy/pricing-strategy.md` — hard paywall model, now superseded by revenue-model-v2.md
- `strategy/financial-model.md` — assumptions based on hard paywall, needs full rebuild
- `strategy/business-model-canvas.md` — revenue streams section outdated
- `concepts/conversion-and-retention-playbook.md` — Day 7 trial conversion mechanic replaced
- `validation/stress-test-chronotype-revenue.md` — revenue assumptions outdated
- `concepts/final-feature-list.md` — needs wallet/credits/referrals/top-ups added
- All flagged with top-of-file SUPERSEDED banners pointing to revenue-model-v2.md

### Open Decisions (from revenue model)
1. Confirm top-up pack pricing ($1.99 / $7.99 / $12.99 / $19.99)
2. Credit expiry policy (currently no expiry)
3. Top-up "usage" definition confirmed (= 1 morning alarm dismissal)
4. Can users buy top-ups during 7-usage trial? (Recommended: no)
5. Subscription discount cap via credits (currently 50%)
6. Lifetime pricing re-evaluation ($89 may be too low)
7. Regional pricing strategy beyond US/India
8. Account system build scope and timing (required for referrals)

### Next Session Priorities
1. Write `prd/first-alarm-setup-prd.md` — what happens after onboarding S7 (alarm config + permissions + first Dare Engine moment)
2. Design Morning Side core product loop (started earlier, decisions 1-6 pending)
3. Design Night Side core product loop (not started)
4. Rebuild financial model under freemium assumptions
5. Pressure-test monetization calibration (cap levels, credit economy)

---

## Session Log — April 23, 2026

### Onboarding PRD V3.2 — Emotional Arc Redesign
- Reviewed V3.1 critically: identified it as an "information delivery system, not an experience" — flat emotional arc, overloaded screens, missing mechanism education
- Identified the core gap: V3.1 told users WHAT SnoozeWar does but not WHY it works when other apps failed
- Identified missing chronotype education — user wanted users to learn about chronotype without a quiz
- Identified missing paywall — user wanted premium option alongside free path in onboarding
- Identified missing app usage education — user wanted users to understand the night → morning → score loop

### Key V3.2 Design Decisions
- **S2 simplified:** 3-beat animation → single 69% stat + chronotype introduction. One idea per screen.
- **S3 completely replaced:** Overloaded trust screen → "Why Everything Else Failed" mechanism reveal (sleep inertia, brain offline 30 min, night-before insight)
- **S4 completely replaced:** Name input → "How SnoozeWar Fixes It" 3-block solution (Night/Wake/Loop) narrated by Dare Engine speech bubbles. Users EXPERIENCE the product personality.
- **S5:** Name input (moved from S4)
- **S6 completely replaced:** Feature carousel → soft paywall with equally weighted Premium and Free paths. Both CTAs same size. Premium on top (for ready-to-buy Exhausted Veterans), free below (generous: 7 mornings + 500 credits).
- **User quotes cut** from onboarding → move to ASO + Day 2 push notification
- **Feature carousel cut** entirely — replaced by mechanism education on S4
- **Chronotype education added** to S2: introduces concept, seeds 7-day passive detection
- **Chronotype roadmap documented:** S2 seed → Day 1 observation → Day 3 pattern → Day 5 tease → Day 7 reveal (premium)

### Documents Changed
- `prd/onboarding-prd.md` — V3.1 → V3.2 (full rewrite, same file)
- `snoozewar/system-design/app-factory-blueprint.md` — new file (app factory blueprint for 12-app journey)
- `MASTER-REFERENCE.md` — added "When You're Building: THE SYSTEM" section

---

## Session Log — April 14, 2026 (Full Day Session)

### Brand & Naming
- Brand name finalized: **SnoozeWar** (snoozewar.com + snoozewar.app purchased)
- Names rejected with reasons: KlockOff ("knock off" = counterfeit), TimeSlapp ("slapp" = weak in Scandinavian), NoSnuz (only captures morning half)
- Multilingual safety checks passed across 13 languages/markets
- Gmail: snoozewar@gmail.com for all accounts
- Separate brand-specific social channels per product (not personal umbrella)

### Product Brief & Positioning Update
- Created PROJECT-BRIEF.md (technical) and PRODUCT-BRIEF.md (non-technical pitch doc)
- Key positioning shift: chronotype science = marketing hook + intelligence layer; product solves real-life schedule enforcement
- Night shift workers added as valid audience (not anti-persona)
- Onboarding PRD updated: alarm defaults to user's REQUIRED schedule, not chronotype ideal
- All project files moved to snoozewar/ subdirectory

### Design System
- Color palette: refined from #FF6B35 (100% sat, cheap) → #E09145 (74% sat, premium)
- Button text: changed from black on orange → white on amber (fixed "construction tape" problem)
- Fonts: Space Grotesk (display/dare engine) + Inter (body) — researched and validated
- 127 Figma Variables: 42 primitive colors, 44 semantic colors, 16 spacing, 10 radius, 11 fontSize, 4 iconSize
- 15 text styles: Display/Heading/Title/Body/Label scales
- 16 components, 28 variants on Components page
- Design system spec: snoozewar/concepts/design-system-spec.md

### Onboarding Screens
- V0: 17 screens built in Figma (full PRD flow)
- V1: 13 screens built (optimized — merged picker screens, quick-fire round, combined reveal)
- Drop-off audit done: identified 3 risk zones, reduced from 17→13 screens, ~95s→~75s
- Key merges: free wake+sleep → 1 screen, work wake+sleep → 1 screen, days-off+energy+morning → 1 screen, past-apps+brain → 1 screen, reveal+not-broken → 1 screen

### Logo
- 5 logo concepts created: Offset Rings, Split Clock, ZZZ Break, Dual Hands, Original
- User finalizing logo externally (AI image generation)
- Splash screen created with icon + wordmark

### Research Created
- concepts/design-signature-research.md
- concepts/premium-design-psychology-research.md
- concepts/design-morphisms-and-interaction-patterns.md
- concepts/color-palette-premium-research.md
- concepts/display-font-research.md
- concepts/design-system-spec.md

### Figma File
- https://www.figma.com/design/R29XBx2P9Y1I9mOkohDanP
- Account: himanshulal56@gmail.com (Pro plan)
- Pages: Foundations, Components, Onboarding V0, Onboarding V1, Logo & Branding, Splash Screen

### Next Steps
- Review V1 onboarding screens in detail
- Build remaining app screens (Home, Alarm, Night Mode, Settings)
- Write PRDs for Alarm System, Night Mode, Life Score, Streak System
- Finalize logo and update splash screen
- Start backend architecture and codebase setup

## Session Log — April 14, 2026 (Design Morphisms & Interaction Patterns)
- Created comprehensive design morphisms and interaction patterns research: `concepts/design-morphisms-and-interaction-patterns.md` (60+ web searches, NN/g articles, Apple HIG, Material Design 3, IxDF)
- **Category 1 — Design Morphisms:** Deep-dived all 11 morphisms (glassmorphism, neubrutalism, neumorphism, claymorphism, skeuomorphism/Liquid Glass, aurora/mesh gradients, bento box, spatial design, dark mode best practices, Liquid Glass critique, emerging hybrids)
- Key finding: No new "-morphisms" coined in 2025-2026 — trend is hybrid approaches. SnoozeWar's layered stack (neubrutalism + dark glass + aurora atmosphere) IS the modern approach.
- Apple Liquid Glass widely criticized (NN/g: "restless, needy, less predictable") — adopt for system chrome only, keep own identity for content
- Claymorphism and neumorphism confirmed NOT for SnoozeWar (too soft, poor dark mode)
- **Category 2 — Interactive vs Informational:** Touch targets (Apple 44pt, Material 48dp, position-dependent sizing), fill vs ghost buttons (7-20% conversion gap), haptic hierarchy (iOS/Android APIs mapped), press animations (12-76% engagement lift), score display design, dark mode data viz, card system (5 types), interaction spectrum (5 levels)
- Created complete SnoozeWar z-layer architecture (8 layers) and design token starter system
- Built morphism comparison matrix with SnoozeWar ratings for all 10 styles
- Updated MASTER-REFERENCE.md with 33 new reference entries under Design & Visual Identity
- 10 key takeaways synthesized for build phase

## Session Log — April 14, 2026 (Design Signature Research)
- Created comprehensive design signature research: `concepts/design-signature-research.md` (30+ sources, 9 brand case studies, 7 competitor visual analyses)
- Key finding: Alarmy (82M downloads) has essentially NO design signature — generic alarm app with yellow accents. Biggest opportunity in the category.
- Recommended design direction: Neubrutalism-influenced dark mode with selective glassmorphism
- 8 signature elements defined: electric warm accent color, countdown arc shape, impact motion, condensed angular typography, bold battle-themed illustration, distinctive alarm sound, personality-in-every-pixel visual layer, neubrutalism morphism
- Unclaimed territory identified: bold/confrontational visuals, hot/warm accents, character/mascot, personality-forward design, energetic dark mode — nobody does any of these in alarm/sleep
- Updated MASTER-REFERENCE.md with new "Design & Visual Identity" section (16 reference entries)
- Added 4 design-related TODOs for next session

## Session Log — April 14, 2026 (Naming + Product Brief)
- Brand name finalized: **SnoozeWar** (snoozewar.com + snoozewar.app)
- Multilingual safety checks passed across 13 languages/markets
- Names rejected: KlockOff (sounds like "knock off" = counterfeit in English), TimeSlapp ("slapp" = weak/limp in Scandinavian languages, DV associations in India)
- Created PROJECT-BRIEF.md (technical) and PRODUCT-BRIEF.md (non-technical pitch doc)
- Updated product positioning: chronotype science = marketing hook + intelligence layer; product solves real-life schedule enforcement
- Night shift workers added as valid audience (not anti-persona)
- Onboarding PRD updated: alarm defaults to user's REQUIRED schedule, not chronotype ideal
- All project files moved to snoozewar/ subdirectory

## Session Log — April 11, 2026
- Naming work discarded — all naming research files and references removed from project per user decision to start from scratch in a future session.

## Session Log — April 10, 2026
- Created `audience/10-segment-sizing-with-real-numbers.md` — real numbers for all 10 user types
- Created `market/marketing-channel-numbers-hard-data.md` — hard channel data (ASO, TikTok, Reddit, SEO, etc.)
- Created `validation/conversion-funnel-benchmarks.md` — full funnel from impression to paid
- Created `strategy/roles-hierarchy.md` — 217 AI agent roster (user = Commander)
- Created `concepts/final-feature-list.md` — DEFINITIVE feature list (70 launch, 108 unique)
- Created `concepts/cognitive-load-framework.md` — zero cognitive load UX architecture
- Created `concepts/conversion-and-retention-playbook.md` — Day 0→Year 2 conversion + retention
- Created `concepts/viral-sharing-system.md` — 12 shareable artifacts, organic viral growth
- Updated feature list with analytics (7) and viral sharing (12) features
- Saved 8 memories to claude-mem (IDs #6207-#6215)

## Vision: Solve ALL Five Competitor Problems in One App

**Decision (2026-05-01):** SnoozeWar will not just solve the night-to-morning enforcement gap — it will absorb every core problem our competitors solve individually, into one unified product.

| Competitor | Their Problem | How SnoozeWar Solves It |
|-----------|--------------|------------------------|
| **Alarmy** | "I can't stop hitting snooze — force me out of bed" | Alarm + missions + Dare Engine enforcement |
| **Sleep Cycle** | "I want to understand my sleep quality and wake up at the right moment" | Chronotype intelligence layer + passive sleep tracking + smart alarm window |
| **RISE** | "I don't know my sleep debt or energy peaks/dips" | Sleep debt tracking + energy schedule + chronotype-aware timing |
| **Fabulous** | "I want to build healthy routines but can't stick to them" | Night + morning routine enforcement + streak + Life Score + progressive habit building |
| **Opal** | "I can't stop doomscrolling — block my apps for me" | Night Mode screen lockdown + bedtime enforcement + phone-down dares |
| **SnoozeWar (unique)** | "I lose control of my night AND my morning — fix my entire sleep-wake cycle" | Full-cycle enforcement: night → sleep → wake → morning routine, all in one loop |

**Why this works:** Every competitor solves ONE half of the problem. Nobody owns the full night-to-morning enforcement loop. SnoozeWar is the first app that says: put your phone down at night, wake up on time, AND own your first 30 minutes — all enforced, all scored, all in one place.

### Fix Every Competitor's User Complaints (Decision: 2026-05-01)
We cataloged 300+ user complaints across all 5 competitors (Reddit, App Store, Play Store, Instagram, Facebook, Trustpilot) and designed SnoozeWar's response to each. Full mapping: `strategy/competitor-problems-we-solve.md`. Key design principles derived:
1. No ads, ever
2. Alarm reliability is non-negotiable (AlarmKit)
3. Transparent billing (one subscription, no tricks)
4. Score behavior, not sleep (avoid orthosomnia)
5. Behavioral motivation > technical restriction
6. Respect vulnerable users (ADHD-friendly by design)
7. 48-hour support response
8. Android = iOS from Day 1
9. Free tier never shrinks
10. Dare Engine prevents content fatigue

## Direction
Building a **behavior enforcement app** — one app covering the full cycle:
- **Night Mode:** Bedtime enforcement with "Procrastinate sleeping if you can" dare countdown + screen lockdown (solves Opal)
- **Morning Mode:** Alarm with missions + expiring morning digest + morning journal (solves Alarmy)
- **Sleep Intelligence:** Chronotype detection + sleep debt tracking + smart alarm window (solves Sleep Cycle + RISE)
- **Routine Engine:** Progressive habit building with streak + Life Score + Dare Engine (solves Fabulous)
- **Day Mode (V2):** AI reminders tied to goals, focus blocks
- **Intelligence Layer (V3):** Pattern learning, adaptive difficulty, predictions

### Core Personality: "The Dare Engine"
- Cocky, challenging, never preachy
- "Still in bed? Bold. -5 points."
- Duolingo owl energy meets Alarmy enforcement meets competitive friend
- "Procrastinate If You Can" is the attitude, not a separate product

### Key Features
- **Life Score** — one number (sleep + morning + streak) visible on home screen widget
- **Streak system** with loss aversion mechanics
- **Disappearing value** — morning digest expires if you procrastinate
- **AI Voice Agent** — realistic voice conversation when user wakes up (FEATURE, not hero)
- **Journal prompts** — quick night/morning one-tap entries
- **Goal setting** — set tomorrow's goal at night, reminded in morning

## Key Insight
> "69-70% of people live with social jet lag — a mismatch between biology and schedule. The decision void after waking is real (sleep inertia, 15-70 min). But the deeper problem is most people fight their own chronotype. We don't care what time you wake up. We care that you wake at YOUR time — and that your time is right for your biology."

## Core Scientific Foundations
- **Chronotype is ~50% genetic** — 351 gene variants, can shift max 1.8-2.4h (Burgess protocol)
- **5 chronotype subtypes** not 2 — including at-risk night owls (McGill 2025, Nature Comms)
- **69-70% have >1h social jet lag** — 2h doubles diabetes risk (Roenneberg)
- **Sleep inertia lasts 15-70 min** — prefrontal cortex offline, validates "decision void"
- **Habit formation takes 66 days avg** (range 18-254) — not 21 (Lally, UCL)
- **Consistent wake time > sleep duration** for health outcomes
- **Passive chronotype detection** from phone screen data = 89% accuracy in 7-14 days
- **Chronotype shifts relapse without maintenance** = natural subscription justification
- **Phone within 5 min of waking = 31% higher cortisol** at 90 min
- **Variable rewards beat fixed** — Schultz dopamine prediction error (1997)
- **Snoozing isn't as harmful as claimed** — may reduce sleep inertia (Sundelin 2024)
- **Ego depletion/willpower model debunked** — motivation, not glucose (36 labs, 3,531 participants)

## Research Completed
- [x] Competitor analysis: alarm/morning apps (16 competitors)
- [x] Competitor analysis: sleep apps (10+ apps, market sizing)
- [x] Competitor analysis: procrastination/focus apps (10 competitors)
- [x] User pain points validation (real Reddit/forum quotes)
- [x] Willingness to pay analysis (pricing, ARPU, conversion data)
- [x] Behavior psychology research (proven mechanisms)
- [x] **Deep neuroscience & habit formation research** (10 areas, 17 researchers, 15+ academic papers, actionable feature translations) — see market/neuroscience-habit-formation-deep-research.md
- [x] Concept validation (personality, FOMO mechanics, gamification market)
- [x] MVP feature prioritization
- [x] Marketing playbook (TikTok, ASO, launch sequence, viral mechanics)
- [x] Localization strategy (10-12 languages, Alarmy does 28)
- [x] Neuroscience of mornings — 12-topic deep research (sleep inertia, CAR, snoozing, light, phone use, cold exposure, decision fatigue, circadian entrainment, morning routines, chronotypes, motivation, becoming a morning person) — see market/neuroscience-of-mornings.md
- [x] **Behavior change frameworks** (12+ frameworks: Fogg B=MAP, Hook Model, COM-B, Stages of Change, operant conditioning, CBT, temporal discounting, self-efficacy, nudge theory, DTx evidence) — see market/behavior-change-frameworks-deep-research.md
- [x] **Chronotype deep dive** (5 subtypes, Breus model assessment, MEQ/MCTQ questionnaires, passive detection methods, shifting protocols, social jet lag, lifespan shifts, existing app gap analysis) — see market/chronotype-deep-research.md
- [x] **Uninstall problem stress test** — uninstall rates, anti-uninstall mechanics (Alarmy/Opal/Sleep Cycle), commitment device psychology, gamification churn reduction data, 10-point anti-uninstall strategy — see validation/stress-test-uninstall-and-first-1000-users.md
- [x] **First 1,000 users strategy** — community sizing (Reddit 7-8M, TikTok 34B views), micro-influencer pricing, beta testing platforms, conversion data, month-by-month launch playbook — see validation/stress-test-uninstall-and-first-1000-users.md
- [x] Alternative idea research (top-grossing indie apps, high-intent search niches, hidden profitable niches) — see market/indie-apps-making-millions.md, market/high-intent-search-niches.md, market/hidden-profitable-niches.md
- [x] **Stress test: Chronotype gap + Revenue model** — 7 barriers (all dissolving 2024-2026), FDA Jan 2026 derisked, Pear Therapeutics bankruptcy validates consumer-direct, hard paywall 10.7% median, India pricing INR 999-1,499 — see validation/stress-test-chronotype-revenue.md
- [x] **Stress test: Long-term retention & Dare Engine personality fatigue** — H&F worst renewal category (30.3%), Month 1 cliff (30%+ cancel), 8-layer retention stack designed, Duolingo/Peloton/Oura/Strava retention analysis, habituation psychology, guilt spiral prevention, AI copy generation strategy — see validation/stress-test-long-term-retention.md
- [x] **Organic acquisition stress test** — keyword search volumes, indie app growth case studies (Alarmy/Opal/GymStreak/Rootd/CARROT), Reddit channel sizing, TikTok organic conversion data, ASO timeline, ProductHunt ROI, web tool funnel analysis, Year 1 forecast (6.7K-25K installs conservative) — see market/organic-acquisition-stress-test.md
- [x] **App Store & regulatory risk stress test** — AlarmKit (iOS 26) eliminates #1 iOS alarm risk, FDA Jan 2026 wellness guidance de-risks sleep claims, GDPR Article 9 requires explicit consent for sleep data, melatonin is prescription-only in India (must geo-fence), Google Play Aug 2025 health declaration required, Life Score safe as gamification metric — see validation/stress-test-appstore-regulatory-risks.md
- [x] **Target audience behavioral patterns** — 30+ web searches, surveys, studies covering nighttime behavior (revenge bedtime procrastination: 1h50m delay, 3.5 nights/week), morning behavior (55.6% snooze, 2.4 presses, 71% check phone in 10 min), app usage patterns (January +46% installs, 3 AM search peak), seasonal patterns (DST, SAD, Monday effect), solution-seeking behavior, social behavior around sleep — see market/target-audience-behavioral-patterns.md
- [x] **Voice of customer language research** — 20+ web searches across Reddit, Quora, Twitter/X, TikTok, Alarmy app reviews, blog confessionals. Mapped exact phrases for: night problem (revenge bedtime procrastination in their words), morning problem (snoozing, alarm guilt), failed solutions ("I've tried everything"), search terms (Google, App Store, Reddit, YouTube, TikTok), emotional language (self-blame, desperation, hope, frustration, identity), vocabulary gap (scientific terms vs user language), 30+ marketing one-liners, ASO keyword priorities, Dare Engine copy mapped to user voice, push notification copy — see market/voice-of-customer-language-research.md
- [x] **Purchase triggers, barriers, pricing, conversion psychology, churn & seasonality** — 20+ web searches across RevenueCat 2026, Adapty 2026, Sensor Tower, Kantar, AppTweak, Google Play Console data. Key findings: January spike +34-46% but worst cohort quality (D30: 3-10%), 82% of trial starts happen Day 0, 55% trial cancellations Day 0, top cancel reasons: low usage (37-40%) > too expensive (34-35%), life events increase trial likelihood 75%, enforcement WTP > coaching > tracking, 17+ day trials convert 70% better, annual 2.4x more profitable than monthly, H&F worst first-renewal (30.3%), Month 1 is danger period not Month 3, seasonal peak Jan/spring/Sep — see market/purchase-triggers-barriers-research.md
- [x] **Psychographic profiles deep research** — 4 identity narratives, belief systems (5 AM Club impact, chronotype awareness gap), 24-hour emotional landscape, motivation style ranking, Autonomy Paradox, values decomposition (Control 40%, Guilt-freedom 25%, Performance 20%, Image 10%, Health 5%), ADHD overlap (80% sleep disorders, 73-78% delayed circadian, 36% DSPD, 366M adults worldwide), 4 psychographic segments with triggers, Dare Engine tone calibration, Revelation Sequence, language guide — see market/psychographic-profiles-deep-research.md
- [x] **Failed solutions map** — 18 solutions mapped across 5 categories (alarm apps, habit/routine apps, sleep/meditation apps, screen time apps, non-app solutions), each with failure duration, real user quotes, root cause analysis, and how our app addresses the specific failure. 5 universal failure patterns identified (Two-Week Wall, Blame Loop, Novelty Effect, Full-Cycle Blindspot, Circular Dependency). 7 unmet needs synthesized from user wish-list analysis. Complete matrix mapping every failed solution to our feature response — see validation/failed-solutions-map.md

## Key Data Points
- Alarmy: $15M+/year, 82M downloads
- Opal: ~$10M ARR, 11 people
- Sleep Cycle: $25M ARR
- Digital wellness market: $1.28B → $3.5B by 2035
- H&F trial-to-paid: 35-40%
- Pricing sweet spot: $49.99-$59.99/year (US), ₹1,999/year (India)
- Personality raises retention from 12% to 55% (Duolingo data)
- BeReal FOMO mechanic: 76.4% daily engagement
- #MorningRoutine: 8B+ monthly TikTok views
- 82% quit becoming morning people within 21 days = our gap
- Revenge bedtime procrastination: 1h50m delay, 3.5 nights/week, 332 hours/year lost
- 55.6% of mornings end with snooze alarm, 2.4 presses avg (3M+ nights study)
- 71% check phone within 10 min of waking; 25% within 1 minute
- 51% of Americans deliberately delay sleep for sense of control (Amerisleep survey)
- ADHD: 6.76% adult prevalence (366M worldwide), 80% have sleep disorders, 73-78% delayed circadian
- ADHD DSPD prevalence: 36% (vs 0.1-3.1% general population)
- ChatGPT "be mean to me" trend validates tough love app personality demand (CNBC 2024)
- 5 AM Club: 17.5M TikTok posts — creates chronotype shame in night owls
- RAND 2025: "zero difference in socioeconomic standing" between early/late risers
- 96% intentionally stay up late knowing it hurts sleep
- Gen Z bedtime: 12:30 AM (latest generation)
- January H&F installs: +46% spike, sessions +70% YoY
- "Insomnia" Google searches peak at 3:00 AM in every US state

## MVP Features (Week 1 Ship)
### Must-Have:
- Alarm with physical missions (photo, barcode, shake)
- Dare Engine personality throughout
- Night mode: bedtime countdown + dare + set tomorrow's goal
- Morning mode: alarm + mission + expiring digest
- Life Score (widget)
- Streak system
- Clear onboarding (3 screens max)

### NOT in MVP:
- AI voice agent, day mode, journal, adaptive difficulty, community

## Monetization
- Hard paywall with 7-day free trial on annual plan
- Annual: ₹1,999/year (India), $49.99/year (US)
- Monthly: ₹249/month, $5.99/month
- Streak freeze IAP: ₹49/use

## Localization Strategy
- Launch: English + metadata-only localization for top 10 markets
- V1.1: Full UI localization for Tier 1 (8 languages)
- North star: Alarmy's 28 languages

## Designed Features (concepts/)
- [x] **Shift Your Clock** — 14-day chronotype shifting program (concepts/feature-shift-your-clock.md)
- [x] **Onboarding Chronotype Detection** — 7-question hybrid quiz + passive refinement (market/chronotype-onboarding-research.md)
- [x] **Social jet lag as marketing angle** — deep research completed (market/social-jet-lag-marketing-research.md)
- [x] **Life Score Design** — full scoring system research: FICO/Oura/WHOOP/Apple/Duolingo analysis, psychology of scoring, weighting system (30/25/20/15/10), anti-patterns, widget strategy (concepts/life-score-design-research.md)

## TODO (Next Session)
- [ ] Start Phase 1: Master PRD + 30 feature PRDs
- [ ] User flow maps
- [ ] Analytics event taxonomy
- [ ] Dare Engine copy bible (200+ variants)
- [ ] Design system: Figma setup with design tokens based on signature research
- [ ] Signature color selection: finalize exact hex from #FF6B35→#FF4040 range
- [ ] Signature typography: shortlist 3-5 condensed angular display fonts
- [ ] Signature shape: prototype countdown arc motif across key screens

## Rejected Ideas (with reasons)
| # | Idea | Rejection Reason |
|---|------|-----------------|
| 1 | Privacy-first budget app | Niche audience, high CAC |
| 2 | Phone storage cleaner | OS eating category, scam reputation |
| 3 | Subscription tracker | Target users hate subscriptions |
| 4 | Warranty tracker | Users don't trust warranties |
| 5 | Before/after photo tool | Too infrequent usage (2-3x/year) |
| 6 | AI food label scanner | Users already know what to avoid |
| 7 | AI photo recovery by description | Technically impossible beyond 30/60 days on mobile |

## Decisions Made (2026-04-07)
- **Tech stack:** Expo (dev client) + React Native + Node.js + MongoDB
- **Cross-platform from day 1** — no iOS-first
- **Ship all features at once** — no MVP/V2/V3 phasing
- **Backend first, frontend last** — API complete and tested before any UI work
- **Build order:** Pre-dev (8 weeks) → Backend → Native modules → Frontend → Polish
- **Hard paywall + 7-day trial** — not freemium
- **Pre-dev playbook:** All PRDs, wireframes, Figma designs, architecture, marketing, legal must be done before line 1 of code
- **NOT a 5 AM app** — we help users wake at THEIR intended time, respecting chronotype biology
- **Chronotype-aware from day 1** — onboarding detects chronotype, app adapts to it
- **Science-backed** — all behavior change features grounded in peer-reviewed research (20+ papers)
- **AlarmKit (iOS 26)** — use system-level alarm capabilities (WWDC 2025)
- **Melatonin geo-fenced** — prescription in India, UK, Denmark, CZ, Norway. Educational framing only.
- **GDPR dedicated consent** — sleep/chronotype = Article 9 special category. Build from day 1.
- **3-era retention** — Enforcement (M1-2) → Insight (M3-6) → Identity (M6+)

## Open Questions
- ~~How do we avoid the "user bypasses/uninstalls" problem?~~ → ANSWERED (psychological, not technical)
- ~~Can we reach users without paid marketing?~~ → ANSWERED (yes, 12-18 month organic timeline)
- ~~Will people actually pay for this?~~ → ANSWERED (hard paywall validated, 70% renewal churn is the real fight)
- ~~Why hasn't this been built already?~~ → ANSWERED (7 barriers, all dissolving now, 12-18 month window)
- ~~App Store risks?~~ → ANSWERED (AlarmKit solves iOS, melatonin needs geo-fencing, GDPR needs dedicated consent)
- ~~Retention after novelty?~~ → ANSWERED (3-era strategy: Enforcement → Insight → Identity)
- What's the exact AI voice agent interaction flow?
- What's the MVP scope? (user deciding)

## Session Log
- **2026-04-05:** Initial ideation session. Rejected 6 ideas through pitch-and-reject. Landed on behavior enforcement direction. Completed 6 parallel research streams. Set up project folder and persistence system.
- **2026-04-05 (contd):** Concept formation — defined Dare Engine, Night/Morning modes, Life Score, layers 1-4. Validated concept with data. Defined MVP features. Created marketing playbook. Researched pricing and localization.
- **2026-04-08:** Stress-tested two critical concerns: (A) The Uninstall Problem and (B) Finding First 1,000 Users. Deep web research across 20+ searches covering uninstall rates, Alarmy/Opal/Sleep Cycle anti-uninstall mechanics, commitment device psychology, gamification churn data, community sizing (Reddit 7-8M addressable, TikTok 34B views on #morningroutine), micro-influencer pricing ($200-$800/video), beta testing platforms, and conversion data. Key decisions: anti-uninstall strategy is psychological not technical (streak hostage + "you chose this" framing + Life Score identity + gradual ramp), first 1000 users achievable in month 1 with $5-10K budget via Product Hunt + Reddit + micro-influencers + ASO. Full research saved to validation/stress-test-uninstall-and-first-1000-users.md.
- **2026-04-08:** Stress-tested two critical questions: (A) Why hasn't a chronotype+shifting+enforcement app been built? Found 7 specific barriers — all dissolving in 2024-2026 window (FDA wellness guidance Jan 2026, Huberman/sleepmaxxing creating consumer awareness, Google Health Connect/HealthKit APIs maturing, academic research proving phone-only detection works at 89% accuracy). No failed chronotype startup found — the concept was simply never attempted. Pear Therapeutics (Somryst) went bankrupt in 2023 but was prescription DTx, not consumer. (B) Revenue model stress test: hard paywall validated at 10.7% median conversion (5x freemium), H&F trial-to-paid best at 35% but first-renewal retention worst at 30.3% — this is our key battleground. India pricing should be INR 999-1,499 not 849 (too cheap). Streak freeze IAP is retention tool not revenue driver ($12K-$250K/yr). Year 1 moderate scenario: $400K ARR. Full analysis in validation/stress-test-chronotype-revenue.md.
- **2026-04-07:** Major session. Deep market analysis (4 parallel research streams: alarm market, habit market, TAM/SAM/SOM, competitive landscape). Corrected Alarmy data — they're bootstrapped ($0 funding), $24M revenue, 56% margins, 34 employees. 70% of revenue is ads, not subs. Created full technical architecture (system diagram, API routes, MongoDB schemas, folder structures, package lists). Decided: Expo dev client + RN + Node.js + MongoDB. Created Pre-Dev Playbook with 130+ deliverables across 7 phases. Started Phase 0: completed vision document, business model canvas, financial model (3-year), pricing strategy, user personas. User wants every role (CEO to QA) executed at Fortune 500 level before coding.
- **2026-04-08:** Long-term retention stress test. Deep research across 20+ web sources covering H&F retention benchmarks (D1-D365), RevenueCat/Adapty subscription data, Duolingo's full retention playbook (streaks, leaderboards, notifications, seasonal events), habituation psychology (overjustification effect, variable ratio reinforcement, tone fatigue), high-retention app analysis (Peloton 96%, Oura 88%, Strava 2x with clubs), guilt spiral prevention, and personality fatigue mitigation. Key findings: H&F has WORST first-renewal retention at 30.3%, Month 1 (not Month 2) is the danger period with 30%+ cancellation, personality novelty fades at 30-90 days, streaks shift from motivation to anxiety at 30-90 days, and "not enough usage" is the #1 cancellation reason (32-47%). Designed 8-layer retention stack and critical design decisions. Full analysis in validation/stress-test-long-term-retention.md.
- **2026-04-08:** Organic acquisition stress test. Deep research across 7 channels: ASO keyword volumes, indie app growth case studies (Alarmy/Opal/GymStreak/Rootd/CARROT/RISE), Reddit sizing (7 relevant subreddits, 30M+ combined members), TikTok organic conversion rates (1 install per 1K-5K views), ASO timelines (3-6 months for mid-tail), ProductHunt (500-2K installs for top 5), web tool funnel (2-8% end-to-end conversion). Year 1 conservative forecast: 6.7K-25K organic installs. Key finding: RISE needed $15.5M VC to execute same category-creation playbook — doing it on zero budget requires 12-18 months patience.
- **2026-04-08:** App Store & regulatory risk stress test. Comprehensive research across 7 areas: Apple guidelines (2.5.4, 3.1, 4.2, 5.1.1, 5.1.3, 2.5.1), Google Play policies (Aug 2025 + Jan 2026 health updates), FDA Jan 2026 wellness guidance, GDPR Article 9, India DPDPA, melatonin legality (4 jurisdictions), and iOS background processing. **GAME-CHANGER FOUND: AlarmKit (WWDC 2025, iOS 26)** gives third-party apps system-level alarm capabilities for the first time — breaks through silent mode, Focus modes, appears on Lock Screen/Dynamic Island/Apple Watch. Expo/RN libraries already exist. KEY DECISIONS: (1) Target iOS 26 minimum — AlarmKit is too important to skip, (2) Passive screen detection NOT feasible on iOS — use questionnaire + HealthKit hybrid instead, (3) Melatonin content must be geo-fenced (prescription drug in India, mixed in EU), (4) GDPR requires explicit consent for sleep/chronotype data as "special category" health data, (5) Life Score safe as gamification metric if framed behaviorally not medically, (6) Google Play requires Health Apps Declaration form. Estimated pre-launch legal review cost: $2K-$5K. Full analysis in validation/stress-test-appstore-regulatory-risks.md.
- **2026-04-08:** Purchase triggers, barriers, pricing, conversion psychology, churn & seasonality research. 20+ web searches across RevenueCat 2026, Adapty 2026, Sensor Tower 2025, AppTweak, Kantar, Google Play Console data, FunnelFox, Digital Yield Group, Airbridge, and academic studies. Mapped 7 purchase trigger categories (New Year +34-46% spike but worst cohort quality, life events 75% more likely to try, rock bottom moments, social proof, trial expiry with streak, DST, seasonal), 7 purchase barriers (free alternative, subscription fatigue 41%, skepticism, privacy, price sensitivity by region, self-reliance, bad reviews), price sensitivity data (enforcement WTP > coaching > tracking > content), conversion psychology (82% trial starts Day 0, 55% cancellations Day 0, streak = most powerful conversion mechanism), cancellation reasons (low usage 37-40%, too expensive 34-35%, billing 28%, alternatives 9-15%), renewal behavior (H&F worst first-renewal 30.3%, Month 1 not Month 3 is danger period, 24-month mark stabilizes churn), and full seasonal calendar (peak Jan, secondary spring, trough summer, back-to-school Sep). Full analysis in market/purchase-triggers-barriers-research.md.
- **2026-04-09:** Major session — audience deep-dive + feature definition. (1) Created identity anchor document: who we are, what we solve, why now. Reframed from "alarm app" to "sleep-wake cycle enforcement system" — fixing the night AND the morning. Added "two decision voids" framework, "Why Now" section (6 converging factors), "What Success Looks Like" before/after, identity transformation thesis. (2) Launched 7 parallel research agents for audience deep-dive: demographics & sizing (80-120M addressable, 55-60% female, 18-35 sweet spot), psychographic profiles (ADHD is largest subgroup at 366M adults, users want control not productivity), behavioral patterns (96% intentionally stay up late, avg 1h50m delay, later bedtime = more snoozing), where they live online (#socialjetlag unclaimed on TikTok, peak reach 11PM-2AM), language & voice (they search night/morning separately, "chronotype" not in vocabulary), failed solutions map (18 solutions, all address only ONE part of cycle), purchase triggers & barriers (82% trial starts Day 0, 55% cancel Day 0, onboarding decides everything). All saved to audience/ folder. (3) Full project review: found 3 contradictions (MVP scope, India pricing, trial length), unsourced claims ("82% quit in 21 days"), broken MASTER-REFERENCE paths, stale docs. Fixed: all broken paths, India pricing to ₹999 across all docs, gender skew corrected, archived irrelevant idea-phase files, cleaned technical-architecture.md artifact. (4) RISE competitive deep-dive: ~$7.8M ARR, 12 employees, zero enforcement, zero morning routine, zero gamification, "social jet lag" unclaimed in their marketing. Positioning is clean split: RISE = understand sleep, We = enforce sleep-wake cycle. (5) Mapped 10 user types with full first-24-hour journeys: Alarm Seeker, Night Struggler, Clueless Sufferer, Repeat Failer, Routine Seeker, Self-Blamer, Optimizer, ADHD Discoverer, Competitor, Science Curious. Each type has different entry door, convert moment, and unique feature need. (6) Compiled complete feature list: 107 features across 14 categories, every feature tied to a specific user type. Key features emerged: ADHD mode (single-task display, visual timers, no "just" language), progressive routine builder (1 habit/week, unlocked by streaks), tone calibration (3 settings), shareable score card, friend leaderboard, free web chronotype quiz as acquisition tool, "Why?" expandable science layer. (7) Designed Day 2-7 trial journey: 5 mechanics (score ladder, streak counter, Dare Engine variety, progressive revelation, night→morning feedback loop), Day 7 conversion screen design. Next: continue journey mapping (Day 8-30, Day 30-90, Day 90+), finalize launch features, build.
- **2026-04-08:** Failed Solutions Map. Comprehensive research across 15+ web searches mapping every solution the target audience has tried and why each fails. Covered 18 solutions across 5 categories: alarm apps (Alarmy, Sleep Cycle, gentle alarms, multiple alarms, phone across room, physical clocks), habit/routine apps (Fabulous, Habitica, Streaks, Todoist/Productive), sleep/meditation apps (Calm/Headspace, Oura Ring, white noise), screen time apps (iOS Screen Time, Opal, One Sec), and non-app solutions (no screens rules, melatonin, blue light glasses, sunrise clocks, cold showers, accountability partners, sleep hygiene advice). Key stats found: 92% of habit tracking attempts fail within 60 days, average habit tracker used 11 days before abandonment, gamified apps show 67% abandonment by week 4 (Stanford), sleep hygiene is so ineffective it's used as placebo in clinical trials, melatonin adds only ~8 minutes of sleep vs placebo, blue light glasses show non-significant 4.86-minute improvement. Identified 5 universal failure patterns and 7 unmet needs. Mapped every failure to our specific feature response. Full analysis in validation/failed-solutions-map.md.
