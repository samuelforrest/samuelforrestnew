import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-2">Projects</h1>
        <p className="text-base text-muted-foreground mb-8 text-center max-w-xl px-6">
          A collection of cool AI and personal projects hosted publicly on the (subdomain).samuelforrest.me server
        </p>
        <ul className="list-disc pl-6 space-y-3 text-lg">
          <li>
            <a href="https://www.bionewsweekly.com" className="text-primary underline">
              bionewsweekly.com - - - - - A biology news website made for a client (Professional)
            </a>
          </li>
          <li>
            <a href="https://ai.samuelforrest.me" className="text-primary underline">
              ai.samuelforrest.me - - - - - An AI Homework Helper landing page (Lovable)
            </a>
          </li>
          <li>
            <a href="https://passwords.samuelforrest.me" className="text-primary underline">
              passwords.samuelforrest.me  - - - - - A password generator with database - ⚠️ Unsecure (Personal)
            </a>
          </li>
          <li>
            <a href="https://qr.samuelforrest.me" className="text-primary underline">
              qr.samuelforrest.me - - - - - A QR code generator (Lovable)
            </a>
          </li>
          <li>
            <a href="https://pmt.samuelforrest.me" className="text-primary underline">
              pmt.samuelforrest.me - - - - - A cool alternative to pmt, a way to find and record your past papers (Lovable)
            </a>
          </li>
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;