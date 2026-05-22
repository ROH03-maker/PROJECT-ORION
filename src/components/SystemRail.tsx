import React from "react";
import { Terminal, Shield, Cpu, HelpCircle, Mail, HelpCircle as LabIcon, Rocket } from "lucide-react";

export default function SystemRail() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="w-16 shrink-0 hidden lg:flex flex-col items-center py-8 gap-8 border-r border-[#00f0ff]/10 bg-[#020308]/60 sticky top-14 h-[calc(100vh-3.5rem)] z-30 backdrop-blur select-none">
      {/* Top Interactive Tactical Indicator */}
      <div 
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="w-10 h-10 border border-[#00f0ff]/30 flex items-center justify-center bg-[#00f0ff]/5 cursor-pointer hover:bg-[#00f0ff]/20 hover:border-[#00f0ff] duration-300 rounded group relative"
        title="SYSTEM NEXUS"
      >
        <div className="w-4 h-4 border-2 border-[#00f0ff] rotate-45 group-hover:scale-110 duration-300" />
        
        {/* Glow point */}
        <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-[#00f0ff] rounded-full animate-ping" />
      </div>

      <div className="flex flex-col gap-8 w-full items-center">
        {/* Nav 1: Core System overview */}
        <button
          onClick={() => scrollTo("about")}
          className="w-10 h-10 flex flex-col justify-between items-center py-2.5 opacity-50 hover:opacity-100 hover:text-[#00f0ff] duration-200 cursor-pointer group"
          title="CORE INTEGRATION"
        >
          <div className="w-5 h-[2px] bg-[#00f0ff] group-hover:w-6 transition-all" />
          <div className="w-4 h-[2px] bg-[#00f0ff] group-hover:w-6 transition-all" />
          <div className="w-5 h-[2px] bg-[#00f0ff] group-hover:w-6 transition-all" />
        </button>

        {/* Nav 2: CommandCenter */}
        <button
          onClick={() => scrollTo("terminal")}
          className="w-10 h-10 flex items-center justify-center text-[#00f0ff] opacity-50 hover:opacity-100 hover:scale-110 duration-200 cursor-pointer"
          title="TACTICAL TERMINAL"
        >
          <div className="w-5 h-5 rounded-full border border-[#00f0ff] flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff0055]" />
          </div>
        </button>

        {/* Nav 3: Operational Timeline / Roadmap */}
        <button
          onClick={() => scrollTo("roadmap")}
          className="w-10 h-10 flex items-center justify-center text-[#00f0ff] opacity-50 hover:opacity-100 hover:scale-110 duration-200 cursor-pointer"
          title="OPERATIONAL ROADMAP"
        >
          <div className="w-5 h-5 border border-[#00f0ff] transform skew-x-12 flex items-center justify-center">
            <Rocket className="w-2.5 h-2.5 text-[#00f0ff]" />
          </div>
        </button>

        {/* Nav 4: Laboratory */}
        <button
          onClick={() => scrollTo("lab")}
          className="w-10 h-10 flex items-center justify-center text-[#00f0ff] opacity-50 hover:opacity-100 hover:scale-110 duration-200 cursor-pointer"
          title="EXPERIMENTAL LAB"
        >
          <div className="w-5 h-5 border border-dashed border-[#00f0ff]/80 rounded flex items-center justify-center">
            <Terminal className="w-3 h-3 text-[#00f0ff]" />
          </div>
        </button>

        {/* Nav 5: Contact Section */}
        <button
          onClick={() => scrollTo("contact")}
          className="w-10 h-10 flex items-center justify-center text-[#00f0ff] opacity-50 hover:opacity-100 hover:scale-110 duration-200 cursor-pointer"
          title="SECURE SECRETS UPLINK"
        >
          <div className="p-1 rounded bg-[#00f0ff]/5 border border-[#00f0ff]/20">
            <Mail className="w-3.5 h-3.5 text-[#00f0ff]" />
          </div>
        </button>
      </div>

      {/* Decorative vertical gradient bar */}
      <div className="mt-auto">
        <div className="w-[1.5px] h-24 bg-gradient-to-b from-transparent via-[#00f0ff]/50 to-transparent animate-pulse" />
      </div>
    </nav>
  );
}
