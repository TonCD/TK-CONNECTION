'use client';

import { useTranslations } from 'next-intl';
import FadeInView from '@/components/animation/FadeInView';

// Icon components using emoji
const icons = ['👥', '🌐', '📊', '⚙️'];

export default function Advantages() {
  const t = useTranslations('kolKocPage.advantages');

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <FadeInView>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('title')}
            </h2>
          </div>
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[0, 1, 2, 3].map((index) => {
            const icon = icons[index];
            return (
              <FadeInView key={index} delay={index * 0.1}>
                <div className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/30">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors text-4xl">
                      {icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {t(`items.${index}.title`)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t(`items.${index}.description`)}
                  </p>

                  {/* Hover effect decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                </div>
              </FadeInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
