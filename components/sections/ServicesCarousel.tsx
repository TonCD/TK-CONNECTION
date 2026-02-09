'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const t = useTranslations('services')
  const params = useParams()
  const locale = params.locale as string

  const services = [
    {
      id: 1,
      icon: "🛒",
      title: t('tiktokShop.title'),
      description: t('tiktokShop.description'),
      features: [
        t('tiktokShop.feature1'),
        t('tiktokShop.feature2'),
        t('tiktokShop.feature3'),
        t('tiktokShop.feature4')
      ]
    },
    {
      id: 2,
      icon: "📱",
      title: t('marketing.title'),
      description: t('marketing.description'),
      features: [
        t('marketing.feature1'),
        t('marketing.feature2'),
        t('marketing.feature3'),
        t('marketing.feature4')
      ]
    },
    {
      id: 3,
      icon: "🎨",
      title: t('creative.title'),
      description: t('creative.description'),
      features: [
        t('creative.feature1'),
        t('creative.feature2'),
        t('creative.feature3'),
        t('creative.feature4')
      ]
    },
    {
      id: 4,
      icon: "⭐",
      title: t('influencer.title'),
      description: t('influencer.description'),
      features: [
        t('influencer.feature1'),
        t('influencer.feature2'),
        t('influencer.feature3'),
        t('influencer.feature4')
      ]
    }
  ]

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length)
  }

  return (
    <section className="w-full bg-gray-50 py-16 md:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-10 xl:px-16 2xl:px-20">
        {/* Section Header */}
        <div className="flex items-start justify-between mb-12">
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-primary max-w-2xl leading-tight">
            {t('title')}
          </h2>

          <div className="hidden lg:flex flex-col items-end gap-4">
            <Link
              href={`/${locale}/services`}
              className="inline-flex items-center bg-dark hover:bg-primary text-white px-8 py-4 rounded-full font-semibold transition-all group"
            >
              {t('viewAll')}
              <svg viewBox="0 0 512 512" className="fill-current w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform">
                <path d="M489.4 233.4L512 256l-22.6 22.6-128 128-22.6 22.6L293.5 384l22.6-22.6L389.5 288 32 288 0 288l0-64 32 0 357.5 0-73.4-73.4L293.5 128l45.3-45.3 22.6 22.6 128 128z" />
              </svg>
            </Link>

            {/* Desktop slide indicators */}
            <div className="flex gap-2">
              {services.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentIndex ? 'bg-primary w-8' : 'bg-gray-300 w-2'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden lg:block relative">
          <div className="grid lg:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-primary transition-all group"
            >
              {/* Icon Box */}
              <div className="w-16 h-16 bg-dark rounded-2xl flex items-center justify-center mb-6 text-3xl">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-dark mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                href="/services"
                className="inline-flex items-center text-dark group-hover:text-primary font-semibold transition-colors"
              >
                {t('learnMore')}
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
          </div>

          {/* Next Button - floating on the right of last card */}
          <button
            onClick={handleNext}
            className="absolute top-1/2 -right-4 -translate-y-1/2 flex items-center justify-center w-20 h-20 bg-dark hover:bg-primary text-white rounded-full transition-all group shadow-lg z-10"
            aria-label="Next service"
          >
            <svg viewBox="0 0 512 512" className="fill-current w-6 h-6 group-hover:translate-x-1 transition-transform">
              <path d="M489.4 233.4L512 256l-22.6 22.6-128 128-22.6 22.6L293.5 384l22.6-22.6L389.5 288 32 288 0 288l0-64 32 0 357.5 0-73.4-73.4L293.5 128l45.3-45.3 22.6 22.6 128 128z" />
            </svg>
          </button>
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {services.map((service) => (
                <div 
                  key={service.id}
                  className="min-w-full px-2"
                >
                  <div className="bg-white rounded-3xl p-8 border-2 border-gray-200">
                    <div className="w-16 h-16 bg-dark rounded-2xl flex items-center justify-center mb-6 text-3xl">
                      {service.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-dark mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      href="/services"
                      className="inline-flex items-center text-dark font-semibold"
                    >
                      {t('learnMore')}
                      <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {services.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentIndex ? 'bg-primary w-8' : 'bg-gray-300 w-2'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={handleNext}
              className="flex items-center justify-center w-12 h-12 bg-dark hover:bg-primary text-white rounded-full transition-all"
              aria-label="Next service"
            >
              <svg viewBox="0 0 512 512" className="fill-current w-4 h-4">
                <path d="M489.4 233.4L512 256l-22.6 22.6-128 128-22.6 22.6L293.5 384l22.6-22.6L389.5 288 32 288 0 288l0-64 32 0 357.5 0-73.4-73.4L293.5 128l45.3-45.3 22.6 22.6 128 128z" />
              </svg>
            </button>
          </div>

          <Link
            href="/services"
            className="lg:hidden inline-flex items-center bg-dark hover:bg-primary text-white px-8 py-4 rounded-full font-semibold transition-all group mt-8 w-full justify-center"
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
