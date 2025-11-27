export interface College {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  image: string;
  website: string;
  departments: Department[];
}

export interface Department {
  name: string;
  nameEn: string;
  url?: string;
}

export interface News {
  id: string;
  title: string;
  titleEn: string;
  content: string;
  contentEn: string;
  excerpt: string;
  excerptEn: string;
  image: string;
  category: 'university' | 'ministry' | 'college';
  date: string;
  slug: string;
}

export interface ExternalLink {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  url: string;
  category: 'system' | 'research' | 'college' | 'other';
  icon?: string;
}

export interface Statistics {
  colleges: number;
  departments: number;
  scopusPublications: number;
  administrativeDepartments: number;
}

export interface SocialLink {
  platform: 'facebook' | 'twitter' | 'instagram' | 'youtube' | 'telegram';
  url: string;
}
