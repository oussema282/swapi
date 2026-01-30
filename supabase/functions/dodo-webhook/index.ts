import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-webhook-signature',
};

// Feature upgrade bonuses (must match FEATURE_UPGRADES in useSubscription.tsx)
const FEATURE_BONUSES: Record<string, number> = {
  swipes: 100,
  deal_invites: 20,
  map: 20,
  search: 20,
  items: 5,
};

// Structured logging helper
function log(level: 'info' | 'warn' | 'error', message: string, data?: Record<string, unknown>) {
  console.log(JSON.stringify({
    level,
    message,
    ...data,
    timestamp: new Date().toISOString(),
  }));
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  try {
    const body = await req.json();
    
    log('info', 'Webhook received', { 
      event_type: body.type,
      session_id: body.data?.session_id || body.session_id,
    });

    // Verify this is a payment success event
    const eventType = body.type || body.event;
    const isPaymentSuccess = 
      eventType === 'payment.succeeded' ||
      eventType === 'checkout.completed' ||
      eventType === 'payment_intent.succeeded' ||
      body.status === 'succeeded' ||
      body.status === 'completed';

    if (!isPaymentSuccess) {
      log('info', 'Non-payment event received, ignoring', { event_type: eventType });
      return new Response(
        JSON.stringify({ received: true, processed: false, reason: 'non-payment event' }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Extract session ID from various possible locations
    const sessionId = 
      body.data?.session_id || 
      body.session_id || 
      body.data?.checkout_session_id ||
      body.checkout_session_id ||
      body.data?.id;

    if (!sessionId) {
      log('warn', 'No session ID in webhook payload');
      return new Response(
        JSON.stringify({ error: 'No session ID found' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Extract user ID and product type from metadata
    const userId = body.data?.metadata?.user_id || body.metadata?.user_id;
    const productType = body.data?.metadata?.product_type || body.metadata?.product_type || 'pro';

    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Calculate expiry date (1 month from now)
    const expiresAt = new Date();
    expiresAt.setMonth(expiresAt.getMonth() + 1);

    if (!userId) {
      log('warn', 'No user_id in webhook metadata', { session_id: sessionId });
      return new Response(
        JSON.stringify({ received: true, processed: false, reason: 'no user_id' }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Handle based on product type
    if (productType === 'pro') {
      // Pro subscription
      const { error } = await supabaseAdmin
        .from('user_subscriptions')
        .upsert({
          user_id: userId,
          is_pro: true,
          subscribed_at: new Date().toISOString(),
          expires_at: expiresAt.toISOString(),
          dodo_session_id: sessionId,
        }, { 
          onConflict: 'user_id',
          ignoreDuplicates: false 
        });

      if (error) {
        if (error.code === '23505' && error.message.includes('dodo_session')) {
          log('info', 'Duplicate webhook - already processed', { session_id: sessionId });
          return new Response(
            JSON.stringify({ received: true, processed: false, reason: 'already processed' }),
            { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }
        throw error;
      }

      log('info', 'Pro subscription activated', { 
        user_id: userId, 
        session_id: sessionId,
        expires_at: expiresAt.toISOString() 
      });
    } else {
      // Feature upgrade (swipes, deal_invites, map, search, items)
      const bonusAmount = FEATURE_BONUSES[productType];
      
      if (!bonusAmount) {
        log('warn', 'Unknown product type', { product_type: productType });
        return new Response(
          JSON.stringify({ received: true, processed: false, reason: 'unknown product type' }),
          { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Get existing upgrade to add to bonus
      const { data: existing } = await supabaseAdmin
        .from('feature_upgrades')
        .select('bonus_amount')
        .eq('user_id', userId)
        .eq('feature_type', productType)
        .maybeSingle();

      const currentBonus = existing?.bonus_amount || 0;
      const newBonus = currentBonus + bonusAmount;

      const { error } = await supabaseAdmin
        .from('feature_upgrades')
        .upsert({
          user_id: userId,
          feature_type: productType,
          bonus_amount: newBonus,
          expires_at: expiresAt.toISOString(),
        }, { 
          onConflict: 'user_id,feature_type',
          ignoreDuplicates: false 
        });

      if (error) {
        throw error;
      }

      log('info', 'Feature upgrade activated', { 
        user_id: userId,
        feature_type: productType,
        bonus_added: bonusAmount,
        total_bonus: newBonus,
        expires_at: expiresAt.toISOString() 
      });
    }

    return new Response(
      JSON.stringify({ received: true, processed: true, product_type: productType }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    log('error', 'Webhook processing error', { 
      error: error instanceof Error ? error.message : 'Unknown error' 
    });
    
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
