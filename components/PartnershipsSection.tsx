'use client';

import { useLocale } from 'next-intl';
import { Globe } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function PartnershipsSection() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const scrollRef = useRef<HTMLDivElement>(null);

  // Partner logos data - circular logos
  const partners = [
    { nameAr: 'جامعة أكسفورد', nameEn: 'Oxford University', logo: '/images/partners/oxford.png' },
    { nameAr: 'جامعة كامبريدج', nameEn: 'Cambridge University', logo: '/images/partners/cambridge.png' },
    { nameAr: 'معهد ماساتشوستس', nameEn: 'MIT', logo: '/images/partners/mit.png' },
    { nameAr: 'جامعة هارفارد', nameEn: 'Harvard University', logo: '/images/partners/harvard.png' },
    { nameAr: 'جامعة ستانفورد', nameEn: 'Stanford University', logo: '/images/partners/stanford.png' },
    { nameAr: 'جامعة طوكيو', nameEn: 'University of Tokyo', logo: '/images/partners/tokyo.png' },
    { nameAr: 'جامعة برلين', nameEn: 'Berlin University', logo: '/images/partners/berlin.png' },
    { nameAr: 'جامعة باريس', nameEn: 'Paris University', logo: '/images/partners/paris.png' },
    { nameAr: 'جامعة سيدني', nameEn: 'Sydney University', logo: '/images/partners/sydney.png' },
    { nameAr: 'جامعة تورنتو', nameEn: 'Toronto University', logo: '/images/partners/toronto.png' },
    { nameAr: 'جامعة سنغافورة', nameEn: 'Singapore University', logo: '/images/partners/singapore.png' },
    { nameAr: 'جامعة كوريا', nameEn: 'Korea University', logo: '/images/partners/korea.png' },
  ];

  // Duplicate partners for infinite scroll effect
  const duplicatedPartners = [...partners, ...partners, ...partners];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame

    const scroll = () => {
      scrollPosition += scrollSpeed;
      
      // Reset scroll position for infinite loop
      if (scrollPosition >= scrollContainer.scrollWidth / 3) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => requestAnimationFrame(scroll);

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50/30 to-indigo-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm rounded-full border border-indigo-500/20 mb-6">
            <Globe className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-bold text-indigo-700 uppercase tracking-wider">
              {isRTL ? 'الشراكات العالمية' : 'Global Partnerships'}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 bg-clip-text text-transparent mb-4">
            {isRTL ? 'شبكة شراكاتنا العالمية' : 'Our Global Partnership Network'}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {isRTL
              ? 'نفخر بشراكاتنا مع أفضل الجامعات والمؤسسات العالمية'
              : 'We are proud of our partnerships with the world\'s leading universities and institutions'}
          </p>
        </div>

        {/* Auto-scrolling Partners Slider */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-indigo-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-indigo-50 to-transparent z-10 pointer-events-none" />

          {/* Scrolling Container */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-hidden py-8"
            style={{ scrollBehavior: 'auto' }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 group"
              >
                {/* Circular Logo Container */}
                <div className="relative">
                  <div className="w-32 h-32 bg-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center border-4 border-white group-hover:border-indigo-200 group-hover:scale-110">
                    {/* Placeholder for logo */}
                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center">
                      <Globe className="w-10 h-10 text-indigo-400" />
                    </div>
                  </div>
                  
                  {/* Partner Name on Hover */}
                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    <div className="bg-gray-900 text-white text-xs px-3 py-1.5 rounded-full shadow-lg">
                      {isRTL ? partner.nameAr : partner.nameEn}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center border border-indigo-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="text-5xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">
              50+
            </div>
            <div className="text-gray-700 font-semibold">
              {isRTL ? 'شراكة دولية' : 'International Partnerships'}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center border border-purple-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
              30+
            </div>
            <div className="text-gray-700 font-semibold">
              {isRTL ? 'اتفاقية تعاون' : 'Cooperation Agreements'}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center border border-pink-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="text-5xl font-black bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-3">
              25+
            </div>
            <div className="text-gray-700 font-semibold">
              {isRTL ? 'دولة حول العالم' : 'Countries Worldwide'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
