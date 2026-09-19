"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 tracking-tight">
            About Me
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-secondary leading-relaxed">
            <p>
              I am an <strong className="text-white">Artificial Intelligence & Data Science</strong> student at Yeshwantrao Chavan College of Engineering, with a strong foundation in <strong className="text-white">Full-Stack Development</strong> and <strong className="text-white">Creative Problem Solving</strong>.
            </p>
            
            <p>
              My technical interests revolve around building intelligent systems and robust applications. From architecting low-latency behavioral security engines to developing AI-powered ATS resume builders, I am driven by the challenge of turning complex data into scalable, high-performance solutions.
            </p>
            
            <p>
              Currently, my career direction is focused on the intersection of data engineering, machine learning, and modern web development, creating impactful software that bridges the gap between powerful algorithms and seamless user experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
