"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, PhoneOff, Mic } from "lucide-react";
import Link from "next/link";
import Vapi from "@vapi-ai/web";

const VAPI_API_KEY = "d802bd13-fe35-4a9f-ab1a-7fcf2c458225";
const VAPI_ASSISTANT_ID = "55fa97ec-cdba-4592-8206-fe6eb6896b09";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [callActive, setCallActive] = useState(false);
    const [callLoading, setCallLoading] = useState(false);
    const [agentSpeaking, setAgentSpeaking] = useState(false);
    const vapiRef = useRef<Vapi | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Initialize Vapi instance once on mount
    useEffect(() => {
        const vapi = new Vapi(VAPI_API_KEY);
        vapiRef.current = vapi;

        vapi.on("call-start", () => {
            setCallLoading(false);
            setCallActive(true);
        });

        vapi.on("call-end", () => {
            setCallActive(false);
            setCallLoading(false);
            setAgentSpeaking(false);
        });

        vapi.on("speech-start", () => {
            setAgentSpeaking(true);
        });

        vapi.on("speech-end", () => {
            setAgentSpeaking(false);
        });

        vapi.on("error", (err: any) => {
            console.error("Vapi error:", err);
            setCallActive(false);
            setCallLoading(false);
            setAgentSpeaking(false);
        });

        return () => {
            vapi.stop();
        };
    }, []);

    const handleVapiCall = async () => {
        const vapi = vapiRef.current;
        if (!vapi) return;

        if (callActive) {
            vapi.stop();
            setCallActive(false);
            setAgentSpeaking(false);
            return;
        }

        setCallLoading(true);
        try {
            await vapi.start(VAPI_ASSISTANT_ID);
        } catch (err) {
            console.error("Failed to start Vapi call:", err);
            setCallLoading(false);
        }
    };

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
                    <button
                        onClick={handleVapiCall}
                        disabled={callLoading}
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                            agentSpeaking
                                ? "bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/30"
                                : callActive
                                ? "bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-500/30"
                                : "btn-primary"
                        } ${callLoading ? "opacity-70 cursor-not-allowed" : ""}`}
                    >
                        {agentSpeaking ? (
                            <Mic size={16} className="animate-pulse" />
                        ) : callActive ? (
                            <PhoneOff size={16} />
                        ) : (
                            <Phone size={16} />
                        )}
                        {callLoading ? "Connecting…" : agentSpeaking ? "AI Speaking…" : callActive ? "End Call" : "Talk to AI"}
                    </button>
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
                            <button
                                onClick={() => { setIsOpen(false); handleVapiCall(); }}
                                disabled={callLoading}
                                className={`flex items-center justify-center gap-2 py-4 rounded-xl text-base font-bold uppercase tracking-widest transition-all duration-300 ${
                                    agentSpeaking
                                        ? "bg-green-500 hover:bg-green-600 text-white"
                                        : callActive
                                        ? "bg-red-500 hover:bg-red-600 text-white"
                                        : "btn-primary"
                                } ${callLoading ? "opacity-70 cursor-not-allowed" : ""}`}
                            >
                                {agentSpeaking ? (
                                    <Mic size={18} className="animate-pulse" />
                                ) : callActive ? (
                                    <PhoneOff size={18} />
                                ) : (
                                    <Phone size={18} />
                                )}
                                {callLoading ? "Connecting…" : agentSpeaking ? "AI Speaking…" : callActive ? "End Call" : "Talk to AI"}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
