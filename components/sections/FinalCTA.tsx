import Link from 'next/link'

export default function FinalCTA() {
  return (
    <section className="w-full bg-primary py-20 md:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-[1920px] mx-auto px-6 md:px-10 xl:px-16 2xl:px-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
            Đừng ngại ngùng,{" "}
            <span className="text-dark">hãy nói chuyện với chúng tôi</span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
            Sẵn sàng mở rộng thương hiệu của bạn tại thị trường Việt Nam? 
            Hãy để chúng tôi giúp bạn đạt được mục tiêu.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="group relative inline-flex items-center text-lg font-semibold transition-all"
            >
              <span className="bg-dark hover:bg-white hover:text-dark text-white inline-block pt-4 pb-4.5 px-8 rounded-full transition-all group-hover:px-10">
                Tư vấn ngay
              </span>
              <span className="bg-dark hover:bg-white text-white hover:text-dark inline-flex items-center justify-center w-12 h-12 rounded-full -ml-5 transition-all group-hover:ml-2">
                <svg viewBox="0 0 512 512" className="fill-current w-4 h-4">
                  <path d="M489.4 233.4L512 256l-22.6 22.6-128 128-22.6 22.6L293.5 384l22.6-22.6L389.5 288 32 288 0 288l0-64 32 0 357.5 0-73.4-73.4L293.5 128l45.3-45.3 22.6 22.6 128 128z" />
                </svg>
              </span>
            </Link>

            <Link
              href="/case-studies"
              className="text-white hover:text-dark font-semibold px-8 py-4 rounded-full border-2 border-white hover:bg-white transition-all"
            >
              Xem case studies
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-16 pt-12 border-t border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
              {/* Email */}
              <div className="flex flex-col items-center">
                <svg className="w-8 h-8 mb-3 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="font-semibold mb-1">Email</p>
                <a href="mailto:contact@tkconnection.vn" className="text-white/80 hover:text-white transition-colors">
                  contact@tkconnection.vn
                </a>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-center">
                <svg className="w-8 h-8 mb-3 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="font-semibold mb-1">Điện thoại</p>
                <a href="tel:+84123456789" className="text-white/80 hover:text-white transition-colors">
                  +84 123 456 789
                </a>
              </div>

              {/* Location */}
              <div className="flex flex-col items-center">
                <svg className="w-8 h-8 mb-3 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="font-semibold mb-1">Địa chỉ</p>
                <p className="text-white/80">
                  TP. Hồ Chí Minh, Việt Nam
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
