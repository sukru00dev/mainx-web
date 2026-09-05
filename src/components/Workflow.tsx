"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

import { Coffee, Code2, Rocket, Search } from "lucide-react";

export default function Workflow() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Search,
      title: t("w1_title"),
      desc: t("w1_desc"),
    },
    {
      icon: Coffee,
      title: t("w2_title"),
      desc: t("w2_desc"),
    },
    {
      icon: Code2,
      title: t("w3_title"),
      desc: t("w3_desc"),
    },
    {
      icon: Rocket,
      title: t("w4_title"),
      desc: t("w4_desc"),
    }
  ];

  return (
    <section className="py-32 relative bg-background border-t border-border overflow-hidden">
      
      <div className="w-full px-6 lg:px-16 2xl:px-24 mx-auto max-w-[100rem] relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-semibold mb-4 block">
            {t("workflow_label")}
          </span>
          <h2 className="text-4xl md:text-5xl font-thin tracking-tight text-foreground">
            Fikirden Ürüne <span className="font-bold">4 Adım.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative p-8 rounded-[2rem] bg-foreground/[0.02] border border-border hover:bg-foreground/[0.04] transition-all group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">{step.title}</h3>
              <p className="text-foreground/60 leading-relaxed text-sm">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
