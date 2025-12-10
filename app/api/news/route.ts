import { NextResponse } from 'next/server';

interface NewsItem {
  id: string;
  title: string;
  titleEn: string;
  content: string;
  contentEn: string;
  excerpt: string;
  excerptEn: string;
  image: string;
  category: string;
  date: string;
  slug: string;
  link: string;
}

function extractImageFromContent(content: string): string | null {
  const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
  return imgMatch ? imgMatch[1] : null;
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim();
}

function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .substring(0, 50);
}

export async function GET() {
  try {
    const RSS_URL = 'https://fetchrss.com/feed/1vRXleAO9EJH1vRXlG79LBj0.rss';
    const response = await fetch(RSS_URL, { 
      next: { revalidate: 300 }, // Cache for 5 minutes
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; University-RSS-Reader/1.0)'
      }
    });
    
    if (!response.ok) {
      throw new Error(`RSS fetch failed: ${response.status}`);
    }

    const xmlText = await response.text();
    const news: NewsItem[] = [];
    
    const itemMatches = xmlText.match(/<item>([\s\S]*?)<\/item>/g) || [];
    
    itemMatches.forEach((itemXml, index) => {
      const getTagContent = (tag: string): string => {
        const match = itemXml.match(new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>|<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`));
        return match ? (match[1] || match[2] || '').trim() : '';
      };

      const title = getTagContent('title');
      const link = getTagContent('link');
      const description = getTagContent('description');
      const pubDate = getTagContent('pubDate');
      
      let image = '';
      const enclosureMatch = itemXml.match(/<enclosure[^>]+url="([^"]+)"/);
      const mediaMatch = itemXml.match(/<media:content[^>]+url="([^"]+)"/);
      
      if (enclosureMatch) {
        image = enclosureMatch[1];
      } else if (mediaMatch) {
        image = mediaMatch[1];
      } else {
        image = extractImageFromContent(description) || '/images/university-hero.jpg';
      }

      if (title) {
        const cleanTitle = stripHtml(title);
        const cleanDescription = stripHtml(description);
        
        news.push({
          id: `news-${index + 1}`,
          title: cleanTitle,
          titleEn: cleanTitle, // For now, same as Arabic - can be enhanced later
          content: cleanDescription,
          contentEn: cleanDescription, // For now, same as Arabic - can be enhanced later
          excerpt: cleanDescription.substring(0, 150) + (cleanDescription.length > 150 ? '...' : ''),
          excerptEn: cleanDescription.substring(0, 150) + (cleanDescription.length > 150 ? '...' : ''),
          image: image,
          category: 'أخبار الجامعة',
          date: pubDate ? new Date(pubDate).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
          slug: createSlug(cleanTitle),
          link: link
        });
      }
    });

    // Sort by date (newest first)
    news.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return NextResponse.json({
      success: true,
      news: news,
      count: news.length
    });

  } catch (error) {
    console.error('RSS fetch error:', error);
    
    // Fallback to mock data if RSS fails
    const mockNews = [
      {
        id: '1',
        title: 'جامعة العين العراقية تحتفل بتخريج دفعة جديدة من الطلاب',
        titleEn: 'Al-Ayen Iraqi University Celebrates New Graduate Class',
        content: 'احتفلت جامعة العين العراقية بتخريج دفعة جديدة من الطلاب في مختلف التخصصات',
        contentEn: 'Al-Ayen Iraqi University celebrated the graduation of a new class of students in various specializations',
        excerpt: 'احتفلت الجامعة بتخريج دفعة جديدة من الطلاب المتميزين',
        excerptEn: 'The university celebrated the graduation of a new class of distinguished students',
        image: '/images/university-hero.jpg',
        category: 'أخبار الجامعة',
        date: '2024-12-10',
        slug: 'graduation-ceremony-2024',
        link: '#'
      }
    ];

    return NextResponse.json({
      success: true,
      news: mockNews,
      count: mockNews.length,
      fallback: true
    });
  }
}