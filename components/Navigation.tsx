'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { ChevronDown } from 'lucide-react';

interface NavItem {
  key: string;
  href: string;
  children?: NavItem[];
}

export default function Navigation() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations('nav');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { key: 'home', href: `/${locale}` },
    { 
      key: 'about', 
      href: `/${locale}/about`,
      children: [
        { key: 'council', href: `/${locale}/council` },
        { key: 'vision', href: `/${locale}/about#vision` },
        { key: 'presidentBio', href: `/${locale}/council#president-bio` },
        { key: 'presidentMessage', href: `/${locale}/council#president-message` },
        { key: 'deans', href: `/${locale}/council#deans` },
      ]
    },
    { 
      key: 'colleges', 
      href: `/${locale}/colleges`,
      children: [
        { key: 'medical', href: `/${locale}/colleges?type=medical` },
        { key: 'engineering', href: `/${locale}/colleges?type=engineering` },
        { key: 'humanities', href: `/${locale}/colleges?type=humanities` },
      ]
    },
    { key: 'scientificLinks', href: `/${locale}/scientific-links` },
    { key: 'news', href: `/${locale}/news` },
    { key: 'awards', href: `/${locale}/awards` },
    { key: 'staff', href: `/${locale}/staff` },
    { key: 'conferences', href: `/${locale}/conferences` },
    { key: 'systems', href: `/${locale}/systems` },
    { key: 'students', href: `/${locale}/students` },
    { key: 'contact', href: `/${locale}/contact` },
  ];

  const isActive = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === `/${locale}` || pathname === '/';
    }
    return pathname?.startsWith(href);
  };

  return (
    <nav className="flex items-center">
      {navItems.map((item) => {
        const active = isActive(item.href);
        
        if (item.children) {
          return (
            <div
              key={item.key}
              className="relative group"
              onMouseEnter={() => setOpenDropdown(item.key)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className={`flex items-center gap-1 px-4 py-8 text-sm font-medium transition-colors border-b-2 ${
                  active
                    ? 'text-university-primary border-university-primary bg-gray-50'
                    : 'text-gray-700 border-transparent hover:text-university-primary hover:bg-gray-50'
                }`}
              >
                <span>{t(item.key)}</span>
                <ChevronDown className="w-4 h-4" />
              </Link>

              {openDropdown === item.key && (
                <div className="absolute top-full left-0 rtl:left-auto rtl:right-0 min-w-[220px] bg-white shadow-xl border-t-2 border-university-primary z-50">
                  {item.children.map((child) => (
                    <Link
                      key={child.key}
                      href={child.href}
                      className="block px-5 py-3 text-sm text-gray-700 hover:text-university-primary hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                    >
                      {t(child.key)}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        }

        return (
          <Link
            key={item.key}
            href={item.href}
            className={`px-4 py-8 text-sm font-medium transition-colors border-b-2 ${
              active
                ? 'text-university-primary border-university-primary bg-gray-50'
                : 'text-gray-700 border-transparent hover:text-university-primary hover:bg-gray-50'
            }`}
          >
            {t(item.key)}
          </Link>
        );
      })}
    </nav>
  );
}
