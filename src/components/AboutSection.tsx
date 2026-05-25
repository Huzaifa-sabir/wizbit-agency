"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const textElements = textRef.current?.querySelectorAll(".word");
    
    if (textElements && textElements.length > 0) {
      gsap.fromTo(
        textElements,
        { opacity: 0.1, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 50%",
            scrub: true,
          },
        }
      );
    }
    
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const text = "We engineer intelligent systems that give you back your time. Beyond basic automation, we build the digital infrastructure of tomorrow.";
  
  return (
    <section 
      ref={containerRef} 
      className="w-full min-h-screen bg-brand-dark flex flex-col justify-center items-center py-24 md:py-32 px-6 md:px-16 relative"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[800px] h-[400px] bg-brand-purple/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-5xl mx-auto w-full relative z-10">
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-brand-purple mb-8 md:mb-12 font-semibold">
          The Vision
        </p>
        <h2 ref={textRef} className="text-[2rem] leading-[1.1] md:text-6xl lg:text-7xl font-bold md:leading-tight text-brand-light flex flex-wrap gap-x-3 gap-y-2 md:gap-x-4">
          {text.split(" ").map((word, i) => (
            <span key={i} className="word inline-block">{word}</span>
          ))}
        </h2>
      </div>
    </section>
  );
}
