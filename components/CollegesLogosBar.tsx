'use client';

import { useLocale } from 'next-intl';

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

export default function CollegesLogosBar() {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* العنوان */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
            {isRTL ? 'كلياتنا' : 'Our Colleges'}
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* شريط الشعارات */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {collegesLogos.map((college) => {
            const name = isRTL ? college.nameAr : college.nameEn;
            return (
              <a
                key={college.id}
                href={college.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2"
                title={name}
              >
                {/* الشعار */}
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white shadow-md p-2 border-2 border-gray-100 hover:border-blue-500 hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                  <img 
                    src={college.logo} 
                    alt={name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/logo.png';
                    }}
                  />
                </div>
                {/* اسم الكلية */}
                <span className="text-xs text-gray-600 group-hover:text-blue-600 transition-colors text-center max-w-[80px] leading-tight">
                  {name}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
