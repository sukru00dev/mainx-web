"use client";

import { useState } from "react";
import { Calculator, CheckCircle2, ChevronRight } from "lucide-react";
import Link from "next/link";

const options = [
  { id: "web", label: "Kurumsal Web Sitesi", priceMin: 20000, priceMax: 45000, time: 2 },
  { id: "saas", label: "B2B SaaS / Özel Panel", priceMin: 60000, priceMax: 150000, time: 6 },
  { id: "mobile", label: "Mobil Uygulama (Flutter)", priceMin: 75000, priceMax: 200000, time: 8 },
  { id: "ai", label: "Yapay Zeka (AI) Entegrasyonu", priceMin: 30000, priceMax: 80000, time: 3 },
  { id: "blockchain", label: "Blok Zinciri / Smart Contract", priceMin: 80000, priceMax: 250000, time: 10 },
  { id: "ecommerce", label: "İleri Düzey E-Ticaret", priceMin: 45000, priceMax: 90000, time: 4 },
];

export default function CostEstimator() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleOption = (id: string) => {
    setSelected(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const totalMin = selected.reduce((sum, id) => {
    return sum + (options.find(o => o.id === id)?.priceMin || 0);
  }, 0);

  const totalMax = selected.reduce((sum, id) => {
    return sum + (options.find(o => o.id === id)?.priceMax || 0);
  }, 0);

  const totalTime = selected.reduce((sum, id) => {
    return sum + (options.find(o => o.id === id)?.time || 0);
  }, 0);

  return (
    <section id="maliyet" className="py-32 relative bg-background/60 border-t border-border">
      <div className="w-full px-6 lg:px-16 2xl:px-24 mx-auto max-w-[100rem]">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-semibold mb-4 block flex items-center justify-center gap-2">
            <Calculator className="w-4 h-4" /> Proje Hesaplayıcı
          </span>
          <h2 className="text-4xl md:text-5xl font-thin tracking-tight text-foreground">
            Yatırımınızı <span className="font-bold">Öngörün.</span>
          </h2>
          <p className="text-foreground/50 mt-6 leading-relaxed">
            İhtiyacınız olan modülleri seçerek projenizin tahmini maliyetini ve teslim süresini anında görüntüleyin.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
            {options.map((opt) => {
              const isSelected = selected.includes(opt.id);
              return (
                <div 
                  key={opt.id}
                  onClick={() => toggleOption(opt.id)}
                  className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 flex items-center gap-4 ${
                    isSelected 
                      ? "bg-primary/10 border-primary/50 shadow-md" 
                      : "bg-foreground/[0.02] border-border hover:bg-foreground/[0.05]"
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${
                    isSelected ? "border-primary bg-primary text-primary-foreground" : "border-border"
                  }`}>
                    {isSelected && <CheckCircle2 className="w-4 h-4" />}
                  </div>
                  <span className={`font-medium ${isSelected ? "text-foreground" : "text-foreground/70"}`}>
                    {opt.label}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="w-full lg:w-1/3">
            <div className="sticky top-32 p-8 rounded-[2rem] bg-gradient-to-br from-foreground/[0.05] to-transparent border border-border backdrop-blur-xl">
              <h3 className="text-xl font-bold mb-6 pb-6 border-b border-border text-foreground">
                Tahmini Sonuç
              </h3>
              
              <div className="mb-6">
                <p className="text-sm text-foreground/50 mb-2">Tahmini Bütçe Aralığı</p>
                <div className="text-3xl font-bold text-primary">
                  {totalMin === 0 ? "₺0" : `₺${totalMin.toLocaleString("tr-TR")} - ₺${totalMax.toLocaleString("tr-TR")}`}
                </div>
              </div>

              <div className="mb-8">
                <p className="text-sm text-foreground/50 mb-2">Tahmini Teslim Süresi</p>
                <div className="text-2xl font-semibold text-foreground">
                  {totalTime === 0 ? "0 Hafta" : `${totalTime} - ${totalTime + 2} Hafta`}
                </div>
              </div>

              <button 
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new CustomEvent("open-wizard"));
                }}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                  selected.length > 0 
                    ? "bg-primary text-primary-foreground hover:scale-105 shadow-lg" 
                    : "bg-foreground/5 text-foreground/30 cursor-not-allowed pointer-events-none"
                }`}
              >
                Bu Projeyi Başlat <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
