# Business Model Canvas

> ⚠️ **PARTIALLY SUPERSEDED (2026-04-17)** — Section 4 (Revenue Streams) is obsolete after the April 16-17 monetization pivot. See `strategy/revenue-model-v2.md` for the new model. Other sections (value prop, customer segments, channels, key activities/resources/partners, cost structure, unfair advantages) remain largely valid with minor updates needed.
>
> **Specifically obsolete in Section 4:**
> - "Hard paywall with 7-day free trial" → now freemium with 7-usage consumption trial
> - Retail pricing $49.99/yr → $39.99/yr
> - India ₹849 reference → now ₹999
> - No mention of credit wallet, referrals, top-ups, or lifetime tier
> - Streak freeze as sole cash IAP → now credit-based + cash fallback
>
> Full canvas rebuild scheduled post-financial-model-rebuild.

*Status: PARTIALLY SUPERSEDED — Section 4 rewrite pending.*

---

## 1. Value Proposition

**For the "Struggling Striver" who has tried and failed to become a morning person:**

- **The only app that owns your entire cycle** — bedtime enforcement → alarm with missions → morning routine → daily follow-through
- **Enforcement, not encouragement** — you chose discipline, we hold you to it
- **A personality that dares you** — cocky, challenging, competitive. Not a therapist. A rival.
- **One score that tells you the truth** — Life Score: your sleep + morning + streak in one number
- **A streak you're terrified to break** — loss aversion mechanics that make quitting feel expensive

**Pain relievers:**
- No more snooze spiral (alarm can't be dismissed without mission)
- No more "I'll start tomorrow" (score drops visibly)
- No more abandoned morning routines (expiring digest creates urgency)
- No more decision fatigue at 6 AM (the app tells you what to do next)

**Gain creators:**
- Dopamine hit from score increase
- Pride in streak length
- Social proof (leaderboard rank, shareable score)
- Actual behavior change (the product's ultimate promise)

---

## 2. Customer Segments

### Primary: Struggling Strivers (70% of users)
- 18-35, global, smartphone-native
- Have tried 3-5 times to fix their mornings, keep failing
- Follow #MorningRoutine on TikTok but can't execute
- Will pay $50/year for something that actually works

### Secondary: Optimizers (20% of users)
- Already have routines, want to quantify and gamify
- Data-driven, score-obsessed
- Highest LTV (annual subscribers, low churn, buy streak freezes)
- LinkedIn sharers — organic growth engine

### Tertiary: Students (10% of users)
- 18-22, need to wake up for class
- Highest viral coefficient (share dare screenshots, compete with friends)
- Lowest ARPU but highest organic reach
- Convert to Struggling Strivers after graduation

---

## 3. Channels

### Acquisition Channels (ranked by priority)

| Channel | Type | Cost | Expected Impact |
|---------|------|------|----------------|
| **ASO (App Store + Play Store)** | Organic | $0 + time | 40-50% of downloads long-term |
| **TikTok organic** | Organic | $0 + time | 20-30% of downloads if content hits |
| **Instagram Reels** | Organic | $0 (repurpose TikTok) | 5-10% of downloads |
| **Reddit** | Organic | $0 + time | 3-5% of downloads, high conversion |
| **ProductHunt launch** | One-time | $0 | Spike: 5-10K downloads in first week |
| **IndieHackers / Twitter** | Organic | $0 + time | 1-3% of downloads, builds credibility |
| **Word of mouth** | Organic | $0 | 10-20% of downloads (built into product: sharing) |
| **SEO (blog + landing page)** | Organic | $0 + time | 5-10% long-term |
| **AEO (AI answer engines)** | Organic | $0 + time | Emerging, unknown volume |
| **Apple Search Ads** | Paid | $2-6/install | Scale after proving organic conversion |
| **TikTok Ads** | Paid | $2-5/install | Scale after organic content proves messaging |
| **Google App Campaigns** | Paid | $1-3/install | Broadest reach for Android |

### Retention Channels

| Channel | Purpose |
|---------|---------|
| **Push notifications (Dare Engine)** | Daily engagement. "Day 15. Still here? Impressive." |
| **Home screen widget** | Passive reminder. Score visible without opening app. |
| **Streak mechanics** | Loss aversion. "Break your streak and your score drops." |
| **Email (weekly digest)** | Re-engage lapsed users. "Your Life Score dropped 12 points." |

---

## 4. Revenue Streams

### Primary: Subscriptions (85-90% of revenue)

| Plan | Price (US) | Price (India) | Price (Tier 2) |
|------|-----------|--------------|----------------|
| Annual | $49.99/yr | ₹999/yr (~$12) | $24.99/yr |
| Monthly | $5.99/mo | ₹149/mo (~$1.79) | $2.99/mo |
| Free trial | 7 days on annual plan | Same | Same |

**Paywall strategy:** Hard paywall with 7-day free trial. Free users get:
- Basic alarm (no missions)
- Score preview (can see score but not breakdown)
- 3-day streak history

Paid users get everything else.

### Secondary: In-App Purchases (5-10% of revenue)

| IAP | Price | Frequency |
|-----|-------|-----------|
| Streak Freeze (1x use) | $0.99 / ₹49 | 3-5x/year per active user |
| Streak Freeze Pack (3x) | $1.99 / ₹99 | 1-2x/year |
| Premium Alarm Sounds | $2.99 / ₹149 | One-time |

### Future: B2B / Corporate Wellness (Year 2+, 5-15% of revenue)
- Team plans for companies
- HR dashboard (anonymized morning routine compliance)
- Corporate pricing: $8-15/user/month
- Target: wellness-forward companies already buying Calm/Headspace

---

## 5. Key Resources

| Resource | Details |
|----------|---------|
| **Founder (you)** | Product, engineering, design, marketing — the bottleneck and the moat |
| **Codebase** | React Native app + Node.js backend — your IP |
| **Dare Engine copy** | 200+ personality-driven copy variants — hard to replicate |
| **User data** | Sleep patterns, wake behavior, routine completion — compounds over time |
| **Brand** | Name, voice, personality — the emotional connection |
| **App Store rankings** | Once established, ASO rankings compound (more downloads → higher rank → more downloads) |

---

## 6. Key Activities

| Activity | Frequency | Role |
|---------|-----------|------|
| Product development | Daily (during dev phase) | Developer |
| Content creation (TikTok/IG) | 3-5x/week | CMO |
| ASO optimization | Weekly | Marketing Manager |
| User feedback analysis | Weekly | PM |
| Financial tracking | Monthly | CFO |
| AI prompt optimization | Bi-weekly | Developer |
| App Store screenshot A/B tests | Monthly | Marketing |
| Community engagement (Reddit) | Daily, 15 min | Marketing |
| Bug fixes + feature iterations | Weekly | Developer |
| Dare Engine copy writing | Ongoing | PM + Creative |

---

## 7. Key Partners

| Partner | Relationship | Why |
|---------|-------------|-----|
| **Apple** | Platform | App Store distribution, Critical Alerts entitlement, HealthKit |
| **Google** | Platform | Play Store distribution, Google Fit, FCM |
| **OpenAI** | API provider | Morning digest generation, voice agent, adaptive intelligence |
| **RevenueCat** | SDK provider | Subscription management, paywall analytics, webhook processing |
| **Firebase** | Infrastructure | Auth, push notifications, analytics |
| **Railway** | Hosting | Backend deployment, auto-scaling |
| **MongoDB Atlas** | Database | Free tier → managed scaling |
| **Micro-influencers** | Marketing | Morning routine / productivity creators on TikTok |

---

## 8. Cost Structure

### Fixed Costs (Monthly)
| Item | Cost | Notes |
|------|------|-------|
| Apple Developer Account | $8.25/mo ($99/yr) | Non-negotiable |
| Domain hosting | $10-15/mo | .com + .app + website |
| ASO tool (basic tier) | $20-50/mo | Keyword tracking |
| Total fixed | **~$40-75/mo** | |

### Variable Costs (Scale with Users)
| Item | Cost Per | At 10K Paid Users | At 100K Paid Users |
|------|---------|-------------------|-------------------|
| Railway hosting | ~$0.01/user/mo | $100/mo | $1,000/mo |
| MongoDB Atlas | ~$0.005/user/mo | $50/mo | $500/mo |
| OpenAI API | ~$0.50/user/mo | $5,000/mo | $50,000/mo |
| RevenueCat | 0.8% of MTR after $2.5K | ~$200/mo | ~$2,000/mo |
| Redis (Upstash) | ~$0.001/user/mo | $10/mo | $100/mo |
| Total variable | | **~$5,360/mo** | **~$53,600/mo** |

### Cost as % of Revenue (Base Case)
| Scale | Monthly Revenue | Monthly Cost | Margin |
|-------|----------------|-------------|--------|
| 1K paid users | $3,500 | $600 | 83% |
| 10K paid users | $35,000 | $5,400 | 85% |
| 50K paid users | $175,000 | $27,000 | 85% |
| 100K paid users | $350,000 | $54,000 | 85% |

**Margins stay 83-85% at all scales.** The biggest cost driver is OpenAI API. If needed, can reduce by:
- Caching common digest patterns
- Using GPT-4o-mini instead of GPT-4o
- Template-based fallback for non-paying users
- Local TTS instead of OpenAI TTS

---

## 9. Unfair Advantages

| Advantage | Why It's Hard to Copy |
|-----------|----------------------|
| **Dare Engine personality** | Requires a specific creative vision sustained across thousands of touchpoints. You can copy features but not voice. Duolingo's owl took years to become culturally embedded. |
| **Full-cycle coverage (Night → Wake → Morning → Day)** | Each piece requires different technical capabilities. Alarm needs native modules. Night mode needs screen-off detection. Morning needs AI. Day needs reminder scheduling. Building all four well is 4x the work. |
| **Solo dev cost structure** | $50-100/mo fixed costs vs competitors with $500K+/year in salaries. You can survive at revenue levels that would kill a funded startup. |
| **First mover in "behavior enforcement"** | If we define the category, we get to set the rules. Like Duolingo didn't invent language learning apps but defined gamified language learning. |
| **Compounding user data** | 90 days of someone's sleep/wake/routine data enables personalization no new entrant can match. Switching to a competitor means losing your Life Score history, streak, and patterns. |

---

*This canvas should be revisited quarterly or when a major strategic decision is made. It's the one-page view of the entire business.*
