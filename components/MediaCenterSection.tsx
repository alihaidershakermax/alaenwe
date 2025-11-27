'use client';

import { useEffect, useRef, useState } from 'react';
import { useLocale } from 'next-intl';
import { ArrowRight, Image, Video, Play } from 'lucide-react';

export default function MediaCenterSection() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'images' | 'videos'>('images');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const images = [
    { url: 'https://alayen.edu.iq/gallery/view_image', date: '2025-10-06', titleAr: 'صور عن الجامعة', titleEn: 'University Photos' },
    { url: 'https://alayen.edu.iq/gallery/view_image', date: '2025-10-06', titleAr: 'صور عن الجامعة', titleEn: 'University Photos' },
    { url: 'https://alayen.edu.iq/gallery/view_image', date: '2025-10-06', titleAr: 'صور عن الجامعة', titleEn: 'University Photos' },
    { url: 'https://alayen.edu.iq/gallery/view_image', date: '2025-10-06', titleAr: 'صور عن الجامعة', titleEn: 'University Photos' },
  ];

  const videos = [
    { 
      url: 'https://alayen.edu.iq/videos/details/64', 
      date: '2025-09-13', 
      titleAr: 'نشيد جامعة العين العراقية', 
      titleEn: 'Al-Ayen University Anthem',
      descAr: 'نشيد جامعة العين',
      descEn: 'University Anthem'
    },
    { 
      url: 'https://alayen.edu.iq/videos/details/59', 
      date: '2023-02-21', 
      titleAr: 'كلمة رئيس الجامعة في جائزة الباحث الأكاديمي 2023', 
      titleEn: 'President Speech at Academic Researcher Award 2023',
      descAr: 'جائزة جامعة العين الثالثة',
      descEn: 'Third Al-Ayen Award'
    },
    { 
      url: 'https://alayen.edu.iq/videos/details/58', 
      date: '2023-02-21', 
      titleAr: 'كلمة وزير التعليم العالي في جائزة الباحث الأكاديمي 2023', 
      titleEn: 'Minister Speech at Academic Researcher Award 2023',
      descAr: 'جائزة جامعة العين الثالثة',
      descEn: 'Third Al-Ayen Award'
    },
    { 
      url: 'https://alayen.edu.iq/videos/details/57', 
      date: '2023-02-21', 
      titleAr: 'جائزة جامعة العين للباحث العلمي الأكاديمي العراقي 2023', 
      titleEn: 'Al-Ayen Award for Iraqi Academic Researcher 2023',
      descAr: 'جائزة جامعة العين الثالثة',
      descEn: 'Third Al-Ayen Award'
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* العنوان */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3">
            {isRTL ? 'المركز الإعلامي' : 'Media Center'}
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-600 max-w-xl mx-auto">
            {isRTL ? 'صور وفيديوهات من أنشطة وفعاليات الجامعة' : 'Photos and videos from university activities and events'}
          </p>
        </div>

        {/* التبويبات */}
        <div className={`flex justify-center gap-4 mb-10 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button
            onClick={() => setActiveTab('images')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${
              activeTab === 'images' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Image className="w-5 h-5" />
            {isRTL ? 'الصور' : 'Photos'}
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${
              activeTab === 'videos' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Video className="w-5 h-5" />
            {isRTL ? 'الفيديوهات' : 'Videos'}
          </button>
        </div>

        {/* المحتوى */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {activeTab === 'images' ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {images.map((img, index) => (
                <a
                  key={index}
                  href={img.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square bg-gray-100 rounded-xl overflow-hidden border border-gray-200"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image className="w-12 h-12 text-gray-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                    <p className="text-sm font-semibold text-white">{isRTL ? img.titleAr : img.titleEn}</p>
                    <p className="text-xs text-gray-300">{img.date}</p>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {videos.map((video, index) => (
                <a
                  key={index}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-gray-100 rounded-xl overflow-hidden border border-gray-200"
                >
                  <div className="aspect-video bg-gray-200 flex items-center justify-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-500 transition-all">
                      <Play className="w-8 h-8 text-white ms-1" />
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-blue-600 mb-1">{isRTL ? video.descAr : video.descEn}</p>
                    <p className="text-sm font-semibold text-gray-900 line-clamp-2">{isRTL ? video.titleAr : video.titleEn}</p>
                    <p className="text-xs text-gray-500 mt-2">{video.date}</p>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* زر المزيد */}
        <div className={`text-center mt-10 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a
            href={activeTab === 'images' ? 'https://alayen.edu.iq/gallery/view_image' : 'https://alayen.edu.iq/videos/list_view'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors"
          >
            <span>{isRTL ? 'المزيد' : 'View More'}</span>
            <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
          </a>
        </div>
      </div>
    </section>
  );
}
