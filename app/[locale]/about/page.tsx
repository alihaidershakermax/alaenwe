import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { Target, Eye, Award, History, Users, Building2, BookOpen, ArrowRight, CheckCircle } from 'lucide-react';
import aboutData from '@/data/about.json';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });
  
  return {
    title: t('about'),
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isRTL = locale === 'ar';

  const stats = [
    { value: '11', labelAr: 'كلية', labelEn: 'Colleges', icon: Building2 },
    { value: '28', labelAr: 'قسماً', labelEn: 'Departments', icon: BookOpen },
    { value: '3014', labelAr: 'بحث منشور', labelEn: 'Publications', icon: Award },
    { value: '500+', labelAr: 'عضو هيئة تدريس', labelEn: 'Faculty Members', icon: Users },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Building2 className="w-5 h-5" />
              <span className="text-sm font-semibold">{isRTL ? 'تعرف علينا' : 'About Us'}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              {isRTL ? 'جامعة العين العراقية' : 'Al-Ayen Iraqi University'}
            </h1>

            <p className="text-xl text-blue-200 max-w-2xl mx-auto mb-12">
              {isRTL
                ? 'صرح علمي رائد يسعى لتقديم تعليم متميز وبحث علمي مبتكر يخدم المجتمع'
                : 'A leading academic institution striving to provide distinguished education and innovative research'}
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                    <Icon className="w-8 h-8 mx-auto mb-3 text-yellow-400" />
                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-blue-200">{isRTL ? stat.labelAr : stat.labelEn}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6">
                  <Eye className="w-5 h-5" />
                  <span className="font-semibold">{isRTL ? 'الرؤية' : 'Vision'}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {isRTL ? 'رؤيتنا للمستقبل' : 'Our Vision for the Future'}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {aboutData.vision[locale as 'ar' | 'en']}
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl transform rotate-3" />
                <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-8 text-white">
                  <Eye className="w-16 h-16 mb-6 opacity-80" />
                  <p className="text-xl font-medium leading-relaxed opacity-90">
                    {isRTL
                      ? 'نطمح أن نكون من الجامعات الرائدة في العراق والمنطقة'
                      : 'We aspire to be among the leading universities in Iraq and the region'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-teal-600 rounded-3xl transform -rotate-3" />
                <div className="relative bg-gradient-to-br from-green-500 to-teal-600 rounded-3xl p-8 text-white">
                  <Target className="w-16 h-16 mb-6 opacity-80" />
                  <p className="text-xl font-medium leading-relaxed opacity-90">
                    {isRTL
                      ? 'نسعى لتخريج كوادر متميزة تخدم المجتمع وتساهم في التنمية'
                      : 'We strive to graduate distinguished cadres that serve society and contribute to development'}
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full mb-6">
                  <Target className="w-5 h-5" />
                  <span className="font-semibold">{isRTL ? 'الرسالة' : 'Mission'}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {isRTL ? 'رسالتنا' : 'Our Mission'}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {aboutData.mission[locale as 'ar' | 'en']}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-6">
                <Award className="w-5 h-5" />
                <span className="font-semibold">{isRTL ? 'الأهداف' : 'Goals'}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {isRTL ? 'أهدافنا الاستراتيجية' : 'Our Strategic Goals'}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {aboutData.goals[locale as 'ar' | 'en'].map((goal, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-xl p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed pt-2">{goal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                <History className="w-5 h-5" />
                <span className="font-semibold">{isRTL ? 'تاريخنا' : 'Our History'}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {isRTL ? 'تاريخ جامعة العين العراقية' : 'History of Al-Ayen Iraqi University'}
              </h2>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
              <p className="text-lg text-blue-100 leading-relaxed">
                {aboutData.history[locale as 'ar' | 'en']}
              </p>
            </div>

            <div className="text-center mt-12">
              <Link
                href={`/${locale}/council`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:bg-yellow-400 transition-colors"
              >
                <Users className="w-5 h-5" />
                <span>{isRTL ? 'تعرف على مجلس الجامعة' : 'Meet the University Council'}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
