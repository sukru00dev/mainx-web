"use client";

import { useState } from "react";
import { 
  LayoutDashboard, 
  CheckSquare, 
  FileText, 
  CreditCard, 
  Settings,
  Bell,
  Search,
  Clock,
  ChevronRight,
  MoreVertical
} from "lucide-react";
import Link from "next/link";

const kanbanData = {
  todo: [
    { id: 1, title: "Auth Modülünün Entegrasyonu", tag: "Backend", date: "12 Eki" },
    { id: 2, title: "Ödeme Altyapısı (Stripe)", tag: "Backend", date: "15 Eki" },
  ],
  inProgress: [
    { id: 3, title: "Dashboard UI Tasarımı", tag: "Frontend", date: "Bugün" },
    { id: 4, title: "Veritabanı Optimizasyonu", tag: "DevOps", date: "Yarın" },
  ],
  done: [
    { id: 5, title: "Figma Tasarımlarının Onayı", tag: "Design", date: "5 Eki" },
    { id: 6, title: "Proje Başlangıç Toplantısı", tag: "Genel", date: "1 Eki" },
  ]
};

export default function ClientDashboard() {
  const [activeTab, setActiveTab] = useState("Genel Bakış");

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-foreground font-sans">
      <div className="flex h-screen overflow-hidden">
        
        {/* Sidebar */}
        <aside className="w-64 border-r border-border bg-background/50 flex flex-col">
          <div className="p-6 pt-8">
            <h2 className="text-xl font-bold tracking-tight">Müşteri Portalı</h2>
            <p className="text-xs text-foreground/50 mt-1">Sanal Demo Ortamı</p>
          </div>
          
          <nav className="flex-1 px-4 space-y-2 mt-4">
            {["Genel Bakış", "Görevler (Kanban)", "Dosyalar", "Faturalar", "Ayarlar"].map((item, i) => {
              const icons = [LayoutDashboard, CheckSquare, FileText, CreditCard, Settings];
              const Icon = icons[i];
              const isActive = activeTab === item;
              return (
                <button
                  key={item}
                  onClick={() => setActiveTab(item)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium ${
                    isActive 
                      ? "bg-primary text-black" 
                      : "text-foreground/70 hover:bg-foreground/5 hover:text-foreground"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item}
                </button>
              );
            })}
          </nav>

          <div className="p-4 border-t border-border m-4 rounded-xl bg-foreground/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                AC
              </div>
              <div>
                <p className="text-sm font-semibold">Acme Corp.</p>
                <p className="text-xs text-foreground/50">Proje: E-Ticaret B2B</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-gradient-to-br from-background to-[#111]">
          {/* Header */}
          <header className="sticky top-0 z-10 flex items-center justify-between p-6 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="flex items-center gap-2 text-sm text-foreground/50">
              <Link href="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
              <ChevronRight className="w-4 h-4" />
              <span>Müşteri Portalı</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">{activeTab}</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative hidden md:block">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40" />
                <input 
                  type="text" 
                  placeholder="Projede ara..." 
                  className="pl-9 pr-4 py-2 rounded-full bg-foreground/5 border border-border text-sm focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <button className="w-10 h-10 rounded-full bg-foreground/5 border border-border flex items-center justify-center text-foreground/70 hover:text-primary transition-colors">
                <Bell className="w-4 h-4" />
              </button>
            </div>
          </header>

          <div className="p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Acme Corp. B2B Platformu</h1>
              <p className="text-foreground/50">MainX Stüdyoları tarafından geliştiriliyor.</p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { title: "Proje İlerlemesi", value: "%65", desc: "Zaman çizelgesine uygun" },
                { title: "Kalan Süre", value: "14 Gün", desc: "Tahmini teslim tarihi: 24 Ekim" },
                { title: "Açık Görevler", value: "12", desc: "4 görev bu hafta eklendi" },
              ].map((stat, i) => (
                <div key={i} className="p-6 rounded-2xl bg-foreground/[0.02] border border-border">
                  <h3 className="text-sm font-medium text-foreground/50 mb-4">{stat.title}</h3>
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <p className="text-xs text-green-400">{stat.desc}</p>
                </div>
              ))}
            </div>

            {/* Kanban Board Mock */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <CheckSquare className="w-5 h-5 text-primary" /> Aktif Sprint (Kanban)
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* To Do */}
                <div className="bg-foreground/[0.02] rounded-2xl p-4 border border-border">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-foreground/70">Yapılacaklar</h3>
                    <span className="px-2 py-0.5 rounded-full bg-foreground/10 text-xs">{kanbanData.todo.length}</span>
                  </div>
                  <div className="space-y-3">
                    {kanbanData.todo.map(task => (
                      <div key={task.id} className="p-4 rounded-xl bg-background border border-border hover:border-primary/30 transition-colors cursor-pointer">
                        <div className="flex items-start justify-between mb-3">
                          <span className="text-xs font-semibold px-2 py-1 bg-primary/10 text-primary rounded-md">{task.tag}</span>
                          <MoreVertical className="w-4 h-4 text-foreground/40" />
                        </div>
                        <p className="font-medium text-sm mb-3">{task.title}</p>
                        <div className="flex items-center gap-2 text-xs text-foreground/40">
                          <Clock className="w-3 h-3" /> {task.date}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* In Progress */}
                <div className="bg-foreground/[0.02] rounded-2xl p-4 border border-border">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-primary">Geliştirmede</h3>
                    <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs">{kanbanData.inProgress.length}</span>
                  </div>
                  <div className="space-y-3">
                    {kanbanData.inProgress.map(task => (
                      <div key={task.id} className="p-4 rounded-xl bg-background border border-primary/30 shadow-[0_0_15px_rgba(245,158,11,0.1)] cursor-pointer">
                        <div className="flex items-start justify-between mb-3">
                          <span className="text-xs font-semibold px-2 py-1 bg-primary/10 text-primary rounded-md">{task.tag}</span>
                          <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center">
                            <span className="text-[10px] text-blue-400">ŞB</span>
                          </div>
                        </div>
                        <p className="font-medium text-sm mb-3">{task.title}</p>
                        <div className="flex items-center gap-2 text-xs text-primary/70">
                          <Clock className="w-3 h-3" /> {task.date}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Done */}
                <div className="bg-foreground/[0.02] rounded-2xl p-4 border border-border">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-green-500">Tamamlandı</h3>
                    <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-500 text-xs">{kanbanData.done.length}</span>
                  </div>
                  <div className="space-y-3">
                    {kanbanData.done.map(task => (
                      <div key={task.id} className="p-4 rounded-xl bg-background border border-border opacity-60">
                        <div className="flex items-start justify-between mb-3">
                          <span className="text-xs font-semibold px-2 py-1 bg-foreground/10 text-foreground/70 rounded-md">{task.tag}</span>
                          <CheckSquare className="w-4 h-4 text-green-500" />
                        </div>
                        <p className="font-medium text-sm mb-3 line-through text-foreground/50">{task.title}</p>
                        <div className="flex items-center gap-2 text-xs text-foreground/40">
                          <CheckSquare className="w-3 h-3" /> {task.date}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Recent Activity */}
            <div className="p-6 rounded-2xl bg-foreground/[0.02] border border-border">
              <h2 className="text-lg font-bold mb-6">Son Aktiviteler</h2>
              <div className="space-y-6">
                {[
                  { user: "Şükrü BAŞ", action: "yeni bir tasarım dosyası yükledi", target: "dashboard_v2.fig", time: "2 saat önce", icon: FileText, color: "text-blue-400" },
                  { user: "Sistem", action: "haftalık ilerleme raporunu oluşturdu", target: "Rapor #12", time: "Dün", icon: LayoutDashboard, color: "text-purple-400" },
                  { user: "MainX Ekibi", action: "bir görevi tamamladı", target: "Figma Tasarımlarının Onayı", time: "5 Eki", icon: CheckSquare, color: "text-green-400" }
                ].map((act, i) => (
                  <div key={i} className="flex gap-4">
                    <div className={`mt-1 w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center flex-shrink-0 border border-border`}>
                      <act.icon className={`w-4 h-4 ${act.color}`} />
                    </div>
                    <div>
                      <p className="text-sm">
                        <span className="font-semibold text-foreground">{act.user}</span>{" "}
                        <span className="text-foreground/60">{act.action}</span>{" "}
                        <span className="font-medium text-primary">{act.target}</span>
                      </p>
                      <p className="text-xs text-foreground/40 mt-1">{act.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </main>

      </div>
    </div>
  );
}
