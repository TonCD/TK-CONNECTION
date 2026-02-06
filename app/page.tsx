import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import BrandSlider from '@/components/sections/BrandSlider'
import CoreAdvantages from '@/components/sections/CoreAdvantages'
import AboutIntro from '@/components/sections/AboutIntro'
import StatsSection from '@/components/sections/StatsSection'
import ServicesOverview from '@/components/sections/ServicesOverview'
import FeaturedCases from '@/components/sections/FeaturedCases'
import FinalCTA from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <Hero />
        <BrandSlider />
        <CoreAdvantages />
        <AboutIntro />
        <StatsSection />
        <ServicesOverview />
        <FeaturedCases />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
