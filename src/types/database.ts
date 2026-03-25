// Category is now a free-form text ID that maps to the hierarchy in src/config/categories.ts
export type ItemCategory = string;

export type ItemCondition = 
  | 'new' 
  | 'like_new' 
  | 'good' 
  | 'fair';

export interface Profile {
  id: string;
  user_id: string;
  display_name: string;
  avatar_url: string | null;
  bio: string | null;
  location: string | null;
  latitude: number | null;
  longitude: number | null;
  phone_number: string | null;
  phone_visible: boolean | null;
  created_at: string;
  updated_at: string;
}

export interface Item {
  id: string;
  user_id: string;
  title: string;
  description: string | null;
  category: ItemCategory;
  subcategory: string | null;
  condition: ItemCondition;
  photos: string[];
  swap_preferences: string[];
  value_min: number;
  value_max: number | null;
  is_active: boolean;
  is_archived: boolean;
  latitude: number | null;
  longitude: number | null;
  created_at: string;
  updated_at: string;
}

export interface UserPreferences {
  id: string;
  user_id: string;
  category_weights: Record<string, number>;
  condition_weights: Record<string, number>;
  value_range_preference: { min: number; max: number };
  created_at: string;
  updated_at: string;
}

export interface Swipe {
  id: string;
  swiper_item_id: string;
  swiped_item_id: string;
  liked: boolean;
  created_at: string;
}

export interface Match {
  id: string;
  item_a_id: string;
  item_b_id: string;
  created_at: string;
  is_completed: boolean;
  completed_at: string | null;
  confirmed_by_user_a: boolean;
  confirmed_by_user_b: boolean;
}

export type MessageStatus = 'sending' | 'sent' | 'delivered' | 'read';

export interface Message {
  id: string;
  match_id: string;
  sender_id: string;
  content: string;
  status: MessageStatus;
  created_at: string;
}

// Re-export from categories config for backward compatibility
import { getCategoryLabel, CATEGORY_LABEL_MAP } from '@/config/categories';

// CATEGORY_LABELS is now a proxy that looks up from the config
export const CATEGORY_LABELS: Record<string, string> = new Proxy({} as Record<string, string>, {
  get(_, prop: string) {
    return getCategoryLabel(prop);
  },
});

export const CONDITION_LABELS: Record<ItemCondition, string> = {
  new: 'New',
  like_new: 'Like New',
  good: 'Good',
  fair: 'Fair',
};

export const CATEGORY_ICONS: Record<string, string> = new Proxy({} as Record<string, string>, {
  get(_, prop: string) {
    // Return empty string - icons are now handled via getCategoryIcon from config
    return '📦';
  },
});
