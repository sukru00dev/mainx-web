"use client";

import { motion } from "framer-motion";
import { PlayCircle, ExternalLink } from "lucide-react";
import { FaYoutube, FaInstagram } from "react-icons/fa";

const videos = [
  {
    title: "Sınav Yönetim Sistemi - AI Entegrasyonu",
    desc: "Python ve MediaPipe ile geliştirilen optik kağıt okuma sisteminin donanım testi.",
    url: "https://www.youtube.com/embed/RNAjrT8wHmQ?autoplay=1&mute=1&loop=1&playlist=RNAjrT8wHmQ&controls=0",
    platform: "youtube"
  },
  {
    title: "Gömülü Sistemler (PIC16F84A) - Yangın Kontrol",
    desc: "Assembly ile programlanmış donanım seviyesi yangın sensörü simülasyonu.",
    url: "https://www.youtube.com/embed/3yJWDzN-Z4A?autoplay=1&mute=1&loop=1&playlist=3yJWDzN-Z4A&controls=0",
    platform: "youtube"
  }
];

export default function SocialWall() {
  return (
    <section className="py-32 relative bg-background border-t border-border overflow-hidden">
      <div className="w-full px-6 lg:px-16 2xl:px-24 mx-auto max-w-[100rem]">
        
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-semibold mb-4 block">
            Medya & İçerikler
          </span>
          <h2 className="text-4xl md:text-5xl font-thin tracking-tight text-foreground">
            Sektörel <span className="font-bold">Eğitimler.</span>
          </h2>
          <p className="text-foreground/50 mt-6 leading-relaxed">
            YouTube ve sosyal medyada paylaştığımız teknik vizyon videoları ve eğitim kesitleri.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {videos.map((video, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group p-6 rounded-[2rem] bg-foreground/5 border border-border hover:border-primary/30 transition-all flex flex-col"
            >
              <div className="w-full aspect-video rounded-xl overflow-hidden bg-background mb-6 relative border border-border">
                <iframe
                  width="100%"
                  height="100%"
                  src={video.url}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0"
                />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
                  <FaYoutube className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="font-bold text-lg text-foreground">{video.title}</h3>
              </div>
              <p className="text-foreground/60 text-sm leading-relaxed">{video.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Instagram Iframes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] overflow-hidden bg-background border border-border p-4 flex justify-center"
          >
            <iframe 
              src="https://www.instagram.com/p/DaLtCJ8DP94/embed" 
              width="320" 
              height="450" 
              frameBorder="0" 
              scrolling="no" 
              className="rounded-xl max-w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-[2rem] overflow-hidden bg-background border border-border p-4 flex justify-center hidden md:flex"
          >
            <iframe 
              src="https://www.instagram.com/p/DaLrztBDNqN/embed" 
              width="320" 
              height="450" 
              frameBorder="0" 
              scrolling="no" 
              className="rounded-xl max-w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-[2rem] overflow-hidden bg-background border border-border p-4 flex justify-center hidden lg:flex"
          >
            <iframe 
              src="https://www.instagram.com/reel/DaiDJl5sfMP/embed" 
              width="320" 
              height="450" 
              frameBorder="0" 
              scrolling="no" 
              className="rounded-xl max-w-full"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
