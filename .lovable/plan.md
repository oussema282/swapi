
# AI Content Moderation & Fraud Detection System

## Overview

This plan implements two AI-powered safety systems for Valexo:
1. **Content Moderation AI** - Analyzes uploaded images to detect prohibited content (nudity, alcohol, weapons, drugs, violence)
2. **Fraud & Risk Detection AI** - Analyzes user behavior patterns to detect scam attempts, fake listings, and suspicious activity

Both systems use Lovable AI (Gemini) for analysis and integrate with the existing reporting and flagging infrastructure.

---

## Architecture

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                         CONTENT SAFETY SYSTEM                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  IMAGE UPLOAD FLOW (Real-time blocking)                                     │
│  ┌──────────────┐    ┌──────────────────┐    ┌──────────────────┐          │
│  │              │    │                  │    │                  │          │
│  │  User Upload │───>│  content-        │───>│  Lovable AI      │          │
│  │  (NewItem,   │    │  moderator       │    │  (Gemini Vision) │          │
│  │  EditProfile)│    │  Edge Function   │    │                  │          │
│  │              │    │                  │    │                  │          │
│  └──────────────┘    └────────┬─────────┘    └──────────────────┘          │
│                               │                                             │
│                               ▼                                             │
│                    ┌──────────────────────┐                                │
│                    │ Result: SAFE / BLOCK │                                │
│                    │ + Violation Details  │                                │
│                    └────────┬─────────────┘                                │
│                             │                                               │
│           ┌─────────────────┴─────────────────┐                            │
│           ▼                                   ▼                            │
│    ┌──────────────┐                    ┌──────────────┐                    │
│    │ SAFE: Allow  │                    │ BLOCK: Reject│                    │
│    │ upload + log │                    │ + log + flag │                    │
│    └──────────────┘                    └──────────────┘                    │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  FRAUD DETECTION FLOW (Scheduled batch + on-demand)                        │
│  ┌──────────────┐    ┌──────────────────┐    ┌──────────────────┐          │
│  │              │    │                  │    │                  │          │
│  │  Scheduled   │───>│  fraud-detector  │───>│  Lovable AI      │          │
│  │  Cron or     │    │  Edge Function   │    │  (Gemini)        │          │
│  │  Admin Call  │    │                  │    │                  │          │
│  │              │    │                  │    │                  │          │
│  └──────────────┘    └────────┬─────────┘    └──────────────────┘          │
│                               │                                             │
│                               ▼                                             │
│                    ┌──────────────────────┐                                │
│                    │ Risk Scores + Flags  │                                │
│                    │ for users/items      │                                │
│                    └────────┬─────────────┘                                │
│                             │                                               │
│                             ▼                                               │
│                    ┌──────────────────────┐                                │
│                    │ user_risk_scores     │                                │
│                    │ content_moderation   │                                │
│                    │ _logs                │                                │
│                    └──────────────────────┘                                │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Part 1: Content Moderation AI

### Prohibited Content Categories

| Category | Examples | Action |
|----------|----------|--------|
| **Nudity/Sexual** | Explicit images, pornography | Block + flag user |
| **Weapons** | Guns, knives, explosives | Block + flag item |
| **Alcohol/Drugs** | Alcohol bottles, drug paraphernalia | Block |
| **Violence** | Gore, graphic violence | Block + flag user |
| **Hate Symbols** | Nazi imagery, hate group symbols | Block + flag user |

### Database Schema

**Table: `content_moderation_logs`**

| Column | Type | Description |
|--------|------|-------------|
| `id` | uuid | Primary key |
| `user_id` | uuid | User who uploaded |
| `content_type` | text | 'item_photo' or 'avatar' |
| `content_url` | text | Storage path or URL |
| `analysis_result` | jsonb | Full AI response |
| `is_safe` | boolean | Whether content passed |
| `violation_type` | text | Null if safe, category if blocked |
| `confidence_score` | decimal | AI confidence (0-1) |
| `action_taken` | text | 'allowed', 'blocked', 'flagged' |
| `reviewed_by` | uuid | Admin who reviewed (if appealed) |
| `created_at` | timestamptz | Timestamp |

### Edge Function: `content-moderator`

**Purpose**: Real-time image moderation before upload completes

**Request Flow**:
1. Client uploads image to temporary location
2. Client calls `content-moderator` with image URL
3. Edge function fetches image and sends to Gemini Vision
4. AI analyzes for prohibited content categories
5. Returns verdict: `safe`, `blocked`, or `review_required`
6. Client either completes upload or shows error

**AI Prompt Design**:
```typescript
const systemPrompt = `You are a content moderation AI for Valexo, an item exchange platform.

Analyze images for prohibited content. Users should only upload photos of items they want to swap.

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

OUTPUT FORMAT (use tool call):
- is_safe: boolean
- violation_type: string or null
- confidence: number 0-1
- reason: brief explanation`;
```

**Tool Calling Schema**:
```typescript
const tools = [{
  type: "function",
  function: {
    name: "analyze_content",
    description: "Return content moderation verdict",
    parameters: {
      type: "object",
      properties: {
        is_safe: { type: "boolean" },
        violation_type: { 
          type: "string", 
          enum: ["nudity", "weapons", "alcohol", "drugs", "violence", "hate_symbols", null]
        },
        confidence: { type: "number" },
        reason: { type: "string" }
      },
      required: ["is_safe", "confidence", "reason"]
    }
  }
}];
```

### Frontend Integration Points

**1. NewItem.tsx - Photo Upload**
```typescript
const handleFileUpload = async (e) => {
  // Upload to temporary path first
  const tempPath = await uploadToTemp(file);
  
  // Call content moderator
  const { is_safe, violation_type } = await supabase.functions.invoke('content-moderator', {
    body: { image_url: tempPath }
  });
  
  if (!is_safe) {
    await deleteFromTemp(tempPath);
    toast.error(`This image cannot be uploaded: ${violation_type}`);
    return;
  }
  
  // Move to permanent location
  await moveToPermament(tempPath);
};
```

**2. EditItem.tsx - Same pattern**

**3. EditProfile.tsx - Avatar Upload**
```typescript
const handleAvatarUpload = async (e) => {
  // Same moderation flow for profile pictures
};
```

---

## Part 2: Fraud & Risk Detection AI

### Risk Signals

| Signal | Weight | Description |
|--------|--------|-------------|
| **Rapid listings** | High | Creating many items in short time |
| **Copy-paste descriptions** | Medium | Identical descriptions across items |
| **Stolen images** | High | Images found in reverse search |
| **Report history** | High | Multiple reports from different users |
| **Account age** | Low | New accounts with suspicious activity |
| **Message patterns** | Medium | Spammy or external link messages |
| **No location** | Low | Refusing to set location |
| **High-value claims** | Medium | Claiming high value for items |

### Database Schema

**Table: `user_risk_scores`**

| Column | Type | Description |
|--------|------|-------------|
| `id` | uuid | Primary key |
| `user_id` | uuid | User being scored |
| `risk_score` | decimal | Overall risk 0-100 |
| `risk_level` | text | 'low', 'medium', 'high', 'critical' |
| `signals` | jsonb | Detected risk signals |
| `last_analyzed_at` | timestamptz | When last analyzed |
| `auto_flagged` | boolean | Whether auto-flagged |
| `admin_reviewed` | boolean | Whether admin reviewed |
| `admin_notes` | text | Admin notes |
| `created_at` | timestamptz | First analysis |
| `updated_at` | timestamptz | Last update |

**Table: `fraud_detection_runs`**

| Column | Type | Description |
|--------|------|-------------|
| `id` | uuid | Primary key |
| `run_type` | text | 'scheduled', 'manual', 'on_report' |
| `users_analyzed` | integer | Count of users analyzed |
| `high_risk_found` | integer | Count of high-risk users |
| `actions_taken` | jsonb | Summary of actions |
| `triggered_by` | uuid | Admin who triggered (if manual) |
| `created_at` | timestamptz | When run started |
| `completed_at` | timestamptz | When run finished |

### Edge Function: `fraud-detector`

**Purpose**: Batch analysis of user behavior patterns for fraud detection

**Triggers**:
1. Scheduled daily run (analyze all active users)
2. Manual admin trigger
3. On-report trigger (when user receives multiple reports)

**Analysis Process**:
1. Collect user activity data (aggregated, no PII)
2. Calculate individual risk signals
3. Send signals to Gemini for pattern analysis
4. AI returns risk score and recommendations
5. Auto-flag high-risk users for admin review

**AI Prompt Design**:
```typescript
const systemPrompt = `You are a fraud detection AI for Valexo.

Analyze user behavior patterns to detect scam attempts and fake listings.
You receive AGGREGATED behavioral signals, not personal data.

RISK SIGNALS TO EVALUATE:
1. Listing velocity - How fast items are created
2. Description patterns - Are descriptions suspiciously similar?
3. Value claims - Are claimed values unrealistic?
4. Report frequency - How often reported by others
5. Message patterns - Spammy or pushy behavior
6. Account characteristics - Age, completeness

OUTPUT:
- risk_score: 0-100 (0=safe, 100=definite fraud)
- risk_level: low/medium/high/critical
- primary_concerns: top 3 signals that raised flags
- recommended_action: none/monitor/review/suspend
- reasoning: brief explanation`;
```

**Tool Calling Schema**:
```typescript
const tools = [{
  type: "function",
  function: {
    name: "assess_risk",
    description: "Return fraud risk assessment",
    parameters: {
      type: "object",
      properties: {
        risk_score: { type: "number" },
        risk_level: { type: "string", enum: ["low", "medium", "high", "critical"] },
        primary_concerns: { 
          type: "array", 
          items: { type: "string" },
          maxItems: 3 
        },
        recommended_action: { 
          type: "string", 
          enum: ["none", "monitor", "review", "suspend"] 
        },
        reasoning: { type: "string" }
      },
      required: ["risk_score", "risk_level", "primary_concerns", "recommended_action", "reasoning"]
    }
  }
}];
```

---

## Safety Guardrails

### Content Moderation

| Layer | Protection |
|-------|------------|
| **Confidence threshold** | Only block if confidence > 0.85 |
| **Human review queue** | Medium confidence (0.60-0.85) goes to admin |
| **Appeal system** | Users can dispute blocked content |
| **Audit log** | All decisions logged for review |
| **Fallback** | On AI error, allow upload but flag for review |

### Fraud Detection

| Layer | Protection |
|-------|------------|
| **No auto-ban** | AI only flags, admin must take action |
| **Aggregated data only** | AI never sees messages or personal info |
| **Rate limiting** | Max one full scan per 24 hours |
| **Override capability** | Admin can clear flags |
| **Transparency** | Users notified if flagged with reason |

---

## Files to Create

| File | Purpose |
|------|---------|
| `supabase/functions/content-moderator/index.ts` | Real-time image moderation |
| `supabase/functions/fraud-detector/index.ts` | Batch fraud detection |
| `src/hooks/useContentModeration.tsx` | Frontend hook for moderation |
| `src/components/admin/sections/ModerationSection.tsx` | Admin moderation queue |

## Files to Modify

| File | Changes |
|------|---------|
| `src/pages/NewItem.tsx` | Add moderation check before upload |
| `src/pages/EditItem.tsx` | Add moderation check on photo changes |
| `src/pages/EditProfile.tsx` | Add moderation check for avatar |
| `src/pages/Admin.tsx` | Add moderation section to admin |
| `src/components/admin/AdminSidebar.tsx` | Add moderation nav item |
| `supabase/config.toml` | Add new function configs |

## Database Migration

Creates two new tables and necessary RLS policies:
- `content_moderation_logs` - Audit trail for all moderation decisions
- `user_risk_scores` - Current risk assessment per user
- `fraud_detection_runs` - History of detection runs

---

## Implementation Steps

1. **Create database migration** with moderation and fraud tables
2. **Build `content-moderator` edge function** with Gemini Vision integration
3. **Update frontend upload flows** to call moderator before completing
4. **Build `fraud-detector` edge function** with behavior analysis
5. **Create admin moderation UI** for reviewing flagged content
6. **Add fraud dashboard** to admin section
7. **Test with sample prohibited images** (using test accounts)

---

## User Experience

### When Content is Blocked

```
┌─────────────────────────────────────────┐
│  ⚠️ Image Cannot Be Uploaded            │
│                                         │
│  This image was blocked because it      │
│  appears to contain prohibited content  │
│           .                             │
│                                         │
│  Please upload photos of items you      │
│  want to swap. If you believe this is   │
│  an error, you can appeal this decision.│
│                                         │
│  [Try Another Photo]  [Appeal Decision] │
└─────────────────────────────────────────┘
```

### When Account is Flagged

```
┌─────────────────────────────────────────┐
│  ⚠️ Account Under Review                │
│                                         │
│  We're reviewing your account for       │
│  unusual activity. You can continue     │
│  using Valexo, but some features may    │
│  be limited.                            │
│                                         │
│  If you believe this is an error,       │
│  please contact support.                │
│                                         │
│  [Contact Support]                      │
└─────────────────────────────────────────┘
```

---

## Summary

| Component | Description |
|-----------|-------------|
| `content-moderator` | Real-time image analysis for prohibited content |
| `fraud-detector` | Batch analysis of user behavior patterns |
| `content_moderation_logs` | Audit trail for moderation decisions |
| `user_risk_scores` | Risk assessment per user |
| Admin UI | Queue for reviewing flagged content and users |
| Appeal system | Users can dispute decisions |

This system provides:
- **Real-time blocking** of prohibited images before they're stored
- **Batch fraud detection** to identify suspicious behavior patterns
- **Full audit trail** for all decisions
- **Human oversight** for edge cases and appeals
- **Safe fallbacks** when AI is uncertain
