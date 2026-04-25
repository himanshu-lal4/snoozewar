# Chronotype Shifting Protocol Research — "Shift Your Clock" Feature
## Deep Clinical Research for 14-Day Program Design
**Date:** 2026-04-07

---

## Table of Contents
1. [The Burgess Combined Protocol (Gold Standard)](#1-the-burgess-combined-protocol)
2. [Light Therapy Specifics for App Context](#2-light-therapy-specifics)
3. [Gradual Wake Time Shifting Protocols](#3-gradual-wake-time-shifting)
4. [Melatonin Timing for Phase Advance](#4-melatonin-timing)
5. [Meal Timing as a Zeitgeber](#5-meal-timing)
6. [Exercise Timing as a Zeitgeber](#6-exercise-timing)
7. [Temperature Manipulation](#7-temperature-manipulation)
8. [Evening Light Reduction / Digital Chronotherapy](#8-evening-light-reduction)
9. [Relapse Prevention](#9-relapse-prevention)
10. [Existing Apps/Programs](#10-existing-apps)
11. [Safety Considerations](#11-safety-considerations)
12. [Success Rates and Realistic Expectations](#12-success-rates)
13. [Synthesized 14-Day Protocol Design](#13-synthesized-protocol)

---

## 1. The Burgess Combined Protocol

### Overview
The Burgess lab (Rush University) has published the most rigorous research on combined light + melatonin + gradual sleep schedule advancement. Two landmark studies form the "gold standard":

### Study 1: Revell, Burgess et al. (2006) — "Advancing Human Circadian Rhythms with Afternoon Melatonin and Morning Intermittent Bright Light"
**Source:** [PMC3841985](https://pmc.ncbi.nlm.nih.gov/articles/PMC3841985/)

**Population:** N=44 healthy adults, ages 18-45

**Protocol (14 days total):**
- **Days 1-6:** Baseline — fixed 8h sleep schedule based on habitual times (bedtimes 23:00-02:00, mean 00:10 +/- 56 min)
- **Day 7:** Baseline phase assessment (saliva sampling for DLMO)
- **Days 8-10:** Continued baseline schedule
- **Days 11-13:** Three treatment days — wake time advanced 1 hour per day
- **Day 14:** Final phase assessment

**Bright Light Protocol:**
- Four 30-min bright light pulses (~5,000 lux, range 3500-6880) alternating with 30 min room light (<60 lux)
- Started upon waking each treatment day
- Total bright light: 2 hours across 3.5-hour span
- Light source: broad-spectrum white fluorescent

**Melatonin Protocol:**
- **0.5 mg group:** Administered 5 hours before baseline bedtime on Day 1
- **3.0 mg group:** Administered 7 hours before baseline bedtime on Day 1
- Timing advanced 1 hour daily to maintain optimal circadian position
- Relationship: approximately 12 hours before scheduled wake-up time

**Phase Advance Results (DLMO shift over 3 treatment days):**

| Condition | Phase Advance (mean) | SD | N | Shift/Day |
|-----------|---------------------|-----|---|-----------|
| Placebo (light + schedule only) | 1.7 h | 0.7 | 15 | ~34 min/day |
| 0.5 mg melatonin + light + schedule | 2.5 h | 0.7 | 16 | ~50 min/day |
| 3.0 mg melatonin + light + schedule | 2.6 h | 0.3 | 13 | ~52 min/day |

**Key finding:** Both melatonin doses significantly outperformed placebo (p=0.003 for 0.5mg; p=0.001 for 3.0mg), but **no significant difference between 0.5mg and 3.0mg** (p=0.79). The lower dose is preferred due to fewer side effects.

**Combined protocol advanced rhythms ~50 min/day (~1 hour/day) with minimal circadian misalignment.**

### Study 2: Crowley & Eastman (2015) — "Can We Reduce Morning Bright Light Duration?"
**Source:** [PMC4344919](https://pmc.ncbi.nlm.nih.gov/articles/PMC4344919/)

**Population:** N=50 healthy adults (27 males), age 25.9 +/- 5.1 years

**Three light duration groups compared (all received 0.5mg melatonin):**

| Group | Light Pattern | Total Bright Light | Lux | Phase Advance | SD |
|-------|-------------|-------------------|-----|---------------|-----|
| 2h | 4x 30-min pulses, 30-min breaks | 2 hours | ~5000 | **2.4 h** | 0.8 |
| 1h | 4x 15-min pulses, 45-min breaks | 1 hour | ~5000 | 1.7 h | 0.7 |
| 0.5h | Single 30-min exposure | 30 minutes | ~5000 | **1.8 h** | 0.8 |

**Critical finding for app design:** A single 30-minute bright light exposure upon waking was as effective as 1 hour spread over 3.25h, and produced **75% of the phase shift** achieved by 2 hours of light. This is the practical minimum for a consumer product.

**Compliance Measures:**
- Daily sleep logs (bedtime, sleep onset, awakenings >5 min, wake time)
- Wrist and neck actigraphy
- Time-stamped voicemail verification at home
- Staff review every 2-3 days
- Zero melatonin doses missed
- Columbia Jet Lag Scale: minimal symptoms (only ~2 point increase on 0-36 scale)

### Study 3: Burke et al. (2013) — "Combination of Light and Melatonin Time Cues"
**Source:** [PMC3792377](https://pmc.ncbi.nlm.nih.gov/articles/PMC3792377/)

**Population:** N=36 healthy adults (18F/18M), age 22.0 +/- 3.8 years

**Four conditions (N=9 per group), single treatment day:**

| Condition | Description | Phase Advance vs Control | Effect Size (d) |
|-----------|------------|------------------------|-----------------|
| DLP | Dim light + Placebo (control) | ~26 min DELAY | — |
| DLM | Dim light + 5mg Melatonin | ~37 min advance | 1.40 |
| BLP | Bright light (3000 lux, 3h) + Placebo | ~42 min advance | 1.53 |
| **BLM** | **Bright light + 5mg Melatonin** | **~68 min advance** | **2.81** |

**Key finding:** Combined treatment produced **additive** (not synergistic) effects. Light and melatonin each independently contribute ~30-40 min advance, combining to ~68 min in one treatment day.

**ANOVA:** Significant main effects for both bright light (F=14.04, p<0.001) and melatonin (F=10.58, p<0.01). No interaction effect (p=0.60).

### Relapse Data
**No formal relapse data exists from Burgess studies** — they measured acute 3-day treatment effects. However, the clinical literature consistently states:
- Circadian phase shifts relapse once intervention stops
- Speed of relapse varies by individual but typically occurs within 1-2 weeks
- Maintenance protocol required (see Section 9)

---

## 2. Light Therapy Specifics for App Context

### Can a Phone Screen Phase-Shift?

**Short answer: NO — not meaningfully for phase advance.**

**Phone screen lux measurements:**
- iPhone at max brightness produces ~110 melanopic lux at 9 inches (23 cm) viewing distance
- At 18 inches (46 cm): ~35 melanopic lux
- Android phones similar: 100-200 lux at close range
- **Clinical threshold for circadian effects: 2,500-10,000 lux**
- Phone screens are 25-100x too dim for morning phase advance

**However, phone screens CAN delay circadian rhythm at night:**
- Evening phone use causes 7.3-11.4% melatonin suppression in dark rooms
- 15.4-36.1% suppression in bright rooms
- Blue light from screens is a problem for sleep, not a tool for waking

**App implication:** The app should NOT claim to deliver light therapy via the phone screen. Instead, it should:
1. Recommend getting outdoor sunlight (free, effective)
2. Optionally recommend a light therapy lamp (for dark/winter conditions)
3. Use phone screen brightness for wake-up alarm (wake-up light feature) but not claim circadian shifting

### Light Therapy Lamp Recommendations

**Clinical standard: 10,000 lux at 12-16 inches distance, 20-30 minutes**

| Product | Lux Rating | Price | Notes |
|---------|-----------|-------|-------|
| Verilux HappyLight Luxe | 10,000 lux | $70 | Adjustable, 4 brightness levels, 3 color temps |
| Circadian Optics Lumos 2.0 | 10,000 lux | ~$50 | Shark Tank product, portable, foldable |
| VUSHIOO | 10,000 lux | ~$40 | Budget pick, meets clinical standard |
| Aurora LightPad Max | 31,000 lux at 1 ft | ~$100+ | Professional grade |
| Carex Day-Light Classic Plus | 10,000 lux | ~$100 | Clinically tested, large surface area |

### Minimum Effective Dose (Duration x Intensity)

**Dose-response equivalences from peer-reviewed studies:**

| Intensity | Required Duration | Phase Shift | Source |
|-----------|------------------|-------------|--------|
| 10,000 lux | 30 minutes | Full therapeutic dose | Standard clinical recommendation |
| 5,000 lux | 1 hour | Equivalent to 10K/30min | Crowley & Eastman 2015 |
| 2,500 lux | 2 hours | Equivalent to above | Multiple depression studies |
| 300-500 lux | Unknown (long) | Some response seen | Frontier research |

**Critical finding:** Duration matters MORE than intensity. Extending exposure from 30 min to 1-3 hours increased phase shift magnitude, but increasing intensity from 2,000 to 8,000 lux did NOT further increase shift (PMC3079938).

**Natural sunlight:** 10,000-100,000+ lux depending on conditions. Even on overcast days: 1,000-10,000 lux outdoors. Sunlight is always sufficient.

### Blue Light vs Full Spectrum vs Green Light

**Melanopsin (ipRGC) peak sensitivity: 480 nm (blue)**

**Wavelength comparison:**
- **Blue (460-480 nm):** Most effective for long-duration, high-irradiance exposure. Primary circadian photopigment. 185 lux of blue light = equivalent effect to ~1,500 lux of yellow-green light.
- **Green (555 nm):** More effective for short-duration or low-irradiance exposure (via cone photoreceptors contributing early in exposure). Not as sustained.
- **Full spectrum white:** Used in all Burgess studies. Works well because it contains blue wavelengths. Most practical recommendation.

**Dynamic effect:** The spectral sensitivity changes over time during exposure:
1. First few minutes: cones (green-sensitive) contribute significantly
2. After 10+ minutes: melanopsin (blue-sensitive) dominates
3. Implication: For 30-min sessions, blue-enriched white light is optimal

**Practical recommendation for app:** Recommend natural sunlight first, full-spectrum 10,000 lux lamp second. Blue-specific devices (like Re-Timer glasses, ~$200) are a third option but unnecessary for most users.

### The Light Phase Response Curve (PRC)

**When light advances vs delays the circadian clock:**

The crossover point is the **core body temperature minimum (CBTmin)**, which occurs ~2-3 hours before habitual wake time (or ~5 hours after sleep onset).

| Timing | Effect | Magnitude |
|--------|--------|-----------|
| 2h before bedtime → CBTmin | **DELAYS** (shifts later) | Up to 2-3 hours |
| CBTmin → 2h after waking | **ADVANCES** (shifts earlier) | Up to 1-2 hours |
| 2h after waking → afternoon | Minimal/small advance | Variable |
| Mid-afternoon → early evening | Dead zone / small effects | Negligible |

**Practical rules:**
- Morning light (within 1h of waking) = advance = wake earlier
- Evening light (within 2h of bedtime) = delay = stay up later
- Maximum delay effect is LARGER than maximum advance effect
- This is why evening phone use is so damaging — delay is easy, advance is hard

### Andrew Huberman's Practical Recommendations

**Morning Light Protocol (Huberman Lab):**
- Get outdoor sunlight within first 30-60 minutes of waking
- **Clear day:** 5 minutes minimum
- **Cloudy day:** 10 minutes
- **Heavily overcast:** 20-30 minutes
- Do NOT use sunglasses during morning light viewing
- Do NOT view through windows (glass filters UV and reduces effectiveness)
- Artificial light can substitute if outdoor access impossible

**Evening Protocol:**
- Dim lights after sunset
- Avoid overhead bright lights (simulate sunset, not noon)
- Blue-blocking glasses optional but dimming is more effective

**Scientific basis:** Morning sunlight triggers cortisol awakening response (CAR), sets circadian master clock in SCN via ipRGCs, and programs melatonin release ~14-16 hours later. This is consistent with all Burgess protocol findings.

---

## 3. Gradual Wake Time Shifting Protocols

### Shifting Rate Comparison

| Rate | Protocol | Expected Shift | Time to Shift 2h | Pros | Cons |
|------|----------|---------------|-------------------|------|------|
| **Aggressive** | 1h/day (Burgess) | ~50 min/day actual | 3 days | Fast results, proven | Jet lag symptoms, sleep loss, requires light+melatonin |
| **Moderate** | 30 min/day | ~25-30 min/day | 4-5 days | Balanced | Some grogginess, needs light support |
| **Gradual** | 15 min/3 days | ~15 min/3 days | 6 weeks | Minimal disruption | Slow, motivation drops |
| **Very Gradual** | 15 min/week | ~15 min/week | ~8 weeks | Almost imperceptible | Very slow, life events derail |

### Evidence-Based Recommendations

**Most sustainable for consumer app (no clinical supervision):** 15-30 minutes per shift, every 2-3 days.

**Rationale:**
1. The Burgess 1h/day protocol works but requires 5,000 lux light boxes and melatonin — not realistic for most app users
2. The Crowley study showed even 30 min of light + 0.5mg melatonin + 1h/day shift = 1.8h advance in 3 days
3. Without clinical light and melatonin, the achievable rate drops to ~15-20 min/day
4. 15 min/3 days allows the circadian clock to stabilize at each step before the next shift
5. For a 14-day program shifting 1.5 hours: advance 15 min every 2 days = 7 shifts = 1.75h (achievable)

### Sleep Restriction Therapy Parallels (CBT-I)

CBT-I uses schedule compression to treat insomnia:
- Restrict time in bed to actual sleep time (e.g., 6 hours)
- Set fixed wake time (non-negotiable)
- Gradually extend bedtime earlier as sleep efficiency improves
- Typically advance bedtime 15-30 min per week when sleep efficiency >85%

**Application to chronotype shifting:**
- Fix the wake time FIRST (non-negotiable anchor)
- Let the body adjust sleep pressure naturally
- Advance bedtime only when actually falling asleep within 20 min
- This prevents "lying awake in bed" frustration

### Success Rate Data

**Combined treatment (light + melatonin + schedule):**
- 45% success rate with combined phototherapy, time therapy, and medication (ISWRD study)
- Burgess protocol: ~100% of participants showed some advance (2.5h average), but this was under lab conditions

**Self-directed (behavioral only):**
- Most people can shift 1-2 hours within 5-7 days using 15-30 min/day shifts + morning light
- Shifts >3 hours may take 10-14 days
- Realistic self-directed success rate: estimated 30-50% maintain shift at 3 months (no formal data)

---

## 4. Melatonin Timing for Phase Advance

### The Melatonin Phase Response Curve

**Melatonin operates OPPOSITE to light:**
- Melatonin in the afternoon/evening → ADVANCES rhythm (shifts earlier)
- Melatonin in the morning → DELAYS rhythm (shifts later)

**Advance zone:** CT 6 to CT 18 (approximately 6h after waking to bedtime)
**Delay zone:** CT 18 to CT 6 (bedtime through early morning)
**Optimal advance timing:** CT 8-12 (approximately 2-6 hours before DLMO)

### Practical Timing Rule

**The "5-hours-before-bedtime" rule:**
- DLMO occurs ~2 hours before habitual bedtime on average
- Optimal melatonin for advance: 2-4 hours before DLMO = **4-6 hours before bedtime**
- For someone sleeping at midnight: take melatonin at 6-8 PM
- Advance timing by 1 hour each day as schedule shifts

**The "12-hours-before-wake" rule (Burgess):**
- More precise: take melatonin 12 hours before your target wake time
- Target wake = 7 AM → take melatonin at 7 PM
- This naturally falls in the advance zone

### The Low-Dose vs High-Dose Debate

| Dose | Phase Advance | Side Effects | Recommendation |
|------|--------------|-------------|----------------|
| 0.3 mg | ~1.5h over 3 days | Minimal | Research dose, hard to find OTC |
| 0.5 mg | 2.5h over 3 days (with light) | Minimal | **Optimal research dose** |
| 1-3 mg | 2.6h over 3 days (with light) | More drowsiness | No additional benefit for shifting |
| 5 mg | Similar phase shift | Significant drowsiness | Unnecessarily high |
| 10 mg | No additional phase shift | Excessive | Risk of "spilling over" into delay zone |

**Consensus: 0.5 mg is the optimal dose for phase shifting.** Higher doses cause more drowsiness without additional phase advance. The 3mg and 5mg doses often available OTC are unnecessarily high for chronotherapy.

**Problem:** Most OTC melatonin is 3-10mg. The optimal 0.5mg dose requires cutting pills or finding specialty products.

**Quality concern:** A study found OTC melatonin content varied from -83% to +478% of labeled dose, with 26% of products also containing serotonin. Source: [PMC5263069](https://pmc.ncbi.nlm.nih.gov/articles/PMC5263069/)

### Regulatory Status by Country

| Country | Status | Max OTC Dose | Notes |
|---------|--------|-------------|-------|
| **USA** | OTC dietary supplement | No limit (commonly 1-10mg) | DSHEA 1994, no FDA pre-approval |
| **India** | OTC supplement (FSSAI regulated) | 5mg (FSSAI standard) | Available on Amazon India, manufactured domestically |
| **UK** | OTC up to 2mg; >2mg prescription | 2mg OTC | Circadin 2mg is prescription |
| **Germany** | OTC low-dose; higher = prescription | ~1mg OTC | Varies by state |
| **France** | OTC dietary supplement | 2mg | Above 2mg = prescription |
| **Spain/Italy** | OTC dietary supplement | 1-2mg | Widely available |
| **Japan** | OTC since 2026 | 2mg | PMDA reclassification, new 2026 |
| **Australia** | Prescription only | N/A | Schedule 4 medicine |
| **Canada** | OTC natural health product | 10mg | NPN required |
| **Denmark/Czech** | Prescription only | N/A | Classified as medicinal product |

### Can an App Legally Recommend Melatonin?

**US:** Yes, as general wellness information. Cannot claim to "treat" DSPD (that's a medical claim). Frame as: "Some users find low-dose melatonin helpful for adjusting their schedule. Consult your doctor."

**EU:** More restricted. Cannot recommend specific doses. Frame as: "Talk to your pharmacist about melatonin for sleep timing."

**India:** Generally permissible as wellness advice since it's an OTC supplement under FSSAI.

**Japan:** Now permissible since 2026 reclassification.

**Best practice for the app:** Provide educational information about melatonin timing science, suggest users "consult a healthcare provider," and never claim to treat a medical condition. Include disclaimers in onboarding.

---

## 5. Meal Timing as a Zeitgeber

### How Much Does Meal Timing Shift the Clock?

**Central clock (SCN):** Meal timing has minimal effect — light is the dominant zeitgeber for the master clock.

**Peripheral clocks (liver, gut, adipose tissue, pancreas):** Meal timing is a POWERFUL zeitgeber.

**Key research finding:** Late meals delayed plasma glucose rhythms by **5.69 hours** and delayed adipose tissue PER2 mRNA rhythms, demonstrating that human molecular clocks in peripheral tissues ARE regulated by feeding time. Source: [PubMed 28578930](https://pubmed.ncbi.nlm.nih.gov/28578930/)

### Central vs Peripheral Clock Distinction

| Clock | Location | Primary Zeitgeber | Secondary Zeitgebers |
|-------|----------|-------------------|---------------------|
| Central (SCN) | Hypothalamus | Light | Temperature, exercise |
| Peripheral (liver) | Liver | Meal timing | Light (indirect), hormones |
| Peripheral (gut) | GI tract | Meal timing | Microbiome, light |
| Peripheral (muscle) | Skeletal muscle | Exercise | Meal timing |
| Peripheral (adipose) | Fat tissue | Meal timing | Temperature |

**When peripheral and central clocks are misaligned** (e.g., eating late at night while light schedule is normal), the mismatch causes metabolic dysfunction, increased diabetes risk, and weight gain.

### Practical Meal Timing Protocols for Chronotype Shifting

**Evidence-based recommendations:**

1. **Eat breakfast within 1-2 hours of waking** — This signals peripheral clocks that "daytime" has started. Even a small meal (200-300 cal) works.

2. **Stop eating 3 hours before bedtime** — Late-night eating delays peripheral clocks and opposes the phase advance you're trying to achieve.

3. **Shift meal times along with sleep times** — If you advance wake time by 30 min, advance breakfast by 30 min. The peripheral clocks need to move in sync.

4. **Morning protein emphasis** — Protein intake triggers glucagon and insulin responses that help entrain liver clock.

5. **Avoid calorie-dense meals late evening** — Even if you're hungry, keep it light. The liver clock is particularly sensitive to large evening meals.

### Strength of Evidence

Meal timing is a **moderate-strength** zeitgeber for peripheral clocks but **weak** for the central clock. It should be used as a supporting intervention alongside light and sleep schedule, not as a primary tool. The strongest evidence is for AVOIDING late eating (which causes delay) rather than for using early eating to cause advance.

---

## 6. Exercise Timing as a Zeitgeber

### The Exercise Phase Response Curve

**Landmark study:** Youngstedt et al. (2019) — First human exercise PRC
**Source:** [PMC6462487](https://pmc.ncbi.nlm.nih.gov/articles/PMC6462487/)

**Protocol:** 51 older adults (59-75) + 48 young adults (18-30), 60 minutes moderate treadmill exercise (65-75% heart rate reserve), 3 consecutive days at one of 8 times.

**Results:**

| Exercise Time | Effect | Magnitude |
|--------------|--------|-----------|
| 7:00 AM | **Phase ADVANCE** | ~+0.9 hours |
| 10:00 AM | Small advance | ~+0.3 hours |
| 1:00 PM | **Phase ADVANCE** | ~+0.7 hours |
| 4:00 PM | **Phase ADVANCE** | ~+0.9 hours |
| 7:00 PM | **Phase DELAY** | ~-0.5 hours |
| 10:00 PM | **Phase DELAY** | ~-0.7 hours |
| 1:00 AM | Minimal | ~0 |
| 4:00 AM | Minimal | ~0 |

**Surprising findings:**
1. **Two advance windows** — not just morning. The 1-4 PM afternoon advance was MORE robust and statistically significant than the morning advance.
2. **No age differences** — young and older adults showed identical PRC patterns
3. **No sex differences** — men and women responded equally
4. **Amplitude = ~1/3 of bright light PRC** — exercise is a weaker zeitgeber than light but meaningful

### Morning Exercise Phase Advance Data

**Separate study (Thomas et al.):** Morning exercise induced 0.62 +/- 0.18 hours phase advance, significantly greater than evening exercise.

**Chronotype interaction (Youngstedt 2020):** Circadian phase shifts caused by timed exercise vary with chronotype. Evening types may respond differently to exercise timing than morning types. Source: [PMC7098792](https://pmc.ncbi.nlm.nih.gov/articles/PMC7098792/)

### Practical Recommendations

**For phase advance (shifting earlier):**
- **Best:** Morning exercise (within 1-2 hours of waking) OR early afternoon (1-4 PM)
- **Minimum dose:** The studies used 60 min moderate intensity, but practical evidence suggests 20-30 min of brisk walking provides meaningful entrainment
- **Avoid:** Evening exercise after 7 PM (causes delay)

**"10 min walk within 30 min of waking" — what does the data say?**
- No study has tested exactly this dose
- The PRC study used 60 min moderate treadmill on 3 days
- However, 10 min morning walking also provides morning light exposure (the actual primary zeitgeber), making the light effect likely larger than the exercise effect
- Combined morning walk = light + exercise + temperature change = triple zeitgeber signal
- **Verdict:** Highly recommended even without direct RCT evidence for the specific 10-min dose

---

## 7. Temperature Manipulation

### Core Body Temperature and Circadian Rhythm

**Key relationship:** Core body temperature (CBT) follows a circadian rhythm with:
- **Maximum:** Late afternoon (~4-6 PM)
- **Minimum:** ~2-3 hours before habitual wake time (3-5 AM for normal sleepers)
- **The CBT minimum is the crossover point of the light PRC**

Temperature is both a marker of circadian phase AND a zeitgeber that can entrain the clock.

### Hot Shower/Bath Before Bed

**Meta-analysis finding (Haghayegh et al., 2019):**
- Source: [PubMed 31102877](https://pubmed.ncbi.nlm.nih.gov/31102877/)
- Water temperature: 40-42.5°C (104-108.5°F)
- Duration: as little as 10 minutes
- Timing: **1-2 hours before bedtime** (optimal: 90 minutes before)
- Result: **Sleep onset latency reduced by ~36%** (Cohen's d = 1.01)
- Mechanism: peripheral vasodilation → core body temperature drops → triggers sleep onset

**Why it works:** The warm water initially raises skin temperature, which causes blood vessels to dilate. After exiting, the rapid heat loss from dilated vessels drops core temperature, mimicking the natural pre-sleep temperature decline. This signals the SCN that it's time for sleep.

### Cold Shower in the Morning

**Evidence for circadian effects:** Limited direct research on cold showers and phase shifting.

**What we know:**
- Cold exposure increases norepinephrine (2-3x), cortisol, and alertness
- The acute temperature shock may help signal "daytime" to the circadian system
- Cold water on face/body activates the diving reflex and sympathetic nervous system
- No PRC exists for cold exposure specifically

**Practical integration:** Morning cold exposure (even 30 seconds at end of warm shower) likely helps with alertness and may support morning entrainment, but the evidence is anecdotal/indirect. The main benefit is acute wakefulness, not circadian shifting per se.

### Practical Temperature Protocol for the App

**Evening (1-2h before target bedtime):**
1. Warm shower or bath (40-42.5°C, 10+ minutes)
2. Allow 60-90 minutes cooling before getting into bed
3. Keep bedroom cool (65-68°F / 18-20°C)

**Morning (upon waking):**
1. Cold face splash or 30-second cold shower at end of warm shower
2. Get out of bed and into cooler air (avoid staying in warm bed)
3. The temperature contrast signals wakefulness

---

## 8. Evening Light Reduction / Digital Chronotherapy

### Blue Light Blocking Glasses: Actual Evidence

**2025 Meta-analysis of RCTs (Frontiers in Neurology):**
- Source: [PMC12668929](https://pmc.ncbi.nlm.nih.gov/articles/PMC12668929/)
- Blue-blocking glasses provide small improvements in sleep
- Current evidence from RCTs does NOT support significant effects in healthy adults
- **HOWEVER:** Good evidence for benefit in adults with sleep disorders, jet lag, or shift work
- Quality matters: Only filters with mDFD >=1.0 (dark orange/amber tint) provide sufficient melanopic input reduction

**Key nuance:** Healthy adults who sleep fine don't benefit much. People with delayed sleep phase (our target users) DO benefit.

**Positive evidence:**
- 16 field studies using appropriately-rated blue-blocking glasses showed some degree of benefit
- In Japanese schoolchildren: partial blue light blocking advanced sleep phase and reduced daytime irritability
- Source: [PMC12574898](https://pmc.ncbi.nlm.nih.gov/articles/PMC12574898/)

### Night Mode / Dark Mode on Phones

**Does it actually help?**
- Night mode reduces melanopsin activation by ~67% at full brightness
- Dimming to minimum brightness reduces it to <1%
- **Dimming is FAR more effective than color shifting**
- The combination of dim + warm is best but still inferior to no screen at all

**Best evidence-based approach (ranked by effectiveness):**
1. No screens 1-2 hours before bed (most effective, least practical)
2. Dim the room lights + dim the phone + night mode + blue-blocking glasses (combined approach)
3. Night mode alone on a bright screen (minimal effect)
4. Reading printed material by dim light (gold standard)

### The "Dim Light Before Bed" Protocol

**Research-based recommendation:**
- Reduce indoor lighting to <50 lux starting 2-3 hours before desired bedtime
- For reference: typical living room = 150-300 lux; candle = ~10 lux; dim bedside lamp = 30-50 lux
- Avoid overhead lighting (activates ipRGCs more than side/low lighting)
- The goal is to stop suppressing endogenous melatonin production

**DLMO typically occurs ~14 hours after wake time.** If target wake = 7 AM, DLMO = ~9 PM, so dim light should start by 7-8 PM for optimal melatonin rise.

### Practical App Integration

The app should:
1. Send "dim down" reminder 2-3 hours before target bedtime
2. Trigger phone's night mode/dim settings automatically (if API allows)
3. Suggest turning off overhead lights
4. Optional: remind to put on blue-blocking glasses
5. Track compliance (did user reduce phone usage in the hour before bed?)

---

## 9. Relapse Prevention

### How Quickly Does a Shift Relapse?

**Without maintenance:**
- Circadian clock drifts ~15-30 minutes LATER per day without zeitgeber input
- Human intrinsic circadian period averages ~24.2 hours (slightly >24h)
- A 2-hour phase advance will fully relapse in approximately **1-2 weeks** without maintenance
- The natural tendency is ALWAYS toward delay (later sleep)

**With partial maintenance:**
- Inconsistent morning light: relapse within 3-5 days
- Skipping melatonin: slower relapse (~1 week)
- Weekend sleep-in: 30-60 min delay per weekend day = "social jet lag"

### The Weekend Problem (Social Jet Lag)

**Social jet lag = difference between workday and free-day sleep midpoints**

- 69-70% of people have >1 hour of social jet lag (Roenneberg)
- Each hour of social jet lag = 33% increased obesity risk
- 2 hours of social jet lag doubles diabetes risk
- Late chronotypes are most affected
- Every weekend of sleeping in 2 hours later = undoing 2 hours of phase advance work

**This is the #1 reason chronotype shifts fail long-term.**

### Minimum Maintenance Protocol

**To hold a 1-2 hour phase advance after initial shifting:**

1. **Non-negotiable:** Consistent wake time within +/- 30 min, 7 days/week (including weekends)
2. **Morning light:** 10-30 min outdoor light within 1 hour of waking, daily
3. **Evening light reduction:** Dim lights 2h before bed (at least 5 days/week)
4. **Meal timing:** Breakfast within 2h of waking, no heavy meals within 3h of bed
5. **Optional but helpful:** Low-dose melatonin (0.5mg) 5-6h before bed if prone to drift

**Weekend flexibility:** Maximum 30 min later than weekday wake time. If you wake at 7 AM on weekdays, absolute latest weekend wake = 7:30 AM. Sleeping until 9 AM on weekends will undo most of the week's progress.

### Seasonal Effects

- **Winter (short days):** Circadian clock naturally delays due to less morning light and more evening artificial light. Maintenance is HARDER in winter. Light therapy lamp becomes more important.
- **Summer (long days):** Natural early morning light makes maintenance easier. Many people naturally shift earlier in summer.
- **DST transitions:** Spring forward = forced 1h advance (hard for evening types). Fall back = forced 1h delay (easier).

### App Design for Relapse Prevention

The app should:
1. Track wake time consistency (7-day rolling window)
2. Alert when weekend drift exceeds 30 min
3. Show "Shift Stability Score" based on consistency metrics
4. Seasonal adjustment: auto-adjust recommendations based on sunrise time
5. Re-engagement: if user lapses for >3 days, trigger "rebuild" mini-protocol
6. **This is the natural subscription justification** — maintenance is ongoing, not a one-time fix

---

## 10. Existing Apps/Programs That Do Chronotype Shifting

### Timeshifter
- **Focus:** Jet lag (primary), shift work (secondary)
- **Mechanism:** Personalized plans based on chronotype, sleep pattern, itinerary
- **Recommends:** Light exposure timing, melatonin timing, caffeine timing, sleep windows
- **Pricing:** $10/plan or $25/year
- **Gap:** Does NOT address general chronotype shifting for non-travelers. No ongoing maintenance. No behavioral enforcement.
- **Science basis:** Strong — based on circadian research, co-founded by circadian researcher

### RISE
- **Focus:** Sleep debt tracking + circadian energy prediction
- **Mechanism:** Calculates sleep debt, predicts energy dips/peaks based on circadian rhythm
- **Revenue:** ~$650K/month, $3.7M early 2025
- **Pricing:** $69.99/year
- **Gap:** Tracks but doesn't actively SHIFT. No phase advance protocol. No light/melatonin timing. Passive observation, not active intervention.
- **Rating:** 4.7 stars, 37K+ reviews

### Sleep Reset
- **Focus:** CBT-I based sleep program with coaching
- **Mechanism:** CBT techniques (stimulus control, sleep restriction, cognitive restructuring)
- **Includes:** 1:1 sleep coach via telehealth, action plans, sleep logging
- **Effectiveness:** 90%+ report improvement after 28 days
- **Gap:** Treats insomnia, not specifically chronotype shifting. Expensive ($50-100/month). Human coaching doesn't scale well.

### Somryst (Prescription Digital Therapeutic)
- **Focus:** FDA-cleared CBT-I for chronic insomnia
- **Type:** 9-week prescription digital therapeutic (PDT)
- **Components:** Sleep restriction/consolidation, stimulus control, cognitive restructuring
- **Requires:** Prescription from physician
- **Gap:** Prescription-only, treats insomnia not chronotype, 9-week structured program only

### SleepioRx
- **Focus:** FDA-cleared CBT treatment for insomnia
- **Type:** Prescription digital therapeutic
- **Similar to:** Somryst — CBT-I delivery via app
- **Gap:** Same as Somryst — prescription, insomnia-focused

### What's Missing in the Market

**No app currently does ALL of these:**
1. Chronotype assessment (passive detection from phone data)
2. Active phase-advance protocol with specific daily instructions
3. Combined zeitgeber management (light + melatonin timing + meals + exercise + temperature)
4. Behavioral enforcement (not just suggestions — actual enforcement with consequences)
5. Long-term maintenance tracking with relapse prevention
6. Gamification / Life Score tied to circadian consistency
7. Non-prescription, consumer-friendly

**This is the gap our "Shift Your Clock" feature fills.**

---

## 11. Safety Considerations

### When Should Users See a Doctor?

**Red flags that indicate DSPD (clinical disorder, not just "night owl"):**

| Normal Evening Chronotype | Delayed Sleep Phase Disorder (DSPD) |
|--------------------------|-------------------------------------|
| Prefers late hours but CAN sleep earlier when needed | Unable to fall asleep earlier even when trying for weeks |
| Functions adequately on workday schedule | Significant impairment: missing work/school, daytime sleepiness, depression |
| Occasional difficulty but manageable | Chronic (>3 months) inability to align with required schedule |
| Responds to behavioral changes | Does NOT respond to sleep hygiene or behavioral changes alone |
| Normal sleep quality when sleeping at preferred time | May have comorbid insomnia symptoms |

**DSPD diagnostic criteria (ICSD-3):**
1. Chronic/recurrent delay in sleep timing relative to desired/required schedule
2. Symptoms present for at least 3 months
3. When allowed to sleep at preferred time, sleep quality and duration are normal
4. Sleep log/actigraphy for at least 7 days demonstrates stable delay
5. Functional impairment (social, occupational, educational)

**App should recommend doctor consultation if:**
- User has tried the protocol for 3+ weeks with zero improvement
- User reports inability to fall asleep before 3-4 AM consistently
- User reports excessive daytime sleepiness despite adequate sleep hours
- User has comorbid depression, anxiety, or ADHD symptoms
- User is under 18 (adolescent circadian timing is biologically later)

### Light Therapy Contraindications

**Do NOT use bright light therapy without medical supervision if:**
- **Bipolar disorder:** Risk of triggering hypomania/mania. Must be supervised by psychiatrist.
- **Retinal diseases:** Macular degeneration, retinitis pigmentosa, diabetic retinopathy
- **Photosensitizing medications:** Phenothiazines (antipsychotics), psoralens, certain antiarrhythmics, antimalarials, St. John's Wort
- **Eye surgery recovery:** Recent cataract or LASIK surgery
- **Age >50:** Higher risk of macular degeneration — recommend ophthalmologist consultation

**The app should include a safety screening questionnaire:**
1. Have you been diagnosed with bipolar disorder?
2. Do you have any eye/retinal conditions?
3. Are you taking any medications that cause light sensitivity?
4. Are you under treatment for any psychiatric condition?

→ If YES to any: "We recommend consulting your doctor before using bright light therapy"

### Melatonin Contraindications and Drug Interactions

**High-risk drug interactions:**
- **Blood thinners (warfarin, heparin):** Melatonin increases bleeding risk
- **Diabetes medications (insulin, metformin):** Melatonin affects blood sugar levels
- **Immunosuppressants (cyclosporine, tacrolimus):** Melatonin stimulates immune function, may reduce drug effectiveness
- **Seizure medications (anticonvulsants):** Potential interaction
- **Blood pressure medications:** Melatonin may lower blood pressure
- **CNS depressants (benzodiazepines, opioids):** Additive sedation
- **Antidepressants (SSRIs, MAOIs):** Serotonin interaction risk
- **Oral contraceptives:** May increase melatonin levels

**Populations that should avoid melatonin without medical advice:**
- Pregnant or breastfeeding women
- Children under 18 (unless prescribed)
- People with autoimmune diseases
- People with seizure disorders
- People taking multiple medications

**App approach:** Provide general education. Never recommend specific doses. Always say "consult your doctor or pharmacist before taking melatonin." Include a prominent disclaimer.

---

## 12. Success Rates and Realistic Expectations

### What Percentage of People Succeed at Chronotype Shifting?

**Clinical setting (supervised, with light + melatonin):**
- 45% success rate with combined treatment (phototherapy + time therapy + medication)
- Burgess protocol: ~100% showed some advance (mean 2.5h), but under strict lab conditions
- DSPD treatment trials: 60-70% show improvement with combined light + melatonin

**Self-directed (behavioral only, like an app):**
- No formal RCT data exists for app-based chronotype shifting
- CBT-I apps show 90% report improvement after 28 days (but this is insomnia, not chronotype)
- Estimated realistic success rate: **30-50% maintain a 1h+ shift at 3 months**
- Motivation is the #1 barrier, not biology

### How Much Shift Is Realistic?

| Starting Chronotype | Realistic Shift | Evidence |
|--------------------|-----------------|-----------|
| Moderate evening type (sleep 1 AM, wake 9 AM) | **1-2 hours earlier** | Well-supported by Burgess data |
| Strong evening type (sleep 2-3 AM, wake 10-11 AM) | **1-2 hours** with protocol, **2-3 hours** with melatonin + light | Possible but harder to maintain |
| Extreme DSPD (sleep 4-6 AM, wake noon+) | **1-2 hours without clinical help**, needs doctor for more | App alone insufficient |
| Morning type wanting to shift slightly earlier | **30-60 min** | Already near biological limit |

**The hard limit:** Chronotype is ~50% genetic (351 gene variants). The maximum achievable shift through behavioral intervention is approximately **1.8-2.4 hours** (Burgess protocol with all interventions). Claims of turning a "night owl into a morning lark" are scientifically unsupported.

### Long-Term Maintenance Data

**Formal long-term studies are SCARCE.** What we know:

- **3 months:** If maintained with consistent wake time + morning light, most of the shift holds. Without maintenance, full relapse in 1-2 weeks.
- **6 months:** The 6-month mark represents reasonable timeframe for neurological adaptation. Habit systems (basal ganglia pathways) have formed. But the circadian system still requires zeitgeber input.
- **1 year:** No published data on app-based 1-year maintenance of chronotype shift. Clinical maintenance with light therapy shows some patients using light boxes for years (analogous to how DSPD patients use light therapy indefinitely).
- **Behavioral shift (30-60 min) vs pharmacological (1-2h+):** The smaller behavioral shift is more maintainable long-term.

### Setting User Expectations in the App

**Honest framing:**
- "Most people can shift their sleep schedule 1-2 hours earlier in 2 weeks"
- "Maintaining the shift requires ongoing consistency, especially on weekends"
- "You won't become a different person — the goal is to align your biology with your life"
- "If you're more than 3 hours misaligned, consider consulting a sleep specialist"

---

## 13. Synthesized 14-Day Protocol Design

### Based on all research above, here is an evidence-based 14-day "Shift Your Clock" protocol:

### Phase 0: Assessment (Days -3 to 0)
- **Passive chronotype detection** from phone usage data (screen-on time, last app usage, first app usage)
- **MEQ-SA questionnaire** (5 questions for quick chronotype classification)
- **Current sleep schedule assessment** (average bedtime, wake time over past week)
- **Target schedule** — user sets desired wake time
- **Calculate shift needed** — difference between current and target
- **Safety screening** — bipolar, eye conditions, medications
- **If shift >3 hours:** recommend consulting doctor first

### Phase 1: Foundation (Days 1-3)
**Goal: Establish zeitgeber routine without shifting schedule yet**

| Time (relative to current wake) | Action | Evidence |
|-------------------------------|--------|---------|
| Wake time (unchanged) | Wake at current habitual time | Baseline anchor |
| Within 5 min of waking | Outdoor light OR light therapy lamp 15 min | Huberman, Burgess |
| Within 30 min of waking | 10 min walk outdoors (light + exercise) | Youngstedt PRC |
| Within 1h of waking | Breakfast (protein-rich) | Peripheral clock entrainment |
| Current bedtime - 6h | Melatonin 0.5mg (if using, with doctor ok) | Burgess, optimal advance zone |
| Current bedtime - 2h | Dim lights, night mode on devices | Melatonin PRC, prevent delay |
| Current bedtime - 1.5h | Warm shower (10 min, 40-42°C) | Haghayegh meta-analysis |
| Current bedtime | Lights out | — |

### Phase 2: Gradual Shift (Days 4-11)
**Goal: Advance schedule by 15 min every 2 days**

| Day | Wake Time Shift | Bedtime Shift | Melatonin Timing Shift |
|-----|----------------|---------------|----------------------|
| 4-5 | -15 min | -15 min | -15 min |
| 6-7 | -30 min total | -30 min total | -30 min total |
| 8-9 | -45 min total | -45 min total | -45 min total |
| 10-11 | -60 min total | -60 min total | -60 min total |

**Daily protocol (same as Phase 1, but all times shift with schedule):**
- Morning light within 5 min of new wake time
- Walk within 30 min
- Breakfast within 1h
- Melatonin 6h before new bedtime
- Dim lights 2h before new bedtime
- Warm shower 1.5h before new bedtime

**For users needing >1h shift:** Continue Phase 2 pattern, adding 15 min every 2 days until target reached (may extend beyond 14 days).

### Phase 3: Stabilization (Days 12-14)
**Goal: Lock in new schedule**

- Maintain new schedule consistently for 3 days
- Continue ALL zeitgeber protocols
- No schedule changes
- Focus on sleep quality and energy tracking
- Begin weekend protocol education

### Phase 4: Maintenance (Ongoing — Post-Program)
**Goal: Prevent relapse**

**Daily non-negotiables:**
1. Wake within +/- 15 min of target (including weekends)
2. Morning light 10+ min within 1h of waking
3. No screens in bed before sleep

**Weekly check-ins:**
- Life Score reflects consistency
- Streak system for wake time compliance
- Alert if weekend drift >30 min

**Seasonal adjustments:**
- Winter: increase light therapy lamp use, earlier dim-down
- Summer: leverage natural early light

### Expected Outcomes

| Metric | Expected Result | Confidence |
|--------|----------------|------------|
| Phase advance (with full protocol) | 1-2 hours | High (Burgess data) |
| Phase advance (light + schedule only, no melatonin) | 0.5-1.5 hours | Moderate |
| Sleep onset latency improvement | -10 to -30 min | High (warm shower + melatonin data) |
| Maintenance at 1 month | 60-70% of users | Estimated |
| Maintenance at 3 months | 40-50% of users | Estimated |
| Maintenance at 6 months | 30-40% of users | Estimated (with app enforcement) |

---

## Key Citations

### Burgess Lab Studies
1. Revell VL et al. "Advancing Human Circadian Rhythms with Afternoon Melatonin and Morning Intermittent Bright Light." J Clin Endocrinol Metab, 2006. [PMC3841985](https://pmc.ncbi.nlm.nih.gov/articles/PMC3841985/)
2. Crowley SJ, Eastman CI. "Phase advancing human circadian rhythms with morning bright light, afternoon melatonin, and gradually shifted sleep: can we reduce morning bright-light duration?" Sleep Med, 2015. [PMC4344919](https://pmc.ncbi.nlm.nih.gov/articles/PMC4344919/)
3. Burke TM et al. "Combination of Light and Melatonin Time Cues for Phase Advancing the Human Circadian Clock." J Clin Endocrinol Metab, 2013. [PMC3792377](https://pmc.ncbi.nlm.nih.gov/articles/PMC3792377/)
4. Burgess HJ et al. "Human Phase Response Curves to Three Days of Daily Melatonin: 0.5 mg Versus 3.0 mg." J Clin Endocrinol Metab, 2010. [PubMed 20410229](https://pubmed.ncbi.nlm.nih.gov/20410229/)
5. Burgess HJ et al. "Clinical Implications of the Melatonin Phase Response Curve." J Clin Sleep Med, 2010. [PMC2928905](https://pmc.ncbi.nlm.nih.gov/articles/PMC2928905/)

### Exercise PRC
6. Youngstedt SD et al. "Human circadian phase-response curves for exercise." J Physiol, 2019. [PMC6462487](https://pmc.ncbi.nlm.nih.gov/articles/PMC6462487/)
7. Youngstedt SD et al. "Circadian rhythm phase shifts caused by timed exercise vary with chronotype." JCI Insight, 2020. [PMC7098792](https://pmc.ncbi.nlm.nih.gov/articles/PMC7098792/)

### Temperature / Bathing
8. Haghayegh S et al. "Before-bedtime passive body heating by warm shower or bath to improve sleep: A systematic review and meta-analysis." Sleep Med Rev, 2019. [PubMed 31102877](https://pubmed.ncbi.nlm.nih.gov/31102877/)

### Blue Light / Evening Light
9. "Optimizing the Potential Utility of Blue-Blocking Glasses for Sleep and Circadian Health." TVST, 2025. [PMC12315928](https://pmc.ncbi.nlm.nih.gov/articles/PMC12315928/)
10. "Efficacy of blue-light blocking glasses: systematic review and meta-analysis." Frontiers Neurol, 2025. [PMC12668929](https://pmc.ncbi.nlm.nih.gov/articles/PMC12668929/)

### Wavelength Research
11. "The spectral sensitivity of human circadian phase resetting changes dynamically with light duration." PNAS, 2022. [pnas.org](https://www.pnas.org/doi/10.1073/pnas.2205301119)

### Light Duration vs Intensity
12. "Light-Induced Changes of the Circadian Clock of Humans: Increasing Duration is More Effective than Increasing Light Intensity." Sleep, 2011. [PMC3079938](https://pmc.ncbi.nlm.nih.gov/articles/PMC3079938/)

### Meal Timing
13. "Meal Timing Regulates the Human Circadian System." Curr Biol, 2017. [PubMed 28578930](https://pubmed.ncbi.nlm.nih.gov/28578930/)

### Treatment Reviews
14. "Treatment of Circadian Rhythm Sleep-Wake Disorders." Sleep Med Rev, 2023. [PMC9886819](https://pmc.ncbi.nlm.nih.gov/articles/PMC9886819/)
15. Wilhelmsen-Langeland A et al. "A Randomized Controlled Trial with Bright Light and Melatonin for Delayed Sleep Phase Disorder." J Biol Rhythms, 2013. [PubMed](https://journals.sagepub.com/doi/10.1177/0748730413500126)

### Melatonin Quality
16. "Poor Quality Control of Over-the-Counter Melatonin." J Clin Sleep Med, 2017. [PMC5263069](https://pmc.ncbi.nlm.nih.gov/articles/PMC5263069/)

### Phase Response Curves (General)
17. Circadian Sleep Disorders Network — PRC Reference. [circadiansleepdisorders.org](https://www.circadiansleepdisorders.org/info/PRC.php)

### Light Therapy Safety
18. ISBD Chronobiology Task Force. "Light therapy for bipolar disorders." Bipolar Disord, 2025. [PMC12291220](https://pmc.ncbi.nlm.nih.gov/articles/PMC12291220/)
19. CET.org — Bright Light Exposure Risks. [cet.org](https://cet.org/bright-light-exposure-risks/)

### Social Jet Lag
20. Roenneberg T et al. "Social jetlag: misalignment of biological and social time." Chronobiol Int, 2006. [PubMed 16687322](https://pubmed.ncbi.nlm.nih.gov/16687322/)

---

## Summary for Product Team

### What the science says we CAN do in an app:
1. **Assess chronotype** passively (phone data) and actively (questionnaire)
2. **Provide a structured shifting protocol** (15 min every 2 days with zeitgeber support)
3. **Time light exposure recommendations** (morning outdoor light, evening dimming)
4. **Time meal and exercise recommendations** (breakfast within 1h, morning walk)
5. **Recommend warm shower timing** (90 min before bed)
6. **Educate on melatonin timing** (without prescribing — "ask your doctor")
7. **Enforce consistency** via alarms, streaks, Life Score (the app's core competency)
8. **Prevent relapse** through ongoing wake time tracking and weekend drift alerts
9. **Screen for DSPD** and recommend doctor when appropriate

### What the science says we CANNOT claim:
1. Cannot turn a night owl into a morning lark (max shift: 1.8-2.4h)
2. Cannot claim phone screen delivers light therapy (too dim by 25-100x)
3. Cannot prescribe melatonin doses (regulatory issue)
4. Cannot treat DSPD (medical condition requiring diagnosis)
5. Cannot guarantee long-term results without ongoing maintenance

### The competitive advantage:
**No existing app combines chronotype assessment + active shifting protocol + behavioral enforcement + long-term maintenance.** Timeshifter is jet-lag only. RISE is passive tracking. Sleep Reset is insomnia-focused CBT-I. Our app would be the first to actively shift AND enforce chronotype alignment with gamification.
