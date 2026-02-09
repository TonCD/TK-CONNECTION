'use client'

import { useTranslations } from 'next-intl'

export default function AnimatedTextSlider() {
  const t = useTranslations('animatedTextSlider')
  
  return (
    <section className="w-full bg-gray-50 py-10 overflow-hidden relative">
      {/* Main scrolling text */}
      <div className="relative flex">
        <div className="animate-scroll flex gap-16 whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-16">
              <span className="text-4xl md:text-5xl xl:text-6xl font-bold text-dark">
                {t('callToAction')}
              </span>
              <svg className="w-8 h-8 md:w-10 md:h-10 text-primary flex-shrink-0 rotate-45" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </div>
          ))}
        </div>
      </div>

      {/* CSS for animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
