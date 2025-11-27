'use client';

import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import Link from 'next/link';

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
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  // تأثير الكتابة المتحركة
  useEffect(() => {
    const currentTitle = isRTL ? slides[currentSlide].titleAr : slides[currentSlide].titleEn;
    
    if (isTyping) {
      if (displayedText.length < currentTitle.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
      }
    }
  }, [displayedText, isTyping, currentSlide, isRTL]);

  // تغيير السلايد
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setDisplayedText('');
      setIsTyping(true);
    }, 5000);
    
    return () => clearInterval(slideTimer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
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
        
        {/* تأثير سينمائي - شرائط الأفلام */}
        <div className="absolute top-0 left-0 right-0 h-16 md:h-20 bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-16 md:h-20 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
        
        {/* طبقة تعتيم مع تأثير vignette سينمائي */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.6) 100%)'
          }}
        />
        
        {/* تأثير الحبيبات السينمائية */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
          }}
        />
      </div>

      {/* المحتوى الرئيسي */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        {/* العنوان مع تأثير الكتابة */}
        <div className="mb-6">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 min-h-[1.2em]"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}
          >
            {displayedText}
            <span className="animate-pulse text-blue-400">|</span>
          </h1>
          
          {/* الخط الأزرق المتحرك */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-16 h-0.5 bg-white/30 rounded-full" />
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <div className="w-16 h-0.5 bg-white/30 rounded-full" />
          </div>
        </div>

        {/* العنوان الفرعي */}
        <div className={`transition-all duration-700 ${!isTyping ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p 
            className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}
          >
            {isRTL ? slides[currentSlide].subtitleAr : slides[currentSlide].subtitleEn}
          </p>
          
          <p 
            className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-8"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
          >
            {isRTL ? slides[currentSlide].descAr : slides[currentSlide].descEn}
          </p>
        </div>

        {/* الأزرار */}
        <div className={`flex flex-wrap items-center justify-center gap-4 transition-all duration-700 delay-300 ${!isTyping ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Link
            href={`/${locale}/about`}
            className="px-8 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-colors"
          >
            {isRTL ? 'اكتشف الجامعة' : 'Discover University'}
          </Link>
          <Link
            href={`/${locale}/colleges`}
            className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border border-white/30 hover:bg-white/20 transition-colors"
          >
            {isRTL ? 'الكليات' : 'Colleges'}
          </Link>
        </div>

        {/* مؤشرات السلايد */}
        <div className="flex items-center gap-2 mt-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setDisplayedText('');
                setIsTyping(true);
              }}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === currentSlide 
                  ? 'w-8 bg-blue-500' 
                  : 'w-2 bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>

    </section>
  );
}
