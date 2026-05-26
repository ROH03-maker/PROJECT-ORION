import { ConnectedSystem } from "../types";
import { Link, Layers, Cpu, Compass, HardDrive, ShieldAlert, ArrowUpRight } from "lucide-react";

export default function ConnectedEcosystem() {
  const systems: ConnectedSystem[] = [
    {
      id: "aegis-ai",
      title: "AEGIS Defence Shield",
      tagline: "Autonomous proxy routing system for neutralizing multi-layered threatvectors.",
      category: "Intelligence Core",
      status: "SECURED (v4.0)",
      metricsRef: "BLOCKS::10.2M/day",
      externalLink: "https://github.com/Rohitsarkarcodes"
    },
    {
      id: "neural-loom",
      title: "Neural-Loom Synthesizer",
      tagline: "Dynamic self-assembling cognitive coordinate weaver mapping world anomalies.",
      category: "Cognitive Wefts",
      status: "ACTIVE SYNC",
      metricsRef: "STABILITY::99.12%",
      externalLink: "https://github.com/Rohitsarkarcodes"
    },
    {
      id: "personal-portfolio",
      title: "Tactical Portfolio Hub",
      tagline: "Central communications server mapping client architectures and secret designs.",
      category: "Main Nexus",
      status: "PUBLIC DIRECT",
      metricsRef: "COORDINATE::STABLE",
      externalLink: "https://github.com/Rohitsarkarcodes"
    },
    {
      id: "stellar-grid",
      title: "Stellar Energizer Array",
      tagline: "Quantum particle relay modules charging orbital scanner satellites in Low Orbit.",
      category: "Power Grid",
      status: "STANDBY READY",
      metricsRef: "RESERVES::85.5% CAP",
      externalLink: "https://github.com/Rohitsarkarcodes"
    }
  ];

  return (
    <div className="space-y-6 select-none">
      <div className="space-y-2">
        <span className="text-[10px] text-[#00f0ff] font-mono tracking-widest uppercase block font-semibold">
          // INTEGRATED INFRASTRUCTURE MODULES
        </span>
        <h3 className="font-display font-medium text-lg lg:text-xl text-white uppercase tracking-wider">
          Connected Orion Ecosystem
        </h3>
        <p className="text-zinc-500 text-xs leading-relaxed max-w-xl">
          Each tactical coordinate connects seamlessly to specialized client portals, developmental sandboxes, and defensive neural nets within our autonomous network.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {systems.map((sys) => {
          return (
            <div 
              key={sys.id}
              className="group border border-[#00f0ff]/15 bg-[#020308]/60 hover:bg-[#020308]/90 duration-300 rounded-lg p-5 flex flex-col justify-between relative overflow-hidden hover:border-[#00f0ff]/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.08)]"
            >
              {/* Corner decor visual */}
              <div className="absolute top-0 right-0 p-1 px-2.5 bg-[#020308]/80 border-l border-b border-[#00f0ff]/20 text-[8px] font-mono text-[#00f0ff]/70 uppercase tracking-widest">
                {sys.metricsRef}
              </div>

              <div className="space-y-4">
                <div className="flex gap-3.5 items-start">
                  <div className="p-2.5 rounded bg-[#00f0ff]/5 border border-[#00f0ff]/10 text-[#00f0ff] group-hover:scale-105 duration-200 shrink-0">
                    {sys.id === "aegis-ai" && <ShieldAlert className="w-4 h-4 text-[#00f0ff]" />}
                    {sys.id === "neural-loom" && <Cpu className="w-4 h-4 text-[#00f0ff]" />}
                    {sys.id === "personal-portfolio" && <Compass className="w-4 h-4 text-[#00f0ff]" />}
                    {sys.id === "stellar-grid" && <HardDrive className="w-4 h-4 text-[#00f0ff]" />}
                  </div>

                  <div>
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block font-bold">// {sys.category}</span>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono mt-0.5">
                      {sys.title}
                    </h4>
                  </div>
                </div>

                <p className="text-zinc-400 text-xs leading-relaxed">
                  {sys.tagline}
                </p>
              </div>

              <div className="flex justify-between items-center border-t border-[#00f0ff]/10 pt-4 mt-5">
                <span className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded bg-[#00f0ff]/5 border border-[#00f0ff]/20 text-[#00f0ff]">
                  {sys.status}
                </span>

                <a 
                  href={sys.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[10px] font-mono text-zinc-400 group-hover:text-[#00f0ff] transition duration-250 cursor-pointer"
                >
                  LINK FREQUENCY <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}
