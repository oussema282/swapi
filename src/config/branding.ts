/**
 * echange.tn Branding Configuration
 *
 * Single source of truth for app name and branding.
 */

export const APP_NAME = 'echange.tn';
export const APP_TAGLINE = 'Trade what you have. Get what you want.';
export const APP_DESCRIPTION = 'Tunisia\'s smart barter exchange platform — swap items locally with people near you.';
export const PRO_PLAN_NAME = `${APP_NAME} Pro`;

export const BRAND = {
  name: APP_NAME,
  tagline: APP_TAGLINE,
  description: APP_DESCRIPTION,
  proPlan: PRO_PLAN_NAME,
} as const;
