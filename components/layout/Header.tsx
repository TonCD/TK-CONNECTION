'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

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
        <Link href="/" className="flex items-center gap-3">
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
          <NavLink href="/">Trang chủ</NavLink>
          <NavLink href="/about">Về chúng tôi</NavLink>
          <NavLink href="/services">Dịch vụ</NavLink>
          <NavLink href="/case-studies">Case Studies</NavLink>
          <NavLink href="/kol-koc">KOL/KOC</NavLink>
          <NavLink href="/cooperation">Hợp tác</NavLink>
          <NavLink href="/careers">Tuyển dụng</NavLink>
          
          <Link
            href="/contact"
            className="group relative inline-flex items-center text-sm font-semibold transition-all ml-4"
          >
            <span className="bg-primary hover:bg-primary/90 text-white inline-block pt-3 pb-3.5 px-6 rounded-full transition-all group-hover:px-8">
              Liên hệ
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
          <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>
            Trang chủ
          </MobileNavLink>
          <MobileNavLink href="/about" onClick={() => setIsMenuOpen(false)}>
            Về chúng tôi
          </MobileNavLink>
          <MobileNavLink href="/services" onClick={() => setIsMenuOpen(false)}>
            Dịch vụ
          </MobileNavLink>
          <MobileNavLink href="/case-studies" onClick={() => setIsMenuOpen(false)}>
            Case Studies
          </MobileNavLink>
          <MobileNavLink href="/kol-koc" onClick={() => setIsMenuOpen(false)}>
            KOL/KOC
          </MobileNavLink>
          <MobileNavLink href="/cooperation" onClick={() => setIsMenuOpen(false)}>
            Hợp tác
          </MobileNavLink>
          <MobileNavLink href="/careers" onClick={() => setIsMenuOpen(false)}>
            Tuyển dụng
          </MobileNavLink>
          <Link
            href="/contact"
            className="block bg-primary text-white px-6 py-3 rounded-full text-center font-semibold mt-4 hover:bg-primary/90 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Liên hệ
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
