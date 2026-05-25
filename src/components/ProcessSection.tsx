"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Deep Audit",
    description: "We analyze your existing workflows, identify bottlenecks, and map out the exact processes ready for autonomous execution."
  },
  {
    title: "Custom Architecture",
    description: "Our engineers design a bespoke, scalable AI ecosystem tailored strictly to your operational requirements and existing tech stack."
  },
  {
    title: "Deployment & Training",
    description: "Seamless integration of robotic workflows and intelligent agents, coupled with comprehensive training for your team."
  },
  {
    title: "Ongoing Optimization",
    description: "Continuous monitoring, model fine-tuning, and performance scaling to ensure maximum ROI as your business grows."
  }
];

export default function ProcessSection() {
  return (
    <section className="w-full bg-brand-dark py-24 md:py-32 px-6 md:px-16 relative">
      <div className="max-w-4xl mx-auto w-full">
        <div className="mb-16 md:mb-24 text-center">
          <h2 className="text-sm uppercase tracking-[0.3em] text-brand-purple mb-4 font-semibold">
            How We Work
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold text-brand-light">
            The Automation Pipeline
          </h3>
        </div>

        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[23px] md:left-[27px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-brand-purple/50 via-white/10 to-transparent" />

          <div className="flex flex-col gap-12 md:gap-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex items-start gap-8 md:gap-12 group"
              >
                {/* Glowing Node */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 bg-brand-dark flex items-center justify-center group-hover:border-brand-purple transition-colors duration-500 shadow-[0_0_20px_rgba(157,78,221,0)] group-hover:shadow-[0_0_20px_rgba(157,78,221,0.4)]">
                  <span className="text-brand-light/50 group-hover:text-brand-light font-mono text-sm transition-colors duration-500">
                    0{index + 1}
                  </span>
                </div>

                {/* Content Card */}
                <div className="flex-1 pt-1 md:pt-2">
                  <h4 className="text-2xl md:text-3xl font-bold text-brand-light mb-4 group-hover:text-brand-purple transition-colors duration-500">
                    {step.title}
                  </h4>
                  <p className="text-brand-light/60 text-base md:text-lg leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
