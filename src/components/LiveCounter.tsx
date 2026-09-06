"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Code2, Blocks, Server, CheckCircle } from "lucide-react";

export default function LiveCounter() {
  const { t } = useLanguage();

  const stats = [
    { label: t("counter_code"), icon: Code2, title: "Modern Teknoloji Stack", color: "text-blue-500", bg: "from-blue-500/10" },
    { label: t("counter_projects"), icon: Blocks, title: "Proje Odaklı Geliştirme", color: "text-primary", bg: "from-primary/10" },
    { label: t("counter_uptime"), icon: Server, title: "Yüksek Performans", color: "text-emerald-500", bg: "from-emerald-500/10" },
    { label: t("counter_clients"), icon: CheckCircle, title: "Uçtan Uca Çözüm", color: "text-purple-500", bg: "from-purple-500/10" },
  ];

  return (
    <section className="py-16 relative bg-background/60 backdrop-blur-3xl border-t border-border">
      <div className="w-full px-6 lg:px-16 2xl:px-24 mx-auto max-w-[100rem]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-6 md:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br ${stat.bg} to-transparent border border-border overflow-hidden group hover:scale-[1.02] transition-transform`}
            >
              <div className={`mb-4 ${stat.color}`}>
                <stat.icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{stat.title}</h3>
              <p className="text-foreground/60 text-sm font-medium">{stat.label}</p>
              <div className={`absolute -bottom-4 -right-4 w-20 h-20 rounded-full ${stat.bg} blur-2xl opacity-50 group-hover:opacity-100 transition-opacity`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
