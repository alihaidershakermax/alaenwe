'use client';

import { useLocale } from 'next-intl';

export default function StatsSection() {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const stats = [
    { value: '11', labelAr: 'كلية', labelEn: 'Colleges' },
    { value: '28', labelAr: 'قسم أكاديمي', labelEn: 'Departments' },
    { value: '3014', labelAr: 'بحث منشور', labelEn: 'Publications' },
    { value: '44', labelAr: 'قسم إداري', labelEn: 'Admin Depts' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            {isRTL ? 'إحصائيات الجامعة' : 'University Statistics'}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-blue-200"
            >
              <div className="text-3xl md:text-4xl font-black text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-gray-900">
                {isRTL ? stat.labelAr : stat.labelEn}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
