'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect } from 'react';

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

interface ModalProps {
  kol: KOL | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ kol, isOpen, onClose }: ModalProps) {
  const t = useTranslations('kolKocPage');

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !kol) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative bg-black text-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-primary/20 hover:bg-primary/30 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
          {/* Left side - Image */}
          <div className="lg:col-span-2 relative h-64 lg:h-auto min-h-[400px]">
            <Image
              src={kol.imageUrl}
              alt={kol.name}
              fill
              className="object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r" />
            
            {/* Name on image */}
            <div className="absolute bottom-6 left-6 right-6">
              <h2 className="text-3xl font-bold mb-2">
                Meet<br />
                <span className="text-primary">{kol.name}</span>
              </h2>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:col-span-3 p-8 lg:p-12 overflow-y-auto max-h-[calc(90vh-2rem)]">
            {/* Expertise */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-primary mb-3">
                {t('modal.responsibility')}
              </h3>
              <p className="text-base text-gray-300">
                {kol.category}
              </p>
            </div>

            {/* Highlights */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-primary mb-3">
                {t('modal.favorite')}
              </h3>
              <p className="text-base text-gray-300 leading-relaxed">
                {kol.description}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
              <div>
                <div className="text-2xl font-bold text-primary mb-1">
                  {kol.followers}
                </div>
                <div className="text-sm text-gray-400">Followers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">
                  {kol.revenue}
                </div>
                <div className="text-sm text-gray-400">Revenue</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">
                  {kol.engagementRate}
                </div>
                <div className="text-sm text-gray-400">
                  {t('modal.engagement')}
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">
                  {kol.avgViews}
                </div>
                <div className="text-sm text-gray-400">
                  {t('modal.avgViews')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
