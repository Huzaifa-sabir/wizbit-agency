"use client";

import { motion } from "framer-motion";

const MARQUEE_TEXT = "AUTOMATION • INNOVATION • NEXT-GEN • EXPERIENCES • ";

export default function Marquee() {
  return (
    <section className="w-full bg-brand-purple py-6 overflow-hidden flex relative z-20">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/50 via-transparent to-brand-dark/50 z-10 pointer-events-none" />
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 15,
        }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-brand-dark tracking-tighter uppercase mx-4">
          {MARQUEE_TEXT}
        </h2>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-brand-dark tracking-tighter uppercase mx-4">
          {MARQUEE_TEXT}
        </h2>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-brand-dark tracking-tighter uppercase mx-4">
          {MARQUEE_TEXT}
        </h2>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-brand-dark tracking-tighter uppercase mx-4">
          {MARQUEE_TEXT}
        </h2>
      </motion.div>
    </section>
  );
}
