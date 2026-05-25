import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Wizbit Automation Agency",
  description: "Learn about the engineers, designers, and systems architects behind Wizbit's cinematic automation solutions.",
};

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-brand-dark flex flex-col pt-32 px-6 md:px-16 overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <h1 className="text-sm uppercase tracking-[0.3em] text-brand-purple font-semibold mb-6">
          The Agency
        </h1>
        <h2 className="text-5xl md:text-8xl font-bold text-brand-light leading-[1.05] mb-16 md:mb-32">
          Architects of the <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-light/50">
            Digital Horizon.
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <h3 className="text-3xl md:text-5xl font-bold text-brand-light leading-snug">
            We exist to eliminate the mundane and accelerate the extraordinary.
          </h3>
          <div className="flex flex-col gap-8">
            <p className="text-lg text-brand-light/60 leading-relaxed">
              Wizbit was founded on a singular premise: most businesses are constrained by processes that robots and AI can execute a thousand times faster.
            </p>
            <p className="text-lg text-brand-light/60 leading-relaxed">
              We are a collective of systems engineers, technical artists, and automation experts who bridge the gap between heavy industrial software and cinematic, Apple-tier user experiences.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
