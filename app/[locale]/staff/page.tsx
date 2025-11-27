import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { GraduationCap, Users, Award, BookOpen } from 'lucide-react';
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

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-university-primary rounded-full mb-6">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {isRTL ? 'الكادر التدريسي' : 'Faculty Members'}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {isRTL
              ? 'نخبة من الأساتذة والباحثين المتميزين في مختلف التخصصات العلمية'
              : 'Elite professors and distinguished researchers in various scientific disciplines'}
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <Users className="w-12 h-12 text-university-primary mx-auto mb-4" />
            <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
            <div className="text-gray-600">{isRTL ? 'عضو هيئة تدريس' : 'Faculty Members'}</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <Award className="w-12 h-12 text-university-secondary mx-auto mb-4" />
            <div className="text-4xl font-bold text-gray-900 mb-2">150+</div>
            <div className="text-gray-600">{isRTL ? 'أستاذ دكتور' : 'Professors'}</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <BookOpen className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <div className="text-4xl font-bold text-gray-900 mb-2">3014</div>
            <div className="text-gray-600">{isRTL ? 'بحث منشور' : 'Published Research'}</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <GraduationCap className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <div className="text-4xl font-bold text-gray-900 mb-2">28</div>
            <div className="text-gray-600">{isRTL ? 'قسماً أكاديمياً' : 'Academic Departments'}</div>
          </div>
        </div>

        {/* Colleges List */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {isRTL ? 'الكادر التدريسي حسب الكلية' : 'Faculty by College'}
          </h2>
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
                  className="group flex items-center justify-between p-6 border-2 border-gray-200 rounded-xl hover:border-university-primary hover:bg-blue-50 transition-all"
                >
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="w-12 h-12 bg-university-primary/10 rounded-lg flex items-center justify-center group-hover:bg-university-primary group-hover:scale-110 transition-all">
                      <Users className="w-6 h-6 text-university-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 group-hover:text-university-primary transition-colors">
                        {name}
                      </h3>
                      {college.departments && college.departments.length > 0 && (
                        <p className="text-sm text-gray-600">
                          {isRTL ? `${college.departments.length} أقسام` : `${college.departments.length} Departments`}
                        </p>
                      )}
                    </div>
                  </div>
                  <svg
                    className="w-6 h-6 text-gray-400 group-hover:text-university-primary transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={isRTL ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'}
                    />
                  </svg>
                </a>
              );
            })}
          </div>
        </div>

        {/* Excellence Areas */}
        <div className="bg-gradient-to-br from-university-primary to-university-secondary text-white rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {isRTL ? 'مجالات التميز' : 'Areas of Excellence'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-5xl mb-4">🔬</div>
              <h3 className="text-xl font-bold mb-2">{isRTL ? 'البحث العلمي' : 'Scientific Research'}</h3>
              <p className="text-blue-100">
                {isRTL ? 'أبحاث متقدمة في مختلف المجالات' : 'Advanced research in various fields'}
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-2">{isRTL ? 'التعليم المتميز' : 'Excellent Education'}</h3>
              <p className="text-blue-100">
                {isRTL ? 'برامج أكاديمية عالية الجودة' : 'High-quality academic programs'}
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2">{isRTL ? 'الإنجازات' : 'Achievements'}</h3>
              <p className="text-blue-100">
                {isRTL ? 'جوائز وتكريمات محلية ودولية' : 'Local and international awards'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
