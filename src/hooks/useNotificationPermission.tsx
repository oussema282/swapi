import { useState, useEffect, useCallback } from 'react';

const LAST_PROMPTED_KEY = 'notif-last-prompted';
const ENABLED_KEY = 'notifications-enabled';
const DAY_MS = 24 * 60 * 60 * 1000;

export function useNotificationPermission() {
  const [permission, setPermission] = useState<NotificationPermission>(
    typeof Notification !== 'undefined' ? Notification.permission : 'default'
  );
  const [dismissed, setDismissed] = useState(false);

  const enabled = localStorage.getItem(ENABLED_KEY) !== 'false';

  const requestPermission = useCallback(async () => {
    if (typeof Notification === 'undefined') return 'denied' as NotificationPermission;
    
    const result = await Notification.requestPermission();
    setPermission(result);
    localStorage.setItem(LAST_PROMPTED_KEY, Date.now().toString());
    if (result === 'granted') {
      localStorage.setItem(ENABLED_KEY, 'true');
    }
    return result;
  }, []);

  const dismissBanner = useCallback(() => {
    localStorage.setItem(LAST_PROMPTED_KEY, Date.now().toString());
    setDismissed(true);
  }, []);

  useEffect(() => {
    if (typeof Notification === 'undefined') return;
    setPermission(Notification.permission);
  }, []);

  // Determine if we should show the banner
  const shouldShowBanner = (() => {
    if (typeof Notification === 'undefined') return false;
    if (dismissed) return false;
    if (permission === 'granted') return false;
    if (!enabled) return false;

    if (permission === 'default') return true;

    // If denied, show again after 24h
    if (permission === 'denied') {
      const lastPrompted = localStorage.getItem(LAST_PROMPTED_KEY);
      if (!lastPrompted) return true;
      return Date.now() - parseInt(lastPrompted, 10) > DAY_MS;
    }

    return false;
  })();

  return { permission, requestPermission, dismissBanner, shouldShowBanner, enabled };
}
