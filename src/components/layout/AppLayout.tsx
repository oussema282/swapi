import { ReactNode } from 'react';
import { BottomNav } from './BottomNav';

interface AppLayoutProps {
  children: ReactNode;
  showNav?: boolean;
}

export function AppLayout({ children, showNav = true }: AppLayoutProps) {
  return (
    <div className="h-screen flex flex-col bg-background overflow-hidden">
      <main className={`flex-1 flex flex-col overflow-hidden ${showNav ? 'pb-16' : ''}`}>
        {children}
      </main>
      {showNav && <BottomNav />}
    </div>
  );
}
