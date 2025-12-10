'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { BlurText, TiltCard } from './reactbits';
import { ArrowRight } from 'lucide-react';

const collegesLogos = [
  { id: 'medicine', nameAr: 'كلية الطب', nameEn: 'Medicine', website: 'https://med.alayen.edu.iq/', logo: 'https://med.alayen.edu.iq/public/ar/image/site/logo.png' },
  { id: 'dentistry', nameAr: 'طب الاسنان', nameEn: 'Dentistry', website: 'https://dent.alayen.edu.iq/', logo: 'https://dent.alayen.edu.iq/public/ar/image/site/logo.png' },
  { id: 'pharmacy', nameAr: 'الصيدلة', nameEn: 'Pharmacy', website: 'https://pharm.alayen.edu.iq/', logo: 'https://pharm.alayen.edu.iq/public/ar/image/site/logo.png' },
  { id: 'health-tech', nameAr: 'التقنيات الطبية', nameEn: 'Health Tech', website: 'https://hmtech.alayen.edu.iq/', logo: 'https://hmtech.alayen.edu.iq/public/ar/image/site/logo.png' },
  { id: 'physical-education', nameAr: 'التربية البدنية', nameEn: 'Physical Ed', website: 'https://physedu.alayen.edu.iq/', logo: 'https://physedu.alayen.edu.iq/public/ar/image/site/logo.png' },
  { id: 'technical-engineering', nameAr: 'التقنية الهندسية', nameEn: 'Tech Eng', website: 'https://teeng.alayen.edu.iq/', logo: 'https://teeng.alayen.edu.iq/public/ar/image/site/logo.png' },
  { id: 'law', nameAr: 'القانون', nameEn: 'Law', website: 'https://law.alayen.edu.iq/', logo: 'https://law.alayen.edu.iq/public/ar/image/site/logo.png' },
  { id: 'education', nameAr: 'التربية', nameEn: 'Education', website: 'https://edu.alayen.edu.iq/', logo: 'https://edu.alayen.edu.iq/public/ar/image/site/logo.png' },
  { id: 'engineering', nameAr: 'الهندسة', nameEn: 'Engineering', website: 'https://eng.alayen.edu.iq/', logo: 'https://eng.alayen.edu.iq/public/ar/image/site/logo.png' },
  { id: 'science', nameAr: 'العلوم', nameEn: 'Science', website: 'https://sci.alayen.edu.iq/', logo: 'https://sci.alayen.edu.iq/public/ar/image/site/logo.png' },
  { id: 'business', nameAr: 'الادارة والاقتصاد', nameEn: 'Business', website: 'https://business.alayen.edu.iq/', logo: 'https://business.alayen.edu.iq/public/ar/image/site/logo.png' },
];

// ترتيب الكليات بشكل هرمي V للموبايل
const mobileRows = [
  [0],           // صف 1: كلية واحدة
  [1, 2],        // صف 2: كليتين
  [3, 4, 5],     // صف 3: 3 كليات
  [6, 7, 8, 9],  // صف 4: 4 كليات
  [10],          // صف 5: كلية واحدة
];

export default function CollegesLogosBar() {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const CollegeItem = ({ college }: { college: typeof collegesLogos[0] }) => {
    const name = isRTL ? college.nameAr : college.nameEn;
    return (
      <TiltCard maxTilt={12} scale={1.05} glare glareMaxOpacity={0.1}>
        <a
          href={college.website}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center gap-2 p-2"
          title={name}
        >
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white shadow-lg p-3 border border-gray-100 group-hover:border-blue-300 group-hover:shadow-xl group-hover:shadow-blue-500/10 transition-all duration-300 group-hover:-translate-y-1">
            <img 
              src={college.logo} 
              alt={name}
              className="w-full h-full object-contain"
              onError={(e) => { (e.target as HTMLImageElement).src = '/images/logo.png'; }}
            />
          </div>
          <span className="text-xs font-bold text-gray-600 group-hover:text-blue-600 transition-colors text-center leading-tight line-clamp-2 max-w-[80px]">
            {name}
          </span>
        </a>
      </TiltCard>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* العنوان */}
        <div className="text-center mb-14">
          <BlurText
            text={isRTL ? 'كلياتنا' : 'Our Colleges'}
            className="text-4xl md:text-5xl font-black text-gray-900 mb-4"
            delay={0}
            direction="bottom"
          />
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-600 max-w-xl mx-auto">
            {isRTL ? 'برامج أكاديمية متميزة في مختلف المجالات العلمية والإنسانية' : 'Distinguished academic programs in various fields'}
          </p>
        </div>

        {/* شبكة الكليات - للموبايل بشكل V */}
        <div className="md:hidden flex flex-col items-center gap-4 mb-12">
          {mobileRows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center gap-3">
              {row.map((collegeIndex) => (
                <CollegeItem key={collegesLogos[collegeIndex].id} college={collegesLogos[collegeIndex]} />
              ))}
            </div>
          ))}
        </div>

        {/* شبكة الكليات - للشاشات الكبيرة */}
        <div className="hidden md:grid md:grid-cols-6 lg:grid-cols-11 gap-4 md:gap-6 max-w-7xl mx-auto mb-12">
          {collegesLogos.map((college) => (
            <CollegeItem key={college.id} college={college} />
          ))}
        </div>

        {/* زر عرض الكل */}
        <div className="text-center">
          <Link
            href={`/${locale}/colleges`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 font-bold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 group"
          >
            <span>{isRTL ? 'عرض جميع الكليات' : 'View All Colleges'}</span>
            <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
          </Link>
        </div>
      </div>
    </section>
  );
}
