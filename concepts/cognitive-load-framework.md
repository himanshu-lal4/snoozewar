# Cognitive Load Framework — Zero-Load UX Architecture

*Created: April 2026*
*Status: Pre-development UX specification*
*Purpose: Every screen, every moment, every notification follows these rules. No exceptions.*

---

## Why This Document Exists

The app has 62 features at launch. The target audience is:

- **Sleep-deprived** — prefrontal cortex impaired for 15-70 minutes after waking
- **ADHD users** — executive function deficit, overwhelmed by choices, time-blind
- **Self-blamers** — already anxious, complexity triggers shame spirals
- **Repeat failers** — burned by 3-5 apps that were too complicated, trust is low

If the app FEELS like 62 features on Day 1, it dies. Cognitive load causes:
- 74% abandon high-friction onboarding (Localytics)
- Decision fatigue is real even though ego depletion is debunked — too many choices = paralysis (Iyengar & Lepper, 2000)
- Sleep-deprived users process information at the level of legally drunk (.05 BAC equivalent)
- ADHD users cannot process lists during low-dopamine states (morning)

**The goal:** The app feels like 5 features on Day 1, 10 on Day 3, 20 on Day 7, and 62 by Month 2.

---

## 1. Core Principles — The Seven Laws of Zero Load

Every screen in the app must pass these seven tests. If a screen violates any principle, it gets redesigned before shipping.

### Law 1: One Screen, One Job
Every screen has exactly ONE primary action. Not two. Not "two that are clearly weighted." One. The user should never wonder "what am I supposed to do here?" If they have to think about what to do, the screen failed.

**Test:** Cover the screen with your hand except one element. Can the user still complete the primary task? If yes, every other element is optional decoration. If no, you have competing primaries — fix it.

### Law 2: Five-Second Rule
A sleep-deprived user with 15 minutes of sleep inertia should understand any screen within 5 seconds. This means:
- Maximum 15 words of primary text per screen
- Maximum 1 question per screen
- Maximum 3 tappable elements visible at any time (1 primary, 2 secondary)
- No paragraph text above the fold — ever

**Test:** Show the screen to someone for 5 seconds, then hide it. Ask "what was this screen about?" If they can't answer, simplify.

### Law 3: Show the Next Step, Not the Map
Users never need to see the full journey. They need to see the NEXT thing. Progressive disclosure is not a nice-to-have — it is the architecture. The app reveals complexity only when the user has earned it, needs it, or asks for it.

**Test:** Is anything on this screen irrelevant to what the user needs RIGHT NOW? Remove it.

### Law 4: Smart Defaults Kill Questions
Never ask a question you can answer from data. The chronotype quiz gives us: ideal wake time, ideal bedtime, sleep duration, chronotype, social jet lag amount, ADHD status, tone preference, and routine history. Use this data to pre-fill every subsequent setting. The user confirms, not configures.

**Test:** Count the questions on any setup screen. For each one, ask: "Do we already have data that answers this?" If yes, replace the question with a pre-filled default and an edit button.

### Law 5: Depth on Demand
Science, explanations, breakdowns, and "why" content exist — but behind a tap. The surface layer is always action-oriented. The depth layer is always optional. Never force education on a user who just wants to act.

**Visual pattern:**
```
┌─────────────────────────────┐
│  Your score: 71             │  ← Surface (always visible)
│  ▸ See breakdown            │  ← Depth trigger (optional)
└─────────────────────────────┘
```

### Law 6: Time-Aware Complexity
The amount of information shown adapts to the time of day. At 6 AM during sleep inertia, the user gets maximum simplicity. At 8 PM when configuring tomorrow, they get full access to settings and data. The same app feels different at different hours.

**Rule:** Morning complexity is 20% of evening complexity. Night is 50%. The app breathes with the user's cognitive capacity.

### Law 7: Silence is a Feature
Not every action needs a notification. Not every achievement needs a celebration. Not every data point needs a display. Restraint — knowing what NOT to show — is the hardest design discipline and the most important one. If in doubt, hide it.

**Test:** For every element on a screen, ask: "What happens if I remove this?" If the answer is "nothing bad," remove it.

---

## 2. Progressive Disclosure Architecture — The Revelation Timeline

This maps exactly WHEN each of the 62 launch features becomes visible to the user. Organized by time, not by feature category.

### Minute 1-5: Onboarding (User sees 5 "features")

What the user perceives: A quiz, a result, and alarm setup. Three things.

What actually activates (10 features):
| Feature | How User Experiences It | Visible As |
|---------|------------------------|------------|
| 1. Chronotype quiz | "Answer a few questions" | 7 question screens, one Q per screen |
| 2. Chronotype reveal | "Whoa, I'm a Wolf" | One dramatic full-screen result |
| 3. Social jet lag visualization | Two clock circles that don't overlap | Part of the reveal — not a separate "feature" |
| 4. "You're not broken" reframe | One sentence that changes everything | Part of the reveal flow |
| 5. "Why everything else failed" | Acknowledgment screen (Repeat Failers only) | Conditional — only shown if they answered "yes" to past app use |
| 6. ADHD acknowledgment | One question: "Do you have ADHD?" | One screen, one toggle |
| 7. Existing routine question | "Do you have a morning routine?" | One screen, one toggle |
| 8. Tone calibration | "How should we talk to you?" | Three radio buttons, one screen |
| 9. Smart alarm setup | "Pick your wake time" with chronotype suggestion | One screen with pre-filled time |
| 10. Smart bedtime calculator | Auto-calculated, shown as confirmation | One line of text within alarm setup — "Bedtime: 11:00 PM" |

**User perception:** "I took a quiz, learned I'm a Wolf, set my alarm." Three moments, not ten features.

**Key design rule for onboarding:** The 10 features are experienced as a CONVERSATION, not a configuration wizard. Each screen flows into the next with Dare Engine personality. No progress bars. No "step 3 of 10." Just a flowing dialogue.

### First Night (User sees 2 new "features")

What the user perceives: "Oh, the app does nights too?" and "My score is already dropping."

What activates (8 Night Mode features):
| Feature | When It Appears | How User Discovers It |
|---------|----------------|----------------------|
| 11. Pre-bedtime warning | 30 min before bedtime | Push notification — first Night Mode touchpoint |
| 12. Live score penalty | At bedtime if still up | Notification: "Score: -2 and counting" |
| 13. Escalating Dare Engine | 10, 20, 30 min past bedtime | Notifications get progressively more pointed |
| 14. Sleep window calculation | Embedded in night notifications | "If you sleep now: 7h12m" — not a separate screen |
| 15. Morning preview | Embedded in night notifications | "Tomorrow's alarm in 6h55m" — not a separate screen |
| 16. Bedtime tracking | Invisible — passive | User never "sees" this; it powers scoring |
| 17. ADHD hyperfocus prompts | ADHD users only, embedded in notifications | "Are you doom-scrolling or doing something you chose?" |
| 18. ADHD externalization tips | ADHD users only, embedded in notifications | "Set a physical alarm across the room for bedtime" |

**User perception:** "The app sent me a notification about bedtime, and when I stayed up late, it got annoyed. My score dropped." Two new discoveries: Night Mode exists, and score is live.

**Key design rule for Night Mode:** Night Mode has ZERO in-app screens the user must navigate to. Everything happens through notifications. The user never opens the app at night unless they choose to check their score. Night Mode is ambient, not interactive.

### First Alarm (User sees 1 "feature")

What the user perceives: "An alarm went off and I had to complete a mission to turn it off."

What activates (7 Alarm features):
| Feature | How User Experiences It |
|---------|------------------------|
| 19. Full-screen alarm | The alarm IS the experience — nothing else visible |
| 20. Photo mission | "Take a photo of your bathroom sink" |
| 21. Shake mission | Available as alternative — user picks during setup |
| 22. Snooze with penalty | One snooze button, small. Second press: "-5 points" |
| 23. Night-to-morning connection | "6h55m of sleep. You had 7h30m but donated 35 min to scrolling." — one line of text on alarm screen |
| 24. ADHD mission calibration | Invisible — ADHD users simply don't see math missions |
| 25. Anti-cheat | Invisible — user just can't bypass |

**User perception:** "Alarm rang. I took a photo to turn it off. It showed me how my night affected my morning." One experience.

**Key design rule for alarm:** The alarm screen is the most cognitively restricted screen in the entire app. ONE action: complete the mission. The night-to-morning text is passive (read, don't interact). Snooze is deprioritized (small, bottom of screen). Nothing else exists.

### First Morning — Post-Alarm (User sees 3 new "features")

What the user perceives: "The app didn't disappear after the alarm. There's a morning routine. Tasks expire."

What activates (8 Morning Mode features):
| Feature | How User Discovers It |
|---------|----------------------|
| 26. Post-alarm activation | App stays open after mission. "You're up. But 'up' isn't 'done.'" |
| 27. Morning routine tasks | ONE task appears (progressive builder users) or short list (full builder) |
| 28. Expiring tasks | Countdown timer visible on each task: "Expires in 18 min" |
| 29. Single-task ADHD display | ADHD users see one task at a time — feels like a different app |
| 30. Progressive builder | User sees 1 task, not a feature called "progressive builder" |
| 31. Full builder | Optimizer users see their full routine — they chose this in onboarding |
| 32. Sleep inertia education | ONE card, first morning only: "Grogginess lasts ~40 min. Biology, not failure." |
| 33. Score preview | Score ticks up as tasks complete: "+3... +5... +8" |

**User perception:** "I did a morning task, watched my score go up, and learned that grogginess is normal." Three things.

**Key design rule for morning:** DEFAULT is single-task display for ALL users during Week 1 (see Section 7: ADHD-First Design). Progressive builder users see 1 task. Full builder users see a compact list but are guided to do one at a time with the active task highlighted and enlarged. Score preview is a small, ambient counter — not a modal or separate screen.

### Day 1 Summary — End of First Day (User sees 2 new "features")

What the user perceives: "I got a score and I have a streak."

What activates (7 Life Score features + 5 Streak features + notifications):
| Feature | How User Discovers It |
|---------|----------------------|
| 34. Life Score (0-100) | Big number on the home screen after first morning |
| 35. Score breakdown | Expandable below the score: "Night: -8. Wake: +15. Routine: +8." |
| 36. Night vs morning contribution | Part of breakdown — not a separate screen |
| 37. Score bands + Dare Engine | "64 — Not bad for Day 1. Dare Engine has opinions." |
| 38. ADHD score context | ADHD users: "64 against the hardest difficulty setting" |
| 39. Score as math | Self-Blamer users: "Not a grade of you. A starting point." |
| 40. Home screen widget | Prompt to add widget appears after first score |
| 41. Daily streak | "Streak: 1" — small, below score |
| 42. Streak milestones | Not yet visible (Day 7 first milestone) |
| 43. Loss aversion | Not yet activated (nothing to lose on Day 1) |
| 44. Streak freeze IAP | Not yet visible (nothing to protect) |
| 45. Day 15 callout | Not yet (Day 15) |
| 46-49. Dare Engine system | Experienced as copy/personality, not a "feature" |
| 50. Shareable score card | Not yet surfaced (Day 3+ or on-demand in profile) |
| 51. Chronotype education | Available in profile — user discovers it if curious |

**User perception:** "My score is 64. I have a 1-day streak." Two numbers.

### Day 2-3: Pattern Recognition Phase

New elements that appear:
| Day | What Appears | Why Now |
|-----|-------------|---------|
| Day 2 | Yesterday vs today score comparison | Need 2 data points to compare |
| Day 2 | New Dare Engine lines (variable copy) | They realize the personality changes |
| Day 3 | "3-day streak" milestone celebration | First milestone hit |
| Day 3 | Shareable score card prompt | "Share your streak?" after milestone |
| Day 3 | Evening check-in notification | "Tomorrow's routine: Wake > Mission > Water" |

**User perception by Day 3:** "The app has an alarm, night mode, a morning routine, a score, a streak, and it roasts me. 6 things." Reality: 40+ features active, invisible architecture.

### Day 4-7: The Data Layer Reveals Itself

| Day | What Appears | Why Now |
|-----|-------------|---------|
| Day 4 | Night pattern insight | "3 nights tracked. You average 27 min late." Needs 3 data points |
| Day 5 | Score breakdown detail | Night-morning correlation shown: "Your best mornings follow your earliest bedtimes" |
| Day 5 | Trial conversion hint | "2 days left in trial" — subtle, not aggressive |
| Day 6 | Week preview | "Tomorrow = 7-day streak + trial decision" |
| Day 6 | Trial conversion notification | "Your 7-day streak dies tomorrow if you don't subscribe" |
| Day 7 | Weekly summary | Full first-week stats |
| Day 7 | Trial conversion screen | The convergence: streak, score, data, paywall |
| Day 7 | Progressive builder: Habit #2 unlock | For progressive builder users: "7 days. 100%. Ready for habit #2?" |

**User perception by Day 7:** "The app tracks my nights and mornings, gives me a score, I have a streak, it's learning my patterns, and now I can add a second morning habit. 10 things." Reality: 50+ features active.

### Week 2-4: Depth and Customization

| Week | What Appears | Why Now |
|------|-------------|---------|
| Week 2 | Progressive builder: Habit #3 | Earned through 14-day consistency |
| Week 2 | Loss aversion fully active | Streak is long enough that losing it hurts |
| Week 2 | Streak freeze IAP | First time it's surfaced: "Protect your 14-day streak: $0.99" |
| Week 3 | Day 15 callout | "You've never made it this far. Don't blow it." (Repeat Failers) |
| Week 3 | Progressive builder: Habit #3-4 | Routine building out |
| Week 4 | Weekly summaries become pattern-rich | 4 weeks of data = meaningful trends |
| Week 4 | Full settings exploration encouraged | Evening prompt: "Customize your alarm mission in Settings" |

**User perception by Week 4:** "I have a full morning routine, my score trends over weeks, I understand my patterns, and I've customized things. 15-20 features." Reality: All 62 launch features are active.

### Month 2+: Everything Accessible

By Month 2, all 62 features are visible and accessible. The user has:
- Explored settings at their own pace
- Built out their full routine
- Accumulated enough streak/score history to appreciate loss aversion
- Encountered all notification types
- Been exposed to the full Dare Engine copy range
- Had the score card prompted for sharing

No feature is ever "locked" or "gated" arbitrarily. Features appear when they are contextually relevant or when the user has enough data for them to be meaningful.

---

## 3. Screen-by-Screen Cognitive Load Audit

### Screen 1: Onboarding — Quiz Screens

```
┌─────────────────────────────────┐
│                                 │
│  If nothing woke you up         │
│  tomorrow, what time would      │
│  your body wake on its own?     │
│                                 │
│       [ 6:00 AM ]               │
│       ◂ ─────●───── ▸          │
│       [ 10:00 AM ]              │
│                                 │
│                                 │
│         [ Next → ]              │
│                                 │
└─────────────────────────────────┘
```

| Dimension | Rule |
|-----------|------|
| **Max elements visible** | 3: question, input, next button |
| **Primary action** | Answer the question |
| **Secondary actions** | None |
| **Hidden complexity** | No progress bar. No "step X of 7." No back button (swipe back if needed). No skip option. |
| **Words on screen** | Target: under 20 words per question |
| **State-dependent visibility** | ADHD question only appears if user hasn't already been flagged. "Why everything else failed" only appears if they answered "yes" to past app usage. |

**Design rule:** Each quiz screen is one question with one input. Slider preferred over typed input. No dropdowns. No multi-select. The quiz should feel like texting, not filling out a form.

**Conversational framing examples:**
- NOT: "Question 3: At what time do you typically feel most alert?"
- YES: "When do you feel sharpest? Morning, afternoon, or evening?"

### Screen 2: Onboarding — Chronotype Reveal

```
┌─────────────────────────────────┐
│                                 │
│                                 │
│         You're a Wolf.          │
│                                 │
│     ┌──── ○ ────┐              │
│     │ Your clock │  vs  schedule│
│     └──── ○ ────┘              │
│                                 │
│  Your body wants: 12:30 AM     │
│  You've been doing: 11:00 PM   │
│  Social jet lag: 1h 30m        │
│                                 │
│  That's not laziness.           │
│  That's biology.                │
│                                 │
│         [ Continue → ]          │
│                                 │
└─────────────────────────────────┘
```

| Dimension | Rule |
|-----------|------|
| **Max elements visible** | 4: chronotype name, visualization, 3 stats, continue button |
| **Primary action** | Absorb the reveal (read), then continue |
| **Secondary actions** | None on this screen |
| **Hidden complexity** | No "learn more" yet — this is the emotional peak. Science depth comes later in the chronotype profile. The SJL visualization is simple (two offset circles or bars), not a chart. |
| **Words on screen** | Under 30 words |
| **State-dependent** | Reframe text adapts: Self-Blamers get "That's not laziness." Repeat Failers get "Alarmy didn't know this about you." Standard users get "69% of people have this mismatch." |

**Design rule:** This screen lives or dies on IMPACT, not information. Big type. Dramatic pause before the chronotype name appears (300ms delay). The emotional resonance ("I'm a Wolf") matters more than the data. Keep data to three lines max.

### Screen 3: Onboarding — Alarm + Bedtime Setup

```
┌─────────────────────────────────┐
│                                 │
│  Your alarm                     │
│                                 │
│  Biology suggests: 8:15 AM     │
│                                 │
│       ┌──────────┐             │
│       │  6:30 AM │  ← editable │
│       └──────────┘             │
│                                 │
│  That's 1h 45m before your     │
│  biology. Harder — but doable. │
│                                 │
│  Bedtime: 11:00 PM (auto)     │
│  Sleep window: 7h 30m          │
│                                 │
│  Mission: 📸 Photo             │
│  [change]                       │
│                                 │
│         [ Set alarm → ]         │
│                                 │
└─────────────────────────────────┘
```

| Dimension | Rule |
|-----------|------|
| **Max elements visible** | 5: suggested time, editable time, bedtime (auto-calculated), mission type, set button |
| **Primary action** | Tap "Set alarm" (accepts defaults) |
| **Secondary actions** | Change wake time, change mission type |
| **Hidden complexity** | Bedtime is auto-calculated, shown but not editable here (edit in settings). Snooze policy, ADHD mission filter, advanced alarm settings — all hidden, all set to smart defaults. |
| **Smart defaults** | Wake time: chronotype-suggested. Bedtime: calculated from wake time + sleep need. Mission: Photo (most effective, default for all). Difficulty: auto-calibrated to chronotype gap. |

**Design rule:** This screen should take 5 seconds if the user accepts defaults. The "change" links are de-emphasized (small, muted color). 80% of users should just tap "Set alarm" and move on. The gap commentary ("1h 45m before your biology") is the Dare Engine establishing voice.

### Screen 4: Home Dashboard

```
┌─────────────────────────────────┐
│  ☾ Night Mode in 2h 14m        │  ← contextual, appears after 8 PM
│                                 │
│              71                 │  ← THE number, huge
│          Life Score             │
│                                 │
│  ████████████████░░░░           │
│                                 │
│  ▸ See breakdown                │  ← expandable
│                                 │
│  ───────────────────            │
│                                 │
│  🔥 Streak: 8 days             │
│                                 │
│  ───────────────────            │
│                                 │
│  Tomorrow: 6:30 AM             │
│  Bedtime: 11:00 PM             │
│                                 │
│                                 │
│  ⚙                              │  ← settings, minimal
└─────────────────────────────────┘
```

| Dimension | Rule |
|-----------|------|
| **Max elements visible** | 5: score, streak, tomorrow alarm, bedtime, settings icon |
| **Primary action** | NONE — this is a status screen, not an action screen. The primary purpose is "see your number." |
| **Secondary actions** | Expand score breakdown, tap settings, view chronotype profile |
| **Hidden complexity** | Score breakdown (tap to expand). Night vs morning contribution (inside breakdown). ADHD score context (conditionally shown inside breakdown). Score bands copy (shown above score). Chronotype profile (separate screen, accessible from score or settings). Weekly summary (separate section, scrolled below fold). Share card (accessible from score or profile). |
| **State-dependent visibility** | Before bedtime: shows "Night Mode in Xh Xm." During Night Mode: score penalty counter visible. Morning: morning mode summary visible. Evening: "Set up tomorrow" prompt. |

**Design rule:** The dashboard is the CALMEST screen in the app. One big number. Supporting info below. Everything else is behind taps. The user should see their score, feel something, and close the app. Dashboard session target: under 10 seconds for a status check.

**What is NOT on the dashboard:**
- No feed of tips or articles
- No list of habits
- No achievement badges grid
- No calendar view
- No graphs (those live in the weekly summary)
- No social/friends section (deferred to V1.2)

### Screen 5: Night Mode (Active — Past Bedtime)

Night Mode is NOT a screen — it is a notification sequence. The user does not need to open the app.

**Notification sequence:**
```
10:30 PM  "Bedtime in 30 min. Tomorrow starts now."              [14 words]
11:00 PM  "Bedtime. Score: holding. Every minute costs you."     [9 words]
11:10 PM  "10 min late. -3 points. Keep going?"                  [9 words]
11:20 PM  "20 min. -5. Sleep now: 7h10m. Wait more: less."      [11 words]
11:35 PM  "35 min stolen from tomorrow. -8. Done scrolling?"     [9 words]
```

| Dimension | Rule |
|-----------|------|
| **Max elements** | Notification: title + body. No images, no action buttons beyond "Open app." |
| **Primary action** | Put the phone down. The notification's job is to STOP interaction, not create it. |
| **Secondary actions** | Open app to see live score (optional) |
| **Hidden complexity** | Sleep window calculation, morning preview, ADHD hyperfocus prompt — all embedded in notification copy, not separate screens |
| **Words per notification** | Hard cap: 15 words |

**If the user opens the app during Night Mode:**
```
┌─────────────────────────────────┐
│                                 │
│         11:22 PM                │
│   22 min past bedtime           │
│                                 │
│         Score: -5               │
│     and counting...             │
│                                 │
│   Sleep now → 7h 8m of sleep   │
│                                 │
│                                 │
│   [Put the phone down]          │  ← the only button
│                                 │
└─────────────────────────────────┘
```

**Design rule:** Night Mode's in-app screen is intentionally dark, minimal, and boring. No bright colors. No engaging content. No reason to stay. The app actively discourages its own usage at night. This is anti-engagement design — the opposite of every other app.

### Screen 6: Alarm Screen (Ringing)

```
┌─────────────────────────────────┐
│                                 │
│          6:30 AM                │
│                                 │
│  6h 55m of sleep.               │
│  You had 7h 30m but donated     │
│  35 min to Instagram.           │
│                                 │
│                                 │
│    ┌─────────────────────┐     │
│    │                     │     │
│    │   📸 Take a photo   │     │  ← BIG, central, obvious
│    │   of your bathroom  │     │
│    │        sink         │     │
│    │                     │     │
│    └─────────────────────┘     │
│                                 │
│                                 │
│          [snooze]               │  ← small, bottom, muted
│                                 │
└─────────────────────────────────┘
```

| Dimension | Rule |
|-----------|------|
| **Max elements visible** | 3: time, mission instruction, snooze |
| **Primary action** | Complete the mission |
| **Secondary actions** | Snooze (small, de-emphasized, penalty noted after first use) |
| **Hidden complexity** | Anti-cheat running invisibly. ADHD mission filter already applied. Difficulty calibrated to chronotype gap. Night-morning connection text is passive — read, no interaction. |
| **Words on screen** | Under 25 words total, including the night-morning text |
| **What is NOT on this screen** | No score. No streak. No settings. No dismiss button. No "good morning" greeting. No weather. No time-zone info. NOTHING except the mission. |

**Design rule:** This is the LOWEST cognitive capacity moment in the entire app. The user is barely conscious. Sleep inertia is active. The screen must be parseable by a brain running at 60% capacity. One color dominates. One action is obvious. The mission instruction is written at a 3rd-grade reading level.

**Alarm screen cognitive load budget:**
- Actions: 1 (complete mission)
- Choices: 0 (mission is pre-assigned)
- Words: under 25
- Colors: 2 (background + mission highlight)
- Buttons: 1 primary + 1 de-emphasized snooze

### Screen 7: Morning Mode (Post-Alarm)

**Default view — single-task mode (DEFAULT FOR ALL USERS in Week 1):**
```
┌─────────────────────────────────┐
│                                 │
│  Morning started. 22 min left.  │
│                                 │
│  ┌─────────────────────────┐   │
│  │                         │   │
│  │    💧 Drink water       │   │
│  │                         │   │
│  │      ⏱ 3:00            │   │
│  │                         │   │
│  │    [ Done ✓ ]           │   │
│  │                         │   │
│  └─────────────────────────┘   │
│                                 │
│          +3 points              │  ← score preview
│                                 │
│                                 │
│                                 │
└─────────────────────────────────┘
```

After tapping "Done," the next task slides in. No list. No scrolling. Just the next thing.

**Full routine view (for users who opted in or toggled after Week 1):**
```
┌─────────────────────────────────┐
│                                 │
│  Morning started. 22 min left.  │
│                                 │
│  ■ Drink water      ⏱ 3:00    │  ← active, enlarged, highlighted
│  ○ 2 min sunlight   ⏱ 5:00    │  ← dimmed, waiting
│  ○ Stretch          ⏱ 5:00    │  ← dimmed, waiting
│                                 │
│         Score: +3               │
│                                 │
│                                 │
└─────────────────────────────────┘
```

| Dimension | Rule |
|-----------|------|
| **Max elements visible (single-task)** | 3: task name, timer, done button |
| **Max elements visible (full list)** | Active task (highlighted) + max 4 dimmed upcoming tasks |
| **Primary action** | Complete the current task |
| **Secondary actions** | None during task. Skip not available (task expires instead). |
| **Hidden complexity** | Progressive builder gating (user just doesn't see more tasks). Sleep inertia education (one-time card, first morning only). Score preview is ambient, not interactive. |
| **State-dependent** | ADHD mode: always single-task. Week 1 non-ADHD: single-task by default. Week 2+: user can toggle to list view in settings. Timer goes red in final 30 seconds. |

**Design rule:** Morning Mode is a conveyor belt, not a menu. Tasks arrive one at a time. The user doesn't choose what to do — they do the next thing. The expiring timer creates urgency without requiring decisions. If a task expires, it simply disappears and the next one appears. No failure modal. No "you missed it!" shame screen. Just the next task.

### Screen 8: Score Screen (Expanded Breakdown)

```
┌─────────────────────────────────┐
│                                 │
│              71                 │
│     "Not bad. Not great.        │
│      Let's fix that night."     │  ← Dare Engine, tone-calibrated
│                                 │
│  ───────────────────            │
│                                 │
│  Wake consistency   22/30  ███▓ │
│  Morning routine    19/25  ███░ │
│  Streak bonus       14/20  ██▓░ │
│  Chronotype align.  10/15  ██░░ │
│  Protocol           6/10   █▓░░ │
│                                 │
│  ───────────────────            │
│                                 │
│  ▸ Night impact: -8 points     │  ← expandable
│  ▸ How to improve              │  ← expandable, appears Week 2+
│                                 │
│  [ Share score card ]           │  ← de-emphasized, below fold
│                                 │
└─────────────────────────────────┘
```

| Dimension | Rule |
|-----------|------|
| **Max elements at surface** | 1 big number + 5-line breakdown + Dare Engine line |
| **Primary action** | See the number (absorb) |
| **Secondary actions** | Expand night impact, expand improvement tips |
| **Hidden complexity** | Night vs morning split (inside "Night impact" expandable). ADHD context (conditional text below score). Self-Blamer variant (conditional Dare Engine copy). Improvement suggestions (appear Week 2+ when there's enough data). Share card (below fold, discoverable but not pushed). |

**Design rule:** Score screen follows the "newspaper" pattern: headline (the number), subhead (Dare Engine), body (breakdown), and deep cuts (expandables). Users who want "just the number" see it in 1 second. Users who want the breakdown scroll 2 seconds. Users who want night-morning analysis tap once. Three layers of depth, zero forced complexity.

### Screen 9: Streak Screen

The streak does NOT have its own screen at launch. It is a component on the dashboard:

```
│  🔥 Streak: 14 days             │
│  ▸ Milestones                    │  ← expandable
```

Expanding shows:
```
│  🔥 Streak: 14 days             │
│                                  │
│  ✓ Day 3 — Most quit here      │
│  ✓ Day 7 — One week            │
│  ✓ Day 14 — Two weeks          │
│  ○ Day 21 — Three weeks         │
│  ○ Day 30 — One month           │
│  ○ Day 66 — Habit formed        │
│  ○ Day 100 — Legend              │
│                                  │
│  Streak freeze: 2 available     │
│  [ Buy freeze — $0.99 ]         │  ← only visible when streak > 7
```

| Dimension | Rule |
|-----------|------|
| **Max elements** | Streak number + milestone list (max 7 items) + freeze purchase |
| **Primary action** | None — status display |
| **Hidden complexity** | Streak freeze IAP only surfaces after Day 7. Logarithmic scoring invisible. Loss aversion is felt through copy, not a visible mechanic. |

**Design rule:** The streak is a NUMBER, not a page. It lives on the dashboard. The milestone list is a simple checklist — no badges, no animations (save those for the moment of achievement). The streak freeze IAP appears contextually, not as a permanent upsell.

### Screen 10: Settings

```
┌─────────────────────────────────┐
│  Settings                       │
│                                 │
│  ───── Alarm ─────              │
│  Wake time          6:30 AM    │
│  Mission            Photo       │
│  Snooze             1 free      │
│                                 │
│  ───── Night ─────              │
│  Bedtime            11:00 PM   │
│  Warnings           On          │
│                                 │
│  ───── Morning ─────            │
│  Routine            3 tasks     │
│  Display            Single task │
│                                 │
│  ───── You ─────                │
│  Tone               Balanced    │
│  ADHD mode          Off         │
│  Chronotype         Wolf 🐺     │
│                                 │
│  ───── Notifications ─────      │
│  ▸ Manage...                    │
│                                 │
│  ───── Account ─────            │
│  ▸ Subscription                 │
│  ▸ Privacy                      │
│                                 │
└─────────────────────────────────┘
```

| Dimension | Rule |
|-----------|------|
| **Max visible without scrolling** | 4 groups, ~12 items |
| **Primary action** | None — browse and configure |
| **Grouped categories** | 6 groups: Alarm, Night, Morning, You, Notifications, Account |
| **Hidden complexity** | Each item taps to a detail screen. Notification preferences are a sub-screen (not inline toggles for 6 notification types). Advanced settings (like specific mission difficulty, specific timer durations) are inside the detail screens, not on the main settings page. |

**Design rule:** Settings uses Apple's iOS Settings pattern: grouped rows, each tapping to detail. Never show more than 15 rows on the main settings screen. Group labels act as visual separators. Current values shown inline (right-aligned) so users can scan without tapping.

### Screen 11: Paywall / Trial Conversion (Day 7)

```
┌─────────────────────────────────┐
│                                 │
│  YOUR FIRST WEEK                │
│                                 │
│  Score: 64 → 76  (+19%)        │
│  Streak: 7 days 🔥             │
│  Best night: Tuesday            │
│                                 │
│  ─────────────────────          │
│                                 │
│  Your trial ends today.         │
│  Your streak doesn't have to.   │
│                                 │
│  ┌─────────────────────────┐   │
│  │                         │   │
│  │   Continue — $49.99/yr  │   │  ← primary, large, colored
│  │   That's $0.14/day.     │   │
│  │                         │   │
│  └─────────────────────────┘   │
│                                 │
│  Not now                        │  ← small, muted text link
│                                 │
└─────────────────────────────────┘
```

| Dimension | Rule |
|-----------|------|
| **Max elements** | 3 stats + value prop + CTA + dismiss |
| **Primary action** | Subscribe |
| **Secondary actions** | Dismiss ("Not now" — never "Cancel" or "No thanks") |
| **Hidden complexity** | Regional pricing auto-applied. Annual vs monthly choice NOT shown (annual only — fewer decisions). Restore purchase link in tiny text at bottom. |
| **Words on screen** | Under 40 words total |

**Design rule:** The paywall is not a feature list. It is a LOSS FRAME. The user sees what they've built (score, streak, data) and what they'll lose. Three stats maximum. No bullet-point feature comparison. No "Premium vs Free" table. The user already knows what the app does — they've used it for 7 days. The paywall's job is emotional (loss aversion), not informational (feature discovery).

### Screen 12: Notifications Audit

Every notification follows the same cognitive load rules:

| Notification Type | Max Words | Example | Frequency |
|-------------------|-----------|---------|-----------|
| Pre-bedtime warning | 12 | "Bedtime in 30 min. Tomorrow starts now." | 1x/night |
| Bedtime enforcement | 10 | "10 min late. -3 points. Keep going?" | Max 3x/night, escalating |
| Morning score | 10 | "Score: 71. Streak: 8. Not bad." | 1x/morning |
| Streak milestone | 12 | "Day 14. Two weeks. Most quit here. Not you." | At milestones only |
| Weekly summary | 15 | "This week: avg 74. Best: Thursday. Worst: Monday." | 1x/week |
| Evening check-in | 12 | "Tomorrow: 6:30 AM. Bedtime in 45 min. Ready?" | 1x/evening |
| Trial conversion | 12 | "Your 7-day streak dies tomorrow. Just saying." | Day 5, 6 only |
| ADHD externalization | 12 | "10:25 PM. In 5 min, put phone in another room." | 1x/night (ADHD only) |
| Day 15 callout | 12 | "Day 15. You've never been here. Don't blow it." | Once (Day 15 only) |

**Design rules for all notifications:**
1. No notification exceeds 15 words
2. Every notification has ONE piece of information or ONE call to action — never both
3. Notifications never include buttons or actions beyond opening the app
4. Maximum 3 notifications per day (morning, evening, bedtime) during normal operation
5. Night Mode escalation can add up to 3 more — but these are the user's "fault" (staying up late)
6. No notification ever uses shame language, even in "tough love" tone

---

## 4. The "One Thing" Rule — Every Moment Has a Primary

| Moment | The ONE Thing | Everything Else |
|--------|--------------|-----------------|
| **Onboarding quiz** | Answer this question | Nothing else on screen |
| **Chronotype reveal** | See your type | Continue button waits 2 seconds before appearing |
| **Alarm setup** | Tap "Set alarm" | Time/mission changes are secondary |
| **Night notification** | Put the phone down | Score penalty is motivational context, not an action |
| **Night in-app** | Leave the app | One button: "Put the phone down" |
| **Alarm ringing** | Complete the mission | Snooze is small and penalized |
| **Morning mode** | Do this task | Timer is ambient, score preview is ambient |
| **Dashboard** | See your score | Everything else requires a tap to access |
| **Score breakdown** | Understand your number | Expandable detail is optional |
| **Settings** | Find what you need | Grouped so scanning takes < 5 seconds |
| **Paywall** | Subscribe | "Not now" is the only alternative |
| **Weekly summary** | See your trend | Detail is expandable |

**Implementation rule:** Every screen's primary action button uses the app's accent color at full opacity. All secondary elements use muted colors at reduced opacity. Tertiary elements (back, settings gear, etc.) are grey. The visual hierarchy IS the cognitive load management.

---

## 5. Information Density Rules

Concrete, enforced limits for every content type in the app:

### Text Limits
| Content Type | Max Words | Example |
|-------------|-----------|---------|
| Push notification body | 15 | "10 min late. -3 points. Sleep now: 7h10m." |
| Dare Engine line (alarm) | 12 | "Day 4. The honeymoon's over. Let's go." |
| Dare Engine line (night) | 15 | "35 min stolen from tomorrow. -8. Done scrolling?" |
| Dare Engine line (score) | 12 | "71. Not bad. Not great. Fix the night." |
| Onboarding question | 15 | "When do you feel sharpest? Morning, afternoon, or evening?" |
| Onboarding body text | 20 | "Your body wants 12:30 AM. You've been forcing 11:00 PM. That's biology, not laziness." |
| Score breakdown label | 3 | "Wake consistency" |
| Error/empty state | 15 | "No data yet. Complete tonight's bedtime and tomorrow's alarm to see your score." |
| Settings label | 3 | "Wake time" |
| Settings description | 10 | "Photo mission: take a photo to dismiss alarm" |

### List Limits
| Context | Max Items Visible | If More Exist |
|---------|------------------|---------------|
| Morning routine tasks (single-task mode) | 1 | Next appears after completion |
| Morning routine tasks (list mode) | 5 | Scroll for more (but progressive builder caps at 5 anyway) |
| Score breakdown components | 5 | These are the 5 components — no more will ever exist |
| Streak milestones | 7 | All 7 always visible in milestone view (3 + next 4) |
| Settings groups | 6 | All visible, some require scroll |
| Notification types in preferences | 6 | All visible in notification settings sub-screen |
| Onboarding screens | 10 | But experienced as ~6 due to conversational flow |
| Mission types at launch | 2 | Photo or Shake — that's the whole choice |

### Number vs Word vs Visual Rules
| When to use NUMBERS | When to use WORDS | When to use VISUALS |
|--------------------|-------------------|---------------------|
| Score (71) | Dare Engine ("Not bad") | Chronotype (clock visualization) |
| Streak (14 days) | Sleep inertia education | Score progress bar |
| Timer (3:00) | Reframe screens | Social jet lag (two offset circles) |
| Points gained (+3) | Onboarding questions | Morning task icon (water droplet, sun) |
| Bedtime gap (22 min late) | Paywall value prop | Streak fire emoji |

**Rule:** Numbers for data. Words for personality. Visuals for comparison/progress. Never use a paragraph when a number will do. Never use a number when a visual comparison is clearer.

### Animation Rules
| Use Animation | Do NOT Use Animation |
|--------------|---------------------|
| Chronotype reveal (dramatic entrance) | Morning task completion (instant checkmark) |
| Score counting up after morning | Settings changes (instant feedback) |
| Streak milestone celebration (confetti, brief) | Night Mode score penalty (numbers update, no animation) |
| Score card generation for sharing | Onboarding transitions (simple slide) |
| Task expiring (fade out) | Alarm screen (static until mission complete) |

**Rule:** Animation creates MOMENTS. Moments are rare (max 2-3 per day). If everything animates, nothing is special. Reserve animation for: reveals, celebrations, and urgency cues.

---

## 6. Cognitive Load by Time of Day

The app adapts its information density and interaction patterns to the user's cognitive state throughout the day.

### Night (8 PM - Bedtime): Medium Capacity, Low Willpower

**User state:** Cognitive capacity is decent but willpower is depleted from the day. Emotional processing dominates over rational processing. This is peak revenge bedtime procrastination territory.

**App behavior:**
- Evening check-in notification: preview tomorrow's routine (12 words)
- Dashboard shows: score, streak, "Night Mode in Xh Xm"
- Pre-bedtime notification: short, direct (12 words)
- Settings are fully accessible (this is when configuration happens)
- Tone: score-focused, not lecture-focused. "Your score starts now" not "You should go to bed because sleep hygiene research suggests..."

**Complexity level:** 50% of maximum. Show data, hide explanations. Let them configure settings if they want, but don't prompt configuration.

### Bedtime - Wake (Sleep Period): Zero Interaction

**User state:** Should be sleeping.

**App behavior:**
- If past bedtime and awake: escalating notifications (max 3), decreasing in word count
- If user opens app: dark screen, one number (score penalty), one button ("put phone down")
- No content, no engagement, no reason to stay
- Screen is low-brightness-optimized (dark background, dim text)

**Complexity level:** 10% of maximum. One number, one button. Nothing else.

### Alarm (Wake Moment): LOWEST Capacity

**User state:** Sleep inertia active. Prefrontal cortex offline. Processing speed at 60%. Equivalent to legal intoxication. Cannot handle choices, lists, or text blocks.

**App behavior:**
- Full-screen alarm: time + mission instruction + snooze
- Night-morning text: one sentence, passive (read, don't act)
- Mission: one physical action, no cognitive demand
- Zero choices presented (mission pre-assigned)
- Zero navigation possible (can't go to other screens)

**Complexity level:** 5% of maximum. This is the absolute minimum the app will ever show. Designed for a brain that is functionally impaired.

### Post-Alarm Morning (0-30 min after wake): Gradually Increasing

**User state:** Sleep inertia declining over 15-70 minutes. Minute-by-minute improvement. By minute 30, most users are at 80%+ capacity.

**App behavior:**
- Minute 0-5: Single-task display only. ONE thing. Big text. Big timer. Big button.
- Minute 5-15: Tasks continue in single-task mode. Score preview appears (small, ambient).
- Minute 15-30: If tasks complete, morning summary appears. Score shown. Dare Engine comment. Expandable breakdown available.
- After morning window expires: Dashboard state. Full information available.

**The key insight:** Morning Mode's complexity INCREASES over time, matching the user's recovering cognitive capacity. The first task seen at minute 0 is visually simpler than the last task seen at minute 20.

**Complexity level:** Starts at 10%, reaches 60% by end of morning window.

### Daytime (No Active Touchpoint): Full Capacity

**User state:** Normal cognitive capacity.

**App behavior:**
- Dashboard accessible with full breakdown
- Settings fully configurable
- Chronotype education available
- Score card shareable
- Weekly summary reviewable

**Complexity level:** 100% — but 100% of THIS app is still simpler than most apps' 50%.

### Evening (6-8 PM): Highest Capacity = Configuration Time

**User state:** Peak cognitive capacity for the day (for most chronotypes). Willpower not yet fully depleted.

**App behavior:**
- Evening check-in notification: routine preview for tomorrow
- This is when the app suggests settings changes: "Want to try a different mission tomorrow?"
- This is when progressive builder unlocks are announced: "Ready for habit #2?"
- This is when the weekly summary lands (Sunday evening)

**Design rule:** EVERY complex decision is pushed to the evening. Never ask the user to configure, choose, or plan during morning or night modes. Evening is for strategy. Morning is for execution.

---

## 7. ADHD-First Design — The Default for Everyone

### The Argument

The existing plan has "ADHD single-task mode" as a toggle for users who self-identify as ADHD. This is backwards. Here's why:

**Who benefits from single-task display:**
- ADHD users (executive function deficit, can't process lists at 6 AM)
- Sleep-deprived users (prefrontal cortex impaired, same functional result)
- Self-blamers (anxiety triggered by seeing a list they might fail)
- Repeat failers (overwhelmed by complexity = "here we go again" quit trigger)
- Routine seekers (seeing 5 tasks when you can barely do 1 = discouraging)
- Everyone at 6 AM (sleep inertia makes everyone functionally ADHD for 15-70 minutes)

**Who prefers list view:**
- Optimizers (want to see the full plan)
- Some experienced users after Week 2+ (earned confidence)

**The math:** 8 out of 10 user types benefit from single-task mode. 1-2 types prefer lists. The default should serve the majority.

### The Proposal

**Week 1 (all users):** Single-task mode is the DEFAULT for morning routine. Not toggleable. Not "ADHD mode." Just how the app works. Every user gets one task at a time, with the next task appearing after completion. This is the core experience.

**Week 2+ (all users):** A toggle appears in Settings > Morning > Display: "Show all tasks" vs "One at a time." The toggle defaults to "One at a time." Users who want the list opt IN.

**ADHD mode enhancements (on top of single-task default):**
- Even larger timer text (time blindness compensation)
- No "just" language anywhere (already applied to all copy, but extra audit for ADHD)
- Score context: "65 against the hardest difficulty" (conditional text)
- Physical-only missions (no math missions even when they ship in V1.1)
- Hyperfocus-aware night prompts
- Externalization tips in notifications

**What this means:** "ADHD mode" becomes an enhancement layer, not a separate experience. The base app already serves ADHD users. ADHD mode adds ADHD-SPECIFIC features on top. Single-task display is not an ADHD feature — it's a HUMAN feature for impaired-cognition moments.

### Implementation

1. Remove "single-task display" from the ADHD feature list
2. Make single-task display the global default for Morning Mode
3. Add "Show all tasks" toggle in Settings > Morning (Week 2+, post onboarding)
4. ADHD mode toggle still exists, but it controls: enhanced timers, mission filter, score context, copy variants, and night prompts — not the task display mode
5. Onboarding "existing routine" question routes to: single-task (progressive builder) vs single-task (full builder but displayed one at a time) — NOT single-task vs list

---

## 8. Onboarding Cognitive Load Strategy

### The Problem

Onboarding has 10 features. At 1 screen per feature, that's 10 screens. Research shows:
- 74% abandon if onboarding feels high-friction
- Optimal onboarding: 3-5 screens (NUX benchmarks)
- But we NEED the chronotype quiz (7 questions) to power the product

### The Solution: Three Acts, Not Ten Steps

**Act 1: Discovery (4 screens, 90 seconds)**
The chronotype quiz — but it doesn't feel like a quiz.

Screen 1: "If nothing woke you tomorrow, when would you wake up?" [slider]
Screen 2: "When do you feel sharpest?" [3 options: morning / afternoon / evening]
Screen 3: "How do you feel 30 min after waking?" [3 options: zombie / groggy / fine]
Screen 4: "What time would you naturally fall asleep?" [slider]

The remaining 3 rMEQ questions are derived from these answers or asked inline. The user experiences 4 simple questions, not a 7-question clinical assessment.

**Design:** No progress bar. No "question 2 of 4." Each screen has one question and a hand-drawn or minimal illustration that makes the question feel personal, not clinical. Transitions are smooth slides. The whole thing feels like a conversation.

**Act 2: The Reveal (2 screens, 30 seconds)**

Screen 5: Chronotype reveal + social jet lag visualization. THE moment. Dramatic.
Screen 6: Reframe. Conditional content:
- Self-Blamers: "That's not laziness. That's biology."
- Repeat Failers: "Alarmy didn't know this. We do."
- ADHD: "ADHD amplifies this. 80% of ADHD adults have sleep issues."
- Default: "69% of people have this mismatch."

**Design:** These screens are EMOTIONAL, not informational. Big type. Minimal text. A pause before content appears (150-300ms) to create weight. The user should feel something, not learn something.

**Act 3: Setup (2 screens, 60 seconds)**

Screen 7: Combined setup screen:
- Wake time (pre-filled from chronotype, editable)
- Mission type (Photo default, Shake alternative — 2 options only)
- Tone: "How should we talk to you?" (3 options: Tough / Balanced / Encouraging)

Screen 8: Confirmation. "You're set. First alarm: [time]. First bedtime: [time]. We'll be here tonight."

**Total: 8 screens.** User experiences it as three acts: "I answered some questions, learned I'm a Wolf, and set my alarm." Three things.

### What Moves OUT of Onboarding

These features are listed as "onboarding" but can be discovered later:

| Feature | Where It Moves | When User Encounters It |
|---------|---------------|------------------------|
| ADHD acknowledgment question | Embedded in quiz Act 1 as: "Does focusing feel harder than it should?" If yes, ADHD mode silently activates. No separate screen. | During quiz, invisible as a "feature" |
| Existing routine question | Embedded in setup: "Morning routine: start simple (1 task) / I already have one (add all)" — two buttons on the setup screen, not a separate screen | Setup screen, one choice within the page |
| Bedtime calculator | Auto-calculated and shown on confirmation screen. Not a separate step. | Confirmation: "Bedtime: 11 PM" |
| Smart alarm with chronotype context | The chronotype context IS the setup screen. Not separate. | Setup screen |

### The Minimum Before First Alarm

Absolute minimum to get to a set alarm:
1. Chronotype quiz (4 screens)
2. Reveal (1 screen)
3. Set alarm time + choose mission (1 screen)

**That's 6 screens.** The reframe and confirmation are nice-to-have. If someone rushes, they can set an alarm in 6 taps. The tone calibration and routine question can default to Balanced and Progressive, asked later during the first evening check-in.

### Making the Quiz Feel Like a Conversation

| Clinical Framing (avoid) | Conversational Framing (use) |
|--------------------------|------------------------------|
| "Select your preferred sleep onset time" | "If you could fall asleep whenever you wanted tonight, when would it be?" |
| "Rate your morning alertness on a scale of 1-5" | "30 min after waking, are you: a zombie, kinda foggy, or actually human?" |
| "What is your chronotype?" | "Let's find out what your body is actually built for." |
| "Question 3 of 7" | [no indicator — just the next question] |
| "Questionnaire complete. Processing results." | "Analyzing your biological clock..." [brief animation] |

---

## 9. Anti-Overwhelm Patterns

Specific UX patterns to deploy across the app:

### Pattern 1: Tooltip Dots
Three small dots (or a subtle "i" icon) next to any data point that has a deeper explanation.
- Never forced — user must tap to see
- Appears next to: score components, chronotype data, timer durations
- Tooltip content: 1-2 sentences maximum
- Disappears on tap-away

```
Wake consistency  22/30  ███▓  ⓘ
                                ┌────────────────────────┐
                                │ Based on how close your │
                                │ wake time matches your  │
                                │ target. ±15 min = full  │
                                │ points.                 │
                                └────────────────────────┘
```

### Pattern 2: "Learn More" Expandables
Used for science content that adds depth without cluttering the surface.
- Collapsed by default (always)
- Chevron (▸) indicates expandability
- Expanded content: 2-3 sentences max
- Used in: score breakdown, chronotype profile, settings descriptions

### Pattern 3: Contextual Help (Ghost Tips)
Short helper text that appears ONLY when the user seems stuck. Disappears after use.
- Triggers: user stares at screen for >5 seconds, user taps random areas, user returns to same screen 3+ times
- Content: "Tap the big button to [action]" or "Swipe to see more"
- Style: translucent overlay, disappears on any tap
- Max frequency: 1 ghost tip per session

### Pattern 4: Celebration Screens (Dopamine Breaks)
Brief celebration screens that interrupt complexity with reward.
- Used at: streak milestones (Day 3, 7, 14, 21, 30, 66), trial conversion success, first perfect night
- Duration: 2-3 seconds of animation + dismiss
- Content: Big number or emoji + one Dare Engine line
- Purpose: emotional reset between complex interactions

```
┌─────────────────────────────────┐
│                                 │
│                                 │
│            🔥                    │
│                                 │
│        14 DAYS                  │
│                                 │
│  "Two weeks. Most quit here.   │
│   You didn't. Respect."        │
│                                 │
│                                 │
│        [tap to continue]        │
│                                 │
└─────────────────────────────────┘
```

### Pattern 5: Empty States That Guide
When a feature area has no data, show guidance instead of blank space.
- Score breakdown before Day 1: "Complete tonight's bedtime and tomorrow's alarm to see your breakdown."
- Weekly summary before Day 7: "Your first weekly summary arrives after 7 days."
- Streak milestones before Day 3: "Next milestone: Day 3. Most people quit here."
- Never show a blank screen with just a title

### Pattern 6: Smart Defaults (Never Ask What You Know)
Every setting that can be derived from quiz data is pre-filled.

| Setting | Derived From | Default |
|---------|-------------|---------|
| Wake time | Chronotype + stated obligation time | Quiz answer or chronotype suggestion |
| Bedtime | Wake time - sleep need (7-8h based on age) | Auto-calculated |
| Mission type | Default | Photo (most effective, most physical) |
| Mission difficulty | Chronotype gap (biology vs chosen wake time) | Auto-calibrated |
| Morning routine | Progressive/full based on routine question | 1 task (progressive) or user's stated habits |
| Notification timing | Bedtime - 30 min for pre-warning | Auto-calculated |
| ADHD mode | Quiz response to focus question | On/off based on answer |
| Tone | Onboarding choice | Balanced (if skipped) |

### Pattern 7: Chunking (Grouped Information)
Related data is always grouped under a clear heading. Never show a flat list of unrelated items.

**Anti-pattern:** Settings as a flat list of 20 items
**Correct:** Settings grouped into 6 categories, each with 2-4 items, with visual separator lines

### Pattern 8: Progressive Loading
When a screen has both immediate and delayed content, show the immediate content instantly and load the delayed content with a subtle skeleton screen.
- Dashboard: score appears instantly. Breakdown loads on tap.
- Weekly summary: headline stats appear instantly. Charts/trends load on scroll.
- Never show a full-screen loading spinner. Always show SOMETHING immediately.

---

## 10. Competitor Mistakes to Avoid

### Alarmy: Settings Overwhelm
**What they do wrong:** Alarmy's settings screen has 30+ options visible at once. Mission types, backup alarms, volume controls, dismiss methods, repeat schedules, labels, tones — all on one scrollable page. A new user opening Alarmy's settings feels like opening a jet cockpit.

**Our rule:** Settings are grouped. No more than 15 rows on the main settings screen. Each row taps to a focused detail screen. Users never see all alarm configuration options at once.

### Fabulous: Onboarding Lecture
**What they do wrong:** Fabulous has 12+ onboarding screens that "educate" the user about habits, motivation, and science before letting them DO anything. By screen 8, users feel lectured, not empowered. The app positions itself as a teacher, and the user as a student who hasn't earned the right to use the app yet.

**Our rule:** Onboarding is a CONVERSATION, not a lecture. The quiz is discovery. The reveal is an emotional moment. Setup is fast. Total onboarding: under 3 minutes. Science education happens AFTER the user has experienced the product (morning micro-learning, "Why?" expandables), never before.

### RISE: Medical Dashboard
**What they do wrong:** RISE shows sleep debt calculations, circadian rhythm charts, melatonin window estimates, and energy level predictions all on a single scrollable home screen. The information is accurate but overwhelming. It feels like a doctor's patient portal, not an app you want to open at 6 AM.

**Our rule:** The home screen has ONE number: Life Score. Everything else is expandable or on secondary screens. The app feels like a game, not a medical device. Data exists for users who want it (Optimizers, Science Curious) but is never the default surface.

### Headspace: Slow Progression Frustration
**What they do wrong:** Headspace locks content behind a strict progression system. Users who want Session 5 must complete Sessions 1-4 even if they're already experienced meditators. This respects progressive disclosure but creates frustration and condescension for experienced users.

**Our rule:** Progressive disclosure applies to FEATURE VISIBILITY, not access. The progressive routine builder gates how many habits are visible — but Optimizers who answered "I have a routine" bypass gating entirely. The app never condescends to experienced users. Progressive disclosure is about what you SEE, not what you're ALLOWED to do.

### Generic Sleep Apps: Feature Dump Home Screen
**What many do wrong:** Show a home screen with: sleep score, sleep stages chart, heart rate graph, snoring detection, smart alarm settings, sleep sounds library, sleep stories, tips feed, and community tab — all visible at once.

**Our rule:** Home screen = 1 number + 1 streak + 2 times (alarm, bedtime). Everything else is behind a tap. The app earns the right to show complexity by proving it deserves attention during the simple phase first.

---

## 11. The Cognitive Load Budget

Every screen and touchpoint gets a "budget" — a hard limit on cognitive demand that cannot be exceeded.

### Screen Budgets

| Screen | Actions | Choices | Max Words | Tappable Elements | Colors |
|--------|---------|---------|-----------|-------------------|--------|
| **Alarm (ringing)** | 1 | 0 | 25 | 2 (mission + snooze) | 2 |
| **Morning task (single)** | 1 | 0 | 10 | 1 (done button) | 2 |
| **Morning task (list)** | 1 | 0 | 30 (all tasks) | 1 active + dimmed list | 3 |
| **Night Mode (in-app)** | 1 | 0 | 15 | 1 (put phone down) | 2 (dark) |
| **Onboarding question** | 1 | 1 (the answer) | 20 | 2-3 (answer options + next) | 2 |
| **Chronotype reveal** | 0 (absorb) | 0 | 30 | 1 (continue) | 3 |
| **Alarm setup** | 1 (set) | 2 (time, mission) | 25 | 3 (time, mission, set) | 3 |
| **Dashboard** | 0 (status) | 0 | 15 | 3 (breakdown, settings, profile) | 3 |
| **Score breakdown** | 0 (absorb) | 0 | 40 | 2 (expand night, expand tips) | 4 |
| **Paywall** | 1 (subscribe) | 1 (not now) | 40 | 2 (subscribe + dismiss) | 3 |
| **Settings (main)** | 0 (browse) | N/A | 50 | 12-15 (setting rows) | 2 |
| **Settings (detail)** | 1 (change) | 1 (the setting) | 20 | 2-3 (options + back) | 2 |
| **Celebration** | 0 (absorb) | 0 | 12 | 1 (dismiss) | 3 |
| **Weekly summary** | 0 (absorb) | 0 | 50 | 2 (expand sections) | 4 |

### Notification Budgets

| Notification | Max Words | Call-to-Action | Frequency Cap |
|-------------|-----------|----------------|---------------|
| Pre-bedtime | 12 | Implied (go to bed) | 1x/night |
| Bedtime enforcement | 10 | Implied (put phone down) | 3x/night max |
| Morning score | 10 | None (informational) | 1x/morning |
| Streak milestone | 12 | None (celebration) | At milestones only |
| Weekly summary | 15 | Implied (open app) | 1x/week |
| Evening check-in | 12 | Implied (prepare) | 1x/evening |
| Trial conversion | 12 | Implied (subscribe) | Day 5 + Day 6 only |
| ADHD externalization | 12 | 1 specific action | 1x/night (ADHD) |

### Daily Cognitive Load Budget

| Time Block | Max Notifications | Max In-App Decisions | Max Screens Navigated |
|-----------|-------------------|---------------------|----------------------|
| Night (pre-bed) | 1 | 0 | 0-1 |
| Night (past bed) | 1-3 (escalating) | 0 | 0-1 |
| Alarm | 0 | 0 | 1 (alarm screen) |
| Morning mode | 0 | 0 (tasks pre-assigned) | 1 (morning screen) |
| Post-morning | 1 (score) | 0 | 0-1 (dashboard optional) |
| Daytime | 0 | Unlimited (user-initiated) | Unlimited |
| Evening | 1 (check-in) | 0-1 (optional config) | 0-2 |

**Total daily app-initiated cognitive load:**
- Notifications: 3-5 per day (normal operation), up to 8 max (if staying up late)
- Decisions required by app: 0-1 per day (all tasks are pre-assigned, all settings are defaulted)
- Screens requiring action: 2 per day (alarm + morning mode)

Everything else is USER-INITIATED. The app demands almost nothing. It enforces two moments (wake up, go to bed) and otherwise stays silent.

---

## Summary: The Invisible 62

The entire framework serves one goal: **make 62 features feel like 5.**

| Phase | User Perceives | Reality |
|-------|---------------|---------|
| Day 1 | "Quiz, alarm, morning task, score, streak" = 5 things | 40+ features active |
| Day 3 | Add: "Night mode, Dare Engine personality" = 7 things | 45+ features active |
| Day 7 | Add: "Patterns, weekly data, paywall" = 10 things | 50+ features active |
| Week 4 | Add: "Full routine, settings depth, trends" = 15-20 things | All 62 features active |
| Month 2+ | "I know every corner of this app" | All 62 features discovered |

The user never encounters "the app." They encounter MOMENTS: a quiz that reveals something, an alarm that can't be cheated, a morning that's structured, a score that means something, a streak that would hurt to lose, and a voice that won't let them off easy.

The cognitive load framework doesn't reduce features. It sequences their discovery so that every feature arrives at the moment the user is ready for it, needs it, and can process it.

**The app is simple. The system behind it is not. That's the point.**
