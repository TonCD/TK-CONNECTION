import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AboutIntro from '@/components/sections/AboutIntro'
import CoreAdvantages from '@/components/sections/CoreAdvantages'
import StatsSection from '@/components/sections/StatsSection'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-br from-primary/5 to-primary/10 py-16 md:py-24">
          <div className="max-w-[1920px] mx-auto px-6 md:px-10 xl:px-16 2xl:px-20">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-dark mb-6">
                Về <span className="text-primary">TK Connection</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Đối tác dịch vụ được TikTok Shop chứng nhận chính thức (TAP/TSP), 
                chuyên cung cấp giải pháp thương mại điện tử toàn chuỗi tại Việt Nam
              </p>
            </div>
          </div>
        </section>

        <AboutIntro />
        <CoreAdvantages />
        <StatsSection />
        
        {/* Company Values */}
        <section className="w-full bg-gray-50 py-16 md:py-24">
          <div className="max-w-[1920px] mx-auto px-6 md:px-10 xl:px-16 2xl:px-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-dark mb-4">
                Triết lý cốt lõi
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-dark mb-4">Khách hàng là trên hết</h3>
                <p className="text-gray-600 leading-relaxed">
                  Luôn giữ tư duy của bên cung cấp dịch vụ, lấy lợi ích khách hàng làm trung tâm. 
                  Ưu tiên tạo giá trị cho khách hàng trước, từ đó thúc đẩy sự phát triển của chính mình.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-dark mb-4">Dịch vụ chuyên nghiệp</h3>
                <p className="text-gray-600 leading-relaxed">
                  Duy trì thái độ khiêm tốn và chuyên nghiệp, dựa trên kiến thức ngành dẫn đầu 
                  và tinh thần phục vụ tận tâm để cung cấp giải pháp tùy chỉnh cho khách hàng.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
