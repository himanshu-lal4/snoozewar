# Life Score Design Research — Comprehensive Analysis

*Status: RESEARCH COMPLETE — Needs founder review and decisions*
*Date: 2026-04-08*

---

## Table of Contents
1. [How Successful Apps Design Composite Scores](#1-how-successful-apps-design-composite-scores)
2. [The Psychology of Scoring](#2-the-psychology-of-scoring)
3. [Weighting Systems for Composite Scores](#3-weighting-systems-for-composite-scores)
4. [Score-to-Behavior Feedback Loops](#4-score-to-behavior-feedback-loops)
5. [The Widget Angle](#5-the-widget-angle)
6. [Anti-Patterns — What NOT To Do](#6-anti-patterns--what-not-to-do)
7. [Life Score Design Recommendations](#7-life-score-design-recommendations)

---

## 1. How Successful Apps Design Composite Scores

### FICO Credit Score (300-850)

**The gold standard of composite scoring.** 200M+ Americans have one. People obsess over it because it has real consequences (mortgage rates, loan approval).

**Five factors with fixed, published weights:**
| Factor | Weight | What It Measures |
|--------|--------|-----------------|
| Payment History | 35% | On-time payments |
| Amounts Owed | 30% | Credit utilization ratio |
| Length of Credit History | 15% | Average age of accounts |
| Credit Mix | 10% | Variety of credit types |
| New Credit | 10% | Recent inquiries/accounts |

**Why it feels authoritative:**
- **Published weights** — transparency builds trust (people understand what moves it)
- **Narrow actionable range** — most people live between 650-750, making every 10-point move feel significant
- **Institutional backing** — banks use it, so it "means something"
- **Score bands with labels:** Poor (300-579), Fair (580-669), Good (670-739), Very Good (740-799), Exceptional (800-850)
- **Slow-moving** — can't game it overnight. Reflects real behavior over time.
- **The dominant factor (payment history, 35%) is the simplest** — did you pay on time? Yes/no. This makes the score feel fair.

**Lesson for Life Score:** Publish your weights. Make the biggest weight the simplest behavior. Create labeled bands. Make the score slow enough to feel earned but responsive enough to feel controllable.

---

### Oura Readiness Score (0-100)

**The most obsessed-over health score in consumer tech.** Users check it first thing every morning.

**Seven contributing factors (weights not publicly disclosed, but reverse-engineered by community):**
| Contributor | Category | Estimated Weight |
|-------------|----------|-----------------|
| Sleep Score | Sleep | ~25-30% (heaviest) |
| Sleep Balance | Sleep (2-week window) | ~15% |
| Previous Day Activity | Activity | ~10-15% |
| Activity Balance | Activity (2-week window) | ~10% |
| Resting Heart Rate | Body stress | ~10-15% |
| HRV Balance | Body stress | ~10-15% |
| Body Temperature | Body stress | ~5-10% |
| Recovery Index | Post-exercise HR | ~5% |

**Score interpretation:**
- 85+: Optimal (green) — "You're ready to take on challenges"
- 70-84: Good (yellow) — "Consider a lighter day"
- Below 70: Pay attention (red) — "Your body needs rest"

**Why users obsess over it:**
1. **Morning ritual integration** — score appears on wake, before any decisions. It becomes the first data point of the day.
2. **Personalized baselines** — "designed for you and only you." Not compared to population norms. Your 78 is YOUR 78.
3. **Actionable interpretation** — the score comes with a recommendation (push hard today vs. take it easy).
4. **Biological validation** — it reflects actual physiology (HRV, temp, HR), not self-report. Users trust it because it "knows" things they can't feel.
5. **Slow but responsive** — the 2-week balance windows mean it rewards consistency, not one good night.
6. **The number is small enough to matter** — a 5-point change on 0-100 feels meaningful. On 0-1000, you'd need 50 points to get the same reaction.

**Lesson for Life Score:** Make the score the first thing users see in the morning. Use personalized baselines. Combine short-term signals (last night) with longer windows (2-week trends). Give actionable guidance alongside the number.

---

### WHOOP Recovery Score (0-100%)

**Uses machine learning, not fixed weights.** Trained on population-level data.

**Primary inputs:**
| Input | What It Measures |
|-------|-----------------|
| Heart Rate Variability (HRV) | Autonomic nervous system readiness |
| Resting Heart Rate | Cardiovascular recovery |
| Respiratory Rate | Respiratory health/stress |
| Sleep Performance | % of sleep need met |
| SpO2 (blood oxygen) | Respiratory function |
| Skin Temperature | Immune/hormonal signals |

**Color-coded interpretation:**
- Green (67-100%): "Your body is primed for peak performance"
- Yellow (34-66%): "Your body could use a moderate day"
- Red (0-33%): "Your body is in need of recovery"

**Why it works:**
1. **Three-color simplicity** — users don't need to understand the algorithm. Green = go, yellow = caution, red = rest.
2. **Percentage framing** — "67% recovered" is intuitively understood.
3. **Daily reset** — score recalculates every morning, creating daily anticipation.
4. **Machine learning personalization** — the algorithm adapts to YOUR baselines over weeks, becoming more accurate (and more trusted) over time.
5. **HRV as the hero metric** — WHOOP emphasizes HRV education, making users feel sophisticated about the science behind the number.

**Lesson for Life Score:** Use simple color coding alongside the number. Consider ML-based personalization for V2+. Daily reset creates daily engagement. The score should tell you what to DO, not just how you did.

---

### Apple Watch Activity Rings

**Not a score — a completion system.** But arguably more effective than any score.

**Three rings:**
| Ring | Color | Metric | Default Goal |
|------|-------|--------|-------------|
| Move | Red | Active calories burned | Personalized (e.g., 500 cal) |
| Exercise | Green | Minutes of brisk activity | 30 minutes |
| Stand | Blue | Hours with 1+ min of movement | 12 hours |

**Why closing rings works psychologically:**
1. **Completion bias (Zeigarnik Effect)** — open rings create psychological tension. The brain NEEDS to close them. An incomplete ring at 11 PM is genuinely uncomfortable for regular users.
2. **Visual progress** — the ring filling is satisfying in a way numbers aren't. It triggers the same dopamine response as progress bars.
3. **Three independent goals** — you can "win" on exercise even if you fail on standing. Partial success prevents total discouragement.
4. **Daily reset** — fresh start every day. Yesterday's failure doesn't haunt you.
5. **Streak celebrations** — closing all three rings for 7, 30, 100+ days triggers awards, sharing prompts, and milestone celebrations.
6. **Achievable daily** — the goals are designed to be reachable with moderate effort. It's hard NOT to close your stand ring if you're trying.
7. **Social sharing** — the ring graphic has become a cultural symbol. Sharing a closed-ring screenshot is a humble brag.

**Lesson for Life Score:** Consider a visual completion metaphor alongside the numeric score. Daily reset is critical. Make goals achievable most days to build the streak habit. Celebrate completion visually.

---

### Duolingo XP/Streak System

**The most studied gamification system in consumer tech.** $7.5B+ company built largely on streaks.

**Core mechanics:**
| Mechanic | Details |
|----------|---------|
| XP (Experience Points) | ~10-20 XP per lesson, varies by difficulty and mode |
| Daily Goal | User-set: Casual (10 XP), Regular (20), Serious (30), Insane (50) |
| Streak | Consecutive days meeting daily goal. THE core retention driver. |
| Streak Freeze | Purchasable with gems (~200 gems). Protects streak for 1 missed day. Max 2 equipped. |
| Leagues | 10 tiers (Bronze → Diamond). Weekly XP leaderboard with 30 users. Top ~10 promote, bottom ~5 demote. |
| Hearts | 5 hearts, lose 1 per mistake. Recharge with practice or time. Creates scarcity. |
| Gems | In-app currency earned through lessons, spent on freezes, outfits, etc. |

**Key engagement data:**
- Streak is responsible for the largest single lift in DAU in Duolingo's history
- Duolingo's streak counter increased DAU by 14% (A/B tested)
- League leaderboards increased overall learning time by 17% and the number of highly engaged learners by 116% (Duolingo published data)
- Users with 7-day streaks have ~3.6x higher retention than users without
- Personality/character (Duo owl) raised Day 14 retention from 12% to 55% (Duolingo internal data)

**Why it works:**
1. **Loss aversion on steroids** — losing a 200-day streak is psychologically devastating. Users will do a lesson at 11:58 PM to protect it. The streak has become MORE valuable the longer it exists (endowment effect).
2. **Social pressure** — leagues create weekly competition with strangers. Demotion is public humiliation.
3. **Variable rewards** — XP bonuses, combo bonuses, league position changes create unpredictable dopamine hits.
4. **Low daily floor** — "Casual" is just 10 XP (~1 minute). The minimum viable effort is tiny. This is critical — it prevents streak-breaking on bad days.
5. **Streak freeze as monetization** — users will PAY to protect the streak. The streak freeze converts loss aversion into revenue.

**Lesson for Life Score:** The streak is the single most powerful retention mechanic. Make the minimum daily engagement tiny (set alarm + dismiss = streak continues). Sell streak freezes. Create weekly social competition.

---

### OneScore (India, 35M+ Users)

**Credit score app that turned a boring number into daily engagement.**

**What drives daily checking:**
| Feature | Engagement Mechanism |
|---------|---------------------|
| Score Planner | "Do X, Y, Z to reach target score" — actionable steps |
| Factor Breakdown | 5 factors shown individually (mirrors FICO) — payment history, utilization, portfolio mix, account age, inquiries |
| Free + No Ads | Removes the "what's the catch" barrier |
| Score Trend | Historical graph shows trajectory |
| Personalized Insights | "Your utilization dropped 3% this month" — specific, personal |
| Credit Card Offers | Monetization through referrals (users feel they're getting value, not being sold to) |

**Why 35M users check their score regularly:**
1. **Real-world consequences** — the score affects loan eligibility. But the app makes you FEEL those consequences daily.
2. **Gamified improvement** — the Score Planner turns credit improvement into a quest with clear steps.
3. **"Did anything change?"** — monthly score updates create a natural checking cadence. Users want to see if their actions moved the needle.
4. **Social proof** — "Join 35M Indians" creates network effect trust.

**Lesson for Life Score:** Show the trend (are you improving?). Give specific, actionable "do this to improve" recommendations. Make users feel the score has real consequences for their life.

---

### Other Notable Scoring Systems

**Garmin Body Battery (0-100):**
- Updates throughout the day (charges during rest, depletes during activity)
- Simple energy metaphor everyone understands
- Real-time feedback creates constant engagement with the number

**Fitbit Daily Readiness Score (0-100):**
- Considers activity, sleep, and HRV
- Three categories: Low (1-29), Moderate (30-64), High (65-100)
- Gives workout intensity recommendations

**Samsung Energy Score (0-100):**
- Sleep, activity, sleeping HR, sleeping HR variability
- Simple morning score with emoji-like interpretation

**Sleep Cycle Sleep Quality Score (0-100%):**
- Time in bed, sleep quality, movement, wake-ups
- Single number that captures "how well did I sleep"

**Habitica (Gamified Habit Tracker):**
- HP (Health Points) — lose HP when you miss habits. Reach 0 = lose a level and gold.
- XP — gain for completing tasks. Level up for milestones.
- Streaks on individual habits — bonus gold/XP for consistency.
- The DAMAGE mechanic (losing HP for missed tasks) is the most powerful retention driver. Loss > gain.

**Lesson from all:** 0-100 is the universal range for health/wellness scores. Color coding (green/yellow/red) is universal. Morning delivery is standard. Actionable recommendations alongside the score are expected.

---

## 2. The Psychology of Scoring

### Why People Obsess Over Single-Number Scores

1. **Cognitive Load Reduction** — A single number compresses complex, multi-dimensional reality into one digestible signal. The brain craves simplicity. A score of 73 is infinitely easier to process than "you slept 7.2 hours, woke 12 minutes late, completed 3/5 routines, and your chronotype alignment is moderate."

2. **Identity Anchoring** — People incorporate scores into self-identity. "I'm a 780 credit score person." "I'm consistently green on Oura." The score becomes a shorthand for "who I am" in that domain. This is why score drops feel like personal attacks.

3. **Social Currency** — A single number is shareable. "I got 92 today" is a conversation. "My sleep efficiency was 94% and my HRV was 62ms" is not. Scores create social currency.

4. **Progress Quantification** — Without a score, improvement is subjective. "I think I'm sleeping better?" With a score: "I went from 61 to 74 in three weeks." The number makes progress real.

5. **Competitive Framing** — Even without explicit competition, users compete with themselves. Yesterday's 71 vs. today's 74 creates an internal game.

---

### Optimal Score Range: Why 0-100?

| Range | Pros | Cons | Used By |
|-------|------|------|---------|
| **0-100** | Intuitive (percentage-like), every point matters, easy color coding | Limited granularity | Oura, WHOOP, Garmin, Fitbit, Samsung |
| 0-10 | Ultra simple | Too coarse — a 1-point change is 10% | Net Promoter Score |
| 0-1000 | Fine granularity | A 10-point change feels meaningless. Harder to anchor identity. | Some game systems |
| 300-850 | Feels "official" and unique | Arbitrary, requires learning what's good | FICO |
| 0-5 stars | Visual, universally understood | Too coarse for daily tracking | App ratings |

**Recommendation: 0-100 is correct for Life Score.**
- Percentage-like framing is universal ("I'm at 74%")
- A 3-5 point daily swing feels meaningful without being chaotic
- Maps cleanly to green/yellow/red zones
- Every competitor in health/wellness uses 0-100, so users already know how to interpret it
- The FICO 300-850 range only works because of institutional authority. A startup doesn't have that luxury.

---

### How Often Should a Score Update?

| Frequency | Example | Best For |
|-----------|---------|----------|
| Real-time | Garmin Body Battery | Energy/physical state |
| **Once daily (morning)** | **Oura, WHOOP, Fitbit** | **Sleep/recovery/readiness** |
| Weekly | Credit scores | Financial health |
| Monthly | OneScore updates | Slow-moving behaviors |

**For Life Score: Once daily, calculated in the morning.**
- Aligns with the product (morning routine app)
- Creates a daily ritual (check score on wake)
- Prevents obsessive checking that leads to anxiety
- Gives users a full 24-hour cycle to influence tomorrow's score
- The score should be "locked in" by a cutoff time (e.g., 2 hours after alarm) — after that, today's score is final. This creates urgency to complete the morning routine.

---

### Should the Score Be Easy or Hard to Max Out?

**Hard to max out. Easy to get "good."**

The distribution should be roughly:
| Zone | Range | % of Users | Label | Color |
|------|-------|------------|-------|-------|
| Peak | 90-100 | ~3-5% of days | "Elite" | Deep green / gold |
| Great | 75-89 | ~20-25% of days | "Strong" | Green |
| Good | 60-74 | ~35-40% of days | "Solid" | Light green |
| Needs Work | 40-59 | ~20-25% of days | "Building" | Yellow |
| Low | 0-39 | ~10-15% of days | "Reset" | Red |

**Why this distribution:**
- **90-100 should be rare and celebrated.** If users hit 95+ regularly, the score becomes meaningless. FICO's 850 is nearly impossible — that's by design.
- **60-74 should be the "normal good."** Most users on most days should live here. This creates aspiration to reach 80+ without making the average feel like failure.
- **Below 40 should be hard to reach** if you're trying at all. This prevents discouragement.
- **The aspirational gap is 75-89.** Users in the 60-74 range see 80+ as achievable with effort. This is the "just above average" zone that drives behavior.

**Critical insight: The score should NEVER average to 50 for an active user.** If someone using the app daily averages 50, they feel like they're failing. Target mean for active users: ~65-70.

---

### Loss Aversion in Scoring

**Kahneman & Tversky's prospect theory (1979):** Losses are felt approximately **2-2.5x more intensely than equivalent gains.** Losing $100 hurts more than finding $100 feels good.

**Applied to Life Score:**
- A 5-point score DROP should generate more emotional response than a 5-point GAIN.
- **Design the notification tone differently for drops vs. gains.** Drops should trigger concern; gains should feel earned.
- **Show "what you lost"** explicitly: "Your score dropped 7 points because you snoozed 3 times."
- **Never drop the score without explanation.** Unexplained drops feel unjust and break trust.
- **Streak breaks should be the biggest emotional event in the app.** Duolingo uses a crying owl. The Dare Engine should use something equivalently gut-punching but on-brand (cocky disappointment, not sadness).

**The Endowment Effect:**
Once a user has maintained a 78+ score for 2 weeks, they psychologically "own" that score. Dropping to 65 feels like theft, not natural variance. This is a feature, not a bug — it drives behavior to maintain the score. But it needs to be handled carefully:
- **Don't drop the score by more than ~10-12 points in a single day** unless the user completely no-showed. Gradual decline feels fair; cliff drops feel punitive.
- **Provide "score recovery" guidance** when a drop happens: "Do X today to recover 3-4 points."

---

### The "Just Above Average" Trap

**Most successful scoring systems center users around 60-75% of maximum.**

Why:
- Below 50% = "I'm failing" → discouragement → churn
- 50-60% = "I'm mediocre" → mild discomfort → could go either way
- **60-75% = "I'm decent but I could be better"** → aspiration → engagement
- 75-90% = "I'm good, let me push for great" → high engagement
- 90-100% = "I've mastered this" → plateau → boredom → churn

**The most dangerous score is 95+.** Once users regularly hit near-max, they lose motivation. The ceiling must remain aspirational.

**Calibrate the algorithm so that a user doing "pretty good" (wakes on time most days, completes most routine items, maintains streak) scores 65-72.** Only users doing EVERYTHING right — perfect wake time, full routine, long streak, chronotype aligned, Shift Your Clock compliant — should approach 90+.

---

## 3. Weighting Systems for Composite Scores

### Proposed Life Score Components and Weights

| Component | Weight | Rationale |
|-----------|--------|-----------|
| **Wake Time Consistency** | 30% | The core behavior. Did you wake when you said you would? This is the "payment history" of Life Score — the most important factor and the simplest to understand. |
| **Morning Routine Completion** | 25% | Did you complete your assigned morning actions (missions)? This is the second core behavior. |
| **Streak Multiplier** | 20% | Consecutive days of discipline. Rewards consistency over time. Protects against "one good day" gaming. |
| **Chronotype Alignment** | 15% | Is your schedule matched to your biology? Measures social jet lag reduction. Unique differentiator. |
| **Shift Your Clock Compliance** | 10% | Only active during shifting program. If not in program, this weight redistributes to other components. |

**Total: 100%**

---

### Fixed Weights vs. Adaptive Weights

| Approach | Pros | Cons | Used By |
|----------|------|------|---------|
| **Fixed weights (published)** | Transparent, trustworthy, debuggable, users understand what moves the score | May not fit all users equally | FICO |
| Adaptive weights (ML) | Personalized, can weight what matters most for each user | Black box, feels arbitrary, hard to explain drops | WHOOP |
| **Hybrid (recommended)** | Fixed base weights + personalization layer | More complex to build | Oura (suspected) |

**Recommendation: Fixed weights for V1, hybrid for V2.**

V1: Use the published weights above. Users can see exactly how their score is calculated. This builds trust early.

V2+: Add a personalization layer that adjusts weights by ±5% based on what the user struggles with most. If someone always wakes on time but never completes their routine, the routine weight could increase slightly to push improvement where it's needed.

---

### How to Calculate Each Component

#### Wake Time Consistency (30% of total score)

```
wake_score = base_score - penalties

If woke within 5 minutes of target: 100 (perfect)
If woke 5-15 min late: 85
If woke 15-30 min late: 65
If woke 30-60 min late: 40
If woke 60+ min late: 15
If alarm dismissed but no wake verification: 10
If alarm not set or disabled: 0

Snooze penalty: -5 per snooze (max -20)
Weekend consistency bonus: +5 if weekend wake time within 30 min of weekday
```

**7-day rolling average** with exponential decay (yesterday = 40% weight, 2 days ago = 25%, 3 days = 15%, 4 days = 10%, 5-7 days = 10% combined). This rewards improvement and punishes regression quickly.

#### Morning Routine Completion (25% of total)

```
routine_score = (completed_actions / total_actions) * 100

Bonus: +10 if all actions completed within time window
Bonus: +5 if completed in order (if order matters)
Penalty: -15 if routine not started within 30 min of wake
Penalty: -30 if routine skipped entirely
```

Use same 7-day rolling average with exponential decay.

#### Streak Multiplier (20% of total)

```
streak_score = min(streak_days * multiplier, 100)

Days 1-7:   10 points per day (Week 1: max 70)
Days 8-14:  5 points per day  (Week 2: max 100)
Days 15-30: 2 points per day  (Maintenance)
Days 31-66: 1 point per day   (Long-term, caps at 100)
Day 67+:    Locked at 100     (66 days = habit formed per Lally research)

Streak freeze used: score maintained but no growth for that day
Streak broken: drops to max(previous_score * 0.3, 10)
```

**Why exponential then logarithmic:** The first week shows dramatic score growth (motivating). After 2 weeks the score plateaus, but the STREAK NUMBER keeps growing. This means losing a 45-day streak still hurts (you lose the number) even though the score component was already maxed.

#### Chronotype Alignment (15% of total)

```
alignment_score = 100 - (social_jet_lag_minutes / max_jet_lag * 100)

Where:
- social_jet_lag = |actual_midpoint_of_sleep - biological_midpoint_of_sleep|
- max_jet_lag = 180 minutes (3 hours — beyond this, score floors at 0)
- biological_midpoint = derived from chronotype assessment

Zones:
< 30 min social jet lag: 90-100 (aligned)
30-60 min: 70-89 (mild)
60-90 min: 50-69 (moderate)
90-120 min: 30-49 (significant)
120-180 min: 10-29 (severe)
180+ min: 0-9 (critical)
```

**This uses a 14-day rolling average** (chronotype alignment is a slow-moving metric). Single bad nights should minimally affect it.

#### Shift Your Clock Compliance (10% of total, or redistributed)

```
If user is IN the shifting program:
  compliance_score = weighted average of:
    - Hit target bedtime within 15 min: 40%
    - Hit target wake time within 15 min: 40%
    - Completed light exposure protocol: 10%
    - Completed wind-down protocol: 10%

If user is NOT in the shifting program:
  Redistribute 10% weight:
    - Wake Time Consistency: +4% (now 34%)
    - Morning Routine: +3% (now 28%)
    - Chronotype Alignment: +3% (now 18%)
```

---

### Handling Missing Data

| Scenario | Handling | Rationale |
|----------|----------|-----------|
| User didn't set alarm | Wake score = 0 for that day | No engagement = no score |
| Alarm set but no wake verification | Wake score = 10 | Benefit of the doubt, but minimal |
| Partial routine (3 of 5 items) | Pro-rate: 60% of routine score | Fair reflection |
| No routine items configured | Routine weight redistributed to wake + streak | Don't penalize for not setting up |
| Phone was off/dead | Use last known score for that day, flag as "estimated" | Don't punish hardware issues |
| User on vacation (tagged) | Freeze score for duration, don't break streak | Retention protection |
| First 7 days of app use | Score starts at 50 and adjusts based on behavior | Don't start at 0 (discouraging) or 100 (nowhere to go) |

**Critical: Never show "0" as a Life Score.** Minimum displayed score should be 5-10. A zero feels like the app is broken or the user is worthless.

---

### Time Decay

**Exponential decay for daily components (wake, routine):**
| Day | Weight |
|-----|--------|
| Today | 40% |
| Yesterday | 25% |
| 2 days ago | 15% |
| 3 days ago | 10% |
| 4-7 days ago | 10% combined |

**Why exponential, not linear:** One terrible day shouldn't destroy a week of good behavior. But today's behavior should matter MOST — otherwise users feel their actions don't move the score.

**Longer windows for slow-moving components:**
- Chronotype alignment: 14-day rolling average
- Streak: Cumulative (no decay — you either have it or you don't)

---

### Preventing Gaming

| Gaming Attempt | Prevention |
|----------------|------------|
| Setting alarm for 11 AM to always "wake on time" | Chronotype alignment score penalizes if wake time is far from biological optimal |
| Rushing through routine actions (tap tap tap done) | Minimum time requirements per action type. Photo missions require actual photos. |
| Setting only 1 easy routine item | Diminishing returns: 1 item completed = max 60% of routine score. 3+ items needed for 100%. |
| Dismissing alarm and going back to sleep | Wake verification required (mission completion, phone movement sensors) |
| Using streak freeze every other day | Max 2 freezes per month. Freeze doesn't grow the streak score. |
| Getting a friend to do the alarm mission | Geo-fencing (optional), unique daily challenges, photo recognition |

**Philosophy: Make it easier to actually do the behavior than to game the system.** If gaming requires more effort than compliance, the system works.

---

## 4. Score-to-Behavior Feedback Loops

### How the Score Should Influence App Behavior

| Score Zone | App Response |
|------------|-------------|
| 90-100 (Elite) | Dare Engine: "Alright, I'll admit it. You're good." Unlock elite missions. Show rare achievements. |
| 75-89 (Strong) | Dare Engine: "Not bad. But you've been coasting on that 83 for a week." Suggest harder challenges. |
| 60-74 (Solid) | Dare Engine: "Room for improvement. Your mornings are mid." Standard missions, encouraging nudges. |
| 40-59 (Building) | Dare Engine: "We need to talk." Simplified routine, focus on consistency over complexity. |
| Below 40 (Reset) | Dare Engine: "Starting from scratch? Bold move." Recovery mode: reduced routine, lower bar, quick wins. |

### Adaptive Difficulty Based on Score

- **Score trending up (5+ points over 7 days):** Introduce harder missions, add routine items, suggest earlier wake time.
- **Score stable (±3 points for 14+ days):** The user has plateaued. Introduce a new challenge or Shift Your Clock nudge.
- **Score trending down (5+ points over 7 days):** Reduce difficulty, simplify routine, send "comeback" messages. Do NOT add more tasks.

### Score-Based Unlocks and Rewards

| Milestone | Unlock |
|-----------|--------|
| First 70+ day | "Rising" badge + new alarm sound |
| 7-day streak at 70+ | Unlock "Dare Mode" (harder, more rewarding missions) |
| First 80+ day | "Strong" badge + widget theme unlock |
| 14-day streak at 75+ | Unlock score sharing card |
| First 90+ day | "Elite" badge + golden widget + Dare Engine compliments you (rare) |
| 30-day streak at 70+ | "Unbreakable" badge + streak freeze bonus |
| 66-day streak (habit formed) | "Rewired" badge + special celebration |
| 100-day streak | "Legend" badge + permanent profile flair |

### Score Sharing and Social Comparison

**What to share:**
- Today's Life Score as a card (designed for Instagram Stories / WhatsApp status)
- Weekly streak count
- "I hit 90 for the first time" milestone cards
- Monthly trend graph

**What NOT to share:**
- Other users' scores (no public leaderboard of scores — scores are personal)
- Exact component breakdowns (private)

**Social comparison should be streak-based, not score-based.** Scores are personal (my 73 is different from your 73 based on our chronotypes and routines). But streaks are universal — 45 consecutive days is 45 consecutive days.

### When Score Drops: Re-engagement Without Discouragement

| Drop Size | Response |
|-----------|----------|
| 1-5 points | No notification. Normal variance. Show in daily summary. |
| 5-10 points | Dare Engine: "Interesting choice yesterday. Today's a new day." |
| 10-15 points | Dare Engine: "That was rough. Here's what tanked it: [specific reason]. Here's how to fix it: [specific action]." |
| 15+ points | Dare Engine: "Okay, real talk. [Component] dropped hard. Want to simplify your routine for this week?" |
| Streak break | Full-screen moment: "Your [X]-day streak is gone. It hurts. But you built it once — you can do it again. Day 1 starts now." + Streak Freeze upsell if they don't have one. |

**Critical rule: ALWAYS tell the user WHY the score dropped.** "Your score dropped 8 points" without explanation breeds resentment. "Your score dropped 8 points because you woke 47 minutes late and skipped your routine" feels fair and actionable.

---

## 5. The Widget Angle

### Why Home Screen Widgets Drive Engagement

1. **Zero-friction visibility** — The user sees the score without opening the app. This is "ambient awareness" — the score is always in peripheral vision.
2. **Trigger mechanism (Hook Model)** — The widget IS the external trigger. Every time users unlock their phone (~80-150x/day), they see their score. Each glance is a micro-interaction.
3. **Social proof on their own screen** — A high score on the home screen reinforces positive identity. A low score creates discomfort that drives app opens.
4. **Reduced activation energy** — Tapping the widget opens the app directly to the relevant screen. No launcher → app → navigate.

### Widget Data and Design

**Primary widget (2x2):**
```
┌──────────────────┐
│   LIFE SCORE     │
│      73          │  ← Large number, color-coded
│   ● ● ● ● ○     │  ← Streak dots (last 5 days, filled = completed)
│   Day 23 🔥      │  ← Current streak
└──────────────────┘
```

**Expanded widget (4x2):**
```
┌──────────────────────────────────┐
│  LIFE SCORE    73     Day 23 🔥  │
│  ████████████████░░░░  Wake: 95  │
│  ██████████████░░░░░░  Rout: 80  │
│  ████████████░░░░░░░░  Chro: 65  │
└──────────────────────────────────┘
```

Shows: Overall score, component mini-bars, streak count.

**Lock screen widget (iOS 16+):**
- Just the number and streak count
- Color-coded background (green/yellow/red)
- Updates once daily after morning score calculation

### Widget Update Frequency

| State | Update Frequency |
|-------|-----------------|
| Before alarm | Show yesterday's final score |
| After alarm dismissed | "Calculating..." or motivational message |
| After morning routine window closes | Today's score locked in. Widget updates. |
| Rest of day | Static. Score doesn't change until tomorrow. |

**The widget should update ONCE per day** (after morning routine window). This creates a clear "reveal" moment. If it updated constantly, the single-check ritual would be diluted.

### Apps Where the Widget IS the Engagement Mechanism

| App | Widget Role |
|-----|-------------|
| **Widgetsmith** | The entire app IS widgets. 25M+ downloads. |
| **Streaks (Apple Design Award)** | Home screen circles show daily task completion. Users open the app from the widget. |
| **Oura** | Readiness Score widget drives morning app opens. |
| **Weather apps** | Users check the widget 5-10x/day, open the app 1-2x. The widget IS the product surface. |
| **Step counters** | The step count widget drives more walking than the app itself. Ambient visibility = behavior change. |
| **Duolingo** | Widget shows streak count and daily goal progress. The streak number on the home screen prevents users from "forgetting." |

**Key insight:** For Life Score, **the widget might be more important than the app's home screen.** Users should see their score 50+ times a day passively (phone unlocks) and open the app once (in the morning). The widget is the retention mechanism; the app is the action mechanism.

---

## 6. Anti-Patterns — What NOT To Do

### Scores That Feel Arbitrary or Unfair

- **Unexplained drops.** If the score drops and the user doesn't know why → instant trust destruction. **ALWAYS show the reason.**
- **Inconsistent logic.** "I did the same thing two days in a row and got different scores" → confusion. The algorithm must be deterministic for the same inputs.
- **Moving goalposts.** Don't change the scoring algorithm silently. If you update weights, communicate it. Oura has been criticized for this.
- **Black box scoring.** WHOOP's ML approach works because they have biological data as ground truth. For behavioral scoring, users need to understand the cause-effect. **Publish the formula.**

### Scores That Are Too Easy to Game

- Allowing users to set trivially easy goals and get high scores
- Counting "opened the app" as meaningful engagement
- No verification of actual behavior (self-report only)
- Streak mechanics that allow infinite freezes

### Scores That Make Users Feel Bad Without Actionable Feedback

- **"Your score is 34."** That's demoralizing. **"Your score is 34 because you woke 2 hours late and skipped your routine. Tomorrow: set your alarm 30 minutes earlier and do just 2 routine items."** That's actionable.
- Showing a red score with no path to green
- Comparing users unfavorably to "average" users
- Punishing factors outside user control (e.g., insomnia, illness)

### Vanity Metrics That Don't Reflect Real Progress

- XP systems where points accumulate infinitely but mean nothing (inflation)
- Badges for trivial achievements ("You opened the app 3 days in a row!")
- Scores that only go up (no accountability)
- Levels that don't correspond to actual skill or behavior change

### Over-Complicated Scoring

- More than 5-6 visible components → cognitive overload
- Requiring users to understand the math to trust the score
- Different scoring systems for different parts of the app (one score to rule them all)
- Sub-scores with sub-sub-scores → analysis paralysis

### The "Anxiety Score" Problem

- Oura and WHOOP have both been criticized for creating health anxiety
- Users who get a low Readiness Score may AVOID exercise (when they actually should move)
- Users who obsess over sleep scores sleep WORSE (ironic performance anxiety)
- **For Life Score: Frame the score as "how your DISCIPLINE is doing," not "how your HEALTH is doing."** This is behavioral, not biological. You can always improve discipline. You can't always improve biology.

---

## 7. Life Score Design Recommendations

### Final Proposed Architecture

```
LIFE SCORE (0-100)
├── Wake Time Consistency (30%)
│   ├── On-time wake (primary signal)
│   ├── Snooze penalties
│   ├── Weekend consistency bonus
│   └── 7-day exponential decay average
├── Morning Routine Completion (25%)
│   ├── Actions completed / total
│   ├── Timeliness bonus
│   ├── Minimum 3 actions for max score
│   └── 7-day exponential decay average
├── Streak Multiplier (20%)
│   ├── Consecutive day count → score curve
│   ├── Caps at 100 after 14 days
│   ├── Streak break = drop to 30% of previous
│   └── Streak freeze preserves but doesn't grow
├── Chronotype Alignment (15%)
│   ├── Social jet lag measurement
│   ├── Midpoint of sleep vs. biological midpoint
│   └── 14-day rolling average
└── Shift Your Clock Compliance (10% or redistributed)
    ├── Target bedtime adherence
    ├── Target wake time adherence
    ├── Light/wind-down protocol
    └── Only active during program
```

### Score Bands

| Range | Label | Color | Dare Engine Vibe |
|-------|-------|-------|-----------------|
| 90-100 | Elite | Gold/Deep Green | Rare respect. "Okay, you earned this." |
| 75-89 | Strong | Green | Challenged. "Good. But you peaked at 87 last week." |
| 60-74 | Solid | Light Green | Encouraged. "Getting there. Tuesday killed your average." |
| 40-59 | Building | Yellow/Amber | Pushed. "We both know you can do better." |
| 20-39 | Struggling | Orange | Real talk. "Let's simplify. Pick two things. Just two." |
| 5-19 | Reset | Red | Recovery mode. "Day 1 energy. Let's go." |

### Key Design Decisions Summary

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Score range | 0-100 | Industry standard, percentage-like, every point matters |
| Update frequency | Once daily (morning) | Creates ritual, prevents anxiety, aligns with product |
| Weight transparency | Published | Builds trust, users understand what to improve |
| Starting score | 50 | Not discouraging (0) or unrealistic (100) |
| Minimum displayed score | 5 | Never show 0 |
| Target average for active users | 65-70 | "Good but could be better" = aspiration |
| Max score achievable % of days | 3-5% | Keeps ceiling aspirational |
| Max single-day drop | 12-15 points | Prevents cliff drops that feel punitive |
| Score explanation | Always shown | Trust requires transparency |
| Streak freeze limit | 2 per month | Prevents gaming while allowing life |
| Social sharing | Score cards + streak | Score is personal, streak is competitive |
| Widget | Primary engagement surface | Ambient visibility > in-app time |

### What Makes This Different From Every Other Score

1. **Published, transparent weights** — FICO-level clarity. "You know exactly why your score is 73."
2. **Chronotype-aware** — No other behavior score accounts for biological timing. Social jet lag as a measurable, improvable metric is unique.
3. **Dare Engine personality** — The score isn't delivered clinically. It comes with attitude. A score of 58 isn't just yellow — it comes with "We both know this isn't your best."
4. **Behavioral, not biological** — Oura/WHOOP measure what happened TO you (HRV, temp). Life Score measures what you DID. Every point is earned through action.
5. **The widget is the product** — The score on the home screen IS the daily engagement mechanism. The app is for taking action; the widget is for maintaining awareness.

---

## Research Sources Referenced

- FICO Score methodology (myfico.com — published weights: 35/30/15/10/10)
- Oura Readiness Score (ouraring.com/blog — 7 contributors, 0-100 range, 85+ optimal)
- WHOOP Recovery Score (whoop.com — ML-based, 0-100%, green 67+/yellow 34-66/red 0-33)
- Apple Watch Activity Rings (Apple Support — 3 rings, completion-based, streak awards)
- Duolingo gamification (public blog posts, earnings calls — streak = biggest DAU driver, leaderboards +17% learning time)
- OneScore India (onescore.app — 35M+ users, credit score + Score Planner)
- Garmin Body Battery (0-100, real-time energy tracking)
- Fitbit Daily Readiness Score (0-100, three categories)
- Habitica (HP damage on missed tasks — loss > gain)
- Nir Eyal Hook Model (Trigger → Action → Variable Reward → Investment)
- Kahneman & Tversky Prospect Theory (1979) — losses felt 2-2.5x more than gains
- Lally et al. (2010) — habit formation takes 66 days average (UCL)
- Zeigarnik Effect — incomplete tasks create psychological tension (drives ring closure)
- Schultz (1997) — dopamine prediction error / variable reward superiority
