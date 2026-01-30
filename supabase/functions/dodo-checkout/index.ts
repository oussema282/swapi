import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Dodo Payments product IDs
const PRODUCT_IDS = {
  pro: 'pdt_0NUqlt6o4xC9TVkFhOCA3',           // $9.99/month Pro subscription
  swipes: 'pdt_0NXQsvv5khSsTgVYJNpfR',        // Extra Swipes $1.99
  deal_invites: 'pdt_0NXQtDGs03KuzLLY25kCj',  // Extra Deal Invites $0.99
  map: 'pdt_0NXQtPneUUAPEE9Uhwfky',           // Extra Map Views $0.99
  search: 'pdt_0NXQtYf8SWSvjMZBvJ2My',        // Extra Searches $0.99
  items: 'pdt_0NXQtjChdcX0ETonXDsbf',         // Extra Item Slots $1.49
} as const;

type ProductType = keyof typeof PRODUCT_IDS;

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

    const body = await req.json().catch(() => ({}));
    const origin = body.origin || Deno.env.get('APP_URL') || 'https://promonet.digital';
    const productType: ProductType = body.product_type || 'pro';
    const userId = body.user_id;
    
    // Validate product type
    if (!PRODUCT_IDS[productType]) {
      return new Response(
        JSON.stringify({ error: 'Invalid product type' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
    
    const productId = PRODUCT_IDS[productType];
    const returnUrl = `${origin}/checkout/success?product_type=${productType}`;

    console.log(`Creating Dodo Payments checkout for product: ${productType} (${productId})`);

    const response = await fetch('https://test.dodopayments.com/checkouts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        product_cart: [
          { product_id: productId, quantity: 1 }
        ],
        return_url: returnUrl,
        metadata: { 
          source: 'lovable', 
          site: origin,
          product_type: productType,
          user_id: userId || 'anonymous'
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
        session_id: session.session_id,
        product_type: productType
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
