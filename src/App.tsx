import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import BootSequence from "./components/BootSequence";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CommandCenter from "./components/CommandCenter";
import CoreSystems from "./components/CoreSystems";
import MissionTimeline from "./components/MissionTimeline";
import InnovationLab from "./components/InnovationLab";
import ConnectedEcosystem from "./components/ConnectedEcosystem";
import ContactSection from "./components/ContactSection";
import CustomCursor from "./components/CustomCursor";

import { 
  ShieldAlert, Radio, Globe, Terminal, Activity, 
  HelpCircle, ChevronDown, Sparkles 
} from "lucide-react";

// Import custom generated images securely
import telemetryImg from "./assets/images/orion_orbital_telemetry_1779434467630.png";
import aiCoreImg from "./assets/images/orion_ai_core_1779434484673.png";

import SystemRail from "./components/SystemRail";

export default function App() {
  const [booted, setBooted] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#020308] text-[#c2d1e0] selection:bg-[#00f0ff] selection:text-black antialiased overflow-hidden">
      
      <AnimatePresence mode="wait">
        {!booted ? (
          <BootSequence key="boot" onComplete={() => setBooted(true)} />
        ) : (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, filter: "blur(10px)", scale: 0.98 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col min-h-screen orion-noise-bg relative"
          >
            {/* Custom Mouse follow scanner cursor & ambient background glow */}
            <CustomCursor />

            {/* Ambient Background FX from Sleek Interface Prototype */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-900/15 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-red-900/10 blur-[120px] rounded-full"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.04),transparent_70%)]"></div>
            </div>

            {/* Kinetic visual lines running in absolute backdrop positions */}
            <div className="absolute inset-0 orion-energy-grid opacity-[0.22] pointer-events-none" />

            {/* Glowing vertical cyber boundary rails */}
            <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-cyan-500/10 hidden xl:block pointer-events-none" />
            <div className="absolute right-6 top-0 bottom-0 w-[1px] bg-[#ff0055]/10 hidden xl:block pointer-events-none" />

            {/* Modular Header */}
            <Header />

            {/* Split layout: SystemRail + Main viewport area */}
            <div className="flex flex-1 relative w-full h-full">
              {/* Sleek Interactive System Navigation Rail */}
              <SystemRail />

              {/* Main scroll element */}
              <main className="flex-1 max-w-7xl mx-auto px-6 py-12 space-y-24 relative z-10 w-full">
              
              {/* Section 1: Hero classified interface */}
              <section id="hero" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[75vh]">
                
                {/* Left Text content (7 columns) */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Highly polished security disclaimer badge with smooth cinematic slide in */}
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    className="inline-flex items-center gap-2 px-3 py-1 bg-[#ff0055]/10 border border-[#ff0055]/30 rounded text-[#ff0055] font-mono text-[10px] uppercase tracking-widest animate-pulse select-none"
                  >
                    <ShieldAlert className="w-3.5 h-3.5" /> CRITICAL: INITIATIVE STATUS LEVEL 9
                  </motion.div>

                  <div className="space-y-4">
                    <motion.h1 
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
                      className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[1.05]"
                    >
                      Project Orion <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-indigo-400 to-[#ff0055] animate-pulse">
                        Beyond Human Systems.
                      </span>
                    </motion.h1>
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                      className="font-display text-white italic text-sm sm:text-base opacity-90 font-medium"
                    >
                      Initializing the Future. Where Intelligence Evolves organically.
                    </motion.p>
                  </div>

                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                    className="text-zinc-400 text-sm leading-relaxed max-w-xl"
                  >
                    Welcome to the central command node of Project Orion, a classified advanced infrastructure sandbox. 
                    Explore active satellite coordinates, synapse loops, and neural weaves. Access real-time multi-agent 
                    computation structures through our integrated command terminal below.
                  </motion.p>

                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                    className="flex flex-wrap items-center gap-4 pt-2"
                  >
                    <a
                      href="#terminal"
                      className="px-6 py-2.5 bg-[#00f0ff] hover:bg-[#00f0ff]/80 font-bold font-mono text-black text-xs uppercase tracking-wider rounded cursor-pointer transition duration-300 shadow-[0_0_15px_rgba(0,240,255,0.45)]"
                    >
                      // SYNC AI CONSOLE
                    </a>
                    
                    <a
                      href="#roadmap"
                      className="px-6 py-2.5 bg-transparent hover:bg-white/5 border border-zinc-700 hover:border-[#00f0ff] font-bold font-mono text-zinc-300 text-xs uppercase tracking-wider rounded cursor-pointer transition duration-300"
                    >
                      SECURE ROADMAP
                    </a>
                  </motion.div>

                  {/* Operational status grid underneath with smooth layout entry */}
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
                    className="grid grid-cols-3 gap-6 border-t border-zinc-800/80 pt-6 font-mono text-[10px] text-zinc-500 uppercase select-none"
                  >
                    <div>
                      <span>Satellite Nodes</span>
                      <span className="text-white mt-1 font-bold block">[09/09 LOCAL]</span>
                    </div>
                    <div>
                      <span>Integrity Vector</span>
                      <span className="text-emerald-400 mt-1 font-bold block">[98.7% SECURE]</span>
                    </div>
                    <div>
                      <span>Core Version</span>
                      <span className="text-[#00f0ff] mt-1 font-bold block">[v4.9.2-ALPHA]</span>
                    </div>
                  </motion.div>
                </div>

                {/* Right Holographic telemetry visuals (5 columns) */}
                <div className="lg:col-span-5 flex justify-center relative">
                  
                  {/* Multi-layered orbital visual blocks with smooth zoom reveal */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
                    className="group w-full max-w-[400px] aspect-square relative flex items-center justify-center border border-zinc-800/80 bg-black/40 rounded-lg p-3 overflow-hidden orion-scanner orion-corners hover:border-[#ffd700] hover:shadow-[0_0_30px_rgba(255,215,0,0.25)] transition-all duration-500"
                  >
                    
                    {/* Glowing radial circles surrounding background */}
                    <div className="absolute inset-4 rounded-full border border-dashed border-[#00f0ff]/10 group-hover:border-[#ffd700]/30 animate-spin transition-colors duration-500" style={{ animationDuration: "60s" }} />
                    <div className="absolute inset-10 rounded-full border border-dotted border-[#ff0055]/10 group-hover:border-[#ffd700]/30 animate-reverse-spin" style={{ animationDuration: "40s" }} />
                    
                    {/* Embedded generated telemetry visual */}
                    <img
                      src={telemetryImg}
                      alt="Orbital Telemetry Schematic"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded opacity-80 mix-blend-screen pointer-events-none select-none"
                    />

                    {/* Laser line effect simulation indicator */}
                    <div className="absolute inset-y-0 left-1/2 w-[1px] bg-[#00f0ff]/20 group-hover:bg-[#ffd700]/40 animate-pulse pointer-events-none transition-colors duration-500" />
                    <div className="absolute inset-x-0 top-1/2 h-[1px] bg-[#00f0ff]/20 group-hover:bg-[#ffd700]/40 animate-pulse pointer-events-none transition-colors duration-500" />

                    <div className="absolute bottom-3 left-3 bg-black/80 border border-zinc-800 group-hover:border-[#ffd700]/30 px-2 py-1 rounded text-[8px] font-mono text-[#00f0ff] group-hover:text-[#ffd700] uppercase tracking-widest flex items-center gap-1.5 backdrop-blur transition-all duration-500">
                      <Radio className="w-2.5 h-2.5 text-[#00f0ff] group-hover:text-[#ffd700] animate-pulse transition-colors duration-500" /> SAT INTEGRATION ACQUIRED
                    </div>
                  </motion.div>

                </div>

              </section>

              {/* Scroll anchor visual block */}
              <div className="flex justify-center select-none pt-4">
                <a href="#about" className="animate-bounce flex flex-col items-center gap-1.5 text-zinc-500 hover:text-[#00f0ff] transition cursor-pointer font-mono text-[9px] uppercase tracking-widest">
                  DECRYPTING LEVEL 2 DATA <ChevronDown className="w-4 h-4 text-zinc-500 animate-pulse" />
                </a>
              </div>

              {/* Section 2: About Project Orion & Core Systems (Pillars + Tabs) */}
              <section id="about" className="scroll-mt-24 space-y-4">
                <div className="text-center space-y-2">
                  <span className="text-[10px] text-[#00f0ff] font-mono tracking-widest uppercase font-bold">// MASTER BLUEPRINT SUMMARY</span>
                  <h2 className="font-display font-medium text-xl lg:text-2xl text-white uppercase tracking-wider">
                    Orion Core Synthesis
                  </h2>
                  <div className="w-12 h-[1.5px] bg-[#00f0ff] mx-auto opacity-70" />
                </div>

                <CoreSystems />
              </section>

              {/* Section 3: Interactive Command Center Matrix */}
              <section id="terminal" className="scroll-mt-24 space-y-4">
                <div className="text-center space-y-2">
                  <span className="text-[10px] text-[#ff0055] font-mono tracking-widest uppercase font-bold">// SECURED DATA COCKPIT</span>
                  <h2 className="font-display font-medium text-xl lg:text-2xl text-white uppercase tracking-wider">
                    Tactical Command Center
                  </h2>
                  <div className="w-12 h-[1.5px] bg-[#ff0055] mx-auto opacity-70" />
                </div>

                <CommandCenter />
              </section>

              {/* Advanced graphic showcase layout */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-black/20 p-6 rounded border border-zinc-800/60 font-mono text-xs">
                <div className="space-y-4">
                  <span className="text-[#00f0ff] font-bold text-[10px] uppercase tracking-widest block">// CORE COGNITION DIAGNOSTIC</span>
                  <h3 className="font-sans font-medium text-lg text-white uppercase tracking-wider">
                    Synthetic AI Brain Linkage
                  </h3>
                  <p className="text-zinc-400 leading-relaxed text-xs">
                    The cognitive network relies on organic-silicon threads weaving synapses in quantum registers. 
                    The holographic diagram displays the dynamic signal velocity map. Maximize cooling to maintain coherence index rates on satellite payloads.
                  </p>
                  <div className="flex gap-4 text-zinc-500 text-[10px] uppercase">
                    <span>CO-EFF: 0.982</span>
                    <span>SIGNAL LEVEL: EXTREME</span>
                  </div>
                </div>

                <div className="h-44 border border-zinc-800 bg-black/60 rounded flex items-center justify-center p-3 relative overflow-hidden orion-scanner">
                  <img
                    src={aiCoreImg}
                    alt="AI Quantum Core Hub"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded opacity-60 mix-blend-screen pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-radial from-transparent via-black/3c to-black pointer-events-none" />
                </div>
              </section>

              {/* Section 4: Mission Timeline Roadmap */}
              <section id="roadmap" className="scroll-mt-24 space-y-4">
                <div className="text-center space-y-2">
                  <span className="text-[10px] text-[#00f0ff] font-mono tracking-widest uppercase font-bold">// SYSTEM EVOLUTION MILESTONES</span>
                  <h2 className="font-display font-medium text-xl lg:text-2xl text-white uppercase tracking-wider">
                    Operational Timeline
                  </h2>
                  <div className="w-12 h-[1.5px] bg-[#00f0ff] mx-auto opacity-70" />
                </div>

                <MissionTimeline />
              </section>

              {/* Section 5: Innovation Lab */}
              <section id="lab" className="scroll-mt-24 space-y-4">
                <div className="text-center space-y-2">
                  <span className="text-[10px] text-[#ff0055] font-mono tracking-widest uppercase font-bold">// EXPERIMENTAL PHYSICS DESIGNS</span>
                  <h2 className="font-display font-medium text-xl lg:text-2xl text-white uppercase tracking-wider">
                    Innovation Laboratory
                  </h2>
                  <div className="w-12 h-[1.5px] bg-[#ff0055] mx-auto opacity-70" />
                </div>

                <InnovationLab />
              </section>

              {/* Section 6: Connected Ecosystem */}
              <section id="ecosystem" className="scroll-mt-24">
                <ConnectedEcosystem />
              </section>

              {/* Section 7: Enrypted Contact & Collaboration Form */}
              <section id="contact" className="scroll-mt-24 space-y-4">
                <div className="text-center space-y-2">
                  <span className="text-[10px] text-[#00f0ff] font-mono tracking-widest uppercase font-bold">// TRANSMIT SYSTEM SIGNALS</span>
                  <h2 className="font-display font-medium text-xl lg:text-2xl text-white uppercase tracking-wider">
                    Secured Uplink
                  </h2>
                  <div className="w-12 h-[1.5px] bg-[#00f0ff] mx-auto opacity-70" />
                </div>

                <ContactSection />
              </section>

            </main>
          </div>

            {/* Modular Footer */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
