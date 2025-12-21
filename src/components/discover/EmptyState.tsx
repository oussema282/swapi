import { Button } from '@/components/ui/button';
import { RefreshCw, Package, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface EmptyStateProps {
  title?: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
  onAction?: () => void;
  showRefresh?: boolean;
  onRefresh?: () => void;
}

export function EmptyState({ 
  title = "No more items", 
  description = "You've seen all compatible items for now. Check back later!",
  actionLabel,
  actionHref,
  onAction,
  showRefresh = false,
  onRefresh
}: EmptyStateProps) {
  const navigate = useNavigate();

  const handleAction = () => {
    if (onAction) {
      onAction();
    } else if (actionHref) {
      navigate(actionHref);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-6">
      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6">
        <Package className="w-12 h-12 text-primary/60" />
      </div>
      <h3 className="text-2xl font-display font-bold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
        {description}
      </p>
      <div className="flex gap-3">
        {actionLabel && (
          <Button onClick={handleAction} className="gradient-primary">
            {actionHref === '/items/new' && <Plus className="w-4 h-4 mr-2" />}
            {actionLabel}
          </Button>
        )}
        {showRefresh && onRefresh && (
          <Button variant="outline" onClick={onRefresh}>
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
        )}
      </div>
    </div>
  );
}
