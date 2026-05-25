import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Wizbit Automation Agency",
  description: "Book an automation discovery audit with our systems engineering team today.",
};

export default function ContactPage() {
  return (
    <main className="w-full min-h-screen bg-brand-dark flex flex-col pt-32 px-6 md:px-16 overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left: Contact Info */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-sm uppercase tracking-[0.3em] text-brand-purple font-semibold mb-6">
            Initiate Protocol
          </h1>
          <h2 className="text-5xl md:text-7xl font-bold text-brand-light leading-[1.05] mb-8">
            Let's Talk <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-light/50">
              Automation.
            </span>
          </h2>
          <p className="text-lg text-brand-light/60 max-w-md leading-relaxed mb-12">
            Ready to dramatically reduce operational costs and scale your digital infrastructure? Book an audit with our lead engineers.
          </p>

          <div className="flex flex-col gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-brand-light/40 mb-2">Email</p>
              <a href="mailto:hello@wizbit.agency" className="text-xl font-medium text-brand-light hover:text-brand-purple transition-colors duration-300">
                hello@wizbit.agency
              </a>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-brand-light/40 mb-2">Location</p>
              <p className="text-xl font-medium text-brand-light">Global / Remote</p>
            </div>
          </div>
        </div>

        {/* Right: Premium Form Layout */}
        <div className="w-full lg:w-1/2 bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-sm">
          <form className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-sm uppercase tracking-widest text-brand-light/50">Name</label>
              <input type="text" className="w-full bg-transparent border-b border-white/10 pb-4 text-brand-light focus:outline-none focus:border-brand-purple transition-colors duration-300" placeholder="John Doe" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm uppercase tracking-widest text-brand-light/50">Company Email</label>
              <input type="email" className="w-full bg-transparent border-b border-white/10 pb-4 text-brand-light focus:outline-none focus:border-brand-purple transition-colors duration-300" placeholder="john@enterprise.com" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm uppercase tracking-widest text-brand-light/50">Project Scope</label>
              <textarea rows={4} className="w-full bg-transparent border-b border-white/10 pb-4 text-brand-light focus:outline-none focus:border-brand-purple transition-colors duration-300 resize-none" placeholder="Briefly describe the processes you want to automate..." />
            </div>
            <button type="button" className="w-full py-4 mt-4 bg-brand-light text-brand-dark font-bold tracking-wide rounded-full hover:bg-brand-purple hover:text-white transition-all duration-300">
              Submit Request
            </button>
          </form>
        </div>

      </div>
    </main>
  );
}
