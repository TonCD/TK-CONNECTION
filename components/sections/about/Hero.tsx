'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import FadeInView from '@/components/animation/FadeInView'

export default function AboutHero() {
  const t = useTranslations('about')
  
  return (
    <FadeInView>
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-[1920px] mx-auto px-6 md:px-10 xl:px-16 2xl:px-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Statement */}
            <div>
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="text-dark">{t('hero.title1')}</span>{" "}
                  <span className="text-primary">{t('hero.title2')}</span>
                  <br />
                  <span className="text-dark">{t('hero.title3')}</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                  {t('hero.subtitle')}
                </p>
              </div>
            </div>

            {/* Right - Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                    alt="Team collaboration"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
                    alt="Team meeting"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80"
                    alt="Workshop"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80"
                    alt="Team photo"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeInView>
  )
}
