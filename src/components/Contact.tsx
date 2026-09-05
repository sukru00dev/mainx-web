"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

import { motion, AnimatePresence } from "framer-motion";
import { Send, Terminal, User, Bot, CheckCircle2 } from "lucide-react";

type Message = {
  id: string;
  sender: "bot" | "user";
  text: string;
  options?: string[];
};

export default function Contact() {
  const { t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "bot",
      text: t("contact_welcome"),
      options: [t("contact_q1"), t("contact_q2"), t("contact_q3")]
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const handleOptionClick = (optionText: string) => {
    if (optionText.includes("hello.mainx@gmail.com")) {
      window.location.href = "mailto:hello.mainx@gmail.com";
      return;
    }

    // Remove options from last message
    setMessages(prev => {
      const newMessages = [...prev];
      newMessages[newMessages.length - 1].options = [];
      return newMessages;
    });

    // Add user message
    const userMsgId = Date.now().toString();
    setMessages(prev => [...prev, { id: userMsgId, sender: "user", text: optionText }]);
    
    setIsTyping(true);

    // Bot response logic
    setTimeout(() => {
      setIsTyping(false);
      let botResponse: Message;

      if (optionText === t("contact_q1")) {
        botResponse = {
          id: Date.now().toString(),
          sender: "bot",
          text: "Harika! Projenizin ana odağı nedir?",
          options: ["Mobil Uygulama (Flutter)", "SaaS / Web Platformu", "Yapay Zeka (AI) Entegrasyonu", "Blok Zinciri (Web3)"]
        };
      } else if (optionText === t("contact_q2")) {
        botResponse = {
          id: Date.now().toString(),
          sender: "bot",
          text: "Uzmanlık alanlarımız Blok Zinciri, AI ve Sistem Mimarisi. Hangi konuda danışmanlık arıyorsunuz?",
          options: ["Sistem Ölçeklendirme", "Güvenlik & Ar-Ge", "Kod İncelemesi (Code Review)"]
        };
      } else if (optionText === t("contact_q3")) {
        botResponse = {
          id: Date.now().toString(),
          sender: "bot",
          text: "Merhaba! 👋 Tanıştığımıza çok sevindim. Bize doğrudan mail atarak kahve eşliğinde tanışma ayarlayabilirsiniz.",
          options: ["hello.mainx@gmail.com'a Mail At"]
        };
        setIsFinished(true);
      } else if (["Mobil Uygulama (Flutter)", "SaaS / Web Platformu", "Yapay Zeka (AI) Entegrasyonu", "Blok Zinciri (Web3)"].includes(optionText) || 
                 ["Sistem Ölçeklendirme", "Güvenlik & Ar-Ge", "Kod İncelemesi (Code Review)"].includes(optionText)) {
        botResponse = {
          id: Date.now().toString(),
          sender: "bot",
          text: "Mükemmel seçim! Son olarak bize projenizin bütçe aralığını belirtebilir misiniz?",
          options: ["$1K - $5K", "$5K - $10K", "$10K+ (Enterprise)"]
        };
      } else {
        botResponse = {
          id: Date.now().toString(),
          sender: "bot",
          text: "Bilgilerinizi aldık. Projeniz tam da uzmanlık alanımıza giriyor! Tüm detayları konuşmak için hemen randevu oluşturalım.",
          options: []
        };
        setIsFinished(true);
      }

      setMessages(prev => [...prev, botResponse]);
    }, 1200);
  };

  return (
    <section id="iletisim" className="py-32 relative bg-background overflow-hidden border-t border-border">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="w-full px-6 lg:px-16 2xl:px-24 mx-auto max-w-[100rem] relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-semibold mb-4 block">
              {t("contact_label")}
            </span>
            <h2 className="text-4xl md:text-5xl font-thin tracking-tight text-foreground mb-6">
              Sıradan Formları Unutun. <br />
              <span className="font-bold">Hemen Konuşalım.</span>
            </h2>
            <p className="text-foreground/50 leading-relaxed max-w-lg mb-8">
              Zamanınızın değerli olduğunu biliyoruz. Yüzlerce alan doldurmak yerine, akıllı asistanımızla 3 adımda projenizin taslağını oluşturun ve hemen aksiyon alalım.
            </p>
            
            <div className="flex items-center gap-4 text-sm font-medium text-foreground/70 bg-foreground/5 w-fit px-6 py-3 rounded-full border border-border">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Şükrü BAŞ şu an <span className="text-foreground">{t("contact_status")}</span>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="w-full h-[550px] bg-foreground/5 border border-border rounded-3xl p-6 flex flex-col shadow-2xl backdrop-blur-xl relative">
              
              {/* Chat Header */}
              <div className="flex items-center gap-4 pb-4 border-b border-border">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{t("contact_bot")}</h3>
                  <p className="text-xs text-emerald-500 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> {t("contact_online")}
                  </p>
                </div>
              </div>

              {/* Chat Body */}
              <div className="flex-1 overflow-y-auto py-6 flex flex-col gap-6 hide-scrollbar scroll-smooth">
                <AnimatePresence initial={false}>
                  {messages.map((msg) => (
                    <motion.div 
                      key={msg.id}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                        msg.sender === "user" 
                          ? "bg-primary text-primary-foreground rounded-tr-sm" 
                          : "bg-background border border-border text-foreground/80 rounded-tl-sm shadow-md"
                      }`}>
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}
                  
                  {isTyping && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="bg-background border border-border p-4 rounded-2xl rounded-tl-sm flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-foreground/30 animate-bounce" />
                        <span className="w-2 h-2 rounded-full bg-foreground/30 animate-bounce delay-100" />
                        <span className="w-2 h-2 rounded-full bg-foreground/30 animate-bounce delay-200" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Chat Footer / Options */}
              <div className="pt-4 border-t border-border flex flex-wrap gap-2">
                {messages[messages.length - 1]?.options?.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleOptionClick(opt)}
                    className="px-4 py-2 rounded-full bg-foreground/5 border border-border text-xs font-semibold text-foreground/80 hover:bg-primary/20 hover:text-primary hover:border-primary/30 transition-colors"
                  >
                    {opt}
                  </button>
                ))}
                
                {isFinished && (
                  <div className="w-full flex items-center justify-center p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-500 text-sm font-bold gap-2">
                    <CheckCircle2 className="w-5 h-5" /> Görüşme Kaydedildi. Teşekkürler!
                  </div>
                )}
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
