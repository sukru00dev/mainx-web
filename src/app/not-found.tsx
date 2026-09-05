"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Terminal, Frown } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-mono"
        >
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          ERROR: 404 — PAGE_NOT_FOUND
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-mono text-[10rem] md:text-[14rem] font-bold leading-none text-foreground/5 select-none"
        >
          404
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="-mt-8 mb-6"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Bir Yerlerde Kaybolundu.
          </h1>
          <p className="text-foreground/50 text-lg leading-relaxed">
            Aradığınız sayfa taşındı, silindi ya da hiç var olmadı. <br />
            Yazılım hatası değil — bu seferlik insan hatası. 🙂
          </p>
        </motion.div>

        {/* Terminal block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-10 p-4 rounded-2xl bg-[#0a0a0a] border border-[#333] text-left font-mono text-sm text-green-400"
        >
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#333]">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-2 text-gray-500 text-xs">mainx-os:~</span>
          </div>
          <p><span className="text-primary">➜</span> <span className="text-blue-400">~</span> cd {typeof window !== "undefined" ? window.location.pathname : "/????"}</p>
          <p className="text-red-400">bash: {typeof window !== "undefined" ? window.location.pathname : "/????"}: No such file or directory</p>
          <p className="mt-2"><span className="text-primary">➜</span> <span className="text-blue-400">~</span> cd / <span className="animate-pulse">_</span></p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/"
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:scale-105 transition-transform shadow-[0_0_30px_rgba(245,158,11,0.3)]"
          >
            <Home className="w-5 h-5" /> Ana Sayfaya Dön
          </Link>
          <Link
            href="/#iletisim"
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-foreground/5 border border-border text-foreground font-bold hover:bg-foreground/10 transition-colors"
          >
            <Terminal className="w-5 h-5" /> İletişime Geç
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
