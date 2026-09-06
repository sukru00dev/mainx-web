import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { constructMetadata } from "@/lib/seo";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug, "projeler");
  if (!post) return constructMetadata();

  return constructMetadata({
    title: `${post.meta.title} | MainX Vaka Analizi`,
    description: post.meta.description,
    image: post.meta.image || "/profile.jpg",
    path: `/projeler/${post.meta.slug}`,
  });
}

export async function generateStaticParams() {
  const posts = getAllPosts("projeler");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug, "projeler");
  
  if (!post) {
    notFound();
  }

  const { meta, content } = post;

  return (
    <div className="min-h-screen bg-background">
      <div className="relative py-24 md:py-32 border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="w-full px-6 lg:px-16 2xl:px-24 mx-auto max-w-4xl relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-foreground transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" /> Ana Sayfaya Dön
          </Link>
          
          <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-secondary/80 mb-6">
            <span className="px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20">
              Vaka Analizi (Case Study)
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
            {meta.title}
          </h1>

          <div className="flex items-center gap-6 text-foreground/50 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" /> {meta.date}
            </div>
            {meta.readTime && (
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> {meta.readTime} okuma
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full px-6 lg:px-16 2xl:px-24 mx-auto max-w-4xl py-16">
        <article className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-a:text-secondary hover:prose-a:text-secondary/80 prose-img:rounded-2xl prose-img:border prose-img:border-border prose-pre:bg-[#0a0a0a] prose-pre:border prose-pre:border-border">
          <MDXRemote source={content} />
        </article>
      </div>
    </div>
  );
}
