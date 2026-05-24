"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 0]);

  return (
    <footer 
      ref={containerRef}
      className="w-full bg-brand-dark pt-24 md:pt-32 pb-8 md:pb-16 px-6 md:px-16 overflow-hidden relative"
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <motion.div style={{ y }} className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-[3.5rem] leading-[1.1] md:text-[120px] font-bold text-brand-light md:leading-none tracking-tighter mb-10 md:mb-12">
          Let's Build <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-light/50">
            The Future.
          </span>
        </h2>
        
        <a 
          href="mailto:hello@wizbit.agency"
          className="group relative px-8 py-4 md:px-12 md:py-6 bg-transparent rounded-full border border-white/20 hover:border-brand-purple transition-colors duration-500 overflow-hidden"
        >
          <div className="absolute inset-0 bg-brand-purple translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
          <span className="relative z-10 text-base md:text-xl font-medium tracking-wide text-brand-light">
            hello@wizbit.agency
          </span>
        </a>

        <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-end mt-32 md:mt-48 gap-8 md:gap-0 text-brand-light/40 text-[10px] md:text-sm font-mono uppercase tracking-widest">
          <span>© 2026 Wizbit Agency</span>
          <div className="flex gap-4 md:gap-6">
            <a href="#" className="hover:text-brand-light transition-colors">Twitter</a>
            <a href="#" className="hover:text-brand-light transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-brand-light transition-colors">Awwwards</a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
