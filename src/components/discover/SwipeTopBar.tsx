import { SlidersHorizontal, Zap, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SwipeTopBarProps {
  activeTab: 'foryou' | 'nearby';
  onTabChange: (tab: 'foryou' | 'nearby') => void;
  onFilterClick?: () => void;
  onBoostClick?: () => void;
  hasNotifications?: boolean;
  className?: string;
}

export function SwipeTopBar({
  activeTab,
  onTabChange,
  onFilterClick,
  onBoostClick,
  hasNotifications = false,
  className,
}: SwipeTopBarProps) {
  return (
    <div 
      className={cn(
        "sticky top-0 z-30 flex items-center justify-between px-4 py-3 bg-background/95 backdrop-blur-md border-b border-border/50",
        "safe-area-inset-top",
        className
      )}
      style={{ paddingTop: 'max(12px, env(safe-area-inset-top))' }}
    >
      {/* Left - Filter */}
      <Button
        variant="ghost"
        size="icon"
        onClick={onFilterClick}
        className="w-10 h-10 rounded-full hover:bg-muted"
      >
        <SlidersHorizontal className="w-5 h-5 text-muted-foreground" />
      </Button>

      {/* Center - Segmented Tabs */}
      <div className="flex items-center gap-1 p-1 bg-muted rounded-full">
        <button
          onClick={() => onTabChange('foryou')}
          className={cn(
            "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
            activeTab === 'foryou'
              ? "bg-card text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          For You
        </button>
        <button
          onClick={() => onTabChange('nearby')}
          className={cn(
            "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
            activeTab === 'nearby'
              ? "bg-card text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          Nearby
        </button>
      </div>

      {/* Right - Boost/Notifications */}
      <div className="relative">
        <Button
          variant="ghost"
          size="icon"
          onClick={onBoostClick}
          className="w-10 h-10 rounded-full hover:bg-muted"
        >
          <Zap className="w-5 h-5 text-primary" />
        </Button>
        {hasNotifications && (
          <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-destructive rounded-full border-2 border-background" />
        )}
      </div>
    </div>
  );
}
