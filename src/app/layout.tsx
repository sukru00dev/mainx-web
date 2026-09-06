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
import DesignAssistant from "@/components/DesignAssistant";

const inter = Inter({ subsets: ["latin"] });

import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata();

import { PersonSchema, OrganizationSchema, WebSiteSchema } from "@/components/seo/JsonLd";

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
        <PersonSchema />
        <OrganizationSchema />
        <WebSiteSchema />
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
            <DesignAssistant />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
