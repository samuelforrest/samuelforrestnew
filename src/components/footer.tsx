
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t py-8 px-6 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Samuel Forrest. All rights reserved.
          </p>
        </div>
        
        <div className="flex gap-8">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Projects
          </a>
          <a href="#blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Blog
          </a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
