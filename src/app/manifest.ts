import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'MainX Yazılım&Geliştirme Stüdyoları',
    short_name: 'MainX',
    description: 'Şanlıurfa Yazılım Geliştirme, Web Tasarım & Mobil Uygulama Stüdyosu',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
