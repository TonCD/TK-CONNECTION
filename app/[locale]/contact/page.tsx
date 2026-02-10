import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import LanguageSwitcher from '@/components/layout/LanguageSwitcher'
import { getTranslations } from 'next-intl/server'
import ContactContent from '@/components/sections/contact/Content'

export default async function ContactPage() {
  const t = await getTranslations('contactPage')
  
  return (
    <>
      <Header />
      <LanguageSwitcher />
      <main className="min-h-screen bg-white pt-20">
        <ContactContent />
      </main>
      <Footer />
    </>
  )
}
