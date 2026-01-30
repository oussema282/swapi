
## What’s happening (root cause)
On mobile, the admin sidebar is being rendered inside the slide-over menu (the Sheet), but the sidebar component itself is **hard-hidden on small screens**:

- `src/components/admin/AdminSidebar.tsx` currently renders:
  - `className="hidden lg:flex ..."`
- So when the mobile Sheet opens, it contains the sidebar component, but the sidebar stays `display: none` → the menu looks empty (exactly like your screenshot).

## Goal
1. Make the admin sidebar **visible and usable in the mobile slide-over**.
2. Ensure **every admin section** is reachable from the sidebar.
3. Make the mobile menu UX solid (close menu after selecting a section).

---

## Implementation approach (high level)
### A) Fix visibility (mobile)
- Remove the `hidden lg:flex` from inside `AdminSidebar`.
- Control “desktop-only” behavior from the parent (it already does this in `src/pages/Admin.tsx` with `hidden lg:block`).
- Result:  
  - Desktop: still shows the sidebar on the left.
  - Mobile: sidebar appears inside the Sheet menu.

### B) Close the mobile Sheet after navigation
Right now, selecting a sidebar item changes the active section but **doesn’t close** the Sheet.
- Convert the Sheet in `AdminHeader` to a controlled component (`open`, `onOpenChange`).
- Wrap `onSectionChange` so that on mobile selection:
  - setActiveSection(section)
  - setSheetOpen(false)

### C) Audit sidebar coverage (all admin sections)
Confirm and enforce a strict 1:1 mapping:
- Sidebar `navItems` list contains:
  - overview, users, items, matches, reports, moderation, subscriptions, analytics, algorithm, roles, system
- Admin page section renderer switch contains the same ids.

If any mismatch exists, update one side to match the other so there are no “missing” sections.

---

## Concrete file changes (what I will edit)
### 1) `src/components/admin/AdminSidebar.tsx`
- Change the root element from:
  - `className="hidden lg:flex ..."`
  to:
  - `className="flex ..."` (and ensure it has `h-full` so it fills the Sheet)
- Optional but recommended:
  - accept an optional `className?: string` prop so callers can tweak sizing (desktop vs sheet) cleanly without duplicating styles.

### 2) `src/components/admin/AdminHeader.tsx`
- Add state: `const [sidebarOpen, setSidebarOpen] = useState(false)`
- Make `<Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>`
- Pass a wrapped handler into `AdminSidebar`:
  - `onSectionChange={(id) => { onSectionChange(id); setSidebarOpen(false); } }`
- Ensure the SheetContent has a proper background and height (if needed):
  - `className="p-0 w-72 h-full bg-background"`

### 3) `src/pages/Admin.tsx` (small check)
- Keep the existing wrapper:
  - `<div className="hidden lg:block"> <AdminSidebar .../> </div>`
- This continues to be the “desktop-only” gate so we don’t reintroduce mobile layout issues.

---

## Acceptance criteria (how you’ll know it’s fixed)
1. Open `/admin` on mobile.
2. Tap the hamburger menu.
3. The sidebar menu shows:
   - Overview, Users, Items, Matches, Reports, AI Moderation, Subscriptions, Analytics, Algorithm, Role Management, System Health
4. Tap any section:
   - The section content changes
   - The menu closes automatically
5. Desktop view still shows the left sidebar normally.

---

## Edge cases / notes
- If badge counts fail due to permissions or empty tables, the sidebar should still render; only the badge numbers might show 0 (we’ll keep the try/catch already present).
- This fix is UI-level; it doesn’t change any admin security logic (admin access continues to be enforced by `useAdminRole()` and the backend role check).

---

## Optional follow-up improvement (not required for the fix)
If you want the admin console to have shareable URLs per section (e.g., `/admin/reports`), we can refactor from “single route + local state” to nested routes. This is optional and can be done after the sidebar is working properly on mobile.

## One clarification (only if you want the optional follow-up)
- Do you want each admin section to have its own URL (like `/admin/reports`), or is it fine to keep everything under `/admin` with a section switcher?
