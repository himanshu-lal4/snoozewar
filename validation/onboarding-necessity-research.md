# Onboarding Necessity Research — Does SnoozeWar Need Onboarding At All?
*Research Date: 2026-04-16*
*Answer to: "Should SnoozeWar have onboarding? If yes, why — and what's the minimum necessary?"*

---

## 1. Executive Summary

**Yes — SnoozeWar must have onboarding. But the current 17-screen chronotype-first V2.0 is wrong for the new enforcement-first positioning.**

- The data is unambiguous: for subscription apps at $49.99/yr, zero-onboarding + immediate paywall converts at **1% vs 20%** with value-first onboarding (FunnelFox/Stormy.ai meditation A/B test). RevenueCat 2026 says bluntly: "apps that show a paywall before a user understands the product's value typically see worse opt-in rates."
- But the "extensive personalization quiz" pattern (Noom 96 screens, RISE 47, Cal AI 20+, Me+ 45-50) is also wrong for SnoozeWar — those flows exist to justify clinical/scientific price anchors. Our product is enforcement, not insight. Users came to set an alarm, and will give **aspirational, biased answers** to biology questions they're cognitively not prepared for (self-report bias confirmed across 60+ research studies).
- The recommendation: **a 5-7 screen hybrid** — alarm intent captured in Screen 1-2 (respect the user's "set my alarm" intent), enforcement promise + tone in Screen 3-4, permissions + alarm set in Screen 5-6. Chronotype quiz moves to **Day 2-3** after we have passive data (HealthKit/alarm timestamps) to cross-check against self-report.
- This preserves the 69% social jet lag hook as a marketing + Day-2 reveal, not an onboarding foundation. The Dare Engine's first personal line still delivers the ending peak. Trial starts Day 0 (82% of them happen Day 0 anyway).
- **What we lose by cutting onboarding from 17 → 6:** ~20-30% of the "IKEA effect" sunk cost that boosts trial starts. **What we gain:** ~15-20% fewer abandoned installs, honest data, alignment with the new positioning, no aspirational-answer contamination of our chronotype layer.

---

## 2. The Three Archetypes Compared

### Archetype A: Zero Onboarding (Install → Main Screen)

| Dimension | Data |
|-----------|------|
| Conversion (install → trial) | ~0.5–1% (FunnelFox meditation A/B: pre-onboarding paywall = 1%) |
| Retention D7 | Undifferentiated — same as Archetype B once user figures it out |
| D0 cancellation | Maximum (70-80% drop-off per Stormy.ai utility app data) |
| Product-market fit | Works for **social/feed apps** (TikTok, Instagram, Threads) where content IS the onboarding, and for **pure utilities** (calculator, flashlight) where purpose is obvious |
| Fit with enforcement positioning | **Poor** — a user who opens SnoozeWar and sees "Set Alarm" gets a plain alarm app. Alarmy exists. We need to signal "this is different" within 3 seconds or they uninstall. |

**Verdict: Reject.** Enforcement as a category doesn't exist yet. We can't assume users understand what they're getting.

---

### Archetype B: Minimal / Configuration-Only Onboarding (2-5 screens)

| Dimension | Data |
|-----------|------|
| Conversion (install → trial) | 8-12% for utility apps with "first win" pattern (FunnelFox 2025 meditation case) |
| Retention D7 | Strong — users hit core value Day 0 |
| D0 cancellation | Moderate — 30-40% of trial starters cancel Day 0 regardless (RevenueCat 2026) |
| Product-market fit | **Perfect for intent-matched utility** — user came with a job (set alarm), product lets them do it fast |
| Fit with enforcement positioning | **Strong** — "what time do you need to be up?" respects intent. Enforcement delivered Day 1 morning. Quiz moves to Day 2. |

**Alarmy (82M downloads) is this archetype.** Alar.my design breakdown confirms: permission warm-up + "set your first alarm" + soft paywall + coach marks. Total perceived onboarding: ~5-8 screens including permission priming. No identity quiz.

**Verdict: Strong candidate.** Matches what 82M downloads of competing product already proves.

---

### Archetype C: Full Personalization Onboarding (13-96 screens) — Current V2.0

| App | Screens | Conversion (published/estimated) |
|-----|---------|---------------------------------|
| Noom | 46 (2022) → 55 (2023) → 80+ (2024) → 96 (2025) | ~$1B ARR; completion rates low but quiz-to-paid is high among completers |
| Me+ (UK #1 H&F) | 45-50 | Profitable enough to stay UK #1 |
| Cal AI | 20+ | $2M/month |
| RISE | 47 | ~$7.8M ARR |
| Fabulous | 5-7 min flow | Profitable |
| SnoozeWar V2.0 | 16-17 | (unvalidated) |

| Dimension | Data |
|-----------|------|
| Conversion (install → trial) | Noom-style converts trial starts at 30%+ (RevenueCat "Why Your Onboarding Is Too Short" 2024) |
| Retention D7 | Mixed — higher commitment, but "long-onboarders may make less money overall long-term" (RevenueCat) |
| D0 cancellation | 55% of all trial cancellations happen Day 0 (RevenueCat 2026) — onboarding length doesn't save you from this |
| Product-market fit | **Works for products that can't demonstrate value in a single use** — diet plans, personality-based coaching, sleep debt projections. User NEEDS the quiz because the product isn't tangible until personalized. |
| Fit with enforcement positioning | **Questionable** — SnoozeWar's core value (the morning alarm + mission + Dare Engine) IS demonstrable in a single use. You don't need 17 screens to show "tomorrow morning you'll be roasted for snoozing." |

**Critical reason the 96-screen pattern works for Noom but NOT SnoozeWar:** Noom can't deliver weight loss Day 0. The quiz and projections ARE the product's first hit of value. SnoozeWar CAN deliver enforcement tomorrow morning. The quiz becomes overhead, not value.

---

## 3. Industry Data (2025-2026)

### Paywall Placement Conversion (RevenueCat/Adapty 2026)

| Placement | Install → Paid Conversion |
|-----------|---------------------------|
| Onboarding paywall w/ trial | **1.78%** (highest of any placement) |
| Hard paywall + trial (H&F median D35) | 10.7% |
| Freemium (H&F median D35) | 2.1% |
| Pre-onboarding paywall (utility) | 0.5-1% |

### The Day 0 Reality

- **82-89% of trial starts happen Day 0** (RevenueCat 2025, Adapty 2026)
- **55.4% of trial cancellations happen Day 0**
- **84% of cancellations happen Day 0-1** (RevenueCat 2026)
- **51% of 3-day trial cancellations happen Day 0** — users have become reflex cancelers

**Implication: Every optimization for "Day 2-7 engagement" has 5x less leverage than getting the Day 0 intent right.** If we lose them at onboarding, we lose them forever.

### H&F Category-Specific Benchmarks (Mirava, Adapty 2026)

| Metric | Value |
|--------|-------|
| H&F page view → install (iOS) | 30.8% |
| H&F install → trial (global median) | 10.9% |
| H&F install → trial (North America) | 14.5% |
| H&F trial-to-paid (top performers) | 39.9% median, 68.3% P90 |
| H&F D1 activation rate | 26% |
| H&F first-renewal | 30.3% (worst category) |

### Onboarding Length Thresholds (Business of Apps 2025, UserGuiding 2026)

- **Apps with 5+ step onboarding: >50% abandon**
- **Quiz/microsurvey completion rate: 54%** (Chameleon Benchmark 2025)
- **Onboarding checklist completion: 19.2% average, 10.1% median** (UserPilot)
- Drop-off pattern: Step 1 → 90%, Step 2 → 78%, Step 3 → 65%, Step 4 → 58%, Step 5 (paywall) → 35% (our own research file)

### Sources
- [RevenueCat State of Subscription Apps 2026](https://www.revenuecat.com/state-of-subscription-apps/)
- [Adapty State of In-App Subscriptions 2026](https://adapty.io/state-of-in-app-subscriptions/)
- [Business of Apps App Onboarding Rates 2026](https://www.businessofapps.com/data/app-onboarding-rates/)
- [RevenueCat "Why Your Onboarding Is Too Short"](https://www.revenuecat.com/blog/growth/why-your-onboarding-experience-might-be-too-short/)
- [FunnelFox paywall examples](https://blog.funnelfox.com/effective-paywall-screen-designs-mobile-apps/)
- [Stormy.ai paywall optimization](https://stormy.ai/blog/app-paywall-onboarding-optimization-guide)
- [Mirava 2025 H&F Benchmarks](https://www.mirava.io/blog/subscription-benchmarks-health-fitness-apps)

---

## 4. What Our Existing Research Already Says

### The 17-screen PRD's own vulnerabilities

From `prd/onboarding-prd.md` — the V2.0 PRD itself acknowledges:

- "Showing a paywall before the user has experienced the product's core value (alarm + Dare Engine morning) converts at <0.5%. The trial converts at 30-40% when users have 7 days of data and a streak to lose." (PRD §6)
- Success metric target: "Onboarding completion rate >90%" vs "~70% H&F avg" — **aggressive, unvalidated target**
- Success metric target: "Time to complete onboarding: 2.5-3 min" — this is the pitch, but V1 drop-off audit (Session Log Apr 14) admits reality is ~75s for 13 screens and the quiz has "3 risk zones"
- "Every eliminated question reduces drop-off" (V2 change log admits this while adding the reaction screens)

### The positioning shift breaks the PRD's logic

The V2.0 PRD's thesis: "This is not an onboarding. It's a revelation." The entire design assumes the user will LOVE being asked about their biology for 2.5 minutes because it leads to a chronotype identity reveal.

But per today's session decision:
- Chronotype is a LAYER, not the hero
- Marketing uses "69%" as the hook, but product is enforcement
- Users come to set an alarm, not discover their biology
- Biology-first questions in "set my alarm" mental mode = aspirational/biased answers

**This decision invalidates PRD §1 "Core Framing Principle" and §2 "Psychological Architecture" directly.** The reveal isn't the peak anymore — the first mission-gated alarm going off is.

### What our conversion funnel research says (validation/conversion-funnel-benchmarks.md)

- Step 5 (paywall presentation) is always the #1 drop-off point — not the quiz
- Base case: 35% onboarding → trial, with "chronotype results create commitment"
- Pessimistic: 25% if quiz feels too long
- The funnel is NOT quiz-gated. You can get 35% trial starts with 3 screens of good framing, same as with 17.

### What our retention stress test says (validation/stress-test-long-term-retention.md)

- "Month 1 (not Month 2) is the danger period with 30%+ cancellation"
- "Not enough usage" is #1 cancellation reason (32-47%)
- "Personality novelty fades at 30-90 days"

**Implication:** Keeping users around requires daily-use habit formation, not pre-use personalization. Onboarding length is a Month 1 variable; product quality is Year 1 variable. We've been over-indexing on M0.

### What our audience research says (audience/behavioral-patterns.md, audience/purchase-triggers-and-barriers.md)

- 3 AM installer (peak search hour) is **in crisis**, not in research mode. They want the alarm to work TONIGHT.
- 82% of trial starts happen Day 0 — nothing we do in onboarding changes this much
- Users in "set my alarm" intent give aspirational sleep answers (self-blame loop, per psychographic profiles research)

### What our cognitive load framework says (concepts/cognitive-load-framework.md)

- Zero cognitive load UX principle
- Progressive disclosure = reveal complexity over time, not upfront
- **17 screens is the opposite of zero-load.** It's respectable for a medical intake form. It's wrong for an alarm app.

---

## 5. The SnoozeWar-Specific Answer

### Given the enforcement-first positioning:

**The user's Day 0 mental model is: "I need a better alarm."**
- Not: "I need to discover my chronotype"
- Not: "I need to understand social jet lag"
- Not: "I need a 3-minute quiz"

The marketing can and should lead with social jet lag. The landing page, TikTok hook, App Store subtitle can all say "69% of people wake up in the wrong timezone." But **installing an app is the moment of intent conversion — the user has decided "OK, let me try"** — and from that point they want the utility, fast.

### Why biology-first onboarding breaks in this context:

1. **Aspirational answer bias.** User at 3 AM, drunk-scrolling, installing SnoozeWar because Alarmy failed — asked "what time would you naturally wake up?" — answers "7 AM" because that's what they WISH. Their actual MSF is 11 AM. We've just contaminated our chronotype data with exactly the social-jet-lag-driven answer we're supposed to detect. (Self-report bias is well-documented: Ghotbi 2020 MCTQ validation itself notes subjective questions require trained interviewers for clinical-grade data.)

2. **Intent mismatch friction.** User came to configure a tool. You're asking them to engage in self-discovery. The cognitive mode switch costs you ~15-20% at every screen boundary. By screen 7, you've lost half. The V1 audit already identified 3 drop-off risk zones.

3. **Positioning dissonance.** Your marketing promised "enforcement." Your onboarding feels like a personality quiz. Users think: "Did I install the wrong app?" This is the uncanny valley of onboarding mismatch.

4. **Value prop buried.** The Dare Engine — the actual differentiator — doesn't land until Screen 14. That's 2.5 minutes of friction before the product's personality shows up. By contrast, a 5-screen flow can deliver Dare Engine in Screen 2.

### What the chronotype data actually needs to work:

The chronotype layer is **not unlocked by a 3-minute quiz**. It needs:
- 7-14 days of passive data (per our chronotype-onboarding-research.md — 89% accuracy from phone data)
- HealthKit sleep data (permission grant typically Day 3-5, per our permissions strategy)
- Alarm timestamp history (generated by normal use)

A Day-0 quiz gives a **rough confidence** classification at best. Passive detection gives **high confidence** by Day 14.

**So the quiz is not even necessary for chronotype personalization.** It's only there as a conversion/onboarding mechanism. If we can generate conversion another way (enforcement promise + Dare Engine demo + alarm set), the quiz can move.

---

## 6. The Minimum Viable Onboarding (6 screens, ~60 seconds)

### Screen 1: The Mirror (Enforcement Promise)
- Dark, minimal. One line: **"You set alarms. You ignore them. Let's fix that."**
- Subtext: "A war on snoozing. Choose your side."
- CTA: "Start →"

**Why:** Mirrors the user's actual problem (snoozing, alarm ignoring) in their language. Signals personality. 3-second "this is different" read.

### Screen 2: The Required Schedule (Alarm Capture)
- "When do you NEED to be up?"
- Large time picker. Default: 7:00 AM.
- Subtext: "The real time. Work, school, life — whatever it is."
- CTA: "Next →"

**Why:** Respects intent. The user wants to set an alarm — we let them. This is the V2.0 PRD's own Screen 13 content, moved to Screen 2. Data captured: `work_wake_time`.

### Screen 3: The Mission (Demonstrate Enforcement)
- "How do we wake you up?"
- 3 visual cards: Photo (recommended), Barcode, Shake
- Subtext: "Can't dismiss. Can't cheat. Must complete."
- CTA: "Next →"

**Why:** THIS is the product differentiator. Showing the mission system is what makes SnoozeWar feel different from the iOS default. Data captured: `mission_type`.

### Screen 4: The Dare Engine (Personality Preview + Tone)
- "Pick your drill sergeant."
- 3 cards, each showing sample copy:
  - Drill Sergeant: "Still in bed? Bold."
  - Tough Coach: "3 snoozes. We're better than this."
  - Supportive Friend: "Let's get up together."
- CTA: "Lock it in →"

**Why:** The Dare Engine IS the product. Users must experience the personality in onboarding, not Day 1 morning. Data captured: `tone_preference`.

### Screen 5: The Permission Ask (Notifications)
- "One thing. We need to actually wake you up."
- Native iOS notification permission dialog triggered.
- Bedtime reminder toggle below: "Also remind me at [calculated_bedtime]" (on by default)

**Why:** Permission ask at max context (just after they configured an alarm). Grant rate is highest here (Localytics: +12%). Data captured: `bedtime`.

### Screen 6: The Commitment (Life Score Init)
- Checkmark animation.
- "Alarm set. Mission loaded."
- Life Score: 0 → 10 counting up
- Dare Engine's first line (tone-variant):
  - Drill Sergeant: "10 points. That's nothing. See you at 7 AM."
  - Tough Coach: "Day 0. Score: 10. Game on."
  - Supportive: "You're in. See you tomorrow."
- CTA: "I'm ready"

**Why:** Peak-end rule. Endowment effect (they "own" a score). Personality lands. Total onboarding: ~60 seconds.

### What's NOT here:
- Chronotype quiz (moves to Day 2-3 as "Fine-tune your chronotype — 2 min" opt-in card on home screen, feels like a bonus not a gate)
- Night pattern card (moves to Day 2 bedtime reminder contextually)
- Social jet lag reveal (moves to Day 7 conversion screen where it hits 10x harder)
- Past apps question (unused in product)
- ADHD brain question (belongs in "personalize your experience" settings menu or Day 3 insight)
- "You're not broken" screen (moves to Day 7 conversion screen as unlocking content)
- Processing animation (unnecessary without quiz)
- Free-day vs work-day time pickers (replaced by passive HealthKit detection Day 2-5)

### Account creation:
- **Not in onboarding** (already decided, confirmed by this research)
- Triggered Day 1 post-first-alarm: "Save your streak — create account"

### Trial start:
- Started silently at Screen 6 (user is now in 7-day trial)
- No paywall during onboarding (already decided, research confirms this is correct)
- Paywall: Day 7 after peak sunk cost (per existing conversion playbook)

---

## 7. What Onboarding Buys Us vs Costs Us

| Dimension | 6-screen (Minimal) | 17-screen (Full V2.0) | Delta |
|-----------|--------------------|-----------------------|-------|
| Time to first alarm | ~60s | ~180s | **3x faster** |
| Screens to drop off on | 6 | 17 | **65% fewer drop-off points** |
| Cognitive mode required | "Configure tool" | "Self-discover biology" | **matches intent** |
| Aspirational answer risk | Low (asks what you NEED, not what your body WANTS) | High (biology in sleep-deprived state) | **cleaner data** |
| IKEA/endowment effect | Moderate (alarm + mission + tone chosen) | High (chronotype identity owned) | **-20-30% sunk cost** |
| Social proof / "82% never finish" narrative | Lost | Present | **lose one copy hook** |
| 3 AM installer fit | Excellent (fast path) | Poor (they're in crisis, not research mode) | **matches high-intent traffic** |
| 8 AM shame installer fit | Good | Good | neutral |
| Evening planner installer fit | Good | Good | neutral |
| Matches enforcement positioning | **Yes** | No (chronotype-first) | **positioning aligned** |
| Matches marketing promise ("69% SJL") | Deferred to Day 7 (stronger placement) | Delivered at Screen 11 | mixed |
| Personality landed by when | Screen 4 (~40s) | Screen 8 + 14 (~90s+) | **2x faster** |
| Permissions ask timing | Optimal (Screen 5, post-config) | Optimal (Screen 14) | neutral |
| Chronotype data quality | High (passive, 7-14 days, 89% accurate) | Low-medium (Day 0 self-report, biased) | **cleaner model** |
| Development complexity | Low (5 simple screens) | High (reaction screens, processing animation, 4 quiz types, conditional flow) | **-40% build time** |
| Localization cost | Low | High (17 screens × 10 languages) | **-60% l10n cost** |
| Expected trial start rate | 10-14% (H&F median) | 12-18% (enhanced by quiz commitment, per RevenueCat) | **-2-4pp** |
| Expected trial-to-paid | Same (35-40% H&F) | Same | neutral |
| Expected D30 retention | Same or higher (faster aha moment) | Same | neutral-positive |

### The honest trade:
- **You lose ~2-4 percentage points of trial start rate** (estimated) by cutting from 17 → 6 screens
- **You gain** ~15-20% reduction in onboarding abandonment, cleaner data, positioning alignment, faster Dare Engine delivery, 40% less build effort, 60% less localization cost, and a genuinely respectful relationship with the user's intent

**Net expected impact on D7→paid**: roughly neutral or slightly positive, with significantly reduced risk of the 17-screen being a disaster at launch.

---

## 8. Recommendations (Tiered)

### Option A — CONSERVATIVE (9-10 screens, "V2.5")
Keep V2.0's structure but cut aggressively:
- Drop: reaction screens (3.5, 5.5), ADHD screen, past apps screen, "you're not broken" science proof screen, processing animation
- Keep: Hook, night pattern Q, free wake/sleep times, work wake/sleep times, chronotype reveal, tone calibration, alarm setup, confirmation
- Result: 9-10 screens, ~2 min, preserves "revelation" pattern, still heavily quiz-driven

**When to pick this:** If the user is nervous about cutting the quiz entirely and wants to A/B test a less radical version first. Lowest risk but also lowest upside.

### Option B — RECOMMENDED ("Enforcement-First Onboarding", 6 screens)
The minimum viable onboarding spec above.
- Alarm intent captured Screen 1-2
- Enforcement + mission + personality Screen 3-4
- Permission + commitment Screen 5-6
- Chronotype quiz moves to Day 2-3 (opt-in bonus)
- Social jet lag reveal moves to Day 7 conversion screen (where endowment + loss aversion are at max)

**When to pick this:** If the enforcement-first positioning is genuinely locked. This is the recommended path. It matches Alarmy's proven 82M-download pattern while adding SnoozeWar's differentiators (mission, tone, Life Score) in the critical first 60 seconds.

### Option C — RADICAL ("Alarmy-Lite", 3 screens)
- Screen 1: "When do you need to be up?" (time picker)
- Screen 2: "How should we wake you?" (mission + tone combined)
- Screen 3: "Done. See you at [time]." (permission + commitment + Dare Engine line)

**When to pick this:** If you want to aggressively match Alarmy's pattern and rely entirely on Day 1 morning mission + Day 7 streak for conversion. Highest download velocity, lowest perceived onboarding friction. Risk: trial start rate may drop significantly (8-10%) because zero quiz-sunk-cost.

---

## 9. What Changes If We Pick Option B

### Files that need updating:
- `prd/onboarding-prd.md` — full rewrite (V3.0), cut from 17 → 6 screens, revise all §1-4
- `concepts/final-feature-list.md` — remove in-onboarding chronotype quiz, add Day 2 chronotype fine-tune
- `concepts/conversion-and-retention-playbook.md` — update Day 0 flow, move SJL reveal to Day 7
- `market/chronotype-onboarding-research.md` — keep research, note quiz is Day 2+ not Day 0
- Figma file — new 6-screen V2 flow (estimated 2-3 days to rebuild from existing V1 components)

### What stays the same:
- All underlying science (rMEQ/uMCTQ formulas)
- Life Score design
- Dare Engine copy system
- Paywall Day 7 strategy
- Tone calibration (3 options)
- Mission system

### The marketing-to-product bridge:
- TikTok hook: "69% of people wake up in the wrong timezone"
- Landing page: "Find out if you have social jet lag" + calculator
- App Store: "Stop fighting your biology. Start winning mornings."
- App install → 60-second onboarding → alarm set
- Day 2 home screen card: "Ready to see your chronotype? 2 min quiz → 🦁 🐻 🐺"
- Day 7 conversion: "You have 2.3h of social jet lag. 69% of people have some. Here's yours. Subscribe to keep fixing it."

The "69%" promise STILL gets delivered. Just later. And it hits harder because the user has 7 days of data behind it, not a 2-minute quiz.

---

## 10. Final Answer

**Yes, onboarding is necessary. The current 17-screen V2.0 is not.**

The new enforcement-first positioning demands a product-led onboarding, not a science-led revelation. 6 screens, ~60 seconds, alarm set, Dare Engine engaged, trial running. Chronotype quiz as Day 2-3 bonus, not Day 0 gate. Social jet lag reveal as Day 7 conversion hammer, not Screen 11 peak.

This aligns with:
- 82M downloads of Alarmy (minimal onboarding wins utility-intent)
- RevenueCat 2026 guidance ("deliver one compelling value moment first")
- Our own positioning decision (enforcement core, chronotype layer)
- Self-report bias research (don't ask biology questions of sleep-deprived users)
- The 82% Day 0 trial start reality (nothing we do in onboarding changes this much)
- Our own cognitive load framework (zero-load principle)

**Pick Option B. Rewrite the PRD as V3.0.**

---

## Sources

- [RevenueCat State of Subscription Apps 2026](https://www.revenuecat.com/state-of-subscription-apps/)
- [RevenueCat 2026 Benchmarks Blog](https://www.revenuecat.com/blog/growth/subscription-app-trends-benchmarks-2026/)
- [RevenueCat "Why Your Onboarding Is Too Short"](https://www.revenuecat.com/blog/growth/why-your-onboarding-experience-might-be-too-short/)
- [Adapty State of In-App Subscriptions 2026](https://adapty.io/state-of-in-app-subscriptions/)
- [Adapty H&F App Benchmarks 2026](https://adapty.io/blog/health-fitness-app-subscription-benchmarks/)
- [Business of Apps Onboarding Rates 2026](https://www.businessofapps.com/data/app-onboarding-rates/)
- [Business of Apps H&F Benchmarks 2026](https://www.businessofapps.com/data/health-fitness-app-benchmarks/)
- [Mirava 2025 H&F Benchmarks](https://www.mirava.io/blog/subscription-benchmarks-health-fitness-apps)
- [Retention.blog "Longest Onboarding Ever" (Noom analysis)](https://www.retention.blog/p/the-longest-onboarding-ever)
- [PageFlows Noom iOS Onboarding](https://pageflows.com/post/ios/onboarding/noom/)
- [Behavioral Scientist — Noom Product Critique](https://www.thebehavioralscientist.com/articles/noom-product-critique-onboarding)
- [ScreensDesign Alarmy Breakdown](https://screensdesign.com/showcase/alarmy-loud-alarm-clocksleep)
- [RevenueCat Five Minute Journal Case Study (ARPU +20%)](https://www.revenuecat.com/blog/growth/five-minute-journal-onboarding-redesign-arpu/)
- [Stormy.ai Onboarding Optimization Guide (0.5% → 8% case)](https://stormy.ai/blog/app-paywall-onboarding-optimization-guide)
- [FunnelFox Paywall Screen Examples](https://blog.funnelfox.com/effective-paywall-screen-designs-mobile-apps/)
- [AppAgent Paywall Optimization](https://appagent.com/blog/mobile-app-onboarding-5-paywall-optimization-strategies/)
- [Chameleon Benchmark 2025 (quiz completion 54%)](https://www.trychameleon.com/)
- [UserGuiding Onboarding Statistics 2026](https://userguiding.com/blog/user-onboarding-statistics)
- Internal: `prd/onboarding-prd.md` (V2.0, 17 screens)
- Internal: `validation/conversion-funnel-benchmarks.md`
- Internal: `validation/stress-test-long-term-retention.md`
- Internal: `market/chronotype-onboarding-research.md`
- Internal: `concepts/conversion-and-retention-playbook.md`
- Internal: `concepts/cognitive-load-framework.md`
- Internal: `audience/purchase-triggers-and-barriers.md`
