'use client';

import { useLocale } from 'next-intl';
import { MapPin } from 'lucide-react';

export default function MapSection() {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-200 mb-6">
            <MapPin className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-bold text-blue-700 uppercase tracking-wider">
              {isRTL ? 'موقعنا' : 'Our Location'}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            {isRTL ? 'موقع الجامعة' : 'University Location'}
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {isRTL
              ? 'نحن في خدمتكم، تفضلوا بزيارتنا في موقعنا بمحافظة ذي قار'
              : 'We are at your service, visit us in Dhi Qar Governorate'}
          </p>
        </div>

        {/* Map - Full Width */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789!2d46.2567!3d31.0439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fde8fcec177466d%3A0x1b5520f23de2f810!2z2LTYp9ix2Lkg2KfZhNmG2YrZhNiMINin2YTZhtin2LXYsdmK2KnYjCDYsNmKINmC2KfYsQ!5e0!3m2!1sar!2siq!4v1234567890"
              width="100%"
              height="600"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={isRTL ? 'موقع جامعة العين العراقية' : 'Al-Ayen Iraqi University Location'}
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <a
            href="https://www.google.com/maps?rlz=1C1CHBF_enIQ1186IQ1186&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARAuGCcyBggCEEUYOTIHCAMQLhiABDIHCAQQABiABDIGCAUQRRg8MgYIBhBFGD0yBggHEEUYPdIBCDQxMjBqMGo3qAIIsAIB8QUzh65ghLl_9g&um=1&ie=UTF-8&fb=1&gl=iq&sa=X&geocode=KUVqd8HO_N0_MRD74j1PIVUb&daddr=%D8%B4%D8%A7%D8%B1%D8%B9+%D8%A7%D9%84%D9%86%D9%8A%D9%84%D8%8C+%D8%A7%D9%84%D9%86%D8%A7%D8%B5%D8%B1%D9%8A%D8%A9%D8%8C+%D8%B0%D9%8A+%D9%82%D8%A7%D8%B1%E2%80%8E+%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            <MapPin className="w-5 h-5" />
            <span>{isRTL ? 'افتح في خرائط جوجل' : 'Open in Google Maps'}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
