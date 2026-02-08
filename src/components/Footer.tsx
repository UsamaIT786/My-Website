"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="py-12 px-6 border-t border-slate-200 dark:border-slate-800 bg-section transition-colors duration-300">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-2xl font-bold text-primary"
                >
                    Usama<span className="text-accent">M.</span>
                    <p className="text-xs text-secondary font-normal mt-1 uppercase tracking-widest">Full Stack Web Developer & AI Engineer</p>
                </motion.div>

                <div className="flex gap-6">
                    <Link href="https://x.com/AvaMitchel82327" target="_blank" rel="noopener noreferrer">
                        <Twitter className="text-secondary hover:text-accent cursor-pointer transition-colors" size={20} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/usama-muzammil-336542337/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="text-secondary hover:text-accent cursor-pointer transition-colors" size={20} />
                    </Link>
                    <Link href="https://github.com/UsamaIT786" target="_blank" rel="noopener noreferrer">
                        <Github className="text-secondary hover:text-accent cursor-pointer transition-colors" size={20} />
                    </Link>
                </div>

                <p className="text-secondary text-sm">
                    © 2026 <span className="text-primary font-semibold">Usama Muzammil</span>. Building smart, scalable & modern web solutions.
                </p>
            </div>

            <div className="container mx-auto mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-[11px] sm:text-xs uppercase tracking-[0.15em] font-bold text-secondary text-center">
                <a href="#home" className="hover:text-accent transition-colors py-1">Home</a>
                <a href="#about" className="hover:text-accent transition-colors py-1">About</a>
                <a href="#skills" className="hover:text-accent transition-colors py-1">Skills</a>
                <a href="#projects" className="hover:text-accent transition-colors py-1">Projects</a>
                <a href="#contact" className="hover:text-accent transition-colors py-1">Contact</a>
            </div>
        </footer>
    );
};

export default Footer;
