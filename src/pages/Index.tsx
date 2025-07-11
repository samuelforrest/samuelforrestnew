
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
        title="Samuel Forrest | CV"
        description="Samuel Forrest - Student, Developer, Aviation Enthusiast & Tutor. Explore my CV, Projects and Blog."
        keywords="Samuel Forrest, CV, Samuel Forrest CV, Resume, Computer Science Student, Software Engineer, Developer, Aviation Enthusiast, Greater London, UK, A Level Computer Science, Programmer, React, JavaScript, Python, OCR Computer Science, Edexcel Maths, AQA Physics, Tech CV, Student Developer, App Developer, Software Engineering, Teddington, Weybridge, Sixth Form Student, samuelforrest.me, Sam Forrest, AI blog, samuelforrest, Samuelforrest.com, samuelforrest website,"
        ogTitle="Samuel Forrest - Student, Developer, Aviation Enthusiast & Tutor"
        ogDescription="Samuel Forrest - Student, Developer, Aviation Enthusiast & Tutor. Explore my CV, Projects and Blog."
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
