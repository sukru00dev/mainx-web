"use client";

import { motion } from "framer-motion";
import { CloudCog, Smartphone, Code2, Blocks, Palette, MonitorPlay, ArrowRight, Server, ShieldCheck, ShoppingCart } from "lucide-react";
import Link from "next/link";

const catalogItems = [
  {
    title: "Özel B2B SaaS Geliştirme",
    slug: "ozel-saas-yazilimlari",
    description: "İşletmenizin tüm verilerini, personellerini ve operasyonlarını yöneteceğiniz bulut tabanlı (Cloud) özel paneller (Dashboard). Tamamen size ait ve dışa kapalı mimari.",
    techs: ["Next.js", "React", "Node.js", "PostgreSQL", "Docker"],
    icon: CloudCog,
    price: "Proje Bazlı"
  },
  {
    title: "Mobil Uygulama (iOS & Android)",
    slug: "mobil-uygulama-gelistirme",
    description: "Flutter altyapısıyla her iki platformda da kusursuz çalışan, yüksek performanslı ve offline-first (çevrimdışı çalışabilen) modern mobil uygulamalar.",
    techs: ["Flutter", "Dart", "Firebase", "Hive NoSQL"],
    icon: Smartphone,
    price: "Proje Bazlı"
  },
  {
    title: "Yapay Zeka (AI) Entegrasyonu",
    slug: "yapay-zeka-entegrasyonu",
    description: "İşletmenize özel otonom ajanlar, veri analiz botları ve LLM (Büyük Dil Modeli) destekli müşteri hizmetleri otomasyonları.",
    techs: ["Python", "FastAPI", "n8n", "Ollama", "OpenAI"],
    icon: Code2,
    price: "Kapsama Göre"
  },
  {
    title: "Blockchain & Veri Güvenliği",
    slug: "blockchain-cozumleri",
    description: "Akıllı sözleşmeler (Smart Contracts), gizlilik odaklı DApp'ler ve Hyperledger Fabric ile özel kurumsal blok zinciri ağları.",
    techs: ["Hyperledger Fabric", "Go", "Solidity", "Web3"],
    icon: Blocks,
    price: "Danışmanlık & Geliştirme"
  },
  {
    title: "Gömülü Sistemler (Embedded)",
    description: "Donanım ile yazılımın buluştuğu noktada, PIC mikrokontrolcüleri ve sensörler ile otonom IoT / donanım simülasyon ve kontrol sistemleri.",
    techs: ["Assembly", "C/C++", "Proteus", "PIC"],
    icon: MonitorPlay,
    price: "Teknik Destek / Ar-Ge"
  },
  {
    title: "Kurumsal Web (Case: Göl Lokantası)",
    description: "Kafeler, restoranlar ve kurumsal şirketler için modern, SEO uyumlu ve entegre dijital menü / sipariş sistemlerine sahip premium web siteleri.",
    techs: ["Next.js", "Tailwind CSS", "CMS"],
    icon: Palette,
    price: "Paket Fiyatlandırma"
  },
  {
    title: "DevOps & Sunucu Yönetimi",
    description: "Uygulamalarınızın bulut sunuculara (AWS, Oracle, Google Cloud) kesintisiz ve yüksek erişilebilirlikli (HA) şekilde taşınması ve yönetilmesi.",
    techs: ["Docker", "Kubernetes", "CI/CD", "Linux"],
    icon: Server,
    price: "Aylık SLA / Bakım"
  },
  {
    title: "Siber Güvenlik & Pentest",
    description: "Mevcut sistemlerinizin zafiyetlere karşı taranması (Sızma testi) ve Güvenli Tasarım (Secure by Design) ilkeleriyle yeniden yapılandırılması.",
    techs: ["Security", "Network", "Pentest", "Cryptography"],
    icon: ShieldCheck,
    price: "Danışmanlık"
  },
  {
    title: "E-Ticaret & B2C Altyapısı",
    description: "Yüksek trafik kaldırabilen, Stripe, iyzico ve kargo firmaları ile tam entegre, özel tasarlanmış lüks e-ticaret siteleri.",
    techs: ["Next.js", "Node.js", "Stripe", "Redis"],
    icon: ShoppingCart,
    price: "Proje Bazlı"
  }
];

export default function KatalogPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 relative">
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
      
      <div className="w-full px-6 lg:px-16 2xl:px-24 mx-auto max-w-[100rem] relative z-10">
        
        <div className="mb-16">
          <Link href="/" className="text-white/50 hover:text-white transition-colors flex items-center gap-2 mb-8 text-sm">
            <ArrowRight className="w-4 h-4 rotate-180" /> Ana Sayfaya Dön
          </Link>
          <h1 className="text-5xl md:text-7xl font-thin tracking-tight mb-6">
            Yazılım Geliştirme <span className="font-bold">Hizmetleri.</span>
          </h1>
          <p className="text-white/50 max-w-2xl text-lg leading-relaxed">
            MainX Stüdyoları olarak sunduğumuz uçtan uca mühendislik çözümleri, teknoloji stack'lerimiz ve uzmanlık alanlarımız.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {catalogItems.map((item, index) => {
            const content = (
              <>
                <div className="flex items-start justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-black border border-white/10 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:border-primary/50 transition-transform">
                    <item.icon className="w-8 h-8 text-white group-hover:text-primary transition-colors" />
                  </div>
                  <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/70">
                    {item.price}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/60 leading-relaxed mb-8 flex-grow">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                  {item.techs.map((t, i) => (
                    <span key={i} className="text-xs font-semibold px-3 py-1 bg-primary/10 border border-primary/20 rounded-md text-primary">
                      {t}
                    </span>
                  ))}
                </div>
              </>
            );

            const className = "p-8 rounded-[2rem] bg-white/[0.02] border border-white/10 hover:border-primary/30 transition-all group flex flex-col block";

            if (item.slug) {
              return (
                <Link href={`/hizmetler/${item.slug}`} key={index} className={className}>
                  {content}
                </Link>
              );
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={className}
              >
                {content}
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 p-12 rounded-[2rem] bg-gradient-to-r from-primary/20 to-transparent border border-primary/20 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-3xl font-bold mb-2">Projeye Başlamak İster Misiniz?</h3>
            <p className="text-white/60">Taleplerinizi dinleyip size özel bir mühendislik mimarisi çizelim.</p>
          </div>
          <Link href="/#iletisim" className="px-8 py-4 rounded-xl bg-primary text-black font-bold flex items-center gap-2 hover:scale-105 transition-transform flex-shrink-0 shadow-[0_0_20px_rgba(245,158,11,0.3)]">
            Bizimle İletişime Geçin <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
