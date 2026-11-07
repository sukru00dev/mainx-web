"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

import { 
  MonitorSmartphone, Database, BrainCircuit, Lock, 
  ShoppingCart, Server, Code, Sparkles, Smartphone, Globe, Laptop, ArrowUpRight
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Şanlıurfa Web Tasarım",
    desc: "Google 1. sıra hedefli, ultra hızlı, mobil uyumlu ve modern kurumsal web siteleri.",
    slug: "sanliurfa-web-tasarim-ve-kurumsal-web-sitesi"
  },
  {
    icon: Laptop,
    title: "Şanlıurfa Özel Yazılım",
    desc: "İşletmenizin operasyonlarını hızlandıran bulut tabanlı B2B sistemler ve yönetim panelleri.",
    slug: "sanliurfa-ozel-yazilim-gelistirme"
  },
  {
    icon: MonitorSmartphone,
    title: "Web & SaaS Platformları",
    desc: "Next.js ve React ile ölçeklenebilir B2B SaaS panelleri ve kurumsal web uygulamaları.",
    slug: "ozel-saas-yazilimlari"
  },
  {
    icon: Smartphone,
    title: "Mobil Uygulama Geliştirme",
    desc: "Flutter ile hem iOS hem Android için native performansında modern mobil uygulamalar.",
    slug: "mobil-uygulama-gelistirme"
  },
  {
    icon: BrainCircuit,
    title: "Yapay Zeka (AI) Çözümleri",
    desc: "n8n ve Ollama kullanarak şirket içi verilere entegre otonom ajanlar ve chatbotlar.",
    slug: "yapay-zeka-entegrasyonu"
  },
  {
    icon: Lock,
    title: "Blok Zinciri (Web3)",
    desc: "Hyperledger Fabric ve Go ile gizlilik odaklı, güvenilir DApp ve smart contract mimarileri.",
    slug: "blockchain-cozumleri"
  },
  {
    icon: ShoppingCart,
    title: "E-Ticaret Altyapıları",
    desc: "Yüksek trafik kaldırabilen, modern ödeme sistemleri entegreli B2C e-ticaret siteleri.",
    slug: null
  },
  {
    icon: Server,
    title: "DevOps & Sunucu Yönetimi",
    desc: "Docker, CI/CD pipeline kurulumu ve Oracle/AWS üzerinde güvenli sunucu mimarisi.",
    slug: null
  },
  {
    icon: Code,
    title: "Gömülü Sistemler (Donanım)",
    desc: "Assembly ve mikrodenetleyiciler ile fiziksel sistem entegrasyonu (IoT).",
    slug: null
  },
  {
    icon: Sparkles,
    title: "Siber Güvenlik & Denetim",
    desc: "KVKK uyumlu altyapılar ve web uygulamaları için siber zafiyet testleri.",
    slug: null
  }
];

export default function ServicesBento() {
  const { t } = useLanguage();
  // We double the array for infinite scroll effect
  const marqueeItems = [...services, ...services];

  return (
    <section id="hizmetler" className="py-32 relative bg-background border-t border-border overflow-hidden">
      <div className="w-full px-6 lg:px-16 2xl:px-24 mx-auto max-w-[100rem]">
        
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-semibold mb-4 block">
            {t("services_label")}
          </span>
          <h2 className="text-4xl md:text-5xl font-thin tracking-tight text-foreground">
            Yenilikçi <span className="font-bold">Mühendislik.</span>
          </h2>
          <p className="text-foreground/50 mt-6 leading-relaxed">
            {t("services_desc")}
          </p>
        </div>

      </div>

      {/* Infinite Marquee Wrapper */}
      <div className="relative w-full overflow-hidden flex flex-col gap-6 group">
        
        {/* Row 1: Marquee Left */}
        <div className="flex w-[300%] sm:w-[200%] md:w-[150%] xl:w-[120%] 2xl:w-[100%] animate-marquee group-hover:[animation-play-state:paused] gap-6 px-4">
          {marqueeItems.map((service, i) => {
            const isDuplicate = i >= services.length;
            const CardContent = (
              <div 
                className="w-[350px] flex-shrink-0 p-8 rounded-[2rem] bg-foreground/5 border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col h-full group/card"
                aria-hidden={isDuplicate ? "true" : undefined}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-background border border-border flex items-center justify-center group-hover/card:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  {service.slug && (
                    <span className="p-2 rounded-full bg-foreground/5 text-foreground/40 group-hover/card:text-primary group-hover/card:bg-primary/10 transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  )}
                </div>

                {/* Primary copy has h3 for SEO, duplicate copy uses div to prevent duplicate headings */}
                {!isDuplicate ? (
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover/card:text-primary transition-colors">
                    {service.title}
                  </h3>
                ) : (
                  <div className="text-xl font-bold mb-3 text-foreground group-hover/card:text-primary transition-colors">
                    {service.title}
                  </div>
                )}

                <p className="text-foreground/50 text-sm leading-relaxed flex-grow">
                  {service.desc}
                </p>
              </div>
            );

            if (service.slug) {
              return (
                <Link
                  key={i}
                  href={`/hizmetler/${service.slug}`}
                  tabIndex={isDuplicate ? -1 : 0}
                  className="outline-none"
                >
                  {CardContent}
                </Link>
              );
            }

            return (
              <div key={i} className="outline-none">
                {CardContent}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
