"use client";

import { useState } from "react";
import { Fingerprint, Lock, X, Loader2, AlertCircle } from "lucide-react";

export default function ClientLoginModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Lütfen e-posta ve şifrenizi girin.");
      return;
    }
    
    setIsLoading(true);
    setError("");

    setTimeout(() => {
      setIsLoading(false);
      setError("Yetkisiz erişim: Sistemde aktif bir projeniz bulunamadı.");
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-md"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div 
        className="relative z-10 w-full max-w-md bg-background border border-border rounded-3xl p-8 shadow-2xl overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-blue-500 to-purple-500" />
        
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-foreground/50 hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
            <Lock className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold mb-2 text-foreground">Müşteri Portalı</h2>
          <p className="text-foreground/50 text-sm">Projelerinizin anlık durumunu ve faturalandırmalarınızı takip edin.</p>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <div>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Kurumsal E-Posta" 
              className="w-full px-4 py-3 rounded-xl bg-foreground/5 border border-border text-foreground placeholder-foreground/30 outline-none focus:border-primary/50 transition-colors"
            />
          </div>
          <div>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Şifre" 
              className="w-full px-4 py-3 rounded-xl bg-foreground/5 border border-border text-foreground placeholder-foreground/30 outline-none focus:border-primary/50 transition-colors"
            />
          </div>

          {error && (
            <div className="flex items-start gap-2 text-red-500 text-sm mt-2 p-3 bg-red-500/10 rounded-xl border border-red-500/20">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <p>{error}</p>
            </div>
          )}
          
          <button 
            type="submit"
            disabled={isLoading}
            className="w-full py-4 mt-2 rounded-xl bg-foreground text-background font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Sisteme Giriş Yap"}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-border flex flex-col items-center gap-4">
          <p className="text-xs text-foreground/30 uppercase tracking-widest">Veya Biyometrik Giriş</p>
          <button 
            onClick={() => {
              setIsLoading(true);
              setTimeout(() => {
                setIsLoading(false);
                setError("Biyometrik doğrulama başarısız. Lütfen cihazınızı kontrol edin.");
              }, 2000);
            }}
            className="p-4 rounded-full bg-foreground/5 border border-border hover:border-primary/50 hover:text-primary transition-all text-foreground/50 group"
          >
            <Fingerprint className="w-8 h-8 group-hover:scale-110 transition-transform" />
          </button>
        </div>

      </div>
    </div>
  );
}
