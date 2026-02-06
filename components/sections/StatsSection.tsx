'use client'

import { useEffect, useRef, useState } from 'react'

export default function StatsSection() {
  return (
    <section className="w-full bg-dark text-white py-16 md:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-10 xl:px-16 2xl:px-20">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4">
            Thành tích nổi bật
          </h2>
          <p className="text-xl text-gray-300">
            Con số minh chứng cho năng lực vận hành
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <StatCard 
            value="40+" 
            label="Thương hiệu đã hợp tác"
            description="Đồng hành cùng thương hiệu mở rộng thị trường"
          />
          <StatCard 
            value="50M+" 
            label="Giá trị tăng trưởng"
            description="Tổng giá trị tạo ra cho đối tác"
          />
          <StatCard 
            value="8.4M" 
            label="Doanh thu cao nhất"
            description="Trong 180 ngày cho một thương hiệu"
          />
        </div>

        {/* Additional Stats */}
        <div className="mt-16 pt-16 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <MiniStat value="500M" label="GMV hằng năm" unit="RMB" />
            <MiniStat value="300-500" label="KOL/KOC" unit="mỗi tháng" />
            <MiniStat value="80%" label="Doanh số từ KOL/KOC" unit="cao nhất" />
            <MiniStat value="3,194" label="Sản phẩm bán ra" unit="trong 48h" />
          </div>
        </div>
      </div>
    </section>
  )
}

function StatCard({ value, label, description }: { value: string; label: string; description: string }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div 
      ref={ref}
      className={`text-center transform transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="text-5xl md:text-6xl xl:text-7xl font-bold text-primary mb-4">
        {value}
      </div>
      <h3 className="text-xl md:text-2xl font-semibold mb-2">
        {label}
      </h3>
      <p className="text-gray-400">
        {description}
      </p>
    </div>
  )
}

function MiniStat({ value, label, unit }: { value: string; label: string; unit: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
        {value}
      </div>
      <p className="text-sm text-gray-300">{label}</p>
      <p className="text-xs text-gray-500">{unit}</p>
    </div>
  )
}
