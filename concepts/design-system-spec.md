# SnoozeWar — Design System Specification
*Version 1.0 — April 14, 2026*
*Status: Production-Ready Spec*

---

## 1. Design Identity Summary

**SnoozeWar is bold, dark, and unapologetic.** It looks like nothing else in the alarm/sleep category — which is entirely soft, blue, and calming. We are the opposite: confrontational, warm, energetic, premium.

**Design morphism stack:**
- **Foundation:** Dark mode (zinc-tinted, 4-level elevation)
- **Primary UI:** Neubrutalism-influenced (thick borders, bold accent, high contrast)
- **Atmosphere:** Aurora/mesh gradients (subtle, 5-10% opacity)
- **Overlays:** Dark glassmorphism (frosted panels over gradients)
- **Layout:** Bento box grid (dashboard/home screen)
- **Celebrations:** Spatial depth (particles, 3D burst on milestones)
- **System chrome:** Liquid Glass (iOS) / Material You (Android) — system bars only

**Why this stack works:**
- Neubrutalism = dare engine personality in visual form (bold, rule-breaking, confident)
- Dark = premium in 50ms (76-85% of 18-35 audience already uses dark mode)
- Aurora gradients = atmospheric depth that makes glass and cards come alive
- Bento layout = scannable, modern, proven higher dwell time
- No competitor in alarm/sleep uses ANY of these together

---

## 2. Color System

### 2.1 Signature Color

**Electric Amber: `#FF6B35`**

This is SnoozeWar's ownable color. Like Spotify's #1DB954 or Duolingo's #58CC02. Every screenshot, every social post, every landing page features this color.

**Why amber/orange:**
- Warm tones on dark = premium (12-18% higher CTR in wellness A/B tests)
- Desaturated enough to feel luxury, not neon (Journal of Consumer Research 2025: less saturation = higher perceived status)
- WARNING without ERROR — urgent without angry
- Completely unclaimed in alarm/sleep category (everyone uses blue/purple/green)
- Works cross-culturally: positive associations in US (energy), India (saffron/sacred), Japan (warmth), Europe (creativity)

### 2.2 Full Color Tokens

**Surfaces (60% of screen)**

| Token | Hex | Usage |
|-------|-----|-------|
| `surface-base` | `#09090B` | App background — zinc-tinted near-black, never pure #000000 (causes OLED halation) |
| `surface-gradient` | 5-10% opacity mesh | Ambient aurora behind content — indigo→amber, 300px blur |
| `surface-1` | `#18181B` | Cards, bento grid tiles — primary content containers |
| `surface-2` | `#27272A` | Elevated cards, interactive containers — one step above |
| `surface-3` | `#3F3F46` | Modals, sheets, high-attention surfaces |
| `surface-overlay` | `rgba(9,9,11,0.8)` + backdrop-blur 20px | Glass overlays, bottom sheets |

**Text**

| Token | Hex / Opacity | Usage |
|-------|---------------|-------|
| `text-primary` | `#FAFAFA` (not pure white — reduces eye strain) | Headlines, dare engine messages, scores |
| `text-secondary` | `rgba(250,250,250,0.7)` | Labels, descriptions, supporting text |
| `text-tertiary` | `rgba(250,250,250,0.45)` | Timestamps, metadata, hints |
| `text-accent` | `#FF6B35` | Highlighted numbers, active states, emphasis |
| `text-on-accent` | `#09090B` | Text on amber buttons/badges |

**Accent (10% of screen — used sparingly)**

| Token | Hex | Usage |
|-------|-----|-------|
| `accent-primary` | `#FF6B35` | Primary buttons, Life Score ring, key highlights |
| `accent-hover` | `#E55A2B` | Pressed state (10-15% darker) |
| `accent-subtle` | `rgba(255,107,53,0.10)` | Card tint for dare engine messages, subtle backgrounds |
| `accent-glow` | `rgba(255,107,53,0.05)` | Ambient glow behind key elements, 400px blur |

**Semantic**

| Token | Hex | Usage |
|-------|-----|-------|
| `success` | `#22C55E` | Streak alive, alarm completed, positive score change |
| `warning` | `#F59E0B` | Streak at risk, approaching deadline |
| `error` | `#EF4444` | Score drop, missed alarm, streak broken |
| `info` | `#3B82F6` | Neutral information, tips |

**Borders**

| Token | Value | Usage |
|-------|-------|-------|
| `border-subtle` | `rgba(250,250,250,0.06)` | Card edges, dividers — barely visible |
| `border-emphasis` | `rgba(250,250,250,0.12)` | Highlighted cards, section separators |
| `border-neubrutalist` | `#FF6B35`, 2-3px solid | Dare engine cards, accent containers — the signature neubrutalist element |
| `border-interactive` | `#FF6B35`, 1.5px solid | Buttons, toggles, input fields |

### 2.3 The 60-30-10 Rule

- **60% dark surfaces** (`surface-base` + `surface-1`) — the foundation
- **30% elevated surfaces + text** (`surface-2` + `text-primary/secondary`) — the content
- **10% accent** (`accent-primary`) — the identity

If you're using more than 10% amber, you're overusing it. Restraint = premium.

### 2.4 Night-to-Morning Gradient (Signature)

The signature ambient gradient shifts based on context:
- **Night Mode:** Deep indigo (`#1E1B4B`) → Deep violet (`#2E1065`) — cool, nocturnal
- **Morning Mode:** Deep amber (`#451A03`) → Warm orange (`#7C2D12`) — warm, energizing
- **Neutral/Day:** Zinc base only — no gradient, clean

This gradient appears at 5-10% opacity behind content. Subtle, atmospheric, never overpowering. It's the visual equivalent of the app's full-cycle coverage — night AND morning.

---

## 3. Typography

### 3.1 Font Selection

**Display font: Space Grotesk Bold**
- Geometric, slightly condensed, angular — signals technology + confidence
- The dare engine speaks in this font
- Free, variable weight, excellent language support
- Used for: scores, dare engine text, headlines, alarm time display

**Body font: Inter**
- Clean, highly legible at all sizes, designed for screens
- The informational layer speaks in this font
- Free, variable weight, industry standard
- Used for: body text, labels, descriptions, UI elements

**Why 2 fonts max:** More fonts = cheaper perceived quality. Premium brands use maximum 2. (Typography psychology research: font consistency signals care and intentionality)

### 3.2 Type Scale (8px base grid)

| Style | Font | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|------|--------|-------------|----------------|-------|
| `display-xl` | Space Grotesk | 64px | Bold | 1.1 | -1.5px | Life Score number |
| `display-lg` | Space Grotesk | 48px | Bold | 1.15 | -1.0px | Alarm time, countdown |
| `display-md` | Space Grotesk | 36px | Bold | 1.2 | -0.5px | Streak count, section heroes |
| `heading-1` | Space Grotesk | 28px | Bold | 1.3 | -0.3px | Screen titles |
| `heading-2` | Space Grotesk | 22px | Semibold | 1.35 | 0px | Card titles, dare engine text |
| `body-lg` | Inter | 18px | Regular | 1.5 | 0px | Primary body, onboarding text |
| `body` | Inter | 16px | Regular | 1.5 | 0px | Standard body text |
| `body-sm` | Inter | 14px | Regular | 1.4 | 0.1px | Secondary information |
| `caption` | Inter | 12px | Medium | 1.3 | 0.2px | Labels, metadata, timestamps |
| `badge` | Inter | 11px | Semibold | 1.0 | 0.5px | Tags, status indicators |

**Tabular figures:** Always use for numbers/scores/times — digits must be monospaced so "88:88" doesn't jump when changing to "12:34".

### 3.3 Dare Engine Typography Rule

When the Dare Engine speaks, it uses `heading-2` (Space Grotesk Semibold 22px) inside an accent-bordered card. The text is `text-primary` (#FAFAFA). The card has a `accent-subtle` background tint. This creates a consistent, recognizable "the app is talking to you" pattern across every screen.

---

## 4. Spacing System

### 4.1 Base Grid: 8px

Everything aligns to an 8px grid. Every margin, padding, and gap is a multiple of 8 (with 4px allowed for tight situations).

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Tight spacing — icon-to-label, badge padding |
| `space-2` | 8px | Minimum gap between related elements |
| `space-3` | 12px | Inner card padding (compact), gap between list items |
| `space-4` | 16px | Standard inner card padding, gap between cards |
| `space-5` | 20px | Screen horizontal margin (mobile) |
| `space-6` | 24px | Section spacing within a screen |
| `space-8` | 32px | Gap between major sections |
| `space-10` | 40px | Large section breaks |
| `space-12` | 48px | Screen top/bottom safe padding |

### 4.2 Premium Spacing Rule

**When in doubt, add more space.** Whitespace is the single strongest premium signal. Amazon gained 1.8% revenue from 10px extra spacing. Cramped = cheap. Breathing room = luxury.

- Cards: minimum 16px internal padding, 12px gap between
- Screens: minimum 20px horizontal margin
- Between major sections: 32-48px
- Around the Life Score ring: 48px+ on all sides — isolation = importance

### 4.3 Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | 8px | Small elements — badges, tags, inputs |
| `radius-md` | 12px | Standard cards, buttons |
| `radius-lg` | 16px | Large cards, bento tiles |
| `radius-xl` | 24px | Bottom sheets, modals |
| `radius-full` | 9999px | Pills, toggles, circular elements |

**Neubrutalist exception:** Dare engine cards use `radius-sm` (8px) with thick borders — slightly sharper corners feel more confrontational than large rounded corners.

---

## 5. Motion & Animation

### 5.1 Timing

| Token | Duration | Easing | Usage |
|-------|----------|--------|-------|
| `motion-press` | 100ms | ease-in | Button press down, scale to 0.96 |
| `motion-release` | 200ms | ease-out | Button release, return to 1.0 |
| `motion-card-enter` | 200ms + 50ms stagger | ease-out | Bento cards appearing on screen |
| `motion-score-change` | 400-600ms | ease-out | Score delta animation (count up/down) |
| `motion-score-load` | 800ms-1.2s | ease-out | Initial score count-up on screen load |
| `motion-slide` | 250ms | ease-in-out | Screen transitions, bottom sheets |
| `motion-celebration` | 600ms | spring(1, 0.7) | Streak milestones, achievements |
| `motion-fade` | 150ms | ease-in-out | Opacity changes, subtle reveals |

### 5.2 Signature Motion: The Slam

When the Dare Engine speaks or a score changes significantly, elements **slam in** — fast scale from 0.8 → 1.05 → 1.0 (overshoot) in 200ms with a medium haptic. This is SnoozeWar's signature motion. Not a gentle fade. Not a smooth slide. A slam.

- Score drops: number slams in red, shakes 2px for 100ms
- Score gains: number slams in green, slight bounce
- Dare Engine message: card slams in from bottom with thick border
- Alarm dismiss: button scales up with heavy haptic burst

### 5.3 Motion Rules

1. **Never use linear easing** — linear = cheap. Always ease-in, ease-out, or spring.
2. **200-500ms sweet spot** for most animations. Under 100ms feels glitchy. Over 600ms feels slow.
3. **Stagger grid entries** at 50ms intervals — max total time 400ms.
4. **Respect `prefers-reduced-motion`** — disable all non-essential animations, keep functional ones (score changes).
5. **Less motion = more premium.** Every animation must serve a purpose. Decorative motion cheapens.

---

## 6. Haptic System

| Token | iOS | Android | When |
|-------|-----|---------|------|
| `haptic-light` | `.light` | `TICK` | Toggle, selection, card tap |
| `haptic-medium` | `.medium` | `CLICK` | Button press, dare accept |
| `haptic-heavy` | `.heavy` | `HEAVY_CLICK` | Alarm dismiss, alarm snooze |
| `haptic-success` | `.success` | `CONFIRM` | Streak increment, alarm completed, score up |
| `haptic-warning` | `.warning` | `REJECT` | Score drop, streak at risk |
| `haptic-error` | `.error` | `DOUBLE_CLICK` | Missed alarm, streak broken |

**Rule:** Less is more. Haptic fatigue is real. Only use haptics on meaningful interactions — not scrolling, not page transitions, not background updates.

---

## 7. Component Patterns

### 7.1 Interactive Elements

**Primary Button (Alarm Dismiss, Main CTAs)**
```
Background: accent-primary (#FF6B35)
Text: text-on-accent (#09090B), Space Grotesk Bold
Border: none (or 2px accent-primary for neubrutalist variant)
Border-radius: radius-md (12px)
Padding: 16px 24px
Min height: 56px (64px for alarm actions)
Press: scale(0.96) + darken 10% + haptic-medium
```

**Secondary Button (Cancel, Back, Alternatives)**
```
Background: transparent
Text: text-primary (#FAFAFA), Inter Semibold
Border: 1.5px border-emphasis
Border-radius: radius-md (12px)
Padding: 12px 20px
Min height: 48px
Press: scale(0.97) + surface-2 background + haptic-light
```

**Dare Engine Card (The Signature Component)**
```
Background: accent-subtle (rgba(255,107,53,0.10))
Border: 2-3px border-neubrutalist (#FF6B35)
Border-radius: radius-sm (8px) — sharper = more confrontational
Padding: 16px 20px
Text: heading-2 (Space Grotesk Semibold 22px), text-primary
Enter animation: slam-in (200ms, scale 0.8→1.05→1.0)
Haptic: haptic-medium on appear
```

**Toggle**
```
Track off: surface-2 (#27272A), 2px border-emphasis
Track on: accent-primary (#FF6B35)
Thumb: text-primary (#FAFAFA)
Width: 52px, Height: 32px (above 44pt touch target with padding)
Animation: 200ms spring
Haptic: haptic-light on change
```

### 7.2 Display Elements

**Life Score Ring (The Signature Shape)**
```
Size: 160px diameter on home screen
Background ring: surface-2 (#27272A), 8px stroke
Progress ring: accent-primary (#FF6B35), 8px stroke, rounded cap
Score number: display-xl (Space Grotesk Bold 64px), centered
Glow: accent-glow behind ring, 400px blur
Animation: count-up from 0 on load (1s ease-out), ring fills simultaneously
Score change: slam animation (400ms) + haptic-success/warning
```

**Streak Counter**
```
Number: display-md (Space Grotesk Bold 36px)
Label: caption (Inter Medium 12px), text-secondary
Container: surface-1 card, 16px padding
Fire emoji at 7, 14, 30, 66 day milestones
Animation: count-up + burst particles on milestones
```

**Stat Card (Bento Grid Tile)**
```
Background: surface-1 (#18181B)
Border: border-subtle (barely visible edge)
Border-radius: radius-lg (16px)
Padding: 16px
Number: heading-1 or display-md, text-primary
Label: caption, text-secondary
Enter animation: fade-in + slight rise, 200ms + 50ms stagger
```

**Dare Engine Message (Display/Read-Only Variant)**
```
Same as interactive dare card but:
- No press states
- No chevron/arrow
- Border: 2px solid, but accent at 50% opacity (less prominent)
- Used in history, timeline, review screens
```

### 7.3 Navigation

**Tab Bar (iOS)**
```
Style: Liquid Glass (respect system)
Icons: SF Symbols, 24px
Active: accent-primary (#FF6B35)
Inactive: text-tertiary
Haptic: haptic-light on tab switch
```

**Tab Bar (Android)**
```
Style: Material You bottom navigation
Active: accent-primary (#FF6B35)
Inactive: text-tertiary
```

---

## 8. Iconography

**Style:** Outlined, 1.5-2px stroke weight, rounded joins
**Size:** 24px standard, 20px compact, 32px feature
**Color:** `text-secondary` default, `accent-primary` for active/selected
**Source:** Lucide Icons (free, consistent, 1000+ icons) or custom for key brand icons

**Custom icons needed:**
- SnoozeWar app icon (clock arc + lightning/energy motif)
- Life Score ring icon
- Dare Engine "speech" icon
- Streak flame icon
- Night mode moon icon
- Morning mode sun icon

---

## 9. Signature Elements Checklist

These 5 elements must appear consistently across app, website, landing pages, social media, and marketing:

| # | Element | What it is | Where it appears |
|---|---------|-----------|-----------------|
| 1 | **Electric Amber (#FF6B35)** | The ownable color | Every screen, every post, every page |
| 2 | **Life Score Ring** | Circular progress arc — the signature shape | Home screen, widget, app icon, marketing, social |
| 3 | **Dare Engine Card** | Thick amber border, dark tinted background, bold text | In-app, screenshots, social posts, ads |
| 4 | **Space Grotesk Bold** | The display typeface — angular, confident | Headlines, scores, dare text |
| 5 | **The Slam** | Elements arrive with overshoot + haptic, not gentle fades | Score changes, dare messages, key moments |

If someone sees a screenshot with a dark background, amber accent, circular score ring, thick-bordered card with bold text — they know it's SnoozeWar. No logo needed.

---

## 10. App Store Screenshot Design

First screenshot = 15-30% conversion swing. Design rules:

| # | Rule |
|---|------|
| 1 | Dark background — stands out in a sea of white/light app screenshots |
| 2 | Life Score ring front and center — the signature shape |
| 3 | One Dare Engine message visible — shows personality instantly |
| 4 | Electric amber accent — pops in App Store grid |
| 5 | Minimal text — max 5 words per screenshot |
| 6 | Device frame optional — full-bleed if possible |

---

## 11. Responsive / Platform Rules

| Platform | Adaptation |
|----------|-----------|
| **iOS** | Liquid Glass tab bar, SF Symbols for system icons, Dynamic Type support, haptic via UIFeedbackGenerator |
| **Android** | Material You bottom nav, Material Icons for system icons, adaptive icons, haptic via VibrationEffect |
| **Website** | Same color system, same typography, mouse hover states added, spacing scales up 1.25x |
| **Social Media** | Same colors, same fonts, screenshots use the signature elements |

---

## 12. Accessibility

| Rule | Spec |
|------|------|
| Contrast ratio (text) | Minimum 4.5:1, target 7:1 |
| Contrast ratio (large text) | Minimum 3:1 |
| Touch targets | Minimum 44pt (iOS) / 48dp (Android), alarm buttons 56-64dp |
| Touch spacing | Minimum 8dp between targets |
| Reduced motion | Respect `prefers-reduced-motion` — disable decorative animation |
| Reduced transparency | Respect system setting — solid backgrounds instead of glass |
| Screen reader | All interactive elements labeled, score changes announced |
| Color alone | Never use color as the only indicator — always pair with icon/text/shape |

---

## 13. Anti-Patterns (What NOT To Do)

| Don't | Why |
|-------|-----|
| Use pure black (#000000) as background | OLED halation — use zinc-tinted #09090B |
| Use pure white (#FFFFFF) for text | Eye strain on dark — use #FAFAFA |
| Use blue as accent color | Oversaturated in 2026 — invisible, owned by everyone |
| Use more than 2 fonts | Feels cheap and inconsistent |
| Use more than 3 colors beyond the system | Visual noise kills premium |
| Add borders to every card | Borders everywhere = borders nowhere. Use sparingly. |
| Animate everything | Motion fatigue. Animate only meaningful moments. |
| Use small touch targets on alarm screen | Sleep inertia = clumsy fingers. 56-64dp minimum. |
| Put too many elements per screen | One focal point. Premium = restraint. |
| Use gradients on text | Illegible on dark backgrounds. Text is always solid color. |
| Use light mode | SnoozeWar is dark-only. No light mode. The dark IS the identity. |

---

## 14. Design Token Summary (Copy-Paste Ready)

```
// Colors
surface-base: #09090B
surface-1: #18181B
surface-2: #27272A
surface-3: #3F3F46
accent-primary: #FF6B35
accent-hover: #E55A2B
accent-subtle: rgba(255,107,53,0.10)
accent-glow: rgba(255,107,53,0.05)
text-primary: #FAFAFA
text-secondary: rgba(250,250,250,0.7)
text-tertiary: rgba(250,250,250,0.45)
text-accent: #FF6B35
text-on-accent: #09090B
success: #22C55E
warning: #F59E0B
error: #EF4444
border-subtle: rgba(250,250,250,0.06)
border-emphasis: rgba(250,250,250,0.12)
border-neubrutalist: #FF6B35 2-3px solid

// Typography
display-font: Space Grotesk
body-font: Inter
display-xl: 64px Bold -1.5px
display-lg: 48px Bold -1.0px
display-md: 36px Bold -0.5px
heading-1: 28px Bold -0.3px
heading-2: 22px Semibold 0px
body-lg: 18px Regular 0px
body: 16px Regular 0px
body-sm: 14px Regular 0.1px
caption: 12px Medium 0.2px
badge: 11px Semibold 0.5px

// Spacing (8px grid)
space-1: 4px
space-2: 8px
space-3: 12px
space-4: 16px
space-5: 20px
space-6: 24px
space-8: 32px
space-10: 40px
space-12: 48px

// Border Radius
radius-sm: 8px
radius-md: 12px
radius-lg: 16px
radius-xl: 24px
radius-full: 9999px

// Motion
press: 100ms ease-in
release: 200ms ease-out
card-enter: 200ms ease-out + 50ms stagger
score-change: 400-600ms ease-out
score-load: 800ms-1.2s ease-out
slide: 250ms ease-in-out
celebration: 600ms spring
fade: 150ms ease-in-out
slam: 200ms scale(0.8→1.05→1.0)
```

---

*This design system is the single source of truth for every SnoozeWar screen — app, website, landing page, social media. If it's not in this spec, it shouldn't be in the product.*
