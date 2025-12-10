'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-university-primary">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-2">
            الصفحة غير موجودة
          </h2>
          <p className="text-lg text-gray-600">
            عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/ar"
            className="inline-flex items-center justify-center space-x-2 rtl:space-x-reverse px-6 py-3 bg-university-primary text-white font-semibold rounded-lg hover:bg-university-secondary transition-colors"
          >
            <Home className="w-5 h-5" />
            <span>العودة للرئيسية</span>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center space-x-2 rtl:space-x-reverse px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 rotate-180" />
            <span>العودة للخلف</span>
          </button>
        </div>

        {/* Suggestions */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            صفحات قد تهمك
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/ar/colleges"
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:border-university-primary hover:bg-blue-50 transition-all"
            >
              الكليات
            </Link>
            <Link
              href="/ar/news"
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:border-university-primary hover:bg-blue-50 transition-all"
            >
              الأخبار
            </Link>
            <Link
              href="/ar/about"
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:border-university-primary hover:bg-blue-50 transition-all"
            >
              عن الجامعة
            </Link>
            <Link
              href="/ar/contact"
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:border-university-primary hover:bg-blue-50 transition-all"
            >
              اتصل بنا
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
