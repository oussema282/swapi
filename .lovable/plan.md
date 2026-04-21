

## Plan: Polish v2 landing — speed, mobile parity, translations

### 1. Speed up the category icon marquee
`src/components/landing/v2/CategoryMarquee.tsx`
- Change animation from `30s` → `15s` (2× faster)
- Reduce gap slightly (`gap-12` → `gap-8`) so more icons stay in motion at once

### 2. Make desktop-only sections visible on mobile

**`src/components/landing/v2/TiltCollage.tsx`**
- Remove `hidden md:block` so the floating image collage appears on mobile too
- Reduce section height on mobile (`h-[120vh]` → `h-[90vh] md:h-[120vh]`)
- Halve image sizes on mobile (multiply `pos.size` by `0.55` when viewport < 768) using `useIsMobile()` hook
- Tighten parallax intensity on mobile (multiply `pos.speed` by `0.5`)

**`src/components/landing/v2/HeroParallax.tsx`**
- The decorative tilted card stack is `hidden lg:block`. Add a smaller mobile variant: show a single centered tilted card under the headline on screens `< lg` (or simply switch the stack to `hidden md:block` and shrink it for tablets). Keep it purely decorative and `pointer-events-none`.

### 3. Add full translations for every v2 key

Currently every v2 string falls back to its English default because no `landing.v2.*` keys exist in any locale. Add a complete `landing.v2` block to **`en`, `fr`, `ar`**:

```json
"v2": {
  "nav": { "signIn": "..." },
  "hero": {
    "badge": "echange.tn",
    "word1": "...", "word2": "...", "word3": "...",
    "tagline": "...", "cta": "...", "scroll": "..."
  },
  "showcase": {
    "b1": { "title": "...", "desc": "..." },
    "b2": { "title": "...", "desc": "..." },
    "b3": { "title": "...", "desc": "..." }
  },
  "numbers": { "users": "...", "swaps": "...", "cities": "..." },
  "auth": { "title": "..." },
  "footer": { "rights": "...", "privacy": "...", "terms": "..." }
}
```

Translations:
- **EN**: keep current English defaults
- **FR**: e.g. "Échange.", "Match.", "Sourire.", "Échangez ce que vous avez.", "Commencer", "défiler", "Match intelligent", "L'IA trouve l'échange parfait", "Restez local", "Échangez avec vos voisins", "Échanges sûrs", "Utilisateurs vérifiés", "Utilisateurs", "Échanges", "Villes", "Commencer"
- **AR** (RTL): "بدّل.", "طابق.", "ابتسم.", "بدّل ما لديك. احصل على ما تريد.", "ابدأ", "مرر", "مطابقة ذكية", "الذكاء الاصطناعي يجد المبادلة المثالية", "ابق محلياً", "بادل مع جيرانك", "صفقات آمنة", "مستخدمون موثقون ودردشة آمنة", "مستخدم", "تبادل", "مدينة", "ابدأ"

### 4. Verify MinimalFooter uses translation keys
Audit `src/components/landing/v2/MinimalFooter.tsx` and ensure all displayed text uses `t()` with keys included in step 3.

### Files Modified
- `src/components/landing/v2/CategoryMarquee.tsx`
- `src/components/landing/v2/TiltCollage.tsx`
- `src/components/landing/v2/HeroParallax.tsx`
- `src/components/landing/v2/MinimalFooter.tsx` (if needed)
- `src/locales/en/translation.json`
- `src/locales/fr/translation.json`
- `src/locales/ar/translation.json`

