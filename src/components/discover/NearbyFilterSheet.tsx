import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { MapPin, DollarSign, Package, Gamepad2, Smartphone, Shirt, BookOpen, Home, Dumbbell } from 'lucide-react';
import { ItemCategory, CATEGORY_LABELS } from '@/types/database';
import { cn } from '@/lib/utils';

export interface DiscoverFilters {
  priceMin: number;
  priceMax: number;
  maxDistance: number; // in km, 0 means no limit
  selectedCategories?: ItemCategory[];
}

// Keep old interface for backwards compatibility
export type NearbyFilters = DiscoverFilters;

interface DiscoverFilterSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  filters: DiscoverFilters;
  onFiltersChange: (filters: DiscoverFilters) => void;
}

const DISTANCE_OPTIONS = [5, 10, 25, 50, 100, 200, 0]; // 0 = any distance

const CATEGORY_ICONS: Record<ItemCategory, React.ReactNode> = {
  games: <Gamepad2 className="w-4 h-4" />,
  electronics: <Smartphone className="w-4 h-4" />,
  clothes: <Shirt className="w-4 h-4" />,
  books: <BookOpen className="w-4 h-4" />,
  home_garden: <Home className="w-4 h-4" />,
  sports: <Dumbbell className="w-4 h-4" />,
  other: <Package className="w-4 h-4" />,
};

const ALL_CATEGORIES: ItemCategory[] = ['games', 'electronics', 'clothes', 'books', 'home_garden', 'sports', 'other'];

export function DiscoverFilterSheet({ open, onOpenChange, filters, onFiltersChange }: DiscoverFilterSheetProps) {
  
  const handlePriceMinChange = (value: number[]) => {
    const newMin = value[0];
    onFiltersChange({
      ...filters,
      priceMin: newMin,
      priceMax: Math.max(newMin, filters.priceMax),
    });
  };
  
  const handlePriceMaxChange = (value: number[]) => {
    const newMax = value[0];
    onFiltersChange({
      ...filters,
      priceMin: Math.min(filters.priceMin, newMax),
      priceMax: newMax,
    });
  };
  
  const handleDistanceChange = (value: number[]) => {
    const idx = value[0];
    onFiltersChange({
      ...filters,
      maxDistance: DISTANCE_OPTIONS[idx],
    });
  };

  const toggleCategory = (category: ItemCategory) => {
    const current = filters.selectedCategories || [];
    const isSelected = current.includes(category);
    onFiltersChange({
      ...filters,
      selectedCategories: isSelected 
        ? current.filter(c => c !== category)
        : [...current, category],
    });
  };
  
  const handleReset = () => {
    onFiltersChange({ priceMin: 0, priceMax: 1000, maxDistance: 0, selectedCategories: [] });
  };

  const handleApply = () => {
    onOpenChange(false);
  };

  const distanceIndex = DISTANCE_OPTIONS.indexOf(filters.maxDistance);
  const distanceLabel = filters.maxDistance === 0 ? 'Any distance' : `${filters.maxDistance} km`;
  const selectedCategories = filters.selectedCategories || [];

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-[320px] sm:w-[380px] bg-background">
        <SheetHeader>
          <SheetTitle>Filter Items</SheetTitle>
          <SheetDescription>
            Set your preferences to find the best matches
          </SheetDescription>
        </SheetHeader>
        
        <div className="mt-6 space-y-8 pb-24">
          {/* Category Filter */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Package className="w-4 h-4 text-primary" />
              <span>Category</span>
              {selectedCategories.length > 0 && (
                <span className="text-xs text-muted-foreground">
                  ({selectedCategories.length} selected)
                </span>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {ALL_CATEGORIES.map((category) => {
                const isSelected = selectedCategories.includes(category);
                return (
                  <button
                    key={category}
                    onClick={() => toggleCategory(category)}
                    className={cn(
                      'flex items-center gap-2 px-3 py-2 rounded-full text-sm transition-all',
                      isSelected
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    )}
                  >
                    {CATEGORY_ICONS[category]}
                    <span>{CATEGORY_LABELS[category]}</span>
                  </button>
                );
              })}
            </div>
            <p className="text-xs text-muted-foreground">
              {selectedCategories.length === 0 ? 'Showing all categories' : 'Tap to toggle'}
            </p>
          </div>

          {/* Distance Filter */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-medium">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Maximum Distance</span>
            </div>
            <div className="space-y-3">
              <Slider
                value={[distanceIndex >= 0 ? distanceIndex : DISTANCE_OPTIONS.length - 1]}
                onValueChange={handleDistanceChange}
                min={0}
                max={DISTANCE_OPTIONS.length - 1}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>5 km</span>
                <span className="font-medium text-foreground">{distanceLabel}</span>
                <span>Any</span>
              </div>
            </div>
          </div>
          
          {/* Price Filter */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-medium">
              <DollarSign className="w-4 h-4 text-primary" />
              <span>Price Range</span>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Minimum</span>
                  <span className="font-medium text-foreground">${filters.priceMin}</span>
                </div>
                <Slider
                  value={[filters.priceMin]}
                  onValueChange={handlePriceMinChange}
                  min={0}
                  max={1000}
                  step={10}
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Maximum</span>
                  <span className="font-medium text-foreground">
                    ${filters.priceMax === 1000 ? '1000+' : filters.priceMax}
                  </span>
                </div>
                <Slider
                  value={[filters.priceMax]}
                  onValueChange={handlePriceMaxChange}
                  min={0}
                  max={1000}
                  step={10}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Actions */}
        <div className="absolute bottom-6 left-6 right-6 flex gap-3">
          <Button
            variant="outline"
            onClick={handleReset}
            className="flex-1"
          >
            Reset
          </Button>
          <Button
            onClick={handleApply}
            className="flex-1"
          >
            Apply Filters
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

// Backward compatibility export
export { DiscoverFilterSheet as NearbyFilterSheet };
