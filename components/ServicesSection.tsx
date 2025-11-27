'use client';

import { useLocale } from 'next-intl';
import { ArrowRight, Monitor, Users, Award, FileCheck, Globe } from 'lucide-react';

export default function ServicesSection() {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const services = [
    { titleAr: 'نظام التعليم الالكتروني', titleEn: 'E-Learning System', url: 'https://elearning.alayen.edu.iq/', Icon: Monitor },
    { titleAr: 'مواقع التدريسيين', titleEn: 'Staff Websites', url: 'https://teacher.alayen.edu.iq/', Icon: Users },
    { titleAr: 'نظام الشهادات', titleEn: 'Certificates System', url: 'https://alayen.edu.iq/continuous_education/participation_certificates', Icon: Award },
    { titleAr: 'نظام النتائج', titleEn: 'Results System', url: 'https://learning.alayen.edu.iq/', Icon: FileCheck },
    { titleAr: 'مسار بولونيا', titleEn: 'Bologna Path', url: 'https://alayen.bis.edu.iq/', Icon: Globe },
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            {isRTL ? 'الخدمات الإلكترونية' : 'Electronic Services'}
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full" />
        </div>

        {/* شبكة الخدمات بأيقونات كبيرة */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.Icon;
            return (
              <a
                key={index}
                href={service.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center text-center"
              >
                {/* أيقونة كبيرة */}
                <div className="w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center mb-4 border border-gray-700 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all group-hover:scale-105 shadow-lg">
                  <IconComponent className="w-9 h-9 text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-white font-semibold text-sm leading-tight group-hover:text-blue-400 transition-colors">
                  {isRTL ? service.titleAr : service.titleEn}
                </h3>
              </a>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://systems.alayen.edu.iq/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors"
          >
            <span>{isRTL ? 'جميع الأنظمة' : 'All Systems'}</span>
            <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
          </a>
        </div>
      </div>
    </section>
  );
}
