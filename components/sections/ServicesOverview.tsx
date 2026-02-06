import Link from 'next/link'

export default function ServicesOverview() {
  const services = [
    {
      number: "01",
      title: "Thương mại điện tử",
      description: "Vận hành toàn chuỗi TikTok Shop từ tư vấn, setup, đến vận hành gian hàng và tối ưu doanh số.",
      features: [
        "Tư vấn xuất khẩu thương hiệu",
        "Vận hành gian hàng trọn gói",
        "Vận hành tài khoản & video ngắn",
        "Vận hành livestream chuyên nghiệp"
      ],
      link: "/services#ecommerce"
    },
    {
      number: "02",
      title: "Marketing tích hợp",
      description: "Kết nối KOL/KOC, chiến dịch marketing đa kênh và xây dựng hình ảnh thương hiệu toàn diện.",
      features: [
        "Hợp tác 300-500 KOL/KOC mỗi tháng",
        "Lên kế hoạch chiến dịch marketing",
        "Kết nối đại sứ thương hiệu",
        "Truyền thông đa kênh"
      ],
      link: "/services#marketing"
    },
    {
      number: "03",
      title: "Triển khai offline",
      description: "Từ cửa hàng pop-up đến vận hành bán lẻ, mang thương hiệu đến gần hơn với khách hàng Việt Nam.",
      features: [
        "Xây dựng cửa hàng offline",
        "Mở cửa hàng pop-up",
        "Marketing tại điểm bán",
        "Tích hợp online-offline"
      ],
      link: "/services#offline"
    }
  ]

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-10 xl:px-16 2xl:px-20">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-dark mb-4">
            Dịch vụ{" "}
            <span className="text-primary">toàn diện</span> của chúng tôi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Giải pháp trọn gói từ online đến offline, hỗ trợ thương hiệu tăng trưởng bền vững
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="group inline-flex items-center bg-dark hover:bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg transition-all"
          >
            Xem tất cả dịch vụ
            <svg viewBox="0 0 512 512" className="fill-current w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform">
              <path d="M489.4 233.4L512 256l-22.6 22.6-128 128-22.6 22.6L293.5 384l22.6-22.6L389.5 288 32 288 0 288l0-64 32 0 357.5 0-73.4-73.4L293.5 128l45.3-45.3 22.6 22.6 128 128z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ number, title, description, features, link }: { 
  number: string; 
  title: string; 
  description: string; 
  features: string[];
  link: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-primary/30 transition-all duration-300 group">
      {/* Number Badge */}
      <div className="text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors mb-4">
        {number}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-dark mb-4 group-hover:text-primary transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mb-6 leading-relaxed">
        {description}
      </p>

      {/* Features List */}
      <ul className="space-y-3 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
            <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Learn More Link */}
      <Link 
        href={link}
        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors group/link"
      >
        Tìm hiểu thêm
        <svg viewBox="0 0 512 512" className="fill-current w-3 h-3 group-hover/link:translate-x-1 transition-transform">
          <path d="M489.4 233.4L512 256l-22.6 22.6-128 128-22.6 22.6L293.5 384l22.6-22.6L389.5 288 32 288 0 288l0-64 32 0 357.5 0-73.4-73.4L293.5 128l45.3-45.3 22.6 22.6 128 128z" />
        </svg>
      </Link>
    </div>
  )
}
