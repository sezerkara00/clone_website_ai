import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://layerstech.co.uk';
  const lastModified = new Date();

  const routes = [
    '',
    '/3d-printers',
    '/3d-printers/m1',
    '/3d-printers/m1pro',
    '/about-us',
    '/industries',
    '/materials',
    '/3d-printing',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
