import { constructMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Code2, Server, Smartphone, BrainCircuit, Blocks } from "lucide-react";

const services = {
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

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services[params.slug as keyof typeof services];
  if (!service) return constructMetadata();

  return constructMetadata({
    title: `${service.title} Hizmetleri | MainX`,
    description: service.description,
    path: `/hizmetler/${params.slug}`,
  });
}

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug,
  }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services[params.slug as keyof typeof services];
  
  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
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
      </div>
    </div>
  );
}
