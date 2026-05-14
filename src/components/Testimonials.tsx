"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Umair Ahmed",
    role: "Legal Consultant, UK",
    feedback: "Usama's work on ImmigrationLaw.org.uk was exceptional. He delivered a high-performance, SEO-optimized platform that perfectly meets our complex requirements. Highly recommended for premium projects.",
    stars: 5,
  },
  {
    name: "Choudry Raza Hussain",
    role: "AI Solutions Architect, Pakistan",
    feedback: "The AI Engineer portal exceeded all expectations. Usama's deep understanding of WordPress and AI integration is evident in the final product. A truly world-class developer.",
    stars: 5,
  },
  {
    name: "Michael Thompson",
    role: "Product Manager",
    feedback: "Highly skilled developer who knows how to turn ideas into real products. The project was smooth and well-structured.",
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 px-6 relative overflow-hidden bg-section">
      <div className="bg-glow top-[10%] left-[10%]" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-6 block"
            >
              Testimonials
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              Client <br />
              <span className="text-gradient">Success Stories</span>
            </h2>
            <p className="text-secondary text-lg leading-relaxed mb-10 max-w-xl">
              Trusted by professionals in the UK, Pakistan, and beyond to deliver elite digital excellence.
            </p>
          </div>

          <div className="grid gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-10 rounded-[40px] relative group"
              >
                <Quote className="absolute top-8 right-10 text-accent/10 group-hover:text-accent/30 transition-all duration-500 scale-150" size={32} />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-secondary italic mb-8 text-lg leading-relaxed">
                  &quot;{testimonial.feedback}&quot;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg shadow-accent/20">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-white group-hover:text-accent transition-colors">{testimonial.name}</h4>
                    <p className="text-xs text-secondary font-bold uppercase tracking-widest">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
