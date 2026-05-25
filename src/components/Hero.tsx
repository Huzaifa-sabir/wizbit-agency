"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 40;
const FRAME_START = 1;

function currentFrame(index: number, isMobile: boolean) {
  const folder = isMobile ? "frames-mobile" : "frames";
  return `/Assets/${folder}/ezgif-frame-${index.toString().padStart(3, "0")}.png`;
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const images: HTMLImageElement[] = [];
    const imageSeq = { frame: 0 };
    let loadedCount = 0;
    
    // Determine initial device state
    const isMobileInitial = window.innerWidth < 768;

    const resizeCanvas = () => {
      if (!canvas) return;
      const isMobile = window.innerWidth < 768;
      // Use a fixed 9:16 aspect ratio for mobile, 16:9 for desktop
      canvas.width = isMobile ? 1080 : 1920;
      canvas.height = isMobile ? 1920 : 1080;
      render();
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas(); // Set initial size

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = currentFrame(i + FRAME_START, isMobileInitial);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImagesLoaded(true);
          render();
        }
      };
      images.push(img);
    }

    function render() {
      if (!canvas || !context || !images[imageSeq.frame]) return;
      context.clearRect(0, 0, canvas.width, canvas.height);
      const img = images[imageSeq.frame];
      
      // Since the user generated perfect vertical frames, we can use exact cover math!
      const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
      const x = (canvas.width / 2) - (img.width / 2) * scale;
      const y = (canvas.height / 2) - (img.height / 2) * scale;
      
      context.drawImage(img, x, y, img.width * scale, img.height * scale);
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1, // Smooth scrub
      }
    });

    tl.to(imageSeq, {
      frame: FRAME_COUNT - 1,
      snap: "frame",
      ease: "none",
      onUpdate: render,
    });

    // Subtly scale the canvas up as we scroll
    tl.fromTo(canvasRef.current, 
      { scale: 1 }, 
      { scale: 1.15, ease: "none" },
      0
    );

    // Fade out text on scroll
    tl.to(".hero-content", {
      opacity: 0,
      y: -50,
      ease: "power2.inOut"
    }, 0);

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full bg-brand-dark"
      style={{ height: "300vh" }}
    >
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center">
        
        {/* Loading State Overlay */}
        <div 
          className={clsx(
            "absolute inset-0 z-40 bg-brand-dark flex items-center justify-center transition-opacity duration-1000",
            imagesLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
          )}
        >
          <div className="w-12 h-12 border-2 border-brand-purple/20 border-t-brand-purple rounded-full animate-spin" />
        </div>

        {/* Cinematic Canvas Background */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <canvas 
            ref={canvasRef} 
            className="w-full h-full object-cover mix-blend-screen opacity-90"
          />
          {/* Radial Gradient overlay to blend canvas into background edges */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#030005_80%)]" />
        </div>

        {/* Content Layout */}
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-8 md:px-16 flex flex-col justify-start md:justify-center h-full hero-content pt-16 sm:pt-24 md:pt-0">
          <div className="max-w-2xl lg:max-w-4xl">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={imagesLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="mb-6 md:mb-8"
            >
              <h1 className="text-[3.5rem] leading-[1.05] sm:text-7xl lg:text-[100px] tracking-tight font-bold text-transparent bg-clip-text bg-gradient-to-br from-brand-light to-brand-light/70">
                Automation <br />
                <span className="text-brand-purple opacity-100 drop-shadow-[0_0_15px_rgba(157,78,221,0.5)]">Beyond</span> <br />
                Imagination
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={imagesLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="max-w-md md:max-w-xl"
            >
              <p className="text-lg sm:text-xl md:text-2xl text-brand-light/60 font-medium leading-relaxed tracking-wide">
                Wizbit creates cinematic AI-powered digital experiences, automation systems, and next-generation web products.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={imagesLoaded ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
              className="mt-10 md:mt-16 flex items-center gap-4 md:gap-6"
            >
              <Link href="/services" className="px-6 py-3 md:px-8 md:py-4 bg-brand-light text-brand-dark rounded-full font-semibold tracking-wide hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_-10px_rgba(157,78,221,0.5)] text-sm md:text-base">
                Explore Reality
              </Link>
              <div className="flex flex-col gap-1 items-center justify-center opacity-40">
                <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-brand-light to-transparent animate-pulse" />
                <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold">Scroll</span>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
