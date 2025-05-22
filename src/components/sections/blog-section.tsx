
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
};

export function BlogSection() {
  const featuredPosts: BlogPost[] = [
    {
      title: "Exploring the Future of AI in Aviation",
      excerpt: "How artificial intelligence is transforming the aviation industry, from flight planning to maintenance prediction.",
      date: "May 15, 2024",
      slug: "ai-in-aviation",
    },
    {
      title: "The Return of Supersonic Travel",
      excerpt: "An analysis of new technologies making supersonic commercial flight viable again after Concorde's retirement.",
      date: "April 28, 2024",
      slug: "return-of-supersonic-travel",
    },
    {
      title: "Introduction to VATSIM Flight Simulation",
      excerpt: "Getting started with virtual air traffic simulation and building a home cockpit setup for realistic training.",
      date: "April 2, 2024",
      slug: "vatsim-introduction",
    },
  ];

  return (
    <section id="blog" className="section bg-secondary/30">
      <div className="container-narrow">
        <h2 className="section-heading">Blog</h2>
        <p className="text-lg text-muted-foreground mb-8">
          I write about technology, aviation, and my learning journey. Here are some recent posts.
        </p>
        
        <div className="space-y-6">
          {featuredPosts.map((post, index) => (
            <Card key={index} className="animate-fade-in">
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
          ))}
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
