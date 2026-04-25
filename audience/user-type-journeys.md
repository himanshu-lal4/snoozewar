# User Type Journeys — First 24 Hours for Every Audience Type

*Created: April 2026*
*Purpose: Maps the first 24-hour experience for each of the 10 user types who will find our app. Every feature in the product traces back to a specific user type's need at a specific moment.*

---

## The 10 Entry Doors

| # | Type | Who They Are | How They Find Us | What They Know | What They Don't Know |
|---|------|-------------|-----------------|---------------|---------------------|
| 1 | Alarm Seeker | Searched "alarm app heavy sleepers" | App Store search | Alarm apps, missions exist | Night problem, chronotype |
| 2 | Night Struggler | Doom-scrolls until 1 AM, saw RBP TikTok | TikTok revenge bedtime content | Their nights are the problem | It's connected to mornings |
| 3 | Clueless Sufferer | Always tired, doesn't know why | Ad: "69% wake up in wrong timezone" | Almost nothing — just that they're tired | Everything — chronotype, SJL, sleep inertia |
| 4 | Repeat Failer | Tried Alarmy, Fabulous, 3-5 others, all failed | Reddit: "has anyone found one that works?" | A lot — missions, streaks, habit trackers | WHY everything failed (the loop) |
| 5 | Routine Seeker | Watches morning routine TikToks, can't execute | #morningroutine content, YouTube | What a routine looks like | You can't paste a routine on chaotic sleep |
| 6 | Self-Blamer | Years of shame, "I'm lazy" identity | Ad: "You're not lazy. Body clock is wrong." | They fail every morning | Willpower is debunked, chronotype is genetic |
| 7 | Optimizer | Already wakes at 5:30, has a routine, wants data | ProductHunt, LinkedIn, IndieHackers | Everything about routines | Their exact chronotype, their gaps |
| 8 | ADHD Discoverer | ADHD + sleep chaos, nothing works for their brain | r/ADHD, TikTok ADHD sleep content | Something is different about their brain | 80% of ADHD adults have sleep disorders |
| 9 | Competitor | Friend showed them their score screenshot | Friend's text/share | Their friend uses it, there's a score | Anything about science (don't care yet) |
| 10 | Science Curious | Googled "chronotype" after Huberman podcast | Web chronotype quiz, SEO | Bits and pieces about circadian science | Their exact data, that knowledge alone doesn't fix it |

---

## Type 1: The Alarm Seeker

**Entry:** App Store search — "alarm app for heavy sleepers"
**Mindset:** "Let me set an alarm that I can't cheat."

| Moment | What They Expect | What We Give Them | Feature Needed |
|--------|-----------------|-------------------|----------------|
| Opens app | "Let me set an alarm" | Onboarding quiz first — short, engaging, not blocking | Chronotype quiz (fast, gamified) |
| Quiz result | Didn't expect this | "You're a Wolf. Your ideal wake time is 7:45 AM, not 6:00 AM. You're not lazy — you've been fighting your biology." | Chronotype detection + reframe screen |
| Sets alarm | "Let me pick my time" | App suggests time based on chronotype, lets them choose. "You picked 6:30. That's 1h15m before your biology wants. We'll help, but this will be harder." | Smart alarm setup with chronotype context |
| Goes to bed | Didn't expect app to do anything at night | Night Mode kicks in. "Bedtime in 30 min. Or are you planning to scroll until 1 AM again?" | Night Mode notification |
| Ignores bedtime | | Score preview drops. "You stayed up 47 min past your bedtime. Tomorrow's wake-up just got harder." | Bedtime tracking + score penalty |
| Alarm rings | "Can I cheat this?" | Full-screen takeover. Mission required. Can't dismiss, can't close app. | Alarm with missions |
| Completes mission | "OK I'm up" | "Day 1. Score: 64. You went to bed 47 min late, but you got up. Streak: 1." | Score reveal + streak start |
| Next 30 min | Expected app to stop here | Morning routine appears. Expiring digest. "Your morning disappears in 18 minutes. Move." | Morning mode |

**Convert moment:** Night Mode surprise — "wait, it does nights too?"
**Hook:** Score + streak + "this app knows something about me I didn't know"

---

## Type 2: The Night Struggler

**Entry:** TikTok about revenge bedtime procrastination
**Mindset:** "I can't stop scrolling at midnight. Help."

| Moment | What They Expect | What We Give Them | Feature Needed |
|--------|-----------------|-------------------|----------------|
| Opens app | "Help me stop scrolling" | Onboarding asks about NIGHT first — "What time do you want to be asleep?" before wake time | Onboarding: bedtime-first flow |
| Quiz result | Sleep tips | "You're a Wolf with 1h40m of social jet lag. Every weekday, your body thinks it's 5:20 AM when your alarm says 7:00 AM." | Social jet lag calculation + visualization |
| Sets bedtime | "OK 11 PM" | "Based on your chronotype and wake time, that gives you 7.5h — just enough. We'll hold you to it." | Smart bedtime calculator tied to chronotype + wake time |
| 10:30 PM | Expected gentle reminder | "30 minutes to bedtime. You've got time for one thing — not seven. Pick wisely." | Night Mode: pre-bedtime warning |
| 11:00 PM | Expected to ignore like Screen Time | Score ticks down in real time. "Every minute past 11 PM costs you. -2 and counting." | Night Mode: live score penalty |
| 11:20 PM, still scrolling | "I'll just ignore it" | "20 minutes stolen from tomorrow you. Score impact: -6. Your morning self is going to hate you." | Night Mode: escalating Dare Engine |
| Finally sleeps 11:35 PM | Guilt | "35 min late. Your alarm is set for 6:30 AM — that's 6h55m of sleep. This is going to hurt." | Sleep window calculation + morning preview |
| Alarm rings | Exhausted, knows why | "6h55m of sleep. You had 7h30m but donated 35 min to Instagram. Mission time." | Alarm connects night to morning |
| After mission | | "Score: 58. If you'd gone to bed on time, this would be 72. The night decides the morning." | Score breakdown: night vs morning contribution |

**Convert moment:** Score breakdown — seeing the night→morning math
**Hook:** Direct connection: "35 minutes of scrolling = 14 points off your score"

---

## Type 3: The Clueless Sufferer

**Entry:** Ad — "69% of people wake up in the wrong timezone"
**Mindset:** "I'm always tired and I don't know why."

| Moment | What They Expect | What We Give Them | Feature Needed |
|--------|-----------------|-------------------|----------------|
| Opens app | "Tell me what's wrong" | No feature dump. "Let's find out what's actually going on. 2 minutes." | Onboarding: discovery-first |
| Quiz Q1-3 | Generic questionnaire | "What time would you naturally fall asleep with NO obligations?" / "What time would you naturally wake?" / "What time do you ACTUALLY wake on weekdays?" | Chronotype quiz (rMEQ + uMCTQ hybrid) |
| Quiz Q4-5 | More questions | "When do you feel most alert?" / "How do you feel 30 min after waking?" — they recognize themselves | Quiz feels like a mirror |
| Processing | Spinner | "Analyzing your biological clock..." real computation of MSFsc, social jet lag, chronotype | Animated analysis screen |
| **The Reveal** | Tips or a score | Full screen: "You're a Wolf. Your body wants to sleep at 12:30 AM and wake at 8:15 AM. But you've been forcing 11 PM and 6:30 AM. That's 1h45m of social jet lag — every single day." Two clock circles that don't overlap. | Chronotype reveal + SJL visualization |
| Reframe | | "This isn't discipline. This isn't laziness. This is biology. 69% of people have this same mismatch." | Reframe screen — "you're not broken" |
| Solution | Tips | "Two options: move your biology closer to your schedule, or your schedule closer to your biology. Either way — we enforce it." | Solution framing screen |
| Setup | Now they understand WHY | Every setting has context. "Your ideal wake is 8:15 AM. You chose 6:30 — that's a 1h45m shift. Doable with the Shift Your Clock program." | Smart setup with chronotype context everywhere |
| First night | Curious | Night Mode feels designed for them because they now understand why bedtime matters | Night Mode with chronotype-aware messaging |
| First morning | Expecting grogginess | "Sleep inertia lasts 15-70 min. For Wolves waking 1h15m early, ~45 min. This is biology, not failure. Do the mission." | Sleep inertia education during morning mode |
| After Day 1 | | "Score: 61. Night: -8 (25 min late). Wake: +15 (mission done). Streak: +5 (Day 1)." | Score breakdown with educational framing |

**Convert moment:** "I'm a Wolf" — the identity moment
**Hook:** Chronotype identity — they'll tell friends, Google it, share the result

---

## Type 4: The Repeat Failer

**Entry:** Reddit — "has anyone found an app that actually works?"
**Mindset:** "I've tried everything. Skeptical. Trust is broken."

| Moment | What They Expect | What We Give Them | Feature Needed |
|--------|-----------------|-------------------|----------------|
| Opens app | "Here we go again" | "You've tried to fix your mornings before. Let us guess how it went." | Onboarding: acknowledgment-first |
| The mirror | Skepticism | "You downloaded an alarm app. Worked 2 weeks. You figured out how to cheat it. Deleted it. Blamed yourself. Sound familiar?" | "We know your history" screen |
| They feel seen | Guard drops | "Every app solved one piece. Nobody fixed the LOOP. That's why nothing stuck." | Problem reframe: the loop visualization |
| Quiz | "Fine" | Same quiz — but now each answer lands differently because they have the framework | Chronotype quiz (different emotional context) |
| Reveal | "What's this gonna tell me?" | "You're a Bear with 52 min of social jet lag. Alarmy didn't know this about you. It's not that it failed you — it didn't know." | Chronotype reveal + reframe of past failures |
| Past failures | Didn't expect this | "Here's what went wrong: Alarmy forced you up but abandoned you 30 seconds later. Fabulous assumed you were awake and motivated. You weren't — prefrontal cortex was offline for 40 more minutes." | "Why everything else failed" screen |
| The promise | Rolling eyes | "We own the entire loop. Night. Wake. Morning. We never let go. Also — we'll roast you. You'll hate it. It works." | Value prop: what's different this time |
| Setup | Cautious hope | Familiar setup but Dare Engine throughout. "Math puzzle? Classic. You'll try to do it with eyes closed. We know." | Setup with personality |
| First night | "Let's see if Night Mode is real" | "11:14 PM. 14 min past bedtime. Your last app sent a 'gentle reminder.' We're not gentle. -4 points." | Night Mode enforcement |
| First morning | "Can I cheat?" | Hard to cheat — AND after mission, app doesn't disappear. "You're up. But 'up' isn't 'done.' 22 minutes until your routine expires." | Anti-cheat alarm + post-alarm morning mode |
| After Day 1 | Cautious | "Day 1 done. You've done Day 1 before. The question is Day 14. We'll be here. Will you?" | Evening check-in addressing their pattern |

**Convert moment:** Surviving Day 15 — past their wall
**Hook:** "Why everything else failed" + "Day 15 — you've never made it this far. Don't blow it."

---

## Type 5: The Routine Seeker

**Entry:** #morningroutine TikTok / YouTube "how to build a morning routine"
**Mindset:** "I want a morning routine but I have no idea how to start."

| Moment | What They Expect | What We Give Them | Feature Needed |
|--------|-----------------|-------------------|----------------|
| Opens app | "Give me a routine template" | "Before we build your routine, let's figure out when your body wants to wake up. A routine at the wrong time dies in a week." | Onboarding: redirect to foundation first |
| Quiz | "Why sleep questions?" | Each question connects sleep to routines. "How do you feel 30 min after waking?" — that's the routine window | Chronotype quiz with routine framing |
| Reveal | Morning tips | "You're a Dolphin. Peak alertness: 8:30 AM. Your morning routine window: 6:45-7:30. YOUR window. Not a TikTok influencer's." | Reveal focused on routine timing |
| "Now can I build it?" | List of 15 habits | "One habit. That's how we start. Not five. Not the full TikTok routine. One action, every morning, for 7 days." Options: get up immediately / drink water / 2 min sunlight / 5 min stretch | Routine builder: forced simplicity — ONE habit |
| Pushback | | "Average person who starts with 5+ habits quits in 3 days. One habit, adding one per week = still going at Day 90. Trust the process." | Education: why one works (66-day research) |
| Sets one habit | "Too simple" | "Week 1 routine: Wake → Mission → Drink water. That's it. Nail this, we add the next one Day 8." | Week 1 routine assignment |
| First night | Didn't expect night involvement | "Tomorrow's routine: Wake → Mission → Water. Bedtime in 20 min. Get the sleep so you can actually do it." | Night Mode connecting bedtime to routine |
| First morning | Mission done | "Now: drink water. 10 minutes before this task expires." One thing, timed. | Morning routine: single task, countdown, expires |
| Drinks water | "That's it?" | "Day 1 complete. Routine completion: 100%. One thing perfectly > five things for three days." | Completion celebration + context |
| Day 7 | 7 days of water | "7 days. 100% consistency. Ready for habit #2? You earned it." Pick one: sunlight / stretch / journal | Progressive routine builder: unlock after streak |
| Day 14 | Two habits, consistent | "14 days. Two habits. More than 82% who tried. Habit #3 at Day 21." | Progressive unlocking tied to consistency |
| Day 30 | 3-4 habits, in control | Full routine — built brick by brick, each earned through consistency | Fully formed personalized routine |

**Convert moment:** Unlocking Habit #3
**Hook:** Progressive unlock — "leveling up" feeling, prevents overload

**Progressive Routine Builder:**

| Week | Habits Active | Unlocked By |
|------|--------------|-------------|
| Week 1 | 1 habit (their pick) | Completing onboarding |
| Week 2 | 2 habits | 7-day streak |
| Week 3 | 3 habits | 14-day consistency |
| Week 4+ | Up to 5 habits | Earned through streaks |

---

## Type 6: The Self-Blamer

**Entry:** Ad — "You're not lazy. Your body clock is just wrong for your schedule."
**Mindset:** "What's wrong with me? I have no discipline."

| Moment | What They Expect | What We Give Them | Feature Needed |
|--------|-----------------|-------------------|----------------|
| Opens app | "Another app I'll fail at" | "This app will never call you lazy. Not because we're nice. Because laziness isn't real. What you're dealing with has a name, a cause, and a fix." | Onboarding: anti-shame opening |
| Quiz | Bracing for judgment | Framed as discovery, not diagnosis. "If nothing woke you up tomorrow, what time would your body wake?" — curiosity, not testing | Quiz: discovery framing |
| **The reveal** | "You need more discipline" | "You're a Wolf. Your biological clock runs 1-2 hours behind. This isn't a flaw — 25% of the population is wired this way. You've spent years fighting 351 gene variants. That's not laziness. That's biology." | Chronotype reveal: genetics-first, no judgment |
| Science beat | | "Willpower was debunked in 2016. 36 labs. 3,531 participants. The 'just try harder' advice was based on bad science." | Willpower debunk screen — with source |
| Normalization | Didn't expect relief | "69% of people have the same mismatch. It's called social jet lag. You're not in a small broken minority." | Social jet lag normalization |
| Permission | | "Stop punishing yourself. Every time you fail, this app tells you WHY — not blames you. 'You went to bed 40 min late' is a fact. 'You're lazy' is a lie. We deal in facts." | App promises no shame |
| Sets alarm | First time without dread | Suggested time is chronotype-aligned. "Based on your biology, 7:30 AM. Not 5 AM. Not what LinkedIn said. Yours." | Chronotype-aligned alarm suggestion |
| First night | | Tone is direct but never cruel. "Bedtime in 20 min. Tomorrow's score starts now. You've got this — and if you don't, we'll tell you exactly what went wrong. No guilt. Just data." | Dare Engine: calibrated — direct, not shaming |
| Stays up 30 min late | Expecting self-hatred | "30 min past bedtime. Not a moral failure — a math problem. Score: -5. Tomorrow, try 15 min late instead of 30. Progress, not perfection." | Score penalty framed as math, not judgment |
| First morning | Gets up | "You got up. That's not nothing — that's everything. Day 1. Score: 63. Not a grade of you. A starting point for a system that takes 66 days to build." | Score as starting point, not grade |
| End of Day 1 | Waiting for shame | Never comes. "Day 1 done. Bed a little late. Woke up anyway. 63 is where most people start. Check in tonight." | Evening: warm, factual, forward-looking |

**Convert moment:** "I'm not lazy — I'm a Wolf with social jet lag"
**Hook:** Identity shift from "broken" to "biologically different"

**Dare Engine calibration for Self-Blamers:**

| Do This | Never This |
|---------|-----------|
| "30 minutes late. Math problem." | "Still in bed? Pathetic." |
| "Day 3. You're building something." | "Only Day 3? Most people are further." |
| "Score dropped. Here's exactly why." | "Score dropped. Try harder." |
| "Your choice. Your commitment." | "Everyone else is asleep. Why aren't you?" |
| "Progress, not perfection." | "No excuses." |

---

## Type 7: The Optimizer

**Entry:** ProductHunt / LinkedIn / IndieHackers
**Mindset:** "I already have a routine. Give me data and a score."

| Moment | What They Expect | What We Give Them | Feature Needed |
|--------|-----------------|-------------------|----------------|
| Opens app | "Show me the dashboard" | Chronotype quiz — framed as curiosity, not need | Quiz feels scientific, not casual |
| Reveal | "Tell me something I don't know" | "You're a Bear. You're waking at 5:30 AM — 1h15m BEFORE your biology. Your sleep inertia is longer than it needs to be." | Reveal that challenges assumptions |
| The surprise | Thought they had it figured out | "Your weekend sleep-in of 1.5h creates mini jet lag every Monday. Your Monday scores will always be worst." | Data revealing patterns they missed |
| Setup | Quick, no hand-holding | Full configuration access. Power user settings. No forced simplicity. | Full setup — no gating behind streaks |
| Routine builder | "Let me add all my habits" | Full access to add 5-7 habits from Day 1. They've proven consistency — no progressive gating. | Full builder for existing routine users |
| First night | | Validates what they already do. "On time. +8. Most people can't do this." | Night Mode: validating, not educational |
| First morning | Their routine, but scored | Every action tracked. "Score: 89. Top 4% of all users." | Morning routine scoring |
| **The number** | | 89 — not 100. "Breakdown: Wake +28/30. Routine +24/25. Streak +18/20. Chronotype alignment +12/15. Protocol +7/10. Gap: chronotype alignment — waking 1h15m early costs 3 points daily." | Detailed score breakdown with optimization targets |
| They screenshot | | Post on LinkedIn: "Day 1. Score 89. Apparently I wake up 1h15m too early for my chronotype." | Shareable score card |
| Day 7 | Hooked | "Score: 91. +2 from shifting weekend wake. Monday improved 82→88. Data doesn't lie." | Weekly insights: cause→effect |

**Convert moment:** The 89, not 100 — the gap they need to close
**Hook:** Score optimization + shareability

**Shareable Score Card:**
```
┌──────────────────────────┐
│  [APP LOGO]              │
│                          │
│  Life Score: 89          │
│  ████████████████████░░  │
│                          │
│  Streak: 23 days         │
│  Chronotype: Bear 🐻     │
│  Top 4% of users         │
│                          │
│  [QR code to download]   │
└──────────────────────────┘
```

---

## Type 8: The ADHD Discoverer

**Entry:** r/ADHD, TikTok ADHD sleep content
**Mindset:** "My brain won't let me sleep or wake on schedule. Nothing is built for me."

| Moment | What They Expect | What We Give Them | Feature Needed |
|--------|-----------------|-------------------|----------------|
| Opens app | "This won't work for me" | Early onboarding question: "Do you have ADHD or suspect you might?" Upfront, not an afterthought. | Onboarding: ADHD acknowledgment |
| Taps "Yes" | Generic response | "That changes how we work with you. ADHD brains have delayed circadian rhythms (73-78%), struggle with time perception, and need dopamine to initiate action. We know." | ADHD-aware mode activation |
| What changes | Nothing usually | Visible adjustments: shorter missions, visual countdown timers, no "just get up" language, score calibrated for their baseline | ADHD mode: transparent adjustments |
| Quiz | Same questions | Results weighted for ADHD. "You're a Wolf — with ADHD, your wolf tendencies are amplified. Natural sleep onset probably 1:30-2:00 AM." | Quiz: ADHD-adjusted scoring |
| Reveal | "My chronotype is extreme" | "Wolf with ADHD. Social jet lag: 2h15m. Every weekday, your brain runs 2 hours behind schedule. You're not failing. You're running a marathon with ankle weights nobody can see." | ADHD-specific reveal — validates the extreme |
| Normalization | Didn't expect understanding | "80% of ADHD adults have sleep disorders. 36% have DSPD. You're not a tiny minority — you're a massive underserved group every other app ignores." | ADHD sleep statistics |
| Sets alarm | | Honest gap: "Your biology wants 9 AM. Life needs 7 AM. We can shift ~1.5h. The remaining 30 min will be hard. We won't pretend it's easy." | Honest gap acknowledgment |
| First night | The hardest part | "Hyperfocus check: are you doom-scrolling or doing something you chose? There's a difference. If you chose it, set a timer. If the phone chose it, put it down." | Night Mode: hyperfocus-aware prompts |
| Keeps scrolling | | "11:32 PM. ADHD brains struggle with transitions — stopping one thing and starting another is genuinely harder for you. Not an excuse. Just a fact. -4. Try this: set a physical alarm across the room for bedtime tomorrow." | ADHD-specific advice: externalize transitions |
| First morning | Mission | Photo of bathroom sink. Simple motor action. Gets them moving. Minimal executive function demand. | ADHD missions: physical, low cognitive load |
| Morning mode | | ONE thing visible. Big timer. "Drink water. 3 minutes." Done → next appears immediately. Never a list. Never more than one task. | Single-task display with visual countdown |
| After Day 1 | | "3 tasks in 11 min. Score: 65. For a Wolf with ADHD waking 2h early, that's the hardest difficulty setting. You showed up." | ADHD-calibrated score context |
| Evening | | "Tomorrow's tip: put phone in another room at 10:30. Not because willpower. Because you shouldn't need it. Externalize the decision." | ADHD evening tips: externalization strategies |

**Convert moment:** Being understood for the first time
**Hook:** If it works for their ADHD brain, they become the most vocal advocates in every ADHD community

**ADHD Mode adjustments:**

| Feature | Why ADHD Needs It |
|---------|------------------|
| Single-task display | Can't process lists at 6 AM |
| Visual countdown timers | Time blindness — need to SEE time |
| Physical missions over cognitive | Motor actions bypass executive function deficit |
| Externalization tips | Environment design > willpower |
| No "just" language | "Just" implies simplicity. Triggers shame. |
| Score context | "65 against hardest difficulty" vs raw 65 |
| Hyperfocus-aware night mode | Distinguish intentional vs compulsive scrolling |
| Transition support | External bedtime alarms, not internal reminders |

---

## Type 9: The Competitor

**Entry:** Friend texted them a score screenshot
**Mindset:** "I can beat that."

| Moment | What They Expect | What We Give Them | Feature Needed |
|--------|-----------------|-------------------|----------------|
| Opens app | "How fast can I start competing?" | Quick onboarding. Quiz framed competitively: "Your friend is a Bear. Let's see what you are." | Onboarding: competitive framing |
| Quiz | Gets through fast | "You're a Wolf. Mornings are biologically harder for you than your Bear friend. Same score, harder difficulty. Respect." | Reveal: competitive context |
| Friend connection | "Where's the leaderboard?" | "Add friends." Simple code or contacts. Instantly see friend's score, streak, rank. | Friend system: add by code/contact |
| The gap | Friend: 84, Day 31. Them: 0, Day 0. | "Your friend: 84, streak 31. You: haven't started. The gap is 31 days of showing up." | Head-to-head comparison screen |
| Setup | Fast | Alarm, bedtime, one mission. Done. Speed matters. | Streamlined setup |
| First night | "Do I need this part?" | "Your friend's night score: +8. Yours: nothing yet. Night Mode starts in 15 min. Easy points." | Night Mode framed as competitive advantage |
| Beds on time | Not because of science | "On time. +8. Your friend averaged +6 this week. Already ahead on nights." | Night score with friend comparison |
| First morning | Mission, score | "Score: 71. Your friend's Day 1: 68. You're ahead. Don't get comfortable — they've had 31 days of practice." | Day 1 with friend's Day 1 comparison |
| Texts friend | | "Just got 71, you got 68 😏" — competition is live | Score easily shareable via text |
| Day 7, trial ends | | "7-day streak. Your friend has 31. You lose this, you lose 7 days of ground. Streak freeze: $0.99. Or just... don't fail." | Trial conversion via competitive loss aversion |

**Convert moment:** Beating friend's Day 1 score
**Hook:** As long as the friend is on the app, they're on the app

**Competitor features:**

| Feature | What It Does |
|---------|-------------|
| Friend leaderboard | Rank among friends by weekly score. 5-15 friends, not strangers. |
| Head-to-head | Direct comparison with one friend. Daily updates. |
| Friend's Day 1 comparison | New user feels competitive immediately |
| Streak race | Visual of whose streak is longer |
| Weekly challenge | Optional: "Who has better night score this week?" Loser gets roasted. |
| Share card | Score, streak, chronotype, rank, QR code |
| Friend invite reward | Friend survives 7 days → both get free streak freeze |

**Growth loop:**
```
Competitor joins → Beats friend → Screenshots score →
Sends to another friend → "Can you beat this?" →
New Competitor joins → Repeat
```

---

## Type 10: The Science Curious

**Entry:** Googled "what is my chronotype" after Huberman podcast → took our free web quiz
**Mindset:** "I want to understand the science. Knowledge first."

**Acquisition funnel (different from all other types):**
```
Huberman / TikTok / Google search
        ↓
Free web chronotype quiz (SEO play)
        ↓
Deep result they didn't expect
        ↓
"Want to fix this? There's an app."
        ↓
Download
```

| Moment | What They Expect | What We Give Them | Feature Needed |
|--------|-----------------|-------------------|----------------|
| Web quiz | "Which animal am I?" | Real rMEQ questions. "Same assessment used in peer-reviewed chronobiology research. 7 questions." | Free web chronotype quiz — legitimate |
| Web result | Cute label | Deep: "You're a Wolf. DLMO ~11:45 PM. Ideal sleep: 12:30-8:15 AM. Social jet lag: ~1h40m at typical 7 AM wake. Associated with: higher BMI, reduced morning cognition. Source: Roenneberg, n=55,000+." | Deep science result page with citations |
| Keeps reading | "Interesting" | "Understanding is step one. Doing something about it is step two. Options: shift your clock (up to 1.8-2.4h, 5 zeitgebers) or restructure schedule. Either way — consistency needs enforcement." | Web-to-app bridge: knowledge → action |
| Downloads app | "Show me science inside" | App recognizes them. "Welcome back, Wolf. We have your data. Let's set up." No re-quiz. | Web quiz → app data transfer |
| In-app | Expecting science dashboard | Full setup — but every screen has "Why?" link. "Alarm 7:15 AM — why?" → "Shifting 1h from ideal requires Burgess protocol: morning light + evening dim + timing. 7:15 achievable with enforcement." | "Why?" expandable science layer |
| Keeps tapping "Why?" | | Every feature has optional science. Bedtime "Why 11?" → "DLMO ~11:45. Initiating sleep 45 min before optimizes onset latency. Burgess et al." | Science layer: optional depth everywhere |
| Night Mode | | Science + personality. "11:15 PM. Melatonin peaked 30 min ago. Sleep onset window closing. -3 points." Not just "go to bed" — WHY, right now. | Dare Engine: science-infused copy variant |
| First morning | | Micro-learning: "Sleep inertia lasts 15-70 min. Yours ~40 min as a Wolf at 7:15. Photo mission reduced it by forcing motor cortex activation. That's why photo, not math." | Morning micro-learning: 1 fact per day |
| Day 7 | | "This week: avg sleep onset 11:22 PM — 23 min after DLMO. Each minute past DLMO = ~2 min onset latency. Net cost: ~46 min lying awake. Tightening bedtime by 15 min recovers ~30 min actual sleep." | Weekly science insights — personal data |
| They share | | Share the web quiz, not their score. "Find out your chronotype — this is the real test." Friends take it. | Shareable web quiz link |

**Convert moment:** Weekly science insight that reveals a personal pattern
**Hook:** Science layer tied to their OWN data — always personal, never repetitive

**Science Curious features:**

| Feature | What It Does |
|---------|-------------|
| Free web chronotype quiz | SEO acquisition. Real rMEQ. Deep results. Web-to-app bridge. |
| "Why?" expandable layer | Optional science on every setting. Never forced. |
| Science Dare Engine variant | Biology-informed personality copy |
| Morning micro-learning | 1 science fact per morning, tied to what they just did |
| Weekly science insights | Personal data → biological explanation |
| Web → app handoff | Quiz results transfer, no re-quiz |
| Shareable quiz link | Their share mechanic = the quiz itself |

---

## Onboarding Branching Logic

From this exercise, the onboarding needs to branch based on user type. Not 10 paths — but key questions that personalize the experience:

| Question | Branches |
|----------|---------|
| "Do you have ADHD or suspect you might?" | Yes → ADHD mode. No → standard. |
| "Do you currently have a morning routine?" | No → Progressive builder (gated). Yes → Full builder (unlocked). |
| "Have you used alarm or morning routine apps before?" | Yes → Repeat Failer path (acknowledgment). No → Discovery path. |
| "How hard should we push you?" | Tough love / Balanced / Encouraging → Dare Engine tone setting |
| "What brought you here?" (optional) | Alarm / Night scrolling / Tired all the time / Friend told me / Curious about chronotype → adjusts onboarding emphasis |

Same app. Same features. Different emotional journeys based on 3-5 branching questions.

---

## Summary: Every User Type's Unique Need

| # | Type | Entry Door | Convert Moment | Unique Feature Need |
|---|------|-----------|---------------|-------------------|
| 1 | Alarm Seeker | App Store search | Night Mode surprise | Uncheateable missions |
| 2 | Night Struggler | TikTok RBP content | Night→morning score math | Live score penalty |
| 3 | Clueless Sufferer | Ad: "69% wrong timezone" | "I'm a Wolf" identity | SJL visualization |
| 4 | Repeat Failer | Reddit recommendation | Surviving Day 15 | "Why others failed" screen |
| 5 | Routine Seeker | #morningroutine content | Unlocking Habit #3 | Progressive routine builder |
| 6 | Self-Blamer | Ad: "You're not lazy" | "I'm not lazy — I'm a Wolf" | Tone calibration |
| 7 | Optimizer | ProductHunt / LinkedIn | The 89, not 100 | Shareable score card + breakdown |
| 8 | ADHD Discoverer | r/ADHD / TikTok | Being understood | ADHD mode |
| 9 | Competitor | Friend's screenshot | Beating friend's Day 1 | Friend leaderboard + head-to-head |
| 10 | Science Curious | Web quiz / Huberman | Weekly science insights | "Why?" layer + web quiz |
