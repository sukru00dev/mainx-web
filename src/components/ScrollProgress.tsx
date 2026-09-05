"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[999] h-[3px] bg-transparent">
      <motion.div
        className="h-full bg-gradient-to-r from-primary via-amber-400 to-orange-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]"
        style={{ width: `${scrollProgress}%` }}
        transition={{ ease: "linear", duration: 0.05 }}
      />
    </div>
  );
}
