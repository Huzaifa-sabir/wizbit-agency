"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // If not on homepage, always show the nav immediately
    if (pathname !== "/") {
      setIsVisible(true);
      return;
    }

    // On homepage, only show after scrolling past the hero frames (~150vh)
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 1.5;
      if (window.scrollY > scrollThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Work", path: "/work" },
    { name: "About", path: "/about" },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0, x: "-50%" }}
          animate={{ y: 0, opacity: 1, x: "-50%" }}
          exit={{ y: 100, opacity: 0, x: "-50%" }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed bottom-6 md:bottom-8 left-1/2 z-50 w-[95%] sm:w-[90%] max-w-[500px]"
        >
          <div className="flex items-center justify-between px-2 py-2 md:px-4 md:py-4 rounded-full border border-white/10 bg-[#030005]/80 backdrop-blur-xl shadow-[0_0_30px_rgba(157,78,221,0.15)]">
            
            <div className="flex items-center gap-0.5 md:gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link 
                    key={link.name} 
                    href={link.path}
                    className={`relative px-2.5 py-1.5 md:px-4 md:py-2 text-[10px] md:text-sm font-medium tracking-wide transition-colors duration-300 rounded-full ${
                      isActive ? "text-brand-dark bg-brand-light" : "text-brand-light/60 hover:text-brand-light hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <Link 
              href="/contact"
              className="ml-1 px-3 py-1.5 md:px-5 md:py-2.5 rounded-full text-[11px] md:text-sm font-bold bg-brand-purple text-white shadow-[0_0_15px_rgba(157,78,221,0.4)] hover:shadow-[0_0_25px_rgba(157,78,221,0.6)] hover:scale-105 transition-all duration-300 whitespace-nowrap"
            >
              Start
            </Link>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
