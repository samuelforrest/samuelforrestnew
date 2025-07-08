import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow mt-20 pt-6">
        <div className="container-narrow px-4">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4 font-serif">Projects</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of my <b>Best</b> projects
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <ul className="space-y-4">
              <li className="bg-card border-2 rounded-lg p-4 hover:shadow-md transition-all duration-200">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-border flex-shrink-0">
                      <img 
                        src="/assets/logo-bionewsweekly.png" 
                        alt="bionewsweekly.com logo" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const nextSibling = e.currentTarget.nextElementSibling as HTMLElement;
                          if (nextSibling) {
                            nextSibling.style.display = 'flex';
                            nextSibling.classList.remove('hidden');
                          }
                        }}
                      />
                      <div className="w-full h-full bg-muted rounded-lg items-center justify-center text-xs text-muted-foreground hidden">BN</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary mb-1">bionewsweekly.com</h3>
                      <p className="text-sm text-muted-foreground mb-3"><b>Client: </b>A biology news website with admin portal. Featured in Blog.</p>
                      <div className="flex gap-2">
                        <Button size="sm" asChild>
                          <a href="https://www.bionewsweekly.com" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-1" />
                            View Site
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <a href="https://github.com/samuelforrest/bionewsweekly.com" target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-1" />
                            GitHub
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="bg-card border-2 rounded-lg p-4 hover:shadow-md transition-all duration-200">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-border flex-shrink-0">
                      <img 
                        src="/assets/logo-zoecc.png" 
                        alt="ZoeCC.co.uk logo" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const nextSibling = e.currentTarget.nextElementSibling as HTMLElement;
                          if (nextSibling) {
                            nextSibling.style.display = 'flex';
                            nextSibling.classList.remove('hidden');
                          }
                        }}
                      />
                      <div className="w-full h-full bg-muted rounded-lg items-center justify-center text-xs text-muted-foreground hidden">AI</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary mb-1">zoecc.co.uk</h3>
                      <p className="text-sm text-muted-foreground mb-3"><b>Client:</b> Zoe's Cat Care Website</p>
                      <div className="flex gap-2">
                        <Button size="sm" asChild>
                          <a href="https://zoecc.co.uk" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-1" />
                            View Site
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <a href="https://github.com/samuelforrest/ZoeCC.co.uk" target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-1" />
                            GitHub
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="bg-card border-2 rounded-lg p-4 hover:shadow-md transition-all duration-200">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-border flex-shrink-0">
                      <img 
                        src="/assets/logo-samuelforrestwebsite.png" 
                        alt="samuelforrest.me logo" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const nextSibling = e.currentTarget.nextElementSibling as HTMLElement;
                          if (nextSibling) {
                            nextSibling.style.display = 'flex';
                            nextSibling.classList.remove('hidden');
                          }
                        }}
                      />
                      <div className="w-full h-full bg-muted rounded-lg items-center justify-center text-xs text-muted-foreground hidden">PW</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary mb-1">samuelforrest.me</h3>
                      <p className="text-sm text-muted-foreground mb-3"><b>Personal: </b>A website to introduce myself online and share my blog</p>
                      <div className="flex gap-2">
                        <Button size="sm" asChild>
                          <a href="https://samuelforrest.me" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-1" />
                            View Site
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <a href="https://github.com/samuelforrest/samuelforrest.me" target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-1" />
                            GitHub
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="bg-card border-2 rounded-lg p-4 hover:shadow-md transition-all duration-200">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-border flex-shrink-0">
                      <img 
                        src="/assets/logo-qrcodegenerator.png" 
                        alt="qr.samuelforrest.me logo" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const nextSibling = e.currentTarget.nextElementSibling as HTMLElement;
                          if (nextSibling) {
                            nextSibling.style.display = 'flex';
                            nextSibling.classList.remove('hidden');
                          }
                        }}
                      />
                      <div className="w-full h-full bg-muted rounded-lg items-center justify-center text-xs text-muted-foreground hidden">QR</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary mb-1">qr.samuelforrest.me</h3>
                      <p className="text-sm text-muted-foreground mb-3"><b>Personal: </b>A QR code generator project</p>
                      <div className="flex gap-2">
                        <Button size="sm" asChild>
                          <a href="https://qr.samuelforrest.me" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-1" />
                            View Site
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <a href="https://github.com/samuelforrest/qr.samuelforrest.me" target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-1" />
                            GitHub
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="bg-card border-2 rounded-lg p-4 hover:shadow-md transition-all duration-200">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-border flex-shrink-0">
                      <img 
                        src="/assets/logo-verdapp.png" 
                        alt="verdapp.xyz logo" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const nextSibling = e.currentTarget.nextElementSibling as HTMLElement;
                          if (nextSibling) {
                            nextSibling.style.display = 'flex';
                            nextSibling.classList.remove('hidden');
                          }
                        }}
                      />
                      <div className="w-full h-full bg-muted rounded-lg items-center justify-center text-xs text-muted-foreground hidden">PMT</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary mb-1">verdapp.xyz</h3>
                      <p className="text-sm text-muted-foreground mb-3"><b>Hackathon Winner: </b>Environmental app for KTHack25. Read blog.</p>
                      <div className="flex gap-2">
                        <Button size="sm" asChild>
                          <a href="https://verdapp.xyz" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-1" />
                            View Site
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <a href="https://github.com/samuelforrest/verdapp.xyz" target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-1" />
                            GitHub
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground mb-4">
              If you've got this far, you might as well:
            </p>
            <Button asChild>
              <a href="/blog">
                View Blog
              </a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;