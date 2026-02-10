'use client';

import { useTranslations } from 'next-intl';
import FadeInView from '@/components/animation/FadeInView';

export default function ServicesMatrix() {
  const t = useTranslations('cooperationPage.services');

  return (
    <section className="py-20 bg-white">
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

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
            <FadeInView key={index} delay={index * 0.05}>
              <div className="group bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/30 h-full flex flex-col">
                {/* Service name */}
                <h3 className="text-lg font-bold mb-3 text-dark group-hover:text-primary transition-colors">
                  {t(`items.${index}.name`)}
                </h3>

                {/* Content */}
                <p className="text-sm text-gray-600 mb-4 flex-grow">
                  {t(`items.${index}.content`)}
                </p>

                {/* Cooperation type */}
                <div className="mb-3 pb-3 border-b border-gray-200">
                  <div className="text-xs text-gray-500 mb-1">Hình thức</div>
                  <div className="text-sm font-medium text-gray-700">
                    {t(`items.${index}.cooperation`)}
                  </div>
                </div>

                {/* Pricing */}
                <div>
                  <div className="text-xs text-gray-500 mb-1">Phí dịch vụ</div>
                  <div className="text-sm font-medium text-primary">
                    {t(`items.${index}.pricing`)}
                  </div>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
