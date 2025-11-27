'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Calendar, GraduationCap, Award, Building2, BarChart3, BookOpen } from 'lucide-react';

export default function QuickAccessSection() {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const quickLinks = [
    {
      icon: Calendar,
      titleAr: 'التقويم الجامعي',
      titleEn: 'Academic Calendar',
      href: `/${locale}/calendar`,
      color: 'bg-blue-500',
    },
    {
      icon: GraduationCap,
      titleAr: 'بوابة الطالب',
      titleEn: 'Student Portal',
      href: 'https://learning.alayen.edu.iq',
      color: 'bg-blue-600',
      external: true,
    },
    {
      icon: Award,
      titleAr: 'الجوائز',
      titleEn: 'Awards',
      href: `/${locale}/awards`,
      color: 'bg-blue-700',
    },
    {
      icon: Building2,
      titleAr: 'مراكز الجامعة',
      titleEn: 'University Centers',
      href: `/${locale}/centers`,
      color: 'bg-blue-500',
    },
    {
      icon: BarChart3,
      titleAr: 'إحصائيات',
      titleEn: 'Statistics',
      href: `/${locale}/statistics`,
      color: 'bg-blue-600',
    },
    {
      icon: BookOpen,
      titleAr: 'مسار بولونيا',
      titleEn: 'Bologna Process',
      href: 'https://alayen.bis.edu.iq/',
      color: 'bg-blue-700',
      external: true,
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickLinks.map((link, index) => {
            const Icon = link.icon;
            const Component = link.external ? 'a' : Link;
            const props = link.external
              ? { href: link.href, target: '_blank', rel: 'noopener noreferrer' }
              : { href: link.href };

            return (
              <Component
                key={index}
                {...props}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 text-center"
              >
                <div className={`${link.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-sm font-bold text-gray-900 group-hover:text-university-primary transition-colors">
                  {isRTL ? link.titleAr : link.titleEn}
                </h3>
              </Component>
            );
          })}
        </div>
      </div>
    </section>
  );
}
