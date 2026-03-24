

## Plan: Complete Arabic Translation to Match French

### Problem
The Arabic translation file (543 lines) is significantly incomplete compared to French (868 lines). Many sections are missing or have outdated/minimal versions. There are also duplicate `categories` and `conditions` blocks (old ones at lines 391-405, new ones at 429-542).

### Changes

**Single file: `src/locales/ar/translation.json`** — Rewrite the full file to include all sections matching the French version:

**Missing sections to add (with Arabic translations):**
- `map` — full map section (location permissions, filters, nearby items, etc.)
- `matches` — extended keys: `instantMatches`, `conversations`, `seeAll`, `keepSwiping`, `wantsToSwapFor`, `yourItem`, `from`, `accept`, `decline`, `failedToLoadMatches`, `tryAgain`, `matchCreated`, `dealAccepted`, `dealDeclined`, `failedToRecover`, `failedToRespond`, `matchWith`, `startConversation`, `done`, `confirm`, `waiting`, `proOnly`, `upgradeToSee`, `hiddenUser`, `hiddenItemTitle`, `theyWantedSwap`, `noMatchesYet`, `startSwipingDescription`, `discoverItems`, `valueBalanced`, `greatTradePotential`, `fastResponder`, `with`, `subtitle`
- `chat` — extended keys: `offline`, `exchangeCompleted`, `exchangeCompletedDescription`, `exchangeConfirmed`, `exchangeConfirmedDescription`, `alreadyConfirmed`, `failedConfirmExchange`, `completed`, `waiting`, `justNow`, `minutesAgo`, `hoursAgo`
- `swap` — full section (completeThisSwap, confirmDescription, rateExchange, etc.)
- `dealInvite` — extended keys: `inviteDeal`, `selectItemToOffer`, `noItemsToOffer`, `resendOneLeft`, `blocked`, `matched`, `resendInfo`, `resendInfoBlocked`, `sent`, `pendingExists`, `maxAttempts`, `alreadySent`, `failedSend`, `noPending`, `wantsToSwapFor`, `yourItem`, `dealAccepted`, `dealDeclined`, `failedRespond`
- `unmatch` — full section
- `newItem` — extended keys: `subcategoryOf`, `locationTitle`, `locationDescription`, `imagesOnly`, `imageTooLarge`, `uploadFailed`, `imageBlocked`, `checking`, `uploading`, `cancel`, `back`, `itemLocation`, `locationHelp`, `creationFailed`, `policyViolation`, `maximumOptional`
- `search` — extended keys: `clearFilters`, `noItemsInArea`, `results`, `topNearYou`, `loading`, `users`, `itemsLabel`, `user`, `category`, `popularSearch`, `item`, `profile`, `noDescription`, `value`, `enableLocation`, `gettingLocation`, `clearAllFilters`
- `itemDetails` — full section
- `report` — full section with all reason keys
- `match` — full section (itsAMatch, bothWantToSwap, keepSwiping, chatNow)
- `editItem` — keys: `subcategory`, `changesRecorded`, `updateFailed`
- `editProfile` — full section (if missing)
- `userProfile` — extended keys: `items`, `swaps`, `noItemsListed`

**Cleanup:**
- Remove duplicate old `categories` block (lines 391-398) and old `conditions` block (lines 400-405) — keep only the full versions at lines 429+
- Fix `discover` section: add missing `swappingFrom` and `lookingForCategories` keys

### Files Modified
- `src/locales/ar/translation.json`

