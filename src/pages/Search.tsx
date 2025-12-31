import { useState, useMemo, useEffect, useCallback, useRef } from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { useAuth } from '@/hooks/useAuth';
import { useEntitlements, FREE_LIMITS } from '@/hooks/useEntitlements';
import { Navigate, useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { VerifiedName } from '@/components/ui/verified-name';
import { UpgradePrompt } from '@/components/subscription/UpgradePrompt';
import { Search as SearchIcon, MapPin, Package, Filter, X, DollarSign, Sparkles, RefreshCw, TrendingUp, Tag, Clock } from 'lucide-react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { CATEGORY_LABELS, CONDITION_LABELS, Item, ItemCategory } from '@/types/database';
import { useDeviceLocation, calculateDistance, formatDistance } from '@/hooks/useLocation';
import { motion, AnimatePresence } from 'framer-motion';
import { DealInviteButton } from '@/components/deals/DealInviteButton';
import { ExpandableDescription } from '@/components/search/ExpandableDescription';

interface SearchItem extends Item {
  owner_display_name: string;
  owner_avatar_url: string | null;
  owner_latitude: number | null;
  owner_longitude: number | null;
  owner_user_id: string;
  distance?: number;
}

interface Suggestion {
  type: 'item' | 'category' | 'popular';
  text: string;
  icon: 'item' | 'category' | 'trending';
  category?: ItemCategory;
  // Extended item data for rich previews
  itemData?: {
    id: string;
    photo: string | null;
    valueMin: number | null;
    valueMax: number | null;
    latitude: number | null;
    longitude: number | null;
    distance?: number;
  };
}

const categories: { value: ItemCategory; label: string }[] = [
  { value: 'games', label: 'Games' },
  { value: 'electronics', label: 'Electronics' },
  { value: 'clothes', label: 'Clothes' },
  { value: 'books', label: 'Books' },
  { value: 'home_garden', label: 'Home & Garden' },
  { value: 'sports', label: 'Sports' },
  { value: 'other', label: 'Other' },
];

const distanceOptions = [
  { value: 'any', label: 'Any' },
  { value: '5', label: '5km' },
  { value: '10', label: '10km' },
  { value: '25', label: '25km' },
  { value: '50', label: '50km' },
  { value: '100', label: '100km' },
];

const popularSearches = [
  'PlayStation Controller',
  'iPhone',
  'Nike Shoes',
  'Books',
  'Vintage',
];

export default function Search() {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { latitude, longitude, hasLocation, requestLocation, loading: locationLoading } = useDeviceLocation();
  const queryClient = useQueryClient();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<ItemCategory[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [maxDistance, setMaxDistance] = useState<string>('any');
  const [budgetRange, setBudgetRange] = useState<[number, number]>([0, 1000]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  
  // Autocomplete state
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [showUpgradePrompt, setShowUpgradePrompt] = useState(false);
  const [searchCount, setSearchCount] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  const { canUse, usage, incrementUsage, isPro } = useEntitlements();

  // Auto-request location on mount
  useEffect(() => {
    if (!hasLocation && !locationLoading) {
      requestLocation();
    }
  }, [hasLocation, locationLoading, requestLocation]);

  // Debounce search query for autocomplete
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Close suggestions on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        inputRef.current && !inputRef.current.contains(e.target as Node) &&
        suggestionsRef.current && !suggestionsRef.current.contains(e.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
        owner_user_id: item.user_id,
      }));
    },
    enabled: !!user,
    refetchInterval: 30000,
  });

  // Generate suggestions based on debounced query
  useEffect(() => {
    if (debouncedQuery.length < 2) {
      setSuggestions([]);
      return;
    }

    const query = debouncedQuery.toLowerCase();
    const newSuggestions: Suggestion[] = [];

    // Category matches
    categories.forEach(cat => {
      if (cat.label.toLowerCase().includes(query) && newSuggestions.length < 5) {
        newSuggestions.push({
          type: 'category',
          text: cat.label,
          icon: 'category',
          category: cat.value,
        });
      }
    });

    // Item title matches - with full item data for rich previews
    if (items) {
      // Calculate distance for items if we have location
      const itemsWithDistance = items.map(item => {
        let distance: number | undefined;
        if (hasLocation && latitude && longitude && item.owner_latitude && item.owner_longitude) {
          distance = calculateDistance(latitude, longitude, item.owner_latitude, item.owner_longitude);
        }
        return { ...item, distance };
      });

      const titleMatches = itemsWithDistance
        .filter(item => item.title.toLowerCase().includes(query))
        .slice(0, 5 - newSuggestions.length);
      
      titleMatches.forEach(item => {
        if (!newSuggestions.some(s => s.text.toLowerCase() === item.title.toLowerCase())) {
          newSuggestions.push({
            type: 'item',
            text: item.title,
            icon: 'item',
            itemData: {
              id: item.id,
              photo: item.photos && item.photos.length > 0 ? item.photos[0] : null,
              valueMin: item.value_min,
              valueMax: item.value_max,
              latitude: item.latitude,
              longitude: item.longitude,
              distance: item.distance,
            },
          });
        }
      });
    }

    // Popular search matches
    popularSearches.forEach(search => {
      if (search.toLowerCase().includes(query) && newSuggestions.length < 5) {
        if (!newSuggestions.some(s => s.text.toLowerCase() === search.toLowerCase())) {
          newSuggestions.push({
            type: 'popular',
            text: search,
            icon: 'trending',
          });
        }
      }
    });

    setSuggestions(newSuggestions.slice(0, 5));
    setSelectedSuggestionIndex(-1);
  }, [debouncedQuery, items, hasLocation, latitude, longitude]);

  // Determine if search/filters are active
  useEffect(() => {
    const hasSearch = searchQuery.trim().length > 0;
    const hasCategory = selectedCategories.length > 0;
    const hasDistance = maxDistance !== 'any';
    const hasBudget = budgetRange[0] > 0 || budgetRange[1] < 1000;
    setIsSearchActive(hasSearch || hasCategory || hasDistance || hasBudget);
  }, [searchQuery, selectedCategories, maxDistance, budgetRange]);

  const filteredItems = useMemo(() => {
    if (!items) return [];

    let filtered = items;

    // Add distance calculation first
    if (hasLocation && latitude && longitude) {
      filtered = filtered.map(item => {
        if (item.owner_latitude && item.owner_longitude) {
          return {
            ...item,
            distance: calculateDistance(latitude, longitude, item.owner_latitude, item.owner_longitude),
          };
        }
        return { ...item, distance: undefined };
      });
    }

    // Text search
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

    // Multi-category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(item => selectedCategories.includes(item.category));
    }

    // Distance filter
    if (maxDistance !== 'any' && hasLocation) {
      const maxDist = parseInt(maxDistance);
      filtered = filtered.filter(item => item.distance !== undefined && item.distance <= maxDist);
    }

    // Budget filter
    if (budgetRange[0] > 0 || budgetRange[1] < 1000) {
      filtered = filtered.filter(item => {
        const itemMin = item.value_min || 0;
        const itemMax = item.value_max || 1000;
        return itemMin <= budgetRange[1] && itemMax >= budgetRange[0];
      });
    }

    // Sort by distance
    if (hasLocation) {
      filtered = filtered.sort((a, b) => {
        if (a.distance === undefined && b.distance === undefined) return 0;
        if (a.distance === undefined) return 1;
        if (b.distance === undefined) return -1;
        return a.distance - b.distance;
      });
    }

    if (!isSearchActive) {
      return filtered.slice(0, 10);
    }

    return filtered;
  }, [items, searchQuery, selectedCategories, hasLocation, latitude, longitude, maxDistance, budgetRange, isSearchActive]);

  const handleRefresh = useCallback(() => {
    refetch();
  }, [refetch]);

  const clearAllFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategories([]);
    setMaxDistance('any');
    setBudgetRange([0, 1000]);
    setShowSuggestions(false);
  }, []);

  const toggleCategory = useCallback((cat: ItemCategory) => {
    setSelectedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  }, []);

  const handleSuggestionClick = useCallback(async (suggestion: Suggestion) => {
    // Check search limit for free users
    if (!canUse.searches) {
      setShowUpgradePrompt(true);
      setShowSuggestions(false);
      return;
    }

    // Increment usage for free users
    if (!isPro) {
      await incrementUsage('searches');
    }

    if (suggestion.type === 'category' && suggestion.category) {
      if (!selectedCategories.includes(suggestion.category)) {
        setSelectedCategories(prev => [...prev, suggestion.category!]);
      }
      setSearchQuery('');
    } else {
      setSearchQuery(suggestion.text);
    }
    setShowSuggestions(false);
    inputRef.current?.blur();
  }, [selectedCategories, canUse.searches, isPro, incrementUsage]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!showSuggestions || suggestions.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedSuggestionIndex(prev => 
          prev < suggestions.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedSuggestionIndex(prev => 
          prev > 0 ? prev - 1 : suggestions.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedSuggestionIndex >= 0) {
          handleSuggestionClick(suggestions[selectedSuggestionIndex]);
        } else {
          setShowSuggestions(false);
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        break;
    }
  }, [showSuggestions, suggestions, selectedSuggestionIndex, handleSuggestionClick]);

  const highlightMatch = (text: string, query: string) => {
    if (!query.trim()) return text;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) => 
      regex.test(part) ? <mark key={i} className="bg-primary/20 text-primary font-medium">{part}</mark> : part
    );
  };

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
    selectedCategories.length > 0,
    maxDistance !== 'any',
    budgetRange[0] > 0 || budgetRange[1] < 1000,
  ].filter(Boolean).length;

  return (
    <AppLayout>
      <div className="flex flex-col h-full">
        {/* Search Header */}
        <div className="px-4 pt-4 pb-3 bg-background border-b border-border/50 space-y-3">
          {/* Search input with autocomplete */}
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground z-10" />
              <Input
                ref={inputRef}
                placeholder="Search items, categories, users..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (e.target.value.length >= 2) {
                    setShowSuggestions(true);
                  } else {
                    setShowSuggestions(false);
                  }
                }}
                onFocus={() => {
                  if (searchQuery.length >= 2) {
                    setShowSuggestions(true);
                  }
                }}
                onKeyDown={handleKeyDown}
                className="pl-10 pr-10 h-12 bg-muted/50 text-base"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setShowSuggestions(false);
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground z-10"
                >
                  <X className="w-4 h-4" />
                </button>
              )}

              {/* Autocomplete dropdown */}
              <AnimatePresence>
                {showSuggestions && suggestions.length > 0 && (
                  <motion.div
                    ref={suggestionsRef}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-xl shadow-lg overflow-hidden z-50"
                  >
                    {suggestions.map((suggestion, index) => (
                      <button
                        key={`${suggestion.type}-${suggestion.text}-${suggestion.itemData?.id || index}`}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 text-left transition-colors ${
                          index === selectedSuggestionIndex
                            ? 'bg-primary/10'
                            : 'hover:bg-muted/50'
                        }`}
                      >
                        {/* Thumbnail or Icon - Fixed 40x40 */}
                        <div className="w-10 h-10 rounded-lg flex-shrink-0 overflow-hidden">
                          {suggestion.itemData?.photo ? (
                            <img 
                              src={suggestion.itemData.photo} 
                              alt="" 
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className={`w-full h-full flex items-center justify-center ${
                              suggestion.icon === 'category' ? 'bg-secondary/20 text-secondary' :
                              suggestion.icon === 'trending' ? 'bg-primary/20 text-primary' :
                              'bg-muted text-muted-foreground'
                            }`}>
                              {suggestion.icon === 'category' && <Tag className="w-4 h-4" />}
                              {suggestion.icon === 'trending' && <TrendingUp className="w-4 h-4" />}
                              {suggestion.icon === 'item' && <Package className="w-4 h-4" />}
                            </div>
                          )}
                        </div>
                        
                        {/* Content - with line clamp */}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">
                            {highlightMatch(suggestion.text, searchQuery)}
                          </p>
                          <p className="text-xs text-muted-foreground truncate">
                            {suggestion.type === 'category' ? 'Category' : 
                             suggestion.type === 'popular' ? 'Popular search' : 'Item'}
                          </p>
                        </div>
                        
                        {/* Fixed metadata column - icons/badges */}
                        <div className="flex items-center gap-1.5 flex-shrink-0">
                          {suggestion.itemData?.distance !== undefined && (
                            <Badge variant="outline" className="text-[10px] py-0 px-1.5 flex items-center gap-0.5">
                              <MapPin className="w-2.5 h-2.5" />
                              {formatDistance(suggestion.itemData.distance)}
                            </Badge>
                          )}
                          {suggestion.itemData?.valueMin !== null && suggestion.itemData?.valueMin !== undefined && (
                            <Badge className="text-[10px] py-0 px-1.5 bg-price/15 text-price border-price/30">
                              €{suggestion.itemData.valueMin}
                            </Badge>
                          )}
                          {suggestion.itemData?.latitude && suggestion.itemData?.longitude && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                navigate(`/map?focusItemId=${suggestion.itemData!.id}`);
                              }}
                              className="p-1 rounded-full hover:bg-muted transition-colors"
                              title="View on map"
                            >
                              <MapPin className="w-3.5 h-3.5 text-primary" />
                            </button>
                          )}
                        </div>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
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

          {/* Selected categories (multi-select chips) */}
          {selectedCategories.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {selectedCategories.map(cat => (
                <Badge
                  key={cat}
                  variant="default"
                  className="pl-2 pr-1 py-1 gap-1 cursor-pointer"
                  onClick={() => toggleCategory(cat)}
                >
                  {CATEGORY_LABELS[cat]}
                  <X className="w-3 h-3" />
                </Badge>
              ))}
              <button
                onClick={() => setSelectedCategories([])}
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                Clear all
              </button>
            </div>
          )}

          {/* Category pills (multi-select) */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => toggleCategory(cat.value)}
                className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-all border ${
                  selectedCategories.includes(cat.value)
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-background text-muted-foreground border-border hover:border-primary/50'
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
                      <Button variant="ghost" size="sm" onClick={requestLocation} disabled={locationLoading} className="text-xs">
                        {locationLoading ? 'Getting...' : 'Enable location'}
                      </Button>
                    )}
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {distanceOptions.map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => setMaxDistance(opt.value)}
                        disabled={!hasLocation && opt.value !== 'any'}
                        className={`px-3 py-2 rounded-lg text-xs transition-all ${
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
                    Value: €{budgetRange[0]} - €{budgetRange[1] >= 1000 ? '1000+' : budgetRange[1]}
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

                {isSearchActive && (
                  <Button variant="ghost" size="sm" onClick={clearAllFilters} className="w-full text-muted-foreground">
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
            {!isSearchActive && hasLocation && <Sparkles className="w-4 h-4 text-primary" />}
            <span className="text-sm text-muted-foreground">
              {isLoading ? 'Loading...' : isSearchActive ? `${filteredItems.length} result${filteredItems.length !== 1 ? 's' : ''}` : 'Top 10 near you'}
            </span>
          </div>
          <Button variant="ghost" size="sm" onClick={handleRefresh} disabled={isFetching} className="h-8 px-2">
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
                {isSearchActive ? 'Try adjusting your filters or search terms' : 'No items available in your area yet'}
              </p>
              {isSearchActive && (
                <Button variant="outline" size="sm" onClick={clearAllFilters}>Clear filters</Button>
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
                  className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => navigate(`/map?focusItemId=${item.id}`)}
                >
                  <div className="flex gap-3 p-3">
                    {/* Fixed size image */}
                    <div className="w-24 h-24 rounded-xl overflow-hidden bg-muted flex-shrink-0">
                      {item.photos && item.photos.length > 0 ? (
                        <img src={item.photos[0]} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Package className="w-10 h-10 text-muted-foreground/30" />
                        </div>
                      )}
                    </div>
                    
                    {/* Content with fixed structure */}
                    <div className="flex-1 min-w-0 flex flex-col">
                      {/* Title - always single line */}
                      <h3 className="font-semibold text-foreground truncate text-base">{item.title}</h3>
                      
                      {/* Expandable Description */}
                      <ExpandableDescription 
                        description={item.description || 'No description'} 
                        maxLines={2}
                        className="min-h-[2.5rem]"
                      />
                      
                      {/* Metadata row - always at same position */}
                      <div className="flex flex-wrap items-center gap-1.5 mt-auto pt-1">
                        <Badge variant="secondary" className="text-xs py-0.5">{CATEGORY_LABELS[item.category]}</Badge>
                        {item.distance !== undefined && (
                          <Badge variant="outline" className="text-xs py-0.5 flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {formatDistance(item.distance)}
                          </Badge>
                        )}
                        {(item.value_min || item.value_max) && (
                          <Badge className="text-xs py-0.5 bg-price/15 text-price border-price/30 font-semibold">€{item.value_min || 0}-{item.value_max || '?'}</Badge>
                        )}
                      </div>
                    </div>
                    
                    {/* Action column - fixed right */}
                    <div className="flex flex-col items-end justify-between py-0.5 flex-shrink-0">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/user/${item.owner_user_id}`);
                        }}
                        className="w-6 h-6 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-[10px] font-bold ring-1 ring-border hover:ring-primary transition-all"
                        title={`View ${item.owner_display_name}'s profile`}
                      >
                        {item.owner_avatar_url ? (
                          <img src={item.owner_avatar_url} alt="" className="w-full h-full object-cover" />
                        ) : (
                          <span className="text-muted-foreground">{item.owner_display_name.charAt(0).toUpperCase()}</span>
                        )}
                      </button>
                      <DealInviteButton 
                        targetItemId={item.id} 
                        targetItemTitle={item.title}
                        iconOnly
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Upgrade Prompt */}
      <UpgradePrompt
        open={showUpgradePrompt}
        onOpenChange={setShowUpgradePrompt}
        feature="searches"
        featureType="search"
        usedCount={usage.searches}
        limit={FREE_LIMITS.searches}
      />
    </AppLayout>
  );
}