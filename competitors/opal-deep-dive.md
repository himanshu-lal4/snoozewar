# Opal (Screen Time Control) — Deep Dive Competitor Analysis

**Research Date:** April 26, 2026
**Sources:** App Store reviews, Google Play reviews, Reddit, Community Forum, Product Hunt, blog reviews, sentiment analyses, investor reports

---

## Company Overview

- **App:** Opal: Screen Time Control
- **Website:** opal.so / opalapp.com
- **Founded:** 2020 (Speedinvest-backed)
- **Public Launch:** Late 2022
- **Team Size:** 11 people
- **ARR:** $10M (achieved in ~2 years from launch)
- **Prior milestone:** $5M ARR with just 6-7 people
- **Users:** 200,000+ (claimed); saved "120 million hours" of screen time (Nov 2024 claim)
- **Funding:** $4.3M Seed round (Jan 2021)
- **Platforms:** iOS (primary), macOS, Android (launched 2023, much weaker)
- **CEO:** Kenneth Schlenker

---

## App Store Ratings

| Platform | Rating | Review Count | Notes |
|----------|--------|--------------|-------|
| iOS App Store | **4.8/5** | ~70,318 reviews | Very strong; sentiment intel report says "mixed" despite high number |
| Google Play | **4.17/5** | ~2,500 ratings | Significantly weaker; near-zero traction vs iOS |

---

## 1. What Users LOVE

### Deep Focus Mode (The Killer Feature)
The un-bypassable blocking mode is the single most praised feature. Users cannot cancel or snooze sessions in Deep Focus — the timer must expire.

- *"Deep focus mode forces me to channel my energy positively. It's made me more productive and helped me evaluate my relationship with technology."* — App Store review
- *"Opal actually works — it forever changed my relationship with my phone within a few days by creating the right amount of friction to keep you from compulsively getting lost in distracting apps."* — Product Hunt review
- *"Apple Screen Time restrictions were very easy to bypass — like closing the front door of your house but not locking it."* — Multiple reviewers explaining why Opal > native controls

### Superior UI/UX
Opal is consistently praised for premium, polished design compared to utility-first competitors like Alarmy or Freedom.

- *"Opal has been such a thoughtful, intentional experience that feels gentle yet disciplined in helping me stick to my work blocks, claim back my focus, and achieve my goals."* — App Store review
- Marlvel.ai sentiment report: "Superior UI/UX design compared to utility-first competitors" is a top positive theme

### Gamification (Gems, Streaks, Focus Score)
- Focus Score (0-100 scale) rates focus hour-by-hour based on app usage, pickups, offline time
- Gems unlocked for focused behavior (e.g., "skilled gem" for productive work hours)
- Leaderboards for competing with friends
- Streaks for consistent focus sessions

### Behavioral Effectiveness (Self-Reported)
Opal's own stats (cited across marketing):
- 94% of members report being less distracted
- 93% report being more productive
- 90% report improved well-being
- Average 2-hour daily screen time reduction claimed

Real user reports:
- *"My screen time decreased from 6 hours per day to 2 hours per day"* — Google Play review
- *"I've made more than $100 with the time saved"* — Blog reviewer justifying the cost
- *"Screen time went from 7+ hours to 3 hours"* — App Store review

### Three Difficulty Tiers
1. **Normal** — Can snooze/cancel anytime (too easy for most)
2. **Timeout** — Increasing delays before snooze allowed
3. **Deep Focus** — Cannot bypass or cancel (premium only)

This tiered approach lets users self-select difficulty. Most power users praise Deep Focus specifically.

### Community & Social Features
- Co-working sessions
- Community chats and forum (community.opalapp.com)
- Leaderboards
- Friend accountability

### Helpful for Specific Populations
- Students (partnerships with Harvard, UCLA)
- People with ADHD (multiple reviews mention this)
- Parents wanting to be more present
- *"Not flashy or fun — it's a productivity tool that does exactly what it promises: blocks your time-wasting apps so you can focus on real life."* — Parent reviewer

---

## 2. What Users HATE

### Blocking Is Unreliable / Buggy
This is the **#1 complaint** across all sources. The core promise of the app — blocking apps — doesn't always work.

- *"Stopped blocking apps 30 min in"* — 1-star App Store review
- *"Really buggy and inconsistent — Facebook Messenger worked selectively, Instagram/Facebook functioned mid-session"* — App Store review
- *"Safari still accessible despite VPN on and blocking the internet option enabled"* — App Store review
- *"Frustrating that this is so unreliable"* — App Store review
- Opal themselves acknowledged a bug in v3.6 where "apps may not be blocked properly"
- Marlvel.ai report: "Syncing problems — unreliable syncing logic for app limits — is the #1 complaint, directly undermining the app's core utility"

### Too Easy to Bypass (Non-Deep Focus)
- Users can go to Settings > Screen Time > toggle off "Apps with Screen Time Access" to disable Opal entirely
- This vulnerability affects ALL third-party screen time apps on iOS, but users blame Opal specifically
- Normal mode is basically useless — users override immediately
- *"None of them can fully take control away from you. It's still your phone, and if you really want to cheat, you can."* — Opal's own FAQ acknowledges this

### Notifications Still Come Through
- Even during active blocking sessions, notifications from blocked apps (Snapchat, Instagram) still arrive
- This breaks the mental barrier — seeing a notification creates temptation even if the app is "blocked"
- Feature request exists for granular notification blocking during sessions

### Limited App Selection / Categorization Issues
- Can't always block the specific apps users want (games were missing for a long time; now added)
- Reddit categorized as "social media" — users who use it as news source can't unblock it selectively
- *"Blocking Reddit app also blocks the website"* — Community forum complaint
- Users want per-app control within categories, not category-level blocking

### Android Experience Is Terrible
- Android version launched in 2023 but has near-zero traction
- 4.17 rating vs 4.8 on iOS
- Samsung devices report screen flashing bugs when opening apps during blocking
- Notification icon displays as oversized white square
- Missing many features available on iOS

### VPN Concerns (Pre-iOS 16)
- Before the "New Opal" redesign, the app worked through a VPN, routing all internet traffic through Opal's servers
- Security concern for users who need their own VPN for work
- FaceTime crashed after ~20 seconds with Opal's VPN installed, even when VPN wasn't active
- *"Absolute hot GARBAGE if you ever use hotspot"* — VPN won't disable, interferes with phone hotspot
- Note: Post-iOS 16 redesign moved to Screen Time API, removing VPN dependency on newer devices

### "When Restrictions Lift, Old Patterns Return"
- Fundamental criticism of hard-blocking approach: it doesn't teach habits, just enforces them temporarily
- *"Blocking can create a frustrating cycle — restrict, bypass, feel guilty, repeat"* — Alternative app comparison article
- *"When the restriction lifts, old patterns return for many users"* — LiveIntently blog

---

## 3. Common Bugs/Issues Reported

| Bug | Severity | Source | Date |
|-----|----------|--------|------|
| Apps not blocked properly (v3.6+) | Critical | Community forum — Opal acknowledged | Nov 2022 |
| Safari accessible during "internet blocking" | High | App Store reviews | Ongoing |
| Notifications still come through during sessions | High | App Store reviews, community | Ongoing |
| VPN interferes with hotspot/FaceTime | High | App Store reviews | Pre-iOS 16 |
| Screen flashing on Samsung during blocks | Medium | Google Play reviews | 2025 |
| Notification icon broken (oversized white square) on Android | Low | Google Play reviews | 2025 |
| App crashes when adding/modifying blocklist apps (~10% of users) | Medium | Kimola feedback analysis | 2025 |
| Profile freezes after paid subscription activates | Medium | Community forum | Nov 2023 |
| No AM/PM option on time blocks (defaults to AM) | Medium | App Store review | 2024 |
| Blocking the Reddit app also blocks the website | Medium | Community forum | 2025 |

---

## 4. Pricing Complaints

### Current Pricing Structure
- **Monthly:** ~$8-12/month (varies by source; some report $20/month)
- **Annual:** $99.99/year (some sources say $59.99/year — may have changed or vary by region)
- **Lifetime:** ~$450 (mentioned in one community post)
- **Free tier:** Basic features, but Deep Focus is paywalled

### What Users Say About Pricing

**The "it's absurd" camp:**
- *"$99.99/year is absurd"* — MichaelSmith00, Community forum (Apr 2024)
- *"I love the idea but there's no way I'm paying $12 a month or $100 a year."* — GrinderMurphy, Community forum (Apr 2024)
- *"I can't justify a subscription for 20 whole dollars a month just to obtain self control."* — AlphaMak88, Community forum (Feb 2026)
- *"€100 a year or €450 for lifetime access for essentially an app blocker feels excessive."* — Hopeful-Opal, Community forum (Jan 2025)
- *"Love the app but I stopped using it because of this"* — beaux, Community forum (Feb 2026)

**The "it's worth it" camp:**
- *"Eight dollars a month feels steep, but it's not terrible when you consider the positive impact on my mental health."* — Blog reviewer
- *"I've made more than $100 with the time saved"* — Ayana Lage, blog review
- One user calculated $754+ in annual time savings to justify the cost

**Opal's response:** Sarah_K from Opal stated the company is **"not planning on bringing the price down"** but offers student discounts and a referral program (1 free year for recruiting 5 friends). They also direct complainers to email support@opal.so for discount codes.

### Dark Pattern / Subscription Trap Complaints

This is a **serious brand risk** area:

- *"I missed canceling my subscription by one day and am now out over $100."* — J_P, Community forum (Mar 2023), called it a **"dark pattern"**
- 7-day trial converting directly to full annual subscription with no monthly option was called "extreme"
- Users report that immediately after paid subscription activated, app became unusable — profile froze, text access disabled
- Mac app subscriptions managed by Stripe had cancellation bugs — instructions didn't work, no confirmation emails
- Uninstalling the app does NOT cancel the subscription (catches many users off guard)
- Medium-frequency $99 charge complaints after attempted cancellation = legal/brand risk per Marlvel.ai report

### Comparison Context
- **One Sec:** Among least expensive app blockers
- **Clearspace:** Free or significantly cheaper
- **Apple Screen Time:** Free (built-in)
- **Forest:** Significantly cheaper
- Opal is **2-3x more expensive** than most competitors

---

## 5. Feature Requests (From Community Forum + Reviews)

### Most Requested (by views/replies)

| Feature | Views | Replies | Status |
|---------|-------|---------|--------|
| Exclude neutral apps from Screen Time stats | 53,777 | 17 | Open |
| Categorize apps as productive/distracting | 55,061 | 445 | Completed |
| Lock Screen Time access behind passcode | 23,994 | 36 | Open |
| Opal for PC/Windows | 24,178 | 48 | Open |
| Multiple sessions running simultaneously | 20,420 | 68 | Open |
| Subdomain blocking (TikTok Shorts, YT Shorts, Reels) | 15,712 | 20 | Open |
| Export usage/Opal data | 12,324 | 9 | Open |
| Set goals/intentions before opening distracting apps | 9,786 | 23 | Open |
| Sync account across devices | 8,005 | 42 | Open |
| Separate adult content blocking option | 7,021 | 12 | Open |

### Other Notable Requests
- **Pomodoro timer integration** — 5,540 views
- **Fully customizable block screens** (custom text, quotes, styling) — 5,843 views
- **iPad-optimized app** (not just scaled iPhone) — 4,788 views
- **Emergency pass** for urgent situations — 5,177 views
- **Strict mode** preventing deleting apps or editing sessions — 7,091 views
- **Group/friends tracking with unblock codes** — Social accountability
- **Schedule allowed time** instead of blocked time (inverse approach)
- **Minimum time between snoozes** — Anti-bypass measure
- **Scrolling warnings without block setups** — Nudges even without active blocks
- **More browser support on Mac** (Firefox, Zen, Perplexity, etc.) — 7,278 views

### Key Insight
The #1 completed request with 445 replies was **app categorization** (productive vs distracting), showing users deeply want a scoring/classification system — not just crude blocking.

---

## 6. Recent Changes (2022-2026)

### "The New Opal" Redesign (Sept 2022, iOS 16)
**The biggest change in the app's history.** Opal became the first app to use Apple's Screen Time API on iOS 16.

Key changes:
- **VPN removed** — Shifted from proprietary VPN to native iOS Screen Time API
- **Focus Score introduced** — Hourly/daily metric rating focus based on app usage, pickups, offline time
- **Sessions enhanced** — Recurring sessions, built-in break buffers, app temporarily removed from device during sessions
- **Milestones/Gems system** — Achievement-based rewards for focused behavior
- **Community features** — Forum at community.opal.so
- **Rebrand** — Playful mascot replaced with "precious" gem aesthetic

### Android Launch (2023)
- Launched on Google Play
- Significantly weaker experience vs iOS
- Uses AccessibilityService API on Android 14+
- 4.17 rating, ~88K downloads/month (as of March 2026)

### V3.0 Milestone
- Added ability to block ANY app on phone (was the #1 feature request with 184 votes)
- Added games category
- Multi-language support
- Whitelist apps during sessions
- Location-based blocking
- Pin code protection

### Opal for Kids (2025-2026)
- New version specifically for children under 12
- Kids choose to block apps for 15/30/60 minutes
- Earn bonus points for extra offline time
- Designed so kids "won't just comply with limits — they'll actually opt into them"

### Current Status (April 2026)
- Marlvel.ai reports the app is **"in maintenance mode with minor bug fixes only"**
- Last Android update: March 10, 2026
- Declining sentiment trend despite high rating
- Technical debt in syncing and billing creating brand risk

---

## 7. Competitive Weaknesses (SnoozeWar Opportunities)

### What Opal Gets Wrong That We Can Exploit

1. **No behavior change, just enforcement** — Opal blocks apps but teaches nothing. When sessions end, old patterns return. SnoozeWar's Dare Engine and protocol-based mornings actually build habits.

2. **$100/year for an app blocker feels wrong** — Users repeatedly question paying premium prices for what feels like a feature, not a product. SnoozeWar's value prop (chronotype + enforcement + scoring + morning protocols) is a richer product.

3. **Blocking reliability is their Achilles heel** — The core promise fails often enough to generate serious complaints. Our enforcement targets a different moment (morning waking) with different mechanics (dares, scores, streaks) that don't depend on VPN/Screen Time API fragility.

4. **No science narrative** — Opal has no chronotype science, no social jet lag framing, no neuroscience positioning. It's a tool, not an identity. SnoozeWar's "69% of people wake up in the wrong timezone" is a fundamentally different conversation.

5. **Android is an afterthought** — 4.17 rating, buggy, minimal features. Cross-platform from day 1 is a real differentiator.

6. **Subscription trap reputation** — Dark pattern complaints, cancellation difficulties, and aggressive trial-to-annual conversion create trust issues. Our transparent 7-usage trial with 50% discount is cleaner.

7. **Gamification is shallow** — Gems and leaderboards feel like engagement tricks. SnoozeWar's Life Score (weighted across wake consistency, routine, streak, chronotype alignment, protocol compliance) is genuinely meaningful data.

8. **No morning-specific value** — Opal is generic "focus" for any time of day. SnoozeWar owns the first 30 minutes after waking — a specific, defensible moment with real neuroscience backing.

9. **Deep Focus (best feature) is paywalled** — Free tier is essentially a demo. Creates resentment. Our 7-usage full-experience trial gives real value before asking for money.

10. **No personality** — Opal is clean, premium, and boring. The Dare Engine's cocky, challenging personality is a fundamentally different emotional experience.

---

## Key Takeaway

Opal proves the market exists ($10M ARR with 11 people) and validates that people will pay for enforcement over their own behavior. But their execution has cracks: unreliable blocking, pricing resentment, no behavior change, no science narrative, terrible Android, and maintenance-mode vibes. SnoozeWar attacks a specific moment (morning) with deeper science, stronger personality, and fairer pricing — a different product category that Opal cannot easily pivot into.
