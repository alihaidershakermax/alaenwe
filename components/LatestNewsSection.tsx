'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { ArrowRight, Loader2, Calendar, Newspaper } from 'lucide-react';
import { useRSSNews } from '@/lib/useRSSNews';
import { BlurText, SpotlightCard, Magnet } from './reactbits';
import { useState, useEffect } from 'react';

export default function LatestNewsSection() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const { news, loading, error } = useRSSNews(4);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-28 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden relative">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, #000 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <BlurText
            text={isRTL ? 'آخر الأخبار' : 'Latest News'}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4"
            delay={0}
            direction="bottom"
          />
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {isRTL ? 'تابع آخر الأخبار والفعاليات من جامعة العين العراقية' : 'Follow the latest news and events from Al-Ayen University'}
          </p>
        </div>

        {/* Content - only render after mount to prevent hydration mismatch */}
        {mounted && (
          <>
            {/* Loading State */}
            {loading && (
              <div className="flex flex-col items-center justify-center py-20 gap-4">
                <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
                <p className="text-gray-500">{isRTL ? 'جاري تحميل الأخبار...' : 'Loading news...'}</p>
              </div>
            )}

            {/* Error State */}
            {error && !loading && (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Newspaper className="w-10 h-10 text-gray-400" />
                </div>
                <p className="text-gray-500">{isRTL ? 'حدث خطأ في تحميل الأخبار' : 'Error loading news'}</p>
              </div>
            )}

            {/* News Grid */}
            {!loading && !error && news.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-14">
            {news.map((item, index) => (
              <SpotlightCard
                key={item.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:border-blue-300 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/10"
                spotlightColor="rgba(59, 130, 246, 0.1)"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => { (e.target as HTMLImageElement).src = '/images/university-hero.jpg'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4">
                    <span className="px-4 py-1.5 bg-blue-600 text-white text-xs font-bold rounded-full shadow-lg">
                      {isRTL ? 'أخبار الجامعة' : 'University News'}
                    </span>
                  </div>

                  {/* Date */}
                  <div className="absolute bottom-4 left-4 rtl:left-auto rtl:right-4 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-white/70" />
                    <span className="text-white/90 text-sm font-medium">{item.date}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-5">{item.excerpt}</p>
                  
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm group-hover:gap-3 transition-all"
                  >
                    <span>{isRTL ? 'اقرأ المزيد' : 'Read More'}</span>
                    <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                  </a>
                </div>
              </SpotlightCard>
            ))}
          </div>
            )}
          </>
        )}

        {/* Placeholder during SSR */}
        {!mounted && (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse" />
            <p className="text-gray-400">{isRTL ? 'جاري التحميل...' : 'Loading...'}</p>
          </div>
        )}

        {/* View All Button */}
        <div className="text-center">
          <Magnet strength={0.3}>
            <Link
              href={`/${locale}/news`}
              className="inline-flex items-center gap-3 px-10 py-5 bg-gray-900 text-white font-bold rounded-full hover:bg-blue-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105"
            >
              <span>{isRTL ? 'عرض جميع الأخبار' : 'View All News'}</span>
              <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
            </Link>
          </Magnet>
        </div>
      </div>
    </section>
  );
}
