import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import LanguageSwitcher from '@/components/layout/LanguageSwitcher'
import Image from 'next/image'
import Timeline from '@/components/sections/Timeline'
import TeamShowcase from '@/components/sections/TeamShowcase'
import Certifications from '@/components/sections/Certifications'
import { useTranslations } from 'next-intl'

export default function AboutPage() {
  const t = useTranslations('about')

  return (
    <>
      <Header />
      <LanguageSwitcher />
      <main className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <section className="w-full bg-white py-16 md:py-24">
          <div className="max-w-[1920px] mx-auto px-6 md:px-10 xl:px-16 2xl:px-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-tight">
                    <span className="text-dark">{t('hero.title1')}</span>{" "}
                    <span className="text-primary">{t('hero.title2')}</span>
                    <br />
                    <span className="text-dark">{t('hero.title3')}</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                    {t('hero.subtitle')}
                  </p>
                </div>
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
                    <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Team" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
                  </div>
                  <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl">
                    <Image src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80" alt="Meeting" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl">
                    <Image src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80" alt="Workshop" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
                  </div>
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
                    <Image src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80" alt="Team" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialists */}
        <section className="w-full bg-gray-50 py-16 md:py-24">
          <div className="max-w-[1920px] mx-auto px-6 md:px-10 xl:px-16 2xl:px-20">
            <div className="grid lg:grid-cols-[1.2fr,1fr] gap-12 items-center">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="https://images.unsplash.com/photo-5220718209010-009f0129c71c?w=1200&q=80" alt="Team" fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-dark">{t('specialists.title')}</h2>
                <p className="text-lg text-gray-600 leading-relaxed">{t('specialists.description1')}</p>
                <p className="text-lg text-gray-600 leading-relaxed">{t('specialists.description2')}</p>
                <div className="pt-4">
                  <div className="inline-block bg-primary text-dark px-6 py-3 rounded-full font-bold text-lg">
                    {t('specialists.gmvBadge')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="w-full bg-white py-16 md:py-24">
          <div className="max-w-[1920px] mx-auto px-6 md:px-10 xl:px-16 2xl:px-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-dark">{t('outcomes.title')}</h2>
                <p className="text-lg text-gray-600 leading-relaxed">{t('outcomes.description')}</p>
                <div className="space-y-4">
                  {[
                    { title: t('outcomes.strategy.title'), desc: t('outcomes.strategy.description') },
                    { title: t('outcomes.optimization.title'), desc: t('outcomes.optimization.description') },
                    { title: t('outcomes.partnershipModel.title'), desc: t('outcomes.partnershipModel.description') }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-dark mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: t('outcomes.stats.brands'), label: t('outcomes.stats.brandsLabel') },
                  { value: t('outcomes.stats.revenue'), label: t('outcomes.stats.revenueLabel') },
                  { value: t('outcomes.stats.topPerformance'), label: t('outcomes.stats.topPerformanceLabel') },
                  { value: t('outcomes.stats.gmv'), label: t('outcomes.stats.gmvLabel') }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-primary/10 to-primary/20 rounded-3xl p-8 text-center">
                    <div className="text-5xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-gray-700 font-semibold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Certifications />
        <Timeline />

        {/* Values */}
        <section className="w-full bg-gray-50 py-16 md:py-24">
          <div className="max-w-[1920px] mx-auto px-6 md:px-10 xl:px-16 2xl:px-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-dark mb-4">{t('values.title')}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-dark text-white rounded-3xl p-8 hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">{t('values.customerFirst.title')}</h3>
                <p className="text-gray-300 leading-relaxed">{t('values.customerFirst.description')}</p>
              </div>

              <div className="bg-primary text-dark rounded-3xl p-8 hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-dark rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">{t('values.professional.title')}</h3>
                <p className="text-dark/80 leading-relaxed">{t('values.professional.description')}</p>
              </div>

              <div className="bg-dark text-white rounded-3xl p-8 hover:scale-105 transition-transform md:col-span-2 lg:col-span-1">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">{t('values.innovation.title')}</h3>
                <p className="text-gray-300 leading-relaxed">{t('values.innovation.description')}</p>
              </div>
            </div>
          </div>
        </section>

        <TeamShowcase />
      </main>
      <Footer />
    </>
  )
}
