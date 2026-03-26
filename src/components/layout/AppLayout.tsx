import { ReactNode } from 'react';
import { BottomNav } from './BottomNav';
import { useNotificationPermission } from '@/hooks/useNotificationPermission';
import { usePushNotifications } from '@/hooks/usePushNotifications';

interface AppLayoutProps {
  children: ReactNode;
  showNav?: boolean;
}

export function AppLayout({ children, showNav = true }: AppLayoutProps) {
  // Initialize notification system
  useNotificationPermission();
  usePushNotifications();

  return (
    <div className="h-[100dvh] flex flex-col bg-background overflow-hidden">
      <main className={`flex-1 flex flex-col overflow-hidden ${showNav ? 'pb-20' : ''}`}>
        {children}
      </main>
      {showNav && <BottomNav />}
    </div>
  );
}
