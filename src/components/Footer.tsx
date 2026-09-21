import { resumeData } from "@/data/resume";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border mt-20 md:mt-32 py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
          <Link href="/" className="text-xl font-bold tracking-tighter">
            Yash<span className="text-secondary">.</span>
          </Link>
          <p className="text-secondary text-sm">Built with curiosity and code.</p>
        </div>
        
        <div className="flex items-center gap-6">
          <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors">
            <span className="sr-only">GitHub</span>
            <GithubIcon size={20} />
          </a>
          <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors">
            <span className="sr-only">LinkedIn</span>
            <LinkedinIcon size={20} />
          </a>
          <a href={`mailto:${resumeData.contact.email}`} className="text-secondary hover:text-white transition-colors">
            <span className="sr-only">Email</span>
            <Mail size={20} />
          </a>
        </div>
        
        <div className="text-secondary text-sm text-center md:text-right">
          &copy; {year} {resumeData.name}.
        </div>
      </div>
    </footer>
  );
}
