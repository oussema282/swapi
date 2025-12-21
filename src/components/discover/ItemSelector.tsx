import { Item, CATEGORY_ICONS } from '@/types/database';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { Package } from 'lucide-react';

interface ItemSelectorProps {
  items: Item[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export function ItemSelector({ items, selectedId, onSelect }: ItemSelectorProps) {
  if (items.length === 0) return null;

  return (
    <div className="space-y-2">
      <p className="text-sm font-medium text-muted-foreground">Swapping from:</p>
      <ScrollArea className="w-full">
        <div className="flex gap-3 pb-2">
          {items.map((item) => {
            const isSelected = item.id === selectedId;
            const hasPhoto = item.photos && item.photos.length > 0;

            return (
              <button
                key={item.id}
                onClick={() => onSelect(item.id)}
                className={cn(
                  'flex-shrink-0 flex items-center gap-3 p-2 pr-4 rounded-xl border-2 transition-all',
                  isSelected
                    ? 'border-primary bg-primary/5 shadow-md'
                    : 'border-border bg-card hover:border-primary/50'
                )}
              >
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                  {hasPhoto ? (
                    <img
                      src={item.photos[0]}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Package className="w-6 h-6 text-muted-foreground" />
                  )}
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium line-clamp-1 max-w-[120px]">{item.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {CATEGORY_ICONS[item.category]} Looking for {item.swap_preferences.length} categories
                  </p>
                </div>
              </button>
            );
          })}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
