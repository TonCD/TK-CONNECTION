'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'
import ServicesMegaMenu from './ServicesMegaMenu'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showServicesMenu, setShowServicesMenu] = useState(false)
  const t = useTranslations('header')
  const params = useParams()
  const locale = params.locale as string

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-sm translate-y-0' : '-translate-y-1'
      }`}
    >
      <nav className="max-w-[1920px] mx-auto px-6 md:px-10 xl:px-16 2xl:px-20 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <img 
            src="/images/logo.png" 
            alt="TK Connection" 
            className="h-10 md:h-12 w-auto"
          />
          <span className="font-bold text-xl md:text-2xl text-dark tracking-tight hidden sm:inline">
            TK Connection
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-8">
          <NavLink href={`/${locale}`}>{t('home')}</NavLink>
          <NavLink href={`/${locale}/about`}>{t('about')}</NavLink>
          
          {/* Services with Mega Menu */}
          <div className="relative group">
            <Link 
              href={`/${locale}/services`}
              className="relative text-sm font-medium text-dark hover:text-primary transition-colors py-2 inline-block"
            >
              {t('services')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <ServicesMegaMenu />
          </div>
          
          <NavLink href={`/${locale}/case-studies`}>{t('caseStudies')}</NavLink>
          <NavLink href={`/${locale}/kol-koc`}>{t('kolKoc')}</NavLink>
          <NavLink href={`/${locale}/cooperation`}>{t('cooperation')}</NavLink>
          <NavLink href={`/${locale}/careers`}>{t('careers')}</NavLink>
          
          <Link
            href={`/${locale}/contact`}
            className="group relative inline-flex items-center text-sm font-semibold transition-all ml-4"
          >
            <span className="bg-primary hover:bg-primary/90 text-white inline-flex items-center px-6 py-3 rounded-full transition-all group-hover:px-8">
              {t('contact')}
            </span>
            <span className="bg-primary hover:bg-primary/90 text-white inline-flex items-center justify-center w-10 h-10 rounded-full -ml-4 transition-all group-hover:ml-2">
              <svg viewBox="0 0 512 512" className="fill-current w-3 h-3">
                <path d="M489.4 233.4L512 256l-22.6 22.6-128 128-22.6 22.6L293.5 384l22.6-22.6L389.5 288 32 288 0 288l0-64 32 0 357.5 0-73.4-73.4L293.5 128l45.3-45.3 22.6 22.6 128 128z" />
              </svg>
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden p-2 text-dark hover:text-primary transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`xl:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 space-y-3 border-t border-gray-100">
          <MobileNavLink href={`/${locale}`} onClick={() => setIsMenuOpen(false)}>
            {t('home')}
          </MobileNavLink>
          <MobileNavLink href={`/${locale}/about`} onClick={() => setIsMenuOpen(false)}>
            {t('about')}
          </MobileNavLink>
          
          {/* Services with Submenu */}
          <div>
            <button
              onClick={() => setShowServicesMenu(!showServicesMenu)}
              className="w-full flex items-center justify-between py-2.5 text-dark hover:text-primary transition-colors font-medium"
            >
              <span>{t('services')}</span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${showServicesMenu ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${showServicesMenu ? 'max-h-[800px]' : 'max-h-0'}`}
            >
              <div className="pl-4 py-2 space-y-2">
                <MobileServicesSection
                  title={t('servicesMenu.ecommerce.title')}
                  items={[
                    { label: t('servicesMenu.ecommerce.items.consulting'), href: `/${locale}/services#consulting` },
                    { label: t('servicesMenu.ecommerce.items.company'), href: `/${locale}/services#company` },
                    { label: t('servicesMenu.ecommerce.items.shop'), href: `/${locale}/services#shop` },
                    { label: t('servicesMenu.ecommerce.items.content'), href: `/${locale}/services#content` },
                    { label: t('servicesMenu.ecommerce.items.livestream'), href: `/${locale}/services#livestream` },
                  ]}
                  onClick={() => setIsMenuOpen(false)}
                />
                <MobileServicesSection
                  title={t('servicesMenu.marketing.title')}
                  items={[
                    { label: t('servicesMenu.marketing.items.kolKoc'), href: `/${locale}/services#kol` },
                    { label: t('servicesMenu.marketing.items.campaign'), href: `/${locale}/services#campaign` },
                    { label: t('servicesMenu.marketing.items.ambassador'), href: `/${locale}/services#ambassador` },
                    { label: t('servicesMenu.marketing.items.multichannel'), href: `/${locale}/services#multichannel` },
                  ]}
                  onClick={() => setIsMenuOpen(false)}
                />
                <MobileServicesSection
                  title={t('servicesMenu.offline.title')}
                  items={[
                    { label: t('servicesMenu.offline.items.store'), href: `/${locale}/services#store` },
                    { label: t('servicesMenu.offline.items.popup'), href: `/${locale}/services#popup` },
                    { label: t('servicesMenu.offline.items.pos'), href: `/${locale}/services#pos` },
                  ]}
                  onClick={() => setIsMenuOpen(false)}
                />
                <Link
                  href={`/${locale}/services`}
                  className="block py-2 text-sm text-primary font-semibold hover:underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('servicesMenu.viewAll')} →
                </Link>
              </div>
            </div>
          </div>
          
          <MobileNavLink href={`/${locale}/case-studies`} onClick={() => setIsMenuOpen(false)}>
            {t('caseStudies')}
          </MobileNavLink>
          <MobileNavLink href={`/${locale}/kol-koc`} onClick={() => setIsMenuOpen(false)}>
            {t('kolKoc')}
          </MobileNavLink>
          <MobileNavLink href={`/${locale}/cooperation`} onClick={() => setIsMenuOpen(false)}>
            {t('cooperation')}
          </MobileNavLink>
          <MobileNavLink href={`/${locale}/careers`} onClick={() => setIsMenuOpen(false)}>
            {t('careers')}
          </MobileNavLink>
          <Link
            href={`/${locale}/contact`}
            className="block bg-primary text-white px-6 py-3 rounded-full text-center font-semibold mt-4 hover:bg-primary/90 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('contact')}
          </Link>
        </div>
      </div>
    </header>
  )
}

// Desktop Nav Link with hover underline animation
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="relative text-sm font-medium text-dark hover:text-primary transition-colors group py-2"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
    </Link>
  )
}

// Mobile Nav Link
function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block py-2.5 text-dark hover:text-primary transition-colors font-medium"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

// Mobile Services Section
function MobileServicesSection({ title, items, onClick }: { 
  title: string; 
  items: { label: string; href: string }[]; 
  onClick: () => void 
}) {
  return (
    <div className="py-2">
      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
        {title}
      </div>
      <div className="space-y-1">
        {items.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            className="block py-1.5 text-sm text-gray-600 hover:text-primary transition-colors pl-3 border-l-2 border-transparent hover:border-primary"
            onClick={onClick}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
