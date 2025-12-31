/**
 * @deprecated This module is DEPRECATED. Use useEntitlements instead.
 * 
 * SUBSCRIPTION_PHASE from useSystemState is the decision authority,
 * NOT the is_pro field from the database.
 * 
 * This file exists only for backward compatibility. All new code
 * MUST use useEntitlements from src/hooks/useEntitlements.tsx
 */

// Re-export everything from useEntitlements to maintain backward compatibility
export { 
  useEntitlements as useSubscription,
  useItemLimit,
  FREE_LIMITS,
  PRO_LIMITS,
} from './useEntitlements';

// Legacy types for backward compatibility
export const FEATURE_UPGRADES = {
  swipes: { name: 'Extra Swipes', bonus: 100, price: 1.99 },
  deal_invites: { name: 'Extra Deal Invites', bonus: 20, price: 0.99 },
  map: { name: 'Extra Map Views', bonus: 20, price: 0.99 },
  search: { name: 'Extra Searches', bonus: 20, price: 0.99 },
  items: { name: 'Extra Item Slots', bonus: 5, price: 1.49 },
} as const;

export type FeatureType = keyof typeof FEATURE_UPGRADES;
