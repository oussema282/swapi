import { useReducer, useCallback, useRef, useEffect } from 'react';
import { Item } from '@/types/database';
import { useSystemState, SwipePhase } from './useSystemState';

interface LocalSwipeState {
  currentIndex: number;
  swipeDirection: 'left' | 'right' | null;
  matchedItem: Item | null;
  showMatch: boolean;
  cardKey: number;
  isRefreshing: boolean;
}

type SwipeAction =
  | { type: 'START_SWIPE'; direction: 'left' | 'right' }
  | { type: 'COMPLETE_SWIPE'; itemId: string }
  | { type: 'SET_MATCH'; item: Item }
  | { type: 'CLEAR_MATCH' }
  | { type: 'START_REFRESH' }
  | { type: 'COMPLETE_REFRESH'; newStartIndex?: number }
  | { type: 'RESET' };

const initialState: LocalSwipeState = {
  currentIndex: 0,
  swipeDirection: null,
  matchedItem: null,
  showMatch: false,
  cardKey: 0,
  isRefreshing: false,
};

function swipeReducer(state: LocalSwipeState, action: SwipeAction): LocalSwipeState {
  switch (action.type) {
    case 'START_SWIPE':
      return {
        ...state,
        swipeDirection: action.direction,
      };

    case 'COMPLETE_SWIPE':
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
        swipeDirection: null,
      };

    case 'SET_MATCH':
      return {
        ...state,
        matchedItem: action.item,
        showMatch: true,
      };

    case 'CLEAR_MATCH':
      return {
        ...state,
        matchedItem: null,
        showMatch: false,
      };

    case 'START_REFRESH':
      return {
        ...state,
        isRefreshing: true,
      };

    case 'COMPLETE_REFRESH':
      return {
        ...state,
        isRefreshing: false,
        currentIndex: action.newStartIndex ?? 0,
      };

    case 'RESET':
      return initialState;

    default:
      return state;
  }
}

export function useSwipeState() {
  const [localState, dispatch] = useReducer(swipeReducer, initialState);
  const isCommittingRef = useRef(false);
  const { state: systemState, setSwipePhase } = useSystemState();

  const globalPhase = systemState.swipe;
  const systemPhase = systemState.phase;
  const subscriptionPhase = systemState.subscription;

  const globalPhaseRef = useRef<SwipePhase>(globalPhase);
  useEffect(() => {
    globalPhaseRef.current = globalPhase;
  }, [globalPhase]);

  const isSystemBlocked =
    systemPhase === 'TRANSITION' ||
    systemPhase === 'BLOCKED' ||
    systemPhase === 'BOOTSTRAPPING' ||
    subscriptionPhase === 'UPGRADING';

  useEffect(() => {
    return () => {
      setSwipePhase('IDLE');
      isCommittingRef.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startSwipe = useCallback(
    (direction: 'left' | 'right') => {
      const phaseNow = globalPhaseRef.current;

      if (phaseNow !== 'READY' || isSystemBlocked) {
        console.log(`[SWIPE] blocked: phase=${phaseNow}, systemBlocked=${isSystemBlocked}`);
        return false;
      }

      console.log(`[SWIPE] READY → SWIPING (${direction})`);
      globalPhaseRef.current = 'SWIPING';
      setSwipePhase('SWIPING');
      dispatch({ type: 'START_SWIPE', direction });
      return true;
    },
    [isSystemBlocked, setSwipePhase]
  );

  const completeSwipe = useCallback(
    (itemId: string) => {
      const phaseNow = globalPhaseRef.current;

      if (phaseNow !== 'SWIPING') {
        console.log(`[SWIPE] completeSwipe blocked: phase=${phaseNow}`);
        return;
      }
      console.log('[SWIPE] SWIPING → COMMITTING');
      globalPhaseRef.current = 'COMMITTING';
      setSwipePhase('COMMITTING');
      dispatch({ type: 'COMPLETE_SWIPE', itemId });
      console.log('[SWIPE] COMMITTING → READY');
      globalPhaseRef.current = 'READY';
      setSwipePhase('READY');
    },
    [setSwipePhase]
  );

  const forceReady = useCallback(
    () => {
      console.log(`[SWIPE] forceReady from phase=${globalPhaseRef.current}`);
      isCommittingRef.current = false;
      dispatch({ type: 'RESET' });
      setSwipePhase('READY');
    },
    [setSwipePhase]
  );

  const acquireCommitLock = useCallback(() => {
    if (isCommittingRef.current) {
      console.log('[SWIPE] lock already held');
      return false;
    }
    isCommittingRef.current = true;
    return true;
  }, []);

  const releaseCommitLock = useCallback(() => {
    isCommittingRef.current = false;
  }, []);

  const setMatch = useCallback((item: Item) => {
    dispatch({ type: 'SET_MATCH', item });
  }, []);

  const clearMatch = useCallback(() => {
    dispatch({ type: 'CLEAR_MATCH' });
  }, []);

  const startRefresh = useCallback(() => {
    setSwipePhase('REFRESHING');
    dispatch({ type: 'START_REFRESH' });
  }, [setSwipePhase]);

  const completeRefresh = useCallback(
    (newStartIndex?: number) => {
      dispatch({ type: 'COMPLETE_REFRESH', newStartIndex });
      setSwipePhase('READY');
    },
    [setSwipePhase]
  );

  const setReady = useCallback(() => {
    const phaseNow = globalPhaseRef.current;
    const allowedPhases: SwipePhase[] = ['LOADING', 'IDLE', 'REFRESHING', 'EXHAUSTED', 'SWIPING', 'COMMITTING'];

    if (allowedPhases.includes(phaseNow)) {
      console.log(`[SWIPE] ${phaseNow} → READY`);
      isCommittingRef.current = false;
      globalPhaseRef.current = 'READY';
      setSwipePhase('READY');
    }
  }, [setSwipePhase]);

  const setLoading = useCallback(() => {
    setSwipePhase('LOADING');
  }, [setSwipePhase]);

  const setPaused = useCallback(() => {
    setSwipePhase('PAUSED');
  }, [setSwipePhase]);

  const setExhausted = useCallback(() => {
    setSwipePhase('EXHAUSTED');
    dispatch({ type: 'COMPLETE_REFRESH' });
  }, [setSwipePhase]);

  const reset = useCallback(() => {
    dispatch({ type: 'RESET' });
    setSwipePhase('IDLE');
  }, [setSwipePhase]);

  const canGesture = globalPhase === 'READY' && !isSystemBlocked;
  const canSwipe = canGesture;
  const isAnimating = globalPhase === 'SWIPING' || globalPhase === 'COMMITTING';
  const isRefreshing = globalPhase === 'REFRESHING';
  const isLoading = globalPhase === 'LOADING';
  const isExhausted = globalPhase === 'EXHAUSTED';

  return {
    state: {
      ...localState,
      isAnimating,
      isLocked: !canGesture,
    },
    globalPhase,
    actions: {
      startSwipe,
      completeSwipe,
      forceReady,
      acquireCommitLock,
      releaseCommitLock,
      setMatch,
      clearMatch,
      startRefresh,
      completeRefresh,
      setReady,
      setLoading,
      setPaused,
      setExhausted,
      reset,
    },
    canSwipe,
    canGesture,
    isAnimating,
    isRefreshing,
    isLoading,
    isExhausted,
    isSystemBlocked,
  };
}
