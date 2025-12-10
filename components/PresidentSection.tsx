'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { ArrowRight, Quote } from 'lucide-react';
import { BlurText, TiltCard, Magnet } from './reactbits';

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
    <section ref={sectionRef} className="relative py-24 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
      {/* أنماط زخرفية */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <BlurText
            text={isRTL ? 'كلمة رئيس الجامعة' : "President's Message"}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4"
            delay={0}
            direction="bottom"
          />
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center max-w-6xl mx-auto">
          <div className={`flex-shrink-0 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <TiltCard maxTilt={10} scale={1.02} glare glareMaxOpacity={0.2}>
              <div className="relative group">
                <div className="absolute -inset-4 rounded-full border-2 border-blue-200/50 border-dashed animate-spin-slow" style={{ animationDuration: '30s' }} />
                <div className="absolute -inset-8 rounded-full border border-blue-100/50" />
                
                <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <img
                    src="https://alayen.edu.iq/public/ar/save_file/0715743f88cc53162a6a427267228a8e_.jpeg"
                    alt={isRTL ? 'رئيس الجامعة' : 'University President'}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-xl whitespace-nowrap">
                  {isRTL ? 'رئيس الجامعة' : 'President'}
                </div>
              </div>
            </TiltCard>
          </div>

          <div className={`flex-1 text-center lg:text-start transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-50 rounded-2xl mb-6">
              <Quote className="w-7 h-7 text-blue-500" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
              {isRTL ? 'أ.د. حيدر عبد الأمير مرهون' : 'Prof. Dr. Haider Abdul Amir'}
            </h3>
            <p className="text-blue-600 font-semibold mb-6 text-lg">
              {isRTL ? 'رئيس جامعة العين العراقية' : 'President of Al-Ayen Iraqi University'}
            </p>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-8 max-w-2xl">
              {isRTL
                ? 'حرصت جامعة العين العراقية ومنذ اليوم الأول من تأسيسها على ترسيخ المفاهيم الأكاديمية العلمية في جميع مفاصل الجامعة، مستوحية نموذجها من عبق تاريخ حضارة العراق العظيم ومدينة الناصرية الفيحاء.'
                : 'Since its establishment, Al-Ayen Iraqi University has been keen to consolidate scientific academic concepts throughout all aspects of the university, inspired by the great Iraqi civilization.'}
            </p>

            <Magnet strength={0.3}>
              <Link
                href={`/${locale}/president`}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300"
              >
                <span>{isRTL ? 'اقرأ المزيد' : 'Read More'}</span>
                <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
              </Link>
            </Magnet>
          </div>
        </div>
      </div>
    </section>
  );
}
