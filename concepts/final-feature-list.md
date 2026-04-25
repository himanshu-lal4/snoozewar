# FINAL FEATURE LIST — Build Document

> ⚠️ **UPDATES NEEDED (2026-04-17)** — The April 16-17 strategic pivots affect multiple sections of this doc. Core feature decisions remain mostly valid. Specific deltas below.
>
> **Section 1 (Onboarding) needs rework:**
> - Feature 1 (Chronotype quiz rMEQ+uMCTQ): **MOVED to V1.1** (was LAUNCH). Chronotype now passive/opt-in post-Day 0, not Day 0 hero.
> - Feature 2 (Chronotype reveal screen): **MOVED to V1.1**
> - Feature 3 (Social jet lag visualization): **MOVED to V1.1** (marketing hook remains, in-app delivery deferred)
> - Feature 4 ("You're not broken" reframe): **STAYS at LAUNCH** (now part of S3 Education in onboarding PRD V3)
> - Feature 5 ("Why everything else failed"): **DEFERRED to V1.1** (not in minimal onboarding)
> - Feature 6 (ADHD acknowledgment): **DEFERRED to V1.1** (not in onboarding; may be in Settings)
> - Feature 7 (Existing routine question): **CUT** (no longer needed in onboarding)
> - Feature 8 (Tone calibration): **DEFERRED to Settings** (default Tough Coach)
> - Feature 9 (Smart alarm setup with chronotype context): **STAYS** but moves to first-alarm setup flow (not onboarding)
> - Feature 10 (Smart bedtime calculator): **STAYS** at LAUNCH
> - Feature 11 (Animated analysis): **CUT** (no chronotype reveal in V1)
> - Feature 12 (Web quiz transfer): **V1.2 unchanged**
>
> **New onboarding features to ADD (per PRD V3.0):**
> - User name collection (optional, personalizes Dare Engine)
> - Welcome gift screen (7 usages + 500 credits)
> - Feature showcase carousel (5 lottie cards)
> - Real user quote (rotating library)
> - Social proof counter
>
> **New monetization features to ADD (per revenue-model-v2.md):**
> - 7-usage consumption trial tracking (device-ID-based)
> - Credit wallet system (earn, spend, display balance)
> - Referral program (link-based attribution, 200-credit reward)
> - Top-up credit packs (single / 5 / 10 / 20 usage packs)
> - Streak freeze via credits (was cash-only)
> - Lifetime subscription tier ($89 one-time)
> - Discount timer post-trial (48h grace window)
>
> **Paywall/Pricing sections:** Any mention of "hard paywall" or "7-day calendar trial" is obsolete. Freemium with 7-usage consumption trial is the new model.
>
> Full rebuild of this document scheduled after first-alarm-setup PRD and morning/night side product design complete.

*Created: April 2026 (partial updates April 17, 2026)*
*Status: CORE FEATURES VALID, monetization/onboarding sections need rework per pivots above*
*Derived from: 126-feature audit, 10 user type journeys, segment sizing data, conversion funnel benchmarks, marketing channel analysis*

---

## How This Document Was Built

Six perspectives evaluated every feature simultaneously:

- **CPO**: Product-market fit, core loop integrity, "aha moment" delivery
- **CMO**: Marketability, content moments, screenshot/share potential, segment reach
- **Growth**: Viral loops, organic discovery, ASO keywords, viral coefficient
- **CTO**: Technical dependencies, build order, effort level (solo dev, 4-6 months, AI-assisted)
- **CFO**: Trial-to-paid conversion impact, retention impact, revenue justification
- **Data**: Segment ROI mapping based on real audience sizing numbers

---

## PART 1: COMPLETE FEATURE AUDIT (All 126 Features)

### Legend
- **Segment codes**: AS=Alarm Seeker, NS=Night Struggler, CS=Clueless Sufferer, RF=Repeat Failer, RS=Routine Seeker, SB=Self-Blamer, OP=Optimizer, AD=ADHD Discoverer, CO=Competitor, SC=Science Curious
- **Effort**: L=Low (<1 day), M=Medium (1-3 days), H=High (3-7 days), VH=Very High (1-2 weeks)

---

### 1. ONBOARDING (12 features)

| # | Feature | Decision | Effort | Advocates | Reasoning | Segments |
|---|---------|----------|--------|-----------|-----------|----------|
| 1 | Chronotype quiz (rMEQ + uMCTQ hybrid) | **LAUNCH** | H | ALL agents | Foundation of entire product. Without this, we're just another Alarmy. Powers scoring, alarm suggestions, ADHD detection, science layer. | ALL |
| 2 | Chronotype reveal screen | **LAUNCH** | M | CPO, CMO | The #1 "aha moment" for Clueless Sufferers (200-270M segment). "I'm a Wolf" = identity creation = shareability. Screenshot-ready moment. | ALL, esp CS, SB |
| 3 | Social jet lag visualization | **LAUNCH** | M | CMO, Growth | Core marketing hook. "69% wrong timezone" is the ad. This screen IS the ad payoff. Drives organic sharing. | CS, SB, SC |
| 4 | "You're not broken" reframe screen | **LAUNCH** | L | CPO, CFO | Directly addresses Self-Blamers (80-100M). Willpower debunk is our differentiator vs every competitor. Conversion-critical for SB, AD segments. | SB, CS, AD |
| 5 | "Why everything else failed" screen | **LAUNCH** | L | CPO, CFO | Repeat Failers (60-80M) are the #2 conversion-rank segment. This screen is WHY they convert when they've failed elsewhere. Skip this = lose them. | RF |
| 6 | ADHD acknowledgment question | **LAUNCH** | L | CPO, CMO, Data | ADHD Discoverers = #3 conversion rank, 20-40M segment, 28B TikTok views. One question in onboarding activates an entire mode. Tiny effort, massive segment coverage. | AD |
| 7 | Existing routine question | **LAUNCH** | L | CPO | Routes users to progressive vs full builder. 1 question, 2 paths. Prevents overloading Routine Seekers or boring Optimizers. | RS, OP |
| 8 | Tone calibration | **LAUNCH** | L | CPO, CFO | 3 radio buttons. Prevents Self-Blamers from getting "tough love" copy that makes them uninstall. Retention-critical. | ALL, esp SB, CO |
| 9 | Smart alarm setup with chronotype context | **LAUNCH** | M | CPO, CTO | The alarm IS the product. Chronotype context ("Your biology wants 8:15, you chose 6:30") differentiates from Alarmy on the first screen. | ALL |
| 10 | Smart bedtime calculator | **LAUNCH** | M | CPO | Night-morning connection starts here. Bedtime derived from wake time + chronotype + sleep need. Powers Night Mode scoring. | ALL, esp NS |
| 11 | Animated analysis screen | **V1.1** | M | CMO | Nice polish but not functionally necessary. The reveal works without animation. Ship a simple version at launch, animate later. | CS, SC |
| 12 | Web quiz → app data transfer | **V1.2** | H | Growth, CTO | Requires web quiz to exist first. Web quiz is a separate build (V1.1). Transfer mechanism adds complexity. Data shows Science Curious is lowest-conversion segment. | SC |

**LAUNCH: 10 | V1.1: 1 | V1.2: 1**

---

### 2. NIGHT MODE (9 features)

| # | Feature | Decision | Effort | Advocates | Reasoning | Segments |
|---|---------|----------|--------|-----------|-----------|----------|
| 13 | Pre-bedtime warning | **LAUNCH** | L | CPO | Table stakes for Night Mode. A notification 30 min before bedtime. Required for the night-morning loop. | ALL |
| 14 | Live score penalty | **LAUNCH** | M | CPO, CFO | THE Night Mode differentiator. No competitor does this. Score ticking down creates urgency Alarmy/RISE never touch. Core loop. | NS, ALL |
| 15 | Escalating Dare Engine commentary | **LAUNCH** | M | CPO, CMO | Dare Engine IS the product. Escalating copy as they stay up late = content moment (screenshots), retention mechanic, and personality delivery. | NS, AS, CO |
| 16 | Sleep window calculation | **LAUNCH** | L | CPO | "If you sleep now: 7h12m. If you keep scrolling: ticking down." Simple math, massive psychological impact. Powers the night-morning connection. | NS, ALL |
| 17 | Morning preview | **LAUNCH** | L | CPO | "Your alarm is in 6h55m. This is going to hurt." Connects tonight to tomorrow. Text-only, zero technical complexity. | NS, ALL |
| 18 | Bedtime tracking | **LAUNCH** | M | CTO, CPO | Required for score calculation. Without tracking actual bedtime, Life Score can't factor night behavior. Technical prerequisite for scoring. | ALL |
| 19 | Hyperfocus-aware prompts (ADHD) | **LAUNCH** | L | CPO | Copy variant only. "Are you doom-scrolling or doing something you chose?" One conditional check (ADHD mode on/off) + different notification copy. | AD |
| 20 | Externalization tips (ADHD) | **LAUNCH** | L | CPO | Copy variant. "Set a physical alarm across the room for bedtime." Zero technical effort beyond writing the copy. | AD |
| 21 | Night score with friend comparison | **V1.2** | M | Growth | Requires friend system, which requires users. Cold-start problem. Deferring social features until there's a user base to connect. | CO |

**LAUNCH: 8 | V1.2: 1**

---

### 3. ALARM SYSTEM (10 features)

| # | Feature | Decision | Effort | Advocates | Reasoning | Segments |
|---|---------|----------|--------|-----------|-----------|----------|
| 22 | Full-screen alarm | **LAUNCH** | VH | ALL agents | THE table stakes feature. Cannot ship without this. AlarmKit (iOS 26) is the key enabler. Most complex single feature. | ALL |
| 23 | Photo mission | **LAUNCH** | H | CPO, CMO | Primary mission type. Physical action, gets body moving. Most shareable/demonstrable in screenshots and TikTok. Alarmy's hero feature — we must match it. | ALL |
| 24 | Shake mission | **LAUNCH** | M | CPO | Second mission type. Quick, no setup needed, no cognition. Essential for ADHD users and as a simpler alternative to photo. | ALL |
| 25 | Math/puzzle mission | **V1.1** | M | CPO | Third mission type. Good for variety but NOT essential for launch. Photo + Shake cover physical and quick options. Math is controversial (hard at 6 AM) and ADHD-hostile. | ALL except AD |
| 26 | QR code scan mission | **V1.2** | M | CPO | Fourth mission type. Requires QR code generation/printing flow. Nice-to-have variety but Photo already forces movement to a location. | AS, RF |
| 27 | Adaptive difficulty | **V1.1** | H | CPO, CFO | Mission difficulty based on chronotype gap. Important for fairness (Wolf waking at 6 AM gets easier mission than Bear at 6 AM). Needs baseline data to calibrate properly. | ALL |
| 28 | Snooze with penalty | **LAUNCH** | M | CPO | Settled decision: one snooze allowed (Sundelin 2024), second+ penalized. Simple: count snoozes, apply score penalty. | ALL |
| 29 | Night→morning connection | **LAUNCH** | M | CPO, CMO | "6h55m of sleep. You had 7h30m but donated 35 min to Instagram." THE differentiator no competitor has. Text on alarm screen pulling from bedtime tracking data. | NS, ALL |
| 30 | ADHD-calibrated missions | **LAUNCH** | L | CPO | Not a separate feature — conditional: if ADHD mode on, default to Photo/Shake, never auto-assign Math. Just a filter on mission selection. | AD |
| 31 | Anti-cheat protection | **LAUNCH** | H | CPO, CFO | Can't force-quit, can't bypass. Critical for Alarm Seekers (#1 conversion rank) and Repeat Failers (#2). If the alarm is cheatable, the product fails. AlarmKit helps here. | AS, RF |

**LAUNCH: 8 | V1.1: 2 | V1.2: 1 (minus 1 from original: QR deferred)**

---

### 4. MORNING MODE (9 features)

| # | Feature | Decision | Effort | Advocates | Reasoning | Segments |
|---|---------|----------|--------|-----------|-----------|----------|
| 32 | Post-alarm morning activation | **LAUNCH** | M | CPO | "You're up. But 'up' isn't 'done.'" App stays present after alarm dismissed. This is the gap every other alarm app has. Core differentiator #2. | ALL, esp RF |
| 33 | Morning routine tasks | **LAUNCH** | H | CPO | Customizable tasks: water, sunlight, stretch, journal, etc. Core of morning mode. Without this, there's no routine enforcement. | ALL |
| 34 | Expiring tasks | **LAUNCH** | M | CPO, CMO | Tasks expire if not done within window. Creates urgency. "Your morning disappears in 18 min." BeReal-style FOMO mechanic. Highly screenshot-worthy. | ALL, esp AS |
| 35 | Single-task display (ADHD) | **LAUNCH** | M | CPO | One task visible at a time for ADHD users. Technically: conditional rendering (ADHD mode = show 1, else show list). Not a separate screen, just a display toggle. | AD |
| 36 | Progressive routine builder | **LAUNCH** | M | CPO, CFO | Week 1: 1 habit. Week 2: 2 (unlock at 7-day streak). Up to 5. Prevents overload for Routine Seekers. Also gamification mechanic (unlock = reward). | RS |
| 37 | Full routine builder | **LAUNCH** | L | CPO | All habits available from Day 1 for users who answer "Yes" to existing routine question. Same builder UI, just no gating. | OP |
| 38 | Morning micro-learning | **V1.1** | M | CPO | 1 science fact per morning. Needs 66+ unique facts written. Content creation burden is real. Launch with Dare Engine copy; add science facts post-launch. | SC |
| 39 | Sleep inertia education | **LAUNCH** | L | CPO | "Your grogginess lasts ~40 min. This is biology, not failure." One-time educational card during first morning. Copy only, zero dev. | CS, SB |
| 40 | Score preview | **LAUNCH** | M | CPO, CFO | Real-time score building as tasks complete. Each task adds points visibly. Gamification feedback loop. Conversion-critical: users need to see value during trial. | ALL |

**LAUNCH: 8 | V1.1: 1**

---

### 5. LIFE SCORE (8 features)

| # | Feature | Decision | Effort | Advocates | Reasoning | Segments |
|---|---------|----------|--------|-----------|-----------|----------|
| 41 | Life Score (0-100) | **LAUNCH** | H | ALL agents | The single number. 30% wake consistency, 25% routine, 20% streak, 15% chronotype alignment, 10% protocol compliance. The gamification backbone. | ALL |
| 42 | Score breakdown | **LAUNCH** | M | CPO, CFO | "Night: -8. Wake: +15. Routine: +8." Users need to see WHY their score is what it is. Without this, the number feels arbitrary. Retention-critical. | ALL |
| 43 | Night vs morning contribution | **LAUNCH** | L | CPO | "If you'd gone to bed on time, score would be 72 not 58." Subset of score breakdown. The night-morning math is the entire product thesis. | NS |
| 44 | Score bands with Dare Engine copy | **LAUNCH** | L | CPO, CMO | 90-100: "Untouchable." Below 50: "We need to talk." Copy only. Makes the score feel alive. Dare Engine personality delivery point. | ALL |
| 45 | ADHD score context | **LAUNCH** | L | CPO | "65 against the hardest difficulty setting." Conditional copy when ADHD mode is on. Prevents demoralization. One line of conditional text. | AD |
| 46 | Score as math, not morality | **LAUNCH** | L | CPO | For Self-Blamers: "Not a grade of you. A starting point." Copy variant for encouraging tone users. Zero dev, just copy differentiation. | SB |
| 47 | Optimization targets | **V1.1** | M | CPO | "Your gap: chronotype alignment. Waking 1h15m early costs 3 points daily." Requires enough data to identify patterns. Better at Week 2+. | OP |
| 48 | Home screen widget | **LAUNCH** | H | Growth, CFO | Widgets drive 4.2x engagement. Score visible without opening app. Persistent passive reminder. One of the highest-ROI features for retention. | ALL |

**LAUNCH: 7 | V1.1: 1**

---

### 6. STREAK SYSTEM (7 features)

| # | Feature | Decision | Effort | Advocates | Reasoning | Segments |
|---|---------|----------|--------|-----------|-----------|----------|
| 49 | Daily streak | **LAUNCH** | M | CPO, CFO | Core gamification. Increments when alarm mission completed + 1 morning action. 15-30% D30 retention lift. Non-negotiable. | ALL |
| 50 | Streak milestones | **LAUNCH** | L | CPO, CMO | Day 7, 14, 21, 30, 66, 100 celebrations. Copy + simple UI card. Shareable moments. Low effort, high retention impact. | ALL |
| 51 | Loss aversion mechanics | **LAUNCH** | L | CPO, CFO | "Break your streak and it resets." Kahneman's loss aversion (2-2.5x). The threat of loss IS the retention mechanic. Copy + reset logic. | ALL, esp CO |
| 52 | Streak freeze (IAP) | **LAUNCH** | H | CFO | $0.99/₹49, max 2/month. Revenue stream + gateway IAP. Duolingo's proven funnel. Must ship at launch because the trial creates a 7-day streak that's about to die. | ALL |
| 53 | Streak race vs friends | **V1.2** | M | Growth | Requires friend system. Cold-start problem. Defer with other social features. | CO |
| 54 | Day 15 callout | **LAUNCH** | L | CPO, CFO | "Day 15. You've never made it this far. Don't blow it now." Addresses the Two-Week Wall. One notification. Directly serves Repeat Failers (#2 conversion rank). | RF |
| 55 | Logarithmic scoring | **LAUNCH** | L | CTO | Streak contribution to Life Score caps at 67 days. Prevents "streak is everything" over-indexing. Mathematical constraint, not a visible feature. | ALL |

**LAUNCH: 6 | V1.2: 1**

---

### 7. DARE ENGINE (7 features)

| # | Feature | Decision | Effort | Advocates | Reasoning | Segments |
|---|---------|----------|--------|-----------|-----------|----------|
| 56 | Dare Engine personality | **LAUNCH** | H | ALL agents | THE product differentiator. Personality raised Duolingo retention from 12% to 55%. Present everywhere. This is what makes us not-Alarmy. Requires writing 200+ lines of copy across all contexts. | ALL |
| 57 | 3 tone settings | **LAUNCH** | M | CPO, CFO | Tough love / Balanced / Encouraging. Set during onboarding. Technically: 3 copy variants per context. Essential so Self-Blamers don't uninstall from harsh copy. | ALL |
| 58 | Variable copy | **LAUNCH** | H | CPO | 50+ unique lines minimum. Never repeats within 2 weeks. Variable rewards beat fixed (Schultz 1997). Writing effort is high but dev effort is low (random selection from pool). | ALL |
| 59 | Science-infused variant | **V1.1** | M | CPO | "Melatonin peaked 30 min ago. Window closing." Requires writing a separate pool of science-aware copy. Science Curious is smallest, lowest-conversion segment. Defer. | SC |
| 60 | ADHD-safe copy | **LAUNCH** | L | CPO | No "just" language. Externalization framing. This is a copy audit, not a feature. Apply it once during the variable copy writing pass. Zero additional dev. | AD |
| 61 | Night escalation | **LAUNCH** | L | CPO | Already covered by feature #15 (Escalating Dare Engine commentary). This is the same feature, listed separately in the original doc. No additional work. | NS |
| 62 | Friend roast | **V1.2** | L | Growth | "Your friend beat you this week." Requires friend system. Deferred with social features. | CO |

**LAUNCH: 5 (deduplicated: 61 = 15) | V1.1: 1 | V1.2: 1**

---

### 8. SOCIAL & COMPETITION (8 features)

| # | Feature | Decision | Effort | Advocates | Reasoning | Segments |
|---|---------|----------|--------|-----------|-----------|----------|
| 63 | Friend system | **V1.2** | H | Growth | Cold-start problem. At launch there are zero users. Social features need a base of active users to function. Building this before users exist wastes dev time. | CO, OP |
| 64 | Friend leaderboard | **V1.2** | M | Growth | Depends on friend system. Ship together. | CO |
| 65 | Head-to-head comparison | **V1.2** | M | Growth | Depends on friend system. | CO |
| 66 | Friend's Day 1 comparison | **V1.2** | L | Growth | Depends on friend system. Smart feature for making new users competitive immediately. Ship with friend system. | CO |
| 67 | Weekly challenge | **V2** | H | Growth | Requires friend system + challenge infrastructure + loser/winner determination + Dare Engine integration. Higher complexity, lower priority. | CO |
| 68 | Friend invite reward | **V1.2** | M | Growth, CFO | Friend survives 7 days = both get free streak freeze. This IS the viral loop. Ship simultaneously with friend system — it's the incentive to invite. | CO |
| 69 | Shareable score card | **LAUNCH** | M | CMO, Growth | Does NOT require friends. User generates a card with score, streak, chronotype, QR code. Shares via text/Instagram/LinkedIn. This is the viral acquisition mechanic that works with ZERO users. Critical for Optimizers who will screenshot Day 1. | OP, CO |
| 70 | Shareable web quiz link | **V1.1** | L | Growth | Requires web quiz to exist. But it's just a URL share — trivial once the quiz is live. | SC |

**LAUNCH: 1 | V1.1: 1 | V1.2: 5 | V2: 1**

---

### 9. SCIENCE LAYER (4 features)

| # | Feature | Decision | Effort | Advocates | Reasoning | Segments |
|---|---------|----------|--------|-----------|-----------|----------|
| 71 | "Why?" expandable throughout app | **V1.1** | H | CPO | Valuable for Science Curious but that's the smallest segment (15-25M) with the lowest conversion rate. The core product works without this. Add it post-launch when there's time to write all the science explainers. | SC |
| 72 | Morning micro-learning | **V1.1** | M | CPO | Same as feature #38. Deduplicated. Needs 66+ unique facts. Content creation effort. | SC |
| 73 | Weekly science insights | **V2** | H | CPO | Personal data turned into biological explanation. Requires accumulated data (at least 2 weeks). Also requires complex data analysis. Ship after data accumulates. | SC, OP |
| 74 | Chronotype education | **LAUNCH** | M | CPO, CMO | Deep chronotype info in profile. 5 subtypes, genetics, what it means. This is CONTENT, not code. Write it once, display it in profile. Serves Clueless Sufferers (200-270M) who just discovered their type. Also powers the "I'm a Wolf" identity sharing. | SC, CS |

**LAUNCH: 1 | V1.1: 1 (deduplicated: 72=38) | V2: 1**

---

### 10. NOTIFICATIONS (8 features)

| # | Feature | Decision | Effort | Advocates | Reasoning | Segments |
|---|---------|----------|--------|-----------|-----------|----------|
| 75 | Pre-bedtime (30 min) | **LAUNCH** | L | CPO | Same as feature #13. Deduplicated. Already counted in Night Mode. | ALL |
| 76 | Bedtime enforcement | **LAUNCH** | L | CPO | "Past bedtime. Score ticking. -2 and counting." This IS Night Mode's core notification. | ALL |
| 77 | Morning score update | **LAUNCH** | L | CPO | "Score: 71. Streak: 8." Post-morning summary notification. Simple data pull. | ALL |
| 78 | Streak milestone | **LAUNCH** | L | CPO, CFO | "Day 14. Two weeks. The wall is right here." Triggered by streak count. The Day 15 callout is the most important one. | ALL, esp RF |
| 79 | Friend activity | **V1.2** | L | Growth | Requires friend system. Defer. | CO |
| 80 | Weekly summary | **LAUNCH** | M | CPO, CFO | "This week: avg score 74. Best day: Thursday. Worst: Monday." Weekly engagement touchpoint. Data aggregation is straightforward. | ALL |
| 81 | Evening check-in | **LAUNCH** | L | CPO | "Tomorrow's routine: Wake > Mission > Water > Sunlight. Bedtime in 45 min." Preview notification. Bridges night mode. | ALL |
| 82 | ADHD externalization reminder | **LAUNCH** | L | CPO | "10:25 PM. In 5 min, put phone in another room." Conditional notification for ADHD users. One extra notification template. | AD |

**LAUNCH: 6 (deduplicated: 75=13) | V1.2: 1**

---

### 11. PAYWALL & MONETIZATION (4 features)

| # | Feature | Decision | Effort | Advocates | Reasoning | Segments |
|---|---------|----------|--------|-----------|-----------|----------|
| 83 | Hard paywall + 7-day trial | **LAUNCH** | H | CFO | Settled decision. 10.7% hard paywall vs 2.1% freemium (RevenueCat 2026). Full access during trial, then basic alarm only. | ALL |
| 84 | Trial conversion hook | **LAUNCH** | L | CFO, CMO | "Your 7-day streak dies tomorrow if you don't subscribe." Day 5 and Day 6 notifications. Copy that references their actual streak. Highest-leverage copy in the entire app. | ALL |
| 85 | Streak freeze IAP | **LAUNCH** | H | CFO | Same as feature #52. Deduplicated. Already counted in Streak System. | ALL |
| 86 | Regional pricing | **LAUNCH** | M | CFO | US: $49.99/yr, India: ₹999/yr, mid-markets: $24.99/yr. App Store/Play Store handle this natively. Configuration, not code. | ALL |

**LAUNCH: 3 (deduplicated: 85=52)**

---

### 12. FREE WEB QUIZ (5 features)

| # | Feature | Decision | Effort | Advocates | Reasoning | Segments |
|---|---------|----------|--------|-----------|-----------|----------|
| 87 | Free chronotype quiz | **V1.1** | VH | Growth, CMO | 3-6M annual quiz takers is massive top-of-funnel. BUT: this is a separate web app (Next.js or similar), separate deployment, separate SEO strategy. Cannot delay mobile app launch for this. Ship mobile first, then build web quiz within 2-4 weeks. | SC, CS |
| 88 | Deep result page | **V1.1** | H | CMO, Growth | Part of the web quiz. Chronotype + DLMO estimate + social jet lag + health associations + citations. The "aha moment" for Science Curious. Ships with the quiz. | SC |
| 89 | Web-to-app bridge | **V1.1** | M | Growth | "Understanding is step one. Fixing it is step two." CTA on result page. Smart link to App Store/Play Store. | SC, CS |
| 90 | Quiz data transfer | **V1.2** | H | CTO | Results carry to app via email/code. Requires auth bridge, data sync. Technical complexity for a small segment. Ship simple version (show results, user re-enters in app) in V1.1, real sync in V1.2. | SC |
| 91 | Shareable quiz | **V1.1** | L | Growth | Share button on result page. Each share = top of funnel. Trivial once quiz exists. | SC |

**V1.1: 4 | V1.2: 1**

---

### 13. ADHD MODE (8 features)

| # | Feature | Decision | Effort | Advocates | Reasoning | Segments |
|---|---------|----------|--------|-----------|-----------|----------|
| 92 | Physical-only missions | **LAUNCH** | L | CPO | Deduplicated = feature #30. Conditional: ADHD on = Photo/Shake only. Already counted. | AD |
| 93 | Single-task morning display | **LAUNCH** | M | CPO | Deduplicated = feature #35. Already counted. | AD |
| 94 | Visual countdown timers | **LAUNCH** | M | CPO | Big, screen-filling timers for time blindness. Actually benefits ALL users. This should be the default timer design, with ADHD mode making them even more prominent. | AD, ALL |
| 95 | No "just" language | **LAUNCH** | L | CPO | Copy audit. Remove all "just get up", "just put it down." Applied during copy writing. Zero dev. | AD |
| 96 | Externalization framing | **LAUNCH** | L | CPO | "Put phone in another room" not "try to resist." Copy approach, not a feature. Applied in ADHD copy variants. | AD |
| 97 | Score context | **LAUNCH** | L | CPO | Deduplicated = feature #45. Already counted. | AD |
| 98 | Hyperfocus-aware night mode | **LAUNCH** | L | CPO | Deduplicated = feature #19. Already counted. | AD |
| 99 | Transition support | **LAUNCH** | L | CPO | Deduplicated = feature #20. Already counted. | AD |

**LAUNCH: 2 net new (94, 95/96 as copy audit). Rest deduplicated.**

---

### 14. PROFILE & SETTINGS (8 features)

| # | Feature | Decision | Effort | Advocates | Reasoning | Segments |
|---|---------|----------|--------|-----------|-----------|----------|
| 100 | Chronotype profile | **LAUNCH** | M | CPO | Shows their type, SJL number, ideal times, biological clock visualization. The "identity page" users return to and screenshot. | ALL |
| 101 | Alarm settings | **LAUNCH** | M | CPO | Time, mission type, difficulty, snooze policy. Required for core function. | ALL |
| 102 | Bedtime settings | **LAUNCH** | L | CPO | Target bedtime, notification preferences, enforcement level. Required for Night Mode. | ALL |
| 103 | Routine customization | **LAUNCH** | M | CPO | Add/remove/reorder morning tasks. Set durations and timers. Required for Morning Mode. | ALL |
| 104 | Tone setting | **LAUNCH** | L | CPO | Change Dare Engine intensity anytime. Toggle in settings. | ALL |
| 105 | ADHD toggle | **LAUNCH** | L | CPO | Turn ADHD mode on/off. Single toggle. | AD |
| 106 | Friend management | **V1.2** | M | Growth | Requires friend system. Defer. | CO |
| 107 | Notification preferences | **LAUNCH** | M | CPO | Control which notifications, when, how many. Required for user satisfaction and preventing notification fatigue. | ALL |

**LAUNCH: 7 | V1.2: 1**

---

### 15. ANALYTICS & DATA VISUALIZATION (7 features)

| # | Feature | Decision | Effort | Advocates | Reasoning | Segments |
|---|---------|----------|--------|-----------|-----------|----------|
| 108 | Score trend line (on score screen) | **LAUNCH** | M | CPO, CFO | 7 dots on Day 7 IS the paywall conversion argument. Shows trajectory. Lives on score screen, not a separate tab. | ALL |
| 109 | Bedtime vs score overlay | **V1.1** | M | CPO, Data | Two lines showing bedtime adherence vs score. Needs 7+ days of data. Proves night→morning thesis with user's own data. | NS, SC, OP |
| 110 | Weekly heatmap (best/worst days) | **V1.1** | M | Data, CPO | 7 colored blocks showing which days are strongest. Needs 14+ days. Reveals Monday effect. | ALL, esp OP |
| 111 | Consistency meters (bedtime + wake) | **V1.1** | L | CPO | Two circular progress bars. % on-time bedtimes, % on-time wakes. Simple, visual, zero-load. | ALL |
| 112 | Night→morning correlation scatter | **V1.2** | M | CPO, Data | Scatter plot: early bedtime dots = higher scores. Visual proof. Needs 30+ days for meaningful pattern. | NS, SC, OP |
| 113 | Monthly comparison | **V1.2** | M | CPO, CFO | "Month 1 avg: 61. Month 3 avg: 78. +17 points." Progress visualization for retention. | ALL |
| 114 | Year in Review (Spotify Wrapped style) | **V2** | H | Growth, CMO, CFO | "Your Year as a Wolf." Multi-slide shareable. Score journey, total mornings, longest streak. Annual renewal driver. 40-60% share rate for long-term users. | ALL |

**LAUNCH: 1 | V1.1: 3 | V1.2: 2 | V2: 1**

---

### 16. VIRAL SHARING SYSTEM (12 features)

| # | Feature | Decision | Effort | Advocates | Reasoning | Segments |
|---|---------|----------|--------|-----------|-----------|----------|
| 115 | Chronotype Identity Card | **LAUNCH** | M | Growth, CMO | "I'm a Wolf" shareable card after onboarding. Personality quiz energy — 15-25% share rate. Highest-leverage viral artifact. Contains subtle branding + QR. | ALL, esp CS, SB |
| 116 | Streak Milestone Cards | **LAUNCH** | M | Growth, CMO | Designed cards for Day 7, 14, 30, 66, 100, 365. Achievement trophies. 10-20% share rate. | ALL |
| 117 | "I Survived" Challenge Cards | **LAUNCH** | L | Growth, CMO | "I survived 30 days without hitting snooze." Challenge completion cards. 15-25% share rate at milestones. | ALL, esp RF |
| 118 | Morning Completion Card | **LAUNCH** | L | Growth | "Morning done by 7:12 AM. Water ✓ Sunlight ✓ Score: +22." Quick morning flex for Instagram Stories. | ALL, esp RS |
| 119 | Dare Engine Quote Cards | **LAUNCH** | L | CMO, Growth | Best Dare Engine lines as shareable quote cards. Funny/relatable. People screenshot and share. 8-15% share rate. | ALL |
| 120 | Challenge Invite Card | **V1.2** | M | Growth | "[Name] challenged you to beat their score." Personal challenge FROM a friend. Requires friend system. 20-30% share rate. | CO |
| 121 | Weekly Summary Card | **V1.1** | M | Growth | "My week: Score 61→78. Best: Thursday. Worst: Monday." Visual progress card for Sunday sharing. | ALL, esp OP |
| 122 | Night→Morning Proof Card | **V1.1** | L | Growth, CMO | "Bedtime 11:02 PM → Score 78." Data proof card. Controversial enough to start conversations. | NS, SC |
| 123 | Social Jet Lag Calculator Result Card | **V1.1** | L | Growth | "I have 1h45m of social jet lag. 69% of people do too." Shareable from quiz or in-app. | CS, SC |
| 124 | Chronotype Comparison Card | **V1.2** | M | Growth | "I'm a Wolf. My partner is a Bear." Relationship content. Requires 2 users to have completed quiz. | ALL |
| 125 | Platform-specific auto-formatting | **LAUNCH** | H | CTO, Growth | Auto-generates correct format: Instagram Story (1080x1920), Feed (1080x1080), WhatsApp, Twitter (1200x675). Per-user unique QR code for silent referral tracking. | ALL |
| 126 | Two-tap share flow | **LAUNCH** | M | UX, Growth | See card → tap share → tap platform. Native share sheet with platform-ordered buttons and auto-generated captions. Zero cognitive load. | ALL |

**LAUNCH: 7 | V1.1: 3 | V1.2: 2**

---

## PART 2: LAUNCH DAY FEATURE SET

**Total unique features shipping Day 1: 70** (after deduplication of 12 features listed across multiple categories, plus Analytics and Viral Sharing additions)

### By App Section

#### Onboarding (10 features)
1. Chronotype quiz (rMEQ + uMCTQ hybrid)
2. Chronotype reveal screen
3. Social jet lag visualization
4. "You're not broken" reframe screen
5. "Why everything else failed" screen
6. ADHD acknowledgment question
7. Existing routine question
8. Tone calibration (3 levels)
9. Smart alarm setup with chronotype context
10. Smart bedtime calculator

#### Night Mode (8 features)
11. Pre-bedtime warning notification
12. Live score penalty (score ticks down past bedtime)
13. Escalating Dare Engine commentary
14. Sleep window calculation
15. Morning preview
16. Bedtime tracking
17. Hyperfocus-aware prompts (ADHD variant)
18. Externalization tips (ADHD variant)

#### Alarm System (7 features)
19. Full-screen alarm (AlarmKit)
20. Photo mission
21. Shake mission
22. Snooze with penalty (1 free, 2+ penalized)
23. Night-to-morning connection on alarm screen
24. ADHD-calibrated mission selection
25. Anti-cheat protection

#### Morning Mode (8 features)
26. Post-alarm morning activation ("up isn't done")
27. Morning routine tasks (customizable)
28. Expiring tasks with countdown
29. Single-task display (ADHD mode)
30. Progressive routine builder (gated unlocking)
31. Full routine builder (for existing routine users)
32. Sleep inertia education card
33. Score preview (real-time during morning)

#### Life Score (7 features)
34. Life Score (0-100) with 5-component weighting
35. Score breakdown (night, wake, routine, streak, alignment)
36. Night vs morning contribution display
37. Score bands with Dare Engine copy
38. ADHD score context ("65 against hardest difficulty")
39. Score as math, not morality (Self-Blamer variant)
40. Home screen widget

#### Streak System (5 features)
41. Daily streak counter
42. Streak milestones (7, 14, 21, 30, 66, 100)
43. Loss aversion mechanics (streak reset threat)
44. Streak freeze IAP ($0.99/₹49, max 2/month)
45. Day 15 callout notification

#### Dare Engine (4 features, deduplicated)
46. Dare Engine personality (200+ lines across all contexts)
47. 3 tone settings (tough love / balanced / encouraging)
48. Variable copy pool (50+ unique lines, no repeat in 2 weeks)
49. ADHD-safe copy (no "just" language, externalization framing)

#### Social (1 feature)
50. Shareable score card (score, streak, chronotype, QR code)

#### Science (1 feature)
51. Chronotype education page (in profile)

#### Notifications (6 features)
52. Bedtime enforcement notification
53. Morning score update
54. Streak milestone notifications
55. Weekly summary
56. Evening check-in / routine preview
57. ADHD externalization reminder

#### Paywall & Monetization (3 features)
58. Hard paywall + 7-day trial
59. Trial conversion hook (Day 5-6 notifications)
60. Regional pricing (US/India/UK/other)

#### Profile & Settings (7 features)
61. Chronotype profile page
62. Alarm settings
63. Bedtime settings
64. Routine customization
65. Tone setting
66. ADHD toggle
67. Notification preferences

#### Analytics (1 feature)
68. Score trend line (on score screen, expandable)

#### Viral Sharing (7 features)
69. Chronotype Identity Card (shareable after onboarding)
70. Streak Milestone Cards (Day 7, 14, 30, 66, 100, 365)
71. "I Survived" Challenge Cards
72. Morning Completion Card
73. Dare Engine Quote Cards
74. Platform-specific auto-formatting (Story, Feed, WhatsApp, Twitter)
75. Two-tap share flow

*Note: Features numbered past 67 reflect the Analytics and Viral Sharing additions. The unique count is 70 after deduplication across the full 126 features.*

---

## PART 3: GROWTH FEATURES

Features specifically designed for acquisition and viral growth, organized by expected impact.

### Launch Day Growth Mechanics

| Feature | Viral Mechanism | Expected Impact | Segment Served |
|---------|----------------|-----------------|----------------|
| **Shareable score card** | User screenshots/shares score to Instagram, LinkedIn, texts. Contains QR code to download. | Every Optimizer shares Day 1. Expected: 0.1-0.3 viral coefficient (each user brings 0.1-0.3 new users). | OP, CO |
| **Chronotype reveal** | "I'm a Wolf" identity creation. Users tell friends, Google it, share. Natural conversation starter. | Highest organic word-of-mouth driver. Social currency. | CS, SB, SC |
| **"69% wrong timezone" framing** | ASO subtitle + ad copy + TikTok hook. The stat that stops the scroll. | Core awareness driver. Powers all content marketing. | CS, SB |
| **Night-morning connection** | Unique product angle for content/PR. "No other app connects your night to your morning." | Press angle, TikTok content hook, ASO differentiator. | NS, ALL |
| **Home screen widget** | Passive daily reminder. Non-users see it on friends' phones. | 4.2x engagement lift. Organic discovery when friends see widget. | ALL |

### V1.1 Growth Features (Weeks 2-4)

| Feature | Viral Mechanism | Expected Impact |
|---------|----------------|-----------------|
| **Free web chronotype quiz** | SEO play capturing 3-6M annual quiz takers. Deep results = shares. Each quiz taker = potential app user. | Top-of-funnel engine. 150-250K monthly search volume for chronotype queries. Own "social jet lag" as a term. |
| **Shareable web quiz link** | Science Curious users share the quiz, not their score. Each share = new quiz taker = potential install. | Compounding: each quiz taker has ~10% chance of sharing = exponential growth over months. |

### V1.2 Growth Features (Month 2-3)

| Feature | Viral Mechanism | Expected Impact |
|---------|----------------|-----------------|
| **Friend system + leaderboard + head-to-head** | Direct social competition. "I can beat that" drives invites. | Competitors (40-60M segment) won't engage without friends. But they're the highest-volume viral drivers when social features exist. |
| **Friend invite reward** | Friend survives 7 days = both get free streak freeze. Tangible incentive for existing users to recruit. | Expected: 0.05-0.15 additional viral coefficient. Each active user invites 1-3 friends; ~20% accept. |
| **Friend's Day 1 comparison** | New Competitors feel competitive immediately. "Your Day 1: 71. Their Day 1: 68." | Reduces time-to-engagement for social users from days to minutes. |

### Growth Channel Mapping

| Channel | Primary Feature | Secondary Feature |
|---------|----------------|-------------------|
| **ASO (App Store search)** | Alarm system + missions | Night mode + chronotype in listing |
| **TikTok organic** | Dare Engine personality (screenshot/video content) | Night mode escalation clips |
| **Reddit** | "Why everything else failed" narrative | ADHD mode + chronotype reveal |
| **ProductHunt** | Chronotype scoring + night-morning loop | Shareable score card |
| **SEO (web quiz)** | Free chronotype quiz | Social jet lag calculator |
| **Word of mouth** | "I'm a Wolf" identity sharing | Score card + widget visibility |

---

## PART 4: RETENTION FEATURES

Mapped to the 3-era strategy: Enforcement (M1-2) -> Insight (M3-6) -> Identity (M6+)

### Era 1: ENFORCEMENT (Month 1-2)

*Goal: Make the app indispensable through daily enforcement mechanics.*

| Feature | Retention Mechanism | Target Metric |
|---------|-------------------|---------------|
| **Full-screen alarm + missions** | Can't start day without the app. Daily forced touchpoint. | D1 retention target: 50%+ (vs 25% H&F avg) |
| **Night Mode live score penalty** | Second daily touchpoint. Score drops if they skip nighttime engagement. | 2x daily engagement (night + morning) |
| **Streak system + loss aversion** | Accumulated investment that hurts to lose. Day 7 streak at trial end = conversion pressure. | D7 retention target: 30%+ (vs 12-15% H&F avg) |
| **Streak freeze IAP** | Pays $0.99 to protect investment. Once they pay, they're invested. Gateway to subscription. | IAP conversion: 5-10% of trial users buy a freeze |
| **Expiring morning tasks** | FOMO mechanic. Tasks disappear if not done. Creates urgency every morning. | Morning mode engagement: 60%+ of alarm users |
| **Progressive routine builder** | Unlock mechanic creates anticipation. "What do I get at Day 7?" | Week 2 retention: 25%+ |
| **Trial conversion hook** | "Your 7-day streak dies tomorrow." Loss aversion at maximum. | Trial-to-paid: 35% target |
| **Day 15 callout** | Directly addresses the Two-Week Wall. "You've never made it this far." | D14-D21 retention: critical survival window |

### Era 2: INSIGHT (Month 3-6)

*Goal: Transition from external enforcement to personal data insights that create value.*

| Feature | Phase | Retention Mechanism |
|---------|-------|-------------------|
| **Weekly summary notifications** | LAUNCH (but grows in value) | Pattern recognition: "Your Mondays are always worst. Weekend sleep-in creates mini jet lag." |
| **Optimization targets** | V1.1 | "Your gap: chronotype alignment. Shift bedtime 15 min earlier." Gives Optimizers something to work toward. |
| **Weekly science insights** | V2 | "Avg sleep onset 11:22 PM, 23 min after DLMO. Cost: ~46 min lying awake." Deep personal data + biology. |
| **Adaptive difficulty** | V1.1 | Missions get harder as user improves. Prevents plateauing. |
| **Score history / trends** | V1.2 | "Month 1 avg: 61. Month 3 avg: 78. You've shifted +17 points." Progress visualization. |

### Era 3: IDENTITY (Month 6+)

*Goal: App becomes part of who they are, not what they do.*

| Feature | Phase | Retention Mechanism |
|---------|-------|-------------------|
| **Friend leaderboard** | V1.2 | Social identity: "I'm the person who has an 89." Leaving = losing status. |
| **Chronotype identity** | LAUNCH (compounds over time) | "I'm a Wolf" becomes how they describe themselves. Cultural identity. |
| **Score card sharing** | LAUNCH (compounds) | Public commitment. Sharing your score = social contract to maintain it. |
| **66-day achievement** | LAUNCH (streak milestone) | Habit formation milestone. "You've built a habit. Science says so." |
| **Shift Your Clock program** | V2 | 14-day guided chronotype shifting. Deepens the relationship with the app's science. |

### Retention Feature Checklist by Month

| Month | Critical Features | Target Retention |
|-------|------------------|-----------------|
| M1 | Alarm + Night Mode + Streak + Score + Widget + Trial hook | 35%+ M1 survival (vs 30% H&F avg churn in M1) |
| M2 | Progressive unlocks complete + Adaptive difficulty + Optimization targets | 30%+ |
| M3 | Weekly insights improving + Score trends + Friend system launched | 25%+ |
| M6 | Social competition + Science insights + Identity solidified | 20%+ |
| M12 | Shift Your Clock + Deep personalization + Renewal push | 35%+ renewal (vs 30.3% H&F median) |

---

## PART 5: REVENUE FEATURES

### Direct Revenue Impact

| Feature | Revenue Mechanism | Expected Impact |
|---------|------------------|-----------------|
| **Hard paywall + 7-day trial** | 10.7% download-to-paid (hard) vs 2.1% (freemium). 5x revenue advantage. | Foundation of all revenue. |
| **Trial conversion hook** | "Your 7-day streak dies tomorrow." Loss aversion copy on Day 5-6. | +5-15% lift on trial-to-paid conversion. |
| **Streak freeze IAP** | $0.99/₹49 per use, max 2/month. ~$2-3/payer/year in additional revenue. | $10K+ Year 1 IAP revenue. Gateway purchase: users who buy IAP have 3-5x higher subscription retention. |
| **Regional pricing** | ₹999 India (vs $49.99 US) captures volume market. Japan $33/yr captures highest WTP market. | India: volume. Japan/US: revenue per user. Blended ARPU ~$35. |

### Indirect Revenue Features (Conversion Drivers)

| Feature | How It Drives Conversion | Phase |
|---------|------------------------|-------|
| **Chronotype reveal** | "Aha moment" before paywall. Users feel they've received value. Noom pattern. | LAUNCH |
| **Live score penalty (Night Mode)** | User discovers Night Mode during trial. "Wait, it does nights too?" Surprise value. | LAUNCH |
| **Score + streak visible on widget** | Passive daily reminder during trial. "I have a 5-day streak showing on my home screen." | LAUNCH |
| **Progressive routine builder** | Habit #2 unlocks on Day 7 — the day the trial converts. "I'm about to unlock something." | LAUNCH |
| **Shareable score card** | Social commitment. Once they've shared their score publicly, quitting is harder. | LAUNCH |
| **Chronotype Identity Card** | Viral acquisition. "I'm a Wolf" shareable card after onboarding. 15-25% share rate. Personality quiz energy drives installs. | LAUNCH |
| **Streak Milestone Cards** | Social commitment. Sharing streak milestones publicly makes quitting harder. 10-20% share rate at Day 7, 14, 30, 66. | LAUNCH |

### Revenue Projection by Feature

| Feature Set | Year 1 Revenue Contribution |
|-------------|---------------------------|
| Subscription (paywall) | ~$190K (base case, 4,559 paid subscribers) |
| Streak freeze IAP | ~$10K |
| **Total base case** | **~$200K** |
| With web quiz adding +15% installs from M3 | ~$230K |
| With friend system adding +10% from M4 | ~$250K |

---

## PART 6: TECHNICAL DEPENDENCY MAP

### Build Order (Critical Path)

```
PHASE 0: Foundation (Week 1-4)
├── User auth + profile (MongoDB)
├── Chronotype quiz engine (rMEQ scoring algorithm)
├── Life Score calculation engine (5-component formula)
├── Dare Engine copy system (tone x context → copy selection)
└── Push notification infrastructure

PHASE 1: Core Loop (Week 5-10)
├── AlarmKit integration (iOS 26) ← LONGEST LEAD ITEM
│   ├── Full-screen alarm
│   ├── Photo mission (camera + location matching)
│   ├── Shake mission (accelerometer)
│   ├── Anti-cheat (app lock, force-quit prevention)
│   └── Snooze penalty logic
├── Night Mode
│   ├── Bedtime tracking (actual vs target)
│   ├── Live score penalty (timer → score decrement)
│   ├── Escalating notifications (time-based copy selection)
│   └── Sleep window calculation (alarm time - current time)
├── Morning Mode
│   ├── Post-alarm activation screen
│   ├── Morning routine tasks (CRUD + timers)
│   ├── Expiring tasks (countdown → disappear)
│   ├── Progressive builder (streak count → unlock gate)
│   └── Single-task ADHD display (conditional render)
└── DEPENDS ON: Phase 0 (auth, quiz, score engine)

PHASE 2: Gamification (Week 8-12, overlaps with Phase 1)
├── Streak system
│   ├── Daily streak logic (alarm + 1 task = increment)
│   ├── Streak reset on miss
│   ├── Logarithmic score contribution
│   ├── Milestone notifications
│   └── Loss aversion copy triggers
├── Home screen widget (iOS WidgetKit / Android widget)
│   └── DEPENDS ON: Life Score engine, Streak system
├── Streak freeze IAP
│   ├── In-app purchase integration (RevenueCat)
│   └── DEPENDS ON: Streak system
├── Shareable score card
│   ├── Card generation (score, streak, chronotype, QR)
│   └── Share sheet integration
└── Sharing system
    ├── Card generation engine (template + user data → image)
    ├── Platform-specific formatting (aspect ratios)
    ├── Per-user QR code generation
    ├── Native share sheet integration
    └── DEPENDS ON: Life Score, Streak, Chronotype quiz

PHASE 3: Paywall & Polish (Week 10-14)
├── Hard paywall (RevenueCat)
│   ├── Trial management (7-day)
│   ├── Regional pricing configuration
│   ├── Trial conversion notifications (Day 5, 6)
│   └── Post-trial feature gating
├── Onboarding flow
│   ├── Quiz screens (7 questions)
│   ├── Reveal + SJL visualization
│   ├── Reframe screens (not broken, why others failed)
│   ├── ADHD question → mode activation
│   ├── Routine question → progressive/full routing
│   ├── Tone calibration
│   └── Alarm + bedtime setup
├── Notification system
│   ├── Scheduled notifications (bedtime, morning, weekly)
│   ├── Context-aware copy selection (Dare Engine)
│   └── ADHD variant notifications
├── Profile & Settings
│   ├── Chronotype profile page
│   ├── All settings screens
│   └── Chronotype education content
└── Score trend line
    └── DEPENDS ON: Life Score engine (needs 3+ days of data to display)

PHASE 4: Testing & Launch (Week 14-18)
├── TestFlight / internal testing
├── App Store / Play Store listing
│   ├── Screenshots (score card, night mode, chronotype reveal)
│   ├── Preview video (Dare Engine in action)
│   └── ASO optimization (keywords, description)
├── ProductHunt preparation
└── TikTok content pipeline
```

### Dependency Graph (What Blocks What)

| Feature | Depends On | Blocks |
|---------|-----------|--------|
| Life Score | Chronotype quiz, Bedtime tracking, Alarm events, Morning tasks, Streak | Score breakdown, Widget, Score card, Score bands |
| Night Mode scoring | Bedtime tracking + Life Score engine | Night-morning connection, Score breakdown |
| Home screen widget | Life Score + Streak | Nothing (leaf node) |
| Streak freeze IAP | Streak system + RevenueCat | Nothing (leaf node) |
| Shareable score card | Life Score + Streak + Chronotype | Nothing (leaf node, but enables growth) |
| Progressive builder | Streak system (7-day gate) | Habit unlock notifications |
| Trial conversion | RevenueCat + Streak (Day 7 reference) | Revenue |
| ADHD mode | Onboarding ADHD question | ADHD mission filter, ADHD copy, ADHD display mode |

### Post-Launch Build Order

```
V1.1 (Weeks 2-4 post-launch)
├── Free web chronotype quiz (separate web app)
│   ├── rMEQ quiz engine (web)
│   ├── Deep result page
│   ├── Web-to-app bridge (smart link)
│   └── Share functionality
├── Math/puzzle mission
├── Adaptive difficulty
├── Animated analysis screen (onboarding polish)
├── Morning micro-learning (content: 66+ facts)
├── Science-infused Dare Engine variant
├── Optimization targets (score improvement suggestions)
├── "Why?" expandable science layer
└── Analytics expansion
    ├── Bedtime vs score overlay
    ├── Weekly heatmap
    ├── Consistency meters
    └── Shareable weekly/proof/SJL cards

V1.2 (Month 2-3)
├── Friend system
│   ├── Add by code / contacts
│   ├── Friend leaderboard
│   ├── Head-to-head comparison
│   ├── Friend's Day 1 comparison
│   ├── Friend invite reward
│   ├── Friend activity notifications
│   └── Friend management in settings
├── Night score with friend comparison
├── QR code scan mission
├── Quiz data transfer (web → app sync)
├── Score history / trends
└── Friend roast (Dare Engine)

V2 (Month 4-6)
├── Weekly science insights (personal data → biology)
├── Weekly challenge (friend vs friend)
├── Shift Your Clock 14-day program
└── Day Mode (AI reminders, focus blocks)
```

---

## PART 7: FEATURE-TO-SEGMENT MATRIX

Coverage score = number of LAUNCH features directly serving that segment.

| Feature | AS | NS | CS | RF | RS | SB | OP | AD | CO | SC |
|---------|----|----|----|----|----|----|----|----|----|----|
| Chronotype quiz | X | X | X | X | X | X | X | X | X | X |
| Chronotype reveal | X | X | X | X | X | X | X | X | X | X |
| SJL visualization | . | X | X | . | . | X | . | . | . | X |
| "Not broken" reframe | . | . | X | . | . | X | . | X | . | . |
| "Why others failed" | . | . | . | X | . | . | . | . | . | . |
| ADHD question | . | . | . | . | . | . | . | X | . | . |
| Routine question | . | . | . | . | X | . | X | . | . | . |
| Tone calibration | X | X | X | X | X | X | X | X | X | X |
| Smart alarm setup | X | X | X | X | X | X | X | X | X | X |
| Smart bedtime calc | X | X | X | X | X | X | X | X | X | X |
| Pre-bedtime warning | X | X | X | X | X | X | X | X | X | X |
| Live score penalty | X | X | X | X | X | X | X | X | X | X |
| Escalating Dare Engine | X | X | . | X | . | . | . | . | X | . |
| Sleep window calc | X | X | X | X | X | X | X | X | X | X |
| Morning preview | X | X | X | X | X | X | X | X | X | X |
| Bedtime tracking | X | X | X | X | X | X | X | X | X | X |
| ADHD night prompts | . | . | . | . | . | . | . | X | . | . |
| ADHD ext. tips | . | . | . | . | . | . | . | X | . | . |
| Full-screen alarm | X | X | X | X | X | X | X | X | X | X |
| Photo mission | X | X | X | X | X | X | X | X | X | X |
| Shake mission | X | X | X | X | X | X | X | X | X | X |
| Snooze w/ penalty | X | X | X | X | X | X | X | X | X | X |
| Night→morning text | X | X | X | X | X | X | X | X | X | X |
| ADHD mission filter | . | . | . | . | . | . | . | X | . | . |
| Anti-cheat | X | . | . | X | . | . | . | . | . | . |
| Post-alarm activation | X | X | X | X | X | X | X | X | X | X |
| Morning routine tasks | X | X | X | X | X | X | X | X | X | X |
| Expiring tasks | X | X | X | X | X | X | X | X | X | X |
| Single-task ADHD | . | . | . | . | . | . | . | X | . | . |
| Progressive builder | . | . | . | . | X | . | . | . | . | . |
| Full builder | . | . | . | . | . | . | X | . | . | . |
| Sleep inertia edu | . | . | X | . | . | X | . | . | . | . |
| Score preview | X | X | X | X | X | X | X | X | X | X |
| Life Score | X | X | X | X | X | X | X | X | X | X |
| Score breakdown | X | X | X | X | X | X | X | X | X | X |
| Night vs morning | . | X | . | . | . | . | . | . | . | . |
| Score bands + copy | X | X | X | X | X | X | X | X | X | X |
| ADHD score context | . | . | . | . | . | . | . | X | . | . |
| Score = math not moral | . | . | . | . | . | X | . | . | . | . |
| Home screen widget | X | X | X | X | X | X | X | X | X | X |
| Daily streak | X | X | X | X | X | X | X | X | X | X |
| Streak milestones | X | X | X | X | X | X | X | X | X | X |
| Loss aversion | X | X | X | X | X | X | X | X | X | X |
| Streak freeze IAP | X | X | X | X | X | X | X | X | X | X |
| Day 15 callout | . | . | . | X | . | . | . | . | . | . |
| Logarithmic scoring | X | X | X | X | X | X | X | X | X | X |
| Dare Engine personality | X | X | X | X | X | X | X | X | X | X |
| 3 tone settings | X | X | X | X | X | X | X | X | X | X |
| Variable copy | X | X | X | X | X | X | X | X | X | X |
| ADHD-safe copy | . | . | . | . | . | . | . | X | . | . |
| Shareable score card | . | . | . | . | . | . | X | . | X | . |
| Chronotype education | . | . | X | . | . | . | . | . | . | X |
| Bedtime enforcement notif | X | X | X | X | X | X | X | X | X | X |
| Morning score update | X | X | X | X | X | X | X | X | X | X |
| Streak milestone notifs | X | X | X | X | X | X | X | X | X | X |
| Weekly summary | X | X | X | X | X | X | X | X | X | X |
| Evening check-in | X | X | X | X | X | X | X | X | X | X |
| ADHD ext. reminder | . | . | . | . | . | . | . | X | . | . |
| Hard paywall + trial | X | X | X | X | X | X | X | X | X | X |
| Trial conversion hook | X | X | X | X | X | X | X | X | X | X |
| Regional pricing | X | X | X | X | X | X | X | X | X | X |
| Chronotype profile | X | X | X | X | X | X | X | X | X | X |
| Alarm settings | X | X | X | X | X | X | X | X | X | X |
| Bedtime settings | X | X | X | X | X | X | X | X | X | X |
| Routine customization | X | X | X | X | X | X | X | X | X | X |
| Tone setting | X | X | X | X | X | X | X | X | X | X |
| ADHD toggle | . | . | . | . | . | . | . | X | . | . |
| Notification prefs | X | X | X | X | X | X | X | X | X | X |
| Score trend line | X | X | X | X | X | X | X | X | X | X |
| Chronotype Identity Card | X | X | X | . | . | X | . | . | . | . |
| Streak Milestone Cards | X | X | X | X | X | X | X | X | X | X |
| "I Survived" Cards | X | X | X | X | X | X | X | X | X | X |
| Morning Completion Card | X | X | X | X | X | X | X | X | X | X |
| Dare Engine Quote Cards | X | X | X | X | X | X | X | X | X | X |
| Platform auto-formatting | X | X | X | X | X | X | X | X | X | X |
| Two-tap share flow | X | X | X | X | X | X | X | X | X | X |

### Coverage Scores (LAUNCH features per segment)

| Segment | Features Directly Serving | Coverage | Conversion Rank | Segment Size |
|---------|--------------------------|----------|-----------------|-------------|
| **Alarm Seeker** | 57 | Excellent | #1 | 25-35M/yr |
| **Night Struggler** | 57 | Excellent | #5 | 175-215M |
| **Clueless Sufferer** | 58 | Excellent | #8 | 200-270M |
| **Repeat Failer** | 57 | Excellent | #2 | 60-80M |
| **Routine Seeker** | 56 | Excellent | #4 | 40-60M |
| **Self-Blamer** | 58 | Excellent | #6 | 80-100M |
| **Optimizer** | 57 | Excellent | #10 | 15-25M |
| **ADHD Discoverer** | 65 | Outstanding | #3 | 20-40M |
| **Competitor** | 56 | Excellent (social deferred) | #7 | 40-60M |
| **Science Curious** | 56 | Good (deep science deferred) | #9 | 15-25M |

### Key Findings

**Top 3 conversion-rank segments and their launch coverage:**
1. **Alarm Seekers (#1)**: Fully covered. Uncheateable alarm + missions + anti-cheat. Night Mode is the surprise differentiator.
2. **Repeat Failers (#2)**: Fully covered. "Why others failed" screen + Day 15 callout + anti-cheat + night-morning loop addresses their exact pain.
3. **ADHD Discoverers (#3)**: BEST covered segment at launch (58 features). ADHD mode ships Day 1 with acknowledgment, mission calibration, single-task display, safe copy, score context, and night prompts. This was the right call — 28B TikTok views, 2M+ r/ADHD subscribers.

**Competitor segment (#7) gap**: Social features deferred to V1.2. But the shareable score card at launch gives Competitors something to screenshot and text to friends, seeding the social dynamic until the friend system ships.

**Science Curious (#9) gap**: Deep science layer deferred to V1.1-V2. But chronotype education page + chronotype reveal provide enough science to satisfy curiosity. Web quiz in V1.1 will be the primary acquisition tool for this segment.

---

## PART 8: REVISED FEATURE COUNT

| Phase | Unique Features | Timeline | Key Additions |
|-------|----------------|----------|---------------|
| **LAUNCH** | **70** | Day 1 (Month 0) | Full core loop: Night + Alarm + Morning + Score + Streak + Dare Engine + ADHD Mode + Widget + Paywall + Score Trend Line + Viral Sharing System (7 features) |
| **V1.1** | **18** | Weeks 2-4 post-launch | Web quiz (4 features), Math mission, Adaptive difficulty, Science layer, Animated analysis, Micro-learning, Optimization targets, Science Dare Engine variant + Analytics (3: heatmap, consistency meters, bedtime vs score) + Sharing (3: weekly/proof/SJL cards) |
| **V1.2** | **15** | Month 2-3 | Friend system (7 features), QR mission, Quiz data transfer, Score history, Night friend comparison + Analytics (2: correlation scatter, monthly comparison) + Sharing (2: challenge invite, chronotype comparison) |
| **V2** | **5** | Month 4-6 | Weekly science insights, Weekly challenge, Shift Your Clock program, Day Mode + Year in Review (Spotify Wrapped style) |
| **LATER** | **0** | Post month 6 | Nothing explicitly deferred to LATER — everything has a home in a phase |
| **CUT** | **0** | N/A | No features cut. 12 features deduplicated (listed in multiple categories in original doc). All 126 features accounted for. |

### Deduplication Notes

The original 107 count included 12 features listed in multiple categories:
- Night escalation (#61) = Escalating Dare Engine (#15)
- Pre-bedtime notification (#75) = Pre-bedtime warning (#13)
- Streak freeze in Paywall (#85) = Streak freeze in Streak System (#52)
- Morning micro-learning in Science (#72) = Morning micro-learning in Morning Mode (#38)
- ADHD Mode features #92-99 = features already listed in their respective sections (#30, #35, #45, #19, #20)

Analytics (#108-114) and Viral Sharing (#115-126) add 19 net new unique features.

**Actual unique feature count across all phases: 108** (126 minus 12 duplicates minus 6 that are copy/approach decisions rather than features)

---

## Summary for the Builder

**What ships Day 1 (70 unique features):** A complete product. Night Mode with live scoring, an uncheateable alarm with photo/shake missions, a morning routine system with expiring tasks, a Life Score with breakdown and score trend line, streaks with loss aversion, a Dare Engine with 3 tones and 50+ variable lines, ADHD mode, a home screen widget, a shareable score card, a hard paywall with 7-day trial, streak freeze IAP, AND a full viral sharing system — Chronotype Identity Cards, Streak Milestone Cards, "I Survived" Challenge Cards, Morning Completion Cards, Dare Engine Quote Cards, platform-specific auto-formatting, and two-tap share flow. 10 user types covered. Chronotype-first from onboarding. Viral-ready from Day 1.

**What ships Week 2-4 (18 features):** The web chronotype quiz (acquisition engine), math mission, adaptive difficulty, science layer, PLUS analytics expansion (bedtime vs score overlay, weekly heatmap, consistency meters) and shareable cards (weekly summary, night→morning proof, social jet lag calculator result). These add polish, a major growth channel, and data-driven retention.

**What ships Month 2-3 (15 features):** Friend system and social competition, PLUS deeper analytics (night→morning correlation scatter, monthly comparison) and social cards (challenge invite, chronotype comparison). By now there are users to connect. This unlocks the Competitor segment fully.

**What ships Month 4-6 (5 features):** Deep science insights, chronotype shifting program, day mode, PLUS Year in Review (Spotify Wrapped style) as the annual renewal driver.

**Nothing was cut.** Every feature from the 126 list has a home. The sequencing is designed so that:
1. Launch has enough to convert all 10 user types
2. Each post-launch phase has a clear acquisition or retention purpose
3. Technical dependencies flow downhill (no feature blocked by an unbuilt prerequisite)
4. The solo dev timeline (4-6 months to launch) is respected
5. Viral sharing is baked into launch — not bolted on later

**The bet:** Night Mode + ADHD Mode + Viral Sharing System at launch. Night Mode and ADHD Mode are the two features no competitor has that serve the two most viral segments (Night Strugglers on TikTok, ADHD Discoverers on TikTok + Reddit). The Viral Sharing System (7 launch features) ensures every shareable moment — chronotype identity, streak milestones, morning completions, Dare Engine quotes — is platform-optimized and two taps from Instagram/WhatsApp/Twitter. If the product thesis is right — that connecting night to morning and acknowledging ADHD changes everything — the organic content will write itself, and the sharing system ensures it carries a download link.
