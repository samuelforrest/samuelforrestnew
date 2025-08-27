import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getAllBlogPosts, type BlogPost } from "@/services/blogService";
import { Loader2 } from "lucide-react";
import Link from "next/link";

const Blog = () => {
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
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-muted/60 to-primary/10">
      
      <main className="flex-grow mt-20 pt-6">
        <div className="container-narrow px-4">
          <div className="mb-12 text-center animate-fade-in">
            <h1 className="text-5xl font-extrabold mb-4 font-serif bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Blog</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Thoughts, ideas, and insights on technology, aviation, and more. All posts are Free from AI garbadge!
            </p>
          </div>
          
          <div className="mb-8 flex flex-wrap gap-3 justify-center animate-fade-in">
            <Button 
              variant={selectedCategory === null ? "default" : "outline"} 
              className="rounded-full px-6 py-2 shadow-md font-semibold"
              onClick={() => setSelectedCategory(null)}
            >
              All
            </Button>
            {categories.map((category, index) => (
              <Button 
                key={index} 
                variant={selectedCategory === category ? "default" : "outline"} 
                className="rounded-full px-6 py-2 shadow-md font-semibold"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          
          {loading ? (
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
          ) : filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
              {filteredPosts.map((post) => (
                <Link 
                  key={post.id} 
                  href={`/blog/${post.slug}`}
                  className="group block transform transition-all duration-300 hover:scale-105 hover:-translate-y-2"
                >
                  <Card className="overflow-hidden h-full rounded-2xl shadow-lg border border-border/40 bg-card/80 backdrop-blur-md group-hover:bg-card/90 group-hover:border-primary/30 group-hover:shadow-2xl group-hover:shadow-primary/10 transition-all duration-300">
                    <div className="w-full h-48 bg-gradient-to-tr from-muted/60 to-primary/10">
                      {post.cover_image && (
                        <img 
                          src={post.cover_image} 
                          alt={post.title} 
                          className="object-cover w-full h-full rounded-t-2xl group-hover:brightness-110 transition-all duration-300"
                        />
                      )}
                      {!post.cover_image && (
                        <div className="flex items-center justify-center w-full h-full bg-secondary/50 backdrop-blur-sm group-hover:bg-primary/10 transition-all duration-300">
                          <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">No image</p>
                        </div>
                      )}
                    </div>
                    <CardHeader className="pb-2">
                      <div className="mb-2">
                        <span className="text-xs bg-secondary/70 backdrop-blur-sm px-2 py-1 rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300">
                          {post.category}
                        </span>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors duration-300 font-serif text-lg md:text-xl font-bold">{post.title}</CardTitle>
                      <CardDescription className="group-hover:text-foreground/80 transition-colors duration-300 text-xs md:text-sm">{post.date}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="group-hover:text-foreground/90 transition-colors duration-300 text-sm md:text-base">{post.preview || post.excerpt}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center p-8">
              <p>No blog posts available in this category.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Blog;
