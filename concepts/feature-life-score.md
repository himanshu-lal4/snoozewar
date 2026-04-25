# Feature: Life Score — Your Daily Discipline Number

*Status: DESIGNED — Needs founder review*
*Research base: market/life-score-design-research.md*

---

## What It Is

A single number (0-100) that tells you how well you're doing with your sleep/wake/morning discipline. Updated once daily after your morning routine window closes. Visible on your home screen widget at all times.

Think: **credit score for your mornings.**

---

## Why It Matters

- People obsess over single numbers (credit score, step count, Oura readiness)
- A score creates **objective truth** — no excuses, no rationalizing
- Loss aversion drives maintenance: once you have a 78, dropping to 65 hurts more than climbing from 65 to 78 felt good
- The widget on the home screen is the daily engagement mechanism — users unlock their phone 80-150x/day, each glance is a micro-interaction
- **No other score accounts for chronotype alignment** — this is our unique dimension

---

## The Formula

```
LIFE SCORE = (Wake Consistency × 0.30)
           + (Morning Routine × 0.25)
           + (Streak Factor × 0.20)
           + (Chronotype Alignment × 0.15)
           + (Protocol Compliance × 0.10)

Range: 0-100 (minimum displayed: 5)
```

### Why These Weights

| Component | Weight | Rationale |
|-----------|--------|-----------|
| **Wake Consistency** | 30% | The simplest, most important behavior. Like FICO's "payment history" (35%). Did you wake when you said you would? Yes/no. |
| **Morning Routine** | 25% | Did you do your morning actions? This is the value delivery — the reason the app exists. |
| **Streak Factor** | 20% | Consecutive days compound. Rewards consistency over perfection. Loss aversion is strongest here. |
| **Chronotype Alignment** | 15% | How well does your actual schedule match your biology? This is our unique differentiator. Measured via social jet lag. |
| **Protocol Compliance** | 10% | During Shift Your Clock: did you follow today's zeitgeber protocol? NOT in program: redistributed to Wake (35%) and Routine (30%). |

**Weights are published and visible to the user.** Transparency = trust. The user always knows exactly why their score is what it is.

---

## Component Calculations

### 1. Wake Consistency (30% of total = 0-30 points)

**Core metric:** Did you wake within ±15 min of your target time?

| Scenario | Points (out of 30) |
|----------|-------------------|
| Woke within ±5 min of target | 30 (perfect) |
| Woke within ±15 min | 25 |
| Woke within ±30 min | 18 |
| Woke within ±45 min | 10 |
| Woke >45 min off target | 5 |
| Didn't dismiss alarm / no data | 2 |

**Modifiers:**
- Weekend consistency bonus: +3 if weekend wake time within ±30 min of weekday target
- Snooze penalty: -2 per snooze (max -6)
- Uses 7-day exponential decay average (today = 40% weight, yesterday = 24%, etc.)

**Dare Engine:**
- Perfect: *"6:31 AM. Target was 6:30. That's not luck, that's discipline."*
- Missed: *"Target: 6:30. Actual: 7:14. That's 44 minutes your biology didn't plan for."*
- Weekend slip: *"Saturday. You slept in 1.5 hours. Your clock just flew to a different timezone."*

### 2. Morning Routine Completion (25% = 0-25 points)

**Core metric:** What percentage of your morning routine actions did you complete?

Morning actions (user configures these, minimum 3 required for max score):
- Alarm mission completed ✅
- Light mission (15 min outdoors) ✅
- Morning walk (10 min) ✅
- Breakfast logged ✅
- Morning journal entry ✅
- Morning digest viewed ✅

| Completion | Points (out of 25) |
|-----------|-------------------|
| 100% of actions | 25 |
| 80-99% | 20 |
| 60-79% | 15 |
| 40-59% | 10 |
| 20-39% | 5 |
| <20% | 2 |

**Modifiers:**
- Timeliness bonus: +3 if all actions completed within the morning window (user-set, e.g., by 8 AM)
- Uses 7-day exponential decay average

**Anti-gaming:** Minimum 3 distinct actions for max score. Can't just dismiss the alarm and claim 100%.

### 3. Streak Factor (20% = 0-20 points)

**Core metric:** How many consecutive days have you hit your targets?

The streak doesn't require perfection — it requires showing up. A "streak day" = woke within ±30 min AND completed ≥60% of routine.

| Streak Length | Points (out of 20) |
|--------------|-------------------|
| 0 days (broken) | 0 |
| 1-3 days | 5 |
| 4-7 days | 10 |
| 8-14 days | 14 |
| 15-30 days | 17 |
| 31-66 days | 19 |
| 67+ days (habit formed per Lally) | 20 |

**Curve is logarithmic** — early days reward more to encourage building. Going from 0→7 gives you 10 points. Going from 31→67 gives you only 1 more point. This prevents the score being dominated by legacy streaks.

**Streak break mechanics:**
- Break → score drops to 30% of previous streak value (not zero — prevents despair)
- Rebuilds at normal rate
- Streak freeze (IAP, ₹49/$0.99): preserves streak but doesn't grow it. Limited to 2/month.
- *"Your 23-day streak is worth 17 points. Break it and that drops to 5. $0.99 to freeze. Or lose 12 points. Your math."*

### 4. Chronotype Alignment (15% = 0-15 points)

**Core metric:** How much social jet lag do you have?

This is what makes our score unique. No other app measures this.

| Social Jet Lag | Points (out of 15) |
|---------------|-------------------|
| <15 min | 15 (perfectly aligned) |
| 15-30 min | 13 |
| 30-60 min | 10 |
| 1-1.5 hours | 7 |
| 1.5-2 hours | 4 |
| >2 hours | 1 |

**How it's measured:**
- Compares midsleep on work days vs free days (MCTQ formula)
- Uses 14-day rolling average (needs both weekday and weekend data)
- First 14 days: estimated from onboarding quiz, then refined with passive data

**This component improves when:**
- User completes Shift Your Clock program (shifts schedule closer to biology)
- User maintains consistent wake times on weekends
- User's actual sleep timing converges with their chronotype

**Dare Engine:**
- High alignment: *"Social jet lag: 18 minutes. Your alarm and your biology are basically friends now."*
- Low alignment: *"Social jet lag: 1 hour 47 minutes. Every Monday you fly from London to Moscow. Without leaving bed."*
- Improving: *"Your social jet lag dropped from 2 hours to 52 minutes this month. Your pancreas thanks you."*

### 5. Protocol Compliance (10% = 0-10 points)

**Only active during Shift Your Clock program.** When not in program, these 10 points are redistributed:
- Wake Consistency becomes 35%
- Morning Routine becomes 30%

**During program:**

| Compliance | Points (out of 10) |
|-----------|-------------------|
| All 5 zeitgebers completed | 10 |
| 4 of 5 | 8 |
| 3 of 5 | 6 |
| 2 of 5 | 3 |
| 1 or 0 | 1 |

Zeitgebers tracked:
1. Morning light (15 min outdoors — timer or GPS verified)
2. Morning walk (10 min — GPS verified)
3. Breakfast within 1h (self-reported timestamp)
4. Wind-down started 2h before bed (screen dimming detected or self-reported)
5. Bedtime within ±15 min of target (passive detection)

---

## Score Behavior

### Starting Score
**50** on Day 1. Not discouraging (0) or unrealistic (100). Gives room to grow and room to fall.

*"Your Life Score starts at 50. That's neutral. Not good, not bad. What you do tomorrow decides where it goes."*

### Update Timing
**Once daily**, locked in when the morning routine window closes (user-configurable, default 10 AM).

Why not real-time?
- Prevents obsessive checking / anxiety
- Creates a morning ritual: wake up → do routine → see today's score
- Mirrors Oura (check score on wake → plan day)
- The score reflects yesterday's bedtime + today's wake + today's routine as one unit

### Score Volatility
**Max single-day drop: 12-15 points.** Even a terrible day (missed alarm, broke streak, skipped routine) shouldn't crater the score from 80 to 40. The 7-day exponential decay average prevents cliff drops.

**Max single-day gain: ~8-10 points.** Good days feel good but don't let a single perfect day inflate the score unrealistically.

This creates a **slow, earned** feel — like a credit score. You can't game it overnight. Real behavior over time is what moves it.

### Score Recovery After a Bad Day
Always show **what happened** and **how to recover:**

*"Life Score: 58 (↓7 from yesterday)"*
*"What happened: Woke 38 min late (-12 wake points), missed morning walk (-5 routine points)"*
*"Recovery: Hit your alarm tomorrow and do the walk. You'll be back to 63 by Wednesday."*

Never show a drop without an action plan. Drops without guidance = user churn.

---

## The Widget

The widget is more important than the app itself. It's the **ambient engagement surface** — the thing that keeps users aware of their score without opening the app.

### Widget Design

```
┌─────────────────────┐
│                      │
│    Life Score        │
│                      │
│       73             │
│      ████████░░      │
│                      │
│  🔥 Day 14 streak   │
│                      │
│  ⏰ Tomorrow: 6:30   │
│                      │
└─────────────────────┘
```

**Three data points:**
1. **The number** (large, dominant) — today's Life Score
2. **The streak** (small, below) — current consecutive days
3. **Tomorrow's alarm** (small, bottom) — what time is set

**Color:**
- Background shifts based on score band (gold/green/yellow/orange/red)
- Subtle, not garish — it lives on the home screen all day

**Update timing:**
- Score updates once daily (after morning window)
- Streak updates in real-time (ticks up at routine completion)
- Alarm time always visible

**Why this works:**
- 80-150 phone unlocks/day = 80-150 micro-interactions with your score
- The score becomes part of your identity: "I'm a 73 today"
- Social jet lag is invisible — the widget makes it visible
- The streak on the widget creates passive loss aversion all day

---

## Score-to-Behavior Feedback

### How the Score Influences the App

| Score Range | App Behavior |
|-------------|-------------|
| 90-100 | Harder missions offered (optional), exclusive Dare Engine praise, "Elite" badge |
| 75-89 | Standard experience, competitive nudges ("You were 87 last week. What happened?") |
| 60-74 | Encouragement mode, "Small wins" emphasis, simplified routine suggestions |
| 40-59 | Reduced routine (focus on 2-3 core actions), gentler Dare Engine, recovery plan |
| 20-39 | "Reset mode" — app suggests minimum viable morning (just alarm + 1 action) |
| 5-19 | Re-onboarding prompt, check-in: "What's going on? Want to adjust your targets?" |

### Milestones & Celebrations

| Milestone | Celebration |
|-----------|------------|
| First 60+ | *"Not bad. Your clock is starting to listen."* |
| First 75+ | *"75. That's real discipline. Most people never get here."* |
| First 90+ | *"90. Elite. You're in the top 5% of all users today."* |
| 7-day streak | *"One week. The science says this is where it starts to stick."* |
| 30-day streak | *"30 days. Your brain is rewiring. This is becoming automatic."* |
| 66-day streak | *"66 days. Phillippa Lally's magic number. This IS who you are now."* |
| Social jet lag <30 min | *"Your body clock and your alarm clock finally agree. That's rare."* |
| Score maintained >70 for 30 days | *"30 days above 70. Consistent. Boring. Effective. We approve."* |

### Score Sharing

- **Shareable score card** (Instagram story format): score number + streak + chronotype + best stat
- Score is personal — **never shown on leaderboards** (leaderboards use streak or routine completion instead)
- Sharing is opt-in, never prompted aggressively

---

## Dare Engine Copy by Score Band

### Elite (90-100)
- *"95. We almost don't want to dare you anymore. Almost."*
- *"3 days at 90+. That's not motivation. That's identity."*

### Strong (75-89)
- *"82. Strong. But your weekend dragged you down 4 points. You know it."*
- *"You hit 87 on Thursday. Today you're 79. What changed?"*

### Solid (60-74)
- *"68. Honest work. Tuesday's late wake cost you 7 points. Fix that and you're at 75."*
- *"Your chronotype alignment is only 7/15. That's where the easy points are hiding."*

### Building (40-59)
- *"52. We're not going to roast you. We're going to simplify. Just hit the alarm and do the walk tomorrow."*
- *"Your score's been between 45-55 for two weeks. That's a plateau, not a failure. Let's break through it."*

### Struggling (20-39)
- *"34. Real talk. Your targets might be too aggressive. Want to adjust?"*
- *"Let's strip it down. One goal for tomorrow: wake within 15 minutes of your alarm. That's it."*

### Reset (5-19)
- *"12. Day 1 energy. No history. No baggage. Just tomorrow's alarm."*
- *"Everyone starts somewhere. Or re-starts. Same thing."*

---

## Anti-Gaming Measures

| Gaming Attempt | Prevention |
|---------------|-----------|
| Set alarm at current natural wake time (no challenge) | Chronotype alignment detects this — if target = natural wake, alignment score is already high, but no shift is happening. The score is honest but won't penalize. |
| Complete routine tasks in 30 seconds (fake compliance) | Minimum time requirements: light mission needs 15 min timer, walk needs GPS distance |
| Use streak freezes every other day | Limited to 2 per month |
| Only do minimum for streak (low quality) | Streak requires ≥60% routine completion + wake within ±30 min — can't just dismiss alarm |
| Set easy routine (1 action) | Minimum 3 distinct actions for max routine score |

---

## Relationship to Other Features

| Feature | How Life Score Connects |
|---------|----------------------|
| **Alarm** | Wake consistency component. Dismiss time = data point. |
| **Shift Your Clock** | Protocol compliance component (10%). Score improves as social jet lag drops. |
| **Night Mode** | Bedtime adherence feeds into protocol compliance and chronotype alignment. |
| **Morning Routine** | Morning routine component (25%). Completion and timeliness tracked. |
| **Streak** | Streak factor (20%). Streak length maps to score via logarithmic curve. |
| **Widget** | The primary display surface for the score. |
| **Paywall** | Score preview in free tier (shows number but not breakdown). Full breakdown = premium. |
| **Dare Engine** | Personality delivery is score-band-aware. Tone adapts to where you are. |

---

## What Makes This Different

1. **Published weights** — you always know why your score is what it is
2. **Chronotype-aware** — social jet lag as a measurable, improvable component (unique to us)
3. **Behavioral, not biological** — Oura/WHOOP measure what happened TO you. We measure what you DID.
4. **Dare Engine delivery** — the score isn't clinical data. It comes with personality.
5. **The widget IS the product** — ambient awareness > in-app time
6. **Science-backed thresholds** — 66-day streak milestone from Lally's research, social jet lag bands from Roenneberg's data
