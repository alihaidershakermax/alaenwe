import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { GraduationCap, Users, Award, BookOpen, ArrowRight } from 'lucide-react';
import collegesData from '@/data/colleges.json';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });

  return {
    title: t('staff'),
  };
}

export default async function StaffPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isRTL = locale === 'ar';

  const stats = [
    { icon: Users, value: '500+', labelAr: 'عضو هيئة تدريس', labelEn: 'Faculty Members' },
    { icon: Award, value: '150+', labelAr: 'أستاذ دكتور', labelEn: 'Professors' },
    { icon: BookOpen, value: '3014', labelAr: 'بحث منشور', labelEn: 'Publications' },
    { icon: GraduationCap, value: '28', labelAr: 'قسم أكاديمي', labelEn: 'Departments' },
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
              {isRTL ? 'الكادر التدريسي' : 'Faculty Members'}
            </h1>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-6" />
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {isRTL
                ? 'نخبة من الأساتذة والباحثين المتميزين في مختلف التخصصات العلمية'
                : 'Elite professors and distinguished researchers in various scientific disciplines'}
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 -mt-16 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 text-center hover:shadow-2xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <div className="text-3xl md:text-4xl font-black text-blue-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-gray-600">
                    {isRTL ? stat.labelAr : stat.labelEn}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Colleges List */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                {isRTL ? 'الكادر التدريسي حسب الكلية' : 'Faculty by College'}
              </h2>
              <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {collegesData.map((college) => {
                const name = locale === 'ar' ? college.name : college.nameEn;
                const staffUrl = `https://alayen.edu.iq/staff/view_list/${college.id}`;

                return (
                  <a
                    key={college.id}
                    href={staffUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-6 bg-white border-2 border-gray-100 rounded-2xl hover:border-blue-500 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300">
                        <Users className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors text-lg">
                          {name}
                        </h3>
                        {college.departments && college.departments.length > 0 && (
                          <p className="text-sm text-gray-500">
                            {isRTL ? `${college.departments.length} أقسام` : `${college.departments.length} Departments`}
                          </p>
                        )}
                      </div>
                    </div>
                    <ArrowRight className={`w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-all group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
