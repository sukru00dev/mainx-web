"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Check, ArrowRight, RotateCcw } from "lucide-react";

/* ═══════════════════════════════════════════════════════════════════
   CONFIGURATION — Buradan kolayca düzenleyebilirsiniz
   ═══════════════════════════════════════════════════════════════════ */

const CONTACT_EMAIL = "mainxstudyolari@gmail.com";

const SECTORS = [
  { value: "restaurant", label: "Restoran & Kafe", emoji: "🍽️" },
  { value: "ecommerce", label: "E-Ticaret", emoji: "🛒" },
  { value: "corporate", label: "Kurumsal Şirket", emoji: "🏢" },
  { value: "portfolio", label: "Kişisel Portfolyo", emoji: "💼" },
  { value: "health", label: "Sağlık & Klinik", emoji: "🏥" },
];

const COLORS = [
  { value: "dark", label: "Profesyonel Koyu", emoji: "🌑" },
  { value: "vibrant", label: "Enerjik Canlı", emoji: "🔥" },
  { value: "minimal", label: "Minimal Beyaz", emoji: "⚪" },
  { value: "luxury", label: "Lüks Altın", emoji: "✨" },
];

const FEATURE_OPTIONS = [
  { value: "menu", label: "Online Menü / Ürünler" },
  { value: "booking", label: "Randevu / Rezervasyon" },
  { value: "gallery", label: "Fotoğraf Galerisi" },
  { value: "blog", label: "Blog Yazıları" },
  { value: "payment", label: "Online Ödeme" },
  { value: "contact", label: "İletişim Formu" },
];

const THEMES: Record<string, { bg: string; text: string; accent: string; card: string; nav: string }> = {
  dark:    { bg: "#0f172a", text: "#e2e8f0", accent: "#3b82f6", card: "#1e293b", nav: "#020617" },
  vibrant: { bg: "#fff7ed", text: "#1c1917", accent: "#ea580c", card: "#ffffff", nav: "#ea580c" },
  minimal: { bg: "#ffffff", text: "#374151", accent: "#111827", card: "#f3f4f6", nav: "#ffffff" },
  luxury:  { bg: "#0a0a0a", text: "#fef3c7", accent: "#d97706", card: "#171717", nav: "#000000" },
};

const SECTOR_CONTENT: Record<string, { name: string; hero: string; sub: string }> = {
  restaurant: { name: "Lezzet Durağı",    hero: "Eşsiz Lezzetler, Unutulmaz Anlar", sub: "En taze malzemeler, en özel tarifler" },
  ecommerce:  { name: "Premium Mağaza",   hero: "Yeni Sezon Koleksiyonu",           sub: "Hızlı teslimat, güvenli ödeme" },
  corporate:  { name: "Kurumsal Çözümler", hero: "Güvenilir İş Ortağınız",           sub: "Sektörün lider çözüm ortağı" },
  portfolio:  { name: "Tasarım Stüdyosu", hero: "Yaratıcı Çalışmalar",              sub: "Markanızı hayata geçiriyoruz" },
  health:     { name: "Sağlık Merkezi",   hero: "Sağlığınız Bizim Önceliğimiz",     sub: "Uzman kadro, modern hizmet" },
};

/* ═══════════════════════════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════════════════════════ */

type Step = "idle" | "sector" | "color" | "features" | "preview" | "contact" | "done";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
}

/* ═══════════════════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════════════════ */

export default function DesignAssistant() {
  /* ── State ── */
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>("idle");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const [sector, setSector] = useState("");
  const [sectorLabel, setSectorLabel] = useState("");
  const [colorTheme, setColorTheme] = useState("");
  const [colorLabel, setColorLabel] = useState("");
  const [features, setFeatures] = useState<string[]>([]);
  const [form, setForm] = useState({ name: "", phone: "", email: "" });

  const [showTooltip, setShowTooltip] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  /* ── Effects ── */

  // Show tooltip after 3 seconds to attract attention
  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll to newest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, step]);

  /* ── Helpers ── */

  const pushMessages = (msgs: Array<{ sender: "bot" | "user"; text: string }>) => {
    setMessages((prev) => [
      ...prev,
      ...msgs.map((m, i) => ({ ...m, id: `${Date.now()}-${i}` })),
    ]);
  };

  const botSay = (texts: string[], nextStep: Step, delay = 700) => {
    setIsTyping(true);
    setTimeout(() => {
      pushMessages(texts.map((t) => ({ sender: "bot", text: t })));
      setIsTyping(false);
      setStep(nextStep);
    }, delay);
  };

  /* ── Handlers ── */

  const openChat = () => {
    setIsOpen(true);
    setShowTooltip(false);
    if (step === "idle") {
      botSay(
        [
          "Merhaba! 👋 Ben MainX Tasarım Asistanı.",
          "Size özel bir web sitesi taslağı oluşturacağım. Öncelikle, hangi sektör için bir site istiyorsunuz?",
        ],
        "sector",
        600,
      );
    }
  };

  const pickSector = (val: string, lbl: string) => {
    setSector(val);
    setSectorLabel(lbl);
    pushMessages([{ sender: "user", text: lbl }]);
    botSay(["Harika seçim! 🎨 Şimdi sitenizin renk temasını belirleyelim:"], "color");
  };

  const pickColor = (val: string, lbl: string) => {
    setColorTheme(val);
    setColorLabel(lbl);
    pushMessages([{ sender: "user", text: lbl }]);
    botSay(
      ["Çok şık! ✨ Son olarak, sitenizde hangi özellikler bulunsun? (Birden fazla seçebilirsiniz)"],
      "features",
    );
  };

  const toggleFeature = (val: string) => {
    setFeatures((prev) =>
      prev.includes(val) ? prev.filter((f) => f !== val) : [...prev, val],
    );
  };

  const confirmFeatures = () => {
    const labels = FEATURE_OPTIONS.filter((f) => features.includes(f.value)).map((f) => f.label);
    pushMessages([{ sender: "user", text: labels.join(", ") }]);
    botSay(["İşte size özel tasarım taslağınız! 🎉"], "preview");
  };

  const requestContact = () => {
    botSay(
      [
        "Beğendiyseniz bilgilerinizi bırakın, Şükrü Bey en kısa sürede sizinle iletişime geçsin! 📞",
      ],
      "contact",
    );
  };

  const submitLead = () => {
    if (!form.name.trim() || !form.phone.trim()) return;

    pushMessages([{ sender: "user", text: `${form.name} — ${form.phone}` }]);

    const featureLabels = FEATURE_OPTIONS.filter((f) => features.includes(f.value))
      .map((f) => f.label)
      .join(", ");

    const summary = [
      "=== YENİ TASARIM TALEBİ ===",
      "",
      `Müşteri: ${form.name}`,
      `Telefon: ${form.phone}`,
      `E-posta: ${form.email || "Belirtilmedi"}`,
      "",
      `Sektör: ${sectorLabel}`,
      `Renk Teması: ${colorLabel}`,
      `İstenen Özellikler: ${featureLabels}`,
    ].join("\n");

    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      "Yeni Tasarım Talebi — " + form.name,
    )}&body=${encodeURIComponent(summary)}`;
    window.open(mailtoLink, "_blank");

    botSay(
      [
        "Teşekkürler! 🎉 Tasarım taslağınız ve bilgileriniz iletildi.",
        "En kısa sürede sizinle iletişime geçeceğiz. MainX Stüdyoları'nı tercih ettiğiniz için teşekkür ederiz! 🚀",
      ],
      "done",
    );
  };

  const resetChat = () => {
    setMessages([]);
    setSector("");
    setSectorLabel("");
    setColorTheme("");
    setColorLabel("");
    setFeatures([]);
    setForm({ name: "", phone: "", email: "" });
    setStep("idle");
    setTimeout(() => {
      botSay(
        [
          "Tekrar merhaba! 👋 Yeni bir tasarım oluşturalım.",
          "Hangi sektör için bir web sitesi istiyorsunuz?",
        ],
        "sector",
        400,
      );
    }, 100);
  };

  /* ── Preview Renderer ── */

  const renderPreview = () => {
    const t = THEMES[colorTheme] || THEMES.dark;
    const s = SECTOR_CONTENT[sector] || SECTOR_CONTENT.corporate;
    const activeFeats = FEATURE_OPTIONS.filter((f) => features.includes(f.value));
    const isLightNav = colorTheme === "vibrant";
    const isLightBg = colorTheme === "minimal" || colorTheme === "vibrant";

    return (
      <div
        style={{
          borderRadius: 12,
          overflow: "hidden",
          border: `1px solid ${t.accent}30`,
          boxShadow: `0 4px 24px ${t.accent}15`,
        }}
      >
        {/* ── Navbar ── */}
        <div
          style={{
            background: t.nav,
            padding: "8px 14px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: `1px solid ${t.accent}30`,
          }}
        >
          <span
            style={{
              color: isLightNav ? "#fff" : t.accent,
              fontWeight: 800,
              fontSize: 12,
            }}
          >
            {s.name}
          </span>
          <div style={{ display: "flex", gap: 10 }}>
            {["Anasayfa", "Hakkımızda", "İletişim"].map((nav) => (
              <span
                key={nav}
                style={{
                  color: isLightNav ? "#ffffffcc" : `${t.text}88`,
                  fontSize: 7,
                  fontWeight: 500,
                }}
              >
                {nav}
              </span>
            ))}
          </div>
        </div>

        {/* ── Hero ── */}
        <div
          style={{
            background: t.bg,
            padding: "30px 16px 22px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              color: t.accent,
              fontSize: 16,
              fontWeight: 800,
              marginBottom: 6,
              letterSpacing: -0.5,
            }}
          >
            {s.hero}
          </div>
          <div style={{ color: `${t.text}99`, fontSize: 9, marginBottom: 14 }}>
            {s.sub}
          </div>
          <span
            style={{
              display: "inline-block",
              background: t.accent,
              color: isLightBg ? "#fff" : t.bg,
              padding: "5px 16px",
              borderRadius: 6,
              fontSize: 8,
              fontWeight: 700,
              letterSpacing: 0.3,
            }}
          >
            Keşfet →
          </span>
        </div>

        {/* ── Feature Cards ── */}
        {activeFeats.length > 0 && (
          <div style={{ background: t.card, padding: "10px 10px 12px" }}>
            <div
              style={{
                color: t.text,
                fontSize: 9,
                fontWeight: 700,
                marginBottom: 8,
                textAlign: "center",
                letterSpacing: 0.5,
                textTransform: "uppercase" as const,
              }}
            >
              Hizmetlerimiz
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${Math.min(activeFeats.length, 3)}, 1fr)`,
                gap: 5,
              }}
            >
              {activeFeats.map((f) => (
                <div
                  key={f.value}
                  style={{
                    background: t.bg,
                    borderRadius: 8,
                    padding: "8px 4px",
                    textAlign: "center",
                    border: `1px solid ${t.accent}20`,
                  }}
                >
                  <span style={{ color: t.text, fontSize: 7, fontWeight: 600 }}>
                    {f.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Footer ── */}
        <div
          style={{
            background: t.nav,
            padding: "7px 12px",
            textAlign: "center",
            borderTop: `1px solid ${t.accent}20`,
          }}
        >
          <span
            style={{
              color: isLightNav ? "#ffffff80" : `${t.text}50`,
              fontSize: 6,
            }}
          >
            © 2024 {s.name} — MainX Stüdyoları tarafından tasarlandı
          </span>
        </div>
      </div>
    );
  };

  /* ═══════════════════════════════════════════════════════════════════
     RENDER
     ═══════════════════════════════════════════════════════════════════ */

  return (
    <>
      {/* ────────────────── Floating Button ────────────────── */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3">
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="hidden sm:block bg-white text-black text-xs font-bold px-4 py-2.5 rounded-2xl shadow-lg whitespace-nowrap"
              >
                Ücretsiz Tasarım Al ✨
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            onClick={openChat}
            className="relative w-16 h-16 rounded-full bg-primary text-black flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.4)] cursor-pointer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping pointer-events-none" />
            <MessageCircle className="w-7 h-7 relative z-10" />
          </motion.button>
        </div>
      )}

      {/* ────────────────── Chat Window ────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 z-[9999] w-full sm:w-[400px] rounded-t-[1.5rem] sm:rounded-[1.5rem] bg-[#0a0a0a] border border-white/10 shadow-2xl flex flex-col"
            style={{ maxHeight: "85vh" }}
          >
            {/* ── Header ── */}
            <div className="px-5 py-4 bg-gradient-to-r from-primary/20 to-transparent border-b border-white/10 flex items-center justify-between shrink-0 rounded-t-[1.5rem]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">
                    MainX Tasarım Asistanı
                  </div>
                  <div className="text-[11px] text-green-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                    Çevrimiçi
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Kapat"
              >
                <X className="w-4 h-4 text-white/60" />
              </button>
            </div>

            {/* ── Messages ── */}
            <div
              className="flex-1 overflow-y-auto p-4 space-y-3"
              style={{ minHeight: 0 }}
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-2.5 text-[13px] leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-primary text-black rounded-2xl rounded-br-sm font-medium"
                        : "bg-white/[0.06] text-white/90 rounded-2xl rounded-bl-sm border border-white/[0.06]"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/[0.06] border border-white/[0.06] px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1.5">
                    <span
                      className="w-2 h-2 bg-white/40 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <span
                      className="w-2 h-2 bg-white/40 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <span
                      className="w-2 h-2 bg-white/40 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              )}

              {/* ── Step: Sector ── */}
              {step === "sector" && !isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-wrap gap-2 pt-1"
                >
                  {SECTORS.map((s) => (
                    <button
                      key={s.value}
                      onClick={() => pickSector(s.value, s.label)}
                      className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 text-white/80 text-[13px] transition-all cursor-pointer"
                    >
                      {s.emoji} {s.label}
                    </button>
                  ))}
                </motion.div>
              )}

              {/* ── Step: Color ── */}
              {step === "color" && !isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-wrap gap-2 pt-1"
                >
                  {COLORS.map((c) => (
                    <button
                      key={c.value}
                      onClick={() => pickColor(c.value, c.label)}
                      className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 text-white/80 text-[13px] transition-all cursor-pointer"
                    >
                      {c.emoji} {c.label}
                    </button>
                  ))}
                </motion.div>
              )}

              {/* ── Step: Features ── */}
              {step === "features" && !isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-3 pt-1"
                >
                  <div className="flex flex-wrap gap-2">
                    {FEATURE_OPTIONS.map((f) => (
                      <button
                        key={f.value}
                        onClick={() => toggleFeature(f.value)}
                        className={`px-3 py-2 rounded-xl text-[13px] transition-all cursor-pointer flex items-center gap-1.5 ${
                          features.includes(f.value)
                            ? "bg-primary/20 border border-primary/50 text-primary"
                            : "bg-white/5 border border-white/10 text-white/70 hover:border-white/20"
                        }`}
                      >
                        {features.includes(f.value) && (
                          <Check className="w-3.5 h-3.5" />
                        )}
                        {f.label}
                      </button>
                    ))}
                  </div>
                  {features.length > 0 && (
                    <button
                      onClick={confirmFeatures}
                      className="w-full py-2.5 rounded-xl bg-primary text-black font-bold text-[13px] transition-all cursor-pointer flex items-center justify-center gap-2 hover:opacity-90"
                    >
                      Devam Et ({features.length} seçildi){" "}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </motion.div>
              )}

              {/* ── Step: Preview ── */}
              {step === "preview" && !isTyping && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-3 pt-1"
                >
                  {renderPreview()}
                  <button
                    onClick={requestContact}
                    className="w-full py-2.5 rounded-xl bg-primary text-black font-bold text-[13px] transition-all cursor-pointer flex items-center justify-center gap-2 hover:opacity-90"
                  >
                    Bu Tasarımı İstiyorum! 🚀
                  </button>
                </motion.div>
              )}

              {/* ── Step: Contact Form ── */}
              {step === "contact" && !isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-2.5 pt-1"
                >
                  <input
                    type="text"
                    placeholder="Adınız Soyadınız *"
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, name: e.target.value }))
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-[13px] placeholder:text-white/30 outline-none focus:border-primary/50 transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Telefon Numaranız *"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, phone: e.target.value }))
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-[13px] placeholder:text-white/30 outline-none focus:border-primary/50 transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="E-posta Adresiniz (opsiyonel)"
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-[13px] placeholder:text-white/30 outline-none focus:border-primary/50 transition-colors"
                  />
                  <button
                    onClick={submitLead}
                    disabled={!form.name.trim() || !form.phone.trim()}
                    className="w-full py-2.5 rounded-xl bg-primary text-black font-bold text-[13px] transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:opacity-90"
                  >
                    <Send className="w-4 h-4" /> Tasarımı Gönder
                  </button>
                </motion.div>
              )}

              {/* ── Step: Done ── */}
              {step === "done" && !isTyping && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-4 space-y-4"
                >
                  <div className="text-5xl">🎉</div>
                  <div className="text-white/50 text-sm">
                    Talebiniz başarıyla iletildi!
                  </div>
                  <button
                    onClick={resetChat}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/60 text-xs hover:border-primary/30 hover:text-white transition-all cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Yeni Tasarım Başlat
                  </button>
                </motion.div>
              )}

              {/* Scroll anchor */}
              <div ref={chatEndRef} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
