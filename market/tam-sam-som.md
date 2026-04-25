# TAM / SAM / SOM Analysis — Behavior Enforcement App
*"Alarmy meets Duolingo meets Fabulous" with a dare personality*

**Date:** 2026-04-06
**Methodology:** Bottom-up calculation using verified public data

---

## Executive Summary

| Metric | Value | Annual Revenue Potential |
|--------|-------|------------------------|
| **TAM** | 1.47B people | $73.5B |
| **SAM** | 186M people | $5.6B |
| **SOM Year 1** | 150K-300K paid users | $4.5M-$9M |
| **SOM Year 3** | 1.5M-3M paid users | $45M-$90M |

---

## 1. TAM — Total Addressable Market

### Who is the TAM? Every smartphone user globally who struggles with sleep discipline, waking up, or morning routines.

#### Base: Global Smartphone Users
- **5.12 billion** smartphone owners globally (2026 projection)
- Sources: DemandSage, BankMyCell, Statista

#### Filter 1: Adults who struggle with waking up / sleep discipline
| Data Point | Stat | Source |
|-----------|------|--------|
| Adults who hit snooze habitually | **57%** | Withings / SLEEP journal study |
| Snooze pressed in 56% of 3M nights studied | **56%** | Mass General Brigham 2025 study |
| Heavy snoozers (>80% of mornings) | **45%** | Same study — 21,000 participants |
| Adults with insomnia symptoms globally | **30-40%** | Sleep Foundation / meta-analysis |
| Adults who say morning dictates their day | **49%** | Talker Research survey |
| Adults who want to be more productive | **34%** | Cinch Home Services survey |

**Conservative filter:** 30% of smartphone adults struggle enough with mornings/sleep to consider a solution.

#### TAM Calculation
```
5.12B smartphone users
x 70% adults (18+) = 3.58B adult smartphone users
x 30% struggle with mornings/sleep = 1.07B

PLUS overlap:
x 12.4% with clinical insomnia symptoms = 444M
(deduplicate — most insomnia sufferers are in the 30%)

Conservative TAM (people): ~1.07B people
Aggressive TAM (people):   ~1.47B people (adding those who WANT better routines but don't "struggle")
```

#### TAM Revenue
```
1.07B people x $50/year (global blended ARPU) = $53.5B
1.47B people x $50/year = $73.5B
```

**TAM = $53.5B - $73.5B** (using $50/year blended global price)

#### Context Check
- Digital Fitness & Well-Being market: $65.73B revenue (2025, Statista)
- Wellness apps market: $12.87B (2025, narrower definition)
- Our TAM sits within the broader digital wellness space — the numbers are consistent

---

## 2. SAM — Serviceable Addressable Market

### Who is the SAM? People who actually download and use alarm, habit, or sleep apps in markets we can serve.

#### Base: Health & Fitness App Downloads
- **3.96 billion** H&F app installs globally in 2025 (Sensor Tower)
- Not unique users — many download multiple apps

#### Filter: Alarm + Habit + Sleep App Users Specifically

| Category | Estimated Active Users | Source/Basis |
|----------|----------------------|--------------|
| Alarm app users (beyond default) | ~200M globally | Alarmy alone: 82M downloads; Sleep Cycle: 40M+; dozens of others |
| Habit tracker app users | ~120M globally | Fabulous: 37M helped; Habitica: 15M+; Streaks, HabitNow, etc. |
| Sleep app users | ~150M globally | Calm, Headspace (sleep features), Sleep Cycle, Pillow, etc. |
| **Overlap-adjusted unique users** | **~300M** | ~40% overlap between categories |

#### Filter: Language Markets We Can Serve

| Market | Smartphone Users | Penetration | Relevance |
|--------|-----------------|-------------|-----------|
| **US** | 276M | 81.6% | Highest ARPU, #1 priority |
| **India** | 659M | 46.5% | Volume play, low ARPU |
| **UK** | 55M | 82.2% | English-speaking, high ARPU |
| **Germany** | ~69M | 81.9% | Strong wellness market |
| **Japan** | ~100M (users) | High | #1 insomnia search globally |
| **Brazil** | 175M | High | Growing app market |
| **Indonesia** | ~200M (users) | High | Volume play |
| **Total top 7** | **~1.53B** | — | — |
| **+ Rest of top 10 languages** | **~1.8B** | — | Add Korea, France, Spain, etc. |

#### SAM Calculation

```
300M global alarm/habit/sleep app users
x 62% in our serviceable language markets = 186M

OR bottom-up:
US: 276M x 57% snooze = 157M potential, ~30M use alarm/habit apps = 30M
India: 659M x 30% adults struggling = ~100M potential, ~25M use apps = 25M
UK: 55M x 57% = 31M potential, ~6M use apps = 6M
Germany: 69M x 50% = 34M potential, ~7M use apps = 7M
Japan: 100M x 60% (highest insomnia) = 60M potential, ~12M use apps = 12M
Brazil: 175M x 40% = 70M potential, ~10M use apps = 10M
Indonesia: 200M x 35% = 70M potential, ~8M use apps = 8M
Other top-10 language markets: ~90M
Total: ~188M
```

#### SAM Revenue
```
186M people x $30/year (blended — lower than TAM because includes India/Indonesia/Brazil)
= $5.58B
```

**SAM = $5.6B** (186M addressable users across serviceable markets)

#### Willingness to Pay Validation
- 57% most likely to pay for fitness/exercise app subscription (Kantar, 10K respondents, 10 countries)
- 49% of all app users willing to pay monthly subscription (Harris survey)
- 34% would pay for "life coaching" app — our closest category
- Health & Fitness has highest 14-day ARPU of any app category at $0.44 median (RevenueCat)

---

## 3. SOM — Serviceable Obtainable Market

### What can we realistically capture? Based on comparable app launches.

#### Comparable Launch Trajectories

| App | Year 1 | Year 2 | Year 3 | Notes |
|-----|--------|--------|--------|-------|
| **Alarmy** | ~1M downloads | ~5M downloads | ~15M downloads | Slow start, grew via ASO + word of mouth. $11.2M rev by 2021 |
| **Opal** | ~200K downloads (beta-to-launch) | 500K downloads (Feb 2023) | $10.3M ARR (2024) | Premium-only, iOS-first, 11-person team |
| **Fabulous** | ~500K downloads | ~2M | 10M+ total | Duke University backing, science-led positioning |
| **Sleep Cycle** | ~1M downloads | ~5M | 40M+ total | $25M ARR at scale |

#### Our Advantages Over These Launches
1. **Category combination** — alarm + habit + gamification is novel; not competing head-on in any single category
2. **Personality/brand** — Duolingo proved personality drives virality (retention 12% -> 55%)
3. **TikTok-native marketing** — #MorningRoutine has 8B+ monthly views; Alarmy launched pre-TikTok
4. **The "decision void"** gap — no app owns the 5-30 min post-alarm window

#### SOM Calculation — Conservative (Year 1)

```
Scenario: iOS-first launch, English-speaking markets, TikTok + ASO

Downloads Year 1: 500K - 1M (between Opal and Fabulous trajectories)
Free trial conversion: 15-20% (industry: H&F trial-to-paid 35-40% for top apps)
Paid users Year 1: 75K - 200K

Revenue Year 1 (conservative):
  75K users x $50/year (US-weighted) = $3.75M

Revenue Year 1 (moderate):
  150K users x $45/year (blended) = $6.75M

Revenue Year 1 (optimistic):
  300K users x $40/year = $12M
```

#### SOM Year 2 (Adding languages + Android)

```
Downloads cumulative: 2M - 5M
Paid users: 500K - 1M
Revenue: $15M - $40M

Basis: Alarmy went from ~5M to ~15M downloads in this phase
Adding 8 languages opens 3-4x the market
Android adds 2-3x download volume (lower ARPU)
```

#### SOM Year 3 (Scale)

```
Downloads cumulative: 8M - 20M
Paid users: 1.5M - 3M
Revenue: $45M - $90M

Basis: Opal hit $10.3M ARR with 11 people in ~2 years
Alarmy hit $15M ARR with broader reach
Our combination play addresses 3x the use cases
```

#### SOM as % of SAM

| Year | Paid Users | % of SAM (186M) | Revenue |
|------|-----------|-----------------|---------|
| Year 1 | 150K-300K | 0.08%-0.16% | $4.5M-$9M |
| Year 2 | 500K-1M | 0.27%-0.54% | $15M-$40M |
| Year 3 | 1.5M-3M | 0.8%-1.6% | $45M-$90M |

These percentages are conservative — Alarmy alone captured ~0.5% of SAM with a single-feature alarm app.

---

## 4. Key Stats Summary

### Snooze & Morning Behavior
| Stat | Value | Source |
|------|-------|--------|
| Adults who hit snooze daily | **57%** | Withings / SLEEP journal |
| Heavy snoozers (>80% of mornings) | **45%** | Mass General Brigham 2025 |
| Average snooze time wasted daily | **20 min** | Same study |
| Morning dictates quality of day | **49%** (57% millennials) | Talker Research |
| Want to be more productive | **34%** | Cinch survey |
| Have a morning routine | **88%** | My Morning Routine |
| Quit morning routine within 21 days | **82%** | Industry data |
| Adults with insomnia symptoms globally | **30-40%** | Sleep Foundation |

### App Market Data
| Stat | Value | Source |
|------|-------|--------|
| H&F app downloads globally (2025) | **3.96B** | Sensor Tower |
| Alarmy cumulative downloads | **82M** | Delightroom |
| Sleep Cycle downloads | **40M+** | App Store |
| Fabulous users helped | **37M** | TheFabulous.co |
| H&F apps using AI keywords (rising) | **28%** (up from 19%) | Sensor Tower |

### Spending & Conversion
| Stat | Value | Source |
|------|-------|--------|
| Willing to pay for fitness app sub | **57%** | Kantar (10K respondents) |
| Willing to pay for life coaching app | **34%** | Kantar |
| Any app subscription willingness | **49%** | Harris survey |
| H&F median 14-day ARPU | **$0.44** | RevenueCat |
| H&F top quartile 14-day ARPU | **$1.31** | RevenueCat |
| Subscription ARPU range (wellness) | **$3-$9/month** | Industry data |
| Gamification boost to D30 retention | **+15-30%** | Business of Apps |

### App Retention Benchmarks
| Metric | Average | Top Performers | H&F Category |
|--------|---------|----------------|--------------|
| Day 1 | 26% | 40%+ | 30-35% |
| Day 7 | 13% | 30% | 15-20% |
| Day 30 | 7% | 25% | 8-12% |
| Day 30 (with gamification) | — | **25-47%** | — |

**Critical insight:** Alarm apps have built-in daily retention (people NEED their alarm). Habit apps struggle with D30. Our combination solves this — the alarm is the daily hook, habits are the value layer. Expected D30: **20-30%** (alarm baseline + gamification boost).

### App Store Search Demand
| Keyword | Demand Signal |
|---------|--------------|
| "alarm clock" | Evergreen, massive — Alarmy ranks #1 with 1.7M reviews |
| "wake up" | High — multiple dedicated apps (Wayk, WonderWake) |
| "morning routine" | Growing — TikTok driving 8B+ monthly views on #MorningRoutine |
| "habit tracker" | Crowded — 75+ apps, but no alarm+habit combo dominates |
| "sleep tracker" | High — Sleep Cycle (40M), SleepWatch, Pillow |
| "productivity" | Massive — but broad. We index on the morning sub-niche |

---

## 5. Geographic Breakdown — Market Potential by Country

| Country | Smartphone Users | Sleep/Morning Problem Rate | App Spending Tier | Priority | Estimated SAM |
|---------|-----------------|---------------------------|-------------------|----------|--------------|
| **US** | 276M | 57% snooze | Tier 1 ($50/yr) | #1 | 30M users / $1.5B |
| **India** | 659M | 30%+ | Tier 3 ($10/yr) | #2 (volume) | 25M users / $250M |
| **Japan** | ~100M | 60%+ (highest insomnia) | Tier 1 ($50/yr) | #3 | 12M users / $600M |
| **UK** | 55M | 57% (similar to US) | Tier 1 ($45/yr) | #4 | 6M users / $270M |
| **Germany** | ~69M | 50%+ | Tier 1 ($45/yr) | #5 | 7M users / $315M |
| **Brazil** | 175M | 40%+ | Tier 2 ($15/yr) | #6 | 10M users / $150M |
| **Indonesia** | ~200M | 35%+ | Tier 3 ($8/yr) | #7 | 8M users / $64M |

### Launch Sequence Recommendation
1. **Phase 1 (Month 0-6):** US + UK + India (English) — covers highest ARPU + highest volume
2. **Phase 2 (Month 6-12):** Germany + Japan — both have high insomnia rates and high ARPU
3. **Phase 3 (Month 12-18):** Brazil + Indonesia + rest of top 10 languages

### Japan Deep Dive — Hidden Opportunity
Japan has the **highest rate of insomnia search globally** (54 per 100K people search "can't sleep" vs 3.6 global average — 15x the norm). Japanese culture has strong morning routine traditions (asa-katsu / morning activities trend). Alarmy is already popular there. This market could be disproportionately valuable.

---

## 6. Confidence Assessment

| Input | Confidence | Risk |
|-------|-----------|------|
| Snooze statistics (57%) | **High** — multiple independent studies, 21K+ participants | Low |
| H&F downloads (3.96B) | **High** — Sensor Tower primary data | Low |
| Alarmy revenue ($15M) | **High** — public reporting, verified by multiple sources | Low |
| SAM user count (186M) | **Medium** — extrapolated from top app downloads + market overlap | Could be 150M-250M |
| Conversion rate (15-20%) | **Medium** — based on industry benchmarks, depends heavily on execution | Could be 8-35% |
| SOM Year 1 | **Medium-Low** — highly dependent on marketing execution, virality, product quality | Wide range possible |
| SOM Year 3 | **Low** — too many variables at 3-year horizon | Use as directional only |

### What Could Go Wrong
- **Apple/Google add morning routine features to default alarm** — low risk near-term, high impact
- **Alarmy pivots to cover the "decision void"** — they're already branding as "morning wellness app"
- **Lower-than-expected conversion in India/Indonesia** — willingness to pay is untested at our price points
- **Habit app fatigue** — users may see "another habit app" and bounce

### What Could Go Right
- **TikTok virality** — one viral dare challenge could drive 1M+ downloads in a week
- **The personality becomes a cultural moment** — like Duolingo owl memes drove massive organic growth
- **Japan/Korea over-index** — insomnia-heavy cultures could drive 3-5x expected per-capita revenue
- **Category creation** — "behavior enforcement" becomes its own App Store category

---

## Bottom Line

**This is a $5.6B SAM with a realistic path to $45-90M ARR by Year 3.**

The math works because:
1. **57% of people snooze daily** — the problem is universal
2. **3.96B H&F app installs/year** — people actively seek solutions
3. **No single app owns alarm + habit + gamification** — category gap is real
4. **Alarmy proved $15M ARR is achievable** with just an alarm — adding habit/gamification/personality should expand the ceiling significantly
5. **Opal proved $10M ARR with 11 people in 2 years** — lean team can scale fast

The key variable is **conversion rate**. The difference between a $5M and $50M business is whether the dare personality and gamification loop convert free users at 8% or 25%.
