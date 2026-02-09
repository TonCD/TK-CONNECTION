'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

export default function ServicesMegaMenu() {
  const t = useTranslations('header.servicesMenu')
  const params = useParams()
  const locale = params.locale as string

  const services = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: t('ecommerce.title'),
      description: t('ecommerce.description'),
      items: [
        { label: t('ecommerce.items.consulting'), href: `/${locale}/services#consulting` },
        { label: t('ecommerce.items.company'), href: `/${locale}/services#company` },
        { label: t('ecommerce.items.shop'), href: `/${locale}/services#shop` },
        { label: t('ecommerce.items.content'), href: `/${locale}/services#content` },
        { label: t('ecommerce.items.livestream'), href: `/${locale}/services#livestream` },
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      title: t('marketing.title'),
      description: t('marketing.description'),
      items: [
        { label: t('marketing.items.kolKoc'), href: `/${locale}/services#kol` },
        { label: t('marketing.items.campaign'), href: `/${locale}/services#campaign` },
        { label: t('marketing.items.ambassador'), href: `/${locale}/services#ambassador` },
        { label: t('marketing.items.multichannel'), href: `/${locale}/services#multichannel` },
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: t('offline.title'),
      description: t('offline.description'),
      items: [
        { label: t('offline.items.store'), href: `/${locale}/services#store` },
        { label: t('offline.items.popup'), href: `/${locale}/services#popup` },
        { label: t('offline.items.pos'), href: `/${locale}/services#pos` },
      ]
    }
  ]

  return (
    <div className="absolute top-[150%] left-1/2 -translate-x-1/2 w-max bg-white shadow-xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out translate-y-2 group-hover:translate-y-0 z-50 before:content-[''] before:absolute before:bottom-full before:left-1/2 before:-translate-x-1/2 before:border-[12px] before:border-transparent before:border-b-white before:drop-shadow-[0_-2px_2px_rgba(0,0,0,0.05)]">
      <div className="px-8 py-8">
        <div className="grid grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group/item">
              {/* Service Category Header */}
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-bold text-dark text-base group-hover/item:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-500">{service.description}</p>
                </div>
              </div>

              {/* Service Items */}
              <ul className="space-y-2">
                {service.items.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="block py-2 px-3 rounded-lg text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-all duration-200 group/link"
                    >
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-primary opacity-0 group-hover/link:opacity-100 -translate-x-2 group-hover/link:translate-x-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span>{item.label}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <Link
            href={`/${locale}/services`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            {t('viewAll')}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
