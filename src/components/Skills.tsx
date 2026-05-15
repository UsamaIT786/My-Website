"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  { name: "Next.js", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "React", level: 98, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", level: 92, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Node.js", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", level: 88, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "WordPress", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
  { name: "Tailwind CSS", level: 98, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "GSAP", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Framer Motion", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-32 px-4 md:px-6 relative overflow-hidden bg-section">
      <div className="bg-glow bottom-[-10%] right-[-10%]" />
      
      <div className="container mx-auto relative z-10 px-6">
        <div className="text-center mb-10 md:mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-bold tracking-[0.3em] uppercase text-[10px] md:text-sm mb-3 md:mb-4 block"
          >
            Skills
          </motion.span>
          <h2 className="text-2xl md:text-6xl font-black text-white mb-4 md:mb-6">
            My <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-secondary max-w-2xl mx-auto text-base md:text-lg px-4">
            &quot;Mastering the latest technologies to build high-performance digital products.&quot;
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="glass-card p-5 md:p-10 rounded-[24px] md:rounded-[40px] flex flex-col items-center justify-center text-center group"
            >
              <div className="w-12 h-12 md:w-20 md:h-20 bg-accent/5 rounded-xl md:rounded-3xl flex items-center justify-center mb-3 md:mb-6 group-hover:bg-accent/20 transition-all duration-500 group-hover:rotate-6">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={32}
                  height={32}
                  className={`object-contain md:w-[50px] md:h-[50px] ${skill.name === "Next.js" ? "invert" : ""}`}
                />
              </div>
              <div className="text-accent font-black text-lg md:text-2xl mb-1 md:mb-2">{skill.level}%</div>
              <h3 className="text-secondary font-bold text-[10px] md:text-sm uppercase tracking-widest group-hover:text-white transition-colors">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
