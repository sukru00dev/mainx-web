"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ArrowLeft, CheckCircle2, MonitorSmartphone, Code2, Cpu, Rocket } from "lucide-react";

const steps = [
  { id: 1, title: "Nasıl bir hizmet arıyorsunuz?" },
  { id: 2, title: "Mevcut altyapınız / durumunuz nedir?" },
  { id: 3, title: "Hedeflenen Bütçe & Süre" },
  { id: 4, title: "İletişim Bilgileri" },
];

export default function OnboardingWizard() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    serviceType: "",
    infrastructure: "",
    budget: "",
    email: "",
    name: ""
  });

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setCurrentStep(1);
      setIsCompleted(false);
    };
    window.addEventListener("open-wizard", handleOpen);
    return () => window.removeEventListener("open-wizard", handleOpen);
  }, []);

  if (!isOpen) return null;

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Submit via mailto
      const subject = encodeURIComponent(`Yeni Proje Talebi: ${formData.serviceType || "Belirtilmedi"}`);
      const body = encodeURIComponent(`
Merhaba,

Sitenizdeki form aracılığıyla yeni bir proje talebi oluşturdum:

Ad Soyad: ${formData.name || "Belirtilmedi"}
E-Posta: ${formData.email || "Belirtilmedi"}

Hizmet Türü: ${formData.serviceType || "Belirtilmedi"}
Mevcut Altyapı: ${formData.infrastructure || "Belirtilmedi"}
Hedeflenen Bütçe: ${formData.budget || "Belirtilmedi"}

Lütfen benimle iletişime geçin.
      `);
      
      window.location.href = `mailto:hello.mainx@gmail.com?subject=${subject}&body=${body}`;

      setIsCompleted(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSelect = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-md"
        onClick={() => setIsOpen(false)}
      />

      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative z-10 w-full max-w-2xl bg-background border border-border rounded-[2rem] shadow-2xl overflow-hidden flex flex-col"
        style={{ maxHeight: '90vh' }}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-orange-500 to-amber-500" />
        
        {/* Header */}
        <div className="p-6 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Rocket className="w-5 h-5 text-primary" />
            <span className="font-bold text-foreground">Proje Başlat</span>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-foreground/50 hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress */}
        {!isCompleted && (
          <div className="px-8 pt-8">
            <div className="flex justify-between mb-2">
              <span className="text-xs font-bold text-primary">Adım {currentStep} / {steps.length}</span>
              <span className="text-xs text-foreground/50">{steps[currentStep-1].title}</span>
            </div>
            <div className="w-full h-2 rounded-full bg-foreground/10 overflow-hidden">
              <motion.div 
                className="h-full bg-primary"
                initial={{ width: `${((currentStep - 1) / steps.length) * 100}%` }}
                animate={{ width: `${(currentStep / steps.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-8 flex-1 overflow-y-auto">
          <AnimatePresence mode="wait">
            {isCompleted ? (
              <motion.div 
                key="completed"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Talebiniz Alındı!</h3>
                <p className="text-foreground/60 max-w-sm">
                  Proje detaylarınızı inceleyip en kısa sürede sizinle iletişime geçeceğiz. MainX Stüdyoları'nı seçtiğiniz için teşekkürler.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  {steps[currentStep - 1].title}
                </h2>

                {currentStep === 1 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { id: "saas", icon: MonitorSmartphone, title: "SaaS / Özel Yazılım", desc: "Sıfırdan bulut tabanlı bir sistem." },
                      { id: "mobile", icon: MonitorSmartphone, title: "Mobil Uygulama", desc: "iOS ve Android tabanlı mobil app." },
                      { id: "ai", icon: Cpu, title: "Yapay Zeka Entegrasyonu", desc: "AI botlar, otonom ajanlar vb." },
                      { id: "other", icon: Code2, title: "Diğer / Danışmanlık", desc: "Farklı bir dijital çözüm." },
                    ].map(opt => (
                      <button
                        key={opt.id}
                        onClick={() => handleSelect("serviceType", opt.id)}
                        className={`p-4 rounded-xl border text-left transition-all ${
                          formData.serviceType === opt.id 
                            ? "bg-primary/10 border-primary shadow-sm" 
                            : "bg-foreground/5 border-border hover:border-primary/50"
                        }`}
                      >
                        <opt.icon className={`w-6 h-6 mb-3 ${formData.serviceType === opt.id ? "text-primary" : "text-foreground/50"}`} />
                        <h4 className="font-bold text-sm mb-1">{opt.title}</h4>
                        <p className="text-xs text-foreground/50">{opt.desc}</p>
                      </button>
                    ))}
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-3">
                    {[
                      "Sıfırdan başlıyoruz, sadece bir fikrimiz var.",
                      "Mevcut bir sistemimiz var, iyileştirmek istiyoruz.",
                      "Tamamen yeni bir teknolojiye geçiş (Migration) yapacağız.",
                      "Sadece spesifik bir modül ekletmek istiyoruz."
                    ].map(opt => (
                      <button
                        key={opt}
                        onClick={() => handleSelect("infrastructure", opt)}
                        className={`w-full p-4 rounded-xl border text-left transition-all ${
                          formData.infrastructure === opt 
                            ? "bg-primary/10 border-primary text-primary font-medium" 
                            : "bg-foreground/5 border-border hover:bg-foreground/10 text-foreground/70"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm font-bold mb-3">Tahmini Bütçe Aralığı</p>
                      <div className="grid grid-cols-2 gap-3">
                        {["< 50.000 ₺", "50.000 ₺ - 150.000 ₺", "150.000 ₺ - 500.000 ₺", "500.000 ₺ +"].map(opt => (
                          <button
                            key={opt}
                            onClick={() => handleSelect("budget", opt)}
                            className={`p-3 rounded-xl border text-center transition-all ${
                              formData.budget === opt 
                                ? "bg-primary border-primary text-black font-bold" 
                                : "bg-foreground/5 border-border text-foreground/70 hover:border-primary/50"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 4 && (
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-bold text-foreground/70 mb-1 block">Adınız Soyadınız <span className="text-red-500">*</span></label>
                      <input 
                        type="text" 
                        value={formData.name}
                        onChange={(e) => handleSelect("name", e.target.value)}
                        className="w-full p-4 rounded-xl bg-foreground/5 border border-border focus:border-primary outline-none transition-colors"
                        placeholder="Örn: Şükrü Baş"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-bold text-foreground/70 mb-1 block">E-Posta Adresiniz <span className="text-red-500">*</span></label>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => handleSelect("email", e.target.value)}
                        className="w-full p-4 rounded-xl bg-foreground/5 border border-border focus:border-primary outline-none transition-colors"
                        placeholder="Örn: ornek@sirket.com"
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Actions */}
        {!isCompleted && (
          <div className="p-6 border-t border-border flex items-center justify-between bg-foreground/[0.02]">
            <button
              onClick={handlePrev}
              disabled={currentStep === 1}
              className="px-6 py-3 rounded-xl font-medium flex items-center gap-2 text-foreground/70 hover:bg-foreground/5 transition-colors disabled:opacity-30 disabled:pointer-events-none"
            >
              <ArrowLeft className="w-4 h-4" /> Geri
            </button>
            <button
              onClick={handleNext}
              disabled={currentStep === steps.length && (!formData.name.trim() || !formData.email.trim())}
              className="px-8 py-3 rounded-xl bg-primary text-black font-bold flex items-center gap-2 hover:scale-105 transition-transform disabled:opacity-50 disabled:pointer-events-none disabled:hover:scale-100"
            >
              {currentStep === steps.length ? "Gönder" : "Devam Et"} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
