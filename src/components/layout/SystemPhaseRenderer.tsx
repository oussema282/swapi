import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { useSystemState } from '@/hooks/useSystemState';
import { useDeviceLocation } from '@/hooks/useLocation';
import { LocationGate } from '@/components/LocationGate';

interface SystemPhaseRendererProps {
  children: ReactNode;
}

/**
 * Routes that require geo features (Discover, Map) - these are blocked by LocationGate
 * Safe routes (Matches, Chat, Profile, Items, Auth, etc.) bypass LocationGate entirely
 */
const GEO_REQUIRED_ROUTES = ['/discover', '/map', '/search'];

/**
 * Public routes that don't require authentication or system bootstrapping
 * Also includes admin route which handles its own access control
 */
const PUBLIC_ROUTES = ['/', '/auth', '/admin'];

function isGeoRequiredRoute(pathname: string): boolean {
  return GEO_REQUIRED_ROUTES.some(route => {
    if (route === '/discover') return pathname === '/discover';
    return pathname.startsWith(route);
  });
}

function isPublicRoute(pathname: string): boolean {
  return PUBLIC_ROUTES.some(route => pathname === route);
}

/**
 * SystemPhaseRenderer - The single authority for top-level UI rendering.
 * 
 * This component checks SYSTEM_PHASE and renders:
 * - BOOTSTRAPPING: Loading screen (waiting for auth)
 * - TRANSITION: Loading screen (checking location) - ONLY for geo routes
 * - BLOCKED: LocationGate (location permission UI) - ONLY for geo routes
 * - ACTIVE: Children (main application content)
 * - BACKGROUND_ONLY: Children (app visible, background jobs only)
 * 
 * SAFE ROUTES (Matches, Chat, Profile, Items, Auth) bypass LocationGate entirely.
 * They render as soon as user is authenticated and profile is loaded.
 */
export function SystemPhaseRenderer({ children }: SystemPhaseRendererProps) {
  const location = useLocation();
  const { 
    state, 
    isBootstrapping,
    isFullyBootstrapped,
    checkingLocation,
    locationGranted,
    locationDenied,
  } = useSystemState();
  
  const { 
    hasLocation, 
    permissionStatus, 
    loading: locationLoading,
    requestLocation,
  } = useDeviceLocation();

  // Determine if current route requires geo features
  const requiresGeo = isGeoRequiredRoute(location.pathname);
  
  // Determine if current route is public (no auth/bootstrap required)
  const isPublic = isPublicRoute(location.pathname);

  // After fully bootstrapped, automatically check location to transition out of BOOTSTRAPPING
  // BUT only if on a geo-required route
  useEffect(() => {
    // Only proceed when fully bootstrapped and still in BOOTSTRAPPING phase
    if (!isFullyBootstrapped || state.phase !== 'BOOTSTRAPPING') {
      return;
    }

    // If not on a geo-required route, skip location check and go directly to ACTIVE
    if (!requiresGeo) {
      locationGranted();
      return;
    }

    // If we already have location from saved profile, grant immediately
    if (hasLocation && permissionStatus === 'granted') {
      locationGranted();
      return;
    }

    // If permission is already denied, block immediately
    if (permissionStatus === 'denied') {
      locationDenied();
      return;
    }

    // Otherwise, request location (will transition through TRANSITION)
    if (!locationLoading) {
      checkingLocation();
      requestLocation();
    }
  }, [
    isFullyBootstrapped,
    state.phase,
    hasLocation,
    permissionStatus,
    locationLoading,
    requiresGeo,
    checkingLocation,
    locationGranted,
    locationDenied,
    requestLocation,
  ]);

  // Sync location results with system state during TRANSITION
  useEffect(() => {
    if (state.phase !== 'TRANSITION') return;

    if (hasLocation && permissionStatus === 'granted') {
      locationGranted();
    } else if (permissionStatus === 'denied') {
      locationDenied();
    }
  }, [state.phase, hasLocation, permissionStatus, locationGranted, locationDenied]);

  // PUBLIC ROUTES: Render immediately without waiting for bootstrapping
  if (isPublic) {
    return <>{children}</>;
  }

  // BOOTSTRAPPING: Show loading screen while auth initializes
  if (isBootstrapping) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center gap-4"
        >
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
          <p className="text-muted-foreground text-sm">Initializing...</p>
        </motion.div>
      </div>
    );
  }

  // TRANSITION: Show loading screen while checking location - ONLY for geo routes
  if (state.phase === 'TRANSITION' && requiresGeo) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center gap-4"
        >
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
          <p className="text-muted-foreground text-sm">Getting your location...</p>
        </motion.div>
      </div>
    );
  }

  // BLOCKED: Show LocationGate for permission request/retry - ONLY for geo routes
  // Safe routes (Matches, Chat, Profile, etc.) bypass LocationGate entirely
  if (state.phase === 'BLOCKED' && requiresGeo) {
    return <LocationGate />;
  }

  // ACTIVE, BACKGROUND_ONLY, or safe route during BLOCKED/TRANSITION: Render main application content
  return <>{children}</>;
}
