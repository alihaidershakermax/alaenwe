'use client';

import { useLocale } from 'next-intl';

export default function AboutUniversityModern() {
    const locale = useLocale();
    const isRTL = locale === 'ar';

    const features = [
        {
            titleAr: 'الرؤية',
            titleEn: 'Vision',
            descAr: 'أن نكون جامعة رائدة في التعليم والبحث العلمي على المستوى الإقليمي والعالمي',
            descEn: 'To be a leading university in education and scientific research at regional and global levels',
        },
        {
            titleAr: 'الرسالة',
            titleEn: 'Mission',
            descAr: 'تقديم تعليم نوعي متميز وإجراء بحوث علمية مبتكرة تخدم المجتمع',
            descEn: 'Providing distinguished quality education and conducting innovative scientific research serving society',
        },
        {
            titleAr: 'الأهداف',
            titleEn: 'Goals',
            descAr: 'الالتزام بأعلى معايير الجودة في جميع برامجنا الأكاديمية والبحثية',
            descEn: 'Commitment to highest quality standards in all our academic and research programs',
        },
        {
            titleAr: 'القيم',
            titleEn: 'Values',
            descAr: 'النزاهة، الإبداع، التعاون، والمسؤولية الاجتماعية',
            descEn: 'Integrity, Innovation, Collaboration, and Social Responsibility',
        },
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
            {/* Subtle Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(37,99,235,0.08),transparent_50%)]" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header - Academic Style */}
                <div className="text-center mb-20 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-50 rounded-full border border-blue-200 mb-6">
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                        <span className="text-sm font-bold text-blue-700 uppercase tracking-wider">
                            {isRTL ? 'معلومات عن الجامعة' : 'About University'}
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
                        {isRTL ? 'جامعة العين العراقية' : 'Al-Ayen Iraqi University'}
                    </h2>

                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="h-1 w-24 bg-gradient-to-r from-transparent to-blue-600 rounded-full"></div>
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                        <div className="h-1 w-24 bg-gradient-to-l from-transparent to-blue-600 rounded-full"></div>
                    </div>

                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                        {isRTL
                            ? 'مؤسسة تعليمية رائدة تسعى لتقديم تعليم نوعي متميز وبناء جيل واعد من الكوادر المؤهلة التي تساهم في خدمة المجتمع وتطوير البلد'
                            : 'A leading educational institution striving to provide distinguished quality education and build a promising generation of qualified cadres'}
                    </p>
                </div>

                {/* Features - Simple Academic Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/50 backdrop-blur-sm rounded-lg p-8 border-l-4 border-blue-600 hover:border-blue-700 transition-all duration-300 hover:shadow-lg animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                    {index + 1}
                                </span>
                                {isRTL ? feature.titleAr : feature.titleEn}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {isRTL ? feature.descAr : feature.descEn}
                            </p>
                        </div>
                    ))}
                </div>

                {/* President's Message - Simplified */}
                <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-10 border border-blue-200/50 shadow-lg animate-fade-in-up">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="flex-shrink-0">
                            <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-xl">
                                <div className="w-28 h-28 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                    <span className="text-4xl font-bold text-white">رئيس</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex-1 text-center md:text-right">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                {isRTL ? 'كلمة رئيس الجامعة' : "President's Message"}
                            </h3>
                            <p className="text-blue-700 font-semibold mb-4">
                                {isRTL ? 'أ.د. محمد علي الجبوري' : 'Prof. Dr. Mohammed Ali Al-Jubouri'}
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                {isRTL
                                    ? 'يسعدني أن أرحب بكم في جامعة العين العراقية، حيث نلتزم بتقديم تعليم عالي الجودة يواكب التطورات العالمية ويلبي احتياجات سوق العمل.'
                                    : 'I am pleased to welcome you to Al-Ayen Iraqi University, where we are committed to providing high-quality education that keeps pace with global developments.'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
