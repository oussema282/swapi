import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale/fr';
import { es } from 'date-fns/locale/es';
import { de } from 'date-fns/locale/de';
import { pt } from 'date-fns/locale/pt';
import { ja } from 'date-fns/locale/ja';
import { ru } from 'date-fns/locale/ru';
import { ko } from 'date-fns/locale/ko';
import { ar } from 'date-fns/locale/ar';

const localeMap: Record<string, typeof fr> = { fr, es, de, pt, ja, ru, ko, ar };

function getDateLocale(): typeof fr | undefined {
  const lng = typeof window !== 'undefined' ? localStorage.getItem('i18n-language') || 'en' : 'en';
  return localeMap[lng];
}

export function formatTimeAgo(date: Date, options?: { addSuffix?: boolean }): string {
  return formatDistanceToNow(date, { ...options, locale: getDateLocale() });
}
