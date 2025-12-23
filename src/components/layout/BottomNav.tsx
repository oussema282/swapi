import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Search, Map, Compass, Plus, ArrowLeftRight, User } from 'lucide-react';
import { useNotifications } from '@/hooks/useNotifications';
import { motion } from 'framer-motion';

const navItems = [
  { icon: Search, label: 'Search', path: '/search' },
  { icon: Map, label: 'Map', path: '/map' },
  { icon: Compass, label: 'Discover', path: '/' },
  { icon: Plus, label: 'Add', path: '/items/new' },
  { icon: ArrowLeftRight, label: 'Matches', path: '/matches' },
  { icon: User, label: 'Profile', path: '/profile' },
];

export function BottomNav() {
  const location = useLocation();
  const { hasNewMatches } = useNotifications();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50">
      {/* Background bar */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-card/95 backdrop-blur-lg border-t border-border" />
      
      {/* Navigation content */}
      <div className="relative flex items-end justify-between h-20 max-w-lg mx-auto px-2">
        {navItems.map(({ icon: Icon, label, path }) => {
          const active = isActive(path);
          const hasNotification = path === '/matches' && hasNewMatches;
          
          return (
            <Link
              key={path}
              to={path}
              className="relative flex flex-col items-center flex-1"
            >
              {/* Active indicator - elevated pill */}
              {active && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -top-3 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 shadow-lg shadow-primary/30"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              
              {/* Icon container */}
              <div
                className={cn(
                  'relative z-10 flex flex-col items-center justify-center py-2 transition-all duration-200',
                  active ? '-translate-y-3' : 'translate-y-0'
                )}
              >
                <div className="relative">
                  <Icon 
                    className={cn(
                      'transition-all duration-200',
                      active 
                        ? 'w-6 h-6 text-primary-foreground' 
                        : 'w-5 h-5 text-muted-foreground'
                    )} 
                  />
                  {hasNotification && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-destructive rounded-full animate-pulse" />
                  )}
                </div>
                <span 
                  className={cn(
                    'text-[10px] mt-1 font-medium transition-colors duration-200',
                    active ? 'text-primary-foreground' : 'text-muted-foreground'
                  )}
                >
                  {label}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
