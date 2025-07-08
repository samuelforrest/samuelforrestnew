
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HomeSection } from "@/components/sections/home-section";
import { AboutSection } from "@/components/sections/about-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { BlogSection } from "@/components/sections/blog-section";
import { ContactSection } from "@/components/sections/contact-section";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Home"
        description="Samuel Forrest - A Level Student, Software Developer, Aviation Enthusiast & Tutor. Explore my projects, blog posts, and professional journey in computer science and software engineering."
        keywords="Samuel Forrest, CV, Resume, Computer Science Student, Software Engineer, Developer, Aviation Enthusiast, Greater London, UK, A Level Computer Science, Programmer, React, JavaScript, Python, OCR Computer Science, Edexcel Maths, AQA Physics, Tech CV, Student Developer, App Developer, Software Engineering, Teddington, Weybridge, Sixth Form Student"
        ogTitle="Samuel Forrest - Student Developer & Aviation Enthusiast"
        ogDescription="A Level Computer Science student passionate about software development and aviation. Discover my projects, blog, and professional journey."
        canonicalUrl="https://samuelforrest.me/"
      />
      <Header />
      
      <main className="flex-grow">
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <BlogSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
