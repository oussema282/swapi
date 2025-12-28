import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
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
    const apiKey = Deno.env.get('DODO_PAYMENTS_API_KEY');
    
    if (!apiKey) {
      console.error('Missing DODO_PAYMENTS_API_KEY environment variable');
      return new Response(
        JSON.stringify({ error: 'Payment configuration error' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Get origin from request headers to build return URL
    const body = await req.json().catch(() => ({}));
    const origin = body.origin || Deno.env.get('APP_URL') || 'https://promonet.digital';
    const returnUrl = `${origin}/checkout/success`;

    console.log('Creating Dodo Payments checkout session with return URL:', returnUrl);

    const response = await fetch('https://test.dodopayments.com/checkouts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        product_cart: [
          { product_id: 'pdt_0NUqlt6o4xC9TVkFhOCA3', quantity: 1 }
        ],
        return_url: returnUrl,
        metadata: { 
          source: 'lovable', 
          site: origin 
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Dodo Payments API error:', errorText);
      return new Response(
        JSON.stringify({ error: 'Failed to create checkout session', details: errorText }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const session = await response.json();
    console.log('Checkout session created:', session.session_id);

    return new Response(
      JSON.stringify({ 
        checkout_url: session.checkout_url, 
        session_id: session.session_id 
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error creating checkout session:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
