import { useEffect, useRef, useState, useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { AppLayout } from '@/components/layout/AppLayout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { VerifiedName } from '@/components/ui/verified-name';
import { ArrowLeft, X, Package, Loader2, Sun, Moon, Gamepad2, Smartphone, Shirt, BookOpen, Home, Dumbbell, Filter, AlertTriangle, MapPin } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useDeviceLocation } from '@/hooks/useLocation';
import { useAuth } from '@/hooks/useAuth';
import { useSmartBack } from '@/hooks/useSmartBack';
import { useEntitlements, FREE_LIMITS } from '@/hooks/useEntitlements';
import { Item, ItemCategory, CATEGORY_LABELS, CONDITION_LABELS } from '@/types/database';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { DealInviteButton } from '@/components/deals/DealInviteButton';
import { UpgradePrompt } from '@/components/subscription/UpgradePrompt';
import { toast } from 'sonner';

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
  // Support both focusItemId (new) and itemId (legacy) for backward compatibility
  const focusItemId = searchParams.get('focusItemId') || searchParams.get('itemId');
  const { user } = useAuth();
  const { latitude, longitude, permissionStatus, hasLocation, requestLocation, loading: locationLoading } = useDeviceLocation();
  const goBack = useSmartBack('/');
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
  const [missingCoordsShown, setMissingCoordsShown] = useState(false);
  const { canUse, usage, incrementUsage, isPro } = useEntitlements();

  // Auto-request location on mount (like Search page)
  useEffect(() => {
    if (!hasLocation && !locationLoading && permissionStatus !== 'denied') {
      requestLocation();
    }
  }, [hasLocation, locationLoading, permissionStatus, requestLocation]);

  // Block map access entirely when location is not available
  const locationBlocked = !hasLocation || permissionStatus === 'denied';

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
    trackMapUsage(); // Track usage on filter interaction
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  // Fetch mapbox token
  const { data: mapboxToken, isLoading: tokenLoading, isError: tokenError, refetch: refetchToken } = useQuery({
    queryKey: ['mapbox-token'],
    queryFn: async () => {
      const { data, error } = await supabase.functions.invoke('get-mapbox-token');
      if (error) throw error;
      return data.token as string;
    },
    retry: 2,
  });

  // Helper function to track map usage on actual interaction (not on page load)
  const trackMapUsage = useCallback(() => {
    if (hasTrackedUsage || isPro) return;
    
    // Check limit before tracking
    if (!canUse.mapUses) {
      setShowUpgradePrompt(true);
      return;
    }
    
    incrementUsage('map_uses');
    setHasTrackedUsage(true);
  }, [hasTrackedUsage, isPro, canUse.mapUses, incrementUsage]);

  // Initialize map - center on item if focusItemId is provided, otherwise user location
  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;
    // Need either user location or focus item location
    const focusItem = focusItemId ? items.find(item => item.id === focusItemId) : null;
    const hasUserLocation = latitude && longitude;
    const hasFocusItemLocation = focusItem?.latitude && focusItem?.longitude;
    
    if (!hasUserLocation && !hasFocusItemLocation) return;

    mapboxgl.accessToken = mapboxToken;

    // Determine initial center - prioritize item location if navigating to specific item
    const initialCenter: [number, number] = hasFocusItemLocation
      ? [focusItem.longitude!, focusItem.latitude!]
      : [longitude!, latitude!];
    
    const initialZoom = hasFocusItemLocation ? 15 : 12;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: isDarkMode ? MAP_STYLES.dark : MAP_STYLES.light,
      center: initialCenter,
      zoom: initialZoom,
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add user location marker if available
    if (hasUserLocation) {
      userMarkerRef.current = new mapboxgl.Marker({ color: '#22c55e' })
        .setLngLat([longitude!, latitude!])
        .addTo(map.current);
    }
    
    // If navigating to a specific item, select it
    if (focusItem && hasFocusItemLocation) {
      hasNavigatedToFocusItem.current = true;
      setSelectedItem(focusItem);
    }

    return () => {
      map.current?.remove();
    };
  }, [latitude, longitude, mapboxToken, focusItemId, items, isDarkMode]);

  // Handle theme toggle
  const toggleMapTheme = () => {
    trackMapUsage(); // Track usage on theme toggle interaction
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
        trackMapUsage(); // Track usage on marker interaction
        setSelectedItem(item);
      });

      const marker = new mapboxgl.Marker(el)
        .setLngLat([item.longitude, item.latitude])
        .addTo(map.current!);

      markersRef.current.push(marker);
    });
  }, [filteredItems]);

  // Focus on item from URL param (after map is loaded and items change)
  // Also handle missing coordinates case
  useEffect(() => {
    if (!focusItemId || hasNavigatedToFocusItem.current) return;
    
    // Find the item in our loaded data or try to fetch it
    const focusItem = items.find(item => item.id === focusItemId);
    
    if (focusItem) {
      // Item found - check if it has coordinates
      if (focusItem.latitude && focusItem.longitude) {
        hasNavigatedToFocusItem.current = true;
        setSelectedItem(focusItem);
        // Only fly if map was already initialized (e.g., items loaded later)
        if (map.current?.loaded()) {
          map.current.flyTo({
            center: [focusItem.longitude, focusItem.latitude],
            zoom: 15,
            duration: 1200,
          });
        }
      } else if (!missingCoordsShown) {
        // Item has no coordinates - show toast and don't center on it
        setMissingCoordsShown(true);
        hasNavigatedToFocusItem.current = true;
        toast.error('This item has no location data', {
          description: 'The item owner has not set their location.',
          icon: <AlertTriangle className="w-4 h-4" />,
        });
      }
    }
  }, [focusItemId, items, missingCoordsShown]);

  // Block map access entirely if location permission is denied
  if (locationBlocked) {
    return (
      <AppLayout showNav>
        <div className="flex flex-col items-center justify-center h-[80vh] px-6 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-6"
          >
            <MapPin className="w-12 h-12 text-primary" />
          </motion.div>
          <h2 className="text-2xl font-display font-bold mb-3">Enable Location</h2>
          <p className="text-muted-foreground mb-6 max-w-sm">
            Map view needs your location to show items near you and connect you with local traders.
          </p>
          
          {permissionStatus === 'denied' && (
            <div className="mb-6 p-4 rounded-xl bg-destructive/10 border border-destructive/20 max-w-sm">
              <div className="flex items-center gap-2 text-destructive mb-1">
                <AlertTriangle className="w-4 h-4" />
                <span className="font-medium text-sm">Location Access Denied</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Please enable location in your browser settings and try again.
              </p>
            </div>
          )}

          <Button
            size="lg"
            className="w-full max-w-xs mb-3"
            onClick={requestLocation}
            disabled={locationLoading}
          >
            {locationLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Getting Location...
              </>
            ) : (
              <>
                <MapPin className="w-4 h-4 mr-2" />
                {permissionStatus === 'denied' ? 'Retry Location Access' : 'Allow Location Access'}
              </>
            )}
          </Button>
          
          <Button variant="outline" onClick={goBack} className="w-full max-w-xs">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
          
          <p className="text-xs text-muted-foreground mt-4 max-w-xs">
            Your location is only used to find nearby items and is never shared publicly.
          </p>
        </div>
      </AppLayout>
    );
  }

  if (tokenLoading) {
    return (
      <AppLayout showNav>
        <div className="flex items-center justify-center h-[80vh]">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </AppLayout>
    );
  }

  // Fallback UI when mapbox token fetch fails
  if (tokenError || !mapboxToken) {
    return (
      <AppLayout showNav>
        <div className="flex flex-col items-center justify-center h-[80vh] px-6 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="w-24 h-24 rounded-full bg-destructive/10 flex items-center justify-center mb-6"
          >
            <AlertTriangle className="w-12 h-12 text-destructive" />
          </motion.div>
          <h2 className="text-2xl font-display font-bold mb-3">Map Unavailable</h2>
          <p className="text-muted-foreground mb-6 max-w-sm">
            We couldn't load the map. This might be a temporary issue with the map service.
          </p>
          <Button size="lg" className="w-full max-w-xs mb-3" onClick={() => refetchToken()}>
            Try Again
          </Button>
          <Button variant="outline" onClick={goBack} className="w-full max-w-xs">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
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
              <Button variant="secondary" size="icon" onClick={goBack} className="touch-manipulation">
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

                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold truncate">{selectedItem.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      <VerifiedName 
                        name={selectedItem.owner_display_name} 
                        badgeClassName="w-3.5 h-3.5"
                        userId={selectedItem.user_id}
                        clickable
                      />
                    </p>
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

        {/* Upgrade Prompt - Required (not dismissable) */}
        <UpgradePrompt
          open={showUpgradePrompt}
          onOpenChange={setShowUpgradePrompt}
          feature="map views"
          featureType="map"
          usedCount={usage.mapUses}
          limit={FREE_LIMITS.mapUses}
          required
        />
      </div>
    </AppLayout>
  );
}
