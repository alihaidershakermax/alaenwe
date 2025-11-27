'use client';

import { useLocale } from 'next-intl';
import { ExternalLink, GraduationCap, FileText, BookOpen, User, Award, Monitor } from 'lucide-react';
import linksData from '@/data/links.json';

export default function QuickLinksSection() {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  // Filter system links
  const systemLinks = linksData.filter(link => link.category === 'system');

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: any } = {
      'graduation-cap': GraduationCap,
      'user': User,
      'award': Award,
      'file-text': FileText,
      'book': BookOpen,
      'monitor': Monitor,
    };
    return icons[iconName] || Monitor;
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {isRTL ? 'الأنظمة الإلكترونية' : 'Electronic Systems'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {isRTL
              ? 'الوصول السريع إلى الأنظمة والخدمات الإلكترونية للجامعة'
              : 'Quick access to university electronic systems and services'}
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {systemLinks.map((link) => {
            const Icon = getIcon(link.icon || 'monitor');
            const title = locale === 'ar' ? link.title : link.titleEn;
            const description = locale === 'ar' ? link.description : link.descriptionEn;

            return (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-university-primary hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 bg-university-primary/10 rounded-lg flex items-center justify-center group-hover:bg-university-primary group-hover:scale-110 transition-all">
                    <Icon className="w-6 h-6 text-university-primary group-hover:text-white transition-colors" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-university-primary transition-colors line-clamp-2">
                        {title}
                      </h3>
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-university-primary transition-colors flex-shrink-0 ml-2 rtl:ml-0 rtl:mr-2" />
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {description}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
