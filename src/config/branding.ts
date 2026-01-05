/**
 * Valexo Branding Configuration
 * 
 * Single source of truth for app name and branding.
 * Import this constant everywhere to avoid hardcoded brand names.
 */

export const APP_NAME = 'Valexo';
export const APP_TAGLINE = 'Trade what you have. Get what you want.';
export const APP_DESCRIPTION = 'A smart exchange platform connecting people across Europe';
export const PRO_PLAN_NAME = `${APP_NAME} Pro`;

export const BRAND = {
  name: APP_NAME,
  tagline: APP_TAGLINE,
  description: APP_DESCRIPTION,
  proPlan: PRO_PLAN_NAME,
} as const;
