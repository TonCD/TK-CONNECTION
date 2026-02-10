'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import FadeInView from '@/components/animation/FadeInView';

export default function Hero() {
  const t = useTranslations('cooperationPage');
  const locale = useLocale();

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/5 via-white to-primary/5 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-[1920px] mx-auto px-6 md:px-10 xl:px-16 2xl:px-20 relative z-10">
        <FadeInView>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                <span className="text-sm font-semibold text-primary">Strategic Partnership</span>
              </div>

              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-dark leading-tight">
                {t('hero.title')}
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                {t('hero.subtitle')}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all hover:gap-3 shadow-lg hover:shadow-xl"
                >
                  {t('hero.cta')}
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href={`/${locale}/services`}
                  className="inline-flex items-center gap-2 bg-white text-dark px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all border-2 border-gray-200 shadow-md hover:shadow-lg"
                >
                  {t('hero.viewServices')}
                </Link>
              </div>

              {/* Stats Mini Cards */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-md border border-gray-100">
                  <div className="text-3xl font-bold text-primary mb-1">40+</div>
                  <div className="text-sm text-gray-600 font-medium">{t('hero.stats.partners')}</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-md border border-gray-100">
                  <div className="text-3xl font-bold text-primary mb-1">₫50M+</div>
                  <div className="text-sm text-gray-600 font-medium">{t('hero.stats.revenue')}</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-md border border-gray-100">
                  <div className="text-3xl font-bold text-primary mb-1">95%</div>
                  <div className="text-sm text-gray-600 font-medium">{t('hero.stats.success')}</div>
                </div>
              </div>
            </div>

            {/* Right - Image Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {/* Column 1 */}
                <div className="space-y-4">
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl group">
                    <Image
                      src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80"
                      alt="Business Partnership"
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl group">
                    <Image
                      src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80"
                      alt="Team Collaboration"
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                </div>
                
                {/* Column 2 */}
                <div className="space-y-4 pt-12">
                  <div className="relative aspect-square rounded-3xl overflow-hidden shadow-xl group">
                    <Image
                      src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80"
                      alt="Strategic Meeting"
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl group">
                    <Image
                      src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"
                      alt="Business Growth"
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                </div>
              </div>

              {/* Floating Badges */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl animate-float hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Success Rate</div>
                    <div className="text-lg font-bold text-dark">95%</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl animate-float-delayed hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Revenue Generated</div>
                    <div className="text-lg font-bold text-dark">₫50M+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
