"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, Mail, Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
    const containerVariants: any = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.15,
                ease: "easeOut"
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section id="home" className="pt-32 pb-20 px-6">
            <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.05 }}
                    className="flex flex-col gap-6"
                >
                    <motion.div variants={itemVariants} className="flex gap-4 text-secondary">
                        <Link href="https://github.com/UsamaIT786" target="_blank" rel="noopener noreferrer">
                            <Github className="hover:text-accent cursor-pointer transition-colors" size={20} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/usama-muzammil-336542337/" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="hover:text-accent cursor-pointer transition-colors" size={20} />
                        </Link>
                        <Link href="https://x.com/AvaMitchel82327" target="_blank" rel="noopener noreferrer">
                            <Twitter className="hover:text-accent cursor-pointer transition-colors" size={20} />
                        </Link>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight text-primary"
                    >
                        Hi, I&apos;m <span className="text-accent">Usama Muzammil</span>
                    </motion.h1>

                    <motion.h2
                        variants={itemVariants}
                        className="text-xl sm:text-2xl md:text-3xl font-semibold text-accent"
                    >
                        Full Stack Web Developer & AI Engineer
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-base sm:text-lg text-secondary max-w-lg leading-relaxed"
                    >
                        I build fast, scalable, and intelligent web applications that help businesses grow. From modern frontend experiences to powerful backend systems and AI-driven solutions, I turn ideas into real-world digital products.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
                        <a
                            href="/cv/usamacv.docx"
                            download="usamacv.docx"
                            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white rounded-full font-bold hover:bg-accent-hover transition-all accent-glow group"
                        >
                            <Download size={20} />
                            Download CV
                        </a>
                        <Link
                            href="#contact"
                            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-slate-200 dark:border-slate-800 text-primary rounded-full font-bold hover:border-accent transition-all"
                        >
                            <Mail size={20} />
                            Hire Me
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Right Illustration */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative flex justify-center items-center"
                >
                    <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="relative z-10"
                        >
                            <Image
                                src="/1.png"
                                alt="3D Developer Illustration"
                                width={500}
                                height={500}
                                className="object-contain"
                                priority
                                sizes="(max-width: 768px) 300px, 500px"
                            />
                        </motion.div>

                        {/* Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/10 blur-[60px] md:blur-[100px] rounded-full -z-10" />

                        {/* Floating Tech Icons */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="absolute top-0 left-0 w-full h-full pointer-events-none"
                        >
                            <div className="absolute top-[10%] left-[10%] p-2 sm:p-3 bg-card border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl">
                                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width={25} height={25} alt="React" className="sm:w-[30px] sm:h-[30px]" />
                            </div>
                            <div className="absolute top-[20%] right-[5%] p-2 sm:p-3 bg-card border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl">
                                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width={25} height={25} alt="Next.js" className="dark:invert sm:w-[30px] sm:h-[30px]" />
                            </div>
                            <div className="absolute bottom-[20%] left-[5%] p-2 sm:p-3 bg-card border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl">
                                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" width={25} height={25} alt="Tailwind" className="sm:w-[30px] sm:h-[30px]" />
                            </div>
                            <div className="absolute bottom-[10%] right-[10%] p-2 sm:p-3 bg-card border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl">
                                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width={25} height={25} alt="JS" className="sm:w-[30px] sm:h-[30px]" />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
