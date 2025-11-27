'use client';

import { useLocale } from 'next-intl';
import { Microscope, BookOpen, FlaskConical, Brain, Atom, Dna, TrendingUp, Award } from 'lucide-react';

export default function ResearchCenterSection() {
    const locale = useLocale();
    const isRTL = locale === 'ar';

    const researchAreas = [
        {
            icon: Microscope,
            titleAr: 'العلوم الطبية',
            titleEn: 'Medical Sciences',
            descAr: 'أبحاث متقدمة في الطب والصحة العامة',
            descEn: 'Advanced research in medicine and public health',
            publications: '450+',
            gradient: 'from-blue-500 to-blue-600',
        },
        {
            icon: FlaskConical,
            titleAr: 'الكيمياء والصيدلة',
            titleEn: 'Chemistry & Pharmacy',
            descAr: 'تطوير أدوية ومركبات كيميائية جديدة',
            descEn: 'Development of new drugs and chemical compounds',
            publications: '380+',
            gradient: 'from-blue-600 to-blue-700',
        },
        {
            icon: Brain,
            titleAr: 'الذكاء الاصطناعي',
            titleEn: 'Artificial Intelligence',
            descAr: 'حلول ذكية ومبتكرة للمستقبل',
            descEn: 'Smart and innovative solutions for the future',
            publications: '320+',
            gradient: 'from-blue-500 to-blue-700',
        },
        {
            icon: Atom,
            titleAr: 'الفيزياء والطاقة',
            titleEn: 'Physics & Energy',
            descAr: 'أبحاث في الطاقة المتجددة والفيزياء التطبيقية',
            descEn: 'Research in renewable energy and applied physics',
            publications: '290+',
            gradient: 'from-blue-600 to-blue-800',
        },
        {
            icon: Dna,
            titleAr: 'الهندسة الوراثية',
            titleEn: 'Genetic Engineering',
            descAr: 'دراسات جينية وتطبيقات حيوية',
            descEn: 'Genetic studies and biological applications',
            publications: '260+',
            gradient: 'from-blue-500 to-blue-600',
        },
        {
            icon: BookOpen,
            titleAr: 'العلوم الإنسانية',
            titleEn: 'Humanities',
            descAr: 'بحوث في التاريخ والأدب والعلوم الاجتماعية',
            descEn: 'Research in history, literature and social sciences',
            publications: '340+',
            gradient: 'from-blue-600 to-blue-700',
        },
    ];

    const stats = [
        {
            icon: BookOpen,
            value: '3014',
            labelAr: 'بحث منشور في Scopus',
            labelEn: 'Published Research in Scopus',
            color: 'from-blue-500 to-blue-600',
        },
        {
            icon: TrendingUp,
            value: '85%',
            labelAr: 'معدل الاستشهاد',
            labelEn: 'Citation Rate',
            color: 'from-blue-600 to-blue-700',
        },
        {
            icon: Award,
            value: '120+',
            labelAr: 'جائزة بحثية',
            labelEn: 'Research Awards',
            color: 'from-blue-500 to-blue-700',
        },
        {
            icon: Microscope,
            value: '45',
            labelAr: 'مختبر بحثي',
            labelEn: 'Research Labs',
            color: 'from-blue-600 to-blue-800',
        },
    ];

    return (
        <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'linear-gradient(45deg, transparent 48%, rgba(255,255,255,0.1) 49%, rgba(255,255,255,0.1) 51%, transparent 52%)',
                    backgroundSize: '20px 20px'
                }} />

                {/* Floating Particles */}
                {[...Array(40)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 2}s`,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
                        <Microscope className="w-5 h-5 text-blue-300 animate-pulse" />
                        <span className="text-sm font-semibold text-white">
                            {isRTL ? 'المركز البحثي' : 'Research Center'}
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                        {isRTL ? 'التميز في البحث العلمي' : 'Excellence in Scientific Research'}
                    </h2>

                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        {isRTL
                            ? 'نسعى لتقديم أبحاث علمية رائدة تساهم في حل التحديات العالمية وتطوير المجتمع'
                            : 'We strive to provide pioneering scientific research contributing to solving global challenges and developing society'}
                    </p>
                </div>

                {/* Research Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={index}
                                className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all hover:scale-105 animate-fade-in-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Glow Effect */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />

                                <div className={`relative inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                                    <Icon className="w-7 h-7 text-white" />
                                </div>

                                <div className={`relative text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                                    {stat.value}
                                </div>

                                <div className="relative text-sm text-gray-300 font-semibold">
                                    {isRTL ? stat.labelAr : stat.labelEn}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Research Areas */}
                <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                        {isRTL ? 'مجالات البحث' : 'Research Areas'}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {researchAreas.map((area, index) => {
                            const Icon = area.icon;
                            return (
                                <div
                                    key={index}
                                    className="group relative bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 animate-fade-in-up"
                                    style={{ animationDelay: `${(index + 4) * 100}ms` }}
                                >
                                    {/* Gradient Glow */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />

                                    {/* Icon */}
                                    <div className="relative mb-6">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                                        <div className={`relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${area.gradient} rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                            <Icon className="w-10 h-10 text-white" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h4 className="text-2xl font-bold text-white mb-3">
                                        {isRTL ? area.titleAr : area.titleEn}
                                    </h4>

                                    <p className="text-gray-300 leading-relaxed mb-6">
                                        {isRTL ? area.descAr : area.descEn}
                                    </p>

                                    {/* Publications Count */}
                                    <div className="flex items-center gap-2">
                                        <div className={`w-2 h-2 bg-gradient-to-r ${area.gradient} rounded-full animate-pulse`} />
                                        <span className="text-sm font-semibold text-gray-400">
                                            {area.publications} {isRTL ? 'بحث منشور' : 'Publications'}
                                        </span>
                                    </div>

                                    {/* Bottom Accent */}
                                    <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${area.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl`} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
