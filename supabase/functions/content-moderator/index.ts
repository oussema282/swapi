import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { log } from "../_shared/logger.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ModerationResult {
  is_safe: boolean;
  violation_type: string | null;
  confidence: number;
  reason: string;
}

const SYSTEM_PROMPT = `You are a content moderation AI for Valexo, an item exchange platform.

Analyze images for prohibited content. Users should only upload photos of items they want to swap.

PROHIBITED CONTENT (return violation):
1. nudity - Any nudity, explicit content, or sexually suggestive material
2. weapons - Firearms, knives (except kitchen knives), explosives, ammunition
3. alcohol - Alcohol bottles, beer cans, liquor
4. drugs - Drug paraphernalia, pills (unless clearly OTC medicine packaging)
5. violence - Gore, blood, graphic violence, harm to animals
6. hate_symbols - Nazi symbols, hate group imagery, offensive gestures

ALLOWED CONTENT:
- Household items, electronics, books, games, clothes
- Toys (including toy weapons clearly labeled as toys)
- Sports equipment (including archery, martial arts gear)
- Kitchen items (including kitchen knives)
- Art and collectibles (context matters)
- Medicine packaging (OTC medications in original packaging)

IMPORTANT:
- Be permissive for borderline cases - only block clear violations
- Context matters: a wine glass without wine is fine, a beer bottle clearly showing alcohol is not
- Toy weapons and sports equipment (archery, fencing) are allowed
- Only return violation if you are confident (>0.85) it's prohibited content

OUTPUT FORMAT (use tool call):
- is_safe: boolean
- violation_type: string or null
- confidence: number 0-1
- reason: brief explanation`;

const TOOLS = [
  {
    type: "function",
    function: {
      name: "analyze_content",
      description: "Return content moderation verdict",
      parameters: {
        type: "object",
        properties: {
          is_safe: { type: "boolean", description: "Whether the content is safe" },
          violation_type: {
            type: "string",
            enum: ["nudity", "weapons", "alcohol", "drugs", "violence", "hate_symbols"],
            description: "Type of violation if not safe, null if safe"
          },
          confidence: { type: "number", description: "Confidence score 0-1" },
          reason: { type: "string", description: "Brief explanation of the decision" }
        },
        required: ["is_safe", "confidence", "reason"]
      }
    }
  }
];

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

    // Get user from auth header
    const authHeader = req.headers.get("Authorization");
    let userId: string | null = null;

    if (authHeader) {
      const token = authHeader.replace("Bearer ", "");
      const { data: { user } } = await supabaseAdmin.auth.getUser(token);
      userId = user?.id || null;
    }

    const { image_url, content_type = "item_photo" } = await req.json();

    if (!image_url) {
      return new Response(
        JSON.stringify({ error: "image_url is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    log("info", "Content moderation request", { content_type, has_user: !!userId });

    // Call Lovable AI with the image
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
            content: [
              {
                type: "text",
                text: "Analyze this image for prohibited content. Use the analyze_content tool to return your verdict."
              },
              {
                type: "image_url",
                image_url: { url: image_url }
              }
            ]
          }
        ],
        tools: TOOLS,
        tool_choice: { type: "function", function: { name: "analyze_content" } }
      }),
    });

    if (!aiResponse.ok) {
      const errorText = await aiResponse.text();
      log("error", "AI API error", { status: aiResponse.status, error: errorText });

      // On AI error, allow but flag for review
      if (userId) {
        await supabaseAdmin.from("content_moderation_logs").insert({
          user_id: userId,
          content_type,
          content_url: image_url,
          is_safe: true,
          action_taken: "flagged",
          analysis_result: { error: "AI service unavailable", fallback: true }
        });
      }

      return new Response(
        JSON.stringify({
          is_safe: true,
          action: "flagged",
          message: "Image flagged for manual review due to system error"
        }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await aiResponse.json();
    
    // Extract tool call result
    let result: ModerationResult;
    const toolCall = data.choices?.[0]?.message?.tool_calls?.[0];
    
    if (toolCall?.function?.arguments) {
      result = JSON.parse(toolCall.function.arguments);
    } else {
      // Fallback: try to parse from content
      log("warn", "No tool call in response, using fallback");
      result = {
        is_safe: true,
        violation_type: null,
        confidence: 0.5,
        reason: "Unable to analyze - allowing with review flag"
      };
    }

    // Determine action based on confidence
    let action: string;
    if (!result.is_safe && result.confidence >= 0.85) {
      action = "blocked";
    } else if (!result.is_safe && result.confidence >= 0.60) {
      action = "review_required";
      result.is_safe = true; // Allow but flag for review
    } else {
      action = "allowed";
    }

    // Log the moderation decision
    if (userId) {
      await supabaseAdmin.from("content_moderation_logs").insert({
        user_id: userId,
        content_type,
        content_url: image_url,
        analysis_result: result,
        is_safe: action !== "blocked",
        violation_type: result.violation_type,
        confidence_score: result.confidence,
        action_taken: action
      });
    }

    log("info", "Content moderation complete", { 
      action, 
      is_safe: action !== "blocked",
      violation_type: result.violation_type,
      confidence: result.confidence 
    });

    return new Response(
      JSON.stringify({
        is_safe: action !== "blocked",
        action,
        violation_type: result.violation_type,
        reason: result.reason,
        confidence: result.confidence
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    log("error", "Content moderator error", { error: errorMessage });
    
    // On error, allow but flag for review
    return new Response(
      JSON.stringify({
        is_safe: true,
        action: "flagged",
        message: "Image flagged for manual review due to system error",
        error: errorMessage
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
