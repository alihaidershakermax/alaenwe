import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Youtube } from 'lucide-react';
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

  const contactInfo = [
    {
      icon: MapPin,
      titleAr: 'العنوان',
      titleEn: 'Address',
      value: aboutData.contact.address[locale as 'ar' | 'en'],
    },
    {
      icon: Phone,
      titleAr: 'الهاتف',
      titleEn: 'Phone',
      value: aboutData.contact.phone,
      href: `tel:${aboutData.contact.phone}`,
    },
    {
      icon: Mail,
      titleAr: 'البريد الإلكتروني',
      titleEn: 'Email',
      value: aboutData.contact.email,
      href: `mailto:${aboutData.contact.email}`,
    },
    {
      icon: Clock,
      titleAr: 'ساعات العمل',
      titleEn: 'Working Hours',
      value: isRTL ? 'الأحد - الخميس: 8:00 ص - 3:00 م' : 'Sun - Thu: 8:00 AM - 3:00 PM',
    },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/universityofalayen/' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/alayen_iraqi_university' },
    { name: 'YouTube', icon: Youtube, url: 'https://www.youtube.com/channel/UCrZWxBoVuC8pQCGGQIpLelw' },
    { name: 'Telegram', icon: Send, url: 'https://t.me/alayen_university' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-gray-900" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              {isRTL ? 'اتصل بنا' : 'Contact Us'}
            </h1>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-6" />
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {isRTL
                ? 'نحن هنا للإجابة على استفساراتكم ومساعدتكم'
                : 'We are here to answer your questions and help you'}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 -mt-16 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const content = (
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-2 h-full">
                  <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
              <h2 className="text-3xl font-black text-gray-900 mb-2">
                {isRTL ? 'أرسل لنا رسالة' : 'Send Us a Message'}
              </h2>
              <div className="w-16 h-1 bg-blue-600 rounded-full mb-8" />
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      {isRTL ? 'الاسم الكامل' : 'Full Name'}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all"
                      placeholder={isRTL ? 'أدخل اسمك' : 'Enter your name'}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      {isRTL ? 'البريد الإلكتروني' : 'Email'}
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all"
                      placeholder={isRTL ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    {isRTL ? 'الموضوع' : 'Subject'}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all"
                    placeholder={isRTL ? 'موضوع الرسالة' : 'Message subject'}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    {isRTL ? 'الرسالة' : 'Message'}
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all resize-none"
                    placeholder={isRTL ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
                >
                  {isRTL ? 'إرسال الرسالة' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Social Media & Map */}
            <div className="space-y-8">
              {/* Social Media */}
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
                <h3 className="text-2xl font-black text-gray-900 mb-2">
                  {isRTL ? 'تابعنا' : 'Follow Us'}
                </h3>
                <div className="w-12 h-1 bg-blue-600 rounded-full mb-6" />
                
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all group"
                      >
                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                          <Icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                        </div>
                        <span className="font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                          {social.name}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <h3 className="text-2xl font-black text-gray-900">
                    {isRTL ? 'موقعنا' : 'Our Location'}
                  </h3>
                </div>
                <div className="h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789!2d46.2567!3d31.0439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fde8fcec177466d%3A0x1b5520f23de2f810!2z2LTYp9ix2Lkg2KfZhNmG2YrZhNiMINin2YTZhtin2LXYsdmK2KnYjCDYsNmKINmC2KfYsQ!5e0!3m2!1sar!2siq!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
