

# AI Policy Optimizer Edge Function

## Overview

This plan creates an edge function that uses Lovable AI (Gemini) to analyze platform metrics and generate optimized policy recommendations for the recommendation algorithm. The AI operates within strict guardrails and outputs only numeric policy parameters.

---

## Architecture

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                     AI POLICY OPTIMIZER FLOW                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌──────────────────┐                                                       │
│  │ Scheduled Trigger│  (Cron job or manual admin call)                     │
│  │ or Admin Request │                                                       │
│  └────────┬─────────┘                                                       │
│           │                                                                 │
│           ▼                                                                 │
│  ┌────────────────────────────────────────────────────────────────────┐    │
│  │                    ai-policy-optimizer Edge Function                │    │
│  │                                                                     │    │
│  │  1. Collect aggregated metrics from database                       │    │
│  │  2. Load current active policy                                     │    │
│  │  3. Call Lovable AI with metrics + constraints                     │    │
│  │  4. Validate AI output (weights sum to 1.0, within bounds)         │    │
│  │  5. Store new policy version (inactive by default)                 │    │
│  │  6. Store metrics snapshot for the current policy                  │    │
│  │                                                                     │    │
│  └────────────────────────────────────────────────────────────────────┘    │
│           │                                                                 │
│           ▼                                                                 │
│  ┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐     │
│  │                  │    │                  │    │                  │     │
│  │ algorithm_       │    │ algorithm_       │    │ algorithm_       │     │
│  │ policies         │    │ policy_metrics   │    │ policy_rollouts  │     │
│  │ (NEW version)    │    │ (snapshot saved) │    │ (admin enables)  │     │
│  │                  │    │                  │    │                  │     │
│  └──────────────────┘    └──────────────────┘    └──────────────────┘     │
│                                                                             │
│                          Admin Review & Activation                          │
│                                    │                                        │
│                                    ▼                                        │
│                    algorithm_policy_rollouts.enabled = true                 │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## AI System Constraints

The AI optimizer operates under strict safety rules:

| Constraint | Enforcement |
|------------|-------------|
| Outputs only numeric policy parameters | Schema validation in edge function |
| Weights must sum to ~1.0 (0.98-1.02) | Post-validation before storage |
| Each weight within allowed bounds | Per-parameter range check |
| No direct product decisions | AI only sees aggregated metrics |
| No access to PII or raw user data | Query only aggregates |
| Deterministic output format | Tool calling with strict schema |
| Safe to rollback instantly | Stored as inactive by default |

---

## Metrics Collection

The optimizer collects these aggregated metrics (no PII):

```typescript
interface MetricSnapshot {
  // Core conversion metrics
  total_swipes: number;
  total_likes: number;
  total_dislikes: number;
  like_rate: number;
  
  total_matches: number;
  total_completed_exchanges: number;
  match_to_exchange_conversion: number;
  
  // Performance metrics
  avg_time_to_complete_hours: number;
  
  // Category performance
  category_success_rates: Record<string, {
    matches: number;
    completed: number;
    conversion_rate: number;
  }>;
  
  // Current policy info
  current_policy_version: string;
  current_weights: PolicyWeights;
  
  // Data period
  period_start: string;
  period_end: string;
}
```

---

## AI Prompt Design

The AI receives a carefully constructed prompt that:

1. Defines its role as a policy optimizer (not a decision maker)
2. Provides current metrics and policy configuration
3. Specifies optimization goals
4. Enforces output constraints via tool calling

```typescript
const systemPrompt = `You are an algorithm policy optimizer for Valexo, an item exchange platform.

ROLE CONSTRAINTS:
- You ONLY output numeric policy parameters
- You do NOT select items, users, or matches
- You do NOT have access to personal data
- Your outputs are stored and versioned for auditability
- All changes can be rolled back instantly

OPTIMIZATION GOALS (in priority order):
1. Maximize completed exchanges (match_to_exchange_conversion)
2. Reduce time to match
3. Prioritize mutual swap preferences (reciprocal matches)
4. Improve cold start item visibility
5. Reduce stale item visibility

ALLOWED WEIGHT RANGES:
- geoScore: 0.10 - 0.40
- categorySimilarity: 0.05 - 0.30
- exchangeCompatibility: 0.10 - 0.35
- behaviorAffinity: 0.05 - 0.25
- freshness: 0.02 - 0.15
- conditionScore: 0.02 - 0.15
- reciprocalBoost: 0.05 - 0.25

EXPLORATION POLICY RANGES:
- randomness: 0.00 - 0.20
- cold_start_boost: 0.00 - 0.30
- stale_item_penalty: 0.00 - 0.50

RULES:
- All weights MUST sum to approximately 1.0 (between 0.98 and 1.02)
- Prefer SMALL incremental changes (max 0.05 per weight)
- Provide brief rationale for each change
- If metrics are insufficient, return current policy unchanged`;
```

---

## Output Validation

The edge function validates AI output before storage:

```typescript
function validatePolicyOutput(output: PolicyProposal): ValidationResult {
  const errors: string[] = [];
  
  // 1. Check weights sum to ~1.0
  const weightsSum = Object.values(output.weights).reduce((a, b) => a + b, 0);
  if (weightsSum < 0.98 || weightsSum > 1.02) {
    errors.push(`Weights sum ${weightsSum.toFixed(3)} outside allowed range [0.98, 1.02]`);
  }
  
  // 2. Check each weight is within bounds
  const bounds = {
    geoScore: [0.10, 0.40],
    categorySimilarity: [0.05, 0.30],
    exchangeCompatibility: [0.10, 0.35],
    behaviorAffinity: [0.05, 0.25],
    freshness: [0.02, 0.15],
    conditionScore: [0.02, 0.15],
    reciprocalBoost: [0.05, 0.25],
  };
  
  for (const [key, [min, max]] of Object.entries(bounds)) {
    const value = output.weights[key];
    if (value < min || value > max) {
      errors.push(`${key} = ${value} outside bounds [${min}, ${max}]`);
    }
  }
  
  // 3. Check exploration policy bounds
  if (output.exploration_policy.randomness < 0 || output.exploration_policy.randomness > 0.20) {
    errors.push('randomness outside bounds [0, 0.20]');
  }
  
  return { valid: errors.length === 0, errors };
}
```

---

## Edge Function Implementation

### File: `supabase/functions/ai-policy-optimizer/index.ts`

```typescript
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { log } from "../_shared/logger.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // 1. Verify admin authorization
    const authHeader = req.headers.get("Authorization");
    // ... admin check logic

    // 2. Collect aggregated metrics
    const metrics = await collectMetrics(supabaseAdmin);
    
    // 3. Load current policy
    const currentPolicy = await loadCurrentPolicy(supabaseAdmin);
    
    // 4. Call Lovable AI with tool calling
    const aiResponse = await callLovableAI(metrics, currentPolicy);
    
    // 5. Validate AI output
    const validation = validatePolicyOutput(aiResponse);
    if (!validation.valid) {
      log('error', 'AI output validation failed', { errors: validation.errors });
      return new Response(JSON.stringify({ 
        error: 'Validation failed', 
        details: validation.errors 
      }), { status: 400 });
    }
    
    // 6. Store new policy version (inactive by default)
    const newVersion = await storeNewPolicy(supabaseAdmin, aiResponse, currentPolicy);
    
    // 7. Store metrics snapshot for current policy
    await storeMetricsSnapshot(supabaseAdmin, metrics, currentPolicy.policy_version);
    
    return new Response(JSON.stringify({
      success: true,
      new_policy_version: newVersion,
      rationale: aiResponse.rationale,
      message: 'Policy created but NOT activated. Admin must enable via rollouts.'
    }));
    
  } catch (error) {
    log('error', 'AI optimizer error', { error: error.message });
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
});
```

---

## Tool Calling Schema

The AI is forced to output structured data via tool calling:

```typescript
const tools = [
  {
    type: "function",
    function: {
      name: "propose_policy",
      description: "Propose optimized policy parameters based on metrics analysis",
      parameters: {
        type: "object",
        properties: {
          policy_version: { 
            type: "string",
            description: "Version string in semver format (e.g., 'v1.1.0')"
          },
          weights: {
            type: "object",
            properties: {
              geoScore: { type: "number" },
              categorySimilarity: { type: "number" },
              exchangeCompatibility: { type: "number" },
              behaviorAffinity: { type: "number" },
              freshness: { type: "number" },
              conditionScore: { type: "number" },
              reciprocalBoost: { type: "number" }
            },
            required: ["geoScore", "categorySimilarity", "exchangeCompatibility", 
                       "behaviorAffinity", "freshness", "conditionScore", "reciprocalBoost"]
          },
          exploration_policy: {
            type: "object",
            properties: {
              randomness: { type: "number" },
              cold_start_boost: { type: "number" },
              stale_item_penalty: { type: "number" },
              cold_start_threshold_swipes: { type: "integer" },
              stale_threshold_days: { type: "integer" }
            },
            required: ["randomness", "cold_start_boost", "stale_item_penalty"]
          },
          reciprocal_policy: {
            type: "object",
            properties: {
              priority: { type: "string", enum: ["low", "medium", "high"] },
              boost_cap: { type: "number" }
            },
            required: ["priority", "boost_cap"]
          },
          rationale: {
            type: "array",
            items: { type: "string" },
            description: "Brief explanation for each change made"
          }
        },
        required: ["policy_version", "weights", "exploration_policy", "reciprocal_policy", "rationale"]
      }
    }
  }
];
```

---

## Safety Guardrails

| Layer | Protection |
|-------|------------|
| **Access Control** | Admin-only endpoint (JWT verification) |
| **Input Isolation** | AI sees only aggregated metrics, no PII |
| **Output Validation** | All weights validated before storage |
| **Activation Gate** | New policies stored as `active: false` |
| **Gradual Rollout** | Uses existing rollout system for A/B testing |
| **Instant Rollback** | Set `enabled: false` to revert immediately |
| **Audit Trail** | All policies versioned with `created_by: 'ai_optimizer'` |
| **Fallback** | recommend-items always falls back to hardcoded defaults |

---

## Admin Workflow

After AI generates a new policy:

1. **Review** - Admin sees new policy in admin panel
2. **Compare** - View metrics from previous policy period
3. **Test** - Enable rollout at 10% traffic
4. **Monitor** - Watch metrics for 24-48 hours
5. **Expand** - Increase to 50%, then 100%
6. **Activate** - Set as primary active policy
7. **Rollback** - If issues, disable rollout instantly

---

## Files to Create

| File | Purpose |
|------|---------|
| `supabase/functions/ai-policy-optimizer/index.ts` | Main optimizer edge function |

## Files to Modify

| File | Changes |
|------|---------|
| `supabase/config.toml` | Add function config with `verify_jwt = true` |
| `src/components/admin/sections/` | Optional: Add AlgorithmPoliciesSection for UI |

---

## Implementation Steps

1. Create `ai-policy-optimizer` edge function with:
   - Metrics collection queries
   - Lovable AI integration with tool calling
   - Output validation
   - Policy storage (inactive)
   - Metrics snapshot storage

2. Add to `supabase/config.toml`:
   ```toml
   [functions.ai-policy-optimizer]
   verify_jwt = true
   ```

3. Deploy and test:
   - Call endpoint as admin
   - Verify new policy created (inactive)
   - Verify metrics snapshot saved
   - Test activation via rollouts

---

## Testing Plan

| Test | Method |
|------|--------|
| Metrics collection | Verify all queries return expected data |
| AI response parsing | Test tool calling output extraction |
| Validation - good input | Submit valid weights, expect success |
| Validation - bad sum | Submit weights summing to 1.5, expect rejection |
| Validation - out of bounds | Submit geoScore = 0.6, expect rejection |
| Storage | Verify new policy saved with `active: false` |
| Rollback | Verify instant revert when rollout disabled |

---

## Rate Limiting

The optimizer should run at most once per day:

```typescript
// Check last optimization run
const { data: lastRun } = await supabaseAdmin
  .from('algorithm_policies')
  .select('created_at')
  .eq('created_by', 'ai_optimizer')
  .order('created_at', { ascending: false })
  .limit(1)
  .single();

if (lastRun) {
  const hoursSinceLastRun = (Date.now() - new Date(lastRun.created_at).getTime()) / (1000 * 60 * 60);
  if (hoursSinceLastRun < 24) {
    return new Response(JSON.stringify({ 
      error: 'Rate limited', 
      message: `Last optimization was ${hoursSinceLastRun.toFixed(1)} hours ago. Minimum interval is 24 hours.`
    }), { status: 429 });
  }
}
```

---
Valexo operates on a deterministic, rule-based recommendation engine whose behavior is guided by an independent AI-driven policy layer. This layer periodically analyzes aggregated platform performance metrics—such as conversion rates, time to complete exchanges, and category-level outcomes—without accessing any personal data or individual user interactions. The AI does not make direct product decisions or select items or users; instead, it proposes controlled, numeric adjustments to algorithmic parameters such as weights, exploration rates, and penalties. All AI-generated policies are strictly validated, stored as inactive versions, and require explicit administrative review and gradual rollout before activation, with instant rollback available at any time. This architecture enables continuous, data-driven optimization while preserving full transparency, auditability, cost control, and human oversight across the platform.

## Summary

This implementation:
- Uses Lovable AI (Gemini) to analyze aggregated platform metrics
- Enforces strict output constraints via tool calling
- Validates all AI outputs before storage
- Stores new policies as inactive (requires admin activation)
- Integrates with existing rollout system for A/B testing
- Provides instant rollback capability
- Maintains full audit trail of all AI-generated policies

