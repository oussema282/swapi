import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

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
    const { path, paths } = await req.json();

    // Support both single path and batch paths
    const pathsToSign = paths || (path ? [path] : []);

    if (pathsToSign.length === 0) {
      return new Response(
        JSON.stringify({ error: 'path or paths is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Sign URLs with 1-hour expiry
    const expiresIn = 3600; // 1 hour in seconds
    const expiresAt = Date.now() + expiresIn * 1000;

    const results: { path: string; signedUrl: string | null; error?: string }[] = [];

    for (const filePath of pathsToSign) {
      try {
        // Extract just the path portion if it's a full URL
        let storagePath = filePath;
        if (filePath.includes('/storage/v1/object/public/item-photos/')) {
          storagePath = filePath.split('/storage/v1/object/public/item-photos/')[1];
        } else if (filePath.includes('/item-photos/')) {
          storagePath = filePath.split('/item-photos/').pop() || filePath;
        }

        const { data, error } = await supabaseAdmin.storage
          .from('item-photos')
          .createSignedUrl(storagePath, expiresIn);

        if (error) {
          results.push({ path: filePath, signedUrl: null, error: error.message });
        } else {
          results.push({ path: filePath, signedUrl: data.signedUrl });
        }
      } catch (err) {
        results.push({ 
          path: filePath, 
          signedUrl: null, 
          error: err instanceof Error ? err.message : 'Unknown error' 
        });
      }
    }

    // For single path request, return simple response
    if (path && !paths) {
      const result = results[0];
      if (result.error) {
        return new Response(
          JSON.stringify({ error: result.error }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      return new Response(
        JSON.stringify({ signedUrl: result.signedUrl, expiresAt }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // For batch request, return all results
    return new Response(
      JSON.stringify({ results, expiresAt }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error creating signed URL:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
