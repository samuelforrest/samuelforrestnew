
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { getAllBlogPosts, type BlogPost } from "@/services/blogService";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function BlogSection() {
  const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const posts = await getAllBlogPosts();
        setFeaturedPosts(posts.slice(0, 3)); // Get just the first 3 posts for the homepage
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <section id="blog" className="section bg-secondary/30">
      <div className="container-narrow">
        <h2 className="section-heading">Blog</h2>
        <p className="text-lg text-muted-foreground mb-8">
          I write about technology, aviation, and my learning journey. Here are some recent posts.
        </p>
        
        <div className="space-y-6">
          {loading ? (
            <div className="flex justify-center p-8">
              <div className="animate-pulse">Loading posts...</div>
            </div>
          ) : featuredPosts.length > 0 ? (
            featuredPosts.map((post) => (
              <Card key={post.id} className="animate-fade-in overflow-hidden">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="md:w-1/4 h-48 md:h-auto">
                    {post.cover_image && (
                      <img 
                        src={post.cover_image} 
                        alt={post.title} 
                        className="object-cover w-full h-full"
                      />
                    )}
                    {!post.cover_image && (
                      <div className="flex items-center justify-center w-full h-full bg-muted">
                        <p className="text-muted-foreground">No image</p>
                      </div>
                    )}
                  </div>
                  <div className="md:w-3/4 flex flex-col">
                    <CardHeader className="pb-2">
                      <CardTitle>{post.title}</CardTitle>
                      <CardDescription>{post.date}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2 flex-grow">
                      <p>{post.preview || post.excerpt}</p>
                    </CardContent>
                    <CardFooter>
                      <Link to={`/blog/${post.slug}`}>
                        <Button variant="outline">Read Post</Button>
                      </Link>
                    </CardFooter>
                  </div>
                </div>
              </Card>
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
