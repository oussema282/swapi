

## Plan: Translate Match Popup

### Problem
`MatchModal.tsx` has 4 hardcoded English strings: "It's a Match!", "You both want to swap! Start chatting to arrange the exchange.", "Keep Swiping", "Chat Now".

### Changes

**1. Add `match` keys to `en/translation.json` and `fr/translation.json`**

English:
```json
"match": {
  "itsAMatch": "It's a Match!",
  "bothWantToSwap": "You both want to swap! Start chatting to arrange the exchange.",
  "keepSwiping": "Keep Swiping",
  "chatNow": "Chat Now"
}
```

French:
```json
"match": {
  "itsAMatch": "C'est un Match !",
  "bothWantToSwap": "Vous voulez tous les deux échanger ! Commencez à discuter pour organiser l'échange.",
  "keepSwiping": "Continuer",
  "chatNow": "Discuter"
}
```

**2. Wire `useTranslation` into `MatchModal.tsx`**
- Add `import { useTranslation } from 'react-i18next'`
- Add `const { t } = useTranslation()` inside component
- Replace the 4 hardcoded strings with `t('match.itsAMatch')`, `t('match.bothWantToSwap')`, `t('match.keepSwiping')`, `t('match.chatNow')`

### Files Modified
- `src/locales/en/translation.json`
- `src/locales/fr/translation.json`
- `src/components/discover/MatchModal.tsx`

