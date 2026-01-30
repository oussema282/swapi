

# Comprehensive Admin Moderation Tools Design

## Overview

After thorough review of the project codebase, WhitePaper, and all admin sections, this plan identifies the complete set of admin needs and proposes updates to the admin panel to give administrators full visibility and control over the Valexo platform.

---

## Current Admin Capabilities (What Exists)

| Section | Current Features | Status |
|---------|-----------------|--------|
| **Overview** | Platform stats, charts, recent activity, quick actions | Basic metrics |
| **Users** | List users, search, make admin, view profile | Missing: ban, suspend, details |
| **Items** | List items, filter by category, archive, delete | Missing: flag, moderation status |
| **Matches** | List matches, filter by status, force complete, delete | Basic management |
| **Reports** | View user reports, resolve/dismiss, flag items | Functional |
| **Moderation** | Content moderation logs, fraud detection (basic) | Missing: actions, details |
| **Analytics** | DAU/WAU/MAU, match rate, category breakdown | Simulated data |
| **Roles** | Add/remove admin/moderator roles | Functional |
| **Valhalla** | Algorithm stats, swipe history, Bayesian ratings | Observation only |

---

## Admin Needs Analysis (What's Missing)

### 1. User Management Enhancements

| Need | Description | Priority |
|------|-------------|----------|
| **User Detail View** | Full profile with all items, matches, messages, reports, risk score | High |
| **Suspend User** | Temporarily disable account with reason and duration | High |
| **Ban User** | Permanently disable account with audit log | High |
| **Verify User** | Mark user as verified (trust badge) | Medium |
| **View User Risk Score** | Show fraud detection results inline | High |
| **View User Moderation History** | Content blocks, appeals | High |
| **Impersonate User** | Debug issues from user perspective | Low |
| **User Activity Timeline** | Chronological log of all actions | Medium |

### 2. Content Moderation Enhancements

| Need | Description | Priority |
|------|-------------|----------|
| **Review Queue** | Pending images requiring human review (confidence 0.60-0.85) | High |
| **Approve/Reject Controls** | Admin can override AI decisions | High |
| **Appeal Management** | Handle user appeals for blocked content | High |
| **View Original Image** | Preview moderated content with blur/reveal | High |
| **Bulk Actions** | Approve/reject multiple items at once | Medium |
| **Content Stats Dashboard** | Violations by type, trend over time | Medium |
| **AI Accuracy Metrics** | False positive/negative tracking | Low |

### 3. Fraud Detection Enhancements

| Need | Description | Priority |
|------|-------------|----------|
| **Trigger Manual Scan** | Run fraud detection on-demand | High (Done) |
| **User Risk Details** | Expand to show all signals and AI reasoning | High |
| **Take Action Buttons** | Suspend/ban directly from risk list | High |
| **Clear Risk Flag** | Admin can clear false positives | High |
| **Add Admin Notes** | Document review decisions | High |
| **Risk Score History** | Track changes over time | Medium |
| **Export High-Risk Users** | Download list for offline review | Low |

### 4. Algorithm Policy Management

| Need | Description | Priority |
|------|-------------|----------|
| **View All Policies** | List algorithm_policies with weights | High |
| **Compare Policies** | Side-by-side weight comparison | Medium |
| **Trigger AI Optimization** | Run ai-policy-optimizer | High |
| **Activate/Deactivate Policy** | Toggle active status | High |
| **View Policy Metrics** | See performance during each policy period | High |
| **Rollout Management** | Create/manage A/B tests | Medium |
| **Revert to Previous** | One-click rollback | High |

### 5. Subscription & Revenue Management

| Need | Description | Priority |
|------|-------------|----------|
| **Pro Subscribers List** | All paying users with subscription details | High |
| **Revenue Dashboard** | MRR, churn, conversion rates | High |
| **Grant Pro Status** | Manually upgrade user for testing/support | Medium |
| **Revoke Pro Status** | Remove subscription (refund cases) | Medium |
| **Subscription History** | View user's subscription timeline | Medium |
| **Feature Upgrade Sales** | One-time purchase tracking | Low |

### 6. System Health & Monitoring

| Need | Description | Priority |
|------|-------------|----------|
| **Edge Function Status** | Last invocation, error rates | High |
| **Database Health** | Row counts, connection stats | Medium |
| **AI API Status** | Lovable AI availability | Medium |
| **Storage Usage** | item-photos bucket size | Low |
| **Rate Limit Monitor** | Track users hitting limits | Medium |

### 7. Communication & Notifications

| Need | Description | Priority |
|------|-------------|----------|
| **Broadcast Message** | Send system-wide notification | Medium |
| **User Message Log** | View all messages (with privacy controls) | Medium |
| **Email Templates** | Manage transactional emails | Low |
| **Notification Center** | Admin alerts for critical events | Medium |

### 8. Data Export & Reporting

| Need | Description | Priority |
|------|-------------|----------|
| **Export Users** | CSV download with filters | Medium |
| **Export Items** | CSV download with filters | Medium |
| **Export Matches** | CSV download with filters | Medium |
| **Scheduled Reports** | Daily/weekly email summaries | Low |
| **Custom Report Builder** | Ad-hoc queries | Low |

---

## Proposed Admin Panel Updates

### New Sections to Add

#### 1. **Subscriptions Section** (New)
- Pro subscribers table with expiration dates
- Revenue metrics (MRR, churn rate, conversion)
- Grant/revoke Pro controls
- Subscription history timeline

#### 2. **Algorithm Section** (New)
- Policy version list with weights visualization
- Trigger AI optimization button
- Activate/deactivate policy toggle
- A/B test rollout management
- Performance metrics per policy

#### 3. **System Section** (New)
- Edge function health monitors
- Database statistics
- Storage usage
- API rate limit status

### Existing Section Enhancements

#### Users Section Enhancements
- Add risk score badge inline
- Add suspend/ban dropdown actions
- Add "View Details" modal with full user profile
- Add moderation history tab
- Add activity timeline

#### Items Section Enhancements
- Add moderation status column (safe/blocked/pending)
- Add "flagged" filter
- Add flag/unflag actions
- Add moderation log view per item

#### Moderation Section Enhancements
- Add "Pending Review" tab for human review queue
- Add image preview with blur/reveal
- Add approve/reject/appeal actions
- Add user risk score expansion panel
- Add take action buttons (suspend/ban from risk view)
- Add admin notes field with save

#### Analytics Section Enhancements
- Replace simulated data with real calculations
- Add algorithm performance metrics
- Add moderation effectiveness metrics
- Add revenue analytics

---

## Implementation Roadmap

### Phase 1: High Priority (Immediate)

1. **Enhanced Moderation Section**
   - Pending review queue with approve/reject
   - Image preview with blur control
   - User risk detail expansion with actions
   - Admin notes for risk scores

2. **User Management Actions**
   - Suspend user with reason/duration
   - Ban user with confirmation
   - View user detail modal

3. **Algorithm Policy Section**
   - List all policies
   - Trigger AI optimization
   - Activate/deactivate toggle

### Phase 2: Medium Priority

4. **Subscriptions Section**
   - Pro subscribers list
   - Basic revenue metrics
   - Grant/revoke Pro

5. **Analytics Improvements**
   - Real data for all metrics
   - Algorithm performance tracking

6. **System Health Section**
   - Edge function status
   - Basic monitoring

### Phase 3: Lower Priority

7. **Data Export**
   - CSV exports for users/items/matches

8. **Communication Tools**
   - Broadcast messaging
   - Message logs

9. **Advanced Features**
   - Impersonation
   - Custom report builder
   - Scheduled reports

---

## Technical Implementation Details

### New Files to Create

| File | Purpose |
|------|---------|
| `src/components/admin/sections/SubscriptionsSection.tsx` | Pro subscribers & revenue |
| `src/components/admin/sections/AlgorithmSection.tsx` | Policy management & AI optimization |
| `src/components/admin/sections/SystemSection.tsx` | Health monitoring |
| `src/components/admin/UserDetailModal.tsx` | Full user detail view |
| `src/components/admin/ImagePreviewModal.tsx` | Moderation image preview |
| `src/components/admin/RiskDetailPanel.tsx` | Expandable fraud details |
| `src/components/admin/PolicyCard.tsx` | Algorithm policy display |
| `src/components/admin/WeightsChart.tsx` | Visual weights comparison |

### Files to Modify

| File | Changes |
|------|---------|
| `src/pages/Admin.tsx` | Add new section routes |
| `src/components/admin/AdminSidebar.tsx` | Add new nav items |
| `src/components/admin/sections/UsersSection.tsx` | Add suspend/ban, detail view, risk badge |
| `src/components/admin/sections/ItemsSection.tsx` | Add moderation status, flag actions |
| `src/components/admin/sections/ModerationSection.tsx` | Add review queue, image preview, actions |
| `src/components/admin/sections/AnalyticsSection.tsx` | Real data, additional metrics |

### Database Changes Required

| Table | Changes Needed |
|-------|----------------|
| `profiles` | Add `is_suspended`, `suspended_until`, `suspension_reason`, `is_banned`, `banned_at`, `ban_reason`, `is_verified` columns |
| `content_moderation_logs` | Add `appeal_status`, `appeal_notes`, `admin_decision` columns |
| `user_risk_scores` | Already has `admin_reviewed`, `admin_notes` - sufficient |
| `algorithm_policies` | Already sufficient |

### RLS Policy Updates

- Add admin write policies for new profile fields
- Add admin update policies for content_moderation_logs appeal fields

---

## Admin Dashboard Data Flow

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                        ADMIN CONTROL CENTER                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  OVERVIEW                    USERS                       ITEMS              │
│  ┌──────────────────┐       ┌──────────────────┐       ┌──────────────────┐│
│  │ Platform Stats   │       │ User List        │       │ Item List        ││
│  │ Activity Feed    │       │ Risk Badges      │       │ Moderation Status││
│  │ Quick Actions    │       │ Suspend/Ban      │       │ Flag/Unflag      ││
│  │ Health Status    │       │ Detail Modal     │       │ Archive/Delete   ││
│  └──────────────────┘       └──────────────────┘       └──────────────────┘│
│                                                                             │
│  MODERATION                  FRAUD                       ALGORITHM          │
│  ┌──────────────────┐       ┌──────────────────┐       ┌──────────────────┐│
│  │ Content Logs     │       │ Risk Scores      │       │ Policy List      ││
│  │ Pending Review   │       │ Signal Details   │       │ Weight Viz       ││
│  │ Image Preview    │       │ Take Action      │       │ Run Optimizer    ││
│  │ Approve/Reject   │       │ Admin Notes      │       │ Activate/Revert  ││
│  └──────────────────┘       └──────────────────┘       └──────────────────┘│
│                                                                             │
│  SUBSCRIPTIONS               ANALYTICS                   SYSTEM             │
│  ┌──────────────────┐       ┌──────────────────┐       ┌──────────────────┐│
│  │ Pro Subscribers  │       │ Real Metrics     │       │ Edge Functions   ││
│  │ Revenue Stats    │       │ Algorithm Perf   │       │ Database Health  ││
│  │ Grant/Revoke     │       │ Moderation Stats │       │ Storage Usage    ││
│  │ History          │       │ Conversion Funnel│       │ API Status       ││
│  └──────────────────┘       └──────────────────┘       └──────────────────┘│
│                                                                             │
│  REPORTS                     ROLES                       SETTINGS           │
│  ┌──────────────────┐       ┌──────────────────┐       ┌──────────────────┐│
│  │ User Reports     │       │ Admin List       │       │ Platform Config  ││
│  │ Review Queue     │       │ Add/Remove       │       │ Feature Flags    ││
│  │ Resolution       │       │ Permissions      │       │ Limits Config    ││
│  └──────────────────┘       └──────────────────┘       └──────────────────┘│
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Key Admin Workflows

### Workflow 1: Handle Flagged Content
1. Admin sees pending count badge on Moderation tab
2. Opens Moderation → Pending Review tab
3. Clicks on flagged image → Preview modal opens (blurred)
4. Reviews image, clicks Reveal to see actual content
5. Chooses: Approve (allow), Reject (keep blocked), or Escalate
6. Optionally adds notes
7. System updates content_moderation_logs and notifies user

### Workflow 2: Handle High-Risk User
1. Admin runs fraud detection (button in Moderation section)
2. Views high-risk users sorted by score
3. Clicks on user row → Expands to show all signals and AI reasoning
4. Reviews user's profile, items, and activity
5. Chooses action: Monitor, Suspend (with duration), or Ban
6. Adds admin notes explaining decision
7. System updates user_risk_scores.admin_reviewed = true

### Workflow 3: Optimize Algorithm
1. Admin opens Algorithm section
2. Views current active policy weights
3. Clicks "Run AI Optimization" button
4. System calls ai-policy-optimizer edge function
5. New policy version appears (inactive)
6. Admin reviews proposed changes and rationale
7. Clicks "Activate" to set new policy active
8. If issues, clicks "Revert" to go back to previous

### Workflow 4: Manage Subscriptions
1. Admin opens Subscriptions section
2. Views list of Pro subscribers with expiration dates
3. Searches for specific user to grant Pro
4. Clicks "Grant Pro" → Sets is_pro=true, expires_at
5. Or clicks "Revoke Pro" to remove subscription

---

## Summary

This plan provides a comprehensive roadmap to transform the admin panel from basic visibility into a full control center. The implementation prioritizes:

1. **Safety & Trust** - Content moderation queue, fraud detection actions, user suspension/banning
2. **Algorithm Control** - Policy management, AI optimization triggers, A/B testing
3. **Business Operations** - Subscription management, revenue tracking
4. **System Health** - Monitoring and diagnostics

The admin will have complete visibility into all platform operations and the tools needed to maintain a safe, fair, and well-functioning exchange ecosystem.

