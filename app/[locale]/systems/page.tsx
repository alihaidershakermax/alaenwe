import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Monitor, GraduationCap, FileText, BookOpen, User, Award, ExternalLink, Shield, Globe } from 'lucide-react';
import linksData from '@/data/links.json';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });

  return {
    title: t('systems'),
  };
}

export default async function SystemsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isRTL = locale === 'ar';

  const systemLinks = linksData.filter(link => link.category === 'system');

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: any } = {
      'graduation-cap': GraduationCap,
      'user': User,
      'award': Award,
      'file-text': FileText,
      'book': BookOpen,
      'monitor': Monitor,
    };
    return icons[iconName] || Monitor;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-university-primary to-university-secondary rounded-full mb-6">
            <Monitor className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {isRTL ? 'الأنظمة الإلكترونية' : 'Electronic Systems'}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {isRTL
              ? 'الوصول السريع إلى جميع الأنظمة والخدمات الإلكترونية للجامعة'
              : 'Quick access to all university electronic systems and services'}
          </p>
        </div>

        {/* Main Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {systemLinks.map((link) => {
            const Icon = getIcon(link.icon || 'monitor');
            const title = locale === 'ar' ? link.title : link.titleEn;
            const description = locale === 'ar' ? link.description : link.descriptionEn;

            return (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-university-primary"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-university-primary to-university-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-university-primary transition-colors">
                    {title}
                  </h3>
                  <p className="text-gray-600 mb-4">{description}</p>
                  <div className="flex items-center text-university-primary font-semibold">
                    <span>{isRTL ? 'الدخول للنظام' : 'Access System'}</span>
                    <ExternalLink className="w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Security Notice */}
        <div className="bg-gradient-to-br from-university-primary to-university-secondary text-white rounded-xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <Shield className="w-12 h-12 mr-4 rtl:mr-0 rtl:ml-4" />
              <div>
                <h3 className="text-xl font-bold mb-1">
                  {isRTL ? 'أمان البيانات' : 'Data Security'}
                </h3>
                <p className="text-blue-100">
                  {isRTL
                    ? 'جميع الأنظمة محمية بأحدث تقنيات الأمان'
                    : 'All systems are protected with the latest security technologies'}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <Globe className="w-8 h-8" />
              <span className="text-lg font-semibold">HTTPS</span>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            {isRTL ? 'هل تحتاج مساعدة؟' : 'Need Help?'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="font-bold text-gray-900 mb-2">
                {isRTL ? 'البريد الإلكتروني' : 'Email Support'}
              </h3>
              <p className="text-sm text-gray-600">support@alayen.edu.iq</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="font-bold text-gray-900 mb-2">
                {isRTL ? 'الدعم الفني' : 'Technical Support'}
              </h3>
              <p className="text-sm text-gray-600">+964 XXX XXX XXXX</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="font-bold text-gray-900 mb-2">
                {isRTL ? 'الدردشة المباشرة' : 'Live Chat'}
              </h3>
              <p className="text-sm text-gray-600">
                {isRTL ? 'متاح 24/7' : 'Available 24/7'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
