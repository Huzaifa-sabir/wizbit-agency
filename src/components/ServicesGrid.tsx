"use client";

import { motion } from "framer-motion";
import { Robot, Network, Cpu, Lightning, Database, BracketsCurly } from "@phosphor-icons/react";

const services = [
  {
    title: "Warehouse Robotics Integration",
    description: "We architect the software that makes your hardware move. Deep API integrations with Automated Guided Vehicles (AGVs) and complex Warehouse Management Systems (WMS).",
    tags: ["[ WMS APIs ]", "[ AGV Protocols ]", "[ TCP/IP ]"],
    icon: <Robot weight="duotone" className="w-8 h-8 md:w-12 md:h-12" />,
    className: "md:col-span-2 md:row-span-1",
    accent: "from-brand-purple/20 to-transparent",
  },
  {
    title: "Business Process Automation (RPA)",
    description: "Eliminate manual data entry. We build autonomous bots that extract invoice data, synchronize CRM/ERP ecosystems, and execute repetitive operational pipelines with zero human error.",
    tags: ["[ OCR Extraction ]", "[ ERP Sync ]", "[ Web Crawlers ]"],
    icon: <Network weight="duotone" className="w-8 h-8 md:w-12 md:h-12" />,
    className: "md:col-span-1 md:row-span-2",
    accent: "from-brand-light/10 to-transparent",
  },
  {
    title: "Custom AI Agents",
    description: "Deploy large language models (LLMs) tuned strictly on your enterprise data. Build intelligent internal assistants that query your databases, generate reports, and predict operational bottlenecks.",
    tags: ["[ Vector DBs ]", "[ LLM Tuning ]", "[ RAG Pipelines ]"],
    icon: <Cpu weight="duotone" className="w-8 h-8 md:w-12 md:h-12" />,
    className: "md:col-span-2 md:row-span-1",
    accent: "from-brand-purple/10 via-brand-purple/5 to-transparent",
  }
];

export default function ServicesGrid() {
  return (
    <div className="w-full mt-16 mb-40"> {/* mb-40 ensures BottomNav doesn't overlap */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className={`group relative p-8 md:p-12 overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-md hover:border-brand-purple/30 transition-colors duration-700 flex flex-col justify-between ${service.className}`}
          >
            {/* Glowing Accent Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
            
            <div className="relative z-10 flex justify-between items-start mb-12">
              <div className="p-4 rounded-2xl bg-brand-dark/50 border border-white/10 text-brand-light/70 group-hover:text-brand-purple group-hover:border-brand-purple/40 transition-colors duration-500 backdrop-blur-sm">
                {service.icon}
              </div>
              <Lightning weight="fill" className="text-brand-light/10 group-hover:text-brand-purple/50 w-6 h-6 transition-colors duration-700" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-brand-light mb-4 leading-snug">
                {service.title}
              </h3>
              <p className="text-brand-light/60 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-3">
                {service.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 text-xs md:text-sm font-mono tracking-widest text-brand-light/40 border border-white/10 rounded-full bg-brand-dark/30 group-hover:border-brand-purple/20 group-hover:text-brand-light/70 transition-colors duration-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
