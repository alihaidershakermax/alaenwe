import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Award, Trophy, Star, Calendar } from 'lucide-react';

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

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mb-6">
            <Trophy className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {isRTL ? 'الجوائز والتكريمات' : 'Awards & Honors'}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {isRTL
              ? 'تكريم التميز والإبداع في البحث العلمي والإنجاز الأكاديمي'
              : 'Celebrating excellence and innovation in scientific research and academic achievement'}
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Award Header */}
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-6 text-white">
                <div className="flex items-center justify-center mb-4">
                  <Award className="w-16 h-16" />
                </div>
                <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
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
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all"
                >
                  {isRTL ? 'عرض التفاصيل' : 'View Details'}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Award Criteria */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {isRTL ? 'معايير الجائزة' : 'Award Criteria'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <Star className="w-12 h-12 text-university-primary mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">
                {isRTL ? 'البحث العلمي' : 'Scientific Research'}
              </h3>
              <p className="text-sm text-gray-600">
                {isRTL ? 'جودة وكمية الأبحاث المنشورة' : 'Quality and quantity of published research'}
              </p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <Star className="w-12 h-12 text-university-secondary mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">
                {isRTL ? 'الاستشهادات' : 'Citations'}
              </h3>
              <p className="text-sm text-gray-600">
                {isRTL ? 'عدد الاستشهادات بالأبحاث' : 'Number of research citations'}
              </p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <Star className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">
                {isRTL ? 'التأثير العلمي' : 'Scientific Impact'}
              </h3>
              <p className="text-sm text-gray-600">
                {isRTL ? 'التأثير في المجال العلمي' : 'Impact in the scientific field'}
              </p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <Star className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">
                {isRTL ? 'الإبداع' : 'Innovation'}
              </h3>
              <p className="text-sm text-gray-600">
                {isRTL ? 'الإبداع والابتكار في البحث' : 'Creativity and innovation in research'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
