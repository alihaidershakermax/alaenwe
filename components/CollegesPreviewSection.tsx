'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { ArrowRight, GraduationCap } from 'lucide-react';
import collegesData from '@/data/colleges.json';

export default function CollegesPreviewSection() {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/5 to-green-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-full border border-purple-500/20 mb-6">
            <GraduationCap className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-semibold text-purple-600">
              {isRTL ? 'الكليات' : 'Colleges'}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent mb-4">
            {isRTL ? 'كلياتنا' : 'Our Colleges'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {isRTL
              ? 'نقدم برامج أكاديمية متميزة في 11 كلية تغطي مختلف التخصصات'
              : 'We offer distinguished academic programs in 11 colleges covering various specializations'}
          </p>
        </div>

        {/* Colleges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-12 max-w-6xl mx-auto">
          {collegesData.map((college, index) => {
            const name = locale === 'ar' ? college.name : college.nameEn;
            return (
              <Link
                key={college.id}
                href={`/${locale}/colleges/${college.id}`}
                className="group flex flex-col items-center animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Circular Badge */}
                <div className="relative w-28 h-28 mb-4">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-university-primary to-purple-600 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

                  {/* Main Circle */}
                  <div className="absolute inset-0 bg-gradient-to-br from-university-primary via-blue-600 to-purple-600 rounded-full transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-2xl" />

                  {/* Inner Circle */}
                  <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-university-primary group-hover:to-purple-600 transition-all duration-500">
                    <GraduationCap className="w-12 h-12 text-university-primary group-hover:text-white transition-colors duration-500 group-hover:scale-110" />
                  </div>
                </div>

                {/* College Name */}
                <span className="text-sm font-bold text-gray-700 text-center max-w-[140px] leading-tight group-hover:text-university-primary transition-colors px-2">
                  {name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href={`/${locale}/colleges`}
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-university-primary via-blue-600 to-purple-600 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-purple-500/30 transition-all transform hover:scale-105 group"
          >
            <span>{isRTL ? 'عرض جميع الكليات' : 'View All Colleges'}</span>
            <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
          </Link>
        </div>
      </div>
    </section>
  );
}
