'use client';

import { useTranslations } from 'next-intl';
import FadeInView from '@/components/animation/FadeInView';

export default function Process() {
  const t = useTranslations('careersPage.process');

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <FadeInView>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>
        </FadeInView>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20" />

            {/* Steps */}
            <div className="space-y-12">
              {[0, 1, 2, 3].map((index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className={`relative flex items-start gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-20 md:pl-0`}>
                      <div className="inline-block bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`text-4xl font-bold text-primary/20 ${index % 2 === 0 ? 'md:order-2' : ''}`}>
                            {t(`steps.${index}.number`)}
                          </span>
                          <h3 className={`text-xl font-bold text-dark ${index % 2 === 0 ? 'md:order-1' : ''}`}>
                            {t(`steps.${index}.title`)}
                          </h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {t(`steps.${index}.description`)}
                        </p>
                      </div>
                    </div>

                    {/* Circle marker */}
                    <div className="absolute left-8 md:left-1/2 top-0 -translate-x-1/2 w-16 h-16 bg-white rounded-full border-4 border-primary shadow-lg flex items-center justify-center z-10">
                      <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>

                    {/* Spacer for layout */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <FadeInView delay={0.4}>
          <div className="mt-16 text-center">
            <a
              href="mailto:vietnam@tkconnection.vn?subject=Career Inquiry"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all hover:gap-3 shadow-lg hover:shadow-xl"
            >
              <span>Send Your CV</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
