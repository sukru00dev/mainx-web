"use client";

import { Building2, Code2, Cpu, Globe2, Lightbulb, Microscope, BookOpen, GraduationCap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";


const references1 = [
  { name: "Harran Üniversitesi", type: "Akademik Ar-Ge", icon: GraduationCap },
  { name: "Göl Lokantası", type: "Kurumsal Web", icon: Globe2 },
  { name: "T3 Vakfı (Deneyap)", type: "Teknoloji Eğitimi", icon: Lightbulb },
  { name: "Harran Yazılım", type: "Sistem Geliştirme", icon: Code2 },
  { name: "TÜBİTAK 2209-A", type: "Blok Zinciri", icon: Cpu },
  { name: "Şanlıurfa Teknokent", type: "Ar-Ge Merkezi", icon: Building2 },
];

const references2 = [
  { name: "HÜBTAM", type: "Bilimsel Araştırma", icon: Microscope },
  { name: "Param Cepte", type: "Fintech", icon: Globe2 },
  { name: "Siber Vatan", type: "Siber Güvenlik", icon: Code2 },
  { name: "Medium Tech Blog", type: "Akademik Yayın", icon: BookOpen },
  { name: "Ollama (Local AI)", type: "Yapay Zeka", icon: Cpu },
  { name: "Oracle Cloud ARM", type: "Sunucu & DevOps", icon: Building2 },
];

export default function ReferencesMarquee() {
  const { t } = useLanguage();
  const row1 = [...references1, ...references1, ...references1];
  const row2 = [...references2, ...references2, ...references2];

  return (
    <div className="py-20 relative bg-background border-t border-border overflow-hidden">
      
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10" />

      <div className="text-center mb-12">
        <p className="text-sm font-semibold tracking-widest text-foreground/40 uppercase">
          {t("ref_label")}
        </p>
      </div>

      <div className="flex flex-col gap-6">
        
        {/* Row 1 (Left to Right) */}
        <div className="flex w-[200%] sm:w-[150%] md:w-[100%] animate-marquee gap-6">
          {row1.map((ref, i) => (
            <div 
              key={i} 
              className="flex items-center gap-4 px-8 py-4 rounded-full bg-foreground/5 border border-border flex-shrink-0"
            >
              <ref.icon className="w-5 h-5 text-primary" />
              <div className="flex flex-col">
                <span className="font-bold text-foreground text-sm leading-tight">{ref.name}</span>
                <span className="text-xs text-foreground/40 font-medium">{ref.type}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 (Right to Left - Reverse Marquee) */}
        <div className="flex w-[200%] sm:w-[150%] md:w-[100%] animate-marquee-reverse gap-6">
          {row2.map((ref, i) => (
            <div 
              key={i} 
              className="flex items-center gap-4 px-8 py-4 rounded-full bg-foreground/5 border border-border flex-shrink-0"
            >
              <ref.icon className="w-5 h-5 text-primary" />
              <div className="flex flex-col">
                <span className="font-bold text-foreground text-sm leading-tight">{ref.name}</span>
                <span className="text-xs text-foreground/40 font-medium">{ref.type}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
