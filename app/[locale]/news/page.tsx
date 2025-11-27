'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Search, Newspaper, Calendar, ArrowRight, Filter } from 'lucide-react';
import newsDataRaw from '@/data/news.json';
import type { News } from '@/types';

const newsData = newsDataRaw as News[];

export default function NewsPage() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { value: 'all', labelAr: 'جميع الأخبار', labelEn: 'All News', color: 'bg-gray-100 text-gray-700' },
    { value: 'university', labelAr: 'أخبار الجامعة', labelEn: 'University', color: 'bg-blue-100 text-blue-700' },
    { value: 'ministry', labelAr: 'أخبار الوزارة', labelEn: 'Ministry', color: 'bg-green-100 text-green-700' },
    { value: 'college', labelAr: 'أخبار الكليات', labelEn: 'Colleges', color: 'bg-purple-100 text-purple-700' },
  ];

  const filteredNews = newsData.filter((news) => {
    const matchesCategory = selectedCategory === 'all' || news.category === selectedCategory;
    const title = locale === 'ar' ? news.title : news.titleEn;
    const content = locale === 'ar' ? news.content : news.contentEn;
    const matchesSearch = searchQuery === '' || 
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      content.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const featuredNews = filteredNews[0];
  const otherNews = filteredNews.slice(1);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Newspaper className="w-5 h-5" />
              <span className="text-sm font-semibold">{isRTL ? 'آخر الأخبار' : 'Latest News'}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              {isRTL ? 'أخبار وفعاليات الجامعة' : 'University News & Events'}
            </h1>

            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              {isRTL
                ? 'تابع آخر الأخبار والفعاليات والإنجازات من جامعة العين العراقية'
                : 'Follow the latest news, events and achievements from Al-Ayen Iraqi University'}
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 rtl:left-auto rtl:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={isRTL ? 'ابحث في الأخبار...' : 'Search news...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 rtl:pl-4 rtl:pr-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category.value
                      ? 'bg-blue-600 text-white shadow-lg'
                      : `${category.color} hover:shadow-md`
                  }`}
                >
                  {isRTL ? category.labelAr : category.labelEn}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredNews.length > 0 ? (
            <>
              {/* Featured News */}
              {featuredNews && (
                <div className="mb-12">
                  <Link href={`/${locale}/news/${featuredNews.slug}`} className="group block">
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                      <div className="grid md:grid-cols-2">
                        <div className="relative h-64 md:h-auto">
                          <img
                            src={featuredNews.image || 'https://via.placeholder.com/800x600/3b82f6/ffffff?text=News'}
                            alt={locale === 'ar' ? featuredNews.title : featuredNews.titleEn}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4">
                            <span className="px-4 py-2 bg-yellow-400 text-gray-900 font-bold rounded-full text-sm">
                              {isRTL ? 'خبر مميز' : 'Featured'}
                            </span>
                          </div>
                        </div>
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                          <div className="flex items-center gap-3 mb-4">
                            <Calendar className="w-5 h-5 text-gray-400" />
                            <span className="text-gray-500">{featuredNews.date}</span>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              featuredNews.category === 'university' ? 'bg-blue-100 text-blue-700' :
                              featuredNews.category === 'ministry' ? 'bg-green-100 text-green-700' :
                              'bg-purple-100 text-purple-700'
                            }`}>
                              {isRTL 
                                ? (featuredNews.category === 'university' ? 'الجامعة' : featuredNews.category === 'ministry' ? 'الوزارة' : 'الكليات')
                                : featuredNews.category}
                            </span>
                          </div>
                          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                            {locale === 'ar' ? featuredNews.title : featuredNews.titleEn}
                          </h2>
                          <p className="text-gray-600 mb-6 line-clamp-3">
                            {locale === 'ar' ? featuredNews.content : featuredNews.contentEn}
                          </p>
                          <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-4 transition-all">
                            <span>{isRTL ? 'اقرأ المزيد' : 'Read More'}</span>
                            <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )}

              {/* Other News Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherNews.map((news) => (
                  <Link key={news.id} href={`/${locale}/news/${news.slug}`} className="group">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={news.image || 'https://via.placeholder.com/400x300/3b82f6/ffffff?text=News'}
                          alt={locale === 'ar' ? news.title : news.titleEn}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-4 left-4 rtl:left-auto rtl:right-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            news.category === 'university' ? 'bg-blue-500 text-white' :
                            news.category === 'ministry' ? 'bg-green-500 text-white' :
                            'bg-purple-500 text-white'
                          }`}>
                            {isRTL 
                              ? (news.category === 'university' ? 'الجامعة' : news.category === 'ministry' ? 'الوزارة' : 'الكليات')
                              : news.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                          <Calendar className="w-4 h-4" />
                          <span>{news.date}</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {locale === 'ar' ? news.title : news.titleEn}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-2 flex-1">
                          {locale === 'ar' ? news.content : news.contentEn}
                        </p>
                        <div className="flex items-center gap-2 text-blue-600 font-semibold mt-4 group-hover:gap-3 transition-all">
                          <span className="text-sm">{isRTL ? 'اقرأ المزيد' : 'Read More'}</span>
                          <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Newspaper className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {isRTL ? 'لا توجد أخبار' : 'No News Found'}
              </h3>
              <p className="text-gray-600">
                {isRTL ? 'لا توجد أخبار مطابقة للبحث' : 'No news found matching your search'}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
