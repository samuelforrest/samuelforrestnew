
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  category: string;
};

const Blog = () => {
  const blogPosts: BlogPost[] = [
    {
      title: "Exploring the Future of AI in Aviation",
      excerpt: "How artificial intelligence is transforming the aviation industry, from flight planning to maintenance prediction.",
      date: "May 15, 2024",
      slug: "ai-in-aviation",
      category: "Technology",
    },
    {
      title: "The Return of Supersonic Travel",
      excerpt: "An analysis of new technologies making supersonic commercial flight viable again after Concorde's retirement.",
      date: "April 28, 2024",
      slug: "return-of-supersonic-travel",
      category: "Aviation",
    },
    {
      title: "Introduction to VATSIM Flight Simulation",
      excerpt: "Getting started with virtual air traffic simulation and building a home cockpit setup for realistic training.",
      date: "April 2, 2024",
      slug: "vatsim-introduction",
      category: "Aviation",
    },
    {
      title: "Understanding Cybersecurity Fundamentals",
      excerpt: "A beginner's guide to cybersecurity concepts, common threats, and basic protection strategies.",
      date: "March 20, 2024",
      slug: "cybersecurity-fundamentals",
      category: "Security",
    },
    {
      title: "My Experience with the EPQ Process",
      excerpt: "Reflections on researching and writing an Extended Project Qualification on supersonic air transport.",
      date: "March 5, 2024",
      slug: "epq-experience",
      category: "Education",
    },
    {
      title: "Building My First React Application",
      excerpt: "Lessons learned and challenges overcome while creating my first React-based web application.",
      date: "February 18, 2024",
      slug: "first-react-app",
      category: "Development",
    },
  ];

  const categories = [...new Set(blogPosts.map(post => post.category))];

  return (
    <div className="min-h-screen flex flex-col">
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
            <Button variant="outline" className="rounded-full">All</Button>
            {categories.map((category, index) => (
              <Button key={index} variant="outline" className="rounded-full">
                {category}
              </Button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="animate-fade-in">
                <CardHeader className="pb-4">
                  <div className="mb-2">
                    <span className="text-xs bg-secondary px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
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
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
