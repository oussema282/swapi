import { Bell, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNotificationPermission } from '@/hooks/useNotificationPermission';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

export function NotificationBanner() {
  const { t } = useTranslation();
  const { shouldShowBanner, requestPermission, dismissBanner } = useNotificationPermission();

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
          onClick={requestPermission}
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
