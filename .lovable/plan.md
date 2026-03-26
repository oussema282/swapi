

## Plan: Hide Onboarding Check Behind Bootstrapping Screen

### Problem
The `OnboardingGate` shows its own loading spinner while checking profile completeness and item count. Users see a brief flash of the loading/onboarding screen before being redirected to `/discover`. The check should happen invisibly behind the existing system bootstrapping screen.

### Root Cause
In `OnboardingGate`, when `loading` or `itemsLoading` is true, it renders its own full-screen `Loader2` spinner (lines 32-38). This is a separate visual state from the `SystemPhaseRenderer` bootstrapping screen. Users see the bootstrapping screen → OnboardingGate spinner → final destination, causing a visible flash.

### Solution
Remove the OnboardingGate's own loading spinner. Instead, return `null` while data is loading — this keeps the parent `SystemPhaseRenderer` bootstrapping screen visible until OnboardingGate has made its decision. The user sees one seamless loading screen, then lands directly on either `/onboarding` or `/discover`.

### Changes — `src/components/OnboardingGate.tsx`

Replace the loading spinner block (lines 32-38):

```tsx
// Before:
if (loading || itemsLoading) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Loader2 className="w-8 h-8 animate-spin text-primary" />
    </div>
  );
}

// After:
if (loading || itemsLoading) {
  return null;  // Stay invisible — parent bootstrapping screen remains visible
}
```

Remove the `Loader2` import since it's no longer used.

### Files Modified
- `src/components/OnboardingGate.tsx`

