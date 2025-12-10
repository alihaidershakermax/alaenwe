'use client';

import { useLocale } from 'next-intl';
import { Navigation } from 'lucide-react';
import { BlurText, Magnet } from './reactbits';

export default function MapSection() {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <BlurText
            text={isRTL ? 'موقع الجامعة' : 'University Location'}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4"
            delay={0}
            direction="bottom"
          />
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* Map */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 p-2">
            <div className="rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789!2d46.2567!3d31.0439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fde8fcec177466d%3A0x1b5520f23de2f810!2z2LTYp9ix2Lkg2KfZhNmG2YrZhNiMINin2YTZhtin2LXYsdmK2KnYjCDYsNmKINmC2KfYsQ!5e0!3m2!1sar!2siq!4v1234567890"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={isRTL ? 'موقع جامعة العين العراقية' : 'Al-Ayen Iraqi University Location'}
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <Magnet strength={0.3}>
            <a
              href="https://www.google.com/maps?rlz=1C1CHBF_enIQ1186IQ1186&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARAuGCcyBggCEEUYOTIHCAMQLhiABDIHCAQQABiABDIGCAUQRRg8MgYIBhBFGD0yBggHEEUYPdIBCDQxMjBqMGo3qAIIsAIB8QUzh65ghLl_9g&um=1&ie=UTF-8&fb=1&gl=iq&sa=X&geocode=KUVqd8HO_N0_MRD74j1PIVUb&daddr=%D8%B4%D8%A7%D8%B1%D8%B9+%D8%A7%D9%84%D9%86%D9%8A%D9%84%D8%8C+%D8%A7%D9%84%D9%86%D8%A7%D8%B5%D8%B1%D9%8A%D8%A9%D8%8C+%D8%B0%D9%8A+%D9%82%D8%A7%D8%B1%E2%80%8E+%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300"
            >
              <Navigation className="w-5 h-5" />
              <span>{isRTL ? 'افتح في خرائط جوجل' : 'Open in Google Maps'}</span>
            </a>
          </Magnet>
        </div>
      </div>
    </section>
  );
}
