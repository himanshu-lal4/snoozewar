# SnoozeWar — Project Brief

> **One-liner:** "69% of people wake up in the wrong timezone. It's called social jet lag. We fix it."
>
> **snoozewar.com** | @snoozewar

---

## 1. The Problem

**2.5 billion people** live with social jet lag — a mismatch between their biological clock (chronotype) and their forced schedule. 69-70% of the population has more than 1 hour of mismatch. At 2+ hours, the risk of diabetes doubles.

The result is a daily cycle of failure:

- **Night:** "I'll go to bed early tonight" → revenge bedtime procrastination → 2 AM
- **Morning:** 10 alarms → snooze for an hour → phone scrolling in bed → rush and guilt
- **All day:** Self-blame ("I'm so lazy"), low energy, broken promises to themselves

**Why existing solutions fail:**
- **Alarmy** (75M users) forces you out of bed — but doesn't know your chronotype, doesn't help at night, and users learn to bypass it
- **Sleep trackers** (Sleep Cycle, Oura) tell you what happened — but don't enforce anything
- **Habit apps** (Fabulous, Routinery) assume willpower exists at 6 AM — neuroscience says it doesn't (sleep inertia disables the prefrontal cortex for 15-70 minutes)
- **Wellness apps** (Calm, Headspace) encourage — but encouragement doesn't work when your limbic system is running the show

**Nobody owns the full cycle:** Night enforcement → Wake enforcement → Morning ownership → Long-term chronotype alignment. That's the gap.

---

## 2. The Solution

A mobile app that **detects your chronotype**, shows you why your schedule has been so hard to keep, and **enforces** consistent habit around your real-life required schedule — using neuroscience-backed mechanics and a dare-based personality. The chronotype science is the marketing hook and the intelligence layer — the actual product helps you stick to whatever schedule your life demands.

### Core Loop

```
NIGHT MODE                    MORNING MODE
┌─────────────────┐          ┌─────────────────┐
│ Bedtime countdown│          │ Alarm + missions │
│ Procrastination  │   SLEEP  │ Expiring digest  │
│ dare: "Still up? │ ──────→ │ Morning journal   │
│ Bold. -5 points."│          │ Score update      │
└─────────────────┘          └─────────────────┘
         ↑                            │
         │         LIFE SCORE         │
         │      ┌────────────┐        │
         └──────│  0 — 100   │────────┘
                │  Widget     │
                └────────────┘
```

### What Makes It Different

| Feature | Us | Alarmy | Sleep Cycle | Fabulous |
|---------|-----|--------|-------------|----------|
| Knows your chronotype | Yes | No | No | No |
| Calculates social jet lag | Yes | No | No | No |
| Night + Morning enforcement | Both | Morning only | Neither | Morning only |
| Dare Engine personality | Yes | Generic | Generic | Gentle |
| Life Score (single metric) | Yes | No | Sleep score | No |
| Streak with loss aversion | Yes | Basic | No | Yes |
| Shift Your Clock program | Yes | No | No | No |
| Science-backed wake time | Yes | No | Partial | No |

### The Dare Engine — Product Personality

Not a wellness app. Not a gentle coach. A **cocky, challenging voice** that treats discipline like a game:

- "Still in bed? Bold. -5 points."
- "You snoozed 3 times. That's not sleeping, that's lying to yourself."
- "Day 14 streak. You're becoming someone your alarm used to laugh at."

Think **Duolingo owl energy** meets **competitive friend** meets **drill sergeant who's actually funny**. This personality IS the product differentiator — it makes the app feel alive, shareable, and impossible to ignore.

---

## 3. The Science (Non-Negotiable Foundation)

Every feature maps to peer-reviewed research. This is not a motivation app — it's applied neuroscience.

| Principle | Source | App Feature |
|-----------|--------|-------------|
| Chronotype is ~50% genetic (351 gene variants) | GWAS, n=697,828 | Chronotype quiz + adaptive scheduling |
| Social jet lag affects 69-70% | Roenneberg et al. | Core positioning + social jet lag score |
| Sleep inertia: 15-70 min, prefrontal cortex offline | Multiple studies | Morning missions timed to inertia window |
| Habit formation: 66 days average (not 21) | Lally, UCL | 66-day program design, retention strategy |
| Loss aversion: losses hurt 2-2.5x more than gains | Kahneman & Tversky | Life Score drops > gains, streak mechanics |
| Variable rewards > fixed rewards | Schultz, 1997 | Dare Engine randomized responses |
| Max chronotype shift: 1.8-2.4 hours | Burgess protocol | "Shift Your Clock" 14-day program limits |
| Consistent wake time > sleep duration | Sleep research consensus | Core value prop — wake time consistency |
| Phone in first 5 min = 31% higher cortisol at 90 min | Empirical studies | Morning phone-free challenge |
| Snoozing may reduce sleep inertia | Sundelin, 2024 | Allow 1 snooze, penalize excessive |
| Willpower/ego depletion is debunked | 36 labs, 3,531 participants | Never use willpower framing |

**Key constraint:** We never promise to make someone a morning person. Max shift is 1.8-2.4 hours. We help you find YOUR right time and stick to it.

---

## 4. Target Audience

### Primary: "Struggling Striver" (70% of users)
- **Age 18-35**, 55-60% female, global
- Has failed 3-5 times with alarms, habit apps, or willpower
- Sets 5-10 alarms, snoozes for 30-60 minutes, grabs phone immediately
- High guilt and self-blame — thinks they're lazy (they're not — they have social jet lag)
- Willing to pay $50/yr for something that actually works
- **Responds to challenges > encouragement**

### Secondary: "Optimizer" (20%)
- Already has a routine, wants to quantify and perfect it
- Highest LTV, best organic marketing (shares achievements)

### Tertiary: "Student" (10%)
- Gamification-native, lowest ARPU but highest viral coefficient (1 user → 5 downloads)

### Also Serves: Night Shift & Irregular Schedule Workers
- Nurses, hospitality, warehouse, rotating shifts — same core problem (schedule vs biology), different numbers
- The app adapts to ANY target schedule, not just "normal" 9-5 hours
- Previously listed as anti-persona, but they're just an extreme version of what every user faces

### Market Size

| Metric | Number |
|--------|--------|
| People with social jet lag globally | 2.5 billion |
| Core addressable (all criteria met) | 80-120 million |
| Currently paying for sleep/alarm apps | 3-5 million |
| Year 1 target (organic) | 150K-300K paid users |

### Geography
- **US** — Primary revenue market (iOS-heavy, highest willingness to pay)
- **India** — Volume market (Android 95%, price-sensitive, massive Gen Z population)
- **Japan** — Premium iOS market ($35.7M sleep app spend)
- **UK, Germany** — Secondary markets

---

## 5. Key Features (70 at Launch, 108 Total)

### Launch (V1)

**Onboarding (12 features)**
- Chronotype quiz (rMEQ + uMCTQ hybrid) — reveals your type in 2 minutes
- Social jet lag score calculation — "You have 2.1 hours of social jet lag"
- "You're not broken" biology reframe — the aha moment that hooks users
- Smart alarm + bedtime setup based on chronotype

**Alarm System (8 features)**
- Unkillable alarm with physical missions (photo, barcode, shake, walk)
- Adaptive difficulty — gets harder if you bypass, easier if you're consistent
- Snooze penalty system — one free, escalating score cost after that
- Emergency bypass with accountability (photo proof + score penalty)

**Night Mode (6 features)**
- Bedtime countdown with procrastination dare
- Wind-down reminders calibrated to chronotype
- "Procrastinate sleeping if you can" — reverse psychology challenge

**Morning Mode (7 features)**
- Expiring morning digest — content disappears if you don't get up
- Morning journal (single question, one-tap)
- Goal reminder from last night's commitment

**Life Score (5 features)**
- Single score 0-100 (30% wake consistency, 25% routine, 20% streak, 15% chronotype alignment, 10% protocol)
- iOS/Android home screen widget (4.2x engagement lift)
- Daily trend tracking

**Streak System (5 features)**
- Daily streak with loss aversion mechanics
- 7-day streak = 3.6x retention
- Streak freeze IAP ($0.99, max 2/month)

**Dare Engine (throughout)**
- Cocky personality in every interaction
- Variable reward responses (never the same twice)
- Shareable dare cards for social proof

### V2+ (Post-Launch)
- "Shift Your Clock" 14-day chronotype alignment program
- AI Voice Agent wake-up calls
- Day Mode (focus blocks, AI reminders)
- Intelligence layer (pattern learning, adaptive difficulty, predictions)
- Social features (accountability pairs, leaderboards)

---

## 6. Business Model

### Revenue Model
- **Hard paywall + 7-day free trial** (not freemium)
- Hard paywall converts at **10.7% median** vs 2.1% for freemium in Health & Fitness
- Trial-to-paid benchmark: **35%** for H&F category

### Pricing

| Market | Annual | Monthly |
|--------|--------|---------|
| US / Europe / Japan | $49.99/yr | $5.99/mo |
| Brazil / Mexico / Turkey | $24.99/yr | $2.99/mo |
| India / Indonesia / Philippines | ₹999/yr (~$12) | ₹149/mo |

### IAP Revenue
- Streak Freeze: $0.99 / ₹49 (max 2/month)
- Streak Freeze Pack: $1.99 / ₹99
- Premium Alarm Sounds: $2.99 / ₹199

### Subscription Justification (Scientific)
Chronotype shifts **relapse in 1-2 weeks** without maintenance. This isn't artificial lock-in — it's biological reality. The app must continuously enforce to maintain alignment.

---

## 7. Financial Projections

### 3-Year Summary

| Metric | Year 1 | Year 2 | Year 3 |
|--------|--------|--------|--------|
| Downloads | 285K | 800K | 2M |
| Paid users | 19K | 65K | 150K |
| ARR | $1.08M | $4.2M | $12M |
| Operating costs | ~$20K | ~$80K | ~$200K |
| Profit margin | 98%+ | 95%+ | 90%+ |

### Unit Economics
- **LTV:** ~$49/user (1.2 renewals average)
- **CAC:** <$5 blended (organic-first strategy)
- **LTV:CAC ratio:** ~10:1
- **Gross margin:** 83-88%
- **Break-even:** Month 1

### Revenue Mix
- Subscriptions: 85-90%
- IAPs: 5-10%
- Future B2B (corporate wellness): 5-15%

---

## 8. Go-To-Market Strategy

### Organic-First (No Paid Ads at Launch)

| Channel | % of Acquisition | Strategy |
|---------|-----------------|----------|
| ASO (App Store Optimization) | 40-50% | Own "social jet lag app," "chronotype alarm" keywords — zero competition |
| TikTok / Reels | 20-30% | 12-week pre-launch content calendar, own #socialjetlag (<2M views currently) |
| Reddit | 10-15% | r/GetOutOfBed (65K), r/sleep (900K+), r/productivity — genuine value posts |
| ProductHunt | Launch spike | "Alarmy meets science" positioning |
| Free Web Calculator | Lead gen | "What's your social jet lag?" — 4 questions → email capture → app funnel |
| Word of mouth | Compounding | Shareable dare cards, score screenshots, streak milestones |

### First-Mover Advantage
- **No App Store competitor owns "social jet lag"** as a keyword or category
- **12-18 month window** before mainstream awareness makes this common knowledge
- Strategy mirrors **RISE App** ($650K/month) which owned "sleep debt" before anyone else

### Marketing Message Hierarchy
1. **Hook:** "69% of people wake up in the wrong timezone"
2. **Problem:** Social jet lag explained (your body lives in a different timezone than your alarm)
3. **Solution:** Chronotype detection + enforcement + alignment
4. **Proof:** Health risk data + user transformations
5. **CTA:** "Find your timezone in 2 minutes" (free quiz)

---

## 9. Competitive Landscape

| Competitor | Users | Revenue | What They Do | What They Miss |
|-----------|-------|---------|--------------|----------------|
| **Alarmy** | 75M+ | ~$6M/yr subs | Forced wake-up missions | No chronotype, no night mode, no science |
| **Sleep Cycle** | 45M+ | Declining | Sleep tracking + smart alarm | Tracks, doesn't enforce |
| **RISE** | ~2M | $650K/mo | Sleep debt tracking | Different metric (debt vs jet lag), no enforcement |
| **Fabulous** | 30M+ | ~$20M/yr | Morning routine coaching | Gentle approach, no enforcement, no chronotype |
| **Oura Ring** | 2.5M+ | $100M+/yr | Hardware sleep/health tracker | $300 ring + $6/mo, detects but doesn't enforce |
| **Timeshifter** | Niche | Unknown | Travel jet lag only | Doesn't address daily social jet lag |

**Our position:** First app combining chronotype science + behavioral enforcement + personality. Nobody else owns the full night-to-morning cycle with actual neuroscience backing.

---

## 10. Technical Architecture

### Stack
- **Frontend:** React Native + Expo (dev client) — cross-platform from day 1
- **Backend:** Node.js + Express on Railway/Render
- **Database:** MongoDB Atlas (primary) + Redis/Upstash (cache, queues)
- **Auth:** Firebase Authentication
- **Payments:** RevenueCat (subscription management)
- **AI:** OpenAI API (Dare Engine copy generation, voice agent)
- **Analytics:** PostHog
- **Push:** Firebase Cloud Messaging

### The Alarm Problem (Solved)
- **iOS:** AlarmKit (iOS 26, announced 2025) enables system-level alarms for third-party apps for the first time — massive timing advantage
- **Android:** AlarmManager + foreground service + WAKE_LOCK + full-screen intent
- Both survive app kill

### Privacy-First
- Chronotype/sleep data processed on-device where possible
- GDPR Article 9: sleep/chronotype = special category health data → explicit consent
- No selling user data, ever

### Budget
- **Initial:** ₹10K/month (~$120)
- **Scales with users** — biggest variable cost is OpenAI API for Dare Engine
- Solo dev = near-zero fixed costs

---

## 11. Moat Strategy (Compounding Over Time)

| Year | Moat | Description |
|------|------|-------------|
| **1** | Personality + Science | Dare Engine voice is hard to clone. Chronotype-first positioning is unique. |
| **2** | Data | Millions of chronotype-outcome data points. No one else has this dataset. |
| **3** | Network | Social features, accountability pairs, community. Switching cost rises. |
| **4+** | Category | "Social jet lag app" = us. Like how RISE = "sleep debt app." |

---

## 12. Risk & Mitigations

| Risk | Severity | Mitigation |
|------|----------|------------|
| H&F first-renewal only 30.3% | High | 3-era retention strategy + 8-layer retention stack |
| Alarmy copies chronotype feature | Medium | 18-month head start + personality moat + full-cycle coverage |
| Users bypass alarm missions | Medium | Adaptive difficulty + score penalties + new mission types |
| Dare Engine personality fatigue | Medium | AI-generated variable copy + tone calibration + era transitions |
| Regulatory (health claims) | Low | Behavioral framing ("discipline score"), not clinical. $2-5K legal review budgeted. |
| Melatonin advice in restricted countries | Low | Geo-fenced content (prescription-only in India, UK, Denmark, etc.) |

---

## 13. Why Now?

1. **AlarmKit (iOS 26)** — For the first time ever, third-party apps can set system-level alarms on iOS. This was impossible before 2025.
2. **"Sleepmaxxing" trend** — 100M+ TikTok posts. Sleep optimization is culturally mainstream.
3. **Social jet lag entering vocabulary** — Still under 2M TikTok views = first-mover window is open.
4. **Post-pandemic schedule chaos** — Remote/hybrid work broke everyone's sleep schedule.
5. **FDA digital therapeutics guidance (Jan 2026)** — Regulatory clarity for health-adjacent apps.
6. **Gen Z subscription comfort** — $377/month average, 2.8x Boomer fitness spending.
7. **Pear Therapeutics bankruptcy (2023)** — Proved prescription DTx model fails; validates consumer-direct approach.

---

## 14. What Success Looks Like

### North Star Metric
**Daily Active Streakers (DAS)** — users who completed both alarm dismissal AND at least one morning action today.

### Year 1 Milestones
- 285K downloads (organic)
- 19K paid subscribers
- $1M+ ARR
- 4.5+ App Store rating
- Own "social jet lag" as a keyword and category

### Year 3 Vision
- 2M+ downloads
- 150K paid subscribers
- $12M ARR
- The app people think of when they hear "social jet lag"
- Data moat that no competitor can replicate

---

*This document synthesizes 45+ research files, 20+ academic papers, 30+ competitor analyses, and months of strategic work. Every claim is backed by data. Every feature maps to science. The app doesn't exist yet — but the blueprint is bulletproof.*
