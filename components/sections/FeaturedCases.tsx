import Link from 'next/link'

export default function FeaturedCases() {
  const cases = [
    {
      brand: "TULANDUT",
      category: "Mỹ phẩm & Chăm sóc da",
      image: "https://placehold.co/600x400/e0f2fe/0284c7?text=TULANDUT",
      stats: {
        revenue: "11.27M",
        period: "180 ngày",
        highlight: "Doanh thu gần 1 tháng đạt 3.15M"
      },
      tags: ["TikTok Shop", "KOL/KOC", "Livestream"],
      color: "primary"
    },
    {
      brand: "botare 植护",
      category: "Chăm sóc cá nhân & Vệ sinh",
      image: "https://placehold.co/600x400/d1fae5/059669?text=botare",
      stats: {
        revenue: "8M",
        period: "180 ngày",
        highlight: "70% doanh thu từ KOL/KOC"
      },
      tags: ["TikTok Shop", "Video ngắn", "Livestream"],
      color: "green"
    },
    {
      brand: "Mooekiss",
      category: "Mỹ phẩm & Trang điểm",
      image: "https://placehold.co/600x400/fce7f3/db2777?text=Mooekiss",
      stats: {
        revenue: "8.4M",
        period: "180 ngày",
        highlight: "80% doanh thu từ KOL/KOC"
      },
      tags: ["TikTok Shop", "KOL/KOC", "Best-seller"],
      color: "pink"
    }
  ]

  return (
    <section className="w-full bg-gray-50 py-16 md:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-10 xl:px-16 2xl:px-20">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-dark mb-4">
            Case Studies{" "}
            <span className="text-primary">nổi bật</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thành công của khách hàng là thành công của chúng tôi
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <CaseCard key={index} {...caseItem} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/case-studies"
            className="group relative inline-flex items-center text-lg font-semibold transition-all"
          >
            <span className="bg-dark hover:bg-primary text-white inline-block pt-4 pb-4.5 px-8 rounded-full transition-all group-hover:px-10">
              Xem tất cả case studies
            </span>
            <span className="bg-dark hover:bg-primary text-white inline-flex items-center justify-center w-12 h-12 rounded-full -ml-5 transition-all group-hover:ml-2">
              <svg viewBox="0 0 512 512" className="fill-current w-4 h-4">
                <path d="M489.4 233.4L512 256l-22.6 22.6-128 128-22.6 22.6L293.5 384l22.6-22.6L389.5 288 32 288 0 288l0-64 32 0 357.5 0-73.4-73.4L293.5 128l45.3-45.3 22.6 22.6 128 128z" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

function CaseCard({ brand, category, image, stats, tags, color }: {
  brand: string;
  category: string;
  image: string;
  stats: { revenue: string; period: string; highlight: string };
  tags: string[];
  color: string;
}) {
  return (
    <Link 
      href="/case-studies"
      className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-gray-200">
        <img 
          src={image} 
          alt={brand}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Overlay with Stats */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="text-white">
            <div className="text-3xl font-bold text-primary mb-1">
              {stats.revenue}
            </div>
            <p className="text-sm text-gray-300">{stats.period}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <p className="text-sm text-primary font-semibold mb-2">
          {category}
        </p>

        {/* Brand Name */}
        <h3 className="text-2xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
          {brand}
        </h3>

        {/* Highlight */}
        <p className="text-gray-600 text-sm mb-4">
          {stats.highlight}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span 
              key={idx}
              className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
