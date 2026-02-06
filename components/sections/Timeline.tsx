'use client'

export default function Timeline() {
  const milestones = [
    {
      year: "2022",
      title: "Thành lập công ty",
      description: "Trở thành MCN chủ lực của Douyin E-commerce, Xiaohongshu và Video Channel. Ký hợp đồng với nhiều KOL/KOC nổi tiếng, mở rộng hoạt động livestream thương mại."
    },
    {
      year: "2023-2024",
      title: "Mở rộng dịch vụ thương hiệu",
      description: "Bao gồm đại diện người nổi tiếng, chiến dịch thương mại điện tử, vận hành livestream thuê ngoài. Đạt GMV hằng năm 500 triệu RMB, xây dựng nền tảng vận hành và nguồn lực vững chắc."
    },
    {
      year: "2024-2025",
      title: "Tập trung thị trường Việt Nam",
      description: "Trở thành đối tác dịch vụ được TikTok Shop chứng nhận (TAP/TSP). Triển khai dịch vụ toàn chuỗi tại thị trường quốc tế, hỗ trợ 40+ thương hiệu mở rộng ra nước ngoài, tạo thêm 50 triệu giá trị tăng trưởng."
    }
  ]

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-10 xl:px-16 2xl:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-dark mb-4">
            Hành trình phát triển
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Từ những bước đầu tiên đến việc trở thành đối tác chiến lược của TikTok Shop tại Việt Nam
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative pl-8 md:pl-12 border-l-4 border-primary/30 hover:border-primary transition-colors">
                <div className="absolute -left-[13px] top-0 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                
                <div className="pb-8">
                  <div className="inline-block bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold mb-3">
                    {milestone.year}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-dark mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
