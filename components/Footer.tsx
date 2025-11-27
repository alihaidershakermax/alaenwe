'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

// Social Media Icons
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

export default function Footer() {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const allLinks = [
    { labelAr: 'الرئيسية', labelEn: 'Home', href: `/${locale}`, external: false },
    { labelAr: 'عن الجامعة', labelEn: 'About', href: `/${locale}/about`, external: false },
    { labelAr: 'رئيس الجامعة', labelEn: 'President', href: `/${locale}/president`, external: false },
    { labelAr: 'مجلس الجامعة', labelEn: 'Council', href: 'https://alayen.edu.iq/ar/page/show/1/مجلس-الجامعة', external: true },
    { labelAr: 'الكليات', labelEn: 'Colleges', href: `/${locale}/colleges`, external: false },
    { labelAr: 'الأخبار', labelEn: 'News', href: `/${locale}/news`, external: false },
    { labelAr: 'شؤون الطلبة', labelEn: 'Students', href: `/${locale}/students`, external: false },
    { labelAr: 'اتصل بنا', labelEn: 'Contact', href: `/${locale}/contact`, external: false },
  ];

  const eServices = [
    { labelAr: 'التعليم الإلكتروني', labelEn: 'E-Learning', href: 'https://elearning.alayen.edu.iq/' },
    { labelAr: 'نظام النتائج', labelEn: 'Results', href: 'https://learning.alayen.edu.iq/' },
    { labelAr: 'مواقع التدريسيين', labelEn: 'Staff Sites', href: 'https://teacher.alayen.edu.iq/' },
    { labelAr: 'مسار بولونيا', labelEn: 'Bologna', href: 'https://alayen.bis.edu.iq/' },
  ];

  const socialLinks = [
    { name: 'Facebook', nameAr: 'فيسبوك', href: 'https://www.facebook.com/universityofalayen/', icon: FacebookIcon },
    { name: 'Instagram', nameAr: 'انستغرام', href: 'https://instagram.com/alayen_iraqi_university', icon: InstagramIcon },
    { name: 'X', nameAr: 'إكس', href: 'https://twitter.com/alayeneduiq', icon: XIcon },
    { name: 'YouTube', nameAr: 'يوتيوب', href: 'https://www.youtube.com/channel/UCrZWxBoVuC8pQCGGQIpLelw', icon: YoutubeIcon },
    { name: 'Telegram', nameAr: 'تيليجرام', href: 'https://t.me/alayen_university', icon: TelegramIcon },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white overflow-hidden">
      {/* خلفية متحركة */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-300/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* القسم الرئيسي */}
      <div className="container mx-auto px-4 py-12 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* الشعار ومعلومات الجامعة */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <img
                src="https://alayen.edu.iq/public/ar/image/site/new_logo_footer.png"
                alt="University Logo"
                className="h-20 w-auto object-contain drop-shadow-2xl mb-4"
              />
            </div>

            <p className="text-blue-100 text-lg leading-relaxed mb-5">
              {isRTL
                ? 'جامعة عراقية أهلية رائدة تسعى لتقديم تعليم متميز وبحث علمي نوعي'
                : 'A leading Iraqi private university providing distinguished education'}
            </p>

            {/* معلومات الاتصال */}
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5 group">
                <MapPin className="w-5 h-5 text-blue-300 mt-0.5 flex-shrink-0" />
                <span className="text-blue-100 text-base leading-relaxed">
                  {isRTL ? 'شارع النيل، الناصرية، ذي قار' : 'Al-Nile St, Nasiriyah, Dhi Qar'}
                </span>
              </div>
              <div className="flex items-center gap-2.5 group">
                <Phone className="w-5 h-5 text-blue-300 flex-shrink-0" />
                <a href="tel:6316" className="text-blue-100 hover:text-white font-semibold text-base transition-colors">
                  6316
                </a>
              </div>
              <div className="flex items-center gap-2.5 group">
                <Mail className="w-5 h-5 text-blue-300 flex-shrink-0" />
                <a href="mailto:info@alayen.edu.iq" className="text-blue-100 hover:text-white text-base transition-colors">
                  info@alayen.edu.iq
                </a>
              </div>
            </div>
          </div>

          {/* روابط سريعة */}
          <div>
            <h4 className="text-white font-bold text-2xl mb-4">
              {isRTL ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <ul className="space-y-2.5">
              {allLinks.slice(0, 6).map((link, i) => (
                <li key={i}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-100 hover:text-white transition-colors text-lg flex items-center gap-2 group"
                    >
                      <span className="text-blue-300">›</span>
                      <span>{isRTL ? link.labelAr : link.labelEn}</span>
                    </a>
                  ) : (
                    <Link href={link.href} className="text-blue-100 hover:text-white transition-colors text-lg flex items-center gap-2 group">
                      <span className="text-blue-300">›</span>
                      <span>{isRTL ? link.labelAr : link.labelEn}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* الخدمات الإلكترونية */}
          <div>
            <h4 className="text-white font-bold text-2xl mb-4">
              {isRTL ? 'الخدمات الإلكترونية' : 'E-Services'}
            </h4>
            <ul className="space-y-2.5">
              {eServices.map((s, i) => (
                <li key={i}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-100 hover:text-white transition-colors text-lg flex items-center gap-2 group"
                  >
                    <span className="text-blue-300">›</span>
                    <span>{isRTL ? s.labelAr : s.labelEn}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>


        </div>
      </div>

      {/* إحصائيات الزوار */}
      <div className="relative bg-blue-900/30 backdrop-blur-sm py-4 border-t border-blue-800/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-100">
            <div className="flex items-center gap-2">
              <span className="text-blue-300 font-semibold">{isRTL ? 'عدد الزوار اليوم:' : 'Today Visitors:'}</span>
              <span className="text-white font-bold text-lg">10,874</span>
              <span className="text-blue-300">{isRTL ? 'زائر' : 'visitors'}</span>
            </div>
            <span className="text-blue-600 hidden sm:inline">|</span>
            <div className="flex items-center gap-2">
              <span className="text-blue-300 font-semibold">{isRTL ? 'عدد الزوار الكلي:' : 'Total Visitors:'}</span>
              <span className="text-white font-bold text-lg">28,276,315</span>
              <span className="text-blue-300">{isRTL ? 'زائر' : 'visitors'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* حقوق النشر */}
      <div className="relative bg-blue-950/50 backdrop-blur-sm py-5 border-t border-blue-800/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-blue-100 flex flex-wrap items-center justify-center gap-2 text-lg">
              <span className="text-blue-300">©</span>
              <span>{new Date().getFullYear()}</span>
              <span className="text-white font-bold">
                {isRTL ? 'جامعة العين العراقية' : 'Al-Ayen Iraqi University'}
              </span>
              <span className="text-blue-600">•</span>
              <span>{isRTL ? 'جميع الحقوق محفوظة' : 'All Rights Reserved'}</span>
            </p>
            <div className="flex items-center gap-4 text-lg">
              <Link href={`/${locale}/contact`} className="text-blue-100 hover:text-white transition-colors font-medium">
                {isRTL ? 'اتصل بنا' : 'Contact'}
              </Link>
              <span className="text-blue-600">|</span>
              <Link href={`/${locale}/about`} className="text-blue-100 hover:text-white transition-colors font-medium">
                {isRTL ? 'عن الجامعة' : 'About'}
              </Link>
              <span className="text-blue-600">|</span>
              <a
                href="https://alayen.edu.iq/map"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100 hover:text-white transition-colors font-medium"
              >
                {isRTL ? 'خريطة الموقع' : 'Site Map'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
