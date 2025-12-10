import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { FileText, ExternalLink, Calendar, Building2 } from 'lucide-react';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'nav' });

    return {
        title: t('agreements') || 'Agreements',
    };
}

export default async function AgreementsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const isRTL = locale === 'ar';

    const agreements = [
        {
            titleAr: 'اتفاقية التعاون الأكاديمي',
            titleEn: 'Academic Cooperation Agreement',
            partnerAr: 'جامعة بغداد',
            partnerEn: 'University of Baghdad',
            date: '2024',
            type: isRTL ? 'تعاون أكاديمي' : 'Academic',
        },
        {
            titleAr: 'اتفاقية التبادل الطلابي',
            titleEn: 'Student Exchange Agreement',
            partnerAr: 'جامعة البصرة',
            partnerEn: 'University of Basrah',
            date: '2023',
            type: isRTL ? 'تبادل طلابي' : 'Exchange',
        },
        {
            titleAr: 'اتفاقية البحث العلمي',
            titleEn: 'Research Collaboration Agreement',
            partnerAr: 'جامعة الموصل',
            partnerEn: 'University of Mosul',
            date: '2023',
            type: isRTL ? 'بحث علمي' : 'Research',
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }} />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
                            <FileText className="w-10 h-10" />
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
                            {isRTL ? 'الاتفاقيات والشراكات' : 'Agreements & Partnerships'}
                        </h1>
                        <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                            {isRTL
                                ? 'نفخر بشراكاتنا الأكاديمية والبحثية مع الجامعات والمؤسسات المحلية والدولية'
                                : 'We are proud of our academic and research partnerships with local and international universities and institutions'}
                        </p>
                    </div>
                </div>
            </section>

            {/* Agreements List */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid gap-6">
                            {agreements.map((agreement, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 md:p-8"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-start gap-4">
                                                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                                                    <Building2 className="w-6 h-6 text-white" />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                                        {isRTL ? agreement.titleAr : agreement.titleEn}
                                                    </h3>
                                                    <p className="text-gray-600 mb-3">
                                                        {isRTL ? agreement.partnerAr : agreement.partnerEn}
                                                    </p>
                                                    <div className="flex flex-wrap gap-3">
                                                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                                                            <Calendar className="w-4 h-4" />
                                                            {agreement.date}
                                                        </span>
                                                        <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                                                            {agreement.type}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                                            {isRTL ? 'عرض التفاصيل' : 'View Details'}
                                            <ExternalLink className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            {isRTL ? 'هل تريد التعاون معنا؟' : 'Want to Partner with Us?'}
                        </h2>
                        <p className="text-xl text-blue-200 mb-8">
                            {isRTL
                                ? 'نرحب بالتعاون مع المؤسسات الأكاديمية والبحثية'
                                : 'We welcome collaboration with academic and research institutions'}
                        </p>
                        <a
                            href={`/${locale}/contact`}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 font-bold rounded-lg hover:bg-blue-50 transition-colors"
                        >
                            {isRTL ? 'تواصل معنا' : 'Contact Us'}
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
