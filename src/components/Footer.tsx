"use client";

import { Terminal } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaMedium } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="w-full px-6 lg:px-16 2xl:px-24 mx-auto max-w-[100rem] pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20">
                <Terminal className="w-5 h-5 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight leading-none text-foreground">MainX<span className="text-primary">.</span></span>
                <span className="text-[10px] text-foreground/40 tracking-[0.2em] uppercase mt-1">Stüdyoları</span>
              </div>
            </Link>
            <p className="text-foreground/50 max-w-md leading-relaxed mb-8">
              Şükrü BAŞ tarafından kurulan, yenilikçi web teknolojileri, mobil uygulamalar, yapay zeka sistemleri ve blok zinciri mimarileri geliştiren Ar-Ge ve mühendislik stüdyosu.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/sukru00dev" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 hover:text-foreground text-foreground/50 transition-colors border border-border">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/sukrubasdev" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 hover:text-foreground text-foreground/50 transition-colors border border-border">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/sukrukodluyor" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 hover:text-foreground text-foreground/50 transition-colors border border-border">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="https://medium.com/@sukrubas" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 hover:text-foreground text-foreground/50 transition-colors border border-border">
                <FaMedium className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-6">Kurumsal</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/#hakkimizda" className="text-foreground/50 hover:text-foreground transition-colors">Hakkımızda</Link></li>
              <li><Link href="/katalog" className="text-foreground/50 hover:text-foreground transition-colors">Hizmet Kataloğu</Link></li>
              <li><Link href="/#urunler" className="text-foreground/50 hover:text-foreground transition-colors">Ürünler (Özel Projeler)</Link></li>
              <li><Link href="/#iletisim" className="text-foreground/50 hover:text-foreground transition-colors">İletişim</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-6">İletişim & Konum</h4>
            <ul className="flex flex-col gap-4 text-foreground/50">
              <li>📍 Şanlıurfa / Türkiye</li>
              <li>
                ✉️ <a href="mailto:hello.mainx@gmail.com" className="hover:text-primary transition-colors">hello.mainx@gmail.com</a>
              </li>
              <li>📞 +90 545 882 2670</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/40">
          <p>© {new Date().getFullYear()} MainX Stüdyoları by Şükrü BAŞ. Tüm hakları saklıdır.</p>
          
          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-foreground/5 border border-border cursor-pointer hover:bg-foreground/10 transition-colors">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-xs font-semibold text-primary tracking-wider">YENİ NESİL TEKNOLOJİLERLE GELİŞTİRİLDİ</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
