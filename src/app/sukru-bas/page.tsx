/* eslint-disable react/no-unescaped-entities */
import { constructMetadata } from "@/lib/seo";
import { PersonSchema, BreadcrumbSchema } from "@/components/seo/JsonLd";
import Image from "next/image";
import { SITE_URL } from "@/lib/seo";
import Link from "next/link";
import { Terminal, Code, Cpu, Shield, Globe, Award, BookOpen } from "lucide-react";

export const metadata = constructMetadata({
  title: "Şükrü BAŞ | Yazılım Geliştirici & MainX Stüdyoları",
  description: "Şükrü BAŞ'ın yazılım geliştirme, teknoloji projeleri, akademik çalışmaları ve MainX Stüdyoları ile ilgili kişisel profili.",
  path: "/sukru-bas",
  image: "/profile.jpg",
});

export default function SukruBasProfile() {
  return (
    <div className="flex flex-col min-h-screen relative pt-24 pb-16 bg-background">
      <PersonSchema />
      <BreadcrumbSchema items={[
        { name: "Ana Sayfa", url: SITE_URL },
        { name: "Şükrü BAŞ", url: `${SITE_URL}/sukru-bas` }
      ]} />
      
      <div className="w-full px-6 lg:px-16 2xl:px-24 mx-auto max-w-4xl relative z-10">
        
        {/* Header / Profile */}
        <header className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-16 border-b border-border pb-12">
          <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-primary/20 shrink-0">
            <Image 
              src="/profile.jpg" 
              alt="Şükrü BAŞ" 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 192px, 192px"
              priority
            />
          </div>
          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Şükrü BAŞ</h1>
            <h2 className="text-xl text-primary font-mono mb-4">Software Engineer & Founder @ MainX</h2>
            <p className="text-foreground/80 leading-relaxed">
              Yazılım mühendisliği öğrencisi, teknoloji eğitmeni ve MainX Stüdyoları kurucusu. 
              Modern web teknolojileri, yapay zeka entegrasyonları, SaaS sistemleri ve mobil uygulama 
              geliştirme konularında çalışıyorum. Temiz kod mimarisi ve ölçeklenebilir sistemler tasarlamak en büyük tutkum.
            </p>
            <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
              <a href="https://github.com/sukru00dev" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/sukrubasdev" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">LinkedIn</a>
              <a href="https://instagram.com/sukrukodluyor" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">Instagram</a>
              <a href="https://medium.com/@sukrubas" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">Medium</a>
            </div>
          </div>
        </header>

        {/* Work Areas & Tech Stack */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2"><Code className="text-primary" /> Teknik Uzmanlıklar</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-foreground/5 border border-border">Software Architecture</div>
            <div className="p-4 rounded-xl bg-foreground/5 border border-border">React & Next.js</div>
            <div className="p-4 rounded-xl bg-foreground/5 border border-border">Flutter Mobile App</div>
            <div className="p-4 rounded-xl bg-foreground/5 border border-border">AI Agent Workflows</div>
            <div className="p-4 rounded-xl bg-foreground/5 border border-border">Hyperledger Fabric</div>
            <div className="p-4 rounded-xl bg-foreground/5 border border-border">Cloud & DevOps</div>
          </div>
        </section>

        {/* Education & Academic */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2"><BookOpen className="text-primary" /> Eğitim ve Araştırma</h3>
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-foreground/5 border border-border hover:border-primary/30 transition-colors">
              <h4 className="text-xl font-medium mb-2">Harran Üniversitesi</h4>
              <p className="text-foreground/60 mb-3">Bilgisayar Mühendisliği Öğrencisi</p>
              <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                Akademik çalışmalarımı özellikle dağıtık sistemler, veri gizliliği ve blok zinciri mimarisi üzerine yoğunlaştırdım. 
                Bu kapsamda yürüttüğüm <Link href="/projeler/tubitak-2209-a" className="text-primary hover:underline">TÜBİTAK 2209-A Blok Zinciri Diploma Doğrulama Sistemi</Link> projesi
                başarıyla onaylandı ve literatüre kazandırıldı.
              </p>
            </div>
          </div>
        </section>

        {/* Experience & Activities */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2"><Award className="text-primary" /> Deneyim & Faaliyetler</h3>
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <ul className="list-disc list-inside space-y-3">
              <li>
                <strong>MainX Stüdyoları:</strong> Kurucu ve yazılım mimarı olarak kurumsal firmalara özel SaaS ve otonom sistemler (Bkz: <Link href="/projeler/ai-agent-factory" className="text-primary hover:underline">AI Agent Factory</Link>) geliştiriyorum.
              </li>
              <li>
                <strong>Mobil Geliştirme:</strong> Çevrimdışı çalışabilen mimariler tasarlıyorum. Google Play'de yayınlanan <Link href="/projeler/param-cepte" className="text-primary hover:underline">Param Cepte</Link> projesini Offline-First mimarisiyle sıfırdan geliştirdim.
              </li>
              <li>
                <strong>Teknoloji Eğitmenliği:</strong> Deneyim T3 Vakfı bünyesinde teknoloji mentorluğu yapıyor ve "Siber Vatan" gibi programlarda siber güvenlik ve yazılım ekosistemine aktif katılım sağlıyorum.
              </li>
            </ul>
          </div>
        </section>

        {/* Selected Publications */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2"><Terminal className="text-primary" /> Yazılar ve Yayınlar</h3>
          <p className="mb-6 text-foreground/80">
            Öğrendiklerimi ve mimari deneyimlerimi paylaştığım teknik makalelere <Link href="/blog" className="text-primary hover:underline">Blog</Link> üzerinden ulaşabilirsiniz.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/blog/n8n-ai-agents" className="p-4 rounded-xl bg-foreground/5 border border-border hover:border-primary/50 transition-colors">
              <span className="text-sm text-foreground/50 mb-1 block">Yapay Zeka Mimari</span>
              <span className="font-semibold text-foreground hover:text-primary">n8n ile AI Agent Architecture</span>
            </Link>
            <Link href="/blog/flutter-offline-first" className="p-4 rounded-xl bg-foreground/5 border border-border hover:border-primary/50 transition-colors">
              <span className="text-sm text-foreground/50 mb-1 block">Mobil Geliştirme</span>
              <span className="font-semibold text-foreground hover:text-primary">Flutter'da Offline-First Yaklaşımı</span>
            </Link>
            <Link href="/blog/tubitak-2209" className="p-4 rounded-xl bg-foreground/5 border border-border hover:border-primary/50 transition-colors">
              <span className="text-sm text-foreground/50 mb-1 block">Araştırma Raporu</span>
              <span className="font-semibold text-foreground hover:text-primary">TÜBİTAK 2209-A Başvuru Deneyimi</span>
            </Link>
            <Link href="/blog/blockchain-giris" className="p-4 rounded-xl bg-foreground/5 border border-border hover:border-primary/50 transition-colors">
              <span className="text-sm text-foreground/50 mb-1 block">Dağıtık Sistemler</span>
              <span className="font-semibold text-foreground hover:text-primary">Blok Zincirinin Temelleri</span>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
