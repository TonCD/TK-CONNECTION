import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import LanguageSwitcher from '@/components/layout/LanguageSwitcher'
import { getTranslations } from 'next-intl/server'

export default async function KolKocPage() {
  const t = await getTranslations('kolKocPage')
  
  return (
    <>
      <Header />
      <LanguageSwitcher />
      <main className="min-h-screen bg-white pt-20">
        <div className="max-w-[1920px] mx-auto px-6 md:px-10 xl:px-16 2xl:px-20 py-16 md:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-dark mb-6">
              {t('title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
