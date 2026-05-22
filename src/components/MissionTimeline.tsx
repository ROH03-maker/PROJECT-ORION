import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TimelineMilestone } from "../types";
import { Target, CheckCircle2, TrendingUp, Radio, HelpCircle } from "lucide-react";

export default function MissionTimeline() {
  const [milestones, setMilestones] = useState<TimelineMilestone[]>([
    {
      id: "phase01",
      phase: "Phase 01",
      title: "System Initialization & Cryo-Boot",
      term: "Q2 2026 (Operational)",
      status: "COMPLETED",
      description: "Successfully configured the underlying quantum-lattice server rigs. Completed deployment of core secure terminal framework and established satellite link telemetry.",
      metrics: ["Server integrity: 99.9%", "Telemetry link speed: 1.2 GB/s", "Bypass filters verified"]
    },
    {
      id: "phase02",
      phase: "Phase 02",
      title: "Neural Expansion & Weave Node Matrix",
      term: "Q3 2026 (Underway)",
      status: "ACTIVE",
      description: "Embedding organic cybernetic synapses globally. Connecting autonomous sub-proxies and launching AI synthesis layers across continental sensory routers.",
      metrics: ["Sensory weave nodes: 8.4B loaded", "Cognitive alignment index: 95.2%", "Coherence sync margin: +/- 1.4%"]
    },
    {
      id: "phase03",
      phase: "Phase 03",
      title: "Autonomous Synapse compiler",
      term: "Q4 2026 (Staged)",
      status: "ACTIVE",
      description: "Letting AI compile logical schemas directly. Automated diagnostic loops autonomously detect external threats and adjust local firewall configurations in micro-seconds.",
      metrics: ["Self-repair cycle test: Active", "Latency threshold: 8.2ms", "Decision routing error: <0.001%"]
    },
    {
      id: "phase04",
      phase: "Phase 04",
      title: "Orion Network Activation",
      term: "Q1 2027 (Staged)",
      status: "DEFERRED",
      description: "Triggering final global satellite linkage. Deploying orbital lasers telemetry maps for high-resolution planetary scan arrays.",
      metrics: ["Orbital telemetry arrays: 48 units", "Thermal range tolerability: 1800K", "Coverage threshold: 100% Earth"]
    },
    {
      id: "phase05",
      phase: "Phase 05",
      title: "Future Civilization systems Integration",
      term: "Future Era",
      status: "DEFERRED",
      description: "Deploying self-reproducing nanotechnology nodes to form quantum grids that assist human cognition seamlessly across smart ecosystems.",
      metrics: ["Nanotech relay margin: 12nm", "Cognitive uplink speed: Multi-petabit", "Civilization index margin: Scale V"]
    }
  ]);

  const [selectedMilestone, setSelectedMilestone] = useState<TimelineMilestone>(milestones[1]);

  return (
    <div className="border border-[#00f0ff]/20 bg-[#020308]/60 p-6 rounded-lg relative overflow-hidden orion-corners select-none shadow-[0_0_20px_rgba(0,240,255,0.03)]">
      <div className="absolute top-2 right-2 text-[9px] font-mono text-zinc-600">ORION-ROADMAP // RUNNING</div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left pane: Vertical interactive high-tech timeline trail (7 columns) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <Radio className="w-4 h-4 text-[#00f0ff] animate-ping" />
            <h3 className="font-display font-medium text-sm text-[#00f0ff] uppercase tracking-widest font-bold">
              Mission Roadmap Coordinates
            </h3>
          </div>

          <div className="relative pl-6 space-y-6 before:content-[''] before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-[1px] before:bg-[#00f0ff]/10">
            {milestones.map((ms) => {
              const isSelected = selectedMilestone.id === ms.id;
              const isComp = ms.status === "COMPLETED";
              const isActive = ms.status === "ACTIVE";

              return (
                <div 
                  key={ms.id} 
                  onClick={() => setSelectedMilestone(ms)}
                  className="relative group cursor-pointer"
                >
                  {/* Glowing dot representing phase point */}
                  <div className={`absolute -left-[23px] top-1.5 w-3.5 h-3.5 rounded-full border flex items-center justify-center transition ${
                    isSelected 
                      ? "bg-[#00f0ff] border-[#00f0ff] shadow-[0_0_10px_#00f0ff]" 
                      : isComp 
                        ? "bg-emerald-500/20 border-emerald-400 text-emerald-400"
                        : isActive 
                          ? "bg-amber-500/15 border-amber-400 text-amber-300"
                          : "bg-[#020308] border-zinc-700"
                  }`}>
                    {isComp && <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />}
                    {isActive && <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping" />}
                  </div>

                  <div className={`p-4 border rounded transition duration-250 ${
                    isSelected 
                      ? "border-[#00f0ff]/80 bg-[#00f0ff]/5 shadow-[0_0_12px_rgba(0,240,255,0.05)]" 
                      : "border-[#00f0ff]/10 hover:border-[#00f0ff]/30 bg-[#020308]/80"
                  }`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-mono font-bold text-[#00f0ff] uppercase tracking-wider">
                        {ms.phase} • {ms.term}
                      </span>
                      <span className={`text-[8px] font-mono font-black uppercase px-2 py-0.5 rounded ${
                        isComp 
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                          : isActive 
                            ? "bg-amber-500/10 text-amber-300 border border-amber-500/20 animate-pulse" 
                            : "bg-zinc-800/60 text-zinc-500 border border-zinc-700/40"
                      }`}>
                        {ms.status}
                      </span>
                    </div>

                    <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                      {ms.title}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right pane: Deeply detailed parameters for selected milestone (5 columns) */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div 
              key={selectedMilestone.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="p-5 border border-[#00f0ff]/20 bg-[#020308]/95 rounded flex-1 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-[#00f0ff]/15 pb-3">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono text-[#00f0ff] uppercase tracking-widest font-bold">// ROADMAP DECRYPTION</span>
                    <h4 className="text-sm font-black text-white uppercase tracking-wider font-display font-mono">{selectedMilestone.phase} DETAIL</h4>
                  </div>
                  <Target className="w-5 h-5 text-[#00f0ff] animate-pulse" />
                </div>

                <div className="space-y-3">
                  <h5 className="text-xs font-bold text-zinc-300 font-mono italic">"{selectedMilestone.title}"</h5>
                  <p className="text-zinc-400 text-xs leading-relaxed">{selectedMilestone.description}</p>
                </div>

                <div className="border-t border-[#00f0ff]/15 pt-4 space-y-3.5">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block font-bold">MILESTONE SPECIFICATION MATRIX</span>
                  
                  <div className="space-y-2">
                    {selectedMilestone.metrics.map((m, i) => (
                      <div key={i} className="flex items-center gap-2 p-2 bg-[#020308]/90 border border-[#00f0ff]/10 text-[10px] font-mono rounded">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="text-zinc-300 tracking-wider uppercase">{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Graphical representation metrics */}
              <div className="mt-6 flex gap-2 items-center text-[10px] font-mono text-[#00f0ff]/60 bg-[#020308] p-3 rounded border border-[#00f0ff]/10 justify-center">
                <TrendingUp className="w-3.5 h-3.5 text-[#00f0ff]" />
                <span>CHRONOLOGICAL PROGRESS VERIFIED</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
