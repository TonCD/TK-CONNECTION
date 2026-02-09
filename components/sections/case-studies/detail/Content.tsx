'use client'

import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'
import BrandSlider from '@/components/sections/BrandSlider'

interface CaseDetailProps {
  slug: string
}

export default function CaseDetailContent({ slug }: CaseDetailProps) {
  const t = useTranslations('caseStudiesPage')
  const locale = useLocale()

  const caseData = t.raw(`cases.${slug}`) as any
  const detail = caseData.detail

  const caseImages: Record<string, string> = {
    'tulandut': 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&q=80',
    'botare': 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1200&q=80',
    'mooekiss': 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&q=80',
    'independent-website': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    'livestream-outsourcing': 'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=1200&q=80'
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/5 via-white to-primary/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          {/* Back Button */}
          <Link
            href={`/${locale}/case-studies`}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors mb-8 group"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t('backToCases')}
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Title */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6">
                {caseData.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {caseData.description}
              </p>
              <p className="text-2xl font-semibold text-primary">
                {caseData.revenue}
              </p>
            </div>

            {/* Right - Meta Info */}
            <div className="space-y-6">
              {/* Deliverables */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Deliverables
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(detail.deliverables as string[]).map((item: string, index: number) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full text-sm font-medium bg-white border-2 border-primary/20 text-dark"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Client */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Client
                </h3>
                <p className="text-lg font-semibold text-dark">{detail.client}</p>
              </div>

              {/* Year */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Year
                </h3>
                <p className="text-lg font-semibold text-dark">{detail.year}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-0">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={caseImages[slug]}
              alt={caseData.title}
              fill
              sizes="(max-width: 1536px) 100vw, 1536px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              {detail.background.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {detail.background.content}
            </p>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-12">
            {detail.strategy.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {(detail.strategy.items as any[]).map((item: any, index: number) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                {detail.results.title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {detail.results.content}
              </p>
            </div>

            {/* Right - Metrics Cards */}
            <div className="grid grid-cols-3 gap-4">
              {(detail.results.metrics as any[]).map((metric: any, index: number) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 text-center text-white"
                >
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm opacity-90">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brand Slider */}
      <BrandSlider />
    </>
  )
}
