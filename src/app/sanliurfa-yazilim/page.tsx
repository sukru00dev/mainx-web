/* eslint-disable react/no-unescaped-entities */
import { constructMetadata, SITE_URL } from '@/lib/seo';
import Link from 'next/link';
import { 
  ArrowLeft, MapPin, Code, Smartphone, Bot, Briefcase, Factory, 
  Wheat, Utensils, GraduationCap, CheckCircle2, ArrowRight, BookOpen, Layers
} from 'lucide-react';
import { LocalBusinessSchema, FAQSchema, BreadcrumbSchema } from '@/components/seo/JsonLd';

const sanliurfaFaqs = [
  {
    question: "Şanlıurfa'da yüz yüze yazılım geliştirme ve web tasarım hizmeti veriyor musunuz?",
    answer: "Evet. MainX Stüdyoları Şanlıurfa merkezli bir yazılım geliştirme firmasıdır. Şanlıurfa ve Güneydoğu Anadolu bölgesindeki işletmelerle yüz yüze analiz toplantıları gerçekleştiriyor, Türkiye genelinde ve yurt dışında ise uçtan uca çevik proje yönetimiyle kurumsal web tasarım, mobil uygulama ve özel yazılım çözümleri sunuyoruz."
  },
  {
    question: "Şanlıurfa yazılım geliştirme ve kurumsal web sitesi fiyatları neye göre belirleniyor?",
    answer: "Projenin teknik kapsamına, özel tasarım ihtiyaçlarına, mobil veya yapay zeka entegrasyonlarına göre fiyatlandırma yapılır. Sayfamızdaki Proje Maliyet Hesaplayıcı aracımızla Şanlıurfa web tasarım, e-ticaret, B2B SaaS veya mobil uygulama projenizin tahmini bütçesini ve teslim süresini anında hesaplayabilirsiniz."
  },
  {
    question: "Şanlıurfa Organize Sanayi Bölgesi (OSB) tesisleri için hangi yazılım çözümlerini sunuyorsunuz?",
    answer: "Fabrika üretim takip sistemleri, barkod/QR kod entegrasyonlu hammadde ve stok yönetim panelleri, B2B bayi sipariş portalları ve sahadaki sevkiyat ekipleri için çevrimdışı çalışabilen (offline-first) mobil uygulamalar geliştiriyoruz."
  }
];

export const metadata = constructMetadata({
  title: 'Şanlıurfa Yazılım Geliştirme, Web Tasarım & Mobil Uygulama | MainX',
  description: 'Şanlıurfa merkezli yazılım geliştirme ve kurumsal web tasarım firması MainX Stüdyoları. Şanlıurfa OSB sanayi yazılımları, Flutter mobil uygulama ve yapay zeka çözümleri.',
  path: '/sanliurfa-yazilim',
  keywords: [
    "Şanlıurfa yazılım",
    "Şanlıurfa yazılım geliştirme",
    "Şanlıurfa web tasarım",
    "Şanlıurfa mobil uygulama",
    "Şanlıurfa OSB yazılım",
    "Urfa yazılım firmaları",
    "Şanlıurfa e-ticaret"
  ]
});

export default function SanliurfaLocalSEO() {
  const serviceLinks = [
    { title: "Şanlıurfa Web Tasarım", href: "/hizmetler/sanliurfa-web-tasarim-ve-kurumsal-web-sitesi", desc: "Next.js ile Google 1. sıra hedefli kurumsal web siteleri" },
    { title: "Şanlıurfa Özel Yazılım", href: "/hizmetler/sanliurfa-ozel-yazilim-gelistirme", desc: "İşletmeye özel bulut tabanlı B2B paneller ve ERP sistemleri" },
    { title: "Mobil Uygulama (Flutter)", href: "/hizmetler/mobil-uygulama-gelistirme", desc: "iOS ve Android için çevrimdışı çalışabilen native uygulamalar" },
    { title: "Yapay Zeka (AI) Çözümleri", href: "/hizmetler/yapay-zeka-entegrasyonu", desc: "Şirket içi veri gizliliğini koruyan otonom ajanlar ve LLM entegrasyonu" },
    { title: "B2B SaaS Platformları", href: "/hizmetler/ozel-saas-yazilimlari", desc: "Ölçeklenebilir, modern ve güvenli bulut tabanlı yönetim sistemleri" },
    { title: "Blok Zinciri (Web3)", href: "/hizmetler/blockchain-cozumleri", desc: "Hyperledger Fabric ile kurumsal şeffaf veri ağları" }
  ];

  const caseStudies = [
    { title: "Göl Lokantası", href: "/projeler/gol-lokantasi", desc: "Şanlıurfa restoranı için QR dijital menü ve web altyapısı" },
    { title: "Param Cepte", href: "/projeler/param-cepte", desc: "Google Play'de yayında olan %100 Offline-First finans uygulaması" },
    { title: "AI Agent Factory", href: "/projeler/ai-agent-factory", desc: "Oracle ARM sunucularda n8n + Ollama tabanlı otonom yapay zeka fabrikası" },
    { title: "TÜBİTAK 2209-A", href: "/projeler/tubitak-2209-a", desc: "Hyperledger Fabric tabanlı kurumsal blok zinciri diploma doğrulama sistemi" }
  ];

  const blogArticles = [
    { title: "Şanlıurfa Yazılım Geliştirme ve Dijital Dönüşüm Rehberi (2026)", href: "/blog/sanliurfa-yazilim-gelistirme-ve-dijital-donusum-rehberi", desc: "OSB sanayi tesisleri ve KOBİ'ler için özel yazılım seçimi ve dönüşüm adımları" },
    { title: "Şanlıurfa Web Tasarım ve Kurumsal Web Sitesi Fiyatları", href: "/blog/sanliurfa-web-tasarim-ve-kurumsal-web-sitesi-fiyatlari", desc: "Maliyet kriterleri, Core Web Vitals performans farkları ve yerel SEO" },
    { title: "Şanlıurfa Mobil Uygulama Geliştirme ve Yapay Zeka Otomasyonu", href: "/blog/sanliurfa-mobil-uygulama-gelistirme-ve-yapay-zeka-cozumleri", desc: "Flutter ile offline-first mobil mimari ve n8n ile yerel yapay zeka ajanları" }
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 relative">
      <LocalBusinessSchema />
      <FAQSchema faqs={sanliurfaFaqs} />
      <BreadcrumbSchema items={[
        { name: "Ana Sayfa", url: SITE_URL },
        { name: "Şanlıurfa Yazılım Geliştirme", url: `${SITE_URL}/sanliurfa-yazilim` }
      ]} />
      
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
      
      <div className="w-full px-6 lg:px-16 2xl:px-24 mx-auto max-w-[100rem] relative z-10">
        <Link href="/" className="text-foreground/50 hover:text-foreground transition-colors flex items-center gap-2 mb-8 text-sm">
          <ArrowLeft className="w-4 h-4" /> Ana Sayfaya Dön
        </Link>
        
        <div className="flex items-center gap-3 mb-6">
          <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase flex items-center gap-2">
            <MapPin className="w-3 h-3" />
            Şanlıurfa / Türkiye — Yerel Mühendislik Merkezi
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
          Şanlıurfa Yazılım Geliştirme <span className="font-light">ve Dijital Dönüşüm Stüdyosu</span>
        </h1>
        
        <div className="prose prose-invert max-w-4xl prose-lg text-foreground/70 mb-16">
          <p className="lead text-xl">
            MainX Stüdyoları olarak Şanlıurfa merkezli; Şanlıurfa OSB fabrikaları, KOBİ'ler ve girişimciler için işletmeye özel yazılım, modern kurumsal web tasarım, Flutter mobil uygulama ve şirket içi yapay zeka otomasyonları geliştiriyoruz.
          </p>
          
          <h2 className="text-2xl font-bold mt-12 mb-6 text-foreground">Temel Hizmet Alanlarımız</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-10">
            <div className="p-6 rounded-2xl bg-foreground/5 border border-border">
              <Code className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Özel Yazılım ve B2B SaaS</h3>
              <p className="text-sm text-foreground/60">Şirketinizin iş süreçlerini hızlandıracak tamamen size özel web tabanlı B2B sistemler, ERP modülleri ve yönetim panelleri.</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-foreground/5 border border-border">
              <Briefcase className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Kurumsal Web Tasarım & E-Ticaret</h3>
              <p className="text-sm text-foreground/60">Şanlıurfa'daki işletmenizin dijital vitrinini en üst seviyeye taşıyan, Google 1. sıra hedefli, ultra hızlı Next.js web siteleri.</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-foreground/5 border border-border">
              <Smartphone className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Mobil Uygulama (iOS & Android)</h3>
              <p className="text-sm text-foreground/60">Saha operasyonları ve müşteri etkileşimi için Flutter ile çevrimdışı (offline-first) çalışabilen native mobil uygulamalar.</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-foreground/5 border border-border">
              <Bot className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Yapay Zeka (AI) & Otomasyon</h3>
              <p className="text-sm text-foreground/60">Şirket verilerinizi dışarı sızdırmadan çalışan yerel LLM modelleri, otonom müşteri botları ve n8n iş akışı otomasyonu.</p>
            </div>
          </div>
          
          {/* BÖLÜM 1: Şanlıurfa Sektörel Yazılım Çözümlerimiz */}
          <h2 className="text-3xl font-bold mt-16 mb-8 text-foreground">Şanlıurfa Sektörel Yazılım Çözümlerimiz</h2>
          <p>
            Her sektörün dinamikleri ve saha zorlukları birbirinden farklıdır. Şanlıurfa'daki işletmelerin operasyonel yapısını yerinde analiz ederek sektöre özel yazılım mimarileri kuruyoruz:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-10">
            <div className="p-6 rounded-2xl bg-foreground/5 border border-border">
              <Factory className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Şanlıurfa OSB ve Sanayi Üretim Yazılımları</h3>
              <p className="text-sm text-foreground/60">Fabrika zeminindeki üretim bantları, hammadde tüketimi, fire takibi, stok sayımı ve toptancı bayiler için B2B sipariş portalları.</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-foreground/5 border border-border">
              <Wheat className="w-8 h-8 text-amber-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Tarım ve Gıda Teknolojileri</h3>
              <p className="text-sm text-foreground/60">Pamuk, fıstık, mısır ve buğday tarımına özel dönüm başı maliyet analizleri, saha sulama/gübreleme takibi ve soğuk hava deposu stok yazılımları.</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-foreground/5 border border-border">
              <Utensils className="w-8 h-8 text-emerald-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Restoran, Kafe ve Turizm Dijital Altyapıları</h3>
              <p className="text-sm text-foreground/60">Göl Lokantası referansımızla kanıtlanmış akıllı dijital QR menü, anlık masa sipariş entegrasyonu ve çok dilli (TR/EN/AR) turist karşılama web portalları.</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-foreground/5 border border-border">
              <GraduationCap className="w-8 h-8 text-purple-500 mb-4" />
              <h3 className="text-lg font-bold mb-2">Eğitim Kurumları ve Akademik Sistemler</h3>
              <p className="text-sm text-foreground/60">Harran Üniversitesi ve eğitim kurumları için geliştirdiğimiz optik sınav okuma (MediaPipe) ve öğrenci akademik performans takip sistemleri.</p>
            </div>
          </div>

          {/* BÖLÜM 2: Hizmet Verdiğimiz Bölgeler */}
          <h2 className="text-3xl font-bold mt-16 mb-8 text-foreground">Hizmet Verdiğimiz Bölgeler</h2>
          <p>
            MainX Stüdyoları, Şanlıurfa'nın merkez ilçelerinden başlayarak tüm ilçelerine ve Güneydoğu Anadolu bölgesine yerinde teknik analiz ve yüz yüze proje yönetimi hizmeti sunmaktadır:
          </p>
          
          <div className="p-8 rounded-3xl bg-foreground/5 border border-border not-prose my-8">
            <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" /> Şanlıurfa Bölge Kapsamı
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm text-foreground/80">
              <div className="p-3 rounded-xl bg-background border border-border">
                <span className="font-bold text-primary block mb-1">Merkez İlçeler</span>
                Haliliye, Karaköprü, Eyyübiye
              </div>
              <div className="p-3 rounded-xl bg-background border border-border">
                <span className="font-bold text-primary block mb-1">Sanayi & İnovasyon</span>
                Şanlıurfa OSB, Şanlıurfa Teknokent, Evren Sanayi Sitesi
              </div>
              <div className="p-3 rounded-xl bg-background border border-border">
                <span className="font-bold text-primary block mb-1">Gelişen İlçelerimiz</span>
                Siverek, Viranşehir, Birecik, Suruç
              </div>
              <div className="p-3 rounded-xl bg-background border border-border">
                <span className="font-bold text-primary block mb-1">Tarım Havzaları</span>
                Akçakale, Ceylanpınar, Harran
              </div>
              <div className="p-3 rounded-xl bg-background border border-border">
                <span className="font-bold text-primary block mb-1">Turizm & Fırat Hattı</span>
                Halfeti, Bozova, Hilvan
              </div>
              <div className="p-3 rounded-xl bg-background border border-border">
                <span className="font-bold text-primary block mb-1">Bölgesel Destek</span>
                Gaziantep, Diyarbakır, Mardin
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-6 text-foreground">Neden Bizi Seçmelisiniz?</h2>
          <p>
            Şanlıurfa'da yerel ihtiyaçları birebir yerinde anlıyor, ancak <strong>Silikon Vadisi standartlarında</strong> modern mimari (Next.js 16, React 19, Flutter, Go, Python) ile sistemler geliştiriyoruz. Hazır kalıplar ve yavaş altyapılar yerine yüksek performanslı, siber güvenlik denetimlerinden geçmiş ölçeklenebilir kod tabanları inşa ediyoruz.
          </p>
        </div>

        {/* BÖLÜM 3: Sayfa İçi Küme Bağlantıları (Topic Cluster Links) */}
        <div className="mt-20 pt-16 border-t border-border">
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-foreground flex items-center gap-3">
            <Layers className="w-8 h-8 text-primary" /> Şanlıurfa İçerik & Hizmet Kümesi
          </h2>
          <p className="text-foreground/60 mb-12 max-w-2xl text-lg">
            İhtiyacınız olan alanda derinlemesine bilgi edinmek, örnek vaka analizlerimizi incelemek veya doğrudan hizmet teklifi almak için ilgili bağlantılara göz atın.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Hizmetler Kolonu */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold text-foreground pb-3 border-b border-border">
                Hizmet Sayfalarımız
              </h3>
              <div className="flex flex-col gap-3">
                {serviceLinks.map((item, i) => (
                  <Link 
                    key={i} 
                    href={item.href}
                    className="p-4 rounded-xl bg-foreground/5 hover:bg-primary/10 border border-border hover:border-primary/30 transition-all group"
                  >
                    <span className="font-bold text-foreground group-hover:text-primary flex items-center justify-between text-sm">
                      {item.title} <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </span>
                    <span className="text-xs text-foreground/50 mt-1 block">{item.desc}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Vaka Analizleri */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold text-foreground pb-3 border-b border-border">
                Vaka Analizleri (Projeler)
              </h3>
              <div className="flex flex-col gap-3">
                {caseStudies.map((item, i) => (
                  <Link 
                    key={i} 
                    href={item.href}
                    className="p-4 rounded-xl bg-foreground/5 hover:bg-primary/10 border border-border hover:border-primary/30 transition-all group"
                  >
                    <span className="font-bold text-foreground group-hover:text-primary flex items-center justify-between text-sm">
                      {item.title} <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </span>
                    <span className="text-xs text-foreground/50 mt-1 block">{item.desc}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Yerel Rehberler */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold text-foreground pb-3 border-b border-border">
                Yerel Mühendislik Blogu
              </h3>
              <div className="flex flex-col gap-3">
                {blogArticles.map((item, i) => (
                  <Link 
                    key={i} 
                    href={item.href}
                    className="p-4 rounded-xl bg-foreground/5 hover:bg-primary/10 border border-border hover:border-primary/30 transition-all group"
                  >
                    <span className="font-bold text-foreground group-hover:text-primary flex items-center justify-between text-sm">
                      {item.title} <BookOpen className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-all" />
                    </span>
                    <span className="text-xs text-foreground/50 mt-1 block">{item.desc}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Card */}
        <div className="mt-20 p-12 rounded-[2.5rem] bg-gradient-to-r from-primary/20 via-primary/5 to-transparent border border-primary/20 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-3xl font-bold mb-3 text-foreground">Şanlıurfa'daki İşletmenizi Birlikte Geleceğe Taşıyalım</h3>
            <p className="text-foreground/70 max-w-xl text-base">
              Fabrikanız, şirketiniz veya girişiminiz için yüz yüze analiz toplantısı planlayalım. İhtiyaçlarınıza özel mimariyi sıfırdan çizelim.
            </p>
          </div>
          <Link href="/#iletisim" className="px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold flex items-center gap-2 hover:scale-105 transition-transform flex-shrink-0 shadow-[0_0_25px_rgba(245,158,11,0.35)]">
            Ücretsiz Analiz Alın <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
