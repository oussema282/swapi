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
}

type SystemAction =
  | { type: 'INITIALIZE' }
  | { type: 'SET_SYSTEM_PHASE'; phase: SystemPhase }
  | { type: 'SET_SUBSCRIPTION_PHASE'; phase: SubscriptionPhase }
  | { type: 'SET_SWIPE_PHASE'; phase: SwipePhase }
  | { type: 'SET_MATCH_PHASE'; phase: MatchPhase }
  | { type: 'UPGRADE_START' }
  | { type: 'UPGRADE_COMPLETE'; isPro: boolean }
  | { type: 'UPGRADE_FAIL' };

const initialState: SystemState = {
  phase: 'BOOTSTRAPPING',
  subscription: 'FREE_ACTIVE',
  swipe: 'IDLE',
  match: 'NONE',
  isInitialized: false,
};

function systemReducer(state: SystemState, action: SystemAction): SystemState {
  switch (action.type) {
    case 'INITIALIZE':
      return {
        ...state,
        phase: 'ACTIVE',
        isInitialized: true,
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
  // State checks
  canSwipe: boolean;
  canUseFeatures: boolean;
  isTransitioning: boolean;
  isPro: boolean;
}

const SystemStateContext = createContext<SystemStateContextValue | null>(null);

export function SystemStateProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(systemReducer, initialState);
  const { user, loading: authLoading } = useAuth();

  // Initialize when auth is ready
  useEffect(() => {
    if (!authLoading && user && !state.isInitialized) {
      dispatch({ type: 'INITIALIZE' });
    }
  }, [authLoading, user, state.isInitialized]);

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
    canSwipe,
    canUseFeatures,
    isTransitioning,
    isPro,
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
