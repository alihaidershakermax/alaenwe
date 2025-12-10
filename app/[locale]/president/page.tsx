import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { Award, BookOpen, GraduationCap, Quote, Mail, Phone, MapPin, Calendar } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });
  return { title: t('president') };
}

export default async function PresidentPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isRTL = locale === 'ar';

  const achievements = [
    { icon: BookOpen, value: '150+', labelAr: 'بحث منشور', labelEn: 'Publications' },
    { icon: Award, value: '25+', labelAr: 'جائزة', labelEn: 'Awards' },
    { icon: GraduationCap, value: '50+', labelAr: 'طالب', labelEn: 'Students' },
    { icon: Calendar, value: '30+', labelAr: 'سنة خبرة', labelEn: 'Years' },
  ];

  const qualifications = [
    { degree: isRTL ? 'دكتوراه' : 'PhD', field: isRTL ? 'الهندسة الطبية' : 'Biomedical Eng', year: '1995' },
    { degree: isRTL ? 'ماجستير' : 'Masters', field: isRTL ? 'الهندسة الكهربائية' : 'Electrical Eng', year: '1990' },
    { degree: isRTL ? 'بكالوريوس' : 'Bachelor', field: isRTL ? 'الهندسة الكهربائية' : 'Electrical Eng', year: '1985' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gray-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-gray-900" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative order-2 lg:order-1">
              <div className="relative max-w-md mx-auto">
                <div className="absolute inset-0 bg-blue-600 rounded-3xl transform rotate-3" />
                <div className="relative bg-white rounded-3xl p-2 shadow-2xl">
                  <img src="https://alayen.edu.iq/public/ar/save_file/0715743f88cc53162a6a427267228a8e_.jpeg" alt="President" className="w-full h-auto rounded-2xl" />
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-xl">
                  {isRTL ? 'رئيس الجامعة' : 'President'}
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 text-center lg:text-right rtl:lg:text-left">
              <h1 className="text-4xl md:text-5xl font-black mb-4">{isRTL ? 'أ.د. حيدر عبد الأمير مرهون' : 'Prof. Dr. Haider Abdul Amir'}</h1>
              <div className="w-24 h-1.5 bg-blue-600 rounded-full mb-6 mx-auto lg:mx-0" />
              <p className="text-xl text-gray-300 mb-8">{isRTL ? 'رئيس جامعة العين العراقية' : 'President of Al-Ayen Iraqi University'}</p>
              <div className="grid grid-cols-4 gap-4">
                {achievements.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="bg-white/10 rounded-2xl p-4 text-center border border-white/10">
                      <Icon className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                      <div className="text-2xl font-black">{item.value}</div>
                      <div className="text-xs text-gray-400">{isRTL ? item.labelAr : item.labelEn}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-gray-900 mb-4">{isRTL ? 'كلمة رئيس الجامعة' : "President's Message"}</h2>
              <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full" />
            </div>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 relative">
              <Quote className="absolute top-6 right-6 rtl:right-auto rtl:left-6 w-16 h-16 text-blue-100" />
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed relative z-10">
                <p className="text-xl font-bold text-gray-900">{isRTL ? 'بسم الله الرحمن الرحيم' : 'In the Name of Allah'}</p>
                <p>{isRTL ? 'حرصت جامعة العين العراقية ومنذ اليوم الأول من تأسيسها على ترسيخ المفاهيم الأكاديمية العلمية في جميع مفاصل الجامعة.' : 'Since its establishment, Al-Ayen Iraqi University has been keen to consolidate scientific academic concepts.'}</p>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-gray-500 mb-2">{isRTL ? 'مع أطيب التحيات' : 'Best Regards'}</p>
                <p className="text-xl font-black text-gray-900">{isRTL ? 'أ.د. حيدر عبد الأمير مرهون' : 'Prof. Dr. Haider Abdul Amir'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-4">{isRTL ? 'المؤهلات العلمية' : 'Qualifications'}</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full" />
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {qualifications.map((qual, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 flex items-center gap-6 border border-gray-100">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xl font-black text-gray-900">{qual.degree}</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-bold rounded-full">{qual.year}</span>
                  </div>
                  <p className="text-gray-700">{qual.field}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-4">{isRTL ? 'التواصل' : 'Contact'}</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-2xl p-6 text-center border border-white/10">
              <Mail className="w-10 h-10 mx-auto mb-4 text-blue-400" />
              <h3 className="font-bold mb-2">{isRTL ? 'البريد' : 'Email'}</h3>
              <p className="text-gray-400">president@alayen.edu.iq</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 text-center border border-white/10">
              <Phone className="w-10 h-10 mx-auto mb-4 text-blue-400" />
              <h3 className="font-bold mb-2">{isRTL ? 'الهاتف' : 'Phone'}</h3>
              <p className="text-gray-400">6316</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 text-center border border-white/10">
              <MapPin className="w-10 h-10 mx-auto mb-4 text-blue-400" />
              <h3 className="font-bold mb-2">{isRTL ? 'المكتب' : 'Office'}</h3>
              <p className="text-gray-400">{isRTL ? 'مكتب الرئيس' : 'President Office'}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <Link href={`/${locale}/council`} className="bg-gray-50 hover:bg-blue-50 rounded-2xl p-6 transition-colors border border-gray-100 hover:border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{isRTL ? 'مجلس الجامعة' : 'University Council'}</h3>
              <p className="text-gray-600">{isRTL ? 'تعرف على أعضاء المجلس' : 'Meet the Council members'}</p>
            </Link>
            <Link href={`/${locale}/about`} className="bg-gray-50 hover:bg-blue-50 rounded-2xl p-6 transition-colors border border-gray-100 hover:border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{isRTL ? 'عن الجامعة' : 'About University'}</h3>
              <p className="text-gray-600">{isRTL ? 'رؤية ورسالة الجامعة' : 'Vision and mission'}</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
