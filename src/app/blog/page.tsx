
"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getAllBlogPosts, type BlogPost } from "@/services/blogService";
import { Loader2 } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";

const BLUR_FADE_DELAY = 0.04;

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [showSlowMessage, setShowSlowMessage] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  useEffect(() => {
    async function fetchPosts() {
      try {
        const posts = await getAllBlogPosts();
        setBlogPosts(posts);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
        setShowSlowMessage(false);
      }
    }

    fetchPosts();

    // Set timeout for slow loading message
    const timer = setTimeout(() => {
      if (loading) {
        setShowSlowMessage(true);
      }
    }, 7000);

    return () => clearTimeout(timer);
  }, [loading]);

  const categories = [...new Set(blogPosts.map(post => post.category))];
  const filteredPosts = selectedCategory 
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts;

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 px-4 py-8">
      <section id="blog-hero" className="max-w-4xl mx-auto w-full">
        <div className="space-y-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
              yOffset={8}
              text="Blog"
            />
            <BlurFadeText
              className="max-w-[600px] md:text-xl text-muted-foreground"
              delay={BLUR_FADE_DELAY * 2}
              text="Thoughts, ideas, and insights on technology, aviation, and more."
            />
          </div>
        </div>
      </section>

      <section id="blog-filters" className="max-w-4xl mx-auto w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button 
              variant={selectedCategory === null ? "default" : "outline"} 
              className="rounded-full px-6 py-2"
              onClick={() => setSelectedCategory(null)}
            >
              All
            </Button>
            {categories.map((category, index) => (
              <Button 
                key={index} 
                variant={selectedCategory === category ? "default" : "outline"} 
                className="rounded-full px-6 py-2"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </BlurFade>
      </section>

      <section id="blog-posts" className="max-w-4xl mx-auto w-full">
        {loading ? (
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="flex flex-col items-center justify-center p-8 space-y-4">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
              <div className="text-center">
                <p className="text-muted-foreground">Loading posts...</p>
                {showSlowMessage && (
                  <p className="text-sm text-muted-foreground mt-2">
                    The database is a bit busy right now...please wait
                  </p>
                )}
              </div>
            </div>
          </BlurFade>
        ) : filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
            {filteredPosts.map((post, id) => (
              <BlurFade
                key={post.id}
                delay={BLUR_FADE_DELAY * 5 + id * 0.05}
              >
                <Link 
                  href={`/blog/${post.slug}`}
                  className="group block h-full"
                >
                  <Card className="overflow-hidden h-full border hover:shadow-lg transition-all duration-300 hover:border-primary/30 hover:shadow-primary/5">
                    <div className="w-full h-48 bg-muted">
                      {post.cover_image ? (
                        <img 
                          src={post.cover_image} 
                          alt={post.title} 
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <div className="flex items-center justify-center w-full h-full bg-muted">
                          <p className="text-muted-foreground">No image</p>
                        </div>
                      )}
                    </div>
                    <CardHeader className="pb-3 px-6 pt-6">
                      <div className="mb-3">
                        <span className="text-xs bg-secondary px-3 py-1 rounded-full font-medium">
                          {post.category}
                        </span>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors duration-300 font-bold text-lg leading-tight line-clamp-2">{post.title}</CardTitle>
                      <CardDescription className="text-sm">{post.date}</CardDescription>
                    </CardHeader>
                    <CardContent className="px-6 pb-6">
                      <p className="text-sm text-muted-foreground line-clamp-3">{post.preview || post.excerpt}</p>
                    </CardContent>
                  </Card>
                </Link>
              </BlurFade>
            ))}
          </div>
        ) : (
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="text-center p-8">
              <p className="text-muted-foreground">No blog posts available in this category.</p>
            </div>
          </BlurFade>
        )}
      </section>
    </main>
  );
}
