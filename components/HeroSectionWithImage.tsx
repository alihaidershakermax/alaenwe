'use client';

import { useLocale } from 'next-intl';
import { useState, useEffect } from 'react';

export default function VideoHeroSection() {
    const locale = useLocale();
    const isRTL = locale === 'ar';
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full animate-cinematic-zoom">
                <iframe
                    className="absolute top-1/2 left-1/2 w-[177.77777778vh] h-[56.25vw] min-h-full min-w-full -translate-x-1/2 -translate-y-1/2"
                    src="https://www.youtube.com/embed/2e9wZwbdq_c?autoplay=1&mute=1&loop=1&playlist=2e9wZwbdq_c&controls=0&showinfo=0&rel=0&modestbranding=1&start=77&enablejsapi=1"
                    title="University Background Video"
                    allow="autoplay; encrypted-media"
                    style={{ pointerEvents: 'none' }}
                />

                {/* Cinematic Overlays - Enhanced */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70" />
                
                {/* Top and Bottom Cinematic Bars */}
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/90 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent" />

                {/* Film Grain Effect */}
                <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay" style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
                }} />

                {/* Enhanced Vignette Effect */}
                <div className="absolute inset-0" style={{
                    background: 'radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.6) 100%)',
                }} />
            </div>

            {/* Content */}
            <div
                className="relative z-10 h-full flex items-center justify-center pt-48"
                style={{ transform: `translateY(${scrollY * 0.5}px)` }}
            >
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto text-center">
                        {/* University Name - Large and Majestic */}
                        <div className="mb-8 animate-slide-up">
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-[1.1] drop-shadow-2xl">
                                {isRTL ? (
                                    <>
                                        <span className="block mb-2">جامعة العين العراقية</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="block mb-2">Al-Ayen Iraqi University</span>
                                    </>
                                )}
                            </h1>
                            <div className="flex items-center justify-center gap-3 mb-6">
                                <div className="h-px w-20 bg-gradient-to-r from-transparent to-blue-300"></div>
                                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                                <div className="h-px w-20 bg-gradient-to-l from-transparent to-blue-300"></div>
                            </div>
                        </div>

                        {/* Slogan */}
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-relaxed animate-slide-up-delay">
                            {isRTL ? (
                                <>
                                    <span className="block bg-gradient-to-r from-blue-200 via-white to-blue-200 bg-clip-text text-transparent">
                                        نحافظ على القيم ونُعِدُّ للمستقبل
                                    </span>
                                </>
                            ) : (
                                <>
                                    <span className="block bg-gradient-to-r from-blue-200 via-white to-blue-200 bg-clip-text text-transparent">
                                        Preserving Values, Preparing for Future
                                    </span>
                                </>
                            )}
                        </h2>

                        {/* Subtitle */}
                        <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed max-w-3xl mx-auto font-light animate-fade-in">
                            {isRTL
                                ? 'مؤسسة تعليمية رائدة تسعى لتقديم تعليم نوعي متميز وبناء جيل واعد'
                                : 'A Leading Educational Institution Providing Distinguished Quality Education'}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
                            <a
                                href={`/${locale}/about`}
                                className="group relative px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-base rounded-full overflow-hidden transition-all hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50 animate-pulse-glow"
                            >
                                <span className="relative z-10">
                                    {isRTL ? 'اكتشف الجامعة' : 'Discover University'}
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>

                            <a
                                href={`/${locale}/colleges`}
                                className="px-8 py-3 bg-white/10 backdrop-blur-md text-white font-bold text-base rounded-full border-2 border-blue-300/50 hover:bg-blue-500/20 hover:border-blue-300 transition-all hover:scale-110"
                            >
                                {isRTL ? 'الكليات' : 'Colleges'}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
        </section>
    );
}
