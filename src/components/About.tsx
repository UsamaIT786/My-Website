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
                duration: 1.5,
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
            <div className={`text-2xl sm:text-3xl font-bold ${color} mb-1 transition-transform hover:scale-110`}>
                {count}{value.includes("+") ? "+" : ""}
            </div>
            <div className="text-secondary text-[10px] sm:text-xs md:text-sm uppercase tracking-wider">
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.25 }}
                className="container mx-auto"
            >
                <div className="glass-card rounded-[40px] p-6 sm:p-8 md:p-16 grid md:grid-cols-2 gap-12 items-center">
                    {/* Illustration */}
                    <div className="flex justify-center order-2 md:order-1">
                        <div className="relative w-full max-w-[300px] md:max-w-[400px]">
                            <Image
                                src="/1.png"
                                alt="About Me Illustration"
                                width={500}
                                height={500}
                                className="object-contain"
                                sizes="(max-width: 768px) 300px, 500px"
                            />
                            {/* Decorative elements */}
                            <div className="absolute -top-5 -right-5 md:-top-10 md:-right-10 w-24 h-24 md:w-32 md:h-32 bg-accent/20 blur-[40px] md:blur-[60px] rounded-full" />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="order-1 md:order-2 text-center md:text-left">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-primary">About Me</h2>
                        <p className="text-secondary text-base sm:text-lg leading-relaxed mb-8">
                            I’m Usama Muzammil, a passionate Full Stack Web Developer and AI Engineer with hands-on experience in building modern web applications and intelligent systems. I work as a freelancer, helping startups and businesses create reliable, high-performing, and visually engaging digital products.
                        </p>

                        <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-10">
                            {stats.map((stat, index) => (
                                <StatCounter key={index} {...stat} />
                            ))}
                        </div>

                        <Link href="#projects">
                            <button className="w-full sm:w-auto px-10 py-4 bg-transparent border border-accent text-accent rounded-full font-bold hover:bg-accent hover:text-white transition-all shadow-lg shadow-accent/10">
                                View My Work
                            </button>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
