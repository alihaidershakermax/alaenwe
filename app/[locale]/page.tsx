import { Metadata } from 'next';
import HeroVideo from '@/components/HeroVideo';
import PresidentSection from '@/components/PresidentSection';
import UniversityCouncilSection from '@/components/UniversityCouncilSection';
import CollegesLogosBar from '@/components/CollegesLogosBar';
import LatestNewsSection from '@/components/LatestNewsSection';
import StatsSection from '@/components/StatsSection';
import PartnersMarquee from '@/components/PartnersMarquee';
import MediaCenterSection from '@/components/MediaCenterSection';
import MapSection from '@/components/MapSection';

export const metadata: Metadata = {
  title: 'الرئيسية - جامعة العين العراقية',
  description: 'جامعة العين العراقية - نحافظ على القيم ونُعِدُّ للمستقبل',
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* 1. قسم الفيديو السينمائي */}
      <HeroVideo />

      {/* 2. رئيس الجامعة */}
      <PresidentSection />

      {/* 3. مجلس الجامعة */}
      <UniversityCouncilSection />

      {/* 4. شريط شعارات الكليات */}
      <CollegesLogosBar />

      {/* 5. آخر الأخبار */}
      <LatestNewsSection />

      {/* 6. الإحصائيات */}
      <StatsSection />

      {/* 7. الاتفاقيات والتصنيفات - سلايدرات متحركة */}
      <PartnersMarquee />

      {/* 8. المركز الإعلامي */}
      <MediaCenterSection />

      {/* 9. خريطة الموقع */}
      <MapSection />
    </div>
  );
}
