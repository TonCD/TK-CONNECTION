'use client'

import { useTranslations } from 'next-intl'

export default function Timeline() {
  const t = useTranslations('timeline')
  
  const milestones = [
    {
      year: t('year2022.year'),
      title: t('year2022.title'),
      description: t('year2022.description')
    },
    {
      year: t('year2023.year'),
      title: t('year2023.title'),
      description: t('year2023.description')
    },
    {
      year: t('year2024.year'),
      title: t('year2024.title'),
      description: t('year2024.description')
    }
  ]

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-10 xl:px-16 2xl:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-dark mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative pl-8 md:pl-12 border-l-4 border-primary/30 hover:border-primary transition-colors">
                <div className="absolute -left-[13px] top-0 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                
                <div className="pb-8">
                  <div className="inline-block bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold mb-3">
                    {milestone.year}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-dark mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
