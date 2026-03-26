

## Plan: In-App Notification Permission Banner + Localized Message Times

### Problem
1. Browser auto-blocks `Notification.requestPermission()` if not triggered by a user gesture — the current auto-prompt silently fails
2. If the user denies, there's no reminder mechanism
3. Message bubble timestamps show "Yesterday" in English regardless of language

### Changes

**1. `src/hooks/useNotificationPermission.tsx`** — Improve logic
- Remove the auto-prompt on mount (browsers block it without user gesture)
- Track denial with a localStorage key `notif-last-prompted` storing the timestamp
- Export a `shouldShowBanner` boolean: true when permission is `default`, OR when permission is `denied` and last prompt was >24h ago

**2. New component: `src/components/NotificationBanner.tsx`** — In-app banner
- A dismissible banner (Bell icon + message + "Enable" button + X close)
- On "Enable" click → call `requestPermission()` (this is a user gesture, so browser allows it)
- On dismiss → store `notif-last-prompted` = now in localStorage, hide banner for 24h
- Translated text using `t('notifications.enablePrompt')` and `t('notifications.enableButton')`
- Styled as a subtle top banner (primary accent background, white text)

**3. `src/components/layout/AppLayout.tsx`** — Render the banner
- Import and render `<NotificationBanner />` above `{children}` when `shouldShowBanner` is true

**4. `src/components/chat/MessageBubble.tsx`** — Localize timestamps
- Import `getDateLocale` from `@/lib/dateLocale` (or inline the locale lookup)
- Import `useTranslation` to get the current language
- Replace hardcoded `"Yesterday"` with `t('chat.yesterday')` (already exists in translations)
- Pass locale to `format()` calls so month names are localized: `format(date, 'MMM d, HH:mm', { locale })`

**5. `src/lib/dateLocale.ts`** — Export `getDateLocale` (already exported, no change needed)

**6. Translation keys (EN/FR/AR)** — Add notification banner keys:
- EN: `"notifications.enablePrompt": "Enable notifications to stay updated on matches and messages"`, `"notifications.enableButton": "Enable"`
- FR: `"notifications.enablePrompt": "Activez les notifications pour rester informé des matchs et messages"`, `"notifications.enableButton": "Activer"`
- AR: `"notifications.enablePrompt": "فعّل الإشعارات لتبقى على اطلاع بالمطابقات والرسائل"`, `"notifications.enableButton": "تفعيل"`

### Files Modified
- `src/hooks/useNotificationPermission.tsx`
- `src/components/NotificationBanner.tsx` (new)
- `src/components/layout/AppLayout.tsx`
- `src/components/chat/MessageBubble.tsx`
- `src/locales/en/translation.json`
- `src/locales/fr/translation.json`
- `src/locales/ar/translation.json`

