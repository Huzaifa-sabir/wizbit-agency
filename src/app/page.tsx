import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import TechStackSection from "@/components/TechStackSection";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col overflow-x-clip bg-brand-dark selection:bg-brand-purple selection:text-white">
      <Hero />
      <div className="relative z-20 bg-brand-dark">
        <AboutSection />
        <StatsSection />
        <ServicesSection />
        <ProcessSection />
        <TechStackSection />
        <Marquee />
        <Footer />
      </div>
    </main>
  );
}
