
## Plan: Fix Accept Match action in Discover's Missed Match popup

### Problem
On the Discover page, swiping left can trigger the `MissedMatchModal`. For Pro users it shows an **Accept Match** button, but `Index.tsx` renders the modal without passing `onAccept` or `isAccepting` props. Clicking Accept does nothing visible; meanwhile the popup keeps re-firing (the same missed match is still in the list), making the page feel frozen / bugged.

### Fix

**`src/pages/Index.tsx`**
1. Import `useRecoverMissedMatch` from `@/hooks/useMissedMatches`.
2. Instantiate the mutation: `const recoverMutation = useRecoverMissedMatch();`
3. Add a handler `handleAcceptMissedMatch`:
   - Calls `recoverMutation.mutateAsync({ myItemId, theirItemId })` from `currentMissedMatch`.
   - On success: close the modal, clear `currentMissedMatch`, show a success toast, and trigger the existing `MatchModal` by calling `actions.setMatch(currentMissedMatch.their_item)` so the user sees the celebratory "It's a Match" UI.
   - On error: toast error, keep modal open.
4. Pass `onAccept={handleAcceptMissedMatch}` and `isAccepting={recoverMutation.isPending}` to `<MissedMatchModal />`.
5. Guard the missed-match popup trigger so it only opens once per session for the same pair (track shown ids in a `useRef<Set<string>>`) — prevents re-fire after accept/close.

### Files Modified
- `src/pages/Index.tsx`

### Result
Pro users can accept the missed match from Discover; the page transitions smoothly into the standard Match celebration modal, caches refresh, and the popup no longer re-triggers for the same item.
