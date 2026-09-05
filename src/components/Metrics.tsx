"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Code2, Users, Server, ShieldCheck } from "lucide-react";

const MetricCard = ({ icon: Icon, value, suffix, title, delay }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="p-8 rounded-[2rem] bg-gradient-to-b from-foreground/[0.05] to-transparent border border-border relative overflow-hidden group hover:border-primary/30 transition-colors"
    >
      <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
        <Icon className="w-24 h-24 text-foreground" />
      </div>
      <Icon className="w-8 h-8 text-primary mb-6" />
      <div className="text-5xl font-bold text-foreground mb-2 tracking-tighter">
        {value}<span className="text-primary">{suffix}</span>
      </div>
      <p className="text-foreground/60 font-medium">{title}</p>
    </motion.div>
  );
};

export default function Metrics() {
  return (
    <section className="py-24 relative z-10 border-t border-border bg-background/60 backdrop-blur-3xl">
      <div className="w-full px-6 lg:px-16 2xl:px-24 mx-auto max-w-[100rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard icon={Code2} value="250" suffix="K+" title="Satır Temiz Kod (Clean Code)" delay={0.1} />
          <MetricCard icon={Users} value="15" suffix="+" title="Başarılı Kurumsal Proje" delay={0.2} />
          <MetricCard icon={Server} value="99.9" suffix="%" title="Sistem Uptime (Kesintisizlik)" delay={0.3} />
          <MetricCard icon={ShieldCheck} value="0" suffix="" title="Güvenlik & Veri İhlali" delay={0.4} />
        </div>
      </div>
    </section>
  );
}
