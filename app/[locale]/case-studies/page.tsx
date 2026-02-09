import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import LanguageSwitcher from '@/components/layout/LanguageSwitcher'
import CaseStudiesContent from '@/components/sections/case-studies/Content'

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <LanguageSwitcher />
      <main className="min-h-screen bg-white pt-20">
        <CaseStudiesContent />
      </main>
      <Footer />
    </>
  )
}
