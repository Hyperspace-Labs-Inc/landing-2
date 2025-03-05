import en from '@/locales/en.json'

import ru from '@/locales/ru.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  defaultLocale: 'en',
  fallbackLocale: 'en',
  warnHtmlMessage: false, // disable warning HTML in message
  detectBrowserLanguage: false,
  messages: {
    en,
  },
}))
