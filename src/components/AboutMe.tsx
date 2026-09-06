"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

import { Terminal, Database, Shield, Smartphone, Download } from "lucide-react";
import Image from "next/image";

export default function AboutMe() {
  const { t } = useLanguage();
  const skills = [
    { icon: Terminal, name: "Web / SaaS Mimarisi", color: "text-blue-500" },
    { icon: Smartphone, name: "Mobil Geliştirme (Flutter)", color: "text-cyan-400" },
    { icon: Shield, name: "Yapay Zeka (Ollama/n8n)", color: "text-purple-500" },
    { icon: Database, name: "Veritabanı & Cloud (AWS)", color: "text-emerald-500" },
  ];

  return (
    <section id="hakkimizda" className="py-32 relative bg-background overflow-hidden border-t border-border">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="w-full px-6 lg:px-16 2xl:px-24 mx-auto max-w-[100rem] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Column: Image / Graphic */}
          <div className="w-full lg:w-5/12 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[3rem] overflow-hidden bg-foreground/5 border border-border group"
            >
              {/* Fallback pattern if image is missing */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,var(--primary)_2px,transparent_2px)] bg-[size:24px_24px]" />
              
              {/* User Photo: Drop your photo named "profile.jpg" into the public folder */}
              <Image
                src="/profile.jpg" 
                alt="Şükrü BAŞ MainX Stüdyoları Kurucusu"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 z-10 opacity-80 group-hover:opacity-100"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-20 pointer-events-none" />
              
              <div className="absolute bottom-10 left-10 right-10 p-6 rounded-3xl bg-background/80 backdrop-blur-md border border-border z-30">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <p className="font-mono text-sm text-foreground/80">root@mainx:~# status<br/><span className="text-primary">building_the_future.exe</span></p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full lg:w-7/12">
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-semibold mb-4 block">
              {t("about_label")}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-thin tracking-tight mb-8 text-foreground">
              {t("about_title1")} <span className="font-bold">{t("about_title2")}</span><br />
              {t("about_title3")}
            </h2>
            
            <div className="space-y-6 text-lg text-foreground/60 leading-relaxed font-light mb-12 max-w-2xl">
              <p>
                {t("about_p1")}
              </p>
              <p>
                {t("about_p2")}
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mb-10">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-foreground/5 border border-border hover:border-primary/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center group-hover:scale-110 transition-transform">
                    <skill.icon className={`w-5 h-5 ${skill.color}`} />
                  </div>
                  <span className="font-semibold text-sm text-foreground/90">{skill.name}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(245,158,11,0.3)]"
              >
                <Download className="w-4 h-4" /> {t("about_downloadCV")}
              </a>
              <a
                href="/#iletisim"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground/5 border border-border text-foreground font-semibold hover:bg-foreground/10 transition-colors"
              >
                {t("about_contact")}
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
