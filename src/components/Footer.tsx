"use client";

import { Terminal, MapPin } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaMedium } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="w-full px-6 lg:px-16 2xl:px-24 mx-auto max-w-[100rem] pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Kolon 1: Marka & Açıklama */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20">
                <Terminal className="w-5 h-5 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight leading-none text-foreground">MainX<span className="text-primary">.</span></span>
                <span className="text-[10px] text-foreground/40 tracking-[0.2em] uppercase mt-1">Stüdyoları</span>
              </div>
            </Link>
            <p className="text-foreground/50 leading-relaxed mb-8 text-sm">
              <Link href="/sukru-bas" className="hover:text-primary transition-colors font-medium">Şükrü BAŞ</Link> liderliğinde Şanlıurfa merkezli; kurumsal web tasarım, mobil uygulama, yapay zeka ve B2B SaaS geliştiren mühendislik stüdyosu.
            </p>
            <div className="flex gap-3">
              <a href="https://github.com/sukru00dev" target="_blank" rel="noreferrer" aria-label="GitHub" className="w-9 h-9 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 hover:text-foreground text-foreground/50 transition-colors border border-border">
                <FaGithub className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/sukrubasdev" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 hover:text-foreground text-foreground/50 transition-colors border border-border">
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a href="https://instagram.com/sukrukodluyor" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 hover:text-foreground text-foreground/50 transition-colors border border-border">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="https://medium.com/@sukrubas" target="_blank" rel="noreferrer" aria-label="Medium" className="w-9 h-9 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 hover:text-foreground text-foreground/50 transition-colors border border-border">
                <FaMedium className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Kolon 2: Şanlıurfa Yazılım Çözümleri */}
          <div>
            <h4 className="font-bold text-foreground mb-6 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" /> Şanlıurfa Yazılım Çözümleri
            </h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <Link href="/sanliurfa-yazilim" className="text-foreground/70 hover:text-primary font-medium transition-colors">
                  Şanlıurfa Yazılım Geliştirme
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/sanliurfa-web-tasarim-ve-kurumsal-web-sitesi" className="text-foreground/50 hover:text-primary transition-colors">
                  Şanlıurfa Web Tasarım & Kurumsal Web
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/sanliurfa-ozel-yazilim-gelistirme" className="text-foreground/50 hover:text-primary transition-colors">
                  Özel Yazılım & Kurumsal Otomasyon
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/mobil-uygulama-gelistirme" className="text-foreground/50 hover:text-primary transition-colors">
                  Flutter Mobil Uygulama (iOS/Android)
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/yapay-zeka-entegrasyonu" className="text-foreground/50 hover:text-primary transition-colors">
                  Yapay Zeka (AI) & Ajan Sistemleri
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolon 3: Kurumsal & Sayfalar */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Kurumsal</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link href="/#hakkimizda" className="text-foreground/50 hover:text-foreground transition-colors">Hakkımızda</Link></li>
              <li><Link href="/katalog" className="text-foreground/50 hover:text-foreground transition-colors">Hizmet Kataloğu</Link></li>
              <li><Link href="/#urunler" className="text-foreground/50 hover:text-foreground transition-colors">Ürünler & Referans Projeler</Link></li>
              <li><Link href="/blog" className="text-foreground/50 hover:text-foreground transition-colors">Teknoloji & Yazılım Blogu</Link></li>
              <li><Link href="/sukru-bas" className="text-foreground/50 hover:text-foreground transition-colors">Kurucu Profili (Şükrü BAŞ)</Link></li>
              <li><Link href="/#iletisim" className="text-foreground/50 hover:text-foreground transition-colors">İletişim & Teklif Formu</Link></li>
            </ul>
          </div>
          
          {/* Kolon 4: İletişim & Konum */}
          <div>
            <h4 className="font-bold text-foreground mb-6">İletişim & Konum</h4>
            <ul className="flex flex-col gap-4 text-foreground/50 text-sm">
              <li className="font-semibold text-foreground/80">
                MainX Yazılım&Geliştirme Stüdyoları
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>Selahaddin Eyyübi, 63000 Şanlıurfa Merkez/Şanlıurfa</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:hello.mainx@gmail.com" className="hover:text-primary transition-colors">hello.mainx@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+905458822670" className="hover:text-primary transition-colors">+90 545 882 26 70</a>
              </li>
              <li>
                <a 
                  href="https://www.google.com/search?kgmid=/g/11nvv_hnwc&hl=tr-TR&q=MainX+Yaz%C4%B1l%C4%B1m%26Geli%C5%9Ftirme+St%C3%BCdyolar%C4%B1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-primary font-semibold bg-primary/10 hover:bg-primary/20 px-3 py-1.5 rounded-full border border-primary/20 inline-flex items-center gap-1.5 transition-colors"
                >
                  ⭐ Google İşletme Profilimiz / Yorum Bırakın
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/40">
          <p>© {new Date().getFullYear()} MainX Stüdyoları by <Link href="/sukru-bas" className="hover:text-primary transition-colors">Şükrü BAŞ</Link>. Tüm hakları saklıdır.</p>
          
          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-foreground/5 border border-border cursor-pointer hover:bg-foreground/10 transition-colors">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-xs font-semibold text-primary tracking-wider">ŞANLIURFA & GLOBAL MÜHENDİSLİK</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
