import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Package, Plus } from 'lucide-react';
import { Item, CATEGORY_LABELS } from '@/types/database';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ProfileItemsGridProps {
  items: Item[];
  isOwnProfile?: boolean;
}

export function ProfileItemsGrid({ items, isOwnProfile = true }: ProfileItemsGridProps) {
  const navigate = useNavigate();

  if (items.length === 0 && isOwnProfile) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
          <Package className="w-8 h-8 text-muted-foreground" />
        </div>
        <p className="text-muted-foreground mb-4">No items yet</p>
        <Button onClick={() => navigate('/items/new')}>
          <Plus className="w-4 h-4 mr-2" />
          Add Your First Item
        </Button>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No items to display</p>
      </div>
    );
  }

  // Filter out archived items for non-owner view
  const displayItems = isOwnProfile ? items : items.filter(item => !item.is_archived);

  return (
    <div className="grid grid-cols-3 gap-1">
      {displayItems.map((item, index) => (
        <motion.button
          key={item.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05 }}
          onClick={() => navigate(isOwnProfile ? `/items/${item.id}/edit` : '#')}
          className={cn(
            'relative aspect-square overflow-hidden bg-muted group',
            isOwnProfile && 'cursor-pointer'
          )}
        >
          {item.photos && item.photos.length > 0 ? (
            <img
              src={item.photos[0]}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-muted/50">
              <Package className="w-8 h-8 text-muted-foreground/30" />
            </div>
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-2">
            <p className="text-white text-xs font-medium text-center line-clamp-2 mb-1">
              {item.title}
            </p>
            <Badge variant="secondary" className="text-[10px] py-0">
              {CATEGORY_LABELS[item.category]}
            </Badge>
          </div>

          {/* Photo count indicator */}
          {item.photos && item.photos.length > 1 && (
            <div className="absolute top-1 right-1 bg-black/60 rounded px-1.5 py-0.5">
              <span className="text-white text-[10px] font-medium">
                1/{item.photos.length}
              </span>
            </div>
          )}

          {/* Inactive indicator */}
          {!item.is_active && !item.is_archived && (
            <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
              <span className="text-xs text-muted-foreground font-medium">Inactive</span>
            </div>
          )}

          {/* Archived/Swapped indicator with blur - only for owner */}
          {item.is_archived && isOwnProfile && (
            <div className="absolute inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center">
              <span className="text-xs text-muted-foreground font-medium">Swapped</span>
            </div>
          )}
        </motion.button>
      ))}

      {/* Add item button for own profile */}
      {isOwnProfile && (
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: items.length * 0.05 }}
          onClick={() => navigate('/items/new')}
          className="aspect-square border-2 border-dashed border-muted-foreground/30 rounded flex flex-col items-center justify-center gap-1 hover:border-primary hover:bg-primary/5 transition-all"
        >
          <Plus className="w-6 h-6 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">Add</span>
        </motion.button>
      )}
    </div>
  );
}
