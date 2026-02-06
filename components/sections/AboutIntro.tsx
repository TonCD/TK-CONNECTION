import Link from 'next/link'

export default function AboutIntro() {
  return (
    <section className="w-full bg-gray-50 py-16 md:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-10 xl:px-16 2xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://placehold.co/800x600/e5e7eb/64748b?text=Team+Photo" 
                alt="TK Connection Team"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <div className="lg:pl-8">
              <p className="text-primary font-semibold mb-4">Về chúng tôi</p>
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-dark mb-6 leading-tight">
                Chúng tôi kết hợp{" "}
                <span className="text-primary">sáng tạo</span> và{" "}
                <span className="text-primary">hiệu suất</span>
              </h2>
              
              <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                <p>
                  TK Connection là đơn vị vận hành tích hợp toàn chuỗi thương mại điện tử tại Việt Nam, 
                  là đối tác dịch vụ được TikTok Shop chứng nhận chính thức (TAP/TSP).
                </p>
                <p>
                  Được thành lập bởi các đối tác đến từ ByteDance, Alibaba và các tập đoàn lớn trong ngành. 
                  Chúng tôi kết hợp tầm nhìn thương mại điện tử xuyên biên giới với kinh nghiệm vận hành 
                  bản địa để đạt được tăng trưởng bền vững.
                </p>
                <p className="font-semibold text-dark">
                  Đã hỗ trợ hơn 40+ thương hiệu mở rộng thị trường với tổng GMV hằng năm lên tới 500 triệu RMB.
                </p>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-dark hover:bg-primary text-white px-8 py-4 rounded-full font-semibold transition-all group"
              >
                Tìm hiểu thêm
                <svg viewBox="0 0 512 512" className="fill-current w-4 h-4 group-hover:translate-x-1 transition-transform">
                  <path d="M489.4 233.4L512 256l-22.6 22.6-128 128-22.6 22.6L293.5 384l22.6-22.6L389.5 288 32 288 0 288l0-64 32 0 357.5 0-73.4-73.4L293.5 128l45.3-45.3 22.6 22.6 128 128z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
