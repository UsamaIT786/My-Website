"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/home" },
        { name: "Services", href: "/services" },
        { name: "About", href: "/about" },
        { name: "Skills", href: "#skills" }, // Skills can stay hash if no separate page requested, or I can add /skills
        { name: "Portfolio", href: "/portfolio" },
        { name: "Contact", href: "/contact" },
    ];


    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
                scrolled ? "bg-[#070707]/80 backdrop-blur-xl py-4 border-b border-white/5" : "bg-transparent py-8"
            }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center font-black text-white group-hover:rotate-12 transition-transform">
                        U
                    </div>
                    <span className="text-xl font-black text-white tracking-tighter">USAMA.</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-bold text-secondary hover:text-accent transition-colors uppercase tracking-widest"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="px-8 py-3 btn-primary text-sm uppercase tracking-widest"
                    >
                        Hire Me
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden p-2 text-white hover:text-accent transition-colors"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-[#140b27] border-b border-white/5 overflow-hidden"
                    >
                        <div className="flex flex-col gap-6 p-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-bold text-white hover:text-accent transition-colors uppercase tracking-widest"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="btn-primary text-center py-4"
                            >
                                Hire Me
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
