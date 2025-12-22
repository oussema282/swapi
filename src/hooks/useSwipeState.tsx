import { useReducer, useCallback, useRef } from 'react';
import { Item } from '@/types/database';

interface SwipeHistoryEntry {
  itemId: string;
  direction: 'left' | 'right';
  index: number;
}

interface SwipeState {
  currentIndex: number;
  swipeDirection: 'left' | 'right' | null;
  isAnimating: boolean;
  isLocked: boolean;
  historyStack: SwipeHistoryEntry[];
  matchedItem: Item | null;
  showMatch: boolean;
}

type SwipeAction =
  | { type: 'START_SWIPE'; direction: 'left' | 'right' }
  | { type: 'COMPLETE_SWIPE'; itemId: string }
  | { type: 'SET_MATCH'; item: Item }
  | { type: 'CLEAR_MATCH' }
  | { type: 'GO_BACK' }
  | { type: 'RESET' }
  | { type: 'UNLOCK' };

const initialState: SwipeState = {
  currentIndex: 0,
  swipeDirection: null,
  isAnimating: false,
  isLocked: false,
  historyStack: [],
  matchedItem: null,
  showMatch: false,
};

function swipeReducer(state: SwipeState, action: SwipeAction): SwipeState {
  switch (action.type) {
    case 'START_SWIPE':
      // Block if already animating or locked
      if (state.isAnimating || state.isLocked) {
        return state;
      }
      return {
        ...state,
        swipeDirection: action.direction,
        isAnimating: true,
        isLocked: true,
      };

    case 'COMPLETE_SWIPE':
      return {
        ...state,
        currentIndex: state.currentIndex + 1,
        swipeDirection: null,
        isAnimating: false,
        isLocked: false,
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

    case 'GO_BACK':
      // Block if animating, locked, or no history
      if (state.isAnimating || state.isLocked || state.historyStack.length === 0) {
        return state;
      }
      const newHistory = state.historyStack.slice(0, -1);
      const previousEntry = state.historyStack[state.historyStack.length - 1];
      return {
        ...state,
        currentIndex: previousEntry.index,
        historyStack: newHistory,
        swipeDirection: null,
        isAnimating: false,
        isLocked: false,
      };

    case 'RESET':
      return initialState;

    case 'UNLOCK':
      return {
        ...state,
        isAnimating: false,
        isLocked: false,
        swipeDirection: null,
      };

    default:
      return state;
  }
}

export function useSwipeState() {
  const [state, dispatch] = useReducer(swipeReducer, initialState);
  const debounceRef = useRef<number | null>(null);

  const startSwipe = useCallback((direction: 'left' | 'right') => {
    dispatch({ type: 'START_SWIPE', direction });
  }, []);

  const completeSwipe = useCallback((itemId: string) => {
    dispatch({ type: 'COMPLETE_SWIPE', itemId });
  }, []);

  const setMatch = useCallback((item: Item) => {
    dispatch({ type: 'SET_MATCH', item });
  }, []);

  const clearMatch = useCallback(() => {
    dispatch({ type: 'CLEAR_MATCH' });
  }, []);

  const goBack = useCallback(() => {
    // Debounce back button presses (300ms)
    if (debounceRef.current) {
      return;
    }
    
    debounceRef.current = window.setTimeout(() => {
      debounceRef.current = null;
    }, 300);

    dispatch({ type: 'GO_BACK' });
  }, []);

  const reset = useCallback(() => {
    dispatch({ type: 'RESET' });
  }, []);

  const unlock = useCallback(() => {
    dispatch({ type: 'UNLOCK' });
  }, []);

  // Check if can perform actions
  const canSwipe = !state.isAnimating && !state.isLocked;
  const canGoBack = !state.isAnimating && !state.isLocked && state.historyStack.length > 0;

  return {
    state,
    actions: {
      startSwipe,
      completeSwipe,
      setMatch,
      clearMatch,
      goBack,
      reset,
      unlock,
    },
    canSwipe,
    canGoBack,
  };
}
