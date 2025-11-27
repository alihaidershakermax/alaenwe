'use client';

import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { ChevronLeft, ChevronRight, GraduationCap, Award, BookOpen } from 'lucide-react';

export default function HeroSlider() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/images/slider/slide1.jpg',
      titleAr: 'جامعة العين العراقية',
      titleEn: 'Al-Ayen Iraqi University',
      subtitleAr: 'التميز في التعليم والبحث العلمي',
      subtitleEn: 'Excellence in Education and Research',
      icon: GraduationCap,
      gradient: 'from-blue-600 via-blue-700 to-indigo-800',
    },
    {
      image: '/images/slider/slide2.jpg',
      titleAr: '11 كلية متخصصة',
      titleEn: '11 Specialized Colleges',
      subtitleAr: '28 قسماً أكاديمياً في مختلف التخصصات',
      subtitleEn: '28 Academic Departments in Various Disciplines',
      icon: BookOpen,
      gradient: 'from-green-600 via-emerald-700 to-teal-800',
    },
    {
      image: '/images/slider/slide3.jpg',
      titleAr: '3014 بحث منشور',
      titleEn: '3014 Published Research',
      subtitleAr: 'في قواعد البيانات العالمية Scopus',
      subtitleEn: 'In Scopus International Database',
      icon: Award,
      gradient: 'from-purple-600 via-violet-700 to-purple-800',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[600px] md:h-[700px] overflow-hidden bg-gray-900">
      {/* Slides */}
      {slides.map((slide, index) => {
        const Icon = slide.icon;
        return (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            {/* Animated Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} animate-gradient`}>
              {/* Overlay Pattern */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }} />
            </div>
            
            {/* Content */}
            <div className="relative h-full flex items-center justify-center text-white">
              <div className="container mx-auto px-4 text-center">
                {/* Icon */}
                <div className="mb-8 inline-block animate-bounce-slow">
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border-4 border-white/30 shadow-2xl">
                    <Icon className="w-12 h-12 md:w-16 md:h-16" />
                  </div>
                </div>
                
                {/* Title */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-2xl animate-slide-up">
                  {isRTL ? slide.titleAr : slide.titleEn}
                </h1>
                
                {/* Subtitle */}
                <p className="text-xl md:text-3xl text-white/90 max-w-3xl mx-auto drop-shadow-lg animate-slide-up-delay">
                  {isRTL ? slide.subtitleAr : slide.subtitleEn}
                </p>
                
                {/* Decorative Line */}
                <div className="mt-8 flex justify-center">
                  <div className="w-24 h-1 bg-white/50 rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 rtl:left-auto rtl:right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all border-2 border-white/30 hover:scale-110 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className={`w-7 h-7 text-white group-hover:scale-110 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 rtl:right-auto rtl:left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all border-2 border-white/30 hover:scale-110 group"
        aria-label="Next slide"
      >
        <ChevronRight className={`w-7 h-7 text-white group-hover:scale-110 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 rtl:space-x-reverse bg-black/20 backdrop-blur-md px-6 py-3 rounded-full">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-10' : 'bg-white/50 w-3 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
