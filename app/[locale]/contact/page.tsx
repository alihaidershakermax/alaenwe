import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { MapPin, Phone, Mail, Globe, Facebook, Twitter, Instagram, Youtube, Send, Clock, MessageSquare } from 'lucide-react';
import aboutData from '@/data/about.json';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });
  
  return {
    title: t('contact'),
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isRTL = locale === 'ar';

  const socialIcons = {
    facebook: Facebook,
    twitter: Twitter,
    instagram: Instagram,
    youtube: Youtube,
    telegram: Send,
  };

  const contactInfo = [
    {
      icon: MapPin,
      titleAr: 'العنوان',
      titleEn: 'Address',
      value: aboutData.contact.address[locale as 'ar' | 'en'],
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Phone,
      titleAr: 'الهاتف',
      titleEn: 'Phone',
      value: aboutData.contact.phone,
      href: `tel:${aboutData.contact.phone}`,
      color: 'from-green-500 to-teal-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Mail,
      titleAr: 'البريد الإلكتروني',
      titleEn: 'Email',
      value: aboutData.contact.email,
      href: `mailto:${aboutData.contact.email}`,
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Clock,
      titleAr: 'ساعات العمل',
      titleEn: 'Working Hours',
      value: isRTL ? 'الأحد - الخميس: 8:00 ص - 3:00 م' : 'Sun - Thu: 8:00 AM - 3:00 PM',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50',
    },
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
              <MessageSquare className="w-5 h-5" />
              <span className="text-sm font-semibold">{isRTL ? 'تواصل معنا' : 'Get in Touch'}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              {isRTL ? 'اتصل بنا' : 'Contact Us'}
            </h1>

            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              {isRTL
                ? 'نحن هنا للإجابة على استفساراتكم ومساعدتكم في كل ما تحتاجونه'
                : 'We are here to answer your questions and help you with everything you need'}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 -mt-12 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const content = (
                <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {isRTL ? info.titleAr : info.titleEn}
                  </h3>
                  <p className="text-gray-600">{info.value}</p>
                </div>
              );

              return info.href ? (
                <a key={index} href={info.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {isRTL ? 'أرسل لنا رسالة' : 'Send Us a Message'}
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {isRTL ? 'الاسم الكامل' : 'Full Name'}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder={isRTL ? 'أدخل اسمك' : 'Enter your name'}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {isRTL ? 'البريد الإلكتروني' : 'Email'}
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder={isRTL ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {isRTL ? 'الموضوع' : 'Subject'}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder={isRTL ? 'موضوع الرسالة' : 'Message subject'}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {isRTL ? 'الرسالة' : 'Message'}
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
                    placeholder={isRTL ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all transform hover:scale-[1.02]"
                >
                  {isRTL ? 'إرسال الرسالة' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Social Media & Map */}
            <div className="space-y-8">
              {/* Social Media */}
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {isRTL ? 'تابعنا على وسائل التواصل' : 'Follow Us'}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {aboutData.socialMedia.map((social) => {
                    const Icon = socialIcons[social.platform as keyof typeof socialIcons];
                    const labels = {
                      facebook: 'Facebook',
                      twitter: 'Twitter',
                      instagram: 'Instagram',
                      youtube: 'YouTube',
                      telegram: 'Telegram',
                    };
                    
                    return (
                      <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all group"
                      >
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                          <Icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                        </div>
                        <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                          {labels[social.platform as keyof typeof labels]}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-6 border-b">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {isRTL ? 'موقعنا' : 'Our Location'}
                  </h3>
                </div>
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <MapPin className="w-10 h-10 text-blue-600" />
                    </div>
                    <p className="text-gray-600 font-medium">
                      {isRTL ? 'العراق، ذي قار - شارع النيل' : 'Iraq, Dhi Qar - Al-Nile Street'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
