"use client";

import { motion } from "framer-motion";
import { User, Code, Blocks, Zap } from "lucide-react";

export default function HybridAbout() {
  return (
    <section id="hakkimizda" className="py-24 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-full bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-sm mb-6 font-medium">
              <User className="w-4 h-4" />
              <span>Yazılım Mühendisliği Disiplini</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Kurumsal Bir Ajansın Gücü, <br />
              <span className="text-muted-foreground">Bir Mühendisin Vizyonu.</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              <strong>MainX Stüdyoları</strong>, sadece hazır şablonlarla web siteleri kuran bir ajans değil; 
              temelinden son kullanıcı deneyimine kadar yazılım mühendisliği prensipleriyle hareket eden bir dijital laboratuvardır.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Yazılım Mühendisi <span className="text-foreground font-semibold">Şükrü BAŞ</span> liderliğinde, 
              yapay zeka destekli sınavlardan, bulut tabanlı tarımsal maliyet sistemlerine ve fintech uygulamalarına kadar 
              geniş bir ekosistem inşa ediyoruz.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <Code className="w-8 h-8 text-primary mb-2" />
                <h4 className="font-bold text-lg">Temiz Kod</h4>
                <p className="text-sm text-muted-foreground">Sürdürülebilir ve ölçeklenebilir mimari.</p>
              </div>
              <div className="flex flex-col gap-2">
                <Zap className="w-8 h-8 text-secondary mb-2" />
                <h4 className="font-bold text-lg">Yüksek Performans</h4>
                <p className="text-sm text-muted-foreground">Hız odaklı modern frameworkler.</p>
              </div>
            </div>
          </motion.div>

          {/* Visual/Tech Stack Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/3] rounded-3xl bg-muted/50 border border-border p-8 relative overflow-hidden flex flex-col justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              
              <div className="relative z-10 grid grid-cols-2 gap-4">
                {[
                  "React & Next.js",
                  "React Native",
                  "Tailwind CSS",
                  "TypeScript",
                  "Python & AI",
                  "Node.js",
                ].map((tech, index) => (
                  <div key={index} className="px-4 py-3 rounded-xl bg-background/50 border border-border/50 backdrop-blur-sm text-center font-medium shadow-sm hover:border-primary/50 hover:bg-background transition-colors">
                    {tech}
                  </div>
                ))}
              </div>

              <div className="relative z-10 mt-8 p-6 rounded-2xl bg-background border border-border shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                    ŞB
                  </div>
                  <div>
                    <h5 className="font-bold">Şükrü BAŞ</h5>
                    <p className="text-sm text-muted-foreground">Kurucu & Yazılım Mühendisi</p>
                  </div>
                </div>
                <p className="text-sm italic text-muted-foreground">
                  "Kod, sadece çalışan bir metin değil; kurumların dijital varlığını ayakta tutan en sağlam temeldir."
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
