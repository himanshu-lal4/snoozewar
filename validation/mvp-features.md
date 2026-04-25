# MVP Feature Prioritization

A ruthlessly prioritized feature list for the Dare Engine alarm and morning routine app, organized by shipping phase. Every feature is tied to a specific retention, conversion, or engagement rationale.

---

## MUST-HAVE — Ship Week 1

These features define the minimum viable product. Without any one of them, the app either does not function or lacks the core differentiator.

### 1. Reliable Alarm with Physical Missions

- **What:** Alarm that requires completing a physical mission to dismiss — photo match, barcode scan, or phone shake.
- **Why:** Table stakes for the category. Physical missions are the **primary subscription driver** in alarm apps (see Alarmy's $500K/month). Users who merely tap "dismiss" go back to sleep; users who complete a mission stay awake.
- **Missions at launch:** Photo match (take a photo of a specific location), barcode scan (scan a product in your kitchen/bathroom), shake (shake phone N times).

### 2. Dare Engine Personality

- **What:** A challenging, cocky, slightly unhinged tone of voice applied to every user-facing string — alarm labels, notifications, mission prompts, success/failure screens, onboarding copy.
- **Why:** Personality raised Duolingo retention from 12% to 55%. This is **the** differentiator. The Dare Engine does not congratulate — it challenges. It does not remind — it dares.
- **Tone guide:** Think "competitive best friend who genuinely wants you to win but will absolutely roast you if you slack off."

### 3. Streak System with Home Screen Widget

- **What:** Consecutive-day streak counter displayed prominently in-app and via an iOS home screen widget.
- **Why:** Streaks drive **15-30% D30 retention lift** across the industry. Home screen widgets drive **4.2x engagement** compared to app-only streaks because the streak is visible without opening the app — creating passive guilt/motivation throughout the day.
- **Widget displays:** Current streak count, today's status (complete/pending), and a Dare Engine quip.

### 4. Quick Onboarding

- **What:** Function-oriented onboarding — get to the first alarm setup in under 60 seconds. Ask only what is needed: wake time, mission preference, notification permission.
- **Why:** **74% of users abandon** apps with high-friction onboarding. The Dare Engine personality should shine during onboarding (the first dare starts here), but the flow must be fast. No account creation required before first alarm is set.

### 5. Night Mode

- **What:** Activated in the evening. Features a bedtime countdown, a "procrastinate sleeping" dare (the Engine dares you to put the phone down), and alarm confirmation for the morning.
- **Why:** Engagement bookends matter. Night mode creates a second daily touchpoint, reinforces the streak, and addresses the root cause of bad mornings — late nights. The "procrastinate sleeping" dare is a viral-friendly mechanic (screenshots/shares).

### 6. Morning Mode

- **What:** Activated at alarm time. Includes the alarm itself, the physical mission to dismiss it, and an expiring morning digest (a dare, a motivational nudge, and the day's challenge — all disappear after a set window, e.g., 30 minutes).
- **Why:** The expiring digest leverages FOMO/urgency (BeReal-style). Users who know content disappears engage within minutes. This is the core loop: wake up, complete mission, consume digest before it expires.

### 7. Basic Score

- **What:** A simple composite score based on sleep consistency (bedtime adherence) and morning consistency (alarm response time, mission completion).
- **Why:** Gives users a single number to optimize. Gamification without a score is just decoration. The score feeds into streaks and future leaderboard mechanics.

---

## HIGH PRIORITY — V1.1 (Week 2-3)

Ship these within two weeks of launch. They deepen engagement and open monetization pathways.

### 1. Morning Journal (Quick, 1 Question)

- **What:** A single journal prompt each morning, appearing after the mission is completed. One question, one text field, done in 30 seconds.
- **Why:** AM journaling has **naturally stronger engagement than PM journaling** — users are in "fresh start" mode. Keeping it to one question eliminates friction. Journal entries become valuable personal data that increases switching costs over time.
- **Example prompts:** "What's the one thing that would make today a win?" / "What are you avoiding? Do it first."

### 2. Goal Setting (1 Goal for Tomorrow)

- **What:** During night mode, users set one goal for the next day. The Dare Engine frames it as a dare. The goal appears in the morning digest.
- **Why:** Bridges the night-to-morning loop. Creates anticipation and accountability. A single goal is achievable; multiple goals create decision paralysis.

### 3. Personalized Notifications

- **What:** Notifications that reference the user's streak, score, goals, and past behavior — not generic "Time to wake up!" messages.
- **Why:** Personalized push notifications see a **91.9% CTR lift** over generic notifications. The Dare Engine personality makes notifications feel like messages from a character, not a system.
- **Examples:** "Day 14. You've never made it past 15. Tomorrow is the dare." / "You set your alarm for 6am but went to bed at 1am. Bold strategy."

### 4. Streak Freeze (In-App Purchase)

- **What:** A consumable IAP that preserves the user's streak for one missed day. Sold individually or in packs.
- **Why:** Proven Duolingo monetization funnel. Streak freezes convert free users to paying users at the **lowest psychological barrier** — users are not buying features, they are protecting progress. This is the gateway IAP that leads to subscription conversion.

---

## LATER — V2+

Features with strong signal but high complexity or dependency on established user base.

### 1. AI Reminders Tied to Goals
- Smart reminders throughout the day connected to the goal set the night before.
- Requires goal-setting adoption data before building.

### 2. Day Mode with Focus Blocks
- Extend the app beyond morning into daytime productivity with timed focus sessions.
- Risk: scope creep. Only build if morning retention is strong and users request it.

### 3. Adaptive Difficulty
- The Dare Engine adjusts mission difficulty and tone based on user behavior (streak length, wake consistency, score trends).
- Requires sufficient behavioral data to tune the algorithm.

### 4. In-App Community
- Social features: leaderboards, dare challenges between friends, public streaks.
- Communities drive **2.7x retention** but are extremely complex to build and moderate. Defer until there is a critical mass of active users.

### 5. Weekly Insights and Pattern Learning
- End-of-week report showing sleep/wake patterns, score trends, and personalized recommendations.
- Valuable for long-term retention but not critical for initial activation.

---

## Paywall Strategy

### Model: Hard Paywall with Free Trial

- **Structure:** Hard paywall — full app access during a **7-day free trial**, then subscription required.
- **Why hard paywall:** Health & Fitness category has the **highest trial-to-paid conversion rate at 35%**. A hard paywall with a generous trial outperforms freemium in this category because the value is immediately obvious (the alarm works or it does not).

### Pricing

| Plan | India (INR) | US (USD) |
|---|---|---|
| **Annual** | ₹1,999/year | $49.99/year |
| **Monthly** | ₹249/month | $5.99/month |

- Annual plan is the default/highlighted option during the trial.
- Monthly exists as an anchor to make annual look like a deal.

### Paywall Tactics

- **Video paywall:** Use a short video on the paywall screen showing the Dare Engine in action. Video paywalls are the **highest-leverage conversion tactic** in mobile subscription apps.
- **Plan structure testing:** A/B test 2-plan vs. 3-plan layouts. Adding a third "decoy" plan has shown up to **63% conversion uplift** in structure tests.
- **Trial reminder:** Send a push notification on day 5 of 7 — "Your trial ends in 2 days. Your streak doesn't have to."
- **Streak-based paywall copy:** After the trial, the paywall references the user's streak: "You've built a 7-day streak. Quitting now would be exactly what old-you would do."
