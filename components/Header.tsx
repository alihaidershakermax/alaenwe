'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Menu, X, Globe, ChevronDown, ChevronLeft, ChevronRight, Monitor, Sparkles } from 'lucide-react';
import TopBar from './TopBar';

const collegesData = [
  { id: 'medicine', nameAr: 'كلية الطب', nameEn: 'College of Medicine', website: 'https://med.alayen.edu.iq/', departments: [] },
  { id: 'dentistry', nameAr: 'كلية طب الاسنان', nameEn: 'College of Dentistry', website: 'https://dent.alayen.edu.iq/', departments: [] },
  { id: 'pharmacy', nameAr: 'كلية الصيدلة', nameEn: 'College of Pharmacy', website: 'https://pharm.alayen.edu.iq/', departments: [] },
  {
    id: 'health-tech', nameAr: 'كلية التقنيات الطبية والصحية', nameEn: 'Health & Medical Tech', website: 'https://hmtech.alayen.edu.iq/',
    departments: [
      { nameAr: 'قسم التخدير', nameEn: 'Anesthesia', url: 'https://hmtech.alayen.edu.iq/colleges/index/18' },
      { nameAr: 'قسم البصريات', nameEn: 'Optics', url: 'https://hmtech.alayen.edu.iq/colleges/index/19' },
      { nameAr: 'قسم صناعة الاسنان', nameEn: 'Dental Tech', url: 'https://hmtech.alayen.edu.iq/colleges/index/23' },
      { nameAr: 'قسم تقنيات الاشعة', nameEn: 'Radiology', url: 'https://hmtech.alayen.edu.iq/colleges/index/24' },
      { nameAr: 'قسم المختبرات الطبية', nameEn: 'Medical Labs', url: 'https://hmtech.alayen.edu.iq/colleges/index/25' },
      { nameAr: 'قسم تقنيات الكلى', nameEn: 'Dialysis', url: 'https://hmtech.alayen.edu.iq/colleges/index/49002' },
      { nameAr: 'قسم التجميل بالليزر', nameEn: 'Laser Cosmetics', url: 'https://hmtech.alayen.edu.iq/colleges/index/49003' },
      { nameAr: 'قسم طب الطوارئ', nameEn: 'Emergency Med', url: 'https://hmtech.alayen.edu.iq/colleges/index/49042' }
    ]
  },
  { id: 'physical-education', nameAr: 'كلية التربية البدنية', nameEn: 'Physical Education', website: 'https://physedu.alayen.edu.iq/', departments: [] },
  {
    id: 'technical-engineering', nameAr: 'الكلية التقنية الهندسية', nameEn: 'Technical Engineering', website: 'https://teeng.alayen.edu.iq/',
    departments: [
      { nameAr: 'هندسة الاجهزة الطبية', nameEn: 'Medical Devices', url: 'https://teeng.alayen.edu.iq/colleges/index/31' },
      { nameAr: 'هندسة الحاسوب', nameEn: 'Computer Eng', url: 'https://teeng.alayen.edu.iq/colleges/index/32' },
      { nameAr: 'الأمن السيبراني', nameEn: 'Cybersecurity', url: 'https://alayen.edu.iq/colleges/index/49009' },
      { nameAr: 'الوقود والطاقة', nameEn: 'Fuel & Energy', url: 'https://alayen.edu.iq/colleges/index/49010' },
      { nameAr: 'الفيزياء الصحية', nameEn: 'Health Physics', url: 'https://alayen.edu.iq/colleges/index/49011' }
    ]
  },
  { id: 'law', nameAr: 'كلية القانون', nameEn: 'College of Law', website: 'https://law.alayen.edu.iq/', departments: [] },
  {
    id: 'education', nameAr: 'كلية التربية', nameEn: 'College of Education', website: 'https://edu.alayen.edu.iq/',
    departments: [
      { nameAr: 'قسم الكيمياء', nameEn: 'Chemistry', url: 'https://edu.alayen.edu.iq/colleges/index/40' },
      { nameAr: 'قسم اللغة الانكليزية', nameEn: 'English', url: 'https://edu.alayen.edu.iq/colleges/index/41' },
      { nameAr: 'قسم الفيزياء', nameEn: 'Physics', url: 'https://edu.alayen.edu.iq/colleges/index/49014' },
      { nameAr: 'قسم الرياضيات', nameEn: 'Mathematics', url: 'https://edu.alayen.edu.iq/colleges/index/49016' },
      { nameAr: 'معلم الصفوف الاولى', nameEn: 'Primary Teacher', url: 'https://edu.alayen.edu.iq/colleges/index/49025' },
      { nameAr: 'التربية الفنية', nameEn: 'Art Education', url: 'https://edu.alayen.edu.iq/colleges/index/49026' }
    ]
  },
  {
    id: 'engineering', nameAr: 'كلية الهندسة', nameEn: 'College of Engineering', website: 'https://eng.alayen.edu.iq/',
    departments: [
      { nameAr: 'هندسة النفط', nameEn: 'Petroleum Eng', url: 'https://eng.alayen.edu.iq/colleges/index/3' },
      { nameAr: 'الذكاء الاصطناعي', nameEn: 'AI Engineering', url: 'https://eng.alayen.edu.iq/colleges/index/37' },
      { nameAr: 'الطب الحياتي', nameEn: 'Biomedical Eng', url: 'https://eng.alayen.edu.iq/colleges/index/43' },
      { nameAr: 'الليزر والبصريات', nameEn: 'Laser & Optics', url: 'https://eng.alayen.edu.iq/colleges/index/49021' }
    ]
  },
  {
    id: 'science', nameAr: 'كلية العلوم', nameEn: 'College of Science', website: 'https://sci.alayen.edu.iq/',
    departments: [
      { nameAr: 'الادلة الجنائية', nameEn: 'Forensic Science', url: 'https://sci.alayen.edu.iq/colleges/index/49030/' },
      { nameAr: 'الاحياء المجهرية', nameEn: 'Microbiology', url: 'https://sci.alayen.edu.iq/colleges/index/49031/' },
      { nameAr: 'الكيمياء الحياتية', nameEn: 'Biochemistry', url: 'https://sci.alayen.edu.iq/colleges/index/49032/' }
    ]
  },
  { id: 'business', nameAr: 'كلية الادارة والاقتصاد', nameEn: 'Business & Economics', website: 'https://business.alayen.edu.iq/', departments: [] }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const locale = useLocale();
  const isRTL = locale === 'ar';

  // تتبع التمرير لإخفاء/إظهار الهيدر
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // إذا كان في الأعلى (أقل من 100px)
      if (currentScrollY < 100) {
        setIsScrolled(false);
        setIsVisible(true);
      } 
      // إذا كان ينزل للأسفل
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsScrolled(true);
        setIsVisible(false);
      } 
      // إذا كان يصعد للأعلى
      else if (currentScrollY < lastScrollY) {
        setIsScrolled(true);
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const switchLocale = () => {
    window.location.href = `/${locale === 'ar' ? 'en' : 'ar'}`;
  };

  const navItems = [
    { key: 'home', nameAr: 'الرئيسية', nameEn: 'Home', href: `/${locale}` },
    { key: 'about', nameAr: 'عن الجامعة', nameEn: 'About', href: `/${locale}/about`, dropdown: [
      { key: 'council', nameAr: 'مجلس الجامعة', nameEn: 'University Council', href: `/${locale}/council` },
      { key: 'vision', nameAr: 'الرؤية والرسالة', nameEn: 'Vision & Mission', href: `/${locale}/about#vision` },
      { key: 'president', nameAr: 'رئيس الجامعة', nameEn: 'University President', href: `/${locale}/president` },
    ]},
    { key: 'colleges', nameAr: 'الكليات', nameEn: 'Colleges', href: `/${locale}/colleges`, isColleges: true },
    { key: 'news', nameAr: 'الأخبار', nameEn: 'News', href: `/${locale}/news` },
    { key: 'scientificLinks', nameAr: 'روابط علمية', nameEn: 'Scientific Links', href: `/${locale}/scientific-links` },
    { key: 'awards', nameAr: 'الجوائز', nameEn: 'Awards', href: `/${locale}/awards` },
    { key: 'staff', nameAr: 'الكادر التدريسي', nameEn: 'Staff', href: `/${locale}/staff` },
    { key: 'conferences', nameAr: 'المؤتمرات', nameEn: 'Conferences', href: `/${locale}/conferences` },
    { key: 'contact', nameAr: 'اتصل بنا', nameEn: 'Contact', href: `/${locale}/contact` },
  ];

  return (
    <>
      {/* Top Bar */}
      <TopBar />
      
      <header className={`fixed left-0 right-0 transition-all duration-500 ${
        isScrolled 
          ? 'top-0 z-50 bg-black/95 backdrop-blur-xl shadow-2xl' 
          : 'top-10 z-40 bg-transparent'
      } ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        {/* شريط التنقل */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* أزرار التنقل - يسار */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.key}
                className="relative"
                onMouseEnter={() => (item.dropdown || item.isColleges) && setActiveDropdown(item.key)}
                onMouseLeave={() => { setActiveDropdown(null); setActiveSubDropdown(null); }}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isScrolled 
                      ? 'text-white/90 hover:text-white hover:bg-white/10' 
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {isRTL ? item.nameAr : item.nameEn}
                  {(item.dropdown || item.isColleges) && <ChevronDown className="w-3 h-3" />}
                </Link>

                {item.dropdown && activeDropdown === item.key && (
                  <div className="absolute top-full left-0 rtl:left-auto rtl:right-0 min-w-[200px] bg-white/95 backdrop-blur-xl shadow-2xl rounded-xl py-2 mt-2 z-50 border border-white/20">
                    {item.dropdown.map((sub: any) => (
                      <Link key={sub.key} href={sub.href} className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                        {isRTL ? sub.nameAr : sub.nameEn}
                      </Link>
                    ))}
                  </div>
                )}

                {item.isColleges && activeDropdown === item.key && (
                  <div className="absolute top-full left-0 rtl:left-auto rtl:right-0 min-w-[260px] bg-white/95 backdrop-blur-xl shadow-2xl rounded-xl py-2 mt-2 z-50 max-h-[60vh] overflow-y-auto border border-white/20">
                    {collegesData.map((college) => (
                      <div
                        key={college.id}
                        className="relative"
                        onMouseEnter={() => college.departments.length > 0 && setActiveSubDropdown(college.id)}
                        onMouseLeave={() => setActiveSubDropdown(null)}
                      >
                        <a href={college.website} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                          <span>{isRTL ? college.nameAr : college.nameEn}</span>
                          {college.departments.length > 0 && (isRTL ? <ChevronLeft className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />)}
                        </a>
                        {college.departments.length > 0 && activeSubDropdown === college.id && (
                          <div className={`absolute top-0 ${isRTL ? 'right-full mr-1' : 'left-full ml-1'} min-w-[200px] bg-white/95 backdrop-blur-xl shadow-2xl rounded-xl py-2 z-50 border border-white/20`}>
                            {college.departments.map((dept, idx) => (
                              <a key={idx} href={dept.url} target="_blank" rel="noopener noreferrer" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                                {isRTL ? dept.nameAr : dept.nameEn}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* زر مواهب الطلاب */}
            <a 
              href="https://alayen.edu.iq/talents" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                isScrolled 
                  ? 'text-white/90 hover:text-white hover:bg-white/10' 
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {isRTL ? 'مواهب الطلاب' : 'Talents'}
            </a>
            
            {/* زر الأنظمة الإلكترونية */}
            <a 
              href="https://systems.alayen.edu.iq/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-full transition-all duration-300 ms-2 bg-blue-600 text-white hover:bg-blue-500 hover:scale-105 shadow-lg hover:shadow-blue-500/30"
            >
              <Monitor className="w-4 h-4" />
              {isRTL ? 'الأنظمة الإلكترونية' : 'E-Systems'}
            </a>
            
            {/* زر تغيير اللغة */}
            <button onClick={switchLocale} className={`flex items-center gap-1 px-4 py-2 text-sm font-bold rounded-full transition-all duration-300 ms-2 ${
              isScrolled 
                ? 'bg-white/10 text-white hover:bg-white/20' 
                : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-md'
            }`}>
              {isRTL ? 'EN' : 'ع'}
              <Globe className="w-4 h-4" />
            </button>
          </nav>

          {/* زر القائمة للموبايل */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-white">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* الشعار واسم الجامعة - يمين */}
          <Link href={`/${locale}`} className="flex items-center gap-3 group">
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <h1 className="text-base font-black text-white group-hover:text-blue-300 transition-colors">{isRTL ? 'جامعة العين العراقية' : 'Al-Ayen Iraqi University'}</h1>
              <p className="text-xs text-white/50">{isRTL ? 'وزارة التعليم العالي والبحث العلمي' : 'Ministry of Higher Education'}</p>
            </div>
            <img src="/images/logo.png" alt="Logo" className="w-12 h-12 object-contain brightness-0 invert group-hover:scale-110 transition-transform" />
          </Link>
        </div>
      </div>

      {isMenuOpen && (
        <div className={`lg:hidden fixed left-0 right-0 bg-black/98 backdrop-blur-xl shadow-2xl z-30 ${
          isScrolled ? 'top-16' : 'top-[6.5rem]'
        }`}>
          <nav className="container mx-auto px-4 py-4 max-h-[calc(100vh-7rem)] overflow-y-auto">
            {navItems.map((item) => (
              <Link 
                key={item.key} 
                href={item.href} 
                onClick={() => setIsMenuOpen(false)} 
                className="block px-4 py-3 text-white font-semibold border-b border-white/10 hover:bg-white/10 transition-colors rounded-lg"
              >
                {isRTL ? item.nameAr : item.nameEn}
              </Link>
            ))}
            {/* زر مواهب الطلاب للموبايل */}
            <a 
              href="https://alayen.edu.iq/talents" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-white font-semibold border-b border-white/10 hover:bg-white/10 transition-colors rounded-lg"
            >
              {isRTL ? 'مواهب الطلاب' : 'Talents'}
            </a>
            
            {/* زر الأنظمة الإلكترونية للموبايل */}
            <a 
              href="https://systems.alayen.edu.iq/" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 mt-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-colors"
            >
              <Monitor className="w-4 h-4" />
              {isRTL ? 'الأنظمة الإلكترونية' : 'E-Systems'}
            </a>
            
            <button 
              onClick={() => {
                switchLocale();
                setIsMenuOpen(false);
              }} 
              className="w-full flex items-center justify-center gap-2 px-4 py-3 mt-2 mb-2 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
            >
              <Globe className="w-4 h-4" />
              {isRTL ? 'English' : 'العربية'}
            </button>
          </nav>
        </div>
      )}
      </header>
    </>
  );
}
