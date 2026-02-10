'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import FadeInView from '@/components/animation/FadeInView';

export default function CTA() {
  const t = useTranslations('cooperationPage.cta');
  const locale = useLocale();

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('title')}
              </h2>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
                {t('description')}
              </p>
              
              {/* CTA Button */}
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:gap-4 shadow-xl hover:shadow-2xl"
              >
                {t('button')}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </FadeInView>

          {/* Stats */}
          <FadeInView delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {[0, 1, 2].map((index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {t(`stats.${index}.value`)}
                  </div>
                  <div className="text-white/80">
                    {t(`stats.${index}.label`)}
                  </div>
                </div>
              ))}
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
