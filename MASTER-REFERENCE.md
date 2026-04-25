# Master Reference — Everything You Need, Organized by What You're Building

*Last Updated: 2026-04-14 (Session 5)*
*Total: 59+ documents, 20+ peer-reviewed studies, 100+ data points*
*Research files: market/ (17 files), audience/ (10 files), concepts/ (13 files), competitors/ (5 files), strategy/ (6 files), validation/ (8 files)*

**How to use this:** When you start working on any specific feature, section, or task — find it below. Every relevant file, data point, and decision is listed. Read the files listed, not this index — this just tells you WHERE to look.

---

## When You're Building: THE PRODUCT

### Onboarding Flow
| What You Need | Where It Lives |
|---------------|---------------|
| 7-question hybrid quiz design (rMEQ + uMCTQ) | `market/chronotype-onboarding-research.md` §1-2 |
| Exact rMEQ questions, scoring (4-25 scale) | `market/chronotype-onboarding-research.md` §1 |
| Exact uMCTQ questions (6 questions, MSFsc formula) | `market/chronotype-onboarding-research.md` §2 |
| How Oura, RISE, BetterSleep, Breus do onboarding | `market/chronotype-onboarding-research.md` §3 |
| Gamified questionnaire UX patterns (Noom, RISE, Calm, Hinge) | `market/chronotype-onboarding-research.md` §5 |
| Progressive disclosure timeline (Day 0 → Day 21) | `market/chronotype-onboarding-research.md` §6 |
| Passive detection: what data, what permissions, iOS vs Android | `market/chronotype-onboarding-research.md` §4 |
| Onboarding screen count benchmarks (Noom: 96, RISE: 47) | `market/chronotype-onboarding-research.md` §5 |
| User personas (who's onboarding) | `strategy/user-persona.md` |
| 10 user type journeys (first 24 hours for each audience type) | `audience/user-type-journeys.md` |
| Complete feature list (107 features, each tied to user type) | `concepts/complete-feature-list.md` |
| **FINAL feature list (70 launch, 108 unique, definitive build doc)** | **`concepts/final-feature-list.md`** |
| Cognitive load framework (zero-load UX, progressive disclosure) | `concepts/cognitive-load-framework.md` |
| Conversion & retention playbook (Day 0→Year 2) | `concepts/conversion-and-retention-playbook.md` |
| Viral sharing system (12 artifacts, organic growth engine) | `concepts/viral-sharing-system.md` |
| Target audience behavioral patterns (what they actually DO) | `audience/behavioral-patterns.md` |
| 10 segment sizing with real numbers (150-200M addressable) | `audience/10-segment-sizing-with-real-numbers.md` |

### Alarm System
| What You Need | Where It Lives |
|---------------|---------------|
| Why alarm missions work (94.2% success vs 75.8% control) | `market/neuroscience-of-mornings.md` §1 (sleep inertia) |
| Sleep inertia duration (15-70 min, prefrontal offline) | `market/neuroscience-of-mornings.md` §1 |
| Snoozing science (Sundelin 2024 — not as harmful as claimed) | `market/neuroscience-of-mornings.md` §3 |
| Anti-uninstall during alarm (technical prevention dead since Android 12) | `validation/stress-test-uninstall-and-first-1000-users.md` §A |
| Alarmy competitor analysis (missions, pricing, revenue) | `competitors/alarm-morning-apps.md`, `competitors/alarmy-deep-metrics.md` |
| Chronotype should affect alarm difficulty (night owl at 6 AM = harder) | `market/chronotype-deep-research.md` §4B (26.2% variation for late types) |
| Technical architecture for native alarm module | `concepts/technical-architecture.md` |

### Shift Your Clock (14-Day Program)
| What You Need | Where It Lives |
|---------------|---------------|
| Complete feature design (4 phases, 5 zeitgebers, safety, copy) | `concepts/feature-shift-your-clock.md` |
| Burgess combined protocol (exact parameters, results) | `market/chronotype-shifting-protocol-research.md` §1 |
| Light therapy specifics (lux, duration, wavelength, PRC) | `market/chronotype-shifting-protocol-research.md` §2 |
| Phone screen lux (~110 melanopic — NOT enough for therapy) | `market/chronotype-shifting-protocol-research.md` §2 |
| Melatonin timing (0.5mg, 5-6h before bed, regulatory by country) | `market/chronotype-shifting-protocol-research.md` §4 |
| Meal timing as zeitgeber (5.69h glucose delay from late meals) | `market/chronotype-shifting-protocol-research.md` §5 |
| Exercise PRC (7 AM and 1-4 PM = advance windows) | `market/chronotype-shifting-protocol-research.md` §6 |
| Warm shower (40-42°C, 90 min before bed, 36% faster sleep onset) | `market/chronotype-shifting-protocol-research.md` §7 |
| Evening light reduction (dim to <50 lux, 2h before bed) | `market/chronotype-shifting-protocol-research.md` §8 |
| Relapse data (1-2 weeks without maintenance) | `market/chronotype-shifting-protocol-research.md` §9 |
| Safety: bipolar, eye conditions, pregnancy, >3h shift | `market/chronotype-shifting-protocol-research.md` §11 |
| Synthesized 14-day protocol (day-by-day) | `market/chronotype-shifting-protocol-research.md` §13 |
| How this connects to every other feature | This was explained in conversation (Apr 8) — also in `concepts/feature-shift-your-clock.md` |

### Life Score
| What You Need | Where It Lives |
|---------------|---------------|
| Complete feature design (weights, bands, copy, anti-gaming) | `concepts/feature-life-score.md` |
| FICO, Oura, WHOOP, Apple Rings, Duolingo scoring analysis | `market/life-score-design-research.md` §1 |
| Psychology of scoring (loss aversion, endowment, Zeigarnik) | `market/life-score-design-research.md` §2 |
| Weighting system design (fixed vs adaptive, time decay) | `market/life-score-design-research.md` §3 |
| Score-to-behavior feedback loops | `market/life-score-design-research.md` §4 |
| Widget design and engagement data (80-150 unlocks/day) | `market/life-score-design-research.md` §5 |
| Anti-patterns (what NOT to do) | `market/life-score-design-research.md` §6 |
| Social jet lag scoring bands (Roenneberg thresholds) | `market/chronotype-deep-research.md` §6 |

### Night Mode (Bedtime Enforcement)
| What You Need | Where It Lives |
|---------------|---------------|
| Phone use before bed = 31% higher cortisol at 90 min | `market/neuroscience-of-mornings.md` §5 |
| 1h phone use delays circadian rhythm 3.5 min | `market/chronotype-onboarding-research.md` §4 |
| Evening light reduction protocol | `market/chronotype-shifting-protocol-research.md` §8 |
| Warm shower timing (90 min before bed) | `market/chronotype-shifting-protocol-research.md` §7 |
| Bedtime enforcement connects to Shift Your Clock | `concepts/feature-shift-your-clock.md` |

### Dare Engine (Personality/Copy)
| What You Need | Where It Lives |
|---------------|---------------|
| Copy examples by Life Score band | `concepts/feature-life-score.md` §Dare Engine Copy |
| Copy for Shift Your Clock phases | `concepts/feature-shift-your-clock.md` §Dare Engine Copy |
| Pricing/paywall copy (9 lifecycle moments) | `strategy/pricing-strategy.md` |
| Personality raises retention 12%→55% (Duolingo data) | `PROJECT_STATE.md` §Key Data Points |
| CARROT Weather — personality as moat case study | `market/indie-apps-making-millions.md` |
| Variable rewards beat fixed (Schultz 1997) | `market/neuroscience-habit-formation-deep-research.md` §5 |

### Streak System
| What You Need | Where It Lives |
|---------------|---------------|
| Streak scoring curve (logarithmic, caps at 67 days) | `concepts/feature-life-score.md` §Streak Factor |
| 7-day streak = 3.6x retention (Duolingo) | `validation/stress-test-uninstall-and-first-1000-users.md` §A |
| 21% churn reduction from streak freeze (Duolingo) | `validation/stress-test-uninstall-and-first-1000-users.md` §A |
| Loss aversion: losses felt 2-2.5x more than gains (Kahneman) | `market/neuroscience-habit-formation-deep-research.md` §4 |
| 66-day habit formation (Lally, UCL) | `market/neuroscience-habit-formation-deep-research.md` §2 |
| Streak freeze pricing ($0.99/₹49, limit 2/month) | `strategy/pricing-strategy.md` |

### Morning Routine Actions
| What You Need | Where It Lives |
|---------------|---------------|
| Morning light science (within 30 min of waking) | `market/neuroscience-of-mornings.md` §4 |
| Cortisol Awakening Response (challenged by 2025 study) | `market/neuroscience-of-mornings.md` §2 |
| Exercise timing PRC | `market/chronotype-shifting-protocol-research.md` §6 |
| Meal timing as zeitgeber | `market/chronotype-shifting-protocol-research.md` §5 |
| First decision effect / decision fatigue | `market/neuroscience-of-mornings.md` §7 |
| Implementation intentions (if-then planning, 30%→90%) | `market/neuroscience-habit-formation-deep-research.md` §7 |

---

## When You're Building: THE BUSINESS

### Pricing & Monetization
| What You Need | Where It Lives |
|---------------|---------------|
| Full pricing strategy (tiers, trials, IAP, competitive) | `strategy/pricing-strategy.md` |
| Hard paywall conversion: 10.7% vs freemium 2.1% | `validation/stress-test-chronotype-revenue.md` |
| H&F trial-to-paid: 35% | `validation/stress-test-chronotype-revenue.md` |
| H&F first-renewal: 30.3% (70% churn — the category killer) | `validation/stress-test-chronotype-revenue.md` |
| India pricing should be ₹999-1,499, not ₹849 | `validation/stress-test-chronotype-revenue.md` |
| RevenueCat implementation (products, offerings, entitlements) | `strategy/pricing-strategy.md` |
| 6 pricing experiments for first 90 days | `strategy/pricing-strategy.md` |
| Alarmy's real subscription revenue: ~$6M (not $24M) | `validation/stress-test-chronotype-revenue.md` |

### Purchase Triggers, Barriers & Conversion Psychology
| What You Need | Where It Lives |
|---------------|---------------|
| Purchase triggers (7 categories: NYR, life events, rock bottom, social proof, trial expiry, seasonal, DST) | `audience/purchase-triggers-and-barriers.md` §1 |
| January spike: +34-46% downloads, $385M IAP (all-time high) | `audience/purchase-triggers-and-barriers.md` §1A |
| Resolutioner churn: 77% gone by D1, only 3-10% remain at D30 | `audience/purchase-triggers-and-barriers.md` §1A |
| Life event trigger: 75% more likely to try new products | `audience/purchase-triggers-and-barriers.md` §1B |
| 82% of trial starts happen on Day 0 (RevenueCat 2026) | `audience/purchase-triggers-and-barriers.md` §4A |
| 55% of trial cancellations happen on Day 0 | `audience/purchase-triggers-and-barriers.md` §4A |
| Purchase barriers (7 categories: free alternative, sub fatigue, skepticism, privacy, price, self-reliance, reviews) | `audience/purchase-triggers-and-barriers.md` §2 |
| Cancellation reasons: low usage 37-40%, too expensive 34-35%, billing 28%, alternatives 9-15% | `audience/purchase-triggers-and-barriers.md` §5A |
| Success paradox (Tinder retention paradox applied to habit apps) | `audience/purchase-triggers-and-barriers.md` §5B |
| Trial length: 17+ day trials convert 70% better than ≤4 days | `audience/purchase-triggers-and-barriers.md` §3F |
| Seasonal calendar: peak Jan, secondary spring, trough summer | `audience/purchase-triggers-and-barriers.md` §7 |
| Enforcement WTP > Coaching > Tracking > Content | `audience/purchase-triggers-and-barriers.md` §3B |
| Monthly conversion/download calendar with strategy | `audience/purchase-triggers-and-barriers.md` §7E |
| Renewal rates: H&F worst at 30.3%, top quartile 45% | `audience/purchase-triggers-and-barriers.md` §6A |
| Month 1 cliff: 30% of annual subscribers cancel in M1 | `audience/purchase-triggers-and-barriers.md` §6D |

### Financial Model
| What You Need | Where It Lives |
|---------------|---------------|
| 3-year projections (base, pessimistic, optimistic) | `strategy/financial-model.md` |
| Unit economics (LTV $49, CAC target <$5) | `strategy/financial-model.md` |
| Cost structure ($15K Year 1, 98.6% margin) | `strategy/financial-model.md` |
| Break-even analysis (Month 6-8 base case) | `strategy/financial-model.md` |
| Year 1 moderate scenario: $400K ARR | `validation/stress-test-chronotype-revenue.md` |

### Business Model
| What You Need | Where It Lives |
|---------------|---------------|
| Business model canvas (9 building blocks) | `strategy/business-model-canvas.md` |
| Vision and mission | `strategy/vision.md` |
| Competitive positioning statement | `strategy/vision.md` |
| North Star Metric: Daily Active Streakers (DAS) | `strategy/vision.md` |
| Supporting metrics and targets | `strategy/vision.md` |

---

## When You're Building: MARKETING

### Social Jet Lag Marketing
| What You Need | Where It Lives |
|---------------|---------------|
| Full marketing strategy (3 layers, hooks, calendar) | `concepts/marketing-social-jet-lag.md` |
| Social jet lag awareness data (low-to-emerging) | `market/social-jet-lag-marketing-research.md` |
| RISE playbook ($650K/month from "sleep debt") | `market/social-jet-lag-marketing-research.md` |
| TikTok hook library (12 hooks) | `concepts/marketing-social-jet-lag.md` |
| Free web tool spec (SJL Calculator) | `concepts/marketing-social-jet-lag.md` |
| Pre-launch content calendar (12 weeks) | `concepts/marketing-social-jet-lag.md` |
| Fear vs aspiration research | `market/social-jet-lag-marketing-research.md` |

### Voice of Customer & Copy Language
| What You Need | Where It Lives |
|---------------|---------------|
| Exact phrases users say about nighttime scrolling/procrastination | `audience/language-and-voice.md` §1 |
| Exact phrases users say about snoozing/morning struggles | `audience/language-and-voice.md` §2 |
| Exact phrases about failed alarm apps and solutions | `audience/language-and-voice.md` §3 |
| App Store, Google, Reddit, YouTube, TikTok search terms | `audience/language-and-voice.md` §4 |
| Emotional language map (self-blame, desperation, hope, frustration) | `audience/language-and-voice.md` §5 |
| Scientific terms vs user language (vocabulary gap) | `audience/language-and-voice.md` §6 |
| Marketing one-liners that would resonate | `audience/language-and-voice.md` §7 |
| Language patterns by platform (Reddit, Quora, TikTok, app reviews) | `audience/language-and-voice.md` §8 |
| ASO keyword priorities, title/subtitle options, onboarding copy | `audience/language-and-voice.md` §9 |
| Dare Engine copy mapped to user language patterns | `audience/language-and-voice.md` §9 |
| Push notification copy (night and morning) | `audience/language-and-voice.md` §9 |

### User Acquisition
| What You Need | Where It Lives |
|---------------|---------------|
| Organic acquisition channels + Year 1 projections | `market/organic-acquisition-stress-test.md` |
| ASO keyword strategy and timeline | `market/organic-acquisition-stress-test.md` |
| Reddit subreddit targets (9.4M addressable, all subs with sizes) | `audience/where-they-live-online.md` §1 |
| TikTok hashtag performance (#nightroutine 11.4B views, #socialjetlag unclaimed) | `audience/where-they-live-online.md` §2 |
| YouTube creators reaching this audience (Huberman 7.33M, Ali Abdaal 5.99M) | `audience/where-they-live-online.md` §3 |
| Podcasts reaching this audience (Huberman, Mel Robbins, Jay Shetty) | `audience/where-they-live-online.md` §4 |
| Content consumption timing patterns (peak doomscrolling 11PM-2AM) | `audience/where-they-live-online.md` §7 |
| Platform conversion rates (Instagram 18%, TikTok 2.3%, App Store 25%) | `audience/where-they-live-online.md` §7 |
| First-mover opportunities (#socialjetlag, chronotype quiz, ADHD+sleep) | `audience/where-they-live-online.md` §9 |
| Micro-influencer math ($8K → 10-20K downloads) | `validation/stress-test-uninstall-and-first-1000-users.md` §B |
| ProductHunt launch expectations (500-2,000 installs) | `market/organic-acquisition-stress-test.md` |
| **Hard channel numbers: CPI, CPA, ROAS, search volumes, hashtag views, subreddit sizes** | `market/marketing-channel-numbers-hard-data.md` |
| Per-channel monthly reachable audience + realistic install estimates | `market/marketing-channel-numbers-hard-data.md` §10 |
| Paid acquisition benchmarks (CPI by platform/region: US, India, UK, Japan, Germany) | `market/marketing-channel-numbers-hard-data.md` §8 |
| Apple Search Ads costs + subscription conversion funnel math | `market/marketing-channel-numbers-hard-data.md` §8 |
| TikTok hashtag view counts (#morningroutine 34B, #sleeptok, etc.) | `market/marketing-channel-numbers-hard-data.md` §2 |
| Reddit subreddit sizes (updated April 2026) + ad costs | `market/marketing-channel-numbers-hard-data.md` §3 |
| Instagram vs TikTok comparison for health content | `market/marketing-channel-numbers-hard-data.md` §7 |
| Alarmy competitor benchmark (82M downloads, 500K/mo, $500K/mo revenue) | `market/marketing-channel-numbers-hard-data.md` §1 |
| Original marketing playbook (TikTok, ASO, launch sequence) | `market/marketing-playbook.md` |
| Viral sharing system (12 artifacts, 2-tap flow, QR referral tracking) | `concepts/viral-sharing-system.md` |
| Shareable artifact designs (Chronotype Card, Streak Cards, Year in Review) | `concepts/viral-sharing-system.md` §1 |
| Platform-specific sharing formats (Instagram, WhatsApp, Twitter, LinkedIn) | `concepts/viral-sharing-system.md` §3 |
| Viral loops and referral mechanics (silent QR tracking) | `concepts/viral-sharing-system.md` §4-5 |

### Brand & Identity
| What You Need | Where It Lives |
|---------------|---------------|
| Localization strategy (10-12 languages) | `PROJECT_STATE.md` |
| Domain budget plan by startup phase | `market/domain-strategy-research-2026.md` §5 |

---

## When You're Building: THE SCIENCE

### Chronotype
| What You Need | Where It Lives |
|---------------|---------------|
| 5 chronotype subtypes (McGill 2025, Nature Comms) | `market/chronotype-deep-research.md` §1 |
| 6 chronotype model (Russian study) | `market/chronotype-deep-research.md` §1 |
| Breus 4-animal model (pop science assessment) | `market/chronotype-deep-research.md` §2 |
| MEQ/MCTQ questionnaires | `market/chronotype-deep-research.md` §3, `market/chronotype-onboarding-research.md` §1-2 |
| Passive detection (89% accuracy, phone data) | `market/chronotype-deep-research.md` §3, `market/chronotype-onboarding-research.md` §4 |
| Chronotype effects (exercise, cognition, meals, mood) | `market/chronotype-deep-research.md` §4 |
| Lifespan shifts (peak evening at 19.5F/20.9M) | `market/chronotype-deep-research.md` §5 |
| Social jet lag prevalence and health data | `market/chronotype-deep-research.md` §6 |
| Shifting protocols and limits (max 1.8-2.4h) | `market/chronotype-deep-research.md` §7, `market/chronotype-shifting-protocol-research.md` |
| Existing app gap analysis | `market/chronotype-deep-research.md` §8 |

### Habit Formation & Behavior Change
| What You Need | Where It Lives |
|---------------|---------------|
| Habit loop (Duhigg + Wendy Wood updates) | `market/neuroscience-habit-formation-deep-research.md` §1 |
| Why habits fail (66-day timeline, dopamine crash) | `market/neuroscience-habit-formation-deep-research.md` §2 |
| Loss aversion vs reward (Kahneman, 5:1 ratio) | `market/neuroscience-habit-formation-deep-research.md` §4 |
| Gamification psychology (SDT, overjustification) | `market/neuroscience-habit-formation-deep-research.md` §5 |
| Social accountability (goal announcement reduces follow-through) | `market/neuroscience-habit-formation-deep-research.md` §6 |
| Implementation intentions (if-then, 30%→90%) | `market/neuroscience-habit-formation-deep-research.md` §7 |
| Identity-based habits (James Clear, mPFC neuroscience) | `market/neuroscience-habit-formation-deep-research.md` §8 |
| Commitment devices (stickK: 78% vs 35%) | `market/neuroscience-habit-formation-deep-research.md` §9 |
| 12+ behavior change frameworks (Fogg, Hook, COM-B, etc.) | `market/behavior-change-frameworks-deep-research.md` |
| Temporal discounting (why "snooze now" beats "better morning") | `market/behavior-change-frameworks-deep-research.md` |
| Debunked myths to avoid (ego depletion, 21-day myth, etc.) | `market/neuroscience-habit-formation-deep-research.md` §Debunked Myths |

### Morning Neuroscience
| What You Need | Where It Lives |
|---------------|---------------|
| Sleep inertia (15-70 min, no countermeasure works in first 15) | `market/neuroscience-of-mornings.md` §1 |
| Cortisol Awakening Response (challenged 2025) | `market/neuroscience-of-mornings.md` §2 |
| Snoozing (not as harmful — Sundelin 2024) | `market/neuroscience-of-mornings.md` §3 |
| Light exposure and circadian rhythm | `market/neuroscience-of-mornings.md` §4 |
| Phone use after waking (31% higher cortisol) | `market/neuroscience-of-mornings.md` §5 |
| Cold exposure (norepinephrine, no direct PRC data) | `market/neuroscience-of-mornings.md` §6 |
| Consistent wake time > sleep duration | `market/neuroscience-of-mornings.md` §8 |
| Chronotype and motivation by time of day | `market/neuroscience-of-mornings.md` §10-11 |
| Becoming a morning person (evidence-based) | `market/neuroscience-of-mornings.md` §12 |

---

## When You're Building: COMPETITORS

| Competitor | Where Analysis Lives |
|-----------|---------------------|
| Alarmy (16 alarm/morning apps) | `competitors/alarm-morning-apps.md` |
| Alarmy deep metrics (~$6M subs, ~$15-22M total with ads, 34 people) | `competitors/alarmy-deep-metrics.md` |
| Sleep apps (10+ apps, market sizing) | `competitors/sleep-apps.md` |
| Procrastination/focus apps (10 competitors) | `competitors/procrastination-focus-apps.md` |
| RISE deep-dive (closest competitor, $7.8M ARR, enforcement gap) | `competitors/rise-deep-dive.md` |
| Full competitive landscape | `competitors/competitive-landscape-deep-dive.md` |
| Indie apps making millions (15 case studies) | `market/indie-apps-making-millions.md` |
| High-intent search niches (15 niches) | `notes/archived/high-intent-search-niches.md` *(idea-phase, archived)* |
| Hidden profitable niches | `notes/archived/hidden-profitable-niches.md` *(idea-phase, archived)* |

---

## When You're Building: USER PSYCHOLOGY

### Psychographic Profiles
| What You Need | Where It Lives |
|---------------|---------------|
| 4 identity narratives (Identity Shield, Self-Blame, Pathologizing, Exhausted Veteran) | `audience/psychographic-profiles.md` §1 |
| Belief systems (5 AM Club impact, chronotype awareness gap, self-efficacy) | `audience/psychographic-profiles.md` §2 |
| Emotional landscape mapped across 24-hour cycle | `audience/psychographic-profiles.md` §3 |
| Shame spiral detailed map | `audience/psychographic-profiles.md` §3.2 |
| Motivation style ranking (loss aversion > chosen constraint > competitive identity) | `audience/psychographic-profiles.md` §4 |
| The Autonomy Paradox ("want to be forced but hate feeling forced") | `audience/psychographic-profiles.md` §4.3 |
| Values & aspirations (Control 40%, Guilt-freedom 25%, Performance 20%, Image 10%, Health 5%) | `audience/psychographic-profiles.md` §5 |
| Phone paradox (problem = solution) | `audience/psychographic-profiles.md` §6 |
| Enforcement app fatigue cycle (5 phases) | `audience/psychographic-profiles.md` §6.2 |
| ADHD overlap data (80% sleep disorders, 73-78% delayed circadian, 36% DSPD) | `audience/psychographic-profiles.md` §7 |
| ADHD-specific psychographic changes (time blindness, dopamine-seeking, extra shame) | `audience/psychographic-profiles.md` §7.2 |
| 4 synthesized psychographic segments with triggers | `audience/psychographic-profiles.md` §8 |
| Dare Engine tone calibration matrix by situation | `audience/psychographic-profiles.md` §9.1 |
| Revelation Sequence (onboarding emotional arc) | `audience/psychographic-profiles.md` §9.2 |
| Language to USE vs AVOID | `audience/psychographic-profiles.md` §9.3 |
| RBP prevalence: 51% Americans delay sleep for control, Gen Z 4 nights/week | `audience/psychographic-profiles.md` §3.1 |
| ChatGPT "be mean to me" trend validating tough love appetite | `audience/psychographic-profiles.md` §4.1 |

## When You're Building: AUDIENCE

| What You Need | Where It Lives |
|---------------|---------------|
| Identity anchor (who we are, what we solve, why now) | `audience/identity-anchor.md` |
| Demographics & market sizing (age, gender, geography, 80-120M addressable) | `audience/demographics-and-sizing.md` |
| **10 audience segments with real numbers** (population, search volume, reachability per segment) | `audience/10-segment-sizing-with-real-numbers.md` |
| Psychographic profiles (4 identity narratives, ADHD overlap, autonomy paradox) | `audience/psychographic-profiles.md` |
| Behavioral patterns (nighttime doom-scrolling, morning snoozing, seasonal) | `audience/behavioral-patterns.md` |
| Where they live online (Reddit subs, TikTok hashtags, YouTube, podcasts) | `audience/where-they-live-online.md` |
| Language & voice (exact user phrases, search terms, vocabulary gap) | `audience/language-and-voice.md` |
| Failed solutions map (18 solutions mapped with failure modes) | `audience/failed-solutions-map.md` |
| Purchase triggers & barriers (Day 0 conversion, churn, seasonality) | `audience/purchase-triggers-and-barriers.md` |
| Audience research index | `audience/README.md` |

---

## When You're Building: VALIDATION

| Validation Area | Where It Lives |
|----------------|---------------|
| Target audience behavioral patterns (nighttime, morning, app usage, seasonal, social) | `audience/behavioral-patterns.md` |
| User pain points (real Reddit/forum quotes) | `validation/user-pain-points.md` |
| Willingness to pay (pricing, ARPU, conversion) | `validation/willingness-to-pay.md` |
| **Full conversion funnel benchmarks (impression→install→open→onboard→trial→paid→retain)** | `validation/conversion-funnel-benchmarks.md` |
| Funnel: App Store CVR, search vs browse, video preview impact | `validation/conversion-funnel-benchmarks.md` §1 |
| Funnel: Install→open rates, D0/D1/D30 retention | `validation/conversion-funnel-benchmarks.md` §2 |
| Funnel: Onboarding completion rates, quiz drop-off by step | `validation/conversion-funnel-benchmarks.md` §3 |
| Funnel: Hard paywall trial start rates, paywall timing | `validation/conversion-funnel-benchmarks.md` §4 |
| Funnel: 7-day trial→paid (H&F benchmarks, day-by-day cancellation) | `validation/conversion-funnel-benchmarks.md` §5 |
| Funnel: Annual renewal rates, churn curves, Month 1 churn | `validation/conversion-funnel-benchmarks.md` §6 |
| Funnel: LTV by platform, region, plan type (iOS vs Android) | `validation/conversion-funnel-benchmarks.md` §7 |
| Funnel: US vs India vs UK conversion & pricing elasticity | `validation/conversion-funnel-benchmarks.md` §8 |
| Funnel: Segment-specific conversion (Alarm Seekers, ADHD, Optimizers, etc.) | `validation/conversion-funnel-benchmarks.md` §9 |
| Funnel: Realistic Year 1 scenario (organic, solo dev, $0 paid) | `validation/conversion-funnel-benchmarks.md` §10 |
| Concept validation (personality, FOMO, gamification) | `validation/concept-validation.md` |
| MVP feature prioritization | `validation/mvp-features.md` |
| Revenue model stress test | `validation/stress-test-chronotype-revenue.md` |
| Uninstall problem + first 1,000 users | `validation/stress-test-uninstall-and-first-1000-users.md` |
| Organic acquisition stress test | `market/organic-acquisition-stress-test.md` |
| Long-term retention stress test (3-era strategy, habituation) | `validation/stress-test-long-term-retention.md` |
| App Store + regulatory risks (AlarmKit, GDPR, melatonin) | `validation/stress-test-appstore-regulatory-risks.md` |
| Failed solutions map (18 solutions, why each fails, how we address) | `audience/failed-solutions-map.md` |

---

## When You're Building: RETENTION (Long-Term)

| What You Need | Where It Lives |
|---------------|---------------|
| H&F retention benchmarks (D30-D365) | `validation/stress-test-long-term-retention.md` + `validation/conversion-funnel-benchmarks.md` §6 |
| 3-era retention strategy (Enforcement → Insight → Identity) | `validation/stress-test-long-term-retention.md` |
| Gamification novelty decay (dips week 4-6, U-shaped) | `validation/stress-test-long-term-retention.md` |
| Duolingo long-term mechanics (leagues, streaks, resurrection) | `validation/stress-test-long-term-retention.md` |
| "Mission accomplished" problem and defenses | `validation/stress-test-long-term-retention.md` |
| Personality fatigue (CARROT Weather: hook not net) | `validation/stress-test-long-term-retention.md` |
| Re-engagement / lapsed user strategies | `validation/stress-test-long-term-retention.md` |
| Anti-uninstall psychology (10-point strategy) | `validation/stress-test-uninstall-and-first-1000-users.md` |
| **Conversion & retention playbook (Day 0→Year 2, definitive)** | **`concepts/conversion-and-retention-playbook.md`** |
| Day-by-day invisible conversion (7 switching costs, no dark patterns) | `concepts/conversion-and-retention-playbook.md` §A-B |
| Paywall screen architecture (wireframe, data-driven copy) | `concepts/conversion-and-retention-playbook.md` §C |
| Day 0 safety-cancel mitigation (55% cancel Day 0) | `concepts/conversion-and-retention-playbook.md` §D |
| Month 1 survival plan (Day 8-30, anti-buyer's remorse) | `concepts/conversion-and-retention-playbook.md` §F |
| Month 6 identity lock + Month 12 renewal (Year in Review) | `concepts/conversion-and-retention-playbook.md` §H-I |
| Anti-churn triggers (6 signals + responses in all 3 Dare tones) | `concepts/conversion-and-retention-playbook.md` §K |
| Emotional arc Day 0→Day 365 (11 milestones with copy) | `concepts/conversion-and-retention-playbook.md` §L |
| Cognitive load framework (zero-load UX, every screen audited) | `concepts/cognitive-load-framework.md` |
| Progressive disclosure timeline (5 features Day 1 → 70 by Month 2) | `concepts/cognitive-load-framework.md` §2 |
| Screen-by-screen cognitive load budget | `concepts/cognitive-load-framework.md` §11 |

---

## When You're Building: ROLES & ORGANIZATION

| What You Need | Where It Lives |
|---------------|---------------|
| 217 AI agent roster (all roles, all levels, all departments) | `strategy/roles-hierarchy.md` |
| Commander's interface (how to invoke, chain, parallelize agents) | `strategy/roles-hierarchy.md` §Commander's Interface |
| Multi-agent workflow chains (feature dev, content, launch, pricing, bug fix) | `strategy/roles-hierarchy.md` §Workflow Chains |
| Stage priorities (which agents matter pre-launch, launch, scale) | `strategy/roles-hierarchy.md` §How the Commander Uses This |

---

## When You're Building: LEGAL / COMPLIANCE

| What You Need | Where It Lives |
|---------------|---------------|
| AlarmKit (iOS 26) — system-level alarm for third-party apps | `validation/stress-test-appstore-regulatory-risks.md` |
| Apple App Review guidelines (2.5.4, 3.1, 4.2, 5.1) | `validation/stress-test-appstore-regulatory-risks.md` |
| Google Play health app policies | `validation/stress-test-appstore-regulatory-risks.md` |
| GDPR Article 9 — sleep/chronotype = special category health data | `validation/stress-test-appstore-regulatory-risks.md` |
| India DPDPA compliance | `validation/stress-test-appstore-regulatory-risks.md` |
| Melatonin geo-fencing (prescription in India, UK, Denmark, CZ, Norway) | `validation/stress-test-appstore-regulatory-risks.md` |
| FDA January 2026 wellness guidance | `validation/stress-test-appstore-regulatory-risks.md` |
| Health claims framing ("behavioral" not "clinical") | `validation/stress-test-appstore-regulatory-risks.md` |
| iOS background processing limitations (passive detection impossible) | `validation/stress-test-appstore-regulatory-risks.md` |
| Critical Alerts entitlement process | `validation/stress-test-appstore-regulatory-risks.md` |
| Pre-launch legal review estimate ($2-5K) | `validation/stress-test-appstore-regulatory-risks.md` |

---

## When You're Building: DESIGN & VISUAL IDENTITY

| What You Need | Where It Lives |
|---------------|---------------|
| **Complete design signature research (30+ sources)** | **`concepts/design-signature-research.md`** |
| What a design signature is, minimum elements needed (3) | `concepts/design-signature-research.md` §1 |
| Case studies: Duolingo, Spotify, Oura, RISE, Calm, Linear, Strava, Cash App, Alarmy | `concepts/design-signature-research.md` §2 |
| Building blocks: color, shape, motion, typography, illustration, sound/haptic | `concepts/design-signature-research.md` §3 |
| Design morphisms comparison (glassmorphism, neubrutalism, neumorphism, flat, skeuomorphism) | `concepts/design-signature-research.md` §4 |
| Recommended morphism for SnoozeWar (neubrutalism-influenced dark) | `concepts/design-signature-research.md` §4F |
| Cross-platform consistency (design tokens, what must stay consistent) | `concepts/design-signature-research.md` §5 |
| Design failures and common mistakes (Tropicana $30M loss, Gap revert) | `concepts/design-signature-research.md` §6 |
| Dark mode signature strategies (base colors, accent strategies, glow techniques) | `concepts/design-signature-research.md` §7 |
| 2026 dark mode color codes (exact hex values for base, surface, text) | `concepts/design-signature-research.md` §7A |
| Competitor visual landscape analysis (7 apps mapped) | `concepts/design-signature-research.md` §8A |
| Unclaimed visual territory in alarm/sleep category (7 opportunities) | `concepts/design-signature-research.md` §8B |
| SnoozeWar design signature recommendation (8 elements) | `concepts/design-signature-research.md` §8C-8D |
| Skeuomorphism comeback via Apple Liquid Glass (WWDC 2025) | `concepts/design-signature-research.md` §4E |
| Sonic branding / haptic design for apps | `concepts/design-signature-research.md` §3F |
| Custom typeface examples and costs ($10K-$50K+) | `concepts/design-signature-research.md` §3D |
| **Design morphisms deep dive (all 11 morphisms, comparison matrix)** | **`concepts/design-morphisms-and-interaction-patterns.md`** §1-12 |
| Glassmorphism best practices (NN/g), dark glassmorphism | `concepts/design-morphisms-and-interaction-patterns.md` §1 |
| Neubrutalism best practices (NN/g), when to use/avoid | `concepts/design-morphisms-and-interaction-patterns.md` §2 |
| Neumorphism current status (niche/declining), dark mode problems | `concepts/design-morphisms-and-interaction-patterns.md` §3 |
| Claymorphism (friendly/casual, NOT for enforcement apps) | `concepts/design-morphisms-and-interaction-patterns.md` §4 |
| Apple Liquid Glass deep dive (criticism, NN/g findings, adoption) | `concepts/design-morphisms-and-interaction-patterns.md` §5, §10 |
| Aurora/mesh gradients (ambient dark backgrounds) | `concepts/design-morphisms-and-interaction-patterns.md` §6 |
| Bento box layouts (dashboard, performance data) | `concepts/design-morphisms-and-interaction-patterns.md` §7 |
| Spatial design / depth / parallax | `concepts/design-morphisms-and-interaction-patterns.md` §8 |
| Dark mode morphism best practices (4 rules, elevation, tokens) | `concepts/design-morphisms-and-interaction-patterns.md` §9 |
| Emerging/hybrid morphisms 2025-2026 | `concepts/design-morphisms-and-interaction-patterns.md` §11 |
| Morphism comparison matrix (10 styles rated for SnoozeWar) | `concepts/design-morphisms-and-interaction-patterns.md` §12 |
| **Premium dark mode color palette research (11 apps audited, HSL guidelines)** | **`concepts/color-palette-premium-research.md`** |
| Exact accent hex values from Linear, Spotify, Strava, Vercel, Raycast, Arc, Calm, Notion | `concepts/color-palette-premium-research.md` §1 |
| Premium vs cheap accent color HSL ranges (saturation 45-75%, lightness 45-62%) | `concepts/color-palette-premium-research.md` §2 |
| Why #FF6B35 reads as cheap on dark (100% saturation = traffic cone problem) | `concepts/color-palette-premium-research.md` §2 |
| Button text color rule: white on accent, NEVER black (11/11 premium apps) | `concepts/color-palette-premium-research.md` §3 |
| Premium button hierarchy in dark mode (filled/ghost/text/destructive) | `concepts/color-palette-premium-research.md` §3 |
| Orange comparison: Strava, Reddit, HN, Firefox vs SnoozeWar (we are brightest) | `concepts/color-palette-premium-research.md` §4 |
| 3 palette options: Refined Amber, Cool Indigo, Dual Accent (with exact hex) | `concepts/color-palette-premium-research.md` §5 |
| Recommended fix: #E09145 accent + white button text | `concepts/color-palette-premium-research.md` §6 |
| **Interactive vs informational UI elements (affordance, buttons, data viz)** | **`concepts/design-morphisms-and-interaction-patterns.md`** §13-16 |
| Touch target sizes (Apple HIG, Material Design, WCAG, position-dependent) | `concepts/design-morphisms-and-interaction-patterns.md` §13B |
| Fill vs ghost button conversion data (7-20% difference) | `concepts/design-morphisms-and-interaction-patterns.md` §13D |
| Haptic feedback patterns (iOS/Android APIs, premium hierarchy) | `concepts/design-morphisms-and-interaction-patterns.md` §13F |
| Button press animations (premium patterns, timing, engagement data) | `concepts/design-morphisms-and-interaction-patterns.md` §13G |
| Score/number display design (animated counters, typography, color bands) | `concepts/design-morphisms-and-interaction-patterns.md` §14A |
| Data visualization in dark mode (chart palettes, contrast, KPI display) | `concepts/design-morphisms-and-interaction-patterns.md` §14B |
| Typography hierarchy for dark mode (6-level scale with sizes) | `concepts/design-morphisms-and-interaction-patterns.md` §14C |
| Card design system (5 card types for dark mode) | `concepts/design-morphisms-and-interaction-patterns.md` §14D |
| Interactive vs informational distinction (visual property matrix) | `concepts/design-morphisms-and-interaction-patterns.md` §15A |
| Common UI confusion mistakes (false affordances, ghost button problems) | `concepts/design-morphisms-and-interaction-patterns.md` §15C |
| Interaction spectrum (5 levels from static to primary action) | `concepts/design-morphisms-and-interaction-patterns.md` §15E |
| SnoozeWar interaction system (element-by-element spec) | `concepts/design-morphisms-and-interaction-patterns.md` §16A-B |
| SnoozeWar z-layer architecture (8 layers, back to front) | `concepts/design-morphisms-and-interaction-patterns.md` §16C |
| Design token starter system (surfaces, text, interactive, animation, haptic) | `concepts/design-morphisms-and-interaction-patterns.md` §16D |

---

## When You're Building: TECHNICAL

| Technical Area | Where It Lives |
|---------------|---------------|
| System architecture (APIs, DB schemas, folder structure) | `concepts/technical-architecture.md` |
| Tech stack decision (Expo dev client + RN + Node + MongoDB) | `PROJECT_STATE.md` §Decisions |
| iOS vs Android passive detection capabilities | `market/chronotype-onboarding-research.md` §4 |
| Google Sleep API, HealthKit specifics | `market/chronotype-onboarding-research.md` §4 |
| Battery impact of passive monitoring (<1%) | `market/chronotype-onboarding-research.md` §4 |
| Privacy architecture (on-device processing) | `market/chronotype-onboarding-research.md` §4 |
| Pre-dev playbook (130+ deliverables, 7 phases) | `PRE-DEV-PLAYBOOK.md` |

---

## When You're Building: MARKET DATA

| Data Point | Where It Lives |
|-----------|---------------|
| TAM/SAM/SOM | `market/tam-sam-som.md` |
| Market sizing (alarm, sleep, habit) | `market/alarm-sleep-app-market-size.md`, `market/MARKET-ANALYSIS-MASTER.md` |
| Habit tracking market (2025-2026) | `market/habit-behavior-market-data-2025-2026.md` |
| Subscriber hard numbers | `market/subscriber-data-hard-numbers.md` |
| Behavior psychology market | `market/behavior-psychology.md` |
| **Target audience demographics** | `audience/demographics-and-sizing.md` |
| Age distribution (Gen Z worst, 18-35 sweet spot) | `audience/demographics-and-sizing.md` §1 |
| Gender split (55-60% female) | `audience/demographics-and-sizing.md` §2 |
| Geography (US #1, India #2, Japan #3) | `audience/demographics-and-sizing.md` §3 |
| Income & spending by generation | `audience/demographics-and-sizing.md` §4 |
| iOS vs Android by country | `audience/demographics-and-sizing.md` §5 |
| Occupational patterns (students & shift workers worst) | `audience/demographics-and-sizing.md` §7 |
| Composite target audience profile | `audience/demographics-and-sizing.md` §8 |

---

## Key Numbers Quick Reference

| Stat | Number | Source File |
|------|--------|------------|
| Social jet lag prevalence | 69-70% have >1h | `market/chronotype-deep-research.md` |
| 2h social jet lag health risk | 2x diabetes risk | `market/chronotype-deep-research.md` |
| Chronotype heritability | ~50% genetic, 351 variants | `market/chronotype-deep-research.md` |
| Max chronotype shift | 1.8-2.4 hours | `market/chronotype-shifting-protocol-research.md` |
| Passive phone detection accuracy | 89% | `market/chronotype-onboarding-research.md` |
| Sleep inertia duration | 15-70 minutes | `market/neuroscience-of-mornings.md` |
| Habit formation time | 66 days avg (18-254 range) | `market/neuroscience-habit-formation-deep-research.md` |
| Phone at wake → cortisol | 31% higher at 90 min | `market/neuroscience-of-mornings.md` |
| Warm shower → sleep onset | 36% faster | `market/chronotype-shifting-protocol-research.md` |
| 30 min bright light → phase advance | 1.1 hours | `market/chronotype-shifting-protocol-research.md` |
| Hard paywall conversion | 10.7% median | `validation/stress-test-chronotype-revenue.md` |
| H&F trial-to-paid | 35% | `validation/stress-test-chronotype-revenue.md` |
| H&F first-renewal | 30.3% (70% churn) | `validation/stress-test-chronotype-revenue.md` |
| Loss aversion ratio | 2-2.5x (Kahneman) | `market/neuroscience-habit-formation-deep-research.md` |
| 7-day streak retention | 3.6x (Duolingo) | `validation/stress-test-uninstall-and-first-1000-users.md` |
| Streak freeze churn reduction | 21% (Duolingo) | `validation/stress-test-uninstall-and-first-1000-users.md` |
| Alarmy real sub revenue | ~$6M/yr (not $24M) | `validation/stress-test-chronotype-revenue.md` |
| Year 1 organic installs (projected) | 6,700-25,000 | `market/organic-acquisition-stress-test.md` |
| Year 1 moderate ARR | $400K | `validation/stress-test-chronotype-revenue.md` |
| First-mover window | 12-18 months | `validation/stress-test-chronotype-revenue.md` |
| Personality retention lift | 12%→55% (Duolingo) | `PROJECT_STATE.md` |
| Ego depletion | DEBUNKED (36 labs) | `market/neuroscience-habit-formation-deep-research.md` |
| 21-day habit myth | DEBUNKED (Maxwell Maltz, 1960) | `market/neuroscience-habit-formation-deep-research.md` |
| Gamification novelty dip | Week 4-6 (U-shaped recovery) | `validation/stress-test-long-term-retention.md` |
| Annual subscriber cancel in Month 1 | 30%+ | `validation/stress-test-long-term-retention.md` |
| Our renewal target | 45% (vs 30.3% industry) | `validation/stress-test-long-term-retention.md` |
| AlarmKit | iOS 26, system-level third-party alarms | `validation/stress-test-appstore-regulatory-risks.md` |
| iOS passive screen detection | IMPOSSIBLE (must use alternatives) | `validation/stress-test-appstore-regulatory-risks.md` |
| Melatonin Rx countries | India, UK, Denmark, CZ, Norway | `validation/stress-test-appstore-regulatory-risks.md` |
| GDPR sleep data | Article 9 special category | `validation/stress-test-appstore-regulatory-risks.md` |
| Pre-launch legal cost | $2,000-$5,000 | `validation/stress-test-appstore-regulatory-risks.md` |
| Revenge bedtime procrastination (US) | 51% of Americans | `audience/demographics-and-sizing.md` |
| Bedtime procrastination gender skew | Women 2x more likely than men | `audience/demographics-and-sizing.md` |
| Gen Z subscription spending | $377/month (highest of any generation) | `audience/demographics-and-sizing.md` |
| Student social jet lag (>1h) | 65% of university students | `audience/demographics-and-sizing.md` |
| Gen Z lost sleep to social media | 93% (AASM survey) | `audience/demographics-and-sizing.md` |
| January download spike (vs H1 avg) | +34-46% | `market/purchase-triggers-barriers-research.md` |
| January 2025 IAP revenue (H&F) | $385M all-time high (+10% YoY) | `market/purchase-triggers-barriers-research.md` |
| Trial starts on Day 0 | 82% | `market/purchase-triggers-barriers-research.md` |
| Trial cancellations on Day 0 | 55% | `market/purchase-triggers-barriers-research.md` |
| Top cancellation reason: low usage | 37-40% | `market/purchase-triggers-barriers-research.md` |
| Top cancellation reason: too expensive | 34-35% | `market/purchase-triggers-barriers-research.md` |
| Life events → product trial likelihood | 75% more likely | `market/purchase-triggers-barriers-research.md` |
| Enforcement WTP vs Tracking | Enforcement highest, tracking lowest | `market/purchase-triggers-barriers-research.md` |
| 17+ day trials vs short trials | 70% better conversion | `market/purchase-triggers-barriers-research.md` |
| Annual subscribers profitability vs monthly | 2.4x more profitable | `market/purchase-triggers-barriers-research.md` |
| Women snooze more than men | 2.5 vs 2.3 presses; 11.5 vs 10.2 min | `audience/demographics-and-sizing.md` |
| US sleep app market size | $354.8M (2024) | `audience/demographics-and-sizing.md` |
| Target age sweet spot | 18-35 | `audience/demographics-and-sizing.md` |
| Target gender split | 55-60% female / 40-45% male | `audience/demographics-and-sizing.md` |
| Core addressable audience | 80-120M globally | `audience/demographics-and-sizing.md` |
| Alarmy total users / MAU | 75M / 4.5M | `audience/10-segment-sizing-with-real-numbers.md` |
| Global adult ADHD + sleep issues (18-35) | 20-40M | `audience/10-segment-sizing-with-real-numbers.md` |
| RBP prevalence in 18-35 (5 countries) | 175-215M | `audience/10-segment-sizing-with-real-numbers.md` |
| Oura subscribers / WHOOP revenue | 2M / $260M+ | `audience/10-segment-sizing-with-real-numbers.md` |
| Duolingo MAU / leaderboard lift | 128.3M / +40% | `audience/10-segment-sizing-with-real-numbers.md` |
| #ADHD TikTok views | 28B+ | `audience/10-segment-sizing-with-real-numbers.md` |
| Unique addressable audience (de-duplicated, 18-35, 5 countries) | 150-200M | `audience/10-segment-sizing-with-real-numbers.md` |

---

## When You're Building: THE SYSTEM (App Factory)

### Reusable Templates & Architecture
| What You Need | Where It Lives |
|---------------|---------------|
| Complete app factory blueprint (all 4 layers) | `system-design/app-factory-blueprint.md` |
| Expo app template structure | `system-design/app-factory-blueprint.md` §Layer 1 |
| Backend template structure (Express + MongoDB) | `system-design/app-factory-blueprint.md` §Layer 2 |
| Infrastructure template (Terraform + CI/CD) | `system-design/app-factory-blueprint.md` §Layer 3 |
| Shared services inventory (FCM, RevenueCat, Mixpanel, Sentry, SES) | `system-design/app-factory-blueprint.md` §Layer 4 |
| Learning roadmap (7 phases, sequenced) | `system-design/app-factory-blueprint.md` §Learning Roadmap |
| AI-first development workflow (6-step cycle) | `system-design/app-factory-blueprint.md` §AI-First Workflow |
| Template extraction process (post-SnoozeWar) | `system-design/app-factory-blueprint.md` §Template Extraction |
| Startup credits action items (AWS, MongoDB, GCP, Azure, etc.) | `system-design/app-factory-blueprint.md` §Startup Credits |
| Cost estimate per app ($22-90/mo post-credits) | `system-design/app-factory-blueprint.md` §Layer 3 |
| Deployment architecture diagram | `system-design/app-factory-blueprint.md` §Layer 3 |

---

## Session History & Decisions

All decisions, session logs, and current status: `PROJECT_STATE.md`

All cross-session memory: Stored in claude-mem MCP (searchable via `search` tool with project "app-research")

---

*This file is your map. The territory is in the files it points to. When in doubt, read the source file — this index tells you where to look, not what to do.*
