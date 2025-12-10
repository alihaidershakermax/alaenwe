import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Monitor, GraduationCap, FileText, BookOpen, User, Award, ExternalLink, Shield, Globe } from 'lucide-react';
import linksData from '@/data/links.json';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });
  return { title: t('systems') };
}

export default async function SystemsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isRTL = locale === 'ar';
  const systemLinks = linksData.filter(link => link.category === 'system');

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: any } = { 'graduation-cap': GraduationCap, 'user': User, 'award': Award, 'file-text': FileText, 'book': BookOpen, 'monitor': Monitor };
    return icons[iconName] || Monitor;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-gray-900" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600/20 backdrop-blur-sm rounded-2xl mb-6 border border-blue-500/30">
              <Monitor className="w-10 h-10 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">{isRTL ? 'الأنظمة الإلكترونية' : 'Electronic Systems'}</h1>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-6" />
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">{isRTL ? 'الوصول السريع إلى جميع الأنظمة والخدمات الإلكترونية للجامعة' : 'Quick access to all university electronic systems and services'}</p>
          </div>
        </div>
      </section>

      {/* Main Systems Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {systemLinks.map((link) => {
              const Icon = getIcon(link.icon || 'monitor');
              const title = locale === 'ar' ? link.title : link.titleEn;
              const description = locale === 'ar' ? link.description : link.descriptionEn;
              return (
                <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:border-blue-200">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
                    <p className="text-gray-600 mb-4">{description}</p>
                    <div className="flex items-center text-blue-600 font-semibold">
                      <span>{isRTL ? 'الدخول للنظام' : 'Access System'}</span>
                      <ExternalLink className="w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security Notice */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gray-900 text-white rounded-3xl p-8 shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center border border-blue-500/30">
                  <Shield className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{isRTL ? 'أمان البيانات' : 'Data Security'}</h3>
                  <p className="text-gray-300">{isRTL ? 'جميع الأنظمة محمية بأحدث تقنيات الأمان' : 'All systems are protected with the latest security technologies'}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 bg-white/10 rounded-xl border border-white/10">
                <Globe className="w-6 h-6 text-blue-400" />
                <span className="text-lg font-semibold">HTTPS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
            <h2 className="text-2xl font-black text-gray-900 mb-2 text-center">{isRTL ? 'هل تحتاج مساعدة؟' : 'Need Help?'}</h2>
            <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="font-bold text-gray-900 mb-2">{isRTL ? 'البريد الإلكتروني' : 'Email Support'}</h3>
                <p className="text-sm text-gray-600">support@alayen.edu.iq</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="font-bold text-gray-900 mb-2">{isRTL ? 'الدعم الفني' : 'Technical Support'}</h3>
                <p className="text-sm text-gray-600">+964 XXX XXX XXXX</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="font-bold text-gray-900 mb-2">{isRTL ? 'الدردشة المباشرة' : 'Live Chat'}</h3>
                <p className="text-sm text-gray-600">{isRTL ? 'متاح 24/7' : 'Available 24/7'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
