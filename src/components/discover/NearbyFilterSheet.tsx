import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { MapPin, DollarSign, Package } from 'lucide-react';
import { CATEGORIES, getCategoryIcon } from '@/config/categories';
import { cn } from '@/lib/utils';

export interface DiscoverFilters {
  priceMin: number;
  priceMax: number;
  maxDistance: number;
  selectedCategories?: string[];
}

export type NearbyFilters = DiscoverFilters;

interface DiscoverFilterSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  filters: DiscoverFilters;
  onFiltersChange: (filters: DiscoverFilters) => void;
}

const DISTANCE_OPTIONS = [5, 10, 25, 50, 100, 200, 0];

export function DiscoverFilterSheet({ open, onOpenChange, filters, onFiltersChange }: DiscoverFilterSheetProps) {
  
  const handlePriceMinChange = (value: number[]) => {
    const newMin = value[0];
    onFiltersChange({ ...filters, priceMin: newMin, priceMax: Math.max(newMin, filters.priceMax) });
  };
  
  const handlePriceMaxChange = (value: number[]) => {
    const newMax = value[0];
    onFiltersChange({ ...filters, priceMin: Math.min(filters.priceMin, newMax), priceMax: newMax });
  };
  
  const handleDistanceChange = (value: number[]) => {
    const idx = value[0];
    onFiltersChange({ ...filters, maxDistance: DISTANCE_OPTIONS[idx] });
  };

  const toggleCategory = (categoryId: string) => {
    const current = filters.selectedCategories || [];
    const isSelected = current.includes(categoryId);
    onFiltersChange({
      ...filters,
      selectedCategories: isSelected 
        ? current.filter(c => c !== categoryId)
        : [...current, categoryId],
    });
  };
  
  const handleReset = () => {
    onFiltersChange({ priceMin: 0, priceMax: 1000, maxDistance: 0, selectedCategories: [] });
  };

  const handleApply = () => {
    onOpenChange(false);
  };

  const distanceIndex = DISTANCE_OPTIONS.indexOf(filters.maxDistance);
  const distanceLabel = filters.maxDistance === 0 ? 'Toute distance' : `${filters.maxDistance} km`;
  const selectedCategories = filters.selectedCategories || [];

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-[320px] sm:w-[380px] bg-background">
        <SheetHeader>
          <SheetTitle>Filtrer les articles</SheetTitle>
          <SheetDescription>
            Définissez vos préférences pour trouver les meilleurs échanges
          </SheetDescription>
        </SheetHeader>
        
        <div className="mt-6 space-y-8 pb-24 overflow-y-auto max-h-[calc(100vh-200px)]">
          {/* Category Filter */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Package className="w-4 h-4 text-primary" />
              <span>Catégorie</span>
              {selectedCategories.length > 0 && (
                <span className="text-xs text-muted-foreground">
                  ({selectedCategories.length} sélectionnée{selectedCategories.length > 1 ? 's' : ''})
                </span>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategories.includes(cat.id);
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => toggleCategory(cat.id)}
                    className={cn(
                      'flex items-center gap-2 px-3 py-2 rounded-full text-sm transition-all',
                      isSelected
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>
            <p className="text-xs text-muted-foreground">
              {selectedCategories.length === 0 ? 'Toutes les catégories' : 'Appuyez pour basculer'}
            </p>
          </div>

          {/* Distance Filter */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-medium">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Distance maximale</span>
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
                <span>Tout</span>
              </div>
            </div>
          </div>
          
          {/* Price Filter */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-medium">
              <DollarSign className="w-4 h-4 text-primary" />
              <span>Fourchette de prix</span>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Minimum</span>
                  <span className="font-medium text-foreground">{filters.priceMin} DT</span>
                </div>
                <Slider value={[filters.priceMin]} onValueChange={handlePriceMinChange} min={0} max={1000} step={10} className="w-full" />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Maximum</span>
                  <span className="font-medium text-foreground">
                    {filters.priceMax === 1000 ? '1000+ DT' : `${filters.priceMax} DT`}
                  </span>
                </div>
                <Slider value={[filters.priceMax]} onValueChange={handlePriceMaxChange} min={0} max={1000} step={10} className="w-full" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Actions */}
        <div className="absolute bottom-6 left-6 right-6 flex gap-3">
          <Button variant="outline" onClick={handleReset} className="flex-1">
            Réinitialiser
          </Button>
          <Button onClick={handleApply} className="flex-1">
            Appliquer
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export { DiscoverFilterSheet as NearbyFilterSheet };
