"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
    { name: "Frontend Development", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Backend Development", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "API Development", level: 88, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Database Design", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "AI Integration", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Automation & Optimization", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 px-6 bg-background transition-colors duration-300">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.1 }}
                className="container mx-auto"
            >
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-primary">My <span className="text-accent">Skills</span></h2>
                    <p className="text-secondary max-w-2xl mx-auto text-sm sm:text-base">
                        Technologies and tools I use to build powerful, scalable, and intelligent digital solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-card border border-slate-100 dark:border-slate-800 p-6 rounded-3xl group shadow-xl shadow-gray-200/50 dark:shadow-none transition-all duration-300"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 flex items-center justify-center bg-section rounded-2xl group-hover:bg-accent/10 transition-colors">
                                    <Image src={skill.icon} alt={skill.name} width={30} height={30} className="object-contain dark:invert" />
                                </div>
                                <h3 className="font-bold text-base sm:text-lg text-primary">{skill.name}</h3>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between text-xs text-secondary">
                                    <span>Proficiency</span>
                                    <span className="text-accent font-bold">{skill.level}%</span>
                                </div>
                                <div className="h-2 w-full bg-section rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        transition={{ duration: 1, delay: 0.3 }}
                                        viewport={{ once: false }}
                                        className="h-full bg-accent"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
