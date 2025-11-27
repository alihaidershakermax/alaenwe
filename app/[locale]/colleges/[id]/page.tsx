import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ExternalLink, ArrowLeft, Users } from 'lucide-react';
import collegesData from '@/data/colleges.json';

interface Props {
  params: Promise<{
    locale: string;
    id: string;
  }>;
}

export async function generateStaticParams() {
  return collegesData.map((college) => ({
    id: college.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id, locale } = await params;
  const college = collegesData.find((c) => c.id === id);
  
  if (!college) {
    return {
      title: 'College Not Found',
    };
  }

  const title = locale === 'ar' ? college.name : college.nameEn;
  
  return {
    title,
  };
}

export default async function CollegeDetailPage({ params }: Props) {
  const { id, locale } = await params;
  const college = collegesData.find((c) => c.id === id);
  const isRTL = locale === 'ar';

  if (!college) {
    notFound();
  }

  const name = isRTL ? college.name : college.nameEn;
  const description = isRTL ? college.description : college.descriptionEn;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link
          href={`/${locale}/colleges`}
          className="inline-flex items-center space-x-2 rtl:space-x-reverse text-university-primary hover:text-university-secondary mb-8 transition-colors"
        >
          <ArrowLeft className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
          <span>{isRTL ? 'العودة إلى الكليات' : 'Back to Colleges'}</span>
        </Link>

        {/* College Header */}
        <div className="bg-gradient-to-br from-university-primary to-university-secondary text-white rounded-xl p-8 md:p-12 mb-8">
          <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Users className="w-10 h-10" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{name}</h1>
              {college.departments && college.departments.length > 0 && (
                <p className="text-blue-100">
                  {isRTL ? `${college.departments.length} أقسام` : `${college.departments.length} Departments`}
                </p>
              )}
            </div>
          </div>
          
          <p className="text-lg text-blue-50 leading-relaxed max-w-3xl">
            {description}
          </p>

          <div className="mt-6">
            <a
              href={college.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 rtl:space-x-reverse px-6 py-3 bg-white text-university-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              <span>{isRTL ? 'زيارة موقع الكلية' : 'Visit College Website'}</span>
            </a>
          </div>
        </div>

        {/* Departments Section */}
        {college.departments && college.departments.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {isRTL ? 'الأقسام الأكاديمية' : 'Academic Departments'}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {college.departments.map((dept) => {
                const deptName = isRTL ? dept.name : dept.nameEn;
                
                return (
                  <div
                    key={dept.name}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-university-primary hover:bg-blue-50 transition-all"
                  >
                    <span className="font-medium text-gray-900">{deptName}</span>
                    {dept.url && (
                      <a
                        href={dept.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-university-primary hover:text-university-secondary transition-colors"
                        aria-label={isRTL ? 'زيارة موقع القسم' : 'Visit Department Website'}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
