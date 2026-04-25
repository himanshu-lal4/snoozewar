# PRD: Onboarding Flow
*Version 3.2 — April 23, 2026*
*Status: Approved*
*Supersedes: V3.1 (April 17, 2026) — emotional arc redesign, mechanism education added, paywall added*
*History: V2.0 (April 12) → V3.0 (April 17) → V3.1 (April 17) → V3.2 (April 23)*

---

## 0. Change Log

### V3.1 → V3.2 (April 23, 2026)
**Complete emotional arc redesign.** Same 7 screens, fundamentally different structure. Key changes:

1. **S2 simplified** — 3-beat animated education → single "69% social jet lag" fact + chronotype introduction. One idea, full screen, let it breathe.
2. **S3 replaced** — overloaded trust screen (won't/will/quote/Dare Engine sample) → "Why everything else failed" mechanism reveal. Introduces sleep inertia, validates past failures, sets up the solution.
3. **S4 replaced** — name input moved to S5. New S4: "How SnoozeWar Fixes It" — 3-part solution (night → wake → loop) narrated by Dare Engine. Users experience the product personality while learning how it works.
4. **S5 = name input** (was S4 in V3.1). Minor copy tightening.
5. **S6 replaced** — feature carousel (lowest engagement pattern) → soft paywall with equally weighted Premium and Free paths. Users can buy immediately or start 7 free mornings.
6. **User quote** removed from onboarding → moves to App Store listing + Day 2 push notification.
7. **Chronotype education** added to S2 — introduces the concept without a quiz.
8. **App usage education** added to S4 — shows the night → morning → score loop.

**Why:** V3.1 was an information delivery system. V3.2 is an emotional arc: Hook → Understand → Relief → Feel → Invest → Choose → Begin. Each screen earns the next.

### V3.0 → V3.1 (April 17, 2026)
Compacted from 11 screens to 7. Three education screens merged into one animated screen. Three trust screens merged into one stacked screen.

### V2.0 → V3.0 (April 16-17, 2026)
- Product positioning: enforcement = core, chronotype = layer (not Day 0 hero)
- Monetization: freemium with 7-usage trial (not hard paywall)
- Chronotype quiz removed from onboarding entirely
- Alarm config + permissions moved to first-alarm setup flow (separate PRD)
- See `strategy/revenue-model-v2.md` for full monetization model

---

## 1. Overview

### What this covers
The first-session experience from cold install to home screen entry. This PRD covers ONLY the narrative + welcome + monetization choice. Alarm configuration and permissions happen in a separate flow triggered from the home screen (see: first-alarm-setup-prd.md, to be written).

### Four explicit jobs
1. **UNDERSTAND** — teach them why they can't wake up (social jet lag, chronotype, sleep inertia)
2. **BELIEVE** — show them why this app works when others didn't (mechanism: night + wake + loop)
3. **FEEL** — let them experience the Dare Engine personality before using the app
4. **CHOOSE** — present premium and free paths with equal respect

### The logic chain
Every screen answers one question. Together they form an airtight argument:

```
S1: "I can't wake up"                → IDENTIFIED (self-recognition)
S2: "It's my chronotype vs schedule" → EXPLAINED (the science)
S3: "Other apps only fought morning" → REFRAMED (why everything failed)
S4: "Night + wake + loop = the fix"  → CONVINCED (the mechanism)
S5: "What's my name?"                → INVESTED (personal stake)
S6: "Premium or 7 free mornings?"    → DECIDED (monetization)
S7: "No alarm set. Yet."             → STARTED (first action)
```

If any screen is removed, the chain breaks. If the order changes, the logic fails. This sequence is intentional.

### Success metrics

| Metric | Target | Rationale |
|--------|--------|-----------|
| Onboarding completion rate | >90% | 7 screens, no config, no permissions, one decision (name). Paywall is a choice, not a gate. |
| Time to complete | 60-75 sec | S2 needs reading time (~5s). S4 has 3-block animation (~4s). S6 is a decision point (~8-12s). |
| Drop-off per screen | <2% per screen | Each screen delivers value. S6 (paywall) may see 2-3% — acceptable. |
| Home screen entry rate | >90% of installs | Both paywall paths lead to S7. No dead end. |
| Name entered (not skipped) | >80% | Slightly lower target than V3.1 — copy is shorter, but the Dare Engine context from S4 motivates. |
| S6 conversion rate (premium) | 3-8% | Industry benchmark for soft paywall in onboarding. Exhausted Veterans convert here. |
| S6 free path selected | >85% | Expected. The 7-morning trial is the primary path. |

### Design philosophy

**Onboarding is an argument, not a brochure.**

Every screen advances one claim. The user never processes more than one idea per screen. By S6, they have enough context to make a real buying decision — not because we pressured them, but because we taught them.

**Key principles:**
1. **One screen, one idea** — per cognitive load framework (Law 1). No screen does two jobs.
2. **Mechanism > Features** — we explain HOW it works, not just WHAT it does. Users who understand the mechanism trust the product.
3. **Feel > Read** — S4 lets them experience the Dare Engine, not read about it. Show, don't tell.
4. **Respect > Pressure** — S6 paywall has equal visual weight for both paths. No countdown, no "limited offer."
5. **Science > Hype** — every claim is research-backed. Citations available on tap.
6. **Forward only** — no back button, no progress bar (exceptions: S5 name skip)

---

## 2. Universal Design Rules

| Rule | Spec | Why |
|------|------|-----|
| Max primary text | 12 words per headline | Miller 1956: working memory 7±2 chunks. |
| Max tappable elements per screen | 2 (exception: S6 has 2 cards) | Hick's Law. Most screens have 1 CTA. |
| Progress indicator | None visible | Explicit progress creates "how much left?" anxiety. |
| Back button | None | Cialdini commitment: forward-only flows convert 23% higher. |
| Skip | Only S5 name input | Skip signals "not important." Everything else IS important. |
| Background | Dark, minimal, premium | Matches brand aesthetic. Contrasts with bright wellness apps. |
| Transitions | 300-400ms slide/fade | Fast enough to feel responsive, slow enough to feel premium. |
| Tap target | Min 56pt height | Exceeds Apple 44pt, Android 48dp. Premium feel, thumb-zone accessible. |
| Typography | Display/Medium for headlines, Body/Regular for subtext | Per design system spec. |
| Animations | Purpose-driven, not decorative | Every animation advances comprehension or emotional state. No gratuitous motion. |

---

## 3. Entry Conditions

### When this flow triggers
- First app open after install (cold start)
- No prior onboarding completion record (device-level tracking via persisted device ID)

### Re-onboarding
- Never re-shown after first completion, even on re-install (device ID persists)
- Exception: user explicitly deletes account + reinstalls (V1.1 edge case)
- If user uninstalls pre-completion and reinstalls, onboarding starts fresh from S1

### Pre-onboarding
- No splash animation beyond brand logo (1.5s max)
- No sign-up, no login, no account creation
- No permission prompts
- Straight to S1 on first launch

---

## 4. Screen-by-Screen Specification

---

### S1: The Mirror
**Purpose:** One sentence that mirrors the user's exact experience. First 3 seconds decide everything.

**Psychological mechanism:** Self-recognition (Gallup 1977: 40% attention lift when people see themselves reflected) + Cialdini Social Proof (counter at bottom).

**User's mental state after:** *"That's exactly me."*

| Element | Content |
|---------|---------|
| Background | Dark (bg-primary), minimal, no chrome |
| Primary text (centered) | **"You know when to wake up."** |
| Subtext (appears 1.2s after primary) | **"Your body disagrees."** |
| CTA (appears 2s after subtext) | "Show me why →" |
| Bottom footer (subtle, small) | "**[X,XXX]** people started this morning" |

**Social proof counter:**
- Live counter queries `/api/stats/onboarding-starts-today` on screen load
- Pre-launch / low-data: cumulative install count with "XX,XXX people have started" fallback
- NEVER faked. API unavailable → hide counter, don't show error.

**Data captured:** None.

**Analytics events:**
- `onboarding_started` — props: `install_source`, `device_type`, `hour_of_day`, `timezone`
- `s1_cta_tapped`

**Transitions:**
- Enter: fade in from black (400ms)
- Exit: slide left (300ms) → S2

**Edge cases:**
- Counter API fails → hide counter entirely
- User taps before subtext appears → subtext appears immediately, CTA enables
- User taps screen body (not CTA) before CTA appears → no effect (prevents accidental advance)

---

### S2: The Why — Social Jet Lag + Chronotype
**Purpose:** One fact, full screen. Introduces social jet lag as the scientific name for their problem and chronotype as the underlying concept. Seeds the 7-day passive detection.

**Psychological mechanism:** Normalization (69% = "I'm not broken, most people have this") + concept naming (giving the problem a name makes it solvable — Pennebaker 1997) + anticipation seeding ("we'll learn yours" creates forward commitment).

**User's mental state after:** *"Oh — it has a name. It's biology. And they'll figure out mine."*

**Layout:**

```
┌──────────────────────────────────┐
│                                  │
│                                  │
│  "69% of people wake up in      │
│   the wrong timezone."           │
│                                  │
│  ┌────────────────────────────┐  │
│  │                            │  │
│  │  ○○○○○○○○○○                │  │
│  │  ○○○○○○○○○○                │  │
│  │  ○○○○○○○○○○                │  │
│  │  ○○○○○○○○○○                │  │
│  │  ○○○○○○○○○○                │  │
│  │  ○○○○○○○○○○                │  │
│  │  ●●●●●●●●●○                │  │
│  │  ○○○○○○○○○○                │  │
│  │  ○○○○○○○○○○                │  │
│  │  ○○○○○○○○○○                │  │
│  │                            │  │
│  │  (69 highlighted amber,    │  │
│  │   31 dim)                  │  │
│  └────────────────────────────┘  │
│                                  │
│  Your body has an internal       │
│  clock — your chronotype.        │
│                                  │
│  When your schedule ignores it,  │
│  science calls it social jet     │
│  lag. You call it "I can't       │
│  wake up."                       │
│                                  │
│  We'll learn yours over your     │
│  first 7 mornings.               │
│                                  │
│  (Roenneberg, LMU Munich)       │
│                                  │
│          [Continue →]            │
└──────────────────────────────────┘
```

**Element breakdown:**

| Element | Content | Notes |
|---------|---------|-------|
| Headline | **"69% of people wake up in the wrong timezone."** | Display/Medium. The single strongest stat. |
| Silhouette grid | 100 person-dots in 10x10 grid. 69 filled amber, 31 dim. | Animates: dots fill from top-left in wave (1.2s). Visual proof of the stat. |
| Chronotype intro | "Your body has an internal clock — your **chronotype**." | Body/Regular. First time user hears "chronotype." Bold on the word itself. |
| Bridge line | "When your schedule ignores it, science calls it **social jet lag**. You call it 'I can't wake up.'" | Connects scientific term to their lived experience. Bold on "social jet lag." |
| Chronotype seed | "We'll learn yours over your first 7 mornings." | Seeds passive detection. No quiz promised. Just observation. |
| Science citation | "(Roenneberg, LMU Munich)" | Small, subtle. Tappable for full citation modal. |
| CTA | "Continue →" | Appears after grid animation completes. |

**Science citation modal (on tap):**
- Slides up from bottom (300ms)
- Content: "Based on research by Till Roenneberg, Ludwig Maximilian University of Munich. Social jet lag affects 69-70% of the population, measured as the discrepancy between biological and social sleep timing. Published in Current Biology, 2006; replicated across 55,000+ participants."
- Dismiss: tap anywhere outside modal
- Purpose: credibility for skeptics without interrupting flow

**Animation sequence:**
1. Headline fades in (400ms)
2. Grid appears, dots fill in wave pattern — 69 amber, 31 dim (1.2s)
3. Chronotype intro text fades in (400ms)
4. Bridge line fades in (400ms)
5. Chronotype seed fades in (300ms)
6. CTA appears (300ms)
7. Total: ~3s before CTA is tappable

**Data captured:** None.

**Analytics events:**
- `s2_education_viewed` — props: `seconds_on_screen`
- `s2_citation_tapped` — if science citation tapped

**Transitions:**
- Enter: slide left from S1
- Exit: slide left → S3

**Edge cases:**
- User taps CTA before animation completes → all elements appear immediately, advance to S3
- Screen height overflow on small devices → chronotype seed + citation scroll below fold (acceptable — primary message above fold)

---

### S3: Why Everything Else Failed
**Purpose:** Validates every past failure. Introduces sleep inertia as the reason morning-only solutions don't work. Sets up the solution on S4.

**Psychological mechanism:** Attribution reframing (it's not you, it's your tools) + sleep inertia education (the brain-offline insight they've never heard) + curiosity gap (the CTA "How?" pulls them forward).

This screen does three jobs that V3.1 spread across two screens:
1. Reframe: "It's not willpower" (was standalone S3 in earlier draft)
2. Validate: "You solved them all half-asleep" (Exhausted Veteran recognition)
3. Bridge: "The real fix starts the night before" (sets up S4)

**User's mental state after:** *"THAT'S why nothing worked. My brain was literally offline. And no app fixed the night side."*

**Layout:**

```
┌──────────────────────────────────┐
│                                  │
│                                  │
│  Why nothing else worked:        │
│                                  │
│                                  │
│  ┌────────────────────────────┐  │
│  │                            │  │
│  │   Louder alarm     ✗      │  │
│  │   Harder puzzle    ✗      │  │
│  │   More alarms      ✗      │  │
│  │   Willpower        ✗      │  │
│  │                            │  │
│  └────────────────────────────┘  │
│                                  │
│  You solved them all             │
│  half-asleep.                    │
│                                  │
│  Your brain is offline for       │
│  the first 30 minutes            │
│  after waking. It's called       │
│  sleep inertia.                  │
│                                  │
│  It's not discipline.            │
│  It's not laziness.              │
│  It's biology.                   │
│                                  │
│  The real fix starts the         │
│  night before.                   │
│                                  │
│            [How? →]              │
└──────────────────────────────────┘
```

**Element breakdown:**

| Element | Content | Notes |
|---------|---------|-------|
| Headline | **"Why nothing else worked:"** | Display/Medium. Direct. No hedging. |
| Failed solutions list | Louder alarm ✗ / Harder puzzle ✗ / More alarms ✗ / Willpower ✗ | Each with red ✗. Card-style container with muted background. |
| Validation line | **"You solved them all half-asleep."** | Display/Medium. The recognition moment for Exhausted Veterans. |
| Sleep inertia explanation | "Your brain is offline for the first 30 minutes after waking. It's called **sleep inertia**." | Body/Regular. Bold on "sleep inertia." Introduces the concept. |
| Reframe triplet | "It's not discipline. / It's not laziness. / It's biology." | Three short lines, vertically stacked. The emotional peak of this screen. Addresses Self-Blamers directly. |
| Bridge line | **"The real fix starts the night before."** | Display/Medium. The punchline that sets up S4. |
| CTA | **"How? →"** | NOT "Continue" — curiosity-driven CTA pulls them forward. |

**Animation sequence:**
1. Headline fades in (300ms)
2. Failed solutions list slides in, each item staggered (100ms gap between items, total 700ms)
3. ✗ marks appear with subtle shake (200ms per mark)
4. "You solved them all half-asleep" fades in (400ms) — 0.5s pause before next element
5. Sleep inertia explanation fades in (400ms)
6. Reframe triplet: each line fades in sequentially (300ms each, 200ms gap) — total 1.1s
7. Bridge line fades in (400ms)
8. CTA appears (300ms)
9. Total: ~4.5s before CTA is tappable

**Science reference (not a tappable footer — embedded in text):**
- Sleep inertia duration: Tassi & Muzet, 2000; Trotti, 2017 — duration of 15-70 minutes
- Willpower debunk: Vohs et al., 2021 — 36 labs, 3,531 participants, ego depletion not replicated
- If user taps "sleep inertia" text → brief tooltip: "Sleep inertia: 15-70 min of reduced alertness after waking. Prefrontal cortex (decision-making) is the last region to come online. (Tassi & Muzet, 2000)"

**Data captured:** None.

**Analytics events:**
- `s3_mechanism_viewed` — props: `seconds_on_screen`
- `s3_sleep_inertia_tapped` — if tooltip opened

**Transitions:**
- Enter: slide left from S2
- Exit: slide left → S4

**Edge cases:**
- User taps CTA before animation completes → all elements appear immediately, advance
- Small screen: reframe triplet may push bridge line below fold → acceptable, user scrolls naturally

---

### S4: How SnoozeWar Fixes It
**Purpose:** The 3-part solution. Night enforcement + uncheat-able alarm + score loop. Narrated by the Dare Engine — the user MEETS the product personality while learning the mechanism.

**Psychological mechanism:** Concrete solution framing (Night → Wake → Loop answers S3's "How?") + variable personality exposure (Dare Engine speech creates "what will it say?" anticipation per Schultz 1997) + loss aversion preview ("Skip one — feel it" per Kahneman).

This is the screen where the user goes from "I understand the problem" to "I believe this solution could work." The Dare Engine narrating the solution means they experience the differentiator (personality) through the mechanism (night + wake + loop), not separately.

**User's mental state after:** *"They fix the night AND the morning AND make it stick. And this voice is... actually kind of fun."*

**Layout:**

```
┌───────────────────────────────────┐
│                                   │
│  We fix all three:                │
│                                   │
│  ┌─ 1. THE NIGHT ─────────────┐  │
│  │                             │  │
│  │  💬 "10 PM. Screen down.    │  │
│  │      Or I start counting."  │  │
│  │                             │  │
│  │  Bedtime enforcement.       │  │
│  │  Because your morning is    │  │
│  │  decided at 10 PM.          │  │
│  └─────────────────────────────┘  │
│            │                      │
│            ���                      │
│  ┌─ 2. THE WAKE ──────────────┐  │
│  │                             │  │
│  │  💬 "Up in 47 seconds.      │  │
│  │      +8 points. Not bad."   │  │
│  │                             │  │
│  │  Alarm + mission you can't  │  │
│  │  cheat. Even with your      │  │
│  │  brain offline.             │  │
│  └─────────────────────────────┘  │
│            │                      │
│            ▼                      │
│  ┌─ 3. THE LOOP ──────────────┐  │
│  │                             │  │
│  │  📊 Life Score  🔥 Streak   │  │
│  │                             │  │
│  │  Every morning builds.      │  │
│  │  Skip one — feel it.        │  │
│  │  66 days to make it         │  │
│  │  automatic.                 │  │
│  └─────────────────────────────┘  │
│                                   │
│          [Continue →]             │
└───────────────────────────────────┘
```

**Element breakdown:**

| Element | Content | Notes |
|---------|---------|-------|
| Headline | **"We fix all three:"** | Display/Medium. References S3's bridge ("the real fix starts the night before"). |
| Block 1: THE NIGHT | Dare Engine speech bubble: *"10 PM. Screen down. Or I start counting."* + Subtext: "Bedtime enforcement. Because your morning is decided at 10 PM." | Speech bubble uses Dare Engine visual style (distinct container, slightly different background). Tough Love tone by default. |
| Arrow connector | ↓ between blocks | Subtle, shows flow: night → wake → loop. |
| Block 2: THE WAKE | Dare Engine speech bubble: *"Up in 47 seconds. +8 points. Not bad."* + Subtext: "Alarm + mission you can't cheat. Even with your brain offline." | "Brain offline" callbacks S3's sleep inertia education. The user now understands WHY uncheat-able missions matter. |
| Arrow connector | ↓ between blocks | |
| Block 3: THE LOOP | Score icon + Streak flame icon + Text: "Every morning builds. Skip one — feel it. 66 days to make it automatic." | No Dare Engine bubble here — the system speaks. "Skip one — feel it" = loss aversion in 4 words. "66 days" sets honest expectations. |
| CTA | "Continue →" | Appears after all 3 blocks are visible. |

**Animation sequence:**
1. Headline fades in (300ms)
2. Block 1 (THE NIGHT) slides in from left (400ms)
   - Speech bubble types in with typewriter effect (800ms)
   - Subtext fades in (300ms)
3. Arrow animates downward (200ms)
4. Block 2 (THE WAKE) slides in from left (400ms)
   - Speech bubble types in (800ms)
   - Subtext fades in (300ms)
5. Arrow animates downward (200ms)
6. Block 3 (THE LOOP) slides in from left (400ms)
   - Score icon pops in (200ms), streak flame pops in (200ms)
   - Text fades in (300ms)
7. CTA appears (300ms)
8. Total: ~4.5s before CTA is tappable

**Dare Engine speech bubble style:**
- Distinct from regular text — uses a card/container with slightly lighter bg + left border accent (amber)
- Speech bubble tail pointing left (as if someone is speaking to the user)
- Typography: slightly different weight or style to feel like a voice, not documentation
- This is the user's first exposure to the Dare Engine visual language — it should be memorable

**Data captured:** None.

**Analytics events:**
- `s4_solution_viewed` — props: `seconds_on_screen`, `blocks_visible_on_exit` (1-3)

**Transitions:**
- Enter: slide left from S3
- Exit: slide left → S5

**Edge cases:**
- User taps CTA before animation completes → all elements appear immediately
- Scroll behavior: on smaller screens, Block 3 may be partially below fold. Screen should be scrollable. All 3 blocks must be visible before CTA enables.
- User stays on screen >30s → no timeout, no nudge. They're reading. That's good.

---

### S5: Name Input
**Purpose:** Only data collection in onboarding. Powers personalization throughout the app — the Dare Engine uses their name.

**Psychological mechanism:** Endowment effect (user invests something personal, increasing switching cost) + cocktail party effect (Moray 1959: hearing your own name captures attention like nothing else) + anticipation (they've met the Dare Engine on S4 — now it gets their name).

**User's mental state after:** *"It knows my name now. This feels personal."*

| Element | Content |
|---------|---------|
| Background | Dark |
| Headline | **"What should I call you?"** |
| Helper subtext | "I'll use it. A lot." |
| Input field | Single text input, auto-focused, keyboard up on screen load |
| Input constraints | 1-30 chars, alphanumeric + spaces + common punctuation. No emoji in V1.0. |
| Primary CTA | "Continue →" (disabled until >=1 char entered) |
| Skip link (small, bottom) | "Just call me 'you'" |

**Why the copy changed from V3.1:**
- V3.1: "Before we go — what should I call you?" + "I'll use this sometimes."
- V3.2: "What should I call you?" + "I'll use it. A lot."
- Shorter. More direct. "A lot" creates anticipation — they've seen the Dare Engine talking on S4, now they know it'll use their name in those moments.

**Skip behavior:**
- Tap "Just call me 'you'" → sets `user_name = null`
- Dare Engine falls back to "you" throughout app
- Both paths advance to S6

**Validation:**
- Client-side only (no server call)
- Profanity filter: basic word list → "Let's pick something else?" inline helper (doesn't block, just nudges)
- Emojis stripped silently on input
- Only spaces → CTA stays disabled
- Leading/trailing spaces trimmed on submit

**Data captured:**
- `user_name` (string | null) — stored locally (MMKV), synced at Day 1 account creation

**Analytics events:**
- `s5_name_screen_viewed`
- `s5_name_entered` — props: `name_length`
- `s5_name_skipped`

**Transitions:**
- Enter: slide left, input scales in (400ms), keyboard slides up
- Exit: slide left → S6

**Edge cases:**
- App backgrounded with partial input → persist input on return
- User pastes long string → truncated to 30 chars silently
- Keyboard covers CTA → CTA pinned above keyboard
- User types only numbers → allowed (some people use nicknames like "3")

---

### S6: Choose Your Path
**Purpose:** Soft paywall with equally weighted paths. Users who are ready to buy (Exhausted Veterans, Story D) can convert immediately. Users who want to try first get 7 full mornings + 500 credits. Neither path is second-class.

**Psychological mechanism:** Informed choice (user has full context from S1-S4 to make a real decision) + reciprocity (free path gives generously — 7 mornings + 500 credits) + anchoring (annual price with per-month breakdown makes annual feel cheap) + loss aversion preview (premium list shows what free users will lose after 7 mornings) + endowment (free path: "yours to spend" on credits).

**User's mental state after:** *"I know what this app does, I know how it works, and I've made my choice."*

**Layout:**

```
┌──────────────────────────────────┐
│                                  │
│  "Welcome to SnoozeWar,          │
│   [Name]."                       │
│                                  │
│  ┌────────────────────────────┐  │
│  │  ⭐ GO PREMIUM              │  │
│  │                             │  │
│  │  Everything. Always.        │  │
│  │                             │  │
│  │  ✓ Unlimited mornings       │  │
│  │  ✓ All missions             │  │
│  │  ✓ Full Dare Engine         │  │
│  │  ✓ Night Mode               │  │
│  │  ✓ Chronotype insights      │  │
│  │                             │  │
│  │  $39.99/year ($3.33/mo)     │  │
│  │                             │  │
│  │  [ Start Premium → ]        │  │
│  │                             │  │
│  │  $5.99/month also available │  │
│  └────────────────────────────┘  │
│                                  │
│  ┌────────────────────────────┐  │
│  │  🎁 START FREE              │  │
│  │                             │  │
│  │  7 full mornings.           │  │
│  │  Every feature unlocked.    │  │
│  │  + 500 credits on us.       │  │
│  │                             │  │
│  │  [ Start Free → ]           │  │
│  └────────────────────────────┘  │
│                                  │
│  No card needed for free start.  │
│  Cancel premium anytime.         │
│                                  │
│  Restore purchase                │
└──────────────────────────────────┘
```

**Element breakdown:**

| Element | Content | Notes |
|---------|---------|-------|
| Personalized welcome | **"Welcome to SnoozeWar, [Name]."** (if skipped: "Welcome to SnoozeWar.") | Display/Medium. Warm gradient shift on background (subtle — signals "this is special"). |
| Premium card | Star icon + "GO PREMIUM" header + "Everything. Always." tagline + 5 feature bullets + annual price with monthly breakdown + CTA button + monthly option | Slightly elevated card. Border accent (amber). The star icon and styling should feel premium but not flashy. |
| Premium features | Unlimited mornings / All missions / Full Dare Engine / Night Mode / Chronotype insights | Each with ✓ check. These are the things they'll lose after 7 free mornings. Primes loss aversion. |
| Premium pricing | "$39.99/year ($3.33/mo)" primary + "$5.99/month also available" secondary | Annual is hero price. Monthly is small text — available but not pushed. Per-month breakdown makes annual feel cheap. |
| Premium CTA | "Start Premium →" | Full-width button within the card. Initiates StoreKit/Google Play purchase flow. |
| Free card | Gift icon + "START FREE" header + "7 full mornings. Every feature unlocked. + 500 credits on us." + CTA button | Same card size as premium. NOT a tiny "skip" link. Equal visual weight. |
| Free CTA | "Start Free →" | Full-width button within the card. Same size as premium CTA. |
| Trust footer | "No card needed for free start. Cancel premium anytime." | Small text below both cards. Addresses both objections. |
| Restore link | "Restore purchase" | Tiny text at bottom. Required by App Store guidelines for returning subscribers. |

**Premium card — why these 5 features:**
1. **Unlimited mornings** — the main thing. After 7, free tier is limited.
2. **All missions** — Photo, Barcode, Math are paid. Free gets Shake only.
3. **Full Dare Engine** — Free tier gets basic lines. Premium gets the full 200+ variable library.
4. **Night Mode** — The differentiator. Free tier doesn't get night enforcement.
5. **Chronotype insights** — The intelligence layer. Free tier doesn't get the Day 7 reveal.

These are chosen to show what the user experienced conceptually in S3-S4 (night + missions + Dare Engine + chronotype) as premium value.

**Regional pricing:**
- US: $39.99/yr, $5.99/mo
- India: ₹999/yr, ₹149/mo
- UK: £34.99/yr, £4.99/mo
- Prices fetched from StoreKit/Google Play at runtime. Displayed in local currency.

**Purchase flow:**
- "Start Premium →" tap → native StoreKit 2 (iOS) / Google Play Billing (Android) purchase sheet
- Success → `purchase_completed` event → advance to S7 with premium badge
- Failure/cancel → return to S6, no change. User can tap "Start Free →" instead.
- Network error → show toast: "Couldn't connect. Try again or start free." Both CTAs remain active.

**Animation sequence:**
1. Personalized welcome fades in (500ms)
2. Premium card scales in from 95% → 100% (400ms)
3. Free card slides in from below (400ms, 200ms delay after premium)
4. Trust footer fades in (300ms)
5. Total: ~1.5s before both CTAs are tappable

**Data captured:**
- `paywall_choice` ("premium_annual" | "premium_monthly" | "free")
- `welcome_gift_granted: true` (if free path)
- `credits_welcome_balance: 500` (if free path)
- `trial_usages_remaining: 7` (if free path)
- `subscription_status: "premium"` (if premium path)
- `onboarding_name_used: bool`

**Analytics events:**
- `s6_paywall_viewed` — props: `name_present`, `seconds_in_onboarding_so_far`
- `s6_premium_tapped` — props: `plan_type` ("annual" | "monthly")
- `s6_premium_purchase_started` — props: `plan_type`, `price`, `currency`
- `s6_premium_purchase_completed` — props: `plan_type`, `price`, `currency`
- `s6_premium_purchase_failed` — props: `error_type` ("cancelled" | "network" | "billing_error")
- `s6_free_tapped`
- `s6_restore_tapped`
- `s6_seconds_on_screen` — fired on exit

**Transitions:**
- Enter: slide left from S5, background shifts to warmer gradient
- Exit (free path): slide left → S7
- Exit (premium path): purchase sheet → success → slide left → S7 with premium indicator
- Exit (premium cancelled): stays on S6

**Edge cases:**
- User backgrounded during purchase → purchase sheet persists on return (OS behavior)
- User has existing subscription (re-install) → "Restore purchase" at bottom detects and restores → advance to S7
- StoreKit/Play Billing unavailable → hide premium card, show only free card + "Premium available in Settings"
- User scrolls between cards → both cards always accessible, no snap behavior

---

### S7: Home Entry
**Purpose:** Seamless transition into the app. The Dare Engine speaks to them personally for the first time in context (not a demo). This is the beginning of the relationship.

**Psychological mechanism:** Peak-end rule (Kahneman 1999) — this ending is what they remember. The Dare Engine's first personalized line creates the "first impression" of the relationship they'll have with the product. Continuity from S4 (they saw the Dare Engine talk) → S5 (they gave their name) → S7 (the Dare Engine uses their name and speaks to THEM).

**User's mental state after:** *"It's already talking to me. I should set that alarm."*

| Element | Content |
|---------|---------|
| Background | Home screen background (dark) |
| Dare Engine speech bubble (appears first) | **With name:** "No alarm set, [Name]. That means no promises to break. Yet." |
| | **Without name:** "No alarm set. That means no promises to break. Yet." |
| Home screen UI (appears 1s after speech bubble) | Empty-state home screen, fully loaded |
| Primary CTA (prominent, centered) | "Set your first alarm →" |
| Secondary elements visible (muted) | Life Score: 10 / Streak: 0 / Wallet: 500 credits (free path) or Premium badge (premium path) |

**Home screen empty state:**
- "Set your first alarm →" card takes center stage
- Life Score, Streak, Wallet visible but muted (no activity yet)
- Settings icon accessible
- Premium users see premium badge instead of wallet balance
- No bottom nav tabs populated beyond Home for V1.0

**Dare Engine line variants (for future A/B testing):**

| Variant | With Name | Without Name |
|---------|-----------|-------------|
| A (default) | "No alarm set, [Name]. That means no promises to break. Yet." | "No alarm set. That means no promises to break. Yet." |
| B | "[Name]. Day zero. No score. No streak. Just potential. Fragile potential." | "Day zero. No score. No streak. Just potential. Fragile potential." |
| C | "Welcome, [Name]. I've been told to go easy on Day 0. I'll try." | "Welcome. I've been told to go easy on Day 0. I'll try." |

Launch with Variant A. A/B test post-launch once volume justifies it.

**Data captured:**
- `onboarding_completed_at` (timestamp)
- `onboarding_duration_seconds`
- `onboarding_path` ("premium" | "free")

**Analytics events:**
- `onboarding_completed` — props: `total_seconds`, `name_provided`, `path` ("premium" | "free"), `plan_type` (if premium)
- `home_first_view` — props: `from_onboarding: true`, `premium: bool`
- `first_alarm_cta_tapped` — when user taps "Set your first alarm →"

**Transitions:**
- Enter: slide left with fade, Dare Engine line types in (typewriter effect, 1.2s)
- Home UI fades in underneath speech bubble (1s delay)
- Speech bubble persists 3s, then fades to 50% opacity (remains visible but not dominant)

**What happens next:**
- User taps "Set your first alarm →" → enters **first-alarm-setup flow** (separate PRD)
- That flow handles: wake time + days + mission + tone + permissions (notifications, exact alarm)
- Returns to home with alarm scheduled = "Day 0" of SnoozeWar experience

---

## 5. Flow Map

```
ALL USERS (7 screens, ~60-75 sec):

S1   The Mirror                    "You know when to wake up. Your body disagrees."
      │                             → Self-recognition
      ▼
S2   The Why                       "69% social jet lag. You have a chronotype. We'll learn yours."
      │                             → Understanding + chronotype education
      ▼
S3   Why Everything Else Failed    "Brain offline 30 min. Other apps only fought morning."
      │                             → Mechanism + past failure validation
      ▼
S4   How SnoozeWar Fixes It        "Night enforcement + uncheat-able wake + score loop."
      │                             → Solution + Dare Engine personality experience
      ▼
S5   Name Input                    "What should I call you?"
      │                             → Personal investment (skippable)
      ▼
S6   Choose Your Path              "Go Premium — or — 7 free mornings + 500 credits"
      │                             → Monetization decision (both paths equal)
      ├── Premium → purchase ──┐
      ├── Free ────────────────┤
      ▼                        ▼
S7   Home Entry                    "No alarm set, [Name]. Yet."
                                    → Dare Engine first line + set alarm CTA

Total screens: 7
Minimum path: 7 screens (no conditional branches)
Average duration: 60-75 seconds
```

**The emotional arc:**

```
S1     S2       S3          S4         S5       S6       S7
🪝     💡       😮‍💨🧠       🔥          ✍️       ⚖️       🚪
Hook   Learn    Mechanism   Solution   Invest   Choose   Begin

"Me"   "Oh,     "That's     "THIS      "I'm     "I'm     "Let's
       why"     why apps    could       in"      ready"   go"
               failed"     work"
```

**Perceived moments (what the user remembers):**
1. "It described exactly my life" (S1)
2. "I have a chronotype and 69% of people have this problem" (S2)
3. "My brain was literally OFFLINE — that's why alarms didn't work" (S3)
4. "They fix the night AND the morning AND it scores you" (S4)
5. "The voice is actually kind of funny" (S4 — Dare Engine personality)
6. "They used my name" (S7)
7. "It's already talking to me" (S7)

---

## 6. Data Captured (full summary)

```
onboarding_profile: {
  // User input
  user_name: String | null,                // S5

  // Monetization choice
  paywall_choice: "premium_annual" | "premium_monthly" | "free",  // S6
  subscription_status: "premium" | "free",  // S6

  // State (derived)
  onboarding_completed_at: DateTime,
  onboarding_duration_seconds: Int,
  trial_usages_remaining: Int,             // 7 (free path only)
  credits_balance: Int,                    // 500 (free path only)

  // Behavioral (analytics only)
  name_provided: Boolean,
  onboarding_path: "premium" | "free",
}
```

**Privacy:**
- `user_name` stored on-device only (MMKV) during onboarding, synced at Day 1 account creation
- No chronotype, sleep, or biometric data captured
- Purchase data handled by StoreKit/Google Play — we store subscription status, not payment details
- GDPR: not Article 9 special category (no health data collected in onboarding)

---

## 7. Analytics Events (full taxonomy)

| Event | Screen | Trigger | Key Properties |
|-------|--------|---------|----------------|
| `onboarding_started` | S1 | S1 load | `install_source`, `device_type`, `hour_of_day`, `timezone` |
| `s1_cta_tapped` | S1 | CTA tap | — |
| `s2_education_viewed` | S2 | S2 exit | `seconds_on_screen` |
| `s2_citation_tapped` | S2 | Citation tap | — |
| `s3_mechanism_viewed` | S3 | S3 exit | `seconds_on_screen` |
| `s3_sleep_inertia_tapped` | S3 | Tooltip tap | — |
| `s4_solution_viewed` | S4 | S4 exit | `seconds_on_screen`, `blocks_visible_on_exit` |
| `s5_name_screen_viewed` | S5 | S5 load | — |
| `s5_name_entered` | S5 | CTA with name | `name_length` |
| `s5_name_skipped` | S5 | Skip tapped | — |
| `s6_paywall_viewed` | S6 | S6 load | `name_present`, `seconds_in_onboarding_so_far` |
| `s6_premium_tapped` | S6 | Premium CTA | `plan_type` |
| `s6_premium_purchase_started` | S6 | Purchase initiated | `plan_type`, `price`, `currency` |
| `s6_premium_purchase_completed` | S6 | Purchase success | `plan_type`, `price`, `currency` |
| `s6_premium_purchase_failed` | S6 | Purchase fail/cancel | `error_type` |
| `s6_free_tapped` | S6 | Free CTA | — |
| `s6_restore_tapped` | S6 | Restore link | — |
| `s6_seconds_on_screen` | S6 | S6 exit | `seconds_on_screen` |
| `onboarding_completed` | S7 | S7 load | `total_seconds`, `name_provided`, `path`, `plan_type` |
| `onboarding_abandoned` | Any | App close before S7 | `last_screen`, `seconds_spent` |
| `home_first_view` | S7 | Home UI load | `from_onboarding: true`, `premium: bool` |
| `first_alarm_cta_tapped` | S7 | Alarm CTA tap | `seconds_since_home_entry` |

**Critical funnels:**
1. `onboarding_started` → `onboarding_completed` (target: >90%)
2. Per-screen drop-off (target: <2% per screen, S6 may be 2-3%)
3. `s5_name_entered / (s5_name_entered + s5_name_skipped)` (target: >80%)
4. `s6_premium_purchase_completed / s6_paywall_viewed` (target: 3-8%)
5. `first_alarm_cta_tapped / onboarding_completed` (target: >85%)
6. `s6_seconds_on_screen` median (health metric: 8-15s = good decision time)

---

## 8. Chronotype Education Roadmap

Onboarding plants the seed. The first week grows it.

| When | What They Learn | Delivery |
|------|----------------|----------|
| **S2 (onboarding)** | "You have a chronotype. 69% of people have social jet lag. We'll learn yours." | On-screen text |
| **Day 1 post-alarm** | "Your first morning data is in. We're watching your patterns." | In-app insight card |
| **Day 3** | "Early pattern: you seem to [struggle more / wake easier] on [days]. That's your chronotype talking." | Push notification + insight card |
| **Day 5** | "We're narrowing down your type. 2 more mornings and we'll know." | Push notification (teaser) |
| **Day 7** | "Your chronotype is [X]. Here's what that means for your mornings." | Full reveal screen (premium only) |
| **Day 7+ ongoing** | Chronotype-aware tips, alarm difficulty adjustment, optimal bedtime suggestions | Integrated into score breakdown and Dare Engine copy |

The education arc: concept (S2) → observation (Day 1-3) → anticipation (Day 5) → reveal (Day 7) → ongoing value (Day 7+).

Free tier users get the concept and observation. Premium users get the full reveal and ongoing insights. This makes chronotype insights a conversion lever at the post-trial paywall.

---

## 9. Localization

| Element | Approach | Notes |
|---------|----------|-------|
| S1 headline + subtext | Creative translation | Conversational tone breaks with literal translation |
| S2 "69%" stat | Keep number, translate surrounding copy | "69%" is universal |
| S2 "chronotype" | Keep English term | Globally used scientific term |
| S2 "social jet lag" | Keep English term | Globally used scientific term |
| S3 failed solutions list | Localize | "Louder alarm" etc. should feel natural |
| S3 "sleep inertia" | Keep English term + localized explanation | Scientific term, explain in local language |
| S3 reframe triplet | Creative translation | "It's not discipline. It's not laziness. It's biology." must land emotionally |
| S4 Dare Engine speech bubbles | Creative localization | Must sound like a cocky PERSON, not a translation. Critical localization moment. |
| S5 name input | Localize helpers | "Just call me 'you'" → localized equivalent |
| S6 pricing | Runtime from store | Automatically in local currency |
| S6 feature list | Translate | Keep concise |
| S7 Dare Engine line | Creative localization | Must land naturally in target language |
| 66-day promise | Keep "66 days" — research number | Universal |

**Priority:** Tier 1: English. Tier 2: Hindi, Spanish, Portuguese (BR), German. Tier 3: Japanese, French, Italian, Korean.

**Dare Engine localization note:** The Dare Engine's voice is the single hardest element to localize. "Still in bed? Bold. –5 points." works in English because it's punchy, cocky, and brief. A literal translation would kill the personality. Each Tier 2 language needs a native copywriter who understands the tone — challenging but not mean, cocky but not arrogant. Budget: $500-1,000 per language for initial copy pass.

---

## 10. Permissions Strategy (DEFERRED from onboarding)

All permissions moved to first-alarm setup flow.

| Permission | When Requested | Context Phrase |
|-----------|----------------|---------------|
| Notifications | First-alarm flow | "So I can wake you up and remind you at bedtime" |
| Exact Alarm (Android 12+) | First-alarm flow | System requirement, inline explanation |
| AlarmKit (iOS 26+) | First-alarm flow | Auto-granted for system alarms |
| Camera | First Photo mission execution | "Take a photo to dismiss your alarm" |
| HealthKit (iOS) | Day 3-5 | "Share sleep data to sharpen your chronotype" |
| Health Connect (Android) | Day 3-5 | Same as HealthKit |

**Why not in onboarding:** Permission grant rates are 2-3x higher when requested in context (at the moment the user needs the feature) vs. upfront. Onboarding's job is education and emotion, not permission collection.

---

## 11. What's NOT in Onboarding V3.2

| Item | Where Instead | Why |
|------|-------------|-----|
| Chronotype quiz | Passive Day 3-14 + optional Day 7 mini-quiz | Self-report data is aspirational/contaminated in "set my alarm" mental mode |
| Alarm configuration | first-alarm-setup flow (separate PRD) | Setup ≠ onboarding |
| Mission / day selection | first-alarm-setup flow | Same |
| Dare Engine tone selection | Settings (default: Balanced) | Users experience default first, change if disliked |
| Permissions | first-alarm-setup + contextual | Higher grant rates in context |
| Sign-up / Account | Day 1 post-first-alarm | 74% abandonment when sign-up precedes value |
| Trial countdown | Never | "Welcome gift" framing, not "trial" pressure |
| User quotes / testimonials | App Store listing + Day 2 notification | Onboarding earns trust through mechanism, not third-party claims |
| Feature carousel | Cut | Replaced by S4 (mechanism + Dare Engine). Carousels have <2% engagement on card 3+. |
| Willpower debunk (standalone) | Folded into S3 | "Your brain is offline" reframes without separate willpower screen |
| Full-cycle explanation (standalone) | Folded into S4 Block 1 | "Because your morning is decided at 10 PM" |

---

## 12. V3.1 → V3.2 Element Migration

Where did every V3.1 element go?

| V3.1 Element | V3.1 Screen | V3.2 Location | Change Reason |
|---|---|---|---|
| "You know when to wake up / Your body disagrees" | S1 | S1 (unchanged) | Works. Don't fix. |
| Social proof counter | S1 | S1 (unchanged) | Works. |
| 69% stat + silhouette grid | S2 Beat 1 | S2 (elevated to hero) | Was 1 of 3 beats competing for attention. Now owns the full screen. |
| Willpower debunk (36 labs) | S2 Beat 2 | S3 (embedded) | "Your brain is offline" is a stronger reframe than "willpower is debunked." Sleep inertia is visceral; willpower stats are abstract. |
| Full-cycle treatment (night + morning) | S2 Beat 3 | S4 Block 1 | "Your morning is decided at 10 PM" + Dare Engine night bubble. |
| Chronotype tease | S2 footer | S2 (elevated to body text) | "We'll learn yours over 7 mornings" — now a visible promise, not a footer. |
| "Won't do" list | S3 | Cut | The Dare Engine's tone on S4 demonstrates what we won't do (we won't motivate, we'll challenge). Show > tell. |
| "Will do" list | S3 | S4 (embedded in 3 blocks) | Night enforcement, uncheat-able alarm, score loop — shown as the mechanism, not a bullet list. |
| User quote | S3 | Cut from onboarding | Moves to ASO + Day 2 notification. Onboarding builds trust through understanding, not third-party claims. |
| Dare Engine sample bubble | S3 | S4 (elevated) | Was a static sample. Now 2 speech bubbles narrating the solution — users experience the personality, not just see a preview. |
| Name input | S4 | S5 | Moved one screen later to make room for mechanism education. |
| Welcome gift | S5 | S6 free path | Gift is still there — it's the free option on the paywall. Same value (7 mornings + 500 credits). |
| 66-day promise | S5 | S4 Block 3 | "66 days to make it automatic" — now part of the mechanism explanation, not a standalone promise. |
| Feature carousel (5 cards) | S6 | Cut | Replaced by S4's 3-block solution. Carousel engagement was projected at <2% for cards 3+. The mechanism screen teaches features through context, not slides. |
| Home entry + Dare Engine first line | S7 | S7 (unchanged) | Works. The Dare Engine continuity is now even stronger because S4 established the voice. |

---

## 13. Open Questions

| # | Question | Recommendation | Status |
|---|----------|---------------|--------|
| 1 | S3 failed solutions list — include "Melatonin ✗"? | Yes if space allows. Melatonin is a common failed attempt. Include in A/B test variant. | Design decision |
| 2 | S4 Dare Engine — show all 3 tones or just Balanced? | Show Balanced (default tone). Tough Love might alienate Self-Blamers before they try the app. | Launch with Balanced |
| 3 | S6 paywall — show lifetime option? | No. Two price points (annual, monthly) is optimal. Lifetime in Settings only. Three options = decision paralysis on a paywall. | Decided: No |
| 4 | S6 paywall — show 50% trial discount? | No for V1.0. The full price is the anchor. The post-trial paywall (after 7 usages) can offer 50% as a conversion lever. Discounting before they've tried the product cheapens it. | Decided: No |
| 5 | S2 citation modal — worth the engineering cost? | Yes. Skeptics (10-15% of audience) need it. Implementation is trivial (bottom sheet with text). | Engineering task |
| 6 | S7 Dare Engine line — which variant? | Launch with Variant A. A/B test B and C at 10K+ onboarding completions. | Post-launch |
| 7 | S6 free card — show "7 of 7 remaining" or just "7 mornings"? | Just "7 mornings." Counter adds complexity and "trial countdown" framing we want to avoid. | Decided: No counter |
| 8 | Social proof counter data source for S1 | Live daily count via `/api/stats/onboarding-starts-today`. Hide if unavailable. | Engineering task |
| 9 | 500 credits welcome amount — calibrate post-launch | Monitor redemption patterns in first 1,000 users. Adjust if >60% burn through in first week. | Launch at 500 |

---

## 14. Implementation Checklist

### Must-have for V1.0
- [ ] 7 screens built per spec with exact copy
- [ ] S1 social proof counter API (`/api/stats/onboarding-starts-today`)
- [ ] S2 silhouette grid animation (100 dots, 69 amber wave fill)
- [ ] S2 science citation modal
- [ ] S3 failed solutions list with staggered animation
- [ ] S3 sleep inertia tooltip
- [ ] S4 three-block sequential animation with Dare Engine speech bubbles
- [ ] S4 Dare Engine speech bubble visual style (distinct from body text)
- [ ] S5 name input validation + skip handling + keyboard management
- [ ] S6 paywall with StoreKit 2 / Google Play Billing integration
- [ ] S6 purchase flow (initiate, success, failure, restore)
- [ ] S6 regional pricing display (runtime from store)
- [ ] S7 home screen empty state with Dare Engine typewriter line
- [ ] S7 Dare Engine name-aware line logic
- [ ] Device ID persistence for onboarding completion tracking
- [ ] Analytics events per Section 7
- [ ] Abandon detection (`onboarding_abandoned` on app close)
- [ ] All transitions per spec (slide left, fade, typewriter)

### Launch polish
- [ ] S2 silhouette grid: refine animation easing and amber color
- [ ] S4 Dare Engine speech bubble: finalize visual design (border, bg, tail)
- [ ] S6 warm gradient background
- [ ] Haptic feedback on S6 CTA taps (light impact)
- [ ] Localization (English + Tier 2)

### Deferred to V1.1
- [ ] Localized social proof counters per market
- [ ] A/B test infrastructure (S7 variants, S3 solution list variants)
- [ ] Landscape orientation
- [ ] S6 premium card: animated feature icons (static icons at launch)

---

## 15. Version History Summary

| Version | Date | Screens | Duration | Key Change |
|---------|------|---------|----------|------------|
| V2.0 | Apr 12 | 16-17 | ~2.5-3 min | Chronotype-quiz-first, hard paywall model |
| V3.0 | Apr 17 | 11 | ~85-95 sec | Enforcement-first, freemium, no quiz |
| V3.1 | Apr 17 | 7 | ~55-65 sec | Compacted: 3 education → 1, 3 trust → 1 |
| **V3.2** | **Apr 23** | **7** | **~60-75 sec** | **Emotional arc redesign. Mechanism education (S3). Dare Engine experience (S4). Soft paywall (S6). Chronotype education (S2). Feature carousel cut.** |
