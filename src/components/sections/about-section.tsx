
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
        <h2 className="section-heading animate-fade-in">About Me</h2>
        
        {/* Introduction and Education Row */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
          <div className="col-span-1 lg:col-span-3 animate-fade-in [animation-delay:200ms]">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                I'm a highly motivated student with a keen interest in technology, aviation, and engineering. 
                Passionate about developing websites and applications, I am eager to gain practical experience 
                in software engineering or aviation, where I can apply my problem-solving and coding skills.
              </p>
              <p className="text-lg leading-relaxed">
                Currently studying A-Levels in Computer Science, Mathematics, Physics, and working on an EPQ 
                focused on the reintroduction of supersonic air transport.
              </p>
              <p className="text-lg leading-relaxed">
                I'm particularly interested in roles where I can contribute to innovative projects and learn new skills.
              </p>
            </div>
          </div>
          
          <div className="col-span-1 lg:col-span-2 animate-fade-in [animation-delay:400ms]">
            <Card className="h-full shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6 font-serif">Education</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">St George's College, Weybridge</h4>
                      <span className="text-sm text-muted-foreground">2024-Present</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">A Level Student</p>
                    <p className="text-sm">Computer Science, Mathematics, Physics, and EPQ</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">St George's College, Weybridge</h4>
                      <span className="text-sm text-muted-foreground">2021-2024</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">GCSE Student</p>
                    <p className="text-sm">Multiple Grade 9s (A*) including Physics, Chemistry, Biology, Computer Science</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Skills Section */}
        <div className="mb-16 animate-fade-in [animation-delay:600ms]">
          <h4 className="text-2xl font-bold mb-6 font-serif">Technical Skills</h4>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-secondary rounded-full text-sm hover:bg-secondary/80 transition-colors duration-200 animate-fade-in"
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        {/* Main Content Grid - Work Experience and Personal Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience Card */}
          <div className="animate-fade-in [animation-delay:1000ms]">
            <Card className="h-full shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 font-serif">Work Experience</h3>
                <div className="space-y-6">
                  <div className="border-l-2 border-primary/20 pl-4 hover:border-primary/40 transition-colors duration-200">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-medium">Private Tutor – Computer Science</h5>
                      <span className="text-sm text-muted-foreground">Oct 2024-Present</span>
                    </div>
                    <p className="text-sm">Tutoring GCSE Computer Science students, providing structured lessons and resources. 40+ hours taught.</p>
                  </div>
                  <div className="border-l-2 border-primary/20 pl-4 hover:border-primary/40 transition-colors duration-200">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-medium">App Development Shadowing – HUDJO</h5>
                      <span className="text-sm text-muted-foreground">Aug-Sept 2024</span>
                    </div>
                    <p className="text-sm">Improved application development skills with a bike app startup recently funded by Deliveroo.</p>
                  </div>
                  <div className="border-l-2 border-primary/20 pl-4 hover:border-primary/40 transition-colors duration-200">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-medium">3-Day Aerospace Course</h5>
                      <span className="text-sm text-muted-foreground">Aug-Sept 2024</span>
                    </div>
                    <p className="text-sm">Attended aerospace course at Kingston University hosted by Virgin Atlantic. Won team competition, improving communication and leadership skills.</p>
                  </div>
                  <div className="border-l-2 border-primary/20 pl-4 hover:border-primary/40 transition-colors duration-200">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-medium">Air Accident Investigation Branch (AAIB)</h5>
                      <span className="text-sm text-muted-foreground">April 2025</span>
                    </div>
                    <p className="text-sm">Visited the AAIB and connected with professionals including engineering inspectors and flight data extraction inspectors.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Achievements and Interests Column */}
          <div className="space-y-8">
            <div className="animate-fade-in [animation-delay:1200ms]">
              <h4 className="text-2xl font-bold mb-6 font-serif">Achievements</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors duration-200">
                  <span className="text-primary mt-1">🏆</span>
                  <p className="text-sm">Academic scholarships for excellence (2022 & Sixth Form)</p>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors duration-200">
                  <span className="text-primary mt-1">🥇</span>
                  <p className="text-sm">Duke of Edinburgh Award (Bronze & Silver), demonstrating resilience and teamwork.</p>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors duration-200">
                  <span className="text-primary mt-1">🎵</span>
                  <p className="text-sm">Music – Grade 7 Saxophone and Grade 4 Piano</p>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors duration-200">
                  <span className="text-primary mt-1">✈️</span>
                  <p className="text-sm">Won aerospace competition hosted by Virgin Atlantic</p>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors duration-200">
                  <span className="text-primary mt-1">💻</span>
                  <p className="text-sm">Won the KTHack25, with a functional MVP, receiving £300</p>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in [animation-delay:1400ms]">
              <h4 className="text-2xl font-bold mb-6 font-serif">Interests</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors duration-200">
                  <span className="text-primary mt-1">🛩️</span>
                  <p className="text-sm">Flight simulation enthusiast (VATSIM events as pilot and air traffic controller)</p>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors duration-200">
                  <span className="text-primary mt-1">🚣</span>
                  <p className="text-sm">Rowed for three years, earning medals in various races</p>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors duration-200">
                  <span className="text-primary mt-1">📝</span>
                  <p className="text-sm">Running a Computer Science Blog exploring AI and cybersecurity topics</p>
                </div>
                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors duration-200">
                  <span className="text-primary mt-1">🚀</span>
                  <p className="text-sm">Aerospace engineering and aviation technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
