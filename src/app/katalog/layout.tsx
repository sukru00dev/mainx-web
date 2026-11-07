import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Şanlıurfa Yazılım Hizmet Kataloğu & Paketler | MainX Stüdyoları',
  description: 'Şanlıurfa kurumsal web tasarım, B2B SaaS, mobil uygulama geliştirme ve yapay zeka otomasyon paketlerimizi inceleyin ve projenizi başlatın.',
  path: '/katalog',
});

export default function KatalogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
