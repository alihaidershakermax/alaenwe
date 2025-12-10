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

      </header>

      {/* Mobile Menu Overlay - Outside header */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)} 
        />
      )}

      {/* Mobile Menu - Outside header */}
      <div className={`lg:hidden fixed top-0 bottom-0 ${isRTL ? 'right-0' : 'left-0'} w-[80%] max-w-[320px] bg-black z-[101] transform transition-transform duration-300 ease-out shadow-2xl ${
        isMenuOpen ? 'translate-x-0' : isRTL ? 'translate-x-full' : '-translate-x-full'
      }`}>
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-4 bg-gray-900 border-b border-white/10">
          <Link href={`/${locale}`} onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3">
            <img src="/images/logo.png" alt="Logo" className="w-10 h-10 object-contain brightness-0 invert" />
            <div>
              <h3 className="text-sm font-bold text-white">{isRTL ? 'جامعة العين' : 'Al-Ayen'}</h3>
              <p className="text-[10px] text-gray-400">{isRTL ? 'العراقية' : 'Iraqi University'}</p>
            </div>
          </Link>
          <button onClick={() => setIsMenuOpen(false)} className="p-2 text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Menu Content */}
        <nav className="p-4 h-[calc(100vh-72px)] overflow-y-auto bg-black">
          {/* Navigation Links */}
          <div className="space-y-1 mb-6">
            {navItems.map((item) => (
              <Link 
                key={item.key}
                href={item.href} 
                onClick={() => setIsMenuOpen(false)} 
                className="flex items-center justify-between px-4 py-3 text-white hover:bg-blue-600/20 rounded-xl transition-colors border-b border-white/5"
              >
                <span className="font-medium text-sm">{isRTL ? item.nameAr : item.nameEn}</span>
                {(item.dropdown || item.isColleges) && (
                  <ChevronRight className={`w-4 h-4 text-gray-500 ${isRTL ? 'rotate-180' : ''}`} />
                )}
              </Link>
            ))}
            
            {/* Talents Link */}
            <a 
              href="https://alayen.edu.iq/talents" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center px-4 py-3 text-white hover:bg-blue-600/20 rounded-xl transition-colors border-b border-white/5"
            >
              <span className="font-medium text-sm">{isRTL ? 'مواهب الطلاب' : 'Talents'}</span>
            </a>
          </div>

          {/* Colleges Section */}
          <div className="mb-6 bg-gray-900/50 rounded-xl p-3">
            <h4 className="px-2 py-2 text-xs font-bold text-blue-400 uppercase tracking-wider">
              {isRTL ? 'الكليات' : 'Colleges'}
            </h4>
            <div className="grid grid-cols-2 gap-1">
              {collegesData.slice(0, 6).map((college) => (
                <a
                  key={college.id}
                  href={college.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="px-2 py-2 text-[11px] text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors truncate"
                >
                  {isRTL ? college.nameAr.replace('كلية ', '') : college.nameEn.replace('College of ', '')}
                </a>
              ))}
            </div>
            <Link 
              href={`/${locale}/colleges`}
              onClick={() => setIsMenuOpen(false)}
              className="block px-2 py-2 mt-1 text-xs text-blue-400 hover:text-blue-300 font-medium"
            >
              {isRTL ? 'عرض الكل ←' : '→ View all'}
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-4 border-t border-white/10">
            <a 
              href="https://systems.alayen.edu.iq/" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30"
            >
              <Monitor className="w-5 h-5" />
              {isRTL ? 'الأنظمة الإلكترونية' : 'E-Systems'}
            </a>
            
            <button 
              onClick={() => {
                switchLocale();
                setIsMenuOpen(false);
              }} 
              className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors"
            >
              <Globe className="w-5 h-5" />
              {isRTL ? 'English' : 'العربية'}
            </button>
          </div>

          {/* Social Links */}
          <div className="mt-6 pt-4 border-t border-white/10">
            <div className="flex justify-center gap-3">
              <a href="https://www.facebook.com/universityofalayen/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a href="https://instagram.com/alayen_iraqi_university" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-pink-600 transition-colors">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              <a href="https://t.me/alayen_university" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-sky-500 transition-colors">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>
              </a>
              <a href="https://www.youtube.com/channel/UCrZWxBoVuC8pQCGGQIpLelw" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
