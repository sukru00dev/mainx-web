import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/context/LanguageContext";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollFix from "@/components/ScrollFix";
import SplashScreen from "@/components/SplashScreen";
import MatrixOverlay from "@/components/MatrixOverlay";
import OnboardingWizard from "@/components/OnboardingWizard";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://mainx.com.tr"),
  title: "MainX Stüdyoları | Yazılım & Teknoloji | Şükrü BAŞ",
  description:
    "MainX Stüdyoları — Şükrü BAŞ tarafından kurulan yenilikçi yazılım ve teknoloji Ar-Ge stüdyosu. B2B SaaS, Mobil Uygulama, Yapay Zeka, Blok Zinciri.",
  keywords: [
    "yazılım stüdyosu", "web geliştirme", "mobil uygulama", "yapay zeka",
    "blok zinciri", "SaaS", "Şükrü BAŞ", "MainX", "Şanlıurfa", "Flutter", "Next.js", "TÜBİTAK",
  ],
  authors: [{ name: "Şükrü BAŞ", url: "https://mainx.com.tr" }],
  creator: "Şükrü BAŞ",
  publisher: "MainX Stüdyoları",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    alternateLocale: "en_US",
    url: "https://mainx.com.tr",
    title: "MainX Stüdyoları | Yazılım & Teknoloji | Şükrü BAŞ",
    description: "B2B SaaS, Mobil Uygulama, Yapay Zeka ve Blok Zinciri çözümleri üreten teknoloji stüdyosu.",
    siteName: "MainX Stüdyoları",
    images: [{ url: "/profile.jpg", width: 1200, height: 630, alt: "MainX Stüdyoları — Şükrü BAŞ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MainX Stüdyoları | by Şükrü BAŞ",
    description: "B2B SaaS, Mobil Uygulama, Yapay Zeka ve Blok Zinciri çözümleri.",
    images: ["/profile.jpg"],
    creator: "@sukrukodluyor",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" suppressHydrationWarning className="scroll-smooth">
      <head>
        {/* Disable browser scroll restoration BEFORE React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (history.scrollRestoration) {
                history.scrollRestoration = 'manual';
              }
              window.scrollTo(0, 0);
            `,
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-primary selection:text-white transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LanguageProvider>
            <ScrollFix />
            <SplashScreen />
            <ScrollProgress />
            <div className="noise-overlay" />
            <AnimatedBackground />
            <Header />
            <main className="flex-1 flex flex-col pt-16">{children}</main>
            <Footer />
            <OnboardingWizard />
            <MatrixOverlay />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
