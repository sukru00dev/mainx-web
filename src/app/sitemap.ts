import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { getAllPosts } from '@/lib/mdx';

const services = [
  "yapay-zeka-entegrasyonu",
  "mobil-uygulama-gelistirme",
  "ozel-saas-yazilimlari",
  "blockchain-cozumleri"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs = getAllPosts("blog").map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const projects = getAllPosts("projeler").map((post) => ({
    url: `${SITE_URL}/projeler/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const servicePages = services.map((slug) => ({
    url: `${SITE_URL}/hizmetler/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/katalog`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/sanliurfa-yazilim`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...servicePages,
    ...blogs,
    ...projects
  ];
}
