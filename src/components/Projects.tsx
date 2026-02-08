"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, Code } from "lucide-react";

const projects = [
    {
        title: "Dutch AI",
        desc: "An AI-powered web application designed to deliver intelligent responses and modern user interactions using cutting-edge frontend and AI integration.",
        tags: ["React", "Next.js", "AI Integration"],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        github: "https://github.com/UsamaIT786/Dutch-Ai.git",
        live: "https://dutch-ai.vercel.app/"
    },
    {
        title: "Full Stack Ecommerce Project",
        desc: "A complete full stack ecommerce web application featuring product management, modern UI, and scalable architecture.",
        tags: ["Node.js", "React", "MongoDB"],
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
        github: "https://github.com/UsamaIT786/Full-Stack-Project.git",
        live: "https://full-stack-project-ecommerce.vercel.app/"
    },
    {
        title: "Agent AI Learn Web App",
        desc: "An AI-based learning platform designed to help users understand and interact with intelligent agents through a clean and modern interface.",
        tags: ["Next.js", "AI Learning", "Tailwind"],
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
        github: "https://github.com/UsamaIT786/Agent-AI-Learn-Web-App.git",
        live: "https://agent-ai-learn-web-app.vercel.app/"
    },
    {
        title: "Personal Portfolio Website",
        desc: "A personal portfolio website showcasing professional skills, projects, and experience with a modern and responsive design.",
        tags: ["React", "Framer Motion", "Tailwind"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        github: "https://personal-website-smoky-tau.vercel.app/",
        live: "https://personal-website-smoky-tau.vercel.app/"
    },
    {
        title: "Pizza Website",
        desc: "A modern and responsive pizza restaurant website with attractive UI, menu sections, and smooth user experience.",
        tags: ["React", "CSS3", "Design"],
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800",
        github: "https://github.com/UsamaIT786/PizzaWebsite.git",
        live: "https://pizza-website-zeta.vercel.app/"
    },
    {
        title: "Fitness Gym Website",
        desc: "A professional fitness and gym website designed to promote services, workouts, and membership plans with a bold and modern look.",
        tags: ["Next.js", "UI/UX", "Fitness"],
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
        github: "https://github.com/UsamaIT786/fitness-_Website_Gym.git",
        live: "https://fitness-website-gym.vercel.app/"
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-6 bg-section transition-colors duration-300">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.1 }}
                className="container mx-auto"
            >
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-primary">My <span className="text-accent">Projects</span></h2>
                    <p className="text-secondary max-w-2xl mx-auto text-sm sm:text-base">
                        A selection of real-world projects that showcase my skills in web development, backend systems, and AI-powered applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-card rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 group shadow-md sm:shadow-lg shadow-gray-200/50 dark:shadow-none transition-all duration-300"
                        >
                            <div className="relative h-52 sm:h-60 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 hidden sm:flex">
                                    <Link href={project.live} target="_blank" className="p-3 bg-accent rounded-full text-white hover:bg-accent-hover transition-colors">
                                        <ExternalLink size={20} />
                                    </Link>
                                    <Link href={project.github} target="_blank" className="p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors">
                                        <Github size={20} />
                                    </Link>
                                </div>
                            </div>

                            <div className="p-5 sm:p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-accent bg-accent/10 px-2 sm:px-3 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold mb-2 text-primary group-hover:text-accent transition-colors uppercase tracking-tight">{project.title}</h3>
                                <p className="text-secondary text-xs sm:text-sm mb-6 line-clamp-2 italic">{project.desc}</p>
                                <div className="flex gap-3 sm:gap-4">
                                    <Link href={project.github} target="_blank" className="flex-1 flex items-center justify-center gap-2 py-3 bg-section border border-slate-200 dark:border-slate-800 rounded-xl text-[10px] sm:text-xs font-bold text-primary hover:border-accent transition-all uppercase tracking-widest">
                                        <Code size={14} className="text-accent" /> Source
                                    </Link>
                                    <Link href={project.live} target="_blank" className="flex-1 flex items-center justify-center gap-2 py-3 bg-accent rounded-xl text-[10px] sm:text-xs font-bold text-white hover:bg-accent-hover transition-all uppercase tracking-widest">
                                        <ExternalLink size={14} /> Live
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 sm:mt-20 text-center">
                    <button className="w-full sm:w-auto px-12 py-5 bg-accent text-white rounded-full font-bold hover:bg-accent-hover transition-all accent-glow uppercase tracking-widest text-xs sm:text-sm shadow-2xl shadow-accent/20">
                        View All Projects
                    </button>
                </div>

                {/* Freelance Focus Section */}
                <div className="mt-24 sm:mt-32 p-8 sm:p-12 rounded-[32px] sm:rounded-[40px] bg-card border border-slate-100 dark:border-slate-800 text-center shadow-2xl shadow-gray-200/50 dark:shadow-none transition-all duration-300">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-primary">Looking for a reliable freelancer?</h3>
                    <p className="text-secondary max-w-3xl mx-auto text-base sm:text-lg leading-relaxed mb-10">
                        I help businesses and individuals bring their ideas to life with high-quality, scalable, and secure web solutions. Let’s discuss your project and turn your vision into reality.
                    </p>
                    <Link href="#contact" className="inline-block w-full sm:w-auto px-12 py-5 bg-accent text-white rounded-full font-bold hover:bg-accent-hover transition-all accent-glow uppercase tracking-widest text-xs sm:text-sm">
                        Let’s Build Your Project
                    </Link>
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
