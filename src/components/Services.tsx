"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Smartphone, Globe, Layers, Cpu, Palette } from "lucide-react";

const services = [
  {
    title: "Full Stack Development",
    desc: "Building scalable, high-performance web applications using modern stacks like Next.js, Node.js, and PostgreSQL.",
    icon: <Code2 size={40} />,
  },
  {
    title: "WordPress Development",
    desc: "Custom theme and plugin development for WordPress, optimized for speed, SEO, and user experience.",
    icon: <Globe size={40} />,
  },
  {
    title: "Next.js Development",
    desc: "High-end React applications with Server-Side Rendering (SSR) and Static Site Generation (SSG) for elite performance.",
    icon: <Layers size={40} />,
  },
  {
    title: "UI/UX Implementation",
    desc: "Transforming design concepts into pixel-perfect, interactive, and responsive web interfaces.",
    icon: <Palette size={40} />,
  },
  {
    title: "API Integration",
    desc: "Connecting third-party services and AI models (OpenAI, LangChain) into your existing workflows seamlessly.",
    icon: <Cpu size={40} />,
  },
  {
    title: "Responsive Design",
    desc: "Ensuring your digital products look and function flawlessly across all devices, from mobile to ultra-wide screens.",
    icon: <Smartphone size={40} />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 px-6 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            My Services
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Quality <span className="text-gradient">Services</span>
          </h2>
          <p className="text-secondary max-w-2xl mx-auto text-lg italic">
            &quot;I provide high-end digital solutions tailored to your unique business needs.&quot;
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-10 rounded-[40px] group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-[40px] rounded-full group-hover:scale-150 transition-transform duration-700" />
              
              <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500 group-hover:rotate-12">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-secondary leading-relaxed mb-6">
                {service.desc}
              </p>
              
              <motion.div
                whileHover={{ x: 10 }}
                className="inline-flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-widest cursor-pointer"
              >
                Read More <span>→</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
