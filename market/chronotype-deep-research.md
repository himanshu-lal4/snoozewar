# Chronotype Deep Research — Academic Sources & App Design Implications

*Research compiled: 2026-04-07*

---

## 1. The 5 Chronotype Subtypes (2025 Academic Research)

### The Landmark Study

**Paper:** "Latent brain subtypes of chronotype reveal unique behavioral and health profiles across population cohorts"
**Journal:** *Nature Communications* (December 2025)
**Lead Researchers:** Le Zhou, Danilo Bzdok (corresponding), Julie Carrier, Kai-Florian Storch
**Institution:** TheNeuro (Montreal Neurological Institute), McGill University, with collaborators across Canada, Norway, and UK
**Sample:** 27,030 UK Biobank adults + 10,550 US children (ABCD Study) for validation

### Methodology

The team developed a supervised pattern-learning framework integrating three complementary brain-imaging modalities:
1. Structural MRI (brain volume/shape)
2. White matter integrity (diffusion tensor imaging)
3. Functional connectivity (resting-state fMRI)

These were combined with deep behavioral and health profiling data. This is the first study to show that the lark/owl binary hides **biologically distinct subtypes** within each category.

### The 5 Subtypes

| # | Label | Key Profile |
|---|-------|-------------|
| **1** | Night Owl — Emotional Regulation | Enhanced emotional regulation, faster reaction times, increased white matter integrity in basal ganglia and limbic regions. The "high-functioning" night owl. |
| **2** | Night Owl — At-Risk | Decreased white matter integrity across ALL tracts. Associated with smoking, cardiovascular risks, lower physical activity, depressive symptoms, antidepressant use. The "struggling" night owl. |
| **3** | Early Bird — Optimal Health | Higher education, non-smoking, minimal alcohol, lower risk-taking, fewer emotional difficulties. The "thriving" morning person. |
| **4** | Early Bird — Female-Dominant, Depression-Linked | Predominantly female. Associated with depressive symptoms and antidepressant prescriptions despite morning preference. Shows that being a morning type =/= being healthy. |
| **5** | Night Owl — Male-Dominant, Cardiovascular Risk | Primarily male. Elevated cardiovascular disease risks. Distinct from Subtype 2's more generalized health risks. |

### Key Insight for App Design

> The binary "are you a morning or evening person?" is scientifically inadequate. Within each category, there are people thriving and people struggling. **An app should not just detect chronotype but detect which subtype** — especially Subtype 2 (at-risk night owls) who need the most intervention.

### Validation

The ABCD Study (children) showed "reversed age distributions" compared to adults, confirming these subtypes emerge during development and shift across the lifespan. Sex-associated brain-behavioral patterns replicated across both cohorts.

---

### The 6 Chronotype Model (Russian Study, 2021)

**Researchers:** Dmitry S. Sveshnikov et al., RUDN University, Russia
**Journal:** *Personality and Individual Differences*
**Sample:** ~2,300 participants (university students)

This study proposed six types based on alertness patterns throughout the day:

| Type | % of Sample | Pattern |
|------|-------------|---------|
| Morning Type | 13% | High AM, medium midday, low evening |
| Evening Type | 24% | Low AM, medium midday, high at night |
| Highly Active | 9% | High alertness throughout the entire day |
| Daytime Sleepy | 18% | High AM, low midday dip, medium evening |
| Daytime Active | 15% | Low start, peaks at midday, medium finish |
| Moderately Active | 16% | Low energy levels all day |

**Critical finding:** Only 37% identified as traditional morning larks (13%) or night owls (24%). **63% fell into the four "in-between" categories.** This aligns with the MEQ data showing most people score as "intermediate."

### App Design Implication

The "Daytime Sleepy" type (18%) is particularly interesting — these people are morning-capable but crash midday. The "Moderately Active" type (16%) has low energy all day and may need the most help. A simple morning/evening binary would misclassify 63% of users.

---

## 2. Michael Breus's 4 Chronotype Model (Bear, Lion, Wolf, Dolphin)

### The Model

| Animal | Equivalent | % Population | Profile |
|--------|-----------|-------------|---------|
| **Bear** | Intermediate | ~55% | Follows solar cycle, peak 10am-2pm, sociable, avoids conflict |
| **Lion** | Morning type | ~15-20% | Early riser, peak before noon, goal-oriented, fitness-focused |
| **Wolf** | Evening type | ~15-20% | Late riser, creative peak after sunset, impulsive, risk-taker |
| **Dolphin** | Insomnia-prone | ~10% | Light sleeper, anxious, irregular patterns, high intelligence |

### Scientific Validity Assessment: **Mostly Pop Science with a Scientific Foundation**

**What's valid:**
- The three-way split (morning/intermediate/evening) is well-established in chronobiology
- Breus draws from the Morningness-Eveningness Questionnaire research
- The behavioral correlates (morning types = more conscientious, evening types = more creative/impulsive) are supported by peer-reviewed literature

**What's NOT validated:**
- The animal names and specific behavioral profiles are Breus's own invention, not from peer-reviewed research
- The "Dolphin" type conflates chronotype (circadian preference) with a sleep disorder (insomnia) — these are separate constructs in sleep science
- No published peer-reviewed study has validated the 4-animal framework specifically
- Breus himself admits he was "never really comfortable with the three-category break-out" from the MEQ and added the Dolphin type based on clinical observation, not controlled research
- The specific daily schedules Breus prescribes (e.g., "Bears should eat lunch at 12:30") are not empirically tested

**How it compares to the academic 5-subtype model:**
- The McGill 5-subtype model is based on neuroimaging + 27K participants and published in *Nature Communications*
- Breus's model is based on clinical observation and published as a popular book (*The Power of When*, 2016)
- The academic model shows subtypes WITHIN morning/evening categories (healthy vs. at-risk). Breus treats each category as monolithic
- The 6-chronotype Russian model more closely maps actual alertness patterns than Breus's 4 animals

### App Design Implication

> Breus's model is excellent **marketing** (people love animal quizzes) but poor **science**. For the app, use the scientific questionnaires (MEQ/MCTQ) as the engine, but could use animal/personality labels for user engagement. Never base clinical recommendations on the Breus model alone.

---

## 3. How to Determine Chronotype Without a Sleep Lab

### 3A. Morningness-Eveningness Questionnaire (MEQ)

**Created by:** James A. Horne and Olov Ostberg, 1976
**Citations:** 4,000+ (considered the gold standard)

| Detail | Spec |
|--------|------|
| Questions | 19 multiple-choice |
| Score range | 16-86 |
| Time to complete | ~5-10 minutes |
| What it asks | Preferred sleep/wake times, subjective peak times, "if entirely free to plan your day" scenarios |

**Scoring Categories:**

| Score | Category |
|-------|----------|
| 70-86 | Definitely morning type |
| 59-69 | Moderately morning type |
| 42-58 | Neither type (intermediate) |
| 31-41 | Moderately evening type |
| 16-30 | Definitely evening type |

**Validation against objective markers:**
- Original validation: correlated with oral temperature rhythm (morning types peak earlier)
- In 14 studies comparing MEQ to objective circadian phase markers (core body temperature, Dim Light Melatonin Onset/DLMO), ALL found significant correlations
- Pearson's correlation coefficients range from -0.353 to -0.760 (moderate to strong)

**Limitations:**
- Developed on student populations; cutoff points may not apply to middle-aged/older adults
- Asks about "preferences" rather than actual behavior — what you'd LIKE to do vs. what you actually do
- Cultural/social factors can bias responses
- A reduced 5-item version (rMEQ) exists with acceptable reliability for screening

### 3B. Munich ChronoType Questionnaire (MCTQ)

**Created by:** Till Roenneberg et al., Ludwig Maximilian University of Munich, 2000
**Translated into:** 13 languages
**Key innovation:** Measures ACTUAL behavior, not preference

| Detail | Spec |
|--------|------|
| Core questions | ~14 (sleep timing on work days AND free days separately) |
| What it measures | Actual sleep onset, sleep offset, sleep latency, alarm use — separately for work and free days |
| Chronotype metric | MSFsc (midpoint of sleep on free days, corrected for sleep debt) |
| Social jet lag metric | Difference between midsleep on work days vs. free days |

**How MSFsc is calculated:**
1. Calculate midpoint of sleep on free days (MSF) = halfway between sleep onset and sleep offset
2. Calculate average weekly sleep debt (difference between free-day and work-day sleep duration)
3. Correct MSF for "oversleep" on free days: MSFsc = MSF - (SDf - SDw)/2
   - SDf = sleep duration on free days
   - SDw = sleep duration on work days
4. MSFsc is only valid when the person does NOT use an alarm on free days

**Chronotype categories (from MSFsc):**

| MSFsc | Category |
|-------|----------|
| <=3:59 | Early type |
| 4:00-4:59 | Intermediate type |
| >=5:00 | Late type |

**Why it's better than MEQ for an app:**
- Measures actual sleep times, not hypothetical preferences
- Automatically quantifies social jet lag (built into the questionnaire)
- Continuous output (not categorical) — better for personalization algorithms
- Can be PASSIVELY collected from phone/wearable data without asking 19 questions

### 3C. Inferring Chronotype from Behavioral Data (Passive Detection)

This is where it gets relevant for app design. Multiple studies show phone data can reliably estimate chronotype:

**Study 1: Digital Chronotype (Lin et al., 2019)**
- Combined chronotype + digital phenotype from smartphone behavior
- Used screen on/off times to identify activity cycles
- **Correlation between app-recorded and self-reported midpoint of sleep: r = 0.87** (very strong)

**Study 2: Phone Usage as Circadian Proxy (Abdullah et al., ACM 2018)**
- Used 15-minute bins of screen on/off activity
- **89% accuracy** compared to consumer wearable for sleep inference
- App use patterns (duration, switching behavior) distinguish periods of low and high alertness

**Study 3: Social Network Differences by Chronotype (Aledavood et al., 2017)**
- Identified chronotype from mobile phone call/text patterns
- Late chronotypes had larger but less dense social networks
- Phone activity timing alone could classify chronotype

**Study 4: Smartphone-Circadian Interaction (PMC, 2023)**
- Found that human-smartphone interaction patterns serve as a reliable proxy for circadian rhythm
- Screen unlock patterns correlate with melatonin onset

**Impact of phone use on sleep:**
- 1 hour of increased daily smartphone use delays circadian rhythm by 3.5 minutes
- 1 hour of increased daily smartphone use reduces total sleep time by 5.5 minutes
- 1 hour of increased PRE-SLEEP phone use delays circadian rhythm by 1.7 minutes

### 3D. Minimum Data for Reliable Classification

Based on the research:

| Method | Data Needed | Time Required | Accuracy |
|--------|-------------|---------------|----------|
| MEQ questionnaire | 19 answers | 5-10 min (one-time) | Gold standard, r = -0.35 to -0.76 vs DLMO |
| MCTQ questionnaire | ~14 answers | 5 min (one-time) | Comparable to MEQ, better for social jet lag |
| Phone screen data | Screen on/off logs | 7-14 days passive | 89% vs wearable, r = 0.87 vs self-report |
| Sleep/wake logs | Daily bedtime + wake time | 7 days minimum | Good for MCTQ-style MSFsc calculation |
| Wearable (Oura method) | Activity + temp + sleep | 30-90 days | Most accurate but requires hardware |

### App Design Recommendation

**Hybrid approach (best accuracy, best UX):**
1. **Day 1:** Ask 5-item rMEQ (reduced MEQ) during onboarding — takes 2 minutes, gives initial classification
2. **Days 1-7:** Passively collect screen on/off data + alarm/wake times
3. **Day 7:** Recalculate using MCTQ-style MSFsc from actual behavioral data (need at least 2 free days)
4. **Day 14+:** Continuously refine using rolling 14-day behavioral data
5. **Confidence score:** Show user how confident the classification is (increases with more data)

---

## 4. How Chronotype Affects Daily Life

### 4A. Optimal Exercise Timing

**Study:** Youngstedt et al. (2019), *Current Biology*, 52 sedentary adults

| Chronotype | Best Exercise Time | Phase Shift Effect |
|------------|-------------------|-------------------|
| **Early types** | Morning (aligns with rhythm) | Morning exercise: 0.62h phase advance |
| **Late types** | Morning OR evening both work | Morning: 0.54h advance, Evening: 0.46h advance |
| **Everyone** | Avoid late evening if early type | Evening exercise in early types causes more awakenings |

**Key findings:**
- Morning exercise was associated with shorter sleep latency for ALL chronotypes
- Evening exercise in early types led to higher frequency of awakenings and insomnia symptoms
- Late chronotypes benefit from exercise at almost any time (both morning and evening produced phase advances)
- **Muscle strength peaks 4pm-8pm for everyone** (circadian body temperature peak)
- Performance variation across the day: ~10% for physical tasks, ~7-9% for cognitive tasks

**Metabolic effects of exercise timing:**
- High-intensity training in the AFTERNOON improved blood sugar in men with Type 2 diabetes
- The SAME training in the MORNING actually WORSENED blood sugar control
- Evening aerobic exercise reduced blood pressure more than morning in hypertensive individuals

### 4B. Peak Cognitive Performance Windows

**Study:** Facer-Childs et al. (2018), *Sports Medicine - Open*

| Measure | Early Chronotypes (ECT) | Late Chronotypes (LCT) |
|---------|------------------------|----------------------|
| **Peak cognitive time** | Shortly after waking | ~12.6 hours post-waking |
| **Psychomotor vigilance at 8am** | 8.4% BETTER than LCT | Severely impaired |
| **Executive function at 8am** | 5.9% better than LCT | Impaired |
| **Grip strength at 8am** | 7.4% better than LCT | 10.1% daily variation |
| **Sleepiness at 8am (KSS)** | Normal | 3-point WORSE on Karolinska Scale |
| **Daily variation range** | 3.5-7.1% | Up to 26.2% (!!) |

**Critical insight:** Late chronotypes have **MUCH larger daily performance swings** (up to 26.2% variation) compared to early types (3.5-7.1%). This means scheduling matters FAR more for evening types than morning types. An evening type doing focused work at 8am is operating at a massive deficit.

### 4C. Meal Timing and Metabolism (Chrononutrition)

| Finding | Source |
|---------|--------|
| Late dinner (22:00 vs 18:00) increases blood glucose, delays triglyceride peaks, reduces fat oxidation | Randomized crossover trial |
| Glucose tolerance and insulin sensitivity DECREASE in the evening and overnight (circadian) | Multiple studies |
| Eating during melatonin secretion window leads to impaired glucose tolerance and weight gain | Chrononutrition review, 2025 |
| Morning chronotypes align better with diurnal insulin sensitivity and leptin signaling | Chrononutrition and Energy Balance, 2025 |
| Evening chronotypes more likely to eat during melatonin secretion = metabolic penalty | Same review |
| Later lunch timing reduces resting metabolic rate | Randomized crossover |
| Early eating windows improve lipid profiles, reduce insulin resistance, and lower body fat — independent of calorie count | Meta-analysis |

**For the app:** Evening types who eat late are fighting their metabolism AND their circadian biology. An app that nudges meal timing earlier could have measurable metabolic benefits — but the nudge needs to respect the person's actual chronotype, not force everyone into a 6am breakfast.

### 4D. Mood and Mental Health

| Finding | Source/Scale |
|---------|-------------|
| Evening chronotype = independent predictor of major depressive disorder (MDD) | UK Biobank, 70,000+ adults |
| Evening type = higher risk of bipolar disorder, anxiety disorders | Frontiers in Neuroscience review, 2022 |
| Evening type = higher cognitive reactivity scores, especially rumination | Multiple studies |
| Evening type = transdiagnostic correlate of substance use severity | Emerging evidence |
| Sleep quality PARTIALLY mediates the chronotype-depression relationship | Nature Scientific Reports, 2024 |
| Depression prevalence: morning types had lower risk of anxiety, depression AND insomnia | Chinese cross-sectional, 2024 |

**Mechanism:** Evening types forced into morning schedules experience chronic social jet lag, which leads to sleep deprivation, which leads to rumination, which leads to depressive symptoms. The depression isn't CAUSED by being an evening type — it's caused by the mismatch between biology and society.

### 4E. Social Jet Lag

See Section 6 for full details.

---

## 5. Chronotype Shifts Across the Lifespan

### The Developmental Arc

| Age | Chronotype Tendency | Mechanism |
|-----|-------------------|-----------|
| **0-10** | Strongly morning | Immature circadian system, parents enforce schedule |
| **10-12** | Beginning shift toward evening | Pre-puberty, first signs of delay |
| **12-15** | Rapid shift toward evening | Puberty onset — hormonal cascade |
| **15-20** | Maximum evening preference | Peak delay: girls at 19.5 years, boys at 20.9 years |
| **20-25** | Beginning reversal back toward morning | Post-pubertal stabilization |
| **25-65** | Gradual and continuous shift toward morning | ~30 minutes per decade |
| **65+** | Strongly morning again | Reduced light sensitivity, altered melatonin |

### Why Teenagers Shift to Evening (Biological, Not Laziness)

**Study:** Randler et al. (2017), *Scientific Reports*, "From Lark to Owl"

The adolescent evening shift is driven by **three biological mechanisms:**

1. **Puberty hormones alter clock gene expression.** Estrogen (rising at puberty onset) directly modifies circadian clock gene expression in the brain. Testosterone has similar effects.

2. **Melatonin onset delays.** The timing of melatonin secretion shifts later during puberty, meaning teenagers genuinely cannot fall asleep at "adult" bedtimes — their brains aren't producing the sleep signal yet.

3. **Circadian period lengthens.** The intrinsic circadian period (tau) is slightly longer in adolescents, causing a natural tendency to drift later each day.

**Sex differences:**
- Girls begin showing delay 1 year EARLIER than boys (earlier puberty onset)
- Girls reach maximum delay at age 19.5
- Boys reach maximum delay at age 20.9
- This 1.4-year sex gap mirrors the average age gap in puberty onset

**App design implication:** The app's target demographic (18-35, struggling to wake up) overlaps heavily with the biological peak of evening chronotype. Many users aren't lazy — they're fighting their biology. The app should acknowledge this rather than shaming them.

---

## 6. Social Jet Lag — Roenneberg's Concept

### Definition

Social jet lag (SJL) = the discrepancy between your biological clock (chronotype) and your social obligations (work/school schedule). Measured as the difference in midsleep time between work days and free days.

**Formula:** SJL = |MSF - MSW|
- MSF = midpoint of sleep on free days
- MSW = midpoint of sleep on work days

### Prevalence (Specific Numbers)

| Statistic | Number | Source |
|-----------|--------|--------|
| Population with >=1 hour SJL | **69-70%** | Roenneberg, multiple studies |
| Population with >=2 hours SJL | **~33% (one-third)** | Roenneberg et al. |
| Students/workers with >=1 hour | **70%** | Social Jetlag review, PMC 2021 |
| Students/workers with >=2 hours | **~50%** | Same review |

**Two-thirds of the studying/working population in industrialized countries** experience social jet lag, often for years at a time.

### Health Consequences (Specific Data)

| Health Risk | Finding | Source |
|-------------|---------|--------|
| **Diabetes** | 2h of SJL = ~2x risk of both pre-diabetes AND type 2 diabetes | n=1,585 study |
| **Obesity** | SJL independently associated with increased BMI | Roenneberg & Merrow, Current Biology 2012 |
| **Cholesterol** | Increased total cholesterol, triglycerides, fasting glucose | n=792 middle-aged adults |
| **HDL (good cholesterol)** | Reduced HDL cholesterol | n=447 middle-aged adults |
| **Cortisol** | SJL >2h = elevated cortisol levels | n=145 healthy adults |
| **Heart rate** | SJL >2h = significantly higher resting heart rate | Multiple studies |
| **Academic performance** | Negative correlation with grades | Roenneberg studies |
| **Depression** | Associated with depressive symptoms | Multiple studies |
| **Substance use** | Evening types with high SJL: more smoking, alcohol, caffeine | Multiple studies |

### Roenneberg's Key Findings

- Human clocks follow **solar time**, not standardized time zones. A 34-minute chronotype shift was observed across German longitudinal coordinates (east to west).
- Chronotypes follow a near-normal distribution — most people are intermediate, with tails on both sides.
- Social jet lag is essentially "living in the wrong time zone" every work day.

### Relevance to the App's Positioning

The app's core promise — "wake at your intended time" — directly addresses social jet lag. But the research suggests two strategies:

1. **Help people comply with their social schedule** (current approach: enforcement/alarms) — this reduces the BEHAVIOR gap but not the BIOLOGICAL gap
2. **Help people shift their biology closer to their social schedule** (chronotype shifting) — this actually reduces social jet lag

**Strategy 2 is more valuable** because it addresses the root cause. An app that can reduce someone's social jet lag from 2 hours to 30 minutes would measurably reduce their diabetes risk, improve their cholesterol, and lower depressive symptoms. That's a medical-grade value proposition.

---

## 7. Can an App Realistically Shift Chronotype?

### Short answer: Yes, by 1-2.5 hours, using specific interventions.

### 7A. Light Exposure (Most Powerful Single Intervention)

**Key study:** Burgess et al. (2015), PMC, controlled inpatient study

| Light Duration | Phase Advance Achieved |
|---------------|----------------------|
| 6.5 hours bright light | 3.1 hours |
| 4.0 hours bright light | 2.7 hours |
| 2.5 hours bright light | 2.3 hours |
| 1.0 hour bright light | 1.6 hours |
| 0.5 hour bright light | 1.1 hours |
| 30 min at 185 lux BLUE light | ~1.0 hour |

**The relationship is approximately linear between 0.2 and 2.5 hours**, then levels off. Diminishing returns after ~3 hours.

**Specific parameters:**
- **Intensity needed:** ~5,000 lux for white light (range: 3,500-6,880 lux in studies)
- **Blue light alternative:** 185 lux at 470nm wavelength (much more practical for a phone screen/light therapy device)
- **Short-wavelength (green) light:** 555nm at 24 lux may equal blue light at 2 lux for similar photon flux
- **Timing:** MUST be in the morning, within 1-2 hours of wake time (light in the evening causes phase DELAY)
- **Key finding:** A single 0.5-hour exposure produces **75% of the advance** produced by a 2-hour pattern

**App design:** A 30-minute morning bright light prompt is the minimum viable intervention. The app could use the phone screen (blue light at max brightness = ~500-600 lux at close range) or recommend a therapy lamp. Even a "go outside for 10 minutes" push notification is evidence-based.

### 7B. Melatonin Timing (Second Most Powerful)

**Key findings:**
- **Dose:** 0.5 mg is optimal (low dose minimizes sleepiness side effects)
- **Timing:** 5 hours before CURRENT bedtime (not desired bedtime)
- **Phase advance from melatonin alone:** ~1.3 hours
- **Timing is more important than dose** — a well-timed 0.5mg outperforms a poorly-timed 5mg

**App design:** The app can calculate the optimal melatonin timing based on the user's current bedtime and remind them. This is a high-value nudge that costs the user nothing (melatonin is OTC).

### 7C. Combined Protocol (Maximum Shift)

**The gold standard protocol from Burgess et al.:**

| Day | Wake Time | Light Exposure | Melatonin | Bedtime |
|-----|-----------|---------------|-----------|---------|
| Baseline | Normal | Normal | None | Normal |
| Day 1 | 1h earlier | 30 min bright light upon waking | 0.5mg, 5h before baseline bedtime | 1h earlier |
| Day 2 | 1h earlier than Day 1 | 30 min bright light upon waking | 0.5mg, 1h earlier than Day 1 | 1h earlier |
| Day 3 | 1h earlier than Day 2 | 30 min bright light upon waking | 0.5mg, 1h earlier than Day 2 | 1h earlier |

**Results:**
- Combined (2h light + melatonin + gradual shift): **2.4 +/- 0.8 hours** phase advance
- Combined (0.5h light + melatonin + gradual shift): **1.8 +/- 0.8 hours** phase advance
- Light alone (30 min x 4): **1.5-1.7 hours**
- Melatonin alone (3mg): **1.3 hours**
- Combined is synergistic, not just additive

**Critical caveat:** A gradual shift that was maintained for 2 weeks WITHOUT continued light treatment RELAPSED. The intervention must be ongoing.

### 7D. Exercise Timing

- Morning exercise induces **0.62 +/- 0.18 hour** phase advance (early types)
- For late chronotypes: morning exercise = 0.54h advance, evening exercise = 0.46h advance
- Exercise is a weaker zeitgeber than light but is additive

### 7E. Meal Timing

- Eating earlier (especially breakfast within 1-2 hours of waking) helps entrain peripheral clocks
- No specific phase advance numbers from meal timing alone, but it supports the light+melatonin protocol
- Avoiding food in the 3 hours before bed reduces circadian disruption

### 7F. Practical Protocol for an App

**"Shift Your Clock" — 14-Day Program:**

| Component | Specification | Evidence Base |
|-----------|--------------|---------------|
| Wake time shift | 15 minutes earlier every 3 days | Burgess protocol (1h/day is aggressive; 15min/3days is sustainable) |
| Morning light | 30 minutes of bright light within 30 min of waking | 75% of max effect from 0.5h |
| Melatonin reminder | 0.5mg, 5h before current bedtime, shifting earlier with schedule | Burgess protocol |
| Morning exercise | 10-20 min light activity after light exposure | 0.5-0.6h additional advance |
| Meal timing | Breakfast within 1h of waking, dinner >3h before bed | Chrononutrition evidence |
| Evening light block | Reminder to enable night mode / reduce screens 2h before bed | Prevents phase delay |

**Expected outcome:** 1-2 hour phase advance over 14 days with good compliance.

**Critical for retention:** The shift MUST be maintained with ongoing light exposure. If the user stops, they relapse within 2 weeks. This is actually GOOD for a subscription app — the user needs it permanently.

---

## 8. What Existing Apps Do With Chronotype (and What's Missing)

### Current Landscape

| App | What It Does With Chronotype | Limitation |
|-----|------------------------------|------------|
| **Oura Ring** | Detects chronotype from 90 days of activity + temperature data. Shows 6 types (early morning through late evening). Gives personalized bedtime window. | Requires $300 hardware. Takes 30-90 days to classify. No intervention — just shows data. |
| **RISE** | Predicts daily energy curve using SAFTE model (US DoD fatigue model). Uses inferred light exposure + sleep times. Shows when to do focused work, when to nap, when energy dips. | Doesn't classify chronotype explicitly. No shifting protocol. Predicts but doesn't intervene. |
| **ChronoSleep** | 2-minute quiz, generates personalized sleep/focus/energy schedule. | Quiz-based only — no passive detection, no ongoing adaptation, no behavioral data. |
| **Timeshifter** | Creates personalized jet lag plans based on chronotype + itinerary. | Only for travel jet lag, not daily social jet lag. |
| **BetterSleep** | Has a chronotype quiz. | Quiz only. No behavioral adaptation. |
| **Alarmy** | No chronotype awareness at all. | One-size-fits-all alarm enforcement. |

### What's Missing (The Opportunity)

1. **No app combines passive chronotype detection + active chronotype shifting.** Oura detects but doesn't intervene. RISE predicts but doesn't shift. No app does both.

2. **No app addresses social jet lag as a core problem.** Roenneberg quantified it 20 years ago. 69% of the population has it. Zero consumer apps are designed around reducing it.

3. **No app uses the 5-subtype model.** Every app uses the binary (morning/evening) or Breus's pop-science 4 animals. The 2025 McGill research shows this misses the most important distinction: WITHIN-category risk profiles.

4. **No app provides a shifting protocol.** The Burgess combined protocol (light + melatonin timing + gradual shift) is clinically validated to produce 1.8-2.4 hour shifts. No consumer app packages this.

5. **No app connects chronotype to meal timing, exercise timing, and cognitive scheduling.** The data is clear that these timings matter differently for different chronotypes. No app integrates all of them.

6. **No alarm app knows you're an at-risk night owl vs. a high-functioning night owl.** These two populations need completely different interventions.

---

## Summary: Key Numbers for App Design Decisions

| Metric | Number | Source |
|--------|--------|--------|
| Population with >1h social jet lag | 69-70% | Roenneberg |
| Population with >2h social jet lag | ~33% | Roenneberg |
| 2h social jet lag diabetes risk | 2x increase | n=1,585 study |
| People who are NOT morning or evening type | 63% | Sveshnikov 6-type study |
| Performance variation for late types across day | Up to 26.2% | Facer-Childs 2018 |
| Performance variation for early types across day | 3.5-7.1% | Facer-Childs 2018 |
| Phone screen data accuracy vs wearable | 89% | Abdullah 2018 |
| Phone midpoint sleep vs self-report correlation | r = 0.87 | Lin 2019 |
| Phase advance from 30 min bright light | 1.1 hours | Burgess et al. |
| Phase advance from combined protocol | 1.8-2.4 hours | Burgess et al. |
| Time for Oura to detect chronotype | 30-90 days | Oura documentation |
| Chronotype heritability | 12-42% | GWAS studies |
| Genetic loci associated with chronotype | 351 | n=697,828 GWAS, Nature Comms |
| Girls peak evening delay age | 19.5 years | Randler 2017 |
| Boys peak evening delay age | 20.9 years | Randler 2017 |

---

## Sources

### Peer-Reviewed Studies
- Zhou et al. (2025). "Latent brain subtypes of chronotype reveal unique behavioral and health profiles." *Nature Communications*. [Link](https://www.nature.com/articles/s41467-025-66784-8)
- Sveshnikov et al. "There are 6 human chronotypes, not just morning and evening." *Personality and Individual Differences*. [Coverage](https://www.sciencealert.com/scientists-say-there-are-6-human-chronotypes-not-just-morning-people-and-night-owls)
- Horne & Ostberg (1976). "A self-assessment questionnaire to determine morningness-eveningness." *Int J Chronobiology*. [PubMed](https://pubmed.ncbi.nlm.nih.gov/1027738/)
- Roenneberg et al. "MCTQ documentation." [TheWEP](https://www.thewep.org/documentations/mctq)
- Roenneberg & Merrow (2019). "Chronotype and Social Jetlag: A (Self-)Critical Review." *Biology*. [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC6784249/)
- Facer-Childs et al. (2018). "Effects of time of day and chronotype on cognitive and physical performance." *Sports Medicine - Open*. [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC6200828/)
- Burgess et al. (2015). "Phase advancing human circadian rhythms with morning bright light, afternoon melatonin, and gradually shifted sleep." *Sleep Medicine*. [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC4344919/)
- Randler et al. (2017). "From Lark to Owl: developmental changes in morningness-eveningness." *Scientific Reports*. [Nature](https://www.nature.com/articles/srep45874)
- Social Jetlag Health Review (2021). *Biology*. [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC8707256/)
- Youngstedt et al. (2019). "Circadian rhythm phase shifts caused by timed exercise vary with chronotype." [PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC7098792/)
- Chrononutrition and Energy Balance (2025). *Nutrients*. [MDPI](https://www.mdpi.com/2072-6643/17/13/2135)
- Jones et al. (2019). "Genome-wide association analyses of chronotype in 697,828 individuals." *Nature Communications*. [Nature](https://www.nature.com/articles/s41467-018-08259-7)
- Lin et al. (2019). "Development of a mobile application to delineate digital chronotype." *J Psychiatric Research*. [ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S0022395618309038)
- Abdullah et al. (2018). "Data and Expert Models for Sleep Timing and Chronotype Estimation from Smartphone Context Data." *IMWUT/UbiComp*. [ACM](https://dl.acm.org/doi/10.1145/3264949)

### Clinical/App Sources
- Oura Ring Chronotype: [Oura Help](https://support.ouraring.com/hc/en-us/articles/14594974129555-Body-Clock-and-Chronotype)
- RISE Science: [RISE Blog](https://www.risescience.com/blog/app-sleep-science-become-morning-person)
- Breus Chronotype Model: [Sleep Foundation](https://www.sleepfoundation.org/how-sleep-works/chronotypes)
- MEQ Questionnaire: [UPenn CBTI](https://www.med.upenn.edu/cbti/assets/user-content/documents/Morningness-Eveningness%20Questionnaire.pdf)
- MCTQ Questionnaire: [American Thoracic Society](https://site.thoracic.org/assemblies/srn/sleep-related-questionnaires/mctq)
