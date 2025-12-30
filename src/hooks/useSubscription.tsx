import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { useCallback } from 'react';

// Limits for free users
export const FREE_LIMITS = {
  swipes: 50,
  searches: 3,
  dealInvites: 3,
  mapUses: 3,
  maxItems: 4,
};

// Pro users have unlimited (represented by -1)
export const PRO_LIMITS = {
  swipes: -1,
  searches: -1,
  dealInvites: -1,
  mapUses: -1,
  maxItems: -1,
};

// Feature upgrade packages
export const FEATURE_UPGRADES = {
  swipes: { name: 'Extra Swipes', bonus: 100, price: 1.99 },
  deal_invites: { name: 'Extra Deal Invites', bonus: 20, price: 0.99 },
  map: { name: 'Extra Map Views', bonus: 20, price: 0.99 },
  search: { name: 'Extra Searches', bonus: 20, price: 0.99 },
  items: { name: 'Extra Item Slots', bonus: 5, price: 1.49 },
} as const;

export type FeatureType = keyof typeof FEATURE_UPGRADES;

interface Subscription {
  id: string;
  user_id: string;
  is_pro: boolean;
  subscribed_at: string | null;
  expires_at: string | null;
}

interface DailyUsage {
  id: string;
  user_id: string;
  usage_date: string;
  swipes_count: number;
  searches_count: number;
  deal_invites_count: number;
  map_uses_count: number;
}

interface FeatureUpgrade {
  id: string;
  user_id: string;
  feature_type: string;
  bonus_amount: number;
  expires_at: string | null;
}

/**
 * Central subscription hook - single source of truth for Pro status
 * All Pro checks throughout the app should use this hook
 */
export function useSubscription() {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  // Fetch subscription status with short stale time to ensure freshness
  const { 
    data: subscription, 
    isLoading: subscriptionLoading,
    refetch: refetchSubscription 
  } = useQuery({
    queryKey: ['subscription', user?.id],
    queryFn: async (): Promise<Subscription | null> => {
      if (!user) return null;

      const { data, error } = await supabase
        .from('user_subscriptions')
        .select('*')
        .eq('user_id', user.id)
        .maybeSingle();

      if (error) {
        console.error('Error fetching subscription:', error);
        return null;
      }

      // Check if subscription is active (not expired)
      if (data?.expires_at) {
        const expiresAt = new Date(data.expires_at);
        if (expiresAt < new Date()) {
          // Subscription expired - treat as non-Pro
          return { ...data, is_pro: false } as Subscription;
        }
      }

      return data as Subscription | null;
    },
    enabled: !!user,
    staleTime: 0, // Always refetch when queried
    refetchOnWindowFocus: true,
    refetchOnMount: true,
  });

  // Fetch feature upgrades (bonus amounts for individual features)
  const { data: featureUpgrades = [] } = useQuery({
    queryKey: ['feature-upgrades', user?.id],
    queryFn: async (): Promise<FeatureUpgrade[]> => {
      if (!user) return [];

      const { data, error } = await supabase
        .from('feature_upgrades')
        .select('*')
        .eq('user_id', user.id);

      if (error) {
        console.error('Error fetching feature upgrades:', error);
        return [];
      }

      // Filter out expired upgrades
      return (data || []).filter((upgrade: FeatureUpgrade) => {
        if (!upgrade.expires_at) return true;
        return new Date(upgrade.expires_at) > new Date();
      });
    },
    enabled: !!user,
  });

  // Fetch daily usage
  const { data: dailyUsage, isLoading: usageLoading } = useQuery({
    queryKey: ['daily-usage', user?.id],
    queryFn: async (): Promise<DailyUsage | null> => {
      if (!user) return null;

      const today = new Date().toISOString().split('T')[0];
      
      const { data, error } = await supabase
        .from('daily_usage')
        .select('*')
        .eq('user_id', user.id)
        .eq('usage_date', today)
        .maybeSingle();

      if (error) {
        console.error('Error fetching usage:', error);
        return null;
      }

      return data as DailyUsage | null;
    },
    enabled: !!user,
  });

  // Create or get daily usage
  const ensureUsageRecord = async () => {
    if (!user) return null;
    
    const today = new Date().toISOString().split('T')[0];
    
    // First try to get existing record
    const { data: existing } = await supabase
      .from('daily_usage')
      .select('*')
      .eq('user_id', user.id)
      .eq('usage_date', today)
      .maybeSingle();

    if (existing) return existing;

    // Create new record
    const { data: newRecord, error } = await supabase
      .from('daily_usage')
      .insert({ user_id: user.id, usage_date: today })
      .select()
      .single();

    if (error) {
      console.error('Error creating usage record:', error);
      return null;
    }

    return newRecord;
  };

  // Increment usage mutation
  const incrementUsage = useMutation({
    mutationFn: async (field: 'swipes' | 'searches' | 'deal_invites' | 'map_uses') => {
      if (!user) throw new Error('Not authenticated');

      await ensureUsageRecord();
      
      const today = new Date().toISOString().split('T')[0];
      const columnName = `${field}_count`;
      
      // Get current value
      const { data: current } = await supabase
        .from('daily_usage')
        .select(columnName)
        .eq('user_id', user.id)
        .eq('usage_date', today)
        .single();

      const currentValue = (current as any)?.[columnName] || 0;

      // Update with incremented value
      const { error } = await supabase
        .from('daily_usage')
        .update({ [columnName]: currentValue + 1 })
        .eq('user_id', user.id)
        .eq('usage_date', today);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['daily-usage', user?.id] });
    },
  });

  // Get bonus amounts from feature upgrades
  const getBonus = (featureType: string): number => {
    const upgrade = featureUpgrades.find(u => u.feature_type === featureType);
    return upgrade?.bonus_amount || 0;
  };

  // Compute Pro status from subscription data
  const isPro = subscription?.is_pro ?? false;
  const baseLimits = isPro ? PRO_LIMITS : FREE_LIMITS;
  
  // Apply feature upgrades to limits (only for non-Pro users)
  const limits = isPro ? PRO_LIMITS : {
    swipes: baseLimits.swipes + getBonus('swipes'),
    searches: baseLimits.searches + getBonus('search'),
    dealInvites: baseLimits.dealInvites + getBonus('deal_invites'),
    mapUses: baseLimits.mapUses + getBonus('map'),
    maxItems: baseLimits.maxItems + getBonus('items'),
  };

  const usage = {
    swipes: dailyUsage?.swipes_count ?? 0,
    searches: dailyUsage?.searches_count ?? 0,
    dealInvites: dailyUsage?.deal_invites_count ?? 0,
    mapUses: dailyUsage?.map_uses_count ?? 0,
  };

  const remaining = {
    swipes: limits.swipes === -1 ? -1 : Math.max(0, limits.swipes - usage.swipes),
    searches: limits.searches === -1 ? -1 : Math.max(0, limits.searches - usage.searches),
    dealInvites: limits.dealInvites === -1 ? -1 : Math.max(0, limits.dealInvites - usage.dealInvites),
    mapUses: limits.mapUses === -1 ? -1 : Math.max(0, limits.mapUses - usage.mapUses),
  };

  // canUse checks - Pro users always can, free users check remaining limits
  const canUse = {
    swipes: isPro || remaining.swipes > 0,
    searches: isPro || remaining.searches > 0,
    dealInvites: isPro || remaining.dealInvites > 0,
    mapUses: isPro || remaining.mapUses > 0,
  };

  // Force refresh subscription status - call this after payment success
  const refreshSubscription = useCallback(async () => {
    await queryClient.invalidateQueries({ queryKey: ['subscription'] });
    await queryClient.invalidateQueries({ queryKey: ['daily-usage'] });
    await queryClient.invalidateQueries({ queryKey: ['my-items-count'] });
    await queryClient.invalidateQueries({ queryKey: ['feature-upgrades'] });
    const result = await refetchSubscription();
    return result.data;
  }, [queryClient, refetchSubscription]);

  return {
    isPro,
    subscription,
    usage,
    remaining,
    limits,
    canUse,
    featureUpgrades,
    isLoading: subscriptionLoading || usageLoading,
    incrementUsage: incrementUsage.mutateAsync,
    refreshSubscription,
  };
}

// Hook to check item count limit
export function useItemLimit() {
  const { user } = useAuth();
  const { isPro, limits, isLoading: subscriptionLoading } = useSubscription();

  const { data: itemCount = 0, isLoading: itemsLoading } = useQuery({
    queryKey: ['my-items-count', user?.id],
    queryFn: async () => {
      if (!user) return 0;
      
      const { count, error } = await supabase
        .from('items')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', user.id)
        .eq('is_active', true);

      if (error) {
        console.error('Error counting items:', error);
        return 0;
      }

      return count ?? 0;
    },
    enabled: !!user,
  });

  const canAddItem = isPro || itemCount < limits.maxItems;
  const remaining = limits.maxItems === -1 ? -1 : Math.max(0, limits.maxItems - itemCount);

  return {
    itemCount,
    canAddItem,
    remaining,
    limit: limits.maxItems,
    isPro,
    isLoading: subscriptionLoading || itemsLoading,
  };
}
