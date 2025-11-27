'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { ExternalLink, Users } from 'lucide-react';
import { College } from '@/types';

interface CollegeCardProps {
  college: College;
}

export default function CollegeCard({ college }: CollegeCardProps) {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const name = locale === 'ar' ? college.name : college.nameEn;
  const description = locale === 'ar' ? college.description : college.descriptionEn;

  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
      {/* Image/Header */}
      <div className="relative h-48 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-6">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold">{name}</h3>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
          {description}
        </p>

        {/* Departments Count */}
        {college.departments && college.departments.length > 0 && (
          <div className="text-sm text-gray-500 mb-4">
            {isRTL ? `${college.departments.length} أقسام` : `${college.departments.length} Departments`}
          </div>
        )}

        {/* Links */}
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <Link
            href={`/${locale}/colleges/${college.id}`}
            className="flex-1 text-center px-4 py-2 bg-university-primary text-white font-semibold rounded-lg hover:bg-university-secondary transition-colors"
          >
            {isRTL ? 'التفاصيل' : 'Details'}
          </Link>
          
          <a
            href={college.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            aria-label={isRTL ? 'زيارة الموقع' : 'Visit Website'}
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </article>
  );
}
