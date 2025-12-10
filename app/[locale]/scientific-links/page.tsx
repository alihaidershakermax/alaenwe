import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { ExternalLink, BookOpen, Search, Database, Award } from 'lucide-react';
import linksData from '@/data/links.json';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });
  return { title: t('scientificLinks') };
}

export default async function ScientificLinksPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isRTL = locale === 'ar';
  const researchLinks = linksData.filter((link) => link.category === 'research');

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: any } = { search: Search, 'book-open': BookOpen, 'id-card': Database };
    return icons[iconName] || Database;
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
              <BookOpen className="w-10 h-10 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">{isRTL ? 'الروابط العلمية' : 'Scientific Links'}</h1>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-6" />
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">{isRTL ? 'روابط مهمة لقواعد البيانات العلمية والمواقع البحثية العالمية' : 'Important links to scientific databases and global research websites'}</p>
          </div>
        </div>
      </section>

      {/* Research Statistics */}
      <section className="py-16 -mt-16 relative z-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-5xl font-black text-blue-600 mb-2">3014</div>
                <div className="text-gray-600">{isRTL ? 'بحث منشور في Scopus' : 'Published Research in Scopus'}</div>
              </div>
              <div className="p-6 border-x border-gray-100">
                <div className="text-5xl font-black text-blue-600 mb-2">11</div>
                <div className="text-gray-600">{isRTL ? 'كلية بحثية' : 'Research Colleges'}</div>
              </div>
              <div className="p-6">
                <div className="text-5xl font-black text-blue-600 mb-2">28</div>
                <div className="text-gray-600">{isRTL ? 'قسم أكاديمي' : 'Academic Departments'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-gray-900 mb-2 text-center">{isRTL ? 'قواعد البيانات البحثية' : 'Research Databases'}</h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {researchLinks.map((link) => {
              const Icon = getIcon(link.icon || 'database');
              const title = locale === 'ar' ? link.title : link.titleEn;
              const description = locale === 'ar' ? link.description : link.descriptionEn;
              return (
                <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:scale-110 transition-all">
                      <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{title}</h3>
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0 ml-2 rtl:ml-0 rtl:mr-2" />
                      </div>
                      <p className="text-sm text-gray-600">{description}</p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
            <h2 className="text-2xl font-black text-gray-900 mb-2">{isRTL ? 'موارد إضافية' : 'Additional Resources'}</h2>
            <div className="w-16 h-1 bg-blue-600 rounded-full mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-200 transition-colors">
                <Award className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{isRTL ? 'براءات الاختراع' : 'Patents'}</h3>
                  <p className="text-sm text-gray-600">{isRTL ? 'تصفح براءات الاختراع المسجلة من قبل باحثي الجامعة' : 'Browse patents registered by university researchers'}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-200 transition-colors">
                <Database className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{isRTL ? 'المستودع الرقمي' : 'Digital Repository'}</h3>
                  <p className="text-sm text-gray-600">{isRTL ? 'الوصول إلى الأبحاث والرسائل الجامعية المنشورة' : 'Access published research and academic theses'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
