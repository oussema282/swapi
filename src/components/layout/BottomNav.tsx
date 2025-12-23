import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Map, Package, ArrowLeftRight, User, Compass } from 'lucide-react';
import { useNotifications } from '@/hooks/useNotifications';

const sideNavItems = [
  { icon: Map, label: 'Map', path: '/map', notificationKey: null },
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

  const isDiscoverActive = location.pathname === '/';

  // Split nav items for left and right sides
  const leftItems = sideNavItems.slice(0, 2);
  const rightItems = sideNavItems.slice(2);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50">
      {/* Background bar */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-card/95 backdrop-blur-lg border-t border-border" />
      
      {/* Navigation content */}
      <div className="relative flex items-end justify-between h-20 max-w-lg mx-auto px-2 pb-safe">
        {/* Left side items */}
        <div className="flex flex-1 justify-around pb-1">
          {leftItems.map(({ icon: Icon, label, path, notificationKey }) => {
            const isActive = location.pathname === path;
            const hasNotification = getNotification(notificationKey);
            
            return (
              <Link
                key={path}
                to={path}
                className={cn(
                  'flex flex-col items-center justify-center py-2 px-4 transition-colors relative',
                  isActive
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                <div className="relative">
                  <Icon className={cn('w-5 h-5', isActive && 'scale-110 transition-transform')} />
                  {hasNotification && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-destructive rounded-full animate-pulse" />
                  )}
                </div>
                <span className="text-[10px] mt-1 font-medium">{label}</span>
              </Link>
            );
          })}
        </div>

        {/* Center Discover Button - Floating above navbar */}
        <Link
          to="/"
          className="absolute left-1/2 -translate-x-1/2 bottom-6 flex flex-col items-center"
        >
          <div
            className={cn(
              'w-[72px] h-[72px] rounded-full flex items-center justify-center shadow-xl border-4 border-background transition-all duration-200',
              isDiscoverActive
                ? 'bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground scale-105'
                : 'bg-gradient-to-br from-primary/90 to-primary/70 text-primary-foreground hover:scale-105'
            )}
          >
            <Compass className="w-8 h-8" />
          </div>
        </Link>

        {/* Right side items */}
        <div className="flex flex-1 justify-around pb-1">
          {rightItems.map(({ icon: Icon, label, path, notificationKey }) => {
            const isActive = location.pathname === path;
            const hasNotification = getNotification(notificationKey);
            
            return (
              <Link
                key={path}
                to={path}
                className={cn(
                  'flex flex-col items-center justify-center py-2 px-4 transition-colors relative',
                  isActive
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                <div className="relative">
                  <Icon className={cn('w-5 h-5', isActive && 'scale-110 transition-transform')} />
                  {hasNotification && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-destructive rounded-full animate-pulse" />
                  )}
                </div>
                <span className="text-[10px] mt-1 font-medium">{label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
