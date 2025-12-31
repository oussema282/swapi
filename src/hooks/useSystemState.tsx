import { createContext, useContext, useReducer, useCallback, ReactNode, useEffect } from 'react';
import { useAuth } from './useAuth';

// ============================================
// SYSTEM STATE TYPES
// ============================================

export type SystemPhase = 
  | 'BOOTSTRAPPING'   // App is initializing
  | 'ACTIVE'          // Normal user interaction
  | 'TRANSITION'      // State change in progress (e.g., upgrading)
  | 'BACKGROUND_ONLY' // Only background jobs should run
  | 'BLOCKED';        // User cannot proceed (e.g., no location)

export type SubscriptionPhase =
  | 'FREE_ACTIVE'     // Free user, within limits
  | 'FREE_LIMITED'    // Free user, some limits reached
  | 'UPGRADING'       // Payment in progress
  | 'PRO_ACTIVE'      // Pro subscription active
  | 'PRO_EXPIRED';    // Pro subscription expired

export type SwipePhase =
  | 'IDLE'           // No swiping happening
  | 'LOADING'        // Fetching cards
  | 'READY'          // Cards available, ready to swipe
  | 'SWIPING'        // Mid-swipe animation
  | 'COMMITTING'     // Persisting swipe to DB
  | 'UNDOING'        // Reverting a swipe
  | 'REFRESHING'     // Silently refreshing card pool
  | 'EXHAUSTED'      // No more cards
  | 'PAUSED';        // Swiping paused (e.g., viewing map)

export type MatchPhase =
  | 'NONE'           // No active match context
  | 'CREATED'        // Match just created
  | 'NEGOTIATING'    // Users are chatting
  | 'READY_TO_COMPLETE' // Both parties ready
  | 'COMPLETED'      // Swap completed
  | 'ABANDONED';     // Match was unmatched

interface SystemState {
  phase: SystemPhase;
  subscription: SubscriptionPhase;
  swipe: SwipePhase;
  match: MatchPhase;
  isInitialized: boolean;
  // Bootstrap readiness flags
  authReady: boolean;
  profileReady: boolean;
  subscriptionReady: boolean;
}

type SystemAction =
  | { type: 'INITIALIZE' }
  | { type: 'AUTH_READY' }
  | { type: 'PROFILE_READY' }
  | { type: 'SUBSCRIPTION_READY' }
  | { type: 'SET_SYSTEM_PHASE'; phase: SystemPhase }
  | { type: 'SET_SUBSCRIPTION_PHASE'; phase: SubscriptionPhase }
  | { type: 'SET_SWIPE_PHASE'; phase: SwipePhase }
  | { type: 'SET_MATCH_PHASE'; phase: MatchPhase }
  | { type: 'UPGRADE_START' }
  | { type: 'UPGRADE_COMPLETE'; isPro: boolean }
  | { type: 'UPGRADE_FAIL' }
  | { type: 'LOCATION_CHECKING' }
  | { type: 'LOCATION_GRANTED' }
  | { type: 'LOCATION_DENIED' }
  | { type: 'LOCATION_RETRY' };

const initialState: SystemState = {
  phase: 'BOOTSTRAPPING',
  subscription: 'FREE_ACTIVE',
  swipe: 'IDLE',
  match: 'NONE',
  isInitialized: false,
  authReady: false,
  profileReady: false,
  subscriptionReady: false,
};

function systemReducer(state: SystemState, action: SystemAction): SystemState {
  switch (action.type) {
    case 'INITIALIZE':
      return {
        ...state,
        phase: 'ACTIVE',
        isInitialized: true,
      };

    case 'AUTH_READY':
      // Auth is ready, but stay in BOOTSTRAPPING until profile and subscription are also ready
      return {
        ...state,
        authReady: true,
      };

    case 'PROFILE_READY':
      return {
        ...state,
        profileReady: true,
      };

    case 'SUBSCRIPTION_READY':
      return {
        ...state,
        subscriptionReady: true,
      };

    case 'SET_SYSTEM_PHASE':
      return { ...state, phase: action.phase };

    case 'SET_SUBSCRIPTION_PHASE':
      return { ...state, subscription: action.phase };

    case 'SET_SWIPE_PHASE':
      return { ...state, swipe: action.phase };

    case 'SET_MATCH_PHASE':
      return { ...state, match: action.phase };

    case 'UPGRADE_START':
      return {
        ...state,
        phase: 'TRANSITION',
        subscription: 'UPGRADING',
      };

    case 'UPGRADE_COMPLETE':
      return {
        ...state,
        phase: 'ACTIVE',
        subscription: action.isPro ? 'PRO_ACTIVE' : 'FREE_ACTIVE',
      };

    case 'UPGRADE_FAIL':
      return {
        ...state,
        phase: 'ACTIVE',
        subscription: 'FREE_ACTIVE',
      };

    case 'LOCATION_CHECKING':
      return {
        ...state,
        phase: 'TRANSITION',
      };

    case 'LOCATION_GRANTED':
      return {
        ...state,
        phase: 'ACTIVE',
        isInitialized: true,
      };

    case 'LOCATION_DENIED':
      return {
        ...state,
        phase: 'BLOCKED',
      };

    case 'LOCATION_RETRY':
      return {
        ...state,
        phase: 'TRANSITION',
      };

    default:
      return state;
  }
}

// ============================================
// CONTEXT
// ============================================

interface SystemStateContextValue {
  state: SystemState;
  dispatch: React.Dispatch<SystemAction>;
  // Convenience actions
  initialize: () => void;
  setSystemPhase: (phase: SystemPhase) => void;
  setSubscriptionPhase: (phase: SubscriptionPhase) => void;
  setSwipePhase: (phase: SwipePhase) => void;
  setMatchPhase: (phase: MatchPhase) => void;
  startUpgrade: () => void;
  completeUpgrade: (isPro: boolean) => void;
  failUpgrade: () => void;
  // Location actions
  checkingLocation: () => void;
  locationGranted: () => void;
  locationDenied: () => void;
  retryLocation: () => void;
  // Bootstrap actions
  markProfileReady: () => void;
  markSubscriptionReady: () => void;
  // State checks
  canSwipe: boolean;
  canUseFeatures: boolean;
  isTransitioning: boolean;
  isPro: boolean;
  isBootstrapping: boolean;
  isBlocked: boolean;
  isFullyBootstrapped: boolean;
}

const SystemStateContext = createContext<SystemStateContextValue | null>(null);

export function SystemStateProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(systemReducer, initialState);
  const { user, profile, loading: authLoading } = useAuth();

  // Mark auth as ready when auth loading completes (for both logged-in and logged-out users)
  useEffect(() => {
    if (!authLoading && !state.authReady) {
      dispatch({ type: 'AUTH_READY' });
    }
  }, [authLoading, state.authReady]);

  // Mark profile as ready when profile is loaded (or user is not logged in)
  useEffect(() => {
    if (state.authReady && !state.profileReady) {
      // If no user, profile is "ready" (N/A)
      // If user exists, wait for profile to load
      if (!user || profile) {
        dispatch({ type: 'PROFILE_READY' });
      }
    }
  }, [state.authReady, state.profileReady, user, profile]);

  const initialize = useCallback(() => {
    dispatch({ type: 'INITIALIZE' });
  }, []);

  const setSystemPhase = useCallback((phase: SystemPhase) => {
    dispatch({ type: 'SET_SYSTEM_PHASE', phase });
  }, []);

  const setSubscriptionPhase = useCallback((phase: SubscriptionPhase) => {
    dispatch({ type: 'SET_SUBSCRIPTION_PHASE', phase });
  }, []);

  const setSwipePhase = useCallback((phase: SwipePhase) => {
    dispatch({ type: 'SET_SWIPE_PHASE', phase });
  }, []);

  const setMatchPhase = useCallback((phase: MatchPhase) => {
    dispatch({ type: 'SET_MATCH_PHASE', phase });
  }, []);

  const startUpgrade = useCallback(() => {
    dispatch({ type: 'UPGRADE_START' });
  }, []);

  const completeUpgrade = useCallback((isPro: boolean) => {
    dispatch({ type: 'UPGRADE_COMPLETE', isPro });
  }, []);

  const failUpgrade = useCallback(() => {
    dispatch({ type: 'UPGRADE_FAIL' });
  }, []);

  const checkingLocation = useCallback(() => {
    dispatch({ type: 'LOCATION_CHECKING' });
  }, []);

  const locationGranted = useCallback(() => {
    dispatch({ type: 'LOCATION_GRANTED' });
  }, []);

  const locationDenied = useCallback(() => {
    dispatch({ type: 'LOCATION_DENIED' });
  }, []);

  const retryLocation = useCallback(() => {
    dispatch({ type: 'LOCATION_RETRY' });
  }, []);

  const markProfileReady = useCallback(() => {
    dispatch({ type: 'PROFILE_READY' });
  }, []);

  const markSubscriptionReady = useCallback(() => {
    dispatch({ type: 'SUBSCRIPTION_READY' });
  }, []);

  // Derived state checks
  const canSwipe = 
    state.phase === 'ACTIVE' && 
    state.swipe !== 'PAUSED' &&
    state.swipe !== 'COMMITTING' &&
    state.swipe !== 'UNDOING';

  const canUseFeatures = 
    state.phase === 'ACTIVE' &&
    state.subscription !== 'UPGRADING';

  const isTransitioning = state.phase === 'TRANSITION';

  const isPro = 
    state.subscription === 'PRO_ACTIVE';

  // BOOTSTRAPPING is true until all required data is loaded
  const isFullyBootstrapped = state.authReady && state.profileReady && state.subscriptionReady;
  const isBootstrapping = state.phase === 'BOOTSTRAPPING' && !isFullyBootstrapped;
  const isBlocked = state.phase === 'BLOCKED';

  const value: SystemStateContextValue = {
    state,
    dispatch,
    initialize,
    setSystemPhase,
    setSubscriptionPhase,
    setSwipePhase,
    setMatchPhase,
    startUpgrade,
    completeUpgrade,
    failUpgrade,
    checkingLocation,
    locationGranted,
    locationDenied,
    retryLocation,
    markProfileReady,
    markSubscriptionReady,
    canSwipe,
    canUseFeatures,
    isTransitioning,
    isPro,
    isBootstrapping,
    isBlocked,
    isFullyBootstrapped,
  };

  return (
    <SystemStateContext.Provider value={value}>
      {children}
    </SystemStateContext.Provider>
  );
}

export function useSystemState() {
  const context = useContext(SystemStateContext);
  if (!context) {
    throw new Error('useSystemState must be used within SystemStateProvider');
  }
  return context;
}
