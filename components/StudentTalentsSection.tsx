'use client';

import { useLocale } from 'next-intl';
import { Stethoscope, Pill, FlaskConical, Hammer, Scale, BookOpen, Microscope, Briefcase } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function AnimatedCounter({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            setCount(Math.floor(progress * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [isVisible, end, duration]);

    return (
        <div ref={ref} className="text-4xl font-black bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-2">
            {count}{suffix}
        </div>
    );
}

export default function StudentTalentsSection() {
    const locale = useLocale();
    const isRTL = locale === 'ar';

    const talents = [
        {
            icon: Stethoscope,
            titleAr: 'كلية الطب',
            titleEn: 'College of Medicine',
            color: 'from-blue-600 to-blue-700',
            students: '1200+',
        },
        {
            icon: Pill,
            titleAr: 'كلية طب الأسنان',
            titleEn: 'College of Dentistry',
            color: 'from-slate-700 to-slate-800',
            students: '800+',
        },
        {
            icon: FlaskConical,
            titleAr: 'كلية الصيدلة',
            titleEn: 'College of Pharmacy',
            color: 'from-blue-500 to-blue-600',
            students: '600+',
        },
        {
            icon: Hammer,
            titleAr: 'كلية الهندسة',
            titleEn: 'College of Engineering',
            color: 'from-slate-800 to-slate-900',
            students: '1500+',
        },
        {
            icon: Scale,
            titleAr: 'كلية القانون',
            titleEn: 'College of Law',
            color: 'from-blue-700 to-blue-800',
            students: '900+',
        },
        {
            icon: BookOpen,
            titleAr: 'كلية التربية',
            titleEn: 'College of Education',
            color: 'from-slate-600 to-slate-700',
            students: '1100+',
        },
        {
            icon: Microscope,
            titleAr: 'كلية العلوم',
            titleEn: 'College of Science',
            color: 'from-blue-800 to-blue-900',
            students: '700+',
        },
        {
            icon: Briefcase,
            titleAr: 'كلية الإدارة والاقتصاد',
            titleEn: 'College of Business',
            color: 'from-slate-700 to-slate-900',
            students: '1000+',
        },
    ];

    return (
        <section className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-blue-50/50 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/5 to-blue-600/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-blue-600/5 to-blue-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-50 rounded-full border border-blue-200 mb-6">
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                        <span className="text-sm font-bold text-blue-700 uppercase tracking-wider">
                            {isRTL ? 'كليات الجامعة' : 'University Colleges'}
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
                        {isRTL ? 'كلياتنا الأكاديمية' : 'Our Academic Colleges'}
                    </h2>

                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="h-1 w-24 bg-gradient-to-r from-transparent to-blue-600 rounded-full"></div>
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                        <div className="h-1 w-24 bg-gradient-to-l from-transparent to-blue-600 rounded-full"></div>
                    </div>

                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        {isRTL
                            ? 'نقدم برامج أكاديمية متميزة في مختلف التخصصات العلمية والإنسانية لإعداد كوادر مؤهلة تخدم المجتمع'
                            : 'We offer distinguished academic programs in various scientific and humanities specializations'}
                    </p>
                </div>

                {/* Stats Bar with Animation */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-blue-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 hover:scale-105">
                        <AnimatedCounter end={11} />
                        <div className="text-sm font-semibold text-gray-600">
                            {isRTL ? 'كلية' : 'Colleges'}
                        </div>
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-blue-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 hover:scale-105">
                        <AnimatedCounter end={28} />
                        <div className="text-sm font-semibold text-gray-600">
                            {isRTL ? 'قسم أكاديمي' : 'Academic Departments'}
                        </div>
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-blue-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 hover:scale-105">
                        <AnimatedCounter end={3014} />
                        <div className="text-sm font-semibold text-gray-600">
                            {isRTL ? 'بحث منشور' : 'Published Research'}
                        </div>
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-blue-100 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 hover:scale-105">
                        <AnimatedCounter end={44} suffix="+" />
                        <div className="text-sm font-semibold text-gray-600">
                            {isRTL ? 'برنامج أكاديمي' : 'Academic Programs'}
                        </div>
                    </div>
                </div>

                {/* Talents Grid - Small Boxes */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {talents.map((talent, index) => {
                        const Icon = talent.icon;
                        return (
                            <div
                                key={index}
                                className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden animate-fade-in-up"
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                {/* Gradient Background on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${talent.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                                {/* Icon */}
                                <div className="relative mb-4">
                                    <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${talent.color} rounded-xl shadow-md group-hover:scale-110 transition-all duration-300`}>
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                    {isRTL ? talent.titleAr : talent.titleEn}
                                </h3>

                                {/* Student Count */}
                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-semibold text-gray-500">
                                        {talent.students}
                                    </span>
                                </div>

                                {/* Bottom Accent */}
                                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${talent.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl`} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section >
    );
}
