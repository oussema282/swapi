import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

/**
 * Smart back navigation hook that uses navigate(-1) if history exists,
 * otherwise navigates to a fallback path.
 * 
 * @param fallbackPath - The path to navigate to if no history exists (default: '/')
 * @returns goBack function that handles navigation safely
 */
export function useSmartBack(fallbackPath: string = '/') {
  const navigate = useNavigate();

  const goBack = useCallback(() => {
    // Check if we have history to go back to
    // window.history.length > 1 means there's a previous page
    // Note: The initial page load counts as 1, so we check for > 2 to be safe
    // However, browsers handle this differently, so we use a more reliable check
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate(fallbackPath, { replace: true });
    }
  }, [navigate, fallbackPath]);

  return goBack;
}
