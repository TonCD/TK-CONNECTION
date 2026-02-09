'use client'

import { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'

export default function StatsSection() {
  const t = useTranslations('statsSection')
  
  return (
    <section className="w-full bg-dark text-white py-16 md:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-10 xl:px-16 2xl:px-20">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-300">
            {t('subtitle')}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <StatCard 
            value={t('brands')} 
            label={t('brandsLabel')}
            description={t('brandsDescription')}
          />
          <StatCard 
            value={t('growth')} 
            label={t('growthLabel')}
            description={t('growthDescription')}
          />
          <StatCard 
            value={t('topSales')} 
            label={t('topSalesLabel')}
            description={t('topSalesDescription')}
          />
        </div>

        {/* Additional Stats */}
        <div className="mt-16 pt-16 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <MiniStat value={t('gmvValue')} label={t('gmvLabel')} unit={t('gmvUnit')} />
            <MiniStat value={t('kolValue')} label={t('kolLabel')} unit={t('kolUnit')} />
            <MiniStat value={t('revenuePercent')} label={t('revenuePercentLabel')} unit={t('revenuePercentUnit')} />
            <MiniStat value={t('products')} label={t('productsLabel')} unit={t('productsUnit')} />
          </div>
        </div>
      </div>
    </section>
  )
}

function StatCard({ value, label, description }: { value: string; label: string; description: string }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div 
      ref={ref}
      className={`text-center transform transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="text-5xl md:text-6xl xl:text-7xl font-bold text-primary mb-4">
        {value}
      </div>
      <h3 className="text-xl md:text-2xl font-semibold mb-2">
        {label}
      </h3>
      <p className="text-gray-400">
        {description}
      </p>
    </div>
  )
}

function MiniStat({ value, label, unit }: { value: string; label: string; unit: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
        {value}
      </div>
      <p className="text-sm text-gray-300">{label}</p>
      <p className="text-xs text-gray-500">{unit}</p>
    </div>
  )
}
