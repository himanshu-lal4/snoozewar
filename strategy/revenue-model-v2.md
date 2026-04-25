# Revenue Model V2 — Freemium with Usage-Based Trial
*Created: 2026-04-16*
*Status: Strategic direction locked — specific pricing/mechanics pending final calibration*
*Supersedes: Hard paywall + 7-day trial model (previously locked in CLAUDE.md and strategy/pricing-strategy.md)*

---

## Strategic Pivot (2026-04-16)

**Old model (locked until 2026-04-16):**
- Hard paywall + 7-day calendar trial
- Conversion bet: 6-7% install-to-paid, captured upfront
- Precedent: Noom, Calm, Fabulous

**New model (this document):**
- Freemium with 7-usage consumption-based trial
- No ads (deliberate premium positioning choice)
- Wallet + credits + referral economy
- Top-up packs for flexible users
- Conversion bet: 2-5% install-to-paid with higher LTV per converter, continuous revenue streams, viral growth via referrals

**Why the pivot:**
- Old model contradicted the app's own science foundation (habit formation takes 66 days, trial expired at Day 7)
- User goal: retain first, monetize after habit forms
- Freemium matches how habit apps actually work (Alarmy's 82M download proof in our category)
- Premium no-ads positioning differentiates from Alarmy

---

## Core Model

### Three-tier user economy

| User type | What they get | How they pay |
|---|---|---|
| **Committed** | Unlimited access to all features | Annual subscription (~$39.99/yr) |
| **Flexible** | Occasional full experience when wanted | Credit top-ups (expensive per-usage) |
| **Casual** | Basic features forever | Stays free (no revenue from this user, accepted) |

### Central rule: Subscription is always the best value

All pricing calibration must preserve this. Top-ups and credit packs must be clearly worse per-usage economics than the subscription, so that any regular user naturally converts.

---

## The 7-Usage Trial

### Definition
- **1 "usage" = 1 morning alarm dismissal** (completed via mission)
- User gets 7 full-experience usages at install
- All features unlocked during trial (Dare Engine full library, Photo mission, Night Mode, everything)
- After usage #7: drops to free basic tier OR upgrades

### Tracking
- **V1.0:** Persisted device ID (Apple IDFV / Android ad ID / equivalent)
- **V1.1:** Server-side tracking + account system (account creation decision deferred)
- Uninstall/reinstall on same device = no reset (device ID persists)

### Free tier (post-trial, for non-converters)
- Alarm (1 alarm, non-recurring setup works each time)
- Shake mission only (cheatable — intentional friction)
- Basic Dare Engine (~30 rotating lines)
- Streak + Life Score (visible, persists)
- 3-day history
- Bedtime reminder notification (no full Night Mode)
- Welcome: 50 credits at install
- User can earn more credits via referrals and milestones

### Nudges during trial
- **Usage #5:** Countdown reminder + 50% discount offer
- **Usage #7:** Final nudge + 50% discount offer (last chance)
- **No other nudges during trial** — user experiences the product, not the upsell
- Nudges never interrupt core enforcement loop (alarm, mission, streak moments)

### Post-trial transition
- Full-screen transition at usage #7 completion
- Shows stats earned (streak, on-time wake-ups, Life Score)
- Side-by-side Free vs Pro comparison
- Primary CTA: "Continue with Pro — $19.99/yr (50% off, 48h only)"
- Secondary CTA: "Stay free (limited)"
- Tertiary: "View top-up packs"
- Message: "Your streak, score, and data stay either way" (removes punitive feeling)

### Discount expiry
- 50% off available during trial
- Extends 48 hours after usage #7 ends
- After 48h window: price reverts to full retail ($39.99/yr)
- Creates soft urgency without traditional trial pressure

---

## Pricing Architecture

### Subscriptions
| Plan | Retail Price | Trial-window Price (50% off) |
|---|---|---|
| Monthly | $5.99 / ₹249 | N/A (discount is annual-only) |
| Annual | $39.99 / ₹999 | **$19.99 / ₹499** (during trial + 48h grace) |
| Lifetime | $89 / ₹2,999 (one-time) | Same (lifetime price fixed) |

### Feature IAPs (one-time, permanent unlocks)
| Item | Price |
|---|---|
| Photo mission (anti-cheat) | $4.99 |
| Barcode mission | $2.99 |
| Math mission | $2.99 |
| Full Dare Engine library (500+ lines) | $4.99 |
| Full Night Mode | $4.99 |
| Sound pack (each) | $1.99 |

### Top-up credit packs (post-trial, extends full access)
| Pack | Credits | Cash | Per-usage | vs Annual Sub |
|---|---|---|---|---|
| Single usage | 200 | $1.99 | $1.99 | 18x more expensive |
| 5-pack | 900 | $7.99 | $1.60 | 14x more expensive |
| 10-pack | 1,700 | $12.99 | $1.30 | 12x more expensive |
| 20-pack | 3,200 | $19.99 | $1.00 | 9x more expensive |

**Calibration rule:** Any user doing math chooses subscription over repeated top-ups for >20 usages/year.

---

## Credit/Wallet Economy

### Value anchor
- 1 credit = $0.01 cash value
- Credits visible in user's in-app wallet

### Earning credits (free)
| Action | Credits |
|---|---|
| Install welcome | 50 |
| Completed referral (friend does 7 usages) | 200 |
| 7-day streak milestone | 50 |
| 30-day streak milestone | 250 |
| 100-day streak milestone | 500 |
| Year anniversary | 500 |

### Spending credits
| Use | Cost |
|---|---|
| Streak save (during trial and post) | 99 credits |
| Single usage top-up | 200 credits |
| 5-pack top-up | 900 credits |
| Discount toward annual subscription | 1 credit = $0.01 off (**capped at 50%** of sub price) |
| Discount toward IAP | 1 credit = $0.01 off |

### Credit expiry
- **V1.0:** No expiry (user goodwill)
- Revisit if hoarding becomes a problem

### Calibration safeguards
- Max credit redemption on subscription = 50% off (prevents "free forever via referrals")
- 20 successful referrals still required for full-year sub equivalent — this is acceptable organic growth
- Heavy user on top-ups will always exceed subscription cost

---

## Referral Program

### Mechanics
- Referrer gets: 200 credits when referred friend completes 7 usages (equivalent to ~$4 value)
- Invitee gets: 14 usages instead of 7 (double trial) + 30 credits welcome bonus
- Both-sides-win model (proven pattern)

### Attribution
- **Primary:** Link-based (deferred deep link — friend clicks link, installs, auto-attributed)
- **Fallback:** Code-based (invitee enters referrer's code)

### Tracking
- Requires account system (deferred in core but NEEDED for referrals) — flag for V1.0 build

---

## Streak Save

### How it works
- Credit-based (99 credits per save)
- During trial: free install credits (50) + can earn more cover early streak loss
- Post-trial: users use credits (earned or purchased) OR pay cash
- Cash alternative: $0.99 one-time streak save purchase

### Philosophy
- Streak save is the #1 emotional-moment monetization opportunity in the product
- Must feel like "rescue," not "punishment"
- Never offered before the streak breaks (no pre-emptive upsell)

---

## Ads Policy

**No ads. Ever. In any tier.**

Rationale:
- Premium brand positioning
- Trust with users (alarm = trust moment, ads here = uninstall)
- Differentiation from Alarmy (ad-heavy competitor)
- Accepts lower Month 1 revenue for cleaner LTV

Economic implication: free tier users generate zero direct revenue. They must convert, refer, or churn. Business economics depend on retention quality and conversion calibration.

---

## Monetization Moments (where revenue actually happens)

| Moment | Mechanic | Expected cohort |
|---|---|---|
| **Install Day 0** | Early committers subscribe or buy lifetime immediately | 1-3% of installs |
| **Usage #5** | Countdown nudge + 50% off | Few convert here, primes usage #7 |
| **Usage #7** | Final discount offer, biggest conversion moment | 3-5% of installs |
| **48h grace period post-trial** | Last chance at discount | 1-2% additional |
| **Streak loss** | Streak save offer | 15-25% of those who lose streak |
| **Feature walls hit** | Feature IAP purchase | Rolling, continuous |
| **Post-trial top-ups** | Flexible users who won't subscribe | Small % but continuous |
| **Referrals completing** | User-generated credit earnings → viral growth | Compounds over time |
| **Day 30 milestone** | (Future V1.1) Milestone sub offer | TBD |

---

## Scope (V1.0 vs V1.1)

### V1.0 (launch scope — all locked here)
- 7-usage trial with persisted device ID tracking
- 50% discount during trial + 48h grace
- Subscription (monthly / annual / lifetime)
- Feature IAPs (mission unlocks, Dare Engine library, Night Mode, sound packs)
- Credit/wallet economy
- Top-up packs
- Referral program (requires account system — confirm build scope)
- Streak save (credit-based + cash fallback)
- Free tier after trial

### V1.1 (post-launch)
- Server-side tracking + account system upgrade
- Advanced referral analytics
- Seasonal/promotional pricing events
- Additional IAP types based on user data
- Chronotype layer (separate product decision)

**Scope warning already acknowledged by user:** V1.0 is significantly larger than typical MVP. Credit economy + referrals alone add meaningful engineering time. Accepted trade-off.

---

## Open Decisions (to revisit)

1. Confirm top-up pack pricing ($1.99 / $7.99 / $12.99 / $19.99)
2. Credit expiry policy (currently no expiry — revisit if hoarding observed)
3. Top-up "usage" definition (currently: 1 usage = 1 morning alarm dismissal — same as trial)
4. Can users buy top-ups during the 7-usage trial? (Recommended: no — redundant)
5. Subscription discount cap via credits (currently 50% — confirm)
6. Lifetime pricing re-evaluation ($89 may be too low without recurring revenue cushion)
7. Regional pricing strategy for India and other markets (₹ figures are placeholder)
8. Account system build scope and timing (required for referrals)

---

## Documents Needing Update

When this model is locked final, update:
1. **CLAUDE.md** — "Hard paywall + 7-day trial" line (now obsolete)
2. **strategy/pricing-strategy.md** — supersede with this model
3. **strategy/financial-model.md** — rebuild financial projections under new model
4. **strategy/business-model-canvas.md** — update revenue streams section
5. **concepts/conversion-and-retention-playbook.md** — Day 7 conversion mechanic now different
6. **concepts/final-feature-list.md** — wallet, credits, referrals, top-ups may need feature entries
7. **prd/onboarding-prd.md** — V2.0 obsolete; onboarding flow must reflect new trial model
8. **validation/stress-test-chronotype-revenue.md** — revenue assumptions outdated
9. **PROJECT_STATE.md** — session log entry for this pivot

---

## Session Context

This model was designed during the 2026-04-16 session after the following chain of reasoning:

1. Onboarding brainstorm revealed chronotype-first flow asks users biology questions they answer aspirationally
2. User clarified product positioning: chronotype is LAYER, not DESTINATION — core is enforcement
3. User proposed core product focus first: night and morning enforcement loops
4. User questioned whether to have onboarding at all → research concluded yes, but shorter
5. User rejected hard paywall + trial model (doesn't believe in trials, wants habit-first monetization)
6. User rejected ads
7. User proposed 7-usage consumption trial model
8. User added wallet + credits + referrals + top-ups
9. Specific parameters locked (50% discount, Option B nudge cadence, 48h grace, credit-based streak save)
10. Model paused here to work on user journey and onboarding redesign

**Next steps when resuming this thread:**
- Pressure-test pricing with calibration models
- Design user flows for each credit/wallet interaction
- Spec referral attribution system
- Rebuild financial projections
- Update all superseded documents listed above
