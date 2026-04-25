# Complete Technical Architecture: Behavior Enforcement App

## 1. System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         CLIENT (React Native / Expo)                    │
│                                                                         │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌───────────────┐  │
│  │  Alarm Engine │ │  UI Layer    │ │  Local Store  │ │  Native       │  │
│  │  (Native     │ │  (React Nav  │ │  (MMKV +     │ │  Modules      │  │
│  │   Module)    │ │   + Screens) │ │   WatermelonDB│ │  (Widget,     │  │
│  │              │ │              │ │   offline)    │ │   Notif)      │  │
│  └──────┬───────┘ └──────┬───────┘ └──────┬───────┘ └──────┬────────┘  │
│         │                │                │                │            │
│         └────────────────┴────────────────┴────────────────┘            │
│                                    │                                    │
│                      ┌─────────────┴──────────────┐                     │
│                      │    API Client (Axios)       │                     │
│                      │    + Offline Queue          │                     │
│                      └─────────────┬──────────────┘                     │
│                                    │                                    │
│                      ┌─────────────┴──────────────┐                     │
│                      │    RevenueCat SDK           │                     │
│                      └─────────────┬──────────────┘                     │
└────────────────────────────────────┼────────────────────────────────────┘
                                     │ HTTPS
                                     ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                         API GATEWAY (Express)                           │
│                         Railway / Render                                │
│                                                                         │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌───────────────┐  │
│  │  Auth         │ │  User/       │ │  AI Proxy    │ │  Score        │  │
│  │  Middleware   │ │  Profile     │ │  Service     │ │  Engine       │  │
│  │  (Firebase    │ │  Routes     │ │  (OpenAI)    │ │  (Life Score) │  │
│  │   verify)    │ │              │ │              │ │               │  │
│  └──────────────┘ └──────────────┘ └──────────────┘ └───────────────┘  │
│                                                                         │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌───────────────┐  │
│  │  Streak      │ │  Gamification│ │  Notification │ │  Subscription │  │
│  │  Service     │ │  Service     │ │  Service      │ │  Webhook      │  │
│  │              │ │  (Points,    │ │  (FCM)        │ │  (RevenueCat) │  │
│  │              │ │   Levels)    │ │               │ │               │  │
│  └──────────────┘ └──────────────┘ └──────────────┘ └───────────────┘  │
│                                                                         │
│  ┌──────────────────────────────────────────────────────────────────┐   │
│  │  Background Job Runner (BullMQ + Redis)                          │   │
│  │  - Morning digest generation (cron per user timezone)            │   │
│  │  - Pattern analysis (nightly batch)                              │   │
│  │  - Scheduled push notifications                                  │   │
│  │  - Streak expiry checks (midnight per timezone)                  │   │
│  │  - Life Score recalculation                                      │   │
│  └──────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────┘
         │                    │                    │
         ▼                    ▼                    ▼
┌──────────────┐   ┌──────────────┐   ┌──────────────────┐
│  MongoDB     │   │  Redis       │   │  External APIs   │
│  Atlas       │   │  (Upstash)   │   │                  │
│  (Free M0)   │   │              │   │  - OpenAI        │
│              │   │  - Job Queue │   │  - Firebase Auth │
│  - Users     │   │  - Rate Limit│   │  - FCM           │
│  - Alarms    │   │  - Cache     │   │  - RevenueCat    │
│  - Scores    │   │  - Sessions  │   │  - OpenWeather   │
│  - Streaks   │   │              │   │  - PostHog       │
│  - Journals  │   │              │   │                  │
│  - Events    │   │              │   │                  │
└──────────────┘   └──────────────┘   └──────────────────┘
```

## 2. The Alarm Problem -- The Hardest Technical Challenge

This is where most React Native alarm apps fail. Here is the reality and the solution.

### Why Alarms Are Hard in React Native

**iOS:** Apple does not allow third-party apps to play audio over the lock screen indefinitely. There is no public API equivalent to the native Clock app's alarm. The only reliable mechanism is a **local notification with a critical alert entitlement** (requires Apple approval) combined with a **full-screen notification** that launches the app.

**Android:** More permissive. You can use a foreground service with `SCHEDULE_EXACT_ALARM` permission, `FULL_SCREEN_INTENT`, and `USE_FULL_SCREEN_INTENT` to display over the lock screen and play audio via a foreground service.

### Solution Architecture

```
ALARM SCHEDULING FLOW:

User sets alarm
    │
    ├─► Local Storage (MMKV): Store alarm config locally
    │   (time, missions, sound, repeat days)
    │
    ├─► Android: AlarmManager.setExactAndAllowWhileIdle()
    │   via react-native-alarm-notification or custom native module
    │   Triggers a foreground service that:
    │     1. Acquires WAKE_LOCK
    │     2. Plays audio via MediaPlayer (loops)
    │     3. Shows FULL_SCREEN_INTENT activity
    │     4. Cannot be dismissed without mission completion
    │     5. Survives app kill via BroadcastReceiver
    │
    └─► iOS: UNNotificationRequest with:
        1. Critical alert sound (up to 30 seconds, loops)
        2. Time-sensitive notification category
        3. Full-screen presentation when app launches from notif
        4. Audio continues via AVAudioSession in foreground
        5. App must get Critical Alerts Entitlement from Apple

MISSION COMPLETION FLOW:

Alarm fires → Full screen UI appears
    │
    ├─► User cannot:
    │   - Swipe away notification
    │   - Press back (Android: onBackPressed disabled)
    │   - Go to home screen (Android: TYPE_APPLICATION_OVERLAY or lock task mode)
    │   - Force quit (Android: restart via BroadcastReceiver + foreground service)
    │   - Lower volume (audio channel set to STREAM_ALARM)
    │
    ├─► User must complete mission:
    │   - Photo mission: camera opens, user takes photo, compared to reference
    │   - Barcode mission: scanner opens, user scans specific barcode
    │   - Shake mission: accelerometer counts shakes (threshold: 30-50 shakes)
    │
    └─► On completion:
        - Audio stops
        - Alarm event logged locally (timestamp, mission type, duration)
        - Event synced to server when online
        - Morning Mode activates
```

### Critical: iOS Critical Alerts Entitlement

You MUST apply to Apple for the Critical Alerts entitlement. Without it, your alarm will respect Do Not Disturb and the user's volume settings, making it useless. The application process:

1. Go to developer.apple.com > Account > Certificates, IDs & Profiles
2. Request the Critical Alerts entitlement for your App ID
3. Apple will ask you to justify it (alarm app for health/safety is a valid reason)
4. Approval takes 1-4 weeks
5. Once approved, add `com.apple.developer.usernotifications.critical-alerts` to your entitlements

### Native Module Strategy

You will need a **custom Expo config plugin** that wraps a native alarm module. The React Native ecosystem does not have a single reliable, maintained library that handles full-screen alarm over lock screen on both platforms. Your options:

**Option A (Recommended):** Use `react-native-alarm-notification` as a base and write a config plugin that patches its native code for Expo dev client compatibility. Supplement with `notifee` for notification management.

**Option B:** Write a thin native module in Swift (iOS) and Kotlin (Android) exposed via Expo Modules API. This gives you full control. The module only needs to:
- Schedule/cancel alarms via native APIs
- Play audio in a loop
- Show full-screen UI over lock screen
- Prevent dismissal until a JS callback confirms mission complete

**Option B is what you should do.** It is more work upfront (2-3 weeks for the native module) but eliminates dependency on poorly maintained community libraries.

## 3. Backend API Routes

```
BASE: /api/v1

# ─── AUTH ────────────────────────────────────────────────
POST   /auth/register              # Create account (Firebase UID → MongoDB user)
POST   /auth/login                 # Verify Firebase token, return app session
DELETE /auth/account               # Delete account + all data (GDPR/App Store req)

# ─── ONBOARDING ─────────────────────────────────────────
POST   /onboarding/complete        # Save wake time, sleep time, goals, timezone
GET    /onboarding/status          # Check if onboarding is done

# ─── USER PROFILE ───────────────────────────────────────
GET    /users/me                   # Full profile + settings
PATCH  /users/me                   # Update profile fields
PATCH  /users/me/settings          # Update app settings (notif prefs, dare intensity)
PATCH  /users/me/timezone          # Update timezone (critical for alarm/score timing)

# ─── ALARMS ─────────────────────────────────────────────
GET    /alarms                     # List all alarms for user
POST   /alarms                     # Create alarm (server validates, client schedules locally)
PATCH  /alarms/:id                 # Update alarm
DELETE /alarms/:id                 # Delete alarm
POST   /alarms/:id/missions        # Set mission config for alarm

# ─── ALARM EVENTS (client → server sync) ────────────────
POST   /events/alarm               # Log alarm ring event
POST   /events/alarm-dismiss       # Log alarm dismissed (mission completed)
POST   /events/alarm-snooze        # Log snooze event
POST   /events/alarm-missed        # Log missed alarm (no interaction)

# ─── NIGHT MODE ─────────────────────────────────────────
POST   /night/start                # User started night mode (bedtime countdown began)
POST   /night/goal                 # Set tomorrow's goal
POST   /night/journal              # Save night journal entry
POST   /night/bedtime-met          # Client confirms user stopped using phone by bedtime

# ─── MORNING MODE ───────────────────────────────────────
GET    /morning/digest             # Get today's AI morning digest (if not expired)
POST   /morning/digest/opened      # User opened digest (before expiry)
POST   /morning/journal            # Save morning journal entry
GET    /morning/goal               # Get last night's goal reminder

# ─── LIFE SCORE ─────────────────────────────────────────
GET    /score                      # Current Life Score + breakdown
GET    /score/history              # Score history (daily, weekly, monthly)
GET    /score/widget               # Lightweight endpoint for widget refresh
POST   /score/recalculate          # Force recalculation (admin/debug)

# ─── STREAKS ────────────────────────────────────────────
GET    /streaks                    # Current streak, longest streak, freeze count
POST   /streaks/freeze             # Use a streak freeze
GET    /streaks/calendar           # Calendar view of streak (heatmap data)

# ─── GAMIFICATION ───────────────────────────────────────
GET    /gamification/profile       # Points, level, rank
GET    /gamification/achievements  # All achievements + unlock status
GET    /gamification/leaderboard   # Weekly leaderboard (top 100)
POST   /gamification/claim/:id     # Claim an achievement reward

# ─── AI FEATURES ────────────────────────────────────────
POST   /ai/digest/generate         # Trigger digest generation (called by cron, not client)
POST   /ai/voice/session           # Start AI voice session, return WebSocket URL or token
POST   /ai/voice/end               # End voice session, save transcript
GET    /ai/reminders               # Get AI-generated reminders for today
POST   /ai/adaptive/analyze        # Trigger pattern analysis (called by cron)

# ─── NOTIFICATIONS ──────────────────────────────────────
POST   /notifications/token        # Register FCM device token
DELETE /notifications/token        # Unregister device token
GET    /notifications/preferences  # Get notification preferences
PATCH  /notifications/preferences  # Update notification preferences

# ─── SUBSCRIPTION (RevenueCat webhook) ──────────────────
POST   /webhooks/revenuecat        # RevenueCat server-to-server webhook
GET    /subscription/status        # Current subscription status (cached from RC)
GET    /subscription/offerings     # Available plans (proxied from RC)

# ─── ADMIN / DEBUG ──────────────────────────────────────
GET    /health                     # Server health check
GET    /debug/user/:id             # Admin: inspect user state (auth-gated)
```

## 4. MongoDB Schema Design

```javascript
// ─── USERS ──────────────────────────────────────────────
const UserSchema = {
  _id: ObjectId,
  firebaseUid: { type: String, unique: true, index: true },
  email: String,
  displayName: String,
  avatarUrl: String,
  timezone: { type: String, required: true },  // "Asia/Kolkata", "America/New_York"
  onboarding: {
    completed: Boolean,
    wakeTime: String,       // "06:30" (24h format)
    sleepTime: String,      // "23:00"
    goals: [String],        // ["exercise", "read", "meditate"]
    dareIntensity: { type: String, enum: ["mild", "medium", "savage"], default: "medium" }
  },
  subscription: {
    status: { type: String, enum: ["trial", "active", "expired", "cancelled"], default: "trial" },
    plan: { type: String, enum: ["monthly", "annual", null] },
    revenuecatId: String,
    trialStartedAt: Date,
    trialEndsAt: Date,
    currentPeriodEnd: Date
  },
  settings: {
    notificationsEnabled: Boolean,
    nightModeReminder: Boolean,
    morningDigestEnabled: { type: Boolean, default: true },
    digestExpiryMinutes: { type: Number, default: 30 },
    voiceAgentEnabled: { type: Boolean, default: false },
    hapticFeedback: { type: Boolean, default: true }
  },
  fcmTokens: [String],          // multiple devices
  createdAt: Date,
  updatedAt: Date,
  deletedAt: Date                // soft delete for GDPR
};

// ─── ALARMS ─────────────────────────────────────────────
const AlarmSchema = {
  _id: ObjectId,
  userId: { type: ObjectId, ref: "User", index: true },
  time: String,                  // "06:30" (24h)
  label: String,                 // Dare Engine generated or user custom
  enabled: { type: Boolean, default: true },
  repeatDays: [Number],          // [1,2,3,4,5] = Mon-Fri. Empty = one-time
  soundId: String,               // reference to bundled sound asset
  volume: { type: Number, min: 0, max: 100, default: 100 },
  vibrate: { type: Boolean, default: true },
  snoozeDuration: { type: Number, default: 5 },  // minutes
  maxSnoozes: { type: Number, default: 3 },
  missions: [{
    type: { type: String, enum: ["photo", "barcode", "shake"] },
    config: {
      // photo: { referenceImageUri: String }
      // barcode: { barcodeValue: String, barcodeLabel: String }
      // shake: { count: Number }  default 30
    },
    order: Number
  }],
  createdAt: Date,
  updatedAt: Date
};

// ─── ALARM EVENTS ───────────────────────────────────────
// High-write collection. TTL index to auto-delete after 90 days.
const AlarmEventSchema = {
  _id: ObjectId,
  userId: { type: ObjectId, index: true },
  alarmId: ObjectId,
  date: { type: String, index: true },          // "2026-04-07" (user's local date)
  type: { type: String, enum: ["ring", "snooze", "dismiss", "missed"] },
  missionType: String,                           // which mission was completed
  missionDurationMs: Number,                     // how long to complete mission
  snoozeCount: Number,
  ringToActionMs: Number,                        // time from ring to first interaction
  ringToDismissMs: Number,                       // time from ring to final dismiss
  timestamp: { type: Date, default: Date.now },
  syncedFromOffline: { type: Boolean, default: false }
};
// Index: { userId: 1, date: -1 }
// TTL: { timestamp: 1 }, expireAfterSeconds: 7776000  (90 days)

// ─── NIGHT MODE SESSIONS ────────────────────────────────
const NightSessionSchema = {
  _id: ObjectId,
  userId: { type: ObjectId, index: true },
  date: String,                  // "2026-04-07" (the night OF, not the morning after)
  startedAt: Date,               // when user opened night mode
  targetBedtime: String,         // "23:00"
  actualBedtime: Date,           // when phone stopped being used
  bedtimeMet: Boolean,           // was bedtime met within tolerance (15 min)?
  bedtimeDeviationMinutes: Number, // positive = late, negative = early
  goal: {
    text: String,
    setAt: Date
  },
  journal: {
    prompt: String,
    response: String,
    answeredAt: Date
  },
  createdAt: Date
};
// Index: { userId: 1, date: -1 }

// ─── MORNING MODE SESSIONS ─────────────────────────────
const MorningSessionSchema = {
  _id: ObjectId,
  userId: { type: ObjectId, index: true },
  date: String,                  // "2026-04-07"
  alarmDismissedAt: Date,
  digest: {
    generatedAt: Date,
    expiresAt: Date,
    openedAt: Date,              // null if expired without opening
    expired: Boolean,
    content: {
      greeting: String,          // "Day 14. The dare continues."
      weather: String,           // "12°C, cloudy. No excuses."
      goalReminder: String,      // from last night's goal
      dareOfTheDay: String,      // AI-generated daily challenge
      insightOrTip: String       // personalized based on patterns
    }
  },
  journal: {
    prompt: String,
    response: String,
    answeredAt: Date
  },
  completedSteps: [String],     // ["alarm", "digest", "journal"]
  completionScore: Number,       // 0-100 for this morning
  createdAt: Date
};
// Index: { userId: 1, date: -1 }

// ─── LIFE SCORE ─────────────────────────────────────────
const LifeScoreSchema = {
  _id: ObjectId,
  userId: { type: ObjectId, index: true },
  date: String,                  // "2026-04-07"
  score: { type: Number, min: 0, max: 100 },
  breakdown: {
    sleepDiscipline: Number,     // 0-40 points
    // Factors: bedtime adherence, consistency, deviation from target
    morningCompletion: Number,   // 0-40 points
    // Factors: alarm response time, mission completion, digest opened, journal done
    streakBonus: Number          // 0-20 points
    // Factors: current streak length, streak consistency
  },
  factors: {
    bedtimeAdherence: Number,    // 0-1 (1 = perfect)
    wakeTimeAdherence: Number,   // 0-1
    missionSpeed: Number,        // 0-1 (faster = higher)
    digestOpened: Boolean,
    journalCompleted: Boolean,
    goalSet: Boolean,
    streakLength: Number
  },
  calculatedAt: Date
};
// Index: { userId: 1, date: -1 }, unique
// Index: { userId: 1, calculatedAt: -1 }

// ─── STREAKS ────────────────────────────────────────────
const StreakSchema = {
  _id: ObjectId,
  userId: { type: ObjectId, unique: true },
  currentStreak: { type: Number, default: 0 },
  longestStreak: { type: Number, default: 0 },
  lastActiveDate: String,        // "2026-04-07"
  freezesAvailable: { type: Number, default: 0 },
  freezesUsedTotal: { type: Number, default: 0 },
  history: [{                    // last 90 days for calendar heatmap
    date: String,
    status: { type: String, enum: ["completed", "frozen", "missed"] }
  }],
  updatedAt: Date
};

// ─── GAMIFICATION ───────────────────────────────────────
const GamificationProfileSchema = {
  _id: ObjectId,
  userId: { type: ObjectId, unique: true },
  points: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  rank: String,                  // "Rookie", "Early Bird", "Dare Master", etc.
  achievements: [{
    achievementId: String,       // "first_alarm", "7_day_streak", "speed_demon"
    unlockedAt: Date,
    claimed: Boolean
  }],
  weeklyPoints: { type: Number, default: 0 },
  weekStartDate: String,
  updatedAt: Date
};

// ─── ACHIEVEMENT DEFINITIONS (seeded, read-only) ────────
const AchievementDefinitionSchema = {
  _id: String,                   // "first_alarm", "7_day_streak"
  name: String,                  // "First Dare"
  description: String,           // "Complete your first alarm mission"
  dareDescription: String,       // "So you CAN wake up. Noted."
  icon: String,                  // asset reference
  pointsReward: Number,
  condition: {
    type: String,                // "streak", "total_missions", "score_threshold", "speed"
    value: Number
  },
  tier: { type: String, enum: ["bronze", "silver", "gold", "legendary"] }
};

// ─── AI VOICE SESSIONS ──────────────────────────────────
const VoiceSessionSchema = {
  _id: ObjectId,
  userId: { type: ObjectId, index: true },
  date: String,
  startedAt: Date,
  endedAt: Date,
  durationSeconds: Number,
  transcript: [{
    role: { type: String, enum: ["user", "assistant"] },
    text: String,
    timestamp: Date
  }],
  tokensUsed: { input: Number, output: Number },
  cost: Number                   // track OpenAI cost per session
};

// ─── ADAPTIVE INTELLIGENCE ──────────────────────────────
const UserPatternsSchema = {
  _id: ObjectId,
  userId: { type: ObjectId, unique: true },
  patterns: {
    avgBedtimeDeviation: Number,     // minutes, rolling 14-day
    avgWakeResponseTime: Number,     // seconds from ring to dismiss
    avgMissionDuration: Number,      // seconds
    mostFailedDay: String,           // "Sunday"
    bestDay: String,                 // "Tuesday"
    snoozeRate: Number,              // 0-1
    digestOpenRate: Number,          // 0-1
    journalCompletionRate: Number,   // 0-1
    scoreTrajectory: String,         // "improving", "declining", "stable"
    riskOfChurn: Number              // 0-1 (ML prediction, future)
  },
  recommendations: [{
    type: String,                    // "earlier_bedtime", "harder_mission", "easier_mission"
    reason: String,
    appliedAt: Date,
    dismissed: Boolean
  }],
  lastAnalyzedAt: Date,
  updatedAt: Date
};
```

### MongoDB Indexes Summary

```
users:          { firebaseUid: 1 } unique
alarms:         { userId: 1 }
alarm_events:   { userId: 1, date: -1 }, TTL on timestamp (90 days)
night_sessions: { userId: 1, date: -1 }
morning_sessions: { userId: 1, date: -1 }
life_scores:    { userId: 1, date: -1 } unique compound
streaks:        { userId: 1 } unique
gamification:   { userId: 1 } unique, { weeklyPoints: -1 } (leaderboard)
voice_sessions: { userId: 1, date: -1 }
user_patterns:  { userId: 1 } unique
```

## 5. Expo Project Folder Structure

```
app/
├── app.json
├── eas.json                          # EAS Build config
├── expo-plugins/
│   └── withAlarmModule.js            # Config plugin for native alarm module
│   └── withWidgetExtension.js        # Config plugin for iOS widget / Android widget
│   └── withCriticalAlerts.js         # Config plugin for iOS critical alerts entitlement
├── modules/
│   └── alarm-native/                 # Expo native module (Swift + Kotlin)
│       ├── ios/
│       │   ├── AlarmModule.swift
│       │   ├── AlarmScheduler.swift
│       │   ├── AlarmAudioPlayer.swift
│       │   └── AlarmModule.podspec
│       ├── android/
│       │   ├── src/main/java/.../
│       │   │   ├── AlarmModule.kt
│       │   │   ├── AlarmReceiver.kt        # BroadcastReceiver
│       │   │   ├── AlarmService.kt         # Foreground Service
│       │   │   └── AlarmActivity.kt        # Full-screen alarm UI (native)
│       │   └── build.gradle
│       └── src/
│           └── index.ts              # JS interface to native module
├── src/
│   ├── app/                          # Expo Router file-based routing
│   │   ├── _layout.tsx               # Root layout (auth gate, providers)
│   │   ├── index.tsx                 # Redirect: onboarding or home
│   │   ├── (auth)/
│   │   │   ├── login.tsx
│   │   │   └── register.tsx
│   │   ├── (onboarding)/
│   │   │   ├── _layout.tsx
│   │   │   ├── welcome.tsx           # Screen 1: Dare Engine intro
│   │   │   ├── schedule.tsx          # Screen 2: Wake time + sleep time
│   │   │   └── mission.tsx           # Screen 3: Pick first mission + paywall
│   │   ├── (tabs)/
│   │   │   ├── _layout.tsx           # Tab navigator
│   │   │   ├── home.tsx              # Life Score, streak, today's status
│   │   │   ├── alarms.tsx            # Alarm list + create/edit
│   │   │   ├── stats.tsx             # Score history, achievements, calendar
│   │   │   └── profile.tsx           # Settings, subscription, account
│   │   ├── (modes)/
│   │   │   ├── night.tsx             # Night mode full screen
│   │   │   ├── alarm-ring.tsx        # Full-screen alarm (mission UI)
│   │   │   └── morning.tsx           # Morning mode (digest, journal, goal)
│   │   ├── (missions)/
│   │   │   ├── photo.tsx             # Camera mission
│   │   │   ├── barcode.tsx           # Barcode scan mission
│   │   │   └── shake.tsx             # Shake mission
│   │   ├── voice-agent.tsx           # AI voice conversation screen
│   │   ├── leaderboard.tsx
│   │   ├── achievements.tsx
│   │   └── paywall.tsx               # Subscription paywall screen
│   │
│   ├── components/
│   │   ├── ui/                       # Design system primitives
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Text.tsx              # Themed text with Dare Engine variants
│   │   │   ├── ProgressRing.tsx      # Circular score display
│   │   │   ├── CountdownTimer.tsx
│   │   │   └── StreakBadge.tsx
│   │   ├── alarm/
│   │   │   ├── AlarmCard.tsx
│   │   │   ├── MissionSelector.tsx
│   │   │   ├── TimePickerSheet.tsx
│   │   │   └── RepeatDayPicker.tsx
│   │   ├── score/
│   │   │   ├── LifeScoreRing.tsx     # The big score circle
│   │   │   ├── ScoreBreakdown.tsx
│   │   │   └── ScoreHistory.tsx
│   │   ├── night/
│   │   │   ├── BedtimeCountdown.tsx
│   │   │   ├── GoalInput.tsx
│   │   │   └── NightJournal.tsx
│   │   ├── morning/
│   │   │   ├── DigestCard.tsx
│   │   │   ├── DigestTimer.tsx       # Countdown to expiry
│   │   │   ├── MorningJournal.tsx
│   │   │   └── GoalReminder.tsx
│   │   ├── gamification/
│   │   │   ├── PointsAnimation.tsx
│   │   │   ├── LevelUpModal.tsx
│   │   │   ├── AchievementCard.tsx
│   │   │   └── LeaderboardRow.tsx
│   │   └── dare/
│   │       ├── DareMessage.tsx       # Animated personality text
│   │       └── DareNotification.tsx
│   │
│   ├── hooks/
│   │   ├── useAlarm.ts               # Alarm CRUD + scheduling
│   │   ├── useAuth.ts                # Firebase auth state
│   │   ├── useLifeScore.ts           # Score fetching + caching
│   │   ├── useStreak.ts
│   │   ├── useSubscription.ts        # RevenueCat hooks
│   │   ├── useNightMode.ts
│   │   ├── useMorningMode.ts
│   │   ├── useOfflineSync.ts         # Queue + sync events when back online
│   │   └── useDareEngine.ts          # Get contextual dare copy
│   │
│   ├── services/
│   │   ├── api.ts                    # Axios instance, interceptors, auth header
│   │   ├── alarmService.ts           # Alarm API calls
│   │   ├── scoreService.ts
│   │   ├── streakService.ts
│   │   ├── aiService.ts              # Digest, voice, reminders
│   │   ├── notificationService.ts    # FCM registration + handling
│   │   ├── analyticsService.ts       # PostHog wrapper
│   │   └── offlineQueue.ts           # MMKV-backed queue for offline events
│   │
│   ├── stores/                       # Zustand stores
│   │   ├── authStore.ts
│   │   ├── alarmStore.ts
│   │   ├── scoreStore.ts
│   │   ├── streakStore.ts
│   │   ├── modeStore.ts              # Current mode: night/morning/day/idle
│   │   └── subscriptionStore.ts
│   │
│   ├── lib/
│   │   ├── dare-engine/
│   │   │   ├── copy.ts               # All dare copy strings (200+ variants)
│   │   │   ├── contextual.ts         # Select copy based on context (streak, score, time)
│   │   │   └── notifications.ts      # Notification copy variants
│   │   ├── score/
│   │   │   └── calculator.ts         # Client-side score preview (server is source of truth)
│   │   ├── constants.ts
│   │   ├── types.ts                  # All TypeScript types
│   │   └── utils.ts
│   │
│   ├── theme/
│   │   ├── colors.ts                 # Dark-first color palette
│   │   ├── typography.ts
│   │   ├── spacing.ts
│   │   └── index.ts
│   │
│   └── assets/
│       ├── sounds/                   # Bundled alarm sounds (MP3, <1MB each)
│       │   ├── dare-default.mp3
│       │   ├── dare-intense.mp3
│       │   └── dare-gentle.mp3
│       ├── images/
│       ├── animations/               # Lottie files for score, streak, level up
│       └── fonts/
│
├── widget/                           # Native widget code
│   ├── ios/                          # SwiftUI WidgetKit extension
│   │   ├── LifeScoreWidget.swift
│   │   └── WidgetBundle.swift
│   └── android/                      # Glance / AppWidget
│       ├── LifeScoreWidget.kt
│       └── WidgetReceiver.kt
│
├── __tests__/
│   ├── components/
│   ├── hooks/
│   └── services/
│
├── babel.config.js
├── tsconfig.json
├── package.json
└── .env.example
```

## 6. Node.js Backend Folder Structure

```
server/
├── package.json
├── tsconfig.json
├── .env.example
├── Dockerfile
├── docker-compose.yml               # Local dev: MongoDB + Redis
│
├── src/
│   ├── index.ts                      # Express app entry, server.listen
│   ├── app.ts                        # Express app setup, middleware, routes
│   │
│   ├── config/
│   │   ├── env.ts                    # Environment variable validation (zod)
│   │   ├── db.ts                     # Mongoose connection
│   │   ├── redis.ts                  # Redis / Upstash connection
│   │   ├── firebase.ts              # Firebase Admin SDK init
│   │   └── openai.ts                # OpenAI client init
│   │
│   ├── middleware/
│   │   ├── auth.ts                   # Verify Firebase ID token → req.user
│   │   ├── subscription.ts           # Check active subscription for premium routes
│   │   ├── rateLimiter.ts            # Redis-backed rate limiting
│   │   ├── errorHandler.ts           # Global error handler
│   │   └── requestLogger.ts          # Request logging
│   │
│   ├── routes/
│   │   ├── index.ts                  # Route aggregator
│   │   ├── auth.routes.ts
│   │   ├── user.routes.ts
│   │   ├── alarm.routes.ts
│   │   ├── event.routes.ts           # Alarm events ingestion
│   │   ├── night.routes.ts
│   │   ├── morning.routes.ts
│   │   ├── score.routes.ts
│   │   ├── streak.routes.ts
│   │   ├── gamification.routes.ts
│   │   ├── ai.routes.ts
│   │   ├── notification.routes.ts
│   │   ├── subscription.routes.ts    # RevenueCat webhook
│   │   └── health.routes.ts
│   │
│   ├── controllers/
│   │   ├── auth.controller.ts
│   │   ├── user.controller.ts
│   │   ├── alarm.controller.ts
│   │   ├── event.controller.ts
│   │   ├── night.controller.ts
│   │   ├── morning.controller.ts
│   │   ├── score.controller.ts
│   │   ├── streak.controller.ts
│   │   ├── gamification.controller.ts
│   │   ├── ai.controller.ts
│   │   ├── notification.controller.ts
│   │   └── subscription.controller.ts
│   │
│   ├── services/
│   │   ├── score.service.ts          # Life Score calculation logic
│   │   ├── streak.service.ts         # Streak management + freeze logic
│   │   ├── gamification.service.ts   # Points, levels, achievement checks
│   │   ├── digest.service.ts         # AI morning digest generation
│   │   ├── voice.service.ts          # AI voice session management
│   │   ├── adaptive.service.ts       # Pattern analysis
│   │   ├── dare.service.ts           # Dare Engine copy selection (server-side for notifs)
│   │   ├── notification.service.ts   # FCM send logic
│   │   └── weather.service.ts        # OpenWeatherMap API
│   │
│   ├── models/
│   │   ├── User.ts
│   │   ├── Alarm.ts
│   │   ├── AlarmEvent.ts
│   │   ├── NightSession.ts
│   │   ├── MorningSession.ts
│   │   ├── LifeScore.ts
│   │   ├── Streak.ts
│   │   ├── GamificationProfile.ts
│   │   ├── AchievementDefinition.ts
│   │   ├── VoiceSession.ts
│   │   └── UserPatterns.ts
│   │
│   ├── jobs/                         # BullMQ job processors
│   │   ├── queue.ts                  # Queue definitions
│   │   ├── worker.ts                 # Worker startup
│   │   ├── digestGeneration.job.ts   # Generate morning digest per user
│   │   ├── streakCheck.job.ts        # Midnight streak expiry per timezone
│   │   ├── scoreCalculation.job.ts   # Recalculate daily score
│   │   ├── patternAnalysis.job.ts    # Nightly pattern analysis
│   │   ├── scheduledNotification.job.ts  # Send scheduled push notifs
│   │   └── cleanupOldData.job.ts     # TTL enforcement backup
│   │
│   ├── cron/
│   │   └── scheduler.ts             # Cron definitions using node-cron or BullMQ repeatable
│   │     # Every minute: check for digest generation windows
│   │     # Midnight per TZ: streak check + score calculation
│   │     # 2am per TZ: pattern analysis
│   │     # Every 15 min: scheduled notifications
│   │
│   ├── utils/
│   │   ├── response.ts              # Standardized API response format
│   │   ├── errors.ts                # Custom error classes
│   │   ├── validators.ts            # Zod schemas for request validation
│   │   ├── timezone.ts              # Timezone utilities
│   │   └── scoreFormula.ts          # Life Score formula (isolated for testing)
│   │
│   └── types/
│       ├── express.d.ts             # Express request augmentation (req.user)
│       └── index.ts                 # Shared types
│
├── seeds/
│   └── achievements.ts              # Seed achievement definitions
│
└── __tests__/
    ├── services/
    │   ├── score.service.test.ts
    │   └── streak.service.test.ts
    ├── controllers/
    └── integration/
```

## 7. Every NPM Package and Expo Module Needed

### Expo / React Native App

```
# ─── CORE ────────────────────────────────────────────────
expo                              # ~51.x (Expo SDK)
expo-dev-client                   # Dev client for custom native code
expo-router                       # File-based routing
react-native                      # Core RN
react-native-reanimated           # Animations (required by many libs)
react-native-gesture-handler      # Gesture handling
react-native-screens              # Native screen optimization
react-native-safe-area-context    # Safe area handling

# ─── NATIVE ALARM (Custom Module) ───────────────────────
expo-modules-core                 # For building the custom alarm native module

# ─── CAMERA & SENSORS (Missions) ────────────────────────
expo-camera                       # Photo mission
expo-barcode-scanner              # OR use expo-camera barcode scanning
expo-sensors                      # Accelerometer for shake mission
expo-image-manipulator            # Resize/compress reference photos

# ─── NOTIFICATIONS ──────────────────────────────────────
@notifee/react-native             # Advanced notifications (critical alerts, channels)
@react-native-firebase/app        # Firebase core
@react-native-firebase/auth       # Firebase Auth
@react-native-firebase/messaging  # FCM push notifications

# ─── STORAGE ─────────────────────────────────────────────
react-native-mmkv                 # Fastest local KV store (alarm configs, offline queue)
@nozbe/watermelondb               # Local SQLite DB for offline event logging
@nozbe/with-observables           # WatermelonDB React bindings

# ─── STATE MANAGEMENT ───────────────────────────────────
zustand                           # Lightweight state management
zustand/middleware                 # Persist middleware (with MMKV)

# ─── NETWORKING ──────────────────────────────────────────
axios                             # HTTP client
axios-retry                       # Auto-retry for flaky connections

# ─── PAYMENTS ────────────────────────────────────────────
react-native-purchases            # RevenueCat SDK
react-native-purchases-ui         # RevenueCat paywall UI (optional, can build custom)

# ─── WIDGET ──────────────────────────────────────────────
react-native-widget-extension     # iOS WidgetKit bridge (or custom config plugin)
# Android widget: custom native code via config plugin

# ─── UI ──────────────────────────────────────────────────
react-native-svg                  # SVG rendering (score ring, charts)
lottie-react-native               # Lottie animations
react-native-linear-gradient      # expo-linear-gradient
expo-haptics                      # Haptic feedback
expo-blur                         # Blur effects
react-native-bottom-sheet         # Bottom sheets (alarm editor, mission picker)
@shopify/flash-list               # Performant flat list (leaderboard, achievements)
react-native-chart-kit            # Score history charts
# OR victory-native for charts

# ─── AUDIO ───────────────────────────────────────────────
expo-av                           # Audio playback (alarm sounds in JS layer)
# Note: actual alarm audio is handled by native module for reliability

# ─── AI VOICE ────────────────────────────────────────────
expo-speech                       # TTS fallback
react-native-live-audio-stream    # For streaming audio to Whisper API
# OR use WebSocket-based streaming to server

# ─── ANALYTICS ───────────────────────────────────────────
posthog-react-native              # PostHog analytics

# ─── UTILITIES ───────────────────────────────────────────
date-fns                          # Date manipulation
date-fns-tz                       # Timezone handling
expo-linking                      # Deep linking
expo-splash-screen                # Splash screen control
expo-font                         # Custom fonts
expo-constants                    # App constants
expo-device                       # Device info
expo-application                  # App version info
expo-updates                      # OTA updates (for non-native code changes)
expo-background-fetch             # Background tasks (widget data refresh)
expo-task-manager                 # Background task management
expo-location                     # If needed for weather by location (optional)
expo-secure-store                 # Secure credential storage
expo-crypto                       # Crypto utilities
zod                               # Runtime validation
```

### Node.js Backend

```
# ─── CORE ────────────────────────────────────────────────
express                           # Web framework
cors                              # CORS middleware
helmet                            # Security headers
compression                       # Response compression
morgan                            # HTTP request logging
dotenv                            # Environment variables

# ─── DATABASE ────────────────────────────────────────────
mongoose                          # MongoDB ODM
ioredis                           # Redis client (Upstash compatible)
# OR @upstash/redis for serverless Redis

# ─── AUTH ─────────────────────────────────────────────────
firebase-admin                    # Firebase Admin SDK (token verification)

# ─── JOBS & QUEUES ──────────────────────────────────────
bullmq                            # Job queue (Redis-backed)
node-cron                         # Cron scheduling (backup to BullMQ repeatable)

# ─── AI ──────────────────────────────────────────────────
openai                            # OpenAI SDK (GPT for digest, Whisper, TTS)

# ─── NOTIFICATIONS ──────────────────────────────────────
# (uses firebase-admin for FCM)

# ─── PAYMENTS ────────────────────────────────────────────
# RevenueCat: no server SDK needed, just webhook parsing
# Signature verification done manually

# ─── VALIDATION ──────────────────────────────────────────
zod                               # Request body/params validation
express-zod-api                   # Optional: zod-based route definitions
# OR express-validator

# ─── UTILITIES ───────────────────────────────────────────
date-fns                          # Date manipulation
date-fns-tz                       # Timezone math
uuid                              # Unique IDs
lodash                            # Utility functions (pick what you need)
pino                              # Structured logging (fast)
pino-pretty                       # Dev-friendly log formatting
http-errors                       # HTTP error creation

# ─── WEATHER ─────────────────────────────────────────────
axios                             # For OpenWeatherMap API calls

# ─── DEV ──────────────────────────────────────────────────
typescript                        # TypeScript
ts-node                           # TS execution
tsx                               # Fast TS execution (dev)
nodemon                           # Auto-restart on changes
@types/express
@types/cors
@types/compression
@types/morgan
@types/node
jest                              # Testing
ts-jest                           # Jest TS support
@types/jest
supertest                         # HTTP testing
@types/supertest
eslint                            # Linting
prettier                          # Formatting
```

## 8. Native Modules Requiring Config Plugins

These cannot run in Expo Go. They require the Expo dev client with custom config plugins.

| Module | Why Config Plugin | Plugin Details |
|--------|-------------------|----------------|
| **Custom Alarm Module** | Requires `SCHEDULE_EXACT_ALARM`, `USE_FULL_SCREEN_INTENT`, `WAKE_LOCK`, `FOREGROUND_SERVICE` permissions on Android. Requires `com.apple.developer.usernotifications.critical-alerts` entitlement on iOS. | Custom plugin in `expo-plugins/withAlarmModule.js`. Modifies `AndroidManifest.xml` (permissions, services, receivers) and `Info.plist` + entitlements (iOS). |
| **@notifee/react-native** | Native notification channels, critical alerts, foreground notification service. | Has its own config plugin. May need manual adjustments for critical alerts. |
| **@react-native-firebase/\*** | Google services config files (`google-services.json`, `GoogleService-Info.plist`). | `@react-native-firebase/app` provides config plugin. Add `google-services.json` and `GoogleService-Info.plist` to project root. |
| **react-native-purchases** | Native StoreKit (iOS) and Google Billing (Android) integration. | RevenueCat provides Expo config plugin. Requires `SKPaymentQueue` and billing permissions. |
| **Widget Extension** | iOS: Requires a separate WidgetKit target (SwiftUI). Android: Requires `AppWidgetProvider` in manifest. | Custom plugin `expo-plugins/withWidgetExtension.js`. This is nontrivial -- the plugin must create an iOS app extension target and add Android widget XML + provider. |
| **react-native-mmkv** | C++ native module (JSI). | Has built-in Expo support. Works with dev client out of box. |
| **@nozbe/watermelondb** | Native SQLite (JSI). | Requires config plugin. Community plugin available. |
| **expo-camera** | Camera hardware access. | Built-in Expo config plugin. Adds `NSCameraUsageDescription`. |
| **expo-sensors** | Accelerometer hardware access. | Built-in Expo config plugin. Adds motion usage description on iOS. |
| **react-native-live-audio-stream** | Microphone access for voice agent. | Custom config plugin. Adds `NSMicrophoneUsageDescription` on iOS, `RECORD_AUDIO` on Android. |

### Android Manifest Permissions (added by config plugins)

```xml
<uses-permission android:name="android.permission.SCHEDULE_EXACT_ALARM" />
<uses-permission android:name="android.permission.USE_EXACT_ALARM" />
<uses-permission android:name="android.permission.USE_FULL_SCREEN_INTENT" />
<uses-permission android:name="android.permission.WAKE_LOCK" />
<uses-permission android:name="android.permission.FOREGROUND_SERVICE" />
<uses-permission android:name="android.permission.FOREGROUND_SERVICE_MEDIA_PLAYBACK" />
<uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />
<uses-permission android:name="android.permission.VIBRATE" />
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.RECORD_AUDIO" />
<uses-permission android:name="android.permission.POST_NOTIFICATIONS" />
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="com.android.vending.BILLING" />
```

### iOS Entitlements

```xml
<key>com.apple.developer.usernotifications.critical-alerts</key>
<true/>
<key>aps-environment</key>
<string>production</string>
```

## 9. Third-Party Services and Free Tier Limits

| Service | Purpose | Free Tier | When You'll Outgrow It | Estimated Cost After |
|---------|---------|-----------|----------------------|---------------------|
| **Firebase Auth** | User authentication | 50K MAU free | ~50K users | $0.0055/MAU after 50K |
| **Firebase Cloud Messaging** | Push notifications | Unlimited | Never (FCM is always free) | $0 |
| **MongoDB Atlas** | Primary database | M0: 512MB storage, shared cluster | ~10K-20K users | M10: $57/mo |
| **Upstash Redis** | Job queues, caching, rate limiting | 10K commands/day | Almost immediately in production | Pay-as-you-go: $0.2/100K commands |
| **OpenAI API** | Morning digest (GPT-4o-mini), voice (Whisper + TTS) | None (pay-per-use) | N/A | GPT-4o-mini: ~$0.15/1M input tokens. Whisper: $0.006/min. TTS: $0.015/1K chars. Estimate: $0.01-0.03/user/day for digest, $0.10-0.30/voice session |
| **RevenueCat** | Subscription management | $0 up to $2.5K MTR | ~$2.5K monthly revenue | 0.8% of MTR after $2.5K |
| **Railway** | Backend hosting | $5 free credit/mo, 512MB RAM | Immediately for production workloads | Starter: ~$5-20/mo for small Node + worker |
| **Render** | Alternative backend hosting | 750 hours free/mo (web service spins down) | Immediately (spin-down kills cron jobs) | Starter: $7/mo per service |
| **PostHog** | Analytics | 1M events/mo free | ~10K-20K active users | $0.00031/event after 1M |
| **OpenWeatherMap** | Weather for digest | 1,000 calls/day free | ~1K daily active users | $0 up to 1K/day; then starts at free with sign-up for higher limits |
| **Sentry** (recommended) | Error tracking | 5K errors/mo free | When you have real users | $26/mo |

### Hosting Recommendation: Railway over Render

Render's free tier spins down after 15 minutes of inactivity. This kills your cron jobs and BullMQ workers. Railway keeps services running. For a solo dev on a budget:

- **Railway Starter**: $5/month credit included
  - Web service (Express API): ~$5-10/mo
  - Worker service (BullMQ): ~$5-10/mo
  - Total: ~$10-20/mo for both

### Monthly Cost Estimate at Various Scales

| Scale | Users | Monthly Cost |
|-------|-------|-------------|
| **Launch** | 0-1K | ~$15-25/mo (Railway + Atlas free + Redis free + OpenAI pay-per-use) |
| **Traction** | 1K-10K | ~$50-100/mo |
| **Growth** | 10K-50K | ~$150-400/mo |
| **Scale** | 50K+ | ~$500+/mo (but revenue should far exceed this) |

## 10. Build and Deployment Strategy

### Mobile App (Expo EAS)

```
Development:
  - expo prebuild → generates native projects
  - eas build --profile development → dev client APK/IPA
  - Local dev: expo start --dev-client
  - Testing alarm: MUST test on physical device (simulators don't handle
    alarm audio, lock screen, or background services correctly)

Staging:
  - eas build --profile preview → internal distribution build
  - TestFlight (iOS) + internal track (Android)
  - eas update → OTA updates for JS-only changes

Production:
  - eas build --profile production → store-ready builds
  - eas submit → submit to App Store + Play Store
  - OTA updates via expo-updates for non-native changes
  - Native changes require full rebuild + store review

EAS Build Profiles (eas.json):
  development: { developmentClient: true, distribution: "internal" }
  preview: { distribution: "internal" }
  production: { distribution: "store", autoIncrement: true }
```

### Backend (Railway)

```
Deployment:
  - Git push to main → Railway auto-deploys
  - Dockerfile-based deployment
  - Two Railway services:
    1. "api" — Express server (PORT env, health check on /health)
    2. "worker" — BullMQ worker process (same codebase, different entrypoint)
  - Railway provides free PostgreSQL and Redis add-ons
    (but use MongoDB Atlas and Upstash Redis externally for better free tiers)

CI/CD:
  - GitHub Actions for testing on PR
  - Railway auto-deploy on merge to main
  - No complex pipeline needed for solo dev

Environment Variables (Railway):
  - MONGODB_URI
  - REDIS_URL (Upstash)
  - FIREBASE_SERVICE_ACCOUNT (JSON)
  - OPENAI_API_KEY
  - REVENUECAT_WEBHOOK_SECRET
  - OPENWEATHER_API_KEY
  - POSTHOG_API_KEY
  - NODE_ENV=production
```

### Widget Update Strategy

The widget needs to show current Life Score and streak without the user opening the app.

**iOS:** WidgetKit uses a `TimelineProvider` that returns entries at scheduled intervals. Use `expo-background-fetch` to periodically update shared `UserDefaults` (via App Groups) which the widget reads. The widget timeline reloads every 15-30 minutes.

**Android:** Use `AppWidgetProvider` with `WorkManager` for periodic updates. The widget reads from shared preferences or makes a lightweight API call (`/score/widget`) on update.

Both platforms: The widget data should also update immediately when the app is opened and a score changes, via `WidgetCenter.shared.reloadAllTimelines()` (iOS) or `AppWidgetManager.notifyAppWidgetViewDataChanged()` (Android).

## 11. Life Score Formula

```
LIFE SCORE (0-100) = Sleep Discipline (0-40) + Morning Completion (0-40) + Streak Bonus (0-20)

Sleep Discipline (0-40):
  bedtimeAdherence = max(0, 1 - abs(actualBedtime - targetBedtime) / 60)
    // 1.0 if on time, 0.0 if 60+ minutes off
  consistencyBonus = stddev of last 7 days bedtime < 30min ? 1.0 : 0.5
  sleepScore = bedtimeAdherence * 30 + consistencyBonus * 10

Morning Completion (0-40):
  alarmDismissed = completed mission ? 15 : 0
  responseSpeed = max(0, 1 - ringToActionSeconds / 300) * 10
    // Full points if < 10s, zero if > 5min
  digestOpened = opened before expiry ? 8 : 0
  journalDone = completed morning journal ? 4 : 0
  goalSet = had a goal from night mode ? 3 : 0
  morningScore = alarmDismissed + responseSpeed + digestOpened + journalDone + goalSet

Streak Bonus (0-20):
  if streak >= 30: 20
  if streak >= 14: 15
  if streak >= 7: 10
  if streak >= 3: 5
  else: 0

Rolling average: Score displayed is a 7-day weighted average
  (today = 30%, yesterday = 20%, day before = 15%, etc.)
  This prevents wild score swings from one bad day.
```

## 12. Realistic Development Timeline

This is for a solo developer working nights and weekends (estimated 15-20 hours/week).

| Phase | Duration | What Gets Built |
|-------|----------|-----------------|
| **1. Foundation** | Weeks 1-3 | Expo project setup, dev client builds working, Firebase Auth integration, Express backend skeleton, MongoDB models, basic navigation/routing, theme system. **Test that dev client builds and runs on both physical iOS and Android devices.** |
| **2. Native Alarm Module** | Weeks 4-7 | This is the hardest phase. Build the custom Expo native module for alarm scheduling, full-screen display, audio playback, and anti-dismiss. iOS and Android have completely different APIs. Test obsessively on physical devices. Test: app killed, phone rebooted, Do Not Disturb on, silent mode on, low battery mode. Apply for iOS Critical Alerts entitlement in week 4. |
| **3. Alarm Missions** | Weeks 8-9 | Photo mission (camera capture + reference comparison), barcode scan mission, shake mission (accelerometer). Each mission has its own UI within the alarm-ring screen. |
| **4. Night Mode** | Week 10 | Bedtime countdown timer, goal input, night journal, bedtime enforcement detection (phone usage monitoring or simple "I'm going to bed" button). |
| **5. Morning Mode** | Weeks 11-12 | Post-alarm flow: morning digest (static/template initially, AI later), goal reminder, morning journal, digest expiry countdown timer. |
| **6. Life Score + Streaks** | Weeks 13-14 | Server-side score calculation, streak logic, streak freeze, score API, score display UI (ring animation), score history chart, streak calendar heatmap. |
| **7. Gamification** | Week 15 | Points system, levels, achievement definitions, achievement unlock logic, achievement UI, leaderboard API + UI. |
| **8. Dare Engine Copy** | Week 16 | Write 200+ copy variants. Implement contextual selection logic. Apply to all screens, notifications, push messages. This is what makes the app feel alive. |
| **9. Widget** | Weeks 17-18 | iOS WidgetKit extension (SwiftUI), Android widget (Kotlin/Glance). Config plugins to add extension targets. Background data refresh. |
| **10. AI Features** | Weeks 19-21 | OpenAI integration for personalized morning digest. AI voice agent (Whisper for STT, GPT-4o-mini for conversation, OpenAI TTS for speech). AI reminders for day mode. BullMQ job for pre-generating digests per timezone. |
| **11. Notifications** | Week 22 | FCM integration, scheduled notification system, personalized notification copy using Dare Engine, notification preferences. |
| **12. Subscription + Paywall** | Week 23 | RevenueCat integration, paywall screen design, trial tracking, webhook processing, subscription-gated features. |
| **13. Onboarding** | Week 24 | 3-screen onboarding flow, first alarm setup, paywall presentation after onboarding. |
| **14. Adaptive Intelligence** | Week 25 | Pattern analysis job, difficulty adjustment recommendations, user pattern tracking. |
| **15. Polish + Testing** | Weeks 26-28 | Bug fixes, performance optimization, edge cases (timezone changes, daylight saving, device restart, low memory), crash reporting (Sentry), analytics instrumentation, App Store screenshots, store listing copy. |
| **16. Beta + Submission** | Weeks 29-30 | TestFlight + Play Store internal testing, 2 weeks of beta with 20-50 real users, fix critical bugs, submit to both stores. |

**Total: ~30 weeks (7-8 months) of nights/weekends work.**

### What Will Take Longer Than You Think

1. **The native alarm module (Phase 2):** Budget 4 weeks minimum. Android and iOS alarm APIs are fundamentally different. Testing every edge case (app killed, phone rebooted, battery saver, Do Not Disturb) takes longer than writing the code.

2. **iOS Critical Alerts entitlement:** Apple can take 1-4 weeks to approve. Apply in week 4 so it is ready when you need it.

3. **Widget (Phase 9):** The Expo config plugin for adding an iOS widget extension target is not well-documented. Expect to read a lot of native Xcode project configuration code.

4. **App Store review:** Apple may reject an alarm app that claims to bypass Do Not Disturb unless you have the Critical Alerts entitlement properly configured. First review may take 2-3 submissions.

5. **Android alarm reliability:** Every Android OEM (Samsung, Xiaomi, OnePlus, Huawei) has its own battery optimization that kills background services. You will need a "Battery optimization whitelist" screen that guides users through disabling battery optimization for your app. This is an ongoing battle, not a one-time fix. See https://dontkillmyapp.com for the full horror show.

### What You Can Parallelize

- Apply for iOS Critical Alerts entitlement while building foundation (Phase 1).
- Backend API development can happen in parallel with native module work.
- Dare Engine copy writing can happen offline, anytime.
- Achievement definitions and gamification design is pure data -- do it while waiting for builds.

---

### Critical Files for Implementation

- `/modules/alarm-native/ios/AlarmModule.swift` and `/modules/alarm-native/android/src/.../AlarmService.kt` - The custom native alarm module is the single most critical and difficult piece. If the alarm does not ring reliably on both platforms, nothing else matters.
- `/server/src/services/score.service.ts` - Life Score calculation logic. Server-authoritative to prevent cheating. The formula, rolling average, and breakdown must be correct from day one since the entire app identity revolves around this number.
- `/server/src/jobs/digestGeneration.job.ts` - The BullMQ job that pre-generates AI morning digests per user timezone. This is the core of the "AI magic moment" and must handle timezone math, OpenAI API calls, and failure retry correctly.
- `/src/lib/dare-engine/copy.ts` - The 200+ Dare Engine copy variants. This is the primary differentiator from Alarmy. Without personality, this is just another alarm app. The copy selection logic based on context (streak length, score, time of day, user history) is what makes the app feel alive.
- `/expo-plugins/withAlarmModule.js` - The Expo config plugin that wires the native alarm module into both platform builds. This modifies AndroidManifest.xml (permissions, services, receivers) and iOS entitlements (critical alerts). If this is wrong, the dev client build fails.
