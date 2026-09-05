"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, ExternalLink, Shield } from "lucide-react";

export default function AcademicRD() {
  return (
    <section className="py-32 relative overflow-hidden bg-foreground/[0.02] border-t border-border">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="w-full px-6 lg:px-16 2xl:px-24 mx-auto max-w-[100rem] relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-semibold mb-4 block">
              Akademi & Ar-Ge
            </span>
            <h2 className="text-4xl md:text-5xl font-thin tracking-tight text-foreground">
              Sadece Kod Değil, <br />
              <span className="font-bold">Mühendislik Araştırması.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[2.5rem] bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 hover:border-blue-500/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-8 border border-blue-500/20">
                <GraduationCap className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-foreground">TÜBİTAK 2209-A (Ar-Ge Projesi)</h3>
              <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                <strong>Blok Zinciri Tabanlı Diploma Doğrulama Sistemi:</strong> Akademik belgelerin sahteciliğini önlemek amacıyla, 
                Hyperledger Fabric kullanılarak tasarlanan, "Gizlilik Odaklı (Privacy-Preserving)" hibrit blok zinciri mimarisi.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-600 dark:text-blue-300 text-sm font-semibold border border-blue-500/30">
                Onaylandı & Geliştiriliyor
              </span>
              <span className="px-4 py-2 rounded-full bg-foreground/5 text-foreground/70 text-sm font-semibold border border-border">
                Go (Chaincode)
              </span>
            </div>
          </motion.div>

          <div className="flex flex-col gap-8">
            <motion.a
              href="https://medium.com/@sukrubas/blockchaine-giri%C5%9F-sadece-kripto-para-de%C4%9Fil-bir-m%C3%BChendislik-paradigmas%C4%B1-d60cd7d5b71f"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-[2rem] bg-background border border-border hover:bg-foreground/5 transition-all group flex items-start gap-6 shadow-sm"
            >
              <div className="w-14 h-14 rounded-2xl bg-foreground/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 flex items-center gap-2 text-foreground">
                  Akademik Makale / Yayın <ExternalLink className="w-4 h-4 opacity-50" />
                </h4>
                <p className="text-foreground/60 leading-relaxed text-sm">
                  "Blockchain'e Giriş: Sadece Kripto Para Değil, Bir Mühendislik Paradigması" — Medium üzerinden yayınlanan teknik mimari incelemesi.
                </p>
              </div>
            </motion.a>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 h-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-8 rounded-[2rem] bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/20"
              >
                <Award className="w-8 h-8 text-red-500 mb-6" />
                <h4 className="text-lg font-bold mb-2 text-foreground">T3 Vakfı Eğitmeni</h4>
                <p className="text-foreground/60 text-sm">Deneyap Teknoloji Atölyelerinde gelecek nesil mühendislere donanım ve yazılım eğitimleri.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="p-8 rounded-[2rem] bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20"
              >
                <Shield className="w-8 h-8 text-emerald-500 mb-6" />
                <h4 className="text-lg font-bold mb-2 text-foreground">Siber Vatan</h4>
                <p className="text-foreground/60 text-sm">Ulusal siber güvenlik ve kritik altyapı savunma teknolojileri eğitimi katılımcısı.</p>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
