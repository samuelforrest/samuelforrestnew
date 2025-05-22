
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HomeSection } from "@/components/sections/home-section";
import { AboutSection } from "@/components/sections/about-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { BlogSection } from "@/components/sections/blog-section";
import { ContactSection } from "@/components/sections/contact-section";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
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
