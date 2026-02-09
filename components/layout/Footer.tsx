import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-0 rounded-t-3xl mt-16">
      <div className="max-w-[1920px] mx-auto px-6 md:px-10 xl:px-16 2xl:px-20 pb-10 pt-16">
        {/* Top CTA block */}
        <div className="mb-16 rounded-3xl overflow-hidden grid lg:grid-cols-[1.1fr,1fr] bg-primary text-dark shadow-xl">
          <div className="px-8 md:px-12 py-12 md:py-16 flex flex-col justify-center gap-6">
            <div>
              <p className="uppercase tracking-[0.2em] text-sm md:text-xs mb-4">Hãy nói chuyện</p>
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight">
                Đừng ngần ngại,
                <br />
                hãy nói chuyện với TK Connection
              </h2>
            </div>
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center bg-dark text-white px-6 md:px-8 py-3.5 rounded-full font-semibold text-sm md:text-base hover:bg-black transition-all group"
              >
                Let&apos;s Chat
                <span className="ml-2 inline-flex items-center justify-center w-8 h-8 rounded-full bg-white text-dark group-hover:translate-x-0.5 transition-transform">
                  <svg viewBox="0 0 512 512" className="w-3 h-3 fill-current">
                    <path d="M489.4 233.4L512 256l-22.6 22.6-128 128-22.6 22.6L293.5 384l22.6-22.6L389.5 288 32 288 0 288l0-64 32 0 357.5 0-73.4-73.4L293.5 128l45.3-45.3 22.6 22.6 128 128z" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block relative min-h-[260px]">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
              alt="TK Connection team"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="lg:hidden px-8 pb-8">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
              alt="TK Connection team"
              width={1200}
              height={800}
              className="w-full h-56 md:h-72 object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Bottom footer content */}
        <div className="grid gap-10 lg:grid-cols-4 border-t border-gray-800 pt-10">
          {/* Newsletter & brand */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div>
              <p className="text-sm text-gray-400 mb-3">
                Nhận insight, case study và tin tức mới nhất từ TK Connection.
              </p>
              <form className="flex items-center bg-black rounded-full px-4 py-2 max-w-md">
                <input
                  type="email"
                  placeholder="Email của bạn"
                  className="flex-1 bg-transparent outline-none text-sm text-white placeholder:text-gray-500"
                />
                <button
                  type="submit"
                  className="ml-2 w-9 h-9 rounded-full bg-primary text-dark flex items-center justify-center text-sm font-semibold hover:translate-x-0.5 transition-transform"
                >
                  →
                </button>
              </form>
            </div>

            <div>
              <div className="text-lg font-semibold">TK Connection</div>
              <div className="mt-4 flex items-center gap-3 text-gray-400">
                <span className="text-sm">Theo dõi chúng tôi</span>
                <div className="flex gap-2">
                  {['T', 'In', 'Ig', 'Yt', 'Fb'].map((label) => (
                    <span
                      key={label}
                      className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-xs hover:bg-white hover:text-dark transition-colors"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Services links */}
          <div>
            <h4 className="font-semibold mb-4">Dịch vụ</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>TikTok Shop</li>
              <li>Marketing</li>
              <li>Sáng tạo</li>
              <li>Influencer</li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-semibold mb-4">Liên hệ</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: hello@tkconnection.vn</li>
              <li>TP. Hồ Chí Minh, Việt Nam</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-xs text-gray-500 flex flex-wrap items-center justify-between gap-4 border-t border-gray-800 pt-6">
          <span>© {new Date().getFullYear()} TK Connection. Bảo lưu mọi quyền.</span>
          <span>Website by TK Connection</span>
        </div>
      </div>
    </footer>
  )
}
