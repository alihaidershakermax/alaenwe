'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { ArrowRight, GraduationCap, BookOpen, Award } from 'lucide-react';

export default function HeroSection() {
  const locale = useLocale();
  const t = useTranslations('home');
  const isRTL = locale === 'ar';

  return (
    <section className="relative bg-gradient-to-br from-university-primary via-blue-700 to-university-secondary text-white py-20 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            {isRTL ? 'جامعة العين العراقية' : 'Al-Ayen Iraqi University'}
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
            {t('description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href={`/${locale}/colleges`}
              className="inline-flex items-center justify-center space-x-2 rtl:space-x-reverse px-8 py-4 bg-white text-university-primary font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              <GraduationCap className="w-5 h-5" />
              <span>{isRTL ? 'تصفح الكليات' : 'Browse Colleges'}</span>
              <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
            </Link>
            
            <Link
              href={`/${locale}/about`}
              className="inline-flex items-center justify-center space-x-2 rtl:space-x-reverse px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-university-primary transition-all transform hover:scale-105"
            >
              <BookOpen className="w-5 h-5" />
              <span>{isRTL ? 'عن الجامعة' : 'About Us'}</span>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold mb-2">11</div>
              <div className="text-sm text-blue-100">{isRTL ? 'كلية' : 'Colleges'}</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold mb-2">28</div>
              <div className="text-sm text-blue-100">{isRTL ? 'قسماً' : 'Departments'}</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold mb-2">3014</div>
              <div className="text-sm text-blue-100">{isRTL ? 'بحث منشور' : 'Publications'}</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold mb-2">44</div>
              <div className="text-sm text-blue-100">{isRTL ? 'قسم إداري' : 'Admin Depts'}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
