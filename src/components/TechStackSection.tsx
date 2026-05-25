"use client";

import { motion } from "framer-motion";
import { Database, Cloud, Package, Cpu } from "@phosphor-icons/react";

const stacks = [
  {
    title: "ERP Systems",
    items: "SAP • Oracle • Microsoft Dynamics",
    icon: <Database weight="duotone" className="w-6 h-6" />,
  },
  {
    title: "Cloud Infrastructure",
    items: "AWS • Microsoft Azure • GCP",
    icon: <Cloud weight="duotone" className="w-6 h-6" />,
  },
  {
    title: "Logistics & WMS",
    items: "Shopify • Custom Warehouse APIs",
    icon: <Package weight="duotone" className="w-6 h-6" />,
  },
  {
    title: "AI & Robotics",
    items: "Computer Vision • AGV Protocols",
    icon: <Cpu weight="duotone" className="w-6 h-6" />,
  }
];

export default function TechStackSection() {
  return (
    <section className="w-full bg-brand-dark py-24 md:py-32 px-6 md:px-16 border-y border-white/[0.05]">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left: Text Content */}
        <div className="w-full lg:w-1/3">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-purple mb-4 font-semibold">
            Integrations
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-light leading-tight mb-6">
            We Connect <br /> The Dots.
          </h2>
          <p className="text-brand-light/60 text-lg leading-relaxed">
            Our automation solutions don't live in a vacuum. We seamlessly interface with your existing enterprise architecture, ensuring data flows continuously and securely across all platforms.
          </p>
        </div>

        {/* Right: Bento Grid */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {stacks.map((stack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="group p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-brand-purple/30 transition-all duration-500 flex flex-col justify-between min-h-[200px]"
            >
              <div className="w-12 h-12 rounded-full bg-brand-dark border border-white/10 flex items-center justify-center text-brand-light/50 group-hover:text-brand-purple group-hover:border-brand-purple/50 transition-colors duration-500 mb-6">
                {stack.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-light mb-2">{stack.title}</h3>
                <p className="text-sm text-brand-light/40 font-mono tracking-wide">
                  {stack.items}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
