import { useState, useMemo, useEffect, useCallback } from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { useAuth } from '@/hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Search as SearchIcon, MapPin, Package, Filter, X, DollarSign, Sparkles, RefreshCw } from 'lucide-react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { CATEGORY_LABELS, CONDITION_LABELS, Item, ItemCategory } from '@/types/database';
import { useDeviceLocation, calculateDistance, formatDistance } from '@/hooks/useLocation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface SearchItem extends Item {
  owner_display_name: string;
  owner_avatar_url: string | null;
  owner_latitude: number | null;
  owner_longitude: number | null;
  distance?: number;
}

const categories: { value: ItemCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'All Categories' },
  { value: 'games', label: 'Games' },
  { value: 'electronics', label: 'Electronics' },
  { value: 'clothes', label: 'Clothes' },
  { value: 'books', label: 'Books' },
  { value: 'home_garden', label: 'Home & Garden' },
  { value: 'sports', label: 'Sports' },
  { value: 'other', label: 'Other' },
];

const distanceOptions = [
  { value: 'any', label: 'Any distance' },
  { value: '5', label: '5 km' },
  { value: '10', label: '10 km' },
  { value: '25', label: '25 km' },
  { value: '50', label: '50 km' },
  { value: '100', label: '100 km' },
  { value: '200', label: '200 km' },
];

export default function Search() {
  const { user, loading: authLoading } = useAuth();
  const { latitude, longitude, hasLocation, requestLocation, loading: locationLoading } = useDeviceLocation();
  const queryClient = useQueryClient();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ItemCategory | 'all'>('all');
  const [showFilters, setShowFilters] = useState(false);
  const [maxDistance, setMaxDistance] = useState<string>('any');
  const [budgetRange, setBudgetRange] = useState<[number, number]>([0, 1000]);
  const [isSearchActive, setIsSearchActive] = useState(false);

  // Auto-request location on mount
  useEffect(() => {
    if (!hasLocation && !locationLoading) {
      requestLocation();
    }
  }, [hasLocation, locationLoading, requestLocation]);

  const { data: items, isLoading, refetch, isFetching } = useQuery({
    queryKey: ['search-items', user?.id],
    queryFn: async (): Promise<SearchItem[]> => {
      if (!user) return [];

      const { data: allItems, error } = await supabase
        .from('items')
        .select('*')
        .neq('user_id', user.id)
        .eq('is_active', true);

      if (error) throw error;

      // Get profiles for all users
      const userIds = [...new Set((allItems || []).map(item => item.user_id))];
      const { data: profiles } = await supabase
        .from('profiles')
        .select('user_id, display_name, avatar_url, latitude, longitude')
        .in('user_id', userIds);

      const profileMap = new Map(
        (profiles || []).map(p => [p.user_id, p])
      );

      return (allItems || []).map(item => ({
        ...item,
        owner_display_name: profileMap.get(item.user_id)?.display_name || 'Unknown',
        owner_avatar_url: profileMap.get(item.user_id)?.avatar_url || null,
        owner_latitude: profileMap.get(item.user_id)?.latitude || null,
        owner_longitude: profileMap.get(item.user_id)?.longitude || null,
      }));
    },
    enabled: !!user,
    refetchInterval: 30000, // Auto-refresh every 30 seconds
  });

  // Determine if search/filters are active
  useEffect(() => {
    const hasSearch = searchQuery.trim().length > 0;
    const hasCategory = selectedCategory !== 'all';
    const hasDistance = maxDistance !== 'any';
    const hasBudget = budgetRange[0] > 0 || budgetRange[1] < 1000;
    setIsSearchActive(hasSearch || hasCategory || hasDistance || hasBudget);
  }, [searchQuery, selectedCategory, maxDistance, budgetRange]);

  const filteredItems = useMemo(() => {
    if (!items) return [];

    let filtered = items;

    // Add distance calculation first
    if (hasLocation && latitude && longitude) {
      filtered = filtered.map(item => {
        if (item.owner_latitude && item.owner_longitude) {
          return {
            ...item,
            distance: calculateDistance(
              latitude,
              longitude,
              item.owner_latitude,
              item.owner_longitude
            ),
          };
        }
        return { ...item, distance: undefined };
      });
    }

    // Text search (title, description, category, owner)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(item => {
        const categoryLabel = CATEGORY_LABELS[item.category]?.toLowerCase() || '';
        return (
          item.title.toLowerCase().includes(query) ||
          item.description?.toLowerCase().includes(query) ||
          item.owner_display_name.toLowerCase().includes(query) ||
          categoryLabel.includes(query)
        );
      });
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Distance filter
    if (maxDistance !== 'any' && hasLocation) {
      const maxDist = parseInt(maxDistance);
      filtered = filtered.filter(item => 
        item.distance !== undefined && item.distance <= maxDist
      );
    }

    // Budget filter
    if (budgetRange[0] > 0 || budgetRange[1] < 1000) {
      filtered = filtered.filter(item => {
        const itemMin = item.value_min || 0;
        const itemMax = item.value_max || 1000;
        // Check if item's value range overlaps with filter range
        return itemMin <= budgetRange[1] && itemMax >= budgetRange[0];
      });
    }

    // Sort by distance if available, otherwise by created_at
    if (hasLocation) {
      filtered = filtered.sort((a, b) => {
        if (a.distance === undefined && b.distance === undefined) return 0;
        if (a.distance === undefined) return 1;
        if (b.distance === undefined) return -1;
        return a.distance - b.distance;
      });
    }

    // If no search active, return top 10 nearby; otherwise return all matches
    if (!isSearchActive) {
      return filtered.slice(0, 10);
    }

    return filtered;
  }, [items, searchQuery, selectedCategory, hasLocation, latitude, longitude, maxDistance, budgetRange, isSearchActive]);

  const handleRefresh = useCallback(() => {
    refetch();
  }, [refetch]);

  const clearAllFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('all');
    setMaxDistance('any');
    setBudgetRange([0, 1000]);
  }, []);

  if (authLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  const activeFiltersCount = [
    selectedCategory !== 'all',
    maxDistance !== 'any',
    budgetRange[0] > 0 || budgetRange[1] < 1000,
  ].filter(Boolean).length;

  return (
    <AppLayout>
      <div className="flex flex-col h-full">
        {/* Search Header */}
        <div className="px-4 pt-4 pb-3 bg-background border-b border-border/50 space-y-3">
          {/* Top row: Search + Filter button */}
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search items, categories, users..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-10 h-12 bg-muted/50 text-base"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <Button
              variant={showFilters ? 'default' : 'outline'}
              size="icon"
              className="h-12 w-12 relative"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="w-5 h-5" />
              {activeFiltersCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </Button>
          </div>

          {/* Quick category pills */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-all ${
                  selectedCategory === cat.value
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Expanded Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="space-y-4 overflow-hidden"
              >
                {/* Distance */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      Distance
                    </label>
                    {!hasLocation && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={requestLocation}
                        disabled={locationLoading}
                        className="text-xs"
                      >
                        {locationLoading ? 'Getting...' : 'Enable location'}
                      </Button>
                    )}
                  </div>
                  <div className="flex gap-2">
                    {distanceOptions.map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => setMaxDistance(opt.value)}
                        disabled={!hasLocation && opt.value !== 'any'}
                        className={`flex-1 px-2 py-2 rounded-lg text-xs transition-all ${
                          maxDistance === opt.value
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-muted-foreground hover:bg-muted/80'
                        } disabled:opacity-40 disabled:cursor-not-allowed`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div className="space-y-3">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-primary" />
                    Value Range: €{budgetRange[0]} - €{budgetRange[1] >= 1000 ? '1000+' : budgetRange[1]}
                  </label>
                  <Slider
                    value={budgetRange}
                    onValueChange={(v) => setBudgetRange(v as [number, number])}
                    min={0}
                    max={1000}
                    step={25}
                    className="w-full"
                  />
                </div>

                {/* Clear all */}
                {isSearchActive && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearAllFilters}
                    className="w-full text-muted-foreground"
                  >
                    <X className="w-4 h-4 mr-2" />
                    Clear all filters
                  </Button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Results Header */}
        <div className="px-4 py-2 bg-muted/30 border-b border-border/30 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {!isSearchActive && hasLocation && (
              <Sparkles className="w-4 h-4 text-primary" />
            )}
            <span className="text-sm text-muted-foreground">
              {isLoading ? (
                'Loading...'
              ) : isSearchActive ? (
                `${filteredItems.length} result${filteredItems.length !== 1 ? 's' : ''}`
              ) : (
                'Top 10 near you'
              )}
            </span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleRefresh}
            disabled={isFetching}
            className="h-8 px-2"
          >
            <RefreshCw className={`w-4 h-4 ${isFetching ? 'animate-spin' : ''}`} />
          </Button>
        </div>

        {/* Results */}
        <div className="flex-1 overflow-y-auto">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <div className="w-10 h-10 rounded-full border-4 border-primary/30 border-t-primary animate-spin" />
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 px-6 text-center">
              <Package className="w-16 h-16 text-muted-foreground/30 mb-4" />
              <h3 className="text-lg font-semibold mb-2">No items found</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {isSearchActive 
                  ? 'Try adjusting your filters or search terms' 
                  : 'No items available in your area yet'}
              </p>
              {isSearchActive && (
                <Button variant="outline" size="sm" onClick={clearAllFilters}>
                  Clear filters
                </Button>
              )}
            </div>
          ) : (
            <div className="p-4 space-y-3">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
                  className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="flex gap-3 p-3">
                    {/* Photo */}
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                      {item.photos && item.photos.length > 0 ? (
                        <img
                          src={item.photos[0]}
                          alt={item.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Package className="w-8 h-8 text-muted-foreground/30" />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground truncate">{item.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-1">
                        {item.description || 'No description'}
                      </p>
                      
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        <Badge variant="secondary" className="text-xs">
                          {CATEGORY_LABELS[item.category]}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {CONDITION_LABELS[item.condition]}
                        </Badge>
                        {item.distance !== undefined && (
                          <Badge variant="outline" className="text-xs">
                            <MapPin className="w-3 h-3 mr-1" />
                            {formatDistance(item.distance)}
                          </Badge>
                        )}
                        {(item.value_min || item.value_max) && (
                          <Badge variant="outline" className="text-xs text-price">
                            €{item.value_min || 0}-{item.value_max || '?'}
                          </Badge>
                        )}
                      </div>

                      {/* Owner */}
                      <div className="flex items-center gap-2 mt-2">
                        <div className="w-5 h-5 rounded-full overflow-hidden bg-primary/20 flex items-center justify-center text-[10px] font-bold">
                          {item.owner_avatar_url ? (
                            <img src={item.owner_avatar_url} alt="" className="w-full h-full object-cover" />
                          ) : (
                            item.owner_display_name.charAt(0).toUpperCase()
                          )}
                        </div>
                        <span className="text-xs text-muted-foreground truncate">
                          {item.owner_display_name}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}