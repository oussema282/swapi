/**
 * Services Factory
 * 
 * This module provides the service factory that returns the appropriate
 * service implementation based on configuration.
 */

import type { Services } from './types';
import { supabaseServices } from './supabase';

export type { 
  Services,
  AuthService,
  ItemsService,
  SwipeService,
  MatchService,
  ChatService,
  ProfileService,
  SubscriptionService,
  StorageService,
  PresenceService,
  SwipeableItem,
  MatchWithDetails,
  ChatMessage,
  ProfileData,
  SubscriptionData,
  DailyUsageData,
  UsageField,
  CreateItemInput,
} from './types';

// Re-export domain types for convenience
export type {
  Item,
  ItemCategory,
  ItemCondition,
  Profile,
  Match,
  Message,
  MessageStatus,
  Swipe,
  UserPreferences,
} from '@/types/database';

/**
 * Get the services instance
 * Currently returns Supabase implementation, but can be extended
 * to support other backends via configuration
 */
export function getServices(): Partial<Services> {
  // Future: Check config and return appropriate implementation
  // const config = getConfig();
  // if (config.backend === 'firebase') return firebaseServices;
  
  return supabaseServices;
}

// Export individual service getters for convenience
export { authService, itemsService, swipeService, subscriptionService, profileService, storageService } from './supabase';

// Also export the direct client accessor for cases that need raw access
export { getSupabaseClient, resetSupabaseClient } from './supabase';
