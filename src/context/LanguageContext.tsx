"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";

type Lang = "tr" | "en";

const translations = {
  tr: {
    // Header
    nav_about: "Hakkımızda",
    nav_services: "Hizmetlerimiz",
    nav_projects: "Projeler",
    nav_blog: "Blog",
    nav_catalog: "Katalog",
    nav_clientLogin: "Müşteri Girişi",
    nav_startProject: "Proje Başlat",
    nav_downloadCV: "CV İndir",
    nav_langSwitch: "EN",

    // Hero
    hero_badge: "TÜBİTAK 2209-A Blok Zinciri Projesi Onaylandı",
    hero_title1: "Modern Dijital Ürünler ve",
    hero_title2: "Yazılım Çözümleri.",
    hero_desc: "MainX Stüdyoları by Şükrü BAŞ. Kurumsal firmalar için ölçeklenebilir B2B SaaS panelleri, otonom yapay zeka ajanları ve güvenli blok zinciri mimarileri inşa ediyoruz.",
    hero_cta1: "Proje Başlat",
    hero_cta2: "Hizmet Kataloğu",

    // About
    about_label: "Kurucu / Baş Mühendis",
    about_title1: "Ben",
    about_title2: "Şükrü BAŞ.",
    about_title3: "Dijital Sistemler İnşa Ediyorum.",
    about_p1: "Yazılım dünyasına sadece kod yazmak için değil, insanların hayatını kolaylaştıran, ölçeklenebilir ve kusursuz mimariler kurmak için adım attım.",
    about_p2: 'TÜBİTAK onaylı blok zinciri araştırmalarından, binlerce kişinin kullandığı mobil uygulamalara ve yapay zeka destekli otonom sistemlere kadar geniş bir yelpazede "uçtan uca" (end-to-end) mühendislik hizmeti sunuyorum.',
    about_skill1: "Web / SaaS Mimarisi",
    about_skill2: "Mobil Geliştirme (Flutter)",
    about_skill3: "Yapay Zeka (Ollama/n8n)",
    about_skill4: "Veritabanı & Cloud (AWS)",
    about_downloadCV: "Özgeçmiş İndir (CV)",
    about_contact: "İletişime Geç",

    // Counter
    counter_code: "Satır Temiz Kod",
    counter_projects: "Başarılı Proje",
    counter_uptime: "Sistem Uptime",
    counter_clients: "Mutlu Müşteri",

    // References
    ref_label: "GÜVENİLEN KURUMLAR & TEKNOLOJİLER",

    // Services
    services_label: "Uzmanlık Alanlarımız",
    services_title: "Yenilikçi",
    services_title2: "Mühendislik.",
    services_desc: "Kurumsal ihtiyaçlarınıza özel olarak tasarlanmış, performansı ve güvenliği merkeze alan uçtan uca yazılım mimarileri.",
    s1_title: "Web & SaaS Platformları",
    s1_desc: "Next.js ve React ile ölçeklenebilir B2B SaaS panelleri ve kurumsal web uygulamaları.",
    s2_title: "Mobil Uygulama Geliştirme",
    s2_desc: "Flutter ile hem iOS hem Android için native performansında modern mobil uygulamalar.",
    s3_title: "Yapay Zeka (AI) Çözümleri",
    s3_desc: "n8n ve Ollama kullanarak şirket içi verilere entegre otonom ajanlar ve chatbotlar.",
    s4_title: "Blok Zinciri (Web3)",
    s4_desc: "Hyperledger Fabric ve Go ile gizlilik odaklı, güvenilir DApp ve smart contract mimarileri.",
    s5_title: "E-Ticaret Altyapıları",
    s5_desc: "Yüksek trafik kaldırabilen, modern ödeme sistemleri entegreli B2C e-ticaret siteleri.",
    s6_title: "DevOps & Sunucu Yönetimi",
    s6_desc: "Docker, CI/CD pipeline kurulumu ve Oracle/AWS üzerinde güvenli sunucu mimarisi.",
    s7_title: "Gömülü Sistemler (Donanım)",
    s7_desc: "Assembly ve mikrodenetleyiciler ile fiziksel sistem entegrasyonu (IoT).",
    s8_title: "Siber Güvenlik & Denetim",
    s8_desc: "KVKK uyumlu altyapılar ve web uygulamaları için siber zafiyet testleri.",

    // Products
    products_label: "Proje Vitrini",
    products_title: "Geliştirdiğimiz",
    products_title2: "Dijital Ürünler.",
    products_desc: "Her biri belirli bir problemi çözmek için tasarlanmış, B2B ve B2C odaklı aktif projelerimiz ve Ar-Ge çalışmalarımız.",
    products_challenge: "Karşılaşılan Zorluk",
    products_solution: "Üretilen Çözüm",
    products_view: "Projeyi İncele",
    products_source: "Kaynak Kod",

    // Testimonials
    testimonials_label: "Partner Görüşleri",
    testimonials_title: "Müşterilerimiz",
    testimonials_title2: "Ne Diyor?",

    // Workflow
    workflow_label: "Nasıl Çalışıyoruz?",
    workflow_title: "Fikirden Ürüne",
    workflow_title2: "4 Adım.",
    w1_title: "1. Keşif & Analiz",
    w1_desc: "Projenizin ihtiyaçlarını, hedef kitlesini ve teknik gereksinimlerini derinlemesine analiz ediyoruz.",
    w2_title: "2. Sistem Tasarımı",
    w2_desc: "Ölçeklenebilir mimariyi kuruyor, veritabanı şemalarını ve kullanıcı arayüzü (UI/UX) prototiplerini hazırlıyoruz.",
    w3_title: "3. Çevik Geliştirme",
    w3_desc: "Modern teknolojiler (React, Go, Flutter) ile temiz ve performanslı kod yazarak projeyi hayata geçiriyoruz.",
    w4_title: "4. Test & Canlıya Alma",
    w4_desc: "Güvenlik ve performans testlerini tamamlayıp, CI/CD süreçleri ile projeyi bulut sunuculara deploy ediyoruz.",

    // Architecture
    arch_label: "Teknik Mimari (Tech Stack Pipeline)",
    arch_title: "Sadece Kod Değil,",
    arch_title2: "Ölçeklenebilir Sistemler.",
    arch1_title: "Sistem Tasarımı",
    arch2_title: "Geliştirme",
    arch3_title: "Konteynerizasyon",
    arch4_title: "Cloud Ölçekleme",

    // FAQ
    faq_label: "Aklınıza Takılanlar",
    faq_title: "Sıkça Sorulan",
    faq_title2: "Sorular.",
    faq_desc: "Çalışma prensiplerimiz, kullandığımız teknolojiler ve süreçlerimiz hakkında aklınıza takılan soruların cevapları.",
    faq1_q: "Ortalama bir projenin teslim süresi nedir?",
    faq1_a: "Projenin kapsamına göre değişmekle birlikte, standart bir kurumsal web sitesi 2-3 hafta, gelişmiş bir SaaS veya Mobil Uygulama ise 6-12 hafta arasında canlıya alınmaktadır.",
    faq2_q: "Sadece tasarım mı yapıyorsunuz yoksa kodlama da dahil mi?",
    faq2_a: "Biz uçtan uca (End-to-End) hizmet veren bir geliştirme stüdyosuyuz. UI/UX tasarımından başlayıp, veritabanı mimarisinin kurulması, kodlanması ve sunucuya deploy edilmesine kadar tüm süreci yönetiyoruz.",
    faq3_q: "Projelerde hangi teknolojileri kullanıyorsunuz?",
    faq3_a: "Web tarafında React, Next.js, Node.js; mobil tarafta Flutter; veritabanında PostgreSQL, MongoDB; Web3 projelerinde ise Go ve Hyperledger/Solidity kullanıyoruz.",
    faq4_q: "Yapay zeka (AI) entegrasyonu hizmetiniz neleri kapsıyor?",
    faq4_a: "Şirket içi verilerinizi analiz eden özel LLM ajanları, müşteri hizmetleri chatbotları, RAG sistemleri ve n8n ile otonom iş akışları kurabiliyoruz.",
    faq5_q: "Proje tesliminden sonra teknik destek veriyor musunuz?",
    faq5_a: "Evet. Tüm projelerimizde teslimat sonrası 1-3 ay arasında ücretsiz hata düzeltme ve sistem izleme desteği sunuyoruz.",

    // Contact
    contact_label: "Akıllı Asistan",
    contact_title1: "Sıradan Formları Unutun.",
    contact_title2: "Hemen Konuşalım.",
    contact_desc: "Zamanınızın değerli olduğunu biliyoruz. Akıllı asistanımızla 3 adımda projenizin taslağını oluşturun.",
    contact_status: "müsait ve projeleri değerlendiriyor",
    contact_bot: "MainX AI Asistan",
    contact_online: "Çevrimiçi",
    contact_q1: "Yeni Bir Proje Başlatmak",
    contact_q2: "Teknik Danışmanlık",
    contact_q3: "Sadece Merhaba Demek",
    contact_welcome: "Merhaba! MainX Stüdyolarına hoş geldiniz. Size nasıl yardımcı olabilirim?",

    // Footer
    footer_desc: "Şükrü BAŞ tarafından kurulan, yenilikçi web teknolojileri, mobil uygulamalar, yapay zeka sistemleri ve blok zinciri mimarileri geliştiren Ar-Ge ve mühendislik stüdyosu.",
    footer_corporate: "Kurumsal",
    footer_contact: "İletişim & Konum",
    footer_copyright: "Tüm hakları saklıdır.",
    footer_status: "TÜM SİSTEMLER OPERASYONEL (99.99%)",

    // Cost Estimator
    cost_label: "Proje Hesaplayıcı",
    cost_title: "Yatırımınızı",
    cost_title2: "Öngörün.",
    cost_desc: "İhtiyacınız olan modülleri seçerek projenizin tahmini maliyetini ve teslim süresini anında görüntüleyin.",
    cost_budget: "Tahmini Bütçe Aralığı",
    cost_time: "Tahmini Teslim Süresi",
    cost_weeks: "Hafta",
    cost_start: "Bu Projeyi Başlat",
    cost_select: "Modül Seçiniz",

    // Social/Media
    social_label: "Medya & İçerikler",
    social_title: "Sektörel",
    social_title2: "Eğitimler.",
    social_desc: "YouTube ve sosyal medyada paylaştığımız teknik vizyon videoları ve eğitim kesitleri.",

    // Academic
    academic_label: "Akademi & Ar-Ge",
    academic_title1: "Sadece Kod Değil,",
    academic_title2: "Mühendislik Araştırması.",

    // Terminal
    terminal_label: "Mühendislik Kültürü",
    terminal_title1: "Sisteme",
    terminal_title2: "Bağlanın.",
    terminal_desc: "Bizim için yazılım sadece bir araç değil, bir yaşam tarzı. Terminal üzerinden bizimle etkileşime geçin.",

    // Splash
    splash_loading: "Sistem Başlatılıyor",
    splash_connecting: "Küresel Ağa Bağlanılıyor...",
    splash_ready: "Hazır",
  },
  en: {
    // Header
    nav_about: "About",
    nav_services: "Services",
    nav_projects: "Projects",
    nav_blog: "Blog",
    nav_catalog: "Catalog",
    nav_clientLogin: "Client Login",
    nav_startProject: "Start Project",
    nav_downloadCV: "Download CV",
    nav_langSwitch: "TR",

    // Hero
    hero_badge: "TÜBİTAK 2209-A Blockchain Project Approved",
    hero_title1: "Modern Digital Products and",
    hero_title2: "Software Solutions.",
    hero_desc: "MainX Studios by Şükrü BAŞ. We build scalable B2B SaaS dashboards, autonomous AI agents, and secure blockchain architectures for enterprises.",
    hero_cta1: "Start a Project",
    hero_cta2: "Service Catalog",

    // About
    about_label: "Founder / Lead Engineer",
    about_title1: "I'm",
    about_title2: "Şükrü BAŞ.",
    about_title3: "I Build Digital Systems.",
    about_p1: "I stepped into the software world not just to write code, but to build scalable and flawless architectures that make people's lives easier.",
    about_p2: "From TÜBİTAK-approved blockchain research to mobile apps used by thousands, and AI-powered autonomous systems — I provide end-to-end engineering across a wide spectrum.",
    about_skill1: "Web / SaaS Architecture",
    about_skill2: "Mobile Development (Flutter)",
    about_skill3: "AI (Ollama/n8n)",
    about_skill4: "Database & Cloud (AWS)",
    about_downloadCV: "Download Resume (CV)",
    about_contact: "Contact Me",

    // Counter
    counter_code: "Lines of Clean Code",
    counter_projects: "Successful Projects",
    counter_uptime: "System Uptime",
    counter_clients: "Happy Clients",

    // References
    ref_label: "TRUSTED INSTITUTIONS & TECHNOLOGIES",

    // Services
    services_label: "Areas of Expertise",
    services_title: "Innovative",
    services_title2: "Engineering.",
    services_desc: "End-to-end software architectures designed specifically for your corporate needs, with performance and security at the core.",
    s1_title: "Web & SaaS Platforms",
    s1_desc: "Scalable B2B SaaS dashboards and enterprise web applications built with Next.js and React.",
    s2_title: "Mobile App Development",
    s2_desc: "Modern mobile apps with native performance for both iOS and Android using Flutter.",
    s3_title: "Artificial Intelligence (AI) Solutions",
    s3_desc: "Autonomous agents and chatbots integrated with your internal data using n8n and Ollama.",
    s4_title: "Blockchain (Web3)",
    s4_desc: "Privacy-focused, reliable DApp and smart contract architectures with Hyperledger Fabric and Go.",
    s5_title: "E-Commerce Infrastructures",
    s5_desc: "High-traffic B2C e-commerce sites integrated with modern payment systems.",
    s6_title: "DevOps & Server Management",
    s6_desc: "Docker, CI/CD pipeline setup, and secure server architecture on Oracle/AWS.",
    s7_title: "Embedded Systems (Hardware)",
    s7_desc: "Physical system integration (IoT) with Assembly and microcontrollers.",
    s8_title: "Cybersecurity & Auditing",
    s8_desc: "GDPR-compliant infrastructures and cyber vulnerability testing for web applications.",

    // Products
    products_label: "Project Showcase",
    products_title: "Our Digital",
    products_title2: "Products.",
    products_desc: "Our active projects and R&D work, each designed to solve a specific problem, focused on B2B and B2C.",
    products_challenge: "The Challenge",
    products_solution: "The Solution",
    products_view: "View Project",
    products_source: "Source Code",

    // Testimonials
    testimonials_label: "Partner Reviews",
    testimonials_title: "What Our",
    testimonials_title2: "Clients Say.",

    // Workflow
    workflow_label: "How We Work",
    workflow_title: "From Idea to Product in",
    workflow_title2: "4 Steps.",
    w1_title: "1. Discovery & Analysis",
    w1_desc: "We deeply analyze your project's needs, target audience, and technical requirements.",
    w2_title: "2. System Design",
    w2_desc: "We establish the scalable architecture, database schemas, and UI/UX prototypes.",
    w3_title: "3. Agile Development",
    w3_desc: "We bring the project to life using modern technologies (React, Go, Flutter) with clean, performant code.",
    w4_title: "4. Testing & Launch",
    w4_desc: "After completing security and performance tests, we deploy the project to cloud servers via CI/CD.",

    // Architecture
    arch_label: "Technical Architecture (Tech Stack Pipeline)",
    arch_title: "Not Just Code,",
    arch_title2: "Scalable Systems.",
    arch1_title: "System Design",
    arch2_title: "Development",
    arch3_title: "Containerization",
    arch4_title: "Cloud Scaling",

    // FAQ
    faq_label: "Got Questions?",
    faq_title: "Frequently Asked",
    faq_title2: "Questions.",
    faq_desc: "Answers to questions about our working principles, technologies we use, and our processes.",
    faq1_q: "What is the average delivery time for a project?",
    faq1_a: "It varies by scope, but a standard corporate website is typically launched within 2-3 weeks, and an advanced SaaS or Mobile App within 6-12 weeks.",
    faq2_q: "Do you only do design, or is coding included?",
    faq2_a: "We are an end-to-end development studio. We manage the entire process from UI/UX design to database architecture, coding, and server deployment.",
    faq3_q: "What technologies do you use in projects?",
    faq3_a: "React, Next.js, Node.js for web; Flutter for mobile; PostgreSQL, MongoDB for databases; Go and Hyperledger/Solidity for Web3 projects.",
    faq4_q: "What does your AI integration service cover?",
    faq4_a: "We can build custom LLM agents that analyze your internal data, customer service chatbots, RAG systems, and autonomous workflows with n8n.",
    faq5_q: "Do you provide technical support after project delivery?",
    faq5_a: "Yes. For all our projects, we offer free bug-fixing and system monitoring support for 1-3 months after delivery.",

    // Contact
    contact_label: "Smart Assistant",
    contact_title1: "Forget Boring Forms.",
    contact_title2: "Let's Talk Now.",
    contact_desc: "We know your time is valuable. Outline your project in 3 steps with our smart assistant.",
    contact_status: "available and evaluating projects",
    contact_bot: "MainX AI Assistant",
    contact_online: "Online",
    contact_q1: "Start a New Project",
    contact_q2: "Technical Consulting",
    contact_q3: "Just Saying Hello",
    contact_welcome: "Hello! Welcome to MainX Studios. How can I help you?",

    // Footer
    footer_desc: "An R&D and engineering studio founded by Şükrü BAŞ, developing innovative web technologies, mobile apps, AI systems and blockchain architectures.",
    footer_corporate: "Corporate",
    footer_contact: "Contact & Location",
    footer_copyright: "All rights reserved.",
    footer_status: "ALL SYSTEMS OPERATIONAL (99.99%)",

    // Cost Estimator
    cost_label: "Project Calculator",
    cost_title: "Anticipate",
    cost_title2: "Your Investment.",
    cost_desc: "Select the modules you need and instantly view the estimated cost and delivery time for your project.",
    cost_budget: "Estimated Budget Range",
    cost_time: "Estimated Delivery Time",
    cost_weeks: "Weeks",
    cost_start: "Start This Project",
    cost_select: "Select Modules",

    // Social/Media
    social_label: "Media & Content",
    social_title: "Industry",
    social_title2: "Education.",
    social_desc: "Technical vision videos and educational clips we share on YouTube and social media.",

    // Academic
    academic_label: "Academy & R&D",
    academic_title1: "Not Just Code,",
    academic_title2: "Engineering Research.",

    // Terminal
    terminal_label: "Engineering Culture",
    terminal_title1: "Connect to the",
    terminal_title2: "System.",
    terminal_desc: "For us, software is not just a tool but a way of life. Interact with us through the terminal.",

    // Splash
    splash_loading: "Initializing System",
    splash_connecting: "Connecting to Global Network...",
    splash_ready: "Ready",
  },
} as const;

type TranslationKey = keyof typeof translations.tr;

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("tr");

  const t = useCallback(
    (key: TranslationKey): string => {
      return translations[lang][key] ?? translations.tr[key] ?? key;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
