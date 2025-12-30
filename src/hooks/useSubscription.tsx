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

  // Compute Pro status from subscription data
  const isPro = subscription?.is_pro ?? false;
  const limits = isPro ? PRO_LIMITS : FREE_LIMITS;

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
