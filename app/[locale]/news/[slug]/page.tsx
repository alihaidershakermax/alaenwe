import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import NewsCard from '@/components/NewsCard';
import newsData from '@/data/news.json';

interface Props {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return newsData.map((news) => ({
    slug: news.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const news = newsData.find((n) => n.slug === slug);
  
  if (!news) {
    return {
      title: 'News Not Found',
    };
  }

  const title = locale === 'ar' ? news.title : news.titleEn;
  const description = locale === 'ar' ? news.excerpt : news.excerptEn;
  
  return {
    title,
    description,
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug, locale } = await params;
  const news = newsData.find((n) => n.slug === slug);
  const isRTL = locale === 'ar';

  if (!news) {
    notFound();
  }

  const title = isRTL ? news.title : news.titleEn;
  const content = isRTL ? news.content : news.contentEn;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(isRTL ? 'ar-IQ' : 'en-US', {
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

  // Get related news (same category, excluding current)
  const relatedNews = newsData
    .filter((n) => n.category === news.category && n.id !== news.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link
          href={`/${locale}/news`}
          className="inline-flex items-center space-x-2 rtl:space-x-reverse text-university-primary hover:text-university-secondary mb-8 transition-colors"
        >
          <ArrowLeft className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
          <span>{isRTL ? 'العودة إلى الأخبار' : 'Back to News'}</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <article className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Image */}
              <div className="relative h-96 bg-gradient-to-br from-university-primary to-university-secondary" />

              {/* Content */}
              <div className="p-8">
                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-600">
                    <Calendar className="w-5 h-5" />
                    <time dateTime={news.date}>{formatDate(news.date)}</time>
                  </div>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <Tag className="w-5 h-5 text-gray-600" />
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                      {getCategoryLabel(news.category)}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  {title}
                </h1>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {content}
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            {relatedNews.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  {isRTL ? 'أخبار ذات صلة' : 'Related News'}
                </h2>
                <div className="space-y-4">
                  {relatedNews.map((relatedItem) => {
                    const relatedTitle = isRTL ? relatedItem.title : relatedItem.titleEn;
                    const relatedExcerpt = isRTL ? relatedItem.excerpt : relatedItem.excerptEn;
                    
                    return (
                      <Link
                        key={relatedItem.id}
                        href={`/${locale}/news/${relatedItem.slug}`}
                        className="block p-4 border border-gray-200 rounded-lg hover:border-university-primary hover:bg-blue-50 transition-all"
                      >
                        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                          {relatedTitle}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {relatedExcerpt}
                        </p>
                        <div className="text-xs text-gray-500 mt-2">
                          {formatDate(relatedItem.date)}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
