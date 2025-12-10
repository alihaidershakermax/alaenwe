import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Award, Trophy, Star, Calendar, ExternalLink } from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });

  return {
    title: t('awards'),
  };
}

export default async function AwardsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isRTL = locale === 'ar';

  const awards = [
    {
      year: '2024-2025',
      title: isRTL ? 'جائزة جامعة العين للباحث الأكاديمي' : 'Al-Ayen University Academic Researcher Award',
      description: isRTL
        ? 'تكريم الباحثين المتميزين في مختلف المجالات العلمية'
        : 'Honoring distinguished researchers in various scientific fields',
      link: 'https://award5.alayen.edu.iq/',
    },
    {
      year: '2023-2024',
      title: isRTL ? 'جائزة جامعة العين للباحث الأكاديمي' : 'Al-Ayen University Academic Researcher Award',
      description: isRTL
        ? 'تكريم الباحثين المتميزين في مختلف المجالات العلمية'
        : 'Honoring distinguished researchers in various scientific fields',
      link: 'https://award2024.alayen.edu.iq/',
    },
    {
      year: '2022-2023',
      title: isRTL ? 'جائزة جامعة العين للباحث الأكاديمي' : 'Al-Ayen University Academic Researcher Award',
      description: isRTL
        ? 'تكريم الباحثين المتميزين في مختلف المجالات العلمية'
        : 'Honoring distinguished researchers in various scientific fields',
      link: 'http://award.alayen.edu.iq/award/',
    },
  ];

  const criteria = [
    { titleAr: 'البحث العلمي', titleEn: 'Scientific Research', descAr: 'جودة وكمية الأبحاث المنشورة', descEn: 'Quality and quantity of published research' },
    { titleAr: 'الاستشهادات', titleEn: 'Citations', descAr: 'عدد الاستشهادات بالأبحاث', descEn: 'Number of research citations' },
    { titleAr: 'التأثير العلمي', titleEn: 'Scientific Impact', descAr: 'التأثير في المجال العلمي', descEn: 'Impact in the scientific field' },
    { titleAr: 'الإبداع', titleEn: 'Innovation', descAr: 'الإبداع والابتكار في البحث', descEn: 'Creativity and innovation in research' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-gray-900" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              {isRTL ? 'الجوائز والتكريمات' : 'Awards & Honors'}
            </h1>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-6" />
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {isRTL
                ? 'تكريم التميز والإبداع في البحث العلمي والإنجاز الأكاديمي'
                : 'Celebrating excellence and innovation in scientific research'}
            </p>
          </div>
        </div>
      </section>

      {/* Awards Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                {/* Award Header */}
                <div className="bg-blue-600 p-8 text-white text-center">
                  <Trophy className="w-16 h-16 mx-auto mb-4" />
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span className="text-lg font-bold">{award.year}</span>
                  </div>
                </div>

                {/* Award Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{award.title}</h3>
                  <p className="text-gray-600 mb-6">{award.description}</p>
                  <a
                    href={award.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all"
                  >
                    {isRTL ? 'عرض التفاصيل' : 'View Details'}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Award Criteria */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                {isRTL ? 'معايير الجائزة' : 'Award Criteria'}
              </h2>
              <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {criteria.map((item, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all">
                  <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Star className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {isRTL ? item.titleAr : item.titleEn}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {isRTL ? item.descAr : item.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
