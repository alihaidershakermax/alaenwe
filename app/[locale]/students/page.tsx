import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Users, FileText, GraduationCap, Award, BookOpen, Calendar, ExternalLink, Download } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });
  return { title: t('students') };
}

export default async function StudentsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isRTL = locale === 'ar';

  const services = [
    { icon: FileText, titleAr: 'دليل التسجيل الذكي', titleEn: 'Smart Registration Guide', descAr: 'دليل شامل للطلبة الجدد للتسجيل في الجامعة', descEn: 'Comprehensive guide for new students', link: 'https://alayen.edu.iq/students_affairs/details/6' },
    { icon: BookOpen, titleAr: 'دليل إجراءات شؤون الطلبة', titleEn: 'Student Affairs Procedures', descAr: 'ضوابط القبول وشروطه للسنة الدراسية', descEn: 'Admission regulations and requirements', link: 'https://alayen.edu.iq/students_affairs/details/8' },
    { icon: GraduationCap, titleAr: 'دليل قبول الطلبة', titleEn: 'Student Admission Guide', descAr: 'معلومات شاملة عن القبول والتسجيل', descEn: 'Comprehensive admission information', link: 'https://alayen.edu.iq/students_affairs/details/9' },
    { icon: Award, titleAr: 'الطلبة الأوائل', titleEn: 'Top Students', descAr: 'قائمة الطلبة المتفوقين في جميع الكليات', descEn: 'List of outstanding students', link: 'https://alayen.edu.iq/top_students' },
    { icon: Users, titleAr: 'الخريجين', titleEn: 'Alumni', descAr: 'شبكة خريجي جامعة العين العراقية', descEn: 'Al-Ayen University alumni network', link: 'https://alayen.edu.iq/alumni' },
    { icon: Calendar, titleAr: 'التقويم الجامعي', titleEn: 'University Calendar', descAr: 'المواعيد والفعاليات الأكاديمية المهمة', descEn: 'Important academic dates and events', link: 'https://alayen.edu.iq/university_calendar' },
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">{isRTL ? 'شؤون الطلبة' : 'Student Affairs'}</h1>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-6" />
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">{isRTL ? 'خدمات ومعلومات شاملة للطلبة الحاليين والمحتملين' : 'Comprehensive services and information for students'}</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
            <h2 className="text-2xl font-black text-gray-900 mb-2">{isRTL ? 'نبذة عن شؤون الطلبة' : 'About Student Affairs'}</h2>
            <div className="w-16 h-1 bg-blue-600 rounded-full mb-6" />
            <p className="text-gray-600 leading-relaxed">{isRTL ? 'قسم شؤون الطلبة هو الجهة المسؤولة عن تقديم الخدمات الأكاديمية والإدارية للطلبة، بما في ذلك التسجيل والقبول والتخرج والأنشطة الطلابية.' : 'The Student Affairs Department provides academic and administrative services including registration, admission, graduation, and student activities.'}</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <a key={index} href={service.link} target="_blank" rel="noopener noreferrer" className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{isRTL ? service.titleAr : service.titleEn}</h3>
                  <p className="text-gray-600 mb-4">{isRTL ? service.descAr : service.descEn}</p>
                  <div className="flex items-center text-blue-600 font-semibold">
                    <span>{isRTL ? 'عرض التفاصيل' : 'View Details'}</span>
                    <ExternalLink className="w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-black mb-2 text-center">{isRTL ? 'التحميلات المهمة' : 'Important Downloads'}</h2>
            <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="https://alayen.edu.iq/students_affairs/details/6" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors border border-white/10">
                <div className="flex items-center">
                  <Download className="w-6 h-6 mr-3 rtl:mr-0 rtl:ml-3" />
                  <span>{isRTL ? 'دليل التسجيل الذكي' : 'Smart Registration Guide'}</span>
                </div>
                <span className="text-sm bg-blue-600 px-3 py-1 rounded-full">PDF</span>
              </a>
              <a href="https://alayen.edu.iq/students_affairs/details/8" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors border border-white/10">
                <div className="flex items-center">
                  <Download className="w-6 h-6 mr-3 rtl:mr-0 rtl:ml-3" />
                  <span>{isRTL ? 'دليل إجراءات شؤون الطلبة' : 'Student Affairs Procedures'}</span>
                </div>
                <span className="text-sm bg-blue-600 px-3 py-1 rounded-full">PDF</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
            <h2 className="text-2xl font-black text-gray-900 mb-2 text-center">{isRTL ? 'تواصل معنا' : 'Contact Us'}</h2>
            <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="font-bold text-gray-900 mb-2">{isRTL ? 'الموقع' : 'Location'}</h3>
                <p className="text-sm text-gray-600">{isRTL ? 'مبنى شؤون الطلبة - الطابق الأول' : 'Student Affairs Building - First Floor'}</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="font-bold text-gray-900 mb-2">{isRTL ? 'الهاتف' : 'Phone'}</h3>
                <p className="text-sm text-gray-600">+964 XXX XXX XXXX</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="font-bold text-gray-900 mb-2">{isRTL ? 'البريد الإلكتروني' : 'Email'}</h3>
                <p className="text-sm text-gray-600">students@alayen.edu.iq</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
