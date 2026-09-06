import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, Clock } from "lucide-react";
import { constructMetadata } from "@/lib/seo";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = constructMetadata({
  title: "Teknoloji ve Yazılım Blogu | MainX",
  description: "Şükrü BAŞ tarafından yazılan blok zinciri, yapay zeka, mobil geliştirme ve yazılım mühendisliği üzerine teknik makaleler.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts("blog");
  const featuredPosts = posts.filter(p => p.featured);
  const regularPosts = posts.filter(p => !p.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative py-32 border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="w-full px-6 lg:px-16 2xl:px-24 mx-auto max-w-[100rem] relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" /> Ana Sayfaya Dön
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <BookOpen className="w-7 h-7 text-primary" />
            </div>
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-semibold">
              Blog & Yazılar
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-thin tracking-tight text-foreground mb-6">
            Teknoloji ve Yazılım <span className="font-bold">Blogu.</span>
          </h1>
          <p className="text-xl text-foreground/50 max-w-3xl leading-relaxed">
            Blok zinciri mimarisinden yapay zeka ajanlarına, gömülü sistemlerden SaaS tasarımına kadar mühendislik dünyasından derinlemesine analizler.
          </p>
        </div>
      </div>

      {/* Posts */}
      <div className="w-full px-6 lg:px-16 2xl:px-24 mx-auto max-w-[100rem] py-24">
        {/* Featured post */}
        {featuredPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block mb-16 p-10 md:p-14 rounded-[2.5rem] bg-gradient-to-br from-primary/10 to-primary/0 border border-primary/20 hover:border-primary/40 transition-all hover:-translate-y-1"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-6">
              Öne Çıkan Yazı
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
              {post.title}
            </h2>
            {post.description && (
              <p className="text-foreground/60 text-lg leading-relaxed mb-8 max-w-4xl">
                {post.description}
              </p>
            )}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex gap-2 flex-wrap">
                {post.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-foreground/5 border border-border text-xs font-semibold text-foreground/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 text-foreground/40 text-sm ml-auto">
                {post.readTime && (
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {post.readTime} okuma
                  </span>
                )}
                <span>{post.date}</span>
                <span className="flex items-center gap-1 text-primary font-semibold">
                  Makaleyi Oku <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </Link>
        ))}

        {/* Regular posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {regularPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group p-8 rounded-[2rem] bg-foreground/[0.02] border border-border hover:border-primary/30 hover:bg-foreground/[0.04] transition-all flex flex-col"
            >
              <div className="flex flex-wrap gap-2 mb-5">
                {post.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-foreground/5 border border-border text-xs font-semibold text-foreground/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors flex-grow">
                {post.title}
              </h3>
              {post.description && (
                <p className="text-foreground/50 text-sm leading-relaxed mb-6 flex-grow">
                  {post.description}
                </p>
              )}
              <div className="flex items-center justify-between text-foreground/40 text-xs mt-auto pt-4 border-t border-border">
                {post.readTime && (
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {post.readTime} okuma
                  </span>
                )}
                <span className="flex items-center gap-1 text-primary font-semibold hover:gap-2 transition-all">
                  Okumaya Devam <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
