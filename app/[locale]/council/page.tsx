'use client';

import { useLocale } from 'next-intl';
import { Users, Award, BookOpen, GraduationCap, Target, Shield } from 'lucide-react';

export default function CouncilPage() {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const councilMembers = [
    {
      nameAr: 'أ.د. محمد جواد الخفاجي',
      nameEn: 'Prof. Dr. Mohammed Jawad Al-Khafaji',
      positionAr: 'رئيس مجلس الجامعة',
      positionEn: 'Chairman of the University Council',
    },
    {
      nameAr: 'أ.د. علي حسن الموسوي',
      nameEn: 'Prof. Dr. Ali Hassan Al-Mousawi',
      positionAr: 'نائب رئيس المجلس',
      positionEn: 'Vice Chairman',
    },
    {
      nameAr: 'أ.د. فاطمة أحمد الزهراء',
      nameEn: 'Prof. Dr. Fatima Ahmed Al-Zahra',
      positionAr: 'عضو مجلس الجامعة - كلية الطب',
      positionEn: 'Council Member - College of Medicine',
    },
    {
      nameAr: 'أ.د. حسين كريم العبودي',
      nameEn: 'Prof. Dr. Hussein Kareem Al-Aboudi',
      positionAr: 'عضو مجلس الجامعة - كلية الهندسة',
      positionEn: 'Council Member - College of Engineering',
    },
    {
      nameAr: 'أ.د. زينب محمد الحكيم',
      nameEn: 'Prof. Dr. Zainab Mohammed Al-Hakim',
      positionAr: 'عضو مجلس الجامعة - كلية الصيدلة',
      positionEn: 'Council Member - College of Pharmacy',
    },
    {
      nameAr: 'أ.د. عباس جعفر السعدي',
      nameEn: 'Prof. Dr. Abbas Jaafar Al-Saadi',
      positionAr: 'عضو مجلس الجامعة - كلية القانون',
      positionEn: 'Council Member - College of Law',
    }
  ];

  const responsibilities = [
    { icon: Target, titleAr: 'رسم السياسات', titleEn: 'Policy Making', descAr: 'وضع السياسات العامة للجامعة', descEn: 'Setting general university policies' },
    { icon: BookOpen, titleAr: 'البرامج الأكاديمية', titleEn: 'Academic Programs', descAr: 'اعتماد البرامج والخطط الدراسية', descEn: 'Approving academic programs' },
    { icon: Award, titleAr: 'الجودة والاعتماد', titleEn: 'Quality', descAr: 'ضمان جودة التعليم', descEn: 'Ensuring education quality' },
    { icon: Users, titleAr: 'التعيينات', titleEn: 'Appointments', descAr: 'الموافقة على التعيينات', descEn: 'Approving appointments' },
    { icon: Shield, titleAr: 'الرقابة المالية', titleEn: 'Financial', descAr: 'مراقبة الميزانية', descEn: 'Budget monitoring' },
    { icon: GraduationCap, titleAr: 'البحث العلمي', titleEn: 'Research', descAr: 'دعم البحث العلمي', descEn: 'Supporting research' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-gray-900" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              {isRTL ? 'مجلس جامعة العين العراقية' : 'Al-Ayen University Council'}
            </h1>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-6" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {isRTL
                ? 'الهيئة العليا المسؤولة عن رسم السياسات الأكاديمية والإدارية'
                : 'The supreme body responsible for setting academic and administrative policies'}
            </p>
          </div>
        </div>
      </section>

      {/* Council Responsibilities */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              {isRTL ? 'مسؤوليات المجلس' : 'Council Responsibilities'}
            </h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {responsibilities.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {isRTL ? item.titleAr : item.titleEn}
                </h3>
                <p className="text-gray-600">
                  {isRTL ? item.descAr : item.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Council Members */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              {isRTL ? 'أعضاء المجلس' : 'Council Members'}
            </h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {councilMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-square bg-blue-600/20 relative overflow-hidden flex items-center justify-center">
                  <Users className="w-24 h-24 text-white/30" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {isRTL ? member.nameAr : member.nameEn}
                  </h3>
                  <p className="text-blue-300 font-medium">
                    {isRTL ? member.positionAr : member.positionEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-blue-600 rounded-3xl p-12 text-white text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-black mb-6">
              {isRTL ? 'رؤية المجلس' : 'Council Vision'}
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              {isRTL
                ? 'نسعى لجعل جامعة العين العراقية مؤسسة أكاديمية رائدة على المستوى الوطني والإقليمي، من خلال تقديم تعليم عالي الجودة، وتعزيز البحث العلمي، وخدمة المجتمع.'
                : 'We strive to make Al-Ayen Iraqi University a leading academic institution at the national and regional levels, by providing high-quality education and promoting scientific research.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
