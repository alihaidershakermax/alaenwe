import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Users, Calendar, MapPin, ExternalLink } from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });

  return {
    title: t('conferences'),
  };
}

export default async function ConferencesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isRTL = locale === 'ar';

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-university-primary rounded-full mb-6">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {isRTL ? 'المؤتمرات العلمية' : 'Scientific Conferences'}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {isRTL
              ? 'المؤتمرات والفعاليات العلمية التي تنظمها جامعة العين العراقية'
              : 'Scientific conferences and events organized by Al-Ayen Iraqi University'}
          </p>
        </div>

        {/* Main Conference Link */}
        <div className="bg-gradient-to-br from-university-primary to-university-secondary text-white rounded-xl p-8 md:p-12 mb-12 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">
                {isRTL ? 'مؤتمرات جامعة العين' : 'Al-Ayen University Conferences'}
              </h2>
              <p className="text-blue-100 text-lg mb-6">
                {isRTL
                  ? 'تصفح جميع المؤتمرات السابقة والقادمة'
                  : 'Browse all past and upcoming conferences'}
              </p>
              <a
                href="https://alayen.edu.iq/conferences/details/13"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 rtl:space-x-reverse px-8 py-4 bg-white text-university-primary font-bold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                <span>{isRTL ? 'عرض المؤتمرات' : 'View Conferences'}</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
            <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Users className="w-16 h-16" />
            </div>
          </div>
        </div>

        {/* Conference Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Calendar className="w-8 h-8 text-university-primary" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {isRTL ? 'مؤتمرات دورية' : 'Regular Conferences'}
            </h3>
            <p className="text-gray-600">
              {isRTL
                ? 'تنظيم مؤتمرات علمية دورية في مختلف التخصصات'
                : 'Organizing regular scientific conferences in various disciplines'}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Users className="w-8 h-8 text-university-secondary" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {isRTL ? 'مشاركة دولية' : 'International Participation'}
            </h3>
            <p className="text-gray-600">
              {isRTL
                ? 'مشاركة باحثين من مختلف دول العالم'
                : 'Participation of researchers from around the world'}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
              <MapPin className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {isRTL ? 'فعاليات متنوعة' : 'Diverse Events'}
            </h3>
            <p className="text-gray-600">
              {isRTL
                ? 'ورش عمل، ندوات، ومحاضرات علمية متخصصة'
                : 'Workshops, seminars, and specialized scientific lectures'}
            </p>
          </div>
        </div>

        {/* Conference Topics */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {isRTL ? 'المجالات البحثية' : 'Research Areas'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              isRTL ? 'الطب والعلوم الصحية' : 'Medicine & Health Sciences',
              isRTL ? 'الهندسة والتكنولوجيا' : 'Engineering & Technology',
              isRTL ? 'العلوم الأساسية' : 'Basic Sciences',
              isRTL ? 'العلوم الإنسانية' : 'Humanities',
              isRTL ? 'القانون والإدارة' : 'Law & Management',
              isRTL ? 'التربية والتعليم' : 'Education',
              isRTL ? 'الذكاء الاصطناعي' : 'Artificial Intelligence',
              isRTL ? 'الطاقة المتجددة' : 'Renewable Energy',
            ].map((topic, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 rounded-lg text-center hover:bg-university-primary hover:text-white transition-all cursor-pointer"
              >
                <span className="font-medium">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
