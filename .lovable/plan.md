

## Plan: Translate "Swapping from" and Report Dialog

### Problem
1. **"Swapping from:"** — The `discover` section with keys like `swappingFrom`, `selectItem`, etc. exists in `fr/translation.json` but is completely **missing from `en/translation.json`**. Since `en` is the fallback language, `t()` returns the raw key instead of the French translation.
2. **Report User dialog** — `ReportButton.tsx` has all strings hardcoded: title, description, reason labels, reason descriptions, buttons, placeholder, toast messages.

### Changes

**1. Add `discover` section to `en/translation.json`**
Add the full discover block with English values matching the keys already used in `fr/translation.json`:
- `swappingFrom`, `selectItem`, `selectItemDescription`, `lookingForCategories`, `forYou`, `nearby`, `noMoreMatches`, `noMoreDescription`, `switchItem`, `addFirstItem`, `addFirstItemDescription`, `addItem`, `like`, `nope`, `ownerActive`, `ownerRecentlyActive`, `boost`, `title`

**2. Add `report` section to both `en/translation.json` and `fr/translation.json`**
New keys (~20):
- `report.title` (Report Item / Signaler un article, Report User / Signaler un utilisateur, Report Message / Signaler un message)
- `report.description` (Help us understand... / Aidez-nous à comprendre...)
- `report.whatsTheIssue` (What's the issue? / Quel est le problème ?)
- Reason labels and descriptions for: `prohibitedItem`, `fakeListing`, `spam`, `harassment`, `inappropriateContent`, `scam`, `other`
- `report.additionalDetails`, `report.placeholder`, `report.submitReport`, `report.submitting`, `report.cancel`
- `report.submitted`, `report.submittedDescription`, `report.failedSubmit`, `report.failedSubmitDescription`
- Menu item text: `report.report`

**3. Wire `useTranslation` into `ReportButton.tsx`**
- Import `useTranslation`, add `const { t } = useTranslation()`
- Replace the hardcoded `REASON_LABELS` object with `t()` calls for each reason's label and description
- Replace dialog title, description, labels, buttons, placeholder, and toast messages with `t()` calls

### Files Modified
- `src/locales/en/translation.json` — add `discover` + `report` sections
- `src/locales/fr/translation.json` — add `report` section
- `src/components/report/ReportButton.tsx` — wire up `useTranslation`

