import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Search, Package, ArrowLeftRight, User, Compass } from 'lucide-react';
import { useNotifications } from '@/hooks/useNotifications';

const sideNavItems = [
  { icon: Search, label: 'Search', path: '/search', notificationKey: null },
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
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-lg border-t border-border">
      <div className="flex items-end justify-around h-20 max-w-lg mx-auto pb-safe relative">
        {/* Left side items */}
        {leftItems.map(({ icon: Icon, label, path, notificationKey }) => {
          const isActive = location.pathname === path;
          const hasNotification = getNotification(notificationKey);
          
          return (
            <Link
              key={path}
              to={path}
              className={cn(
                'flex flex-col items-center justify-center flex-1 h-full transition-colors relative pb-1',
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

        {/* Center Discover Button */}
        <Link
          to="/"
          className="relative flex items-center justify-center -mt-6"
        >
          <div
            className={cn(
              'w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-200',
              isDiscoverActive
                ? 'bg-gradient-to-br from-primary to-primary/80 text-primary-foreground scale-110'
                : 'bg-gradient-to-br from-primary/90 to-primary/70 text-primary-foreground hover:scale-105'
            )}
          >
            <Compass className="w-7 h-7" />
          </div>
          <span
            className={cn(
              'absolute -bottom-5 text-[10px] font-semibold',
              isDiscoverActive ? 'text-primary' : 'text-muted-foreground'
            )}
          >
            Discover
          </span>
        </Link>

        {/* Right side items */}
        {rightItems.map(({ icon: Icon, label, path, notificationKey }) => {
          const isActive = location.pathname === path;
          const hasNotification = getNotification(notificationKey);
          
          return (
            <Link
              key={path}
              to={path}
              className={cn(
                'flex flex-col items-center justify-center flex-1 h-full transition-colors relative pb-1',
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
    </nav>
  );
}
