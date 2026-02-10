'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import FadeInView from '@/components/animation/FadeInView';

export default function Jobs() {
  const t = useTranslations('careersPage');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  const jobs = [
    {
      id: 'tiktok-ecommerce',
      title: t('jobs.0.title'),
      category: t('jobs.0.category'),
      categoryKey: 'ecommerce',
      location: t('jobs.0.location'),
      type: t('jobs.0.type'),
      description: t('jobs.0.description'),
      jobIndex: 0,
    },
    {
      id: 'short-video',
      title: t('jobs.1.title'),
      category: t('jobs.1.category'),
      categoryKey: 'content',
      location: t('jobs.1.location'),
      type: t('jobs.1.type'),
      description: t('jobs.1.description'),
      jobIndex: 1,
    },
    {
      id: 'livestream-host',
      title: t('jobs.2.title'),
      category: t('jobs.2.category'),
      categoryKey: 'operations',
      location: t('jobs.2.location'),
      type: t('jobs.2.type'),
      description: t('jobs.2.description'),
      jobIndex: 2,
    },
    {
      id: 'kol-manager',
      title: t('jobs.3.title'),
      category: t('jobs.3.category'),
      categoryKey: 'content',
      location: t('jobs.3.location'),
      type: t('jobs.3.type'),
      description: t('jobs.3.description'),
      jobIndex: 3,
    },
  ];

  const categories = [
    { key: 'all', label: t('categories.all') },
    { key: 'ecommerce', label: t('categories.ecommerce') },
    { key: 'content', label: t('categories.content') },
    { key: 'operations', label: t('categories.operations') },
  ];

  const filteredJobs = activeCategory === 'all' 
    ? jobs 
    : jobs.filter(job => job.categoryKey === activeCategory);

  return (
    <section id="jobs-section" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-[1920px] mx-auto px-6 md:px-10 xl:px-16 2xl:px-20">
        <FadeInView>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4">
              {t('jobsSection.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('jobsSection.subtitle')}
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeCategory === category.key
                    ? 'bg-primary text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Jobs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job, index) => (
              <FadeInView key={job.id} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all h-full flex flex-col group">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                      {job.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                    {job.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
                    {job.description}
                  </p>
                  
                  <div className="space-y-2 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setSelectedJob(job.jobIndex)}
                    className="inline-flex items-center justify-center gap-2 bg-gray-100 text-dark px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-all group-hover:gap-3"
                  >
                    {t('jobsSection.viewDetails')}
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </FadeInView>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No positions available in this category at the moment.</p>
            </div>
          )}
        </FadeInView>
      </div>

      {/* Job Details Modal */}
      {selectedJob !== null && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedJob(null)}>
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between z-10">
              <div>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-2">
                  {t(`jobs.${selectedJob}.category`)}
                </span>
                <h2 className="text-3xl font-bold text-dark">{t(`jobs.${selectedJob}.title`)}</h2>
              </div>
              <button
                onClick={() => setSelectedJob(null)}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-8 space-y-8">
              {/* Job Info */}
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{t(`jobs.${selectedJob}.location`)}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{t(`jobs.${selectedJob}.type`)}</span>
                </div>
              </div>

              {/* Description */}
              <div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {t(`jobs.${selectedJob}.description`)}
                </p>
              </div>

              {/* Responsibilities */}
              <div>
                <h3 className="text-2xl font-bold text-dark mb-4">{t('jobsSection.responsibilities')}</h3>
                <ul className="space-y-3">
                  {[0, 1, 2, 3].map((i) => {
                    try {
                      const resp = t(`jobs.${selectedJob}.responsibilities.${i}`);
                      return (
                        <li key={i} className="flex items-start gap-3">
                          <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-gray-700">{resp}</span>
                        </li>
                      );
                    } catch {
                      return null;
                    }
                  })}
                </ul>
              </div>

              {/* Requirements */}
              <div>
                <h3 className="text-2xl font-bold text-dark mb-4">{t('jobsSection.requirements')}</h3>
                <ul className="space-y-3">
                  {[0, 1, 2, 3].map((i) => {
                    try {
                      const req = t(`jobs.${selectedJob}.requirements.${i}`);
                      return (
                        <li key={i} className="flex items-start gap-3">
                          <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-gray-700">{req}</span>
                        </li>
                      );
                    } catch {
                      return null;
                    }
                  })}
                </ul>
              </div>

              {/* Apply Button */}
              <div className="pt-6">
                <a
                  href={`mailto:vietnam@tkconnection.vn?subject=Application for ${t(`jobs.${selectedJob}.title`)}`}
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl w-full md:w-auto"
                >
                  {t('jobsSection.apply')}
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
