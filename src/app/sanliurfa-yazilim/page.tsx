import { constructMetadata } from '@/lib/seo';
import Link from 'next/link';
import { ArrowLeft, MapPin, Code, Smartphone, Cloud, Bot, Briefcase } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Şanlıurfa Yazılım Geliştirme | MainX Stüdyoları',
  description: 'Şanlıurfa yazılım geliştirme, web tasarımı ve mobil uygulama hizmetleri. İşletmenize özel dijital dönüşüm, SaaS ve yapay zeka çözümleri.',
  path: '/sanliurfa-yazilim',
});

export default function SanliurfaLocalSEO() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24 relative">
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
      
      <div className="w-full px-6 lg:px-16 2xl:px-24 mx-auto max-w-[100rem] relative z-10">
        <Link href="/" className="text-foreground/50 hover:text-foreground transition-colors flex items-center gap-2 mb-8 text-sm">
          <ArrowLeft className="w-4 h-4" /> Ana Sayfaya Dön
        </Link>
        
        <div className="flex items-center gap-3 mb-6">
          <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase flex items-center gap-2">
            <MapPin className="w-3 h-3" />
            Şanlıurfa / Türkiye
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
          Şanlıurfa Yazılım Geliştirme <span className="font-light">ve Dijital Dönüşüm</span>
        </h1>
        
        <div className="prose prose-invert max-w-4xl prose-lg text-foreground/70 mb-16">
          <p className="lead text-xl">
            MainX Stüdyoları olarak Şanlıurfa ve çevre illerdeki işletmelere özel yazılım, kurumsal web, mobil uygulama ve yapay zeka çözümleri sunuyoruz. Dijital dönüşümünüzü yeni nesil teknolojilerle gerçekleştiriyoruz.
          </p>
          
          <h2 className="text-2xl font-bold mt-12 mb-6 text-foreground">Şanlıurfa İşletmeleri İçin Yazılım Çözümlerimiz</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-10">
            <div className="p-6 rounded-2xl bg-foreground/5 border border-border">
              <Code className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Özel Yazılım ve SaaS</h3>
              <p className="text-sm text-foreground/60">Şirketinizin iş süreçlerini hızlandıracak tamamen size özel web tabanlı B2B sistemler ve yönetim panelleri (Dashboard).</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-foreground/5 border border-border">
              <Briefcase className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Kurumsal Web Tasarım</h3>
              <p className="text-sm text-foreground/60">Şanlıurfa'daki işletmenizin dijital vitrinini en iyi şekilde yansıtacak, modern, SEO uyumlu ve hızlı web siteleri.</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-foreground/5 border border-border">
              <Smartphone className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Mobil Uygulama (iOS & Android)</h3>
              <p className="text-sm text-foreground/60">Müşterilerinize her an ulaşabilmeniz için yüksek performanslı ve modern mobil uygulamalar (Flutter).</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-foreground/5 border border-border">
              <Bot className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Yapay Zeka (AI) Entegrasyonu</h3>
              <p className="text-sm text-foreground/60">Otonom müşteri destek botları ve veri analitiği ile operasyonel yükünüzü hafifleten yapay zeka çözümleri.</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mt-12 mb-6 text-foreground">Neden Bizi Seçmelisiniz?</h2>
          <p>
            Şanlıurfa'da yerel ihtiyaçları anlıyor, ancak <strong>Silikon Vadisi standartlarında</strong> kod kalitesi ve mimari ile projelerinizi geliştiriyoruz. Hazır şablonlar veya yavaş sistemler yerine modern teknolojiler (Next.js, React, Node.js, Flutter) kullanarak yüksek performanslı altyapılar kuruyoruz.
          </p>
          
          <div className="mt-16 p-8 rounded-3xl bg-primary/10 border border-primary/20 text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Projenizi Konuşalım</h3>
            <p className="mb-8 text-foreground/70">Fikrinizi hayata geçirmek için ücretsiz danışmanlık alın.</p>
            <Link href="/#iletisim" className="inline-block px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(245,158,11,0.3)]">
              Bizimle İletişime Geçin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
