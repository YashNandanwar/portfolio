"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";

// Skill card data: icon (SVG path or emoji shorthand), name, description
const skillCards = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
        <rect x="2" y="2" width="36" height="36" rx="6" fill="rgba(239,230,222,0.1)" stroke="rgba(239,230,222,0.35)" strokeWidth="1.5"/>
        <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="#EFE6DE" fontSize="16" fontWeight="700" fontFamily="monospace">Py</text>
      </svg>
    ),
    name: "Python",
    desc: "Primary Language",
    category: "Languages",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
        <rect x="2" y="2" width="36" height="36" rx="6" fill="rgba(239,230,222,0.1)" stroke="rgba(239,230,222,0.35)" strokeWidth="1.5"/>
        <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="#EFE6DE" fontSize="13" fontWeight="700" fontFamily="monospace">TS</text>
      </svg>
    ),
    name: "TypeScript",
    desc: "Type-Safe Development",
    category: "Languages",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
        <rect x="2" y="2" width="36" height="36" rx="6" fill="rgba(239,230,222,0.1)" stroke="rgba(239,230,222,0.35)" strokeWidth="1.5"/>
        <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="#EFE6DE" fontSize="10" fontWeight="700" fontFamily="monospace">Next</text>
      </svg>
    ),
    name: "Next.js",
    desc: "Full Stack Framework",
    category: "Frontend",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
        <rect x="2" y="2" width="36" height="36" rx="6" fill="rgba(239,230,222,0.1)" stroke="rgba(239,230,222,0.35)" strokeWidth="1.5"/>
        <circle cx="20" cy="20" r="7" stroke="#EFE6DE" strokeWidth="2"/>
        <line x1="20" y1="6" x2="20" y2="34" stroke="#EFE6DE" strokeWidth="1.5"/>
        <line x1="6" y1="20" x2="34" y2="20" stroke="#EFE6DE" strokeWidth="1.5"/>
        <ellipse cx="20" cy="20" rx="13" ry="7" stroke="#EFE6DE" strokeWidth="1.5"/>
      </svg>
    ),
    name: "React",
    desc: "UI Development",
    category: "Frontend",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
        <rect x="2" y="2" width="36" height="36" rx="6" fill="rgba(239,230,222,0.1)" stroke="rgba(239,230,222,0.35)" strokeWidth="1.5"/>
        <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fill="#EFE6DE" fontSize="10" fontWeight="700" fontFamily="monospace">API</text>
      </svg>
    ),
    name: "FastAPI",
    desc: "Backend APIs",
    category: "Backend",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
        <rect x="2" y="2" width="36" height="36" rx="6" fill="rgba(239,230,222,0.1)" stroke="rgba(239,230,222,0.35)" strokeWidth="1.5"/>
        <rect x="10" y="10" width="20" height="20" rx="3" stroke="#EFE6DE" strokeWidth="1.5"/>
        <line x1="10" y1="17" x2="30" y2="17" stroke="#EFE6DE" strokeWidth="1.2"/>
        <line x1="10" y1="24" x2="30" y2="24" stroke="#EFE6DE" strokeWidth="1.2"/>
      </svg>
    ),
    name: "PostgreSQL",
    desc: "Database Design",
    category: "Databases",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
        <rect x="2" y="2" width="36" height="36" rx="6" fill="rgba(239,230,222,0.1)" stroke="rgba(239,230,222,0.35)" strokeWidth="1.5"/>
        <path d="M10 28 L20 12 L30 28" stroke="#EFE6DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="13" y1="23" x2="27" y2="23" stroke="#EFE6DE" strokeWidth="1.5"/>
      </svg>
    ),
    name: "Scikit-learn",
    desc: "Machine Learning",
    category: "AI & Data",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
        <rect x="2" y="2" width="36" height="36" rx="6" fill="rgba(239,230,222,0.1)" stroke="rgba(239,230,222,0.35)" strokeWidth="1.5"/>
        <rect x="8" y="22" width="5" height="10" rx="1" fill="#EFE6DE"/>
        <rect x="17" y="14" width="5" height="18" rx="1" fill="#EFE6DE" opacity="0.75"/>
        <rect x="26" y="8" width="5" height="24" rx="1" fill="#EFE6DE" opacity="0.5"/>
      </svg>
    ),
    name: "Data Analytics",
    desc: "Insights & Visualisation",
    category: "AI & Data",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
        <rect x="2" y="2" width="36" height="36" rx="6" fill="rgba(239,230,222,0.1)" stroke="rgba(239,230,222,0.35)" strokeWidth="1.5"/>
        <path d="M8 32 L8 12 L20 20 L32 8 L32 32" stroke="#EFE6DE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    name: "Docker",
    desc: "Containerisation",
    category: "Tools",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
        <rect x="2" y="2" width="36" height="36" rx="6" fill="rgba(239,230,222,0.1)" stroke="rgba(239,230,222,0.35)" strokeWidth="1.5"/>
        <circle cx="20" cy="14" r="4" stroke="#EFE6DE" strokeWidth="1.8"/>
        <circle cx="10" cy="28" r="4" stroke="#EFE6DE" strokeWidth="1.8"/>
        <circle cx="30" cy="28" r="4" stroke="#EFE6DE" strokeWidth="1.8"/>
        <line x1="20" y1="18" x2="10" y2="24" stroke="#EFE6DE" strokeWidth="1.5"/>
        <line x1="20" y1="18" x2="30" y2="24" stroke="#EFE6DE" strokeWidth="1.5"/>
      </svg>
    ),
    name: "Git & GitHub",
    desc: "Version Control",
    category: "Tools",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
        <rect x="2" y="2" width="36" height="36" rx="6" fill="rgba(239,230,222,0.1)" stroke="rgba(239,230,222,0.35)" strokeWidth="1.5"/>
        <path d="M12 20 Q20 10 28 20 Q20 30 12 20Z" stroke="#EFE6DE" strokeWidth="1.8" fill="none"/>
        <circle cx="20" cy="20" r="3" fill="#EFE6DE"/>
      </svg>
    ),
    name: "Redis",
    desc: "Caching & Queues",
    category: "Tools",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9">
        <rect x="2" y="2" width="36" height="36" rx="6" fill="rgba(239,230,222,0.1)" stroke="rgba(239,230,222,0.35)" strokeWidth="1.5"/>
        <rect x="9" y="9" width="10" height="10" rx="2" stroke="#EFE6DE" strokeWidth="1.8"/>
        <rect x="21" y="9" width="10" height="10" rx="2" stroke="#EFE6DE" strokeWidth="1.8"/>
        <rect x="9" y="21" width="10" height="10" rx="2" stroke="#EFE6DE" strokeWidth="1.8"/>
        <rect x="21" y="21" width="10" height="10" rx="2" stroke="#EFE6DE" strokeWidth="1.8"/>
      </svg>
    ),
    name: "Figma",
    desc: "UI/UX Design",
    category: "Tools",
  },
];

// Scrolling marquee data - all skills flat
const allSkills = [
  ...resumeData.skills.languages,
  ...resumeData.skills.frontend,
  ...resumeData.skills.backend,
  ...resumeData.skills.databases,
  ...resumeData.skills.dataAndAI,
  ...resumeData.skills.tools,
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Skills() {
  return (
    <section
      id="skills"
      className="skills-section relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #9A0002 0%, #7A0001 50%, #5C0001 100%)" }}
    >
      {/* Grain overlay */}
      <div className="skills-grain" />

      {/* Large watermark text */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span className="skills-watermark">SKILLS</span>
      </div>

      {/* Decorative glow blob */}
      <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(239,230,222,0.07) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 container mx-auto px-6 md:px-12">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="skills-eyebrow">What I work with</p>
          <h2 className="skills-heading">
            TOOLS <span className="skills-heading-accent">I USE</span>
          </h2>
        </motion.div>

        {/* 2-column card grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16"
        >
          {skillCards.map((card) => (
            <motion.div
              key={card.name}
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              className="skill-card group"
            >
              <div className="skill-card-icon-wrap">
                {card.icon}
              </div>
              <div className="skill-card-text">
                <p className="skill-card-name">{card.name}</p>
                <p className="skill-card-desc">{card.desc}</p>
              </div>
              {/* Hover glow line */}
              <div className="skill-card-line" />
            </motion.div>
          ))}
        </motion.div>

        {/* Marquee strip of all skills */}
        <div className="skills-marquee-wrap">
          <div className="skills-marquee">
            {[...allSkills, ...allSkills].map((skill, i) => (
              <span key={`${skill}-${i}`} className="skills-marquee-item">
                {skill}
                <span className="skills-marquee-dot">·</span>
              </span>
            ))}
          </div>
        </div>

        {/* Category pills row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-wrap gap-3"
        >
          {[
            { label: "Languages", skills: resumeData.skills.languages },
            { label: "Frontend", skills: resumeData.skills.frontend },
            { label: "Backend", skills: resumeData.skills.backend },
            { label: "Databases", skills: resumeData.skills.databases },
            { label: "AI & Data", skills: resumeData.skills.dataAndAI },
          ].map((cat) => (
            <div key={cat.label} className="skill-pill-group">
              <span className="skill-pill-label">{cat.label}</span>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((s) => (
                  <span key={s} className="skill-pill">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
