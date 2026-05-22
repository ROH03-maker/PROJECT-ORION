import { ShieldAlert, Cpu, Heart, CheckCircle2 } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[#00f0ff]/30 bg-[#020308]/90 pt-14 pb-8 overflow-hidden select-none">
      
      {/* Background kinetic grid back */}
      <div className="absolute inset-0 orion-energy-grid opacity-20 pointer-events-none" />

      {/* Pulsing energy line boundary at top */}
      <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo brand (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center shrink-0">
                <span className="font-display font-semibold text-xs text-[#00f0ff]">Ω</span>
              </div>
              <span className="font-display font-black text-xs text-white uppercase tracking-wider">PROJECT ORION</span>
            </div>
            
            <p className="text-zinc-500 text-xs leading-relaxed max-w-xs">
              A high-security, autonomous digital-silicon paradigm constructed to defend cyber coordinates & empower planetary telemetry nodes cleanly.
            </p>
          </div>

          {/* Quick diagnostics indicators (4 cols) */}
          <div className="md:col-span-4 space-y-3 font-mono text-[10px]">
            <span className="text-zinc-400 font-bold uppercase tracking-widest block">SYSTEM INFRASTRUCTURE STATUS</span>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-black/40 border border-zinc-800/80 rounded">
                <span className="text-zinc-500">AEGIS DEYCRYPTER</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">Online <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" /></span>
              </div>
              <div className="flex items-center justify-between p-2 bg-black/40 border border-zinc-800/80 rounded">
                <span className="text-zinc-500">ORBITAL RIG SENSOR</span>
                <span className="text-[#00f0ff] font-medium flex items-center gap-1">Acquired [9/9] <Cpu className="w-3 h-3 text-[#00f0ff] shrink-0" /></span>
              </div>
            </div>
          </div>

          {/* System safety logs (4 cols) */}
          <div className="md:col-span-4 space-y-3 font-mono text-[10px]">
            <span className="text-zinc-400 font-bold uppercase tracking-widest block">CLASSIFIED CLOCK PROTOCOLS</span>
            <p className="text-zinc-500 text-xs leading-relaxed">
              Operation Horizon: Scheduled Phase 03 Neural Loom sync on standard system timezone. Authorized operator logging encrypted from system socket 3000.
            </p>
            <div className="text-[#ff0055] font-bold uppercase flex items-center gap-1.5 animate-pulse">
              <ShieldAlert className="w-3.5 h-3.5" /> SECURE ROOT LOCK IN EFFECT
            </div>
          </div>
        </div>

        {/* Bottom credits */}
        <div className="border-t border-[#00f0ff]/10 pt-6 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-zinc-500 gap-4">
          <div className="flex gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white text-[#00f0ff]/80 transition-colors uppercase tracking-widest">// GITHUB.CORE</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white text-[#00f0ff]/80 transition-colors uppercase tracking-widest">// LINKEDIN.SECURE</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white text-[#00f0ff]/80 transition-colors uppercase tracking-widest">// INSTAGRAM.LOG</a>
          </div>

          <div className="opacity-40 uppercase tracking-widest text-[9px]">
            &copy; 2026 ORION INITIATIVE // ALL RIGHTS RESERVED
          </div>

          <div className="flex flex-col items-center md:items-end gap-1.5 shrink-0">
            <div className="flex items-center gap-2 text-[#00f0ff] font-bold text-[9px] tracking-widest">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
              LIVE FEED ACTIVE
            </div>
            <div 
              className="text-white text-[10px] font-mono select-none tracking-widest font-semibold"
              style={{
                textShadow: "0 0 6px rgba(255, 215, 0, 0.75), 0 0 12px rgba(212, 175, 55, 0.3)"
              }}
            >
              Design by ROHIT
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
