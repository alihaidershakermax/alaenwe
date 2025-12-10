# English Version Guide

## Overview
Al-Ayen Iraqi University website now supports both Arabic and English languages using Next.js internationalization (i18n).

## Accessing the English Version

### Development
- Arabic: `http://localhost:3000/ar`
- English: `http://localhost:3000/en`

### Production
- Arabic: `https://yourdomain.com/ar`
- English: `https://yourdomain.com/en`

## Features

### ✅ Implemented
- **Automatic Language Detection**: The site detects user's browser language preference
- **Language Switcher**: Globe icon button in header to switch between Arabic/English
- **RTL/LTR Support**: Automatic text direction switching
- **Font Optimization**: Cairo font for Arabic, Inter font for English
- **Complete Navigation**: All menu items translated
- **Responsive Design**: Works on all devices
- **SEO Optimized**: Different meta titles/descriptions per language

### 🔧 Technical Details
- **Framework**: Next.js 16 with App Router
- **i18n Library**: next-intl v4.5.5
- **Routing**: Dynamic `[locale]` folder structure
- **Translations**: JSON files in `/messages/` folder
- **Middleware**: Automatic locale detection and routing

## File Structure
```
app/
├── [locale]/           # Dynamic locale routing
│   ├── layout.tsx      # Locale-specific layout
│   ├── page.tsx        # Home page
│   └── ...             # Other pages
├── layout.tsx          # Root layout
└── page.tsx           # Root redirect

messages/
├── ar.json            # Arabic translations
└── en.json            # English translations

components/
├── Header.tsx         # Navigation with language switcher
├── LanguageSwitcher.tsx # Standalone language switcher
└── ...                # Other components
```

## Adding New Translations

1. **Add to Arabic** (`messages/ar.json`):
```json
{
  "newSection": {
    "title": "العنوان الجديد",
    "description": "الوصف الجديد"
  }
}
```

2. **Add to English** (`messages/en.json`):
```json
{
  "newSection": {
    "title": "New Title",
    "description": "New Description"
  }
}
```

3. **Use in Components**:
```tsx
import { useTranslations } from 'next-intl';

export default function Component() {
  const t = useTranslations('newSection');
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}
```

## Language Switcher Usage

The language switcher is integrated into the header and can be used standalone:

```tsx
import LanguageSwitcher from '@/components/LanguageSwitcher';

// Use anywhere in your components
<LanguageSwitcher />
```

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Browser Support
- All modern browsers
- Automatic RTL/LTR text direction
- Responsive design for mobile/tablet/desktop

## Notes
- Default language is Arabic (`ar`)
- English version accessible at `/en` routes
- All external links (college websites) remain unchanged
- Social media links work for both languages