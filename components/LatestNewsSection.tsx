'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { ArrowRight, Calendar, Newspaper } from 'lucide-react';
import newsData from '@/data/news.json';

export default function LatestNewsSection() {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const latestNews = newsData.slice(0, 4);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* العنوان */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            {isRTL ? 'آخر الأخبار' : 'Latest News'}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            {isRTL
              ? 'تابع آخر الأخبار والفعاليات من جامعة العين العراقية'
              : 'Follow the latest news and events from Al-Ayen Iraqi University'}
          </p>
        </div>

        {/* شبكة الأخبار */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
          {latestNews.map((news) => {
            const title = locale === 'ar' ? news.title : news.titleEn;
            const content = locale === 'ar' ? news.content : news.contentEn;

            return (
              <Link
                key={news.id}
                href={`/${locale}/news/${news.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* صورة الخبر */}
                <div className="relative h-40 overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800">
                  {news.image ? (
                    <img
                      src={news.image}
                      alt={title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Newspaper className="w-12 h-12 text-white/50" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* التاريخ */}
                  <div className="absolute bottom-3 left-3 rtl:left-auto rtl:right-3 flex items-center gap-1 text-white text-xs">
                    <Calendar className="w-3 h-3" />
                    <span>{news.date}</span>
                  </div>
                </div>

                {/* محتوى الخبر */}
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 text-sm leading-tight mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {title}
                  </h3>
                  <p className="text-gray-500 text-xs line-clamp-2">
                    {content}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* زر عرض الكل */}
        <div className="text-center">
          <Link
            href={`/${locale}/news`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-blue-600 transition-colors shadow-lg"
          >
            <span>{isRTL ? 'جميع الأخبار' : 'All News'}</span>
            <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
          </Link>
        </div>
      </div>
    </section>
  );
}
