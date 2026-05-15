"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-32 px-4 relative overflow-hidden bg-[#070707]">
      <div className="bg-glow top-[10%] right-[10%] opacity-50" />
      <div className="bg-glow bottom-[10%] left-[10%] opacity-30" />
      
      <div className="container mx-auto relative z-10 px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 lg:gap-20">
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-accent font-bold tracking-[0.3em] uppercase text-[10px] md:text-sm mb-3 md:mb-6 block"
            >
              Get In Touch
            </motion.span>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-white mb-4 md:mb-8 leading-[1.2]">
              Let&apos;s Build <br className="hidden md:block" />
              <span className="text-gradient">Something Elite</span>
            </h2>
            <p className="text-secondary text-base md:text-xl leading-relaxed mb-8 md:mb-12 max-w-xl font-medium">
              Ready to elevate your digital presence? Reach out now for a consultation on your next high-end project.
            </p>

            <div className="grid grid-cols-1 gap-4 md:gap-8">
              <div className="flex items-center gap-4 md:gap-8 group glass-card p-4 md:p-0 md:bg-transparent md:border-0 rounded-2xl md:rounded-none">
                <div className="w-12 h-12 md:w-20 md:h-20 bg-accent/10 rounded-xl md:rounded-[30px] flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-2xl shadow-accent/5 shrink-0">
                  <Phone size={20} className="md:w-8 md:h-8" />
                </div>
                <div>
                  <div className="text-secondary text-[8px] md:text-xs font-black uppercase tracking-[0.2em] mb-1 md:mb-2">Direct Call</div>
                  <div className="text-white font-bold text-lg md:text-2xl group-hover:text-accent transition-colors">+92-03703979173</div>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-8 group glass-card p-4 md:p-0 md:bg-transparent md:border-0 rounded-2xl md:rounded-none">
                <div className="w-12 h-12 md:w-20 md:h-20 bg-accent/10 rounded-xl md:rounded-[30px] flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-2xl shadow-accent/5 shrink-0">
                  <Mail size={20} className="md:w-8 md:h-8" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-secondary text-[8px] md:text-xs font-black uppercase tracking-[0.2em] mb-1 md:mb-2">Official Email</div>
                  <div className="text-white font-bold text-[13px] sm:text-base md:text-2xl group-hover:text-accent transition-colors break-all">itsolutionsstudio786@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-8 group glass-card p-4 md:p-0 md:bg-transparent md:border-0 rounded-2xl md:rounded-none">
                <div className="w-12 h-12 md:w-20 md:h-20 bg-accent/10 rounded-xl md:rounded-[30px] flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-2xl shadow-accent/5 shrink-0">
                  <MapPin size={20} className="md:w-8 md:h-8" />
                </div>
                <div>
                  <div className="text-secondary text-[8px] md:text-xs font-black uppercase tracking-[0.2em] mb-1 md:mb-2">Based In</div>
                  <div className="text-white font-bold text-lg md:text-2xl group-hover:text-accent transition-colors">Karachi, Pakistan</div>
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
            
            <div className="relative glass-card p-6 md:p-16 rounded-[32px] md:rounded-[60px] bg-[#140b27]/80 border-white/10 shadow-2xl">
              <form className="space-y-6 md:space-y-8">
                <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
                  <div className="space-y-2 md:space-y-3">
                    <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-accent ml-2">First Name</label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl py-3 md:py-5 px-5 md:px-8 focus:border-accent focus:bg-white/10 outline-none transition-all text-white placeholder:text-white/20 text-sm md:text-base"
                    />
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-accent ml-2">Last Name</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl py-3 md:py-5 px-5 md:px-8 focus:border-accent focus:bg-white/10 outline-none transition-all text-white placeholder:text-white/20 text-sm md:text-base"
                    />
                  </div>
                </div>

                <div className="space-y-2 md:space-y-3">
                  <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-accent ml-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl py-3 md:py-5 px-5 md:px-8 focus:border-accent focus:bg-white/10 outline-none transition-all text-white placeholder:text-white/20 text-sm md:text-base"
                  />
                </div>

                <div className="space-y-2 md:space-y-3">
                  <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-accent ml-2">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your vision..."
                    className="w-full bg-white/5 border border-white/10 rounded-[20px] md:rounded-[32px] py-3 md:py-5 px-5 md:px-8 focus:border-accent focus:bg-white/10 outline-none transition-all text-white placeholder:text-white/20 resize-none text-sm md:text-base"
                  />
                </div>

                <button className="w-full btn-primary py-4 md:py-6 flex items-center justify-center gap-3 md:gap-4 group text-base md:text-lg tracking-widest shadow-2xl shadow-accent/40">
                  Send Message
                  <Send size={18} className="md:w-6 md:h-6 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
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
