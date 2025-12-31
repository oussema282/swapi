import { Button } from '@/components/ui/button';
import { RefreshCw, Package, Plus, Search, ArrowLeftRight, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
      <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 ${
        isExhausted 
          ? 'bg-gradient-to-br from-amber-500/20 to-orange-500/20' 
          : 'bg-gradient-to-br from-primary/20 to-secondary/20'
      }`}>
        {isExhausted ? (
          <span className="text-5xl">🎯</span>
        ) : isSearchAction ? (
          <Search className="w-12 h-12 text-primary/60" />
        ) : (
          <Package className="w-12 h-12 text-primary/60" />
        )}
      </div>
      <h3 className="text-2xl font-display font-bold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground mb-4 max-w-sm leading-relaxed">
        {description}
      </p>
      
      {/* Retry info for exhausted state */}
      {isExhausted && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6 bg-muted/50 px-4 py-2 rounded-full">
          <Clock className="w-4 h-4" />
          <span>New items may appear as users add listings</span>
        </div>
      )}

      <div className="flex flex-wrap gap-3 justify-center">
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
          >
            <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
            {isRefreshing ? 'Checking...' : 'Check for new items'}
          </Button>
        )}
      </div>
    </div>
  );
}
