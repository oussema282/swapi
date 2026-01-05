import { useNavigate, useLocation } from 'react-router-dom';
import { useCallback, useRef, useEffect } from 'react';

/**
 * Smart back navigation hook that reliably navigates back.
 * Uses referrer tracking for reliable detection of navigation history.
 * 
 * @param fallbackPath - The path to navigate to if no history exists (default: '/')
 * @returns goBack function that handles navigation safely
 */
export function useSmartBack(fallbackPath: string = '/discover') {
  const navigate = useNavigate();
  const location = useLocation();
  const hasInternalReferrer = useRef(false);

  // Track if we have internal navigation history
  useEffect(() => {
    // If location state has 'from', we know we came from internal navigation
    if (location.state?.from) {
      hasInternalReferrer.current = true;
    }
    // Check sessionStorage for navigation history
    const navHistory = sessionStorage.getItem('nav-history');
    if (navHistory) {
      const history = JSON.parse(navHistory) as string[];
      hasInternalReferrer.current = history.length > 1;
    }
  }, [location]);

  // Track navigation in sessionStorage
  useEffect(() => {
    const navHistory = sessionStorage.getItem('nav-history');
    const history: string[] = navHistory ? JSON.parse(navHistory) : [];
    
    // Add current path if different from last
    if (history[history.length - 1] !== location.pathname) {
      history.push(location.pathname);
      // Keep only last 10 entries
      if (history.length > 10) history.shift();
      sessionStorage.setItem('nav-history', JSON.stringify(history));
    }
  }, [location.pathname]);

  const goBack = useCallback(() => {
    const navHistory = sessionStorage.getItem('nav-history');
    const history: string[] = navHistory ? JSON.parse(navHistory) : [];
    
    // If we have history with more than current page, go back
    if (history.length > 1) {
      // Remove current page from history
      history.pop();
      sessionStorage.setItem('nav-history', JSON.stringify(history));
      navigate(-1);
    } else {
      // No history - navigate to fallback
      navigate(fallbackPath, { replace: true });
    }
  }, [navigate, fallbackPath]);

  return goBack;
}
