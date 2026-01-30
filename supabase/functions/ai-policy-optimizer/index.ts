import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { log } from "../_shared/logger.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// Weight bounds for validation
const WEIGHT_BOUNDS: Record<string, [number, number]> = {
  geoScore: [0.10, 0.40],
  categorySimilarity: [0.05, 0.30],
  exchangeCompatibility: [0.10, 0.35],
  behaviorAffinity: [0.05, 0.25],
  freshness: [0.02, 0.15],
  conditionScore: [0.02, 0.15],
  reciprocalBoost: [0.05, 0.25],
};

// Exploration policy bounds
const EXPLORATION_BOUNDS = {
  randomness: [0.00, 0.20],
  cold_start_boost: [0.00, 0.30],
  stale_item_penalty: [0.00, 0.50],
};

// Types
interface PolicyWeights {
  geoScore: number;
  categorySimilarity: number;
  exchangeCompatibility: number;
  behaviorAffinity: number;
  freshness: number;
  conditionScore: number;
  reciprocalBoost: number;
}

interface ExplorationPolicy {
  randomness: number;
  cold_start_boost: number;
  stale_item_penalty: number;
  cold_start_threshold_swipes?: number;
  stale_threshold_days?: number;
}

interface ReciprocalPolicy {
  priority: "low" | "medium" | "high";
  boost_cap: number;
}

interface PolicyProposal {
  policy_version: string;
  weights: PolicyWeights;
  exploration_policy: ExplorationPolicy;
  reciprocal_policy: ReciprocalPolicy;
  rationale: string[];
}

interface MetricSnapshot {
  total_swipes: number;
  total_likes: number;
  total_dislikes: number;
  like_rate: number;
  total_matches: number;
  total_completed_exchanges: number;
  match_to_exchange_conversion: number;
  avg_time_to_complete_hours: number;
  category_success_rates: Record<string, { matches: number; completed: number; conversion_rate: number }>;
  current_policy_version: string;
  current_weights: PolicyWeights;
  period_start: string;
  period_end: string;
}

interface ValidationResult {
  valid: boolean;
  errors: string[];
}

// Validate AI output
function validatePolicyOutput(output: PolicyProposal): ValidationResult {
  const errors: string[] = [];

  // 1. Check weights sum to ~1.0
  const weightsSum = Object.values(output.weights).reduce((a, b) => a + b, 0);
  if (weightsSum < 0.98 || weightsSum > 1.02) {
    errors.push(`Weights sum ${weightsSum.toFixed(3)} outside allowed range [0.98, 1.02]`);
  }

  // 2. Check each weight is within bounds
  for (const [key, [min, max]] of Object.entries(WEIGHT_BOUNDS)) {
    const value = output.weights[key as keyof PolicyWeights];
    if (value === undefined) {
      errors.push(`Missing required weight: ${key}`);
    } else if (value < min || value > max) {
      errors.push(`${key} = ${value} outside bounds [${min}, ${max}]`);
    }
  }

  // 3. Check exploration policy bounds
  const ep = output.exploration_policy;
  if (ep.randomness < EXPLORATION_BOUNDS.randomness[0] || ep.randomness > EXPLORATION_BOUNDS.randomness[1]) {
    errors.push(`randomness = ${ep.randomness} outside bounds [${EXPLORATION_BOUNDS.randomness[0]}, ${EXPLORATION_BOUNDS.randomness[1]}]`);
  }
  if (ep.cold_start_boost < EXPLORATION_BOUNDS.cold_start_boost[0] || ep.cold_start_boost > EXPLORATION_BOUNDS.cold_start_boost[1]) {
    errors.push(`cold_start_boost = ${ep.cold_start_boost} outside bounds [${EXPLORATION_BOUNDS.cold_start_boost[0]}, ${EXPLORATION_BOUNDS.cold_start_boost[1]}]`);
  }
  if (ep.stale_item_penalty < EXPLORATION_BOUNDS.stale_item_penalty[0] || ep.stale_item_penalty > EXPLORATION_BOUNDS.stale_item_penalty[1]) {
    errors.push(`stale_item_penalty = ${ep.stale_item_penalty} outside bounds [${EXPLORATION_BOUNDS.stale_item_penalty[0]}, ${EXPLORATION_BOUNDS.stale_item_penalty[1]}]`);
  }

  // 4. Check reciprocal policy
  const rp = output.reciprocal_policy;
  if (!["low", "medium", "high"].includes(rp.priority)) {
    errors.push(`reciprocal_policy.priority must be 'low', 'medium', or 'high'`);
  }
  if (rp.boost_cap < 0 || rp.boost_cap > 1) {
    errors.push(`reciprocal_policy.boost_cap = ${rp.boost_cap} outside bounds [0, 1]`);
  }

  // 5. Check version format
  if (!/^v\d+\.\d+\.\d+$/.test(output.policy_version)) {
    errors.push(`policy_version must be in semver format (e.g., 'v1.1.0')`);
  }

  return { valid: errors.length === 0, errors };
}

// Collect aggregated metrics from database
async function collectMetrics(supabaseAdmin: any): Promise<MetricSnapshot> {
  const now = new Date();
  const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  const periodStart = thirtyDaysAgo.toISOString().split('T')[0];
  const periodEnd = now.toISOString().split('T')[0];

  // Get swipe stats
  const { data: swipeStats } = await supabaseAdmin
    .from('swipes')
    .select('liked')
    .gte('created_at', thirtyDaysAgo.toISOString());

  const totalSwipes = swipeStats?.length || 0;
  const totalLikes = swipeStats?.filter((s: any) => s.liked).length || 0;
  const totalDislikes = totalSwipes - totalLikes;
  const likeRate = totalSwipes > 0 ? totalLikes / totalSwipes : 0;

  // Get match stats
  const { data: matchStats } = await supabaseAdmin
    .from('matches')
    .select('is_completed, completed_at, created_at')
    .gte('created_at', thirtyDaysAgo.toISOString());

  const totalMatches = matchStats?.length || 0;
  const completedMatches = matchStats?.filter((m: any) => m.is_completed) || [];
  const totalCompletedExchanges = completedMatches.length;
  const matchToExchangeConversion = totalMatches > 0 ? totalCompletedExchanges / totalMatches : 0;

  // Calculate average time to complete
  let avgTimeToCompleteHours = 0;
  if (completedMatches.length > 0) {
    const completionTimes = completedMatches.map((m: any) => {
      const created = new Date(m.created_at).getTime();
      const completed = new Date(m.completed_at).getTime();
      return (completed - created) / (1000 * 60 * 60); // hours
    });
    avgTimeToCompleteHours = completionTimes.reduce((a: number, b: number) => a + b, 0) / completionTimes.length;
  }

  // Get category success rates
  const { data: itemsWithMatches } = await supabaseAdmin
    .from('items')
    .select('id, category');

  const { data: matchesWithItems } = await supabaseAdmin
    .from('matches')
    .select('item_a_id, item_b_id, is_completed')
    .gte('created_at', thirtyDaysAgo.toISOString());

  // Build category stats
  const categoryStats: Record<string, { matches: number; completed: number }> = {};
  const itemCategoryMap = new Map((itemsWithMatches || []).map((i: any) => [i.id, i.category]));

  for (const match of matchesWithItems || []) {
    const catA = itemCategoryMap.get(match.item_a_id) as string | undefined;
    const catB = itemCategoryMap.get(match.item_b_id) as string | undefined;
    
    const categories = [catA, catB].filter((c): c is string => typeof c === 'string');
    for (const cat of categories) {
      if (!categoryStats[cat]) {
        categoryStats[cat] = { matches: 0, completed: 0 };
      }
      categoryStats[cat].matches++;
      if (match.is_completed) {
        categoryStats[cat].completed++;
      }
    }
  }

  const categorySuccessRates: Record<string, { matches: number; completed: number; conversion_rate: number }> = {};
  for (const [cat, stats] of Object.entries(categoryStats)) {
    categorySuccessRates[cat] = {
      ...stats,
      conversion_rate: stats.matches > 0 ? stats.completed / stats.matches : 0,
    };
  }

  // Get current active policy
  const { data: currentPolicy } = await supabaseAdmin
    .rpc('get_active_policy')
    .single();

  return {
    total_swipes: totalSwipes,
    total_likes: totalLikes,
    total_dislikes: totalDislikes,
    like_rate: likeRate,
    total_matches: totalMatches,
    total_completed_exchanges: totalCompletedExchanges,
    match_to_exchange_conversion: matchToExchangeConversion,
    avg_time_to_complete_hours: avgTimeToCompleteHours,
    category_success_rates: categorySuccessRates,
    current_policy_version: currentPolicy?.policy_version || 'v1.0.0',
    current_weights: currentPolicy?.weights || {},
    period_start: periodStart,
    period_end: periodEnd,
  };
}

// Get next version number
function getNextVersion(currentVersion: string): string {
  const match = currentVersion.match(/^v(\d+)\.(\d+)\.(\d+)$/);
  if (!match) return 'v1.1.0';
  
  const [, major, minor, patch] = match.map(Number);
  return `v${major}.${minor + 1}.0`;
}

// Call Lovable AI with tool calling
async function callLovableAI(metrics: MetricSnapshot, currentPolicy: any): Promise<PolicyProposal> {
  const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
  if (!LOVABLE_API_KEY) {
    throw new Error("LOVABLE_API_KEY is not configured");
  }

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
- Prefer SMALL incremental changes (max 0.05 per weight from current values)
- Provide brief rationale for each change
- If metrics are insufficient, return current policy unchanged`;

  const userPrompt = `Analyze these platform metrics and propose optimized policy parameters:

CURRENT METRICS (last 30 days):
- Total swipes: ${metrics.total_swipes}
- Like rate: ${(metrics.like_rate * 100).toFixed(1)}%
- Total matches: ${metrics.total_matches}
- Completed exchanges: ${metrics.total_completed_exchanges}
- Match-to-exchange conversion: ${(metrics.match_to_exchange_conversion * 100).toFixed(1)}%
- Average time to complete: ${metrics.avg_time_to_complete_hours.toFixed(1)} hours

CATEGORY PERFORMANCE:
${Object.entries(metrics.category_success_rates).map(([cat, stats]) => 
  `- ${cat}: ${stats.matches} matches, ${stats.completed} completed (${(stats.conversion_rate * 100).toFixed(1)}%)`
).join('\n')}

CURRENT POLICY (${metrics.current_policy_version}):
Weights: ${JSON.stringify(metrics.current_weights, null, 2)}

Based on this data, propose an optimized policy. The new version should be ${getNextVersion(metrics.current_policy_version)}.`;

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

  const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "google/gemini-3-flash-preview",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ],
      tools,
      tool_choice: { type: "function", function: { name: "propose_policy" } },
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    log('error', 'Lovable AI request failed', { status: response.status, error: errorText });
    
    if (response.status === 429) {
      throw new Error("AI rate limit exceeded. Please try again later.");
    }
    if (response.status === 402) {
      throw new Error("AI credits exhausted. Please add funds to your workspace.");
    }
    throw new Error(`AI request failed: ${response.status}`);
  }

  const data = await response.json();
  
  // Extract tool call arguments
  const toolCall = data.choices?.[0]?.message?.tool_calls?.[0];
  if (!toolCall || toolCall.function.name !== "propose_policy") {
    throw new Error("AI did not return expected tool call");
  }

  const proposal = JSON.parse(toolCall.function.arguments);
  return proposal as PolicyProposal;
}

// Store new policy (inactive by default)
async function storeNewPolicy(
  supabaseAdmin: any, 
  proposal: PolicyProposal, 
  currentPolicy: any
): Promise<string> {
  const { error } = await supabaseAdmin
    .from('algorithm_policies')
    .insert({
      policy_version: proposal.policy_version,
      weights: proposal.weights,
      exploration_policy: {
        ...proposal.exploration_policy,
        cold_start_threshold_swipes: proposal.exploration_policy.cold_start_threshold_swipes || 5,
        stale_threshold_days: proposal.exploration_policy.stale_threshold_days || 14,
      },
      reciprocal_policy: proposal.reciprocal_policy,
      active: false,
      description: proposal.rationale.join('; '),
      created_by: 'ai_optimizer',
    });

  if (error) {
    throw new Error(`Failed to store policy: ${error.message}`);
  }

  return proposal.policy_version;
}

// Store metrics snapshot
async function storeMetricsSnapshot(
  supabaseAdmin: any,
  metrics: MetricSnapshot,
  policyVersion: string
): Promise<void> {
  const { error } = await supabaseAdmin
    .from('algorithm_policy_metrics')
    .insert({
      policy_version: policyVersion,
      metric_snapshot: metrics,
      period_start: metrics.period_start,
      period_end: metrics.period_end,
    });

  if (error) {
    log('warn', 'Failed to store metrics snapshot', { error: error.message });
  }
}

serve(async (req) => {
  // Handle CORS
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Initialize Supabase admin client
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    
    if (!supabaseUrl || !supabaseServiceKey) {
      throw new Error("Missing Supabase configuration");
    }

    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

    // 1. Verify admin authorization
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { 
        status: 401, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      });
    }

    const token = authHeader.replace("Bearer ", "");
    const { data: { user }, error: authError } = await supabaseAdmin.auth.getUser(token);
    
    if (authError || !user) {
      return new Response(JSON.stringify({ error: "Invalid token" }), { 
        status: 401, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      });
    }

    // Check admin role
    const { data: isAdmin } = await supabaseAdmin
      .rpc('is_admin', { _user_id: user.id });

    if (!isAdmin) {
      return new Response(JSON.stringify({ error: "Admin access required" }), { 
        status: 403, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      });
    }

    // 2. Rate limiting - check last AI optimization
    const { data: lastRun } = await supabaseAdmin
      .from('algorithm_policies')
      .select('created_at')
      .eq('created_by', 'ai_optimizer')
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle();

    if (lastRun) {
      const hoursSinceLastRun = (Date.now() - new Date(lastRun.created_at).getTime()) / (1000 * 60 * 60);
      if (hoursSinceLastRun < 24) {
        return new Response(JSON.stringify({ 
          error: 'Rate limited', 
          message: `Last optimization was ${hoursSinceLastRun.toFixed(1)} hours ago. Minimum interval is 24 hours.`
        }), { 
          status: 429, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        });
      }
    }

    log('info', 'Starting AI policy optimization', { user_id: user.id });

    // 3. Collect aggregated metrics
    const metrics = await collectMetrics(supabaseAdmin);
    log('info', 'Collected metrics', { 
      total_swipes: metrics.total_swipes,
      total_matches: metrics.total_matches,
      conversion: metrics.match_to_exchange_conversion 
    });

    // Check if we have enough data
    if (metrics.total_swipes < 100) {
      return new Response(JSON.stringify({ 
        error: 'Insufficient data', 
        message: `Need at least 100 swipes for optimization. Current: ${metrics.total_swipes}`
      }), { 
        status: 400, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      });
    }

    // 4. Load current policy
    const { data: currentPolicy } = await supabaseAdmin
      .rpc('get_active_policy')
      .maybeSingle();

    // 5. Call Lovable AI with tool calling
    const aiResponse = await callLovableAI(metrics, currentPolicy);
    log('info', 'Received AI proposal', { version: aiResponse.policy_version });

    // 6. Validate AI output
    const validation = validatePolicyOutput(aiResponse);
    if (!validation.valid) {
      log('error', 'AI output validation failed', { errors: validation.errors });
      return new Response(JSON.stringify({ 
        error: 'Validation failed', 
        details: validation.errors 
      }), { 
        status: 400, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      });
    }

    // 7. Store new policy version (inactive by default)
    const newVersion = await storeNewPolicy(supabaseAdmin, aiResponse, currentPolicy);
    log('info', 'Stored new policy', { version: newVersion });

    // 8. Store metrics snapshot for current policy
    const policyVersion = (currentPolicy as { policy_version?: string })?.policy_version;
    if (policyVersion) {
      await storeMetricsSnapshot(supabaseAdmin, metrics, policyVersion);
    }

    return new Response(JSON.stringify({
      success: true,
      new_policy_version: newVersion,
      weights: aiResponse.weights,
      exploration_policy: aiResponse.exploration_policy,
      reciprocal_policy: aiResponse.reciprocal_policy,
      rationale: aiResponse.rationale,
      metrics_summary: {
        total_swipes: metrics.total_swipes,
        like_rate: metrics.like_rate,
        match_to_exchange_conversion: metrics.match_to_exchange_conversion,
      },
      message: 'Policy created but NOT activated. Admin must enable via rollouts.'
    }), { 
      headers: { ...corsHeaders, "Content-Type": "application/json" } 
    });

  } catch (error) {
    log('error', 'AI optimizer error', { error: error instanceof Error ? error.message : 'Unknown error' });
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }), { 
      status: 500, 
      headers: { ...corsHeaders, "Content-Type": "application/json" } 
    });
  }
});
