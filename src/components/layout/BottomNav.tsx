import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Home, Package, ArrowLeftRight, User } from 'lucide-react';
import { useNotifications } from '@/hooks/useNotifications';

const navItems = [
  { icon: Home, label: 'Discover', path: '/', notificationKey: null },
  { icon: Package, label: 'My Items', path: '/items', notificationKey: null },
  { icon: ArrowLeftRight, label: 'Matches', path: '/matches', notificationKey: 'matches' as const },
  { icon: User, label: 'Profile', path: '/profile', notificationKey: null },
];

export function BottomNav() {
  const location = useLocation();
  const { hasNewMatches } = useNotifications();

  const getNotification = (key: 'matches' | null) => {
    if (key === 'matches') return hasNewMatches;
    return false;
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-t border-border">
      <div className="flex items-center justify-around h-20 max-w-lg mx-auto pb-safe">
        {navItems.map(({ icon: Icon, label, path, notificationKey }) => {
          const isActive = location.pathname === path;
          const hasNotification = getNotification(notificationKey);
          
          return (
            <Link
              key={path}
              to={path}
              className={cn(
                'flex flex-col items-center justify-center flex-1 h-full transition-colors relative',
                isActive
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <div className="relative">
                <Icon className={cn('w-6 h-6', isActive && 'scale-110 transition-transform')} />
                {hasNotification && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-destructive rounded-full animate-pulse" />
                )}
              </div>
              <span className="text-[11px] mt-1.5 font-medium">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
