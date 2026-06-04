import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://villascapes-portfolio.vercel.app';
  const routes = [
    '',
    '/about',
    '/configurations',
    '/amenities',
    '/gallery',
    '/location',
    '/floor-plans',
    '/specifications',
    '/faqs',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));
}
