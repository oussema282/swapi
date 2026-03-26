

## Plan: Improve Birthday Date Picker in Onboarding

### Problem
The current calendar dropdown is clunky on mobile — the month/year dropdowns overlap and it's hard to navigate to a birth year (user must scroll through decades). The screenshot shows a messy layout with overlapping dropdown selectors.

### Solution
Replace the calendar-based date picker with three simple inline `<select>` dropdowns side-by-side: **Day**, **Month**, **Year**. This is the standard pattern for birthday input on mobile — fast, easy, no calendar navigation needed.

### Changes — `src/pages/Onboarding.tsx` (lines 265-301)

Remove the `Popover` + `Calendar` component. Replace with three styled `<select>` elements in a row:

- **Day**: 1–31 (dynamically adjusted for selected month/year)
- **Month**: January–December (localized using date-fns or manual i18n)
- **Year**: current year minus 13, down to 1920

When all three are selected, compose into a `Date` object and set via `setBirthday()`. Validation stays the same (min age 13).

Style: rounded border inputs matching the existing phone input height (`h-12`), using `bg-background` and `border` classes for consistency.

### Imports to remove
- `Calendar` from `@/components/ui/calendar`
- `Popover`, `PopoverContent`, `PopoverTrigger` from `@/components/ui/popover`
- `CalendarIcon` from lucide (if not used elsewhere in the file)

### Files Modified
- `src/pages/Onboarding.tsx`

