"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

import { PenTool, Code2, Box, Cloud, ArrowRight } from "lucide-react";

export default function Architecture() {
  const { t } = useLanguage();

  const steps = [
    {
      id: "01",
      title: t("arch1_title"),
      desc: "Figma & UML",
      icon: PenTool,
      color: "from-pink-500/20 to-pink-500/5",
      border: "border-pink-500/30",
      text: "text-pink-500"
    },
    {
      id: "02",
      title: t("arch2_title"),
      desc: "React & Node.js",
      icon: Code2,
      color: "from-blue-500/20 to-blue-500/5",
      border: "border-blue-500/30",
      text: "text-blue-500"
    },
    {
      id: "03",
      title: t("arch3_title"),
      desc: "Docker & CI/CD",
      icon: Box,
      color: "from-emerald-500/20 to-emerald-500/5",
      border: "border-emerald-500/30",
      text: "text-emerald-500"
    },
    {
      id: "04",
      title: t("arch4_title"),
      desc: "AWS / Sunucu",
      icon: Cloud,
      color: "from-amber-500/20 to-amber-500/5",
      border: "border-amber-500/30",
      text: "text-amber-500"
    }
  ];

  return (
    <section className="py-32 relative bg-background">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:14px_24px] opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="w-full px-6 lg:px-16 2xl:px-24 mx-auto max-w-[100rem] relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-semibold mb-4 block">
            {t("arch_label")}
          </span>
          <h2 className="text-4xl md:text-5xl font-thin tracking-tight text-foreground">
            Sadece Kod Değil, <span className="font-bold">Ölçeklenebilir Sistemler.</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 relative">
          
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 z-0" />
          
          <motion.div 
            animate={{ left: ["0%", "100%"], opacity: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="hidden lg:block absolute top-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent -translate-y-1/2 z-0 shadow-[0_0_15px_rgba(245,158,11,1)]" 
          />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center w-full lg:w-64"
            >
              <div className={`w-full p-8 rounded-[2rem] bg-gradient-to-b ${step.color} border ${step.border} backdrop-blur-xl shadow-lg flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300 bg-background/50`}>
                <div className="absolute top-4 left-4 text-[10px] font-bold text-foreground/30 tracking-widest">
                  PHASE {step.id}
                </div>
                
                <div className={`w-16 h-16 rounded-2xl bg-background border border-border flex items-center justify-center mb-6 mt-4 shadow-sm group-hover:scale-110 transition-transform`}>
                  <step.icon className={`w-8 h-8 ${step.text}`} />
                </div>
                
                <h3 className="font-bold text-lg text-foreground mb-2">{step.title}</h3>
                <p className="text-foreground/50 text-sm font-medium">{step.desc}</p>
              </div>

              {index < steps.length - 1 && (
                <ArrowRight className="w-8 h-8 text-foreground/20 my-6 rotate-90 lg:hidden" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
