# Chronotype-Aware Onboarding: Complete Research
*Research Date: 2026-04-07*

---

## 1. The Reduced Morningness-Eveningness Questionnaire (rMEQ)

### Background
The rMEQ was developed by Adan & Almirall (1991) as a shortened version of the original 19-item Horne-Ostberg MEQ. It contains 5 items and takes ~2 minutes to complete. It is the most widely used short chronotype assessment in academic research, validated in 20+ languages.

### The Exact 5 Questions

**Q1 — Rising Time (Preferred Wake Time)**
"Approximately what time would you get up if you were entirely free to plan your day?"

| Answer | Score |
|--------|-------|
| 5:00 AM - 6:30 AM | 5 |
| 6:30 AM - 7:45 AM | 4 |
| 7:45 AM - 9:45 AM | 3 |
| 9:45 AM - 11:00 AM | 2 |
| 11:00 AM - 12:00 PM (noon) | 1 |

**Q2 — Morning Alertness**
"During the first half hour after you wake up in the morning, how do you feel?"

| Answer | Score |
|--------|-------|
| Very tired | 1 |
| Fairly tired | 2 |
| Fairly refreshed | 3 |
| Very refreshed | 4 |

**Q3 — Retiring Time (Preferred Bedtime)**
"At approximately what time in the evening do you feel tired, and, as a result, in need of sleep?"

| Answer | Score |
|--------|-------|
| 8:00 PM - 9:00 PM | 5 |
| 9:00 PM - 10:15 PM | 4 |
| 10:15 PM - 12:30 AM | 3 |
| 12:30 AM - 1:45 AM | 2 |
| 1:45 AM - 3:00 AM | 1 |

**Q4 — Peak Performance Time**
"At approximately what time of day do you usually feel your best?"

| Answer | Score |
|--------|-------|
| 5:00 AM - 8:00 AM | 5 |
| 8:00 AM - 10:00 AM | 4 |
| 10:00 AM - 5:00 PM | 3 |
| 5:00 PM - 10:00 PM | 2 |
| 10:00 PM - 5:00 AM | 1 |

**Q5 — Self-Assessment**
"Which one of these types do you consider yourself to be?"

| Answer | Score |
|--------|-------|
| Definitely a morning type | 6 |
| Rather more a morning type than an evening type | 4 |
| Rather more an evening type than a morning type | 2 |
| Definitely an evening type | 0 |

### Scoring System
- **Total score range: 4-25**
- Definitely Evening Type: 4-7
- Moderately Evening Type: 8-11
- Neither Type (Intermediate): 12-17
- Moderately Morning Type: 18-21
- Definitely Morning Type: 22-25

### Psychometric Properties
- Internal consistency: Cronbach's alpha = 0.64-0.72 (acceptable but not high)
- Test-retest reliability: r = 0.76
- Correlation with full MEQ: r = 0.89
- **Limitation:** Lower reliability than full MEQ; best for screening, not clinical diagnosis

### For Our App
The rMEQ is perfect for onboarding because:
- Only 5 questions = <2 minutes
- Validated in 20+ languages (matches our global-from-day-1 strategy)
- Can classify into 5 types which maps to both scientific categories and Breus animal model
- Score of 4-25 is simple enough to convert to a visual "chronotype dial"

---

## 2. Munich ChronoType Questionnaire (MCTQ) Core Questions

### Background
Developed by Roenneberg et al. (2000+). Unlike the rMEQ which asks about preferences, the MCTQ measures **actual sleep behavior** on work days vs. free days. The key metric is MSFsc (Midsleep on Free days, Sleep-corrected).

### Core Module Questions (stdMCTQ)

The standard MCTQ core module asks these questions separately for **Work Days** and **Free Days**:

#### Work Days Section:
1. "How many days per week do you work?" (number)
2. "I have to get up at ___ o'clock" (time)
3. "I need ___ minutes to fall asleep" (sleep latency)
4. "I go to bed at ___ o'clock" (bedtime — not sleep time)
5. "I am ready to fall asleep at ___ o'clock" (sleep onset)
6. "I wake up at ___ o'clock" (wake time)
7. "Do you use an alarm clock on work days?" (yes/no)
8. "After ___ minutes I get up" (sleep inertia duration)

#### Free Days Section:
1. "I go to bed at ___ o'clock"
2. "I am ready to fall asleep at ___ o'clock"
3. "I wake up at ___ o'clock"
4. "Do you use an alarm clock on free days?" (yes/no — critical question)
5. "After ___ minutes I get up"
6. "I need ___ minutes to fall asleep"

### Chronotype Calculation
```
MSF = Sleep Onset(free) + (Sleep Duration(free) / 2)
     = Midpoint of sleep on free days

MSFsc = MSF - (SD_free - SD_week) / 2
       = Sleep-corrected midpoint (removes oversleep debt)
       Only applied when SD_free > SD_week AND alarm not used on free days
```

**Chronotype = MSFsc** (expressed as clock time, e.g., 3:30 AM = earlier type, 6:00 AM = later type)

### Social Jet Lag Calculation
```
SJL = |MSF - MSW|
    = Absolute difference between free-day and work-day midsleep
```
- >1 hour = mild social jet lag
- >2 hours = severe (doubles diabetes risk per Roenneberg)

### The micro-MCTQ (uMCTQ) — Ultra-Short Version
Ghotbi et al. (2020) created a 6-question version:
1. Work days per week
2. Work day sleep onset time
3. Work day wake time
4. Free day sleep onset time
5. Free day wake time
6. Alarm use on free days (yes/no)

**Validation:** MSFsc from uMCTQ correlated r = 0.97 with full MCTQ. This is the version we should adapt.

### For Our App
The uMCTQ is ideal because:
- Only 6 questions that map to real behavior (not preferences)
- Produces the gold-standard MSFsc chronotype metric
- Also gives us social jet lag for free (key differentiator)
- Can be asked as time pickers rather than multiple choice = feels more natural
- After 7-14 days of passive detection, we can compare stated vs. actual behavior

---

## 3. How Apps Currently Do Chronotype Onboarding

### Oura Ring
- **Method:** Passive detection only. NO quiz or questionnaire.
- **Data needed:** 30+ long sleep periods (3h+) within 90 days, plus 30+ days of activity and temperature data
- **Timeline:** 40-90 days before chronotype appears in app
- **Categories:** 6 types (early morning, morning, late morning, early evening, evening, late evening)
- **Key feature:** "Body Clock" — a 24-hour clock face comparing optimal vs actual sleep
- **Limitation for us:** Requires a wearable. But the 90-day delay is instructive — it shows even hardware needs significant data.
- **Lesson:** The delayed reveal creates anticipation. Oura users have reported excitement when their chronotype finally appears.

### RISE Sleep App ($69.99/yr)
- **Onboarding:** 47-step quiz (~3 minutes)
- **Opening hook:** Reframes sleep as a "powerful tool for self-improvement" — drug metaphor
- **Scientific pop-ups:** During quiz, contextual pop-ups provide scientific context to reinforce authority
- **Key question types:** Sleep timing, wake timing, sleep debt estimation
- **Synthesis screen:** Shows "Synthesizing your insights..." with visible processing (operational transparency)
- **User control:** Users can manually adjust calculated "sleep need" — fosters partnership feeling
- **Core feature intro:** Energy timeline visualization showing peaks/dips throughout the day
- **Paywall:** Hard paywall after full quiz, 7-day free trial, $69.99/year. Apple Editors' Choice and Sleep Foundation endorsements as social proof.
- **Target:** Performance-oriented individuals (students, professionals, athletes)
- **Revenue strategy:** Long quiz = high psychological commitment = higher trial conversion

### BetterSleep
- **Chronotype quiz:** Short quiz accessible from Profile section
- **Categories:** 5 sleep animals (Chickadee, Rabbit, Chipmunk, Fox, Owl)
- **Approach:** Proprietary animal categories (different from Breus's 4 animals)
- **Integration:** Quiz results influence content recommendations
- **Limitation:** Chronotype is secondary feature, not core onboarding

### Sleep as Android
- **Method:** Passive detection from tracked sleep data
- **Metric:** Midsleep hour (midpoint of sleep period)
- **Classification:** Population-relative scale — 10 categories (Morning Lark 1-5, Night Owl 1-5)
- **Unique approach:** Compares against entire user population, not fixed thresholds
- **Social jet lag:** Compares weekend vs weekday sleep patterns
- **"Changelings":** Flags users whose chronotype shifts over time

### Dr. Michael Breus (thesleepdoctor.com)
- **Quiz:** 45-second, 5-question quiz
- **4 Animals:** Lion (15%), Bear (55%), Wolf (15%), Dolphin (10%)
- **Questions focus on:** Natural wake preference, energy peaks, sleep sensitivity, morning alertness
- **Key insight:** 55% of people are Bears (follow solar schedule) — most chronotype products ignore this majority
- **Widely referenced:** Many apps cite Breus without licensing

### Gap Analysis — What Nobody Does Well
1. **No app combines quiz + passive detection** in a progressive disclosure model
2. **No app communicates confidence levels** ("We're 60% sure you're a Wolf — let's track more to confirm")
3. **No app shows chronotype CHANGING over time** as a feature (only Sleep as Android flags "changelings")
4. **No app uses chronotype to adjust alarm difficulty** (a night owl at 6 AM needs harder missions than a lark)
5. **No app frames social jet lag as the villain** — they all focus on "what type are you" not "how misaligned is your life"

---

## 4. Passive Sleep/Chronotype Detection from Smartphones

### What Specific Data Points Are Needed

Based on the research literature, here are the exact data points ranked by importance:

#### Tier 1 — Essential (High Signal, Low Battery)
| Data Point | What It Measures | Accuracy Contribution |
|-----------|------------------|----------------------|
| **Screen on/off timestamps** | Sleep onset and offset proxy | R² = 0.84-0.90 vs actigraphy |
| **First/last touch timestamps** | Wake time and bedtime markers | Core chronotype signal |
| **App usage gaps** | Sleep period = longest continuous gap >2h | 90.4% overlap with self-report |
| **Phone charging events** | Night behavior proxy (most charge while sleeping) | Supporting signal |

#### Tier 2 — Valuable (Moderate Signal, Low-Medium Battery)
| Data Point | What It Measures | Accuracy Contribution |
|-----------|------------------|----------------------|
| **Accelerometer (periodic)** | Movement/stillness periods | Used in 25/50 studies |
| **Light sensor readings** | Ambient light = room darkness | Used in 10/50 studies |
| **Alarm set/dismissed times** | Intended vs actual wake time | Direct chronotype signal |
| **Notification interaction times** | Activity patterns throughout day | Circadian rhythm proxy |

#### Tier 3 — Nice-to-Have (Lower Signal or Higher Battery)
| Data Point | What It Measures | Note |
|-----------|------------------|------|
| **GPS/location** | Home vs. away detection | High battery, privacy concern |
| **Microphone (ambient)** | Snoring, noise levels | Major privacy concern |
| **Step count (pedometer)** | Activity levels | Available via HealthKit/Google Fit |
| **Heart rate** | Requires wearable | Not phone-only |

### Key Research Studies

#### Lin et al. (2019) — "Digital Chronotype"
- **Published:** Journal of Psychiatric Research, March 2019
- **App:** "Rhythm" — custom Android app
- **Participants:** 28 college students, 30 days each
- **Data collected:** Screen on/off timestamps, proactive vs reactive use distinction
- **Key innovation:** Separated proactive screen-ons (user-initiated) from reactive (notification-triggered) — only proactive used for sleep detection
- **Accuracy:** r = 0.87 correlation for midsleep; 90.4% sleep time overlap ratio
- **Battery impact:** <1% additional drain
- **Key finding:** Bedtime smartphone use delayed digital chronotype by delaying sleep onset and reducing total sleep time

#### Abdullah et al. (2018) — Smartphone Context Data for Chronotype
- **Published:** Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies
- **Method:** Used distance traveled, phone usage patterns, ambient light to predict circadian rhythm scores
- **Compared against:** Social Rhythm Metric survey
- **Key finding:** Smartphone passive sensing can predict circadian patterns comparable to questionnaire-based methods

#### Ciman & Wac (2019) — Touchscreen Tappigraphy
- **Published:** npj Digital Medicine (Nature)
- **Participants:** 79 individuals, ~1,400 nights total
- **Method:** Touchscreen timestamps -> 60-second binary bins -> cosinor analysis -> 6-hour circadian rest phase detection
- **Accuracy vs actigraphy:**
  - Sleep onset: R² = 0.84
  - Wake time: R² = 0.90
  - Sleep duration: R² = 0.28 (underestimates — key limitation)
- **Key limitation:** Works only on Android (touchscreen event logging not available on iOS in same way)

### iOS vs Android: Permissions & Capabilities

#### iOS
| Capability | Permission | API | Notes |
|-----------|-----------|-----|-------|
| HealthKit sleep data | Per-type explicit consent | `HKCategoryValueSleepAnalysis` | Can read sleep stages (Core, Deep, REM, Awake) if Apple Watch present |
| Screen Time data | **NOT available** to third-party apps | N/A | Apple does not expose Screen Time API to developers |
| Background processing | Background App Refresh + `BGTaskScheduler` | Limited | HealthKit background delivery only reliable when charging |
| Motion & Fitness | `NSMotionUsageDescription` | Core Motion | Steps, activity type; auto-pauses in background |
| Alarm data | **NOT available** | N/A | Apple Clock app data is siloed |
| Device lock/unlock | **NOT available** | N/A | iOS does not expose this to apps |

**iOS is severely limited for passive detection.** The best approach on iOS:
1. Read HealthKit sleep data (if Apple Watch or iPhone sleep tracking enabled)
2. Use `BGTaskScheduler` for periodic check-ins
3. Ask users to set alarms WITHIN our app (gives us alarm + dismiss timestamps)
4. Use app open/close timestamps as proxy for screen on/off
5. Request notification interaction data

#### Android
| Capability | Permission | API | Notes |
|-----------|-----------|-----|-------|
| Sleep detection | `ACTIVITY_RECOGNITION` | Sleep API (Google Play Services) | Battery-efficient, on-device AI |
| Screen on/off | `ACTION_SCREEN_ON/OFF` broadcast | BroadcastReceiver | Works in background |
| Phone usage stats | `PACKAGE_USAGE_STATS` | UsageStatsManager | Requires Settings toggle |
| Accelerometer | No permission needed | SensorManager | Background access limited post-Android 12 |
| Light sensor | No permission needed | SensorManager | Same background limitations |
| Alarm data | From our own alarm | AlarmManager | We control this data |

**Android is much better for passive detection.** Key approach:
1. Register for `SCREEN_ON`/`SCREEN_OFF` broadcasts
2. Use Google Sleep API for battery-efficient sleep detection
3. Track our own alarm set/dismiss/snooze timestamps
4. Optional: UsageStats for phone usage patterns (requires explicit Settings toggle)

### Battery Impact
- **Screen on/off logging:** Negligible (<0.1%)
- **Google Sleep API:** Negligible (centralized processing)
- **Periodic accelerometer sampling (every 5 min):** ~1-2% per day
- **Continuous accelerometer:** ~5-8% per day (not recommended)
- **GPS tracking:** ~5-15% per day (not recommended)
- **HealthKit background delivery:** Negligible but unreliable (triggers when charging)

### Privacy Architecture — On-Device Processing

**Yes, this can and should be done entirely on-device:**

1. **All sensor data stays on phone** — screen timestamps, accelerometer readings, etc.
2. **Chronotype calculation runs locally** — MSFsc is simple arithmetic
3. **Only send to server:** Final chronotype score, social jet lag value, confidence level
4. **Never send:** Raw timestamps, app usage data, location data
5. **User controls:** Clear opt-in, visible data collection indicator, export/delete capability

**Privacy-preserving design:**
- Display "Your data never leaves your phone" prominently
- Use on-device ML for sleep detection (TensorFlow Lite / Core ML)
- Encrypt any local storage
- GDPR/CCPA compliant by design — no raw behavioral data transmitted
- Apple's HealthKit already enforces encryption-at-rest

---

## 5. Making Medical Questionnaires Feel Like Engaging Onboarding

### Proven Patterns from Top Apps

#### Pattern 1: Noom's "World's Longest Onboarding" ($750M/yr revenue)
- **96+ screens** in onboarding flow
- **Key techniques:**
  - **Ipsative sliders:** "Drag toward the statement you agree with more" — forces engagement, prevents neutral
  - **Dynamic branching:** Questions adapt based on previous answers — feels personalized
  - **Operational transparency:** "Analyzing your profile..." loading screens with visible work (Buell & Norton research)
  - **Social proof breaks:** Stats like "We've helped 3,627,436 people" inserted between question blocks
  - **Behavioral profile reveal:** "Your eating psychology type is..." — personality label creates identity
  - **Timeline projection:** "We predict you'll reach [goal] by [date]" after minimal input = commitment
  - **Empathetic framing:** For sensitive questions: "Thanks for sharing. This is an important and hard step."
  - **Varied question formats:** Sliders, multiple choice, time pickers, binary toggles — combat visual fatigue
  - **Progress bar psychology:** Minimal visual progress despite many questions = urgency to finish
  - **Countdown timer on paywall** after personalized plan reveal

#### Pattern 2: RISE Sleep App's "Scientific Authority"
- **47-step quiz** (3 minutes)
- **Key techniques:**
  - Opens with reframing: Sleep as "drug" / "powerful tool" — not boring health topic
  - Scientific pop-ups mid-quiz reinforce authority
  - "Synthesizing insights..." screen (operational transparency)
  - User can adjust "sleep need" = partnership, not prescription
  - Energy timeline visualization = immediate tangible value
  - Hard paywall after full investment = high conversion

#### Pattern 3: Calm's "Goal-First" Approach
- **Key techniques:**
  - First screen: "What brings you to Calm?" with benefit options (not feature options)
  - Options framed as outcomes: "Reduce stress", "Better sleep", "Increase happiness"
  - Experience level question: "How comfortable are you with meditation?" — no judgment
  - Immediate content recommendation based on answers
  - Tooltip-guided first session to prevent overwhelm

#### Pattern 4: Headspace's "Emotion-Driven Design"
- **Key techniques:**
  - Animated breathing exercise IN the onboarding = value before signup
  - Warm, illustrated characters throughout
  - Streaks and badges from session #1
  - Progress celebration at micro-milestones

#### Pattern 5: Hinge's "Prompt-Based Personality"
- **Key techniques:**
  - Prompts feel like conversation starters, not form fields
  - "Two truths and a lie", "Unusual skills" — playful identity expression
  - Visual + text hybrid questions (short attention span accommodation)
  - Low-anxiety interaction design (likes feel like "comments", not commitment)

#### Pattern 6: Flo's Clinical-to-Casual Bridge
- **Key techniques:**
  - Period tracking (clinical data) presented through friendly illustrations
  - Medical terminology replaced with casual language
  - Predictions framed as "insights" not "diagnoses"
  - Scientifically validated but never feels clinical

### Design Rules for Our Chronotype Quiz

Based on all research, here are the rules:

1. **Never say "questionnaire" or "assessment"** — call it "Your Sleep DNA" or "Sleep Profile"
2. **Lead with the payoff** — "In 90 seconds, we'll know your ideal wake time" (not "answer 5 questions")
3. **Use time pickers, not multiple choice** — for sleep/wake times, a scrolling time picker feels personal, not clinical
4. **Add personality labels early** — After Q2-3, show partial result: "Looking like a Wolf so far..."
5. **Explain why each question matters** — Small text under each: "This tells us about your cortisol peak"
6. **Use operational transparency** — After last question, show "Calculating your chronotype..." with animated processing
7. **Vary interaction types** — Time picker, slider, single tap, illustration selection
8. **Insert micro-education** — "Fun fact: Only 15% of people are true early birds" between questions
9. **Frame the result as identity** — "You're a Wolf. Here's what that means for you."
10. **Show social proof in results** — "You're in the 23% of our users who are Wolves"

---

## 6. Progressive Disclosure of Chronotype Insights

### What's the Minimum Data for Each Confidence Level?

| Confidence Level | Data Source | Time Required | Accuracy |
|-----------------|------------|---------------|----------|
| **Rough estimate (50-60%)** | rMEQ quiz only (5 questions) | 90 seconds | rMEQ-full MEQ correlation r=0.89, but individual accuracy ~60-70% |
| **Good estimate (70-80%)** | Quiz + 3-5 nights of passive data | 3-5 days | Screen on/off + alarm data, confirmed against stated preferences |
| **Confident (80-90%)** | Quiz + 7-14 nights passive data | 1-2 weeks | Midsleep stability requires ~7 nights minimum (research consensus) |
| **High confidence (90%+)** | Quiz + 21+ nights + free day data | 3+ weeks | MSFsc requires work/free day comparison; 3-week recordings have "sufficient predictive power" |
| **Oura-level certainty** | 30+ nights + temperature + activity | 40-90 days | Clinical-grade, but overkill for our use case |

### Recommended Progressive Disclosure Flow

#### Day 0 — Onboarding Quiz (rMEQ-inspired, 5 questions)
- **Give:** Preliminary chronotype label + animal avatar
- **Confidence shown:** "Based on your answers" (no percentage)
- **Frame as:** "Your Sleep DNA — First Look"
- **Visual:** Chronotype dial with wide confidence band
- **What they get immediately:**
  - Suggested alarm time
  - Suggested bedtime
  - "Your peak energy window is probably [time range]"

#### Day 3-5 — First Passive Data Check-in
- **Give:** "Your data is confirming/adjusting your profile"
- **Notification:** "We've been watching (in a non-creepy way). Your actual sleep pattern is [confirming/shifting] your Wolf profile."
- **Visual:** Confidence band narrows on chronotype dial
- **New insight unlocked:** Social jet lag estimate (work vs free day difference)

#### Day 7-14 — Confident Classification
- **Give:** Full chronotype profile with confidence
- **Frame as:** "Your Sleep DNA — Confirmed"
- **Notification:** "After 7 nights, we're confident: You're a Wolf (83% confidence)"
- **New insights unlocked:**
  - Optimal wake time vs. current wake time gap
  - Social jet lag score with health context
  - Personalized morning difficulty prediction
  - "Your biology says peak energy is at [time]. You've been forcing [other time]."

#### Day 21+ — Refined Profile
- **Give:** High-confidence chronotype + trend data
- **Frame as:** "Your Circadian Rhythm Report"
- **New insights unlocked:**
  - Week-over-week sleep timing trends
  - "Your chronotype is shifting toward [direction]" if applicable
  - Seasonal changes (if data spans enough time)

### How to Communicate Confidence to Users

**DO:**
- Use visual metaphors: "Your profile is sharpening" with a focusing lens animation
- Show a "clarity meter" that fills over days (not percentage)
- Use language like "early read", "getting clearer", "locked in"
- Compare to weather forecasts: "Today's forecast is based on limited data — it'll get more accurate"

**DON'T:**
- Show raw confidence percentages (feels clinical, not engaging)
- Say "we don't know yet" (feels broken)
- Wait until high confidence to show anything (kills engagement)
- Over-promise on day 1 accuracy

### Psychological Impact of Chronotype Labels

#### The Upside — Identity & Permission
- **Identity adoption:** When told "You're a Wolf", users begin identifying with the label (labeling theory)
- **Permission to be different:** Night owls who've been told they're "lazy" finally get scientific validation
- **Behavior alignment:** Knowing your chronotype gives permission to stop fighting biology
- **Community belonging:** "I'm a Wolf too!" creates in-group identification

#### The Risk — Self-Fulfilling Prophecy
- **Barnum effect:** People accept vague personality descriptions as uniquely accurate (like horoscopes)
- **Learned helplessness:** "I'm a Wolf so I CAN'T wake up early" — using label as excuse
- **Fixed mindset:** If chronotype feels permanent, users may resist change
- **Label dominance:** The chronotype label could become self-concept, reducing nuance

#### How to Mitigate Risks
1. **Frame as spectrum, not box:** "You lean Wolf, but everyone has some Lion energy"
2. **Emphasize adaptability:** "Your chronotype can shift ~1-2 hours with the right habits"
3. **Focus on alignment, not limitation:** "This isn't who you ARE — it's what your biology PREFERS today"
4. **Show change over time:** "Your chronotype shifted 23 minutes this month" = proves it's fluid
5. **Avoid horoscope language:** Be specific and evidence-based, not vague and mystical
6. **Dare Engine twist:** "So you're a Wolf. Cool. That doesn't mean you get to sleep till noon. It means we know EXACTLY how to hack your morning."

---

## Synthesis: Our Onboarding Strategy

### The Hybrid Approach (No Competitor Does This)

**Phase 1 — Quiz (Day 0, 90 seconds)**
Combine the best of rMEQ + uMCTQ in 6-7 questions:
1. "If you had zero obligations tomorrow, what time would you naturally wake up?" (time picker)
2. "...and what time would you naturally fall asleep?" (time picker)
3. "On work/school days, what time do you actually wake up?" (time picker)
4. "...and what time do you actually fall asleep?" (time picker)
5. "Do you use an alarm on days off?" (yes/no toggle)
6. "When do you feel most energized?" (visual slider with sun position)
7. "Morning you is..." (illustrated options: "Ready to go" / "Needs 30 min" / "Zombie" / "What is morning?")

This gives us:
- MSFsc calculation (questions 2, 3, 4, 5 = uMCTQ core)
- Social jet lag (work vs free difference)
- Self-assessment (questions 6, 7 = rMEQ flavor)
- Preferred vs actual gap (the misalignment that drives the product)

**Phase 2 — Passive Detection (Day 1-14)**
- Track alarm set/dismiss/snooze within our app
- On Android: screen on/off timestamps + Google Sleep API
- On iOS: HealthKit sleep data + app open/close timestamps
- All on-device processing, no raw data sent to server

**Phase 3 — Progressive Reveal**
- Day 0: Preliminary "Sleep DNA" with animal avatar + suggested times
- Day 3: "Your pattern is [confirming/shifting]..." notification
- Day 7: Full chronotype profile with confidence
- Day 14: Social jet lag report
- Day 21+: Trend tracking, seasonal insights

### The Dare Engine Twist on Chronotype Reveal

Instead of a boring "You're a Wolf" reveal:

> "Alright. Based on 7 nights of actual data (not just what you told us), here's the truth:
>
> **You're a Wolf.**
>
> Your brain doesn't fully wake up until 10 AM. Your peak energy hits around 2 PM. And you've been forcing yourself awake at 7 AM, which means you've been running at 60% capacity every single morning.
>
> Good news: We know exactly when to push you. Bad news: Your excuse list just got shorter.
>
> Your optimal alarm: 8:15 AM
> Your actual alarm: 6:45 AM
> Your social jet lag: 1.5 hours (that's costing you)
>
> Want to fix this? It'll take 66 days. We dare you."

---

## Sources

### Academic Papers
- Adan, A., & Almirall, H. (1991). Horne and Ostberg Morningness-Eveningness Questionnaire: A reduced scale. *Personality and Individual Differences*, 12(3), 241-253.
- Roenneberg, T., et al. (2003). Life between clocks: daily temporal patterns of human chronotypes. *Journal of Biological Rhythms*, 18(1), 80-90.
- Ghotbi, N., et al. (2020). The uMCTQ: An Ultra-Short Version of the Munich ChronoType Questionnaire. *Journal of Biological Rhythms*, 35(1), 98-110.
- Lin, Y.H., et al. (2019). Development of a mobile application to delineate "digital chronotype". *Journal of Psychiatric Research*, 110, 9-15.
- Abdullah, S., et al. (2018). Data and Expert Models for Sleep Timing and Chronotype Estimation from Smartphone Context Data. *Proc. ACM Interact. Mob. Wearable Ubiquitous Technol.*, 2(3).
- Ciman, M., & Wac, K. (2019). Capturing sleep-wake cycles by using day-to-day smartphone touchscreen interactions. *npj Digital Medicine*, 2(1), 73.
- Breus, M.J. (2016). *The Power of When*. Little, Brown Spark.

### App & UX Sources
- [Oura Chronotype Help](https://support.ouraring.com/hc/en-us/articles/14594974129555-Body-Clock-and-Chronotype)
- [Oura 3-month wait for chronotype](https://tech.yahoo.com/wearables/articles/had-wait-3-months-oura-090500540.html)
- [RISE Onboarding Screens](https://screensdesign.com/showcase/rise-sleep-tracker)
- [RISE Circadian Rhythm Test](https://www.risescience.com/blog/circadian-rhythm-test)
- [BetterSleep Chronotype Info](https://www.bettersleep.com/info-chronotypes)
- [Sleep as Android Chronotype Detection](https://sleep.urbandroid.org/introducing-chronotype-detection/)
- [Breus Chronotype Quiz](https://sleepdoctor.com/pages/chronotypes/chronotype-quiz)
- [Noom Onboarding Critique (Behavioral Scientist)](https://www.thebehavioralscientist.com/articles/noom-product-critique-onboarding)
- [Noom Longest Onboarding (Retention Blog)](https://www.retention.blog/p/the-longest-onboarding-ever)
- [Calm UX Case Study](https://goodux.appcues.com/blog/calm-app-new-user-experience)
- [Android Sleep API](https://android-developers.googleblog.com/2021/02/low-power-sleep-tracking-on-android.html)
- [HealthKit Sleep Analysis](https://developer.apple.com/documentation/healthkit/hkcategoryvaluesleepanalysis)
- [Smartphone Sleep Monitoring Review (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11945902/)
- [Digital Chronotype Validation (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC6542252/)
- [Tappigraphy Sleep Detection (Nature)](https://www.nature.com/articles/s41746-019-0147-4)
