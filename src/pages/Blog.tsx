
import { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getAllBlogPosts, type BlogPost } from "@/services/blogService";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { SEO } from "@/components/SEO";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
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
      }
    }

    fetchPosts();
  }, []);

  const categories = [...new Set(blogPosts.map(post => post.category))];
  
  const filteredPosts = selectedCategory 
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts;

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Samuel Forrest | Blog"
        description="Read Samuel Forrest's blog posts covering technology, software development, aviation, and AI."
        keywords="Samuel Forrest blog, technology blog, software development articles, programming tutorials, aviation blog, computer science blog, student developer blog, A Level Computer Science, coding insights, tech articles, programming tips, software engineering blog, AI, AI tools"
        ogTitle="Samuel Forrest | Blog"
        ogDescription="Read Samuel Forrest's blog posts covering technology, software development, aviation, and AI."
        canonicalUrl="https://samuelforrest.me/blog"
      />
      <Header />
      
      <main className="flex-grow mt-20 pt-6">
        <div className="container-narrow px-4">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4 font-serif">Blog</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Thoughts, ideas, and insights on technology, aviation, and more.
            </p>
          </div>
          
          <div className="mb-8 flex flex-wrap gap-3 justify-center">
            <Button 
              variant={selectedCategory === null ? "default" : "outline"} 
              className="rounded-full"
              onClick={() => setSelectedCategory(null)}
            >
              All
            </Button>
            {categories.map((category, index) => (
              <Button 
                key={index} 
                variant={selectedCategory === category ? "default" : "outline"} 
                className="rounded-full"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          
          {loading ? (
            <div className="flex justify-center p-8">
              <div className="animate-pulse">Loading posts...</div>
            </div>
          ) : filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <Link 
                  key={post.id} 
                  to={`/blog/${post.slug}`}
                  className="group block transform transition-all duration-300 hover:scale-105 hover:-translate-y-2"
                >
                  <Card className="animate-fade-in overflow-hidden h-full backdrop-blur-sm bg-card/80 border border-border/50 group-hover:bg-card/90 group-hover:border-primary/30 group-hover:shadow-xl group-hover:shadow-primary/10 transition-all duration-300">
                    <div className="w-full h-48 bg-muted">
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
                    <CardHeader className="pb-2">
                      <div className="mb-2">
                        <span className="text-xs bg-secondary/70 backdrop-blur-sm px-2 py-1 rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300">
                          {post.category}
                        </span>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors duration-300">{post.title}</CardTitle>
                      <CardDescription className="group-hover:text-foreground/80 transition-colors duration-300">{post.date}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="group-hover:text-foreground/90 transition-colors duration-300">{post.preview || post.excerpt}</p>
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
      
      <Footer />
    </div>
  );
};

export default Blog;
