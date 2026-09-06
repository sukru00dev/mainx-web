"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle, X, Send, Check, ArrowRight, RotateCcw, Eye,
  Phone, Mail, MapPin, Clock, Star, ChevronRight, Menu, Users, Zap, Shield,
  Image as ImageIcon, CalendarCheck, CreditCard, BookOpen, MessageSquare,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════════════
   CONFIGURATION
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
  { value: "menu", label: "Online Menü / Ürünler", icon: Menu },
  { value: "booking", label: "Randevu / Rezervasyon", icon: CalendarCheck },
  { value: "gallery", label: "Fotoğraf Galerisi", icon: ImageIcon },
  { value: "blog", label: "Blog Yazıları", icon: BookOpen },
  { value: "payment", label: "Online Ödeme", icon: CreditCard },
  { value: "contact", label: "İletişim Formu", icon: MessageSquare },
];

interface ThemeColors {
  bg: string; text: string; accent: string; card: string; nav: string;
  heroBg: string; heroOverlay: string; gradientFrom: string; gradientTo: string;
  btnText: string; mutedText: string; border: string;
}

const THEMES: Record<string, ThemeColors> = {
  dark: {
    bg: "#0f172a", text: "#e2e8f0", accent: "#3b82f6", card: "#1e293b", nav: "#020617",
    heroBg: "linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #1e3a5f 100%)",
    heroOverlay: "radial-gradient(ellipse at 30% 50%, #3b82f620 0%, transparent 70%)",
    gradientFrom: "#3b82f6", gradientTo: "#8b5cf6", btnText: "#fff",
    mutedText: "#94a3b8", border: "#334155",
  },
  vibrant: {
    bg: "#fff7ed", text: "#1c1917", accent: "#ea580c", card: "#ffffff", nav: "#ea580c",
    heroBg: "linear-gradient(135deg, #ea580c 0%, #dc2626 50%, #f97316 100%)",
    heroOverlay: "radial-gradient(ellipse at 70% 30%, #fbbf2440 0%, transparent 70%)",
    gradientFrom: "#ea580c", gradientTo: "#dc2626", btnText: "#fff",
    mutedText: "#78716c", border: "#e7e5e4",
  },
  minimal: {
    bg: "#ffffff", text: "#111827", accent: "#111827", card: "#f9fafb", nav: "#ffffff",
    heroBg: "linear-gradient(135deg, #f9fafb 0%, #ffffff 50%, #f3f4f6 100%)",
    heroOverlay: "radial-gradient(ellipse at 50% 50%, #6366f108 0%, transparent 70%)",
    gradientFrom: "#111827", gradientTo: "#374151", btnText: "#fff",
    mutedText: "#6b7280", border: "#e5e7eb",
  },
  luxury: {
    bg: "#0a0a0a", text: "#fef3c7", accent: "#d97706", card: "#171717", nav: "#000000",
    heroBg: "linear-gradient(135deg, #0a0a0a 0%, #1c1917 50%, #292524 100%)",
    heroOverlay: "radial-gradient(ellipse at 40% 40%, #d9770620 0%, transparent 60%)",
    gradientFrom: "#d97706", gradientTo: "#b45309", btnText: "#000",
    mutedText: "#a8a29e", border: "#292524",
  },
};

interface SectorInfo {
  name: string; hero: string; sub: string; aboutTitle: string; aboutText: string;
  stats: Array<{ num: string; label: string }>;
  testimonial: { text: string; author: string; role: string };
}

const SECTOR_CONTENT: Record<string, SectorInfo> = {
  restaurant: {
    name: "Lezzet Durağı",
    hero: "Eşsiz Lezzetler,\nUnutulmaz Anlar",
    sub: "En taze malzemelerle hazırlanan özel tariflerimizi keşfedin. Her lokmada tutku, her tabakta sanat.",
    aboutTitle: "Hikayemiz",
    aboutText: "2010 yılından bu yana misafirlerimize en kaliteli lezzetleri sunuyoruz. Şeflerimizin özenle hazırladığı menümüz, yerel ve mevsimsel malzemelerle zenginleştirilmektedir.",
    stats: [{ num: "14+", label: "Yıllık Deneyim" }, { num: "50+", label: "Özel Tarif" }, { num: "10K+", label: "Mutlu Misafir" }],
    testimonial: { text: "Şehirdeki en iyi restoran deneyimini burada yaşadım. Atmosfer ve lezzetler mükemmeldi!", author: "Ayşe K.", role: "Düzenli Müşteri" },
  },
  ecommerce: {
    name: "Premium Mağaza",
    hero: "Yeni Sezon\nKoleksiyonu",
    sub: "En trend ürünleri keşfedin. Hızlı kargo, kolay iade ve %100 güvenli ödeme garantisi.",
    aboutTitle: "Neden Biz?",
    aboutText: "Yüzlerce marka, binlerce ürün ve sınırsız alışveriş keyfi. Kaliteli ürünleri uygun fiyatlarla buluşturuyoruz.",
    stats: [{ num: "5K+", label: "Ürün" }, { num: "24 Saat", label: "Kargo" }, { num: "100%", label: "Güvenli Ödeme" }],
    testimonial: { text: "Ürün kalitesi ve teslimat hızı beklentimin çok üstündeydi. Kesinlikle tavsiye ediyorum.", author: "Mehmet D.", role: "Doğrulanmış Alıcı" },
  },
  corporate: {
    name: "Kurumsal Çözümler",
    hero: "Güvenilir\nİş Ortağınız",
    sub: "20 yılı aşkın deneyimimizle sektörün lider çözüm ortağıyız. Geleceğe birlikte yürüyelim.",
    aboutTitle: "Vizyonumuz",
    aboutText: "Müşterilerimizin iş süreçlerini dijitalleştirerek verimliliklerini artırmayı hedefliyoruz. Yenilikçi ve sürdürülebilir çözümler üretiyoruz.",
    stats: [{ num: "20+", label: "Yıllık Deneyim" }, { num: "200+", label: "Tamamlanan Proje" }, { num: "98%", label: "Müşteri Memnuniyeti" }],
    testimonial: { text: "Profesyonel yaklaşımları ve çözüm odaklı çalışmaları ile fark yaratıyorlar.", author: "Canan Y.", role: "CEO, TechCorp" },
  },
  portfolio: {
    name: "Tasarım Stüdyosu",
    hero: "Yaratıcı\nÇalışmalar",
    sub: "Markanızı hayata geçiriyoruz. Modern tasarım ve güçlü teknoloji ile dijital varlığınızı oluşturuyoruz.",
    aboutTitle: "Hakkımda",
    aboutText: "Tasarım ve teknoloji tutkusuyla projeler üretiyor, markaların dijital dünyada fark yaratmasını sağlıyorum.",
    stats: [{ num: "50+", label: "Proje" }, { num: "30+", label: "Mutlu Müşteri" }, { num: "5", label: "Yıl Deneyim" }],
    testimonial: { text: "Web sitemizi tam istediğimiz gibi tasarladı. Profesyonel ve hızlı çalışması bizi çok memnun etti.", author: "Kemal T.", role: "İşletme Sahibi" },
  },
  health: {
    name: "Sağlık Merkezi",
    hero: "Sağlığınız Bizim\nÖnceliğimiz",
    sub: "Alanında uzman kadromuz ve modern cihazlarımızla size en iyi sağlık hizmetini sunuyoruz.",
    aboutTitle: "Hakkımızda",
    aboutText: "Hastalarımızın sağlığını ön planda tutarak, en güncel tedavi yöntemlerini uyguluyoruz. Güler yüzlü ekibimizle yanınızdayız.",
    stats: [{ num: "15+", label: "Uzman Doktor" }, { num: "50K+", label: "Tedavi Edilen Hasta" }, { num: "7/24", label: "Acil Hizmet" }],
    testimonial: { text: "Doktorların ilgisi ve kliniğin temizliği gerçekten üst düzeydi. Herkese tavsiye ederim.", author: "Fatma S.", role: "Hasta" },
  },
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
  const [showFullPreview, setShowFullPreview] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, step]);

  // Lock body scroll when full preview is open
  useEffect(() => {
    if (showFullPreview) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [showFullPreview]);

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
    botSay(["Tasarım taslağınız hazır! 🎉 Aşağıdaki butona tıklayarak önizlemeyi görebilirsiniz."], "preview");
  };

  const requestContact = () => {
    setShowFullPreview(false);
    botSay(
      ["Harika! Bilgilerinizi bırakın, Şükrü Bey en kısa sürede sizinle iletişime geçsin! 📞"],
      "contact",
    );
  };

  const submitLead = () => {
    if (!form.name.trim() || !form.phone.trim()) return;
    pushMessages([{ sender: "user", text: `${form.name} — ${form.phone}` }]);

    const featureLabels = FEATURE_OPTIONS.filter((f) => features.includes(f.value))
      .map((f) => f.label).join(", ");

    const summary = [
      "=== YENİ TASARIM TALEBİ ===", "",
      `Müşteri: ${form.name}`, `Telefon: ${form.phone}`,
      `E-posta: ${form.email || "Belirtilmedi"}`, "",
      `Sektör: ${sectorLabel}`, `Renk Teması: ${colorLabel}`,
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
    setMessages([]); setSector(""); setSectorLabel(""); setColorTheme("");
    setColorLabel(""); setFeatures([]); setForm({ name: "", phone: "", email: "" });
    setStep("idle"); setShowFullPreview(false);
    setTimeout(() => {
      botSay(["Tekrar merhaba! 👋 Yeni bir tasarım oluşturalım.", "Hangi sektör için bir web sitesi istiyorsunuz?"], "sector", 400);
    }, 100);
  };

  /* ═══════════════════════════════════════════════════════════════════
     FULL-SCREEN PREMIUM PREVIEW
     ═══════════════════════════════════════════════════════════════════ */

  const renderFullPreview = () => {
    const t = THEMES[colorTheme] || THEMES.dark;
    const s = SECTOR_CONTENT[sector] || SECTOR_CONTENT.corporate;
    const activeFeats = FEATURE_OPTIONS.filter((f) => features.includes(f.value));
    const isLightTheme = colorTheme === "minimal" || colorTheme === "vibrant";
    const navTextColor = colorTheme === "vibrant" ? "#fff" : t.text;

    return (
      <div style={{ background: t.bg, color: t.text, fontFamily: "'Inter', system-ui, sans-serif", minHeight: "100%" }}>

        {/* ═══ NAVBAR ═══ */}
        <div style={{
          background: t.nav, padding: "0 clamp(16px, 4vw, 64px)",
          height: 70, display: "flex", alignItems: "center", justifyContent: "space-between",
          borderBottom: `1px solid ${t.border}`,
          position: "sticky", top: 0, zIndex: 50,
          backdropFilter: "blur(12px)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 36, height: 36, borderRadius: 10,
              background: `linear-gradient(135deg, ${t.gradientFrom}, ${t.gradientTo})`,
              display: "flex", alignItems: "center", justifyContent: "center",
              color: t.btnText, fontWeight: 900, fontSize: 16,
            }}>
              {s.name.charAt(0)}
            </div>
            <span style={{ color: navTextColor, fontWeight: 700, fontSize: 18 }}>{s.name}</span>
          </div>
          <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
            {["Anasayfa", "Hakkımızda", "Hizmetler", "İletişim"].map((nav) => (
              <span key={nav} style={{ color: navTextColor, opacity: 0.7, fontSize: 14, fontWeight: 500, cursor: "pointer" }}>{nav}</span>
            ))}
            <span style={{
              background: `linear-gradient(135deg, ${t.gradientFrom}, ${t.gradientTo})`,
              color: t.btnText, padding: "8px 20px", borderRadius: 8, fontSize: 13, fontWeight: 700, cursor: "pointer",
            }}>
              Bize Ulaşın
            </span>
          </div>
        </div>

        {/* ═══ HERO SECTION ═══ */}
        <div style={{
          background: t.heroBg, position: "relative", overflow: "hidden",
          padding: "100px clamp(16px, 4vw, 64px) 80px", minHeight: 500,
          display: "flex", alignItems: "center",
        }}>
          {/* Decorative overlay */}
          <div style={{ position: "absolute", inset: 0, background: t.heroOverlay, pointerEvents: "none" }} />
          {/* Decorative circles */}
          <div style={{
            position: "absolute", right: "-5%", top: "10%", width: 400, height: 400,
            borderRadius: "50%", border: `1px solid ${t.accent}15`,
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", right: "5%", top: "20%", width: 250, height: 250,
            borderRadius: "50%", background: `${t.accent}08`,
            pointerEvents: "none",
          }} />

          <div style={{ position: "relative", zIndex: 2, maxWidth: 700 }}>
            <div style={{
              display: "inline-block", padding: "6px 16px", borderRadius: 20,
              background: `${t.accent}15`, border: `1px solid ${t.accent}30`,
              fontSize: 13, fontWeight: 600, color: t.accent, marginBottom: 24,
              letterSpacing: 1,
            }}>
              {s.name.toUpperCase()}
            </div>
            <h1 style={{
              fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 800, lineHeight: 1.1,
              marginBottom: 20, color: colorTheme === "vibrant" ? "#fff" : t.text,
              whiteSpace: "pre-line",
            }}>
              {s.hero}
            </h1>
            <p style={{
              fontSize: 18, lineHeight: 1.7, marginBottom: 36,
              color: colorTheme === "vibrant" ? "#ffffffcc" : t.mutedText,
              maxWidth: 500,
            }}>
              {s.sub}
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <span style={{
                background: `linear-gradient(135deg, ${t.gradientFrom}, ${t.gradientTo})`,
                color: t.btnText, padding: "14px 32px", borderRadius: 12,
                fontSize: 15, fontWeight: 700, cursor: "pointer",
                boxShadow: `0 8px 30px ${t.accent}30`,
              }}>
                Hemen Keşfet
              </span>
              <span style={{
                border: `2px solid ${colorTheme === "vibrant" ? "#ffffff40" : t.border}`,
                color: colorTheme === "vibrant" ? "#fff" : t.text,
                padding: "14px 32px", borderRadius: 12,
                fontSize: 15, fontWeight: 600, cursor: "pointer",
              }}>
                Daha Fazla Bilgi
              </span>
            </div>
          </div>
        </div>

        {/* ═══ STATS BAR ═══ */}
        <div style={{
          background: t.card, borderTop: `1px solid ${t.border}`, borderBottom: `1px solid ${t.border}`,
          padding: "40px clamp(16px, 4vw, 64px)",
          display: "flex", justifyContent: "center", gap: "clamp(32px, 6vw, 80px)", flexWrap: "wrap",
        }}>
          {s.stats.map((stat, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 36, fontWeight: 800, color: t.accent, marginBottom: 4 }}>
                {stat.num}
              </div>
              <div style={{ fontSize: 14, color: t.mutedText, fontWeight: 500 }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ═══ FEATURES / SERVICES ═══ */}
        {activeFeats.length > 0 && (
          <div style={{ padding: "80px clamp(16px, 4vw, 64px)", background: t.bg }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div style={{
                fontSize: 13, fontWeight: 700, color: t.accent,
                letterSpacing: 2, textTransform: "uppercase", marginBottom: 12,
              }}>
                HİZMETLERİMİZ
              </div>
              <h2 style={{ fontSize: 32, fontWeight: 800, color: t.text, marginBottom: 12 }}>
                Neler Sunuyoruz?
              </h2>
              <p style={{ fontSize: 16, color: t.mutedText, maxWidth: 500, margin: "0 auto" }}>
                Size en kaliteli hizmeti sunabilmek için sürekli kendimizi geliştiriyoruz.
              </p>
            </div>
            <div style={{
              display: "grid",
              gridTemplateColumns: `repeat(auto-fit, minmax(250px, 1fr))`,
              gap: 20, maxWidth: 900, margin: "0 auto",
            }}>
              {activeFeats.map((f) => {
                const FeatureIcon = f.icon;
                return (
                  <div key={f.value} style={{
                    background: t.card, borderRadius: 16, padding: 28,
                    border: `1px solid ${t.border}`,
                    transition: "all 0.2s",
                  }}>
                    <div style={{
                      width: 48, height: 48, borderRadius: 12,
                      background: `${t.accent}12`, border: `1px solid ${t.accent}25`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginBottom: 16,
                    }}>
                      <FeatureIcon size={22} color={t.accent} />
                    </div>
                    <div style={{ fontSize: 17, fontWeight: 700, color: t.text, marginBottom: 8 }}>
                      {f.label}
                    </div>
                    <div style={{ fontSize: 14, color: t.mutedText, lineHeight: 1.6 }}>
                      Modern ve kullanıcı dostu {f.label.toLowerCase()} çözümümüz ile müşterilerinize en iyi deneyimi sunun.
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ═══ ABOUT SECTION ═══ */}
        <div style={{
          padding: "80px clamp(16px, 4vw, 64px)", background: t.card,
          borderTop: `1px solid ${t.border}`, borderBottom: `1px solid ${t.border}`,
        }}>
          <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", gap: 48, flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ flex: "1 1 350px" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: t.accent, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
                HAKKIMIZDA
              </div>
              <h2 style={{ fontSize: 30, fontWeight: 800, color: t.text, marginBottom: 16 }}>{s.aboutTitle}</h2>
              <p style={{ fontSize: 16, color: t.mutedText, lineHeight: 1.8, marginBottom: 24 }}>{s.aboutText}</p>
              <div style={{ display: "flex", gap: 12 }}>
                {[Users, Zap, Shield].map((Icon, i) => (
                  <div key={i} style={{
                    width: 44, height: 44, borderRadius: 10, background: `${t.accent}10`,
                    border: `1px solid ${t.accent}20`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Icon size={20} color={t.accent} />
                  </div>
                ))}
              </div>
            </div>
            {/* Visual placeholder */}
            <div style={{
              flex: "1 1 300px", minHeight: 280, borderRadius: 20,
              background: `linear-gradient(135deg, ${t.accent}10, ${t.accent}05)`,
              border: `1px solid ${t.accent}15`,
              display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 12,
            }}>
              <ImageIcon size={48} color={`${t.accent}60`} />
              <span style={{ fontSize: 13, color: t.mutedText }}>Görsel Alanı</span>
            </div>
          </div>
        </div>

        {/* ═══ TESTIMONIAL ═══ */}
        <div style={{ padding: "80px clamp(16px, 4vw, 64px)", background: t.bg }}>
          <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
            <div style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: 20 }}>
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={20} fill={t.accent} color={t.accent} />
              ))}
            </div>
            <p style={{
              fontSize: 20, fontStyle: "italic", color: t.text, lineHeight: 1.7,
              marginBottom: 24, opacity: 0.9,
            }}>
              &ldquo;{s.testimonial.text}&rdquo;
            </p>
            <div style={{ fontSize: 15, fontWeight: 700, color: t.text }}>{s.testimonial.author}</div>
            <div style={{ fontSize: 13, color: t.mutedText }}>{s.testimonial.role}</div>
          </div>
        </div>

        {/* ═══ CTA SECTION ═══ */}
        <div style={{
          padding: "80px clamp(16px, 4vw, 64px)", textAlign: "center",
          background: `linear-gradient(135deg, ${t.gradientFrom}15, ${t.gradientTo}08)`,
          borderTop: `1px solid ${t.border}`,
        }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: t.text, marginBottom: 12 }}>
            Hemen Başlayın
          </h2>
          <p style={{ fontSize: 16, color: t.mutedText, marginBottom: 32, maxWidth: 450, margin: "0 auto 32px" }}>
            Projenizi hayata geçirmek için bugün bizimle iletişime geçin.
          </p>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: `linear-gradient(135deg, ${t.gradientFrom}, ${t.gradientTo})`,
            color: t.btnText, padding: "16px 40px", borderRadius: 12,
            fontSize: 16, fontWeight: 700, cursor: "pointer",
            boxShadow: `0 8px 30px ${t.accent}25`,
          }}>
            İletişime Geç <ChevronRight size={18} />
          </span>
        </div>

        {/* ═══ FOOTER ═══ */}
        <div style={{
          background: t.nav, padding: "48px clamp(16px, 4vw, 64px) 24px",
          borderTop: `1px solid ${t.border}`,
        }}>
          <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 32, marginBottom: 32 }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: 18, color: isLightTheme && colorTheme !== "vibrant" ? t.text : (colorTheme === "vibrant" ? "#fff" : t.text), marginBottom: 12 }}>
                {s.name}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { icon: Phone, text: "+90 (500) 000 00 00" },
                  { icon: Mail, text: "info@example.com" },
                  { icon: MapPin, text: "Şanlıurfa, Türkiye" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <item.icon size={14} color={t.accent} />
                    <span style={{ fontSize: 13, color: t.mutedText }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", gap: 48 }}>
              {[
                { title: "Sayfalar", items: ["Anasayfa", "Hakkımızda", "Hizmetler"] },
                { title: "Destek", items: ["SSS", "İletişim", "Gizlilik"] },
              ].map((col, ci) => (
                <div key={ci}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: colorTheme === "vibrant" ? "#fff" : t.text, marginBottom: 12 }}>{col.title}</div>
                  {col.items.map((item, ii) => (
                    <div key={ii} style={{ fontSize: 13, color: t.mutedText, marginBottom: 8, cursor: "pointer" }}>{item}</div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div style={{ borderTop: `1px solid ${t.border}`, paddingTop: 20, textAlign: "center" }}>
            <span style={{ fontSize: 12, color: t.mutedText }}>
              © 2024 {s.name} — MainX Stüdyoları tarafından tasarlandı ve geliştirildi
            </span>
          </div>
        </div>
      </div>
    );
  };

  /* ═══════════════════════════════════════════════════════════════════
     RENDER
     ═══════════════════════════════════════════════════════════════════ */

  return (
    <>
      {/* ── Floating Button ── */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3">
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
            <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping pointer-events-none" />
            <MessageCircle className="w-7 h-7 relative z-10" />
          </motion.button>
        </div>
      )}

      {/* ── Chat Window ── */}
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
            {/* Header */}
            <div className="px-5 py-4 bg-gradient-to-r from-primary/20 to-transparent border-b border-white/10 flex items-center justify-between shrink-0 rounded-t-[1.5rem]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">MainX Tasarım Asistanı</div>
                  <div className="text-[11px] text-green-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" /> Çevrimiçi
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors cursor-pointer" aria-label="Kapat">
                <X className="w-4 h-4 text-white/60" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ minHeight: 0 }}>
              {messages.map((msg) => (
                <motion.div key={msg.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] px-4 py-2.5 text-[13px] leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-primary text-black rounded-2xl rounded-br-sm font-medium"
                      : "bg-white/[0.06] text-white/90 rounded-2xl rounded-bl-sm border border-white/[0.06]"
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* Typing */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/[0.06] border border-white/[0.06] px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1.5">
                    <span className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}

              {/* Step: Sector */}
              {step === "sector" && !isTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-wrap gap-2 pt-1">
                  {SECTORS.map((s) => (
                    <button key={s.value} onClick={() => pickSector(s.value, s.label)}
                      className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 text-white/80 text-[13px] transition-all cursor-pointer">
                      {s.emoji} {s.label}
                    </button>
                  ))}
                </motion.div>
              )}

              {/* Step: Color */}
              {step === "color" && !isTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-wrap gap-2 pt-1">
                  {COLORS.map((c) => (
                    <button key={c.value} onClick={() => pickColor(c.value, c.label)}
                      className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 text-white/80 text-[13px] transition-all cursor-pointer">
                      {c.emoji} {c.label}
                    </button>
                  ))}
                </motion.div>
              )}

              {/* Step: Features */}
              {step === "features" && !isTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3 pt-1">
                  <div className="flex flex-wrap gap-2">
                    {FEATURE_OPTIONS.map((f) => (
                      <button key={f.value} onClick={() => toggleFeature(f.value)}
                        className={`px-3 py-2 rounded-xl text-[13px] transition-all cursor-pointer flex items-center gap-1.5 ${
                          features.includes(f.value)
                            ? "bg-primary/20 border border-primary/50 text-primary"
                            : "bg-white/5 border border-white/10 text-white/70 hover:border-white/20"
                        }`}>
                        {features.includes(f.value) && <Check className="w-3.5 h-3.5" />}
                        {f.label}
                      </button>
                    ))}
                  </div>
                  {features.length > 0 && (
                    <button onClick={confirmFeatures}
                      className="w-full py-2.5 rounded-xl bg-primary text-black font-bold text-[13px] transition-all cursor-pointer flex items-center justify-center gap-2 hover:opacity-90">
                      Devam Et ({features.length} seçildi) <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </motion.div>
              )}

              {/* Step: Preview */}
              {step === "preview" && !isTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3 pt-1">
                  {/* Mini thumbnail */}
                  <div className="rounded-2xl overflow-hidden border border-white/10 cursor-pointer group" onClick={() => setShowFullPreview(true)}
                    style={{ height: 180, position: "relative" }}>
                    <div style={{
                      width: 1200, transformOrigin: "top left", transform: "scale(0.3)",
                      pointerEvents: "none", position: "absolute", top: 0, left: 0,
                    }}>
                      {renderFullPreview()}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-center pb-4 group-hover:from-black/60 transition-all">
                      <span className="flex items-center gap-2 text-white text-sm font-bold bg-primary/90 px-4 py-2 rounded-lg">
                        <Eye className="w-4 h-4" /> Tam Ekranda Gör
                      </span>
                    </div>
                  </div>
                  <button onClick={requestContact}
                    className="w-full py-2.5 rounded-xl bg-primary text-black font-bold text-[13px] transition-all cursor-pointer flex items-center justify-center gap-2 hover:opacity-90">
                    Bu Tasarımı İstiyorum! 🚀
                  </button>
                </motion.div>
              )}

              {/* Step: Contact */}
              {step === "contact" && !isTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2.5 pt-1">
                  <input type="text" placeholder="Adınız Soyadınız *" value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-[13px] placeholder:text-white/30 outline-none focus:border-primary/50 transition-colors" />
                  <input type="tel" placeholder="Telefon Numaranız *" value={form.phone}
                    onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-[13px] placeholder:text-white/30 outline-none focus:border-primary/50 transition-colors" />
                  <input type="email" placeholder="E-posta Adresiniz (opsiyonel)" value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-[13px] placeholder:text-white/30 outline-none focus:border-primary/50 transition-colors" />
                  <button onClick={submitLead} disabled={!form.name.trim() || !form.phone.trim()}
                    className="w-full py-2.5 rounded-xl bg-primary text-black font-bold text-[13px] transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:opacity-90">
                    <Send className="w-4 h-4" /> Tasarımı Gönder
                  </button>
                </motion.div>
              )}

              {/* Step: Done */}
              {step === "done" && !isTyping && (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-4 space-y-4">
                  <div className="text-5xl">🎉</div>
                  <div className="text-white/50 text-sm">Talebiniz başarıyla iletildi!</div>
                  <button onClick={resetChat}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/60 text-xs hover:border-primary/30 hover:text-white transition-all cursor-pointer">
                    <RotateCcw className="w-3.5 h-3.5" /> Yeni Tasarım Başlat
                  </button>
                </motion.div>
              )}

              <div ref={chatEndRef} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ════════════ FULL-SCREEN PREVIEW MODAL ════════════ */}
      <AnimatePresence>
        {showFullPreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] flex flex-col"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowFullPreview(false)} />

            {/* Toolbar */}
            <div className="relative z-10 flex items-center justify-between px-6 py-3 bg-black/90 border-b border-white/10 shrink-0">
              <div className="text-white/70 text-sm font-medium">
                📐 Tasarım Önizlemesi — <span className="text-primary font-bold">{sectorLabel}</span> / <span className="text-primary">{colorLabel}</span>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={requestContact}
                  className="px-4 py-2 rounded-lg bg-primary text-black text-sm font-bold hover:opacity-90 transition-all cursor-pointer flex items-center gap-2">
                  Bu Tasarımı İstiyorum <ArrowRight className="w-4 h-4" />
                </button>
                <button onClick={() => setShowFullPreview(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer" aria-label="Kapat">
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Preview Content */}
            <div className="relative z-10 flex-1 overflow-y-auto">
              {renderFullPreview()}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
