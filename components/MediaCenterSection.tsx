'use client';

import { useEffect, useRef, useState } from 'react';
import { useLocale } from 'next-intl';
import { ArrowRight, Image, Video, Play, Camera, Loader2 } from 'lucide-react';
import { BlurText, SpotlightCard, Magnet } from './reactbits';
import { useMediaCenter } from '@/lib/useMediaCenter';

export default function MediaCenterSection() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'images' | 'videos'>('images');
  
  // Fetch media data from RSS feed
  const { media, loading, error } = useMediaCenter(activeTab, 4);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Fallback static data
  const fallbackImages = [
    { id: '1', url: 'https://alayen.edu.iq/gallery/view_image', title: 'صور الجامعة', titleEn: 'University Photos', image: '/images/university-hero.jpg', date: '2024-12-10', type: 'image' as const },
    { id: '2', url: 'https://alayen.edu.iq/gallery/view_image', title: 'الفعاليات', titleEn: 'Events', image: '/images/university-hero.jpg', date: '2024-12-09', type: 'image' as const },
    { id: '3', url: 'https://alayen.edu.iq/gallery/view_image', title: 'المختبرات', titleEn: 'Laboratories', image: '/images/university-hero.jpg', date: '2024-12-08', type: 'image' as const },
    { id: '4', url: 'https://alayen.edu.iq/gallery/view_image', title: 'المكتبة', titleEn: 'Library', image: '/images/university-hero.jpg', date: '2024-12-07', type: 'image' as const },
  ];

  const fallbackVideos = [
    { id: '1', url: 'https://alayen.edu.iq/videos/details/64', title: 'نشيد جامعة العين', titleEn: 'University Anthem', description: 'النشيد الرسمي', descriptionEn: 'Official Anthem', image: '/images/university-hero.jpg', date: '2024-12-10', type: 'video' as const },
    { id: '2', url: 'https://alayen.edu.iq/videos/details/59', title: 'كلمة رئيس الجامعة', titleEn: 'President Speech', description: 'جائزة الباحث 2023', descriptionEn: 'Researcher Award 2023', image: '/images/university-hero.jpg', date: '2024-12-09', type: 'video' as const },
    { id: '3', url: 'https://alayen.edu.iq/videos/details/58', title: 'كلمة وزير التعليم', titleEn: 'Minister Speech', description: 'جائزة العين الثالثة', descriptionEn: 'Third Al-Ayen Award', image: '/images/university-hero.jpg', date: '2024-12-08', type: 'video' as const },
    { id: '4', url: 'https://alayen.edu.iq/videos/details/57', title: 'جائزة الباحث العلمي', titleEn: 'Researcher Award', description: 'جائزة العين', descriptionEn: 'Al-Ayen Award', image: '/images/university-hero.jpg', date: '2024-12-07', type: 'video' as const },
  ];

  // Use RSS data if available, otherwise fallback to static data
  const displayMedia = media.length > 0 ? media : (activeTab === 'images' ? fallbackImages : fallbackVideos);

  return (
    <section ref={sectionRef} className="py-24 bg-gray-900 overflow-hidden relative">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* العنوان */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full mb-6 border border-blue-500/30">
            <Camera className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-blue-300">{isRTL ? 'صور وفيديوهات' : 'Photos & Videos'}</span>
          </div>
          <BlurText
            text={isRTL ? 'المركز الإعلامي' : 'Media Center'}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4"
            delay={0}
            direction="bottom"
          />
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            {isRTL ? 'لحظات مميزة من أنشطة وفعاليات الجامعة' : 'Special moments from university activities and events'}
          </p>
        </div>

        {/* التبويبات */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('images')}
            className={`flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all duration-300 ${
              activeTab === 'images' 
                ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/30' 
                : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
            }`}
          >
            <Image className="w-5 h-5" />
            {isRTL ? 'الصور' : 'Photos'}
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all duration-300 ${
              activeTab === 'videos' 
                ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/30' 
                : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
            }`}
          >
            <Video className="w-5 h-5" />
            {isRTL ? 'الفيديوهات' : 'Videos'}
          </button>
        </div>

        {/* المحتوى */}
        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <Loader2 className="w-12 h-12 text-blue-400 animate-spin" />
              <p className="text-gray-400">{isRTL ? 'جاري تحميل المحتوى...' : 'Loading content...'}</p>
            </div>
          ) : activeTab === 'images' ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {displayMedia.map((item, index) => (
                <SpotlightCard
                  key={item.id || index}
                  className="group aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                  spotlightColor="rgba(59, 130, 246, 0.2)"
                >
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative">
                    {item.image && item.image !== '/images/university-hero.jpg' ? (
                      <img 
                        src={item.image} 
                        alt={isRTL ? item.title : item.titleEn}
                        className="w-full h-full object-cover"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300 border border-white/20">
                          <Image className="w-10 h-10 text-white/70 group-hover:text-white transition-colors" />
                        </div>
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-lg font-bold text-white">{isRTL ? item.title : item.titleEn}</p>
                    </div>
                  </a>
                </SpotlightCard>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {displayMedia.map((item, index) => (
                <SpotlightCard
                  key={item.id || index}
                  className="group bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300"
                  spotlightColor="rgba(59, 130, 246, 0.15)"
                >
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
                      {item.image && item.image !== '/images/university-hero.jpg' ? (
                        <>
                          <img 
                            src={item.image} 
                            alt={isRTL ? item.title : item.titleEn}
                            className="w-full h-full object-cover"
                            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                          />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl shadow-blue-500/30">
                              <Play className="w-8 h-8 text-white ms-1" />
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl shadow-blue-500/30">
                          <Play className="w-8 h-8 text-white ms-1" />
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <p className="text-xs text-blue-400 font-semibold mb-2">{isRTL ? ('description' in item ? item.description || 'محتوى إعلامي' : 'محتوى إعلامي') : ('descriptionEn' in item ? item.descriptionEn || 'Media Content' : 'Media Content')}</p>
                      <p className="text-base font-bold text-white line-clamp-2 group-hover:text-blue-300 transition-colors">{isRTL ? item.title : item.titleEn}</p>
                    </div>
                  </a>
                </SpotlightCard>
              ))}
            </div>
          )}
        </div>

        {/* زر المزيد */}
        <div className="text-center mt-14">
          <Magnet strength={0.3}>
            <a
              href={activeTab === 'images' ? 'https://alayen.edu.iq/gallery/view_image' : 'https://alayen.edu.iq/videos/list_view'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-blue-600 hover:text-white hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300"
            >
              <span>{isRTL ? 'عرض المزيد' : 'View More'}</span>
              <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
            </a>
          </Magnet>
        </div>
      </div>
    </section>
  );
}
