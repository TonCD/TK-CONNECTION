import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'TK Connection - Full-Chain E-commerce Operations',
  description: 'Official TikTok Shop certified service partner (TAP/TSP) in Vietnam. Supporting 40+ brands, generating 50M+ growth value.',
  keywords: ['TikTok Shop', 'E-commerce Vietnam', 'TAP', 'TSP', 'KOL', 'KOC', 'Cross-border'],
  icons: {
    icon: '/images/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
