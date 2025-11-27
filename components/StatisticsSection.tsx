'use client';

import { useLocale, useTranslations } from 'next-intl';
import { GraduationCap, Building2, BookOpen, Users, Globe, Building, Award } from 'lucide-react';
import statsData from '@/data/stats.json';

export default function StatisticsSection() {
  const locale = useLocale();
  const t = useTranslations('stats');
  const isRTL = locale === 'ar';

  const mainStats = [
    {
      icon: Building2,
      value: statsData.colleges,
      label: t('colleges'),
    },
    {
      icon: GraduationCap,
      value: statsData.departments,
      label: t('departments'),
    },
    {
      icon: BookOpen,
      value: statsData.scopusPublications,
      label: t('publications'),
    },
    {
      icon: Users,
      value: statsData.administrativeDepartments,
      label: t('adminDepartments'),
    },
  ];

  const agreements = [
    {
      icon: Building,
      titleAr: 'الاتفاقيات المحلية',
      titleEn: 'Local Agreements',
      count: '30+',
    },
    {
      icon: Globe,
      titleAr: 'الاتفاقيات العالمية',
      titleEn: 'International Agreements',
      count: '50+',
    },
    {
      icon: Award,
      titleAr: 'التصنيفات العالمية',
      titleEn: 'Global Rankings',
      count: '5+',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-blue-50/50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-600/10 to-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-blue-600/10 backdrop-blur-sm rounded-full border border-blue-500/20 mb-6">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-blue-600">
              {isRTL ? 'الإحصائيات' : 'Statistics'}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent mb-4">
            {isRTL ? 'إحصائيات الجامعة' : 'University Statistics'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {isRTL
              ? 'أرقام تعكس التميز والإنجاز في مسيرتنا الأكاديمية والبحثية'
              : 'Numbers reflecting excellence and achievement in our academic and research journey'}
          </p>
        </div>

        {/* Main Statistics - Clear and Prominent */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {mainStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 text-center border-2 border-blue-500/30 hover:border-blue-600 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl mb-5 shadow-lg group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-10 h-10 text-white" />
                </div>

                {/* Value - Large and Clear */}
                <div className="relative text-5xl md:text-6xl font-black text-blue-600 mb-3">
                  {stat.value.toLocaleString(locale)}
                </div>

                {/* Label - Bold and Clear */}
                <div className="relative text-base text-gray-800 font-bold uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Agreements Section */}
        <div className="relative">
          {/* Divider */}
          <div className="flex items-center justify-center mb-12">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-full max-w-md" />
          </div>

          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent text-center mb-10">
            {isRTL ? 'الشراكات والاتفاقيات' : 'Partnerships & Agreements'}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {agreements.map((agreement, index) => {
              const Icon = agreement.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-10 text-center border-2 border-blue-500/30 hover:border-blue-600 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${(index + 4) * 100}ms` }}
                >
                  {/* Icon */}
                  <div className="relative inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-12 h-12 text-white" />
                  </div>

                  {/* Count - Large and Clear */}
                  <div className="relative text-6xl font-black text-blue-600 mb-4">
                    {agreement.count}
                  </div>

                  {/* Title - Bold and Clear */}
                  <h4 className="relative text-xl font-bold text-gray-800">
                    {isRTL ? agreement.titleAr : agreement.titleEn}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
