import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Search, Map, Compass, ArrowLeftRight, User } from 'lucide-react';
import { useNotifications } from '@/hooks/useNotifications';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function BottomNav() {
  const location = useLocation();
  const { hasNewMatches } = useNotifications();
  const { t } = useTranslation();

  const navItems = [
    { icon: Search, label: t('nav.search'), path: '/search' },
    { icon: Map, label: t('nav.map'), path: '/map' },
    { icon: Compass, label: t('nav.discover'), path: '/discover', isCenter: true },
    { icon: ArrowLeftRight, label: t('nav.matches'), path: '/matches' },
    { icon: User, label: t('nav.profile'), path: '/profile' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 pb-safe">
      <div className="relative h-[72px] mx-4 mb-2">
        {/* Dark glassmorphism bar */}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-xl rounded-2xl border border-border" />
        
        <div className="relative flex items-center h-full px-2">
          {navItems.map(({ icon: Icon, label, path, isCenter }) => {
            const active = isActive(path);
            const hasNotification = path === '/matches' && hasNewMatches;
            
            if (isCenter) {
              return (
                <Link
                  key={path}
                  to={path}
                  className="relative -mt-6 flex-1 flex flex-col items-center"
                >
                  <motion.div
                    className={cn(
                      'w-16 h-16 rounded-full flex items-center justify-center',
                      'bg-primary shadow-floating',
                      'transition-transform duration-200',
                      active && 'scale-105'
                    )}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </motion.div>
                  <span className={cn(
                    'absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] font-medium whitespace-nowrap',
                    active ? 'text-primary' : 'text-muted-foreground'
                  )}>
                    {label}
                  </span>
                </Link>
              );
            }
            
            return (
              <Link
                key={path}
                to={path}
                className="flex-1 flex flex-col items-center justify-center py-2"
              >
                <div className="relative">
                  <Icon 
                    className={cn(
                      'w-6 h-6 transition-colors duration-200',
                      active ? 'text-primary' : 'text-muted-foreground'
                    )} 
                  />
                  {hasNotification && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-pulse" />
                  )}
                </div>
                <span 
                  className={cn(
                    'text-[10px] mt-1 font-medium transition-colors duration-200',
                    active ? 'text-primary' : 'text-muted-foreground'
                  )}
                >
                  {label}
                </span>
                {active && (
                  <motion.div 
                    layoutId="activeNavDot"
                    className="w-1 h-1 rounded-full bg-primary mt-1"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
