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
      description: "My blog where I explore Computer Science, AI and aviation topics in detail, sharing insights from my studies outside of school.",
      tags: ["Writing", "Research"],
      link: "#blog",
    },
    {
      title: "✈️ EPQ (Extended Project Qualification)",
      description: "For my EPQ, I researched the question: 'To what extent is it feasible to reintroduce commercial supersonic air travel by 2040?' This project involves a detailed investigation into the economic, environmental, regulatory, safety and technological factors.",
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
      tags: ["ChatGPT, Podcasting, Spotify, AI, Google NotebookLLM"],
      link: "https://open.spotify.com/show/568FPtKmIlTgWgaDAfap03"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-heading">Projects</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
          Here's a selection of personal projects I've been working on, showcasing my interests and skills.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden animate-fade-in hover:shadow-md transition-shadow">
              {project.imageUrl && (
                <div className="h-48 w-full bg-secondary" />
              )}
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 bg-secondary rounded-md text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              {project.link && (
                <CardFooter className="pt-0">
                  <Button variant="link" className="p-0" asChild>
                    <a href={project.link}>Learn more</a>
                  </Button>
                </CardFooter>
              )}
            </Card>
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
