"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Immigration Law UK",
    client: "Umair Ahmed",
    category: "Next.js / Legal Platform",
    desc: "A premium legal resource platform developed for a UK client, focusing on high-end SEO and automated legal documentation.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200",
    live: "https://immigrationlaw.org.uk/"
  },
  {
    title: "AI Engineer Portal",
    client: "Choudry Raza Hussain",
    category: "WordPress / AI Solutions",
    desc: "A custom-built WordPress platform for a Pakistani client, integrated with AI models and optimized for elite performance and UX.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
    live: "https://aienginear.com/"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden">
      <div className="bg-glow top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-4 block"
          >
            My Portfolio
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-secondary max-w-2xl mx-auto text-lg italic">
            &quot;Elite digital solutions delivered for global clients.&quot;
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-16 items-center`}
            >
              {/* Project Image */}
              <div className="w-full lg:w-3/5 group cursor-pointer relative overflow-hidden rounded-[60px] border-2 border-white/5 bg-[#140b27]">
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                  <Link href={project.live} target="_blank" className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-accent hover:scale-110 transition-transform shadow-2xl">
                    <ArrowUpRight size={40} />
                  </Link>
                </div>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={800}
                  className="object-cover w-full aspect-video transition-transform duration-1000 group-hover:scale-110"
                />
              </div>

              {/* Project Info */}
              <div className="w-full lg:w-2/5">
                <div className="text-accent font-bold uppercase tracking-[0.2em] mb-4">{project.category}</div>
                <h3 className="text-3xl md:text-5xl font-black text-white mb-4 hover:text-accent transition-colors cursor-pointer">
                  {project.title}
                </h3>
                <div className="text-sm font-bold text-white/50 uppercase tracking-widest mb-6">Client: {project.client}</div>
                <p className="text-secondary text-lg leading-relaxed mb-10">
                  {project.desc}
                </p>
                <div className="flex gap-6">
                  <Link href={project.live} target="_blank" className="flex-1 btn-primary text-center py-6">
                    View Live Project
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 text-center">
           <Link href="#contact" className="btn-outline">
              Hire Me For Your Next Project
           </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
