# نظام الألوان - جامعة العين العراقية

## الألوان الرئيسية

تم تنسيق الموقع بالكامل باللون الأزرق حسب شعار الجامعة:

### الألوان الأساسية
- **Primary**: `#1e40af` (Blue 700) - اللون الأساسي للجامعة
- **Secondary**: `#3b82f6` (Blue 500) - اللون الثانوي
- **Accent**: `#60a5fa` (Blue 400) - لون التمييز
- **Dark**: `#1e3a8a` (Blue 900) - للخلفيات الداكنة
- **Light**: `#dbeafe` (Blue 100) - للخلفيات الفاتحة

### التدرجات المستخدمة
- `from-blue-600 to-blue-700` - للأزرار والعناصر التفاعلية
- `from-blue-500 to-blue-600` - للبطاقات والمكونات
- `from-blue-900 via-blue-800 to-blue-900` - للخلفيات الداكنة
- `from-blue-50 via-blue-50/50 to-white` - للخلفيات الفاتحة

## المكونات المحدثة

### 1. Hero Section
- أزرار CTA: `from-blue-600 to-blue-700`
- مؤشر التمرير: `text-blue-200`

### 2. About Section
- حدود البطاقات: `border-blue-600`
- خلفية رسالة الرئيس: `from-blue-50 to-blue-100`

### 3. Statistics Section
- الشارات: `from-blue-500/10 to-blue-600/10`
- الأيقونات: `from-blue-600 to-blue-700`
- الخلفية: `from-blue-50 via-blue-50/50 to-white`

### 4. News Section
- الشارات: `from-blue-500/10 to-blue-600/10`
- أزرار "عرض المزيد": `from-blue-600 to-blue-700`
- خلفية البطاقات: `from-blue-600 to-blue-800`

### 5. Partnerships Section
- الخلفية: `from-blue-900 via-blue-800 to-blue-900`
- جميع التدرجات: درجات الأزرق

### 6. Student Talents Section
- جميع الأيقونات: درجات مختلفة من الأزرق
- الخلفية: `from-white via-blue-50/30 to-blue-50/50`

### 7. Research Center Section
- الخلفية: `from-blue-900 via-blue-800 to-blue-900`
- جميع مجالات البحث: تدرجات أزرق

### 8. Quick Access Section
- جميع الأيقونات: `bg-blue-500`, `bg-blue-600`, `bg-blue-700`

### 9. News & College Cards
- التدرجات: درجات الأزرق
- الحدود: `border-blue-200`

## الاستخدام

```tsx
// مثال على استخدام الألوان
className="bg-gradient-to-r from-blue-600 to-blue-700"
className="text-blue-600"
className="border-blue-500"
className="hover:bg-blue-500/20"
```

## ملاحظات
- تم توحيد جميع الألوان لتكون أزرق فقط
- تم الحفاظ على التباين والوضوح
- جميع التأثيرات التفاعلية تستخدم درجات الأزرق
- التصميم متناسق مع شعار الجامعة
