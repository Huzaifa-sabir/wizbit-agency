import type { Metadata } from "next";
import ServicesGrid from "@/components/ServicesGrid";

export const metadata: Metadata = {
  title: "Services | Wizbit Automation Agency",
  description: "Enterprise-grade warehouse automation, custom APIs, and AI integrations designed for measurable ROI.",
};

export default function ServicesPage() {
  return (
    <main className="w-full min-h-screen bg-brand-dark flex flex-col pt-32 px-6 md:px-16 overflow-x-hidden">
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-purple/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <h1 className="text-sm uppercase tracking-[0.3em] text-brand-purple font-semibold mb-6">
          Our Capabilities
        </h1>
        <h2 className="text-5xl md:text-8xl font-bold text-brand-light leading-[1.05] mb-8">
          Systems Engineered <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-brand-light/30">
            for Scale.
          </span>
        </h2>
        <p className="text-lg md:text-2xl text-brand-light/60 max-w-2xl leading-relaxed mb-12">
          We do not build simple websites. We architect end-to-end digital ecosystems, robotic warehouse integrations, and autonomous AI agents that operate flawlessly in the background.
        </p>

        <ServicesGrid />
      </div>
    </main>
  );
}
