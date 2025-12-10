'use client';

import { useLocale } from 'next-intl';
import { GraduationCap, BookOpen, Users, Award, Globe, Lightbulb } from 'lucide-react';

export default function TalentsSection() {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const features = [
    {
      icon: GraduationCap,
      titleAr: 'التميز الأكاديمي',
      titleEn: 'Academic Excellence',
      descAr: 'برامج أكاديمية متطورة تواكب أحدث المعايير العالمية',
      descEn: 'Advanced academic programs that meet the latest global standards',
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: BookOpen,
      titleAr: 'البحث العلمي',
      titleEn: 'Scientific Research',
      descAr: 'مراكز بحثية متقدمة تدعم الابتكار والاكتشاف',
      descEn: 'Advanced research centers supporting innovation and discovery',
      color: 'from-slate-700 to-slate-800',
    },
    {
      icon: Users,
      titleAr: 'بيئة تعليمية',
      titleEn: 'Learning Environment',
      descAr: 'بيئة محفزة تدعم الإبداع والتطور الأكاديمي',
      descEn: 'Stimulating environment supporting creativity and academic development',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Award,
      titleAr: 'الاعتماد الأكاديمي',
      titleEn: 'Academic Accreditation',
      descAr: 'اعتمادات محلية ودولية تضمن جودة التعليم',
      descEn: 'Local and international accreditations ensuring quality education',
      color: 'from-slate-800 to-slate-900',
    },
    {
      icon: Globe,
      titleAr: 'الشراكات الدولية',
      titleEn: 'International Partnerships',
      descAr: 'تعاون مع جامعات عالمية رائدة في مختلف المجالات',
      descEn: 'Collaboration with leading global universities',
      color: 'from-blue-700 to-blue-800',
    },
    {
      icon: Lightbulb,
      titleAr: 'الابتكار والتطوير',
      titleEn: 'Innovation & Development',
      descAr: 'تشجيع الابتكار والتفكير الإبداعي لدى الطلاب',
      descEn: 'Encouraging innovation and creative thinking among students',
      color: 'from-slate-600 to-slate-700',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-200 mb-6">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
            <span className="text-sm font-bold text-blue-700 uppercase tracking-wider">
              {isRTL ? 'لماذا جامعة العين' : 'Why Al-Ayen University'}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            {isRTL ? 'نحافظ على القيم ونُعِدُّ للمستقبل' : 'Preserving Values, Preparing for the Future'}
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {isRTL
              ? 'نسعى لتقديم تعليم متميز يجمع بين الأصالة والمعاصرة لإعداد جيل قادر على مواجهة تحديات المستقبل'
              : 'We strive to provide distinguished education combining authenticity and modernity'}
          </p>
        </div>

        {/* Features Grid with Animation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                {/* Icon with Animation */}
                <div className="relative mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {isRTL ? feature.titleAr : feature.titleEn}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {isRTL ? feature.descAr : feature.descEn}
                </p>

                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
