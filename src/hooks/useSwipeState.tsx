import { useReducer, useCallback, useRef, useEffect } from 'react';
import { Item } from '@/types/database';
import { useSystemState, SwipePhase } from './useSystemState';

interface SwipeHistoryEntry {
  itemId: string;
  direction: 'left' | 'right';
  index: number;
}

interface LocalSwipeState {
  currentIndex: number;
  swipeDirection: 'left' | 'right' | null;
  historyStack: SwipeHistoryEntry[];
  matchedItem: Item | null;
  showMatch: boolean;
  lastUndoneItemId: string | null;
  cardKey: number;
  isRefreshing: boolean;
}

type SwipeAction =
  | { type: 'START_SWIPE'; direction: 'left' | 'right' }
  | { type: 'COMPLETE_SWIPE'; itemId: string }
  | { type: 'SET_MATCH'; item: Item }
  | { type: 'CLEAR_MATCH' }
  | { type: 'START_UNDO' }
  | { type: 'COMPLETE_UNDO' }
  | { type: 'START_REFRESH' }
  | { type: 'COMPLETE_REFRESH'; newStartIndex?: number }
  | { type: 'RESET' }
  | { type: 'CLEAR_UNDO' };

const initialState: LocalSwipeState = {
  currentIndex: 0,
  swipeDirection: null,
  historyStack: [],
  matchedItem: null,
  showMatch: false,
  lastUndoneItemId: null,
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
        historyStack: [
          ...state.historyStack,
          {
            itemId: action.itemId,
            direction: state.swipeDirection!,
            index: state.currentIndex,
          },
        ],
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

    case 'START_UNDO':
      return state;

    case 'COMPLETE_UNDO':
      if (state.historyStack.length === 0) return state;
      const newHistory = state.historyStack.slice(0, -1);
      const previousEntry = state.historyStack[state.historyStack.length - 1];
      return {
        ...state,
        currentIndex: previousEntry.index,
        historyStack: newHistory,
        swipeDirection: null,
        lastUndoneItemId: previousEntry.itemId,
        cardKey: state.cardKey + 1,
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

    case 'CLEAR_UNDO':
      return {
        ...state,
        lastUndoneItemId: null,
      };

    case 'RESET':
      return initialState;

    default:
      return state;
  }
}

export function useSwipeState() {
  const [localState, dispatch] = useReducer(swipeReducer, initialState);
  const debounceRef = useRef<number | null>(null);
  const isCommittingRef = useRef(false); // Lock to prevent double commits
  const { state: systemState, setSwipePhase } = useSystemState();

  // Sync local state changes to global SWIPE_PHASE
  const globalPhase = systemState.swipe;
  const systemPhase = systemState.phase;
  const subscriptionPhase = systemState.subscription;

  // Determine if swipe operations are allowed based on system state
  const isSystemBlocked = 
    systemPhase === 'TRANSITION' || 
    systemPhase === 'BLOCKED' ||
    systemPhase === 'BOOTSTRAPPING' ||
    subscriptionPhase === 'UPGRADING';

  // Initialize to IDLE when component mounts
  useEffect(() => {
    if (globalPhase === 'IDLE' || globalPhase === 'LOADING') {
      // Will be set to READY once cards load
    }
    // Cleanup on unmount
    return () => {
      setSwipePhase('IDLE');
      isCommittingRef.current = false;
    };
  }, []);

  const startSwipe = useCallback((direction: 'left' | 'right') => {
    // Only allow if in READY phase and system not blocked
    if (globalPhase !== 'READY' || isSystemBlocked) {
      console.log(`[SWIPE] blocked: phase=${globalPhase}, systemBlocked=${isSystemBlocked}`);
      return false;
    }
    // Check lock to prevent double commits
    if (isCommittingRef.current) {
      console.log('[SWIPE] blocked: commit in progress');
      return false;
    }
    console.log(`[SWIPE] READY → SWIPING (${direction})`);
    setSwipePhase('SWIPING');
    dispatch({ type: 'START_SWIPE', direction });
    return true;
  }, [globalPhase, isSystemBlocked, setSwipePhase]);

  const completeSwipe = useCallback((itemId: string) => {
    // Only allow commit from SWIPING phase
    if (globalPhase !== 'SWIPING') {
      console.log(`[SWIPE] completeSwipe blocked: phase=${globalPhase}`);
      return;
    }
    console.log('[SWIPE] SWIPING → COMMITTING');
    setSwipePhase('COMMITTING');
    dispatch({ type: 'COMPLETE_SWIPE', itemId });
    console.log('[SWIPE] COMMITTING → READY');
    setSwipePhase('READY');
  }, [globalPhase, setSwipePhase]);

  // Force reset to READY (for error recovery) - can be called from ANY phase
  const forceReady = useCallback(() => {
    console.log(`[SWIPE] forceReady from phase=${globalPhase}`);
    isCommittingRef.current = false;
    // Clear any pending swipe direction without adding to history
    dispatch({ type: 'RESET' });
    // Restore to initial state but keep cardKey for fresh render
    setSwipePhase('READY');
  }, [globalPhase, setSwipePhase]);

  // Acquire commit lock
  const acquireCommitLock = useCallback(() => {
    if (isCommittingRef.current) {
      console.log('[SWIPE] lock already held');
      return false;
    }
    isCommittingRef.current = true;
    return true;
  }, []);

  // Release commit lock
  const releaseCommitLock = useCallback(() => {
    isCommittingRef.current = false;
  }, []);

  const setMatch = useCallback((item: Item) => {
    dispatch({ type: 'SET_MATCH', item });
  }, []);

  const clearMatch = useCallback(() => {
    dispatch({ type: 'CLEAR_MATCH' });
  }, []);

  const startUndo = useCallback(() => {
    // Only allow undo from READY phase
    if (globalPhase !== 'READY' || isSystemBlocked) {
      console.warn(`Undo blocked: phase=${globalPhase}`);
      return false;
    }
    if (localState.historyStack.length === 0) {
      return false;
    }
    setSwipePhase('UNDOING');
    dispatch({ type: 'START_UNDO' });
    return true;
  }, [globalPhase, isSystemBlocked, localState.historyStack.length, setSwipePhase]);

  const completeUndo = useCallback(() => {
    if (globalPhase !== 'UNDOING') {
      console.warn(`Complete undo blocked: phase=${globalPhase}`);
      return;
    }
    dispatch({ type: 'COMPLETE_UNDO' });
    setSwipePhase('READY');
  }, [globalPhase, setSwipePhase]);

  const startRefresh = useCallback(() => {
    // Enter REFRESHING phase to silently fetch more items
    setSwipePhase('REFRESHING');
    dispatch({ type: 'START_REFRESH' });
  }, [setSwipePhase]);

  const completeRefresh = useCallback((newStartIndex?: number) => {
    dispatch({ type: 'COMPLETE_REFRESH', newStartIndex });
    setSwipePhase('READY');
  }, [setSwipePhase]);

  const setReady = useCallback(() => {
    // Allow transitioning to READY from multiple phases for recovery
    // SWIPING and COMMITTING can also transition to READY in case of stuck state
    const allowedPhases = ['LOADING', 'IDLE', 'REFRESHING', 'EXHAUSTED', 'SWIPING', 'COMMITTING'];
    if (allowedPhases.includes(globalPhase)) {
      console.log(`[SWIPE] ${globalPhase} → READY`);
      isCommittingRef.current = false; // Always clear lock when setting ready
      setSwipePhase('READY');
    }
  }, [globalPhase, setSwipePhase]);

  const setLoading = useCallback(() => {
    setSwipePhase('LOADING');
  }, [setSwipePhase]);

  const setPaused = useCallback(() => {
    setSwipePhase('PAUSED');
  }, [setSwipePhase]);

  // Transition to EXHAUSTED - stable empty state for current item
  const setExhausted = useCallback(() => {
    setSwipePhase('EXHAUSTED');
    dispatch({ type: 'COMPLETE_REFRESH' }); // Clear isRefreshing flag
  }, [setSwipePhase]);

  const reset = useCallback(() => {
    dispatch({ type: 'RESET' });
    setSwipePhase('IDLE');
  }, [setSwipePhase]);

  const clearUndo = useCallback(() => {
    dispatch({ type: 'CLEAR_UNDO' });
  }, []);

  // Debounced undo check
  const goBack = useCallback(() => {
    if (debounceRef.current) return;
    debounceRef.current = window.setTimeout(() => {
      debounceRef.current = null;
    }, 300);
    return startUndo();
  }, [startUndo]);

  // Check if gestures are allowed (ONLY in READY phase)
  const canGesture = globalPhase === 'READY' && !isSystemBlocked;
  
  // Check if any swipe action is allowed
  const canSwipe = canGesture;
  
  // Check if undo is allowed
  const canGoBack = canGesture && localState.historyStack.length > 0;

  // Is currently in a transitional swipe phase
  const isAnimating = globalPhase === 'SWIPING' || globalPhase === 'COMMITTING';
  const isUndoing = globalPhase === 'UNDOING';
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
      startUndo,
      completeUndo,
      goBack,
      startRefresh,
      completeRefresh,
      setReady,
      setLoading,
      setPaused,
      setExhausted,
      reset,
      clearUndo,
    },
    canSwipe,
    canGoBack,
    canGesture,
    isAnimating,
    isUndoing,
    isRefreshing,
    isLoading,
    isExhausted,
    isSystemBlocked,
  };
}
