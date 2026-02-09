'use client'

import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import FadeInView from '@/components/animation/FadeInView'

export default function ServicesMain() {
  const t = useTranslations('servicesPage')
  const locale = useLocale()

  const mainServices = [
    {
      id: 'ecommerce',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      gradient: 'from-teal-500 to-cyan-600',
      bgGradient: 'from-teal-50 to-cyan-50',
      subServices: ['consulting', 'company', 'shop', 'content', 'livestream']
    },
    {
      id: 'marketing',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      gradient: 'from-purple-500 to-pink-600',
      bgGradient: 'from-purple-50 to-pink-50',
      subServices: ['kolKoc', 'campaign', 'ambassador', 'multichannel']
    },
    {
      id: 'offline',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      gradient: 'from-orange-500 to-red-600',
      bgGradient: 'from-orange-50 to-red-50',
      subServices: ['store', 'popup', 'pos']
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1920px] mx-auto px-6 md:px-10 xl:px-16 2xl:px-20">
        <FadeInView>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              {t('main.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('main.subtitle')}
            </p>
          </div>
        </FadeInView>

        <div className="space-y-16">
          {mainServices.map((service, index) => (
            <FadeInView key={service.id} delay={index * 0.15}>
              <div 
                id={service.id}
                className="group relative scroll-mt-24"
              >
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} text-white mb-6`}>
                      {service.icon}
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                      {t(`${service.id}.title`)}
                    </h3>
                    
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {t(`${service.id}.description`)}
                    </p>

                    {/* Sub-Services List */}
                    <div className="space-y-3 mb-8">
                      {service.subServices.map((subService) => (
                        <div
                          key={subService}
                          id={subService === 'kolKoc' ? 'kol' : subService}
                          className="flex items-center gap-3 group/item scroll-mt-24"
                        >
                          <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-dark group-hover/item:text-primary transition-colors">
                              {t(`${service.id}.items.${subService}.title`)}
                            </h4>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/${locale}/contact`}
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold bg-gradient-to-r ${service.gradient} text-white hover:shadow-lg transition-all hover:gap-3`}
                    >
                      {t('main.learnMore')}
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>

                  {/* Image Placeholder */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} relative`}>
                    <div className={`relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br ${service.bgGradient} aspect-[4/3]`}>
                      {/* Placeholder gradient background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10`}></div>
                      
                      {/* Placeholder content */}
                      <div className="absolute inset-0 flex items-center justify-center p-8">
                        <div className="text-center">
                          <div className={`inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br ${service.gradient} text-white mb-4 shadow-xl`}>
                            {service.icon}
                          </div>
                          <p className="text-sm text-gray-500 font-medium">
                            {t(`${service.id}.title`)}
                          </p>
                        </div>
                      </div>

                      {/* Decorative elements */}
                      <div className="absolute top-6 right-6 w-32 h-32 bg-white/20 rounded-full blur-3xl"></div>
                      <div className="absolute bottom-6 left-6 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                {index < mainServices.length - 1 && (
                  <div className="mt-16 border-b border-gray-100"></div>
                )}
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  )
}
