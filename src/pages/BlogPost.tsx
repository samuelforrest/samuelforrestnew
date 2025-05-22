
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// This would come from a database in a real application
const blogPosts = {
  "ai-in-aviation": {
    title: "Exploring the Future of AI in Aviation",
    date: "May 15, 2024",
    author: "Samuel Forrest",
    category: "Technology",
    content: `
      <p class="mb-4">Artificial intelligence is rapidly transforming many industries, and aviation is no exception. From flight planning to maintenance prediction and passenger service, AI is making air travel safer, more efficient, and more comfortable.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Flight Planning and Optimization</h2>
      <p class="mb-4">Airlines are increasingly using AI algorithms to optimize flight routes, considering factors such as weather conditions, air traffic, and fuel consumption. These systems can dynamically adjust routes in real-time, reducing flight times and fuel usage.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Predictive Maintenance</h2>
      <p class="mb-4">One of the most promising applications of AI in aviation is predictive maintenance. By analyzing data from thousands of sensors on aircraft, AI systems can detect potential issues before they become serious problems, reducing unscheduled maintenance and improving safety.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Enhanced Safety Measures</h2>
      <p class="mb-4">AI is also being used to enhance safety in aviation. For example, computer vision systems can monitor runways for foreign objects or wildlife, reducing the risk of accidents during takeoff and landing.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Future Developments</h2>
      <p class="mb-4">Looking ahead, we can expect to see even more advanced AI applications in aviation, including fully autonomous aircraft for cargo transport and AI-powered air traffic control systems that can handle increasing air traffic volumes safely and efficiently.</p>
      
      <p class="mt-8">As a student interested in both technology and aviation, I'm excited to see how these developments will shape the future of air travel. The intersection of AI and aviation represents a fascinating field with numerous opportunities for innovation and improvement.</p>
    `
  },
  "return-of-supersonic-travel": {
    title: "The Return of Supersonic Travel",
    date: "April 28, 2024",
    author: "Samuel Forrest",
    category: "Aviation",
    content: `
      <p class="mb-4">After the retirement of Concorde in 2003, commercial supersonic air travel seemed to be a thing of the past. However, new technologies and business models are making supersonic flight viable again, potentially revolutionizing long-distance travel.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">The Sonic Boom Challenge</h2>
      <p class="mb-4">One of the biggest obstacles to supersonic flight over land has been the sonic boom - the loud noise created when an aircraft breaks the sound barrier. Several companies are developing "low-boom" technologies that reduce this noise to acceptable levels, which could allow supersonic flights over populated areas.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Fuel Efficiency Improvements</h2>
      <p class="mb-4">Modern materials and engine designs offer significantly better fuel efficiency than the older Concorde, making supersonic travel more economically viable and environmentally sustainable.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">New Business Models</h2>
      <p class="mb-4">Rather than focusing solely on luxury travel like Concorde did, some new supersonic jet companies are targeting business travelers with smaller, more efficient aircraft that can operate from existing airports.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Regulatory Changes</h2>
      <p class="mb-4">Aviation authorities are reviewing regulations related to supersonic flight, potentially opening the door for commercial operations in the coming decade.</p>
      
      <p class="mt-8">As part of my EPQ research on supersonic air transport, I've been studying these developments closely. The potential return of commercial supersonic travel represents an exciting development in aviation, potentially reducing travel times between major global cities by more than 50%.</p>
    `
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;
  
  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Samuel Forrest`;
    } else {
      document.title = "Post Not Found | Samuel Forrest";
    }
    window.scrollTo(0, 0);
  }, [post, slug]);
  
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
            <Link to="/blog">
              <Button>Back to Blog</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow mt-20 pt-6 pb-16">
        <article className="container-narrow px-4">
          <Link to="/blog" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to all posts
          </Link>
          
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 font-serif">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span>{post.date}</span>
              <span>•</span>
              <span>By {post.author}</span>
              <span>•</span>
              <span className="bg-secondary px-2 py-1 rounded-full text-xs">
                {post.category}
              </span>
            </div>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <div className="border-t mt-16 pt-8">
            <h3 className="text-xl font-bold mb-4">Share this post</h3>
            <div className="flex gap-4">
              <Button variant="outline" size="sm">Twitter</Button>
              <Button variant="outline" size="sm">LinkedIn</Button>
              <Button variant="outline" size="sm">Facebook</Button>
            </div>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
