"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Terminal, Moon, Sun, Menu, X, ChevronRight, Download } from "lucide-react";
import ClientLoginModal from "./ClientLoginModal";
import { useTheme } from "next-themes";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "/#hakkimizda", label: t("nav_about") },
    { href: "/#hizmetler", label: t("nav_services") },
    { href: "/#urunler", label: t("nav_projects") },
    { href: "/blog", label: t("nav_blog") },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-border/50 py-4 shadow-sm"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="w-full px-6 lg:px-16 2xl:px-24 mx-auto max-w-[100rem] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group z-10">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 group-hover:border-primary/40 transition-colors">
              <Terminal className="w-5 h-5 text-primary" />
            </div>
            <span className="font-bold text-xl tracking-tight text-foreground">
              MainX<span className="text-primary">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side Controls */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === "tr" ? "en" : "tr")}
              className="hidden sm:flex items-center gap-1 text-xs font-bold px-3 py-2 rounded-lg bg-foreground/5 border border-border hover:bg-foreground/10 text-foreground/70 hover:text-foreground transition-colors"
            >
              🌐 {t("nav_langSwitch")}
            </button>

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2.5 rounded-xl bg-foreground/5 border border-border hover:bg-foreground/10 text-foreground/70 hover:text-foreground transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}

            {/* CV Download */}
            <a
              href="/cv.pdf"
              download
              className="hidden lg:flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-xl bg-foreground/5 border border-border text-foreground/70 hover:bg-foreground/10 hover:text-foreground transition-colors"
            >
              <Download className="w-4 h-4" /> {t("nav_downloadCV")}
            </a>

            {/* Client Login */}
            <button
              onClick={() => setIsLoginOpen(true)}
              className="text-sm font-medium text-foreground/50 hover:text-foreground transition-colors hidden sm:block"
            >
              {t("nav_clientLogin")}
            </button>

            <span className="w-px h-4 bg-border mx-1 hidden lg:block" />

            {/* Catalog */}
            <Link
              href="/katalog"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors hidden lg:block"
            >
              {t("nav_catalog")}
            </Link>

            {/* CTA */}
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-wizard"))}
              className="hidden lg:flex text-sm font-medium px-6 py-2.5 rounded-full bg-foreground text-background hover:scale-105 transition-transform shadow-[0_0_15px_rgba(245,158,11,0.1)]"
            >
              {t("nav_startProject")}
            </button>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden p-2.5 rounded-xl bg-foreground/5 border border-border text-foreground hover:bg-foreground/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[998] bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[999] w-80 bg-background border-l border-border flex flex-col p-8 transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between mb-10">
          <span className="font-bold text-xl text-foreground">
            MainX<span className="text-primary">.</span>
          </span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-xl bg-foreground/5 border border-border text-foreground/70 hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Nav Links */}
        <nav className="flex flex-col gap-2 flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between px-4 py-4 rounded-xl text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-all group"
            >
              <span className="font-medium">{link.label}</span>
              <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
            </Link>
          ))}
          <Link
            href="/katalog"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-between px-4 py-4 rounded-xl text-foreground/70 hover:text-foreground hover:bg-foreground/5 transition-all group"
          >
            <span className="font-medium">{t("nav_catalog")}</span>
            <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
          </Link>
        </nav>

        {/* Drawer Footer Actions */}
        <div className="flex flex-col gap-3 mt-8 pt-8 border-t border-border">
          {/* Language + Theme toggles */}
          <div className="flex gap-3">
            <button
              onClick={() => setLang(lang === "tr" ? "en" : "tr")}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-foreground/5 border border-border text-sm font-bold text-foreground/70 hover:bg-foreground/10 transition-colors"
            >
              🌐 {t("nav_langSwitch")}
            </button>
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-foreground/5 border border-border text-sm font-medium text-foreground/70 hover:bg-foreground/10 transition-colors"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                {theme === "dark" ? "Aydınlık" : "Light"}
              </button>
            )}
          </div>

          <a
            href="/cv.pdf"
            download
            className="flex items-center justify-center gap-2 py-3 rounded-xl bg-foreground/5 border border-border text-sm font-medium text-foreground/70 hover:bg-foreground/10 transition-colors"
          >
            <Download className="w-4 h-4" /> {t("nav_downloadCV")}
          </a>

          <button
            onClick={() => { setIsLoginOpen(true); setIsMobileMenuOpen(false); }}
            className="py-3 rounded-xl border border-border text-sm font-medium text-foreground/70 hover:bg-foreground/5 transition-colors"
          >
            {t("nav_clientLogin")}
          </button>

          <button
            onClick={() => { window.dispatchEvent(new CustomEvent("open-wizard")); setIsMobileMenuOpen(false); }}
            className="py-3 rounded-full bg-foreground text-background text-sm font-bold text-center hover:opacity-90 transition-opacity"
          >
            {t("nav_startProject")}
          </button>
        </div>
      </div>

      <ClientLoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}
