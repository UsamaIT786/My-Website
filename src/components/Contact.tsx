"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 px-6 relative overflow-hidden bg-[#070707]">
      <div className="bg-glow top-[10%] right-[10%] opacity-50" />
      <div className="bg-glow bottom-[10%] left-[10%] opacity-30" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-6 block"
            >
              Get In Touch
            </motion.span>
            <h2 className="text-4xl md:text-7xl font-black text-white mb-6 md:mb-8 leading-tight">
              Let&apos;s Build <br className="hidden md:block" />
              <span className="text-gradient">Something Elite</span>
            </h2>
            <p className="text-secondary text-lg md:text-xl leading-relaxed mb-10 md:mb-12 max-w-xl font-medium">
              Ready to elevate your digital presence? Reach out now for a consultation on your next high-end project.
            </p>

            <div className="space-y-6 md:space-y-10">
              <div className="flex items-center gap-5 md:gap-8 group">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-accent/10 rounded-2xl md:rounded-[30px] flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-2xl shadow-accent/5 shrink-0">
                  <Phone size={24} className="md:w-8 md:h-8" />
                </div>
                <div>
                  <div className="text-secondary text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-1 md:mb-2">Direct Call</div>
                  <div className="text-white font-bold text-xl md:text-2xl group-hover:text-accent transition-colors">+92-03703979173</div>
                </div>
              </div>

              <div className="flex items-center gap-5 md:gap-8 group">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-accent/10 rounded-2xl md:rounded-[30px] flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-2xl shadow-accent/5 shrink-0">
                  <Mail size={24} className="md:w-8 md:h-8" />
                </div>
                <div className="min-w-0">
                  <div className="text-secondary text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-1 md:mb-2">Official Email</div>
                  <div className="text-white font-bold text-lg md:text-2xl group-hover:text-accent transition-colors break-words">itsolutionsstudio786@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-5 md:gap-8 group">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-accent/10 rounded-2xl md:rounded-[30px] flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-2xl shadow-accent/5 shrink-0">
                  <MapPin size={24} className="md:w-8 md:h-8" />
                </div>
                <div>
                  <div className="text-secondary text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-1 md:mb-2">Based In</div>
                  <div className="text-white font-bold text-xl md:text-2xl group-hover:text-accent transition-colors">Karachi, Pakistan</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative"
          >
            {/* Animated background element for the form */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent via-purple-500 to-accent rounded-[45px] md:rounded-[65px] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-pulse" />
            
            <div className="relative glass-card p-8 md:p-16 rounded-[40px] md:rounded-[60px] bg-[#140b27]/80 border-white/10 shadow-2xl">
              <form className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-[0.2em] text-accent ml-2">First Name</label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 md:py-5 px-6 md:px-8 focus:border-accent focus:bg-white/10 outline-none transition-all text-white placeholder:text-white/20"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-[0.2em] text-accent ml-2">Last Name</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 md:py-5 px-6 md:px-8 focus:border-accent focus:bg-white/10 outline-none transition-all text-white placeholder:text-white/20"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-accent ml-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 md:py-5 px-6 md:px-8 focus:border-accent focus:bg-white/10 outline-none transition-all text-white placeholder:text-white/20"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-accent ml-2">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your vision..."
                    className="w-full bg-white/5 border border-white/10 rounded-[24px] md:rounded-[32px] py-4 md:py-5 px-6 md:px-8 focus:border-accent focus:bg-white/10 outline-none transition-all text-white placeholder:text-white/20 resize-none"
                  />
                </div>

                <button className="w-full btn-primary py-4 md:py-6 flex items-center justify-center gap-4 group text-lg tracking-widest shadow-2xl shadow-accent/40">
                  Send Message
                  <Send size={20} className="md:w-6 md:h-6 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default Contact;
