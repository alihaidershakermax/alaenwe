'use client';

import {
  User,
  MessageSquare,
  Target,
  Users,
  GraduationCap,
  BookOpen,
  MessageCircle,
  Calendar,
  Award,
  Globe,
  CheckCircle,
  Mail,
  Phone,
} from 'lucide-react';

interface CouncilSectionsProps {
  locale: string;
  isRTL: boolean;
}

export default function CouncilSections({ locale, isRTL }: CouncilSectionsProps) {
  return (
    <div className="mt-16 space-y-12">
      {/* President Bio */}
      <section id="president-bio" className="scroll-mt-20">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-university-primary" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              {isRTL ? 'السيرة الذاتية لرئيس الجامعة' : "President's Biography"}
            </h2>
          </div>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              {isRTL
                ? 'الأستاذ الدكتور رئيس جامعة العين العراقية، أكاديمي متميز وقائد تربوي ذو خبرة واسعة في مجال التعليم العالي والبحث العلمي.'
                : 'Professor Dr. President of Al-Ayen Iraqi University, a distinguished academic and educational leader with extensive experience in higher education and scientific research.'}
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">
                  {isRTL ? 'المؤهلات العلمية' : 'Academic Qualifications'}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-university-primary flex-shrink-0 mt-0.5" />
                    <span>{isRTL ? 'دكتوراه في التخصص الأكاديمي' : 'PhD in Academic Specialization'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-university-primary flex-shrink-0 mt-0.5" />
                    <span>{isRTL ? 'ماجستير في التخصص الأكاديمي' : 'Master in Academic Specialization'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-university-primary flex-shrink-0 mt-0.5" />
                    <span>{isRTL ? 'بكالوريوس في التخصص الأكاديمي' : 'Bachelor in Academic Specialization'}</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">
                  {isRTL ? 'الخبرات والإنجازات' : 'Experience & Achievements'}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{isRTL ? 'خبرة أكاديمية تزيد عن 20 عاماً' : 'Over 20 years of academic experience'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{isRTL ? 'نشر العديد من الأبحاث العلمية' : 'Published numerous scientific research'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{isRTL ? 'مشاركات في مؤتمرات دولية' : 'Participation in international conferences'}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* President Message */}
      <section id="president-message" className="scroll-mt-20">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
              <MessageSquare className="w-8 h-8 text-university-primary" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              {isRTL ? 'كلمة السيد رئيس الجامعة' : "President's Message"}
            </h2>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg border-r-4 rtl:border-l-4 border-university-primary">
            <p className="text-lg text-gray-800 leading-relaxed mb-4 italic">
              {isRTL
                ? 'بسم الله الرحمن الرحيم، يسعدني أن أرحب بكم في جامعة العين العراقية، صرح علمي متميز يسعى لتقديم تعليم عالي الجودة وبحث علمي رصين.'
                : 'In the name of Allah, the Most Gracious, the Most Merciful. I am pleased to welcome you to Al-Ayen Iraqi University, a distinguished academic institution striving to provide high-quality education and solid scientific research.'}
            </p>
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              {isRTL
                ? 'نحن ملتزمون بتوفير بيئة تعليمية محفزة تساعد طلابنا على تحقيق أهدافهم الأكاديمية والمهنية.'
                : 'We are committed to providing a stimulating educational environment that helps our students achieve their academic and professional goals.'}
            </p>
            <div className="mt-6 pt-6 border-t border-gray-300">
              <p className="font-bold text-gray-900">
                {isRTL ? 'رئيس جامعة العين العراقية' : 'President of Al-Ayen Iraqi University'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Goals */}
      <section id="vision" className="scroll-mt-20">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
              <Target className="w-8 h-8 text-university-primary" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              {isRTL ? 'الرؤية والرسالة والأهداف' : 'Vision, Mission & Goals'}
            </h2>
          </div>
          <div className="space-y-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-2 h-8 bg-university-primary rounded"></div>
                {isRTL ? 'الرؤية' : 'Vision'}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {isRTL
                  ? 'أن نكون جامعة رائدة في التعليم العالي والبحث العلمي على المستوى الوطني والإقليمي.'
                  : 'To be a leading university in higher education and scientific research at the national and regional level.'}
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-2 h-8 bg-green-600 rounded"></div>
                {isRTL ? 'الرسالة' : 'Mission'}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {isRTL
                  ? 'تقديم تعليم عالي الجودة وبحث علمي متميز، وإعداد كوادر مؤهلة قادرة على المنافسة في سوق العمل.'
                  : 'Providing high-quality education and distinguished scientific research, preparing qualified cadres capable of competing in the labor market.'}
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <div className="w-2 h-8 bg-purple-600 rounded"></div>
                {isRTL ? 'الأهداف' : 'Goals'}
              </h3>
              <ul className="space-y-3">
                {[
                  isRTL ? 'تطوير البرامج الأكاديمية' : 'Develop academic programs',
                  isRTL ? 'تعزيز البحث العلمي' : 'Enhance scientific research',
                  isRTL ? 'بناء شراكات استراتيجية' : 'Build strategic partnerships',
                  isRTL ? 'تحسين البنية التحتية' : 'Improve infrastructure',
                  isRTL ? 'تطوير مهارات الطلاب' : 'Develop student skills',
                ].map((goal, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Remaining sections with placeholder content */}
      {[
        { id: 'deans', icon: Users, title: isRTL ? 'عمداء الكليات' : 'College Deans' },
        { id: 'presidents', icon: GraduationCap, title: isRTL ? 'رؤساء الجامعة' : 'University Presidents' },
        { id: 'continuing-education', icon: BookOpen, title: isRTL ? 'التعليم المستمر' : 'Continuing Education' },
        { id: 'complaints', icon: MessageCircle, title: isRTL ? 'صندوق الشكاوى' : 'Complaints Box' },
        { id: 'calendar', icon: Calendar, title: isRTL ? 'التقويم الجامعي' : 'Academic Calendar' },
        { id: 'achievements', icon: Award, title: isRTL ? 'انجازات الجامعة' : 'University Achievements' },
        { id: 'web-department', icon: Globe, title: isRTL ? 'شعبة المواقع الالكترونية' : 'Web Department' },
      ].map((section) => {
        const Icon = section.icon;
        return (
          <section key={section.id} id={section.id} className="scroll-mt-20">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                  <Icon className="w-8 h-8 text-university-primary" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                <p className="text-center text-gray-500">
                  {isRTL ? 'المحتوى قيد التطوير' : 'Content under development'}
                </p>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
