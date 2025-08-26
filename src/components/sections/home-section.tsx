import { Button } from "@/components/ui/button";
import { ArrowDown, Instagram, Github, Youtube, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export function HomeSection() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6"
    >
      <div className="animate-fade-in opacity-0 [animation-fill-mode:forwards]">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
          Samuel Forrest
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
          Student, Tutor, Developer, Aviation Enthusiast
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
          <div className="flex flex-row sm:contents gap-4 justify-center">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none"
            >
              <Button variant="outline" className="w-full sm:w-auto px-6 hover:scale-105 transition-transform duration-200">
                Download CV
              </Button>
            </a>
          </div>
          <div className="sm:order-first">
            <Link to="/ai">
              <Button 
                className="w-full sm:w-auto px-6 hover:scale-105 transition-transform duration-200 bg-gradient-to-r from-blue-500 to-orange-500 text-white"
              >
                Talk to Sam's AI
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mt-4 animate-fade-in opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards]">
          <a href="https://www.instagram.com/samueljforrest/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-all duration-200 hover:scale-110">
            <Instagram size={24} />
            <span className="sr-only">Instagram</span>
          </a>
          <a href="https://github.com/samuelforrest" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-all duration-200 hover:scale-110">
            <Github size={24} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.youtube.com/@samueljforrest" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-all duration-200 hover:scale-110">
            <Youtube size={24} />
            <span className="sr-only">YouTube</span>
          </a>
          <a href="https://www.linkedin.com/in/samueljforrest/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-all duration-200 hover:scale-110">
            <Linkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-[calc(50%-10px)] transform -translate-x-1/2 animate-fade-in opacity-0 [animation-delay:1000ms] [animation-fill-mode:forwards]">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={scrollToAbout}
          aria-label="Scroll down"
          className="hover:scale-110 transition-transform duration-200 animate-bounce"
        >
          <ArrowDown className="h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
