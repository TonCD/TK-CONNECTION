import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import BrandSlider from '@/components/sections/BrandSlider'
import BriefIntro from '@/components/sections/BriefIntro'
import AnimatedTextSlider from '@/components/sections/AnimatedTextSlider'
import AboutShowcase from '@/components/sections/AboutShowcase'
import ServicesCarousel from '@/components/sections/ServicesCarousel'
import FeaturedCases from '@/components/sections/FeaturedCases'
import FinalCTA from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <Hero />
        <BrandSlider />
        <BriefIntro />
        <AnimatedTextSlider />
        <AboutShowcase />
        <ServicesCarousel />
        <FeaturedCases />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
