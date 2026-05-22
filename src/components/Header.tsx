import { useState, useEffect } from "react";
import { Shield, Radio, Activity, Clock } from "lucide-react";

export default function Header() {
  const [time, setTime] = useState<string>("07:20:25 UTC");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Lock year specifically to 2026 which matches current user metadata
      now.setFullYear(2026);
      const hours = String(now.getHours()).padStart(2, "0");
      const mins = String(now.getMinutes()).padStart(2, "0");
      const secs = String(now.getSeconds()).padStart(2, "0");
      setTime(`${hours}:${mins}:${secs} UTC`);
    };

    const interval = setInterval(updateTime, 1000);
    updateTime();
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-[#020308]/80 border-b border-[#00f0ff]/30 backdrop-blur-md select-none">
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
        
        {/* Left logotype */}
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-[#00f0ff] shadow-[0_0_8px_#00f0ff] shrink-0 rounded-sm" />
          
          <div className="flex flex-col">
            <span className="font-display font-medium text-xs text-white uppercase tracking-[0.25em] flex items-center gap-1.5">
              PROJECT ORION <span className="text-[#00f0ff] animate-pulse text-[9px] font-bold tracking-normal">[SECRET]</span>
            </span>
            <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest">// COGNITIVE GLOBAL INTERFACE</span>
          </div>
        </div>

        {/* Center: Live status metrics */}
        <div className="hidden md:flex items-center gap-8 font-mono text-[9px] text-zinc-400">
          <div className="flex items-center gap-2">
            <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>CORE INTEGRITY: <span className="text-emerald-400 font-bold">98.7%</span></span>
          </div>
          <div className="h-3 w-[1px] bg-zinc-800" />
          
          <div className="flex items-center gap-2">
            <Radio className="w-3.5 h-3.5 text-[#00f0ff]" />
            <span>BEACON FEED: <span className="text-[#00f0ff] font-bold">ACTIVE</span></span>
          </div>
          <div className="h-3 w-[1px] bg-zinc-800" />

          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-zinc-400" />
            <span>FIREWALL CAP: <span className="text-zinc-200">2048-BIT</span></span>
          </div>
        </div>

        {/* Right clock section */}
        <div className="flex items-center gap-2.5 bg-[#00f0ff]/5 border border-[#00f0ff]/10 px-3 py-1.5 rounded font-mono text-[10px] text-[#00f0ff]">
          <Clock className="w-3.5 h-3.5 text-[#00f0ff] animate-spin" style={{ animationDuration: "12s" }} />
          <span>{time}</span>
        </div>

      </div>
    </header>
  );
}
