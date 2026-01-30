import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-webhook-signature',
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
    // Dodo Payments webhook event types may vary - handle common patterns
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

    // Extract user ID from metadata if available
    const userId = body.data?.metadata?.user_id || body.metadata?.user_id;

    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Calculate expiry date (1 month from now)
    const expiresAt = new Date();
    expiresAt.setMonth(expiresAt.getMonth() + 1);

    // If we have a user ID from metadata, update directly
    if (userId) {
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
        // Check if it's a duplicate session ID (idempotency)
        if (error.code === '23505' && error.message.includes('dodo_session')) {
          log('info', 'Duplicate webhook - already processed', { session_id: sessionId });
          return new Response(
            JSON.stringify({ received: true, processed: false, reason: 'already processed' }),
            { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }
        throw error;
      }

      log('info', 'Subscription activated via webhook', { 
        user_id: userId, 
        session_id: sessionId,
        expires_at: expiresAt.toISOString() 
      });
    } else {
      // No user ID in metadata - store session for later lookup by CheckoutSuccess
      // This allows the client to poll and find their subscription
      log('info', 'Payment received without user_id metadata', { session_id: sessionId });
      
      // Try to find existing subscription with this session ID and mark as paid
      const { data: existing } = await supabaseAdmin
        .from('user_subscriptions')
        .select('*')
        .eq('dodo_session_id', sessionId)
        .maybeSingle();

      if (existing) {
        await supabaseAdmin
          .from('user_subscriptions')
          .update({
            is_pro: true,
            subscribed_at: new Date().toISOString(),
            expires_at: expiresAt.toISOString(),
          })
          .eq('dodo_session_id', sessionId);
        
        log('info', 'Updated existing subscription', { session_id: sessionId });
      }
    }

    return new Response(
      JSON.stringify({ received: true, processed: true }),
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
