import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col overflow-x-clip bg-brand-dark selection:bg-brand-purple selection:text-white">
      <Hero />
      <div className="relative z-20 bg-brand-dark">
        <AboutSection />
        <Marquee />
        <ServicesSection />
        <Footer />
      </div>
    </main>
  );
}
