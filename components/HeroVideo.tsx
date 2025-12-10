'use client';

import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { Magnet, Particles } from './reactbits';

const slides = [
  {
    titleAr: 'جامعة العين العراقية',
    titleEn: 'Al-Ayen Iraqi University',
    subtitleAr: 'نحافظ على القيم ونُعِدُّ للمستقبل',
    subtitleEn: 'Preserving Values, Preparing for the Future',
    descAr: 'مؤسسة تعليمية رائدة تسعى لتقديم تعليم نوعي متميز وبناء جيل واعد',
    descEn: 'A leading educational institution striving to provide quality education and build a promising generation',
  },
  {
    titleAr: '11 كلية متخصصة',
    titleEn: '11 Specialized Colleges',
    subtitleAr: 'برامج أكاديمية متميزة في مختلف التخصصات',
    subtitleEn: 'Distinguished academic programs in various fields',
    descAr: 'نقدم برامج متنوعة في الطب والهندسة والعلوم والقانون',
    descEn: 'We offer diverse programs in medicine, engineering, science and law',
  },
  {
    titleAr: 'التميز الأكاديمي',
    titleEn: 'Academic Excellence',
    subtitleAr: 'تصنيفات عالمية واعتمادات دولية',
    subtitleEn: 'Global rankings and international accreditations',
    descAr: 'معترف بها محلياً ودولياً بجودة التعليم والبحث العلمي',
    descEn: 'Recognized locally and internationally for quality education and research',
  },
];

export default function HeroVideo() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 500);
    }, 6000);
    
    return () => clearInterval(slideTimer);
  }, []);

  const currentTitle = isRTL ? slides[currentSlide].titleAr : slides[currentSlide].titleEn;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 z-[5]">
        <Particles
          quantity={60}
          color="#3b82f6"
          size={2}
          speed={0.5}
          staticity={100}
        />
      </div>

      {/* فيديو YouTube */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <iframe
            src="https://www.youtube.com/embed/2e9wZwbdq_c?autoplay=1&mute=1&loop=1&playlist=2e9wZwbdq_c&start=67&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1"
            title="Al-Ayen University"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto aspect-video scale-150"
            style={{ border: 'none' }}
          />
        </div>
        
        {/* تأثير سينمائي */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
        
        {/* طبقة تعتيم */}
        <div className="absolute inset-0 bg-black/50 pointer-events-none" />
      </div>

      {/* المحتوى الرئيسي */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        {/* العنوان */}
        <div className="mb-8">
          <h1 
            className={`text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 transition-all duration-500 ${
              isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            {currentTitle}
          </h1>
          
          {/* الخط المتحرك */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-20 h-0.5 bg-white/20 rounded-full" />
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
            <div className="w-20 h-0.5 bg-white/20 rounded-full" />
          </div>
        </div>

        {/* العنوان الفرعي */}
        <div className={`transition-all duration-500 delay-100 ${
          isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}>
          <p className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-400 mb-4">
            {isRTL ? slides[currentSlide].subtitleAr : slides[currentSlide].subtitleEn}
          </p>
          
          <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto mb-10">
            {isRTL ? slides[currentSlide].descAr : slides[currentSlide].descEn}
          </p>
        </div>

        {/* الأزرار */}
        <div className={`flex flex-wrap items-center justify-center gap-4 transition-all duration-500 delay-200 ${
          isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}>
          <Magnet strength={0.3}>
            <Link
              href={`/${locale}/about`}
              className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
            >
              {isRTL ? 'اكتشف الجامعة' : 'Discover University'}
            </Link>
          </Magnet>
          
          <Magnet strength={0.3}>
            <Link
              href={`/${locale}/colleges`}
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              {isRTL ? 'الكليات' : 'Colleges'}
            </Link>
          </Magnet>
        </div>

        {/* مؤشرات السلايد */}
        <div className="flex items-center gap-3 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAnimating(true);
                setTimeout(() => {
                  setCurrentSlide(index);
                  setIsAnimating(false);
                }, 300);
              }}
              className={`h-2 rounded-full transition-all duration-500 ${
                index === currentSlide 
                  ? 'w-10 bg-blue-500' 
                  : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
