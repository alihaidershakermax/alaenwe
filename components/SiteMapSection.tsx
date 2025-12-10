'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { ChevronRight, ExternalLink } from 'lucide-react';

export default function SiteMapSection() {
    const locale = useLocale();
    const isRTL = locale === 'ar';

    const siteMapSections = [
        {
            titleAr: 'عن الجامعة',
            titleEn: 'About University',
            links: [
                { labelAr: 'نبذة عن الجامعة', labelEn: 'About Us', href: `/${locale}/about`, external: false },
                { labelAr: 'رئيس الجامعة', labelEn: 'President', href: `/${locale}/president`, external: false },
                { labelAr: 'مجلس الجامعة', labelEn: 'University Council', href: `/${locale}/council`, external: false },
                { labelAr: 'الرؤية والرسالة', labelEn: 'Vision & Mission', href: `/${locale}/about#vision`, external: false },
                { labelAr: 'الجوائز والإنجازات', labelEn: 'Awards', href: `/${locale}/awards`, external: false },
            ]
        },
        {
            titleAr: 'الكليات',
            titleEn: 'Colleges',
            links: [
                { labelAr: 'كلية الطب', labelEn: 'Medicine', href: 'https://med.alayen.edu.iq/', external: true },
                { labelAr: 'كلية طب الأسنان', labelEn: 'Dentistry', href: 'https://dent.alayen.edu.iq/', external: true },
                { labelAr: 'كلية الصيدلة', labelEn: 'Pharmacy', href: 'https://pharm.alayen.edu.iq/', external: true },
                { labelAr: 'كلية الهندسة', labelEn: 'Engineering', href: 'https://eng.alayen.edu.iq/', external: true },
                { labelAr: 'كلية القانون', labelEn: 'Law', href: 'https://law.alayen.edu.iq/', external: true },
                { labelAr: 'كلية التربية', labelEn: 'Education', href: 'https://edu.alayen.edu.iq/', external: true },
            ]
        },
        {
            titleAr: 'الخدمات الإلكترونية',
            titleEn: 'E-Services',
            links: [
                { labelAr: 'نظام التعليم الإلكتروني', labelEn: 'E-Learning', href: 'https://elearning.alayen.edu.iq/', external: true },
                { labelAr: 'نظام النتائج', labelEn: 'Results System', href: 'https://learning.alayen.edu.iq/', external: true },
                { labelAr: 'مواقع التدريسيين', labelEn: 'Staff Sites', href: 'https://teacher.alayen.edu.iq/', external: true },
                { labelAr: 'نظام مسار بولونيا', labelEn: 'Bologna Path', href: 'https://alayen.bis.edu.iq/', external: true },
                { labelAr: 'شهادات الفعاليات', labelEn: 'Certificates', href: 'https://alayen.edu.iq/continuous_education/participation_certificates', external: true },
            ]
        },
        {
            titleAr: 'شؤون الطلبة',
            titleEn: 'Student Affairs',
            links: [
                { labelAr: 'القبول والتسجيل', labelEn: 'Admission', href: `/${locale}/students`, external: false },
                { labelAr: 'المنح الدراسية', labelEn: 'Scholarships', href: `/${locale}/students#scholarships`, external: false },
                { labelAr: 'الأنشطة الطلابية', labelEn: 'Activities', href: `/${locale}/students#activities`, external: false },
                { labelAr: 'الإرشاد الأكاديمي', labelEn: 'Counseling', href: `/${locale}/students#counseling`, external: false },
            ]
        },
        {
            titleAr: 'البحث العلمي',
            titleEn: 'Research',
            links: [
                { labelAr: 'مراكز البحث', labelEn: 'Research Centers', href: `/${locale}/research`, external: false },
                { labelAr: 'المجلات العلمية', labelEn: 'Journals', href: `/${locale}/research#journals`, external: false },
                { labelAr: 'المؤتمرات', labelEn: 'Conferences', href: `/${locale}/research#conferences`, external: false },
                { labelAr: 'براءات الاختراع', labelEn: 'Patents', href: `/${locale}/research#patents`, external: false },
            ]
        },
        {
            titleAr: 'الأخبار والفعاليات',
            titleEn: 'News & Events',
            links: [
                { labelAr: 'آخر الأخبار', labelEn: 'Latest News', href: `/${locale}/news`, external: false },
                { labelAr: 'الفعاليات القادمة', labelEn: 'Upcoming Events', href: `/${locale}/events`, external: false },
                { labelAr: 'معرض الصور', labelEn: 'Gallery', href: `/${locale}/gallery`, external: false },
                { labelAr: 'اتصل بنا', labelEn: 'Contact Us', href: `/${locale}/contact`, external: false },
            ]
        },
    ];

    return (
        <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-16 overflow-hidden">
            {/* خلفية زخرفية */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* العنوان */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-blue-100 mb-4">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 bg-clip-text text-transparent">
                            {isRTL ? 'خريطة الموقع' : 'Site Map'}
                        </h2>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                    </div>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        {isRTL
                            ? 'تصفح جميع أقسام وخدمات الجامعة من مكان واحد'
                            : 'Browse all university sections and services from one place'}
                    </p>
                </div>

                {/* الشبكة */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {siteMapSections.map((section, idx) => (
                        <div
                            key={idx}
                            className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100/50 hover:border-blue-300 hover:-translate-y-1"
                        >
                            {/* عنوان القسم */}
                            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-blue-100">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                    <ChevronRight className={`w-5 h-5 text-white ${isRTL ? 'rotate-180' : ''}`} />
                                </div>
                                <h3 className="text-xl font-bold text-blue-900">
                                    {isRTL ? section.titleAr : section.titleEn}
                                </h3>
                            </div>

                            {/* الروابط */}
                            <ul className="space-y-3">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        {link.external ? (
                                            <a
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors duration-200 group/link text-sm"
                                            >
                                                <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 opacity-50 group-hover/link:opacity-100 group-hover/link:scale-110 transition-all" />
                                                <span className="group-hover/link:translate-x-1 transition-transform">
                                                    {isRTL ? link.labelAr : link.labelEn}
                                                </span>
                                            </a>
                                        ) : (
                                            <Link
                                                href={link.href}
                                                className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition-colors duration-200 group/link text-sm"
                                            >
                                                <div className={`w-1.5 h-1.5 bg-blue-400 rounded-full opacity-50 group-hover/link:opacity-100 group-hover/link:scale-125 transition-all ${isRTL ? 'mr-1' : 'ml-1'}`} />
                                                <span className="group-hover/link:translate-x-1 transition-transform">
                                                    {isRTL ? link.labelAr : link.labelEn}
                                                </span>
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* رابط خريطة الموقع الكاملة */}
                <div className="text-center mt-12">
                    <a
                        href="https://alayen.edu.iq/map"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                    >
                        <span>{isRTL ? 'عرض خريطة الموقع الكاملة' : 'View Full Site Map'}</span>
                        <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
}
