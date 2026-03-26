import { useState, useEffect, useCallback } from 'react';

export function useNotificationPermission() {
  const [permission, setPermission] = useState<NotificationPermission>(
    typeof Notification !== 'undefined' ? Notification.permission : 'default'
  );

  const enabled = localStorage.getItem('notifications-enabled') !== 'false';

  const requestPermission = useCallback(async () => {
    if (typeof Notification === 'undefined') return 'denied' as NotificationPermission;
    
    const result = await Notification.requestPermission();
    setPermission(result);
    if (result === 'granted') {
      localStorage.setItem('notifications-enabled', 'true');
    }
    return result;
  }, []);

  useEffect(() => {
    if (typeof Notification === 'undefined') return;
    setPermission(Notification.permission);
    
    // Auto-prompt once per session if not yet decided
    if (Notification.permission === 'default' && !sessionStorage.getItem('notif-prompted') && enabled) {
      sessionStorage.setItem('notif-prompted', 'true');
      requestPermission();
    }
  }, [requestPermission, enabled]);

  return { permission, requestPermission, enabled };
}
