"use client";

import { useEffect } from "react";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const Services = dynamic(() => import("@/components/Services"), { ssr: true });
const About = dynamic(() => import("@/components/About"), { ssr: true });
const Skills = dynamic(() => import("@/components/Skills"), { ssr: true });
const Projects = dynamic(() => import("@/components/Projects"), { ssr: true });
const Experience = dynamic(() => import("@/components/Experience"), { ssr: true });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });

export default function Site() {
  const pathname = usePathname();

  useEffect(() => {
    const section = pathname.split("/")[1];
    if (section) {
      const element = document.getElementById(section === "portfolio" ? "projects" : section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  return (
    <main className="min-h-screen bg-[#070707]">
      <Navbar />
      <div id="home"><Hero /></div>
      <Services />
      <Experience />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

