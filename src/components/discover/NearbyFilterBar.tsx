import { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface PriceFilter {
  min: number;
  max: number;
}

interface NearbyFilterBarProps {
  priceFilter: PriceFilter;
  onPriceFilterChange: (filter: PriceFilter) => void;
  className?: string;
}

export function NearbyFilterBar({ priceFilter, onPriceFilterChange, className }: NearbyFilterBarProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  
  const handleMinChange = (value: number[]) => {
    const newMin = value[0];
    onPriceFilterChange({
      min: newMin,
      max: Math.max(newMin, priceFilter.max),
    });
  };
  
  const handleMaxChange = (value: number[]) => {
    const newMax = value[0];
    onPriceFilterChange({
      min: Math.min(priceFilter.min, newMax),
      max: newMax,
    });
  };
  
  const handleReset = () => {
    onPriceFilterChange({ min: 0, max: 1000 });
  };

  return (
    <div className={cn("bg-card border-b border-border", className)}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-2 flex items-center justify-between text-sm font-medium text-foreground hover:bg-muted/50 transition-colors"
      >
        <span>Price Range: ${priceFilter.min} - ${priceFilter.max === 1000 ? '1000+' : priceFilter.max}</span>
        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      
      {isExpanded && (
        <div className="px-4 pb-4 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Min: ${priceFilter.min}</span>
            </div>
            <Slider
              value={[priceFilter.min]}
              onValueChange={handleMinChange}
              min={0}
              max={1000}
              step={10}
              className="w-full"
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Max: ${priceFilter.max === 1000 ? '1000+' : priceFilter.max}</span>
            </div>
            <Slider
              value={[priceFilter.max]}
              onValueChange={handleMaxChange}
              min={0}
              max={1000}
              step={10}
              className="w-full"
            />
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={handleReset}
            className="w-full"
          >
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  );
}
