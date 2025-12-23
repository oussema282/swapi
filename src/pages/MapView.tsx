import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { AppLayout } from '@/components/layout/AppLayout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, X, Package, Loader2, Sun, Moon } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useDeviceLocation } from '@/hooks/useLocation';
import { useAuth } from '@/hooks/useAuth';
import { Item, CATEGORY_LABELS, CONDITION_LABELS } from '@/types/database';
import { motion, AnimatePresence } from 'framer-motion';

interface ItemWithOwner extends Item {
  owner_display_name: string;
  owner_avatar_url: string | null;
}

const MAP_STYLES = {
  dark: 'mapbox://styles/mapbox/dark-v11',
  light: 'mapbox://styles/mapbox/light-v11',
};

export default function MapView() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { latitude, longitude } = useDeviceLocation();
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<mapboxgl.Marker[]>([]);
  const userMarkerRef = useRef<mapboxgl.Marker | null>(null);
  const [selectedItem, setSelectedItem] = useState<ItemWithOwner | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Fetch all items with location
  const { data: items = [] } = useQuery({
    queryKey: ['map-items'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('items')
        .select(`
          *,
          profiles!items_user_id_fkey(display_name, avatar_url)
        `)
        .eq('is_active', true)
        .not('latitude', 'is', null)
        .not('longitude', 'is', null);

      if (error) throw error;

      return (data || []).map((item: any) => ({
        ...item,
        owner_display_name: item.profiles?.display_name || 'Unknown',
        owner_avatar_url: item.profiles?.avatar_url || null,
      })) as ItemWithOwner[];
    },
  });

  // Filter out user's own items
  const otherUsersItems = items.filter(item => item.user_id !== user?.id);

  // Fetch mapbox token
  const { data: mapboxToken, isLoading: tokenLoading } = useQuery({
    queryKey: ['mapbox-token'],
    queryFn: async () => {
      const { data, error } = await supabase.functions.invoke('get-mapbox-token');
      if (error) throw error;
      return data.token as string;
    },
  });

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
    setIsDarkMode(!isDarkMode);
    if (map.current) {
      map.current.setStyle(isDarkMode ? MAP_STYLES.light : MAP_STYLES.dark);
    }
  };

  // Add item markers
  useEffect(() => {
    if (!map.current) return;

    // Clear existing markers
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    otherUsersItems.forEach(item => {
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
  }, [otherUsersItems]);

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
                <p className="text-xs text-muted-foreground">{otherUsersItems.length} items near you</p>
              </div>
            </div>
            <Button variant="secondary" size="icon" onClick={toggleMapTheme}>
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
          </div>
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
                    <p className="text-sm text-muted-foreground truncate">{selectedItem.owner_display_name}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      <Badge variant="secondary" className="text-xs">
                        {CATEGORY_LABELS[selectedItem.category]}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {CONDITION_LABELS[selectedItem.condition]}
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AppLayout>
  );
}
