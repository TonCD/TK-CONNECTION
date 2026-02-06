import Link from 'next/link'

export default function FinalCTA() {
  return (
    <section className="w-full bg-primary py-16 md:py-24 relative overflow-hidden">
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
            <span className="text-dark">hãy nói chuyện</span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
            Sẵn sàng mở rộng thương hiệu của bạn tại thị trường Việt Nam? 
          </p>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="group inline-flex items-center bg-dark hover:bg-white hover:text-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all"
          >
            Liên hệ ngay
            <svg viewBox="0 0 512 512" className="fill-current w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform">
              <path d="M489.4 233.4L512 256l-22.6 22.6-128 128-22.6 22.6L293.5 384l22.6-22.6L389.5 288 32 288 0 288l0-64 32 0 357.5 0-73.4-73.4L293.5 128l45.3-45.3 22.6 22.6 128 128z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
