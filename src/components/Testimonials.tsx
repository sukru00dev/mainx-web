"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Sınav yönetim sistemindeki yapay zeka (MediaPipe) entegrasyonu kusursuzdu. Öğrencilerin başarı analizlerini tek ekranda görebilmemiz akademik süreçlerimizi inanılmaz hızlandırdı.",
    author: "Akademik Danışman",
    role: "Harran Üniversitesi",
    image: "https://ui-avatars.com/api/?name=Harran+Uni&background=0D8ABC&color=fff&size=100"
  },
  {
    quote: "Teknoloji eğitimlerindeki vizyonu, donanım (PIC/Assembly) ve yazılımı birleştirme yeteneği gerçekten üst düzey. Projelerde liderlik vasıflarını her zaman hissettiriyor.",
    author: "Eğitim Koordinatörü",
    role: "T3 Vakfı (Deneyap)",
    image: "https://ui-avatars.com/api/?name=T3+Vakfı&background=E53935&color=fff&size=100"
  },
  {
    quote: "Göl Lokantası için kurdukları dijital menü ve web altyapısı sayesinde operasyonel yükümüz %40 azaldı. Müşterilerimizin sisteme alışması sadece birkaç saat sürdü.",
    author: "İşletme Sahibi",
    role: "Göl Lokantası",
    image: "https://ui-avatars.com/api/?name=Gol+Lokantasi&background=43A047&color=fff&size=100"
  }
];

export default function Testimonials() {
  const { t } = useLanguage();
  return (
    <section className="py-32 relative bg-foreground/[0.02] border-t border-border">
      <div className="w-full px-6 lg:px-16 2xl:px-24 mx-auto max-w-[100rem]">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-semibold mb-4 block">
            {t("testimonials_label")}
          </span>
          <h2 className="text-4xl md:text-5xl font-thin tracking-tight text-foreground" dangerouslySetInnerHTML={{ __html: `${t("testimonials_title")} <span class="font-bold text-primary">${t("testimonials_title2")}</span>` }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="p-10 rounded-[2.5rem] bg-background border border-border relative hover:border-primary/30 hover:shadow-2xl transition-all duration-300 group flex flex-col"
            >
              <Quote className="w-12 h-12 text-primary/20 absolute top-8 right-8 rotate-180 group-hover:text-primary/40 transition-colors" />
              
              <p className="text-foreground/70 text-lg leading-relaxed mb-10 relative z-10 flex-grow italic">
                &quot;{testimonial.quote}&quot;
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-14 h-14 rounded-full border-2 border-border"
                />
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.author}</h4>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
