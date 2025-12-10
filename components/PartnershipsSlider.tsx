'use client';

import { useLocale } from 'next-intl';
import { useState } from 'react';
import { Globe, Building, Award, ExternalLink } from 'lucide-react';

export default function PartnershipsNetwork() {
    const locale = useLocale();
    const isRTL = locale === 'ar';
    const [activeCategory, setActiveCategory] = useState<'international' | 'local' | 'rankings'>('international');

    const categories = {
        international: {
            titleAr: 'الاتفاقيات الدولية',
            titleEn: 'International Agreements',
            icon: Globe,
            color: 'from-blue-600 to-blue-700',
            partners: [
                { nameAr: 'جامعة هارفارد', nameEn: 'Harvard University', country: 'USA', rank: 1 },
                { nameAr: 'جامعة أكسفورد', nameEn: 'Oxford University', country: 'UK', rank: 2 },
                { nameAr: 'جامعة ستانفورد', nameEn: 'Stanford University', country: 'USA', rank: 3 },
                { nameAr: 'معهد ماساتشوستس', nameEn: 'MIT', country: 'USA', rank: 4 },
                { nameAr: 'جامعة كامبريدج', nameEn: 'Cambridge University', country: 'UK', rank: 5 },
                { nameAr: 'جامعة طوكيو', nameEn: 'Tokyo University', country: 'Japan', rank: 6 },
                { nameAr: 'جامعة تورنتو', nameEn: 'University of Toronto', country: 'Canada', rank: 7 },
                { nameAr: 'جامعة ملبورن', nameEn: 'University of Melbourne', country: 'Australia', rank: 8 },
            ],
        },
        local: {
            titleAr: 'الاتفاقيات المحلية',
            titleEn: 'Local Agreements',
            icon: Building,
            color: 'from-blue-500 to-blue-700',
            partners: [
                { nameAr: 'جامعة بغداد', nameEn: 'University of Baghdad', country: 'Iraq', rank: 1 },
                { nameAr: 'جامعة البصرة', nameEn: 'University of Basra', country: 'Iraq', rank: 2 },
                { nameAr: 'الجامعة التقنية', nameEn: 'Technical University', country: 'Iraq', rank: 3 },
                { nameAr: 'جامعة الموصل', nameEn: 'University of Mosul', country: 'Iraq', rank: 4 },
                { nameAr: 'جامعة الكوفة', nameEn: 'University of Kufa', country: 'Iraq', rank: 5 },
                { nameAr: 'جامعة كربلاء', nameEn: 'University of Karbala', country: 'Iraq', rank: 6 },
            ],
        },
        rankings: {
            titleAr: 'التصنيفات العالمية',
            titleEn: 'Global Rankings',
            icon: Award,
            color: 'from-blue-600 to-blue-800',
            partners: [
                { nameAr: 'تصنيف QS العالمي', nameEn: 'QS World Ranking', country: 'Global', rank: 1 },
                { nameAr: 'تصنيف Times للتعليم', nameEn: 'Times Higher Education', country: 'Global', rank: 2 },
                { nameAr: 'تصنيف Shanghai', nameEn: 'Shanghai Ranking', country: 'Global', rank: 3 },
                { nameAr: 'تصنيف Webometrics', nameEn: 'Webometrics Ranking', country: 'Global', rank: 4 },
                { nameAr: 'تصنيف Scopus', nameEn: 'Scopus Ranking', country: 'Global', rank: 5 },
            ],
        },
    };

    const currentCategory = categories[activeCategory];
    const Icon = currentCategory.icon;

    return (
        <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
                        <div className="w-2 h-2 bg-blue-300 rounded-full" />
                        <span className="text-sm font-bold text-white uppercase tracking-wider">
                            {isRTL ? 'الشراكات والتصنيفات' : 'Partnerships & Rankings'}
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                        {isRTL ? 'شبكة شراكاتنا العالمية' : 'Our Global Partnership Network'}
                    </h2>

                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        {isRTL
                            ? 'نفخر بشراكاتنا الاستراتيجية مع أفضل الجامعات والمؤسسات التعليمية'
                            : 'We are proud of our strategic partnerships with the best universities and institutions'}
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex justify-center gap-4 mb-16">
                    {Object.entries(categories).map(([key, cat]) => {
                        const CatIcon = cat.icon;
                        return (
                            <button
                                key={key}
                                onClick={() => setActiveCategory(key as any)}
                                className={`group relative px-8 py-4 rounded-full font-bold transition-all ${activeCategory === key
                                        ? 'bg-white text-gray-900 shadow-2xl scale-110'
                                        : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/20'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <CatIcon className="w-5 h-5" />
                                    <span>{isRTL ? cat.titleAr : cat.titleEn}</span>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Circular Network Visualization */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Center Hub */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                        <div className={`w-40 h-40 bg-gradient-to-br ${currentCategory.color} rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20 animate-pulse`}>
                            <div className="text-center text-white">
                                <Icon className="w-16 h-16 mx-auto mb-2" />
                                <div className="text-2xl font-black">{currentCategory.partners.length}+</div>
                            </div>
                        </div>
                    </div>

                    {/* Orbiting Partners */}
                    <div className="relative w-full aspect-square max-w-4xl mx-auto">
                        {currentCategory.partners.map((partner, index) => {
                            const angle = (index * 360) / currentCategory.partners.length;
                            const radius = 45; // percentage
                            const x = 50 + radius * Math.cos((angle - 90) * Math.PI / 180);
                            const y = 50 + radius * Math.sin((angle - 90) * Math.PI / 180);

                            return (
                                <div
                                    key={index}
                                    className="absolute group animate-fade-in-up"
                                    style={{
                                        left: `${x}%`,
                                        top: `${y}%`,
                                        transform: 'translate(-50%, -50%)',
                                        animationDelay: `${index * 100}ms`,
                                    }}
                                >
                                    {/* Connection Line */}
                                    <svg
                                        className="absolute top-1/2 left-1/2 -z-10 pointer-events-none"
                                        style={{
                                            width: '200%',
                                            height: '200%',
                                            transform: 'translate(-50%, -50%)',
                                        }}
                                    >
                                        <line
                                            x1="50%"
                                            y1="50%"
                                            x2={`${50 - (x - 50)}%`}
                                            y2={`${50 - (y - 50)}%`}
                                            stroke="rgba(255,255,255,0.1)"
                                            strokeWidth="2"
                                            className="group-hover:stroke-white/30 transition-all"
                                        />
                                    </svg>

                                    {/* Partner Node */}
                                    <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 hover:bg-white/20 hover:scale-110 transition-all cursor-pointer min-w-[180px]">
                                        <div className="flex items-start gap-3">
                                            <div className={`w-10 h-10 bg-gradient-to-br ${currentCategory.color} rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold`}>
                                                {partner.rank}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-sm font-bold text-white mb-1 truncate">
                                                    {isRTL ? partner.nameAr : partner.nameEn}
                                                </h4>
                                                <p className="text-xs text-gray-300 flex items-center gap-1">
                                                    <Globe className="w-3 h-3" />
                                                    {partner.country}
                                                </p>
                                            </div>
                                            <ExternalLink className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mt-20 max-w-3xl mx-auto">
                    <div className="text-center">
                        <div className="text-4xl font-black text-white mb-2">50+</div>
                        <div className="text-sm text-gray-300 font-semibold uppercase">
                            {isRTL ? 'اتفاقية دولية' : 'International'}
                        </div>
                    </div>
                    <div className="text-center border-x border-white/20">
                        <div className="text-4xl font-black text-white mb-2">30+</div>
                        <div className="text-sm text-gray-300 font-semibold uppercase">
                            {isRTL ? 'اتفاقية محلية' : 'Local'}
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-black text-white mb-2">5+</div>
                        <div className="text-sm text-gray-300 font-semibold uppercase">
                            {isRTL ? 'تصنيف عالمي' : 'Rankings'}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
