'use client';

import { useLocale } from 'next-intl';
import statsData from '@/data/stats.json';

export default function StatsBar() {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const stats = [
    {
      value: statsData.colleges,
      labelAr: 'تضم الجامعة 11 كلية',
      labelEn: 'The University has 11 Colleges',
    },
    {
      value: statsData.departments,
      labelAr: 'تضم الجامعة 28 قسماً',
      labelEn: 'The University has 28 Departments',
    },
    {
      value: statsData.scopusPublications,
      labelAr: 'عدد البحوث المنشورة في سكوبس',
      labelEn: 'Published Research in Scopus',
    },
    {
      value: statsData.administrativeDepartments,
      labelAr: 'عدد الأقسام الإدارية في الجامعة',
      labelEn: 'Administrative Departments',
    },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-50 via-white to-gray-50 border-y border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group text-center transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative inline-block">
                {/* Animated Circle Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-university-primary to-university-secondary rounded-full opacity-10 group-hover:opacity-20 transition-opacity blur-xl" />
                
                {/* Number */}
                <div className="relative text-5xl md:text-6xl font-bold bg-gradient-to-br from-university-primary to-university-secondary bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">
                  {stat.value.toLocaleString(locale)}
                </div>
              </div>
              
              {/* Label */}
              <div className="text-sm md:text-base text-gray-700 font-semibold px-2 group-hover:text-university-primary transition-colors">
                {isRTL ? stat.labelAr : stat.labelEn}
              </div>
              
              {/* Decorative Line */}
              <div className="mt-3 mx-auto w-12 h-1 bg-gradient-to-r from-transparent via-university-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
