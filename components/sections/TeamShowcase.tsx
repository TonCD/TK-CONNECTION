'use client'

import Image from 'next/image'

export default function TeamShowcase() {
  const founders = [
    {
      name: "Đội ngũ sáng lập",
      role: "ByteDance & Alibaba Alumni",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
    },
    {
      name: "Chuyên gia E-commerce",
      role: "TikTok Shop Specialist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
    },
    {
      name: "Marketing Lead",
      role: "KOL/KOC Expert",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80"
    },
    {
      name: "Chuyên gia",
      role: "Vận hành bản địa",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
    }
  ]

  return (
    <section className="w-full bg-gray-50 py-16 md:py-24">
      <div className="max-w-[1920px] mx-auto px-6 md:px-10 xl:px-16 2xl:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-dark mb-4">
            Đội ngũ chuyên gia
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Được thành lập bởi các đối tác đến từ ByteDance, Alibaba và các tập đoàn lớn trong ngành
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {founders.map((member, index) => (
            <div 
              key={index}
              className="group bg-primary/5 rounded-3xl overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="relative aspect-[3/4] bg-primary/10">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-dark mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
