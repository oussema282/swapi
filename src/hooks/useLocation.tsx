import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { toast } from 'sonner';

interface LocationState {
  latitude: number | null;
  longitude: number | null;
  loading: boolean;
  error: string | null;
  permissionStatus: PermissionState | null;
}

export function useDeviceLocation() {
  const { user } = useAuth();
  const [location, setLocation] = useState<LocationState>({
    latitude: null,
    longitude: null,
    loading: false,
    error: null,
    permissionStatus: null,
  });

  const requestLocation = useCallback(async () => {
    if (!navigator.geolocation) {
      setLocation(prev => ({
        ...prev,
        error: 'Geolocation is not supported by your browser',
      }));
      return;
    }

    setLocation(prev => ({ ...prev, loading: true, error: null }));

    try {
      // Check permission status
      if (navigator.permissions) {
        const permission = await navigator.permissions.query({ name: 'geolocation' });
        setLocation(prev => ({ ...prev, permissionStatus: permission.state }));
      }

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          
          setLocation({
            latitude,
            longitude,
            loading: false,
            error: null,
            permissionStatus: 'granted',
          });

          // Save to user profile if logged in
          if (user) {
            await supabase
              .from('profiles')
              .update({ latitude, longitude })
              .eq('user_id', user.id);
          }

          toast.success('Location updated');
        },
        (error) => {
          let errorMessage = 'Unable to get location';
          if (error.code === error.PERMISSION_DENIED) {
            errorMessage = 'Location permission denied';
          } else if (error.code === error.POSITION_UNAVAILABLE) {
            errorMessage = 'Location unavailable';
          } else if (error.code === error.TIMEOUT) {
            errorMessage = 'Location request timed out';
          }
          
          setLocation(prev => ({
            ...prev,
            loading: false,
            error: errorMessage,
            permissionStatus: 'denied',
          }));
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 300000, // 5 minutes cache
        }
      );
    } catch (err) {
      setLocation(prev => ({
        ...prev,
        loading: false,
        error: 'Error requesting location',
      }));
    }
  }, [user]);

  // Load saved location from profile on mount
  useEffect(() => {
    const loadSavedLocation = async () => {
      if (!user) return;

      const { data: profile } = await supabase
        .from('profiles')
        .select('latitude, longitude')
        .eq('user_id', user.id)
        .single();

      if (profile?.latitude && profile?.longitude) {
        setLocation(prev => ({
          ...prev,
          latitude: profile.latitude,
          longitude: profile.longitude,
        }));
      }
    };

    loadSavedLocation();
  }, [user]);

  return {
    ...location,
    requestLocation,
    hasLocation: location.latitude !== null && location.longitude !== null,
  };
}

// Calculate distance between two coordinates in km
export function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export function formatDistance(km: number): string {
  if (km < 1) {
    return `${Math.round(km * 1000)}m`;
  }
  if (km < 10) {
    return `${km.toFixed(1)}km`;
  }
  return `${Math.round(km)}km`;
}
