"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Ahmed Raza",
        role: "Business Owner",
        location: "Karachi, Pakistan",
        feedback: "Usama delivered exactly what I needed. The website performance, design, and overall experience exceeded my expectations. Communication was clear, and the project was completed on time. Highly recommended for any professional web development work.",
        stars: 5,
    },
    {
        name: "Michael Thompson",
        role: "Product Manager",
        location: "Texas, USA",
        feedback: "Usama is a highly skilled developer who knows how to turn ideas into real products. The project was smooth, well-structured, and delivered with excellent quality. I would definitely work with him again.",
        stars: 5,
    },
    {
        name: "James Walker",
        role: "Digital Consultant",
        location: "London, UK",
        feedback: "Usama’s expertise in web development and AI integration is impressive. He delivered a clean, fast, and scalable solution while maintaining excellent communication throughout the project.",
        stars: 5,
    },
    {
        name: "Salman Khan",
        role: "Startup Founder",
        location: "Lahore, Pakistan",
        feedback: "Working with Usama was a great experience. He understands requirements quickly and delivers clean, scalable solutions. His attention to detail and commitment to quality really stood out.",
        stars: 5,
    },
    {
        name: "Jessica Miller",
        role: "Entrepreneur",
        location: "California, USA",
        feedback: "Professional, reliable, and extremely talented. Usama handled the project with great care and delivered a modern, high-quality web application that matched our business goals perfectly.",
        stars: 5,
    },
    {
        name: "Oliver Smith",
        role: "Agency Owner",
        location: "Manchester, UK",
        feedback: "Outstanding work quality and professionalism. Usama understands both technical and business needs, which makes him a great developer to work with. Highly recommended.",
        stars: 5,
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 px-6 bg-section transition-colors duration-300 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.25 }}
                className="container mx-auto"
            >
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-primary">Client <span className="text-accent">Testimonials</span></h2>
                    <p className="text-secondary max-w-2xl mx-auto text-sm sm:text-base">
                        Don&apos;t just take my word for it. Here&apos;s what business owners and founders around the world have to say about my work.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-card p-6 sm:p-8 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-xl shadow-gray-200/50 dark:shadow-none relative group transition-all duration-300"
                        >
                            <Quote className="absolute top-6 right-8 text-accent/10 group-hover:text-accent/20 transition-colors hidden sm:block" size={40} />

                            <div className="flex gap-1 mb-6 justify-center sm:justify-start">
                                {[...Array(testimonial.stars)].map((_, i) => (
                                    <Star key={i} size={14} className="fill-accent text-accent" />
                                ))}
                            </div>

                            <p className="text-secondary italic mb-8 leading-relaxed relative z-10 text-sm sm:text-base text-center sm:text-left">
                                &quot;{testimonial.feedback}&quot;
                            </p>

                            <div className="flex items-center gap-4 justify-center sm:justify-start">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent font-bold text-lg sm:text-xl uppercase">
                                    {testimonial.name[0]}
                                </div>
                                <div className="flex flex-col text-center sm:text-left">
                                    <h4 className="font-bold text-sm sm:text-base text-primary">{testimonial.name}</h4>
                                    <p className="text-[10px] sm:text-xs text-secondary font-medium uppercase tracking-wider">{testimonial.role} — {testimonial.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Testimonials;
