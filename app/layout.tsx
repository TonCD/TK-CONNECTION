import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'TK Connection - Đơn vị vận hành tích hợp toàn chuỗi thương mại điện tử',
  description: 'Đối tác dịch vụ được TikTok Shop chứng nhận chính thức (TAP/TSP) tại Việt Nam. Hỗ trợ 40+ thương hiệu xuất khẩu, tạo ra 50 triệu+ giá trị tăng trưởng.',
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
  return (
    <html lang="vi">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
