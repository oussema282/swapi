import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function WhitePaper() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b px-4 py-3">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-lg font-semibold">Valexo Technical Audit</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="prose prose-slate dark:prose-invert max-w-none">
          
          <h1>Valexo – AI-Powered Barter Exchange Platform</h1>
          <p className="text-muted-foreground">Technical Audit Document • Last Updated: January 30, 2026</p>
          
          <hr />

          {/* SECTION 1: SYSTEM OVERVIEW */}
          <h2>1. System Overview</h2>
          
          <h3>What the System Does</h3>
          <p>
            Valexo is a location-first barter exchange platform where users list physical items for swap and discover compatible trade partners through a Tinder-style swipe interface. The system matches items (not users) based on mutual "like" swipes AND compatible swap preferences. It supports real-time chat between matched parties, geolocation-based discovery, and a freemium subscription model.
          </p>
          
          <h3>What the System Does NOT Do</h3>
          <ul>
            <li><strong>No monetary transactions between users</strong> – Valexo is a pure barter platform. The only payment flow is for Pro subscriptions (Dodo Payments).</li>
            <li><strong>No AI-generated content moderation</strong> – There is no automated image analysis, content filtering, or fraud detection. Moderation is NOT IMPLEMENTED.</li>
            <li><strong>No multi-way swap execution</strong> – The reciprocal-optimizer identifies 2-way and 3-way opportunities but does NOT execute them. These are surfaced as "reciprocal_boost" scores only.</li>
            <li><strong>No push notifications</strong> – Real-time updates use Supabase Realtime. Native push is NOT IMPLEMENTED.</li>
            <li><strong>No identity verification</strong> – Users register with email/password or Google OAuth. KYC/ID verification is NOT IMPLEMENTED.</li>
            <li><strong>No shipping or logistics</strong> – The platform facilitates matching; physical exchange logistics are left to users.</li>
          </ul>

          <hr />

          {/* SECTION 2: FRONTEND ARCHITECTURE */}
          <h2>2. Frontend Architecture</h2>
          
          <h3>Technology Stack</h3>
          <ul>
            <li><strong>Framework:</strong> React 18 + TypeScript + Vite</li>
            <li><strong>Styling:</strong> Tailwind CSS + shadcn/ui components</li>
            <li><strong>State:</strong> TanStack React Query (server state), React Context (auth, system state)</li>
            <li><strong>Routing:</strong> React Router DOM v6</li>
            <li><strong>Animation:</strong> Framer Motion</li>
            <li><strong>i18n:</strong> i18next (11 languages)</li>
            <li><strong>Maps:</strong> Mapbox GL</li>
          </ul>

          <h3>Route Map</h3>
          <table>
            <thead>
              <tr>
                <th>Route</th>
                <th>File</th>
                <th>Access</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>/</td><td>Landing.tsx</td><td>Public</td><td>Landing page with integrated auth forms</td></tr>
              <tr><td>/whitepaper</td><td>WhitePaper.tsx</td><td>Public</td><td>This technical documentation</td></tr>
              <tr><td>/admin</td><td>Admin.tsx</td><td>Public (role-gated internally)</td><td>Admin dashboard (requires admin role)</td></tr>
              <tr><td>/setup</td><td>Setup.tsx</td><td>Public</td><td>First-run configuration</td></tr>
              <tr><td>/discover</td><td>Index.tsx</td><td>Auth + Location Required</td><td>Swipe interface for item discovery</td></tr>
              <tr><td>/map</td><td>MapView.tsx</td><td>Auth + Location Required</td><td>Map-based item discovery</td></tr>
              <tr><td>/search</td><td>Search.tsx</td><td>Auth + Location Required</td><td>Text/filter-based search</td></tr>
              <tr><td>/items</td><td>Items.tsx</td><td>Auth Required</td><td>User's item inventory</td></tr>
              <tr><td>/items/new</td><td>NewItem.tsx</td><td>Auth Required</td><td>Create new item listing</td></tr>
              <tr><td>/items/:id/edit</td><td>EditItem.tsx</td><td>Auth Required</td><td>Edit existing item</td></tr>
              <tr><td>/matches</td><td>Matches.tsx</td><td>Auth Required (Safe Route)</td><td>View all matches</td></tr>
              <tr><td>/chat/:matchId</td><td>Chat.tsx</td><td>Auth Required (Safe Route)</td><td>Real-time chat with match partner</td></tr>
              <tr><td>/profile</td><td>Profile.tsx</td><td>Auth Required (Safe Route)</td><td>View own profile</td></tr>
              <tr><td>/profile/edit</td><td>EditProfile.tsx</td><td>Auth Required</td><td>Edit profile</td></tr>
              <tr><td>/user/:userId</td><td>UserProfile.tsx</td><td>Auth Required</td><td>View other user's profile</td></tr>
              <tr><td>/settings</td><td>Settings.tsx</td><td>Auth Required (Safe Route)</td><td>Account settings</td></tr>
              <tr><td>/checkout</td><td>Checkout.tsx</td><td>Auth Required</td><td>Initiate Pro subscription</td></tr>
              <tr><td>/checkout/success</td><td>CheckoutSuccess.tsx</td><td>Auth Required</td><td>Post-payment confirmation</td></tr>
              <tr><td>/valhalla</td><td>Valhalla.tsx</td><td>Auth Required (Admin only)</td><td>Algorithm insights dashboard</td></tr>
            </tbody>
          </table>

          <h3>Navigation Flow</h3>
          <ol>
            <li>User lands on <code>/</code> → Scrolls to AuthSection → Signs up/in</li>
            <li>Post-auth redirect → <code>/discover</code> (triggers location permission check)</li>
            <li>If no location permission → LocationGate blocks with prompt</li>
            <li>Bottom navigation: Discover | Search | Items | Matches | Profile</li>
          </ol>

          <h3>Safe Routes (Bypass Location Gate)</h3>
          <p>
            Routes defined in <code>GEO_REQUIRED_ROUTES</code> (<code>/discover</code>, <code>/map</code>, <code>/search</code>) require location permission.
            All other authenticated routes (matches, chat, profile, items, settings) are "safe" and render immediately without location checks.
            Reference: <code>src/components/layout/SystemPhaseRenderer.tsx</code> lines 17-34
          </p>

          <hr />

          {/* SECTION 3: BACKEND ARCHITECTURE */}
          <h2>3. Backend Architecture</h2>
          
          <h3>Infrastructure</h3>
          <ul>
            <li><strong>Database:</strong> Supabase PostgreSQL (Lovable Cloud)</li>
            <li><strong>Auth:</strong> Supabase Auth (email/password + Google OAuth)</li>
            <li><strong>Storage:</strong> Supabase Storage (bucket: <code>item-photos</code>, public)</li>
            <li><strong>Edge Functions:</strong> Deno runtime via Supabase</li>
            <li><strong>Realtime:</strong> Supabase Realtime for messages</li>
          </ul>

          <h3>Edge Functions</h3>
          <table>
            <thead>
              <tr>
                <th>Function</th>
                <th>File</th>
                <th>Trigger</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>recommend-items</code></td>
                <td>supabase/functions/recommend-items/index.ts</td>
                <td>POST from useRecommendations hook</td>
                <td>Returns ranked item IDs based on multi-factor scoring algorithm</td>
              </tr>
              <tr>
                <td><code>reciprocal-optimizer</code></td>
                <td>supabase/functions/reciprocal-optimizer/index.ts</td>
                <td>Manual/Scheduled (not auto-triggered)</td>
                <td>Batch job that computes 2-way and 3-way swap opportunities, updates reciprocal_boost on items</td>
              </tr>
              <tr>
                <td><code>dodo-checkout</code></td>
                <td>supabase/functions/dodo-checkout/index.ts</td>
                <td>POST from Checkout.tsx</td>
                <td>Creates Dodo Payments checkout session for Pro subscription</td>
              </tr>
              <tr>
                <td><code>get-mapbox-token</code></td>
                <td>supabase/functions/get-mapbox-token/index.ts</td>
                <td>GET from MapView</td>
                <td>Returns Mapbox access token from secrets</td>
              </tr>
              <tr>
                <td><code>setup-test-data</code></td>
                <td>supabase/functions/setup-test-data/index.ts</td>
                <td>Manual invocation</td>
                <td>Seeds database with test items (dev only)</td>
              </tr>
              <tr>
                <td><code>add-sample-photos</code></td>
                <td>supabase/functions/add-sample-photos/index.ts</td>
                <td>Manual invocation</td>
                <td>Adds placeholder photos to items (dev only)</td>
              </tr>
            </tbody>
          </table>

          <h3>Database Functions (RPCs)</h3>
          <table>
            <thead>
              <tr><th>Function</th><th>Purpose</th></tr>
            </thead>
            <tbody>
              <tr><td><code>confirm_exchange(p_match_id)</code></td><td>Two-sided confirmation. When both users confirm, sets is_completed=true and triggers item archival.</td></tr>
              <tr><td><code>get_my_matches_with_items()</code></td><td>Security definer that returns matches with full item data (bypasses RLS for archived items).</td></tr>
              <tr><td><code>get_match_with_items(p_match_id)</code></td><td>Returns single match with item data.</td></tr>
              <tr><td><code>is_admin(_user_id)</code></td><td>Security definer to check admin role without RLS recursion.</td></tr>
              <tr><td><code>has_role(_user_id, _role)</code></td><td>Generic role check used in RLS policies.</td></tr>
              <tr><td><code>increment_usage(p_user_id, p_field)</code></td><td>Increments daily usage counter for free tier limits.</td></tr>
              <tr><td><code>get_or_create_daily_usage(p_user_id)</code></td><td>Ensures daily_usage row exists for user.</td></tr>
            </tbody>
          </table>

          <h3>Database Triggers</h3>
          <table>
            <thead><tr><th>Trigger</th><th>Table</th><th>Function</th><th>Purpose</th></tr></thead>
            <tbody>
              <tr><td>On INSERT swipes</td><td>swipes</td><td>check_for_match()</td><td>Creates match if mutual like exists</td></tr>
              <tr><td>On INSERT swipes</td><td>swipes</td><td>update_item_rating_on_swipe()</td><td>Updates Bayesian rating on swiped item</td></tr>
              <tr><td>On UPDATE matches</td><td>matches</td><td>archive_items_on_match_complete()</td><td>Archives both items when is_completed becomes true</td></tr>
              <tr><td>On UPDATE matches</td><td>matches</td><td>update_item_rating_on_match_complete()</td><td>Boosts rating for successful exchanges</td></tr>
              <tr><td>On INSERT deal_invites</td><td>deal_invites</td><td>validate_deal_invite_attempt()</td><td>Enforces max 2 attempts per item pair</td></tr>
              <tr><td>On UPDATE deal_invites</td><td>deal_invites</td><td>handle_deal_invite_accepted()</td><td>Creates match when invite is accepted</td></tr>
              <tr><td>On INSERT auth.users</td><td>auth.users</td><td>handle_new_user()</td><td>Creates profile row for new user</td></tr>
              <tr><td>On INSERT items</td><td>items</td><td>set_item_location_from_profile()</td><td>Inherits location from profile if not provided</td></tr>
            </tbody>
          </table>

          <hr />

          {/* SECTION 4: CORE ALGORITHMS */}
          <h2>4. Core Algorithms</h2>

          <h3>4.1 Recommendation Algorithm</h3>
          <p><strong>File:</strong> <code>supabase/functions/recommend-items/index.ts</code></p>
          <p><strong>Input:</strong> <code>myItemId</code> (the item user is swiping with)</p>
          <p><strong>Output:</strong> Array of <code>{'{id: string, score: number}'}</code> sorted by score descending</p>

          <h4>Scoring Weights (Lines 30-39)</h4>
          <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">{`const WEIGHTS = {
  categorySimilarity: 0.18,   // 18% - cosine similarity of category embeddings
  geoScore: 0.28,             // 28% - exponential decay by distance (σ=50km)
  exchangeCompatibility: 0.18, // 18% - mutual swap preference match
  behaviorAffinity: 0.10,     // 10% - similarity to previously liked items
  freshness: 0.06,            // 6%  - 1/(1+ageInDays)
  conditionScore: 0.08,       // 8%  - new:1.0, like_new:0.9, good:0.7, fair:0.5
  reciprocalBoost: 0.12,      // 12% - from reciprocal-optimizer batch job
};`}</pre>

          <h4>Category Embeddings (5-dimensional semantic vectors)</h4>
          <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">{`// Dimensions: [tech, fashion, media, sports, home]
electronics: [0.9, 0.1, 0.3, 0.2, 0.2]
clothes:     [0.1, 0.9, 0.2, 0.3, 0.1]
books:       [0.2, 0.1, 0.9, 0.1, 0.3]
games:       [0.7, 0.1, 0.8, 0.4, 0.2]
sports:      [0.2, 0.3, 0.1, 0.9, 0.2]
home_garden: [0.2, 0.1, 0.2, 0.1, 0.9]
other:       [0.3, 0.3, 0.3, 0.3, 0.3]`}</pre>

          <h4>Geo Score Calculation</h4>
          <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">{`const GEO_SIGMA = 50; // km
geoScore = Math.exp(-distance / GEO_SIGMA);
// At 0km: 1.0, At 50km: 0.37, At 100km: 0.14, At 200km: 0.02`}</pre>

          <h4>Missing Data Handling</h4>
          <ul>
            <li>No location data → geoScore = 0.5 (neutral)</li>
            <li>No swap preferences → categorySimilarity = 0.5 (neutral)</li>
            <li>No swipe history → behaviorAffinity = 0.5 (neutral)</li>
            <li>Exploration factor: random 0-0.1 added to all scores</li>
          </ul>

          <h4>Pool Exhaustion Logic</h4>
          <ol>
            <li>If strict pool {"<"} 5 items, automatically enables expandedSearch</li>
            <li>Expanded search recycles items swiped {">"} 7 days ago</li>
            <li>Adjusted weights in expanded mode: reciprocalBoost=0.20, behaviorAffinity=0.15</li>
          </ol>

          <h3>4.2 Bayesian Item Rating</h3>
          <p><strong>Trigger Function:</strong> <code>update_item_rating_on_swipe()</code></p>
          <p><strong>Batch Recalculation:</strong> <code>recalculate_item_ratings_with_decay()</code></p>
          <p><strong>Formula:</strong> <code>rating = 1 + 4 * (alpha / (alpha + beta))</code></p>
          <p><strong>Initial values:</strong> alpha=3, beta=3 (neutral 3-star)</p>

          <h4>Time Decay (Batch Recalculation)</h4>
          <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">{`tau_days = 21.0  -- Half-life
time_weight = exp(-days_old / tau_days)
-- At 0 days: 1.0, At 21 days: 0.37, At 42 days: 0.14`}</pre>

          <table>
            <thead><tr><th>Event</th><th>Weight</th><th>Effect</th></tr></thead>
            <tbody>
              <tr><td>Like</td><td>+1.0</td><td>Increases alpha</td></tr>
              <tr><td>Dislike</td><td>-0.5</td><td>Increases beta</td></tr>
              <tr><td>Successful exchange</td><td>+2.0</td><td>Increases alpha (no decay)</td></tr>
            </tbody>
          </table>

          <h3>4.3 Reciprocal Optimizer</h3>
          <p><strong>File:</strong> <code>supabase/functions/reciprocal-optimizer/index.ts</code></p>
          <p><strong>Execution:</strong> Manual/scheduled batch job (NOT auto-triggered)</p>

          <h4>Process</h4>
          <ol>
            <li>Load all active items and swipe history</li>
            <li>Learn category affinities per user from swipe patterns</li>
            <li>Calculate pairwise reciprocal scores: <code>score = bWantsA * aWantsB + distanceBonus</code></li>
            <li>Find 3-way cycles (A→B→C→A) with minimum score threshold (0.3)</li>
            <li>Store top 50 2-way and top 10 3-way opportunities in <code>swap_opportunities</code> table</li>
            <li>Update <code>reciprocal_boost</code> column on items involved in opportunities</li>
          </ol>

          <p><strong>Important:</strong> swap_opportunities table is for background analysis only. UI does NOT read from it. Items get boosted visibility via the reciprocal_boost column in the recommendation algorithm.</p>

          <hr />

          {/* SECTION 5: AI & MACHINE INTELLIGENCE */}
          <h2>5. AI & Machine Intelligence</h2>

          <h3>Implemented Components</h3>
          <table>
            <thead><tr><th>Component</th><th>Type</th><th>Location</th></tr></thead>
            <tbody>
              <tr>
                <td>Recommendation Engine</td>
                <td>Rule-based weighted scoring</td>
                <td>recommend-items edge function</td>
              </tr>
              <tr>
                <td>Category Embeddings</td>
                <td>Pre-computed static vectors (NOT ML-trained)</td>
                <td>CATEGORY_EMBEDDINGS constant</td>
              </tr>
              <tr>
                <td>Behavior Affinity</td>
                <td>Cosine similarity of swipe history</td>
                <td>calculateBehaviorAffinity()</td>
              </tr>
              <tr>
                <td>Bayesian Rating</td>
                <td>Statistical model (beta distribution)</td>
                <td>update_item_rating_on_swipe trigger</td>
              </tr>
            </tbody>
          </table>

          <h3>NOT IMPLEMENTED</h3>
          <ul>
            <li>Image analysis / computer vision</li>
            <li>Natural language processing for descriptions</li>
            <li>Fraud detection ML models</li>
            <li>External AI APIs (OpenAI, Gemini, etc.)</li>
            <li>Human-in-the-loop moderation workflows</li>
            <li>Confidence scoring with human override</li>
          </ul>

          <p><strong>The "AI" in Valexo is rule-based weighted scoring with pre-computed embeddings. There are no trained ML models or external AI services.</strong></p>

          <hr />

          {/* SECTION 6: DATABASE DESIGN */}
          <h2>6. Database Design</h2>

          <h3>Core Tables</h3>
          <table>
            <thead><tr><th>Table</th><th>Purpose</th><th>Key Columns</th></tr></thead>
            <tbody>
              <tr><td>profiles</td><td>User profile data</td><td>user_id, display_name, avatar_url, latitude, longitude, last_seen</td></tr>
              <tr><td>items</td><td>Item listings</td><td>user_id, title, category, condition, swap_preferences[], photos[], latitude, longitude, is_active, is_archived, reciprocal_boost</td></tr>
              <tr><td>swipes</td><td>Swipe actions</td><td>swiper_item_id, swiped_item_id, liked</td></tr>
              <tr><td>matches</td><td>Mutual matches</td><td>item_a_id, item_b_id, is_completed, confirmed_by_user_a, confirmed_by_user_b</td></tr>
              <tr><td>messages</td><td>Chat messages</td><td>match_id, sender_id, content, status (sent/delivered/read)</td></tr>
              <tr><td>deal_invites</td><td>Direct swap requests</td><td>sender_item_id, receiver_item_id, status, attempt</td></tr>
              <tr><td>item_ratings</td><td>Bayesian ratings</td><td>item_id, alpha, beta, rating, likes_count, dislikes_count</td></tr>
              <tr><td>user_subscriptions</td><td>Pro status</td><td>user_id, is_pro, expires_at, dodo_session_id</td></tr>
              <tr><td>daily_usage</td><td>Free tier tracking</td><td>user_id, usage_date, swipes_count, searches_count, map_uses_count</td></tr>
              <tr><td>user_roles</td><td>Admin/moderator roles</td><td>user_id, role (admin/moderator/user)</td></tr>
              <tr><td>swap_opportunities</td><td>Batch-computed opportunities</td><td>cycle_type, user_a/b/c_id, item_a/b/c_id, confidence_score (NOT read by UI)</td></tr>
            </tbody>
          </table>

          <h3>Key Constraints</h3>
          <ul>
            <li><code>swipes</code>: UNIQUE(swiper_item_id, swiped_item_id) – prevents duplicate swipes</li>
            <li><code>matches</code>: UNIQUE(item_a_id, item_b_id) with ordered insertion (LEAST/GREATEST) – prevents duplicate matches</li>
            <li><code>deal_invites</code>: Max 2 attempts per item pair enforced by trigger</li>
            <li><code>user_roles</code>: UNIQUE(user_id, role)</li>
          </ul>

          <hr />

          {/* SECTION 7: SECURITY & PERMISSIONS */}
          <h2>7. Security & Permissions</h2>

          <h3>Authentication</h3>
          <ul>
            <li>Email/password with auto-confirm enabled (no email verification)</li>
            <li>Google OAuth via Lovable Cloud managed provider</li>
            <li>Session managed by Supabase Auth (JWT tokens)</li>
          </ul>

          <h3>Authorization (RLS Policies)</h3>
          <p>Every table has Row Level Security enabled. Key patterns:</p>
          <ul>
            <li><strong>profiles:</strong> Anyone can SELECT; only owner can UPDATE</li>
            <li><strong>items:</strong> Anyone sees active non-archived OR own items; only owner can INSERT/UPDATE/DELETE</li>
            <li><strong>swipes:</strong> User can create/view swipes from own items; can delete own swipes</li>
            <li><strong>matches:</strong> User sees matches involving own items; system can INSERT (trigger)</li>
            <li><strong>messages:</strong> User sees messages in own matches; can INSERT if sender; can UPDATE status if recipient</li>
            <li><strong>user_roles:</strong> Only admins (via is_admin() function) can CRUD</li>
          </ul>

          <h3>Admin Role Check</h3>
          <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">{`// Security definer function prevents RLS recursion
CREATE FUNCTION is_admin(_user_id uuid) RETURNS boolean
SELECT EXISTS (
  SELECT 1 FROM user_roles WHERE user_id = _user_id AND role = 'admin'
);`}</pre>

          <h3>Abuse Prevention</h3>
          <ul>
            <li><strong>Daily limits (Free tier):</strong> 50 swipes, 3 searches, 3 map uses, 3 deal invites, 4 active items</li>
            <li><strong>Deal invite spam:</strong> Max 2 attempts per item pair (enforced by trigger)</li>
            <li><strong>Duplicate swipes:</strong> Unique constraint + graceful handling in mutation</li>
            <li><strong>Content moderation:</strong> NOT IMPLEMENTED</li>
            <li><strong>Reporting system:</strong> NOT IMPLEMENTED</li>
          </ul>

          <hr />

          {/* SECTION 8: FAILURE MODES & EDGE CASES */}
          <h2>8. Failure Modes & Edge Cases</h2>

          <h3>Edge Function Failures</h3>
          <ul>
            <li><strong>recommend-items fails:</strong> Falls back to fallbackFetch() which queries database directly with swap_preferences filtering (useRecommendations.tsx line 321)</li>
            <li><strong>dodo-checkout fails:</strong> Returns 500 with error message, user sees "Payment configuration error"</li>
            <li><strong>get-mapbox-token fails:</strong> Displays "Map Unavailable" fallback UI with retry button (IMPLEMENTED)</li>
          </ul>

          <h3>Partial Data Handling</h3>
          <ul>
            <li><strong>Item without photos:</strong> Renders placeholder</li>
            <li><strong>Item without location:</strong> Excluded from Nearby mode; included in ForYou with neutral geoScore</li>
            <li><strong>Profile without avatar:</strong> Renders default avatar</li>
            <li><strong>Archived items in match:</strong> Security definer RPC returns item data</li>
          </ul>

          <h3>State Machine Timeouts</h3>
          <ul>
            <li><strong>BOOTSTRAPPING phase:</strong> 5-second timeout fallback (documented in useSystemState)</li>
            <li><strong>Location permission pending:</strong> Blocks in TRANSITION phase until resolved</li>
          </ul>

          <h3>User-Visible Error Handling</h3>
          <ul>
            <li>Form validation errors: Inline messages via react-hook-form + zod</li>
            <li>Network errors: Toast notifications via sonner</li>
            <li>Empty states: Dedicated EmptyState components with CTAs</li>
          </ul>

          <hr />

          {/* SECTION 9: KNOWN LIMITATIONS */}
          <h2>9. Known Limitations</h2>

          <h3>Technical Limitations</h3>
          <ul>
            <li><strong>Supabase query limit:</strong> 1000 rows per query (may affect users with many items)</li>
            <li><strong>No offline support:</strong> App requires network connection</li>
            <li><strong>No push notifications:</strong> Users must open app to see updates</li>
            <li><strong>No image compression:</strong> Large photos uploaded as-is</li>
            <li><strong>Single currency display:</strong> Euro (€) hardcoded</li>
          </ul>

          <h3>Unimplemented Features (Planned or Documented but Not Built)</h3>
          <ul>
            <li>Content moderation / image analysis</li>
            <li>User reporting and appeals system</li>
            <li>Multi-way swap execution flow</li>
            <li>Push notifications</li>
            <li>Identity verification</li>
            <li>Shipping/logistics integration</li>
          </ul>

          <h3>Recently Implemented</h3>
          <ul>
            <li><strong>Time decay on Bayesian ratings</strong> – Implemented via <code>recalculate_item_ratings_with_decay()</code> function. Uses formula <code>exp(-days/21)</code> where older swipes have less impact. Should be scheduled to run periodically.</li>
            <li><strong>Mapbox fallback UI</strong> – Error state with retry button when map token fails to load.</li>
          </ul>

          <h3>Out of Scope</h3>
          <ul>
            <li>Monetary transactions between users</li>
            <li>Native mobile apps (iOS/Android)</li>
            <li>Multi-tenancy / white-label</li>
            <li>API access for third parties</li>
          </ul>

          <hr />

          {/* SECTION 10: FREE TIER LIMITS */}
          <h2>10. Entitlement System</h2>
          <p><strong>Reference:</strong> <code>src/hooks/useEntitlements.tsx</code></p>

          <h3>Free Tier Daily Limits</h3>
          <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">{`FREE_LIMITS = {
  swipes: 50,
  searches: 3,
  dealInvites: 3,
  mapUses: 3,
  maxItems: 4,
}`}</pre>

          <h3>Pro Benefits</h3>
          <ul>
            <li>Unlimited swipes, searches, map uses, deal invites</li>
            <li>Unlimited active items</li>
          </ul>

          <h3>State Machine</h3>
          <p>SUBSCRIPTION_PHASE drives all entitlement decisions (not database is_pro field):</p>
          <ul>
            <li><strong>FREE_ACTIVE:</strong> Normal free tier with limits</li>
            <li><strong>FREE_LIMITED:</strong> Approaching or at limits</li>
            <li><strong>UPGRADING:</strong> Optimistic unlock during checkout</li>
            <li><strong>PRO_ACTIVE:</strong> Full Pro access</li>
            <li><strong>PRO_EXPIRED:</strong> Subscription lapsed</li>
          </ul>

          <hr />

          <h2>Document Verification</h2>
          <p>
            Every claim in this document references actual files in the codebase. Routes are defined in <code>src/App.tsx</code>. 
            Edge functions exist in <code>supabase/functions/</code>. Database schema is in <code>src/integrations/supabase/types.ts</code>.
            Algorithm weights are hardcoded constants at specified line numbers.
          </p>
          <p className="text-muted-foreground">
            <strong>Audit completed:</strong> January 2026<br />
            <strong>Codebase version:</strong> As deployed to Lovable Cloud
          </p>

        </article>
      </main>
    </div>
  );
}
