
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
      title: "Computer Science Blog",
      description: "A blog where I explore AI and cybersecurity topics, sharing insights and learnings from my studies.",
      tags: ["React", "Next.js", "Tailwind CSS"],
      link: "#blog",
    },
    {
      title: "EPQ: Supersonic Air Transport",
      description: "Research project on the reintroduction of supersonic air transport, examining technical and commercial viability.",
      tags: ["Research", "Aviation", "Engineering"],
    },
    {
      title: "VATSIM Flight Simulator Setup",
      description: "Custom flight simulation setup for participating in VATSIM events as both a pilot and air traffic controller.",
      tags: ["Simulation", "Aviation", "Networking"],
    },
    {
      title: "Personal Website",
      description: "This website, built to showcase my projects and experience while demonstrating web development skills.",
      tags: ["React", "TypeScript", "Tailwind CSS"],
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
    </section>
  );
}
