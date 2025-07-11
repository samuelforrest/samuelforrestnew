import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  imageUrl?: string;
};

export function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "✍️ Blog",
      description: "My blog where I explore Computer Science, AI and aviation topics in detail, sharing insights from my studies and projects outside of school.",
      tags: ["Writing", "Research"],
      link: "#blog",
    },
    {
      title: "✈️ EPQ (Extended Project Qualification)",
      description: "For my EPQ, I researched the question: 'To what extent is it feasible to reintroduce commercial supersonic air travel by 2040?' This project involves a detailed investigation into the economic, environmental, regulatory, safety and technological factors. Public release due Sept 2025.",
      tags: ["Research", "Aviation", "Engineering"],
      link: "/assets/epq_abstract.pdf"
    },
    {
      title: "💻 NEA (Computer Science Non-Examined Assesment)",
      description: "My NEA is a mobile stock simulator app, designed to teach users how buying and selling shares works in a simplified, interactive, yet realistic environment. ",
      tags: ["Javascript", "Typescript", "Databases", "Documentation", "React Native", "Figma"],
      link: "/assets/nea_draft.pdf"
    },
    {
      title: "🎤 The Revision Podcast",
      description: "With the use of advanced AI, I have created a podcast in which 2 AI hosts discuss topics, or entire sylabbuss for A Level and GCSE, helping students who are auditory learners.",
      tags: ["ChatGPT", "Podcasting", "Spotify", "AI", "Google NotebookLLM"],
      link: "https://open.spotify.com/show/568FPtKmIlTgWgaDAfap03"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container-narrow">
        <h2 className="section-heading">Projects</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
          Here's a selection of personal projects I've been working on, showcasing my interests and skills.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="group block transform transition-all duration-300 hover:scale-105 hover:-translate-y-2"
              target={project.link?.startsWith('http') ? '_blank' : '_self'}
              rel={project.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <Card className="overflow-hidden animate-fade-in h-full backdrop-blur-sm bg-card/80 border border-border/50 group-hover:bg-card/90 group-hover:border-primary/30 group-hover:shadow-xl group-hover:shadow-primary/10 transition-all duration-300">
                {project.imageUrl && (
                  <div className="h-48 w-full bg-secondary/50 backdrop-blur-sm" />
                )}
                <CardHeader className="pb-3">
                  <CardTitle className="group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                  <CardDescription className="group-hover:text-foreground/80 transition-colors duration-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-secondary/70 backdrop-blur-sm rounded-md text-xs group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
      <div className="mt-6 flex justify-center mb-0">
        <Button variant="link" className="text-sm p-0 flex items-center gap-1" asChild>
          <a href="/projects">
            View Other Projects
            <span aria-hidden="true">→</span>
          </a>
        </Button>
      </div>
    </section>
  );
}
