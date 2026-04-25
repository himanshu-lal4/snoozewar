# Conversion Funnel Benchmarks — Health & Fitness Subscription App
## Researched: 2026-04-10
## Sources: RevenueCat 2025/2026, Adapty 2026, Sensor Tower, AppTweak, SplitMetrics, Business of Apps

**App context:** Chronotype-aware sleep/wake enforcement app. Hard paywall + 7-day trial. $49.99/yr US, ₹999/yr India. Annual plan dominant.

---

## Full Funnel Overview

```
Impression → Install → Open → Onboard → Trial → Paid → Retain
  3.8%       ~85%      ~65%     ~35%     ~20%     ~35%
  (imp→inst)  (inst→open) (open→onboard) (onboard→trial) (trial→paid)
```

**End-to-end: 1,000 impressions → 38 installs → 32 opens → 21 complete onboarding → 7 start trial → 2-3 paid subscribers**

That's a **~0.25% impression-to-paid** rate, or **~6-7% download-to-paid** at the base case.

---

## 1. App Store Listing View → Install (CVR)

### iOS App Store (Health & Fitness)
| Metric | Value | Source |
|--------|-------|--------|
| Average page view → install (all categories, US) | 25% | AppTweak H1 2024 |
| Average impression → install (all categories) | 3.8% | AppTweak H1 2024 |
| H&F category page view → install (iOS) | 30.8% | Adapty 2026 |
| H&F category page view → install (Google Play) | 23.2% | Adapty 2026 |
| Median H&F CVR | 18.5% | Adapty (range: 0.94% - 57.68%) |

### Search vs Browse Installs
| Traffic Source | Estimated CVR | Notes |
|---------------|--------------|-------|
| App Store Search (organic) | 25-35% | High intent — user typed a query |
| App Store Search (Apple Search Ads) | 50-65% | Highest intent, paid targeting |
| Browse / Featured | 8-15% | Low intent, discovery-based |
| Web Referrer | 15-25% | Moderate intent, came from content |
| App Referrer | 20-30% | Came from related app |

**Key insight:** Search installs convert 2-3x better than browse installs. For a hard paywall app, search traffic is gold — these users already have a problem they're trying to solve.

### Competitor Estimates (Alarm/Sleep Category)
| App | Monthly Downloads (est.) | Notes |
|-----|-------------------------|-------|
| Alarmy (iOS) | ~500K | $500K revenue/month iOS |
| Alarmy (Android) | ~1M | $100K revenue/month Android |
| Sleep Cycle (iOS) | ~200K | $900K revenue/month (higher ARPU) |

**Note:** Alarmy and Sleep Cycle don't publish CVRs. But Alarmy's 75M total users with 1.7M reviews suggests strong organic discovery. Sleep Cycle's higher revenue per download ($4.50 vs Alarmy's $1.00 iOS) indicates better conversion of higher-intent users.

### Video Preview vs Screenshots
| Creative Type | Impact on CVR | Source |
|--------------|--------------|--------|
| Video preview added to listing | +20-40% lift vs screenshots alone | SplitMetrics, Storemaven |
| Optimized first 3 screenshots | Critical — 90% don't scroll past 3rd | SplitMetrics 2025 |
| Optimal combo | 1 preview video + 2-3 high-impact screenshots | ASO Stack best practice |

### Our Expected CVR
| Scenario | Page View → Install | Basis |
|----------|-------------------|-------|
| Pessimistic | 15% | New unknown app, no reviews |
| Base | 25% | Good screenshots + video, ASO optimized |
| Optimistic | 35% | Strong ASO + social proof + video |

---

## 2. Install → First Open (Day 0)

| Metric | Value | Source |
|--------|-------|--------|
| % of installs that never open | 10-20% | Industry average (varies by category) |
| D0 open rate (H&F apps) | ~80-90% | Industry benchmark |
| D1 retention (H&F) | 23-26% | OneSignal 2024, Enable3 2026 |
| D7 retention (H&F) | ~12-15% | Industry benchmark |
| D30 retention (H&F) | 3-10% | Enable3 2026, RevenueCat |

**Key insight:** For a hard paywall app, the install-to-open rate is likely HIGHER than freemium (~85-90%) because users who download past a hard paywall description are more committed. However, the overall volume is lower.

### Our Expected Install → Open
| Scenario | Rate | Basis |
|----------|------|-------|
| Pessimistic | 80% | Some accidental downloads |
| Base | 85% | Standard for utility apps |
| Optimistic | 90% | High-intent search traffic |

---

## 3. First Open → Complete Onboarding

### Industry Benchmarks
| Metric | Value | Source |
|--------|-------|--------|
| H&F D1 onboarding/activation rate | 26% | Business of Apps 2025 |
| D30 onboarding completion (all apps) | 8.4% | Business of Apps Q2 2025 |
| Apps with 5+ step onboarding: drop-off | >50% abandon | UserGuiding 2026 |
| Quiz/microsurvey completion rate | 54% | Chameleon Benchmark 2025 |
| Launcher-driven product tour completion | 67% | Chameleon Benchmark 2025 |
| Onboarding checklist completion (avg) | 19.2% | UserPilot 2025 |
| Onboarding checklist completion (median) | 10.1% | UserPilot 2025 |

### Where Users Drop Off
Typical onboarding funnel drop-off pattern:
```
Step 1 (Welcome/Value prop):     90% continue
Step 2 (Basic info/goals):       78% continue  (-12%)
Step 3 (Quiz/assessment):        65% continue  (-13%)
Step 4 (Personalization):        58% continue  (-7%)
Step 5 (Paywall presentation):   35% continue  (-23%)  ← BIGGEST DROP
```

**The paywall is the #1 drop-off point in hard paywall apps.** Everything before it should maximize perceived value.

### Our App's Onboarding (Chronotype Quiz + Paywall)
Our onboarding: Welcome → Chronotype Quiz (~2 min) → Results Screen → Paywall

| Scenario | Open → Complete Onboarding | Basis |
|----------|--------------------------|-------|
| Pessimistic | 50% | Quiz feels too long |
| Base | 65% | Personalized results create "aha moment" |
| Optimistic | 75% | Quiz is engaging, results feel valuable |

**Key design principle:** The chronotype quiz IS the value demonstration. Users should feel they've already received something (their chronotype result) before seeing the paywall. This is the "Noom pattern" — quiz results feel personalized and valuable, making the paywall easier to accept.

---

## 4. Onboarding → Trial Start (Hard Paywall)

### Industry Benchmarks
| Metric | Value | Source |
|--------|-------|--------|
| Hard paywall D35 download-to-paid (median) | 10.7% | RevenueCat 2026 |
| Freemium D35 download-to-paid (median) | 2.1% | RevenueCat 2026 |
| Hard paywall advantage | 5x over freemium | RevenueCat 2026 |
| % of trial starts on Day 0 | 82-89% | RevenueCat 2025, Adapty 2026 |
| % starting trial within first week | 78% | RevenueCat 2025 |
| H&F install-to-trial (global median) | 10.9% | Adapty 2026 |
| H&F install-to-trial (North America) | ~14.5% | RevenueCat 2025 |
| H&F install-to-trial (India/SEA) | ~7.6% | RevenueCat 2025 |

### Paywall Presentation Timing
| Timing | Trial Start Rate | Trade-off |
|--------|-----------------|-----------|
| Before onboarding (immediate) | Higher volume but lower quality | Users haven't seen value; more cancellations |
| After onboarding quiz + results | Lower volume but higher quality | Users feel they've received personalized value |
| Best practice (2025-2026) | After onboarding, with results visible behind paywall | Adapty, RevenueCat both recommend |

### Our Expected Onboarding → Trial Start
| Scenario | Rate | Basis |
|----------|------|-------|
| Pessimistic | 25% | $49.99/yr feels expensive without proof |
| Base | 35% | Chronotype results create commitment |
| Optimistic | 50% | Strong value demo + social proof |

---

## 5. Trial → Paid Conversion

### Industry Benchmarks (H&F Category)
| Metric | Value | Source |
|--------|-------|--------|
| H&F trial-to-paid (median) | 35.0% | Adapty 2026 |
| H&F trial-to-paid (RevenueCat, top performers) | 39.9% median, 68.3% P90 | RevenueCat 2025 |
| Global average trial-to-paid (all categories) | 25.6% | Adapty 2026 |
| 5-9 day trial conversion (median, all categories) | 45% | Adapty 2026 |
| Lower price trial-to-paid | 47.8% | RevenueCat 2025 |
| Higher price trial-to-paid | 28.4% | RevenueCat 2025 |

### 7-Day Trial Specific
| Metric | Value | Source |
|--------|-------|--------|
| Day 0 cancellation rate (7-day trial) | ~39% of all cancellations | Adapty 2026 |
| Day 0-1 cancellation rate (7-day trial) | ~64% of all cancellations | Adapty 2026 |
| Overall cancellation rate before trial ends (7-day) | ~30-35% | Adapty 2026 |
| Net trial-to-paid after cancellations | ~35-45% | Derived |

### Day-by-Day Trial Behavior (7-day trial estimate)
```
Day 0: 100% active. 25-30% cancel immediately ("safety cancel")
Day 1: 70% still in trial. 5% more cancel.
Day 2: 65% still in trial. Minimal cancellation.
Day 3: 63% still in trial. Some engagement drop.
Day 4: 61% still in trial.
Day 5: 60% still in trial.
Day 6: 59% still in trial. Last-minute cancellations spike.
Day 7: Trial converts. ~35-45% of original trialists become paid.
```

**Critical insight:** The "Day 0 safety cancel" phenomenon — users start a trial but immediately cancel so they won't be charged, intending to use the full 7 days for free. These users are lost regardless. The ones who DON'T cancel on Day 0 convert at a much higher rate (~55-60%).

### Price Impact on Trial-to-Paid
| Annual Price | Expected Trial-to-Paid | Notes |
|-------------|----------------------|-------|
| $49.99/yr (US) | 25-35% | Mid-range for H&F |
| ₹999/yr (~$12) India | 15-25% | Lower due to market, but price is accessible |
| $29.99/yr (discounted) | 35-45% | Lower price = higher conversion |

### Our Expected Trial → Paid
| Scenario | Rate | Basis |
|----------|------|-------|
| Pessimistic | 20% | High Day 0 cancellations + $49.99 feels steep |
| Base | 35% | Matches H&F median; 7-day trial gives time to form habit |
| Optimistic | 50% | Strong onboarding + alarm becomes essential by Day 3 |

---

## 6. Paid → Retained (Renewal Rates)

### Industry Benchmarks
| Metric | Value | Source |
|--------|-------|--------|
| H&F first-renewal retention (annual) | 30.3% | RevenueCat 2026 (lowest of all categories) |
| H&F first-renewal retention (monthly) | ~15-20% | Estimated from RevenueCat data |
| Annual trial subscribers D380 retention | 19.9% | Adapty 2026 |
| Monthly trial subscribers D380 retention | 14.2% | Adapty 2026 |
| Weekly trial subscribers D380 retention | 5.5% | Adapty 2026 |
| Trial subscribers vs direct buyers retention | 1.4-1.7x better | Adapty 2026 |
| ~30% of annual subscribers cancel in Month 1 | 30% | Adapty 2026 |
| Second-year annual renewal (survivors) | ~40-50% | Industry estimate |

### When Do Subscribers Cancel?
```
Annual Plan Churn Curve:
Month 1:  30% cancel (highest churn point — "buyer's remorse")
Month 2-3: 5% cumulative additional churn
Month 4-6: 3% cumulative additional churn
Month 7-11: 2% cumulative additional churn
Renewal (Month 12): 30-35% of remaining subscribers renew
Year 2 renewal: 40-50% of Year 1 renewers renew
Year 3+: Stabilizes at 55-65% renewal (loyal base)
```

**Key insight:** Getting users past Month 1 is EVERYTHING. If you lose 30% in Month 1, the damage compounds. The app needs a "hook event" in the first 7 days post-conversion (not just post-trial).

### Our Expected Retention
| Scenario | Year 1 Renewal | Year 2 Renewal | Basis |
|----------|---------------|---------------|-------|
| Pessimistic | 25% | 40% | H&F median is brutal at 30.3% |
| Base | 35% | 50% | Enforcement mechanics create dependency |
| Optimistic | 45% | 60% | Alarm + score = daily habit = hard to leave |

---

## 7. Revenue Per User Metrics

### LTV Benchmarks
| Metric | Value | Source |
|--------|-------|--------|
| H&F install LTV (highest of all categories) | $1.20 | Adapty 2026 |
| H&F D14 RPI (revenue per install) | $0.48 | Adapty 2026 |
| H&F D60 RPI | $0.66 | Adapty 2026 |
| Gaming D60 RPI (comparison) | $0.14 | Adapty 2026 |
| Weekly+trial 12-month LTV | $49.27 | Adapty 2026 |
| Weekly+trial 12-month LTV (highest config) | $54.50 | Adapty 2026 |
| Weekly no trial 12-month LTV | $7.40 | Adapty 2026 |
| High-priced apps monthly RLTV per payer | $34.82 | RevenueCat 2025 |
| Low-priced apps monthly RLTV per payer | $10.69 | RevenueCat 2025 |

### iOS vs Android LTV
| Platform | Relative LTV | Notes |
|----------|-------------|-------|
| iOS | 1.0x (baseline) | Higher ARPU, higher conversion, higher willingness to pay |
| Android | 0.3-0.5x iOS | Lower conversion, more price-sensitive, more free-seekers |

**Alarmy example:** iOS revenue $500K/month on 500K downloads ($1.00/download). Android revenue $100K/month on 1M downloads ($0.10/download). That's a 10x LTV difference per download.

### Our Expected LTV
| Metric | US (iOS) | US (Android) | India (Android) | India (iOS) |
|--------|----------|-------------|----------------|-------------|
| Install LTV | $2.50-4.00 | $0.50-1.00 | $0.15-0.40 | $0.50-1.00 |
| Paying user LTV (Year 1) | $49.99 + ~$3 IAP = $53 | $49.99 + ~$2 IAP = $52 | ₹999 + ~₹100 IAP = ~$13 | ₹999 + ~₹100 IAP = ~$13 |
| Paying user LTV (Lifetime, 3yr) | $85-110 | $80-100 | $22-30 | $22-30 |
| Blended ARPU (all installs) | $1.50-3.00 | $0.30-0.70 | $0.10-0.25 | $0.30-0.60 |

### Annual vs Monthly Subscriber LTV
| Plan Type | 12-Month LTV | Notes |
|-----------|-------------|-------|
| Annual ($49.99/yr) | $49.99 | Single payment, 30.3% renew = $15.15 Year 2 expected value |
| Monthly ($5.99/mo) | $5.99 x median tenure ~4 months = $24 | Higher effective rate but most churn before Year 1 |
| Annual with trial (our model) | Higher than direct annual buyers | Adapty confirms trial boosts annual LTV in H&F |

---

## 8. Geographic Splits

### Conversion Rate Differences by Region
| Funnel Stage | North America | Western Europe | India/SEA | Source |
|-------------|--------------|----------------|----------|--------|
| Download → Trial | 14.5% | ~11% | 7.6% | RevenueCat 2025 |
| D35 Download → Paid (median) | 2.6% | 2.0% | 1.4% | RevenueCat 2025 |
| D35 Download → Paid (P90) | 10.4% | ~7% | ~4% | RevenueCat 2025 |
| Trial → Paid | ~40% | ~35% | ~20-25% | Estimated from RevenueCat |
| Willingness to pay | Highest | High | Low | RevenueCat 2025 |

### iOS vs Android by Market
| Market | iOS Share | Android Share | Revenue Split |
|--------|----------|--------------|---------------|
| US | ~55% | ~45% | iOS generates ~80% of revenue |
| India | ~3% | ~97% | Android dominates, low ARPU |
| UK | ~50% | ~50% | iOS generates ~70% of revenue |
| Japan | ~65% | ~35% | Highest willingness to pay globally |

### Pricing Elasticity
| Market | Our Price | As % of Monthly Income | Expected Relative Conversion |
|--------|-----------|----------------------|----------------------------|
| US ($49.99/yr) | $49.99 | ~0.08% of median income | Baseline (1.0x) |
| India (₹999/yr) | ~$12/yr | ~0.15% of median urban income | 0.5-0.7x US conversion rate |
| UK (£39.99/yr) | ~$50/yr | ~0.10% of median income | 0.9x US |
| Japan (¥4,800/yr) | ~$33/yr | ~0.08% of median income | 1.0-1.1x US (highest WTP) |

**India pricing analysis:** ₹999/yr (~$12) is accessible for urban 18-35 year olds (our target). For context, Alarmy charges ₹1,999/yr in India, Headspace charges ₹999/yr. Our ₹999 price point is competitive. However, India's trial-to-paid rate is roughly half of the US rate, and the revenue per user is ~4x lower. India provides VOLUME but not revenue per user.

**₹999 vs $49.99 in respective markets:** ₹999 converts WORSE in India than $49.99 in the US despite being "cheaper" in absolute terms. This is because:
1. Lower digital payment penetration in India
2. Cultural resistance to subscription apps (Android/free-first culture)
3. More free alternatives available
4. Lower disposable income even adjusted for PPP

---

## 9. Segment-Specific Conversion Expectations

| Segment | Volume | Install CVR | Trial Start | Trial→Paid | LTV | Notes |
|---------|--------|------------|-------------|------------|-----|-------|
| **Alarm Seekers** | High | 35-45% | 40-50% | 35-45% | Medium | Highest intent. Searching "alarm app" or "wake up app". Ready to try. |
| **Night Owls / Strugglers** | Medium | 20-30% | 30-40% | 25-35% | Medium-High | Emotional resonance with "social jet lag" messaging. Found via TikTok/content. Need convincing. |
| **ADHD Users** | Medium | 25-35% | 35-45% | 30-40% | High | Desperate for structure. High engagement IF the app "gets" them. Strong word-of-mouth in ADHD communities. |
| **Optimizers / Biohackers** | Low | 30-40% | 35-50% | 40-55% | Highest | Willing to pay premium. Data-hungry. Will stay if chronotype insights are deep. Lowest volume but highest per-user value. |
| **Competitors (Social)** | Variable | 15-25% | 20-30% | 15-25% | Low-Medium | Viral acquisition via challenges/streaks. Lower conversion but high volume potential. High churn. |
| **Science Curious** | Low-Medium | 10-20% | 25-35% | 20-30% | Medium | Comes via web chronotype quiz. Longer journey to install. Higher quality but slow. |

### Weighted Blended Conversion (Mix of Segments)
Assuming organic acquisition mix: 40% Alarm Seekers, 25% Night Owls, 15% ADHD, 10% Optimizers, 5% Competitors, 5% Science Curious

**Blended download-to-paid: ~6-8%** (aligns with our base case financial model of 7%)

---

## 10. Realistic Year 1 Scenario

### Assumptions
- Solo dev, $0 paid marketing
- Organic only: ASO + TikTok (2-3 videos/week) + Reddit + ProductHunt launch
- Markets: US (60%), India (25%), UK/Other (15%)
- Hard paywall: $49.99/yr US, ₹999/yr India, £39.99/yr UK
- Cross-platform from Day 1 (Expo/React Native)

### Monthly Install Projections

| Month | Event | US Installs | India Installs | UK/Other | Total | Cumulative |
|-------|-------|-------------|---------------|----------|-------|------------|
| M1 | Launch + ProductHunt | 1,500 | 800 | 400 | 2,700 | 2,700 |
| M2 | ASO indexing + initial TikTok | 1,200 | 700 | 350 | 2,250 | 4,950 |
| M3 | First TikTok traction | 1,800 | 1,000 | 450 | 3,250 | 8,200 |
| M4 | ASO compounding | 2,200 | 1,200 | 550 | 3,950 | 12,150 |
| M5 | Steady organic growth | 2,800 | 1,500 | 650 | 4,950 | 17,100 |
| M6 | Content flywheel working | 3,500 | 2,000 | 800 | 6,300 | 23,400 |
| M7 | Word of mouth kicks in | 4,200 | 2,500 | 1,000 | 7,700 | 31,100 |
| M8 | ASO matured + reviews | 4,800 | 3,000 | 1,100 | 8,900 | 40,000 |
| M9 | Steady state | 5,200 | 3,500 | 1,200 | 9,900 | 49,900 |
| M10 | Seasonal bump (New Year prep) | 5,500 | 3,800 | 1,300 | 10,600 | 60,500 |
| M11 | Steady | 5,800 | 4,000 | 1,400 | 11,200 | 71,700 |
| M12 | Anniversary | 6,000 | 4,500 | 1,500 | 12,000 | 83,700 |

### Conversion Funnel Applied (Base Case)

| Metric | US | India | UK/Other | Total |
|--------|-----|-------|----------|-------|
| Year 1 total installs | 44,500 | 28,500 | 10,700 | 83,700 |
| Download → paid rate | 7% | 3% | 5.5% | — |
| New paid subscribers (Year 1) | 3,115 | 855 | 589 | 4,559 |
| Still active at Month 12 (accounting for churn) | ~2,200 | ~600 | ~415 | ~3,215 |
| Annual plan revenue (US) | $3,115 × $49.99 = $155,719 | — | — | — |
| Annual plan revenue (India) | — | $855 × $12 = $10,260 | — | — |
| Annual plan revenue (UK/Other) | — | — | 589 × $45 = $26,505 | — |
| IAP revenue (streak freezes, ~$2-3/payer/yr) | ~$7,800 | ~$1,100 | ~$1,500 | $10,400 |
| **Total Year 1 Revenue** | **$163,519** | **$11,360** | **$28,005** | **$202,884** |

### Summary: Year 1 Base Case
| Metric | Value |
|--------|-------|
| Month 1 installs | ~2,700 |
| Month 6 installs | ~6,300 |
| Month 12 installs | ~12,000 |
| **Month 12 total installs (cumulative)** | **~83,700** |
| **Month 12 active paid subscribers** | **~3,200** |
| **Month 12 MRR** | **~$13,400** |
| **Year 1 total revenue (gross)** | **~$203K** |
| **Year 1 ARR (run rate at M12)** | **~$161K** |
| Apple/Google commission (15-30%) | -$30K to -$61K |
| **Year 1 net revenue** | **~$142K - $173K** |

### Pessimistic Year 1 Scenario
| Metric | Value |
|--------|-------|
| Total installs | ~35,000 |
| Active paid subscribers M12 | ~800 |
| Year 1 revenue (gross) | ~$52K |
| Year 1 ARR (run rate at M12) | ~$40K |

### Optimistic Year 1 Scenario
| Metric | Value |
|--------|-------|
| Total installs | ~180,000 |
| Active paid subscribers M12 | ~9,000 |
| Year 1 revenue (gross) | ~$480K |
| Year 1 ARR (run rate at M12) | ~$400K |

---

## Key Risks to These Numbers

1. **Month 1 is the hardest.** ProductHunt gives a spike (1-2 days) but not sustained installs. If TikTok doesn't hit, M1-M3 could be 50% lower.

2. **ASO takes 2-4 months to compound.** You won't rank for "alarm app" immediately. Long-tail keywords ("chronotype alarm", "social jet lag") will be your early wins.

3. **India installs are cheap but revenue is thin.** 28,500 Indian installs contribute only ~$11K in Year 1. The ROI question is whether the ratings/reviews volume justifies the support cost.

4. **The 30.3% annual renewal rate is the single biggest threat.** If you can push renewal to 40%+ through enforcement mechanics (daily alarm = daily touch), the LTV math changes dramatically.

5. **TikTok organic reach is declining.** 2024-2025 saw TikTok push creators toward paid. Organic reach is still possible but harder than 2022-2023.

6. **"Social jet lag" is a novel concept.** Advantage: first mover. Risk: users don't search for it yet. You'll need to EDUCATE the market through content before ASO captures demand.

---

## Benchmarks vs Our Financial Model Cross-Check

| Metric | Our Financial Model | This Research | Delta |
|--------|-------------------|---------------|-------|
| Download → trial | 35% (base) | 14.5% (NA median) - 35% (optimistic) | Model is optimistic; 25-30% more realistic |
| Trial → paid | 20% (base) | 35% (H&F median) | Model is conservative; 30% more realistic |
| Download → paid (net) | 7% (base) | 6-8% (blended) | Aligned |
| Year 1 renewal | 35% (base) | 30.3% (H&F median) | Slightly optimistic but defensible |
| Month 1 downloads | 5,000 (base) | 2,700 (this research) | Model was optimistic; adjusted down |

**Net assessment:** The financial model's 7% download-to-paid base case is realistic, but it arrives via different sub-rates than assumed. The download-to-trial rate was too high (35% assumed vs ~20-25% realistic for a $49.99 app), but the trial-to-paid rate was too conservative (20% assumed vs 30-35% realistic for H&F). These errors roughly cancel out, making the end-to-end conversion broadly accurate.

The biggest adjustment needed: **Month 1 downloads should be 2,000-3,000 not 5,000** for pure organic with zero existing audience. The financial model's 5,000 base case assumes at least one TikTok video gaining moderate traction in Month 1, which is a coin flip.

---

## Sources

- [RevenueCat State of Subscription Apps 2025](https://www.revenuecat.com/state-of-subscription-apps-2025/)
- [RevenueCat State of Subscription Apps 2026](https://www.revenuecat.com/state-of-subscription-apps/)
- [RevenueCat 2026 Trends & Benchmarks Summary](https://www.revenuecat.com/blog/growth/subscription-app-trends-benchmarks-2026/)
- [Adapty State of In-App Subscriptions 2026](https://adapty.io/state-of-in-app-subscriptions/)
- [Adapty H&F App Subscription Benchmarks 2026](https://adapty.io/blog/health-fitness-app-subscription-benchmarks/)
- [Adapty App Store Conversion Rate by Category 2026](https://adapty.io/blog/app-store-conversion-rate/)
- [Adapty Free Trial vs Direct Purchase](https://adapty.io/blog/free-trial-vs-direct-purchase-subscription-apps/)
- [Business of Apps - App Subscription Trial Benchmarks 2026](https://www.businessofapps.com/data/app-subscription-trial-benchmarks/)
- [Business of Apps - H&F App Benchmarks 2026](https://www.businessofapps.com/data/health-fitness-app-benchmarks/)
- [Business of Apps - App Onboarding Rates 2025](https://www.businessofapps.com/data/app-onboarding-rates/)
- [Business of Apps - LTV App Rates 2026](https://www.businessofapps.com/data/ltv-app-rates/)
- [AppTweak Average Conversion Rate Per Category 2024](https://www.apptweak.com/en/aso-blog/average-app-conversion-rate-per-category)
- [SplitMetrics App Store Screenshot Guide](https://splitmetrics.com/blog/app-store-screenshots-aso-guide/)
- [SplitMetrics App Preview Videos](https://splitmetrics.com/blog/create-app-preview-video-app-store-ios/)
- [Enable3 App Retention Benchmarks 2026](https://enable3.io/blog/app-retention-benchmarks-2025)
- [UserPilot Onboarding Checklist Benchmarks 2025](https://userpilot.com/blog/user-onboarding-metrics/)
- [Chameleon User Onboarding Benchmark Report 2025](https://www.chameleon.io/benchmark-report)
- [UserGuiding Onboarding Statistics 2026](https://userguiding.com/blog/user-onboarding-statistics)
- [Sensor Tower State of Mobile H&F 2025](https://sensortower.com/blog/state-of-mobile-health-and-fitness-in-2025)
- [Kantar: Willingness to Pay for H&F Apps](https://www.kantar.com/north-america/inspiration/research-services/how-willing-are-consumers-to-pay-for-health-and-fitness-apps-pf)
- [RevenueCat: Right Trial Length](https://www.revenuecat.com/blog/growth/7-day-trial-subscription-app/)
- [Adapty: High-Performing Paywall 2026](https://adapty.io/blog/high-performing-paywall-2026/)
