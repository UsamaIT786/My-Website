"use client";

import React from "react";
import { motion, useInView, animate } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const StatCounter = ({ value, label }: { value: string; label: string }) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, amount: 0.5 });
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
        }
    }, [inView, target]);

    return (
        <div ref={ref} className="text-center md:text-left">
            <div className="text-4xl md:text-5xl font-black text-white mb-2">
                {count}{value.includes("+") ? "+" : ""}
            </div>
            <div className="text-secondary text-sm uppercase tracking-[0.2em] font-bold">
                {label}
            </div>
        </div>
    );
};

const About = () => {
    const stats = [
        { label: "Years Experience", value: "3+" },
        { label: "Projects Completed", value: "20+" },
        { label: "Happy Clients", value: "10" },
    ];


    return (
        <section id="about" className="py-32 px-6 relative overflow-hidden">
            <div className="bg-glow top-[20%] left-[-10%]" />
            
            <div className="container mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Image Area */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-[60px] overflow-hidden border-2 border-white/5 p-4 bg-[#140b27]/50 backdrop-blur-xl">
                            <Image
                                src="/1.png"
                                alt="Usama Muzammil"
                                width={600}
                                height={600}
                                className="object-contain drop-shadow-[0_20px_50px_rgba(135,80,247,0.2)]"
                            />
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-full h-full border-2 border-accent/20 rounded-[60px] -z-10" />
                    </motion.div>

                    {/* Text Content */}
                    <div>
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-6 block"
                        >
                            About Me
                        </motion.span>
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                            I Can Design & Build <br />
                            <span className="text-gradient">Anything</span> You Need.
                        </h2>
                        <p className="text-secondary text-lg leading-relaxed mb-12">
                            I am Usama Muzammil, a Full Stack Developer & AI Engineer based in Pakistan. With a passion for creating high-end digital experiences, I specialize in building scalable, intelligent, and visually stunning applications that drive results.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">
                            {stats.map((stat, index) => (
                                <StatCounter key={index} {...stat} />
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-6">
                            <Link href="/contact" className="btn-primary">
                                Let&apos;s Talk
                            </Link>
                            <Link href="/portfolio" className="btn-outline">
                                View Portfolio
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
