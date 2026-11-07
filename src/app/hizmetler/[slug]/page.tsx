import { constructMetadata, SITE_URL } from "@/lib/seo";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Code2, Server, Smartphone, BrainCircuit, Blocks, Globe, Laptop } from "lucide-react";
import { ServiceSchema, BreadcrumbSchema } from "@/components/seo/JsonLd";

const services = {
  "sanliurfa-web-tasarim-ve-kurumsal-web-sitesi": {
    title: "Şanlıurfa Web Tasarım ve Kurumsal Web Yazılım Çözümleri",
    description: "Şanlıurfa'daki işletmelere özel modern, ultra hızlı, SEO uyumlu kurumsal web siteleri ve dijital vitrin çözümleri.",
    icon: Globe,
    features: [
      "Next.js ile Modern Mimari & Ultra Hız",
      "Google 1. Sıra Hedefli Yerel SEO Optimizasyonu",
      "Mobil ve Tablet Uyumlu Responsive Tasarım",
      "Hızlı Yönetim Paneli & Kolay İçerik Yönetimi (CMS)"
    ]
  },
  "sanliurfa-ozel-yazilim-gelistirme": {
    title: "Şanlıurfa Özel Yazılım Geliştirme ve Kurumsal Otomasyon",
    description: "İşletmenizin operasyonel süreçlerini dijitalleştiren, Şanlıurfa ve bölge firmalarına özel bulut tabanlı B2B sistemler ve kurumsal yazılımlar.",
    icon: Laptop,
    features: [
      "İşletmeye Özel Süreç Yönetimi & Dashboard",
      "B2B SaaS ve ERP Entegrasyonları",
      "Yüksek Güvenlikli Veritabanı Mimarisi (PostgreSQL/Cloud)",
      "Uçtan Uca Teknik Destek ve SLA Bakım Garantisi"
    ]
  },
  "yapay-zeka-entegrasyonu": {
    title: "Yapay Zeka (AI) ve LLM Entegrasyonları",
    description: "Şirket verilerinizi anlayan, otonom çalışan ve iş süreçlerinizi otomatize eden yapay zeka ajanları (AI Agents) ve RAG sistemleri geliştiriyoruz.",
    icon: BrainCircuit,
    features: ["RAG (Retrieval-Augmented Generation)", "Otonom AI Ajanları (n8n, LangChain)", "Özel LLM Eğitimi (Fine-tuning)", "Şirket İçi Bilgi Asistanları"]
  },
  "mobil-uygulama-gelistirme": {
    title: "Offline-First Mobil Uygulama Geliştirme",
    description: "İnternet bağlantısı koptuğunda bile tam performansla çalışan, kullanıcı deneyimi odaklı, hızlı ve güvenilir mobil uygulamalar tasarlıyoruz.",
    icon: Smartphone,
    features: ["Flutter & Dart", "Offline-First Mimari (Hive, SQLite)", "Native Modül Entegrasyonları", "Yüksek Performans ve 60 FPS"]
  },
  "ozel-saas-yazilimlari": {
    title: "Özel SaaS ve Kurumsal Web Yazılımları",
    description: "İhtiyacınıza tam uyan, ölçeklenebilir, modern ve güvenli B2B/B2C SaaS platformları ve kurumsal web uygulamaları üretiyoruz.",
    icon: Server,
    features: ["Next.js & React Mimarisi", "Mikroservis veya Monolitik Backend (Node.js, Go)", "Yüksek Ölçeklenebilirlik", "Güçlü Güvenlik (SecOps)"]
  },
  "blockchain-cozumleri": {
    title: "Kurumsal Blockchain (Hyperledger) Çözümleri",
    description: "Veri şeffaflığı ve güvenliği gerektiren tedarik zinciri veya finansal süreçleriniz için izinli (permissioned) kurumsal blok zinciri ağları kuruyoruz.",
    icon: Blocks,
    features: ["Hyperledger Fabric Ağı Kurulumu", "Akıllı Sözleşmeler (Smart Contracts)", "Tedarik Zinciri Takibi", "Değiştirilemez Veri Kaydı"]
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = services[resolvedParams.slug as keyof typeof services];
  if (!service) return constructMetadata();

  return constructMetadata({
    title: `${service.title} | MainX Stüdyoları`,
    description: service.description,
    path: `/hizmetler/${resolvedParams.slug}`,
  });
}

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug,
  }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = services[resolvedParams.slug as keyof typeof services];
  
  if (!service) {
    notFound();
  }

  const serviceUrl = `${SITE_URL}/hizmetler/${resolvedParams.slug}`;

  return (
    <div className="min-h-screen bg-background">
      <ServiceSchema 
        name={service.title} 
        description={service.description} 
        url={serviceUrl} 
      />
      <BreadcrumbSchema items={[
        { name: "Ana Sayfa", url: SITE_URL },
        { name: "Hizmetlerimiz", url: `${SITE_URL}/katalog` },
        { name: service.title, url: serviceUrl }
      ]} />
      <div className="relative py-24 md:py-32 border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="w-full px-6 lg:px-16 2xl:px-24 mx-auto max-w-4xl relative z-10">
          <Link href="/katalog" className="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" /> Kataloğa Dön
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <service.icon className="w-8 h-8 text-primary" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            {service.title}
          </h1>

          <p className="text-xl text-foreground/60 leading-relaxed mb-10">
            {service.description}
          </p>
        </div>
      </div>

      <div className="w-full px-6 lg:px-16 2xl:px-24 mx-auto max-w-4xl py-16">
        <h2 className="text-2xl font-bold mb-8">Neler Sağlıyoruz?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-4 p-6 rounded-2xl bg-foreground/[0.02] border border-border">
              <CheckCircle className="w-6 h-6 text-primary shrink-0" />
              <span className="font-medium text-foreground/80">{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-3xl bg-primary/10 border border-primary/20 text-center">
          <h3 className="text-2xl font-bold mb-3 text-foreground">Projenizi Şanlıurfa'da veya Online Başlatalım</h3>
          <p className="mb-6 text-foreground/70 max-w-xl mx-auto">
            İhtiyaçlarınıza özel mimari planlama ve ücretsiz ön analiz toplantısı için bizimle hemen iletişime geçin.
          </p>
          <Link href="/#iletisim" className="inline-block px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(245,158,11,0.3)]">
            Hemen Teklif Alın
          </Link>
        </div>
      </div>
    </div>
  );
}
