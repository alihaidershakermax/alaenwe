import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { GraduationCap, Building2, Users, BookOpen, ExternalLink, ArrowRight, Stethoscope, Wrench, Scale } from 'lucide-react';
import collegesData from '@/data/colleges.json';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });
  return { title: t('colleges') };
}

export default async function CollegesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isRTL = locale === 'ar';

  const categories = [
    { type: 'medical', icon: Stethoscope, titleAr: 'الكليات الطبية', titleEn: 'Medical Colleges', color: 'from-red-500 to-pink-600' },
    { type: 'engineering', icon: Wrench, titleAr: 'الكليات الهندسية', titleEn: 'Engineering Colleges', color: 'from-blue-500 to-indigo-600' },
    { type: 'humanities', icon: Scale, titleAr: 'الكليات الإنسانية', titleEn: 'Humanities Colleges', color: 'from-green-500 to-teal-600' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section مع فيديو YouTube */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        {/* فيديو YouTube كخلفية - يغطي الشاشة */}
        <div className="absolute inset-0 overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/2e9wZwbdq_c?autoplay=1&mute=1&loop=1&playlist=2e9wZwbdq_c&controls=0&showinfo=0&rel=0&start=43&modestbranding=1&playsinline=1"
            className="absolute w-full h-full pointer-events-none"
            style={{
              border: 'none',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '177.78vh',
              height: '100%',
              minWidth: '100%',
              minHeight: '56.25vw',
            }}
            allow="autoplay; encrypted-media"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-gray-50 z-10" />
        </div>

        {/* شعار شفاف */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <img src="/images/logo.png" alt="" className="w-96 h-96 object-contain" />
        </div>

        {/* المحتوى */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4 pt-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <GraduationCap className="w-5 h-5" />
            <span className="text-sm font-semibold">{isRTL ? 'كلياتنا' : 'Our Colleges'}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black mb-6">
            {isRTL ? 'كليات جامعة العين العراقية' : 'Al-Ayen University Colleges'}
          </h1>

          <p className="text-xl text-blue-200 max-w-2xl mx-auto mb-8">
            {isRTL
              ? '11 كلية متخصصة تقدم برامج أكاديمية متميزة في مختلف المجالات'
              : '11 specialized colleges offering distinguished academic programs'}
          </p>

          {/* إحصائيات */}
          <div className="flex gap-8">
            <div className="text-center">
              <div className="text-4xl font-black text-blue-400">11</div>
              <div className="text-sm text-gray-300">{isRTL ? 'كلية' : 'Colleges'}</div>
            </div>
            <div className="w-px bg-white/20" />
            <div className="text-center">
              <div className="text-4xl font-black text-blue-400">28</div>
              <div className="text-sm text-gray-300">{isRTL ? 'قسم' : 'Departments'}</div>
            </div>
            <div className="w-px bg-white/20" />
            <div className="text-center">
              <div className="text-4xl font-black text-blue-400">500+</div>
              <div className="text-sm text-gray-300">{isRTL ? 'تدريسي' : 'Faculty'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* الكليات حسب التصنيف */}
      {categories.map((cat) => {
        const colleges = collegesData.filter(c => c.type === cat.type);
        const Icon = cat.icon;
        
        return (
          <section key={cat.type} className="py-16 bg-white odd:bg-gray-50">
            <div className="container mx-auto px-4">
              {/* عنوان القسم */}
              <div className="flex items-center gap-4 mb-10">
                <div className={`w-14 h-14 bg-gradient-to-br ${cat.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                    {isRTL ? cat.titleAr : cat.titleEn}
                  </h2>
                  <p className="text-gray-500">{colleges.length} {isRTL ? 'كليات' : 'colleges'}</p>
                </div>
              </div>

              {/* شبكة الكليات */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {colleges.map((college) => {
                  const name = locale === 'ar' ? college.name : college.nameEn;
                  const desc = locale === 'ar' ? college.description : college.descriptionEn;

                  return (
                    <div key={college.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100">
                      {/* Header */}
                      <div className={`bg-gradient-to-br ${cat.color} p-6 text-white`}>
                        <div className="flex items-center justify-between mb-3">
                          <GraduationCap className="w-10 h-10 opacity-80" />
                          <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                            {college.departments?.length || 1} {isRTL ? 'أقسام' : 'Depts'}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold">{name}</h3>
                      </div>

                      {/* Body */}
                      <div className="p-6">
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{desc}</p>

                        {/* الأقسام */}
                        {college.departments && college.departments.length > 0 && (
                          <div className="mb-4">
                            <p className="text-xs font-semibold text-gray-500 mb-2">{isRTL ? 'الأقسام:' : 'Departments:'}</p>
                            <div className="flex flex-wrap gap-1">
                              {college.departments.slice(0, 3).map((d, i) => (
                                <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                  {locale === 'ar' ? d.name : d.nameEn}
                                </span>
                              ))}
                              {college.departments.length > 3 && (
                                <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                                  +{college.departments.length - 3}
                                </span>
                              )}
                            </div>
                          </div>
                        )}

                        {/* الأزرار */}
                        <div className="flex gap-2">
                          <Link
                            href={`/${locale}/colleges/${college.id}`}
                            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r ${cat.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all text-sm`}
                          >
                            {isRTL ? 'التفاصيل' : 'Details'}
                            <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                          </Link>
                          {college.website && (
                            <a
                              href={college.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition-colors"
                            >
                              <ExternalLink className="w-5 h-5 text-gray-600" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {isRTL ? 'انضم إلى عائلة جامعة العين' : 'Join Al-Ayen University'}
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto mb-8">
            {isRTL ? 'ابدأ رحلتك الأكاديمية معنا' : 'Start your academic journey with us'}
          </p>
          <Link
            href={`/${locale}/students`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:bg-yellow-400 transition-colors"
          >
            {isRTL ? 'شؤون الطلبة' : 'Student Affairs'}
          </Link>
        </div>
      </section>
    </div>
  );
}
