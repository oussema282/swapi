

## Plan: Fix swap count visibility for other users

### Problem
The swap count query in `UserProfile.tsx` first fetches the user's items, then counts matches using those item IDs. However, the RLS policy on the `items` table only shows archived items to the **owner** (`is_archived = false OR auth.uid() = user_id`). Since completed swaps archive items, when another user views the profile, archived items are hidden by RLS, so most item IDs are missing from the query, resulting in an incorrect (lower) swap count.

### Solution
Create a database function `get_user_swap_count(p_user_id uuid)` with `SECURITY DEFINER` that bypasses RLS to count completed matches for a given user's items. Then call this function from both `UserProfile.tsx` and `Profile.tsx` instead of the multi-step client-side query.

### Changes

**1. New database migration** — Create `get_user_swap_count` function:
```sql
CREATE OR REPLACE FUNCTION public.get_user_swap_count(p_user_id uuid)
RETURNS integer
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT COALESCE(
    (SELECT COUNT(DISTINCT m.id)::integer
     FROM matches m
     JOIN items ia ON ia.id = m.item_a_id
     JOIN items ib ON ib.id = m.item_b_id
     WHERE m.is_completed = true
       AND (ia.user_id = p_user_id OR ib.user_id = p_user_id)),
    0
  );
$$;
```

**2. Update `UserProfile.tsx`** — Replace the multi-step query with a single RPC call:
```typescript
const { data } = await supabase.rpc('get_user_swap_count', { p_user_id: userId });
return data ?? 0;
```

**3. Update `Profile.tsx`** — Same RPC call using `user.id`.

### Files Modified
- New migration (SQL function)
- `src/pages/UserProfile.tsx`
- `src/pages/Profile.tsx`

