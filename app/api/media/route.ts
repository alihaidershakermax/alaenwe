import { NextResponse } from 'next/server';

interface MediaItem {
  id: string;
  title: string;
  url: string;
  image: string;
  date: string;
  type: 'image' | 'video';
}

function extractImageFromContent(content: string): string | null {
  const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
  return imgMatch ? imgMatch[1] : null;
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim();
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type') || 'all';

  try {
    const RSS_URL = 'https://fetchrss.com/feed/1vRXleAO9EJH1vRXlG79LBj0.rss';
    const response = await fetch(RSS_URL, { next: { revalidate: 300 } });
    
    if (!response.ok) {
      throw new Error('Failed to fetch RSS feed');
    }

    const xmlText = await response.text();
    const media: MediaItem[] = [];
    
    const itemMatches = xmlText.match(/<item>([\s\S]*?)<\/item>/g) || [];
    
    itemMatches.slice(0, 8).forEach((itemXml, index) => {
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

      // Determine if it's a video based on URL or content
      const isVideo = link.includes('video') || link.includes('youtube') || description.toLowerCase().includes('video');

      if (title) {
        media.push({
          id: `media-${index + 1}`,
          title: stripHtml(title),
          url: link,
          image: image,
          date: pubDate ? new Date(pubDate).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
          type: isVideo ? 'video' : 'image'
        });
      }
    });

    // Filter by type if specified
    let filteredMedia = media;
    if (type === 'images') {
      filteredMedia = media.filter(m => m.type === 'image');
    } else if (type === 'videos') {
      filteredMedia = media.filter(m => m.type === 'video');
    }

    return NextResponse.json({ success: true, media: filteredMedia, count: filteredMedia.length });
  } catch (error) {
    console.error('Media RSS fetch error:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch media', media: [] }, { status: 500 });
  }
}
