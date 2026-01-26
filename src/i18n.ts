// i18n configuration for multilingual support
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation files
import en from "./locales/en/translation.json";
import fr from "./locales/fr/translation.json";
import ar from "./locales/ar/translation.json";

// Get saved language from localStorage or default to 'en'
const savedLanguage = typeof window !== 'undefined' 
  ? localStorage.getItem('i18n-language') || 'en' 
  : 'en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      ar: { translation: ar }
    },
    lng: savedLanguage,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

// Save language preference when changed
i18n.on('languageChanged', (lng) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('i18n-language', lng);
    // Handle RTL for Arabic
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lng;
  }
});

// Set initial direction
if (typeof window !== 'undefined') {
  document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = savedLanguage;
}

export default i18n;
