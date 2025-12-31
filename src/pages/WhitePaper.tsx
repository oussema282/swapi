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
    { id: 'invariants', title: '8. System Invariants', icon: AlertTriangle },
    { id: 'constraints', title: '9. Known Constraints', icon: AlertTriangle },
    { id: 'mapping', title: '10. Prompt-to-Code Mapping', icon: Code },
    { id: 'changelog', title: '11. Change Log', icon: History },
    { id: 'extension', title: '12. Extension Points', icon: Puzzle },
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
              {activeSection === 'invariants' && <SystemInvariants />}
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
        <p><strong>BOOTSTRAPPING is a temporary blocking phase that MUST always exit.</strong> During BOOTSTRAPPING:</p>
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
        <p className="bg-destructive/10 p-4 rounded-md border border-destructive/20 mt-4">
          <strong>CRITICAL INVARIANT:</strong> BOOTSTRAPPING is temporary and must always resolve within 5 seconds.<br/>
          A timeout mechanism forces exit to a safe state if data loading fails or hangs.<br/>
          SYSTEM_PHASE must never remain BOOTSTRAPPING after initial load.
        </p>
        <p><strong>Fallback Behavior:</strong></p>
        <ul>
          <li>If loading completes normally → <code>bootstrapExitReason = 'NORMAL'</code></li>
          <li>If 5-second timeout fires → <code>bootstrapExitReason = 'TIMEOUT'</code> → force exit to safe state</li>
          <li>If auth/profile/subscription errors → <code>bootstrapExitReason = 'AUTH_FAILED' | 'PROFILE_FAILED' | 'SUBSCRIPTION_FAILED'</code></li>
          <li>Errors are logged but app continues to function</li>
        </ul>
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
          <li><strong>TRANSITION:</strong> Loading screen ("Getting your location...") - <strong>geo routes only</strong></li>
          <li><strong>BLOCKED:</strong> LocationGate component (permission UI) - <strong>geo routes only</strong></li>
          <li><strong>ACTIVE:</strong> Main application content (children)</li>
          <li><strong>BACKGROUND_ONLY:</strong> Main application content (children)</li>
        </ul>

        <h3>Safe Routes vs Geo Routes</h3>
        <p className="bg-primary/10 p-4 rounded-md border border-primary/20">
          <strong>Safe Routes:</strong> /matches, /chat/*, /profile, /items, /auth, /checkout, /whitepaper<br/>
          <strong>Geo Routes:</strong> /, /map, /search<br/><br/>
          <strong>Rule:</strong> Safe routes must NEVER be blocked by LocationGate. They render as soon as user is authenticated and profile is loaded.
        </p>
        <ul>
          <li><strong>/matches:</strong> Non-geo, non-swipe route. Shows matches immediately after auth.</li>
          <li><strong>/chat/*:</strong> Non-geo route. Enables messaging regardless of location status.</li>
          <li><strong>/profile, /items:</strong> Non-geo routes. User can manage profile and items without location.</li>
        </ul>

        <p className="bg-destructive/10 p-4 rounded-md border border-destructive/20">
          <strong>Critical Invariant:</strong> No component below SystemPhaseRenderer may bypass SYSTEM_PHASE checks.
          LocationGate does NOT decide when it appears—it is rendered ONLY when SYSTEM_PHASE === 'BLOCKED' AND on a geo route.
          Safe routes bypass LocationGate entirely. No features execute during BOOTSTRAPPING.
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
        <p><strong>BOOTSTRAPPING is a temporary blocking phase that MUST always exit.</strong></p>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`During BOOTSTRAPPING:
  - NO LocationGate shown
  - NO upgrade prompts shown
  - NO recommendations fetched
  - NO swipe, map, or background jobs run

BOOTSTRAPPING ends via:
  1. NORMAL: All data loaded (auth, profile, subscription)
  2. TIMEOUT: 5-second fallback timer fires
  3. ERROR: Individual loader fails (logged, app continues)

CRITICAL INVARIANT:
  - BOOTSTRAPPING always exits to ACTIVE (normal/timeout/error)
  - BOOTSTRAPPING is temporary and must always resolve
  - 5-second timeout prevents infinite loading
  - Errors are logged but never block app permanently
  - SYSTEM_PHASE must NEVER remain BOOTSTRAPPING
  - Index must never overwrite SWIPE_PHASE during SWIPING/COMMITTING

Exit Reasons (bootstrapExitReason):
  'NORMAL'              → All data loaded successfully
  'TIMEOUT'             → Forced exit after 5 seconds
  'AUTH_FAILED'         → Auth loading failed
  'PROFILE_FAILED'      → Profile loading failed
  'SUBSCRIPTION_FAILED' → Subscription loading failed

After isFullyBootstrapped === true:
  - If location missing → BLOCKED → LocationGate shown
  - If location granted → ACTIVE → main app renders`}
        </pre>

        <h4>BLOCKED State Semantics</h4>
        <p className="bg-primary/10 p-4 rounded-md border border-primary/20">
          <strong>BLOCKED is a recoverable waiting state, NOT a dead-end or error state.</strong><br/>
          It means "missing required condition" (e.g., location permission), not "fatal error".
        </p>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`BLOCKED State Rules:
  - BLOCKED means "waiting for required condition"
  - Retry must ALWAYS allow recovery
  - BLOCKED is NEVER terminal
  - No features run while SYSTEM_PHASE === BLOCKED

Retry Flow:
  1. User clicks retry button
  2. LOCATION_RETRY dispatched → BLOCKED → TRANSITION
  3. Location permission re-requested
  4. If granted: TRANSITION → ACTIVE (recovery successful)
  5. If denied again: TRANSITION → BLOCKED (remain waiting)

State Transitions:
  BLOCKED + retry click → TRANSITION
  TRANSITION + location granted → ACTIVE
  TRANSITION + location denied → BLOCKED (can retry again)`}
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
          <li><strong>Dec 31, 2024 (Subscription):</strong> SUBSCRIPTION_PHASE is now decision authority, not is_pro</li>
          <li><strong>Dec 31, 2024 (Subscription):</strong> UPGRADING state unlocks all features optimistically</li>
          <li><strong>Dec 31, 2024 (Subscription):</strong> All entitlement checks go through single resolver</li>
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
        <h3>SWIPE_PHASE State Machine</h3>
        <p className="bg-primary/10 p-4 rounded-md border border-primary/20">
          <strong>CRITICAL:</strong> All swipe operations are strictly controlled by <code>SWIPE_PHASE</code>.
          Gestures are ONLY allowed in <code>READY</code> phase. Decisions commit ONLY from <code>COMMITTING</code>.
          No swipe logic runs during <code>TRANSITION</code> or when <code>SUBSCRIPTION_PHASE === UPGRADING</code>.
        </p>
        
        <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`SWIPE_PHASE values:
  IDLE        → No swiping context (no item selected)
  LOADING     → Fetching card pool (request in progress)
  READY       → Cards available, gestures ALLOWED
  SWIPING     → Mid-swipe animation
  COMMITTING  → Persisting decision to database
  UNDOING     → Reverting a previous swipe
  REFRESHING  → Actively fetching more cards (user-triggered retry)
  EXHAUSTED   → Stable empty state (no cards for THIS item)
  PAUSED      → Swiping paused (e.g., viewing map)

Phase Transitions:
  IDLE → LOADING      (item selected, fetch starts)
  LOADING → READY     (cards fetched successfully)
  LOADING → EXHAUSTED (empty array returned)
  READY → SWIPING     (gesture started)
  SWIPING → COMMITTING (animation complete)
  COMMITTING → READY  (decision persisted)
  READY → UNDOING     (undo initiated)
  UNDOING → READY     (undo complete)
  READY → EXHAUSTED   (swiped through all cards)
  EXHAUSTED → REFRESHING (user clicks retry)
  REFRESHING → READY  (new cards fetched)
  REFRESHING → EXHAUSTED (still no cards)`}
        </pre>

        <h3>Gesture Control</h3>
        <p><strong>Location:</strong> <code>src/hooks/useSwipeState.tsx</code>, <code>src/components/discover/SwipeCard.tsx</code></p>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`Gesture Rules:
  - Drag gestures ONLY enabled when:
    • SWIPE_PHASE === READY
    • SYSTEM_PHASE !== TRANSITION
    • SYSTEM_PHASE !== BLOCKED
    • SYSTEM_PHASE !== BOOTSTRAPPING
    • SUBSCRIPTION_PHASE !== UPGRADING

  - SwipeCard receives canGesture prop from parent
  - When canGesture === false:
    • drag prop set to false
    • handleDragEnd returns early

  - Button swipes check canGesture before initiating`}
        </pre>

        <h3>Decision Commit Flow</h3>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`1. User initiates swipe (gesture or button)
2. acquireCommitLock() → If lock held, ABORT (prevents double commits)
3. Check SWIPE_PHASE === READY
4. startSwipe(direction) → SWIPE_PHASE = SWIPING
5. Animation plays (300ms)
6. try {
     a. Persist to swipes table
     b. Check for match (DB trigger)
     c. completeSwipe(itemId):
        - SWIPE_PHASE = COMMITTING
        - Update history stack
        - SWIPE_PHASE = READY
   } catch (error) {
     forceReady() → Reset phase to READY, show error toast
   } finally {
     releaseCommitLock() → ALWAYS release lock
   }

CRITICAL: The finally block MUST always run to release the lock.
          forceReady() resets UI/phase on ANY error.`}
        </pre>

        <h4>Commit Lock (isCommittingRef)</h4>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`Purpose: Prevent double commits during rapid swipes

Location: src/hooks/useSwipeState.tsx
  - isCommittingRef = useRef(false)
  - acquireCommitLock() → Returns false if lock held
  - releaseCommitLock() → Always called in finally

Usage in src/pages/Index.tsx handleSwipe():
  1. acquireCommitLock() → If false, return early
  2. startSwipe(direction)
  3. setTimeout(async () => {
       try { ... DB call ... }
       catch { forceReady(); toast.error() }
       finally { releaseCommitLock() }
     }, 300)

Debug Logs (one line per transition):
  [SWIPE] READY → SWIPING (left|right)
  [SWIPE] SWIPING → COMMITTING
  [SWIPE] COMMITTING → READY
  [SWIPE] forceReady from phase=X
  [SWIPE] blocked: commit lock held`}
        </pre>

        <h3>Undo Flow</h3>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`1. User clicks undo button
2. Check SWIPE_PHASE === READY && historyStack.length > 0
3. startUndo() → SWIPE_PHASE = UNDOING
4. Verify 24-hour eligibility (swipe_undos table)
5. Delete swipe record from swipes table
6. Insert record into swipe_undos table
7. completeUndo():
   a. Revert currentIndex to previous entry
   b. Remove entry from historyStack
   c. Increment cardKey (force remount)
   d. SWIPE_PHASE = READY
8. If error: SWIPE_PHASE = READY (abort undo)`}
        </pre>

        <h3>Card Exhaustion (Item-Scoped)</h3>
        <p className="bg-primary/10 p-4 rounded-md border border-primary/20">
          <strong>CRITICAL:</strong> Swipe exhaustion is <strong>item-scoped</strong>, not global. 
          When no cards are available for the current item, the system transitions to <code>EXHAUSTED</code> phase
          with a stable empty state. Loading spinner is shown ONLY while a request is in progress.
        </p>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`Card Exhaustion Flow (Updated Dec 31, 2024):

1. Strict → Expanded → Exhausted Flow:
   a. Call recommend-items with strict mode (myItemId, limit=50)
   b. If strict returns 0 items:
      - Automatically retry with expandedSearch=true (ONCE)
   c. If expanded also returns 0 items:
      - Set SWIPE_PHASE = EXHAUSTED (stable state)
      - Show EmptyState with "Switch Item" + "Check for new items"
   d. Spinner shown ONLY during active request

2. Exhaustion is ITEM-SCOPED:
   - Each item has its own exhaustion state
   - Switching items resets SWIPE_PHASE to IDLE
   - Previous item's exhaustion does not affect new item
   - Cache is cleared when switching items

3. Item Switch Flow:
   - User selects different item
   - actions.reset() → SWIPE_PHASE = IDLE
   - Clear React Query cache for new item
   - Fresh recommend-items request
   - LOADING → READY (if items) or EXHAUSTED (if empty)

4. Retry from EXHAUSTED state:
   - User clicks "Check for new items"
   - EXHAUSTED → REFRESHING
   - Invalidate and refetch recommendations
   - REFRESHING → READY (if items) or EXHAUSTED (if still empty)

5. Loading Spinner Rules:
   - Show spinner ONLY when request is in progress
   - Never use loading as fallback for empty state
   - EXHAUSTED is a stable state, NOT a loading state
   - NEVER show permanent spinner when exhausted

6. Empty State UI (src/components/discover/EmptyState.tsx):
   - "Switch Item" button (if user has multiple items)
   - "Check for new items" refresh button
   - Info text: "New items may appear as users add listings"`}
        </pre>

        <h3>System State Blocking</h3>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`No swipe logic runs when:
  - SYSTEM_PHASE === TRANSITION (location check, upgrade)
  - SYSTEM_PHASE === BLOCKED (location denied)
  - SYSTEM_PHASE === BOOTSTRAPPING (app initializing)
  - SUBSCRIPTION_PHASE === UPGRADING (payment in progress)

isSystemBlocked = TRANSITION || BLOCKED || BOOTSTRAPPING || UPGRADING`}
        </pre>

        <h3>State Flow Diagram</h3>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`┌─────────────┐    ┌───────────────────┐    ┌─────────────┐
│ Select Item │ -> │ LOADING           │ -> │ READY       │
└─────────────┘    └───────────────────┘    └─────────────┘
                           │                      │
                   useRecommendedItems()    ┌──────┴──────┐
                           │               Swipe       Undo
                   recommend-items API      │             │
                           │               ▼             ▼
                           └──────> SWIPING      UNDOING
                                       │             │
                                       ▼             ▼
                                  COMMITTING    (revert)
                                       │             │
                                       └──────┬──────┘
                                              ▼
                                   ┌─────────────────┐
                                   │ READY (or       │
                                   │ REFRESHING if   │
                                   │ pool exhausted) │
                                   └─────────────────┘`}
        </pre>

        <h3>Swipe Undo System</h3>
        <p><strong>Location:</strong> <code>src/hooks/useSwipe.tsx</code></p>
        <ul>
          <li>Users can undo a swipe once per item per 24 hours</li>
          <li>Tracked in <code>swipe_undos</code> table</li>
          <li>Undo fully reverts the decision state (index, history)</li>
          <li>Undo respects SWIPE_PHASE gating (only from READY)</li>
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
        <h3>Subscription State Machine</h3>
        <p className="bg-primary/10 p-4 rounded-md border border-primary/20">
          <strong>CRITICAL:</strong> <code>is_pro</code> in the database is persistence only, NOT the decision authority.
          <code>SUBSCRIPTION_PHASE</code> from SystemState IS the decision authority.
        </p>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`SUBSCRIPTION_PHASE values:
  FREE_ACTIVE  → Free user, within limits
  FREE_LIMITED → Free user, some limits reached
  UPGRADING    → Payment in progress (all features unlocked)
  PRO_ACTIVE   → Pro subscription active
  PRO_EXPIRED  → Pro subscription expired

Decision Authority:
  - Database is_pro is for PERSISTENCE only
  - All access decisions use SUBSCRIPTION_PHASE
  - During UPGRADING: all limit checks DISABLED
  - When PRO_ACTIVE: daily_usage IGNORED`}
        </pre>

        <h3>Upgrade Flow</h3>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`1. User initiates payment
2. startUpgrade() → SUBSCRIPTION_PHASE = UPGRADING
   - All limit checks disabled
   - All caches invalidated
   - Features optimistically unlocked
3. Payment processes
4. Database updated: is_pro = true
5. refreshEntitlements() → refetch subscription
6. completeUpgrade(true) → SUBSCRIPTION_PHASE = PRO_ACTIVE
   - All Pro features permanently unlocked
   - Upgrade prompts hidden
   - daily_usage completely ignored`}
        </pre>

        <h3>Entitlement Resolver</h3>
        <p><strong>Location:</strong> <code>src/hooks/useEntitlements.tsx</code></p>
        <p>THE SINGLE SOURCE OF TRUTH for all Pro/limit checks:</p>
        <ul>
          <li><code>isPro</code> derived from SUBSCRIPTION_PHASE, NOT database</li>
          <li><code>isUpgrading</code> = true during payment processing</li>
          <li><code>isProOrUpgrading</code> = combined check for unlocked features</li>
          <li><code>canUse</code> = feature-specific access resolver</li>
          <li><code>shouldShowUpgradePrompt</code> = false when Pro/Upgrading</li>
        </ul>

        <h3>Free vs Pro Limits</h3>
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="text-left">Feature</th>
              <th className="text-left">Free</th>
              <th className="text-left">Pro/Upgrading</th>
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
          <li><strong>Pro/Upgrading users: usage is NEVER tracked or fetched</strong></li>
          <li><code>incrementUsage()</code> skips for Pro/Upgrading users</li>
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
        <p>After successful payment, <code>user_subscriptions.is_pro</code> is set to true and the system transitions to PRO_ACTIVE.</p>
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

        <h4>deal_invites</h4>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`id               uuid PRIMARY KEY
sender_item_id   uuid NOT NULL    -- Item being offered
receiver_item_id uuid NOT NULL    -- Item being requested
status           text DEFAULT 'pending'  -- 'pending', 'accepted', 'rejected'
attempt          integer DEFAULT 1       -- Attempt number (max 2)
responded_at     timestamp with time zone
created_at       timestamp with time zone

CONSTRAINTS:
- check_max_attempts: attempt <= 2
- Trigger: validate_deal_invite_attempt() enforces rules

INDEXES:
- idx_deal_invites_item_pair_status (sender_item_id, receiver_item_id, status)
- idx_deal_invites_receiver_pending (receiver_item_id, status) WHERE status = 'pending'`}
        </pre>

        <h3>Deal Invite Rules (Added Dec 31, 2024)</h3>
        <pre className="bg-primary/10 p-4 rounded-md overflow-x-auto text-xs border border-primary/20">
{`DEAL INVITE RESEND RULES:

A) Pending Lock:
   - If (sender_item_id, receiver_item_id) has status='pending',
     that sender_item is LOCKED for this receiver_item
   - UI shows "Pending" badge, item is unselectable

B) Rejection Resend:
   - First rejection → can resend exactly ONE more time (attempt #2)
   - Second rejection → pair is permanently BLOCKED
   - UI shows "Resend (1 left)" or "Blocked"

C) Different Sender Item:
   - After 2 rejections, user can still try with a DIFFERENT sender_item_id
   - Each (sender_item_id, receiver_item_id) pair has its own attempt counter

D) Acceptance Flow:
   - When status='accepted':
     1. Database trigger creates match (LEAST/GREATEST ordering)
     2. Frontend finds match_id for the exact item pair
     3. Navigate to /chat/:matchId

VALIDATION TRIGGER (validate_deal_invite_attempt):
   1. Check no pending invite exists for same pair → error if exists
   2. Count rejections for same pair → error if >= 2
   3. Set attempt = rejection_count + 1`}
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
        <h3>Critical Invariant: Background Isolation</h3>
        <p className="bg-destructive/10 p-4 rounded-md border border-destructive/20">
          <strong>Background AI and batch processes must NEVER affect active UI directly.</strong><br/>
          They can only write to hidden fields (e.g., <code>reciprocal_boost</code>) that realtime ranking reads passively.
        </p>
        
        <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`BACKGROUND PROCESS RULES:

1. reciprocal-optimizer:
   - May run ONLY when SYSTEM_PHASE === BACKGROUND_ONLY
   - NEVER runs during ACTIVE, TRANSITION, or SWIPING
   - reciprocal_boost may ONLY be written in BACKGROUND_ONLY phase
   - swap_opportunities table is NEVER read by UI or hooks

2. recommend-items:
   - Must NOT run during:
     • SUBSCRIPTION_PHASE === UPGRADING
     • SYSTEM_PHASE === TRANSITION
     • SYSTEM_PHASE === BLOCKED
     • SYSTEM_PHASE === BOOTSTRAPPING
   - Query is disabled (enabled: false) during these phases
   - Returns empty array if called during blocked phase

3. swap_opportunities table:
   - Written ONLY by reciprocal-optimizer edge function
   - Read ONLY by reciprocal-optimizer for cycle detection
   - NEVER queried by any UI component or hook
   - No RLS policy allows client-side reads`}
        </pre>

        <h3>Edge Functions</h3>
        
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th className="text-left">Function</th>
              <th className="text-left">Trigger</th>
              <th className="text-left">Phase Gating</th>
              <th className="text-left">Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>recommend-items</code></td>
              <td>On-demand (API call)</td>
              <td>NOT in TRANSITION/UPGRADING</td>
              <td>Realtime item ranking for swipe feed</td>
            </tr>
            <tr>
              <td><code>reciprocal-optimizer</code></td>
              <td>Manual / Scheduled</td>
              <td>ONLY in BACKGROUND_ONLY</td>
              <td>Batch optimization for swap cycles</td>
            </tr>
            <tr>
              <td><code>dodo-checkout</code></td>
              <td>On-demand</td>
              <td>None (triggers UPGRADING)</td>
              <td>Initiate payment session</td>
            </tr>
            <tr>
              <td><code>get-mapbox-token</code></td>
              <td>On-demand</td>
              <td>None</td>
              <td>Securely fetch Mapbox token</td>
            </tr>
            <tr>
              <td><code>setup-test-data</code></td>
              <td>Manual (dev only)</td>
              <td>None</td>
              <td>Create test users and items</td>
            </tr>
            <tr>
              <td><code>add-sample-photos</code></td>
              <td>Manual (dev only)</td>
              <td>None</td>
              <td>Add placeholder photos to items</td>
            </tr>
          </tbody>
        </table>

        <h3>Background → UI Data Flow</h3>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`reciprocal-optimizer (BACKGROUND_ONLY only):
  ├── Reads: items, swipes, user_preferences_learned
  ├── Writes: swap_opportunities (internal use only)
  ├── Writes: user_preferences_learned (category affinities)
  └── Writes: items.reciprocal_boost (silent boost)
                    │
                    ▼ (passive read via items table)
                    
recommend-items (ACTIVE phase only):
  ├── Reads: items (including reciprocal_boost)
  ├── Reads: swipes, profiles
  └── Returns: ranked item IDs with scores
  
UI (useRecommendedItems hook):
  ├── Gated by: SYSTEM_PHASE !== TRANSITION/BOOTSTRAPPING/BLOCKED
  ├── Gated by: SUBSCRIPTION_PHASE !== UPGRADING
  └── Only sees: final ranked items (never sees swap_opportunities)`}
        </pre>

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

function SystemInvariants() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">8. System Invariants – What Must Never Happen</h2>
      
      <div className="prose prose-sm dark:prose-invert max-w-none">
        <p className="bg-destructive/10 p-4 rounded-md border border-destructive/20 text-destructive-foreground">
          <strong>This section defines the contract of the system.</strong> These invariants must never be violated.
          If behavior is not documented here, it must not exist. If a rule is documented here, code must enforce it.
        </p>
        
        <h3>Phase Invariants</h3>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`MUST NEVER HAPPEN:

1. BOOTSTRAPPING Phase Violations:
   ✗ LocationGate rendering during BOOTSTRAPPING
   ✗ Upgrade prompts shown during BOOTSTRAPPING
   ✗ Recommendations fetching during BOOTSTRAPPING
   ✗ Swipe, map, or background jobs running during BOOTSTRAPPING
   ✗ Any feature executing before isFullyBootstrapped === true

2. BLOCKED Phase Violations:
   ✗ Treating BLOCKED as a terminal/error state
   ✗ Features running while SYSTEM_PHASE === BLOCKED
   ✗ LocationGate appearing outside of BLOCKED phase
   ✗ Retry button failing to transition state

3. TRANSITION Phase Violations:
   ✗ Swipe logic running during TRANSITION
   ✗ recommend-items fetching during TRANSITION
   ✗ reciprocal-optimizer running during TRANSITION
   ✗ User-facing UI actions during TRANSITION`}
        </pre>

        <h3>Subscription Invariants</h3>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`MUST NEVER HAPPEN:

1. Decision Authority Violations:
   ✗ Using is_pro from database for access decisions
   ✗ Checking subscription table directly for feature gating
   ✗ Bypassing SUBSCRIPTION_PHASE for Pro status
   ✗ Any Pro check not going through useEntitlements

2. UPGRADING Phase Violations:
   ✗ Limit checks enforced during UPGRADING
   ✗ Upgrade prompts shown during UPGRADING
   ✗ daily_usage incremented during UPGRADING
   ✗ Feature access denied during UPGRADING

3. PRO_ACTIVE Violations:
   ✗ daily_usage being read or written for Pro users
   ✗ Upgrade prompts ever shown to Pro users
   ✗ Any limit being enforced on Pro users
   ✗ shouldShowUpgradePrompt returning true for Pro`}
        </pre>

        <h3>Swipe Lifecycle Invariants</h3>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`MUST NEVER HAPPEN:

1. Phase Violations:
   ✗ Gestures allowed outside of READY phase
   ✗ Decisions committed outside of COMMITTING phase
   ✗ Undo logic running outside of UNDOING phase
   ✗ Swipe logic running during TRANSITION or UPGRADING
   ✗ canGesture returning true when not in READY phase

2. Loading State Violations:
   ✗ Loading spinner shown when no request is in progress
   ✗ Loading used as fallback for empty state
   ✗ Infinite loading when recommendations return empty

3. Exhaustion Violations:
   ✗ Exhaustion treated as global state (must be item-scoped)
   ✗ Switching items without resetting SWIPE_PHASE to IDLE
   ✗ Previous item's exhaustion blocking new item
   ✗ Cache not cleared when switching items`}
        </pre>

        <h3>Background Process Invariants</h3>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`MUST NEVER HAPPEN:

1. reciprocal-optimizer Violations:
   ✗ Running during ACTIVE phase
   ✗ Running during TRANSITION phase
   ✗ Running during SWIPING phase
   ✗ Running outside of BACKGROUND_ONLY phase
   ✗ reciprocal_boost written outside BACKGROUND_ONLY

2. Data Isolation Violations:
   ✗ swap_opportunities read by UI components
   ✗ swap_opportunities read by any hook
   ✗ swap_opportunities queried client-side
   ✗ Background AI affecting active UI directly

3. recommend-items Violations:
   ✗ Running during UPGRADING phase
   ✗ Running during TRANSITION phase
    ✗ Running during BOOTSTRAPPING phase

4. BOOTSTRAPPING Violations:
   ✗ SYSTEM_PHASE remaining BOOTSTRAPPING indefinitely
   ✗ No timeout mechanism for bootstrap
   ✗ Errors during bootstrap causing infinite loading
   ✗ Promise chains blocking bootstrap exit
   ✗ Location checks running before isFullyBootstrapped`}
        </pre>

        <h3>Rendering Authority Invariants</h3>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`MUST NEVER HAPPEN:

1. SystemPhaseRenderer Violations:
   ✗ Components bypassing SYSTEM_PHASE checks
   ✗ LocationGate deciding when it appears
   ✗ Multiple components controlling top-level UI
   ✗ Loading states not shown during BOOTSTRAPPING

2. Safe Route Violations:
   ✗ LocationGate blocking /matches, /chat/*, /profile, /items
   ✗ Safe routes waiting for location permission
   ✗ /matches depending on selected item or SWIPE_PHASE
   ✗ Safe routes showing infinite loading due to location

3. Entitlement Resolver Violations:
   ✗ Multiple sources of truth for Pro status
   ✗ Feature access not going through canUse()
   ✗ useSubscription used instead of useEntitlements
   ✗ Direct is_pro checks for access decisions`}
        </pre>

        <h3>Data Integrity Invariants</h3>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`MUST NEVER HAPPEN:

1. Match Creation Violations:
   ✗ Matches created without mutual likes
   ✗ Matches created between same user's items
   ✗ Duplicate matches for same item pair

2. Swipe Recording Violations:
   ✗ Swipe recorded without valid swiper_item_id
   ✗ Swipe recorded without valid swiped_item_id
   ✗ Swipe recorded on own item
   ✗ Undo performed more than once per 24h per item`}
        </pre>

        <h3>Enforcement</h3>
        <p className="bg-primary/10 p-4 rounded-md border border-primary/20">
          <strong>Code-level Enforcement:</strong> Each invariant is enforced by specific code patterns:
        </p>
        <ul>
          <li><code>isSystemBlocked</code> in useSwipeState gates all swipe operations</li>
          <li><code>isBlocked</code> check in useRecommendations prevents fetching</li>
          <li><code>isProOrUpgrading</code> in useEntitlements unlocks all features</li>
          <li><code>SystemPhaseRenderer</code> controls all top-level UI rendering</li>
          <li>RLS policies enforce database-level access control</li>
        </ul>
      </div>
    </section>
  );
}

function KnownConstraints() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">9. Known Constraints & Trade-offs</h2>
      
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
      <h2 className="text-2xl font-bold">10. Prompt-to-Code Mapping</h2>
      
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
              <td><code>src/hooks/useEntitlements.tsx</code><br/>FREE_LIMITS, PRO_LIMITS, SUBSCRIPTION_PHASE</td>
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
              <td><code>src/pages/MapView.tsx</code><br/>Mapbox GL integration with focusItemId routing</td>
            </tr>
            <tr>
              <td>"No opportunity section"</td>
              <td>Removed SwapOpportunitiesSection<br/>Reciprocal boosts are silent</td>
            </tr>
            <tr>
              <td>"Search with rich previews"</td>
              <td><code>src/pages/Search.tsx</code><br/>Autocomplete with thumbnails, distance, price badges</td>
            </tr>
          </tbody>
        </table>

        <h3>Map Focus Navigation (focusItemId)</h3>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`Search → Map Item Focus Flow:

1. From Search page, clicking item card or location icon:
   navigate('/map?focusItemId=<ITEM_ID>')

2. MapView reads focusItemId from URL:
   const focusItemId = searchParams.get('focusItemId') || searchParams.get('itemId')

3. Map initialization:
   - If focusItemId exists AND item has coordinates:
     → Center map on item location (not user location)
     → Set zoom to 15 (street level)
     → Auto-select and show popup for that item
   - If no focusItemId:
     → Center on user location (default behavior)
     → Set zoom to 12

4. Item focus after map load:
   - hasNavigatedToFocusItem ref prevents re-centering
   - flyTo animation when items load after map init

Query Parameters:
  - focusItemId: Item ID to focus on (preferred)
  - itemId: Legacy support (backward compatible)`}
        </pre>

        <h3>Search Preview Item Contract</h3>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`Search Suggestion Interface:

interface Suggestion {
  type: 'item' | 'category' | 'popular';
  text: string;
  icon: 'item' | 'category' | 'trending';
  category?: ItemCategory;
  itemData?: {
    id: string;
    photo: string | null;      // First photo for thumbnail
    valueMin: number | null;   // For price badge
    valueMax: number | null;
    latitude: number | null;   // For map icon visibility
    longitude: number | null;
    distance?: number;         // Calculated if user has location
  };
}

UI Layout (fixed grid):
┌─────────────────────────────────────────────────┐
│ [40x40 Thumb] │ Title (truncate)     │ [📍 €X] │
│               │ Type label (truncate) │         │
└─────────────────────────────────────────────────┘

- Thumbnail: 40x40 fixed, object-cover, fallback icon
- Title: truncate (single line)
- Type: truncate (single line)
- Badges: flex-shrink-0, never wrap or push layout
- Map icon: Only shown if item has coordinates`}
        </pre>

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
      <h2 className="text-2xl font-bold">11. Change Log</h2>
      
      <div className="prose prose-sm dark:prose-invert max-w-none">
        <h3>December 2024</h3>
        
        <h4>Week 5 (Dec 31) – Audit & Contract Enforcement</h4>
        <ul>
          <li><strong>Deal Invite Attempt Tracking (Dec 31):</strong> Added attempt column and validate_deal_invite_attempt trigger. Max 2 attempts per (sender_item_id, receiver_item_id) pair.</li>
          <li><strong>Deal Invite Chat Routing (Dec 31):</strong> Accept now finds exact match_id and navigates to /chat/:matchId. No more generic navigation.</li>
          <li><strong>Deal Invite UI States (Dec 31):</strong> Shows Pending (locked), Resend (1 left), Blocked, or Matched! badges per item pair.</li>
          <li><strong>Item-Scoped Exhaustion (Dec 31):</strong> Swipe exhaustion is now per-item. EXHAUSTED is a stable empty state, not a loading state. Loading spinner shown ONLY when request is in progress.</li>
          <li><strong>Item Switch Reset (Dec 31):</strong> Switching items resets SWIPE_PHASE to IDLE, clears cache, and triggers fresh fetch. Previous item's exhaustion does not affect new item.</li>
          <li><strong>EXHAUSTED Phase (Dec 31):</strong> Added setExhausted() action to useSwipeState. Shows clear empty state UI with "Check for new items" retry button.</li>
          <li><strong>No Loading Fallback (Dec 31):</strong> Loading is never used as fallback. Empty recommendations → EXHAUSTED (stable state), not infinite loading.</li>
          <li><strong>BOOTSTRAPPING Deadlock Fix:</strong> Added 5-second timeout to guarantee BOOTSTRAPPING always exits. SYSTEM_PHASE can never remain BOOTSTRAPPING indefinitely.</li>
          <li><strong>Bootstrap Exit Tracking:</strong> Added bootstrapExitReason ('NORMAL', 'TIMEOUT', 'AUTH_FAILED', 'PROFILE_FAILED', 'SUBSCRIPTION_FAILED') to diagnose bootstrap issues.</li>
          <li><strong>Bootstrap Error Logging:</strong> All bootstrap errors are logged but never block app permanently. Timeout forces safe state exit.</li>
          <li><strong>Safe Routes vs Geo Routes:</strong> Defined GEO_REQUIRED_ROUTES (/, /map, /search) vs safe routes (/matches, /chat/*, /profile, /items). Safe routes bypass LocationGate entirely.</li>
          <li><strong>/matches Decoupled:</strong> /matches no longer requires location permission, selected item, or SWIPE_PHASE. Renders as soon as user is authenticated and profile is loaded.</li>
          <li><strong>LocationGate Scope:</strong> LocationGate now ONLY blocks geo-required routes. BLOCKED state on safe routes renders children immediately.</li>
          <li><strong>System Invariants Section:</strong> Added "What Must Never Happen" section documenting all forbidden behaviors. This document is now the contract of the system.</li>
          <li><strong>useSubscription Deprecated:</strong> Converted useSubscription.tsx to a thin re-export wrapper for useEntitlements. All direct is_pro checks removed from feature access logic.</li>
          <li><strong>White Paper as Authority:</strong> Audited codebase against White Paper. Fixed all discrepancies. If behavior is not documented, it must not exist.</li>
          <li><strong>Strict SWIPE_PHASE Lifecycle:</strong> Gestures ONLY allowed in READY phase. Decisions commit ONLY from COMMITTING phase. Undo enters UNDOING phase and fully reverts decision state.</li>
          <li><strong>No Swipe During TRANSITION/UPGRADING:</strong> isSystemBlocked gates all swipe operations when SYSTEM_PHASE is TRANSITION or SUBSCRIPTION_PHASE is UPGRADING.</li>
          <li><strong>canGesture Prop:</strong> SwipeCard now receives explicit canGesture prop from parent, disabling drag when not in READY phase.</li>
          <li><strong>SystemPhaseRenderer:</strong> Created new component as single authority for top-level UI rendering based on SYSTEM_PHASE</li>
          <li><strong>LocationGate Refactor:</strong> Simplified to only sync location state and provide UI. No longer decides when it appears.</li>
          <li><strong>Root Rendering Control:</strong> All conditional rendering moved to SystemPhaseRenderer: BOOTSTRAPPING → loading, TRANSITION → loading (geo only), BLOCKED → LocationGate (geo only), ACTIVE → children</li>
          <li><strong>BOOTSTRAPPING Blocking:</strong> No features execute until authReady, profileReady, AND subscriptionReady are all true.</li>
          <li><strong>SUBSCRIPTION_PHASE Authority:</strong> is_pro is persistence only. SUBSCRIPTION_PHASE is the decision authority for all Pro/limit checks.</li>
          <li><strong>UPGRADING State:</strong> All limit checks disabled, all features optimistically unlocked during payment processing.</li>
          <li><strong>Background Process Isolation:</strong> reciprocal-optimizer runs ONLY in BACKGROUND_ONLY phase. recommend-items blocked during TRANSITION/UPGRADING. swap_opportunities never read by UI.</li>
          <li><strong>useRecommendedItems Gating:</strong> Query disabled when SYSTEM_PHASE is TRANSITION/BLOCKED/BOOTSTRAPPING or SUBSCRIPTION_PHASE is UPGRADING.</li>
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

        <h3>Deal Invite Test Plan</h3>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`STEP-BY-STEP TEST PLAN FOR DEAL INVITES:

Setup: User A has Item1, Item2. User B has ItemX.

Test 1: First Invite (Happy Path)
1. User A opens ItemX detail
2. Clicks "Invite Deal" → sees Item1, Item2 as available
3. Selects Item1 → invite sent
4. User A sees "Pending" badge on Item1 for ItemX
✓ Expected: deal_invites record with attempt=1, status='pending'

Test 2: Pending Lock
1. User A tries to resend Item1 for ItemX
✓ Expected: Item1 shows "Pending", is unselectable
✓ Expected: Item2 is still selectable (different pair)

Test 3: Accept → Chat Routing
1. User B goes to /matches → Invites tab
2. Sees invite from User A's Item1
3. Clicks Accept
✓ Expected: Match created with correct item_a_id, item_b_id
✓ Expected: User B navigates to /chat/:matchId
✓ Expected: Chat shows both items and users

Test 4: Rejection + Resend
1. User A sends Item2 for ItemX (new pair)
2. User B declines → status='rejected', attempt=1
3. User A opens ItemX → sees Item2 with "Resend (1 left)"
4. User A clicks Item2 → second invite sent
✓ Expected: New record with attempt=2, status='pending'

Test 5: Double Rejection → Block
1. User B declines second invite → status='rejected'
2. User A opens ItemX → sees Item2 with "Blocked"
✓ Expected: Item2 is unselectable for ItemX
✓ Expected: Database has 2 rejected records for (Item2, ItemX)

Test 6: Different Sender After Block
1. User A tries Item1 (not blocked) for ItemX
✓ Expected: Item1 is available (different sender_item_id)
✓ Expected: Can send new invite with attempt=1`}
        </pre>

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
      <h2 className="text-2xl font-bold">12. Extension Points</h2>
      
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
          <li>Add new SUBSCRIPTION_PHASE values and update <code>useEntitlements</code> hook</li>
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
