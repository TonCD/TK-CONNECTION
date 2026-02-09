'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import FadeInView from '@/components/animation/FadeInView'

export default function AboutSpecialists() {
  const t = useTranslations('about')
  
  return (
    <FadeInView>
      <section className="w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-[1920px] mx-auto px-6 md:px-10 xl:px-16 2xl:px-20">
          <div className="grid lg:grid-cols-[1.2fr,1fr] gap-12 items-center">
            {/* Left - Large Team Image */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
                alt="TK Connection team"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>

            {/* Right - Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-dark">
                {t('specialists.title')}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('specialists.description1')}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('specialists.description2')}
              </p>
              <div className="pt-4">
                <div className="inline-block bg-primary text-dark px-6 py-3 rounded-full font-bold text-lg">
                  {t('specialists.gmvBadge')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeInView>
  )
}
