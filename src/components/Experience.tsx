"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 60%"],
  });

  // Spring-smoothed timeline line draw progress
  const rawLine = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const lineHeight = useSpring(rawLine, { stiffness: 60, damping: 20 });

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-16 md:py-28 relative overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      {/* Subtle grid pattern */}
      <div className="exp-grid-bg" />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-5xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-20"
        >
          <p className="exp-eyebrow">Career Path</p>
          <h2 className="exp-heading">
            Work <span className="exp-heading-outline">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline container */}
        <div className="relative">

          {/* ── Animated vertical line ── */}
          <div className="exp-line-track">
            {/* Static background line (dim) */}
            <div className="exp-line-bg" />
            {/* Animated fill line */}
            <motion.div
              className="exp-line-fill"
              style={{ height: lineHeight }}
            />
            {/* Glowing tip that travels down the line */}
            <motion.div
              className="exp-line-tip"
              style={{ top: lineHeight }}
            />
          </div>

          {/* ── Experience entries ── */}
          <div className="space-y-12 sm:space-y-16 pl-10 sm:pl-14 md:pl-20">
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="relative">

                {/* Animated dot on the timeline */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: 0.15, type: "spring", stiffness: 260, damping: 20 }}
                  className="exp-dot"
                >
                  {/* Pulsing ring */}
                  <motion.div
                    className="exp-dot-ring"
                    animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
                  />
                  <Briefcase size={11} className="text-background relative z-10" />
                </motion.div>

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
                  className="exp-card group p-4 sm:p-6"
                >
                  {/* Card top glow line on hover */}
                  <div className="exp-card-top-line" />

                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <h3 className="exp-role">{exp.title}</h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1.5">
                        <span className="exp-meta-item">
                          <Briefcase size={11} className="opacity-60" />
                          {exp.company}
                        </span>
                        <span className="exp-meta-item">
                          <MapPin size={11} className="opacity-60" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Period badge */}
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.25, duration: 0.4 }}
                      className="exp-period-badge"
                    >
                      <Calendar size={11} className="opacity-70" />
                      {exp.period}
                    </motion.span>
                  </div>

                  {/* Divider */}
                  <div className="exp-divider" />

                  {/* Description bullets */}
                  <ul className="space-y-3 mt-4">
                    {exp.description.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                        className="exp-bullet"
                      >
                        <span className="exp-bullet-dot" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}

            {/* End cap dot */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3, type: "spring" }}
              className="relative -ml-10 sm:-ml-14 md:-ml-20 flex items-center gap-4 pl-10 sm:pl-14 md:pl-20"
            >
              <div className="exp-end-dot" />
              <span className="exp-end-label">More to come…</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
