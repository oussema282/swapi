import { Button } from '@/components/ui/button';
import { RefreshCw, Package, Plus, Search, ArrowLeftRight, Clock, Sparkles, Compass } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface EmptyStateProps {
  title?: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
  onAction?: () => void;
  showRefresh?: boolean;
  onRefresh?: () => void;
  isRefreshing?: boolean;
  /** Show "Switch item" button for item-scoped exhaustion */
  showSwitchItem?: boolean;
  onSwitchItem?: () => void;
  /** Variant for exhausted state styling */
  variant?: 'default' | 'exhausted';
}

export function EmptyState({ 
  title = "No more items", 
  description = "You've seen all compatible items for now. Check back later!",
  actionLabel,
  actionHref,
  onAction,
  showRefresh = false,
  onRefresh,
  isRefreshing = false,
  showSwitchItem = false,
  onSwitchItem,
  variant = 'default'
}: EmptyStateProps) {
  const navigate = useNavigate();

  const handleAction = () => {
    if (onAction) {
      onAction();
    } else if (actionHref) {
      navigate(actionHref);
    }
  };

  const isSearchAction = actionHref === '/search';
  const isExhausted = variant === 'exhausted';

  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-6">
      {/* Animated icon container */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.6 }}
        className={`relative w-28 h-28 rounded-full flex items-center justify-center mb-6 ${
          isExhausted 
            ? 'bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10' 
            : 'bg-gradient-to-br from-primary/20 to-secondary/20'
        }`}
      >
        {/* Decorative rings */}
        {isExhausted && (
          <>
            <div className="absolute inset-0 rounded-full border-2 border-primary/10 animate-ping" style={{ animationDuration: '3s' }} />
            <div className="absolute inset-2 rounded-full border border-secondary/10" />
          </>
        )}
        
        {isExhausted ? (
          <Compass className="w-12 h-12 text-primary/60" />
        ) : isSearchAction ? (
          <Search className="w-12 h-12 text-primary/60" />
        ) : (
          <Package className="w-12 h-12 text-primary/60" />
        )}
      </motion.div>

      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-2xl font-display font-bold mb-3 text-foreground"
      >
        {title}
      </motion.h3>
      
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-muted-foreground mb-4 max-w-sm leading-relaxed"
      >
        {description}
      </motion.p>
      
      {/* Tips for exhausted state */}
      {isExhausted && (
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="w-full max-w-xs space-y-2 mb-6"
        >
          <div className="flex items-center gap-3 text-sm text-muted-foreground bg-muted/30 px-4 py-2.5 rounded-xl">
            <Clock className="w-4 h-4 text-primary flex-shrink-0" />
            <span>New items are added daily</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground bg-muted/30 px-4 py-2.5 rounded-xl">
            <Sparkles className="w-4 h-4 text-secondary flex-shrink-0" />
            <span>Try different swap preferences</span>
          </div>
        </motion.div>
      )}

      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: isExhausted ? 0.4 : 0.3 }}
        className="flex flex-wrap gap-3 justify-center"
      >
        {/* Primary action */}
        {actionLabel && (
          <Button onClick={handleAction} className="gradient-primary">
            {actionHref === '/items/new' && <Plus className="w-4 h-4 mr-2" />}
            {isSearchAction && <Search className="w-4 h-4 mr-2" />}
            {actionLabel}
          </Button>
        )}
        
        {/* Switch item button for exhausted state */}
        {showSwitchItem && onSwitchItem && (
          <Button variant="default" onClick={onSwitchItem} className="gradient-primary">
            <ArrowLeftRight className="w-4 h-4 mr-2" />
            Switch Item
          </Button>
        )}
        
        {/* Refresh button */}
        {showRefresh && onRefresh && (
          <Button 
            variant="outline" 
            onClick={onRefresh}
            disabled={isRefreshing}
            className="min-w-[160px]"
          >
            <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
            {isRefreshing ? 'Checking...' : 'Check for new items'}
          </Button>
        )}
      </motion.div>
    </div>
  );
}
