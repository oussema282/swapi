

## Plan: Fix Notification Permission Button Behavior

### Problem
The app runs inside a preview iframe. Browsers block `Notification.requestPermission()` inside iframes/cross-origin contexts — the call silently fails and returns nothing. Even on the published domain, if the browser has previously denied permission, calling `requestPermission()` again won't show the popup (it immediately returns `'denied'`).

### Solution
Make the "Enable" button smarter:

1. **If permission is `'default'`** — Call `Notification.requestPermission()` as now. If it silently fails (returns undefined or throws), show a toast explaining the user needs to click the lock icon in the address bar to enable notifications.

2. **If permission is `'denied'`** — The browser will NOT show the popup again. Instead, show a toast with instructions: "Notifications are blocked. Click the lock/site-settings icon in your address bar to allow notifications for this site." This is the only way to re-enable after denial — browsers don't allow re-prompting.

3. **Add user feedback** — After clicking "Enable", always show a toast indicating what happened (granted, blocked, or instructions to unblock).

### Changes

**1. `src/components/NotificationBanner.tsx`**
- Wrap `requestPermission` call in a try/catch
- After the call, check the result:
  - `'granted'` → success toast, banner hides
  - `'denied'` → instructional toast explaining how to unblock via browser settings (lock icon)
  - `'default'` or undefined (iframe blocked) → toast explaining the limitation
- Import `toast` from sonner

**2. `src/hooks/useNotificationPermission.tsx`**
- No changes needed — the hook logic is correct

**3. Translation keys (EN/FR/AR)** — Add:
- `notifications.blocked`: "Notifications are blocked. Tap the lock icon in your browser's address bar, then allow notifications."
- `notifications.enabled`: "Notifications enabled!"
- `notifications.notSupported`: "Notifications are not supported in this browser context. Try opening the site directly."

### Files Modified
- `src/components/NotificationBanner.tsx`
- `src/locales/en/translation.json`
- `src/locales/fr/translation.json`
- `src/locales/ar/translation.json`

