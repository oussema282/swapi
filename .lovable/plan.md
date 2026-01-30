

# Algorithm Policy Database Schema Design

## Overview

This plan implements a database-driven policy configuration system for Valexo's recommendation engine, enabling AI-generated policy parameters to be stored, versioned, tested, and rolled back instantly without code redeployments.

---

## Architecture

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                        ALGORITHM POLICY SYSTEM                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐     │
│   │                  │    │                  │    │                  │     │
│   │ algorithm_       │───>│ algorithm_       │───>│ algorithm_       │     │
│   │ policies         │    │ policy_rollouts  │    │ policy_metrics   │     │
│   │                  │    │                  │    │                  │     │
│   │ Stores versions  │    │ Controls A/B     │    │ Stores outcome   │     │
│   │ of AI-generated  │    │ testing and      │    │ metrics for      │     │
│   │ parameters       │    │ gradual rollout  │    │ learning         │     │
│   │                  │    │                  │    │                  │     │
│   └──────────────────┘    └──────────────────┘    └──────────────────┘     │
│           │                        │                        │               │
│           └────────────────────────┼────────────────────────┘               │
│                                    │                                         │
│                                    ▼                                         │
│   ┌────────────────────────────────────────────────────────────────────┐    │
│   │                    recommend-items Edge Function                    │    │
│   │                                                                     │    │
│   │  1. Fetch active policy OR use hardcoded defaults                  │    │
│   │  2. Apply weights from policy                                       │    │
│   │  3. Log which policy_version was used                              │    │
│   │                                                                     │    │
│   └────────────────────────────────────────────────────────────────────┘    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Database Schema

### Table 1: `algorithm_policies`

Stores AI-generated policy versions with weights and configuration.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | uuid | PRIMARY KEY, DEFAULT gen_random_uuid() | Unique identifier |
| `policy_version` | text | UNIQUE NOT NULL | Version identifier (e.g., "v1.0.0", "v1.1.0") |
| `weights` | jsonb | NOT NULL | Weight parameters for recommendation scoring |
| `exploration_policy` | jsonb | NOT NULL | Exploration/randomness configuration |
| `reciprocal_policy` | jsonb | NOT NULL | Reciprocal matching configuration |
| `active` | boolean | DEFAULT false | Whether this is the active production policy |
| `description` | text | NULL | Optional description of changes |
| `created_by` | text | NULL | Creator identifier ("ai_optimizer" or admin) |
| `created_at` | timestamptz | DEFAULT now() | Creation timestamp |

**Constraint**: Only one policy can have `active = true` at a time (enforced by trigger).

**Example `weights` JSONB:**
```json
{
  "geoScore": 0.26,
  "categorySimilarity": 0.16,
  "exchangeCompatibility": 0.22,
  "behaviorAffinity": 0.12,
  "freshness": 0.05,
  "conditionScore": 0.07,
  "reciprocalBoost": 0.12
}
```

**Example `exploration_policy` JSONB:**
```json
{
  "randomness": 0.08,
  "cold_start_boost": 0.15,
  "stale_item_penalty": 0.20,
  "cold_start_threshold_swipes": 5,
  "stale_threshold_days": 14
}
```

**Example `reciprocal_policy` JSONB:**
```json
{
  "priority": "medium",
  "boost_cap": 0.25
}
```

---

### Table 2: `algorithm_policy_metrics`

Stores aggregated outcome metrics for AI learning and A/B testing analysis.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | uuid | PRIMARY KEY, DEFAULT gen_random_uuid() | Unique identifier |
| `policy_version` | text | NOT NULL, REFERENCES algorithm_policies(policy_version) | Policy this metric belongs to |
| `metric_snapshot` | jsonb | NOT NULL | Aggregated metrics data |
| `period_start` | date | NOT NULL | Start of measurement period |
| `period_end` | date | NOT NULL | End of measurement period |
| `created_at` | timestamptz | DEFAULT now() | When metric was recorded |

**Example `metric_snapshot` JSONB:**
```json
{
  "total_recommendations": 15420,
  "total_matches": 342,
  "total_completed_exchanges": 89,
  "match_to_exchange_conversion": 0.26,
  "avg_time_to_match_hours": 48.3,
  "avg_distance_of_exchanges_km": 12.7,
  "category_pair_success_rates": {
    "electronics->games": 0.42,
    "clothes->books": 0.18
  },
  "cold_start_performance": {
    "items_with_less_5_swipes": 234,
    "matches_from_cold_items": 12
  }
}
```

---

### Table 3: `algorithm_policy_rollouts`

Controls gradual activation, A/B testing, and instant rollback.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | uuid | PRIMARY KEY, DEFAULT gen_random_uuid() | Unique identifier |
| `policy_version` | text | NOT NULL, REFERENCES algorithm_policies(policy_version) | Policy being rolled out |
| `traffic_percentage` | integer | CHECK (>= 0 AND <= 100), DEFAULT 0 | Percentage of traffic receiving this policy |
| `enabled` | boolean | DEFAULT false | Whether rollout is active |
| `started_at` | timestamptz | NULL | When rollout began |
| `ended_at` | timestamptz | NULL | When rollout ended |
| `created_at` | timestamptz | DEFAULT now() | Creation timestamp |

**Rollout Strategy:**
- Start with `traffic_percentage = 10`
- Monitor metrics for 24-48 hours
- Gradually increase to 50%, then 100%
- Set `enabled = false` for instant rollback

---

## RLS Policies

| Table | Policy | Command | Rule |
|-------|--------|---------|------|
| algorithm_policies | Public read | SELECT | `true` (edge functions need access) |
| algorithm_policies | Admin write | INSERT/UPDATE | `is_admin(auth.uid())` |
| algorithm_policy_metrics | System only | ALL | `false` (service role only) |
| algorithm_policy_rollouts | Public read | SELECT | `true` (edge functions need access) |
| algorithm_policy_rollouts | Admin write | INSERT/UPDATE | `is_admin(auth.uid())` |

---

## Database Functions

### Function: `get_active_policy()`

Returns the currently active policy, or NULL if none exists.

```sql
CREATE OR REPLACE FUNCTION public.get_active_policy()
RETURNS TABLE (
  policy_version text,
  weights jsonb,
  exploration_policy jsonb,
  reciprocal_policy jsonb
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    p.policy_version,
    p.weights,
    p.exploration_policy,
    p.reciprocal_policy
  FROM algorithm_policies p
  WHERE p.active = true
  LIMIT 1;
END;
$$;
```

### Function: `get_policy_for_request()`

Returns policy based on rollout percentage (for A/B testing).

```sql
CREATE OR REPLACE FUNCTION public.get_policy_for_request(request_hash integer)
RETURNS TABLE (
  policy_version text,
  weights jsonb,
  exploration_policy jsonb,
  reciprocal_policy jsonb
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  bucket integer;
  selected_version text;
BEGIN
  bucket := request_hash % 100;
  
  -- Check rollouts first
  SELECT r.policy_version INTO selected_version
  FROM algorithm_policy_rollouts r
  WHERE r.enabled = true
    AND bucket < r.traffic_percentage
  ORDER BY r.traffic_percentage DESC
  LIMIT 1;
  
  -- If no rollout matched, use active policy
  IF selected_version IS NULL THEN
    SELECT p.policy_version INTO selected_version
    FROM algorithm_policies p
    WHERE p.active = true
    LIMIT 1;
  END IF;
  
  -- Return the selected policy
  RETURN QUERY
  SELECT 
    p.policy_version,
    p.weights,
    p.exploration_policy,
    p.reciprocal_policy
  FROM algorithm_policies p
  WHERE p.policy_version = selected_version;
END;
$$;
```

### Trigger: `ensure_single_active_policy`

Ensures only one policy is active at a time.

```sql
CREATE OR REPLACE FUNCTION public.ensure_single_active_policy()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  IF NEW.active = true THEN
    UPDATE algorithm_policies 
    SET active = false 
    WHERE id != NEW.id AND active = true;
  END IF;
  RETURN NEW;
END;
$$;
```

---

## Edge Function Changes

### Update `recommend-items/index.ts`

**Change 1**: Add policy loading at request start

```typescript
// Load active policy from database
async function loadPolicy(supabaseAdmin: any): Promise<Policy | null> {
  const { data, error } = await supabaseAdmin
    .rpc('get_active_policy')
    .single();
  
  if (error || !data) {
    log('warn', 'No active policy found, using defaults');
    return null;
  }
  
  return data as Policy;
}
```

**Change 2**: Use loaded policy or fall back to hardcoded defaults

```typescript
// At start of request handler:
const policy = await loadPolicy(supabaseAdmin);

// Use policy weights or defaults
const weights = policy?.weights ?? WEIGHTS;
const explorationFactor = policy?.exploration_policy?.randomness ?? EXPLORATION_FACTOR;

// Log which policy was used
log('info', 'Recommendation complete', { 
  user_id: ownerUserId, 
  item_id: myItemId, 
  policy_version: policy?.policy_version ?? 'default',
  pool_size: unswiped.length,
  returned: rankedItems.length,
  expanded: searchExpanded 
});
```

**Change 3**: Implement cold_start_boost and stale_item_penalty

```typescript
// Calculate freshness with exploration policy
function calculateFreshnessWithPolicy(
  createdAt: string, 
  totalSwipes: number,
  explorationPolicy: ExplorationPolicy
): { freshness: number; coldStartBoost: number; stalePenalty: number } {
  const ageInDays = (Date.now() - new Date(createdAt).getTime()) / (1000 * 60 * 60 * 24);
  const freshness = 1 / (1 + ageInDays);
  
  // Cold start boost for new items
  const isColdStart = totalSwipes < (explorationPolicy.cold_start_threshold_swipes ?? 5);
  const coldStartBoost = isColdStart ? (explorationPolicy.cold_start_boost ?? 0) : 0;
  
  // Stale penalty for items with no recent activity
  const isStale = ageInDays > (explorationPolicy.stale_threshold_days ?? 14);
  const stalePenalty = isStale ? (explorationPolicy.stale_item_penalty ?? 0) : 0;
  
  return { freshness, coldStartBoost, stalePenalty };
}
```

---

## Default Policy Seed Data

Insert the current hardcoded weights as version 1.0.0:

```sql
INSERT INTO algorithm_policies (
  policy_version,
  weights,
  exploration_policy,
  reciprocal_policy,
  active,
  description,
  created_by
) VALUES (
  'v1.0.0',
  '{
    "geoScore": 0.28,
    "categorySimilarity": 0.18,
    "exchangeCompatibility": 0.18,
    "behaviorAffinity": 0.10,
    "freshness": 0.06,
    "conditionScore": 0.08,
    "reciprocalBoost": 0.12
  }'::jsonb,
  '{
    "randomness": 0.1,
    "cold_start_boost": 0,
    "stale_item_penalty": 0,
    "cold_start_threshold_swipes": 5,
    "stale_threshold_days": 14
  }'::jsonb,
  '{
    "priority": "medium",
    "boost_cap": 0.5
  }'::jsonb,
  true,
  'Initial baseline policy matching hardcoded defaults',
  'system'
);
```

---

## Rollback Strategy

### Instant Rollback (< 1 second)

1. **Disable problematic rollout:**
   ```sql
   UPDATE algorithm_policy_rollouts 
   SET enabled = false, ended_at = now() 
   WHERE policy_version = 'v1.1.0';
   ```

2. **Or switch active policy:**
   ```sql
   UPDATE algorithm_policies 
   SET active = true 
   WHERE policy_version = 'v1.0.0';
   -- Trigger automatically deactivates all others
   ```

### Kill Switch

If no database policy is found, the edge function falls back to hardcoded defaults:
```typescript
const weights = policy?.weights ?? WEIGHTS; // Hardcoded fallback
```

This means deleting all active policies instantly reverts to safe defaults.

---

## Files to Create/Modify

### New Files

| File | Purpose |
|------|---------|
| `supabase/migrations/[timestamp]_algorithm_policy_tables.sql` | Database schema migration |

### Files to Modify

| File | Changes |
|------|---------|
| `supabase/functions/recommend-items/index.ts` | Add policy loading, logging, new scoring parameters |
| `src/integrations/supabase/types.ts` | Auto-updated after migration |

---

## Implementation Steps

1. **Create database migration** with three tables, RLS policies, and functions
2. **Insert seed data** for v1.0.0 baseline policy
3. **Update recommend-items edge function** to:
   - Load active policy from database
   - Fall back to hardcoded defaults if no policy
   - Implement cold_start_boost and stale_item_penalty
   - Log which policy version was used
4. **Deploy edge function** changes
5. **Verify** fallback works by querying with no active policies

---

## Testing Plan

| Test | Method |
|------|--------|
| Policy loads correctly | Call recommend-items, check logs for policy_version |
| Fallback works | Set all policies to inactive, verify default weights used |
| Rollout targeting | Create rollout at 50%, verify ~half of requests use new policy |
| Instant rollback | Disable rollout, verify immediate switch to previous policy |
| A/B metrics | Compare match rates between policy versions over 48 hours |

---

## Summary

| Component | Description |
|-----------|-------------|
| `algorithm_policies` | Stores AI-generated policy versions |
| `algorithm_policy_metrics` | Stores outcome metrics for learning |
| `algorithm_policy_rollouts` | Controls gradual activation and A/B testing |
| `get_active_policy()` | Returns current active policy |
| `get_policy_for_request()` | Returns policy based on rollout percentage |
| Fallback | Hardcoded defaults if no policy exists |
| Rollback | Set `active = false` or disable rollout (< 1 second) |

This design ensures:
- All AI outputs are stored and versioned
- Rollback is instant
- No redeployment required for policy changes
- A/B testing capability built-in
- Safe fallback to hardcoded defaults

