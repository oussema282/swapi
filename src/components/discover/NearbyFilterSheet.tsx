import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { MapPin, DollarSign } from 'lucide-react';

export interface NearbyFilters {
  priceMin: number;
  priceMax: number;
  maxDistance: number; // in km, 0 means no limit
}

interface NearbyFilterSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  filters: NearbyFilters;
  onFiltersChange: (filters: NearbyFilters) => void;
}

const DISTANCE_OPTIONS = [5, 10, 25, 50, 100, 200, 0]; // 0 = any distance

export function NearbyFilterSheet({ open, onOpenChange, filters, onFiltersChange }: NearbyFilterSheetProps) {
  
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
  
  const handleReset = () => {
    onFiltersChange({ priceMin: 0, priceMax: 1000, maxDistance: 0 });
  };

  const handleApply = () => {
    onOpenChange(false);
  };

  const distanceIndex = DISTANCE_OPTIONS.indexOf(filters.maxDistance);
  const distanceLabel = filters.maxDistance === 0 ? 'Any distance' : `${filters.maxDistance} km`;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-[320px] sm:w-[380px] bg-background">
        <SheetHeader>
          <SheetTitle>Filter Nearby Items</SheetTitle>
          <SheetDescription>
            Set your preferences to find the best matches nearby
          </SheetDescription>
        </SheetHeader>
        
        <div className="mt-6 space-y-8">
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
