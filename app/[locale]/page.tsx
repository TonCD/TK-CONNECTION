import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import LanguageSwitcher from '@/components/layout/LanguageSwitcher'
import Hero from '@/components/sections/Hero'
import BrandSlider from '@/components/sections/BrandSlider'
import AnimatedTextSlider from '@/components/sections/AnimatedTextSlider'
import AboutShowcase from '@/components/sections/AboutShowcase'
import ServicesCarousel from '@/components/sections/ServicesCarousel'
import FeaturedCases from '@/components/sections/FeaturedCases'
import FadeInView from '@/components/animation/FadeInView'

export default function Home() {
  return (
    <>
      <Header />
      <LanguageSwitcher />
      <main className="min-h-screen bg-white">
        <Hero />
        <FadeInView delay={0.2}>
          <BrandSlider />
        </FadeInView>
        <FadeInView delay={0.1}>
          <AboutShowcase />
        </FadeInView>
        <FadeInView delay={0.1}>
          <AnimatedTextSlider />
        </FadeInView>
        <FadeInView delay={0.1}>
          <ServicesCarousel />
        </FadeInView>
        <FadeInView delay={0.1}>
          <FeaturedCases />
        </FadeInView>
      </main>
      <Footer />
    </>
  )
}
