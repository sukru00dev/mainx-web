"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

import { motion, AnimatePresence } from "framer-motion";
import { 
  Smartphone, Globe, Server, Database, MonitorPlay, Link as LinkIcon, X, CheckCircle2, Workflow, AlertCircle
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Param Cepte",
    description: "Kişisel finans ve dijital abonelik takip uygulaması. Çevrimdışı öncelikli (offline-first) Hive NoSQL veritabanı ile geliştirildi. Google Play'de yayında.",
    challenge: "Kullanıcıların internet bağlantısı olmadan da anlık finansal veri girişi yapabilmesi ve verilerin güvenli bir şekilde cihazda saklanması gerekiyordu.",
    solution: "Flutter mimarisi üzerinde Hive NoSQL kullanılarak 'Offline-First' bir yapı kuruldu. Bu sayede uygulama %100 çevrimdışı çalışırken, senkronizasyon yeteneğine de sahip oldu.",
    tech: ["Flutter", "Dart", "Hive NoSQL", "Mobile"],
    link: "https://play.google.com/store/apps/details?id=com.paramcepte.app",
    github: null,
    icon: Smartphone,
    color: "from-blue-500/20 to-cyan-500/5"
  },
  {
    title: "AI Agent Factory",
    description: "Otonom yapay zeka ajanları ve iş akışı orkestrasyonu. n8n ile süreç yönetimi ve Ollama (qwen2.5) entegrasyonu sağlandı. Oracle Cloud ARM üzerinde barındırılıyor.",
    challenge: "Birden fazla LLM modelinin aynı anda çalışıp, şirket içi iş süreçlerini dışarıya veri sızdırmadan (Private AI) otonom şekilde yönetmesi gerekiyordu.",
    solution: "Kendi sunucularımızda (Oracle ARM) çalışan Ollama (qwen2.5) modelleri kurularak, n8n üzerinden Webhook ve otomasyon senaryoları (LangChain benzeri) kurgulandı.",
    tech: ["n8n", "Ollama", "Docker", "DevOps", "AI"],
    link: null,
    github: null,
    icon: Server,
    color: "from-purple-500/20 to-pink-500/5"
  },
  {
    title: "Blok Zinciri Diploma Sistemi",
    description: "TÜBİTAK 2209-A projesi kapsamında akademik belgeleri doğrulamak için gizlilik odaklı DApp. Hyperledger Fabric kullanılarak hibrit mimari tasarlandı.",
    challenge: "Üniversite diplomalarının sahteciliğini önlerken, öğrencilerin KVKK kapsamında gizliliklerinin halka açık bir blok zincirinde ifşa edilmemesi.",
    solution: "Hyperledger Fabric kurumsal (Permissioned) blok zinciri ağı kullanılarak, sadece yetkili kurumların veriye erişebildiği, Go ile yazılmış özel Chaincode (Smart Contract) yapısı kuruldu.",
    tech: ["Hyperledger", "Go", "React.js", "Blockchain"],
    link: null,
    github: null,
    icon: Database,
    color: "from-green-500/20 to-emerald-500/5"
  },
  {
    title: "Tarımsal SaaS Dashboard",
    description: "Tarımsal maliyet ve yönetim analizlerini sunan bulut tabanlı SaaS paneli. Mikroservis mimarisi ile kurum içi süreç optimizasyonu.",
    challenge: "Büyük miktarda tarımsal verinin eşzamanlı ve performanslı bir şekilde görselleştirilmesi.",
    solution: "React.js tabanlı performanslı bir SPA geliştirildi. Özel Chart kütüphaneleri kullanılarak maliyet optimizasyonu analizleri anlık olarak sunuldu.",
    tech: ["React", "Node.js", "Dashboard"],
    link: "http://140.245.7.158:5000/",
    github: null,
    icon: Globe,
    color: "from-amber-500/20 to-yellow-500/5"
  },
  {
    title: "Yangın Kontrol Sistemi",
    description: "PIC16F84A mikrodenetleyicisi üzerinde çalışan Assembly tabanlı donanım simülasyonu. Sensör verilerini okuyarak alarm sistemlerini tetikler.",
    challenge: "Düşük seviyeli donanımlarda kesinti (interrupt) yönetiminin optimize edilmesi.",
    solution: "Assembly dili ile doğrudan register seviyesinde kodlama yapılarak sıfır gecikmeli bir alarm tetikleme mekanizması Proteus üzerinde başarıyla simüle edildi.",
    tech: ["Assembly", "PIC", "Proteus", "Hardware"],
    link: "https://www.youtube.com/watch?v=3yJWDzN-Z4A",
    github: null,
    icon: MonitorPlay,
    color: "from-red-500/20 to-orange-500/5"
  },
  {
    title: "Sınav Yönetim Sistemi",
    description: "Yapay zeka (MediaPipe) entegre edilerek geliştirilen akademik sınav analiz platformu.",
    challenge: "Sınav kağıtlarının ve akademik verilerin makine öğrenimi modelleri tarafından optik olarak tanınması.",
    solution: "MediaPipe ve Python kullanılarak özel görüntü işleme algoritmaları geliştirildi, böylece optik formlar milisaniyeler içinde doğrulandı.",
    tech: ["Python", "MediaPipe", "AI", "Education"],
    link: "https://www.youtube.com/watch?v=RNAjrT8wHmQ",
    github: null,
    icon: MonitorPlay,
    color: "from-indigo-500/20 to-blue-500/5"
  }
];

export default function ProductsShowcase() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <>
      <section id="urunler" className="py-32 bg-background relative border-t border-border">
        <div className="w-full px-6 lg:px-16 2xl:px-24 mx-auto max-w-[100rem]">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-semibold mb-4 block">
              {t("products_label")}
            </span>
            <h2 className="text-4xl md:text-5xl font-thin tracking-tight text-foreground">
              Geliştirdiğimiz <span className="font-bold">Dijital Ürünler.</span>
            </h2>
            <p className="text-foreground/50 mt-6 leading-relaxed">
              {t("products_desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-[2.5rem] bg-foreground/5 border border-border p-10 hover:border-primary/30 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col"
              >
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${project.color} rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 rounded-2xl bg-background border border-border flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                    <project.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4">{project.title}</h3>
                  <p className="text-foreground/60 leading-relaxed mb-8 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-4 py-2 rounded-full bg-background border border-border text-xs font-semibold text-foreground/70 shadow-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background border border-border rounded-3xl p-8 md:p-12 shadow-2xl"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 bg-foreground/5 rounded-full hover:bg-foreground/10 text-foreground/50 hover:text-foreground transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="w-20 h-20 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8">
                <selectedProject.icon className="w-10 h-10 text-primary" />
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">{selectedProject.title}</h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tech.map((t, i) => (
                  <span key={i} className="px-4 py-2 rounded-full bg-foreground/5 border border-border text-sm font-semibold text-foreground/70">
                    {t}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-red-500" /> {t("products_challenge")}
                  </h3>
                  <p className="text-foreground/60 leading-relaxed bg-foreground/5 p-6 rounded-2xl border border-border">
                    {selectedProject.challenge}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" /> {t("products_solution")}
                  </h3>
                  <p className="text-foreground/60 leading-relaxed bg-primary/5 p-6 rounded-2xl border border-primary/10">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              <div className="mt-12 flex items-center gap-4 border-t border-border pt-8">
                {selectedProject.link && (
                  <a href={selectedProject.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold hover:scale-105 transition-transform">
                    <LinkIcon className="w-5 h-5" /> {t("products_view")}
                  </a>
                )}
                {selectedProject.github && (
                  <a href={selectedProject.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-foreground/10 text-foreground font-bold hover:bg-foreground/20 transition-colors">
                    <FaGithub className="w-5 h-5" /> {t("products_source")}
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}


