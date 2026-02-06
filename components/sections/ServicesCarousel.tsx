'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const services = [
    {
      id: 1,
      title: "Thương mại điện tử",
      description: "Vận hành toàn chuỗi TikTok Shop từ setup đến tối ưu doanh số, bao gồm quản lý gian hàng, video ngắn và livestream chuyên nghiệp.",
      features: [
        "Tư vấn xuất khẩu go-global",
        "Vận hành gian hàng trọn gói",
        "Sản xuất video ngắn & livestream",
        "Tối ưu chuyển đổi & doanh số"
      ],
      icon: "📱"
    },
    {
      id: 2,
      title: "Marketing & KOL/KOC",
      description: "Kết nối 300-500 KOL/KOC mỗi tháng, chiến dịch marketing đa kênh và xây dựng hình ảnh thương hiệu toàn diện tại Việt Nam.",
      features: [
        "Hợp tác KOL/KOC quy mô lớn",
        "Chiến dịch marketing đa kênh",
        "Kết nối đại sứ thương hiệu",
        "Truyền thông tích hợp"
      ],
      icon: "🎯"
    },
    {
      id: 3,
      title: "Vận hành bản địa",
      description: "Đội ngũ tại TP.HCM với 20+ host, studio livestream chuyên nghiệp, am hiểu sâu thị trường và hành vi tiêu dùng Việt Nam.",
      features: [
        "Studio livestream chuyên nghiệp",
        "20+ MC/Host người Việt",
        "Localization strategy",
        "Vận hành 24/7"
      ],
      icon: "🏢"
    },
    {
      id: 4,
      title: "Triển khai Offline",
      description: "Từ cửa hàng pop-up đến vận hành bán lẻ, tích hợp hoàn hảo giữa online và offline để tối đa hóa tiếp cận khách hàng.",
      features: [
        "Xây dựng cửa hàng offline",
        "Pop-up store events",
        "Marketing tại điểm bán",
        "Tích hợp O2O"
      ],
      icon: "🏪"
    }
  ]

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length)
  }

  return (
    <section className=\"w-full bg-white py-16 md:py-24\">
      <div className=\"max-w-[1920px] mx-auto px-6 md:px-10 xl:px-16 2xl:px-20\">
        {/* Section Header */}
        <div className=\"flex items-center justify-between mb-12\">
          <div>
            <h2 className=\"text-3xl md:text-4xl xl:text-5xl font-bold text-dark mb-4\">
              Dịch vụ{\" \"}
              <span className=\"text-primary\">toàn diện</span> của chúng tôi
            </h2>
            <p className=\"text-lg text-gray-600\">
              Giải pháp trọn gói từ online đến offline
            </p>
          </div>
          
          <button
            onClick={handleNext}
            className=\"hidden md:flex items-center justify-center w-14 h-14 bg-dark hover:bg-primary text-white rounded-full transition-all group\"
            aria-label=\"Next service\"
          >
            <svg viewBox=\"0 0 512 512\" className=\"fill-current w-5 h-5 group-hover:translate-x-1 transition-transform\">
              <path d=\"M489.4 233.4L512 256l-22.6 22.6-128 128-22.6 22.6L293.5 384l22.6-22.6L389.5 288 32 288 0 288l0-64 32 0 357.5 0-73.4-73.4L293.5 128l45.3-45.3 22.6 22.6 128 128z\" />
            </svg>
          </button>
        </div>

        {/* Services Carousel */}
        <div className=\"relative overflow-hidden\">
          <div 
            className=\"flex transition-transform duration-500 ease-out\"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {services.map((service) => (
              <div 
                key={service.id}
                className=\"min-w-full grid grid-cols-1 lg:grid-cols-3 gap-8\"
              >
                {/* Main Card */}
                <div className=\"lg:col-span-2 bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 md:p-12\">
                  <div className=\"text-6xl mb-6\">{service.icon}</div>
                  <h3 className=\"text-3xl md:text-4xl font-bold text-dark mb-4\">
                    {service.title}
                  </h3>
                  <p className=\"text-lg text-gray-700 mb-8 leading-relaxed\">
                    {service.description}
                  </p>
                  
                  <Link
                    href=\"/services\"
                    className=\"group inline-flex items-center bg-dark hover:bg-primary text-white px-6 py-3.5 rounded-full font-semibold transition-all\"
                  >
                    Tìm hiểu thêm
                    <svg viewBox=\"0 0 512 512\" className=\"fill-current w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform\">
                      <path d=\"M489.4 233.4L512 256l-22.6 22.6-128 128-22.6 22.6L293.5 384l22.6-22.6L389.5 288 32 288 0 288l0-64 32 0 357.5 0-73.4-73.4L293.5 128l45.3-45.3 22.6 22.6 128 128z\" />
                    </svg>
                  </Link>
                </div>

                {/* Features List */}
                <div className=\"bg-white border-2 border-gray-200 rounded-3xl p-8\">
                  <h4 className=\"text-xl font-bold text-dark mb-6\">Tính năng chính</h4>
                  <ul className=\"space-y-4\">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className=\"flex items-start gap-3\">
                        <svg className=\"w-6 h-6 text-primary flex-shrink-0 mt-0.5\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">
                          <path strokeLinecap=\"round\" strokeLinejoin=\"round\" strokeWidth={2} d=\"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z\" />
                        </svg>
                        <span className=\"text-gray-700 leading-relaxed\">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className=\"flex md:hidden items-center justify-between mt-8\">
          <div className=\"flex gap-2\">
            {services.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex ? 'bg-primary w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={handleNext}
            className=\"flex items-center justify-center w-12 h-12 bg-dark hover:bg-primary text-white rounded-full transition-all\"
            aria-label=\"Next service\"
          >
            <svg viewBox=\"0 0 512 512\" className=\"fill-current w-4 h-4\">
              <path d=\"M489.4 233.4L512 256l-22.6 22.6-128 128-22.6 22.6L293.5 384l22.6-22.6L389.5 288 32 288 0 288l0-64 32 0 357.5 0-73.4-73.4L293.5 128l45.3-45.3 22.6 22.6 128 128z\" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
