"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon } from "lucide-react";

export default function TerminalCLI() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<{ command: string; output: React.ReactNode }[]>([
    { command: "", output: "MainX OS v6.0.0 başlatıldı.\nKullanılabilir komutları görmek için 'help' yazın." }
  ]);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const prevHistoryLength = useRef(history.length);

  useEffect(() => {
    if (history.length > prevHistoryLength.current) {
      endRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
    prevHistoryLength.current = history.length;
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    let output: React.ReactNode = "";

    switch (cmd) {
      case "help":
        output = "Kullanılabilir komutlar:\n- skills : Yetenekleri listeler\n- about  : MainX hakkında bilgi verir\n- clear  : Terminali temizler\n- mainx  : ??? (Gizli komut)";
        break;
      case "skills":
        output = "> React, Next.js, Node.js\n> Flutter, Dart\n> Python, AI, n8n\n> Go, Hyperledger Fabric\n> Assembly, PIC, Donanım";
        break;
      case "about":
        output = "MainX Stüdyoları, Şükrü BAŞ tarafından kurulan elit bir yazılım araştırma ve geliştirme (Dev House) merkezidir.";
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "mainx":
        output = "SİSTEM HACKLENDİ... BOOT SEQUENCE INITIATED.";
        window.dispatchEvent(new CustomEvent("trigger-matrix"));
        break;
      case "":
        output = "";
        break;
      default:
        output = `Command not found: ${cmd}. Type 'help' to see available commands.`;
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
    setInput("");
  };

  return (
    <section id="terminal-cli" className="py-24 relative bg-foreground/[0.02] border-y border-border">
      <div className="w-full px-6 lg:px-16 2xl:px-24 mx-auto max-w-[100rem]">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="lg:w-1/3">
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-semibold mb-4 block">
              Mühendislik Kültürü
            </span>
            <h2 className="text-4xl md:text-5xl font-thin tracking-tight mb-6 text-foreground">
              Sisteme <span className="font-bold">Bağlanın.</span>
            </h2>
            <p className="text-foreground/60 leading-relaxed">
              Bizim için yazılım sadece bir araç değil, bir yaşam tarzı. Terminal üzerinden bizimle etkileşime geçin ve yeteneklerimizi komut satırından keşfedin.
            </p>
          </div>

          <div className="lg:w-2/3 w-full">
            <div className="rounded-xl bg-[#0a0a0a] border border-[#333] overflow-hidden shadow-2xl font-mono text-sm">
              <div className="bg-[#1a1a1a] border-b border-[#333] px-4 py-3 flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-xs font-sans">
                  <TerminalIcon className="w-3 h-3" /> user@mainx-os: ~
                </div>
              </div>
              
              <div className="p-4 md:p-6 h-[300px] overflow-y-auto text-green-400 whitespace-pre-wrap" onClick={() => inputRef.current?.focus()}>
                {history.map((entry, i) => (
                  <div key={i} className="mb-4">
                    {entry.command && (
                      <div className="flex items-center gap-2 text-gray-300">
                        <span className="text-primary">➜</span> 
                        <span className="text-blue-400">~</span> 
                        {entry.command}
                      </div>
                    )}
                    <div className="mt-1 text-green-400">{entry.output}</div>
                  </div>
                ))}
                
                <form onSubmit={handleCommand} className="flex items-center gap-2 text-gray-300 mt-2">
                  <span className="text-primary">➜</span> 
                  <span className="text-blue-400">~</span>
                  <input 
                    ref={inputRef}
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none text-white font-mono"
                    spellCheck={false}
                    autoComplete="off"
                  />
                </form>
                <div ref={endRef} />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
