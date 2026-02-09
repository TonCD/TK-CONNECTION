'use client'

import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'
import FadeInView from '@/components/animation/FadeInView'

interface GridProps {
  activeFilter: string
}

export default function CaseStudiesGrid({ activeFilter }: GridProps) {
  const t = useTranslations('caseStudiesPage')
  const locale = useLocale()

  const allCases = [
    { 
      id: 'tulandut', 
      category: 'beauty',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&q=80',
      featured: false
    },
    { 
      id: 'botare', 
      category: 'personalCare',
      image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1200&q=80',
      featured: true
    },
    { 
      id: 'mooekiss', 
      category: 'beauty',
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&q=80',
      featured: false
    },
    { 
      id: 'independent-website', 
      category: 'special',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
      featured: false
    },
    { 
      id: 'livestream-outsourcing', 
      category: 'special',
      image: 'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=1200&q=80',
      featured: false
    }
  ]

  // Filter cases
  const filteredCases = activeFilter === 'all' 
    ? allCases 
    : allCases.filter(c => c.category === activeFilter)

  // Render case card
  const renderCaseCard = (caseItem: typeof allCases[0], index: number, aspectClass: string) => {
    const caseData = t.raw(`cases.${caseItem.id}`) as any
    
    return (
      <FadeInView key={caseItem.id} delay={index * 0.1}>
        <Link
          href={`/${locale}/case-studies/${caseItem.id}`}
          className="group relative block overflow-hidden rounded-3xl h-full"
        >
          {/* Image */}
          <div className={`relative ${aspectClass} overflow-hidden bg-gray-100`}>
            <Image
              src={caseItem.image}
              alt={caseData.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

            {/* Content */}
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-sm text-white border border-white/30">
                  {caseData.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                {caseData.title}
              </h3>

              {/* Revenue */}
              <p className="text-primary font-semibold mb-2">
                {caseData.revenue}
              </p>

              {/* Description */}
              <p className="text-white/90 mb-4 line-clamp-2">
                {caseData.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {(caseData.tags as string[]).map((tag: string, i: number) => (
                  <span
                    key={i}
                    className="px-2 py-1 rounded text-xs bg-white/10 backdrop-blur-sm text-white/90 border border-white/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover Arrow */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </Link>
      </FadeInView>
    )
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {filteredCases.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-400">No cases found</p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Row 1: Bento Grid - 30% + 70% */}
            {filteredCases.length >= 2 && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* First card - 30% (4 columns) */}
                <div className="lg:col-span-4">
                  {renderCaseCard(filteredCases[0], 0, 'aspect-[4/5]')}
                </div>
                
                {/* Second card - 70% (8 columns) */}
                <div className="lg:col-span-8">
                  {renderCaseCard(filteredCases[1], 1, 'aspect-[16/9]')}
                </div>
              </div>
            )}

            {/* Row 2: Equal 3 columns - 33% each */}
            {filteredCases.length >= 3 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCases.slice(2).map((caseItem, idx) => (
                  <div key={caseItem.id}>
                    {renderCaseCard(caseItem, idx + 2, 'aspect-square')}
                  </div>
                ))}
              </div>
            )}

            {/* Fallback for less than 2 cases */}
            {filteredCases.length === 1 && (
              <div className="max-w-2xl mx-auto">
                {renderCaseCard(filteredCases[0], 0, 'aspect-[4/3]')}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
