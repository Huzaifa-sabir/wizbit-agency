"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "AI Workflows",
    description: "Intelligent agent swarms and automated pipelines that replace repetitive tasks with high-speed accuracy.",
  },
  {
    title: "Custom Web Apps",
    description: "Next-generation web applications built for speed, scale, and cinematic user experiences.",
  },
  {
    title: "Process Automation",
    description: "Seamless API integrations and background processing to connect your entire digital ecosystem.",
  }
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-brand-dark py-24 md:py-32 px-6 md:px-16 relative">
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24">
          <h2 className="text-4xl md:text-7xl font-bold text-brand-light">
            Our <br className="hidden md:block"/><span className="text-brand-purple md:ml-0 ml-2">Capabilities</span>
          </h2>
          <p className="max-w-md text-brand-light/60 text-base md:text-lg mt-6 md:mt-0">
            We don't just build software. We craft ecosystems that empower your business to scale effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-8 md:p-12 h-[400px] flex flex-col justify-between overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-md hover:bg-white/[0.04] transition-colors duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/0 via-brand-purple/0 to-brand-purple/0 group-hover:to-brand-purple/10 transition-all duration-700 pointer-events-none" />
              
              <div className="relative z-10 flex justify-between items-start">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-brand-light/50 group-hover:text-brand-light group-hover:border-brand-purple/50 transition-colors duration-500">
                  <span className="text-sm font-mono tracking-widest">0{index + 1}</span>
                </div>
                <ArrowUpRight className="text-brand-light/30 group-hover:text-brand-purple transition-colors duration-500" size={32} />
              </div>
              
              <div className="relative z-10 mt-auto transform group-hover:-translate-y-4 transition-transform duration-500">
                <h3 className="text-3xl font-bold text-brand-light mb-4">{service.title}</h3>
                <p className="text-brand-light/60 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-0 group-hover:h-auto">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
