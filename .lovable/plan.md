

## Plan: Wire Up Remaining Hardcoded English Strings to i18n

### Problem
Translation keys exist in `en/translation.json` and `fr/translation.json` but many components still have hardcoded English strings instead of `t()` calls.

### Files to Update

**1. Matches page components (highest impact):**

- **`MatchesHeader.tsx`** — "Matches", "Your active and completed exchanges", "Active", "Completed", "Invites", "Missed" all hardcoded
- **`MatchCard.tsx`** — "Start a conversation...", "Done", "Confirm", "Waiting", "New" hardcoded
- **`ConversationCard.tsx`** — "Start a conversation...", "Value balanced", "Great trade potential!", "Fast responder" hardcoded
- **`CompletedMatchCard.tsx`** — "Done" hardcoded
- **`InstantMatchCard.tsx`** — "Match with" hardcoded
- **`MissedMatchCard.tsx`** — "Pro Only", "Upgrade to see who wants your item!", "Hidden User", "Hidden item title", "They wanted to swap for your" hardcoded
- **`EmptyMatchesState.tsx`** — "No matches yet", "Start swiping...", "Discover Items" hardcoded
- **`UnmatchButton.tsx`** — "Unmatch", "Unmatch with {name}?", dialog description, "Cancel" hardcoded
- **`CompleteSwapModal.tsx`** — "Complete This Swap?", "Rate This Exchange", "Cancel", "Yes, Complete", "Feedback (optional)", "Submit & Complete", "Swap Complete!", "Thanks for using Valexo", "Done", "Completing..." hardcoded

**2. Chat components:**

- **`ChatHeader.tsx`** — "Online", "Last seen", "Offline", "Completed", "Waiting...", "Confirm", toast messages ("Exchange completed!", "Exchange confirmed!", etc.) all hardcoded

**3. Deal invite components:**

- **`DealInviteButton.tsx`** — "Invite Deal", "Send Deal Invite", "Select one of your items to offer for", "You don't have any items...", "Pending", "Resend (1 left)", "Blocked", "Matched!", toast messages hardcoded
- **`DealInvitesNotification.tsx`** — "Deal Invites", "No pending deal invites", "from", "wants to swap for", "Your item", "Accept", "Decline", toast messages hardcoded

**4. Search page (`Search.tsx`):**

- Hardcoded: "Search items, categories, users...", "Distance", "Enable location", "Getting...", "Value:", "Clear all filters", "Loading...", "Top 10 near you", "No results found", "Try adjusting...", "No items available...", "Clear filters", "Clear all", "Users", "Items", "Profile", "No description", "Category", "Popular search", "Item", "User", "View on map"

**5. `EditItem.tsx`:**

- Placeholders "Min", "Max" hardcoded (line 323-324). Most other strings already use `t()`.

### Approach

1. **Add ~40 new translation keys** to both `en/translation.json` and `fr/translation.json` for strings not yet covered (swap modal, chat header states, deal invite UI, match tags, missed match pro-only text, etc.)

2. **Wire `useTranslation` into 11 components** — add `import { useTranslation } from 'react-i18next'` and replace hardcoded strings with `t()` calls:
   - `MatchesHeader.tsx`, `MatchCard.tsx`, `ConversationCard.tsx`, `CompletedMatchCard.tsx`, `InstantMatchCard.tsx`, `MissedMatchCard.tsx`, `EmptyMatchesState.tsx`, `UnmatchButton.tsx`, `CompleteSwapModal.tsx`, `ChatHeader.tsx`, `DealInviteButton.tsx`, `DealInvitesNotification.tsx`

3. **Wire `t()` into `Search.tsx`** — replace all remaining hardcoded strings with existing `search.*` keys

4. **Fix `EditItem.tsx`** placeholders — use `t()` for "Min"/"Max"

### New Translation Keys Needed

```
matches.matchWith, matches.startConversation, matches.done, matches.confirm,
matches.waiting, matches.proOnly, matches.upgradeToSee, matches.hiddenUser,
matches.hiddenItemTitle, matches.theyWantedSwap, matches.noMatchesYet,
matches.startSwipingDescription, matches.discoverItems,
matches.valueBalanced, matches.greatTradePotential, matches.fastResponder

chat.online, chat.offline, chat.lastSeenPrefix,
chat.exchangeCompleted, chat.exchangeCompletedDescription,
chat.exchangeConfirmed, chat.exchangeConfirmedDescription,
chat.alreadyConfirmed, chat.failedConfirmExchange,
chat.completed, chat.waiting

swap.completeThisSwap, swap.confirmDescription, swap.cancel, swap.yesComplete,
swap.rateExchange, swap.rateDescription, swap.feedbackOptional,
swap.shareFeedback, swap.submitComplete, swap.completing,
swap.swapComplete, swap.thankYou, swap.done

dealInvite.inviteDeal, dealInvite.selectItemToOffer,
dealInvite.noItemsToOffer, dealInvite.resendOneLeft, dealInvite.blocked,
dealInvite.matched, dealInvite.resendInfo, dealInvite.sent,
dealInvite.pendingExists, dealInvite.maxAttempts, dealInvite.alreadySent,
dealInvite.failedSend, dealInvite.noPending, dealInvite.wantsToSwapFor,
dealInvite.yourItem, dealInvite.dealAccepted, dealInvite.dealDeclined,
dealInvite.failedRespond

unmatch.title, unmatch.description, unmatch.button, unmatch.success, unmatch.failed
```

### Technical Detail
- All new keys added to `en` and `fr` JSON files
- Each component gets `const { t } = useTranslation()` and all string literals replaced
- No structural/logic changes — only string replacements
- Estimated: ~13 TSX files + 2 JSON files updated

