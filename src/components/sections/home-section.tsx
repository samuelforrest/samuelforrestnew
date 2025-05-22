
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

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
      <div className="animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif">
          Samuel Forrest
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Student, Developer, Aviation Enthusiast
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={scrollToAbout} 
            className="px-6"
          >
            Learn more about me
          </Button>
          <Button 
            variant="outline" 
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                window.scrollTo({
                  top: contactSection.offsetTop - 80,
                  behavior: "smooth",
                });
              }
            }}
            className="px-6"
          >
            Get in touch
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={scrollToAbout}
          aria-label="Scroll down"
        >
          <ArrowDown className="h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
