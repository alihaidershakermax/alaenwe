'use client';

import { useLocale } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { BlurText, TiltCard, Magnet } from './reactbits';

export default function UniversityCouncilSection() {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* العنوان */}
        <div className="text-center mb-14">
          <BlurText
            text={isRTL ? 'مجلس الجامعة' : 'University Council'}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4"
            delay={0}
            direction="bottom"
          />
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {isRTL
              ? 'القيادات الأكاديمية والإدارية التي تقود مسيرة التميز والتطور'
              : 'Academic and Administrative Leaders Driving Excellence and Development'}
          </p>
        </div>

        {/* صورة المجلس */}
        <div className="max-w-5xl mx-auto mb-10">
          <TiltCard maxTilt={5} scale={1.01} glare glareMaxOpacity={0.1}>
            <div className="relative group">
              {/* الإطار الخلفي */}
              <div className="absolute -inset-2 bg-blue-600 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500 opacity-80" />

              {/* الصورة الرئيسية */}
              <div className="relative bg-white rounded-2xl p-2 shadow-2xl">
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src="https://alayen.edu.iq/public/ar/save_file/9ae2fa6f95addd1af61c8d541995cfe6_.jpg"
                    alt={isRTL ? 'مجلس جامعة العين العراقية' : 'Al-Ayen University Council'}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* طبقة التعتيم */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* العنوان على الصورة */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white text-center">
                    <h3 className="text-2xl md:text-3xl font-black mb-2">
                      {isRTL ? 'مجلس جامعة العين العراقية' : 'Al-Ayen Iraqi University Council'}
                    </h3>
                    <p className="text-white/70">
                      {isRTL ? 'قيادة أكاديمية متميزة' : 'Distinguished Academic Leadership'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* زر المزيد */}
        <div className="text-center">
          <Magnet strength={0.3}>
            <a
              href="https://alayen.edu.iq/ar/page/show/1/مجلس-الجامعة"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300"
            >
              <span>{isRTL ? 'عرض مجلس الجامعة' : 'View University Council'}</span>
              <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
            </a>
          </Magnet>
        </div>
      </div>
    </section>
  );
}
