/**
 * Service Layer Types
 * 
 * These interfaces define the contracts for all backend services.
 * This abstraction allows swapping implementations (Supabase, Firebase, etc.)
 */

import type { User, Session } from '@supabase/supabase-js';

// Re-export domain types
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

// Extended item with owner info
export interface SwipeableItem {
  id: string;
  user_id: string;
  title: string;
  description: string | null;
  category: string;
  condition: string;
  photos: string[];
  swap_preferences: string[];
  value_min: number;
  value_max: number | null;
  is_active: boolean;
  latitude: number | null;
  longitude: number | null;
  created_at: string;
  updated_at: string;
  owner_display_name: string;
  owner_avatar_url: string | null;
  owner_is_pro?: boolean;
  recommendation_score?: number;
  community_rating?: number;
  total_interactions?: number;
}

// Match with full item details
export interface MatchWithDetails {
  id: string;
  item_a_id: string;
  item_b_id: string;
  created_at: string;
  is_completed: boolean;
  completed_at: string | null;
  my_item: SwipeableItem;
  their_item: SwipeableItem;
  other_user_id: string;
  other_user_profile: {
    display_name: string;
    avatar_url: string | null;
    last_seen: string | null;
  };
  last_message?: {
    id: string;
    content: string;
    sender_id: string;
    created_at: string;
    status: string;
  };
}

// Auth service interface
export interface AuthService {
  getCurrentUser(): Promise<User | null>;
  getCurrentSession(): Promise<Session | null>;
  signUp(email: string, password: string, displayName: string): Promise<{ error: Error | null }>;
  signIn(email: string, password: string): Promise<{ error: Error | null }>;
  signOut(): Promise<void>;
  onAuthStateChange(callback: (user: User | null, session: Session | null) => void): () => void;
}

// Items service interface
export interface ItemsService {
  getMyItems(userId: string): Promise<SwipeableItem[]>;
  getItem(id: string): Promise<SwipeableItem | null>;
  createItem(data: CreateItemInput): Promise<SwipeableItem>;
  updateItem(id: string, data: Partial<CreateItemInput>): Promise<SwipeableItem>;
  deleteItem(id: string): Promise<void>;
  getSwipeableItems(userId: string, myItemId: string): Promise<SwipeableItem[]>;
  getRecommendedItems(myItemId: string, limit?: number): Promise<SwipeableItem[]>;
}

export interface CreateItemInput {
  title: string;
  description?: string | null;
  category: string;
  condition: string;
  photos: string[];
  swap_preferences: string[];
  value_min: number;
  value_max?: number | null;
  latitude?: number | null;
  longitude?: number | null;
}

// Swipe service interface
export interface SwipeService {
  recordSwipe(swiperItemId: string, swipedItemId: string, liked: boolean): Promise<{ match: MatchWithDetails | null }>;
  getSwipeHistory(swiperItemId: string): Promise<{ swipedItemId: string; liked: boolean }[]>;
  undoSwipe(swiperItemId: string, swipedItemId: string): Promise<void>;
  checkUndoEligibility(swiperItemId: string, swipedItemId: string): Promise<{ canUndo: boolean }>;
}

// Match service interface
export interface MatchService {
  getMatches(userId: string): Promise<MatchWithDetails[]>;
  getMatch(matchId: string): Promise<MatchWithDetails | null>;
  completeMatch(matchId: string): Promise<void>;
}

// Chat service interface
export interface ChatService {
  getMessages(matchId: string): Promise<ChatMessage[]>;
  sendMessage(matchId: string, senderId: string, content: string): Promise<ChatMessage>;
  markAsRead(messageIds: string[]): Promise<void>;
  subscribeToMessages(matchId: string, callback: (message: ChatMessage) => void): () => void;
}

export interface ChatMessage {
  id: string;
  match_id: string;
  sender_id: string;
  content: string;
  status: 'sending' | 'sent' | 'delivered' | 'read';
  created_at: string;
}

// Profile service interface
export interface ProfileService {
  getProfile(userId: string): Promise<ProfileData | null>;
  updateProfile(userId: string, data: Partial<ProfileData>): Promise<ProfileData>;
  updateLocation(userId: string, latitude: number, longitude: number): Promise<void>;
  updateLastSeen(userId: string): Promise<void>;
}

export interface ProfileData {
  id: string;
  user_id: string;
  display_name: string;
  avatar_url: string | null;
  bio: string | null;
  location: string | null;
  latitude: number | null;
  longitude: number | null;
  last_seen: string | null;
  created_at: string;
  updated_at: string;
}

// Subscription service interface
export interface SubscriptionService {
  getSubscription(userId: string): Promise<SubscriptionData | null>;
  getDailyUsage(userId: string): Promise<DailyUsageData>;
  incrementUsage(userId: string, field: UsageField): Promise<DailyUsageData>;
}

export interface SubscriptionData {
  id: string;
  user_id: string;
  is_pro: boolean;
  subscribed_at: string | null;
  expires_at: string | null;
}

export interface DailyUsageData {
  swipes_count: number;
  searches_count: number;
  deal_invites_count: number;
  map_uses_count: number;
}

export type UsageField = 'swipes' | 'searches' | 'deal_invites' | 'map_uses';

// Storage service interface
export interface StorageService {
  uploadFile(bucket: string, path: string, file: File): Promise<string>;
  deleteFile(bucket: string, path: string): Promise<void>;
  getPublicUrl(bucket: string, path: string): string;
}

// Presence service interface
export interface PresenceService {
  joinChannel(channelName: string, userId: string): Promise<void>;
  leaveChannel(channelName: string): Promise<void>;
  onPresenceChange(channelName: string, callback: (online: Set<string>) => void): () => void;
}

// Combined services interface
export interface Services {
  auth: AuthService;
  items: ItemsService;
  swipes: SwipeService;
  matches: MatchService;
  chat: ChatService;
  profiles: ProfileService;
  subscriptions: SubscriptionService;
  storage: StorageService;
  presence: PresenceService;
}
