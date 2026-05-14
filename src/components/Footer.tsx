"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, ArrowUp } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-20 px-6 relative overflow-hidden bg-background">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <div className="container mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <Link href="/" className="inline-flex items-center gap-3 group mb-8">
            <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center font-black text-white text-2xl group-hover:rotate-12 transition-transform shadow-2xl shadow-accent/20">
              U
            </div>
            <span className="text-3xl font-black text-white tracking-tighter">USAMA.</span>
          </Link>
          
          <div className="flex justify-center gap-8 mb-12">
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

          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-sm font-bold uppercase tracking-[0.2em] text-secondary">
            {[
              { name: "Home", path: "/home" },
              { name: "Services", path: "/services" },
              { name: "About", path: "/about" },
              { name: "Skills", path: "#skills" },
              { name: "Portfolio", path: "/portfolio" },
              { name: "Contact", path: "/contact" }
            ].map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="hover:text-accent transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

        </motion.div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-secondary text-sm font-medium">
            © 2026 <span className="text-white font-black uppercase tracking-widest ml-1">Usama Muzammil</span>. All Rights Reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-secondary hover:text-white transition-colors"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em]">Back to top</span>
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all">
              <ArrowUp size={20} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
