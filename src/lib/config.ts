/**
 * Application Configuration
 * 
 * This module provides environment-driven configuration for the application.
 * All external dependencies are injected via this configuration.
 */

export interface AppConfig {
  // App branding
  appName: string;
  appLogo?: string;
  primaryColor?: string;
  accentColor?: string;
  
  // Backend configuration
  supabase: {
    url: string;
    anonKey: string;
    projectId: string;
  };
  
  // Feature toggles
  features: {
    chat: boolean;
    ratings: boolean;
    recommendations: boolean;
    geoFiltering: boolean;
    mapView: boolean;
    subscriptions: boolean;
  };
  
  // Limits for free users
  freeLimits: {
    swipesPerDay: number;
    searchesPerDay: number;
    dealInvitesPerDay: number;
    mapUsesPerDay: number;
    maxItems: number;
  };
  
  // External services (optional)
  mapbox?: {
    publicToken: string;
  };
  
  // Setup status
  isConfigured: boolean;
}

// Default configuration
const defaultConfig: AppConfig = {
  appName: 'SwapMarket',
  supabase: {
    url: '',
    anonKey: '',
    projectId: '',
  },
  features: {
    chat: true,
    ratings: true,
    recommendations: true,
    geoFiltering: true,
    mapView: true,
    subscriptions: true,
  },
  freeLimits: {
    swipesPerDay: 50,
    searchesPerDay: 3,
    dealInvitesPerDay: 3,
    mapUsesPerDay: 3,
    maxItems: 4,
  },
  isConfigured: false,
};

// Local storage key for configuration
const CONFIG_STORAGE_KEY = 'app_config';

/**
 * Load configuration from environment variables and local storage
 */
export function loadConfig(): AppConfig {
  // Start with defaults
  let config = { ...defaultConfig };
  
  // Load from environment variables (build-time)
  const envUrl = import.meta.env.VITE_SUPABASE_URL;
  const envKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY;
  const envProjectId = import.meta.env.VITE_SUPABASE_PROJECT_ID;
  
  if (envUrl && envKey) {
    config.supabase = {
      url: envUrl,
      anonKey: envKey,
      projectId: envProjectId || extractProjectId(envUrl),
    };
    config.isConfigured = true;
  }
  
  // Load custom branding from env
  if (import.meta.env.VITE_APP_NAME) {
    config.appName = import.meta.env.VITE_APP_NAME;
  }
  
  // Load from local storage (runtime override)
  try {
    const stored = localStorage.getItem(CONFIG_STORAGE_KEY);
    if (stored) {
      const storedConfig = JSON.parse(stored) as Partial<AppConfig>;
      config = mergeConfig(config, storedConfig);
    }
  } catch {
    // Ignore storage errors
  }
  
  return config;
}

/**
 * Save configuration to local storage
 */
export function saveConfig(config: Partial<AppConfig>): void {
  try {
    const current = loadConfig();
    const merged = mergeConfig(current, config);
    localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(merged));
  } catch {
    console.error('Failed to save configuration');
  }
}

/**
 * Clear stored configuration
 */
export function clearConfig(): void {
  try {
    localStorage.removeItem(CONFIG_STORAGE_KEY);
  } catch {
    // Ignore
  }
}

/**
 * Check if the app is properly configured
 */
export function isAppConfigured(): boolean {
  const config = loadConfig();
  return !!(config.supabase.url && config.supabase.anonKey);
}

/**
 * Extract project ID from Supabase URL
 */
function extractProjectId(url: string): string {
  try {
    const match = url.match(/https:\/\/([^.]+)\.supabase\.co/);
    return match ? match[1] : '';
  } catch {
    return '';
  }
}

/**
 * Deep merge two config objects
 */
function mergeConfig(base: AppConfig, override: Partial<AppConfig>): AppConfig {
  return {
    ...base,
    ...override,
    supabase: {
      ...base.supabase,
      ...(override.supabase || {}),
    },
    features: {
      ...base.features,
      ...(override.features || {}),
    },
    freeLimits: {
      ...base.freeLimits,
      ...(override.freeLimits || {}),
    },
    mapbox: override.mapbox || base.mapbox,
  };
}

// Singleton config instance
let configInstance: AppConfig | null = null;

/**
 * Get the current configuration (cached)
 */
export function getConfig(): AppConfig {
  if (!configInstance) {
    configInstance = loadConfig();
  }
  return configInstance;
}

/**
 * Refresh the configuration cache
 */
export function refreshConfig(): AppConfig {
  configInstance = loadConfig();
  return configInstance;
}
