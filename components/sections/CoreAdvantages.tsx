export default function CoreAdvantages() {
  const advantages = [
    {
      title: "Bảo chứng năng lực chính thức",
      description: "Được TikTok Shop chứng nhận chính thức hai hạng mục (TAP/TSP), đồng thời sở hữu đầy đủ pháp lý vận hành hợp chuẩn tại Việt Nam.",
      icon: "certificate"
    },
    {
      title: "Hệ sinh thái dịch vụ toàn chuỗi",
      description: "Cung cấp giải pháp trọn gói từ tư vấn xuất khẩu thương hiệu, thành lập pháp nhân bản địa, vận hành cửa hàng, đến triển khai offline.",
      icon: "ecosystem"
    },
    {
      title: "Năng lực vận hành bản địa",
      description: "Đặt trụ sở tại TP.HCM, đội ngũ vận hành chuyên nghiệp, hệ thống studio livestream và hơn 20 host bản địa.",
      icon: "local"
    },
    {
      title: "Hệ sinh thái tài nguyên mạnh mẽ",
      description: "Sở hữu nguồn tài nguyên 300–500 KOL/KOC Việt Nam mỗi tháng, mạng lưới người nổi tiếng toàn cầu cùng 100+ thương hiệu đã hợp tác.",
      icon: "network"
    }
  ]

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-10 xl:px-16 2xl:px-20">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-dark mb-4">
            Lợi thế cốt lõi của{" "}
            <span className="text-primary">TK Connection</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Đối tác tin cậy cho thương hiệu phát triển bền vững tại thị trường Việt Nam
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          {advantages.map((advantage, index) => (
            <AdvantageCard key={index} {...advantage} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function AdvantageCard({ title, description, icon, index }: { title: string; description: string; icon: string; index: number }) {
  const icons: Record<string, JSX.Element> = {
    certificate: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    ecosystem: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    local: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    network: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }

  return (
    <div 
      className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-300 group"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Icon */}
      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
        {icons[icon]}
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  )
}
