'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Mail, Phone, MapPin, ArrowUp, ExternalLink } from 'lucide-react';
import { Particles } from './reactbits';

const FacebookIcon = () => <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>;
const InstagramIcon = () => <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>;
const XIcon = () => <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>;
const YoutubeIcon = () => <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>;
const TelegramIcon = () => <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>;

export default function Footer() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const quickLinks = [
    { labelAr: 'الرئيسية', labelEn: 'Home', href: `/${locale}` },
    { labelAr: 'عن الجامعة', labelEn: 'About', href: `/${locale}/about` },
    { labelAr: 'الكليات', labelEn: 'Colleges', href: `/${locale}/colleges` },
    { labelAr: 'الأخبار', labelEn: 'News', href: `/${locale}/news` },
    { labelAr: 'اتصل بنا', labelEn: 'Contact', href: `/${locale}/contact` },
  ];

  const eServices = [
    { labelAr: 'التعليم الإلكتروني', labelEn: 'E-Learning', href: 'https://elearning.alayen.edu.iq/' },
    { labelAr: 'نظام النتائج', labelEn: 'Results', href: 'https://learning.alayen.edu.iq/' },
    { labelAr: 'مواقع التدريسيين', labelEn: 'Staff Sites', href: 'https://teacher.alayen.edu.iq/' },
    { labelAr: 'الأنظمة الإلكترونية', labelEn: 'E-Systems', href: 'https://systems.alayen.edu.iq/' },
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/universityofalayen/', icon: FacebookIcon, color: 'hover:bg-blue-600' },
    { name: 'Instagram', href: 'https://instagram.com/alayen_iraqi_university', icon: InstagramIcon, color: 'hover:bg-pink-600' },
    { name: 'X', href: 'https://twitter.com/alayeneduiq', icon: XIcon, color: 'hover:bg-gray-700' },
    { name: 'YouTube', href: 'https://www.youtube.com/channel/UCrZWxBoVuC8pQCGGQIpLelw', icon: YoutubeIcon, color: 'hover:bg-red-600' },
    { name: 'Telegram', href: 'https://t.me/alayen_university', icon: TelegramIcon, color: 'hover:bg-sky-500' },
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <footer className="relative bg-gray-900 text-white overflow-hidden">
        {/* Particles Background */}
        <div className="absolute inset-0 opacity-30">
          <Particles
            color='#3b82f6'
            quantity={50}
            speed={0.3}
            size={2}
          />
        </div>

        <div className="relative z-10">
          {/* Main Footer Content */}
          <div className="container mx-auto px-4 py-8 md:py-12">
            {/* Mobile: University Info Centered */}
            <div className="md:hidden text-center mb-8">
              <div className="flex flex-col items-center gap-3 mb-4">
                <img src="/images/logo.png" alt="Logo" className="w-16 h-16 object-contain brightness-0 invert" />
                <div>
                  <h3 className="text-lg font-bold">{isRTL ? 'جامعة العين العراقية' : 'Al-Ayen Iraqi University'}</h3>
                  <p className="text-xs text-gray-400">{isRTL ? 'وزارة التعليم العالي' : 'Ministry of Higher Education'}</p>
                </div>
              </div>
              {/* Social Links Mobile */}
              <div className="flex justify-center gap-3 mt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-11 h-11 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile: Quick Links & E-Services in 2 columns */}
            <div className="md:hidden grid grid-cols-2 gap-6 mb-8">
              {/* Quick Links */}
              <div>
                <h4 className="text-sm font-bold mb-3 text-blue-400">{isRTL ? 'روابط سريعة' : 'Quick Links'}</h4>
                <ul className="space-y-2">
                  {quickLinks.map((link, idx) => (
                    <li key={idx}>
                      <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-xs">
                        {isRTL ? link.labelAr : link.labelEn}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* E-Services */}
              <div>
                <h4 className="text-sm font-bold mb-3 text-blue-400">{isRTL ? 'الخدمات' : 'E-Services'}</h4>
                <ul className="space-y-2">
                  {eServices.map((service, idx) => (
                    <li key={idx}>
                      <a href={service.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-xs">
                        {isRTL ? service.labelAr : service.labelEn}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mobile: Contact Info */}
            <div className="md:hidden text-center mb-6 py-4 border-t border-white/10">
              <div className="flex flex-col items-center gap-2 text-gray-400 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  <span>{isRTL ? 'ذي قار - الناصرية' : 'Thi-Qar - Nasiriyah'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-500" />
                  <span dir="ltr">+964 790 123 4567</span>
                </div>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* University Info */}
              <div className="lg:col-span-1">
                <div className="flex items-center gap-3 mb-4">
                  <img src="/images/logo.png" alt="Logo" className="w-14 h-14 object-contain brightness-0 invert" />
                  <div>
                    <h3 className="text-lg font-bold">{isRTL ? 'جامعة العين العراقية' : 'Al-Ayen Iraqi University'}</h3>
                    <p className="text-xs text-gray-400">{isRTL ? 'وزارة التعليم العالي' : 'Ministry of Higher Education'}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {isRTL
                    ? 'جامعة العين العراقية - صرح علمي متميز يسعى لتقديم تعليم عالي الجودة وبحث علمي رصين.'
                    : 'Al-Ayen Iraqi University - A distinguished academic institution committed to quality education and research.'}
                </p>
                {/* Social Links */}
                <div className="flex gap-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-9 h-9 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 ${social.color}`}
                      aria-label={social.name}
                    >
                      <social.icon />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-bold mb-4 text-blue-400">{isRTL ? 'روابط سريعة' : 'Quick Links'}</h4>
                <ul className="space-y-2">
                  {quickLinks.map((link, idx) => (
                    <li key={idx}>
                      <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                        {isRTL ? link.labelAr : link.labelEn}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* E-Services */}
              <div>
                <h4 className="text-lg font-bold mb-4 text-blue-400">{isRTL ? 'الخدمات الإلكترونية' : 'E-Services'}</h4>
                <ul className="space-y-2">
                  {eServices.map((service, idx) => (
                    <li key={idx}>
                      <a href={service.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2">
                        <ExternalLink className="w-3 h-3" />
                        {isRTL ? service.labelAr : service.labelEn}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-bold mb-4 text-blue-400">{isRTL ? 'تواصل معنا' : 'Contact Us'}</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-400 text-sm">
                    <MapPin className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>{isRTL ? 'ذي قار - الناصرية - العراق' : 'Thi-Qar - Nasiriyah - Iraq'}</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-400 text-sm">
                    <Phone className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <span dir="ltr">+964 790 123 4567</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-400 text-sm">
                    <Mail className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <span>info@alayen.edu.iq</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
                <p className="text-gray-500 text-xs md:text-sm text-center md:text-start">
                  © {new Date().getFullYear()} {isRTL ? 'جامعة العين العراقية' : 'Al-Ayen Iraqi University'}
                </p>
                <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm text-gray-500">
                  <Link href={`/${locale}/about`} className="hover:text-white transition-colors">
                    {isRTL ? 'عن الجامعة' : 'About'}
                  </Link>
                  <span>|</span>
                  <Link href={`/${locale}/contact`} className="hover:text-white transition-colors">
                    {isRTL ? 'اتصل بنا' : 'Contact'}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 ${isRTL ? 'left-6' : 'right-6'} z-50 w-12 h-12 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </>
  );
}
