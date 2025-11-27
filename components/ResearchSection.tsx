'use client';

import { useLocale } from 'next-intl';
import { Microscope, BookOpen, FlaskConical, Award, ArrowRight, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function ResearchSection() {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const researchAreas = [
    {
      titleAr: 'الهندسة الطبية الحيوية',
      titleEn: 'Biomedical Engineering',
      descAr: 'أبحاث متقدمة في تطوير الأجهزة الطبية والتقنيات الحيوية',
      descEn: 'Advanced research in medical device development and biotechnology',
      image: '/images/research/biomedical.jpg',
      icon: FlaskConical,
      papers: 245,
      date: '2024',
    },
    {
      titleAr: 'الذكاء الاصطناعي',
      titleEn: 'Artificial Intelligence',
      descAr: 'تطبيقات الذكاء الاصطناعي في الطب والهندسة',
      descEn: 'AI applications in medicine and engineering',
      image: '/images/research/ai.jpg',
      icon: Microscope,
      papers: 189,
      date: '2024',
    },
    {
      titleAr: 'الطاقة المتجددة',
      titleEn: 'Renewable Energy',
      descAr: 'حلول مبتكرة للطاقة النظيفة والمستدامة',
      descEn: 'Innovative solutions for clean and sustainable energy',
      image: '/images/research/energy.jpg',
      icon: Award,
      papers: 167,
      date: '2024',
    },
    {
      titleAr: 'علوم البيانات',
      titleEn: 'Data Science',
      descAr: 'تحليل البيانات الضخمة والتعلم الآلي',
      descEn: 'Big data analytics and machine learning',
      image: '/images/research/data.jpg',
      icon: BookOpen,
      papers: 203,
      date: '2024',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-full border border-emerald-500/20 mb-6">
            <div className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse" />
            <span className="text-sm font-bold text-emerald-700 uppercase tracking-wider">
              {isRTL ? 'البحث العلمي' : 'Scientific Research'}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-emerald-900 to-gray-900 bg-clip-text text-transparent mb-4">
            {isRTL ? 'التميز في البحث العلمي' : 'Excellence in Scientific Research'}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {isRTL
              ? 'نسعى لتحقيق التميز البحثي من خلال مجالات بحثية متنوعة ومتطورة'
              : 'We strive for research excellence through diverse and advanced research fields'}
          </p>
        </div>

        {/* Research Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {researchAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-56 bg-gradient-to-br from-emerald-500 to-teal-600 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/90 to-teal-700/90 group-hover:opacity-80 transition-opacity" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Papers Count */}
                  <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4 px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                    <span className="text-xs font-bold text-white">{area.papers} {isRTL ? 'بحث' : 'Papers'}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{area.date}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {isRTL ? area.titleAr : area.titleEn}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-4">
                    {isRTL ? area.descAr : area.descEn}
                  </p>

                  <Link
                    href={`/${locale}/research`}
                    className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:gap-3 transition-all group/link"
                  >
                    <span>{isRTL ? 'اقرأ المزيد' : 'Read More'}</span>
                    <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Research Stats */}
        <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-black mb-2">3014</div>
              <div className="text-emerald-100 font-medium">{isRTL ? 'بحث منشور في Scopus' : 'Published in Scopus'}</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-black mb-2">500+</div>
              <div className="text-emerald-100 font-medium">{isRTL ? 'باحث متميز' : 'Distinguished Researchers'}</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-black mb-2">50+</div>
              <div className="text-emerald-100 font-medium">{isRTL ? 'مشروع بحثي' : 'Research Projects'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
