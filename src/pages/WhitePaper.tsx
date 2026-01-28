import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { APP_NAME, BRAND } from '@/config/branding';

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
            <h1 className="text-xl font-bold">{APP_NAME} White Paper</h1>
            <p className="text-sm text-muted-foreground">AI-Powered Barter Exchange Platform • Version 2.0 • January 2026</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        
        {/* Table of Contents */}
        <nav className="mb-12 p-6 bg-muted/30 rounded-lg border border-border">
          <h2 className="text-lg font-semibold mb-4 text-foreground">Table of Contents</h2>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
            <li><a href="#abstract" className="hover:text-primary transition-colors">1. Abstract</a></li>
            <li><a href="#problem" className="hover:text-primary transition-colors">2. Problem Statement</a></li>
            <li><a href="#solution" className="hover:text-primary transition-colors">3. Solution Overview</a></li>
            <li><a href="#architecture" className="hover:text-primary transition-colors">4. Platform Architecture</a></li>
            <li><a href="#roles" className="hover:text-primary transition-colors">5. User Roles and Permissions</a></li>
            <li><a href="#exchange-flow" className="hover:text-primary transition-colors">6. Barter Exchange Flow</a></li>
            <li><a href="#ai-systems" className="hover:text-primary transition-colors">7. AI Systems</a></li>
            <li><a href="#trust-safety" className="hover:text-primary transition-colors">8. Trust, Safety, and Moderation</a></li>
            <li><a href="#privacy" className="hover:text-primary transition-colors">9. Data Privacy and Ethics</a></li>
            <li><a href="#scalability" className="hover:text-primary transition-colors">10. Scalability and Future Vision</a></li>
            <li><a href="#technical-specs" className="hover:text-primary transition-colors">11. Technical Specifications</a></li>
            <li><a href="#changelog" className="hover:text-primary transition-colors">12. Change Log</a></li>
          </ol>
        </nav>

        <article className="prose prose-sm dark:prose-invert max-w-none space-y-10">
          
          {/* 1. Abstract */}
          <section id="abstract">
            <h2 className="text-xl font-bold border-b border-border pb-2">1. Abstract</h2>
            <p>
              <strong>{APP_NAME}</strong> is an AI-powered barter exchange platform that enables users to trade physical items 
              directly with one another without monetary transactions. The platform addresses the friction and inefficiency 
              inherent in traditional barter systems by implementing intelligent matching algorithms that connect users based 
              on item compatibility, geographic proximity, and behavioral preferences.
            </p>
            <p>
              Unlike conventional second-hand marketplaces that require pricing, negotiation, and payment processing, 
              {APP_NAME} streamlines the exchange process through a swipe-based discovery interface, mutual matching 
              mechanics, and built-in chat functionality. The platform serves users across Europe who wish to exchange 
              goods ranging from electronics and clothing to books and sporting equipment.
            </p>
            <p>
              <strong>Core Value Proposition:</strong> "{BRAND.tagline}" — enabling circular economy participation 
              through frictionless item-to-item exchange.
            </p>
          </section>

          {/* 2. Problem Statement */}
          <section id="problem">
            <h2 className="text-xl font-bold border-b border-border pb-2">2. Problem Statement</h2>
            
            <h3 className="font-semibold mt-4">2.1 Traditional Barter Limitations</h3>
            <p>
              Traditional barter systems suffer from the "double coincidence of wants" problem — both parties must 
              simultaneously want what the other offers. This limitation has historically made barter impractical 
              at scale, requiring either extensive networks or intermediary goods to facilitate exchanges.
            </p>

            <h3 className="font-semibold mt-4">2.2 Existing Marketplace Friction</h3>
            <ul>
              <li><strong>Pricing Complexity:</strong> Users must research market values and set competitive prices</li>
              <li><strong>Negotiation Overhead:</strong> Multiple back-and-forth messages to agree on terms</li>
              <li><strong>Payment Processing:</strong> Fees, fraud risk, and transaction delays</li>
              <li><strong>Trust Deficits:</strong> Lack of verified profiles and exchange history</li>
              <li><strong>Discovery Inefficiency:</strong> Browsing through irrelevant listings</li>
            </ul>

            <h3 className="font-semibold mt-4">2.3 Sustainability Gap</h3>
            <p>
              As consumers become more environmentally conscious, demand for circular economy solutions grows. 
              However, existing platforms still optimize for monetary transactions rather than direct exchange, 
              leaving a significant portion of reusable goods underutilized.
            </p>
          </section>

          {/* 3. Solution Overview */}
          <section id="solution">
            <h2 className="text-xl font-bold border-b border-border pb-2">3. Solution Overview</h2>
            
            <h3 className="font-semibold mt-4">3.1 Item-Centric Matching Model</h3>
            <p>
              {APP_NAME} implements an <strong>item-to-item matching system</strong> rather than user-to-user. 
              Each item listing has its own swap preferences defining which categories the owner would accept 
              in exchange. A match occurs when two items mutually "like" each other AND both items' swap 
              preferences are compatible. This model enables users to maintain multiple simultaneous swap 
              opportunities per item.
            </p>

            <h3 className="font-semibold mt-4">3.2 AI-Powered Discovery</h3>
            <p>The platform employs a multi-factor weighted scoring algorithm that ranks potential swap candidates based on:</p>
            <ul>
              <li><strong>Category Similarity (18%):</strong> Cosine similarity between item category embeddings</li>
              <li><strong>Geographic Proximity (28%):</strong> Exponential distance decay using Haversine formula</li>
              <li><strong>Exchange Compatibility (18%):</strong> Mutual swap preference alignment</li>
              <li><strong>Behavioral Affinity (10%):</strong> Patterns derived from swipe history</li>
              <li><strong>Item Freshness (6%):</strong> Recency-weighted scoring</li>
              <li><strong>Condition Score (8%):</strong> Item condition quality weighting</li>
              <li><strong>Reciprocal Boost (12%):</strong> Priority for items with high match potential</li>
            </ul>

            <h3 className="font-semibold mt-4">3.3 Swipe-Based Interface</h3>
            <p>
              Users discover potential swaps through a familiar swipe interface. The "For You" feed presents 
              AI-ranked recommendations, while the "Nearby" feed prioritizes geographic proximity with optional 
              category and price filters. The interface supports both button-based and gesture-based interactions.
            </p>

            <h3 className="font-semibold mt-4">3.4 Two-Sided Exchange Confirmation</h3>
            <p>
              Matches proceed through a structured confirmation flow where both parties must explicitly confirm 
              the exchange within a chat interface. Upon mutual confirmation, items are automatically archived 
              (removed from discovery) but remain visible in exchange history.
            </p>
          </section>

          {/* 4. Platform Architecture */}
          <section id="architecture">
            <h2 className="text-xl font-bold border-b border-border pb-2">4. Platform Architecture</h2>
            
            <h3 className="font-semibold mt-4">4.1 Technology Stack</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 font-semibold">Layer</th>
                    <th className="text-left py-2 font-semibold">Technology</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50"><td className="py-2">Frontend</td><td>React 18, TypeScript, Vite</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2">Styling</td><td>Tailwind CSS, shadcn/ui components</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2">State Management</td><td>TanStack Query, Context API</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2">Backend</td><td>Lovable Cloud (Supabase)</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2">Database</td><td>PostgreSQL with Row-Level Security</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2">Edge Functions</td><td>Deno runtime for serverless logic</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2">Maps</td><td>Mapbox GL JS</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2">Internationalization</td><td>i18next (11 languages)</td></tr>
                  <tr><td className="py-2">Animations</td><td>Framer Motion</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-semibold mt-4">4.2 Database Schema</h3>
            <p>Core entities include:</p>
            <ul>
              <li><strong>profiles:</strong> User identity, display name, avatar, location coordinates</li>
              <li><strong>items:</strong> Listings with category, condition, photos, swap preferences, geo-location</li>
              <li><strong>swipes:</strong> Swipe history (swiper_item_id, swiped_item_id, liked boolean)</li>
              <li><strong>matches:</strong> Mutual likes with confirmation flags and completion status</li>
              <li><strong>messages:</strong> Chat messages with delivery/read status tracking</li>
              <li><strong>item_ratings:</strong> Bayesian rating system (alpha/beta, likes/dislikes)</li>
              <li><strong>user_subscriptions:</strong> Pro subscription status and expiry</li>
              <li><strong>daily_usage:</strong> Free-tier usage tracking (swipes, searches, etc.)</li>
              <li><strong>deal_invites:</strong> Direct swap proposals outside standard matching</li>
              <li><strong>user_roles:</strong> Admin/moderator role assignments</li>
            </ul>

            <h3 className="font-semibold mt-4">4.3 State Machine Architecture</h3>
            <p>The application operates through three interconnected state machines:</p>
            
            <h4 className="font-medium mt-3">SYSTEM_PHASE</h4>
            <ul className="text-sm">
              <li><code className="bg-muted px-1 rounded text-xs">BOOTSTRAPPING</code> → App initialization (max 5s timeout)</li>
              <li><code className="bg-muted px-1 rounded text-xs">ACTIVE</code> → Normal operation</li>
              <li><code className="bg-muted px-1 rounded text-xs">TRANSITION</code> → State change in progress</li>
              <li><code className="bg-muted px-1 rounded text-xs">BLOCKED</code> → Location permission denied</li>
            </ul>

            <h4 className="font-medium mt-3">SUBSCRIPTION_PHASE</h4>
            <ul className="text-sm">
              <li><code className="bg-muted px-1 rounded text-xs">FREE_ACTIVE</code> → Free user within limits</li>
              <li><code className="bg-muted px-1 rounded text-xs">FREE_LIMITED</code> → Free user at limit</li>
              <li><code className="bg-muted px-1 rounded text-xs">UPGRADING</code> → Payment in progress</li>
              <li><code className="bg-muted px-1 rounded text-xs">PRO_ACTIVE</code> → Pro subscription active</li>
              <li><code className="bg-muted px-1 rounded text-xs">PRO_EXPIRED</code> → Pro subscription expired</li>
            </ul>

            <h4 className="font-medium mt-3">SWIPE_PHASE</h4>
            <ul className="text-sm">
              <li><code className="bg-muted px-1 rounded text-xs">IDLE</code> → No active swipe session</li>
              <li><code className="bg-muted px-1 rounded text-xs">LOADING</code> → Fetching recommendations</li>
              <li><code className="bg-muted px-1 rounded text-xs">READY</code> → Cards available for swiping</li>
              <li><code className="bg-muted px-1 rounded text-xs">SWIPING</code> → Animation in progress</li>
              <li><code className="bg-muted px-1 rounded text-xs">COMMITTING</code> → Persisting to database</li>
              <li><code className="bg-muted px-1 rounded text-xs">EXHAUSTED</code> → No more candidates for item</li>
            </ul>

            <h3 className="font-semibold mt-4">4.4 Route Classification</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 font-semibold">Type</th>
                    <th className="text-left py-2 font-semibold">Routes</th>
                    <th className="text-left py-2 font-semibold">Access</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50"><td className="py-2">Public</td><td>/, /whitepaper</td><td>No authentication required</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2">Protected</td><td>/discover, /matches, /profile, /settings, /items/*</td><td>Authentication required</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2">Geo-Required</td><td>/map, /items/new, /items/:id/edit</td><td>Location permission required</td></tr>
                  <tr><td className="py-2">Safe Routes</td><td>/settings, /profile</td><td>Never blocked by location gate</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 5. User Roles and Permissions */}
          <section id="roles">
            <h2 className="text-xl font-bold border-b border-border pb-2">5. User Roles and Permissions</h2>
            
            <h3 className="font-semibold mt-4">5.1 Standard Users</h3>
            <ul>
              <li>Create and manage personal item listings</li>
              <li>Swipe on items within their selected item's context</li>
              <li>Chat with matched users</li>
              <li>Confirm exchanges</li>
              <li>Subject to daily usage limits (free tier) or unlimited access (Pro tier)</li>
            </ul>

            <h3 className="font-semibold mt-4">5.2 Free Tier Limits</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 font-semibold">Feature</th>
                    <th className="text-left py-2 font-semibold">Daily Limit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50"><td className="py-2">Swipes</td><td>50 per day</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2">Searches</td><td>3 per day</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2">Deal Invites</td><td>3 per day</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2">Map Views</td><td>3 per day</td></tr>
                  <tr><td className="py-2">Active Items</td><td>4 maximum</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-semibold mt-4">5.3 Pro Users ({BRAND.proPlan})</h3>
            <ul>
              <li>Unlimited swipes, searches, map views, and deal invites</li>
              <li>Unlimited active item listings</li>
              <li>Pro badge displayed on profile</li>
              <li>Priority in search results (planned)</li>
            </ul>

            <h3 className="font-semibold mt-4">5.4 Administrators</h3>
            <ul>
              <li>Access to admin dashboard (/admin)</li>
              <li>View platform-wide statistics and analytics</li>
              <li>Manage user roles</li>
              <li>Review reported content</li>
              <li>Role verified via <code className="bg-muted px-1 rounded text-xs">is_admin()</code> RPC function</li>
            </ul>

            <h3 className="font-semibold mt-4">5.5 Moderators</h3>
            <ul>
              <li>Limited admin privileges for content review</li>
              <li>Role verified via <code className="bg-muted px-1 rounded text-xs">has_role()</code> RPC function</li>
            </ul>
          </section>

          {/* 6. Barter Exchange Flow */}
          <section id="exchange-flow">
            <h2 className="text-xl font-bold border-b border-border pb-2">6. Barter Exchange Flow</h2>
            
            <h3 className="font-semibold mt-4">6.1 Item Listing</h3>
            <ol className="list-decimal list-inside">
              <li>User authenticates and grants location permission</li>
              <li>User creates item listing with: title, description, photos (up to 5), category, condition</li>
              <li>User sets swap preferences (categories they would accept in exchange)</li>
              <li>User sets estimated value range</li>
              <li>Item location defaults to user's current coordinates</li>
              <li>Item enters active state and becomes discoverable</li>
            </ol>

            <h3 className="font-semibold mt-4">6.2 Discovery and Swiping</h3>
            <ol className="list-decimal list-inside">
              <li>User selects one of their items as "swipe context"</li>
              <li>Recommendation engine generates ranked candidates</li>
              <li>Candidates are filtered by: swap preference compatibility, not previously swiped, not already matched</li>
              <li>User swipes right (like) or left (pass) on each candidate</li>
              <li>Each swipe is recorded in the swipes table</li>
              <li>Daily swipe count incremented for free users</li>
            </ol>

            <h3 className="font-semibold mt-4">6.3 Matching</h3>
            <ol className="list-decimal list-inside">
              <li>When User A's Item X likes User B's Item Y</li>
              <li>System checks if Item Y has previously liked Item X</li>
              <li>If mutual like exists → Match created</li>
              <li>Both users receive match notification</li>
              <li>Chat channel is unlocked between users</li>
            </ol>

            <h3 className="font-semibold mt-4">6.4 Negotiation (Chat)</h3>
            <ul>
              <li>Real-time messaging via Supabase Realtime</li>
              <li>Message status tracking: sending → sent → delivered → read</li>
              <li>Online presence indicators</li>
              <li>Users discuss logistics: meeting location, timing, item conditions</li>
            </ul>

            <h3 className="font-semibold mt-4">6.5 Exchange Confirmation</h3>
            <ol className="list-decimal list-inside">
              <li>Either user can initiate "Confirm Exchange" within chat</li>
              <li>First confirmation sets <code className="bg-muted px-1 rounded text-xs">confirmed_by_user_a</code> or <code className="bg-muted px-1 rounded text-xs">confirmed_by_user_b</code></li>
              <li>System waits for second party to confirm</li>
              <li>When both confirm → <code className="bg-muted px-1 rounded text-xs">confirm_exchange()</code> RPC executes</li>
              <li>Match marked <code className="bg-muted px-1 rounded text-xs">is_completed = true</code>, <code className="bg-muted px-1 rounded text-xs">completed_at</code> set</li>
              <li>Both items automatically archived via database trigger</li>
              <li>Items removed from discovery but visible in "Swapped" history</li>
            </ol>

            <h3 className="font-semibold mt-4">6.6 Missed Matches</h3>
            <p>
              If a user passes on an item that had already liked theirs, a "missed match" notification 
              appears. Pro users can undo the swipe and reconsider; free users are prompted to upgrade.
            </p>

            <h3 className="font-semibold mt-4">6.7 Deal Invites (Alternative Flow)</h3>
            <p>
              Users can send direct "Deal Invites" to items they discover, bypassing the standard 
              mutual-like requirement. The receiver can accept (creating a match), decline, or ignore.
            </p>
          </section>

          {/* 7. AI Systems */}
          <section id="ai-systems">
            <h2 className="text-xl font-bold border-b border-border pb-2">7. AI Systems</h2>
            
            <h3 className="font-semibold mt-4">7.1 Recommendation Engine</h3>
            <p>
              The <code className="bg-muted px-1 rounded text-xs">recommend-items</code> Edge Function implements the core matching algorithm:
            </p>

            <h4 className="font-medium mt-3">Category Embeddings</h4>
            <p>
              Pre-computed 5-dimensional vectors map each category to semantic dimensions: 
              [technology, fashion, media, sports, home]. Cosine similarity measures category affinity.
            </p>

            <h4 className="font-medium mt-3">Geographic Scoring</h4>
            <p>
              Haversine distance calculates actual kilometers between coordinates. Exponential decay 
              (σ = 50km) ensures closer items receive significantly higher scores.
            </p>

            <h4 className="font-medium mt-3">Exchange Compatibility</h4>
            <p>
              Bidirectional preference matching: checks if my item's category is in their swap preferences 
              AND their category is in my preferences. Embedding similarity adds nuance.
            </p>

            <h4 className="font-medium mt-3">Behavioral Learning</h4>
            <p>
              Swipe history is analyzed to identify implicit preferences. Average embedding of liked items 
              is compared against candidates to boost similar items.
            </p>

            <h4 className="font-medium mt-3">Pool Exhaustion Handling</h4>
            <p>
              When the strict pool drops below 5 candidates, the algorithm silently expands search 
              criteria, including items swiped more than 7 days ago for recycling.
            </p>

            <h3 className="font-semibold mt-4">7.2 Item Rating System</h3>
            <p>Bayesian rating model using Beta distribution (alpha, beta parameters). Ratings incorporate:</p>
            <ul>
              <li>Like/dislike counts from swipes</li>
              <li>Successful exchange completions (strong positive signal)</li>
              <li>Total interactions for confidence weighting</li>
            </ul>

            <h3 className="font-semibold mt-4">7.3 Reciprocal Optimizer</h3>
            <p>
              Background Edge Function (<code className="bg-muted px-1 rounded text-xs">reciprocal-optimizer</code>) periodically scans for 
              items with high potential for mutual matches and boosts their visibility via the 
              <code className="bg-muted px-1 rounded text-xs">reciprocal_boost</code> column.
            </p>

            <h3 className="font-semibold mt-4">7.4 Future AI Capabilities (Planned)</h3>
            <ul>
              <li><strong>Image Risk Analysis:</strong> Automated detection of prohibited items and inappropriate content</li>
              <li><strong>Value Estimation:</strong> AI-assisted fair trade value suggestions</li>
              <li><strong>Fraud Detection:</strong> Pattern recognition for suspicious account behavior</li>
              <li><strong>Multi-Way Swap Detection:</strong> Identifying three-way circular exchange opportunities</li>
            </ul>
          </section>

          {/* 8. Trust, Safety, and Moderation */}
          <section id="trust-safety">
            <h2 className="text-xl font-bold border-b border-border pb-2">8. Trust, Safety, and Moderation</h2>
            
            <h3 className="font-semibold mt-4">8.1 Account Security</h3>
            <ul>
              <li>Email-based authentication with password requirements</li>
              <li>Session validation on each auth state change</li>
              <li>Automatic token refresh and expiry handling</li>
              <li>Row-Level Security (RLS) policies on all database tables</li>
            </ul>

            <h3 className="font-semibold mt-4">8.2 Data Protection</h3>
            <ul>
              <li>User data isolated via RLS — users can only access their own records</li>
              <li>Location data used for matching only, not exposed to other users until match</li>
              <li>Photos stored in secure cloud storage with access controls</li>
              <li>Security-definer RPC functions for sensitive operations</li>
            </ul>

            <h3 className="font-semibold mt-4">8.3 Abuse Prevention</h3>
            <ul>
              <li>Daily usage limits prevent spam swiping</li>
              <li>Deal invite attempt tracking (max 3 attempts per item pair)</li>
              <li>Unique constraints prevent duplicate swipes</li>
              <li>Unmatching capability for users who feel uncomfortable</li>
            </ul>

            <h3 className="font-semibold mt-4">8.4 Moderation Framework (In Development)</h3>
            <ul>
              <li>User reporting system for inappropriate content</li>
              <li>Admin review queue for flagged items</li>
              <li>Human-in-the-loop verification for AI moderation decisions</li>
              <li>Appeals process for contested removals</li>
            </ul>
          </section>

          {/* 9. Data Privacy and Ethics */}
          <section id="privacy">
            <h2 className="text-xl font-bold border-b border-border pb-2">9. Data Privacy and Ethics</h2>
            
            <h3 className="font-semibold mt-4">9.1 Data Collection Principles</h3>
            <ul>
              <li><strong>Minimization:</strong> Only data essential for platform functionality is collected</li>
              <li><strong>Purpose Limitation:</strong> Data used only for matching and user experience</li>
              <li><strong>Transparency:</strong> Clear explanation of data usage in UI prompts</li>
            </ul>

            <h3 className="font-semibold mt-4">9.2 Location Data Handling</h3>
            <ul>
              <li>Location is required for item listings and geographic matching</li>
              <li>Precise coordinates stored for distance calculations</li>
              <li>Approximate distance displayed to other users, not exact location</li>
              <li>Users can update location at any time</li>
            </ul>

            <h3 className="font-semibold mt-4">9.3 AI Ethics</h3>
            <ul>
              <li>Recommendation algorithms avoid discriminatory patterns</li>
              <li>No demographic profiling beyond functional requirements</li>
              <li>Exploration factor (10%) prevents filter bubble formation</li>
              <li>Users can view their recommendation factors (planned)</li>
            </ul>

            <h3 className="font-semibold mt-4">9.4 Compliance Readiness</h3>
            <p>
              The platform architecture is designed with GDPR compliance in mind, including data 
              deletion capabilities and right-to-access provisions. Formal compliance certification 
              pending as the platform scales.
            </p>
          </section>

          {/* 10. Scalability and Future Vision */}
          <section id="scalability">
            <h2 className="text-xl font-bold border-b border-border pb-2">10. Scalability and Future Vision</h2>
            
            <h3 className="font-semibold mt-4">10.1 Current Capacity</h3>
            <ul>
              <li>Edge Functions scale automatically with demand</li>
              <li>PostgreSQL handles concurrent connections via pooling</li>
              <li>CDN-delivered static assets for global performance</li>
              <li>Real-time messaging via WebSocket connections</li>
            </ul>

            <h3 className="font-semibold mt-4">10.2 Planned Enhancements</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 font-semibold">Feature</th>
                    <th className="text-left py-2 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50"><td className="py-2">Push Notifications</td><td>Planned</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2">User Reviews and Ratings</td><td>Planned</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2">Dark Mode</td><td>Partial (theme support exists)</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2">Social Sharing</td><td>Planned</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2">Multi-Way Swaps</td><td>Architecture exists (swap_opportunities table)</td></tr>
                  <tr><td className="py-2">Native Mobile Apps</td><td>Under consideration</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-semibold mt-4">10.3 Geographic Expansion</h3>
            <p>
              Initial focus on European markets with support for 11 languages: English, French, German, 
              Spanish, Portuguese, Russian, Arabic, Japanese, Korean, Chinese, Hindi.
            </p>
          </section>

          {/* 11. Technical Specifications */}
          <section id="technical-specs">
            <h2 className="text-xl font-bold border-b border-border pb-2">11. Technical Specifications</h2>
            
            <h3 className="font-semibold mt-4">11.1 Item Categories</h3>
            <ul className="text-sm">
              <li>🎮 Games</li>
              <li>📱 Electronics</li>
              <li>👕 Clothes</li>
              <li>📚 Books</li>
              <li>🏡 Home & Garden</li>
              <li>⚽ Sports</li>
              <li>📦 Other</li>
            </ul>

            <h3 className="font-semibold mt-4">11.2 Item Conditions</h3>
            <ul className="text-sm">
              <li>New (1.0 weight)</li>
              <li>Like New (0.9 weight)</li>
              <li>Good (0.7 weight)</li>
              <li>Fair (0.5 weight)</li>
            </ul>

            <h3 className="font-semibold mt-4">11.3 Algorithm Parameters</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 font-semibold">Parameter</th>
                    <th className="text-left py-2 font-semibold">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50"><td className="py-2">GEO_SIGMA</td><td>50 km (distance decay)</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2">EXPLORATION_FACTOR</td><td>0.1 (10% randomness)</td></tr>
                  <tr className="border-b border-border/50"><td className="py-2">BOOTSTRAP_TIMEOUT</td><td>5000 ms</td></tr>
                  <tr><td className="py-2">RECYCLE_THRESHOLD</td><td>7 days (old swipes)</td></tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-semibold mt-4">11.4 Project Structure</h3>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-xs">
{`src/
├── components/
│   ├── layout/         # AppLayout, BottomNav, SystemPhaseRenderer
│   ├── landing/        # Hero, AuthSection, Features, Pricing
│   ├── discover/       # SwipeCard, SwipeActions, MatchModal
│   ├── matches/        # MatchCard, CompleteSwapModal
│   ├── chat/           # MessageBubble, ChatHeader
│   ├── deals/          # DealInviteButton
│   ├── admin/          # AdminSidebar, DataTable, sections/
│   ├── subscription/   # UpgradePrompt, FeatureUpgradeModal
│   └── ui/             # 40+ shadcn/ui components
│
├── hooks/
│   ├── useAuth.tsx           # Authentication context
│   ├── useSystemState.tsx    # Global state machine
│   ├── useRecommendations.tsx  # AI recommendations
│   ├── useEntitlements.tsx   # Feature limits
│   ├── useSwipeState.tsx     # Swipe state machine
│   ├── useMatches.tsx        # Match management
│   └── useLocation.tsx       # Device location
│
├── pages/              # Route components
├── locales/            # 11 language translation files
├── config/branding.ts  # App name and branding
└── integrations/supabase/  # Auto-generated client

supabase/functions/
├── recommend-items/    # AI recommendation engine
├── reciprocal-optimizer/  # Boost calculation
├── dodo-checkout/      # Payment processing
├── get-mapbox-token/   # Secure token retrieval
└── setup-test-data/    # Development utilities`}
            </pre>
          </section>

          {/* 12. Change Log */}
          <section id="changelog">
            <h2 className="text-xl font-bold border-b border-border pb-2">12. Change Log</h2>
            
            <h3 className="font-semibold mt-4">January 2026</h3>
            <ul>
              <li><strong>White Paper v2.0:</strong> Comprehensive technical documentation rewritten</li>
              <li><strong>Landing Page Integration:</strong> Auth forms merged into landing page, /auth route deprecated</li>
              <li><strong>Public Access:</strong> /whitepaper route made publicly accessible without authentication</li>
              <li><strong>Route Cleanup:</strong> All references to deprecated /auth route removed</li>
            </ul>

            <h3 className="font-semibold mt-4">Previous Updates</h3>
            <ul>
              <li>Item-to-item matching model implementation</li>
              <li>Multi-factor recommendation algorithm with weighted scoring</li>
              <li>Two-sided exchange confirmation system with auto-archiving</li>
              <li>Swipe state machine with exhaustion handling and recovery</li>
              <li>Deal invites feature for direct proposals</li>
              <li>Missed matches detection with Pro upsell flow</li>
              <li>Real-time chat with read receipts and presence</li>
              <li>Internationalization (11 languages with RTL support)</li>
              <li>Free tier usage limits with daily reset</li>
              <li>Pro subscription integration</li>
              <li>Admin dashboard with analytics</li>
              <li>Map view with Mapbox integration</li>
            </ul>
          </section>

        </article>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>© 2026 {APP_NAME}. All rights reserved.</p>
          <p className="mt-2">This document serves as the official technical contract for the {APP_NAME} platform.</p>
        </footer>
      </main>
    </div>
  );
}
