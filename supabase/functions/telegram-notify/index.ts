import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const TELEGRAM_BOT_TOKEN = Deno.env.get('TELEGRAM_BOT_TOKEN');
    const TELEGRAM_CHAT_ID = Deno.env.get('TELEGRAM_CHAT_ID');

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error('Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID');
      return new Response(JSON.stringify({ error: 'Missing config' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const { event, data } = await req.json();

    let message = '';

    if (event === 'new_user') {
      message = [
        '🆕 <b>New User Signed Up!</b>',
        '',
        `📧 Email: ${data.email || 'N/A'}`,
        `📛 Name: ${data.name || 'N/A'}`,
        '',
        `🕐 ${new Date().toLocaleString('en-US', { timeZone: 'UTC' })}`,
      ].join('\n');
    } else if (event === 'profile_complete') {
      message = [
        '✅ <b>Profile Completed!</b>',
        '',
        `📛 Name: ${data.name || 'N/A'}`,
        `📧 Email: ${data.email || 'N/A'}`,
        `📱 Phone: ${data.phone || 'N/A'}`,
        `🎂 Birthday: ${data.birthday || 'N/A'}`,
        `👤 Gender: ${data.gender || 'N/A'}`,
        '',
        `🕐 ${new Date().toLocaleString('en-US', { timeZone: 'UTC' })}`,
      ].join('\n');
    } else if (event === 'new_item') {
      message = [
        '📦 <b>New Item Listed!</b>',
        '',
        `📝 Title: ${data.title || 'N/A'}`,
        `📂 Category: ${data.category || 'N/A'}`,
        `✨ Condition: ${data.condition || 'N/A'}`,
        `🎁 Gift: ${data.is_gift ? 'Yes' : 'No'}`,
        `👤 Owner: ${data.owner_name || 'N/A'}`,
        '',
        `🕐 ${new Date().toLocaleString('en-US', { timeZone: 'UTC' })}`,
      ].join('\n');
    } else {
      return new Response(JSON.stringify({ error: 'Unknown event' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const telegramRes = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    const telegramData = await telegramRes.json();

    if (!telegramRes.ok) {
      console.error('Telegram API error:', JSON.stringify(telegramData));
      return new Response(JSON.stringify({ error: 'Telegram send failed' }), {
        status: 502,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: 'Internal error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
