'use client'

import { useTranslations } from 'next-intl'
import FadeInView from '@/components/animation/FadeInView'

interface HeroProps {
  activeFilter: string
  onFilterChange: (filter: string) => void
}

export default function CaseStudiesHero({ activeFilter, onFilterChange }: HeroProps) {
  const t = useTranslations('caseStudiesPage')

  const filters = [
    { id: 'all', label: t('filters.all') },
    { id: 'beauty', label: t('filters.beauty') },
    { id: 'personalCare', label: t('filters.personalCare') },
    { id: 'special', label: t('filters.special') }
  ]

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/5 via-white to-primary/5 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <FadeInView>
          <div className="text-center mb-12">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6">
              {t('hero.title')}
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {t('hero.subtitle')}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => onFilterChange(filter.id)}
                className={`
                  px-6 py-3 rounded-full font-semibold transition-all duration-300
                  ${
                    activeFilter === filter.id
                      ? 'bg-primary text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-md border border-gray-200'
                  }
                `}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </FadeInView>
      </div>
    </section>
  )
}
