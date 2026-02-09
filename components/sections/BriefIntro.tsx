'use client'

import { useTranslations } from 'next-intl'

export default function BriefIntro() {
  const t = useTranslations('briefIntro')
  
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-10 xl:px-16 2xl:px-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-dark mb-4">
            {t('title1')}{" "}
            <span className="block mt-2">
              <span className="text-primary">{t('tiktokShop')}</span>, <span className="text-primary">{t('kolKoc')}</span>, <span className="text-primary">{t('marketing')}</span> và <span className="text-primary">{t('fullChain')}</span>
            </span>
          </h2>
        </div>
      </div>
    </section>
  )
}
