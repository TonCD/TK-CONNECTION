import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import LanguageSwitcher from '@/components/layout/LanguageSwitcher'
import Timeline from '@/components/sections/Timeline'
import TeamShowcase from '@/components/sections/TeamShowcase'
import Certifications from '@/components/sections/Certifications'
import AboutHero from '@/components/sections/about/Hero'
import AboutSpecialists from '@/components/sections/about/Specialists'
import AboutOutcomes from '@/components/sections/about/Outcomes'
import AboutValues from '@/components/sections/about/Values'

export default function AboutPage() {
  return (
    <>
      <Header />
      <LanguageSwitcher />
      <main className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <AboutHero />

        {/* Specialists Section */}
        <AboutSpecialists />

        {/* Outcomes Section */}
        <AboutOutcomes />

        {/* Certifications */}
        <Certifications />

        {/* Timeline */}
        <Timeline />

        {/* What We Believe In */}
        <AboutValues />

        {/* Team */}
        <TeamShowcase />
      </main>
      <Footer />
    </>
  )
}
