

## Plan: Browser Push Notifications for Key Events

### Overview
Implement Web Push Notifications using the browser's built-in Notification API and Service Worker. When the app is open (or in the background tab), users receive native OS-level push notifications for: new matches, missed matches, deal invitations received, new messages, and deal invite expiration.

### Architecture

```text
┌─────────────────────────────────────────────┐
│  Browser (foreground or background tab)     │
│                                             │
│  useNotificationPermission() hook           │
│    → Notification.requestPermission()       │
│                                             │
│  usePushNotifications() hook                │
│    → Supabase Realtime listeners            │
│    → new Notification(title, { body, icon })│
└─────────────────────────────────────────────┘
```

This uses the **browser Notification API** (no service worker needed for basic in-browser push). Notifications fire when the user has the tab open or in background. This does NOT require a push server — it listens to Supabase Realtime events and triggers native browser notifications.

### Notification Events

| Event | Trigger | Title | Body |
|-------|---------|-------|------|
| New Match | `INSERT` on `matches` table | "New Match!" | "You matched with {item_title}" |
| Missed Match | Detected in swipe flow | "Missed Match" | "Someone liked your item" |
| Deal Invite Received | `INSERT` on `deal_invites` where receiver is me | "Deal Invitation" | "{user} wants to swap for your {item}" |
| New Message | `INSERT` on `messages` where sender ≠ me | "New Message" | "{sender}: {content preview}" |
| Deal Invite Expired | Checked on realtime or polling | "Invite Expired" | "Your deal invite for {item} has expired" |

### Changes

**1. `src/hooks/useNotificationPermission.tsx`** — New hook
- Request `Notification.requestPermission()` on mount (if not already granted)
- Return `{ permission, requestPermission }` state
- Only prompt once per session (store in sessionStorage)

**2. `src/hooks/usePushNotifications.tsx`** — New hook (core logic)
- Subscribe to Supabase Realtime channels for:
  - `matches` table INSERT → fetch match details → show notification
  - `deal_invites` table INSERT → check if receiver is current user → show notification
  - `messages` table INSERT → check sender ≠ current user and tab not focused → show notification
- Use `document.hidden` check — only show browser notification when tab is not focused (avoid double-alerting)
- On notification click → `window.focus()` and navigate to relevant page
- Deal expiration: check on each `deal_invites` refetch if any invite just crossed the 2-day threshold

**3. `src/components/layout/AppLayout.tsx`** — Integrate hooks
- Call `useNotificationPermission()` and `usePushNotifications()` at the app layout level so they run on all authenticated pages

**4. `src/pages/Settings.tsx`** — Add notification toggle
- Add a "Notifications" row in settings to enable/disable browser notifications
- Store preference in localStorage
- Show current permission status (granted/denied/default)

**5. Translation keys (EN/FR/AR)** — Add `notifications` namespace:
- `notifications.newMatch`, `notifications.missedMatch`, `notifications.dealInvite`, `notifications.newMessage`, `notifications.dealExpired`
- `settings.notifications`, `settings.notificationsDescription`, `settings.enableNotifications`

### Limitations (documented in WhitePaper)
- Only works when the browser tab is open (foreground or background)
- Does NOT work when browser is fully closed — that would require a push server (Web Push API with VAPID keys), which is a future enhancement
- iOS Safari has limited Notification API support

### Files Modified
- `src/hooks/useNotificationPermission.tsx` (new)
- `src/hooks/usePushNotifications.tsx` (new)
- `src/components/layout/AppLayout.tsx`
- `src/pages/Settings.tsx`
- `src/locales/en/translation.json`
- `src/locales/fr/translation.json`
- `src/locales/ar/translation.json`

