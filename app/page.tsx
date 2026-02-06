import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import BrandSlider from '@/components/sections/BrandSlider'
import AnimatedTextSlider from '@/components/sections/AnimatedTextSlider'
import AboutShowcase from '@/components/sections/AboutShowcase'
import ServicesCarousel from '@/components/sections/ServicesCarousel'
import FeaturedCases from '@/components/sections/FeaturedCases'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <Hero />
        <BrandSlider />
        <AboutShowcase />
        <AnimatedTextSlider />
        <ServicesCarousel />
        <FeaturedCases />
      </main>
      <Footer />
    </>
  )
}
