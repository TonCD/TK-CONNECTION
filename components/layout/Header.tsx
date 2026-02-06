'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl md:text-2xl text-dark tracking-tight">
          TK Connection
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-primary transition-colors">
            Trang chủ
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            Về chúng tôi
          </Link>
          <Link href="/services" className="hover:text-primary transition-colors">
            Dịch vụ
          </Link>
          <Link href="/case-studies" className="hover:text-primary transition-colors">
            Case Studies
          </Link>
          <Link href="/kol-koc" className="hover:text-primary transition-colors">
            KOL/KOC
          </Link>
          <Link href="/cooperation" className="hover:text-primary transition-colors">
            Hợp tác
          </Link>
          <Link href="/careers" className="hover:text-primary transition-colors">
            Tuyển dụng
          </Link>
          <Link
            href="/contact"
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full transition-all font-medium"
          >
            Liên hệ
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-dark"
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
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-6 py-4 space-y-3">
            <Link
              href="/"
              className="block py-2 text-dark hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Trang chủ
            </Link>
            <Link
              href="/about"
              className="block py-2 text-dark hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Về chúng tôi
            </Link>
            <Link
              href="/services"
              className="block py-2 text-dark hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Dịch vụ
            </Link>
            <Link
              href="/case-studies"
              className="block py-2 text-dark hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Case Studies
            </Link>
            <Link
              href="/kol-koc"
              className="block py-2 text-dark hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              KOL/KOC
            </Link>
            <Link
              href="/cooperation"
              className="block py-2 text-dark hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Hợp tác
            </Link>
            <Link
              href="/careers"
              className="block py-2 text-dark hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Tuyển dụng
            </Link>
            <Link
              href="/contact"
              className="block bg-primary text-white px-6 py-3 rounded-full text-center font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Liên hệ
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
