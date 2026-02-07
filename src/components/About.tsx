"use client";

import React from "react";
import { motion, useInView, animate } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const StatCounter = ({ value, label, color }: { value: string; label: string; color: string }) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: false, amount: 0.5 });
    const [count, setCount] = React.useState(0);
    const target = parseInt(value);

    React.useEffect(() => {
        if (inView) {
            const controls = animate(0, target, {
                duration: 2,
                ease: "easeOut",
                onUpdate: (latest) => setCount(Math.floor(latest)),
            });
            return () => controls.stop();
        } else {
            setCount(0);
        }
    }, [inView, target]);

    return (
        <div ref={ref} className="text-center">
            <div className={`text-3xl font-bold ${color} mb-1 transition-transform hover:scale-110`}>
                {count}{value.includes("+") ? "+" : ""}
            </div>
            <div className="text-secondary text-xs md:text-sm uppercase tracking-wider">
                {label}
            </div>
        </div>
    );
};

const About = () => {
    const stats = [
        { label: "Experience", value: "3+", color: "text-accent" },
        { label: "Projects Completed", value: "50+", color: "text-accent" },
        { label: "Happy Clients", value: "20+", color: "text-accent" },
    ];

    return (
        <section id="about" className="py-24 px-6 relative overflow-hidden bg-section transition-colors duration-300">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
                className="container mx-auto"
            >
                <div className="glass-card rounded-[40px] p-8 md:p-16 grid md:grid-cols-2 gap-12 items-center">
                    {/* Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: false }}
                        className="flex justify-center"
                    >
                        <div className="relative w-full max-w-[400px]">
                            <Image
                                src="/1.png"
                                alt="About Me Illustration"
                                width={500}
                                height={500}
                                className="object-contain"
                            />
                            {/* Decorative elements */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 blur-[60px] rounded-full" />
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: false }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">About Me</h2>
                        <p className="text-secondary text-lg leading-relaxed mb-8">
                            I’m Usama Muzammil, a passionate Full Stack Web Developer and AI Engineer with hands-on experience in building modern web applications and intelligent systems. I work as a freelancer, helping startups and businesses create reliable, high-performing, and visually engaging digital products.
                            <br /><br />
                            I focus on clean code, scalable architecture, smooth user experience, and smart automation. Whether it&apos;s a business website, web app, dashboard, or AI-powered solution, I deliver results that matter.
                        </p>

                        <div className="grid grid-cols-3 gap-4 mb-10">
                            {stats.map((stat, index) => (
                                <StatCounter key={index} {...stat} />
                            ))}
                        </div>

                        <Link href="#projects">
                            <button className="px-10 py-4 bg-transparent border border-accent text-accent rounded-full font-bold hover:bg-accent hover:text-white transition-all shadow-lg shadow-accent/10">
                                View My Work
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
