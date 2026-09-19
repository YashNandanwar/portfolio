"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Education</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto grid gap-6">
          {resumeData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl flex flex-col md:flex-row gap-6 md:items-center justify-between group hover:border-white/20 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{edu.institution}</h3>
                  <p className="text-white/80 font-medium mb-1">{edu.degree}</p>
                  <p className="text-secondary text-sm">{edu.score}</p>
                </div>
              </div>
              <div className="md:text-right flex flex-col items-start md:items-end md:ml-auto pl-14 md:pl-0">
                <span className="text-white/60 font-mono text-sm mb-1">{edu.period}</span>
                <span className="text-secondary text-sm">{edu.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
