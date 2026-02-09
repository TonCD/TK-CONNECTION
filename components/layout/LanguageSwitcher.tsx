'use client'

import { useParams, usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

const languages = [
  { code: 'vi', name: 'VI', flag: '🇻🇳' },
  { code: 'en', name: 'EN', flag: '🇬🇧' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
]

export default function LanguageSwitcher() {
  const params = useParams()
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  
  const currentLocale = params.locale as string
  const currentLang = languages.find(lang => lang.code === currentLocale)
  
  // Remove locale from pathname to get the base path
  const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '') || '/'

  const handleLanguageChange = (newLocale: string) => {
    setIsOpen(false)
    const newPath = `/${newLocale}${pathWithoutLocale}`
    router.push(newPath)
    // Force refresh to ensure translations update
    setTimeout(() => router.refresh(), 100)
  }

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
      <div className="relative">
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col items-center justify-center w-14 h-14 bg-primary hover:bg-primary/90 text-dark rounded-full shadow-lg transition-all hover:scale-105"
          aria-label="Change language"
        >
          <span className="text-2xl">{currentLang?.flag}</span>
          <span className="text-xs font-bold mt-0.5">{currentLang?.name}</span>
        </button>

        {/* Language Options */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-[-1]" 
              onClick={() => setIsOpen(false)}
            />
            
            {/* Options Panel */}
            <div className="absolute right-0 bottom-full mb-3 bg-white rounded-2xl shadow-2xl p-2 min-w-[140px] border border-gray-100">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all w-full ${
                    lang.code === currentLocale
                      ? 'bg-primary text-dark font-bold'
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <span className="text-2xl">{lang.flag}</span>
                  <span className="text-sm font-medium">{lang.name}</span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
