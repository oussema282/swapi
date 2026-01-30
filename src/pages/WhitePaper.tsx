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
                <td><code>ai-policy-optimizer</code></td>
                <td>supabase/functions/ai-policy-optimizer/index.ts</td>
                <td>Admin-only manual (rate limited 24h)</td>
                <td>Uses Gemini to analyze metrics and propose optimized algorithm weights</td>
              </tr>
              <tr>
                <td><code>content-moderator</code></td>
                <td>supabase/functions/content-moderator/index.ts</td>
                <td>Real-time on image upload</td>
                <td>Uses Gemini Vision to detect prohibited content (nudity, weapons, alcohol, drugs, violence)</td>
              </tr>
              <tr>
                <td><code>fraud-detector</code></td>
                <td>supabase/functions/fraud-detector/index.ts</td>
                <td>Admin-only batch (rate limited 24h)</td>
                <td>Uses Gemini to analyze behavioral patterns and assign risk scores to users</td>
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

          <p>
            Valexo operates on a <strong>hybrid intelligence architecture</strong> combining deterministic rule-based algorithms with 
            AI-powered oversight systems. The core recommendation engine uses weighted scoring with pre-computed embeddings, while 
            three Lovable AI (Gemini) powered edge functions provide policy optimization, content moderation, and fraud detection.
          </p>

          <h3>5.1 Implemented AI Components</h3>
          <table>
            <thead><tr><th>Component</th><th>Type</th><th>Location</th><th>Model</th></tr></thead>
            <tbody>
              <tr>
                <td>Recommendation Engine</td>
                <td>Rule-based weighted scoring</td>
                <td>recommend-items edge function</td>
                <td>N/A (deterministic)</td>
              </tr>
              <tr>
                <td>Category Embeddings</td>
                <td>Pre-computed static vectors</td>
                <td>CATEGORY_EMBEDDINGS constant</td>
                <td>N/A (hardcoded)</td>
              </tr>
              <tr>
                <td>Behavior Affinity</td>
                <td>Cosine similarity of swipe history</td>
                <td>calculateBehaviorAffinity()</td>
                <td>N/A (statistical)</td>
              </tr>
              <tr>
                <td>Bayesian Rating</td>
                <td>Statistical model (beta distribution)</td>
                <td>update_item_rating_on_swipe trigger</td>
                <td>N/A (statistical)</td>
              </tr>
              <tr>
                <td><strong>AI Policy Optimizer</strong></td>
                <td>LLM-powered policy generation</td>
                <td>ai-policy-optimizer edge function</td>
                <td>google/gemini-2.5-flash</td>
              </tr>
              <tr>
                <td><strong>Content Moderator</strong></td>
                <td>Vision AI content analysis</td>
                <td>content-moderator edge function</td>
                <td>google/gemini-2.5-flash (vision)</td>
              </tr>
              <tr>
                <td><strong>Fraud Detector</strong></td>
                <td>Behavioral pattern analysis</td>
                <td>fraud-detector edge function</td>
                <td>google/gemini-2.5-flash</td>
              </tr>
            </tbody>
          </table>

          <hr />

          {/* SECTION 5.2: AI POLICY OPTIMIZER */}
          <h3>5.2 AI Policy Optimizer</h3>
          <p><strong>File:</strong> <code>supabase/functions/ai-policy-optimizer/index.ts</code></p>
          <p><strong>Trigger:</strong> Admin-only manual invocation (rate limited to once per 24 hours)</p>
          <p><strong>Model:</strong> google/gemini-2.5-flash via Lovable AI Gateway</p>

          <h4>Purpose</h4>
          <p>
            Analyzes aggregated platform metrics and proposes optimized algorithm weights. The AI operates within strict 
            guardrails and outputs only numeric policy parameters. New policies are stored as <strong>inactive</strong> 
            and require explicit admin activation.
          </p>

          <h4>Metrics Collected (30-day window)</h4>
          <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">{`interface MetricSnapshot {
  // Swipe behavior
  total_swipes: number;           // Total swipes in period
  total_likes: number;            // Right swipes
  total_dislikes: number;         // Left swipes
  like_rate: number;              // likes / total (0.0-1.0)

  // Conversion metrics
  total_matches: number;          // Mutual matches created
  total_completed_exchanges: number;
  match_to_exchange_conversion: number;  // completed / matches

  // Time efficiency
  avg_time_to_complete_hours: number;

  // Category performance breakdown
  category_success_rates: Record<string, {
    matches: number;
    completed: number;
    conversion_rate: number;
  }>;

  // Current policy state
  current_policy_version: string;
  current_weights: PolicyWeights;
}`}</pre>

          <h4>Weight Bounds (Strictly Enforced)</h4>
          <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">{`const WEIGHT_BOUNDS = {
  geoScore:              { min: 0.10, max: 0.40 },  // 10-40%
  categorySimilarity:    { min: 0.05, max: 0.30 },  // 5-30%
  exchangeCompatibility: { min: 0.10, max: 0.35 },  // 10-35%
  behaviorAffinity:      { min: 0.05, max: 0.25 },  // 5-25%
  freshness:             { min: 0.02, max: 0.15 },  // 2-15%
  conditionScore:        { min: 0.02, max: 0.15 },  // 2-15%
  reciprocalBoost:       { min: 0.05, max: 0.25 },  // 5-25%
};

// CRITICAL: All weights MUST sum to 0.98-1.02
// AI output is rejected if sum is outside this range`}</pre>

          <h4>Exploration Policy Bounds</h4>
          <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">{`const EXPLORATION_BOUNDS = {
  randomness:       { min: 0.00, max: 0.20 },  // Random factor in scoring
  cold_start_boost: { min: 0.00, max: 0.30 },  // New item visibility boost
  stale_item_penalty: { min: 0.00, max: 0.50 }, // Old item visibility penalty
};`}</pre>

          <h4>AI System Prompt</h4>
          <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">{`ROLE CONSTRAINTS:
- You ONLY output numeric policy parameters via tool call
- You do NOT select items, users, or matches
- You do NOT have access to personal data
- Your outputs are versioned and stored for auditability
- All changes require admin activation and can be rolled back instantly

OPTIMIZATION GOALS (priority order):
1. Maximize completed exchanges (match_to_exchange_conversion)
2. Reduce time to match
3. Prioritize mutual swap preferences (reciprocal matches)
4. Improve cold start item visibility
5. Reduce stale item visibility

RULES:
- All weights MUST sum to approximately 1.0 (between 0.98 and 1.02)
- Prefer SMALL incremental changes (max 0.05 per weight per iteration)
- Provide brief rationale for each change
- If metrics are insufficient, return current policy unchanged`}</pre>

          <h4>Tool Calling Schema (Structured Output)</h4>
          <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">{`// AI is FORCED to output via this schema - no free-form text
const TOOLS = [{
  type: "function",
  function: {
    name: "propose_policy",
    parameters: {
      type: "object",
      properties: {
        policy_version: { type: "string" },  // Semver format
        weights: {
          type: "object",
          properties: {
            geoScore: { type: "number" },
            categorySimilarity: { type: "number" },
            exchangeCompatibility: { type: "number" },
            behaviorAffinity: { type: "number" },
            freshness: { type: "number" },
            conditionScore: { type: "number" },
            reciprocalBoost: { type: "number" }
          },
          required: [/* all fields */]
        },
        exploration_policy: { /* randomness, cold_start_boost, etc. */ },
        reciprocal_policy: { priority: "low|medium|high", boost_cap: number },
        rationale: { type: "array", items: { type: "string" } }
      },
      required: ["policy_version", "weights", "exploration_policy", 
                 "reciprocal_policy", "rationale"]
    }
  }
}];`}</pre>

          <h4>Validation Algorithm</h4>
          <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">{`function validatePolicyOutput(output: PolicyProposal): ValidationResult {
  const errors: string[] = [];
  
  // 1. Validate weights sum to ~1.0
  const weightsSum = Object.values(output.weights)
    .reduce((a, b) => a + b, 0);
  if (weightsSum < 0.98 || weightsSum > 1.02) {
    errors.push(\`Weights sum \${weightsSum.toFixed(3)} outside [0.98, 1.02]\`);
  }
  
  // 2. Validate each weight within bounds
  for (const [key, value] of Object.entries(output.weights)) {
    const bounds = WEIGHT_BOUNDS[key];
    if (value < bounds.min || value > bounds.max) {
      errors.push(\`\${key}=\${value} outside [\${bounds.min}, \${bounds.max}]\`);
    }
  }
  
  // 3. Validate exploration policy
  const { randomness } = output.exploration_policy;
  if (randomness < 0 || randomness > 0.20) {
    errors.push('randomness outside [0, 0.20]');
  }
  
  // 4. Validate semver format
  if (!/^v\\d+\\.\\d+\\.\\d+$/.test(output.policy_version)) {
    errors.push('Invalid version format (expected vX.Y.Z)');
  }
  
  return { valid: errors.length === 0, errors };
}`}</pre>

          <h4>Safety Guardrails</h4>
          <table>
            <thead><tr><th>Layer</th><th>Protection</th></tr></thead>
            <tbody>
              <tr><td>Access Control</td><td>Admin-only endpoint (JWT verification + is_admin check)</td></tr>
              <tr><td>Input Isolation</td><td>AI sees only aggregated metrics, never PII or raw user data</td></tr>
              <tr><td>Output Validation</td><td>All weights validated before storage (bounds + sum)</td></tr>
              <tr><td>Activation Gate</td><td>New policies stored with active=false by default</td></tr>
              <tr><td>Gradual Rollout</td><td>Uses algorithm_policy_rollouts for A/B testing</td></tr>
              <tr><td>Instant Rollback</td><td>Set rollout.enabled=false to revert immediately</td></tr>
              <tr><td>Audit Trail</td><td>All policies versioned with created_by='ai_optimizer'</td></tr>
              <tr><td>Rate Limiting</td><td>Max one optimization run per 24 hours</td></tr>
              <tr><td>Data Threshold</td><td>Requires minimum 100 swipes to run analysis</td></tr>
            </tbody>
          </table>

          <hr />

          {/* SECTION 5.3: CONTENT MODERATION AI */}
          <h3>5.3 Content Moderation AI</h3>
          <p><strong>File:</strong> <code>supabase/functions/content-moderator/index.ts</code></p>
          <p><strong>Trigger:</strong> Real-time on every image upload (item photos, avatars)</p>
          <p><strong>Model:</strong> google/gemini-2.5-flash (vision) via Lovable AI Gateway</p>

          <h4>Purpose</h4>
          <p>
            Analyzes uploaded images in real-time to detect prohibited content before storage completes. 
            Blocks unsafe content immediately and logs all decisions for audit.
          </p>

          <h4>Prohibited Content Categories</h4>
          <table>
            <thead><tr><th>Category</th><th>Examples</th><th>Action</th></tr></thead>
            <tbody>
              <tr><td><code>nudity</code></td><td>Explicit imagery, pornography, sexually suggestive</td><td>Block + flag user</td></tr>
              <tr><td><code>weapons</code></td><td>Firearms, knives, explosives, ammunition</td><td>Block + flag item</td></tr>
              <tr><td><code>alcohol</code></td><td>Alcohol bottles, beer cans, liquor</td><td>Block</td></tr>
              <tr><td><code>drugs</code></td><td>Drug paraphernalia, pills (except OTC packaging)</td><td>Block</td></tr>
              <tr><td><code>violence</code></td><td>Gore, blood, graphic violence, harm to animals</td><td>Block + flag user</td></tr>
              <tr><td><code>hate_symbols</code></td><td>Nazi symbols, hate group imagery, offensive gestures</td><td>Block + flag user</td></tr>
            </tbody>
          </table>

          <h4>AI System Prompt</h4>
          <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">{`You are a content moderation AI for Valexo, an item exchange platform.

Analyze images for prohibited content. Users should only upload photos of 
items they want to swap.

PROHIBITED CONTENT (return violation):
1. nudity - Any nudity, explicit content, or sexually suggestive material
2. weapons - Firearms, knives, explosives, ammunition
3. alcohol - Alcohol bottles, beer cans, liquor
4. drugs - Drug paraphernalia, pills (unless clearly OTC medicine packaging)
5. violence - Gore, blood, graphic violence, harm to animals
6. hate_symbols - Nazi symbols, hate group imagery, offensive gestures

ALLOWED CONTENT:
- Household items, electronics, books, games, clothes
- Toys (including toy weapons clearly labeled as toys)
- Sports equipment
- Art and collectibles (context matters)

Use the analyze_content tool to return your verdict.`}</pre>

          <h4>Tool Calling Schema</h4>
          <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">{`const TOOLS = [{
  type: "function",
  function: {
    name: "analyze_content",
    description: "Return content moderation verdict for an image",
    parameters: {
      type: "object",
      properties: {
        is_safe: { 
          type: "boolean",
          description: "Whether the image is safe for the platform"
        },
        violation_type: { 
          type: "string", 
          enum: ["nudity", "weapons", "alcohol", "drugs", 
                 "violence", "hate_symbols"],
          description: "Type of violation if unsafe, null if safe"
        },
        confidence: { 
          type: "number",
          description: "Confidence score 0.0-1.0"
        },
        reason: { 
          type: "string",
          description: "Brief explanation of the verdict"
        }
      },
      required: ["is_safe", "confidence", "reason"]
    }
  }
}];`}</pre>

          <h4>Decision Logic</h4>
          <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">{`function determineAction(is_safe: boolean, confidence: number): Action {
  if (is_safe) {
    return confidence >= 0.85 ? 'allowed' : 'flagged';
  } else {
    // Not safe
    if (confidence >= 0.85) {
      return 'blocked';  // High confidence violation
    } else if (confidence >= 0.60) {
      return 'review_required';  // Medium confidence - human review
    } else {
      return 'flagged';  // Low confidence - log but allow
    }
  }
}

// Thresholds:
// >= 0.85 confidence: Automated decision (block or allow)
// 0.60-0.85: Flagged for human review
// < 0.60: Allowed but logged`}</pre>

          <h4>Frontend Integration Flow</h4>
          <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">{`// src/hooks/useContentModeration.tsx

const moderateAndUpload = async (file: File, uploadFn, contentType) => {
  // 1. Upload to storage first (get URL)
  const url = await uploadFn(file);
  
  // 2. Call content moderator with URL
  const result = await checkImage(url, contentType);
  
  // 3. Handle result
  if (!result.is_safe) {
    // Delete the uploaded file if blocked
    await supabase.storage.from('item-photos').remove([fileName]);
    
    toast.error(\`Image blocked: \${formatViolationType(result.violation_type)}\`);
    return { success: false, error: violationMessage };
  }
  
  if (result.action === 'review_required' || result.action === 'flagged') {
    toast.info('Image uploaded and pending review');
  }
  
  return { success: true, url };
};`}</pre>

          <h4>Database Logging</h4>
          <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">{`// Every moderation decision is logged to content_moderation_logs

INSERT INTO content_moderation_logs (
  user_id,           -- Who uploaded
  content_type,      -- 'item_photo' or 'avatar'
  content_url,       -- Storage path
  analysis_result,   -- Full AI response (JSONB)
  is_safe,           -- Boolean verdict
  violation_type,    -- null or category string
  confidence_score,  -- 0.0-1.0
  action_taken       -- 'allowed', 'blocked', 'flagged', 'review_required'
);`}</pre>

          <h4>Safety Guardrails</h4>
          <table>
            <thead><tr><th>Layer</th><th>Protection</th></tr></thead>
            <tbody>
              <tr><td>Confidence Threshold</td><td>Only auto-block if confidence {'>'}= 0.85</td></tr>
              <tr><td>Human Review Queue</td><td>Medium confidence (0.60-0.85) goes to admin</td></tr>
              <tr><td>Appeal System</td><td>Users can dispute via admin contact</td></tr>
              <tr><td>Audit Log</td><td>All decisions logged with full AI response</td></tr>
              <tr><td>Fallback</td><td>On AI error, allow upload but flag for review</td></tr>
              <tr><td>No Data Retention</td><td>AI does not store images, only analyzes URLs</td></tr>
            </tbody>
          </table>

          <hr />

          {/* SECTION 5.4: FRAUD DETECTION AI */}
          <h3>5.4 Fraud Detection AI</h3>
          <p><strong>File:</strong> <code>supabase/functions/fraud-detector/index.ts</code></p>
          <p><strong>Trigger:</strong> Admin-only batch analysis (rate limited to once per 24 hours)</p>
          <p><strong>Model:</strong> google/gemini-2.5-flash via Lovable AI Gateway</p>

          <h4>Purpose</h4>
          <p>
            Analyzes aggregated user behavior patterns to detect scam attempts, fake listings, and suspicious activity.
            The AI receives only behavioral signals (counts, ratios, timestamps), never personal data or message content.
            Flags users for admin review but does NOT auto-ban.
          </p>

          <h4>Behavioral Signals Collected</h4>
          <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">{`interface UserSignals {
  user_id: string;                    // For reference only
  account_age_days: number;           // Days since registration
  
  // Listing behavior
  total_items: number;                // Total items created
  items_last_24h: number;             // Items created in last 24h
  items_last_7d: number;              // Items created in last 7 days
  
  // Report history
  total_reports_received: number;     // Times reported by others
  pending_reports: number;            // Unresolved reports
  
  // Profile completeness
  has_location: boolean;              // Location set
  has_avatar: boolean;                // Avatar uploaded
  has_bio: boolean;                   // Bio written
  
  // Value claims
  avg_item_value_claimed: number;     // Average claimed value
  max_item_value_claimed: number;     // Highest claimed value
  
  // Description patterns
  unique_descriptions_ratio: number;  // Unique / total (1.0 = all unique)
  
  // Exchange history
  matches_count: number;              // Total matches
  completed_exchanges: number;        // Successful exchanges
  
  // Moderation history
  moderation_blocks: number;          // Times content was blocked
}`}</pre>

          <h4>Risk Signal Weights</h4>
          <table>
            <thead><tr><th>Signal</th><th>Weight</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td>Rapid listings ({'>'} 5/24h)</td><td>High</td><td>Creating many items quickly is suspicious</td></tr>
              <tr><td>Copy-paste descriptions</td><td>Medium</td><td>Low unique_descriptions_ratio indicates spam</td></tr>
              <tr><td>Report history</td><td>High</td><td>Multiple reports from different users</td></tr>
              <tr><td>Moderation blocks</td><td>High</td><td>Previous content policy violations</td></tr>
              <tr><td>No location</td><td>Low</td><td>Missing location is slightly suspicious</td></tr>
              <tr><td>High value claims</td><td>Medium</td><td>Unrealistic claimed values may indicate scam</td></tr>
              <tr><td>New account + high activity</td><td>Medium</td><td>New accounts with high velocity</td></tr>
              <tr><td>Completed exchanges (inverse)</td><td>High</td><td>Completed exchanges reduce risk</td></tr>
            </tbody>
          </table>

          <h4>AI System Prompt</h4>
          <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">{`You are a fraud detection AI for Valexo, an item exchange platform.

Analyze user behavior patterns to detect scam attempts and fake listings.
You receive AGGREGATED behavioral signals, not personal data.

RISK SIGNALS TO EVALUATE:
1. Listing velocity - Creating many items quickly is suspicious 
   (especially >5 in 24h for new accounts)
2. Account completeness - Missing location, avatar, bio slightly suspicious
3. Report history - Multiple reports from different users is very concerning
4. Value claims - Unusually high claimed values may indicate scam
5. Description patterns - Very low unique description ratio may indicate 
   copy-paste spam
6. Moderation history - Previous content blocks are concerning
7. Exchange success - Completed exchanges indicate legitimate user

RISK LEVELS:
- low (0-25): Normal user behavior
- medium (26-50): Some concerning signals, worth monitoring
- high (51-75): Multiple red flags, needs admin review
- critical (76-100): Strong fraud indicators, recommend suspension

IMPORTANT:
- New accounts with high activity but no reports are MEDIUM risk, not HIGH
- Completed exchanges significantly reduce risk
- One-time violations should not lead to critical rating
- Consider the combination of signals, not just individual ones

Use the assess_risk tool to return your analysis.`}</pre>

          <h4>Tool Calling Schema</h4>
          <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">{`const TOOLS = [{
  type: "function",
  function: {
    name: "assess_risk",
    description: "Return fraud risk assessment for a user",
    parameters: {
      type: "object",
      properties: {
        risk_score: { 
          type: "number", 
          description: "Risk score from 0 (safe) to 100 (definite fraud)" 
        },
        risk_level: { 
          type: "string", 
          enum: ["low", "medium", "high", "critical"],
          description: "Risk level category"
        },
        primary_concerns: {
          type: "array",
          items: { type: "string" },
          description: "Top 3 signals that raised flags",
          maxItems: 3
        },
        recommended_action: {
          type: "string",
          enum: ["none", "monitor", "review", "suspend"],
          description: "Recommended action for this user"
        },
        reasoning: {
          type: "string",
          description: "Brief explanation of the assessment"
        }
      },
      required: ["risk_score", "risk_level", "primary_concerns", 
                 "recommended_action", "reasoning"]
    }
  }
}];`}</pre>

          <h4>Risk Score Interpretation</h4>
          <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">{`RISK LEVELS:

┌─────────────────────────────────────────────────────────────┐
│ 0-25 (LOW)      │ Normal user behavior                     │
│                 │ Action: none                             │
├─────────────────────────────────────────────────────────────┤
│ 26-50 (MEDIUM)  │ Some concerning signals, worth monitoring│
│                 │ Action: monitor (periodic re-analysis)   │
├─────────────────────────────────────────────────────────────┤
│ 51-75 (HIGH)    │ Multiple red flags, needs admin review   │
│                 │ Action: review (auto_flagged=true)       │
├─────────────────────────────────────────────────────────────┤
│ 76-100 (CRITICAL)│ Strong fraud indicators                 │
│                 │ Action: suspend recommendation           │
│                 │ (Admin must manually suspend)            │
└─────────────────────────────────────────────────────────────┘`}</pre>

          <h4>Database Storage</h4>
          <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">{`// Risk scores stored in user_risk_scores table

UPSERT INTO user_risk_scores (
  user_id,
  risk_score,          -- 0-100
  risk_level,          -- 'low', 'medium', 'high', 'critical'
  signals,             -- Full behavioral signals + AI assessment (JSONB)
  last_analyzed_at,    -- Timestamp of analysis
  auto_flagged,        -- true if high/critical
  admin_reviewed,      -- true once admin reviews
  admin_notes          -- Optional admin notes
) ON CONFLICT (user_id) DO UPDATE;

// Run history stored in fraud_detection_runs table

INSERT INTO fraud_detection_runs (
  run_type,            -- 'scheduled', 'manual'
  triggered_by,        -- Admin user_id who triggered
  users_analyzed,      -- Count of users analyzed
  high_risk_found,     -- Count of high/critical users found
  actions_taken,       -- Summary of recommended actions (JSONB)
  completed_at         -- Timestamp when finished
);`}</pre>

          <h4>Safety Guardrails</h4>
          <table>
            <thead><tr><th>Layer</th><th>Protection</th></tr></thead>
            <tbody>
              <tr><td>No Auto-Ban</td><td>AI only flags users; admin must take action manually</td></tr>
              <tr><td>Aggregated Data Only</td><td>AI never sees messages, descriptions, or personal info</td></tr>
              <tr><td>Rate Limiting</td><td>Max one full scan per 24 hours</td></tr>
              <tr><td>Admin Override</td><td>Admin can clear flags and add notes</td></tr>
              <tr><td>Transparency</td><td>Users can see they're flagged (without specific reason)</td></tr>
              <tr><td>Audit Trail</td><td>All runs and assessments logged for review</td></tr>
              <tr><td>Appeal Path</td><td>Users can contact support if falsely flagged</td></tr>
            </tbody>
          </table>

          <hr />

          {/* SECTION 5.5: AI ARCHITECTURE SUMMARY */}
          <h3>5.5 AI Architecture Summary</h3>

          <h4>Data Flow Diagram</h4>
          <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">{`┌──────────────────────────────────────────────────────────────────────────┐
│                           AI SYSTEMS OVERVIEW                            │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  RECOMMENDATION (Deterministic)     AI POLICY OPTIMIZER (LLM)           │
│  ┌────────────────────────┐         ┌──────────────────────────┐        │
│  │ recommend-items        │◄────────│ ai-policy-optimizer      │        │
│  │ • Weighted scoring     │ weights │ • Analyzes metrics       │        │
│  │ • Static embeddings    │         │ • Proposes new weights   │        │
│  │ • Deterministic output │         │ • Stored INACTIVE        │        │
│  └────────────────────────┘         └──────────────────────────┘        │
│         │                                    │                           │
│         ▼                                    ▼                           │
│  ┌────────────────────────┐         ┌──────────────────────────┐        │
│  │ algorithm_policies     │         │ algorithm_policy_metrics │        │
│  │ (active version used)  │         │ (performance snapshots)  │        │
│  └────────────────────────┘         └──────────────────────────┘        │
│                                                                          │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  CONTENT MODERATION (LLM Vision)    FRAUD DETECTION (LLM)               │
│  ┌────────────────────────┐         ┌──────────────────────────┐        │
│  │ content-moderator      │         │ fraud-detector           │        │
│  │ • Real-time blocking   │         │ • Batch analysis         │        │
│  │ • Vision analysis      │         │ • Behavioral signals     │        │
│  │ • Confidence scoring   │         │ • Risk scoring 0-100     │        │
│  └───────────┬────────────┘         └───────────┬──────────────┘        │
│              │                                  │                        │
│              ▼                                  ▼                        │
│  ┌────────────────────────┐         ┌──────────────────────────┐        │
│  │ content_moderation_logs│         │ user_risk_scores         │        │
│  │ (audit trail)          │         │ fraud_detection_runs     │        │
│  └────────────────────────┘         └──────────────────────────┘        │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘`}</pre>

          <h4>Model Usage</h4>
          <table>
            <thead><tr><th>Function</th><th>Model</th><th>Calls Per Day</th><th>Input Type</th></tr></thead>
            <tbody>
              <tr><td>ai-policy-optimizer</td><td>gemini-2.5-flash</td><td>Max 1</td><td>Aggregated metrics (JSON)</td></tr>
              <tr><td>content-moderator</td><td>gemini-2.5-flash (vision)</td><td>Per upload</td><td>Image URL</td></tr>
              <tr><td>fraud-detector</td><td>gemini-2.5-flash</td><td>Max 1</td><td>Behavioral signals (JSON)</td></tr>
            </tbody>
          </table>

          <h4>Cost Control</h4>
          <ul>
            <li>Policy optimizer: Rate limited to 1 run/24h, processes only aggregated metrics</li>
            <li>Content moderator: Per-image cost, but images typically small</li>
            <li>Fraud detector: Rate limited to 1 run/24h, batch processes max 100 users</li>
            <li>All use gemini-2.5-flash (balanced cost/performance)</li>
          </ul>

          <p>
            <strong>The AI systems in Valexo are oversight and optimization layers. The core matching algorithm 
            remains deterministic and rule-based, ensuring predictable and auditable behavior.</strong>
          </p>

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

          <h3>AI System Tables</h3>
          <table>
            <thead><tr><th>Table</th><th>Purpose</th><th>Key Columns</th></tr></thead>
            <tbody>
              <tr><td>algorithm_policies</td><td>Stores AI-generated policy versions</td><td>policy_version, weights (JSONB), exploration_policy, reciprocal_policy, active, created_by</td></tr>
              <tr><td>algorithm_policy_metrics</td><td>Performance snapshots per policy</td><td>policy_version, metric_snapshot (JSONB), period_start, period_end</td></tr>
              <tr><td>algorithm_policy_rollouts</td><td>A/B test rollout control</td><td>policy_version, traffic_percentage, enabled, started_at, ended_at</td></tr>
              <tr><td>content_moderation_logs</td><td>Audit trail for image moderation</td><td>user_id, content_type, content_url, is_safe, violation_type, confidence_score, action_taken</td></tr>
              <tr><td>user_risk_scores</td><td>Fraud detection risk assessments</td><td>user_id, risk_score, risk_level, signals (JSONB), auto_flagged, admin_reviewed</td></tr>
              <tr><td>fraud_detection_runs</td><td>History of fraud detection runs</td><td>run_type, users_analyzed, high_risk_found, actions_taken (JSONB), triggered_by</td></tr>
            </tbody>
          </table>

          <h3>Key Constraints</h3>
          <ul>
            <li><code>swipes</code>: UNIQUE(swiper_item_id, swiped_item_id) – prevents duplicate swipes</li>
            <li><code>matches</code>: UNIQUE(item_a_id, item_b_id) with ordered insertion (LEAST/GREATEST) – prevents duplicate matches</li>
            <li><code>deal_invites</code>: Max 2 attempts per item pair enforced by trigger</li>
            <li><code>user_roles</code>: UNIQUE(user_id, role)</li>
            <li><code>algorithm_policies</code>: UNIQUE(policy_version) – ensures version uniqueness</li>
            <li><code>user_risk_scores</code>: UNIQUE(user_id) – one score per user (upsert pattern)</li>
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
            <li><strong>Content moderation:</strong> AI-powered real-time image analysis (content-moderator edge function)</li>
            <li><strong>Fraud detection:</strong> AI-powered behavioral analysis (fraud-detector edge function)</li>
            <li><strong>Reporting system:</strong> Reports table with admin review workflow</li>
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
            <li>Multi-way swap execution flow</li>
            <li>Push notifications</li>
            <li>Identity verification</li>
            <li>Shipping/logistics integration</li>
            <li>User appeals self-service portal</li>
          </ul>

          <h3>Recently Implemented (January 2026)</h3>
          <ul>
            <li><strong>AI Policy Optimizer</strong> – Uses Gemini to analyze platform metrics and propose optimized algorithm weights. Stored inactive, requires admin activation.</li>
            <li><strong>AI Content Moderation</strong> – Real-time image analysis via Gemini Vision. Blocks nudity, weapons, alcohol, drugs, violence, and hate symbols.</li>
            <li><strong>AI Fraud Detection</strong> – Batch behavioral analysis to detect scam attempts. Assigns risk scores 0-100 and flags high-risk users for admin review.</li>
            <li><strong>Time decay on Bayesian ratings</strong> – Implemented via <code>recalculate_item_ratings_with_decay()</code> function. Uses formula <code>exp(-days/21)</code> where older swipes have less impact.</li>
            <li><strong>Mapbox fallback UI</strong> – Error state with retry button when map token fails to load.</li>
            <li><strong>Admin Moderation Dashboard</strong> – UI for reviewing content moderation logs and fraud detection results.</li>
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
