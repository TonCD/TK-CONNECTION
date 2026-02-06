'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function AboutShowcase() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-10 xl:px-16 2xl:px-20">
        {/* Top Heading */}
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-center mb-16">
          Xây dựng thương hiệu tham vọng với{" "}
          <span className="text-primary">TikTok Shop, Marketing, KOL/KOC và Vận hành</span>
        </h2>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Left - Team Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
              alt="TK Connection Team"
              width={800}
              height={600}
              className="w-full h-[400px] lg:h-[500px] object-cover"
            />
          </div>

          {/* Right - Content */}
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              Kết hợp sáng tạo và hiệu suất
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Không có nhiều agency hiểu về hiệu suất marketing và cũng không có nhiều agency hiểu về sáng tạo nội dung.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed font-semibold">
              Đây là điểm khác biệt của chúng tôi.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Dù chúng tôi đang giúp bạn phát triển cộng đồng mạng xã hội, tối ưu Paid Media, sản xuất nội dung sáng tạo hay chạy chiến dịch Influencer - chúng tôi tạo ra các chiến lược dựa trên thương hiệu, mục tiêu kinh doanh của bạn, với sự hỗ trợ từ dữ liệu và insight.
            </p>
            <Link
              href="/about"
              className="group inline-flex items-center bg-dark hover:bg-primary text-white px-8 py-4 rounded-full font-semibold transition-all w-fit"
            >
              Về chúng tôi
              <svg viewBox="0 0 512 512" className="fill-current w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform">
                <path d="M489.4 233.4L512 256l-22.6 22.6-128 128-22.6 22.6L293.5 384l22.6-22.6L389.5 288 32 288 0 288l0-64 32 0 357.5 0-73.4-73.4L293.5 128l45.3-45.3 22.6 22.6 128 128z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom - Awards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Awards Text */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              Đạt nhiều giải thưởng
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Chúng tôi biết giải thưởng không phải là tất cả.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Nhưng chúng tôi tự hào về những gì đạt được và chất lượng công việc mà đội ngũ của chúng tôi tạo ra cho khách hàng.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 text-lg">Best E-commerce Agency (2023, 2024)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 text-lg">Top TikTok Shop Service Provider (2025)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 text-lg">Best Influencer Marketing Campaign (2024)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 text-lg">Excellence in Integrated Marketing (2023)</span>
              </li>
            </ul>
          </div>

          {/* Right - Award Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
              alt="Awards and Recognition"
              width={800}
              height={600}
              className="w-full h-[400px] lg:h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
