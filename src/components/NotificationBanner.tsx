import { Bell, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNotificationPermission } from '@/hooks/useNotificationPermission';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

export function NotificationBanner() {
  const { t } = useTranslation();
  const { shouldShowBanner, requestPermission, dismissBanner } = useNotificationPermission();

  const handleEnable = async () => {
    try {
      const result = await requestPermission();
      if (result === 'granted') {
        toast.success(t('notifications.enabled'));
      } else if (result === 'denied') {
        toast.error(t('notifications.blocked'), { duration: 6000 });
      } else {
        // undefined or 'default' — likely blocked by iframe
        toast.info(t('notifications.notSupported'), { duration: 6000 });
      }
    } catch {
      toast.info(t('notifications.notSupported'), { duration: 6000 });
    }
  };

  if (!shouldShowBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="flex items-center gap-3 px-4 py-3 bg-primary text-primary-foreground"
      >
        <Bell className="w-5 h-5 flex-shrink-0" />
        <p className="text-sm flex-1">{t('notifications.enablePrompt')}</p>
        <Button
          size="sm"
          variant="secondary"
          onClick={handleEnable}
          className="flex-shrink-0"
        >
          {t('notifications.enableButton')}
        </Button>
        <button onClick={dismissBanner} className="p-1 flex-shrink-0 opacity-70 hover:opacity-100">
          <X className="w-4 h-4" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
