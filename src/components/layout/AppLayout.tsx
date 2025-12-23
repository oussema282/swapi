import { ReactNode } from 'react';
import { BottomNav } from './BottomNav';
import { DealInvitesNotification } from '@/components/deals/DealInvitesNotification';

interface AppLayoutProps {
  children: ReactNode;
  showNav?: boolean;
  hideNotifications?: boolean;
}

export function AppLayout({ children, showNav = true, hideNotifications = false }: AppLayoutProps) {
  return (
    <div className="h-[100dvh] flex flex-col bg-background overflow-hidden">
      {/* Floating notification button */}
      {!hideNotifications && (
        <div className="fixed top-4 right-4 z-50">
          <DealInvitesNotification />
        </div>
      )}
      <main className={`flex-1 flex flex-col overflow-hidden ${showNav ? 'pb-20' : ''}`}>
        {children}
      </main>
      {showNav && <BottomNav />}
    </div>
  );
}
