'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

export default function FeaturedCases() {
  const t = useTranslations('featuredCases')
  const params = useParams()
  const locale = params.locale as string

  return (
    <section className="w-full bg-gray-50 py-16 md:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-10 xl:px-16 2xl:px-20">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-dark mb-4">
            {t('title')}{" "}
            <span className="text-primary">{t('titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Large Featured Case - TULANDUT */}
          <Link 
            href={`/${locale}/case-studies`}
            className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 md:row-span-2"
          >
            <div className="relative h-full min-h-[400px] md:min-h-[600px]">
              <img 
                src="https://placehold.co/800x1000/e0f2fe/0284c7?text=TULANDUT+Case+Study" 
                alt="TULANDUT"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs font-semibold bg-primary text-white px-3 py-1 rounded-full">
                    {t('tulandut.category')}
                  </span>
                  <span className="text-xs font-semibold bg-white/20 text-white px-3 py-1 rounded-full backdrop-blur-sm">
                    {t('tulandut.tag')}
                  </span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  TULANDUT
                </h3>
                
                <p className="text-lg text-gray-200 mb-6">
                  {t('tulandut.description')}
                </p>
                
                <div className="flex items-center gap-4">
                  <div>
                    <div className="text-3xl font-bold text-primary">{t('tulandut.stat1Value')}</div>
                    <div className="text-sm text-gray-300">{t('tulandut.stat1Label')}</div>
                  </div>
                  <div className="w-px h-12 bg-white/20"></div>
                  <div>
                    <div className="text-3xl font-bold text-primary">{t('tulandut.stat2Value')}</div>
                    <div className="text-sm text-gray-300">{t('tulandut.stat2Label')}</div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Small Case 1 - botare */}
          <Link 
            href={`/${locale}/case-studies`}
            className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[280px]"
          >
            <div className="relative h-full">
              <img 
                src="https://placehold.co/600x400/d1fae5/059669?text=botare+Case" 
                alt="botare"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block text-xs font-semibold bg-green-500 text-white px-3 py-1 rounded-full mb-3">
                  {t('botare.category')}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {t('botare.name')}
                </h3>
                <p className="text-sm text-gray-200 mb-3">
                  {t('botare.description')}
                </p>
                <div className="text-2xl font-bold text-green-400">{t('botare.statValue')}</div>
              </div>
            </div>
          </Link>

          {/* Small Case 2 - Mooekiss */}
          <Link 
            href={`/${locale}/case-studies`}
            className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[280px]"
          >
            <div className="relative h-full">
              <img 
                src="https://placehold.co/600x400/fce7f3/db2777?text=Mooekiss+Case" 
                alt="Mooekiss"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block text-xs font-semibold bg-pink-500 text-white px-3 py-1 rounded-full mb-3">
                  {t('mooekiss.category')}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Mooekiss
                </h3>
                <p className="text-sm text-gray-200 mb-3">
                  {t('mooekiss.description')}
                </p>
                <div className="text-2xl font-bold text-pink-400">{t('mooekiss.statValue')}</div>
              </div>
            </div>
          </Link>
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href={`/${locale}/case-studies`}
            className="group inline-flex items-center bg-dark hover:bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg transition-all"
          >
            {t('viewAll')}
            <svg viewBox="0 0 512 512" className="fill-current w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform">
              <path d="M489.4 233.4L512 256l-22.6 22.6-128 128-22.6 22.6L293.5 384l22.6-22.6L389.5 288 32 288 0 288l0-64 32 0 357.5 0-73.4-73.4L293.5 128l45.3-45.3 22.6 22.6 128 128z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
