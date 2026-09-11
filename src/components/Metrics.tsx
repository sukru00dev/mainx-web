"use client";

import { motion } from "framer-motion";
import { Code2, ShieldCheck, Server, Layers } from "lucide-react";

interface MetricCardProps {
  icon: React.ElementType;
  title: string;
  desc: string;
  delay: number;
}

const MetricCard = ({ icon: Icon, title, desc, delay }: MetricCardProps) => {
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
      <div className="text-2xl font-bold text-foreground mb-3 tracking-tighter">
        {title}
      </div>
      <p className="text-foreground/60 font-medium leading-relaxed">{desc}</p>
    </motion.div>
  );
};

export default function Metrics() {
  return (
    <section className="py-24 relative z-10 border-t border-border bg-background/60 backdrop-blur-3xl">
      <div className="w-full px-6 lg:px-16 2xl:px-24 mx-auto max-w-[100rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard icon={Code2} title="Temiz Kod Mimarisi" desc="Uluslararası standartlara uygun, bakımı kolay ve modüler yazılım geliştirme." delay={0.1} />
          <MetricCard icon={Layers} title="Ölçeklenebilir Sistemler" desc="Gelecekteki trafik artışlarına dayanıklı dağıtık sistem (Distributed) tasarımları." delay={0.2} />
          <MetricCard icon={Server} title="Uçtan Uca DevOps" desc="Otomatik test ve deployment (CI/CD) hatları ile kesintisiz ürün teslimatı." delay={0.3} />
          <MetricCard icon={ShieldCheck} title="Güvenlik & Gizlilik" desc="KVKK uyumlu, şifrelenmiş veri tabanları ve zero-trust güvenlik felsefesi." delay={0.4} />
        </div>
      </div>
    </section>
  );
}
