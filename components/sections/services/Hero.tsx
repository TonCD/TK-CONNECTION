'use client'

import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'
import FadeInView from '@/components/animation/FadeInView'

export default function ServicesHero() {
  const t = useTranslations('servicesPage')
  const locale = useLocale()
  
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/5 via-white to-primary/5 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-[1920px] mx-auto px-6 md:px-10 xl:px-16 2xl:px-20 relative z-10">
        <FadeInView>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold text-primary">TikTok TAP/TSP Certified</span>
              </div>

              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-dark leading-tight">
                {t('hero.title')}
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                {t('hero.subtitle')}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all hover:gap-3 shadow-lg hover:shadow-xl"
                >
                  {t('hero.cta')}
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href={`/${locale}/case-studies`}
                  className="inline-flex items-center gap-2 bg-white text-dark px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all border-2 border-gray-200 shadow-md hover:shadow-lg"
                >
                  {t('hero.viewCases')}
                </Link>
              </div>

              {/* Stats Mini Cards */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-md border border-gray-100">
                  <div className="text-3xl font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-gray-600 font-medium">{t('hero.stats.campaigns')}</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-md border border-gray-100">
                  <div className="text-3xl font-bold text-primary mb-1">1000+</div>
                  <div className="text-sm text-gray-600 font-medium">{t('hero.stats.creators')}</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-md border border-gray-100">
                  <div className="text-3xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-gray-600 font-medium">{t('hero.stats.brands')}</div>
                </div>
              </div>
            </div>

            {/* Right - Image Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {/* Column 1 */}
                <div className="space-y-4">
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl group">
                    <Image
                      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80"
                      alt="TikTok Shop Success"
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl group">
                    <Image
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
                      alt="Team Collaboration"
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                </div>
                
                {/* Column 2 */}
                <div className="space-y-4 pt-12">
                  <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl group">
                    <Image
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
                      alt="Marketing Strategy"
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl group">
                    <Image
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                      alt="Live Streaming"
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                </div>
              </div>

              {/* Floating Badges */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl animate-float hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Growth Rate</div>
                    <div className="text-lg font-bold text-dark">+245%</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl animate-float-delayed hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Client Rating</div>
                    <div className="text-lg font-bold text-dark">4.9/5.0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  )
}
