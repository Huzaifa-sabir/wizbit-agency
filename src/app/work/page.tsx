import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work | Wizbit Automation Agency",
  description: "Explore our latest case studies highlighting massive ROI, operational efficiency, and cutting-edge web experiences.",
};

export default function WorkPage() {
  return (
    <main className="w-full min-h-screen bg-brand-dark flex flex-col pt-32 px-6 md:px-16 overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <h1 className="text-sm uppercase tracking-[0.3em] text-brand-purple font-semibold mb-6">
          Selected Works
        </h1>
        <h2 className="text-5xl md:text-8xl font-bold text-brand-light leading-[1.05] mb-8">
          Proof of <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-brand-light/30">
            Impact.
          </span>
        </h2>
        <p className="text-lg md:text-2xl text-brand-light/60 max-w-2xl leading-relaxed mb-24">
          Discover how we have transformed manual, error-prone operations into autonomous, high-speed digital pipelines for industry leaders.
        </p>

        {/* Placeholder for Case Studies Grid */}
        <div className="w-full h-[500px] border border-white/5 rounded-3xl bg-white/[0.01] flex items-center justify-center">
          <span className="text-brand-light/30 font-mono text-sm tracking-widest">[ Case Studies Masonry Grid ]</span>
        </div>
      </div>
    </main>
  );
}
