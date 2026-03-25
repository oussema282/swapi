import { useEffect, useRef, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Loader2, MapPin } from 'lucide-react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';

interface LocationPickerMapProps {
  latitude: number | null;
  longitude: number | null;
  onChange: (lat: number, lng: number) => void;
}

const TUNISIA_BOUNDS: [[number, number], [number, number]] = [[7.5, 30.2], [11.6, 37.5]];
const TUNISIA_CENTER: [number, number] = [33.85, 9.55]; // [lat, lng]

function isInsideTunisia(lat: number, lng: number): boolean {
  return lng >= 7.5 && lng <= 11.6 && lat >= 30.2 && lat <= 37.5;
}

export function LocationPickerMap({ latitude, longitude, onChange }: LocationPickerMapProps) {
  const { t } = useTranslation();
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const marker = useRef<mapboxgl.Marker | null>(null);
  const lastValidPos = useRef<[number, number]>([TUNISIA_CENTER[0], TUNISIA_CENTER[1]]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Default to Tunisia center
  const defaultLat = latitude ?? TUNISIA_CENTER[0];
  const defaultLng = longitude ?? TUNISIA_CENTER[1];

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

        // Clamp starting position to Tunisia
        if (!isInsideTunisia(startLat, startLng)) {
          startLat = TUNISIA_CENTER[0];
          startLng = TUNISIA_CENTER[1];
        }

        if (cancelled || !mapContainer.current) return;

        lastValidPos.current = [startLat, startLng];

        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [startLng, startLat],
          zoom: 13,
          maxBounds: TUNISIA_BOUNDS,
          minZoom: 6,
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
          if (isInsideTunisia(lngLat.lat, lngLat.lng)) {
            lastValidPos.current = [lngLat.lat, lngLat.lng];
            onChange(lngLat.lat, lngLat.lng);
          } else {
            toast.error(t('map.outsideTunisia'));
            marker.current!.setLngLat([lastValidPos.current[1], lastValidPos.current[0]]);
          }
        });

        // Also allow clicking the map to move the marker
        map.current.on('click', (e) => {
          if (isInsideTunisia(e.lngLat.lat, e.lngLat.lng)) {
            lastValidPos.current = [e.lngLat.lat, e.lngLat.lng];
            marker.current?.setLngLat(e.lngLat);
            onChange(e.lngLat.lat, e.lngLat.lng);
          } else {
            toast.error(t('map.outsideTunisia'));
          }
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
