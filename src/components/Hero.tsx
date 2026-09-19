"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { resumeData } from "@/data/resume";
import { ArrowRight, Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import Link from "next/link";

const roles = [
  "AI & Data Science Student",
  "Full Stack Developer",
  "Problem Solver",
  "Data Enthusiast",
];

export function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);


  return (
    <section
      ref={sectionRef}
      id="hero"
      className="hero-section relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #8B0000 0%, #C0272D 40%, #A01820 70%, #6B0000 100%)" }}
    >
      {/* Noise texture overlay */}
      <div className="hero-noise" />

      {/* Animated grain effect */}
      <div className="hero-grain" />

      {/* Large background PORTFOLIO text */}
      <motion.div
        style={{ y: textY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="hero-big-text tracking-widest "
          style={{
            transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
          }}
        >
          Y A S H <br />
          N A N D A N W A R
        </motion.h1>
      </motion.div>

      {/* Script "Creative" word */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute top-[12%] left-1/2 -translate-x-1/2 z-20 pointer-events-none"
        style={{
          transform: `translate(calc(-50% + ${mousePos.x * 0.5}px), ${mousePos.y * 0.5}px)`,
        }}
      >
        <span className="hero-script-text">Creative</span>
      </motion.div>

      {/* Main content layer */}
      <motion.div style={{ opacity }} className="relative z-10 w-full h-full min-h-screen">
        <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 min-h-screen flex flex-col justify-end pb-12">

          {/* Bottom left: Name */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="absolute bottom-10 left-6 md:left-12 z-20"
          >
            <p className="hero-bottom-label">
              {resumeData.name}
            </p>
          </motion.div>

          {/* Bottom right: Role */}
          <motion.div
            initial={{ opacity: 1, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="absolute bottom-10 right-6 md:right-12 z-20"
          >
            <p className="hero-bottom-label text-right">
              {resumeData.role}
            </p>
          </motion.div>

          {/* Center silhouette / photo area */}
          <div className=" h-[65%] w-[35%] scale-120 absolute flex items-center justify-center bottom-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
            <img src="./hero.png" alt="" />

          </div>

          {/* CTA Buttons — positioned above the bottom labels */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="absolute bottom-28 left-1/2 -translate-x-1/2 z-30 flex flex-wrap items-center gap-4 justify-center"
          >
            <Link
              href="#projects"
              id="hero-view-work-btn"
              className="hero-btn-primary"
            >
              View My Work
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-download-btn"
              className="hero-btn-secondary"
            >
              <Download size={16} />
              Resume
            </a>
            <div className="flex items-center gap-3 ml-2">
              <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="hero-icon-btn" aria-label="GitHub">
                <GithubIcon size={18} />
              </a>
              <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hero-icon-btn" aria-label="LinkedIn">
                <LinkedinIcon size={18} />
              </a>
              <a href={`mailto:${resumeData.contact.email}`} className="hero-icon-btn" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
          >
            <div className="hero-scroll-indicator">
              <div className="hero-scroll-dot" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Role ticker — top center area */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute top-[12%] left-1/2 z-30 -translate-x-1/2 -translate-y-1/2 ml-40"
        style={{
          transform: `translate(calc(-50% + ${mousePos.x * 0.2}px), ${mousePos.y * 0.2}px)`,
        }}
      >
        <motion.p
          key={currentRoleIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="hero-role-ticker w-full text-center"
        >
          {roles[currentRoleIndex]}
        </motion.p>
      </motion.div>

      {/* Decorative corner circles */}
      <div className="absolute top-0 left-0 w-16 h-16 bg-white/10 rounded-br-full" />
      <div className="absolute top-0 right-0 w-12 h-12 bg-white/5 rounded-bl-full" />

      {/* Subtle vignette */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.4) 100%)" }}
      />
    </section>
  );
}
