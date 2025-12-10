'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Search, Newspaper, Calendar, ArrowRight, ExternalLink, Loader2 } from 'lucide-react';
import { useRSSNews } from '@/lib/useRSSNews';

export default function NewsPage() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const [searchQuery, setSearchQuery] = useState('');
  const { news, loading, error } = useRSSNews();

  const filteredNews = news.filter((item) => {
    if (searchQuery === '') return true;
    return item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
           item.content.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const featuredNews = filteredNews[0];
  const otherNews = filteredNews.slice(1);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-gray-900" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full mb-6 border border-blue-500/30">
              <Newspaper className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-semibold text-blue-300">{isRTL ? 'آخر الأخبار' : 'Latest News'}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              {isRTL ? 'أخبار وفعاليات الجامعة' : 'University News & Events'}
            </h1>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-6" />

            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {isRTL
                ? 'تابع آخر الأخبار والفعاليات والإنجازات من جامعة العين العراقية'
                : 'Follow the latest news, events and achievements from Al-Ayen Iraqi University'}
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-gray-50 shadow-sm sticky top-0 z-40 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 rtl:left-auto rtl:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={isRTL ? 'ابحث في الأخبار...' : 'Search news...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 rtl:pl-4 rtl:pr-12 pr-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* News Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Loading State */}
          {loading && (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Newspaper className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{isRTL ? 'حدث خطأ' : 'Error'}</h3>
              <p className="text-gray-600">{isRTL ? 'حدث خطأ في تحميل الأخبار' : 'Error loading news'}</p>
            </div>
          )}

          {!loading && !error && filteredNews.length > 0 && (
            <>
              {/* Featured News */}
              {featuredNews && (
                <div className="mb-12">
                  <a href={featuredNews.link} target="_blank" rel="noopener noreferrer" className="group block">
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100">
                      <div className="grid md:grid-cols-2">
                        <div className="relative h-64 md:h-auto bg-gray-100">
                          <img
                            src={featuredNews.image}
                            alt={featuredNews.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            onError={(e) => { (e.target as HTMLImageElement).src = '/images/university-hero.jpg'; }}
                          />
                          <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4">
                            <span className="px-4 py-2 bg-blue-600 text-white font-bold rounded-full text-sm">
                              {isRTL ? 'خبر مميز' : 'Featured'}
                            </span>
                          </div>
                        </div>
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                          <div className="flex items-center gap-3 mb-4">
                            <Calendar className="w-5 h-5 text-gray-400" />
                            <span className="text-gray-500">{featuredNews.date}</span>
                          </div>
                          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                            {featuredNews.title}
                          </h2>
                          <p className="text-gray-600 mb-6 line-clamp-3">{featuredNews.excerpt}</p>
                          <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-4 transition-all">
                            <span>{isRTL ? 'اقرأ المزيد' : 'Read More'}</span>
                            <ExternalLink className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              )}

              {/* Other News Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherNews.map((item) => (
                  <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" className="group">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col border border-gray-100">
                      <div className="relative h-48 overflow-hidden bg-gray-100">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => { (e.target as HTMLImageElement).src = '/images/university-hero.jpg'; }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                          <Calendar className="w-4 h-4" />
                          <span>{item.date}</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-2 flex-1">{item.excerpt}</p>
                        <div className="flex items-center gap-2 text-blue-600 font-semibold mt-4 group-hover:gap-3 transition-all">
                          <span className="text-sm">{isRTL ? 'اقرأ المزيد' : 'Read More'}</span>
                          <ExternalLink className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </>
          )}

          {!loading && !error && filteredNews.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Newspaper className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{isRTL ? 'لا توجد أخبار' : 'No News Found'}</h3>
              <p className="text-gray-600">{isRTL ? 'لا توجد أخبار مطابقة للبحث' : 'No news found matching your search'}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
