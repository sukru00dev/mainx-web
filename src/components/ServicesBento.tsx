"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

import { 
  MonitorSmartphone, Database, BrainCircuit, Lock, 
  ShoppingCart, Server, Code, Sparkles, Smartphone 
} from "lucide-react";

const services = [
  {
    icon: MonitorSmartphone,
    title: "Web & SaaS Platformları",
    desc: "Next.js ve React ile ölçeklenebilir B2B SaaS panelleri ve kurumsal web uygulamaları."
  },
  {
    icon: Smartphone, // Wait, Smartphone is missing. Let me use MonitorSmartphone for now
    title: "Mobil Uygulama Geliştirme",
    desc: "Flutter ile hem iOS hem Android için native performansında modern mobil uygulamalar."
  },
  {
    icon: BrainCircuit,
    title: "Yapay Zeka (AI) Çözümleri",
    desc: "n8n ve Ollama kullanarak şirket içi verilere entegre otonom ajanlar ve chatbotlar."
  },
  {
    icon: Lock,
    title: "Blok Zinciri (Web3)",
    desc: "Hyperledger Fabric ve Go ile gizlilik odaklı, güvenilir DApp ve smart contract mimarileri."
  },
  {
    icon: ShoppingCart,
    title: "E-Ticaret Altyapıları",
    desc: "Yüksek trafik kaldırabilen, modern ödeme sistemleri entegreli B2C e-ticaret siteleri."
  },
  {
    icon: Server,
    title: "DevOps & Sunucu Yönetimi",
    desc: "Docker, CI/CD pipeline kurulumu ve Oracle/AWS üzerinde güvenli sunucu mimarisi."
  },
  {
    icon: Code,
    title: "Gömülü Sistemler (Donanım)",
    desc: "Assembly ve mikrodenetleyiciler ile fiziksel sistem entegrasyonu (IoT)."
  },
  {
    icon: Sparkles,
    title: "Siber Güvenlik & Denetim",
    desc: "KVKK uyumlu altyapılar ve web uygulamaları için siber zafiyet testleri."
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
          {marqueeItems.map((service, i) => (
            <div 
              key={i}
              className="w-[350px] flex-shrink-0 p-8 rounded-[2rem] bg-foreground/5 border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col"
            >
              <div className="w-14 h-14 rounded-2xl bg-background border border-border flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
              <p className="text-foreground/50 text-sm leading-relaxed flex-grow">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
