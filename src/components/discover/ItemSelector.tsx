import { Item, CATEGORY_LABELS } from '@/types/database';
import { cn } from '@/lib/utils';
import { Package, ChevronDown, Check } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface ItemSelectorProps {
  items: Item[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export function ItemSelector({ items, selectedId, onSelect }: ItemSelectorProps) {
  if (items.length === 0) return null;

  const selectedItem = items.find(i => i.id === selectedId);

  return (
    <div className="space-y-2">
      <p className="text-sm font-medium text-muted-foreground">Swapping from:</p>
      <Select value={selectedId || undefined} onValueChange={onSelect}>
        <SelectTrigger className="w-full h-auto py-2 px-3 bg-card border-border">
          <SelectValue placeholder="Select an item">
            {selectedItem && (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg overflow-hidden bg-muted flex items-center justify-center shrink-0">
                  {selectedItem.photos && selectedItem.photos.length > 0 ? (
                    <img
                      src={selectedItem.photos[0]}
                      alt={selectedItem.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Package className="w-5 h-5 text-muted-foreground" />
                  )}
                </div>
                <div className="text-left min-w-0">
                  <p className="text-sm font-medium truncate">{selectedItem.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {CATEGORY_LABELS[selectedItem.category]}
                  </p>
                </div>
              </div>
            )}
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="max-h-[300px]">
          {items.map((item) => {
            const hasPhoto = item.photos && item.photos.length > 0;
            const isSelected = item.id === selectedId;

            return (
              <SelectItem 
                key={item.id} 
                value={item.id}
                className="py-2 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg overflow-hidden bg-muted flex items-center justify-center shrink-0">
                    {hasPhoto ? (
                      <img
                        src={item.photos[0]}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Package className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                  <div className="text-left min-w-0">
                    <p className="text-sm font-medium truncate">{item.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {CATEGORY_LABELS[item.category]} • Looking for {item.swap_preferences.length} categories
                    </p>
                  </div>
                </div>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
}
