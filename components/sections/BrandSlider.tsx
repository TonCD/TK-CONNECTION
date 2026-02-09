'use client'

import { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'

const brands = [
  { name: 'One Leaf', logo: '/logos/one-leaf.png' },
  { name: 'Kans', logo: '/logos/kans.png' },
  { name: 'FUNNY ELVES', logo: '/logos/funny-elves.png' },
  { name: 'Haidilao', logo: '/logos/haidilao.png' },
  { name: 'Nanfu', logo: '/logos/nanfu.png' },
  { name: 'botare', logo: '/logos/botare.png' },
  { name: 'Mooekiss', logo: '/logos/mooekiss.png' },
  { name: 'TULANDUT', logo: '/logos/tulandut.png' },
]

export default function BrandSlider() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const t = useTranslations('brandSlider')

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    // Clone items for infinite scroll
    const items = slider.children
    const itemsArray = Array.from(items)
    itemsArray.forEach((item) => {
      const clone = item.cloneNode(true) as HTMLElement
      slider.appendChild(clone)
    })
  }, [])

  return (
    <section className="w-full py-12 md:py-16 bg-light overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-6 md:px-10 xl:px-16 2xl:px-20">
        <div className="text-center mb-8">
          <h3 className="text-sm md:text-base font-medium text-gray mb-2">
            {t('subtitle')}
          </h3>
          <h2 className="text-2xl md:text-3xl font-bold text-dark">
            {t('title')}
          </h2>
        </div>
      </div>

      {/* Infinite Scrolling Logos */}
      <div className="relative">
        <div className="overflow-hidden">
          <div
            ref={sliderRef}
            className="flex gap-12 md:gap-16 animate-scroll"
            style={{
              width: 'fit-content',
            }}
          >
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 transition-all duration-300"
              >
                <div className="w-40 h-20 md:w-48 md:h-24 flex items-center justify-center bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                    onError={(e) => {
                      // Fallback to text if image not found
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.innerHTML = `<div class="text-gray font-medium text-base">${brand.name}</div>`;
                      }
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-light to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-light to-transparent pointer-events-none"></div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}