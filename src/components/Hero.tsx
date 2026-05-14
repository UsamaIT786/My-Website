"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 px-6 overflow-hidden">
            <div className="bg-glow top-[10%] left-[5%]" />
            <div className="bg-glow bottom-[10%] right-[5%]" />
            
            <div className="container mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div className="order-2 lg:order-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <span className="inline-block px-5 py-2 rounded-full border border-accent/30 bg-accent/5 text-accent font-bold text-sm mb-6 tracking-widest uppercase">
                                Available for Freelance
                            </span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl xl:text-8xl font-black text-white leading-[1.1] mb-8">
                            I am <br />
                            <span className="text-gradient">Usama Muzammil</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-secondary mb-12 max-w-2xl lg:mx-0 mx-auto font-medium">
                            Full Stack Web Developer & <br className="hidden md:block" />
                            WordPress Expert specialized in AI-Powered Web Apps.
                        </p>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                            <Link href="/contact" className="btn-primary flex items-center gap-2 group">
                                Hire Me

                                <motion.span
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                >
                                    →
                                </motion.span>
                            </Link>
                            <Link href="/resume.pdf" target="_blank" className="btn-outline flex items-center gap-2 group">
                                <Download size={20} className="group-hover:translate-y-1 transition-transform" />
                                Download CV
                            </Link>
                        </div>

                        <div className="mt-16 flex justify-center lg:justify-start items-center gap-8">
                            <Link href="https://github.com/UsamaIT786" target="_blank" className="text-secondary hover:text-accent transition-all hover:scale-125">
                                <Github size={28} />
                            </Link>
                            <Link href="https://www.linkedin.com/in/usama-muzammil-336542337/" target="_blank" className="text-secondary hover:text-accent transition-all hover:scale-125">
                                <Linkedin size={28} />
                            </Link>
                            <Link href="https://x.com/AvaMitchel82327" target="_blank" className="text-secondary hover:text-accent transition-all hover:scale-125">
                                <Twitter size={28} />
                            </Link>
                        </div>
                    </div>

                    {/* Image Area */}
                    <div className="order-1 lg:order-2 flex justify-center perspective">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            whileHover={{ rotateY: -10, rotateX: 5 }}
                            className="relative w-full max-w-[500px] aspect-square preserve-3d"
                        >
                            <div className="absolute inset-0 bg-accent/20 rounded-[60px] blur-[80px] -z-10 animate-pulse" />
                            <div className="relative w-full h-full glass-card rounded-[60px] overflow-hidden border-2 border-accent/20 p-4">
                                <Image
                                    src="/1.png"
                                    alt="Usama Muzammil"
                                    fill
                                    className="object-contain p-4 drop-shadow-[0_0_30px_rgba(135,80,247,0.3)]"
                                    priority
                                />
                            </div>
                            
                            {/* Floating Stats Card */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute -bottom-8 -left-8 glass-card p-6 rounded-3xl border-accent/30 shadow-2xl"
                            >
                                <div className="text-4xl font-black text-accent mb-1">3+</div>
                                <div className="text-sm text-secondary font-bold uppercase tracking-wider">Years Exp.</div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 15, 0] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                                className="absolute -top-8 -right-8 glass-card p-6 rounded-3xl border-accent/30 shadow-2xl"
                            >
                                <div className="text-4xl font-black text-accent mb-1">20+</div>
                                <div className="text-sm text-secondary font-bold uppercase tracking-wider">Projects</div>

                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
