"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";

const GlobeT = dynamic(() => import("react-globe.gl"), { ssr: false });

export default function Globe() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const globeEl = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 600, height: 600 });

  // ✅ useMemo MUST be before any early return — Rules of Hooks
  const { arcsData, ringsData } = useMemo(() => {
    const N = 30;
    const arcs = Array.from({ length: N }, () => ({
      startLat: (Math.random() - 0.5) * 180,
      startLng: (Math.random() - 0.5) * 360,
      endLat: (Math.random() - 0.5) * 180,
      endLng: (Math.random() - 0.5) * 360,
      color: ['#f59e0b', '#3b82f6', '#10b981', '#ef4444'][Math.floor(Math.random() * 4)]
    }));
    const rings = arcs.map(arc => ({
      lat: arc.startLat,
      lng: arc.startLng,
      color: arc.color
    }));
    return { arcsData: arcs, ringsData: rings };
  }, []); // Computed once, never recalculated

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      if (containerRef.current) {
        const { clientWidth } = containerRef.current;
        setDimensions({ width: clientWidth, height: clientWidth });
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;
      globeEl.current.controls().enableZoom = false;
    }
  }, [mounted]);

  // ✅ Early return AFTER all hooks
  if (!mounted) return <div ref={containerRef} className="w-full aspect-square opacity-0" />;

  const isDark = resolvedTheme === "dark";

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing relative">
      <GlobeT
        ref={globeEl}
        width={dimensions.width}
        height={dimensions.height}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl={isDark
          ? "//unpkg.com/three-globe/example/img/earth-dark.jpg"
          : "//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        }
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        arcsData={arcsData}
        arcColor="color"
        arcDashLength={0.4}
        arcDashGap={0.2}
        arcDashAnimateTime={2000}
        arcsTransitionDuration={0}
        arcStroke={1}
        ringsData={ringsData}
        ringColor="color"
        ringMaxRadius={5}
        ringPropagationSpeed={3}
        ringRepeatPeriod={1000}
        showAtmosphere={true}
        atmosphereColor="#f59e0b"
        atmosphereAltitude={0.15}
      />
    </div>
  );
}
