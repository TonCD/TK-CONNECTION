'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="w-full pb-12 pt-24 md:pb-16 md:pt-32 xl:pb-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-10 xl:px-16 2xl:px-20">
        <div className="flex flex-wrap justify-center items-center">
          {/* Phone Mockup - Right on desktop, top on mobile */}
          <div className="order-1 h-full max-w-sm mx-auto w-9/12 sm:w-6/12 lg:order-2 lg:px-5 lg:ml-0 lg:w-5/12 xl:w-4/12 xl:max-w-md">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative overflow-hidden w-full" style={{ paddingTop: '143.25%' }}>
                {/* Phone mockup image */}
                <img
                  src="/images/phone-04.webp"
                  alt="Phone mockup"
                  className="absolute top-0 left-0 w-full h-full object-contain z-10"
                />
              </div>
              
              {/* Video Container - positioned inside phone screen */}
              <div className="absolute top-0 left-0 w-full h-full z-0">
                <div className="absolute top-[10%] left-[15%] w-[66%] h-[85%]">
                  <div className="relative w-full h-full rounded-[5%] overflow-hidden bg-black">
                    {/* 
                      Video options (chọn 1 trong 3):
                      
                      1. MP4 Video file:
                    */}
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                      poster="/videos/thumbnail.jpg"
                    >
                      <source src="/videos/hero-video.mp4" type="video/mp4" />
                    </video>

                    {/* 
                      2. YouTube embed (thay thế video tag bằng iframe này):
                      <iframe
                        src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID&controls=0&showinfo=0&rel=0&modestbranding=1"
                        className="w-full h-full"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                      />
                    */}

                    {/* 
                      3. TikTok embed (thay thế video tag bằng iframe này):
                      <iframe
                        src="https://www.tiktok.com/embed/VIDEO_ID"
                        className="w-full h-full"
                        allowFullScreen
                        scrolling="no"
                        allow="encrypted-media;"
                      />
                    */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content - Left on desktop, bottom on mobile */}
          <div className="order-2 w-full pt-5 space-y-4 lg:order-1 lg:pt-0 lg:w-7/12 lg:pr-10 xl:w-8/12 xl:space-y-5">
            {/* Small title */}
            <div className="font-medium tracking-tight leading-tight text-base text-dark">
              TK Connection
            </div>

            {/* Main Headline */}
            <h1 className="relative text-dark text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight leading-[1.1]">
              Đơn vị vận hành tích hợp{' '}
              <span className="relative inline-block">
                <span className="relative z-10">toàn chuỗi</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-primary/30 -z-0"></span>
              </span>
              {' '}thương mại điện tử tại Việt Nam
            </h1>

            {/* Subheadline */}
            <p className="text-gray text-base md:text-lg xl:text-xl max-w-2xl leading-relaxed">
              Đối tác dịch vụ được TikTok Shop chứng nhận chính thức (TAP/TSP)
              <br />
              Đồng hành cùng thương hiệu thâm nhập thị trường Việt Nam, thúc đẩy tăng trưởng doanh số và uy tín thương hiệu song song
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 text-sm md:text-base text-gray pt-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-dark">40+</span>
                <span>thương hiệu đã hợp tác</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-dark">50M+</span>
                <span>giá trị tăng trưởng</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-dark">8.4M</span>
                <span>doanh thu cao nhất</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center pt-5 gap-4">
              <Link
                href="/contact"
                className="group relative inline-flex items-center text-sm lg:text-base font-medium transition-all"
              >
                <span className="bg-black text-white inline-block pt-3.5 pb-4 px-6 rounded-full transition-all group-hover:px-8">
                  Tư vấn ngay
                </span>
                <span className="bg-black text-white inline-flex items-center justify-center w-11 h-11 rounded-full -ml-5 transition-all group-hover:ml-2">
                  <svg viewBox="0 0 512 512" className="fill-current w-3 h-3">
                    <path d="M489.4 233.4L512 256l-22.6 22.6-128 128-22.6 22.6L293.5 384l22.6-22.6L389.5 288 32 288 0 288l0-64 32 0 357.5 0-73.4-73.4L293.5 128l45.3-45.3 22.6 22.6 128 128z" />
                  </svg>
                </span>
              </Link>

              <Link
                href="/case-studies"
                className="group inline-flex items-center text-sm lg:text-base font-medium text-dark transition-colors hover:text-primary"
              >
                Xem case thành công
                <svg viewBox="0 0 512 512" className="fill-current w-3 h-3 mt-1 ml-2 transition-transform group-hover:translate-x-1">
                  <path d="M489.4 233.4L512 256l-22.6 22.6-128 128-22.6 22.6L293.5 384l22.6-22.6L389.5 288 32 288 0 288l0-64 32 0 357.5 0-73.4-73.4L293.5 128l45.3-45.3 22.6 22.6 128 128z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-20 h-20 opacity-20 pointer-events-none hidden xl:block">
        <svg viewBox="0 0 100 100" className="text-primary">
          <path d="M 10,50 Q 25,10 50,20 T 90,50" stroke="currentColor" strokeWidth="3" fill="none" />
        </svg>
      </div>
    </section>
  )
}