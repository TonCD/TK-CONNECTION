import { getRequestConfig } from 'next-intl/server'
import vi from '../messages/vi.json'
import en from '../messages/en.json'
import zh from '../messages/zh.json'

const messages: Record<string, any> = { vi, en, zh }

export default getRequestConfig(async ({ locale }) => {
  // Validate locale and default to 'vi' if invalid
  const validLocale = ['vi', 'en', 'zh'].includes(locale as string) ? (locale as string) : 'vi'
  
  console.log(`[i18n] Requested locale: ${locale}, Using locale: ${validLocale}`)
  
  return {
    locale: validLocale,
    messages: messages[validLocale]
  }
})
