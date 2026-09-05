"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Section {
  id: string;
  label: string;
}

const sections: Section[] = [
  { id: "hero-section", label: "Giriş" },
  { id: "hakkimizda", label: "Hakkımızda" },
  { id: "terminal-cli", label: "Terminal" },
  { id: "urunler", label: "Ürünler" },
  { id: "maliyet", label: "Maliyet" },
  { id: "iletisim", label: "İletişim" }
];

export default function FloatingToC() {
  const [activeId, setActiveId] = useState<string>("hero-section");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px", // Trigger when element is near the middle of the screen
        threshold: 0
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-4">
      {sections.map(({ id, label }) => {
        const isActive = activeId === id;
        return (
          <div key={id} className="relative group flex items-center justify-end w-32">
            {/* Label - visible on hover or active */}
            <span 
              className={`absolute right-8 text-xs font-medium px-2 py-1 rounded-md transition-all duration-300 ${
                isActive 
                  ? "opacity-100 translate-x-0 text-primary bg-primary/10" 
                  : "opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-foreground/50 bg-foreground/5"
              }`}
            >
              {label}
            </span>
            
            {/* Dot */}
            <button
              onClick={() => handleClick(id)}
              className="w-8 h-8 flex items-center justify-center rounded-full"
              aria-label={label}
            >
              <div 
                className={`transition-all duration-300 rounded-full ${
                  isActive 
                    ? "w-3 h-3 bg-primary shadow-[0_0_10px_rgba(245,158,11,0.8)]" 
                    : "w-2 h-2 bg-foreground/20 group-hover:bg-foreground/50"
                }`}
              />
            </button>
          </div>
        );
      })}
    </div>
  );
}
