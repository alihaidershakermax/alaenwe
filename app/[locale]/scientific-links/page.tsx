import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { ExternalLink, BookOpen, Search, Database, Award } from 'lucide-react';
import linksData from '@/data/links.json';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });

  return {
    title: t('scientificLinks'),
  };
}

export default async function ScientificLinksPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isRTL = locale === 'ar';

  // Filter research links
  const researchLinks = linksData.filter((link) => link.category === 'research');

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: any } = {
      search: Search,
      'book-open': BookOpen,
      'id-card': Database,
    };
    return icons[iconName] || Database;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-university-primary rounded-full mb-6">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {isRTL ? 'الروابط العلمية' : 'Scientific Links'}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {isRTL
              ? 'روابط مهمة لقواعد البيانات العلمية والمواقع البحثية العالمية'
              : 'Important links to scientific databases and global research websites'}
          </p>
        </div>

        {/* Research Statistics */}
        <div className="bg-gradient-to-br from-university-primary to-university-secondary text-white rounded-xl p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">3014</div>
              <div className="text-blue-100">
                {isRTL ? 'بحث منشور في Scopus' : 'Published Research in Scopus'}
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">11</div>
              <div className="text-blue-100">
                {isRTL ? 'كلية بحثية' : 'Research Colleges'}
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">28</div>
              <div className="text-blue-100">
                {isRTL ? 'قسم أكاديمي' : 'Academic Departments'}
              </div>
            </div>
          </div>
        </div>

        {/* Research Links */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {isRTL ? 'قواعد البيانات البحثية' : 'Research Databases'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchLinks.map((link) => {
              const Icon = getIcon(link.icon || 'database');
              const title = locale === 'ar' ? link.title : link.titleEn;
              const description = locale === 'ar' ? link.description : link.descriptionEn;

              return (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="flex-shrink-0 w-14 h-14 bg-university-primary/10 rounded-lg flex items-center justify-center group-hover:bg-university-primary group-hover:scale-110 transition-all">
                      <Icon className="w-7 h-7 text-university-primary group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-university-primary transition-colors">
                          {title}
                        </h3>
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-university-primary transition-colors flex-shrink-0 ml-2 rtl:ml-0 rtl:mr-2" />
                      </div>
                      <p className="text-sm text-gray-600">{description}</p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Additional Resources */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {isRTL ? 'موارد إضافية' : 'Additional Resources'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4 rtl:space-x-reverse p-4 border border-gray-200 rounded-lg">
              <Award className="w-8 h-8 text-university-secondary flex-shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  {isRTL ? 'براءات الاختراع' : 'Patents'}
                </h3>
                <p className="text-sm text-gray-600">
                  {isRTL
                    ? 'تصفح براءات الاختراع المسجلة من قبل باحثي الجامعة'
                    : 'Browse patents registered by university researchers'}
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 rtl:space-x-reverse p-4 border border-gray-200 rounded-lg">
              <Database className="w-8 h-8 text-purple-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  {isRTL ? 'المستودع الرقمي' : 'Digital Repository'}
                </h3>
                <p className="text-sm text-gray-600">
                  {isRTL
                    ? 'الوصول إلى الأبحاث والرسائل الجامعية المنشورة'
                    : 'Access published research and academic theses'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
