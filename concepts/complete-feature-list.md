# Complete Feature List — Launch Day

*Derived from 10 user type journeys. Every feature earned its spot by serving a specific user at a specific moment. Nothing arbitrary.*

*Created: April 2026*

---

## How This List Was Built

We walked through 10 different user types — from the Alarm Seeker to the Science Curious — and mapped their first 24 hours in the app. Every feature below exists because at least one user type NEEDS it at a specific moment. The "Who Needs It" column shows which types.

---

## 1. ONBOARDING

| Feature | What It Does | Who Needs It |
|---------|-------------|-------------|
| **Chronotype quiz (rMEQ + uMCTQ hybrid)** | 7 questions, 2 minutes. Detects chronotype, calculates social jet lag, determines ideal sleep/wake window. Scientifically legitimate — same assessments used in peer-reviewed research. | ALL — this is the foundation |
| **Chronotype reveal screen** | Full-screen reveal: "You're a Wolf." Shows biological clock vs actual clock. Two circles that don't overlap. Social jet lag number. | ALL — especially Clueless Sufferer, Self-Blamer |
| **Social jet lag visualization** | Visual showing the gap between biological time and social time. "1h45m of mismatch — every single day." | Clueless Sufferer, Self-Blamer, Science Curious |
| **"You're not broken" reframe screen** | "This isn't discipline. This isn't laziness. This is biology. 69% of people have the same mismatch." Willpower debunk. | Self-Blamer, Clueless Sufferer, ADHD Discoverer |
| **"Why everything else failed" screen** | Shows specifically why Alarmy/Fabulous/Screen Time failed — the loop problem. Each solved one piece. | Repeat Failer |
| **ADHD acknowledgment question** | "Do you have ADHD or suspect you might?" Early in onboarding. If yes → activates ADHD mode with transparent adjustments. | ADHD Discoverer |
| **Existing routine question** | "Do you currently have a morning routine?" No → progressive builder. Yes → full builder. | Routine Seeker vs Optimizer |
| **Tone calibration** | "How hard should we push you?" Three options: Tough love / Balanced / Encouraging. Sets Dare Engine intensity. | Self-Blamer (needs encouraging), Competitor (wants tough love) |
| **Smart alarm setup with chronotype context** | Suggests alarm time based on chronotype. User can override. Shows the gap: "You chose 6:30. Your biology wants 8:15. That's 1h45m — we'll help." | ALL |
| **Smart bedtime calculator** | Calculates ideal bedtime from chosen wake time + chronotype + sleep need. "11 PM gives you 7.5h — just enough." | ALL — especially Night Struggler |
| **Animated analysis screen** | "Analyzing your biological clock..." real computation, not fake spinner. Builds anticipation before reveal. | Clueless Sufferer, Science Curious |
| **Web quiz → app data transfer** | Users who took the free web chronotype quiz get recognized. No re-quizzing. Seamless handoff. | Science Curious |

---

## 2. NIGHT MODE

| Feature | What It Does | Who Needs It |
|---------|-------------|-------------|
| **Pre-bedtime warning** | Notification 30 min before bedtime. Dare Engine tone: "30 minutes. You've got time for one thing — not seven." | ALL |
| **Live score penalty** | Score ticks down in real time after bedtime passes. Visible, persistent. "Every minute past 11 PM costs you." Not a swipeable notification — a consequence. | Night Struggler, ALL |
| **Escalating Dare Engine commentary** | Gets progressively more pointed the longer they stay up. "20 min stolen from tomorrow you." Calibrated by tone setting. | Night Struggler, Alarm Seeker, Competitor |
| **Sleep window calculation** | Shows exactly how much sleep they'll get based on current time and alarm. "If you sleep now: 7h12m. If you keep scrolling: ticking down." | Night Struggler, ALL |
| **Morning preview** | "Your alarm is in 6h55m. This is going to hurt." Connects tonight's behavior to tomorrow's morning. | Night Struggler, ALL |
| **Bedtime tracking** | Logs actual bedtime vs intended bedtime. Feeds into score, weekly insights, and patterns. | ALL |
| **Hyperfocus-aware prompts (ADHD)** | "Are you doom-scrolling or doing something you chose? There's a difference." Distinguishes intentional vs compulsive. | ADHD Discoverer |
| **Externalization tips (ADHD)** | "Set a physical alarm across the room for bedtime. Make the transition external." | ADHD Discoverer |
| **Night score with friend comparison** | "Your night score: +8. Friend averaged +6 this week." | Competitor |

---

## 3. ALARM SYSTEM

| Feature | What It Does | Who Needs It |
|---------|-------------|-------------|
| **Full-screen alarm** | Cannot be dismissed without mission. Cannot close app. System-level via AlarmKit (iOS 26). | ALL |
| **Photo mission** | Take a photo of a specific location (bathroom sink, kitchen, outside). Physical action, gets body moving. | ALL — primary mission for ADHD |
| **Shake mission** | Shake phone X times. Physical, quick, no cognition needed. | ALL |
| **Math/puzzle mission** | Solve math problems to dismiss. Cognitive engagement. | ALL except ADHD (optional for ADHD) |
| **QR code scan mission** | Scan a QR code placed in another room. Forces physical movement. | Alarm Seeker, Repeat Failer |
| **Adaptive difficulty** | Mission difficulty adjusts to chronotype gap. Wolf waking at 6 AM = harder than Bear waking at 7 AM. | ALL |
| **Snooze with penalty** | One snooze allowed (Sundelin 2024 says not harmful). Second+ snooze = score penalty. | ALL |
| **Night→morning connection** | Alarm screen shows: "6h55m of sleep. You had 7h30m but donated 35 min to Instagram." | Night Struggler, ALL |
| **ADHD-calibrated missions** | Physical action only (photo, shake). Minimal cognitive load. Lower difficulty. | ADHD Discoverer |
| **Anti-cheat protection** | Can't force-quit app, can't bypass mission. Device-level enforcement. | Alarm Seeker, Repeat Failer |

---

## 4. MORNING MODE

| Feature | What It Does | Who Needs It |
|---------|-------------|-------------|
| **Post-alarm morning activation** | App doesn't disappear after alarm dismissed. "You're up. But 'up' isn't 'done.' Your morning starts now." | ALL — especially Repeat Failer |
| **Morning routine tasks** | Customizable daily tasks. Drink water, sunlight, stretch, journal, etc. Each has a countdown timer. | ALL |
| **Expiring tasks** | Tasks expire if not completed within time window. "Your morning disappears in 18 minutes." Creates urgency. | ALL — especially Alarm Seeker |
| **Single-task display (ADHD)** | One task visible at a time. Big visual countdown timer. Next task appears only after current is done. Never a list. | ADHD Discoverer |
| **Progressive routine builder** | Week 1: 1 habit. Week 2: 2 habits (unlocked by 7-day streak). Up to 5 habits. Prevents overload. | Routine Seeker |
| **Full routine builder** | All habits available from Day 1 for users who already have routines. | Optimizer |
| **Morning micro-learning** | 1 science fact per morning tied to what they just did. "Photo mission reduced sleep inertia by forcing motor cortex activation." | Science Curious |
| **Sleep inertia education** | "Your grogginess lasts ~40 min. This is biology, not failure. It passes." Shown during morning mode. | Clueless Sufferer, Self-Blamer |
| **Score preview** | Real-time score building as they complete morning tasks. Each task adds points visibly. | ALL |

---

## 5. LIFE SCORE

| Feature | What It Does | Who Needs It |
|---------|-------------|-------------|
| **Life Score (0-100)** | Single number. Weighted: 30% wake consistency, 25% routine completion, 20% streak, 15% chronotype alignment, 10% protocol compliance. | ALL |
| **Score breakdown** | Detailed breakdown showing exactly what contributed and what cost points. "Night: -8. Wake: +15. Routine: +8." | ALL — especially Night Struggler, Optimizer |
| **Night vs morning contribution** | Score explicitly shows how night behavior affected morning score. "If you'd gone to bed on time, score would be 72 not 58." | Night Struggler |
| **Score bands with Dare Engine copy** | 90-100: "Untouchable." 70-89: "Getting there." 50-69: "Room to grow." Below 50: "We need to talk." | ALL |
| **ADHD score context** | "65 against the hardest difficulty setting" — contextualizes score for ADHD users whose biology makes high scores harder. | ADHD Discoverer |
| **Score as math, not morality** | For Self-Blamers: "Not a grade of you. A starting point." No shame framing. | Self-Blamer |
| **Optimization targets** | For Optimizers: "Your gap: chronotype alignment. Waking 1h15m early costs 3 points daily." Shows where to improve. | Optimizer |
| **Home screen widget** | Score visible without opening app. Persistent reminder. Updated daily. | ALL |

---

## 6. STREAK SYSTEM

| Feature | What It Does | Who Needs It |
|---------|-------------|-------------|
| **Daily streak** | Increments when alarm mission completed + at least one morning action. | ALL |
| **Streak milestones** | Day 7, 14, 21, 30, 66 (habit formation), 100 celebrations. | ALL |
| **Loss aversion mechanics** | "Break your streak and it resets. Your 23-day streak → gone." Felt 2-2.5x more than gains. | ALL — especially Competitor |
| **Streak freeze (IAP)** | $0.99 / ₹49. Max 2 per month. Preserves streak for one missed day. | ALL (revenue for us) |
| **Streak race vs friends** | Visual: your streak vs friend's. "You: 12. Them: 31. Gap: 19 days. Closing." | Competitor |
| **Day 15 callout** | "Day 15. You've never made it this far. Don't blow it now." Directly addresses the Two-Week Wall. | Repeat Failer |
| **Logarithmic scoring** | Streak contribution to Life Score caps at 67 days (habit formation). Prevents "streak is everything" over-indexing. | ALL |

---

## 7. DARE ENGINE

| Feature | What It Does | Who Needs It |
|---------|-------------|-------------|
| **Dare Engine personality** | Cocky, challenging, never preachy. The voice of the app. Present in alarm screens, notifications, score updates, night mode, morning mode, everywhere. | ALL |
| **3 tone settings** | Tough love ("Still in bed? Bold. -5 points.") / Balanced ("Not your worst. Not your best.") / Encouraging ("You got up. That's everything.") Set during onboarding, changeable anytime. | ALL — Self-Blamer needs encouraging, Competitor wants tough love |
| **Variable copy** | 50+ unique lines minimum for launch. Never repeats within 2 weeks. Mapped to situation (alarm, night, morning, score drop, score rise, streak milestone, streak break). | ALL |
| **Science-infused variant** | Copy includes biological reason. "Melatonin peaked 30 min ago. Window closing." For users who want the "Why?" | Science Curious |
| **ADHD-safe copy** | No "just" language ("just get up", "just put it down"). Externalization framing. Direct but never shaming. | ADHD Discoverer |
| **Night escalation** | Gets progressively more pointed the longer past bedtime. Calibrated to tone setting. | Night Struggler |
| **Friend roast** | "Your friend beat you this week. They wanted you to know." After weekly challenge loss. | Competitor |

---

## 8. SOCIAL & COMPETITION

| Feature | What It Does | Who Needs It |
|---------|-------------|-------------|
| **Friend system** | Add friends by code or contacts. See their score and streak (not their sleep data — privacy). | Competitor, Optimizer |
| **Friend leaderboard** | Weekly score ranking among friends. 5-15 friends. Not global strangers. | Competitor |
| **Head-to-head comparison** | Direct comparison with one friend. Score, streak, daily updates. | Competitor |
| **Friend's Day 1 comparison** | "Your Day 1: 71. Their Day 1: 68." Makes new users feel competitive immediately. | Competitor |
| **Weekly challenge** | Optional: "Who has better night score this week?" Loser gets roasted by Dare Engine. | Competitor |
| **Friend invite reward** | Friend survives 7 days → both get free streak freeze. | Competitor (growth loop) |
| **Shareable score card** | Designed card: score, streak, chronotype, rank, QR code. For LinkedIn, Instagram, texts. | Optimizer, Competitor |
| **Shareable web quiz link** | For Science Curious users who share the quiz, not their score. | Science Curious |

---

## 9. SCIENCE LAYER

| Feature | What It Does | Who Needs It |
|---------|-------------|-------------|
| **"Why?" expandable throughout app** | Every setting, alarm time, bedtime, score component has optional science explanation. One tap. Never forced. | Science Curious |
| **Morning micro-learning** | 1 science fact per morning tied to their action. Never repeats. 66+ unique facts for 66+ days. | Science Curious |
| **Weekly science insights** | Personal data → biological explanation. "Avg onset 11:22 PM, 23 min after DLMO. Cost: ~46 min lying awake." | Science Curious, Optimizer |
| **Chronotype education** | Deep chronotype info available in profile. 5 subtypes, genetics, what it means for them. | Science Curious, Clueless Sufferer |

---

## 10. NOTIFICATIONS

| Feature | What It Does | Who Needs It |
|---------|-------------|-------------|
| **Pre-bedtime (30 min)** | "Bedtime in 30. You've got time for one thing — not seven." | ALL |
| **Bedtime enforcement** | "Past bedtime. Score ticking. -2 and counting." | ALL |
| **Morning score update** | "Score: 71. Streak: 8. The night didn't help. The morning saved you." | ALL |
| **Streak milestone** | "Day 14. Two weeks. The wall is right here. Push through." | ALL — especially Repeat Failer |
| **Friend activity** | "Your friend just posted a 91. You're at 84. Just saying." | Competitor |
| **Weekly summary** | "This week: avg score 74. Best day: Thursday (82). Worst: Monday (61). Pattern?" | ALL |
| **Evening check-in** | "Tomorrow's routine: Wake → Mission → Water → Sunlight. Bedtime in 45 min." | ALL |
| **ADHD externalization reminder** | "10:25 PM. In 5 min, put phone in another room. Set it up now." | ADHD Discoverer |

---

## 11. PAYWALL & MONETIZATION

| Feature | What It Does | Who Needs It |
|---------|-------------|-------------|
| **Hard paywall + 7-day trial** | Full access during trial. After: basic alarm only, score frozen, streak frozen. | ALL |
| **Trial conversion hook** | "Your 7-day streak dies tomorrow if you don't subscribe. $49.99/year = $0.14/day." | ALL |
| **Streak freeze IAP** | $0.99 / ₹49 per use. Max 2/month. | ALL (revenue) |
| **Regional pricing** | US: $49.99/yr. India: ₹999/yr. Mid-markets: $24.99/yr. | ALL (global) |

---

## 12. FREE WEB QUIZ (Acquisition Tool)

| Feature | What It Does | Who Needs It |
|---------|-------------|-------------|
| **Free chronotype quiz** | Real rMEQ on the web. SEO-optimized. Deep result page with science. | Science Curious, Clueless Sufferer (acquisition) |
| **Deep result page** | Chronotype, DLMO estimate, social jet lag, health associations, citations. | Science Curious |
| **Web-to-app bridge** | "Understanding is step one. Fixing it is step two. Download the app." | Science Curious |
| **Quiz data transfer** | Results carry to app via email/code. No re-quizzing. | Science Curious |
| **Shareable quiz** | Users share the quiz link, not just results. Each share = top-of-funnel. | Science Curious (growth) |

---

## 13. ADHD MODE (Toggle)

| Feature | What It Does |
|---------|-------------|
| **Physical-only missions** | Photo, shake. No math/puzzles at 6 AM. |
| **Single-task morning display** | One task visible at a time. Big visual countdown. No lists. |
| **Visual countdown timers** | Time blindness compensation. Big, filling the screen. |
| **No "just" language** | Copy audit: remove all "just get up", "just put it down", "just try." |
| **Externalization framing** | "Put phone in another room" not "try to resist scrolling." |
| **Score context** | "65 against hardest difficulty" not raw 65. |
| **Hyperfocus-aware night mode** | Distinguish intentional vs compulsive engagement. |
| **Transition support** | External bedtime alarm reminders. |

---

## 14. PROFILE & SETTINGS

| Feature | What It Does | Who Needs It |
|---------|-------------|-------------|
| **Chronotype profile** | Shows their type, SJL number, ideal times, biological clock visualization. | ALL |
| **Alarm settings** | Time, mission type, difficulty, snooze policy. | ALL |
| **Bedtime settings** | Target bedtime, notification preferences, enforcement level. | ALL |
| **Routine customization** | Add/remove/reorder morning tasks. Set durations and timers. | ALL |
| **Tone setting** | Change Dare Engine intensity anytime. | ALL |
| **ADHD toggle** | Turn ADHD mode on/off. | ADHD Discoverer |
| **Friend management** | Add/remove friends, manage challenges. | Competitor |
| **Notification preferences** | Control which notifications, when, how many. | ALL |

---

## Feature Count Summary

| Category | Features |
|----------|---------|
| Onboarding | 12 |
| Night Mode | 9 |
| Alarm System | 10 |
| Morning Mode | 9 |
| Life Score | 8 |
| Streak System | 7 |
| Dare Engine | 7 |
| Social & Competition | 8 |
| Science Layer | 4 |
| Notifications | 8 |
| Paywall & Monetization | 4 |
| Free Web Quiz | 5 |
| ADHD Mode | 8 |
| Profile & Settings | 8 |
| **TOTAL** | **107 features** |

---

*Every feature above exists because a specific user type needs it at a specific moment. See `audience/user-type-journeys.md` for the full journey mapping that produced this list.*
