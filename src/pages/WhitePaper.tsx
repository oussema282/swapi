import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText, Database, Cpu, Users, Settings, GitBranch, AlertTriangle, Code, History, Puzzle } from 'lucide-react';

// Hard-coded admin check (in production, use a proper admin role in DB)
const ADMIN_EMAILS = ['admin@valexo.app'];

export default function WhitePaper() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [activeSection, setActiveSection] = useState('overview');
  
  // Basic access control - redirect if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  const sections = [
    { id: 'overview', title: '1. System Overview', icon: FileText },
    { id: 'state-machine', title: '2. State Machine & Invariants', icon: GitBranch },
    { id: 'algorithm', title: '3. Hybrid Recommendation Algorithm', icon: Cpu },
    { id: 'swipe', title: '4. Swipe Lifecycle & State', icon: GitBranch },
    { id: 'subscription', title: '5. Pro Subscription System', icon: Users },
    { id: 'database', title: '6. Database Schema', icon: Database },
    { id: 'background', title: '7. Background Processes', icon: Settings },
    { id: 'constraints', title: '8. Known Constraints', icon: AlertTriangle },
    { id: 'mapping', title: '9. Prompt-to-Code Mapping', icon: Code },
    { id: 'changelog', title: '10. Change Log', icon: History },
    { id: 'extension', title: '11. Extension Points', icon: Puzzle },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-xl font-bold">Valexo – Internal White Paper</h1>
            <p className="text-sm text-muted-foreground">Technical Documentation • Last Updated: December 2024</p>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto flex">
        {/* Sidebar Navigation */}
        <nav className="hidden md:block w-64 shrink-0 border-r border-border sticky top-[73px] h-[calc(100vh-73px)]">
          <ScrollArea className="h-full py-4">
            <div className="px-3 space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors text-left ${
                    activeSection === section.id 
                      ? 'bg-primary/10 text-primary font-medium' 
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                >
                  <section.icon className="h-4 w-4 shrink-0" />
                  <span className="truncate">{section.title}</span>
                </button>
              ))}
            </div>
          </ScrollArea>
        </nav>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <ScrollArea className="h-[calc(100vh-73px)]">
            <div className="max-w-4xl mx-auto px-6 py-8">
              {/* Mobile Section Selector */}
              <div className="md:hidden mb-6">
                <select
                  value={activeSection}
                  onChange={(e) => setActiveSection(e.target.value)}
                  className="w-full p-2 border border-border rounded-md bg-background"
                >
                  {sections.map((section) => (
                    <option key={section.id} value={section.id}>
                      {section.title}
                    </option>
                  ))}
                </select>
              </div>

              {activeSection === 'overview' && <SystemOverview />}
              {activeSection === 'state-machine' && <StateMachineSection />}
              {activeSection === 'algorithm' && <HybridAlgorithm />}
              {activeSection === 'swipe' && <SwipeLifecycle />}
              {activeSection === 'subscription' && <SubscriptionSystem />}
              {activeSection === 'database' && <DatabaseSchema />}
              {activeSection === 'background' && <BackgroundProcesses />}
              {activeSection === 'constraints' && <KnownConstraints />}
              {activeSection === 'mapping' && <PromptMapping />}
              {activeSection === 'changelog' && <ChangeLog />}
              {activeSection === 'extension' && <ExtensionPoints />}
            </div>
          </ScrollArea>
        </main>
      </div>
    </div>
  );
}

// Section Components
function SystemOverview() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">1. System Overview</h2>
      
      <div className="prose prose-sm dark:prose-invert max-w-none">
        <h3>What is Valexo?</h3>
        <p>
          Valexo is a barter/exchange marketplace application built with React, TypeScript, and Supabase (via Lovable Cloud). 
          Users list items they want to exchange, swipe on items from other users (Tinder-style), and when mutual interest is detected, 
          a match is created enabling chat-based negotiation.
        </p>

        <h3>Core Architecture</h3>
        <ul>
          <li><strong>Frontend:</strong> React 18 + TypeScript + Vite + TailwindCSS + Shadcn/UI</li>
          <li><strong>State Management:</strong> TanStack React Query for server state + Global State Machine</li>
          <li><strong>Backend:</strong> Supabase (PostgreSQL + Auth + Edge Functions + Storage)</li>
          <li><strong>Routing:</strong> React Router v6</li>
        </ul>

        <h3>Key Components</h3>
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="text-left">Component</th>
              <th className="text-left">Location</th>
              <th className="text-left">Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SystemStateProvider</td>
              <td><code>src/hooks/useSystemState.tsx</code></td>
              <td>Global state machine for system phases</td>
            </tr>
            <tr>
              <td>AuthProvider</td>
              <td><code>src/hooks/useAuth.tsx</code></td>
              <td>User authentication context</td>
            </tr>
            <tr>
              <td>SystemPhaseRenderer</td>
              <td><code>src/components/layout/SystemPhaseRenderer.tsx</code></td>
              <td>Single authority for top-level UI based on SYSTEM_PHASE</td>
            </tr>
            <tr>
              <td>LocationGate</td>
              <td><code>src/components/LocationGate.tsx</code></td>
              <td>Location sync & permission UI (rendered only when BLOCKED)</td>
            </tr>
            <tr>
              <td>SetupGate</td>
              <td><code>src/components/SetupGate.tsx</code></td>
              <td>Ensures app configuration</td>
            </tr>
            <tr>
              <td>useEntitlements</td>
              <td><code>src/hooks/useEntitlements.tsx</code></td>
              <td>Centralized Pro status & usage limits</td>
            </tr>
            <tr>
              <td>useRecommendations</td>
              <td><code>src/hooks/useRecommendations.tsx</code></td>
              <td>Fetches AI-ranked items</td>
            </tr>
          </tbody>
        </table>

        <h3>Startup Sequence (BOOTSTRAPPING)</h3>
        <p className="bg-muted p-4 rounded-md border">
          <strong>BOOTSTRAPPING</strong> → Auth loads → Profile loads → Subscription loads → 
          <strong>isFullyBootstrapped</strong> → Location check → <strong>ACTIVE</strong> or <strong>BLOCKED</strong>
        </p>
        <p><strong>BOOTSTRAPPING is a blocking phase.</strong> During BOOTSTRAPPING:</p>
        <ul>
          <li>No LocationGate is shown</li>
          <li>No upgrade prompts are shown</li>
          <li>No recommendations are fetched</li>
          <li>No swipe, map, or background jobs run</li>
        </ul>
        <p>BOOTSTRAPPING ends ONLY after:</p>
        <ol>
          <li><strong>AUTH_READY:</strong> Auth loading completes</li>
          <li><strong>PROFILE_READY:</strong> Profile is loaded (or user is not logged in)</li>
          <li><strong>SUBSCRIPTION_READY:</strong> Subscription data is fetched</li>
        </ol>
        <p>Only after <code>isFullyBootstrapped === true</code>:</p>
        <ul>
          <li>If location is missing → enter <strong>BLOCKED</strong></li>
          <li>If location is granted → enter <strong>ACTIVE</strong></li>
        </ul>

        <h3>Root Rendering Authority</h3>
        <p><strong>Location:</strong> <code>src/components/layout/SystemPhaseRenderer.tsx</code></p>
        <p>The SystemPhaseRenderer is the SINGLE AUTHORITY for what top-level UI is rendered:</p>
        <ul>
          <li><strong>BOOTSTRAPPING:</strong> Loading screen ("Initializing...") - blocks everything</li>
          <li><strong>TRANSITION:</strong> Loading screen ("Getting your location...")</li>
          <li><strong>BLOCKED:</strong> LocationGate component (permission UI)</li>
          <li><strong>ACTIVE:</strong> Main application content (children)</li>
          <li><strong>BACKGROUND_ONLY:</strong> Main application content (children)</li>
        </ul>
        <p className="bg-destructive/10 p-4 rounded-md border border-destructive/20">
          <strong>Critical Invariant:</strong> No component below SystemPhaseRenderer may bypass SYSTEM_PHASE checks.
          LocationGate does NOT decide when it appears—it is rendered ONLY when SYSTEM_PHASE === 'BLOCKED'.
          No features execute during BOOTSTRAPPING.
        </p>

        <h3>User Flow</h3>
        <ol>
          <li>User signs up/logs in → Profile created via DB trigger</li>
          <li>User grants location permission (required, enforced after BOOTSTRAPPING)</li>
          <li>User lists items with category, condition, photos, swap preferences</li>
          <li>User selects an item and swipes on recommendations</li>
          <li>Mutual likes create a Match → Chat unlocked</li>
          <li>Users negotiate and complete the swap</li>
        </ol>
      </div>
    </section>
  );
}

function StateMachineSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">2. State Machine & System Invariants</h2>
      
      <div className="prose prose-sm dark:prose-invert max-w-none">
        <h3>Unified State Architecture</h3>
        <p><strong>Location:</strong> <code>src/hooks/useSystemState.tsx</code></p>
        <p>The system uses a global state machine to ensure consistent behavior across all features.</p>
        
        <h4>State Domains</h4>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`SYSTEM_PHASE:
  BOOTSTRAPPING  → App initializing (auth, profile, subscription loading)
  ACTIVE         → Normal user interaction
  TRANSITION     → State change in progress (e.g., upgrading, location check)
  BACKGROUND_ONLY → Only background jobs run
  BLOCKED        → User cannot proceed (e.g., location denied)

BOOTSTRAP READINESS FLAGS:
  authReady         → Auth loading complete
  profileReady      → Profile loaded (or no user)
  subscriptionReady → Subscription data fetched
  isFullyBootstrapped = authReady && profileReady && subscriptionReady

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

        <h4>BOOTSTRAPPING Phase (Fixed Dec 31, 2024)</h4>
        <p><strong>BOOTSTRAPPING is a real blocking phase.</strong> Nothing renders or executes until fully bootstrapped.</p>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`During BOOTSTRAPPING:
  - NO LocationGate shown
  - NO upgrade prompts shown
  - NO recommendations fetched
  - NO swipe, map, or background jobs run

BOOTSTRAPPING ends ONLY after:
  1. AUTH_READY        → Auth loading complete
  2. PROFILE_READY     → Profile loaded (or user not logged in)
  3. SUBSCRIPTION_READY → Subscription data fetched

After isFullyBootstrapped === true:
  - If location missing → BLOCKED → LocationGate shown
  - If location granted → ACTIVE → main app renders`}
        </pre>

        <h4>Location State Integration</h4>
        <p><strong>Key Insight:</strong> LocationGate is a CONSEQUENCE of the BLOCKED state, not an entry point. 
        Top-level rendering is fully controlled by SYSTEM_PHASE via SystemPhaseRenderer.</p>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`Location Actions:
  LOCATION_CHECKING → Transitions to TRANSITION while requesting location
  LOCATION_GRANTED  → Transitions to ACTIVE, sets isInitialized=true
  LOCATION_DENIED   → Transitions to BLOCKED
  LOCATION_RETRY    → Transitions to TRANSITION before re-requesting

Location Check Flow (in SystemPhaseRenderer):
  1. Wait for isFullyBootstrapped === true
  2. Check existing permission/location
  3. Dispatches LOCATION_CHECKING → requests location
  4. On grant: LOCATION_GRANTED → ACTIVE
  5. On deny: LOCATION_DENIED → BLOCKED → LocationGate shown

Behavior Rules:
  - SystemPhaseRenderer handles ALL location sync logic
  - LocationGate is PURE UI - no useEffect syncing
  - LocationGate does NOT decide when it appears
  - BLOCKED is a waiting state, NOT terminal
  - Retry triggers LOCATION_RETRY → TRANSITION → re-request
  - No feature runs while SYSTEM_PHASE is BOOTSTRAPPING or BLOCKED`}
        </pre>

        <h4>Entitlement Resolver</h4>
        <p><strong>Location:</strong> <code>src/hooks/useEntitlements.tsx</code></p>
        <p>Single source of truth for all Pro/limit checks:</p>
        <ul>
          <li>Pro users NEVER have usage tracked or limits enforced</li>
          <li>All canUse checks go through the resolver</li>
          <li>Subscription changes trigger full cache invalidation</li>
          <li>Marks SUBSCRIPTION_READY when subscription data is fetched</li>
          <li>Background jobs cannot influence UI during ACTIVE state</li>
        </ul>

        <h4>Fixed Issues</h4>
        <ul>
          <li><strong>Dec 31, 2024 (Bootstrap):</strong> BOOTSTRAPPING now waits for auth, profile, AND subscription</li>
          <li><strong>Dec 31, 2024 (Bootstrap):</strong> isFullyBootstrapped flag gates location check</li>
          <li><strong>Dec 31, 2024 (Bootstrap):</strong> No features execute during BOOTSTRAPPING</li>
          <li><strong>Dec 31, 2024 (Rendering):</strong> Location sync moved to SystemPhaseRenderer</li>
          <li><strong>Dec 31, 2024 (Rendering):</strong> LocationGate is now pure UI with no state sync logic</li>
          <li><strong>Dec 31, 2024 (Rendering):</strong> SystemPhaseRenderer is single authority for top-level UI</li>
          <li><strong>Dec 31, 2024 (Location):</strong> LocationGate rendered ONLY when SYSTEM_PHASE === 'BLOCKED'</li>
          <li><strong>Dec 30, 2024 (Location):</strong> BLOCKED is recoverable - retry properly transitions state</li>
          <li><strong>Dec 30, 2024 (Pro):</strong> Pro features unlock immediately after payment</li>
          <li><strong>Dec 30, 2024 (Pro):</strong> daily_usage completely ignored for Pro users</li>
        </ul>
      </div>
    </section>
  );
}

function HybridAlgorithm() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">2. Hybrid Recommendation Algorithm</h2>
      
      <div className="prose prose-sm dark:prose-invert max-w-none">
        <h3>Two-Layer Architecture</h3>
        <p>The recommendation system uses a hybrid approach:</p>
        
        <h4>Layer 1: Realtime Swipe Ranking (recommend-items)</h4>
        <p><strong>Location:</strong> <code>supabase/functions/recommend-items/index.ts</code></p>
        <p>Executed on-demand when a user opens the swipe interface. Calculates weighted scores:</p>
        
        <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`score = 
  0.18 × categorySimilarity +    // Cosine similarity via category embeddings
  0.28 × geoScore +              // Exponential decay (σ=50km)
  0.18 × exchangeCompatibility + // Bidirectional preference matching
  0.10 × behaviorAffinity +      // Learned from swipe history
  0.06 × freshness +             // 1/(1+ageInDays)
  0.08 × conditionScore +        // new=1.0, fair=0.5
  0.12 × reciprocalBoost +       // From offline optimizer
  ε                              // Random exploration factor (0-0.1)`}
        </pre>

        <h4>Category Embeddings</h4>
        <p>5-dimensional vectors mapping categories to semantic dimensions [tech, fashion, media, sports, home]:</p>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`electronics: [0.9, 0.1, 0.3, 0.2, 0.2]
clothes:     [0.1, 0.9, 0.2, 0.3, 0.1]
books:       [0.2, 0.1, 0.9, 0.1, 0.3]
games:       [0.7, 0.1, 0.8, 0.4, 0.2]
sports:      [0.2, 0.3, 0.1, 0.9, 0.2]
home_garden: [0.2, 0.1, 0.2, 0.1, 0.9]
other:       [0.3, 0.3, 0.3, 0.3, 0.3]`}
        </pre>

        <h4>Layer 2: Offline Reciprocal Optimization (reciprocal-optimizer)</h4>
        <p><strong>Location:</strong> <code>supabase/functions/reciprocal-optimizer/index.ts</code></p>
        <p>Background batch process that:</p>
        <ol>
          <li>Learns user category affinities from swipe history</li>
          <li>Calculates pairwise reciprocal satisfaction scores</li>
          <li>Identifies 2-way and 3-way swap cycles</li>
          <li>Updates <code>reciprocal_boost</code> on items to silently influence rankings</li>
          <li>Stores opportunities in <code>swap_opportunities</code> table</li>
        </ol>

        <h4>Critical Design Principle</h4>
        <p className="bg-primary/10 p-4 rounded-md border border-primary/20">
          <strong>The offline layer NEVER creates user-facing UI.</strong> Reciprocal intelligence silently boosts ranking scores 
          without showing "Guaranteed Match" banners or special cards. The swipe experience remains continuous and natural.
        </p>
      </div>
    </section>
  );
}

function SwipeLifecycle() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">3. Swipe Lifecycle & State Management</h2>
      
      <div className="prose prose-sm dark:prose-invert max-w-none">
        <h3>State Flow</h3>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`┌─────────────┐    ┌───────────────────┐    ┌─────────────┐
│ Select Item │ -> │ Fetch Recommendations │ -> │ Swipe Cards │
└─────────────┘    └───────────────────┘    └─────────────┘
                            │                      │
                   useRecommendedItems()    ┌──────┴──────┐
                            │              Like       Skip
                   recommend-items API      │             │
                            │              ▼             ▼
                            └──────> swipes table <─────┘
                                          │
                                   DB Trigger: check_for_match()
                                          │
                                   ┌──────┴──────┐
                                 Match         No Match
                                   │
                            matches table`}
        </pre>

        <h3>Card Exhaustion Handling</h3>
        <p><strong>Location:</strong> <code>src/hooks/useRecommendations.tsx</code></p>
        <ol>
          <li>Initial fetch via <code>recommend-items</code> edge function</li>
          <li>If zero items returned, retry with <code>expandedSearch: true</code></li>
          <li>Expanded search recycles items swiped &gt;7 days ago</li>
          <li>Adjusted weights favor reciprocal boost (0.20) and behavioral affinity (0.15)</li>
          <li>If still empty, return empty array (user sees empty state)</li>
        </ol>

        <h3>Swipe Undo System</h3>
        <p><strong>Location:</strong> <code>src/hooks/useSwipe.tsx</code></p>
        <ul>
          <li>Users can undo a swipe once per item per 24 hours</li>
          <li>Tracked in <code>swipe_undos</code> table</li>
          <li>Undo deletes the swipe record and inserts an undo record</li>
        </ul>

        <h3>Match Creation</h3>
        <p>Database trigger <code>check_for_match()</code> runs on swipe insert:</p>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`IF NEW.liked = true THEN
  -- Check for mutual like
  SELECT * FROM swipes 
  WHERE swiper_item_id = NEW.swiped_item_id
    AND swiped_item_id = NEW.swiper_item_id
    AND liked = true;
  
  IF FOUND THEN
    INSERT INTO matches (item_a_id, item_b_id)
    VALUES (LEAST(...), GREATEST(...))
    ON CONFLICT DO NOTHING;
  END IF;
END IF;`}
        </pre>
      </div>
    </section>
  );
}

function SubscriptionSystem() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">4. Pro Subscription & Entitlement System</h2>
      
      <div className="prose prose-sm dark:prose-invert max-w-none">
        <h3>Subscription Model</h3>
        <p><strong>Source of Truth:</strong> <code>user_subscriptions.is_pro</code></p>
        <p><strong>Hook:</strong> <code>src/hooks/useSubscription.tsx</code></p>

        <h3>Free vs Pro Limits</h3>
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="text-left">Feature</th>
              <th className="text-left">Free</th>
              <th className="text-left">Pro</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Daily Swipes</td><td>50</td><td>Unlimited</td></tr>
            <tr><td>Daily Searches</td><td>3</td><td>Unlimited</td></tr>
            <tr><td>Daily Deal Invites</td><td>3</td><td>Unlimited</td></tr>
            <tr><td>Daily Map Uses</td><td>3</td><td>Unlimited</td></tr>
            <tr><td>Max Items</td><td>4</td><td>Unlimited</td></tr>
            <tr><td>Verified Badge</td><td>No</td><td>Yes (blue)</td></tr>
          </tbody>
        </table>

        <h3>Usage Tracking</h3>
        <ul>
          <li><code>daily_usage</code> table stores per-day counts</li>
          <li>Reset daily via <code>usage_date</code> column</li>
          <li><code>get_or_create_daily_usage()</code> function ensures record exists</li>
          <li><code>increment_usage()</code> function atomically increments counters</li>
        </ul>

        <h3>Feature Upgrades (Bonus Packs)</h3>
        <p>Non-Pro users can purchase one-time bonuses stored in <code>feature_upgrades</code>:</p>
        <ul>
          <li>Extra Swipes: +100 for $1.99</li>
          <li>Extra Deal Invites: +20 for $0.99</li>
          <li>Extra Map Views: +20 for $0.99</li>
          <li>Extra Searches: +20 for $0.99</li>
          <li>Extra Item Slots: +5 for $1.49</li>
        </ul>

        <h3>Payment Integration</h3>
        <p><strong>Provider:</strong> Dodo Payments</p>
        <p><strong>Edge Function:</strong> <code>supabase/functions/dodo-checkout/index.ts</code></p>
        <p>After successful payment, <code>user_subscriptions.is_pro</code> is set to true and <code>subscribed_at</code> is recorded.</p>
      </div>
    </section>
  );
}

function DatabaseSchema() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">5. Database Schema</h2>
      
      <div className="prose prose-sm dark:prose-invert max-w-none">
        <h3>Core Tables</h3>
        
        <h4>profiles</h4>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`id           uuid PRIMARY KEY
user_id      uuid NOT NULL UNIQUE  -- References auth.users
display_name text NOT NULL
avatar_url   text
bio          text
location     text
latitude     double precision
longitude    double precision
last_seen    timestamp with time zone
created_at   timestamp with time zone
updated_at   timestamp with time zone`}
        </pre>

        <h4>items</h4>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`id               uuid PRIMARY KEY
user_id          uuid NOT NULL
title            text NOT NULL
description      text
category         item_category (enum)
condition        item_condition (enum)
photos           text[] DEFAULT '{}'
swap_preferences item_category[]
value_min        integer DEFAULT 0
value_max        integer
is_active        boolean DEFAULT true
latitude         double precision
longitude        double precision
reciprocal_boost numeric DEFAULT 0  -- Set by offline optimizer
created_at       timestamp with time zone
updated_at       timestamp with time zone`}
        </pre>

        <h4>swipes</h4>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`id             uuid PRIMARY KEY
swiper_item_id uuid NOT NULL  -- The item doing the swiping
swiped_item_id uuid NOT NULL  -- The item being swiped on
liked          boolean NOT NULL
created_at     timestamp with time zone`}
        </pre>

        <h4>matches</h4>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`id           uuid PRIMARY KEY
item_a_id    uuid NOT NULL  -- LEAST(item_a, item_b) for uniqueness
item_b_id    uuid NOT NULL  -- GREATEST(item_a, item_b)
is_completed boolean DEFAULT false
completed_at timestamp with time zone
created_at   timestamp with time zone`}
        </pre>

        <h4>messages</h4>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`id        uuid PRIMARY KEY
match_id  uuid NOT NULL  -- References matches
sender_id uuid NOT NULL  -- References auth.users
content   text NOT NULL
status    text DEFAULT 'sent'  -- 'sent', 'delivered', 'read'
created_at timestamp with time zone`}
        </pre>

        <h3>Subscription Tables</h3>
        <h4>user_subscriptions</h4>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`id              uuid PRIMARY KEY
user_id         uuid NOT NULL UNIQUE
is_pro          boolean DEFAULT false  -- SOURCE OF TRUTH
subscribed_at   timestamp with time zone
expires_at      timestamp with time zone
dodo_session_id text`}
        </pre>

        <h4>daily_usage</h4>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`id                uuid PRIMARY KEY
user_id           uuid NOT NULL
usage_date        date DEFAULT CURRENT_DATE
swipes_count      integer DEFAULT 0
searches_count    integer DEFAULT 0
deal_invites_count integer DEFAULT 0
map_uses_count    integer DEFAULT 0`}
        </pre>

        <h3>Recommendation Tables</h3>
        <h4>swap_opportunities</h4>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`id               uuid PRIMARY KEY
cycle_type       text  -- '2-way' or '3-way'
user_a_id, user_b_id, user_c_id  uuid
item_a_id, item_b_id, item_c_id  uuid
confidence_score numeric
status           text DEFAULT 'active'
expires_at       timestamp with time zone`}
        </pre>

        <h4>item_ratings (Bayesian ratings)</h4>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`id                 uuid PRIMARY KEY
item_id            uuid NOT NULL UNIQUE
alpha, beta        double precision  -- Beta distribution parameters
rating             double precision  -- 1 + 4*(alpha/(alpha+beta))
likes_count        integer
dislikes_count     integer
successful_exchanges integer
total_interactions integer`}
        </pre>
      </div>
    </section>
  );
}

function BackgroundProcesses() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">6. Background AI & Batch Processes</h2>
      
      <div className="prose prose-sm dark:prose-invert max-w-none">
        <h3>Edge Functions</h3>
        
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="text-left">Function</th>
              <th className="text-left">Trigger</th>
              <th className="text-left">Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>recommend-items</code></td>
              <td>On-demand (API call)</td>
              <td>Realtime item ranking for swipe feed</td>
            </tr>
            <tr>
              <td><code>reciprocal-optimizer</code></td>
              <td>Manual / Scheduled</td>
              <td>Batch optimization for swap cycles</td>
            </tr>
            <tr>
              <td><code>dodo-checkout</code></td>
              <td>On-demand</td>
              <td>Initiate payment session</td>
            </tr>
            <tr>
              <td><code>get-mapbox-token</code></td>
              <td>On-demand</td>
              <td>Securely fetch Mapbox token</td>
            </tr>
            <tr>
              <td><code>setup-test-data</code></td>
              <td>Manual (dev only)</td>
              <td>Create test users and items</td>
            </tr>
            <tr>
              <td><code>add-sample-photos</code></td>
              <td>Manual (dev only)</td>
              <td>Add placeholder photos to items</td>
            </tr>
          </tbody>
        </table>

        <h3>Database Triggers</h3>
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="text-left">Trigger</th>
              <th className="text-left">Table</th>
              <th className="text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>handle_new_user</code></td>
              <td>auth.users (INSERT)</td>
              <td>Auto-create profile row</td>
            </tr>
            <tr>
              <td><code>check_for_match</code></td>
              <td>swipes (INSERT)</td>
              <td>Create match on mutual like</td>
            </tr>
            <tr>
              <td><code>handle_deal_invite_accepted</code></td>
              <td>deal_invites (UPDATE)</td>
              <td>Create match when invite accepted</td>
            </tr>
            <tr>
              <td><code>update_item_rating_on_swipe</code></td>
              <td>swipes (INSERT)</td>
              <td>Update Bayesian rating</td>
            </tr>
            <tr>
              <td><code>update_item_rating_on_match_complete</code></td>
              <td>matches (UPDATE)</td>
              <td>Boost rating on successful exchange</td>
            </tr>
            <tr>
              <td><code>update_updated_at_column</code></td>
              <td>Various</td>
              <td>Auto-update timestamps</td>
            </tr>
          </tbody>
        </table>

        <h3>Reciprocal Optimizer Details</h3>
        <p>When invoked:</p>
        <ol>
          <li>Fetches all active items and swipe history</li>
          <li>Groups items by user, learns category affinities</li>
          <li>Stores learned preferences in <code>user_preferences_learned</code></li>
          <li>Calculates pairwise reciprocal scores for all user pairs</li>
          <li>Identifies 2-way swaps with score &gt; 0.3</li>
          <li>Searches for 3-way cycles (A→B→C→A)</li>
          <li>Stores top 50 opportunities in <code>swap_opportunities</code></li>
          <li>Updates <code>reciprocal_boost</code> on involved items</li>
        </ol>
        <p className="text-muted-foreground"><em>Note: Currently manually triggered. Scheduled runs not yet implemented.</em></p>
      </div>
    </section>
  );
}

function KnownConstraints() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">7. Known Constraints & Trade-offs</h2>
      
      <div className="prose prose-sm dark:prose-invert max-w-none">
        <h3>Performance Constraints</h3>
        <ul>
          <li><strong>Supabase Query Limit:</strong> Default 1000 rows per query. Not currently an issue but may need pagination for large datasets.</li>
          <li><strong>Reciprocal Optimizer:</strong> O(n²) complexity for pairwise scoring. With 1000 users, this is 500K comparisons. Runs in background so acceptable.</li>
          <li><strong>Category Embeddings:</strong> Fixed 5-dimensional vectors. Simple but effective for 7 categories.</li>
        </ul>

        <h3>UX Decisions</h3>
        <ul>
          <li><strong>Location Required:</strong> App mandates geolocation for proximity-based matching. No fallback for users who decline.</li>
          <li><strong>Item-to-Item Matching:</strong> Users select which of their items to swipe from. This adds a step but enables precise preference matching.</li>
          <li><strong>No "Guaranteed Match" UI:</strong> Intentional design decision. Reciprocal intelligence boosts rankings silently to avoid creating false expectations.</li>
        </ul>

        <h3>Intentional Simplifications</h3>
        <ul>
          <li><strong>No Admin Dashboard:</strong> Admin actions performed via edge functions with service_role key.</li>
          <li><strong>No Email Verification:</strong> Auto-confirm enabled for faster onboarding.</li>
          <li><strong>No Image Compression:</strong> Photos uploaded as-is to Supabase Storage.</li>
          <li><strong>No Push Notifications:</strong> Not yet implemented.</li>
        </ul>

        <h3>Security Considerations</h3>
        <ul>
          <li>All tables have RLS enabled</li>
          <li>Users can only see/modify their own data (except public profiles)</li>
          <li>Edge functions use service_role for admin operations</li>
          <li>Mapbox token fetched via edge function to hide API key</li>
        </ul>

        <h3>Known Limitations</h3>
        <ul>
          <li><strong>Missed Matches:</strong> If both users swipe right but with different items, match is created for those specific items only.</li>
          <li><strong>No Real-time Swipe Sync:</strong> If same item swiped simultaneously, last write wins.</li>
          <li><strong>Undo Limit:</strong> 24-hour cooldown per item, not per user.</li>
        </ul>
      </div>
    </section>
  );
}

function PromptMapping() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">8. Prompt-to-Code Mapping</h2>
      
      <div className="prose prose-sm dark:prose-invert max-w-none">
        <h3>System Prompt → Implementation</h3>
        
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="text-left">Prompt Concept</th>
              <th className="text-left">Implementation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>"Tinder-like swipe interface"</td>
              <td><code>src/components/discover/SwipeCard.tsx</code><br/>Uses framer-motion for drag gestures</td>
            </tr>
            <tr>
              <td>"Item-to-item matching"</td>
              <td><code>src/components/discover/ItemSelector.tsx</code><br/>User picks which item to swipe from</td>
            </tr>
            <tr>
              <td>"Realtime swipe ranking"</td>
              <td><code>supabase/functions/recommend-items/</code><br/>Weighted scoring algorithm</td>
            </tr>
            <tr>
              <td>"Offline reciprocal optimization"</td>
              <td><code>supabase/functions/reciprocal-optimizer/</code><br/>Batch job updating reciprocal_boost</td>
            </tr>
            <tr>
              <td>"Pro subscription with limits"</td>
              <td><code>src/hooks/useSubscription.tsx</code><br/>FREE_LIMITS, PRO_LIMITS, daily_usage</td>
            </tr>
            <tr>
              <td>"Verified badge for Pro"</td>
              <td><code>src/components/ui/verified-name.tsx</code><br/>Blue checkmark when owner_is_pro</td>
            </tr>
            <tr>
              <td>"Chat after match"</td>
              <td><code>src/pages/Chat.tsx</code><br/>Real-time messaging via Supabase</td>
            </tr>
            <tr>
              <td>"Deal invites"</td>
              <td><code>src/components/deals/DealInviteButton.tsx</code><br/>Direct offer bypassing swipe</td>
            </tr>
            <tr>
              <td>"Map view for nearby items"</td>
              <td><code>src/pages/MapView.tsx</code><br/>Mapbox GL integration</td>
            </tr>
            <tr>
              <td>"No opportunity section"</td>
              <td>Removed SwapOpportunitiesSection<br/>Reciprocal boosts are silent</td>
            </tr>
          </tbody>
        </table>

        <h3>Algorithm Parameters</h3>
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="text-left">Parameter</th>
              <th className="text-left">Value</th>
              <th className="text-left">Rationale</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>GEO_SIGMA</td>
              <td>50 km</td>
              <td>Decay rate for distance scoring</td>
            </tr>
            <tr>
              <td>EXPLORATION_FACTOR</td>
              <td>0.1</td>
              <td>Random boost to prevent stale rankings</td>
            </tr>
            <tr>
              <td>Recycle threshold</td>
              <td>7 days</td>
              <td>Items swiped &gt;7 days ago can reappear</td>
            </tr>
            <tr>
              <td>Reciprocal threshold</td>
              <td>0.3</td>
              <td>Minimum score to be considered an opportunity</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

function ChangeLog() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">9. Change Log</h2>
      
      <div className="prose prose-sm dark:prose-invert max-w-none">
        <h3>December 2024</h3>
        
        <h4>Week 5 (Dec 31)</h4>
        <ul>
          <li><strong>SystemPhaseRenderer:</strong> Created new component as single authority for top-level UI rendering based on SYSTEM_PHASE</li>
          <li><strong>LocationGate Refactor:</strong> Simplified to only sync location state and provide UI. No longer decides when it appears.</li>
          <li><strong>Root Rendering Control:</strong> All conditional rendering moved to SystemPhaseRenderer: BOOTSTRAPPING → loading, TRANSITION → loading, BLOCKED → LocationGate, ACTIVE → children</li>
        </ul>

        <h4>Week 4 (Dec 23-30)</h4>
        <ul>
          <li><strong>Location State Machine Integration:</strong> LocationGate now properly integrates with SystemStateProvider. Shows loading during BOOTSTRAPPING, transitions through TRANSITION when checking location, and correctly handles BLOCKED state with working retry button.</li>
          <li><strong>AUTH_READY Action:</strong> Added AUTH_READY action to separate auth completion from location checking. LocationGate only appears after auth is ready.</li>
          <li><strong>Recoverable BLOCKED State:</strong> BLOCKED is now a waiting state, not terminal. Retry button triggers LOCATION_RETRY → TRANSITION → re-request location.</li>
          <li><strong>Unified State Machine:</strong> Introduced SystemStateProvider with SYSTEM_STATE, SUBSCRIPTION_STATE, SWIPE_STATE, MATCH_STATE phases</li>
          <li><strong>Centralized Entitlements:</strong> Created useEntitlements hook as single source of truth for Pro/limit checks. Pro users skip daily_usage entirely.</li>
          <li><strong>Subscription State Transitions:</strong> Upgrades now use UPGRADING state with proper cache invalidation</li>
          <li><strong>Hybrid Recommendation System:</strong> Implemented two-layer architecture with realtime ranking and offline reciprocal optimization</li>
          <li><strong>Removed Opportunity UI:</strong> Deleted SwapOpportunitiesSection, SwapOpportunityCard, useSwapOpportunities - reciprocal boosts now silent</li>
          <li><strong>Card Exhaustion Handling:</strong> Added expandedSearch mode with item recycling after 7 days</li>
          <li><strong>Missed Matches Tab:</strong> Added tab in Matches page showing items where counterparty liked but user skipped</li>
          <li><strong>Bold Unread Messages:</strong> Message previews now bold if unread</li>
        </ul>

        <h4>Week 3 (Dec 16-22)</h4>
        <ul>
          <li><strong>Pro Subscription System:</strong> Implemented daily limits, feature upgrades, Dodo Payments integration</li>
          <li><strong>Verified Badge:</strong> Added blue checkmark for Pro users</li>
          <li><strong>Usage Tracking:</strong> Created daily_usage table and increment functions</li>
          <li><strong>Item Ratings:</strong> Bayesian rating system with Bayesian averaging</li>
        </ul>

        <h4>Week 2 (Dec 9-15)</h4>
        <ul>
          <li><strong>Deal Invites:</strong> Direct swap offers bypassing swipe matching</li>
          <li><strong>Search Page:</strong> Category and keyword filtering</li>
          <li><strong>Map View:</strong> Mapbox integration for location-based discovery</li>
        </ul>

        <h4>Week 1 (Dec 2-8)</h4>
        <ul>
          <li><strong>Initial Build:</strong> Core swipe interface, item CRUD, matching logic</li>
          <li><strong>Auth System:</strong> Supabase Auth with profile creation trigger</li>
          <li><strong>Chat System:</strong> Real-time messaging for matches</li>
        </ul>

        <h3>Future Updates</h3>
        <p className="text-muted-foreground">This section will be updated as changes are made to the system.</p>
      </div>
    </section>
  );
}

function ExtensionPoints() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">10. Extension Points</h2>
      
      <div className="prose prose-sm dark:prose-invert max-w-none">
        <h3>Safe to Extend</h3>
        
        <h4>1. Category System</h4>
        <p>To add new item categories:</p>
        <ol>
          <li>Add to <code>item_category</code> enum in database</li>
          <li>Add embedding vector to <code>CATEGORY_EMBEDDINGS</code> in both edge functions</li>
          <li>Add to <code>CATEGORY_LABELS</code> and <code>CATEGORY_ICONS</code> in types</li>
        </ol>

        <h4>2. Scoring Weights</h4>
        <p>Algorithm weights in <code>recommend-items/index.ts</code> can be tuned:</p>
        <ul>
          <li>Increase <code>geoScore</code> weight for more local-focused matching</li>
          <li>Increase <code>reciprocalBoost</code> for stronger offline influence</li>
          <li>Adjust <code>EXPLORATION_FACTOR</code> for more/less randomness</li>
        </ul>

        <h4>3. Subscription Tiers</h4>
        <p>Current system supports binary Pro/Free. To add tiers:</p>
        <ol>
          <li>Add tier column to <code>user_subscriptions</code></li>
          <li>Create tier-specific limit constants</li>
          <li>Update <code>useSubscription</code> hook logic</li>
        </ol>

        <h4>4. Push Notifications</h4>
        <p>Not yet implemented. Extension points:</p>
        <ul>
          <li>Add FCM token storage to profiles</li>
          <li>Create notification edge function</li>
          <li>Trigger on match creation, new message, deal invite</li>
        </ul>

        <h4>5. Scheduled Jobs</h4>
        <p>Reciprocal optimizer is currently manual. To schedule:</p>
        <ul>
          <li>Use Supabase cron via pg_cron extension</li>
          <li>Or external scheduler calling the edge function</li>
          <li>Recommended: Run daily during low-traffic hours</li>
        </ul>

        <h3>Requires Careful Planning</h3>
        <ul>
          <li><strong>Multi-item swapping:</strong> Current model is 1:1. N:N would need schema changes.</li>
          <li><strong>Value matching:</strong> Currently soft (min/max ranges). Strict value matching would need algorithm updates.</li>
          <li><strong>Social features:</strong> Following, reviews, reputation systems would need new tables and RLS policies.</li>
        </ul>

        <h3>Not Recommended to Change</h3>
        <ul>
          <li><strong>Item-to-item matching model:</strong> Core architectural decision deeply embedded</li>
          <li><strong>Match creation trigger:</strong> Critical for data consistency</li>
          <li><strong>RLS policies on core tables:</strong> Security-critical</li>
        </ul>
      </div>
    </section>
  );
}
