import { useCallback, useMemo, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { useSystemState } from './useSystemState';

// ============================================
// CONSTANTS
// ============================================

export const FREE_LIMITS = {
  swipes: 50,
  searches: 3,
  dealInvites: 3,
  mapUses: 3,
  maxItems: 4,
} as const;

export const PRO_LIMITS = {
  swipes: -1,  // Unlimited
  searches: -1,
  dealInvites: -1,
  mapUses: -1,
  maxItems: -1,
} as const;

export type FeatureKey = 'swipes' | 'searches' | 'dealInvites' | 'mapUses' | 'maxItems';
type UsageField = 'swipes' | 'searches' | 'deal_invites' | 'map_uses';

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

// ============================================
// CENTRALIZED ENTITLEMENT RESOLVER
// ============================================

/**
 * Central entitlement hook - THE SINGLE SOURCE OF TRUTH for all Pro/limit checks.
 * 
 * Design Principles:
 * 1. Pro users NEVER have usage tracked or limits enforced
 * 2. Subscription state changes trigger cache invalidation
 * 3. All feature access goes through canUse() resolver
 * 4. Integrates with SystemState for state-driven access control
 */
export function useEntitlements() {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const { setSubscriptionPhase, markSubscriptionReady, state: systemState } = useSystemState();

  // ============================================
  // SUBSCRIPTION DATA
  // ============================================
  
  const { 
    data: subscription, 
    isLoading: subscriptionLoading,
    refetch: refetchSubscription,
    isFetched: subscriptionFetched,
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

      // Check expiration
      if (data?.expires_at) {
        const expiresAt = new Date(data.expires_at);
        if (expiresAt < new Date()) {
          // Expired - update system state
          setSubscriptionPhase('PRO_EXPIRED');
          return { ...data, is_pro: false } as Subscription;
        }
      }

      // Update system state based on subscription
      if (data?.is_pro) {
        setSubscriptionPhase('PRO_ACTIVE');
      } else {
        setSubscriptionPhase('FREE_ACTIVE');
      }

      return data as Subscription | null;
    },
    enabled: !!user,
    staleTime: 0,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
  });

  // Mark subscription as ready when query completes (or no user)
  useEffect(() => {
    if (!user || subscriptionFetched) {
      markSubscriptionReady();
    }
  }, [user, subscriptionFetched, markSubscriptionReady]);

  // ============================================
  // FEATURE UPGRADES (Bonus Packs)
  // ============================================

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

      // Filter expired
      return (data || []).filter((upgrade: FeatureUpgrade) => {
        if (!upgrade.expires_at) return true;
        return new Date(upgrade.expires_at) > new Date();
      });
    },
    enabled: !!user,
  });

  // ============================================
  // DAILY USAGE (Only for FREE users)
  // ============================================

  const isPro = subscription?.is_pro ?? false;

  // Skip daily usage fetch entirely for Pro users
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
    enabled: !!user && !isPro, // CRITICAL: Pro users don't need this
  });

  // ============================================
  // INCREMENT USAGE (Only for FREE users)
  // ============================================

  const incrementUsageMutation = useMutation({
    mutationFn: async (field: UsageField) => {
      if (!user) throw new Error('Not authenticated');
      
      // Pro users NEVER have usage tracked
      if (isPro) {
        console.log('Pro user - skipping usage increment');
        return;
      }

      // Ensure usage record exists
      const today = new Date().toISOString().split('T')[0];
      
      const { data: existing } = await supabase
        .from('daily_usage')
        .select('*')
        .eq('user_id', user.id)
        .eq('usage_date', today)
        .maybeSingle();

      if (!existing) {
        await supabase
          .from('daily_usage')
          .insert({ user_id: user.id, usage_date: today });
      }

      const columnName = `${field}_count`;
      
      const { data: current } = await supabase
        .from('daily_usage')
        .select(columnName)
        .eq('user_id', user.id)
        .eq('usage_date', today)
        .single();

      const currentValue = current ? (current as unknown as Record<string, number>)[columnName] || 0 : 0;

      const { error } = await supabase
        .from('daily_usage')
        .update({ [columnName]: currentValue + 1 })
        .eq('user_id', user.id)
        .eq('usage_date', today);

      if (error) throw error;
    },
    onSuccess: () => {
      if (!isPro) {
        queryClient.invalidateQueries({ queryKey: ['daily-usage', user?.id] });
      }
    },
  });

  // ============================================
  // COMPUTED VALUES
  // ============================================

  const getBonus = useCallback((featureType: string): number => {
    const upgrade = featureUpgrades.find(u => u.feature_type === featureType);
    return upgrade?.bonus_amount || 0;
  }, [featureUpgrades]);

  const limits = useMemo(() => {
    if (isPro) return PRO_LIMITS;
    return {
      swipes: FREE_LIMITS.swipes + getBonus('swipes'),
      searches: FREE_LIMITS.searches + getBonus('search'),
      dealInvites: FREE_LIMITS.dealInvites + getBonus('deal_invites'),
      mapUses: FREE_LIMITS.mapUses + getBonus('map'),
      maxItems: FREE_LIMITS.maxItems + getBonus('items'),
    };
  }, [isPro, getBonus]);

  const usage = useMemo(() => ({
    swipes: dailyUsage?.swipes_count ?? 0,
    searches: dailyUsage?.searches_count ?? 0,
    dealInvites: dailyUsage?.deal_invites_count ?? 0,
    mapUses: dailyUsage?.map_uses_count ?? 0,
  }), [dailyUsage]);

  const remaining = useMemo(() => ({
    swipes: limits.swipes === -1 ? -1 : Math.max(0, limits.swipes - usage.swipes),
    searches: limits.searches === -1 ? -1 : Math.max(0, limits.searches - usage.searches),
    dealInvites: limits.dealInvites === -1 ? -1 : Math.max(0, limits.dealInvites - usage.dealInvites),
    mapUses: limits.mapUses === -1 ? -1 : Math.max(0, limits.mapUses - usage.mapUses),
  }), [limits, usage]);

  // ============================================
  // ENTITLEMENT RESOLVER
  // ============================================

  /**
   * Central entitlement check - THE ONLY way to determine feature access
   */
  const canUse = useMemo(() => ({
    swipes: isPro || remaining.swipes > 0,
    searches: isPro || remaining.searches > 0,
    dealInvites: isPro || remaining.dealInvites > 0,
    mapUses: isPro || remaining.mapUses > 0,
  }), [isPro, remaining]);

  /**
   * Check if system is in a valid state for feature use
   */
  const isFeatureAvailable = useCallback((feature: keyof typeof canUse): boolean => {
    // Block during transitions
    if (systemState.subscription === 'UPGRADING') {
      return false;
    }
    return canUse[feature];
  }, [canUse, systemState.subscription]);

  // ============================================
  // SUBSCRIPTION REFRESH (For post-payment)
  // ============================================

  const refreshEntitlements = useCallback(async () => {
    // Invalidate all related caches
    await queryClient.invalidateQueries({ queryKey: ['subscription'] });
    await queryClient.invalidateQueries({ queryKey: ['daily-usage'] });
    await queryClient.invalidateQueries({ queryKey: ['feature-upgrades'] });
    await queryClient.invalidateQueries({ queryKey: ['my-items-count'] });
    
    // Force refetch subscription
    const result = await refetchSubscription();
    return result.data;
  }, [queryClient, refetchSubscription]);

  // ============================================
  // INCREMENT USAGE WRAPPER
  // ============================================

  const incrementUsage = useCallback(async (field: UsageField) => {
    // Pro users NEVER increment usage
    if (isPro) return;
    await incrementUsageMutation.mutateAsync(field);
  }, [isPro, incrementUsageMutation]);

  return {
    // Core state
    isPro,
    subscription,
    
    // Usage data (Pro users have empty usage)
    usage: isPro ? { swipes: 0, searches: 0, dealInvites: 0, mapUses: 0 } : usage,
    remaining: isPro ? { swipes: -1, searches: -1, dealInvites: -1, mapUses: -1 } : remaining,
    limits,
    
    // Entitlement resolver
    canUse,
    isFeatureAvailable,
    
    // Feature upgrades
    featureUpgrades,
    
    // Loading states
    isLoading: subscriptionLoading || (!isPro && usageLoading),
    
    // Actions
    incrementUsage,
    refreshEntitlements,
  };
}

// ============================================
// ITEM LIMIT HOOK
// ============================================

export function useItemLimit() {
  const { user } = useAuth();
  const { isPro, limits, isLoading: entitlementLoading } = useEntitlements();

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
    isLoading: entitlementLoading || itemsLoading,
  };
}
