# CAPTCHA Integration Guide

This document describes how to integrate CAPTCHA protection into the Valexo application to prevent bot abuse.

## Recommended Solutions

### Option 1: Cloudflare Turnstile (Recommended)

Turnstile is privacy-focused and doesn't require solving challenges in most cases.

**Integration Points:**
- Sign-up form: `src/components/landing/AuthSection.tsx`
- Any sensitive action forms

**Installation:**
```bash
npm install @marsidev/react-turnstile
```

**Implementation Example:**
```tsx
import { Turnstile } from '@marsidev/react-turnstile';

function SignupForm() {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  return (
    <form>
      {/* ...form fields... */}
      
      <Turnstile
        siteKey="YOUR_SITE_KEY"
        onSuccess={(token) => setCaptchaToken(token)}
      />
      
      <button disabled={!captchaToken}>
        Sign Up
      </button>
    </form>
  );
}
```

**Server-Side Verification:**
```typescript
// In your edge function
const verifyResponse = await fetch(
  'https://challenges.cloudflare.com/turnstile/v0/siteverify',
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      secret: Deno.env.get('TURNSTILE_SECRET_KEY'),
      response: captchaToken,
    }),
  }
);
const result = await verifyResponse.json();
if (!result.success) {
  return new Response(JSON.stringify({ error: 'CAPTCHA failed' }), { status: 400 });
}
```

### Option 2: hCaptcha

hCaptcha is another privacy-respecting alternative.

**Installation:**
```bash
npm install @hcaptcha/react-hcaptcha
```

**Implementation:**
```tsx
import HCaptcha from '@hcaptcha/react-hcaptcha';

<HCaptcha
  sitekey="YOUR_SITE_KEY"
  onVerify={(token) => setCaptchaToken(token)}
/>
```

## Integration Points

### 1. Sign-Up Form
Location: `src/components/landing/AuthSection.tsx`

Add CAPTCHA before the sign-up button to prevent automated account creation.

### 2. Login Form (Optional)
Consider adding after 3 failed attempts to prevent brute-force attacks.

### 3. Report Submission
Location: `src/components/report/ReportButton.tsx`

Optional - prevents spam reports.

### 4. Deal Invite Sending
Location: `src/components/deals/DealInviteButton.tsx`

Optional - prevents spam invites.

## Environment Variables Required

Add to your secrets:
- `TURNSTILE_SITE_KEY` (client-side, can be in .env)
- `TURNSTILE_SECRET_KEY` (server-side only, use Supabase secrets)

## Rate Limiting

In addition to CAPTCHA, consider:

1. **Supabase Built-in Rate Limiting**: Edge Functions have default rate limits
2. **Cloudflare Rate Limiting**: Available on paid plans
3. **Custom Rate Limiting**: Use database counters (already implemented for swipes via `daily_usage` table)

## Current Implementation Status

- [ ] CAPTCHA on signup form
- [ ] CAPTCHA on login after failures
- [x] Rate limiting via daily_usage table
- [x] Email verification required
