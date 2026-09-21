"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-10 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight">Featured Work</h2>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
          {resumeData.projects.map((project, index) => {
            const isFeatured = index === 0;
            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`group flex flex-col ${isFeatured ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
              >
                {/* Visual Placeholder */}
                <div className="w-full lg:w-1/2 aspect-video rounded-2xl overflow-hidden relative glass bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center p-4 sm:p-8 group-hover:border-white/20 transition-colors">
                  <div className="text-center transform group-hover:scale-105 transition-transform duration-500 max-w-full">
                    <h3 className="text-xl sm:text-3xl lg:text-4xl font-black tracking-tighter opacity-20 mb-4 px-2 break-words">{project.name}</h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto" />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 flex flex-col items-start">
                  {isFeatured && (
                    <span className="text-accent text-xs sm:text-sm font-medium tracking-wider uppercase mb-2">Featured Project</span>
                  )}
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">{project.name}</h3>
                  <p className="text-lg sm:text-xl text-white/80 mb-4 sm:mb-6 font-medium">{project.tagline}</p>
                  
                  <div className="glass p-4 sm:p-6 rounded-xl mb-6 text-secondary leading-relaxed shadow-xl text-sm sm:text-base">
                    <p className="mb-4">{project.description}</p>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-white/40 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map(tech => (
                      <span key={tech} className="text-xs sm:text-sm text-secondary font-mono bg-white/5 px-2.5 sm:px-3 py-1 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 text-white hover:text-accent transition-colors font-medium text-sm sm:text-base">
                      <GithubIcon size={20} />
                      Code
                    </button>
                    <button className="flex items-center gap-2 text-white hover:text-accent transition-colors font-medium text-sm sm:text-base">
                      <ExternalLink size={20} />
                      Live Demo
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
