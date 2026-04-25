# Pricing Strategy Document

> ⚠️ **SUPERSEDED (2026-04-17)** — This document reflects the OLD hard-paywall + 7-day-trial model. As of April 16-17, 2026, the project pivoted to **freemium with 7-usage consumption trial + credit wallet + referrals**. See `strategy/revenue-model-v2.md` for the current model. This document is preserved for historical reference.
>
> **Key obsolete elements in this doc:**
> - Hard paywall model (now freemium)
> - 7-day calendar trial (now 7-usage consumption trial)
> - Annual $49.99 retail (now $39.99)
> - India ₹849 (now ₹999)
> - "No lifetime plan" (lifetime added at $89)
> - Streak freeze as pure cash IAP (now credit-based with cash fallback)
> - No credit wallet or referral program (now core V1.0 features)
> - Freemium comparison numbers (context changed)

*Status: SUPERSEDED — Do not use for decisions. See revenue-model-v2.md.*

---

## Pricing Philosophy

**We sell discipline, not features.** The price must feel like a commitment — cheap enough to try, expensive enough that users take it seriously. "I paid for this, so I better use it" is a retention mechanism disguised as pricing.

---

## Paywall Model: Hard Paywall + 7-Day Free Trial

### Why Hard Paywall (Not Freemium)

| Factor | Hard Paywall | Freemium |
|--------|-------------|----------|
| Download-to-paid conversion | 10.7% | 2.1% |
| Revenue per install | Higher | Lower |
| User quality | Higher intent | Mixed |
| Support burden | Lower (fewer users, paying users less demanding) | Higher |
| Server costs | Lower (fewer free users consuming resources) | Higher |
| AI costs | Controlled (only paying users trigger AI) | Uncontrolled |

**Data source:** RevenueCat 2025 — across 115K+ apps, hard paywall converts 5x better than freemium.

**The Calm case study:** Calm tripled conversion from 2% to 7% by reducing free content from 90% to 5%. Less free = more paid.

### What Free Users Get (During Trial)
- Full access to everything for 7 days
- After trial expires:
  - Basic alarm (built-in sounds, no missions)
  - Life Score visible but frozen (doesn't update)
  - Streak visible but frozen
  - "Your score is waiting. Unlock it." — persistent Dare Engine nudge

### Why 7-Day Trial (Not 3 or 14)

| Duration | Pros | Cons |
|----------|------|------|
| 3-day | Higher urgency | Not enough time to form habit. User hasn't experienced a full week. |
| **7-day** | **Covers all 7 days of the week. User experiences weekend vs weekday difference. Enough to build small streak (7 days = first meaningful milestone).** | **Some tire-kickers survive.** |
| 14-day | More habit formation time | Too long — user forgets they're on trial. Lower conversion. |

**7 days is the industry sweet spot for H&F apps.** (RevenueCat data: 7-day trials convert best in H&F category.)

---

## Pricing Tiers

### Tier 1: Premium Markets (US, UK, Canada, Australia, Western Europe, Japan, Korea)

| Plan | Price | Effective Monthly | Annual Savings |
|------|-------|-------------------|----------------|
| Annual | $49.99/year | $4.17/month | 30% vs monthly |
| Monthly | $5.99/month | $5.99/month | — |

### Tier 2: Mid Markets (Brazil, Mexico, Turkey, Eastern Europe, Thailand, Malaysia)

| Plan | Price | Effective Monthly |
|------|-------|-------------------|
| Annual | $24.99/year | $2.08/month |
| Monthly | $2.99/month | $2.99/month |

### Tier 3: Emerging Markets (India, Indonesia, Philippines, Vietnam, Egypt, Nigeria)

| Plan | Price (USD) | Price (Local) | Effective Monthly |
|------|------------|---------------|-------------------|
| Annual | $11.99/year | ₹999/year | ₹83/month |
| Monthly | $1.49/month | ₹149/month | ₹149/month |

### Why This Pricing

| Decision | Reasoning |
|----------|-----------|
| $49.99 not $59.99 (US) | Undercut Alarmy ($59.99) while offering 4x value. Psychological: under $50 feels different than over $50. |
| ₹999 not ₹849 (India) | Stress test research (stress-test-chronotype-revenue.md) found ₹849 is too cheap — signals low quality. ₹999/year = ₹83/month, still affordable but positions as premium. Can test up to ₹1,499. |
| Monthly at ~12x annual monthly | Industry standard. Makes annual look like obvious deal. 30% savings is the sweet spot. |
| No lifetime plan | Lifetime plans attract the worst users (buy once, never engage, leave 1-star review when they inevitably churn). Subscription aligns incentives: we must keep delivering value. |
| No weekly plan | Weekly plans have highest LTV ($49.27/yr per RevenueCat) but feel scammy for our brand. Our personality is bold, not deceptive. |

---

## In-App Purchases

| IAP | Price (Tier 1) | Price (Tier 3) | Purpose |
|-----|---------------|----------------|---------|
| Streak Freeze (1 use) | $0.99 | ₹49 | Protect streak on missed day. Loss aversion monetization. |
| Streak Freeze Pack (3 uses) | $1.99 | ₹99 | Slight discount for bulk. Anchor for single purchase. |
| Premium Sound Pack | $2.99 | ₹149 | Additional alarm sounds. One-time. Low priority. |

### Streak Freeze Psychology

This is the most important IAP. It works because:
1. User has a 23-day streak
2. They know they'll miss tomorrow (travel, event, illness)
3. The thought of losing the streak causes genuine anxiety
4. $0.99 to protect 23 days of work? Instant purchase.

**Expected:** 3-5 freeze purchases per active user per year = $3-5 incremental revenue.

**Dare Engine copy for freeze prompt:** "So you're taking a day off? Fine. But it'll cost you. $0.99 to keep your streak alive. Or lose 23 days of work. Your call."

---

## Paywall Screen Strategy

### First Paywall (After Onboarding)

**Timing:** Immediately after the 3-screen onboarding. User has set their wake time, sleep time, and first mission. They're invested.

**Layout:**
1. Hero: "Your first dare starts tonight." + Life Score preview showing 0
2. What you get: 3-4 bullet points with icons
   - Alarm missions that force you out of bed
   - Life Score that tracks your discipline
   - AI morning digest that expires if you snooze
   - A personality that won't let you quit
3. Social proof: "Join 50K+ people who stopped hitting snooze" (or real number once available)
4. Price: Annual plan highlighted (with crossed-out monthly price to show savings)
5. Trial CTA: "Start 7-Day Free Trial" — large, primary button
6. Fine print: "Cancel anytime. You won't be charged until [date]."
7. Secondary: "Maybe later" — small text link (not a button)

### Re-engagement Paywall (After Trial Expires)

**Trigger:** Any premium action attempted after trial ends.

**Layout:**
1. Dare Engine copy: "You had 7 days. You chose to ignore them. Your streak? Gone. Your score? Frozen. But hey, at least you saved $4.17/month."
2. Show their frozen score and dead streak
3. "Come back. We dare you."
4. Same pricing layout as first paywall

### Upgrade Prompts (Monthly → Annual)

**Trigger:** Monthly subscriber at renewal month 3, 6, 9.

**Copy:** "You've paid $17.97 in 3 months. Annual is $49.99 for 12 months. That's $2.34/month. You're literally paying double right now. Switch?"

---

## Price Anchoring Strategy

On the paywall screen:
```
Monthly    $5.99/month
Annual     $49.99/year  ← BEST VALUE (save 30%)
                         That's just $4.17/month
```

The monthly price exists primarily to make annual look cheap. Expected split: 65% annual, 35% monthly.

---

## Competitor Pricing Comparison

| App | Annual | Monthly | Model |
|-----|--------|---------|-------|
| Alarmy | $59.99 | $4.99 | Freemium (heavy ads) + premium |
| Sleep Cycle | $39.99 | $9.99 | Freemium + premium |
| Opal | $239.99 | — | Hard paywall (annual only) |
| Fabulous | $79.99 | $16.99 | Freemium + premium |
| Habitica | $47.99 | $4.99 | Freemium + premium |
| Calm | $69.99 | $14.99 | Hard paywall |
| **Ours** | **$49.99** | **$5.99** | **Hard paywall + 7-day trial** |

**We're priced:**
- 17% below Alarmy (more features, less price)
- 79% below Opal (they charge $240 for just screen time!)
- 37% below Fabulous (they charge $80 and make <$1M)
- 28% below Calm (different category but same model)

**The value perception:** "Alarmy charges $60 for just an alarm. We charge $50 for alarm + morning routine + AI + gamification + personality. No-brainer."

---

## Geo-Pricing Implementation

### How to Set Different Prices

**RevenueCat handles this.** You configure:
1. Products in App Store Connect / Google Play Console with regional pricing
2. RevenueCat Offerings that map to these products
3. The app fetches offerings from RevenueCat SDK → shows local price automatically

**Apple's auto-pricing:** Apple provides suggested equivalent prices per country. For most Tier 2/3 markets, use Apple's suggested pricing (it accounts for tax, purchasing power, and local conventions).

**India-specific:** Override Apple's suggestion for India. Apple suggests ₹4,900 for a $49.99 equivalent — too high. Manually set ₹849/year. Same for Google Play.

### Countries with Specific Pricing

| Country | Annual Price | Rationale |
|---------|------------|-----------|
| US, UK, Canada, Australia | $49.99 | Baseline |
| Japan, Korea | ¥7,400 / ₩69,000 (~$49.99 equivalent) | High ARPU markets, match US |
| Germany, France, EU | €49.99 | Slight premium due to VAT inclusion |
| India | ₹849 ($10) | 5x lower than US. Volume play. |
| Brazil | R$129 (~$25) | Middle tier |
| Indonesia | IDR 169,000 (~$10) | Match India tier |
| Mexico | MXN 449 (~$25) | Middle tier |
| Turkey | ₺499 (~$15) | Adjusted for purchasing power |

---

## RevenueCat Configuration Plan

### Products to Create (App Store Connect + Play Store Console)

| Product ID | Type | Description |
|-----------|------|-------------|
| `annual_premium` | Auto-renewable subscription | Annual plan, 7-day trial |
| `monthly_premium` | Auto-renewable subscription | Monthly plan, no trial |
| `streak_freeze_1x` | Consumable IAP | Single streak freeze |
| `streak_freeze_3x` | Consumable IAP | 3-pack streak freeze |
| `sound_pack_premium` | Non-consumable IAP | Premium alarm sounds |

### Offerings

| Offering | Products | When Shown |
|----------|----------|-----------|
| `default` | annual_premium (featured), monthly_premium | Standard paywall |
| `winback` | annual_premium (with extended trial?) | Lapsed user re-engagement |
| `upgrade` | annual_premium | Monthly-to-annual upgrade prompt |

### Entitlements

| Entitlement | Grants Access To |
|------------|-----------------|
| `premium` | All features: missions, full score, AI digest, voice agent, adaptive intelligence, journal, achievements, leaderboard, day mode |

---

## Pricing Experiments to Run (Post-Launch)

| Experiment | Hypothesis | Timeline |
|-----------|-----------|----------|
| $39.99 vs $49.99 vs $59.99 annual | $49.99 may not be optimal. Test elasticity. | Month 2-3 |
| 3-day vs 7-day vs 14-day trial | 7-day is assumed best but needs validation | Month 3-4 |
| Hard paywall vs soft paywall (limited free) | Hard paywall may lose top-of-funnel | Month 4-5 |
| Annual-only vs annual+monthly | Removing monthly might push more annual | Month 5-6 |
| Streak freeze at $0.99 vs $1.99 | Test price sensitivity on impulse IAP | Month 3 |
| India at ₹849 vs ₹1,499 vs ₹1,999 | Find India's ceiling | Month 3-4 |

**RevenueCat Experiments** feature handles A/B testing of offerings natively. No custom code needed.

---

## Subscription Lifecycle Copy (Dare Engine)

| Moment | Copy |
|--------|------|
| Trial start | "7 days. That's all you get for free. Make them count." |
| Trial day 3 | "Day 3 of 7. You're starting to feel it, aren't you? That's discipline. Don't waste it." |
| Trial day 5 | "2 days left on your trial. Your score is 67. You really gonna walk away from that?" |
| Trial day 7 (morning) | "Last free day. Tomorrow your score freezes unless you commit. $4.17/month. Less than your coffee." |
| Trial expired | "Trial's over. Your streak? Frozen at 7. Your score? Locked. But hey, at least you saved $4/month. Bold move." |
| Monthly renewal | "Another month. You're still here. Respect. (But seriously, switch to annual — you're overpaying.)" |
| Annual renewal approaching | "365 days. 365 dares. And you took them all. Renew and let's see what Year 2 looks like." |
| Cancellation | "So you're quitting. Your 47-day streak says you shouldn't. But it's your life. We'll be here when you come back." |
| Win-back (30 days after cancel) | "It's been 30 days. Your score would be 0 by now. Miss us yet?" |

---

*This pricing strategy should be validated within the first 90 days of launch using RevenueCat's experiment tools. No price is permanent — we optimize based on data.*
