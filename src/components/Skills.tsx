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
    <section id="skills" className="py-32 px-6 relative overflow-hidden bg-section">
      <div className="bg-glow bottom-[-10%] right-[-10%]" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-4 block"
          >
            Skills
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            My <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            &quot;Mastering the latest technologies to build high-performance digital products.&quot;
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="glass-card p-10 rounded-[40px] flex flex-col items-center justify-center text-center group"
            >
              <div className="w-20 h-20 bg-accent/5 rounded-3xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-all duration-500 group-hover:rotate-6">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={50}
                  height={50}
                  className={`object-contain ${skill.name === "Next.js" ? "invert" : ""}`}
                />
              </div>
              <div className="text-accent font-black text-2xl mb-2">{skill.level}%</div>
              <h3 className="text-secondary font-bold text-sm uppercase tracking-widest group-hover:text-white transition-colors">
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
