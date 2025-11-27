'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function UniversityCouncilSection() {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* العنوان */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            {isRTL ? 'مجلس الجامعة' : 'University Council'}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            {isRTL
              ? 'القيادات الأكاديمية والإدارية التي تقود مسيرة التميز والتطور'
              : 'Academic and Administrative Leaders Driving Excellence and Development'}
          </p>
        </div>

        {/* صورة المجلس */}
        <div className="max-w-5xl mx-auto mb-8">
          <div className="relative group">
            {/* الإطار الخلفي */}
            <div className="absolute inset-0 bg-blue-600 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300" />

            {/* الصورة الرئيسية */}
            <div className="relative bg-white rounded-2xl p-2 shadow-xl">
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="https://alayen.edu.iq/public/ar/save_file/9ae2fa6f95addd1af61c8d541995cfe6_.jpg"
                  alt={isRTL ? 'مجلس جامعة العين العراقية' : 'Al-Ayen University Council'}
                  className="w-full h-auto object-cover"
                />

                {/* طبقة التعتيم */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* العنوان على الصورة */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center">
                  <h3 className="text-xl md:text-2xl font-bold">
                    {isRTL ? 'مجلس جامعة العين العراقية' : 'Al-Ayen Iraqi University Council'}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* زر المزيد */}
        <div className="text-center">
          <a
            href="https://alayen.edu.iq/ar/page/show/1/مجلس-الجامعة"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg"
          >
            <span>{isRTL ? 'عرض مجلس الجامعة' : 'View University Council'}</span>
            <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
          </a>
        </div>
      </div>
    </section>
  );
}
