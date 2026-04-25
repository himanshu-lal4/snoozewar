# Alarmy (Delightroom) Deep Metrics Analysis

*Research date: April 7, 2026*
*Data confidence ratings: HIGH / MEDIUM / LOW / UNKNOWN for each metric*

---

## Executive Summary

Alarmy is significantly more ad-revenue dependent than most people assume. The subscription narrative ($15M/year) is misleading -- that is TOTAL revenue, not subscription revenue. Their actual subscriber count is likely modest relative to their massive download base. Here is everything that is publicly available, what can be reliably estimated, and what is genuinely unknown.

---

## 1. Revenue (What We Actually Know)

| Metric | Value | Confidence | Source |
|--------|-------|------------|--------|
| 2021 total revenue | $11.21M | HIGH | Indie Hackers / Gaps.com reporting |
| 2022 total revenue | ~$15.03M | HIGH | Gaps.com / company reporting |
| Recent monthly revenue (Sensor Tower est.) | ~$500K/month (~$6M/year IAP only) | MEDIUM | Sensor Tower app page estimates |
| Recent monthly downloads | 500K-600K/month | MEDIUM | Sensor Tower estimates |
| Ad revenue as % of total | ~70% | HIGH | Verve case study explicitly states this |
| Subscription revenue as % of total | ~30% | HIGH | Derived from above |
| Ad revenue growth (Q4 2022 to Q4 2023) | +54% | HIGH | Verve case study |
| Ad impression growth (2023) | +128% | HIGH | Verve case study |
| InMobi daily ad revenue uplift | +87% | HIGH | InMobi case study |

### Critical Insight: The Revenue Split

**Ad revenue = 70% of total sales.** This comes directly from the Verve case study. This means:

- If total revenue is ~$15-20M/year, **subscription/IAP revenue is only ~$4.5-6M/year**
- The Sensor Tower $500K/month estimate likely captures only App Store/Play Store IAP revenue (subscriptions + one-time purchases), NOT ad revenue
- Total actual revenue (ads + subscriptions) could be **$16-22M/year** if we add ad revenue on top of the $6M IAP

### Revenue Trajectory
- 2019: ~$2.86M (derived from 292.6% 3-year growth to $11.2M in 2021)
- 2021: $11.21M
- 2022: ~$15.03M
- 2023-2024: Likely $18-22M+ given 54% ad revenue growth and continued download growth
- 2025-2026: Unknown but trajectory is strong upward

---

## 2. Paying Subscribers (Estimated -- Not Publicly Disclosed)

**Delightroom has NEVER publicly disclosed their subscriber count.** Everything below is derived math.

### Method 1: Revenue-Based Estimate

If subscription/IAP revenue = ~$6M/year (Sensor Tower):
- At $59.99/year (annual plan): **100,000 annual subscribers**
- At $7/month (monthly plan): **71,400 monthly subscribers**
- Reality is a mix. Assuming 60% annual / 40% monthly (industry standard for apps with hard paywall):
  - ~60,000 annual subs + ~28,500 monthly subs = **~88,500 paying subscribers**
  - Could range from **70,000 to 120,000** depending on geo pricing mix

### Method 2: MAU-Based Estimate with Conversion Benchmarks

- MAU: 4.5M (company-stated)
- Industry free-to-paid conversion for utility apps: 2-5%
- At 2%: 90,000 subscribers
- At 3%: 135,000 subscribers
- At 5%: 225,000 subscribers

### Best Estimate: 80,000 - 150,000 paying subscribers

This aligns across both methods. The lower end is more likely given that:
1. Alarmy's ad-heavy model means they don't push conversion as hard
2. The Airbridge case study explicitly says they're still WORKING on improving free-to-paid conversion
3. 70% ad revenue dependency suggests a relatively low conversion rate (~2%)

### Monthly vs Annual Breakdown (estimate)
- Annual subscribers: ~50,000-90,000
- Monthly subscribers: ~20,000-40,000
- Monthly subscribers churn faster but are a significant minority

---

## 3. Conversion Rate (Free to Paid)

**Not publicly disclosed.** Estimated:

| Metric | Estimate | Confidence |
|--------|----------|------------|
| Download to trial start | 5-10% | LOW (industry benchmark) |
| Trial to paid conversion | 30-40% | LOW (H&F category benchmark) |
| Overall download to paid | ~2-3% | MEDIUM (derived from revenue math) |

### Evidence:
- Airbridge case study says Alarmy is actively working to IMPROVE free-to-paid conversion, implying it's below their target
- 70% ad revenue dependency means the business model doesn't require high conversion
- RevenueCat 2026 benchmark: "Only 3-5% of all users convert into buying a subscription"
- For Alarmy specifically, the 70/30 ad/sub split suggests they're at the lower end (~2%)

---

## 4. Active Users vs Downloads

| Metric | Value | Confidence | Source |
|--------|-------|------------|--------|
| Cumulative downloads (all-time) | 82M+ | HIGH | Company website |
| Monthly Active Users (MAU) | 4.5M+ | HIGH | Company website (alar.my/en/company) |
| Daily Active Users (DAU) | 1.9M - 2.2M | HIGH | InMobi case study / Airbridge case study |
| DAU/MAU ratio | ~42-49% | MEDIUM | Derived from above |
| % of downloads that are active | ~5.5% | HIGH | 4.5M MAU / 82M downloads |

### What This Means:
- **94.5% of all downloads have churned** -- only 5.5% are still active monthly
- **DAU/MAU of ~42-49% is exceptionally high** for a utility app (benchmark is 20-30%)
- This makes sense: an alarm app is used DAILY by definition. If you use Alarmy, you use it every day
- The 2.2M figure from Airbridge ("helps 2.2M+ users wake up every day") is likely the peak/marketing number
- The 1.9M figure from InMobi is likely the measured average

---

## 5. Retention & Churn

**Not publicly disclosed.** Here's what we can derive:

### Download Retention
- 82M cumulative downloads, 4.5M MAU = **~5.5% lifetime retention**
- But this is over 10+ years of downloads, so many are naturally lapsed
- More meaningful: 500-600K downloads/month, ~4.5M MAU
- If MAU is stable, that means ~500K users churn per month and ~500K new ones replace them
- **Implied monthly churn of active users: ~11%** (500K / 4.5M)

### Subscriber Retention (estimated based on industry)
- Health & Fitness annual renewal rate: 35-45% (RevenueCat data)
- Monthly subscriber churn: 10-15%/month (industry benchmark)
- Alarm apps may be slightly better because daily use creates strong habits

### New Subscriber Adds Per Month (estimated)
- If ~500-600K downloads/month
- ~5-10% start a trial = 25,000-60,000 trials/month
- ~30-40% convert trial to paid = 7,500-24,000 new subscribers/month
- Net growth depends on churn: if 10-15% of existing base churns monthly, net growth could be near zero or slightly positive

---

## 6. Ad Revenue Details

| Metric | Value | Confidence | Source |
|--------|-------|------------|--------|
| Ad revenue as % of total | ~70% | HIGH | Verve case study |
| Ad partners | InMobi, Verve (Performance+), AppLovin, AdMob | HIGH | Case studies + privacy policy |
| Ad impression growth (2023) | +128% YoY | HIGH | Verve case study |
| Daily ad revenue growth (InMobi) | +87% | HIGH | InMobi case study |
| In-house ad platform | DARO | HIGH | Verve case study |

### Why This Matters For Your App:
Alarmy's "success story" is primarily an AD MONETIZATION story, not a subscription story. They have 1.9M people opening the app every single day, and they show ads at high-value moments (dismissing alarm, snooze screen). This is their actual business model.

The subscription layer ($4.5-6M/year estimated) is significant but secondary. They're actively trying to grow it (Airbridge case study), suggesting they know the ad model has limits.

---

## 7. App Store Reviews (Proxy for Active Base)

| Platform | Reviews | Rating | Confidence |
|----------|---------|--------|------------|
| Google Play | 2,030,415+ | 4.6/5 | HIGH |
| Apple App Store | ~1.7M total (across all storefronts) | 4.8/5 | HIGH |
| Apple App Store (US only) | ~190K+ | 4.8/5 | MEDIUM |

- Total: ~3.7M+ reviews across both platforms
- Review-to-download ratio: ~4.5% (3.7M / 82M) -- typical for utility apps
- High ratings on both platforms indicate strong product-market fit

---

## 8. Company Context

| Metric | Value | Confidence |
|--------|-------|------------|
| Founded | 2014 | HIGH |
| HQ | Seongnam-si, South Korea | HIGH |
| Employees | 20-49 | MEDIUM (Slintel) |
| Funding raised | $0 (bootstrapped) | CONFLICTING* |
| Strategic investments made | 2 (NOCT Research, Soundable Health) | HIGH |

*Note: Crunchbase shows a $9M raise in Sept 2024 bringing total to $15M, but Tracxn says no funding raised. This is contradictory. The Crunchbase data may be conflating company revenue with funding, or Tracxn may be outdated. The fact that Delightroom is making outbound investments suggests they are profitable and likely self-funded.

---

## 9. What Is GENUINELY Unknown (Cannot Be Found Publicly)

1. **Exact subscriber count** -- Never disclosed by Delightroom
2. **Exact conversion rate** -- Never disclosed; Airbridge case study hints it's a work-in-progress
3. **Renewal/churn rates** -- Not disclosed by anyone in this category
4. **Monthly vs annual subscriber split** -- Not disclosed
5. **Net subscriber growth per month** -- Not disclosed
6. **Revenue by geography** -- Not disclosed (though 85% of users are outside Korea)
7. **LTV per user** -- Not disclosed
8. **CAC** -- Not disclosed (though they use paid acquisition via multiple channels)
9. **Exact 2024-2026 revenue** -- The $500K/month Sensor Tower estimate is IAP only; total with ads unknown

---

## 10. Key Takeaways For Our App

1. **Don't assume Alarmy = subscription powerhouse.** Their model is 70% ads. We should plan for subscription-first from day one, which means our conversion mechanics must be stronger.

2. **4.5M MAU from 82M downloads = 5.5% retention.** This is our realistic ceiling. If we get 1M downloads in year 1, expect 50-60K MAU.

3. **DAU/MAU of ~45% is achievable** because alarm apps are daily-use by nature. This is our biggest advantage for subscription stickiness.

4. **500K downloads/month is achievable** for a top alarm app. That's our year 2-3 target.

5. **The real benchmark: ~$6M/year in subscription revenue** from ~4.5M MAU. That's ~$1.33 subscription ARPU per MAU per year. We need to beat this significantly.

6. **~80K-150K paying subscribers** from 82M downloads and 4.5M MAU is a ~2% conversion rate. If we can hit 5-7% with better monetization design (no ad dependency, stronger paywall, better value prop), we could match their subscription revenue with 1/3 of their user base.

---

*Sources: Verve case study, InMobi case study, Airbridge case study, Sensor Tower estimates, company website (alar.my/en/company), Indie Hackers, Gaps.com, App Store/Play Store public data, RevenueCat State of Subscription Apps 2026, Tracxn, Crunchbase, ZoomInfo, Slintel*
