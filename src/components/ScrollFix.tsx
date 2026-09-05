"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollFix() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Tarayıcının kendi scroll hatırlama özelliğini kesin olarak kapat
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // 2. Sayfa yenilendiğinde anında en başa at
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // 3. Eğer URL'de #hizmetler gibi bir hash varsa, onu temizle ki tarayıcı oraya atlamasın
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }

    // 4. Kullanıcı F5'e bastığı anda (sayfa kapanmadan hemen önce) en üste at
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [pathname]);

  return null;
}
