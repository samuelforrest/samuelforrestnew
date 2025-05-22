
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  const skills = [
    "HTML/CSS", 
    "TypeScript", 
    "React Native",
    "Git/GitHub",
    "Problem Solving",
    "Communication",
    "Public Speaking"
  ];

  return (
    <section id="about" className="section bg-secondary/30">
      <div className="container-narrow">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12 animate-fade-in">
          <div className="col-span-1 md:col-span-3">
            <p className="text-lg mb-4">
              I'm a highly motivated student with a keen interest in technology, aviation, and engineering. 
              Passionate about developing websites and applications, I am eager to gain practical experience 
              in software engineering or aviation, where I can apply my problem-solving and coding skills.
            </p>
            <p className="text-lg mb-4">
              Currently studying A-Levels in Computer Science, Mathematics, Physics, and working on an EPQ 
              focused on the reintroduction of supersonic air transport.
            </p>
            <p className="text-lg">
              I'm particularly interested in roles where I can contribute to innovative projects and learn new skills.
            </p>
          </div>
          <div className="col-span-1 md:col-span-2">
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 font-serif">Education</h3>
                <div className="mb-6">
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium">St George's College, Weybridge</h4>
                    <span className="text-sm text-muted-foreground">2024-Present</span>
                  </div>
                  <p className="text-sm text-muted-foreground">A Level Student</p>
                  <p className="text-sm mt-1">Computer Science, Mathematics, Physics, and EPQ</p>
                </div>
                <div>
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium">St George's College, Weybridge</h4>
                    <span className="text-sm text-muted-foreground">2021-2024</span>
                  </div>
                  <p className="text-sm text-muted-foreground">GCSE Student</p>
                  <p className="text-sm mt-1">Multiple Grade 9s (A*) including Physics, Chemistry, Biology, Computer Science</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold mb-6 font-serif animate-fade-in">Skills & Experience</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="animate-fade-in">
            <h4 className="text-xl font-medium mb-4">Technical Skills</h4>
            <div className="flex flex-wrap gap-2">
              {skills.map(skill => (
                <span 
                  key={skill}
                  className="px-3 py-1 bg-secondary rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="animate-fade-in">
            <h4 className="text-xl font-medium mb-4">Work Experience</h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-start">
                  <h5 className="font-medium">Private Tutor – Computer Science</h5>
                  <span className="text-sm text-muted-foreground">Oct 2024-Present</span>
                </div>
                <p className="text-sm mt-1">Tutoring GCSE Computer Science students, providing structured lessons and resources.</p>
              </div>
              <div>
                <div className="flex justify-between items-start">
                  <h5 className="font-medium">App Development Shadowing – HUDJO</h5>
                  <span className="text-sm text-muted-foreground">Aug-Sept 2024</span>
                </div>
                <p className="text-sm mt-1">Improved application development skills with a bike app startup recently funded by Deliveroo.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="animate-fade-in">
            <h4 className="text-xl font-medium mb-4">Achievements</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Academic scholarship for excellence (2022 & Sixth Form)</li>
              <li>Duke of Edinburgh Award (Bronze & Silver)</li>
              <li>Music – Grade 7 Saxophone and Grade 4 Piano</li>
              <li>Won aerospace competition hosted by Virgin Atlantic</li>
            </ul>
          </div>
          
          <div className="animate-fade-in">
            <h4 className="text-xl font-medium mb-4">Interests</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Flight simulation enthusiast (VATSIM events as pilot and air traffic controller)</li>
              <li>Rowed for three years, earning medals in various races</li>
              <li>Running a Computer Science Blog exploring AI and cybersecurity topics</li>
              <li>Aerospace engineering and aviation technology</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
