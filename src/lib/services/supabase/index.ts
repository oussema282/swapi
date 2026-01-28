/**
 * Supabase Service Implementation
 * 
 * This module provides the Supabase implementation of all service interfaces.
 * It can be swapped with other implementations (Firebase, custom API, etc.)
 */

import { createClient, SupabaseClient, User, Session } from '@supabase/supabase-js';
import { getConfig } from '@/lib/config';
import type {
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
} from '../types';

let supabaseClient: SupabaseClient | null = null;

/**
 * Get or create the Supabase client
 */
export function getSupabaseClient(): SupabaseClient {
  if (!supabaseClient) {
    const config = getConfig();
    
    if (!config.supabase.url || !config.supabase.anonKey) {
      throw new Error('Supabase configuration is missing. Please complete setup.');
    }
    
    supabaseClient = createClient(config.supabase.url, config.supabase.anonKey, {
      auth: {
        storage: typeof window !== 'undefined' ? window.localStorage : undefined,
        persistSession: true,
        autoRefreshToken: true,
      },
    });
  }
  
  return supabaseClient;
}

/**
 * Reset the Supabase client (useful after config changes)
 */
export function resetSupabaseClient(): void {
  supabaseClient = null;
}

// Auth Service Implementation
export const authService: AuthService = {
  async getCurrentUser() {
    const { data } = await getSupabaseClient().auth.getUser();
    return data.user;
  },
  
  async getCurrentSession() {
    const { data } = await getSupabaseClient().auth.getSession();
    return data.session;
  },
  
  async signUp(email: string, password: string, displayName: string) {
    const redirectUrl = `${window.location.origin}/discover`;
    const { error } = await getSupabaseClient().auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectUrl,
        data: { display_name: displayName },
      },
    });
    return { error };
  },
  
  async signIn(email: string, password: string) {
    const { error } = await getSupabaseClient().auth.signInWithPassword({ email, password });
    return { error };
  },
  
  async signOut() {
    await getSupabaseClient().auth.signOut();
  },
  
  onAuthStateChange(callback: (user: User | null, session: Session | null) => void) {
    const { data: { subscription } } = getSupabaseClient().auth.onAuthStateChange(
      (_, session) => {
        callback(session?.user ?? null, session);
      }
    );
    return () => subscription.unsubscribe();
  },
};

// Items Service Implementation
export const itemsService: ItemsService = {
  async getMyItems(userId: string) {
    const { data, error } = await getSupabaseClient()
      .from('items')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    
    // Fetch profile for owner info
    const { data: profile } = await getSupabaseClient()
      .from('profiles')
      .select('display_name, avatar_url')
      .eq('user_id', userId)
      .single();
    
    return (data || []).map(item => ({
      ...item,
      owner_display_name: profile?.display_name || 'User',
      owner_avatar_url: profile?.avatar_url || null,
    })) as SwipeableItem[];
  },
  
  async getItem(id: string) {
    const { data, error } = await getSupabaseClient()
      .from('items')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) return null;
    
    const { data: profile } = await getSupabaseClient()
      .from('profiles')
      .select('display_name, avatar_url')
      .eq('user_id', data.user_id)
      .single();
    
    return {
      ...data,
      owner_display_name: profile?.display_name || 'User',
      owner_avatar_url: profile?.avatar_url || null,
    } as SwipeableItem;
  },
  
  async createItem(input: CreateItemInput) {
    const { data: { user } } = await getSupabaseClient().auth.getUser();
    if (!user) throw new Error('Not authenticated');
    
    const { data, error } = await getSupabaseClient()
      .from('items')
      .insert({
        ...input,
        user_id: user.id,
      })
      .select()
      .single();
    
    if (error) throw error;
    
    const { data: profile } = await getSupabaseClient()
      .from('profiles')
      .select('display_name, avatar_url')
      .eq('user_id', user.id)
      .single();
    
    return {
      ...data,
      owner_display_name: profile?.display_name || 'User',
      owner_avatar_url: profile?.avatar_url || null,
    } as SwipeableItem;
  },
  
  async updateItem(id: string, input: Partial<CreateItemInput>) {
    const { data, error } = await getSupabaseClient()
      .from('items')
      .update(input)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    
    const { data: profile } = await getSupabaseClient()
      .from('profiles')
      .select('display_name, avatar_url')
      .eq('user_id', data.user_id)
      .single();
    
    return {
      ...data,
      owner_display_name: profile?.display_name || 'User',
      owner_avatar_url: profile?.avatar_url || null,
    } as SwipeableItem;
  },
  
  async deleteItem(id: string) {
    const { error } = await getSupabaseClient()
      .from('items')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  },
  
  async getSwipeableItems(userId: string, myItemId: string) {
    // Get my item
    const { data: myItem } = await getSupabaseClient()
      .from('items')
      .select('*')
      .eq('id', myItemId)
      .single();
    
    if (!myItem) return [];
    
    // Get already swiped items
    const { data: swipes } = await getSupabaseClient()
      .from('swipes')
      .select('swiped_item_id')
      .eq('swiper_item_id', myItemId);
    
    const swipedIds = swipes?.map(s => s.swiped_item_id) || [];
    
    // Get compatible items
    const { data: items, error } = await getSupabaseClient()
      .from('items')
      .select('*')
      .neq('user_id', userId)
      .eq('is_active', true)
      .in('category', myItem.swap_preferences)
      .contains('swap_preferences', [myItem.category]);
    
    if (error) throw error;
    
    const filtered = (items || []).filter(i => !swipedIds.includes(i.id));
    
    // Get profiles
    const userIds = [...new Set(filtered.map(i => i.user_id))];
    const { data: profiles } = await getSupabaseClient()
      .from('profiles')
      .select('user_id, display_name, avatar_url')
      .in('user_id', userIds);
    
    const profileMap = new Map(profiles?.map(p => [p.user_id, p]) || []);
    
    return filtered.map(item => ({
      ...item,
      owner_display_name: profileMap.get(item.user_id)?.display_name || 'User',
      owner_avatar_url: profileMap.get(item.user_id)?.avatar_url || null,
    })) as SwipeableItem[];
  },
  
  async getRecommendedItems(myItemId: string, limit = 50) {
    const config = getConfig();
    
    try {
      const { data, error } = await getSupabaseClient().functions.invoke('recommend-items', {
        body: { myItemId, limit },
      });
      
      if (error) throw error;
      
      const rankedItems = data?.rankedItems || [];
      if (rankedItems.length === 0) return [];
      
      // Fetch full items
      const { data: items } = await getSupabaseClient()
        .from('items')
        .select('*')
        .in('id', rankedItems.map((r: any) => r.id));
      
      const scoreMap = new Map(rankedItems.map((r: any) => [r.id, r.score]));
      
      // Get profiles
      const userIds = [...new Set((items || []).map(i => i.user_id))];
      const { data: profiles } = await getSupabaseClient()
        .from('profiles')
        .select('user_id, display_name, avatar_url')
        .in('user_id', userIds);
      
      // Get ratings
      const { data: ratings } = await getSupabaseClient()
        .from('item_ratings')
        .select('item_id, rating, total_interactions')
        .in('item_id', rankedItems.map((r: any) => r.id));
      
      const profileMap = new Map(profiles?.map(p => [p.user_id, p]) || []);
      const ratingsMap = new Map(ratings?.map(r => [r.item_id, r]) || []);
      
      return (items || [])
        .map(item => ({
          ...item,
          owner_display_name: profileMap.get(item.user_id)?.display_name || 'User',
          owner_avatar_url: profileMap.get(item.user_id)?.avatar_url || null,
          recommendation_score: scoreMap.get(item.id),
          community_rating: ratingsMap.get(item.id)?.rating ?? 3.0,
          total_interactions: ratingsMap.get(item.id)?.total_interactions ?? 0,
        }))
        .sort((a, b) => (b.recommendation_score || 0) - (a.recommendation_score || 0)) as SwipeableItem[];
    } catch (error) {
      console.error('Recommendations failed, using fallback:', error);
      const { data: { user } } = await getSupabaseClient().auth.getUser();
      if (!user) return [];
      return this.getSwipeableItems(user.id, myItemId);
    }
  },
};

// Swipe Service Implementation
export const swipeService: SwipeService = {
  async recordSwipe(swiperItemId: string, swipedItemId: string, liked: boolean) {
    const { error } = await getSupabaseClient()
      .from('swipes')
      .insert({
        swiper_item_id: swiperItemId,
        swiped_item_id: swipedItemId,
        liked,
      });
    
    if (error) throw error;
    
    // Check for match if liked
    if (liked) {
      const { data: match } = await getSupabaseClient()
        .from('matches')
        .select('*')
        .or(`item_a_id.eq.${swiperItemId},item_b_id.eq.${swiperItemId}`)
        .or(`item_a_id.eq.${swipedItemId},item_b_id.eq.${swipedItemId}`)
        .maybeSingle();
      
      // TODO: Enrich match with full details if needed
      return { match: match as MatchWithDetails | null };
    }
    
    return { match: null };
  },
  
  async getSwipeHistory(swiperItemId: string) {
    const { data, error } = await getSupabaseClient()
      .from('swipes')
      .select('swiped_item_id, liked')
      .eq('swiper_item_id', swiperItemId);
    
    if (error) throw error;
    
    return (data || []).map(s => ({
      swipedItemId: s.swiped_item_id,
      liked: s.liked,
    }));
  },
  
  async undoSwipe(swiperItemId: string, swipedItemId: string) {
    // Check eligibility
    const { canUndo } = await this.checkUndoEligibility(swiperItemId, swipedItemId);
    if (!canUndo) throw new Error('Cannot undo this swipe');
    
    // Delete swipe
    const { error: deleteError } = await getSupabaseClient()
      .from('swipes')
      .delete()
      .eq('swiper_item_id', swiperItemId)
      .eq('swiped_item_id', swipedItemId);
    
    if (deleteError) throw deleteError;
    
    // Record undo
    await getSupabaseClient()
      .from('swipe_undos')
      .insert({
        swiper_item_id: swiperItemId,
        swiped_item_id: swipedItemId,
      });
  },
  
  async checkUndoEligibility(swiperItemId: string, swipedItemId: string) {
    const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
    
    const { data } = await getSupabaseClient()
      .from('swipe_undos')
      .select('id')
      .eq('swiper_item_id', swiperItemId)
      .eq('swiped_item_id', swipedItemId)
      .gte('undone_at', twentyFourHoursAgo)
      .maybeSingle();
    
    return { canUndo: !data };
  },
};

// Subscription Service Implementation
export const subscriptionService: SubscriptionService = {
  async getSubscription(userId: string) {
    const { data } = await getSupabaseClient()
      .from('user_subscriptions')
      .select('*')
      .eq('user_id', userId)
      .maybeSingle();
    
    return data as SubscriptionData | null;
  },
  
  async getDailyUsage(userId: string) {
    const { data } = await getSupabaseClient()
      .rpc('get_or_create_daily_usage', { p_user_id: userId });
    
    return {
      swipes_count: data?.swipes_count ?? 0,
      searches_count: data?.searches_count ?? 0,
      deal_invites_count: data?.deal_invites_count ?? 0,
      map_uses_count: data?.map_uses_count ?? 0,
    };
  },
  
  async incrementUsage(userId: string, field: UsageField) {
    const fieldMap: Record<UsageField, string> = {
      swipes: 'swipes',
      searches: 'searches',
      deal_invites: 'deal_invites',
      map_uses: 'map_uses',
    };
    
    const { data } = await getSupabaseClient()
      .rpc('increment_usage', { p_user_id: userId, p_field: fieldMap[field] });
    
    return {
      swipes_count: data?.swipes_count ?? 0,
      searches_count: data?.searches_count ?? 0,
      deal_invites_count: data?.deal_invites_count ?? 0,
      map_uses_count: data?.map_uses_count ?? 0,
    };
  },
};

// Profile Service Implementation
export const profileService: ProfileService = {
  async getProfile(userId: string) {
    const { data } = await getSupabaseClient()
      .from('profiles')
      .select('*')
      .eq('user_id', userId)
      .single();
    
    return data as ProfileData | null;
  },
  
  async updateProfile(userId: string, updates: Partial<ProfileData>) {
    const { data, error } = await getSupabaseClient()
      .from('profiles')
      .update(updates)
      .eq('user_id', userId)
      .select()
      .single();
    
    if (error) throw error;
    return data as ProfileData;
  },
  
  async updateLocation(userId: string, latitude: number, longitude: number) {
    await getSupabaseClient()
      .from('profiles')
      .update({ latitude, longitude })
      .eq('user_id', userId);
  },
  
  async updateLastSeen(userId: string) {
    await getSupabaseClient()
      .from('profiles')
      .update({ last_seen: new Date().toISOString() })
      .eq('user_id', userId);
  },
};

// Storage Service Implementation
export const storageService: StorageService = {
  async uploadFile(bucket: string, path: string, file: File) {
    const { error } = await getSupabaseClient()
      .storage
      .from(bucket)
      .upload(path, file);
    
    if (error) throw error;
    
    return this.getPublicUrl(bucket, path);
  },
  
  async deleteFile(bucket: string, path: string) {
    const { error } = await getSupabaseClient()
      .storage
      .from(bucket)
      .remove([path]);
    
    if (error) throw error;
  },
  
  getPublicUrl(bucket: string, path: string) {
    const { data } = getSupabaseClient()
      .storage
      .from(bucket)
      .getPublicUrl(path);
    
    return data.publicUrl;
  },
};

// Export combined services
export const supabaseServices: Partial<Services> = {
  auth: authService,
  items: itemsService,
  swipes: swipeService,
  subscriptions: subscriptionService,
  profiles: profileService,
  storage: storageService,
};
