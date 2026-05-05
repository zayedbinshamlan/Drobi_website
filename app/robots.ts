import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    // تحديث الرابط هنا ليتطابق مع الـ Sitemap والكونسول
    sitemap: 'https://www.drobi.sa/sitemap.xml',
  };
}