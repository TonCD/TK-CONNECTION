'use client'

import { useTranslations } from 'next-intl'

export default function Certifications() {
  const t = useTranslations('certifications')
  
  const certs = [
    {
      title: t('tap.title'),
      subtitle: t('tap.subtitle'),
      description: t('tap.description'),
      icon: "✓"
    },
    {
      title: t('tsp.title'),
      subtitle: t('tsp.subtitle'),
      description: t('tsp.description'),
      icon: "✓"
    },
    {
      title: t('license.title'),
      subtitle: t('license.subtitle'),
      description: t('license.description'),
      icon: "✓"
    }
  ]

  return (
    <section className="w-full bg-dark text-white py-16 md:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-10 xl:px-16 2xl:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {certs.map((cert, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary hover:bg-white/10 transition-all text-center"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-3xl font-bold text-dark mx-auto mb-6">
                {cert.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
              <p className="text-primary text-sm font-semibold mb-3">{cert.subtitle}</p>
              <p className="text-gray-400 leading-relaxed">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
