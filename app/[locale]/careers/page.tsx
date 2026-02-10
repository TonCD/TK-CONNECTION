import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import LanguageSwitcher from '@/components/layout/LanguageSwitcher'
import { getTranslations } from 'next-intl/server'
import CareersContent from '@/components/sections/careers/Content'

export default async function CareersPage() {
  const t = await getTranslations('careersPage')
  
  return (
    <>
      <Header />
      <LanguageSwitcher />
      <main className="min-h-screen bg-white pt-20">
        <CareersContent />
      </main>
      <Footer />
    </>
  )
}
