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

        {/* Work Areas */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2"><Code className="text-primary" /> Çalışma Alanları</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-foreground/5 border border-border">Software Development</div>
            <div className="p-4 rounded-xl bg-foreground/5 border border-border">Web Development</div>
            <div className="p-4 rounded-xl bg-foreground/5 border border-border">AI Integration</div>
            <div className="p-4 rounded-xl bg-foreground/5 border border-border">SaaS Architecture</div>
            <div className="p-4 rounded-xl bg-foreground/5 border border-border">Mobile Development</div>
            <div className="p-4 rounded-xl bg-foreground/5 border border-border">Cloud Infrastructure</div>
          </div>
        </section>

        {/* Education & Academic */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2"><BookOpen className="text-primary" /> Eğitim ve Araştırma</h3>
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-foreground/5 border border-border">
              <h4 className="text-xl font-medium mb-2">Harran Üniversitesi</h4>
              <p className="text-foreground/60 mb-2">Bilgisayar / Yazılım Mühendisliği Alanı</p>
              <p className="text-sm text-foreground/80">Akademik çalışmalar ve TÜBİTAK 2209-A projesi kapsamında araştırma ve geliştirme süreçlerinde aktif rol alma.</p>
            </div>
          </div>
        </section>

        {/* Teaching & Communities */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2"><Award className="text-primary" /> Eğitmenlik & Topluluk</h3>
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <ul className="list-disc list-inside space-y-2">
              <li>Teknoloji Eğitmenliği: Modern yazılım dilleri ve teknolojileri üzerine eğitimler.</li>
              <li>Siber Vatan: Siber güvenlik ve yazılım ekosisteminde aktif katılım.</li>
              <li>T3 Vakfı: Teknoloji geliştirme ve mentorluk faaliyetleri.</li>
              <li>Açık Kaynak: Topluluk destekli geliştirme süreçlerine katkı.</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2"><Terminal className="text-primary" /> Projeler</h3>
          <p className="mb-6 text-foreground/80">
            Geliştirdiğim projeler ve MainX Stüdyoları bünyesindeki çalışmaları inceleyebilirsiniz.
          </p>
          <div className="flex gap-4">
            <Link href="/projeler" className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
              Tüm Projeler
            </Link>
            <Link href="/" className="px-6 py-3 rounded-full bg-foreground/5 border border-border font-semibold hover:bg-foreground/10 transition-colors">
              MainX Stüdyoları
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
