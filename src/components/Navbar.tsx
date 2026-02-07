"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        // Check initial theme
        const isDark = document.documentElement.classList.contains("dark");
        setIsDarkMode(isDark);

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md py-4 border-b border-accent/10 shadow-sm" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-primary flex items-center gap-1">
                    Usama<span className="text-accent">M.</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-secondary hover:text-accent transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-section dark:bg-section border border-slate-200 dark:border-slate-800 text-accent hover:bg-accent hover:text-white transition-all shadow-sm group"
                        aria-label="Toggle Theme"
                    >
                        {isDarkMode ? <Sun size={20} className="rotate-0 transition-transform duration-500" /> : <Moon size={20} className="rotate-0 transition-transform duration-500" />}
                    </button>
                    <Link
                        href="#contact"
                        className="px-6 py-2 bg-accent text-white rounded-full text-sm font-semibold hover:bg-accent-hover transition-all accent-glow"
                    >
                        Hire Me
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 text-accent"
                    >
                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)} className="text-primary">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-card border-b border-slate-200 dark:border-slate-800"
                    >
                        <div className="flex flex-col gap-4 p-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-secondary hover:text-accent"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="w-full py-3 bg-accent text-white text-center rounded-xl font-semibold hover:bg-accent-hover transition-all"
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
