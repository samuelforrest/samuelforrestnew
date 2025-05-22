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
      tags: ["React", "Research"],
      link: "#blog",
    },
    {
      title: "EPQ (Extended Project Qualification)",
      description: "For my EPQ, I researched the question: 'To what extent is it feasible to reintroduce commercial supersonic air travel by 2040?' This project involves a detailed investigation into the economic, environmental, regulatory, safety and technological factors.",
      tags: ["Research", "Aviation", "Engineering"],
      link: "/assets/epq_abstract.pdf"
    },
    {
      title: "NEA (Computer Science Non-Examined Assesment)",
      description: "y project is a stock market simulator app, designed to teach users how buying and selling shares works in a simplified, interactive, yet realistic environment. ",
      tags: ["Javascript", "Typescript", "Databases", "Documentation", "React Native", "Figma"],
      link: "/assets/nea_draft.pdf"
    },
    {
      title: "Notion Book for Computer Science",
      description: "Alongside my tutoring work, I’ve started creating Computer Science resource packs using Notion, AI tools, and my hands-on experience from both GCSE and A-Level Computing.",
      tags: ["Notion", "ChatGPT", "Tutoring", "Computer Science"],
      link: "https://samuelforrest.notion.site/A-Level-Computer-Science-Notes-OCR-H446-Specification-1f6f86b8ee7c807f935ef99dd1e4929f"
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
