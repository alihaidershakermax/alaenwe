'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { ArrowRight, Quote } from 'lucide-react';

export default function PresidentSection() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* أنماط زخرفية خفيفة */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* العنوان الكبير */}
        <div className={`text-center mb-14 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3">
            {isRTL ? 'كلمة رئيس الجامعة' : "President's Message"}
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center max-w-6xl mx-auto">
          {/* صورة الرئيس مع تأثيرات */}
          <div className={`flex-shrink-0 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative group">
              {/* حلقات زخرفية */}
              <div className="absolute -inset-4 rounded-full border-2 border-blue-200 border-dashed animate-spin-slow" style={{ animationDuration: '30s' }} />
              <div className="absolute -inset-8 rounded-full border border-blue-100" />
              
              {/* الصورة الرئيسية */}
              <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-600 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                <img
                  src="https://alayen.edu.iq/public/ar/save_file/0715743f88cc53162a6a427267228a8e_.jpeg"
                  alt={isRTL ? 'رئيس الجامعة' : 'University President'}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* شارة المنصب */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
                {isRTL ? 'رئيس الجامعة' : 'President'}
              </div>
            </div>
          </div>

          {/* معلومات الرئيس */}
          <div className={`flex-1 text-center lg:text-start transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* أيقونة الاقتباس */}
            <Quote className="w-10 h-10 text-blue-200 mb-4 mx-auto lg:mx-0" />
            
            {/* الاسم والمنصب */}
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
              {isRTL ? 'أ.د. حيدر عبد الأمير مرهون' : 'Prof. Dr. Haider Abdul Amir'}
            </h3>
            <p className="text-blue-600 font-semibold mb-6">
              {isRTL ? 'رئيس جامعة العين العراقية' : 'President of Al-Ayen Iraqi University'}
            </p>

            {/* نص الكلمة */}
            <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-8 max-w-2xl">
              {isRTL
                ? 'حرصت جامعة العين العراقية ومنذ اليوم الأول من تأسيسها على ترسيخ المفاهيم الأكاديمية العلمية في جميع مفاصل الجامعة، مستوحية نموذجها من عبق تاريخ حضارة العراق العظيم ومدينة الناصرية الفيحاء التي خطت للبشرية أول حرف وكانت منارة العلم والعلماء.'
                : 'Since its establishment, Al-Ayen Iraqi University has been keen to consolidate scientific academic concepts throughout all aspects of the university, inspired by the great Iraqi civilization and the city of Nasiriyah, which wrote the first letter for humanity and was a beacon of knowledge.'}
            </p>

            {/* زر المزيد */}
            <Link
              href={`/${locale}/president`}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span>{isRTL ? 'اقرأ المزيد' : 'Read More'}</span>
              <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
