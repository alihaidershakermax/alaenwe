import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Users, Calendar, MapPin, ExternalLink } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });
  return { title: t('conferences') };
}

export default async function ConferencesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isRTL = locale === 'ar';

  const topics = [
    isRTL ? 'الطب والعلوم الصحية' : 'Medicine & Health Sciences',
    isRTL ? 'الهندسة والتكنولوجيا' : 'Engineering & Technology',
    isRTL ? 'العلوم الأساسية' : 'Basic Sciences',
    isRTL ? 'العلوم الإنسانية' : 'Humanities',
    isRTL ? 'القانون والإدارة' : 'Law & Management',
    isRTL ? 'التربية والتعليم' : 'Education',
    isRTL ? 'الذكاء الاصطناعي' : 'Artificial Intelligence',
    isRTL ? 'الطاقة المتجددة' : 'Renewable Energy',
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-gray-900" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600/20 backdrop-blur-sm rounded-2xl mb-6 border border-blue-500/30">
              <Users className="w-10 h-10 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">{isRTL ? 'المؤتمرات العلمية' : 'Scientific Conferences'}</h1>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-6" />
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">{isRTL ? 'المؤتمرات والفعاليات العلمية التي تنظمها جامعة العين العراقية' : 'Scientific conferences and events organized by Al-Ayen Iraqi University'}</p>
          </div>
        </div>
      </section>

      {/* Main Conference Link */}
      <section className="py-16 -mt-16 relative z-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-3xl font-black text-gray-900 mb-4">{isRTL ? 'مؤتمرات جامعة العين' : 'Al-Ayen University Conferences'}</h2>
                <p className="text-gray-600 text-lg mb-6">{isRTL ? 'تصفح جميع المؤتمرات السابقة والقادمة' : 'Browse all past and upcoming conferences'}</p>
                <a href="https://alayen.edu.iq/conferences/details/13" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 hover:shadow-xl transition-all">
                  <span>{isRTL ? 'عرض المؤتمرات' : 'View Conferences'}</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <div className="w-32 h-32 bg-gray-100 rounded-2xl flex items-center justify-center">
                <Users className="w-16 h-16 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4">
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{isRTL ? 'مؤتمرات دورية' : 'Regular Conferences'}</h3>
              <p className="text-gray-600">{isRTL ? 'تنظيم مؤتمرات علمية دورية في مختلف التخصصات' : 'Organizing regular scientific conferences in various disciplines'}</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{isRTL ? 'مشاركة دولية' : 'International Participation'}</h3>
              <p className="text-gray-600">{isRTL ? 'مشاركة باحثين من مختلف دول العالم' : 'Participation of researchers from around the world'}</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{isRTL ? 'فعاليات متنوعة' : 'Diverse Events'}</h3>
              <p className="text-gray-600">{isRTL ? 'ورش عمل، ندوات، ومحاضرات علمية متخصصة' : 'Workshops, seminars, and specialized scientific lectures'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Topics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
            <h2 className="text-3xl font-black text-gray-900 mb-2 text-center">{isRTL ? 'المجالات البحثية' : 'Research Areas'}</h2>
            <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto mb-8" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {topics.map((topic, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-xl text-center hover:bg-blue-600 hover:text-white transition-all cursor-pointer border border-gray-100 hover:border-blue-600">
                  <span className="font-medium">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
