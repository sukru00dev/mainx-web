"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

import { Sparkles, ChevronRight, ArrowRight, Code2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Globe from "./Globe";

export default function Hero() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  
  // Parallax Setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 400 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Background layers move in opposite directions
  const bgX = useTransform(smoothX, [-0.5, 0.5], [20, -20]);
  const bgY = useTransform(smoothY, [-0.5, 0.5], [20, -20]);

  // Foreground layers move faster
  const fgX = useTransform(smoothX, [-0.5, 0.5], [-30, 30]);
  const fgY = useTransform(smoothY, [-0.5, 0.5], [-30, 30]);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = e.clientX / innerWidth - 0.5;
      const y = e.clientY / innerHeight - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="hero-section" className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Floating 3D-like Orbs (Parallax Layer 1) */}
      <motion.div 
        style={{ x: bgX, y: bgY }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"
      />
      <motion.div 
        style={{ x: bgX, y: bgY }}
        className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-blue-500/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none"
      />

      <motion.div 
        style={{ x: fgX, y: fgY }}
        className="relative z-10 w-full px-6 lg:px-16 2xl:px-24 mx-auto max-w-[100rem] pt-20"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Text Content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-thin tracking-tight mb-8 leading-[1.1] text-foreground"
            >
              {t("hero_title1")} <br />
              <span className="font-bold text-primary">
                {t("hero_title2")}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-foreground/60 mb-12 max-w-2xl leading-relaxed font-light"
            >
              {t("hero_desc")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <Link 
                href="#iletisim"
                className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-primary px-8 font-medium text-white transition-all hover:scale-105 shadow-[0_0_40px_rgba(245,158,11,0.4)]"
              >
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
                  <div className="relative h-full w-8 bg-white/20" />
                </div>
                <span className="flex items-center gap-2 font-bold text-base">
                  {t("hero_cta1")} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link 
                href="/katalog"
                className="group flex h-14 items-center justify-center gap-2 rounded-full border border-border bg-foreground/5 px-8 font-medium text-foreground transition-all hover:bg-foreground/10 hover:border-foreground/20"
              >
                <Code2 className="w-5 h-5 text-foreground/50 group-hover:text-primary transition-colors" />
                {t("hero_cta2")}
              </Link>
            </motion.div>
          </div>

          {/* Right 3D Globe Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex-1 w-full relative"
          >
            {/* The Globe component */}
            <Globe />
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
