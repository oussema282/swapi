import { useEffect, useRef, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Loader2, MapPin } from 'lucide-react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface LocationPickerMapProps {
  latitude: number | null;
  longitude: number | null;
  onChange: (lat: number, lng: number) => void;
}

export function LocationPickerMap({ latitude, longitude, onChange }: LocationPickerMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const marker = useRef<mapboxgl.Marker | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Default to Tunisia center
  const defaultLat = latitude ?? 36.8;
  const defaultLng = longitude ?? 10.18;

  useEffect(() => {
    let cancelled = false;

    async function init() {
      try {
        // Fetch Mapbox token
        const { data, error: fnError } = await supabase.functions.invoke('get-mapbox-token');
        if (fnError || !data?.token) throw new Error('Impossible de charger la carte');

        if (cancelled || !mapContainer.current) return;

        mapboxgl.accessToken = data.token;

        // Try to get user's current position as starting point
        let startLat = defaultLat;
        let startLng = defaultLng;

        if (!latitude && !longitude) {
          try {
            const pos = await new Promise<GeolocationPosition>((resolve, reject) => {
              navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 5000 });
            });
            startLat = pos.coords.latitude;
            startLng = pos.coords.longitude;
          } catch {
            // Use default
          }
        }

        if (cancelled || !mapContainer.current) return;

        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [startLng, startLat],
          zoom: 13,
        });

        map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

        // Add draggable marker
        marker.current = new mapboxgl.Marker({ draggable: true, color: 'hsl(var(--primary))' })
          .setLngLat([startLng, startLat])
          .addTo(map.current);

        // If we have a starting position, emit it
        if (latitude === null && longitude === null) {
          onChange(startLat, startLng);
        }

        marker.current.on('dragend', () => {
          const lngLat = marker.current!.getLngLat();
          onChange(lngLat.lat, lngLat.lng);
        });

        // Also allow clicking the map to move the marker
        map.current.on('click', (e) => {
          marker.current?.setLngLat(e.lngLat);
          onChange(e.lngLat.lat, e.lngLat.lng);
        });

        map.current.on('load', () => {
          if (!cancelled) setLoading(false);
        });
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Erreur carte');
          setLoading(false);
        }
      }
    }

    init();

    return () => {
      cancelled = true;
      map.current?.remove();
      map.current = null;
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (error) {
    return (
      <div className="h-[250px] rounded-xl bg-muted flex flex-col items-center justify-center gap-2 text-muted-foreground">
        <MapPin className="w-8 h-8" />
        <p className="text-sm">{error}</p>
      </div>
    );
  }

  return (
    <div className="relative rounded-xl overflow-hidden border border-border">
      {loading && (
        <div className="absolute inset-0 z-10 bg-muted flex items-center justify-center">
          <Loader2 className="w-6 h-6 animate-spin text-primary" />
        </div>
      )}
      <div ref={mapContainer} className="h-[250px] w-full" />
      <p className="text-xs text-muted-foreground text-center py-2 bg-card">
        Faites glisser le marqueur ou cliquez pour définir l'emplacement
      </p>
    </div>
  );
}
