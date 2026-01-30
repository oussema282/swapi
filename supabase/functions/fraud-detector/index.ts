import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { log } from "../_shared/logger.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface UserSignals {
  user_id: string;
  account_age_days: number;
  total_items: number;
  items_last_24h: number;
  items_last_7d: number;
  total_reports_received: number;
  pending_reports: number;
  has_location: boolean;
  has_avatar: boolean;
  has_bio: boolean;
  avg_item_value_claimed: number;
  max_item_value_claimed: number;
  unique_descriptions_ratio: number;
  matches_count: number;
  completed_exchanges: number;
  moderation_blocks: number;
}

interface RiskAssessment {
  risk_score: number;
  risk_level: "low" | "medium" | "high" | "critical";
  primary_concerns: string[];
  recommended_action: "none" | "monitor" | "review" | "suspend";
  reasoning: string;
}

const SYSTEM_PROMPT = `You are a fraud detection AI for Valexo, an item exchange platform.

Analyze user behavior patterns to detect scam attempts and fake listings.
You receive AGGREGATED behavioral signals, not personal data.

RISK SIGNALS TO EVALUATE:
1. Listing velocity - Creating many items quickly is suspicious (especially >5 in 24h for new accounts)
2. Account completeness - Missing location, avatar, bio slightly suspicious
3. Report history - Multiple reports from different users is very concerning
4. Value claims - Unusually high claimed values may indicate scam
5. Description patterns - Very low unique description ratio may indicate copy-paste spam
6. Moderation history - Previous content blocks are concerning
7. Exchange success - Completed exchanges indicate legitimate user

RISK LEVELS:
- low (0-25): Normal user behavior
- medium (26-50): Some concerning signals, worth monitoring
- high (51-75): Multiple red flags, needs admin review
- critical (76-100): Strong fraud indicators, recommend suspension

IMPORTANT:
- New accounts with high activity but no reports are MEDIUM risk, not HIGH
- Completed exchanges significantly reduce risk
- One-time violations should not lead to critical rating
- Consider the combination of signals, not just individual ones

Use the assess_risk tool to return your analysis.`;

const TOOLS = [
  {
    type: "function",
    function: {
      name: "assess_risk",
      description: "Return fraud risk assessment for a user",
      parameters: {
        type: "object",
        properties: {
          risk_score: { 
            type: "number", 
            description: "Risk score from 0 (safe) to 100 (definite fraud)" 
          },
          risk_level: { 
            type: "string", 
            enum: ["low", "medium", "high", "critical"],
            description: "Risk level category"
          },
          primary_concerns: {
            type: "array",
            items: { type: "string" },
            description: "Top 3 signals that raised flags",
            maxItems: 3
          },
          recommended_action: {
            type: "string",
            enum: ["none", "monitor", "review", "suspend"],
            description: "Recommended action for this user"
          },
          reasoning: {
            type: "string",
            description: "Brief explanation of the assessment"
          }
        },
        required: ["risk_score", "risk_level", "primary_concerns", "recommended_action", "reasoning"]
      }
    }
  }
];

async function collectUserSignals(supabase: any, userId: string): Promise<UserSignals> {
  const now = new Date();
  const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

  // Get profile info
  const { data: profile } = await supabase
    .from("profiles")
    .select("created_at, latitude, longitude, avatar_url, bio")
    .eq("user_id", userId)
    .single();

  // Get items
  const { data: items } = await supabase
    .from("items")
    .select("created_at, description, value_min, value_max")
    .eq("user_id", userId);

  // Get reports received
  const { data: reports } = await supabase
    .from("reports")
    .select("status")
    .eq("target_id", userId);

  // Get matches and exchanges
  const { data: matches } = await supabase
    .rpc("get_my_matches_with_items");

  const userMatches = matches?.filter((m: any) => 
    m.user_a_id === userId || m.user_b_id === userId
  ) || [];

  // Get moderation logs
  const { data: moderationLogs } = await supabase
    .from("content_moderation_logs")
    .select("action_taken")
    .eq("user_id", userId)
    .eq("action_taken", "blocked");

  // Calculate signals
  const accountAgeDays = profile 
    ? Math.floor((now.getTime() - new Date(profile.created_at).getTime()) / (1000 * 60 * 60 * 24))
    : 0;

  const itemsArray = items || [];
  const itemsLast24h = itemsArray.filter((i: any) => new Date(i.created_at) > oneDayAgo).length;
  const itemsLast7d = itemsArray.filter((i: any) => new Date(i.created_at) > sevenDaysAgo).length;

  // Calculate unique description ratio
  const descriptions = itemsArray.map((i: any) => i.description?.toLowerCase().trim()).filter(Boolean);
  const uniqueDescriptions = new Set(descriptions).size;
  const uniqueDescriptionsRatio = descriptions.length > 0 
    ? uniqueDescriptions / descriptions.length 
    : 1;

  // Calculate average/max values
  const values = itemsArray.map((i: any) => i.value_max || i.value_min || 0).filter((v: number) => v > 0);
  const avgValue = values.length > 0 ? values.reduce((a: number, b: number) => a + b, 0) / values.length : 0;
  const maxValue = values.length > 0 ? Math.max(...values) : 0;

  return {
    user_id: userId,
    account_age_days: accountAgeDays,
    total_items: itemsArray.length,
    items_last_24h: itemsLast24h,
    items_last_7d: itemsLast7d,
    total_reports_received: reports?.length || 0,
    pending_reports: reports?.filter((r: any) => r.status === "pending").length || 0,
    has_location: !!(profile?.latitude && profile?.longitude),
    has_avatar: !!profile?.avatar_url,
    has_bio: !!profile?.bio,
    avg_item_value_claimed: avgValue,
    max_item_value_claimed: maxValue,
    unique_descriptions_ratio: uniqueDescriptionsRatio,
    matches_count: userMatches.length,
    completed_exchanges: userMatches.filter((m: any) => m.is_completed).length,
    moderation_blocks: moderationLogs?.length || 0
  };
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

    // Verify admin authorization
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: "Authorization required" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const token = authHeader.replace("Bearer ", "");
    const { data: { user } } = await supabaseAdmin.auth.getUser(token);
    
    if (!user) {
      return new Response(
        JSON.stringify({ error: "Invalid token" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Check if admin
    const { data: isAdmin } = await supabaseAdmin.rpc("is_admin", { _user_id: user.id });
    if (!isAdmin) {
      return new Response(
        JSON.stringify({ error: "Admin access required" }),
        { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { run_type = "manual", user_ids } = await req.json();

    // Rate limiting - max one full scan per 24h
    if (run_type === "scheduled" || !user_ids) {
      const { data: lastRun } = await supabaseAdmin
        .from("fraud_detection_runs")
        .select("created_at")
        .eq("run_type", "scheduled")
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      if (lastRun) {
        const hoursSinceLastRun = (Date.now() - new Date(lastRun.created_at).getTime()) / (1000 * 60 * 60);
        if (hoursSinceLastRun < 24) {
          return new Response(
            JSON.stringify({ 
              error: "Rate limited", 
              message: `Last full scan was ${hoursSinceLastRun.toFixed(1)} hours ago. Minimum interval is 24 hours.`
            }),
            { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
          );
        }
      }
    }

    // Create run record
    const { data: run } = await supabaseAdmin
      .from("fraud_detection_runs")
      .insert({
        run_type,
        triggered_by: user.id
      })
      .select()
      .single();

    // Get users to analyze
    let usersToAnalyze: string[];
    if (user_ids && Array.isArray(user_ids)) {
      usersToAnalyze = user_ids;
    } else {
      // Get active users (with items or recent activity)
      const { data: profiles } = await supabaseAdmin
        .from("profiles")
        .select("user_id")
        .limit(100);
      usersToAnalyze = profiles?.map((p: any) => p.user_id) || [];
    }

    log("info", "Starting fraud detection run", { 
      run_id: run.id, 
      run_type, 
      users_count: usersToAnalyze.length 
    });

    let highRiskFound = 0;
    const actionsTaken: Record<string, number> = { none: 0, monitor: 0, review: 0, suspend: 0 };

    // Analyze each user
    for (const userId of usersToAnalyze) {
      try {
        const signals = await collectUserSignals(supabaseAdmin, userId);

        // Call AI for risk assessment
        const aiResponse = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${LOVABLE_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "google/gemini-2.5-flash",
            messages: [
              { role: "system", content: SYSTEM_PROMPT },
              {
                role: "user",
                content: `Analyze this user's behavioral signals for fraud risk:\n\n${JSON.stringify(signals, null, 2)}`
              }
            ],
            tools: TOOLS,
            tool_choice: { type: "function", function: { name: "assess_risk" } }
          }),
        });

        if (!aiResponse.ok) {
          log("warn", "AI API error for user", { userId, status: aiResponse.status });
          continue;
        }

        const data = await aiResponse.json();
        const toolCall = data.choices?.[0]?.message?.tool_calls?.[0];
        
        if (!toolCall?.function?.arguments) {
          log("warn", "No tool call in response for user", { userId });
          continue;
        }

        const assessment: RiskAssessment = JSON.parse(toolCall.function.arguments);

        // Update or insert risk score
        await supabaseAdmin
          .from("user_risk_scores")
          .upsert({
            user_id: userId,
            risk_score: assessment.risk_score,
            risk_level: assessment.risk_level,
            signals: { ...signals, ai_assessment: assessment },
            last_analyzed_at: new Date().toISOString(),
            auto_flagged: assessment.risk_level === "high" || assessment.risk_level === "critical",
            admin_reviewed: false
          }, { onConflict: "user_id" });

        if (assessment.risk_level === "high" || assessment.risk_level === "critical") {
          highRiskFound++;
        }
        actionsTaken[assessment.recommended_action]++;

        log("info", "User risk assessed", { 
          userId, 
          risk_level: assessment.risk_level,
          risk_score: assessment.risk_score 
        });

      } catch (userError) {
        const errorMessage = userError instanceof Error ? userError.message : "Unknown error";
        log("error", "Error analyzing user", { userId, error: errorMessage });
      }
    }

    // Update run record
    await supabaseAdmin
      .from("fraud_detection_runs")
      .update({
        users_analyzed: usersToAnalyze.length,
        high_risk_found: highRiskFound,
        actions_taken: actionsTaken,
        completed_at: new Date().toISOString()
      })
      .eq("id", run.id);

    log("info", "Fraud detection run complete", { 
      run_id: run.id, 
      users_analyzed: usersToAnalyze.length,
      high_risk_found: highRiskFound
    });

    return new Response(
      JSON.stringify({
        success: true,
        run_id: run.id,
        users_analyzed: usersToAnalyze.length,
        high_risk_found: highRiskFound,
        actions_taken: actionsTaken
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    log("error", "Fraud detector error", { error: errorMessage });
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
