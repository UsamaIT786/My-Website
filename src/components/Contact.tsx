"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Send } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-6 relative bg-background transition-colors duration-300">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.05 }}
                className="container mx-auto"
            >
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-primary">Get In <span className="text-accent">Touch</span></h2>
                    <p className="text-secondary max-w-2xl mx-auto text-sm sm:text-base">
                        Have a project in mind or need a developer you can trust? Fill out the form below or reach out directly. I usually respond within 24 hours.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Avatar Illustration */}
                    <div className="flex justify-center order-2 md:order-1">
                        <div className="relative w-full max-w-[350px] md:max-w-[450px]">
                            <Image
                                src="/1.png"
                                alt="Contact Illustration"
                                width={500}
                                height={500}
                                className="object-contain"
                                sizes="(max-width: 768px) 300px, 500px"
                            />
                            <div className="absolute top-[20%] right-[15%] p-3 sm:p-4 bg-accent rounded-2xl shadow-2xl animate-bounce">
                                <Send size={20} className="text-white" />
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="order-1 md:order-2 bg-card border border-slate-100 dark:border-slate-800 p-6 sm:p-8 md:p-12 rounded-[32px] sm:rounded-[40px] shadow-2xl shadow-gray-200/50 dark:shadow-none transition-all duration-300">
                        <form className="space-y-4 sm:space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="w-full bg-section border border-slate-200 dark:border-slate-800 rounded-xl sm:rounded-2xl py-3 sm:py-4 px-6 focus:border-accent outline-none transition-all text-primary text-base placeholder:text-slate-400 dark:placeholder:text-slate-600"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="w-full bg-section border border-slate-200 dark:border-slate-800 rounded-xl sm:rounded-2xl py-3 sm:py-4 px-6 focus:border-accent outline-none transition-all text-primary text-base placeholder:text-slate-400 dark:placeholder:text-slate-600"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full bg-section border border-slate-200 dark:border-slate-800 rounded-xl sm:rounded-2xl py-3 sm:py-4 px-6 focus:border-accent outline-none transition-all text-primary text-base placeholder:text-slate-400 dark:placeholder:text-slate-600"
                                />
                            </div>

                            <div className="space-y-2">
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="w-full bg-section border border-slate-200 dark:border-slate-800 rounded-xl sm:rounded-2xl py-3 sm:py-4 px-6 focus:border-accent outline-none transition-all text-primary text-base placeholder:text-slate-400 dark:placeholder:text-slate-600"
                                />
                            </div>

                            <div className="space-y-2">
                                <textarea
                                    rows={4}
                                    placeholder="Your Message"
                                    className="w-full bg-section border border-slate-200 dark:border-slate-800 rounded-xl sm:rounded-2xl py-3 sm:py-4 px-6 focus:border-accent outline-none transition-all text-primary text-base placeholder:text-slate-400 dark:placeholder:text-slate-600 resize-none"
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-4 sm:py-5 bg-accent text-white rounded-xl sm:rounded-2xl font-bold hover:bg-accent-hover transition-all accent-glow shadow-xl shadow-accent/20 text-sm sm:text-base"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
