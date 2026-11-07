import Hero from "@/components/Hero";
import LiveCounter from "@/components/LiveCounter";
import Architecture from "@/components/Architecture";
import ServicesBento from "@/components/ServicesBento";
import ProductsShowcase from "@/components/ProductsShowcase";
import AboutMe from "@/components/AboutMe";
import AcademicRD from "@/components/AcademicRD";
import SocialWall from "@/components/SocialWall";
import ReferencesMarquee from "@/components/ReferencesMarquee";
import Workflow from "@/components/Workflow";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import TerminalCLI from "@/components/TerminalCLI";
import CostEstimator from "@/components/CostEstimator";
import FloatingToC from "@/components/FloatingToC";

import { constructMetadata } from "@/lib/seo";
import { OrganizationSchema, WebSiteSchema, LocalBusinessSchema, FAQSchema } from "@/components/seo/JsonLd";

const homeFaqs = [
  {
    question: "Ortalama bir projenin teslim süresi nedir?",
    answer: "Projenin kapsamına göre değişmekle birlikte, standart bir kurumsal web sitesi 2-3 hafta, gelişmiş bir SaaS veya Mobil Uygulama ise 6-12 hafta arasında canlıya alınmaktadır."
  },
  {
    question: "Sadece tasarım mı yapıyorsunuz yoksa kodlama da dahil mi?",
    answer: "Biz uçtan uca (End-to-End) hizmet veren bir geliştirme stüdyosuyuz. UI/UX tasarımından başlayıp, veritabanı mimarisinin kurulması, kodlanması ve sunucuya deploy edilmesine kadar tüm süreci yönetiyoruz."
  },
  {
    question: "Projelerde hangi teknolojileri kullanıyorsunuz?",
    answer: "Web tarafında React, Next.js, Node.js; mobil tarafta Flutter; veritabanında PostgreSQL, MongoDB; Web3 projelerinde ise Go ve Hyperledger/Solidity kullanıyoruz."
  },
  {
    question: "Yapay zeka (AI) entegrasyonu hizmetiniz neleri kapsıyor?",
    answer: "Şirket içi verilerinizi analiz eden özel LLM ajanları, müşteri hizmetleri chatbotları, RAG sistemleri ve n8n ile otonom iş akışları kurabiliyoruz."
  },
  {
    question: "Proje tesliminden sonra teknik destek veriyor musunuz?",
    answer: "Evet. Tüm projelerimizde teslimat sonrası 1-3 ay arasında ücretsiz hata düzeltme ve sistem izleme desteği sunuyoruz."
  },
  {
    question: "Şanlıurfa'da yüz yüze yazılım geliştirme ve web tasarım hizmeti veriyor musunuz?",
    answer: "Evet. MainX Stüdyoları Şanlıurfa merkezli bir yazılım geliştirme firmasıdır. Şanlıurfa ve Güneydoğu Anadolu bölgesindeki işletmelerle yüz yüze analiz toplantıları gerçekleştiriyor, Türkiye genelinde ve yurt dışında ise uçtan uca çevik proje yönetimiyle kurumsal web tasarım, mobil uygulama ve özel yazılım çözümleri sunuyoruz."
  },
  {
    question: "Şanlıurfa yazılım geliştirme ve kurumsal web sitesi fiyatları neye göre belirleniyor?",
    answer: "Projenin teknik kapsamına, özel tasarım ihtiyaçlarına, mobil veya yapay zeka entegrasyonlarına göre fiyatlandırma yapılır. Sayfamızdaki Proje Maliyet Hesaplayıcı aracımızla Şanlıurfa web tasarım, e-ticaret, B2B SaaS veya mobil uygulama projenizin tahmini bütçesini ve teslim süresini anında hesaplayabilirsiniz."
  }
];

export const metadata = constructMetadata({
  title: "MainX Stüdyoları | Şanlıurfa Yazılım Geliştirme, Web Tasarım & Mobil Uygulama",
  description: "Şanlıurfa yazılım geliştirme firması MainX Stüdyoları (Şükrü BAŞ); kurumsal web tasarım, B2B SaaS, Flutter mobil uygulama, yapay zeka ve blok zinciri çözümleri sunar.",
  path: "",
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <OrganizationSchema />
      <WebSiteSchema />
      <LocalBusinessSchema />
      <FAQSchema faqs={homeFaqs} />
      <FloatingToC />
      <Hero />
      <LiveCounter />
      <ReferencesMarquee />
      <AboutMe />
      <TerminalCLI />
      <AcademicRD />
      <Workflow />
      <Architecture />
      <ServicesBento />
      <ProductsShowcase />
      <Testimonials />
      <SocialWall />
      <CostEstimator />
      <FAQ />
      <Contact />
    </div>
  );
}
