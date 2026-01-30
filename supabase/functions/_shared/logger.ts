/**
 * Structured logging utility for Edge Functions
 * 
 * Usage:
 * import { log } from '../_shared/logger.ts';
 * log('info', 'Processing request', { user_id: '123' });
 */

export function log(
  level: 'info' | 'warn' | 'error', 
  message: string, 
  data?: Record<string, unknown>
): void {
  // Never log sensitive data
  const sanitizedData = data ? sanitize(data) : undefined;
  
  console.log(JSON.stringify({
    level,
    message,
    ...sanitizedData,
    timestamp: new Date().toISOString(),
  }));
}

// Fields that should never be logged
const SENSITIVE_FIELDS = new Set([
  'password',
  'secret',
  'token',
  'api_key',
  'apikey',
  'authorization',
  'auth',
  'credential',
  'private_key',
  'access_token',
  'refresh_token',
  'session_token',
]);

function sanitize(data: Record<string, unknown>): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  
  for (const [key, value] of Object.entries(data)) {
    const lowerKey = key.toLowerCase();
    
    if (SENSITIVE_FIELDS.has(lowerKey) || 
        lowerKey.includes('password') || 
        lowerKey.includes('secret') ||
        lowerKey.includes('token')) {
      result[key] = '[REDACTED]';
    } else if (typeof value === 'object' && value !== null) {
      result[key] = sanitize(value as Record<string, unknown>);
    } else {
      result[key] = value;
    }
  }
  
  return result;
}
