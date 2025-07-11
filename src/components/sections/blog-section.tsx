
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { getAllBlogPosts, type BlogPost } from "@/services/blogService";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Loader2 } from "lucide-react";

export function BlogSection() {
  const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [showSlowMessage, setShowSlowMessage] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const posts = await getAllBlogPosts();
        setFeaturedPosts(posts.slice(0, 3)); // Get just the first 3 posts for the homepage
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

  return (
    <section id="blog" className="section bg-secondary/30">
      <div className="container-narrow">
        <h2 className="section-heading">Blog</h2>
        <p className="text-lg text-muted-foreground mb-8">
          I write about technology, aviation, and my learning journey. Here are some recent posts.
        </p>
        
        <div className="space-y-6">
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
          ) : featuredPosts.length > 0 ? (
            featuredPosts.map((post) => (
              <Link 
                key={post.id} 
                to={`/blog/${post.slug}`}
                className="group block transform transition-all duration-300 hover:scale-105 hover:-translate-y-2"
              >
                <Card className="animate-fade-in overflow-hidden h-full backdrop-blur-sm bg-card/80 border border-border/50 group-hover:bg-card/90 group-hover:border-primary/30 group-hover:shadow-xl group-hover:shadow-primary/10 transition-all duration-300">
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="md:w-1/4 h-48 md:h-auto">
                      {post.cover_image && (
                        <img 
                          src={post.cover_image} 
                          alt={post.title} 
                          className="object-cover w-full h-full group-hover:brightness-110 transition-all duration-300"
                        />
                      )}
                      {!post.cover_image && (
                        <div className="flex items-center justify-center w-full h-full bg-secondary/50 backdrop-blur-sm group-hover:bg-primary/10 transition-all duration-300">
                          <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">No image</p>
                        </div>
                      )}
                    </div>
                    <div className="md:w-3/4 flex flex-col">
                      <CardHeader className="pb-2">
                        <CardTitle className="group-hover:text-primary transition-colors duration-300">{post.title}</CardTitle>
                        <CardDescription className="group-hover:text-foreground/80 transition-colors duration-300">{post.date}</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2 flex-grow">
                        <p className="group-hover:text-foreground/90 transition-colors duration-300">{post.preview || post.excerpt}</p>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </Link>
            ))
          ) : (
            <Card className="text-center p-8">
              <p>No blog posts available yet.</p>
            </Card>
          )}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/blog">
            <Button>View All Posts</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
