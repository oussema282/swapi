import { useEffect, useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { AppLayout } from '@/components/layout/AppLayout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { VerifiedName } from '@/components/ui/verified-name';
import { ArrowLeft, X, Package, Loader2, Sun, Moon, Gamepad2, Smartphone, Shirt, BookOpen, Home, Dumbbell, Filter } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useDeviceLocation } from '@/hooks/useLocation';
import { useAuth } from '@/hooks/useAuth';
import { useSubscription, FREE_LIMITS } from '@/hooks/useSubscription';
import { Item, ItemCategory, CATEGORY_LABELS, CONDITION_LABELS } from '@/types/database';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { DealInviteButton } from '@/components/deals/DealInviteButton';
import { UpgradePrompt } from '@/components/subscription/UpgradePrompt';

interface ItemWithOwner extends Item {
  owner_display_name: string;
  owner_avatar_url: string | null;
}

const MAP_STYLES = {
  dark: 'mapbox://styles/mapbox/dark-v11',
  light: 'mapbox://styles/mapbox/light-v11',
};

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

export default function MapView() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const focusItemId = searchParams.get('itemId');
  const { user } = useAuth();
  const { latitude, longitude } = useDeviceLocation();
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const userMarkerRef = useRef<mapboxgl.Marker | null>(null);
  const [selectedItem, setSelectedItem] = useState<ItemWithOwner | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('map-theme');
    return saved ? saved === 'dark' : false; // Default to light mode
  });
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<ItemCategory[]>([]);
  const [showUpgradePrompt, setShowUpgradePrompt] = useState(false);
  const [hasTrackedUsage, setHasTrackedUsage] = useState(false);
  const hasNavigatedToFocusItem = useRef(false);
  const { canUse, usage, incrementUsage, isPro } = useSubscription();

  // Fetch completed swap item IDs to exclude from map
  const { data: completedItemIds = [] } = useQuery({
    queryKey: ['completed-swap-items'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('matches')
        .select('item_a_id, item_b_id')
        .eq('is_completed', true);

      if (error) throw error;
      
      // Get all item IDs that have been swapped
      const itemIds: string[] = [];
      data?.forEach(match => {
        itemIds.push(match.item_a_id, match.item_b_id);
      });
      return [...new Set(itemIds)];
    },
  });

  // Fetch all items with location (excluding completed swaps)
  const { data: items = [] } = useQuery({
    queryKey: ['map-items', completedItemIds],
    queryFn: async () => {
      // First get items
      let query = supabase
        .from('items')
        .select('*')
        .eq('is_active', true)
        .not('latitude', 'is', null)
        .not('longitude', 'is', null);

      const { data: itemsData, error: itemsError } = await query;

      if (itemsError) throw itemsError;
      if (!itemsData?.length) return [];

      // Filter out completed swap items
      const filteredItems = itemsData.filter(item => !completedItemIds.includes(item.id));

      // Get unique user IDs
      const userIds = [...new Set(filteredItems.map(item => item.user_id))];
      
      // Fetch profiles for those users
      const { data: profilesData } = await supabase
        .from('profiles')
        .select('user_id, display_name, avatar_url')
        .in('user_id', userIds);

      const profilesMap = new Map(profilesData?.map(p => [p.user_id, p]) || []);

      return filteredItems.map((item: any) => {
        const profile = profilesMap.get(item.user_id);
        return {
          ...item,
          owner_display_name: profile?.display_name || 'Unknown',
          owner_avatar_url: profile?.avatar_url || null,
        };
      }) as ItemWithOwner[];
    },
    enabled: completedItemIds !== undefined,
  });

  // Filter items by category and exclude user's own items
  const filteredItems = items.filter(item => {
    if (item.user_id === user?.id) return false;
    if (selectedCategories.length === 0) return true;
    return selectedCategories.includes(item.category);
  });

  const toggleCategory = (category: ItemCategory) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  // Fetch mapbox token
  const { data: mapboxToken, isLoading: tokenLoading } = useQuery({
    queryKey: ['mapbox-token'],
    queryFn: async () => {
      const { data, error } = await supabase.functions.invoke('get-mapbox-token');
      if (error) throw error;
      return data.token as string;
    },
  });

  // Track map usage on mount (for free users)
  useEffect(() => {
    if (hasTrackedUsage || isPro) return;
    
    // Check limit before tracking
    if (!canUse.mapUses) {
      setShowUpgradePrompt(true);
      return;
    }
    
    incrementUsage('map_uses');
    setHasTrackedUsage(true);
  }, [hasTrackedUsage, isPro, canUse.mapUses, incrementUsage]);

  // Initialize map
  useEffect(() => {
    if (!mapContainer.current || !latitude || !longitude || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: isDarkMode ? MAP_STYLES.dark : MAP_STYLES.light,
      center: [longitude, latitude],
      zoom: 12,
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add user location marker
    userMarkerRef.current = new mapboxgl.Marker({ color: '#22c55e' })
      .setLngLat([longitude, latitude])
      .addTo(map.current);

    return () => {
      map.current?.remove();
    };
  }, [latitude, longitude, mapboxToken]);

  // Handle theme toggle
  const toggleMapTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('map-theme', newMode ? 'dark' : 'light');
    if (map.current) {
      map.current.setStyle(newMode ? MAP_STYLES.dark : MAP_STYLES.light);
    }
  };

  // Add item markers
  useEffect(() => {
    if (!map.current) return;

    // Clear existing markers
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    filteredItems.forEach(item => {
      if (!item.latitude || !item.longitude) return;

      // Create custom marker element
      const el = document.createElement('div');
      el.className = 'item-marker';
      el.style.cssText = `
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: hsl(var(--primary));
        border: 3px solid hsl(var(--background));
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        overflow: hidden;
      `;

      if (item.photos && item.photos.length > 0) {
        const img = document.createElement('img');
        img.src = item.photos[0];
        img.style.cssText = 'width: 100%; height: 100%; object-fit: cover;';
        el.appendChild(img);
      }

      el.addEventListener('click', () => {
        setSelectedItem(item);
      });

      const marker = new mapboxgl.Marker(el)
        .setLngLat([item.longitude, item.latitude])
        .addTo(map.current!);

      markersRef.current.push(marker);
    });
  }, [filteredItems]);

  // Focus on item from URL param
  useEffect(() => {
    if (!focusItemId || !map.current || hasNavigatedToFocusItem.current) return;
    
    const focusItem = items.find(item => item.id === focusItemId);
    if (focusItem && focusItem.latitude && focusItem.longitude) {
      hasNavigatedToFocusItem.current = true;
      setSelectedItem(focusItem);
      map.current.flyTo({
        center: [focusItem.longitude, focusItem.latitude],
        zoom: 15,
        duration: 1500,
      });
    }
  }, [focusItemId, items]);

  if (tokenLoading) {
    return (
      <AppLayout showNav>
        <div className="flex items-center justify-center h-[80vh]">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout showNav>
      <div className="relative h-[calc(100dvh-5rem)]">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-10 p-4 bg-gradient-to-b from-background to-transparent">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="secondary" size="icon" onClick={() => navigate(-1)}>
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="text-lg font-display font-bold">Nearby Items</h1>
                <p className="text-xs text-muted-foreground">{filteredItems.length} items near you</p>
              </div>
            </div>
            <div className="flex gap-2 mr-12">
              <Button 
                variant={showFilters ? 'default' : 'secondary'} 
                size="icon" 
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="w-5 h-5" />
              </Button>
              <Button variant="secondary" size="icon" onClick={toggleMapTheme}>
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
            </div>
          </div>

          {/* Category Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden mt-3"
              >
                <div className="flex flex-wrap gap-2">
                  {ALL_CATEGORIES.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategories.includes(category) ? 'default' : 'secondary'}
                      size="sm"
                      onClick={() => toggleCategory(category)}
                      className={cn(
                        'flex items-center gap-1.5',
                        selectedCategories.includes(category) && 'ring-2 ring-primary/50'
                      )}
                    >
                      {CATEGORY_ICONS[category]}
                      <span className="text-xs">{CATEGORY_LABELS[category]}</span>
                    </Button>
                  ))}
                  {selectedCategories.length > 0 && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedCategories([])}
                      className="text-xs"
                    >
                      Clear All
                    </Button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Map */}
        <div ref={mapContainer} className="absolute inset-0" />

        {/* Selected Item Card */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 200, opacity: 0 }}
              className="absolute bottom-6 left-4 right-4 z-10"
            >
              <Card className="p-4 relative">
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-2 right-2 p-1 rounded-full hover:bg-muted"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="flex gap-4">
                  {/* Photo */}
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-muted flex-shrink-0">
                    {selectedItem.photos && selectedItem.photos.length > 0 ? (
                      <img
                        src={selectedItem.photos[0]}
                        alt={selectedItem.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Package className="w-8 h-8 text-muted-foreground" />
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold truncate">{selectedItem.title}</h3>
                    <p className="text-sm text-muted-foreground"><VerifiedName name={selectedItem.owner_display_name} badgeClassName="w-3.5 h-3.5" /></p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      <Badge variant="secondary" className="text-xs">
                        {CATEGORY_LABELS[selectedItem.category]}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {CONDITION_LABELS[selectedItem.condition]}
                      </Badge>
                    </div>
                    <div className="mt-3">
                      <DealInviteButton 
                        targetItemId={selectedItem.id}
                        targetItemTitle={selectedItem.title}
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Upgrade Prompt */}
        <UpgradePrompt
          open={showUpgradePrompt}
          onOpenChange={setShowUpgradePrompt}
          feature="map views"
          usedCount={usage.mapUses}
          limit={FREE_LIMITS.mapUses}
        />
      </div>
    </AppLayout>
  );
}
