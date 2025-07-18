import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { getBlogPostBySlug, type BlogPost } from "@/services/blogService";
import { LikeButton } from "@/components/LikeButton";
import { CommentsSection } from "@/components/CommentsSection";
import { AISummaryComponent } from "@/components/AISummaryComponent";
import { SEO } from "@/components/SEO";
import "../components/QuillContent.css";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchPost() {
      if (!slug) return;
      
      try {
        const fetchedPost = await getBlogPostBySlug(slug);
        setPost(fetchedPost);
        
        if (fetchedPost) {
          document.title = `${fetchedPost.title} | Samuel Forrest`;
        } else {
          document.title = "Post Not Found | Samuel Forrest";
        }
      } catch (error) {
        console.error("Error fetching blog post:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
    window.scrollTo(0, 0);
  }, [slug]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-pulse">Loading post...</div>
        </div>
        <Footer />
      </div>
    );
  }
  
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
      <SEO
        title={post?.title || "Blog Post"}
        description={post?.excerpt || "Read this blog post by Samuel Forrest covering technology, software development, and more."}
        keywords={`${post?.title || "blog post"}, Samuel Forrest blog, ${post?.category || "technology"}, software development, programming, tech articles, AI, AI article`}
        ogTitle={post?.title || "Blog Post - Samuel Forrest"}
        ogDescription={post?.excerpt || "Read this blog post by Samuel Forrest covering technology, software development, and more."}
        ogType="article"
        ogImage={post?.cover_image || "/assets/logo-samuelforrestwebsite.png"}
        canonicalUrl={`https://samuelforrest.me/blog/${slug}`}
      />
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
          
          {post.cover_image && (
            <div className="mb-8">
              <img 
                src={post.cover_image} 
                alt={post.title} 
                className="w-full h-auto rounded-lg shadow-lg" 
              />
            </div>
          )}
          
          <AISummaryComponent 
            postId={post.id} 
            title={post.title} 
            content={post.content || ''} 
          />
          
          <div 
            className="ql-editor prose prose-lg dark:prose-invert max-w-none mb-8"
            dangerouslySetInnerHTML={{ __html: post.content || '' }}
          />

          <div className="flex items-center gap-4 mb-8 py-4 border-y">
            <LikeButton blogId={post.id} />
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const url = encodeURIComponent(window.location.href);
                  const text = encodeURIComponent(post.title);
                  window.open(
                    `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
              >
                Share on Twitter
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const url = encodeURIComponent(window.location.href);
                  const title = encodeURIComponent(post.title);
                  window.open(
                    `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`,
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
              >
                Share on LinkedIn
              </Button>
            </div>
          </div>

          <CommentsSection blogId={post.id} />
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
