"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = () => {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 500);
                    return 100;
                }
                return prev + Math.floor(Math.random() * 15) + 5;
            });
        }, 150);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ 
                        y: "-100%",
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                    }}
                    className="fixed inset-0 z-[9999] bg-[#070707] flex flex-col items-center justify-center"
                >
                    <div className="relative">
                        {/* Glowing Background */}
                        <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full animate-pulse" />
                        
                        <div className="relative flex flex-col items-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8"
                            >
                                USAMA<span className="text-accent">.</span>
                            </motion.div>

                            <div className="w-64 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
                                <motion.div 
                                    className="absolute inset-y-0 left-0 bg-accent shadow-[0_0_15px_rgba(135,80,247,0.5)]"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ ease: "easeOut" }}
                                />
                            </div>

                            <motion.div 
                                className="mt-6 text-accent font-black text-2xl tabular-nums"
                            >
                                {Math.min(progress, 100)}%
                            </motion.div>
                        </div>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute bottom-12 text-secondary/50 text-xs font-bold uppercase tracking-[0.5em]"
                    >
                        Loading Excellence
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
