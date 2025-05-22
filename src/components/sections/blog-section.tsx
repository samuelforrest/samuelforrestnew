
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { getAllBlogPosts, type BlogPost } from "@/services/blogService";

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
            featuredPosts.map((post, index) => (
              <Card key={post.id} className="animate-fade-in">
                <CardHeader className="pb-4">
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Link to={`/blog/${post.slug}`}>
                    <Button variant="outline">Read Post</Button>
                  </Link>
                </CardFooter>
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
