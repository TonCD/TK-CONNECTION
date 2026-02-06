'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="w-full pb-12 pt-24 md:pb-16 md:pt-32 xl:pb-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-10 xl:px-16 2xl:px-20">
        <div className="flex flex-wrap justify-center items-center">
          {/* Phone Mockup - Right on desktop, top on mobile */}
          <div className="order-1 h-full max-w-sm mx-auto w-9/12 sm:w-6/12 lg:order-2 lg:px-5 lg:ml-0 lg:w-5/12 xl:w-4/12 xl:max-w-md relative">
            {/* Social Media Icons - Right side */}
            <div className="hidden lg:flex flex-col gap-4 absolute -right-16 xl:-right-20 top-1/2 -translate-y-1/2 z-20">
              <SocialIcon href="https://tiktok.com" icon="tiktok" label="TikTok" />
              <SocialIcon href="https://linkedin.com" icon="linkedin" label="LinkedIn" />
              <SocialIcon href="https://instagram.com" icon="instagram" label="Instagram" />
              <SocialIcon href="https://youtube.com" icon="youtube" label="YouTube" />
              <SocialIcon href="https://facebook.com" icon="facebook" label="Facebook" />
              <SocialIcon href="https://twitter.com" icon="twitter" label="Twitter" />
            </div>

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
                      poster="/images/phone-04.webp"
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
                <span className="bg-black text-white inline-flex items-center px-6 py-3.5 rounded-full transition-all group-hover:px-8">
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

// Social Media Icon Component
function SocialIcon({ href, icon, label }: { href: string; icon: string; label: string }) {
  const icons: Record<string, JSX.Element> = {
    tiktok: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
      </svg>
    ),
    linkedin: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    instagram: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    youtube: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
    facebook: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    twitter: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    ),
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-11 h-11 bg-dark hover:bg-primary text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
      aria-label={label}
    >
      {icons[icon]}
    </a>
  )
}