import { useState, useMemo } from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { useAuth } from '@/hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search as SearchIcon, MapPin, Package, Filter, X } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
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

export default function Search() {
  const { user, loading: authLoading } = useAuth();
  const { latitude, longitude, hasLocation, requestLocation, loading: locationLoading } = useDeviceLocation();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ItemCategory | 'all'>('all');
  const [showFilters, setShowFilters] = useState(false);
  const [maxDistance, setMaxDistance] = useState<number | null>(null);

  const { data: items, isLoading } = useQuery({
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
  });

  const filteredItems = useMemo(() => {
    if (!items) return [];

    let filtered = items;

    // Text search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        item =>
          item.title.toLowerCase().includes(query) ||
          item.description?.toLowerCase().includes(query) ||
          item.owner_display_name.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Add distance if we have user location
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
        return item;
      });

      // Filter by max distance if set
      if (maxDistance) {
        filtered = filtered.filter(item => !item.distance || item.distance <= maxDistance);
      }

      // Sort by distance
      filtered = filtered.sort((a, b) => {
        if (a.distance === undefined) return 1;
        if (b.distance === undefined) return -1;
        return a.distance - b.distance;
      });
    }

    return filtered;
  }, [items, searchQuery, selectedCategory, hasLocation, latitude, longitude, maxDistance]);

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

  return (
    <AppLayout>
      <div className="flex flex-col h-full">
        {/* Search Header */}
        <div className="px-4 pt-4 pb-3 bg-background border-b border-border/50 space-y-3">
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search items, categories, or users..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 bg-muted/50"
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
              className="h-12 w-12"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="w-5 h-5" />
            </Button>
          </div>

          {/* Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="space-y-3 overflow-hidden"
              >
                <Select value={selectedCategory} onValueChange={(v) => setSelectedCategory(v as ItemCategory | 'all')}>
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(cat => (
                      <SelectItem key={cat.value} value={cat.value}>
                        {cat.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <div className="flex gap-2">
                  <Button
                    variant={hasLocation ? 'default' : 'outline'}
                    size="sm"
                    className="flex-1"
                    onClick={requestLocation}
                    disabled={locationLoading}
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    {locationLoading ? 'Getting location...' : hasLocation ? 'Location enabled' : 'Enable location'}
                  </Button>
                  
                  {hasLocation && (
                    <Select value={maxDistance?.toString() || 'any'} onValueChange={(v) => setMaxDistance(v === 'any' ? null : parseInt(v))}>
                      <SelectTrigger className="w-32">
                        <SelectValue placeholder="Distance" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any distance</SelectItem>
                        <SelectItem value="5">Within 5km</SelectItem>
                        <SelectItem value="10">Within 10km</SelectItem>
                        <SelectItem value="25">Within 25km</SelectItem>
                        <SelectItem value="50">Within 50km</SelectItem>
                        <SelectItem value="100">Within 100km</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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
              <p className="text-muted-foreground text-sm">
                {searchQuery ? 'Try a different search term' : 'No items available in your area'}
              </p>
            </div>
          ) : (
            <div className="p-4 space-y-3">
              <p className="text-sm text-muted-foreground">
                {filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''} found
              </p>
              
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-card rounded-xl border border-border overflow-hidden"
                >
                  <div className="flex gap-3 p-3">
                    {/* Photo */}
                    <div className="w-20 h-20 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                      {item.photos && item.photos.length > 0 ? (
                        <img
                          src={item.photos[0]}
                          alt={item.title}
                          className="w-full h-full object-cover"
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
