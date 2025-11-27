'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Calendar, ArrowRight } from 'lucide-react';
import { News } from '@/types';

interface NewsCardProps {
  news: News;
}

export default function NewsCard({ news }: NewsCardProps) {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const title = locale === 'ar' ? news.title : news.titleEn;
  const excerpt = locale === 'ar' ? news.excerpt : news.excerptEn;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale === 'ar' ? 'ar-IQ' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getCategoryLabel = (category: string) => {
    const labels = {
      university: isRTL ? 'أخبار الجامعة' : 'University News',
      ministry: isRTL ? 'أخبار الوزارة' : 'Ministry News',
      college: isRTL ? 'أخبار الكليات' : 'College News',
    };
    return labels[category as keyof typeof labels] || category;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      university: 'bg-blue-100 text-blue-800',
      ministry: 'bg-blue-200 text-blue-900',
      college: 'bg-blue-50 text-blue-700',
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <article className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 h-full flex flex-col border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
      {/* Image */}
      <div className="relative h-56 bg-gradient-to-br from-blue-600 to-blue-800 overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 via-blue-700/70 to-blue-800/80 group-hover:opacity-90 transition-opacity duration-500" />

        {/* Animated Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '30px 30px'
        }} />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 z-10">
          <span className={`px-4 py-1.5 rounded-full text-xs font-bold backdrop-blur-md border border-white/30 shadow-lg ${getCategoryColor(news.category)}`}>
            {getCategoryLabel(news.category)}
          </span>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col bg-white">
        {/* Date */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
            <Calendar className="w-4 h-4 text-blue-600" />
          </div>
          <time dateTime={news.date} className="font-medium">{formatDate(news.date)}</time>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 flex-1 group-hover:text-university-primary transition-colors">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 mb-5 line-clamp-3 leading-relaxed">
          {excerpt}
        </p>

        {/* Read More Link */}
        <Link
          href={`/${locale}/news/${news.slug}`}
          className="inline-flex items-center gap-2 text-university-primary hover:text-university-secondary font-bold transition-all group/link"
        >
          <span className="relative">
            {isRTL ? 'اقرأ المزيد' : 'Read More'}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-university-primary group-hover/link:w-full transition-all duration-300" />
          </span>
          <ArrowRight className={`w-5 h-5 group-hover/link:translate-x-1 rtl:group-hover/link:-translate-x-1 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
        </Link>
      </div>

      {/* Bottom Accent Line */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rtl:origin-right" />
    </article>
  );
}
