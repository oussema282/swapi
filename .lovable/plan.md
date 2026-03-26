

## Plan: Gift Request System — Always Visible, with Attempt Tracking and Auto-Expiry

### What changes

The "Request Gift" button must always appear in the ItemDetailsSheet for gift items, and the gift request system needs the same rules as deal invites: 2 rejections = blocked, auto-expire after 48 hours.

### Database Migration

Add `attempt` and `expires_at` columns to `gift_requests`, plus a validation trigger (mirroring `deal_invites` logic):

```sql
ALTER TABLE public.gift_requests
  ADD COLUMN attempt integer NOT NULL DEFAULT 1,
  ADD COLUMN expires_at timestamptz DEFAULT (now() + interval '2 days');

-- Validation trigger: block after 2 rejections, set attempt number, set expiry
CREATE OR REPLACE FUNCTION public.validate_gift_request_attempt()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path TO 'public' AS $$
DECLARE
  rejection_count integer;
  pending_exists boolean;
BEGIN
  SELECT EXISTS(
    SELECT 1 FROM public.gift_requests
    WHERE gift_item_id = NEW.gift_item_id
      AND requester_id = NEW.requester_id
      AND status = 'pending'
      AND expires_at > now()
      AND id != COALESCE(NEW.id, '00000000-0000-0000-0000-000000000000'::uuid)
  ) INTO pending_exists;
  IF pending_exists THEN
    RAISE EXCEPTION 'A pending gift request already exists';
  END IF;
  SELECT COUNT(*) INTO rejection_count
  FROM public.gift_requests
  WHERE gift_item_id = NEW.gift_item_id
    AND requester_id = NEW.requester_id
    AND status = 'rejected';
  IF rejection_count >= 2 THEN
    RAISE EXCEPTION 'Maximum attempts reached (2 rejections)';
  END IF;
  NEW.attempt := rejection_count + 1;
  NEW.expires_at := now() + interval '2 days';
  RETURN NEW;
END;
$$;

CREATE TRIGGER validate_gift_request_before_insert
  BEFORE INSERT ON public.gift_requests
  FOR EACH ROW EXECUTE FUNCTION public.validate_gift_request_attempt();
```

### Code Changes

**1. `src/components/discover/ItemDetailsSheet.tsx`**
- Remove the `onRequestGift` prop dependency for showing the button
- Import `useGiftRequests` and `useAuth` directly
- Always show the "Request Gift" button for gift items (when the viewer is not the owner)
- Before sending, check if blocked (2 rejections) or already pending — show appropriate toast
- Add a warning line: "2 declines = blocked"

**2. `src/hooks/useGiftRequests.tsx`**
- Add a `checkRequestStatus` query/function that returns whether the current user can request a specific gift item (pending, blocked, or available)
- Update `sendRequest` to handle the new error messages from the trigger

**3. All callers (`Index.tsx`, `MapView.tsx`, `ProfileItemsGrid.tsx`, `Matches.tsx`)**
- No changes needed — the sheet now handles gift requests internally, no `onRequestGift` prop required

### Files Modified
- Database migration (new columns + trigger on `gift_requests`)
- `src/components/discover/ItemDetailsSheet.tsx`
- `src/hooks/useGiftRequests.tsx`

