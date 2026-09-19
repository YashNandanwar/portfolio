"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Award } from "lucide-react";

export function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-card/30 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Achievements & Certifications</h2>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-xl group hover:border-white/20 hover:bg-white/5 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-accent mt-1">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white leading-tight mb-1">{achievement.name}</h3>
                  <p className="text-secondary font-medium text-sm">{achievement.issuer}</p>
                </div>
              </div>
              {achievement.context && (
                <p className="text-white/60 text-sm mt-4 pt-4 border-t border-white/10">
                  {achievement.context}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
