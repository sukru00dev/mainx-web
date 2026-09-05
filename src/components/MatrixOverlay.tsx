"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootSequence = [
  "Initializing MainX Kernel v6.0.0...",
  "Loading core modules... [OK]",
  "Mounting virtual file systems... [OK]",
  "Starting network interfaces... [OK]",
  "Establishing secure connection to mainframe... [OK]",
  "Bypassing security protocols (Auth: BAŞ)... [ACCESS GRANTED]",
  "Loading developer profile...",
  " ",
  "==================================================",
  "    ███╗   ███╗ █████╗ ██╗███╗   ██╗██╗  ██╗      ",
  "    ████╗ ████║██╔══██╗██║████╗  ██║╚██╗██╔╝      ",
  "    ██╔████╔██║███████║██║██╔██╗ ██║ ╚███╔╝       ",
  "    ██║╚██╔╝██║██╔══██║██║██║╚██╗██║ ██╔██╗       ",
  "    ██║ ╚═╝ ██║██║  ██║██║██║ ╚████║██╔╝ ██╗      ",
  "    ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝      ",
  "==================================================",
  " ",
  "> IDENT: Şükrü BAŞ",
  "> ROLE:  Full-Stack Software Engineer & AI Researcher",
  "> ORG:   MainX Stüdyoları",
  "> STAT:  System Operational. Ready to build.",
  " ",
  "System successfully booted. Connection established."
];

export default function MatrixOverlay() {
  const [active, setActive] = useState(false);
  const [lines, setLines] = useState<string[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const handleTrigger = () => {
      setActive(true);
      setLines([]);
      let currentLine = 0;
      
      const interval = setInterval(() => {
        if (currentLine < bootSequence.length) {
          setLines(prev => [...prev, bootSequence[currentLine]]);
          currentLine++;
        } else {
          clearInterval(interval);
          setTimeout(() => setActive(false), 5000);
        }
      }, 100);
    };

    window.addEventListener("trigger-matrix", handleTrigger);
    
    let keys = "";
    const handleKeydown = (e: KeyboardEvent) => {
      keys += e.key.toLowerCase();
      if (keys.length > 5) keys = keys.slice(-5);
      if (keys === "mainx") {
        handleTrigger();
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("trigger-matrix", handleTrigger);
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  // Matrix Rain Canvas Effect
  useEffect(() => {
    if (!active || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~";
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#0F0";
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 30);
    return () => clearInterval(interval);
  }, [active]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Layer 1: Matrix Rain Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full bg-black" />
      
      {/* Layer 2: CRT Scanline Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] z-10" />
      
      {/* Layer 3: Floating Terminal Box */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative z-20 w-full max-w-4xl bg-black/80 border border-green-500/30 p-8 rounded-xl shadow-[0_0_50px_rgba(0,255,0,0.2)] backdrop-blur-md overflow-hidden font-mono text-green-500"
      >
        {/* Terminal Header */}
        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-green-500/20">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-4 text-xs tracking-widest text-green-500/50">root@mainx-mainframe:~</span>
        </div>

        <div className="flex flex-col justify-center min-h-[400px]">
          {lines.map((line, i) => (
            <div key={i} className="whitespace-pre-wrap leading-relaxed text-sm md:text-base">
              {line}
            </div>
          ))}
          {lines.length < bootSequence.length && (
            <div className="w-3 h-5 bg-green-500 animate-pulse mt-1" />
          )}
        </div>
      </motion.div>
    </div>
  );
}
