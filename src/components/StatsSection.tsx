"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "500k+", label: "Hours Saved" },
  { value: "$50M+", label: "Costs Reduced" },
  { value: "99.9%", label: "Error Reduction" }
];

export default function StatsSection() {
  return (
    <section className="w-full bg-brand-dark py-16 md:py-24 border-y border-white/[0.05] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_20%,#030005_100%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/[0.05]">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center pt-8 md:pt-0"
            >
              <h3 className="text-5xl md:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-brand-light to-brand-light/40 mb-4">
                {stat.value}
              </h3>
              <p className="text-sm md:text-base uppercase tracking-[0.2em] font-semibold text-brand-purple">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
