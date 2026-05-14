"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    period: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Freelance / Remote",
    desc: "Leading high-end digital projects, implementing AI solutions, and building premium web applications for international clients.",
  },
  {
    period: "2021 - 2023",
    role: "WordPress Developer",
    company: "Digital Agency",
    desc: "Developed custom WordPress themes and plugins, optimized site performance, and managed client digital transformations.",
  },
  {
    period: "2020 - 2021",
    role: "Junior Web Developer",
    company: "Tech Solutions",
    desc: "Assisted in front-end development using React and CSS, contributing to internal tools and client projects.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6 relative overflow-hidden bg-background">
      <div className="bg-glow top-[40%] right-[-10%]" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-4 block"
          >
            My Journey
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-card p-10 rounded-[40px] flex flex-col md:flex-row gap-10 items-start group"
            >
              <div className="md:w-1/4">
                <div className="text-accent font-black text-xl mb-2">{exp.period}</div>
                <div className="text-white font-bold text-sm uppercase tracking-widest">{exp.company}</div>
              </div>
              
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
                  {exp.role}
                </h3>
                <p className="text-secondary leading-relaxed text-lg italic">
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
