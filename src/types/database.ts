export type ItemCategory = 
  | 'games' 
  | 'electronics' 
  | 'clothes' 
  | 'books' 
  | 'home_garden' 
  | 'sports' 
  | 'other';

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
  created_at: string;
  updated_at: string;
}

export interface Item {
  id: string;
  user_id: string;
  title: string;
  description: string | null;
  category: ItemCategory;
  condition: ItemCondition;
  photos: string[];
  swap_preferences: ItemCategory[];
  value_min: number;
  value_max: number | null;
  is_active: boolean;
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
}

export interface Message {
  id: string;
  match_id: string;
  sender_id: string;
  content: string;
  created_at: string;
}

export const CATEGORY_LABELS: Record<ItemCategory, string> = {
  games: 'Games',
  electronics: 'Electronics',
  clothes: 'Clothes',
  books: 'Books',
  home_garden: 'Home & Garden',
  sports: 'Sports',
  other: 'Other',
};

export const CONDITION_LABELS: Record<ItemCondition, string> = {
  new: 'New',
  like_new: 'Like New',
  good: 'Good',
  fair: 'Fair',
};

export const CATEGORY_ICONS: Record<ItemCategory, string> = {
  games: '🎮',
  electronics: '📱',
  clothes: '👕',
  books: '📚',
  home_garden: '🏡',
  sports: '⚽',
  other: '📦',
};
