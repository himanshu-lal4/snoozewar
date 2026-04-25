# Feature: "Shift Your Clock" — Chronotype Shifting Program

*Status: DESIGNED — Needs founder review*
*Evidence base: 20+ peer-reviewed studies (see market/chronotype-shifting-protocol-research.md)*

---

## What It Is

A structured, science-backed program that helps users gradually shift their sleep/wake timing closer to their desired schedule. This is NOT a "become a 5 AM person" gimmick — it's a clinically validated protocol adapted for a consumer app, with realistic expectations and safety guardrails.

**Maximum achievable shift: 1.8-2.4 hours** (genetic ceiling). The app is honest about this.

---

## Why It Matters

- **69-70% of people have >1h social jet lag** (Roenneberg) — mismatch between biology and schedule
- **2h of social jet lag doubles diabetes risk** — this is a health intervention, not just convenience
- **No existing app does this** — Timeshifter (jet lag only), RISE (passive tracking), Sleep Reset (CBT-I). Nobody combines active shifting + enforcement + maintenance.
- **Shifts relapse in 1-2 weeks without maintenance** — natural subscription justification

---

## Who It's For

| User Type | Shift Needed | Example |
|-----------|-------------|---------|
| Mild social jet lag | 30-60 min | Student who sleeps at 1 AM but needs to wake at 7 AM |
| Moderate social jet lag | 1-1.5h | Night owl starting a new job with 8 AM start |
| Severe social jet lag | 1.5-2h | Freelancer who drifted to 3 AM bedtime, wants to reclaim mornings |
| Beyond app scope | >2.5-3h | Possible DSPD — app screens and recommends doctor |

---

## The Protocol (4 Phases + Maintenance)

### Phase 0: Assessment (Before program starts)
- Chronotype already detected via onboarding quiz + passive data
- User sets **target wake time** (not target bedtime — wake time drives the protocol)
- App calculates shift needed: `current habitual wake time - target wake time`
- **Safety screen:** Simple 3-question check:
  1. "Have you ever been diagnosed with bipolar disorder?" → recommend doctor
  2. "Do you have any eye conditions or take photosensitizing medications?" → skip light therapy lamp recommendation
  3. "Are you pregnant or taking blood thinners?" → skip melatonin education
- **If shift >3 hours:** "This is a big shift. We recommend talking to a sleep specialist first. Want to continue with a smaller goal?"

### Phase 1: Foundation (Days 1-3)
**Goal: Establish zeitgeber routine WITHOUT changing wake time yet**

The user keeps their current schedule but adds these anchors:

| When | Action | In-App Feature |
|------|--------|---------------|
| Within 5 min of waking | Go outside OR use light therapy lamp (15 min) | Push notification + timer + "Light Score" |
| Within 30 min of waking | 10 min walk outdoors | GPS-verified walking mission (light + exercise combo) |
| Within 1h of waking | Eat breakfast | Meal timing reminder |
| 6h before bedtime | Melatonin education card (if opted in) | Timed notification: "If using melatonin, now's the time" |
| 2h before bedtime | "Wind Down" mode — dim lights, night mode | Auto-triggered reminder + screen dimming suggestion |
| 90 min before bedtime | Warm shower/bath (10 min, warm not hot) | Reminder with science explanation |
| Bedtime | "Lights out" enforcement | Night Mode countdown (existing feature) |

**Dare Engine copy for Phase 1:**
- *"This week, we're not changing your schedule. We're building the levers that WILL change it. Trust the process."*
- *"Day 2 of foundations. You walked outside within 30 min. Your circadian clock noticed, even if you didn't."*

### Phase 2: Gradual Shift (Days 4-11)
**Goal: Advance wake time by 15 min every 2 days**

| Days | Wake Time | Bedtime | All Zeitgebers |
|------|-----------|---------|---------------|
| 4-5 | -15 min from baseline | -15 min | Shift proportionally |
| 6-7 | -30 min total | -30 min total | Shift proportionally |
| 8-9 | -45 min total | -45 min total | Shift proportionally |
| 10-11 | -60 min total | -60 min total | Shift proportionally |

**For users needing >1h shift:** Phase 2 extends. 15 min every 2 days = ~1.75h over 3.5 weeks.

**The alarm shifts automatically** — user doesn't manually adjust. App says:
- *"Tomorrow, your alarm moves 15 minutes earlier. From 7:30 to 7:15. Your body won't even notice. But your clock will."*
- *"Day 8. You're 45 minutes ahead of where you started. Halfway there."*

**Key rule: wake time and bedtime shift TOGETHER.** Never just shift wake time without bedtime — that creates sleep debt, which kills compliance.

### Phase 3: Stabilization (Days 12-14)
**Goal: Lock in the new schedule for 3 days**

- No more shifts — hold the new time steady
- Continue ALL zeitgeber protocols
- App tracks sleep quality and energy levels
- Introduces the weekend protocol: *"Weekends are where shifts die. Here's how you survive them."*

**Weekend protocol:**
- Wake within 30 min of target (not unlimited sleep-in)
- If you MUST sleep in: nap 20 min in early afternoon instead of late morning sleep-in
- Morning light exposure still mandatory
- *"Sleeping in 2 hours on Saturday undoes 5 days of work. We measured it."* (Roenneberg data)

### Phase 4: Maintenance (Ongoing — this is where the subscription earns its money)

**Daily non-negotiables (enforced by app):**
1. Wake within ±15 min of target — 7 days/week, including weekends
2. Morning light 10+ min within 1h of waking
3. No screens in bed (detected by phone position + time)

**Weekly check-ins:**
- Life Score reflects chronotype compliance as a component
- "Clock Drift" metric: are you holding your shift or drifting back?
- Weekend drift alert if >30 min deviation detected

**Seasonal adjustments (automatic):**
- Winter: increase light therapy reminders, earlier wind-down
- Summer: leverage natural early light, adjust sunset-based dimming

**Relapse detection:**
- If wake time drifts >30 min for 3+ days → alert: *"Your clock is drifting. 3 days of 30-min drift and you're back to square one. Reset tomorrow?"*
- Offer "Shift Refresh" — a compressed 5-day re-stabilization protocol

---

## What the App CAN and CANNOT Do

### CAN do (with evidence):
- ✅ Assess chronotype (passive phone data + questionnaire)
- ✅ Provide structured shifting protocol (15 min / 2 days)
- ✅ Time light exposure recommendations (morning outdoor light)
- ✅ Time meal and exercise recommendations
- ✅ Recommend warm shower timing (90 min before bed)
- ✅ Educate on melatonin timing (without prescribing)
- ✅ Enforce consistency (alarms, streaks, Life Score)
- ✅ Prevent relapse (drift detection, weekend alerts)
- ✅ Screen for DSPD and recommend doctor

### CANNOT claim:
- ❌ Turn a night owl into a morning lark (max shift: 1.8-2.4h)
- ❌ Phone screen = light therapy (too dim by 25-100x; ~110 melanopic lux vs 2,500+ needed)
- ❌ Prescribe melatonin doses (regulatory issue — educate only)
- ❌ Treat DSPD (medical condition)
- ❌ Guarantee permanent results without ongoing maintenance

---

## The 5 Zeitgebers (Science-to-Feature Mapping)

| Zeitgeber | Science | App Feature | Evidence Strength |
|-----------|---------|-------------|-------------------|
| **Light** | 30 min bright light → 1.1h advance; 75% of max effect from shortest dose | Morning "Light Mission" — go outside timer, OR light therapy lamp timer | Strong (Burgess et al.) |
| **Melatonin** | 0.5mg, 5-6h before bedtime → 1.3h advance | Timed education card: "If using melatonin, now's optimal timing" | Strong (Burgess et al.) — but cannot prescribe |
| **Exercise** | Morning exercise → 0.5-0.6h advance | "Morning Walk" mission — 10 min GPS-verified outdoor walk | Moderate (Youngstedt 2019) |
| **Meals** | Breakfast within 1h entrains peripheral clocks; late meals delayed glucose rhythm by 5.69h | Meal timing reminders, "First Bite" timestamp | Moderate (Wehrens 2017) |
| **Temperature** | Warm bath 90 min before bed → 36% faster sleep onset | "Warm shower" reminder with timer | Strong (Haghayegh meta-analysis) |

---

## Safety Guardrails

### Auto-screen at program start:
- Bipolar → "Light therapy can trigger mania. Please consult your doctor before using bright light protocols."
- Eye conditions → Skip light therapy lamp recommendation, recommend outdoor light only
- Pregnancy → Skip melatonin education
- Shift >3h → "This is a big shift. Consider starting with a smaller goal or consulting a sleep specialist."

### During program:
- If user consistently can't fall asleep within 30 min of target bedtime for 5+ days → "Your body may need more time. Let's slow down to 15 min per 3 days."
- If user reports persistent daytime sleepiness after 2 weeks → "This might be worth discussing with a doctor."

### When to recommend a doctor:
- Shift needed >3 hours
- No response after 3 weeks of protocol compliance
- Signs of DSPD: can't fall asleep before 2 AM despite trying, for 3+ months
- User reports bipolar symptoms, severe depression, or medication interactions

---

## Dare Engine Copy for Shift Your Clock

### Program Start:
*"You want to wake up at 6:30. You currently wake at 8:15. That's 1 hour 45 minutes of biology working against you. We're going to fix that — 15 minutes at a time. By day 14, your body won't know what hit it."*

### Daily Shifts:
- *"Tomorrow: 7:15. That's 15 minutes earlier than today. Your circadian clock can handle 15 minutes. Can you?"*
- *"Day 6. 30 minutes shifted. You're sleeping earlier. Waking earlier. And your cortisol spike is finally happening when it should."*

### Struggles:
- *"Couldn't fall asleep last night? That's normal on Day 5. Your brain is recalibrating. Stick with it."*
- *"You snoozed through the shift today. That's fine — we're moving it back to yesterday's time. No penalty. But the clock is watching."*

### Wins:
- *"1 hour shifted in 10 days. Your social jet lag dropped from 1.5 hours to 30 minutes. That's measurably better for your heart."*
- *"You held your new time through the weekend. 93% of people fail here. You didn't."*

### Maintenance:
- *"The shift is done. But your body's default clock hasn't changed — it'll drift back in 2 weeks without us. That's why we're here."*

---

## Metrics to Track

| Metric | What It Tells Us |
|--------|-----------------|
| Program start rate | How many users opt into Shift Your Clock |
| Phase 2 completion rate | Can users sustain 15 min/2 day shifts? |
| Full program completion (14 days) | End-to-end success |
| Wake time drift at 30 days | Are shifts holding? |
| Wake time drift at 90 days | Long-term maintenance |
| Social jet lag reduction | Are we actually reducing the health-relevant metric? |
| Subscription retention (program users vs non-users) | Does this feature drive retention? |

---

## Competitive Position

| App | Detects Chronotype | Active Shifting | Enforcement | Maintenance |
|-----|-------------------|----------------|-------------|-------------|
| **Oura** | ✅ (90 days, $300 hardware) | ❌ | ❌ | ❌ |
| **RISE** | Partial (energy curve) | ❌ | ❌ | ❌ |
| **Timeshifter** | ❌ | ✅ (jet lag only) | ❌ | ❌ |
| **Sleep Reset** | ❌ | Partial (CBT-I) | ❌ | ❌ |
| **Alarmy** | ❌ | ❌ | ✅ (alarm only) | ❌ |
| **Our App** | ✅ (7-14 days, no hardware) | ✅ | ✅ | ✅ |

**We are the only app that does all four.**
