# Financial Model — 3-Year Projection

> ⚠️ **NEEDS REBUILD (2026-04-17)** — Assumptions here are based on the OLD hard-paywall + 7-day-trial model. The monetization pivot on April 16-17 changes every major assumption: conversion rates (freemium converts at 2-5% vs hard paywall 6-7%), revenue timing (spread across lifecycle vs concentrated at Day 7), revenue sources (no ads, new IAPs, credit economy, referrals, top-ups, lifetime), and per-user LTV math (higher for freemium converters due to self-selection). See `strategy/revenue-model-v2.md` for new model.
>
> **What still applies:** cost structure and infrastructure assumptions. **What needs rebuild:** revenue projections, conversion funnels, unit economics, break-even analysis.
>
> **DO NOT use these projections for planning decisions.** Rebuild pending.

*Status: SUPERSEDED — Needs full rebuild under freemium model.*
*All numbers in USD unless marked ₹*
*Exchange rate assumed: $1 = ₹84*

---

## Assumptions

### Revenue Assumptions
| Assumption | Value | Basis |
|-----------|-------|-------|
| Annual subscription (US/Tier 1) | $49.99/yr | Alarmy $59.99, our undercut |
| Monthly subscription (US/Tier 1) | $5.99/mo | Industry standard ~10-12x annual monthly ratio |
| Annual subscription (India/Tier 3) | $10/yr (₹849) | India pricing benchmarks |
| Monthly subscription (India/Tier 3) | $1.49/mo (₹125) | |
| Annual subscription (Tier 2: Brazil, etc.) | $24.99/yr | Between Tier 1 and 3 |
| Blended global ARPU (annual payers) | $30/yr | Weighted by geography |
| Blended global ARPU (monthly payers) | $4/mo ($48/yr effective) | Higher effective but higher churn |
| Annual vs monthly split | 65% annual / 35% monthly | RevenueCat H&F benchmark: 60-68% annual |
| Streak freeze IAP price | $0.99 / ₹49 | Impulse purchase |
| Streak freeze purchases/user/year | 3-5 | Loss aversion drives this |

### Conversion Assumptions
| Assumption | Pessimistic | Base | Optimistic | Basis |
|-----------|------------|------|-----------|-------|
| Download → trial start | 25% | 35% | 50% | Hard paywall + 7-day trial |
| Trial → paid | 10% | 20% | 35% | H&F best: 35%, median: 6.9% |
| Download → paid (full funnel) | 2.5% | 7% | 17.5% | Product of above two |
| First-year renewal rate | 25% | 35% | 50% | H&F avg: 30.3%. We aim higher via enforcement |
| Second-year renewal rate | 40% | 50% | 60% | Survivors are sticky |
| Monthly → annual upgrade/year | 10% | 15% | 20% | Offer discount prompts |

### Growth Assumptions
| Assumption | Pessimistic | Base | Optimistic | Basis |
|-----------|------------|------|-----------|-------|
| Month 1 downloads (organic only) | 2,000 | 5,000 | 15,000 | ASO + 1 viral TikTok |
| Monthly download growth (M1-M6) | 15% | 30% | 60% | Compound from ASO + social |
| Monthly download growth (M7-M12) | 10% | 20% | 40% | Momentum + word of mouth |
| Monthly download growth (Y2) | 8% | 15% | 25% | Adding languages + Android focus |
| Monthly download growth (Y3) | 5% | 10% | 15% | Market maturation |

### Cost Assumptions
| Item | Monthly Cost | Scales With |
|------|-------------|-------------|
| Railway (API + Worker) | $10-20 → $50-200 | DAU |
| MongoDB Atlas | $0 → $57-200 | Total users |
| Upstash Redis | $0 → $10-50 | API calls |
| OpenAI API (digest) | $0.01-0.03/user/day | Paid users using digest |
| OpenAI API (voice) | $0.10-0.30/session | Paid users using voice |
| Firebase Auth | $0 → $5-50 | MAU (free until 50K) |
| PostHog | $0 → $30-100 | Events |
| RevenueCat | $0 → 0.8% of MTR | Revenue (free until $2.5K MTR) |
| Apple Developer | $99/yr fixed | — |
| Google Play | $25 one-time | — |
| Domain + hosting (website) | $10-20/mo | — |
| ASO tools | $20-50/mo | — |
| Total fixed (pre-revenue) | ~$50-100/mo | — |

---

## Year 1 — Month by Month (Base Case)

### Downloads & Users

| Month | New Downloads | Cumulative | Trial Starts (35%) | New Paid (20% of trials) | Cumulative Paid | Churned | Active Paid |
|-------|-------------|-----------|-------------------|------------------------|----------------|---------|-------------|
| M1 | 5,000 | 5,000 | 1,750 | 350 | 350 | 0 | 350 |
| M2 | 6,500 | 11,500 | 2,275 | 455 | 805 | 18 | 787 |
| M3 | 8,450 | 19,950 | 2,958 | 592 | 1,397 | 39 | 1,358 |
| M4 | 10,985 | 30,935 | 3,845 | 769 | 2,166 | 68 | 2,098 |
| M5 | 14,281 | 45,216 | 4,998 | 1,000 | 3,166 | 105 | 3,061 |
| M6 | 18,565 | 63,781 | 6,498 | 1,300 | 4,466 | 153 | 4,313 |
| M7 | 22,278 | 86,059 | 7,797 | 1,559 | 6,025 | 216 | 5,809 |
| M8 | 26,734 | 112,793 | 9,357 | 1,871 | 7,896 | 290 | 7,606 |
| M9 | 32,081 | 144,874 | 11,228 | 2,246 | 10,142 | 380 | 9,762 |
| M10 | 38,497 | 183,371 | 13,474 | 2,695 | 12,837 | 488 | 12,349 |
| M11 | 46,196 | 229,567 | 16,169 | 3,234 | 16,071 | 617 | 15,454 |
| M12 | 55,435 | 285,002 | 19,402 | 3,880 | 19,951 | 773 | 19,178 |

*Churn: 5% monthly for monthly subs (35% of paid base), ~0% for annual within first year*

### Revenue

| Month | New Sub Revenue | Recurring Revenue | IAP (Streak Freeze) | Total MRR | Cumulative Revenue |
|-------|----------------|------------------|---------------------|-----------|-------------------|
| M1 | $7,000 | $0 | $100 | $7,100 | $7,100 |
| M2 | $9,100 | $5,600 | $250 | $14,950 | $22,050 |
| M3 | $11,840 | $10,900 | $400 | $23,140 | $45,190 |
| M4 | $15,380 | $17,300 | $650 | $33,330 | $78,520 |
| M5 | $20,000 | $24,500 | $950 | $45,450 | $123,970 |
| M6 | $26,000 | $34,500 | $1,350 | $61,850 | $185,820 |
| M7 | $31,180 | $46,500 | $1,800 | $79,480 | $265,300 |
| M8 | $37,420 | $60,850 | $2,350 | $100,620 | $365,920 |
| M9 | $44,920 | $78,100 | $3,000 | $126,020 | $491,940 |
| M10 | $53,900 | $98,800 | $3,800 | $156,500 | $648,440 |
| M11 | $64,680 | $123,600 | $4,800 | $193,080 | $841,520 |
| M12 | $77,600 | $153,100 | $5,900 | $236,600 | $1,078,120 |

**Year 1 Total Revenue: ~$1.08M (Base Case)**

*Note: Blended ARPU used ($30/yr annual, $4/mo monthly). Revenue ramps slow because annual subs pay upfront but monthly builds over time.*

### Costs

| Month | Infra | AI API | Tools/Services | RevenueCat | Total Cost |
|-------|-------|--------|---------------|------------|-----------|
| M1 | $50 | $30 | $80 | $0 | $160 |
| M2 | $50 | $65 | $80 | $0 | $195 |
| M3 | $60 | $110 | $80 | $0 | $250 |
| M4 | $70 | $170 | $80 | $0 | $320 |
| M5 | $80 | $250 | $80 | $0 | $410 |
| M6 | $100 | $350 | $80 | $370 | $900 |
| M7 | $120 | $470 | $80 | $480 | $1,150 |
| M8 | $150 | $610 | $80 | $610 | $1,450 |
| M9 | $180 | $780 | $80 | $760 | $1,800 |
| M10 | $220 | $990 | $80 | $940 | $2,230 |
| M11 | $260 | $1,240 | $80 | $1,160 | $2,740 |
| M12 | $300 | $1,540 | $80 | $1,420 | $3,340 |

**Year 1 Total Costs: ~$14,945**
**Year 1 Net Profit: ~$1,063,175 (98.6% margin)**

*This margin is unrealistically high because we're not paying salary. If you value your time at ₹71K/month ($10K/year), the "real" cost is ~$10K opportunity cost + $15K operating = $25K. Still 97.7% margin.*

---

## Year 1 — Pessimistic Scenario

| Metric | Value |
|--------|-------|
| Total downloads | 85,000 |
| Paid users (end of year) | 2,100 |
| Total revenue | $150,000 |
| Total costs | $5,000 |
| Net profit | $145,000 |
| Monthly revenue at M12 | ~$25,000 |

**Even the pessimistic case is profitable.** $150K/year from a side project while keeping your ₹71K job is life-changing.

---

## Year 1 — Optimistic Scenario

| Metric | Value |
|--------|-------|
| Total downloads | 1,200,000 |
| Paid users (end of year) | 85,000 |
| Total revenue | $4,500,000 |
| Total costs | $80,000 |
| Net profit | $4,420,000 |
| Monthly revenue at M12 | ~$750,000 |

This requires a viral moment (TikTok, ProductHunt #1, press coverage) but is within the realm of possibility based on Opal's trajectory.

---

## 3-Year Summary (Base Case)

| Metric | Year 1 | Year 2 | Year 3 |
|--------|--------|--------|--------|
| New downloads | 285K | 800K | 1.5M |
| Cumulative downloads | 285K | 1.08M | 2.58M |
| Paid users (end of year) | 19K | 65K | 150K |
| Annual revenue | $1.08M | $4.2M | $12M |
| ARR at year end | $2.8M | $7.8M | $18M |
| Total costs | $15K | $120K | $400K |
| Net profit | $1.06M | $4.08M | $11.6M |
| Operating margin | 98%+ | 97% | 96% |

### Year 2 Assumptions
- Add 8 languages → 3x download potential
- Android-focused marketing (64% of global market)
- First paid UA experiments ($2-5K/month)
- Hire 1 contractor (marketing or design): $1-2K/month
- AI costs increase with user base

### Year 3 Assumptions
- 15+ languages
- Paid UA budget: $10-20K/month
- Possible 1-2 full-time hires
- Premium features expansion (wearable integration, B2B/corporate)
- Potentially consider raising seed funding for faster growth

---

## Unit Economics

### Per-User Economics (Base Case, Annual Subscriber)

| Metric | Value |
|--------|-------|
| Average annual subscription | $30 (blended global) |
| Year 1 retention | 35% renew |
| Year 2 retention | 50% renew |
| Year 3 retention | 60% renew |
| Expected LTV (3-year) | $30 + ($30 × 0.35) + ($30 × 0.35 × 0.50) = **$45.75** |
| IAP revenue (3-year) | ~$3 (streak freezes) |
| **Total LTV** | **~$49** |
| AI cost per user/year | ~$5-8 (digest daily + occasional voice) |
| Infra cost per user/year | ~$0.50 |
| **Gross margin per user** | **~$40-43 (~83-88%)** |

### CAC Analysis

| Acquisition Channel | Estimated CAC | LTV:CAC Ratio |
|-------------------|--------------|---------------|
| Organic (ASO) | $0 | Infinite |
| TikTok organic | $0 | Infinite |
| Reddit/IndieHackers | $0 | Infinite |
| TikTok paid ads | $2-5 | 10-25x |
| Instagram paid ads | $3-8 | 6-16x |
| Google App campaigns | $1-3 | 16-49x |
| Apple Search Ads | $2-6 | 8-25x |

**Target: Keep blended CAC under $5. At LTV of $49, that's ~10x LTV:CAC — excellent for a subscription app.**

*Note: These CAC numbers assume you're targeting Tier 1 markets. India CAC is $0.10-0.50 but LTV is also $10. US CAC is $3-8 but LTV is $50.*

---

## Break-Even Analysis

### When does revenue exceed costs?

**Month 1.** Seriously.

With near-zero infrastructure costs and no salary, the app is profitable from the first paying subscriber. The real question is: when does revenue exceed your current salary?

| Milestone | Base Case | Pessimistic |
|-----------|----------|-------------|
| Revenue > operating costs | Month 1 | Month 1 |
| Revenue > ₹71K/month ($850) | Month 1 | Month 2 |
| Revenue > ₹5L/month ($6K) | Month 3 | Month 8 |
| Revenue > ₹10L/month ($12K) | Month 5 | Month 12+ |
| Revenue > ₹50L/month ($60K) | Month 10 | Year 2+ |
| Can quit job safely (6mo runway) | Month 6-8 | Month 12-18 |

### When to Quit Your Job

**Rule:** Don't quit until monthly app revenue > 3x your salary (₹2.13L / $2,500) for 3 consecutive months. This gives you a safety margin for:
- Revenue fluctuations
- Unexpected costs
- Seasonal dips
- Need to invest in growth

---

## Scenario Modeling

### What Drives Revenue Up or Down?

| Variable | Impact | Sensitivity |
|----------|--------|-------------|
| Trial-to-paid conversion rate | **HIGHEST** | 10% vs 20% vs 35% = 2-3.5x revenue difference |
| Download volume | HIGH | Driven by ASO + viral content |
| Retention / renewal rate | HIGH | Compounds over years — 25% vs 50% = 2x LTV |
| ARPU / pricing | MEDIUM | $30 vs $50 blended = 1.7x |
| Churn rate (monthly subs) | MEDIUM | 5% vs 10% monthly churn = significant difference |
| AI costs | LOW | Even at $10/user/year, margins stay 80%+ |
| Infra costs | NEGLIGIBLE | Sub-$1/user/year at any scale we'll reach in Year 1-2 |

**The single most important number is trial-to-paid conversion.** Everything else is noise until that number is proven.

---

## Runway Calculation

### At ₹10K/month ($120) budget
- Covers: domains, Apple dev account, basic infra, ASO tools
- Runway: Indefinite (costs < budget)
- Limitation: No paid marketing, no contractors

### At ₹25K/month ($300) budget
- Covers: Everything above + some paid UA experiments
- Runway: Indefinite
- Opens: Small TikTok ad tests ($100-200/month)

### At ₹50K/month ($600) budget
- Covers: Everything above + contractor help
- Runway: Need app revenue to sustain within 3-4 months
- Opens: Part-time design contractor, meaningful paid UA

### At ₹1L/month ($1,200) budget
- Covers: Serious growth mode
- Runway: Need app revenue of ₹1L+/month to sustain (base case: Month 3-4)
- Opens: Full paid UA across channels, multiple contractors

---

## Financial Risks

| Risk | Impact | Mitigation |
|------|--------|-----------|
| Apple rejects app / removes from store | Revenue → $0 | Strict compliance from day 1. Don't use dark patterns. |
| OpenAI raises prices 5x | AI costs eat margins | Build fallback: template-based digest, local TTS |
| Conversion rate is 2% not 20% | Revenue 10x lower than base | If <5% after 90 days, pivot pricing/paywall strategy |
| Alarmy copies our features | Competition increases | Personality moat — they can't copy the Dare Engine voice |
| Viral moment overwhelms infra | App crashes, bad reviews | Auto-scaling on Railway. Load test before launch. |
| India dominates downloads but not revenue | Low blended ARPU | Geo-specific pricing. Focus UA spend on Tier 1 markets. |

---

*This model will be updated monthly with actual data once the app launches. Projections beyond Month 3 should be treated as directional, not precise.*
