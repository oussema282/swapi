import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { APP_NAME } from '@/config/branding';

export default function WhitePaper() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-xl font-bold">{APP_NAME} – Technical Documentation</h1>
            <p className="text-sm text-muted-foreground">Last Updated: January 2025</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="prose prose-sm dark:prose-invert max-w-none space-y-8">
          
          {/* 1. System Overview */}
          <section>
            <h2>1. System Overview</h2>
            <p>
              <strong>{APP_NAME}</strong> is a barter/exchange marketplace application built with React, TypeScript, and Supabase (via Lovable Cloud). 
              Users list items they want to exchange, swipe on items from other users (Tinder-style), and when mutual interest is detected, 
              a match is created enabling chat-based negotiation.
            </p>
            
            <h3>Technology Stack</h3>
            <ul>
              <li><strong>Frontend:</strong> React 18 + TypeScript + Vite + TailwindCSS + Shadcn/UI</li>
              <li><strong>State Management:</strong> TanStack React Query + Global State Machine</li>
              <li><strong>Backend:</strong> Supabase (PostgreSQL + Auth + Edge Functions + Storage)</li>
              <li><strong>Routing:</strong> React Router v6</li>
              <li><strong>Animations:</strong> Framer Motion</li>
              <li><strong>i18n:</strong> react-i18next (11 languages)</li>
            </ul>
          </section>

          {/* 2. Application Routes */}
          <section>
            <h2>2. Application Routes</h2>
            
            <h3>Public Routes (No Auth Required)</h3>
            <ul>
              <li><code>/</code> - Landing page with integrated authentication (sign in/sign up)</li>
              <li><code>/whitepaper</code> - This documentation page</li>
              <li><code>/admin</code> - Admin dashboard (handles own access control)</li>
            </ul>
            
            <h3>Protected Routes (Auth Required)</h3>
            <ul>
              <li><code>/discover</code> - Swipe interface for discovering items</li>
              <li><code>/search</code> - Search items with filters</li>
              <li><code>/map</code> - Map view of nearby items</li>
              <li><code>/items</code> - User's item inventory</li>
              <li><code>/items/new</code> - Add new item</li>
              <li><code>/items/:id/edit</code> - Edit existing item</li>
              <li><code>/matches</code> - View all matches</li>
              <li><code>/chat/:matchId</code> - Chat with a match</li>
              <li><code>/profile</code> - User profile</li>
              <li><code>/profile/edit</code> - Edit profile</li>
              <li><code>/settings</code> - App settings</li>
              <li><code>/user/:userId</code> - View other user's profile</li>
              <li><code>/checkout</code> - Subscription checkout</li>
              <li><code>/checkout/success</code> - Payment success</li>
              <li><code>/setup</code> - Initial setup wizard</li>
              <li><code>/valhalla</code> - Special feature page</li>
            </ul>

            <h3>Geo-Required Routes</h3>
            <p>These routes require location permission: <code>/discover</code>, <code>/map</code>, <code>/search</code></p>
            
            <h3>Safe Routes</h3>
            <p>These routes bypass LocationGate: <code>/matches</code>, <code>/chat/*</code>, <code>/profile</code>, <code>/items</code>, <code>/checkout</code></p>
          </section>

          {/* 3. Project Structure */}
          <section>
            <h2>3. Project Structure</h2>
            
            <h3>Core Components</h3>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`src/
├── App.tsx                    # Main app with providers and routes
├── main.tsx                   # Entry point with i18n init
├── i18n.ts                    # Internationalization config
├── index.css                  # Global styles and design tokens
│
├── components/
│   ├── layout/
│   │   ├── AppLayout.tsx      # Main app layout wrapper
│   │   ├── BottomNav.tsx      # Mobile bottom navigation
│   │   └── SystemPhaseRenderer.tsx  # System phase UI controller
│   │
│   ├── landing/
│   │   ├── Hero.tsx           # Hero section with CTA
│   │   ├── AuthSection.tsx    # Integrated sign in/sign up
│   │   ├── TrustBadges.tsx    # Trust indicators
│   │   ├── FeatureShowcase.tsx
│   │   ├── FeatureCards.tsx
│   │   ├── Features.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Pricing.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Newsletter.tsx
│   │   └── Footer.tsx
│   │
│   ├── discover/
│   │   ├── SwipeCard.tsx      # Swipeable item card
│   │   ├── SwipeActions.tsx   # Like/Nope buttons
│   │   ├── SwipeTopBar.tsx    # Top navigation bar
│   │   ├── ItemSelector.tsx   # Select user's item to swipe with
│   │   ├── MatchModal.tsx     # Match celebration modal
│   │   ├── ItemDetailsSheet.tsx
│   │   ├── NearbyFilterSheet.tsx
│   │   ├── DescriptionModal.tsx
│   │   ├── EmptyState.tsx
│   │   └── Confetti.tsx
│   │
│   ├── matches/
│   │   ├── MatchCard.tsx
│   │   ├── CompletedMatchCard.tsx
│   │   ├── MissedMatchCard.tsx
│   │   ├── MissedMatchModal.tsx
│   │   ├── MatchesHeader.tsx
│   │   ├── EmptyMatchesState.tsx
│   │   ├── CompleteSwapModal.tsx
│   │   └── UnmatchButton.tsx
│   │
│   ├── chat/
│   │   ├── ChatHeader.tsx
│   │   ├── MessageBubble.tsx
│   │   ├── MessageStatus.tsx
│   │   └── OnlineIndicator.tsx
│   │
│   ├── deals/
│   │   ├── DealInviteButton.tsx
│   │   └── DealInvitesNotification.tsx
│   │
│   ├── profile/
│   │   └── ProfileItemsGrid.tsx
│   │
│   ├── search/
│   │   └── ExpandableDescription.tsx
│   │
│   ├── subscription/
│   │   ├── FeatureUpgradeModal.tsx
│   │   └── UpgradePrompt.tsx
│   │
│   ├── admin/
│   │   ├── AdminHeader.tsx
│   │   ├── AdminSidebar.tsx
│   │   ├── AdminChart.tsx
│   │   ├── DataTable.tsx
│   │   ├── StatCard.tsx
│   │   ├── SystemHealth.tsx
│   │   ├── PlatformStats.tsx
│   │   ├── QuickActions.tsx
│   │   ├── RecentActivity.tsx
│   │   ├── TopPerformers.tsx
│   │   ├── CategoryBreakdown.tsx
│   │   ├── LiveIndicator.tsx
│   │   └── sections/
│   │       ├── OverviewSection.tsx
│   │       ├── UsersSection.tsx
│   │       ├── ItemsSection.tsx
│   │       ├── MatchesSection.tsx
│   │       ├── AnalyticsSection.tsx
│   │       └── RolesSection.tsx
│   │
│   └── ui/                    # Shadcn/UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── sheet.tsx
│       ├── tabs.tsx
│       ├── toast.tsx
│       └── ... (40+ UI components)
│
├── hooks/
│   ├── useAuth.tsx            # Authentication context
│   ├── useSystemState.tsx     # Global state machine
│   ├── useLocation.tsx        # Device location
│   ├── useItems.tsx           # User's items CRUD
│   ├── useMatches.tsx         # Match management
│   ├── useMissedMatches.tsx   # Missed match tracking
│   ├── useSwipe.tsx           # Swipe actions
│   ├── useSwipeState.tsx      # Swipe state machine
│   ├── useRecommendations.tsx # AI recommendations
│   ├── useSubscription.tsx    # Pro subscription
│   ├── useEntitlements.tsx    # Feature limits
│   ├── usePresence.tsx        # Online status
│   ├── useNotifications.tsx   # Push notifications
│   ├── useAdminRole.tsx       # Admin access
│   ├── useSmartBack.tsx       # Smart navigation
│   └── use-mobile.tsx         # Mobile detection
│
├── pages/
│   ├── Landing.tsx            # Public landing page
│   ├── Index.tsx              # Discover/swipe page
│   ├── Search.tsx             # Search page
│   ├── MapView.tsx            # Map view
│   ├── Items.tsx              # My items
│   ├── NewItem.tsx            # Add item
│   ├── EditItem.tsx           # Edit item
│   ├── Matches.tsx            # Matches list
│   ├── Chat.tsx               # Chat conversation
│   ├── Profile.tsx            # User profile
│   ├── EditProfile.tsx        # Edit profile
│   ├── UserProfile.tsx        # View other user
│   ├── Settings.tsx           # Settings
│   ├── Checkout.tsx           # Subscription checkout
│   ├── CheckoutSuccess.tsx    # Payment success
│   ├── Setup.tsx              # Initial setup
│   ├── Admin.tsx              # Admin dashboard
│   ├── WhitePaper.tsx         # This documentation
│   ├── Valhalla.tsx           # Special feature
│   └── NotFound.tsx           # 404 page
│
├── config/
│   └── branding.ts            # App name and branding
│
├── locales/                   # Translation files
│   ├── en/translation.json
│   ├── fr/translation.json
│   ├── ar/translation.json
│   ├── es/translation.json
│   ├── de/translation.json
│   ├── pt/translation.json
│   ├── zh/translation.json
│   ├── ja/translation.json
│   ├── hi/translation.json
│   ├── ru/translation.json
│   └── ko/translation.json
│
├── lib/
│   ├── utils.ts               # Utility functions
│   ├── config.ts              # App configuration
│   └── services/              # Service layer
│
├── integrations/supabase/
│   ├── client.ts              # Supabase client (auto-generated)
│   └── types.ts               # Database types (auto-generated)
│
└── assets/landing/            # Landing page assets
    ├── hero-phone.png
    ├── feature-*.png
    ├── testimonial-*.jpg
    ├── trustpilot.svg
    ├── g2.svg
    └── capterra.svg`}
            </pre>
          </section>

          {/* 4. Database Schema */}
          <section>
            <h2>4. Database Schema</h2>
            
            <h3>Core Tables</h3>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`profiles
├── id (UUID, PK)
├── user_id (UUID, unique, references auth.users)
├── display_name (text)
├── bio (text, nullable)
├── avatar_url (text, nullable)
├── location (text, nullable)
├── latitude (float, nullable)
├── longitude (float, nullable)
├── last_seen (timestamptz)
├── created_at (timestamptz)
└── updated_at (timestamptz)

items
├── id (UUID, PK)
├── user_id (UUID, references auth.users)
├── title (text)
├── description (text, nullable)
├── category (enum: games, electronics, clothes, books, home_garden, sports, other)
├── condition (enum: new, like_new, good, fair)
├── photos (text[], nullable)
├── swap_preferences (item_category[])
├── value_min (int, nullable)
├── value_max (int, nullable)
├── latitude (float, nullable)
├── longitude (float, nullable)
├── reciprocal_boost (float, nullable)
├── is_active (boolean)
├── is_archived (boolean)
├── created_at (timestamptz)
└── updated_at (timestamptz)

swipes
├── id (UUID, PK)
├── swiper_item_id (UUID, references items)
├── swiped_item_id (UUID, references items)
├── liked (boolean)
└── created_at (timestamptz)

matches
├── id (UUID, PK)
├── item_a_id (UUID, references items)
├── item_b_id (UUID, references items)
├── confirmed_by_user_a (boolean)
├── confirmed_by_user_b (boolean)
├── is_completed (boolean)
├── completed_at (timestamptz, nullable)
└── created_at (timestamptz)

messages
├── id (UUID, PK)
├── match_id (UUID, references matches)
├── sender_id (UUID, references auth.users)
├── content (text)
├── status (text: sent, delivered, read)
└── created_at (timestamptz)

deal_invites
├── id (UUID, PK)
├── sender_item_id (UUID, references items)
├── receiver_item_id (UUID, references items)
├── status (text: pending, accepted, rejected)
├── attempt (int)
├── responded_at (timestamptz, nullable)
└── created_at (timestamptz)

user_subscriptions
├── id (UUID, PK)
├── user_id (UUID, references auth.users)
├── is_pro (boolean)
├── subscribed_at (timestamptz, nullable)
├── expires_at (timestamptz, nullable)
├── dodo_session_id (text, nullable)
├── created_at (timestamptz)
└── updated_at (timestamptz)

daily_usage
├── id (UUID, PK)
├── user_id (UUID, references auth.users)
├── usage_date (date)
├── swipes_count (int)
├── searches_count (int)
├── map_uses_count (int)
├── deal_invites_count (int)
├── created_at (timestamptz)
└── updated_at (timestamptz)

user_roles
├── id (UUID, PK)
├── user_id (UUID, references auth.users)
├── role (enum: admin, moderator, user)
└── created_at (timestamptz)

item_ratings
├── id (UUID, PK)
├── item_id (UUID, references items, unique)
├── likes_count (int)
├── dislikes_count (int)
├── rating (float)
├── alpha (float)
├── beta (float)
├── total_interactions (int)
├── successful_exchanges (int)
├── last_calculated_at (timestamptz)
├── created_at (timestamptz)
└── updated_at (timestamptz)`}
            </pre>
          </section>

          {/* 5. State Machine */}
          <section>
            <h2>5. State Machine</h2>
            
            <h3>System Phases</h3>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`SYSTEM_PHASE:
  BOOTSTRAPPING  → App initializing (auth, profile, subscription loading)
  ACTIVE         → Normal user interaction
  TRANSITION     → State change in progress (e.g., location check)
  BACKGROUND_ONLY → Only background jobs run
  BLOCKED        → User cannot proceed (e.g., location denied)

SUBSCRIPTION_PHASE:
  FREE_ACTIVE    → Free user, within limits
  FREE_LIMITED   → Free user, some limits reached
  UPGRADING      → Payment in progress
  PRO_ACTIVE     → Pro subscription active
  PRO_EXPIRED    → Pro subscription expired

SWIPE_PHASE:
  IDLE / LOADING / READY / SWIPING / COMMITTING
  UNDOING / REFRESHING / EXHAUSTED / PAUSED

MATCH_PHASE:
  NONE / CREATED / NEGOTIATING / READY_TO_COMPLETE
  COMPLETED / ABANDONED`}
            </pre>

            <h3>Bootstrap Flow</h3>
            <p>
              BOOTSTRAPPING → Auth loads → Profile loads → Subscription loads → 
              isFullyBootstrapped → Location check (geo routes only) → ACTIVE or BLOCKED
            </p>
            <p><strong>Critical Invariant:</strong> BOOTSTRAPPING must always resolve within 5 seconds via timeout fallback.</p>
          </section>

          {/* 6. Authentication */}
          <section>
            <h2>6. Authentication</h2>
            
            <h3>Auth Flow</h3>
            <p>Authentication is integrated directly into the Landing page via the AuthSection component.</p>
            <ul>
              <li>Sign up with email/password</li>
              <li>Sign in with email/password</li>
              <li>Google OAuth support</li>
              <li>Auto-confirm email signups enabled</li>
              <li>Profile created automatically via database trigger on signup</li>
            </ul>
            
            <h3>Auth Redirects</h3>
            <ul>
              <li>Unauthenticated users on protected routes → Redirect to <code>/</code> (landing page)</li>
              <li>On sign out → Redirect to <code>/</code></li>
              <li>On successful auth → Redirect to <code>/discover</code></li>
            </ul>
          </section>

          {/* 7. Internationalization */}
          <section>
            <h2>7. Internationalization (i18n)</h2>
            
            <h3>Supported Languages</h3>
            <ul>
              <li>English (en) - Default</li>
              <li>French (fr)</li>
              <li>Arabic (ar) - RTL support</li>
              <li>Spanish (es)</li>
              <li>German (de)</li>
              <li>Portuguese (pt)</li>
              <li>Chinese (zh)</li>
              <li>Japanese (ja)</li>
              <li>Hindi (hi)</li>
              <li>Russian (ru)</li>
              <li>Korean (ko)</li>
            </ul>
            
            <h3>Implementation</h3>
            <ul>
              <li>Library: react-i18next</li>
              <li>Config: <code>src/i18n.ts</code></li>
              <li>Translations: <code>src/locales/[lang]/translation.json</code></li>
              <li>Language switcher in Settings and Landing page footer</li>
              <li>RTL direction auto-switching for Arabic</li>
              <li>Language preference persisted in localStorage</li>
            </ul>
          </section>

          {/* 8. Subscription System */}
          <section>
            <h2>8. Subscription System</h2>
            
            <h3>Free Tier Limits</h3>
            <ul>
              <li>20 swipes per day</li>
              <li>5 searches per day</li>
              <li>3 map views per day</li>
              <li>2 deal invites per day</li>
            </ul>
            
            <h3>Pro Features</h3>
            <ul>
              <li>Unlimited swipes</li>
              <li>Unlimited searches</li>
              <li>Unlimited map access</li>
              <li>Unlimited deal invites</li>
              <li>View missed matches</li>
              <li>Priority support</li>
            </ul>
          </section>

          {/* 9. Edge Functions */}
          <section>
            <h2>9. Edge Functions</h2>
            
            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`supabase/functions/
├── add-sample-photos/     # Add sample photos to items
├── dodo-checkout/         # Payment processing
├── get-mapbox-token/      # Mapbox API token
├── reciprocal-optimizer/  # Optimize reciprocal matches
├── recommend-items/       # AI-powered recommendations
└── setup-test-data/       # Development test data`}
            </pre>
          </section>

          {/* 10. Key Invariants */}
          <section>
            <h2>10. Key Invariants</h2>
            
            <ul>
              <li><strong>BOOTSTRAPPING must always resolve</strong> - 5-second timeout fallback</li>
              <li><strong>Safe routes never blocked by LocationGate</strong> - Matches, Chat, Profile, Items always accessible</li>
              <li><strong>No auth page</strong> - Authentication integrated into Landing page</li>
              <li><strong>All redirects go to /</strong> - No /auth route exists</li>
              <li><strong>RLS enabled on all tables</strong> - Row Level Security for data protection</li>
              <li><strong>Realtime enabled for messages</strong> - Live chat updates</li>
            </ul>
          </section>

          {/* 11. Change Log */}
          <section>
            <h2>11. Change Log</h2>
            
            <h3>January 2025</h3>
            <ul>
              <li><strong>Auth Integration:</strong> Removed standalone /auth page, integrated sign in/sign up into Landing page via AuthSection component</li>
              <li><strong>Redirect Updates:</strong> All auth-related redirects now go to / instead of /auth</li>
              <li><strong>WhitePaper Update:</strong> Simplified to single-page public documentation</li>
              <li><strong>i18n:</strong> Added auth section translations for all 11 languages</li>
            </ul>
            
            <h3>December 2024</h3>
            <ul>
              <li>Landing page redesign with Hero, TrustBadges, FeatureShowcase, Testimonials</li>
              <li>Multilingual support (11 languages)</li>
              <li>System state machine with BOOTSTRAPPING timeout</li>
              <li>Pro subscription system</li>
              <li>Admin dashboard</li>
            </ul>
          </section>

          {/* 12. Branding */}
          <section>
            <h2>12. Branding</h2>
            
            <p>All branding constants are centralized in <code>src/config/branding.ts</code>:</p>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`APP_NAME = 'Valexo'
APP_TAGLINE = 'Trade what you have. Get what you want.'
APP_DESCRIPTION = 'A smart exchange platform connecting people across Europe'
PRO_PLAN_NAME = 'Valexo Pro'`}
            </pre>
          </section>

        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 {APP_NAME}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
