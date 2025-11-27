'use client';

import { useLocale } from 'next-intl';
import { Users, Award, BookOpen, GraduationCap, Target, Shield } from 'lucide-react';

export default function CouncilPage() {
    const locale = useLocale();
    const isRTL = locale === 'ar';

    const councilMembers = [
        {
            nameAr: 'أ.د. محمد جواد الخفاجي',
            nameEn: 'Prof. Dr. Mohammed Jawad Al-Khafaji',
            positionAr: 'رئيس مجلس الجامعة',
            positionEn: 'Chairman of the University Council',
            image: '/images/council/chairman.jpg'
        },
        {
            nameAr: 'أ.د. علي حسن الموسوي',
            nameEn: 'Prof. Dr. Ali Hassan Al-Mousawi',
            positionAr: 'نائب رئيس المجلس',
            positionEn: 'Vice Chairman',
            image: '/images/council/vice-chairman.jpg'
        },
        {
            nameAr: 'أ.د. فاطمة أحمد الزهراء',
            nameEn: 'Prof. Dr. Fatima Ahmed Al-Zahra',
            positionAr: 'عضو مجلس الجامعة - كلية الطب',
            positionEn: 'Council Member - College of Medicine',
            image: '/images/council/member1.jpg'
        },
        {
            nameAr: 'أ.د. حسين كريم العبودي',
            nameEn: 'Prof. Dr. Hussein Kareem Al-Aboudi',
            positionAr: 'عضو مجلس الجامعة - كلية الهندسة',
            positionEn: 'Council Member - College of Engineering',
            image: '/images/council/member2.jpg'
        },
        {
            nameAr: 'أ.د. زينب محمد الحكيم',
            nameEn: 'Prof. Dr. Zainab Mohammed Al-Hakim',
            positionAr: 'عضو مجلس الجامعة - كلية الصيدلة',
            positionEn: 'Council Member - College of Pharmacy',
            image: '/images/council/member3.jpg'
        },
        {
            nameAr: 'أ.د. عباس جعفر السعدي',
            nameEn: 'Prof. Dr. Abbas Jaafar Al-Saadi',
            positionAr: 'عضو مجلس الجامعة - كلية القانون',
            positionEn: 'Council Member - College of Law',
            image: '/images/council/member4.jpg'
        }
    ];

    const responsibilities = [
        {
            icon: Target,
            titleAr: 'رسم السياسات',
            titleEn: 'Policy Making',
            descAr: 'وضع السياسات العامة للجامعة والإشراف على تنفيذها',
            descEn: 'Setting general university policies and overseeing their implementation'
        },
        {
            icon: BookOpen,
            titleAr: 'البرامج الأكاديمية',
            titleEn: 'Academic Programs',
            descAr: 'اعتماد البرامج الأكاديمية والخطط الدراسية',
            descEn: 'Approving academic programs and study plans'
        },
        {
            icon: Award,
            titleAr: 'الجودة والاعتماد',
            titleEn: 'Quality & Accreditation',
            descAr: 'ضمان جودة التعليم والحصول على الاعتمادات الأكاديمية',
            descEn: 'Ensuring education quality and obtaining academic accreditations'
        },
        {
            icon: Users,
            titleAr: 'التعيينات',
            titleEn: 'Appointments',
            descAr: 'الموافقة على تعيين أعضاء الهيئة التدريسية والإدارية',
            descEn: 'Approving faculty and administrative appointments'
        },
        {
            icon: Shield,
            titleAr: 'الرقابة المالية',
            titleEn: 'Financial Oversight',
            descAr: 'مراقبة الميزانية والشؤون المالية للجامعة',
            descEn: 'Monitoring university budget and financial affairs'
        },
        {
            icon: GraduationCap,
            titleAr: 'البحث العلمي',
            titleEn: 'Scientific Research',
            descAr: 'دعم وتطوير البحث العلمي والدراسات العليا',
            descEn: 'Supporting and developing scientific research and graduate studies'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 opacity-95"></div>
                <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
                            <Users className="w-5 h-5 text-blue-300" />
                            <span className="text-white/90 font-medium">
                                {isRTL ? 'القيادة الأكاديمية' : 'Academic Leadership'}
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                            {isRTL ? 'مجلس جامعة العين العراقية' : 'Al-Ayen University Council'}
                        </h1>

                        <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                            {isRTL
                                ? 'الهيئة العليا المسؤولة عن رسم السياسات الأكاديمية والإدارية وتوجيه مسيرة الجامعة نحو التميز والريادة'
                                : 'The supreme body responsible for setting academic and administrative policies and guiding the university towards excellence and leadership'
                            }
                        </p>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
            </section>

            {/* Council Responsibilities */}
            <section className="py-20 relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-gray-900 mb-4">
                            {isRTL ? 'مسؤوليات المجلس' : 'Council Responsibilities'}
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            {isRTL
                                ? 'يتولى مجلس الجامعة مجموعة من المسؤوليات الحيوية لضمان التميز الأكاديمي'
                                : 'The University Council undertakes vital responsibilities to ensure academic excellence'
                            }
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {responsibilities.map((item, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                                    <item.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {isRTL ? item.titleAr : item.titleEn}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {isRTL ? item.descAr : item.descEn}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Council Members */}
            <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-white mb-4">
                            {isRTL ? 'أعضاء المجلس' : 'Council Members'}
                        </h2>
                        <p className="text-lg text-white/70 max-w-2xl mx-auto">
                            {isRTL
                                ? 'نخبة من الأكاديميين والخبراء الذين يقودون مسيرة الجامعة'
                                : 'Elite academics and experts leading the university\'s journey'
                            }
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {councilMembers.map((member, index) => (
                            <div
                                key={index}
                                className="group bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                            >
                                <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Users className="w-24 h-24 text-white/30" />
                                    </div>
                                    {/* Placeholder for member image */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {isRTL ? member.nameAr : member.nameEn}
                                    </h3>
                                    <p className="text-blue-300 font-medium">
                                        {isRTL ? member.positionAr : member.positionEn}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            </section>

            {/* Vision Statement */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>

                        <div className="relative z-10 text-center">
                            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6">
                                <Target className="w-10 h-10 text-white" />
                            </div>

                            <h2 className="text-3xl font-black text-white mb-6">
                                {isRTL ? 'رؤية المجلس' : 'Council Vision'}
                            </h2>

                            <p className="text-xl text-white/90 leading-relaxed">
                                {isRTL
                                    ? 'نسعى لجعل جامعة العين العراقية مؤسسة أكاديمية رائدة على المستوى الوطني والإقليمي، من خلال تقديم تعليم عالي الجودة، وتعزيز البحث العلمي، وخدمة المجتمع، وبناء شراكات استراتيجية مع المؤسسات الأكاديمية والمهنية المحلية والدولية.'
                                    : 'We strive to make Al-Ayen Iraqi University a leading academic institution at the national and regional levels, by providing high-quality education, promoting scientific research, serving the community, and building strategic partnerships with local and international academic and professional institutions.'
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
