import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import vi from '@/messages/vi.json'
import en from '@/messages/en.json'
import zh from '@/messages/zh.json'

const inter = Inter({ 
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
})

const locales = ['vi', 'en', 'zh']
const messages = { vi, en, zh }

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  // Await params in Next.js 15+
  const { locale } = await params
  
  // Validate locale
  if (!locales.includes(locale)) {
    notFound()
  }

  const localeMessages = messages[locale as 'vi' | 'en' | 'zh']

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={localeMessages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
