# Pre-Development Playbook — Complete Deliverables Before Line 1 of Code

*Every document, design, spec, and plan that must exist before project setup.*
*Standard: Fortune 500 product org quality. No shortcuts.*

---

## The Roles You're Playing

| Role | Responsibility | Deliverables |
|------|---------------|-------------|
| **CEO** | Vision, strategy, go/no-go decisions | Company vision doc, business model canvas, financial projections |
| **CFO** | Budget, runway, unit economics | Financial model, pricing strategy, cost projections, break-even analysis |
| **CMO** | Brand, positioning, go-to-market | Brand guidelines, marketing strategy, launch plan, content calendar |
| **Product Manager** | What to build and why | PRDs, user stories, feature specs, prioritization framework |
| **UX Designer** | How it looks and feels | Wireframes, user flows, Figma designs, design system |
| **Architect** | How it's built | System architecture, API specs, data model, infra plan |
| **QA Lead** | How it's tested | Test plans, acceptance criteria, device matrix, regression plan |
| **Marketing Manager** | How it reaches users | ASO strategy, content plan, channel strategy, launch sequence |
| **Business Exec** | Partnerships, legal, compliance | Terms of service, privacy policy, App Store compliance, trademark |

---

## Phase 0: Strategy & Business (CEO + CFO)
*Estimated time: 1 week*

### 0.1 — Company Vision Document
- [ ] Mission statement (1 sentence)
- [ ] Vision statement (where this is in 5 years)
- [ ] Core values (3-5, these drive product decisions)
- [ ] Problem statement (the gap we're filling)
- [ ] Target user persona (detailed, with demographics, psychographics, daily routine)
- [ ] Competitive positioning statement

### 0.2 — Business Model Canvas
- [ ] Value proposition
- [ ] Customer segments
- [ ] Channels
- [ ] Revenue streams (subscription tiers, IAP, future expansion)
- [ ] Key resources
- [ ] Key activities
- [ ] Key partners
- [ ] Cost structure
- [ ] Unfair advantages

### 0.3 — Financial Model (3-Year)
- [ ] Month-by-month projections for Year 1
- [ ] Quarterly for Year 2-3
- [ ] Revenue model: downloads → trials → paid → renewals
- [ ] Cost model: infra, AI API, marketing, tools, legal
- [ ] Unit economics: CAC, LTV, LTV:CAC ratio, payback period
- [ ] Break-even analysis: when does revenue > costs?
- [ ] Scenario modeling: pessimistic / base / optimistic
- [ ] Runway calculation at ₹10K, ₹25K, ₹50K monthly burn

### 0.4 — Pricing Strategy Document
- [ ] Pricing tiers (free, trial, annual, monthly)
- [ ] Price points by geography (US, India, UK, Japan, etc.)
- [ ] Price anchoring strategy
- [ ] IAP catalog (streak freeze, etc.)
- [ ] Competitor pricing comparison matrix
- [ ] Paywall strategy (hard vs soft vs freemium)
- [ ] Trial length optimization (3 vs 7 vs 14 day)

---

## Phase 1: Product Definition (Product Manager)
*Estimated time: 2 weeks*

### 1.1 — Master PRD (Product Requirements Document)
- [ ] Product overview & vision alignment
- [ ] Target user persona (detailed)
- [ ] Jobs to be done (JTBD framework)
- [ ] Feature list with priority (MoSCoW)
- [ ] Success metrics (North Star + supporting)
- [ ] Non-goals (what we explicitly won't do)
- [ ] Assumptions & risks
- [ ] Dependencies

### 1.2 — Individual Feature PRDs (one per feature)
Each PRD follows this template:
```
- Feature name
- Problem it solves
- User story (As a ___, I want ___, so that ___)
- Acceptance criteria (Given/When/Then)
- User flow (step by step)
- Edge cases
- Error states
- Empty states
- Loading states
- Offline behavior
- Accessibility requirements
- Analytics events to track
- Dare Engine copy requirements
- Paywall gate (free or premium?)
- Dependencies on other features
- Open questions
```

Feature PRDs needed:
- [ ] **1.2.1 — Onboarding Flow**
- [ ] **1.2.2 — Authentication (Sign up / Login / Delete Account)**
- [ ] **1.2.3 — Alarm Creation & Management**
- [ ] **1.2.4 — Alarm Ringing & Dismiss Flow**
- [ ] **1.2.5 — Photo Mission**
- [ ] **1.2.6 — Barcode Mission**
- [ ] **1.2.7 — Shake Mission**
- [ ] **1.2.8 — Night Mode (Bedtime Enforcement)**
- [ ] **1.2.9 — Morning Mode (Post-Alarm Flow)**
- [ ] **1.2.10 — AI Morning Digest**
- [ ] **1.2.11 — Morning Journal**
- [ ] **1.2.12 — Night Journal**
- [ ] **1.2.13 — Goal Setting (Night → Morning)**
- [ ] **1.2.14 — Life Score System**
- [ ] **1.2.15 — Life Score Widget (iOS + Android)**
- [ ] **1.2.16 — Streak System**
- [ ] **1.2.17 — Streak Freeze (IAP)**
- [ ] **1.2.18 — Gamification (Points, Levels, Ranks)**
- [ ] **1.2.19 — Achievements System**
- [ ] **1.2.20 — Leaderboard**
- [ ] **1.2.21 — AI Voice Agent**
- [ ] **1.2.22 — Day Mode (AI Reminders + Focus)**
- [ ] **1.2.23 — Adaptive Intelligence (Pattern Learning)**
- [ ] **1.2.24 — Push Notifications System**
- [ ] **1.2.25 — Settings & Preferences**
- [ ] **1.2.26 — Subscription & Paywall**
- [ ] **1.2.27 — Profile & Account Management**
- [ ] **1.2.28 — Dare Engine (Personality System)**
- [ ] **1.2.29 — Home Screen (Dashboard)**
- [ ] **1.2.30 — Stats & History Screen**

### 1.3 — User Flow Maps
- [ ] Complete user journey: first open → onboarding → first night → first morning → day 7 → day 30
- [ ] Night mode flow (detailed)
- [ ] Morning mode flow (detailed)
- [ ] Alarm ring → mission → dismiss flow
- [ ] Subscription flow (trial start → paywall → purchase → renewal → cancellation)
- [ ] Settings flow
- [ ] Achievement unlock flow
- [ ] Streak freeze flow
- [ ] Account deletion flow (GDPR compliance)

### 1.4 — Analytics Event Taxonomy
- [ ] Every trackable event, named consistently
- [ ] Event properties for each
- [ ] Funnel definitions (onboarding, subscription, morning completion)
- [ ] Cohort definitions
- [ ] Key dashboard layout for PostHog

### 1.5 — Dare Engine Copy Bible
- [ ] 200+ copy variants organized by:
  - Context (morning, night, alarm, notification, achievement)
  - Emotion (encouraging dare, punishment, celebration, comeback)
  - Streak state (new, building, long, broken)
  - Score state (high, low, improving, declining)
- [ ] Tone guide (cocky but not mean, challenging but not discouraging)
- [ ] Copy dos and don'ts
- [ ] Localization notes (which copy translates well, which is English-only)

---

## Phase 2: UX & Design (UX Designer)
*Estimated time: 2-3 weeks*

### 2.1 — Information Architecture
- [ ] App sitemap (every screen, organized)
- [ ] Navigation structure (tab bar, stack navigators, modals)
- [ ] Screen inventory (total count, naming convention)

### 2.2 — Wireframes (Lo-Fi)
Every screen, every state. Built in Figma or Excalidraw.

- [ ] Onboarding (3 screens + paywall)
- [ ] Auth (login, register, forgot password)
- [ ] Home / Dashboard
- [ ] Alarm list
- [ ] Alarm create/edit (time, missions, repeat, sound)
- [ ] Alarm ringing (full screen)
- [ ] Photo mission
- [ ] Barcode mission
- [ ] Shake mission
- [ ] Night mode (countdown, goal, journal)
- [ ] Morning mode (digest, journal, goal reminder)
- [ ] Life Score detail
- [ ] Stats / History (charts, calendar heatmap)
- [ ] Achievements gallery
- [ ] Leaderboard
- [ ] AI Voice agent screen
- [ ] Settings
- [ ] Profile
- [ ] Subscription / Paywall
- [ ] Notifications permission prompt
- [ ] Battery optimization guide (Android)
- [ ] Widget (iOS + Android)
- [ ] Empty states (no alarms, no streak, first day)
- [ ] Error states (no internet, server error, payment failed)
- [ ] Loading states

### 2.3 — Design System
- [ ] Color palette (primary, secondary, accent, semantic, dark mode)
- [ ] Typography scale (headings, body, caption, dare copy)
- [ ] Spacing system (4px grid)
- [ ] Border radius tokens
- [ ] Shadow/elevation tokens
- [ ] Icon set selection (or custom)
- [ ] Component library:
  - Buttons (primary, secondary, ghost, danger)
  - Cards
  - Input fields
  - Bottom sheets
  - Modals
  - Tab bar
  - Progress indicators
  - Score ring
  - Streak badge
  - Achievement card
  - Notification banner
  - Countdown timer
  - Toggle switches
  - Slider controls

### 2.4 — High-Fidelity Designs (Figma)
- [ ] Every screen from wireframes → polished Figma designs
- [ ] Dark mode (primary) + Light mode
- [ ] Animations spec (what animates, duration, easing)
- [ ] Micro-interactions spec (button press, score change, streak increment, level up)
- [ ] App icon design (multiple variants for A/B test)
- [ ] Splash screen design
- [ ] App Store screenshots (6 screens, iPhone + Android)
- [ ] Feature graphic (Play Store)
- [ ] Widget designs (small, medium, large)

### 2.5 — Prototype
- [ ] Figma interactive prototype: onboarding → first night → first morning
- [ ] Prototype for alarm ring → mission flow
- [ ] Prototype for paywall flow

---

## Phase 3: Technical Architecture (Architect)
*Estimated time: 1 week (mostly done)*

### 3.1 — System Architecture
- [x] System diagram
- [x] Backend API routes
- [x] MongoDB schema design
- [x] Folder structures (app + server)
- [x] Package list
- [x] Native module requirements
- [x] Third-party service selection

### 3.2 — API Specification (OpenAPI/Swagger)
- [ ] Full OpenAPI 3.0 spec for every endpoint
- [ ] Request/response schemas with examples
- [ ] Error response format
- [ ] Authentication scheme documentation
- [ ] Rate limiting documentation

### 3.3 — Data Flow Diagrams
- [ ] Alarm scheduling → firing → dismiss data flow
- [ ] Score calculation data flow
- [ ] Subscription lifecycle data flow
- [ ] AI digest generation pipeline
- [ ] Offline sync flow
- [ ] Widget data refresh flow

### 3.4 — Infrastructure Plan
- [ ] Environment setup (dev, staging, production)
- [ ] CI/CD pipeline design
- [ ] Monitoring & alerting plan
- [ ] Backup strategy
- [ ] Scaling plan (when to upgrade what)

### 3.5 — Security Plan
- [ ] Authentication flow (Firebase tokens → backend verification)
- [ ] API security (rate limiting, input validation, CORS)
- [ ] Data encryption (at rest, in transit)
- [ ] PII handling (GDPR, CCPA compliance)
- [ ] Secret management (env vars, key rotation)
- [ ] App Store compliance checklist

---

## Phase 4: QA & Testing Plan (QA Lead)
*Estimated time: 1 week*

### 4.1 — Test Strategy Document
- [ ] Testing pyramid (unit, integration, E2E)
- [ ] Test coverage targets
- [ ] Testing tools selection
- [ ] CI integration plan

### 4.2 — Device Testing Matrix
- [ ] iOS devices (iPhone 12, 13, 14, 15, 16 — minimum iOS 16)
- [ ] Android devices (Samsung, Pixel, Xiaomi, OnePlus — minimum Android 10)
- [ ] Android OEM-specific alarm testing plan (dontkillmyapp.com checklist)
- [ ] Tablet support decision (yes/no/limited)

### 4.3 — Test Cases Per Feature
- [ ] Acceptance test cases from every PRD's acceptance criteria
- [ ] Edge case test cases
- [ ] Offline behavior tests
- [ ] Permission denial tests
- [ ] Background/killed state tests
- [ ] Battery optimization tests (Android OEM-specific)
- [ ] Timezone change tests
- [ ] Daylight saving time tests
- [ ] Device reboot tests
- [ ] Low memory tests
- [ ] Notification delivery tests

### 4.4 — Beta Testing Plan
- [ ] Beta tester recruitment strategy (where, how many, criteria)
- [ ] Beta feedback collection method
- [ ] Beta success criteria (what metrics decide "ready to launch")
- [ ] Beta duration and phases

---

## Phase 5: Brand & Marketing (CMO + Marketing Manager)
*Estimated time: 2 weeks (parallel with Phase 2)*

### 5.1 — Brand Identity
- [ ] Final brand name (pending decision)
- [ ] Logo design (primary, icon, wordmark)
- [ ] Brand colors (tied to design system)
- [ ] Brand typography
- [ ] Brand voice guidelines (Dare Engine personality documented for all channels)
- [ ] Brand photography/illustration style
- [ ] Social media avatar + banner templates

### 5.2 — ASO (App Store Optimization) Strategy
- [ ] Keyword research (primary, secondary, long-tail)
- [ ] App title optimization (both stores)
- [ ] Subtitle (iOS) / Short description (Android)
- [ ] Full description (keyword-optimized)
- [ ] Screenshot strategy (what features, what order, what copy)
- [ ] Preview video storyboard
- [ ] Category selection
- [ ] Localized metadata for top 10 markets
- [ ] ASO A/B test plan (icon, screenshots, description)

### 5.3 — AEO (Answer Engine Optimization) Strategy
- [ ] Target questions people ask about morning routines, alarm apps, habits
- [ ] Content plan to rank in AI-generated answers (ChatGPT, Perplexity, Google AI Overviews)
- [ ] Schema markup plan for website
- [ ] FAQ content targeting featured snippets

### 5.4 — SEO Strategy
- [ ] Landing page structure
- [ ] Blog content plan (20 articles pre-written or outlined)
- [ ] Target keywords per page
- [ ] Backlink strategy
- [ ] Technical SEO checklist

### 5.5 — Social Media Strategy
- [ ] Platform priority: TikTok > Instagram > Reddit > Twitter > LinkedIn
- [ ] Content pillars (3-5 themes)
- [ ] Content calendar (first 90 days, 3-5 posts/week)
- [ ] TikTok content formats:
  - Morning routine transformations
  - Dare Engine personality clips
  - "My alarm app roasts me" series
  - User reaction videos
  - Before/after morning routine
- [ ] Instagram content formats
- [ ] Reddit community engagement plan (which subreddits, what value to add)
- [ ] IndieHackers build-in-public plan
- [ ] LinkedIn thought leadership posts
- [ ] Hashtag strategy per platform

### 5.6 — Launch Plan
- [ ] Pre-launch (4 weeks before): waitlist, social teasing, beta recruitment
- [ ] Launch week: ProductHunt, HackerNews, Reddit, social blitz, press outreach
- [ ] Post-launch (4 weeks after): iteration based on feedback, content scaling
- [ ] Press kit (screenshots, logo, description, founder bio)
- [ ] ProductHunt launch preparation checklist
- [ ] Influencer/creator outreach list (micro-influencers, morning routine creators)

### 5.7 — Growth Loops
- [ ] Viral mechanics designed into the product:
  - Share Life Score to stories
  - Challenge a friend
  - Streak milestone sharing
  - "My alarm app said this to me" screenshot sharing
- [ ] Referral program design (if applicable)
- [ ] Review prompt strategy (when to ask, how to ask)

---

## Phase 6: Legal & Compliance (Business Exec)
*Estimated time: 1 week (parallel)*

### 6.1 — Legal Documents
- [ ] Terms of Service
- [ ] Privacy Policy (GDPR + CCPA compliant)
- [ ] Cookie policy (for website)
- [ ] Subscription terms (auto-renewal disclosure per App Store / Play Store rules)

### 6.2 — App Store Compliance
- [ ] Apple App Store Review Guidelines checklist (especially 5.1.1 data collection, 3.1.1 IAP)
- [ ] Google Play Policy compliance checklist
- [ ] Critical Alerts entitlement application (iOS)
- [ ] Health data handling compliance (if using HealthKit)
- [ ] EXACT_ALARM permission justification (Android)
- [ ] Data safety section (Play Store)
- [ ] App privacy details (App Store)
- [ ] Age rating assessment
- [ ] Content rating questionnaire (Play Store)

### 6.3 — IP Protection
- [ ] Trademark application (brand name)
- [ ] Domain registration (.com + .app + key TLDs)
- [ ] Social handle reservation (all platforms)
- [ ] Copyright notice in app

---

## Phase 7: Vibe-Code Preparation (Developer)
*Estimated time: 1 week*

### 7.1 — Codebase Blueprint
- [ ] Project structure finalized (no changes during dev)
- [ ] Every file listed with its purpose
- [ ] Import/dependency map between modules
- [ ] Coding standards document (naming, file structure, patterns)
- [ ] Git branching strategy
- [ ] Commit message convention
- [ ] PR template

### 7.2 — Implementation Tickets
- [ ] Every feature broken into dev tickets
- [ ] Each ticket has:
  - Clear title
  - PRD reference
  - Figma screen reference
  - Acceptance criteria
  - Technical notes / approach
  - Estimated hours
  - Dependencies (blocked by)
- [ ] Tickets ordered in optimal build sequence
- [ ] Total hour estimate

### 7.3 — AI Coding Prompts
- [ ] Pre-written Claude/Cursor prompts for each major module
- [ ] Context files ready (PRD + design + schema) to feed into AI
- [ ] Prompt templates for:
  - Component generation (screen + styling)
  - API route + controller + service generation
  - Test generation
  - Dare Engine copy generation

### 7.4 — Dev Environment Setup Guide
- [ ] Step-by-step from zero to running dev build
- [ ] All accounts to create (Firebase, RevenueCat, OpenAI, Railway, PostHog, etc.)
- [ ] All API keys needed
- [ ] Local dev dependencies (Docker for MongoDB + Redis)
- [ ] Physical device setup (iOS + Android)
- [ ] EAS CLI setup

---

## Execution Order (What to Do When)

### Pre-Development (8 weeks — no code)
```
Week 1:     Phase 0 (Strategy) + Start Phase 5.1 (Brand name finalization)
Week 2-3:   Phase 1 (All PRDs) + Phase 6 (Legal, parallel)
Week 3-5:   Phase 2 (Wireframes → Design System → Hi-Fi Designs)
Week 4:     Phase 3.2-3.5 (remaining architecture) + Phase 4 (QA plan)
Week 5-6:   Phase 5 (Marketing, parallel with design)
Week 6-7:   Phase 2.4 (Hi-Fi Figma designs completion)
Week 7:     Phase 7 (Vibe-code prep, tickets, prompts)
Week 8:     REVIEW EVERYTHING. Gap analysis. Fix holes.
```

### Development (30 weeks — code starts)
```
BUILD ORDER: Backend → Native Modules → Frontend → Polish

STAGE 1: BACKEND (Weeks 9-16)
  Week 9:     Project setup, Express skeleton, MongoDB models, Firebase Auth
  Week 10:    Auth routes, user/profile routes, onboarding routes
  Week 11:    Alarm CRUD routes, alarm event ingestion, night mode routes
  Week 12:    Morning mode routes, digest generation pipeline (BullMQ + OpenAI)
  Week 13:    Life Score engine (formula, calculation service, score routes)
  Week 14:    Streak system, streak freeze, gamification (points, levels, achievements)
  Week 15:    AI voice session management, adaptive intelligence, pattern analysis jobs
  Week 16:    Notification service (FCM), subscription webhook (RevenueCat),
              leaderboard, all cron jobs. Backend API 100% complete.

  GATE: Every API endpoint tested with Postman/Thunder Client.
        Integration tests passing. Deploy to Railway staging.

STAGE 2: NATIVE MODULES (Weeks 17-21)
  Week 17:    Expo project setup, dev client builds on both devices
  Week 18-19: Custom alarm native module — Android (AlarmManager, foreground
              service, full-screen intent, BroadcastReceiver, wake lock)
  Week 20:    Custom alarm native module — iOS (critical alerts, notification
              actions, AVAudioSession, full-screen presentation)
  Week 21:    Widget native code — iOS (WidgetKit/SwiftUI) + Android (Glance/AppWidget)
              Config plugins for all native modules.

  GATE: Alarm rings reliably on 5+ physical devices (iOS + Android).
        Survives app kill, reboot, DND, battery optimization.
        Widget shows dummy score and updates.

STAGE 3: FRONTEND (Weeks 22-30)
  Week 22:    Navigation setup (Expo Router), theme, design system components,
              auth screens, onboarding flow
  Week 23:    Home dashboard, Life Score ring, streak display
  Week 24:    Alarm list, alarm create/edit, mission selector
  Week 25:    Alarm ring screen, photo mission, barcode mission, shake mission
  Week 26:    Night mode screen, morning mode screen, digest, journals
  Week 27:    Stats screen, score history charts, streak calendar, achievements
  Week 28:    Leaderboard, AI voice agent screen, day mode, settings, profile
  Week 29:    Paywall screen, subscription flow, Dare Engine copy integration,
              push notification handling, offline sync
  Week 30:    Widget data connection, animations, micro-interactions,
              empty/error/loading states, accessibility

  GATE: Every screen matches Figma pixel-perfect.
        Every feature works end-to-end with real backend.

STAGE 4: POLISH & LAUNCH (Weeks 31-34)
  Week 31:    Bug fixes, performance optimization, edge case handling
  Week 32:    Beta release (TestFlight + Play Store internal), beta testing
  Week 33:    Beta feedback fixes, App Store assets (screenshots, preview video)
  Week 34:    Submit to both stores. Marketing launch sequence begins.
```

**Total: 8 weeks pre-dev + 26 weeks dev = 34 weeks (~8.5 months)**

---

## File Organization

```
/Desktop/app-research/
├── CLAUDE.md
├── PRE-DEV-PLAYBOOK.md          ← this file
├── PROJECT_STATE.md
│
├── strategy/                     ← Phase 0
│   ├── vision.md
│   ├── business-model-canvas.md
│   ├── financial-model.md
│   ├── pricing-strategy.md
│   └── user-persona.md
│
├── prd/                          ← Phase 1
│   ├── MASTER-PRD.md
│   ├── features/
│   │   ├── 01-onboarding.md
│   │   ├── 02-authentication.md
│   │   ├── 03-alarm-management.md
│   │   ├── ... (30 feature PRDs)
│   │   └── 30-stats-history.md
│   ├── user-flows/
│   ├── analytics-taxonomy.md
│   └── dare-engine-copy-bible.md
│
├── design/                       ← Phase 2
│   ├── information-architecture.md
│   ├── wireframes/               (exported from Figma/Excalidraw)
│   ├── design-system.md
│   ├── animation-spec.md
│   └── figma-links.md            (links to Figma files)
│
├── architecture/                 ← Phase 3
│   ├── system-architecture.md    (already done)
│   ├── api-spec/                 (OpenAPI files)
│   ├── data-flows/
│   ├── infra-plan.md
│   └── security-plan.md
│
├── qa/                           ← Phase 4
│   ├── test-strategy.md
│   ├── device-matrix.md
│   ├── test-cases/
│   └── beta-plan.md
│
├── marketing/                    ← Phase 5
│   ├── brand-identity.md
│   ├── aso-strategy.md
│   ├── aeo-strategy.md
│   ├── seo-strategy.md
│   ├── social-media-strategy.md
│   ├── content-calendar.md
│   ├── launch-plan.md
│   └── growth-loops.md
│
├── legal/                        ← Phase 6
│   ├── terms-of-service.md
│   ├── privacy-policy.md
│   ├── app-store-compliance.md
│   └── trademark-plan.md
│
├── dev-prep/                     ← Phase 7
│   ├── coding-standards.md
│   ├── tickets/
│   ├── ai-prompts/
│   └── env-setup-guide.md
│
├── competitors/                  (existing)
├── market/                       (existing)
├── concepts/                     (existing)
├── validation/                   (existing)
└── notes/                        (existing)
```

---

## Quality Gates

Before moving to the next phase, every deliverable must pass:

1. **Completeness** — no TODOs, no "TBD", no placeholders
2. **Consistency** — terminology, naming, tone consistent across all docs
3. **Traceability** — every design links to a PRD, every ticket links to a design, every test links to acceptance criteria
4. **Vibecodeable** — a developer (or AI) reading the PRD + design + ticket can implement without asking questions
