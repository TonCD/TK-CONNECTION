'use client'

import { useTranslations } from 'next-intl'
import FadeInView from '@/components/animation/FadeInView'

export default function AboutValues() {
  const t = useTranslations('about')
  
  return (
    <FadeInView>
      <section className="w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-[1920px] mx-auto px-6 md:px-10 xl:px-16 2xl:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-dark mb-4">
              {t('values.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('values.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Value 1 */}
            <div className="bg-dark text-white rounded-3xl p-8 hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">{t('values.customerFirst.title')}</h3>
              <p className="text-gray-300 leading-relaxed">
                {t('values.customerFirst.description')}
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-primary text-dark rounded-3xl p-8 hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-dark rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">{t('values.professional.title')}</h3>
              <p className="text-dark/80 leading-relaxed">
                {t('values.professional.description')}
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-dark text-white rounded-3xl p-8 hover:scale-105 transition-transform md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">{t('values.innovation.title')}</h3>
              <p className="text-gray-300 leading-relaxed">
                {t('values.innovation.description')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </FadeInView>
  )
}
