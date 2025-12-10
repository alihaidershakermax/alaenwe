'use client';

import { useLocale } from 'next-intl';
import { CountUp, BlurText, SpotlightCard } from './reactbits';
import { GraduationCap, Building2, BookOpen, Users, TrendingUp } from 'lucide-react';

export default function StatsSection() {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const stats = [
    { value: 11, labelAr: 'كلية', labelEn: 'Colleges', icon: GraduationCap, suffix: '' },
    { value: 28, labelAr: 'قسم أكاديمي', labelEn: 'Departments', icon: Building2, suffix: '' },
    { value: 3014, labelAr: 'بحث منشور', labelEn: 'Publications', icon: BookOpen, suffix: '+' },
    { value: 44, labelAr: 'قسم إداري', labelEn: 'Admin Depts', icon: Users, suffix: '' },
  ];

  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[120px]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* العنوان */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full mb-6 border border-blue-500/30">
            <TrendingUp className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-blue-300">{isRTL ? 'أرقام وإنجازات' : 'Numbers & Achievements'}</span>
          </div>
          <BlurText
            text={isRTL ? 'إحصائيات الجامعة' : 'University Statistics'}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4"
            delay={0}
            direction="bottom"
          />
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            {isRTL ? 'أرقام تعكس مسيرة التميز والإنجاز' : 'Numbers reflecting excellence and achievement'}
          </p>
        </div>

        {/* الإحصائيات */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <SpotlightCard
                key={index}
                className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/20 group"
                spotlightColor="rgba(59, 130, 246, 0.15)"
              >
                {/* الأيقونة */}
                <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600/30 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-8 h-8 text-blue-400" />
                </div>

                {/* الرقم */}
                <div className="text-5xl md:text-6xl font-black mb-3 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  <CountUp end={stat.value} duration={2.5} delay={index * 0.2} separator="," />
                  <span>{stat.suffix}</span>
                </div>

                {/* التسمية */}
                <div className="text-sm font-bold text-gray-400 group-hover:text-blue-300 transition-colors">
                  {isRTL ? stat.labelAr : stat.labelEn}
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
