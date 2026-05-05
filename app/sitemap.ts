import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // أضف www هنا ليتطابق مع إعدادات Google Search Console الخاصة بك
  const baseUrl = 'https://www.drobi.sa';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1, 
    },
    {
      url: `${baseUrl}/captain`, 
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}