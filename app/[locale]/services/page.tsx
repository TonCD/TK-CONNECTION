import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import LanguageSwitcher from '@/components/layout/LanguageSwitcher'
import BrandSlider from '@/components/sections/BrandSlider'
import ServicesHero from '@/components/sections/services/Hero'
import ServicesMain from '@/components/sections/services/Main'

export default function ServicesPage() {
  return (
    <>
      <Header />
      <LanguageSwitcher />
      <main className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <ServicesHero />

        {/* Main Services - 3 Large Cards */}
        <ServicesMain />

        {/* Brand Slider */}
        <BrandSlider />
      </main>
      <Footer />
    </>
  )
}
