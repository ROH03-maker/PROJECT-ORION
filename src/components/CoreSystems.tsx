import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Network, Cpu, Shield, Globe, Zap, Radio, 
  ArrowRight, Activity, Terminal, Star 
} from "lucide-react";

export default function CoreSystems() {
  const [activeTab, setActiveTab] = useState<"about" | "systems">("about");

  const corePillars = [
    {
      title: "AI & Autonomous Evolution",
      description: "Project Orion operates at the threshold of technological singularity, engineering advanced multi-agent systems designed around self-compiling neural nodes.",
      icon: Cpu,
      telemetry: "PROT_SYNC_441"
    },
    {
      title: "Tactical Infrastructure",
      description: "Establishing low-latency ground relay grids tied with high-voltage defensive encryptions. Resilient against quantum cyber maneuvers & extreme external failures.",
      icon: Shield,
      telemetry: "CYBER_AEGIS_09"
    },
    {
      title: "Orbital Synapse Mesh",
      description: "Connecting planetary scanners and real-time cosmic array receivers into a unified sensory fabric. Mapping world indicators with deep accuracy.",
      icon: Globe,
      telemetry: "ORBIT_MAP_99"
    }
  ];

  const advancedSystems = [
    {
      id: "ai-command",
      name: "AEG-01 Autonomous Command",
      category: "Cognitive AI Core",
      syncStatus: "99.4%",
      loadIndex: "Optimal",
      metrics: ["Multi-agent self-eval", "Logical semantic compilation", "Dynamic proxy routing"],
      description: "Directs security perimeters and handles instant threat neutralization across all quantum entry matrices.",
      color: "from-cyan-500/20 to-[#00f0ff]/10"
    },
    {
      id: "neural-loom",
      name: "Neural-Loom Path Synthesizer",
      category: "Biomorphic Cybernetics",
      syncStatus: "98.2%",
      loadIndex: "Calibrated",
      metrics: ["Organic silicon weave", "Synapse threshold sync", "Bento particle buffer"],
      description: "Tethers world intelligence assets and compiles complex multi-sensory telemetry vectors into actionable cognitive maps.",
      color: "from-purple-500/20 to-indigo-500/10"
    },
    {
      id: "cyber-defense",
      name: "Lattice Encryption Sentinel",
      category: "Defense Infrastructure",
      syncStatus: "100.0%",
      loadIndex: "Armored",
      metrics: ["2048-bit post-quantum Keys", "Entropy-scrambling matrix", "Autonomous intrusion block"],
      description: "Monitors global network intrusions and deploys impenetrable military-grade quantum shielding decoys selectively.",
      color: "from-[#ff0055]/30 to-[#ff0055]/10"
    }
  ];

  return (
    <div className="space-y-8 select-none">
      {/* Tab controls styled like futuristic toggle buttons */}
      <div className="flex justify-center">
        <div className="bg-[#020308]/90 border border-[#00f0ff]/30 p-1.5 rounded-full flex gap-2 shadow-[0_0_15px_rgba(0,240,255,0.05)]">
          <button
            onClick={() => setActiveTab("about")}
            className={`px-6 py-2 rounded-full font-mono text-xs uppercase tracking-widest transition duration-250 cursor-pointer ${
              activeTab === "about"
                ? "bg-[#00f0ff] text-black font-bold shadow-[0_0_10px_rgba(0,240,255,0.3)]"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            // 01. Classified Vision
          </button>
          <button
            onClick={() => setActiveTab("systems")}
            className={`px-6 py-2 rounded-full font-mono text-xs uppercase tracking-widest transition duration-250 cursor-pointer ${
              activeTab === "systems"
                ? "bg-[#00f0ff] text-black font-bold shadow-[0_0_10px_rgba(0,240,255,0.3)]"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            // 02. Advanced Modules
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "about" ? (
          <motion.div
            key="about"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
          >
            {/* Left: Deeply sophisticated narrative vision text */}
            <div className="md:col-span-6 space-y-6">
              <div className="inline-block px-3 py-1 bg-[#ff0055]/10 text-[#ff0055] border border-[#ff0055]/20 text-[10px] rounded font-mono uppercase tracking-widest animate-pulse">
                LEVEL 9 INITIATIVE // CONFIDENTIAL DOCUMENT
              </div>
              
              <h3 className="font-display font-black text-2xl lg:text-3xl text-white tracking-wider uppercase leading-snug">
                Where intelligence <br />
                <span className="text-[#00f0ff] glitch-text">evolves beyond</span> human systems.
              </h3>

              <p className="text-zinc-400 text-sm leading-relaxed">
                Project Orion represents the master blueprint for the next century of autonomous digital civilization. 
                What started as an experimental cybernetics sandbox has mutated under deep algorithmic synthesis 
                into an organic, self-monitoring neural defense and orbital coordinate scanning apparatus.
              </p>

              <p className="text-zinc-400 text-sm leading-relaxed">
                By fusing high-frequency cognitive processing nodes with orbital satellite rings, we weave an 
                impenetrable grid capable of protecting and optimizing human telemetry globally. Access requires 
                authorized quantum signatures. Operate with strict operational sophistication.
              </p>

              <div className="flex gap-4 items-center pt-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#00f0ff]">
                  <Activity className="w-4 h-4 animate-pulse" /> SYNTACTIC LOCK: ESTABLISHED
                </div>
                <div className="h-4 w-[1px] bg-zinc-800" />
                <div className="text-[10px] text-zinc-500 font-mono text-zinc-400">
                  REF-NO: #ORION-8812B4
                </div>
              </div>
            </div>

            {/* Right: Pillars grid showcase */}
            <div className="md:col-span-6 space-y-4">
              {corePillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <div 
                    key={i} 
                    className="p-5 border border-[#00f0ff]/15 bg-[#020308]/60 hover:bg-[#020308]/90 hover:border-[#00f0ff]/40 transition duration-300 rounded-lg flex gap-4 items-start relative overflow-hidden group shadow-[0_0_10px_rgba(0,240,255,0.02)]"
                  >
                    {/* Background faint pulse */}
                    <div className="absolute top-0 right-0 p-1 px-2 font-mono text-[8px] text-[#00f0ff]/60 bg-[#020308]/80 border-l border-b border-[#00f0ff]/20 select-none">
                      {pillar.telemetry}
                    </div>

                    <div className="p-3 rounded bg-[#00f0ff]/5 border border-[#00f0ff]/20 text-[#00f0ff] group-hover:scale-105 duration-200">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                        {pillar.title}
                      </h4>
                      <p className="text-zinc-400 text-xs leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="systems"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Systems Grid Core showing sophisticated floating cards with holographic glows */}
            {advancedSystems.map((sys) => (
              <div 
                key={sys.id} 
                className={`orion-corners border border-[#00f0ff]/20 bg-gradient-to-br ${sys.color} p-6 rounded-lg relative overflow-hidden flex flex-col justify-between group hover:border-[#00f0ff]/60 transition duration-300 shadow-[0_0_15px_rgba(0,240,255,0.02)]`}
              >
                {/* Floating corner indicator */}
                <div className="absolute top-3 right-3 text-[8px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-1">
                  <Star className="w-2.5 h-2.5 text-[#00f0ff] animate-pulse" /> SYNC: {sys.syncStatus}
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-mono text-[#00f0ff] uppercase tracking-wider font-semibold">
                      // {sys.category}
                    </span>
                    <h4 className="text-sm font-black text-white uppercase tracking-wider font-display mt-1">
                      {sys.name}
                    </h4>
                  </div>

                  <p className="text-zinc-400 text-xs leading-relaxed">
                    {sys.description}
                  </p>

                  <div className="border-t border-[#00f0ff]/10 pt-4 space-y-2">
                    <span className="text-[9px] text-zinc-500 uppercase font-mono tracking-widest block">TELEMETRY PARAMETERS:</span>
                    <ul className="space-y-1 text-[10px] font-mono text-zinc-400">
                      {sys.metrics.map((metric, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="text-emerald-400">✓</span> {metric}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Simulated diagnostic panel visual */}
                <div className="flex justify-between items-center bg-[#020308]/60 border border-[#00f0ff]/20 mt-5 p-2 rounded text-[10px] font-mono">
                  <span className="text-zinc-500">LOAD BUFFER</span>
                  <span className="text-[#00f0ff] font-bold">{sys.loadIndex}</span>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
