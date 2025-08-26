"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getBlogPostBySlug, type BlogPost } from "@/services/blogService";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";

const BLUR_FADE_DELAY = 0.04;

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPost() {
      if (!slug) return;
      
      try {
        const blogPost = await getBlogPostBySlug(slug);
        if (blogPost) {
          setPost(blogPost);
        } else {
          setError("Blog post not found");
        }
      } catch (err) {
        console.error("Error fetching blog post:", err);
        setError("Failed to load blog post");
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <main className="flex flex-col min-h-[100dvh] space-y-10">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="flex flex-col items-center justify-center p-8 space-y-4">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <p className="text-muted-foreground">Loading blog post...</p>
          </div>
        </BlurFade>
      </main>
    );
  }

  if (error || !post) {
    return (
      <main className="flex flex-col min-h-[100dvh] space-y-10">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold">Blog Post Not Found</h1>
            <p className="text-muted-foreground">{error || "The blog post you're looking for doesn't exist."}</p>
            <Link href="/blog">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </BlurFade>
      </main>
    );
  }

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 px-2 md:px-4 py-8">
      <div className="max-w-4xl mx-auto w-full">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <Link href="/blog">
            <Button variant="ghost" className="mb-8 hover:bg-secondary/80">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </BlurFade>

        <article className="w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <Card className="overflow-hidden border-0 shadow-lg">
              {post.cover_image && (
                <div className="w-full h-64 md:h-96 lg:h-[400px]">
                  <img 
                    src={post.cover_image} 
                    alt={post.title} 
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
              
              <CardHeader className="p-4 md:p-8 lg:p-12">
                <div className="flex flex-wrap gap-3 mb-6">
                  <Badge variant="secondary" className="text-sm px-3 py-1">{post.category}</Badge>
                  {post.tags?.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-sm px-3 py-1">{tag}</Badge>
                  ))}
                </div>
                
                <CardTitle className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold tracking-tighter mb-6 leading-tight">
                  {post.title}
                </CardTitle>
                
                <div className="flex flex-col md:flex-row md:items-center gap-2 text-base text-muted-foreground">
                  <span className="font-medium">By {post.author}</span>
                  <span className="hidden md:inline text-muted-foreground/50">•</span>
                  <span>{post.date}</span>
                </div>
              </CardHeader>

              <CardContent className="p-4 md:p-8 lg:p-12 pt-0">
                <div 
                  className="prose prose-sm max-w-none dark:prose-invert 
                           prose-headings:text-foreground prose-headings:font-semibold prose-headings:mb-1 prose-headings:mt-2 prose-headings:leading-tight
                           prose-h1:text-xl prose-h2:text-lg prose-h3:text-base prose-h4:text-sm
                           prose-p:text-foreground/90 prose-p:leading-tight prose-p:mb-0
                           prose-li:text-foreground/90 prose-li:leading-tight prose-li:my-0
                           prose-strong:text-foreground prose-strong:font-medium
                           prose-code:text-foreground prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-xs
                           prose-pre:bg-muted prose-pre:border prose-pre:border-border prose-pre:p-2 prose-pre:rounded-md prose-pre:text-xs prose-pre:leading-tight prose-pre:my-1
                           prose-blockquote:border-l-primary prose-blockquote:bg-muted/30 prose-blockquote:py-1 prose-blockquote:px-2 prose-blockquote:rounded-r prose-blockquote:text-sm prose-blockquote:leading-tight prose-blockquote:my-1
                           prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                           prose-img:rounded-md prose-img:shadow-sm prose-img:my-1
                           prose-ul:my-1 prose-ol:my-1"
                  dangerouslySetInnerHTML={{ __html: post.content || "" }}
                />
              </CardContent>
            </Card>
          </BlurFade>
        </article>
      </div>
    </main>
  );
}
