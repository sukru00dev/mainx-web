"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

import { motion, animate, useInView } from "framer-motion";

interface CounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

function AnimatedCounter({ target, suffix = "", prefix = "", duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, target, {
        duration,
        ease: "easeOut",
        onUpdate: (value) => {
          setCount(Math.floor(value));
        }
      });
      return () => controls.stop();
    }
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

export default function LiveCounter() {
  const { t } = useLanguage();

  const stats = [
    { label: t("counter_code"), target: 850, suffix: "K+", prefix: "", color: "text-blue-500", bg: "from-blue-500/10" },
    { label: t("counter_projects"), target: 140, suffix: "+", prefix: "", color: "text-primary", bg: "from-primary/10" },
    { label: t("counter_uptime"), target: 99, suffix: ".99%", prefix: "", color: "text-emerald-500", bg: "from-emerald-500/10" },
    { label: t("counter_clients"), target: 85, suffix: "+", prefix: "", color: "text-purple-500", bg: "from-purple-500/10" },
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
              <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color} tabular-nums`}>
                <AnimatedCounter target={stat.target} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <p className="text-foreground/60 text-sm font-medium">{stat.label}</p>
              <div className={`absolute -bottom-4 -right-4 w-20 h-20 rounded-full ${stat.bg} blur-2xl opacity-50 group-hover:opacity-100 transition-opacity`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
