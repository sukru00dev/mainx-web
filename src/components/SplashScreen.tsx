"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { useLanguage } from "@/context/LanguageContext";

const GlobeT = dynamic(() => import("react-globe.gl"), { ssr: false });

export default function SplashScreen() {
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(0); // 0=connecting, 1=ready, 2=done
  const { t } = useLanguage();

  useEffect(() => {
    let isFirstTime = true;
    try {
      const seen = sessionStorage.getItem("mainx_splash_seen");
      if (seen) isFirstTime = false;
    } catch (e) {
      // Ignore sessionStorage errors in strict incognito mode
    }

    if (!isFirstTime) {
      setShow(false);
      return;
    }

    setShow(true);
    const t1 = setTimeout(() => setStep(1), 2500);
    const t2 = setTimeout(() => setStep(2), 3800);
    const t3 = setTimeout(() => {
      setShow(false);
      try {
        sessionStorage.setItem("mainx_splash_seen", "1");
      } catch (e) {}
    }, 4600);

    return () => { 
      clearTimeout(t1); 
      clearTimeout(t2); 
      clearTimeout(t3); 
    };
  }, []);

  // Build arc data once (memoized) to fix react-hooks/purity
  const { arcsData, ringsData } = useMemo(() => {
    const N = 30;
    const arcs = Array.from({ length: N }, () => ({
      startLat: (Math.random() - 0.5) * 180,
      startLng: (Math.random() - 0.5) * 360,
      endLat: (Math.random() - 0.5) * 180,
      endLng: (Math.random() - 0.5) * 360,
      color: ["#f59e0b", "#3b82f6", "#10b981"][Math.floor(Math.random() * 3)],
    }));
    const rings = arcs.slice(0, 15).map((a) => ({
      lat: a.startLat,
      lng: a.startLng,
      color: a.color,
    }));
    return { arcsData: arcs, ringsData: rings };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

          {/* Globe */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <GlobeT
              width={typeof window !== "undefined" ? Math.min(window.innerWidth, 800) : 700}
              height={typeof window !== "undefined" ? Math.min(window.innerHeight, 800) : 700}
              backgroundColor="rgba(0,0,0,0)"
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
              bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              arcsData={arcsData}
              arcColor="color"
              arcDashLength={0.5}
              arcDashGap={0.2}
              arcDashAnimateTime={1500}
              arcsTransitionDuration={0}
              arcStroke={1.5}
              ringsData={ringsData}
              ringColor="color"
              ringMaxRadius={4}
              ringPropagationSpeed={3}
              ringRepeatPeriod={800}
              showAtmosphere={true}
              atmosphereColor="#f59e0b"
              atmosphereAltitude={0.2}
            />
          </motion.div>

          {/* Radial vignette overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,black_100%)] pointer-events-none" />

          {/* Brand text */}
          <div className="relative z-10 flex flex-col items-center gap-6">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center shadow-[0_0_40px_rgba(245,158,11,0.4)]">
                <span className="text-2xl font-black text-primary">M</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                MainX<span className="text-primary">.</span>
              </h1>
              <p className="text-white/40 text-sm tracking-[0.4em] uppercase font-medium">
                Stüdyoları by Şükrü BAŞ
              </p>
            </motion.div>

            {/* Status line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-6 font-mono text-sm text-green-400 flex flex-col items-center gap-2"
            >
              <AnimatePresence mode="wait">
                {step < 1 && (
                  <motion.div
                    key="connecting"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="flex items-center gap-3"
                  >
                    <span className="inline-flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}
                          className="w-2 h-2 rounded-full bg-green-500"
                        />
                      ))}
                    </span>
                    <span>{t("splash_connecting")}</span>
                  </motion.div>
                )}
                {step === 1 && (
                  <motion.div
                    key="ready"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-primary text-lg font-bold"
                  >
                    <span className="w-3 h-3 rounded-full bg-primary" />
                    {t("splash_ready").toUpperCase()}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
