'use client';

import { useLocale } from 'next-intl';
import { Globe, Building, Microscope } from 'lucide-react';

export default function PartnershipsSection() {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const partnerships = [
    {
      icon: Globe,
      titleAr: 'الاتفاقيات العالمية',
      titleEn: 'International Agreements',
      descAr: 'شراكات مع جامعات ومؤسسات عالمية',
      descEn: 'Partnerships with international universities and institutions',
      count: '50+',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Building,
      titleAr: 'الاتفاقيات المحلية',
      titleEn: 'Local Agreements',
      descAr: 'تعاون مع مؤسسات محلية وحكومية',
      descEn: 'Cooperation with local and governmental institutions',
      count: '30+',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Microscope,
      titleAr: 'الاتفاقيات العلمية',
      titleEn: 'Scientific Agreements',
      descAr: 'شراكات بحثية مع مراكز علمية',
      descEn: 'Research partnerships with scientific centers',
      count: '40+',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {isRTL ? 'الشراكات والاتفاقيات' : 'Partnerships & Agreements'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {isRTL
              ? 'شبكة واسعة من الشراكات المحلية والدولية'
              : 'Wide network of local and international partnerships'}
          </p>
        </div>

        {/* Partnerships Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partnerships.map((partnership, index) => {
            const Icon = partnership.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Header with Gradient */}
                <div className={`bg-gradient-to-br ${partnership.color} p-8 text-white text-center`}>
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="text-4xl font-bold mb-2">{partnership.count}</div>
                  <h3 className="text-xl font-bold">
                    {isRTL ? partnership.titleAr : partnership.titleEn}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 text-center">
                    {isRTL ? partnership.descAr : partnership.descEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Partnership Logos Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {isRTL ? 'شركاؤنا' : 'Our Partners'}
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-xs">{isRTL ? 'شعار' : 'Logo'}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
