'use client';

import { useState, useEffect } from 'react';

export interface RSSMediaItem {
  id: string;
  title: string;
  url: string;
  image: string;
  date: string;
  type: 'image' | 'video';
}

interface UseRSSMediaResult {
  media: RSSMediaItem[];
  loading: boolean;
  error: string | null;
}

export function useRSSMedia(type?: 'images' | 'videos' | 'all'): UseRSSMediaResult {
  const [media, setMedia] = useState<RSSMediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMedia() {
      try {
        setLoading(true);
        const url = type ? `/api/media?type=${type}` : '/api/media';
        const response = await fetch(url);
        const data = await response.json();

        if (data.success) {
          setMedia(data.media);
        } else {
          setError(data.error || 'Failed to fetch media');
        }
      } catch (err) {
        setError('An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchMedia();
  }, [type]);

  return { media, loading, error };
}
