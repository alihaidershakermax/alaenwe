'use client';

import { useState, useEffect } from 'react';

export interface RSSNewsItem {
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

interface UseRSSNewsResult {
  news: RSSNewsItem[];
  loading: boolean;
  error: string | null;
}

export function useRSSNews(limit?: number): UseRSSNewsResult {
  const [news, setNews] = useState<RSSNewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    async function fetchNews() {
      try {
        setLoading(true);
        const response = await fetch('/api/news');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.success) {
          const sortedNews = data.news.sort((a: RSSNewsItem, b: RSSNewsItem) => 
            new Date(b.date).getTime() - new Date(a.date).getTime()
          );
          setNews(limit ? sortedNews.slice(0, limit) : sortedNews);
          setError(null);
        } else {
          setError(data.error || 'Failed to fetch news');
        }
      } catch (err) {
        console.error('News fetch error:', err);
        setError('Failed to fetch news');
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, [limit, mounted]);

  // Return consistent initial state during SSR
  if (!mounted) {
    return { news: [], loading: true, error: null };
  }

  return { news, loading, error };
}
