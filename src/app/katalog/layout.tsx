import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Yazılım Geliştirme Hizmetleri | MainX Stüdyoları',
  description: 'MainX Stüdyoları olarak B2B SaaS, Mobil Uygulama, Yapay Zeka (AI), Blok Zinciri ve kurumsal web tasarımı hizmetleri sunuyoruz. Şanlıurfa ve Türkiye geneli yazılım geliştirme.',
  path: '/katalog',
});

export default function KatalogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
