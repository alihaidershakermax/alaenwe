import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Users, FileText, GraduationCap, Award, BookOpen, Calendar, ExternalLink, Download } from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });

  return {
    title: t('students'),
  };
}

export default async function StudentsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isRTL = locale === 'ar';

  const services = [
    {
      icon: FileText,
      titleAr: 'دليل التسجيل الذكي',
      titleEn: 'Smart Registration Guide',
      descAr: 'دليل شامل للطلبة الجدد للتسجيل في الجامعة',
      descEn: 'Comprehensive guide for new students to register at the university',
      link: 'https://alayen.edu.iq/students_affairs/details/6',
    },
    {
      icon: BookOpen,
      titleAr: 'دليل إجراءات شؤون الطلبة',
      titleEn: 'Student Affairs Procedures Guide',
      descAr: 'ضوابط القبول وشروطه للسنة الدراسية',
      descEn: 'Admission regulations and requirements for the academic year',
      link: 'https://alayen.edu.iq/students_affairs/details/8',
    },
    {
      icon: GraduationCap,
      titleAr: 'دليل قبول الطلبة',
      titleEn: 'Student Admission Guide',
      descAr: 'معلومات شاملة عن القبول والتسجيل',
      descEn: 'Comprehensive information about admission and registration',
      link: 'https://alayen.edu.iq/students_affairs/details/9',
    },
    {
      icon: Award,
      titleAr: 'الطلبة الأوائل',
      titleEn: 'Top Students',
      descAr: 'قائمة الطلبة المتفوقين في جميع الكليات',
      descEn: 'List of outstanding students in all colleges',
      link: 'https://alayen.edu.iq/top_students',
    },
    {
      icon: Users,
      titleAr: 'الخريجين',
      titleEn: 'Alumni',
      descAr: 'شبكة خريجي جامعة العين العراقية',
      descEn: 'Al-Ayen Iraqi University alumni network',
      link: 'https://alayen.edu.iq/alumni',
    },
    {
      icon: Calendar,
      titleAr: 'التقويم الجامعي',
      titleEn: 'University Calendar',
      descAr: 'المواعيد والفعاليات الأكاديمية المهمة',
      descEn: 'Important academic dates and events',
      link: 'https://alayen.edu.iq/university_calendar',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-university-primary to-university-secondary rounded-full mb-6">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {isRTL ? 'شؤون الطلبة' : 'Student Affairs'}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {isRTL
              ? 'خدمات ومعلومات شاملة للطلبة الحاليين والمحتملين'
              : 'Comprehensive services and information for current and prospective students'}
          </p>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {isRTL ? 'نبذة عن شؤون الطلبة' : 'About Student Affairs'}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {isRTL
              ? 'قسم شؤون الطلبة هو الجهة المسؤولة عن تقديم الخدمات الأكاديمية والإدارية للطلبة، بما في ذلك التسجيل والقبول والتخرج والأنشطة الطلابية. نسعى لتوفير بيئة تعليمية متميزة تدعم نجاح الطلبة وتطورهم الأكاديمي والشخصي.'
              : 'The Student Affairs Department is responsible for providing academic and administrative services to students, including registration, admission, graduation, and student activities. We strive to provide an excellent educational environment that supports student success and their academic and personal development.'}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <a
                key={index}
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex flex-col">
                  <div className="w-16 h-16 bg-university-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-university-primary group-hover:scale-110 transition-all">
                    <Icon className="w-8 h-8 text-university-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-university-primary transition-colors">
                    {isRTL ? service.titleAr : service.titleEn}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {isRTL ? service.descAr : service.descEn}
                  </p>
                  <div className="flex items-center text-university-primary font-semibold">
                    <span>{isRTL ? 'عرض التفاصيل' : 'View Details'}</span>
                    <ExternalLink className="w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Downloads Section */}
        <div className="bg-gradient-to-br from-university-primary to-university-secondary text-white rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">
            {isRTL ? 'التحميلات المهمة' : 'Important Downloads'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="https://alayen.edu.iq/students_affairs/details/6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              <div className="flex items-center">
                <Download className="w-6 h-6 mr-3 rtl:mr-0 rtl:ml-3" />
                <span>{isRTL ? 'دليل التسجيل الذكي' : 'Smart Registration Guide'}</span>
              </div>
              <span className="text-sm bg-white/20 px-3 py-1 rounded-full">PDF</span>
            </a>
            <a
              href="https://alayen.edu.iq/students_affairs/details/8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              <div className="flex items-center">
                <Download className="w-6 h-6 mr-3 rtl:mr-0 rtl:ml-3" />
                <span>{isRTL ? 'دليل إجراءات شؤون الطلبة' : 'Student Affairs Procedures'}</span>
              </div>
              <span className="text-sm bg-white/20 px-3 py-1 rounded-full">PDF</span>
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            {isRTL ? 'تواصل معنا' : 'Contact Us'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-blue-50 rounded-xl">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="font-bold text-gray-900 mb-2">
                {isRTL ? 'الموقع' : 'Location'}
              </h3>
              <p className="text-sm text-gray-600">
                {isRTL ? 'مبنى شؤون الطلبة - الطابق الأول' : 'Student Affairs Building - First Floor'}
              </p>
            </div>
            <div className="p-6 bg-green-50 rounded-xl">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="font-bold text-gray-900 mb-2">
                {isRTL ? 'الهاتف' : 'Phone'}
              </h3>
              <p className="text-sm text-gray-600">+964 XXX XXX XXXX</p>
            </div>
            <div className="p-6 bg-purple-50 rounded-xl">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="font-bold text-gray-900 mb-2">
                {isRTL ? 'البريد الإلكتروني' : 'Email'}
              </h3>
              <p className="text-sm text-gray-600">students@alayen.edu.iq</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
