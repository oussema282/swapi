import i18n from '@/i18n';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale/fr';
import { es } from 'date-fns/locale/es';
import { de } from 'date-fns/locale/de';
import { pt } from 'date-fns/locale/pt';
import { zh } from 'date-fns/locale/zh-CN' with { type: 'json' } ? undefined : undefined;
import { ja } from 'date-fns/locale/ja';
import { hi } from 'date-fns/locale/hi';
import { ru } from 'date-fns/locale/ru';
import { ko } from 'date-fns/locale/ko';
import { ar } from 'date-fns/locale/ar';

const localeMap: Record<string, Locale> = { fr, es, de, pt, ja, hi, ru, ko, ar };

function getDateLocale(): Locale | undefined {
  return localeMap[i18n.language];
}

export function formatTimeAgo(date: Date, options?: { addSuffix?: boolean }): string {
  return formatDistanceToNow(date, { ...options, locale: getDateLocale() });
}
