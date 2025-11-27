import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import {
  User,
  Award,
  BookOpen,
  GraduationCap,
  Quote,
  Mail,
  Phone,
  MapPin,
  FileText,
  ExternalLink,
  Calendar,
  Briefcase,
} from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });

  return {
    title: t('president'),
  };
}

export default async function PresidentPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isRTL = locale === 'ar';

  const achievements = [
    {
      icon: BookOpen,
      value: '150+',
      labelAr: 'بحث علمي منشور',
      labelEn: 'Published Research',
    },
    {
      icon: Award,
      value: '25+',
      labelAr: 'جائزة وتكريم',
      labelEn: 'Awards & Honors',
    },
    {
      icon: GraduationCap,
      value: '50+',
      labelAr: 'طالب دكتوراه وماجستير',
      labelEn: 'PhD & Masters Students',
    },
    {
      icon: Calendar,
      value: '30+',
      labelAr: 'سنة خبرة أكاديمية',
      labelEn: 'Years of Experience',
    },
  ];

  const qualifications = [
    {
      degree: isRTL ? 'دكتوراه' : 'PhD',
      field: isRTL ? 'الهندسة الطبية الحياتية' : 'Biomedical Engineering',
      university: isRTL ? 'جامعة بغداد' : 'University of Baghdad',
      year: '1995',
    },
    {
      degree: isRTL ? 'ماجستير' : 'Masters',
      field: isRTL ? 'الهندسة الكهربائية' : 'Electrical Engineering',
      university: isRTL ? 'جامعة بغداد' : 'University of Baghdad',
      year: '1990',
    },
    {
      degree: isRTL ? 'بكالوريوس' : 'Bachelor',
      field: isRTL ? 'الهندسة الكهربائية' : 'Electrical Engineering',
      university: isRTL ? 'جامعة بغداد' : 'University of Baghdad',
      year: '1985',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* President Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative max-w-md mx-auto">
                {/* Decorative Frame */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl transform rotate-3" />
                <div className="relative bg-white rounded-3xl p-2 shadow-2xl">
                  <img
                    src="https://alayen.edu.iq/public/ar/save_file/0715743f88cc53162a6a427267228a8e_.jpeg"
                    alt={isRTL ? 'رئيس الجامعة' : 'University President'}
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
                {/* Badge */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-3 rounded-full font-bold shadow-xl">
                  {isRTL ? 'رئيس الجامعة' : 'University President'}
                </div>
              </div>
            </div>

            {/* President Info */}
            <div className="order-1 lg:order-2 text-center lg:text-right rtl:lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                <User className="w-5 h-5" />
                <span className="text-sm font-semibold">{isRTL ? 'السيرة الذاتية' : 'Biography'}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
                {isRTL ? 'أ.د. حيدر عبد الأمير مرهون' : 'Prof. Dr. Haider Abdul Amir Marhoon'}
              </h1>

              <p className="text-xl text-blue-200 mb-8">
                {isRTL ? 'رئيس جامعة العين العراقية' : 'President of Al-Ayen Iraqi University'}
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {achievements.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                      <Icon className="w-6 h-6 mx-auto mb-2 text-yellow-400" />
                      <div className="text-2xl font-bold">{item.value}</div>
                      <div className="text-xs text-blue-200">{isRTL ? item.labelAr : item.labelEn}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* President's Message */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl mb-6 shadow-lg">
                <Quote className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {isRTL ? 'كلمة رئيس الجامعة' : "President's Message"}
              </h2>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 relative">
              <Quote className="absolute top-6 right-6 rtl:right-auto rtl:left-6 w-16 h-16 text-blue-200" />

              <div className="space-y-6 text-gray-700 text-lg leading-relaxed relative z-10">
                <p className="text-xl font-semibold text-gray-800">
                  {isRTL ? 'بسم الله الرحمن الرحيم' : 'In the Name of Allah, the Most Gracious, the Most Merciful'}
                </p>

                <p>
                  {isRTL
                    ? 'حرصت جامعة العين العراقية ومنذ اليوم الأول من تأسيسها على ترسيخ المفاهيم الأكاديمية العلمية في جميع مفاصل الجامعة، مستوحية نموذجها من عبق تاريخ حضارة العراق العظيم ومدينة الناصرية الفيحاء التي خطت للبشرية أول حرف وكانت منارة العلم والعلماء لحقبة طويلة من التاريخ.'
                    : 'Since its first day of establishment, Al-Ayen Iraqi University has been keen to consolidate scientific academic concepts in all parts of the university, inspired by the fragrant history of the great Iraqi civilization and the city of Nasiriyah.'}
                </p>

                <p>
                  {isRTL
                    ? 'نسعى جاهدين لتقديم تعليم نوعي متميز يواكب التطورات العالمية ويلبي احتياجات سوق العمل المحلي والإقليمي، مع الحفاظ على القيم الأصيلة والهوية الوطنية.'
                    : 'We strive to provide distinguished quality education that keeps pace with global developments and meets the needs of the local and regional labor market.'}
                </p>

                <p>
                  {isRTL
                    ? 'نؤمن بأن التعليم هو المفتاح الأساسي لبناء مستقبل مشرق، ونعمل على تطوير بيئة أكاديمية محفزة تشجع على الإبداع والابتكار والبحث العلمي.'
                    : 'We believe that education is the key to building a bright future, and we work to develop a stimulating academic environment.'}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-blue-200">
                <p className="text-gray-600 mb-2">{isRTL ? 'مع أطيب التحيات' : 'Best Regards'}</p>
                <p className="text-xl font-bold text-gray-900">
                  {isRTL ? 'أ.د. حيدر عبد الأمير مرهون' : 'Prof. Dr. Haider Abdul Amir Marhoon'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {isRTL ? 'المؤهلات العلمية' : 'Academic Qualifications'}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {qualifications.map((qual, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 flex items-center gap-6 hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xl font-bold text-gray-900">{qual.degree}</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">{qual.year}</span>
                  </div>
                  <p className="text-gray-700 font-medium">{qual.field}</p>
                  <p className="text-gray-500 text-sm">{qual.university}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isRTL ? 'التواصل مع رئيس الجامعة' : 'Contact the President'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Mail className="w-10 h-10 mx-auto mb-4 text-yellow-400" />
              <h3 className="font-bold mb-2">{isRTL ? 'البريد الإلكتروني' : 'Email'}</h3>
              <p className="text-blue-200">president@alayen.edu.iq</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Phone className="w-10 h-10 mx-auto mb-4 text-yellow-400" />
              <h3 className="font-bold mb-2">{isRTL ? 'الهاتف' : 'Phone'}</h3>
              <p className="text-blue-200">+964 XXX XXX XXXX</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <MapPin className="w-10 h-10 mx-auto mb-4 text-yellow-400" />
              <h3 className="font-bold mb-2">{isRTL ? 'المكتب' : 'Office'}</h3>
              <p className="text-blue-200">{isRTL ? 'مكتب رئيس الجامعة' : 'President Office'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {isRTL ? 'روابط ذات صلة' : 'Related Links'}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href={`/${locale}/council`}
                className="bg-blue-50 hover:bg-blue-100 rounded-xl p-6 transition-colors group"
              >
                <h3 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-blue-700">
                  {isRTL ? 'مجلس الجامعة' : 'University Council'}
                </h3>
                <p className="text-gray-600">
                  {isRTL ? 'تعرف على أعضاء مجلس الجامعة' : 'Meet the University Council members'}
                </p>
              </Link>
              <Link
                href={`/${locale}/about`}
                className="bg-blue-50 hover:bg-blue-100 rounded-xl p-6 transition-colors group"
              >
                <h3 className="text-xl font-bold text-blue-900 mb-2 group-hover:text-blue-700">
                  {isRTL ? 'عن الجامعة' : 'About University'}
                </h3>
                <p className="text-gray-600">
                  {isRTL ? 'تعرف على رؤية ورسالة الجامعة' : 'Learn about our vision and mission'}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
