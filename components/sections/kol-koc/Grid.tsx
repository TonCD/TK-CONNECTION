'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import Image from 'next/image';
import FadeInView from '@/components/animation/FadeInView';
import Modal from './Modal';

interface KOL {
  id: string;
  name: string;
  followers: string;
  revenue: string;
  category: string;
  description: string;
  engagementRate: string;
  avgViews: string;
  imageUrl: string;
}

// Placeholder images from Unsplash
const kolImages: Record<string, string> = {
  noao: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800',
  huangan: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800',
  nguyen: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800',
  hannah: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800',
  thanh: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800',
};

export default function Grid() {
  const t = useTranslations('kolKocPage');
  const [selectedKOL, setSelectedKOL] = useState<KOL | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const kolIds = ['noao', 'huangan', 'nguyen', 'hannah', 'thanh'];

  const kols: KOL[] = kolIds.map((id) => ({
    id,
    name: t(`kols.${id}.name`),
    followers: t(`kols.${id}.followers`),
    revenue: t(`kols.${id}.revenue`),
    category: t(`kols.${id}.category`),
    description: t(`kols.${id}.description`),
    engagementRate: t(`kols.${id}.engagementRate`),
    avgViews: t(`kols.${id}.avgViews`),
    imageUrl: kolImages[id],
  }));

  const handleKOLClick = (kol: KOL) => {
    setSelectedKOL(kol);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedKOL(null), 300);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <FadeInView>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('featured.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('featured.subtitle')}
            </p>
          </div>
        </FadeInView>

        {/* KOL Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kols.map((kol, index) => (
            <FadeInView key={kol.id} delay={index * 0.1}>
              <div
                onClick={() => handleKOLClick(kol)}
                className="group relative bg-primary/5 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={kol.imageUrl}
                    alt={kol.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Plus button */}
                  <button
                    className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary hover:text-white"
                    aria-label="View details"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>

                  {/* Info at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">{kol.name}</h3>
                    <p className="text-sm text-gray-300 mb-3">{kol.category}</p>
                    
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <div className="text-primary font-bold">{kol.followers}</div>
                        <div className="text-xs text-gray-400">Followers</div>
                      </div>
                      <div>
                        <div className="text-primary font-bold">{kol.revenue}</div>
                        <div className="text-xs text-gray-400">Revenue</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal kol={selectedKOL} isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
}
