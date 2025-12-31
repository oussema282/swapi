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
 * CRITICAL DESIGN PRINCIPLE:
 * - is_pro (from DB) is persistence only, NOT the decision authority
 * - SUBSCRIPTION_PHASE (from SystemState) IS the decision authority
 * - During UPGRADING: disable all limit checks, allow all features
 * - When PRO_ACTIVE: ignore daily_usage entirely, never show upgrade prompts
 * 
 * Design Principles:
 * 1. SUBSCRIPTION_PHASE is the SOLE decision authority for Pro status
 * 2. Pro users NEVER have usage tracked or limits enforced
 * 3. Subscription state changes trigger cache invalidation
 * 4. All feature access goes through canUse() resolver
 */
export function useEntitlements() {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const { setSubscriptionPhase, markSubscriptionReady, state: systemState } = useSystemState();

  // ============================================
  // DECISION AUTHORITY: SUBSCRIPTION_PHASE
  // ============================================
  
  // isPro is derived from SUBSCRIPTION_PHASE, NOT from database is_pro field
  const subscriptionPhase = systemState.subscription;
  const isPro = subscriptionPhase === 'PRO_ACTIVE';
  const isUpgrading = subscriptionPhase === 'UPGRADING';
  const isProOrUpgrading = isPro || isUpgrading;

  // ============================================
  // SUBSCRIPTION DATA (Persistence only)
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

      // Sync database state to SUBSCRIPTION_PHASE (initial load only)
      // During UPGRADING, don't override - let the upgrade flow control state
      if (subscriptionPhase !== 'UPGRADING') {
        if (data?.is_pro) {
          setSubscriptionPhase('PRO_ACTIVE');
        } else {
          setSubscriptionPhase('FREE_ACTIVE');
        }
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
  // DAILY USAGE (Only for FREE users - skipped for Pro/Upgrading)
  // ============================================

  // Skip daily usage fetch entirely for Pro users or during upgrade
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
    enabled: !!user && !isProOrUpgrading, // CRITICAL: Pro/Upgrading users don't need this
  });

  // ============================================
  // INCREMENT USAGE (Only for FREE users - skipped for Pro/Upgrading)
  // ============================================

  const incrementUsageMutation = useMutation({
    mutationFn: async (field: UsageField) => {
      if (!user) throw new Error('Not authenticated');
      
      // Pro/Upgrading users NEVER have usage tracked
      if (isProOrUpgrading) {
        console.log('Pro/Upgrading user - skipping usage increment');
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
      if (!isProOrUpgrading) {
        queryClient.invalidateQueries({ queryKey: ['daily-usage', user?.id] });
      }
    },
  });

  // ============================================
  // COMPUTED VALUES (State-driven)
  // ============================================

  const getBonus = useCallback((featureType: string): number => {
    const upgrade = featureUpgrades.find(u => u.feature_type === featureType);
    return upgrade?.bonus_amount || 0;
  }, [featureUpgrades]);

  // Limits: Pro/Upgrading users get unlimited, others get free limits + bonuses
  const limits = useMemo(() => {
    if (isProOrUpgrading) return PRO_LIMITS;
    return {
      swipes: FREE_LIMITS.swipes + getBonus('swipes'),
      searches: FREE_LIMITS.searches + getBonus('search'),
      dealInvites: FREE_LIMITS.dealInvites + getBonus('deal_invites'),
      mapUses: FREE_LIMITS.mapUses + getBonus('map'),
      maxItems: FREE_LIMITS.maxItems + getBonus('items'),
    };
  }, [isProOrUpgrading, getBonus]);

  // Usage: Pro/Upgrading users have zero usage (ignored)
  const usage = useMemo(() => {
    if (isProOrUpgrading) {
      return { swipes: 0, searches: 0, dealInvites: 0, mapUses: 0 };
    }
    return {
      swipes: dailyUsage?.swipes_count ?? 0,
      searches: dailyUsage?.searches_count ?? 0,
      dealInvites: dailyUsage?.deal_invites_count ?? 0,
      mapUses: dailyUsage?.map_uses_count ?? 0,
    };
  }, [isProOrUpgrading, dailyUsage]);

  // Remaining: Pro/Upgrading users have unlimited (-1)
  const remaining = useMemo(() => {
    if (isProOrUpgrading) {
      return { swipes: -1, searches: -1, dealInvites: -1, mapUses: -1 };
    }
    return {
      swipes: limits.swipes === -1 ? -1 : Math.max(0, limits.swipes - usage.swipes),
      searches: limits.searches === -1 ? -1 : Math.max(0, limits.searches - usage.searches),
      dealInvites: limits.dealInvites === -1 ? -1 : Math.max(0, limits.dealInvites - usage.dealInvites),
      mapUses: limits.mapUses === -1 ? -1 : Math.max(0, limits.mapUses - usage.mapUses),
    };
  }, [isProOrUpgrading, limits, usage]);

  // ============================================
  // ENTITLEMENT RESOLVER (State-driven)
  // ============================================

  /**
   * Central entitlement check - THE ONLY way to determine feature access
   * Decision is based on SUBSCRIPTION_PHASE, not database is_pro
   * 
   * - PRO_ACTIVE: all features available
   * - UPGRADING: all features available (optimistic unlock)
   * - FREE_ACTIVE/FREE_LIMITED: check remaining limits
   */
  const canUse = useMemo(() => ({
    swipes: isProOrUpgrading || remaining.swipes > 0,
    searches: isProOrUpgrading || remaining.searches > 0,
    dealInvites: isProOrUpgrading || remaining.dealInvites > 0,
    mapUses: isProOrUpgrading || remaining.mapUses > 0,
  }), [isProOrUpgrading, remaining]);

  /**
   * Should we show upgrade prompts?
   * Never show when PRO_ACTIVE or UPGRADING
   */
  const shouldShowUpgradePrompt = !isProOrUpgrading;

  /**
   * Check if system is in a valid state for feature use
   * During UPGRADING, all features are available (optimistic unlock)
   */
  const isFeatureAvailable = useCallback((feature: keyof typeof canUse): boolean => {
    // During UPGRADING, all features are available
    if (isUpgrading) {
      return true;
    }
    return canUse[feature];
  }, [canUse, isUpgrading]);

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
    // Pro/Upgrading users NEVER increment usage
    if (isProOrUpgrading) return;
    await incrementUsageMutation.mutateAsync(field);
  }, [isProOrUpgrading, incrementUsageMutation]);

  return {
    // Core state (derived from SUBSCRIPTION_PHASE, not DB)
    isPro,
    isUpgrading,
    isProOrUpgrading,
    subscription,
    subscriptionPhase,
    
    // Usage data (Pro/Upgrading users have empty usage)
    usage,
    remaining,
    limits,
    
    // Entitlement resolver
    canUse,
    isFeatureAvailable,
    shouldShowUpgradePrompt,
    
    // Feature upgrades
    featureUpgrades,
    
    // Loading states
    isLoading: subscriptionLoading || (!isProOrUpgrading && usageLoading),
    
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
