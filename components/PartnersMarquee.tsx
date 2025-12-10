'use client';

import { useLocale } from 'next-intl';
import { BlurText, InfiniteScroll } from './reactbits';

export default function PartnersMarquee() {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const internationalAgreements = [
    { logo: 'https://alayen.edu.iq/public/ar/save_file/39a295d19f79c06b00eb767ae6b697e5_.jpg', url: 'https://alayen.edu.iq/agreements/details/1' },
    { logo: 'https://alayen.edu.iq/public/ar/save_file/a4d51484261f729e0cd966f2ea78fe2a_.jpg', url: 'https://alayen.edu.iq/agreements/details/2' },
    { logo: 'https://alayen.edu.iq/public/ar/save_file/567dcf073aa974dd32e5a55860895f7e_.jpg', url: 'https://alayen.edu.iq/agreements/details/3' },
    { logo: 'https://alayen.edu.iq/public/ar/save_file/1244cf9b43e3f9ce432be8e76494f199_.png', url: 'https://alayen.edu.iq/agreements/details/4' },
    { logo: 'https://alayen.edu.iq/public/ar/save_file/91f08ef908aee0be4ccc26b91849da64_.png', url: 'https://alayen.edu.iq/agreements/details/5' },
    { logo: 'https://alayen.edu.iq/public/ar/save_file/0f13bfe6226e7ff90fbdce705e4d00ba_.jpg', url: 'https://alayen.edu.iq/agreements/details/6' },
    { logo: 'https://alayen.edu.iq/public/ar/save_file/e599fa58af586756de8cf1af97a9b0a3_.jpg', url: 'https://alayen.edu.iq/agreements/details/7' },
    { logo: 'https://alayen.edu.iq/public/ar/save_file/f26026be3af7898d5e87b591454d7031_.jpg', url: 'https://alayen.edu.iq/agreements/details/8' },
  ];

  const globalRankings = [
    { logo: 'https://alayen.edu.iq/public/ar/save_file/ce4dcfce111ea91df723e909ba6d5ae1_.png', url: 'https://alayen.edu.iq/agreements/details/48' },
    { logo: 'https://alayen.edu.iq/public/ar/save_file/0fce5373d980788f57dddef92f636b3d_.png', url: 'https://alayen.edu.iq/agreements/details/49' },
    { logo: 'https://alayen.edu.iq/public/ar/save_file/061015e4593f693fcc44b2bd7ef0366d_.jpg', url: 'https://alayen.edu.iq/agreements/details/50' },
    { logo: 'https://alayen.edu.iq/public/ar/save_file/4f0b02de13e36ce4dd61f5f8c2a12f7a_.png', url: 'https://alayen.edu.iq/agreements/details/51' },
    { logo: 'https://alayen.edu.iq/public/ar/save_file/31fa76af776b7011148f7c2c6edb1c2a_.png', url: 'https://alayen.edu.iq/agreements/details/52' },
    { logo: 'https://alayen.edu.iq/public/ar/save_file/1ea14e48fa5c2e55c5de9e3534a09bc2_.png', url: 'https://alayen.edu.iq/agreements/details/53' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden relative">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 mb-12 relative z-10">
        <div className="text-center">
          <BlurText
            text={isRTL ? 'الاتفاقيات والتصنيفات العالمية' : 'Agreements & Global Rankings'}
            className="text-3xl md:text-4xl font-black text-gray-900 mb-4"
            delay={0}
            direction="bottom"
          />
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full" />
        </div>
      </div>

      {/* الاتفاقيات العالمية */}
      <div className="mb-10">
        <p className="text-center text-sm font-bold text-blue-600 mb-6">
          {isRTL ? 'الاتفاقيات العالمية' : 'International Agreements'}
        </p>
        <InfiniteScroll speed={40} direction="left" pauseOnHover>
          {internationalAgreements.map((agreement, i) => (
            <a 
              key={i}
              href={agreement.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 mx-4 w-28 h-28 bg-white border border-gray-200 rounded-2xl flex items-center justify-center shadow-md hover:shadow-xl hover:border-blue-400 hover:scale-105 transition-all duration-300 cursor-pointer p-3"
            >
              <img src={agreement.logo} alt="" className="w-full h-full object-contain" />
            </a>
          ))}
        </InfiniteScroll>
      </div>

      {/* التصنيفات العالمية */}
      <div className="mb-12">
        <p className="text-center text-sm font-bold text-gray-900 mb-6">
          {isRTL ? 'التصنيفات العالمية' : 'Global Rankings'}
        </p>
        <InfiniteScroll speed={35} direction="right" pauseOnHover>
          {globalRankings.map((rank, i) => (
            <a 
              key={i}
              href={rank.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 mx-4 w-28 h-28 bg-blue-600 rounded-2xl flex items-center justify-center shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer p-2"
            >
              <div className="w-full h-full rounded-xl bg-white flex items-center justify-center overflow-hidden p-2">
                <img src={rank.logo} alt="" className="w-full h-full object-contain" />
              </div>
            </a>
          ))}
        </InfiniteScroll>
      </div>

    </section>
  );
}
