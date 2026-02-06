import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import BrandSlider from '@/components/sections/BrandSlider'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <Hero />
        <BrandSlider />
        {/* More sections will be added here */}
      </main>
      <Footer />
    </>
  )
}
