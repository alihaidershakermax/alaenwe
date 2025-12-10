'use client';

import { useState, useEffect } from 'react';

export interface MediaItem {
  id: string;
  title: string;
  titleEn: string;
  url: string;
  image: string;
  date: string;
  type: 'image' | 'video';
  description?: string;
  descriptionEn?: string;
}

interface UseMediaCenterResult {
  media: MediaItem[];
  loading: boolean;
  error: string | null;
}

export function useMediaCenter(type?: 'images' | 'videos' | 'all', limit?: number): UseMediaCenterResult {
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    async function fetchMedia() {
      try {
        setLoading(true);
        const response = await fetch(`/api/media${type && type !== 'all' ? `?type=${type}` : ''}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.success) {
          const sortedMedia = data.media.sort((a: MediaItem, b: MediaItem) => 
            new Date(b.date).getTime() - new Date(a.date).getTime()
          );
          setMedia(limit ? sortedMedia.slice(0, limit) : sortedMedia);
          setError(null);
        } else {
          setError(data.error || 'Failed to fetch media');
        }
      } catch (err) {
        console.error('Media fetch error:', err);
        setError('Failed to fetch media');
      } finally {
        setLoading(false);
      }
    }

    fetchMedia();
  }, [type, limit, mounted]);

  // Return consistent initial state during SSR
  if (!mounted) {
    return { media: [], loading: true, error: null };
  }

  return { media, loading, error };
}