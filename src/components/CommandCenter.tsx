import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Activity, Cpu, Shield, Globe, Terminal, Zap, Flame, 
  Sliders, Power, Send, Radio, AlertCircle, RefreshCw, Layers 
} from "lucide-react";
import { Subsystem, TerminalLog } from "../types";

export default function CommandCenter() {
  // Subsystem States
  const [subsystems, setSubsystems] = useState<Subsystem[]>([
    {
      id: "aegis",
      name: "AEGIS Secure Perimeter",
      codeName: "SYS-AEGIS-44",
      integrity: 98.7,
      status: "ONLINE",
      thermal: 41.2,
      bandwidth: "4.8 TB/s",
      description: "AI-directed global tactical cyber defense framework. Intercepts quantum brute invasions.",
      metrics: ["Intrusion block: 100%", "Encryption lattice: Active", "Decoy servers: 120/120 ready"]
    },
    {
      id: "loom",
      name: "Neural-Loom Fabric",
      codeName: "SYS-LOOM-09",
      integrity: 94.2,
      status: "ONLINE",
      thermal: 48.9,
      bandwidth: "32.1 TB/s",
      description: "Self-weaving organic silicon synapse network. Weaves global multi-modal sensory inputs.",
      metrics: ["Nodes linked: 8.4B", "Synaptic sync rate: 99.12%", "Quantum neural coherence: Stable"]
    },
    {
      id: "grid",
      name: "Quantum Energizer Grid",
      codeName: "SYS-GRID-10",
      integrity: 85.5,
      status: "STANDBY",
      thermal: 35.8,
      bandwidth: "2.1 GW/s",
      description: "High-density quantum particle energy relay. Powers the orbital tracker weapon & scanners.",
      metrics: ["Fuel cells: 85.5%", "Magnetron align: 12mrad", "Coolant pressure: Optimal"]
    },
    {
      id: "orbit",
      name: "Orbital Vector Rig",
      codeName: "SYS-ORBIT-03",
      integrity: 91.1,
      status: "ONLINE",
      thermal: 52.4,
      bandwidth: "1.2 PB/s",
      description: "Low-Earth tracking planetary array. Scans surface anomalies and broadcasts encrypted packets.",
      metrics: ["Satellite sync: 9/9 active", "Orbital drift: 0.002°", "Decryption nodes: Live"]
    }
  ]);

  const [selectedSub, setSelectedSub] = useState<Subsystem>(subsystems[0]);
  const [sysLoad, setSysLoad] = useState(72);
  const [reactorCoolant, setReactorCoolant] = useState(55);
  const [scrambleMode, setScrambleMode] = useState(false);
  
  // Terminal States
  const [command, setCommand] = useState("");
  const [terminalLogs, setTerminalLogs] = useState<TerminalLog[]>([
    {
      id: "welcome-1",
      timestamp: "07:20:25",
      sender: "system",
      text: "SYSTEM INITIALIZED: Welcome Authorized Operator to the ORION COMMAND CONSOLE."
    },
    {
      id: "welcome-2",
      timestamp: "07:20:26",
      sender: "orion-core",
      text: "[ORION-CORE::INFO] I am online and tracking 4 active tactical subsystems. Type 'help' or query me about AEGIS, Neural-Loom, or orbital coordinates."
    }
  ]);
  const [isAILoading, setIsAILoading] = useState(false);
  const terminalBottomRef = useRef<HTMLDivElement>(null);
  
  // Canvas telemetry dimensions
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Auto scroll terminal logs
  useEffect(() => {
    terminalBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [terminalLogs]);

  // Canvas Drawing for holographic radar
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let rotation = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const radius = Math.min(cx, cy) - 15;

      // Draw outer circle
      ctx.strokeStyle = scrambleMode ? "rgba(255, 0, 85, 0.4)" : "rgba(0, 240, 255, 0.4)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.stroke();

      // Outer ticks
      for (let i = 0; i < 360; i += 30) {
        const rad = (i * Math.PI) / 180;
        const x1 = cx + Math.cos(rad) * radius;
        const y1 = cy + Math.sin(rad) * radius;
        const x2 = cx + Math.cos(rad) * (radius - 8);
        const y2 = cy + Math.sin(rad) * (radius - 8);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      // Rotating element
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rotation);
      
      // Sweep scanner gradient
      const sweepGrad = ctx.createRadialGradient(0, 0, 10, 0, 0, radius);
      sweepGrad.addColorStop(0, scrambleMode ? "rgba(255,0,85,0.02)" : "rgba(0,240,255,0.02)");
      sweepGrad.addColorStop(1, scrambleMode ? "rgba(255,0,85,0.15)" : "rgba(0,240,255,0.15)");
      
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, radius, -0.4, 0.4);
      ctx.fillStyle = sweepGrad;
      ctx.fill();

      // Draw cross-hairs
      ctx.strokeStyle = scrambleMode ? "rgba(255, 0, 85, 0.6)" : "rgba(0, 240, 255, 0.6)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(-radius + 10, 0);
      ctx.lineTo(radius - 10, 0);
      ctx.moveTo(0, -radius + 10);
      ctx.lineTo(0, radius - 10);
      ctx.stroke();

      // Cyber dots on the radar
      ctx.fillStyle = scrambleMode ? "#ff0055" : "#00f0ff";
      ctx.beginPath();
      ctx.arc(radius * 0.5, radius * 0.3, 4, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.arc(-radius * 0.4, -radius * 0.4, 3, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      // Draw dynamic concentric data stats
      ctx.fillStyle = scrambleMode ? "#ff0055" : "#00f0ff";
      ctx.font = "8px 'JetBrains Mono'";
      ctx.fillText(`ORION BEACON RESYNCHRONIZING: ACTIVE`, 12, 20);
      ctx.fillText(`RADAR BEARING: ${(rotation * (180 / Math.PI)).toFixed(1)}°`, 12, 32);
      ctx.fillText(`SWEEP INTENSITY: ${sysLoad.toFixed(0)}`, 12, 44);

      rotation += 0.005;
      animationId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationId);
  }, [scrambleMode, sysLoad]);

  // Terminal submission mechanism
  const handleSendCommand = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!command.trim()) return;

    const userCmd = command.trim();
    const timestamp = new Date().toLocaleTimeString("en-US", { hour12: false });
    
    // Add user message to log
    setTerminalLogs((prev) => [
      ...prev,
      { id: Date.now().toString(), timestamp, sender: "user", text: userCmd }
    ]);
    setCommand("");

    // Process general local commands
    const lowerCmd = userCmd.toLowerCase();
    
    if (lowerCmd === "help") {
      setTerminalLogs((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          timestamp,
          sender: "system",
          text: "AVAILABLE PRESETS:\n• clear : Clear logs\n• diag : Run master diagnostics check\n• overload : Initiate reactor load cycle test\n• restore : Re-stabilize systems grid\n\n• You can also talk freely to Orion Core! Ask me anything regarding project parameters."
        }
      ]);
      return;
    }

    if (lowerCmd === "clear") {
      setTerminalLogs([]);
      return;
    }

    if (lowerCmd === "diag") {
      setTerminalLogs((prev) => [
        ...prev,
        { id: Date.now().toString() + "-1", timestamp, sender: "system", text: "RUNNING SYSTEM INTERRUPT ANALYSIS..." }
      ]);
      setIsAILoading(true);
      await new Promise(r => setTimeout(r, 1200));
      setTerminalLogs((prev) => [
        ...prev,
        {
          id: Date.now().toString() + "-2",
          timestamp,
          sender: "orion-core",
          text: "[ORION-CORE::DIAG-OK] All lattices stable. AEGIS integrity is at 98.7%. Thermal levels nominal. Space satellite coordinate lock: Lat 37.77 / Lon -122.41."
        }
      ]);
      setIsAILoading(false);
      return;
    }

    if (lowerCmd === "overload") {
      setScrambleMode(true);
      setSysLoad(98);
      setReactorCoolant(10);
      setTerminalLogs((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          timestamp,
          sender: "system",
          text: "🔥 [WARNING::DANGER] EXTREME RADIATION EXCURSION TRIGGERED. THERMAL BUFFER OVERLOAD ACTIVE. INITIATING RED EMERGENCY PROTOCOLS."
        }
      ]);
      return;
    }

    if (lowerCmd === "restore") {
      setScrambleMode(false);
      setSysLoad(72);
      setReactorCoolant(55);
      setTerminalLogs((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          timestamp,
          sender: "orion-core",
          text: "[ORION-CORE] Grid systems re-stabilized. Coolant levels restored. Emergency override disengaged."
        }
      ]);
      return;
    }

    // Call Real Gemini-Powered Backend API for natural language queries!
    setIsAILoading(true);
    try {
      const response = await fetch("/api/orion/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: userCmd,
          chatHistory: terminalLogs.slice(-6).map(l => ({ sender: l.sender, text: l.text }))
        }),
      });
      const data = await response.json();
      if (data.success) {
        setTerminalLogs((prev) => [
          ...prev,
          { id: Date.now().toString() + "-ai", timestamp, sender: "orion-core", text: data.text }
        ]);
      } else {
        throw new Error(data.error);
      }
    } catch (err: any) {
      setTerminalLogs((prev) => [
        ...prev,
        {
          id: Date.now().toString() + "-err",
          timestamp,
          sender: "system",
          text: `[ORION-CORE::FAILURE] Connection failed with core: ${err.message || "Cryptographic disruption in transit link."}`
        }
      ]);
    } finally {
      setIsAILoading(false);
    }
  };

  // Adjust parameters locally and see changes
  const handleIncreaseCoolant = () => {
    setReactorCoolant(prev => Math.min(prev + 10, 100));
    if (reactorCoolant >= 40 && scrambleMode) {
      setScrambleMode(false);
      setSysLoad(72);
      setTerminalLogs((prev) => [
        ...prev,
        { id: Date.now().toString(), timestamp: "SYSTEM", sender: "orion-core", text: "[ORION-CORE] Emergency cooled down! Coolant restored." }
      ]);
    }
  };

  return (
    <div className="border border-zinc-800 bg-[#070f1a]/80 rounded-lg p-6 relative orion-corners overflow-hidden shadow-2xl">
      {/* Absolute floating cyber meshes */}
      <div className="absolute top-2 right-2 flex items-center gap-1.5 z-10">
        <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">COCKPIT-SYNC [SYS-A2]</span>
        <div className={`w-2 h-2 rounded-full ${scrambleMode ? "bg-[#ff0055] animate-ping" : "bg-[#00f0ff] animate-pulse"}`} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        {/* Left column: Subsystems Health list (5 columns) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div>
            <h3 className="font-display font-medium text-sm text-[#00f0ff] tracking-wider uppercase mb-1 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#00f0ff] animate-pulse" /> Subsystem Diagnostics
            </h3>
            <p className="text-zinc-500 text-[11px] mb-4">Click any classified channel to inspect live telemetry configurations.</p>
            
            <div className="space-y-2.5">
              {subsystems.map((sub) => {
                const isSelected = selectedSub.id === sub.id;
                return (
                  <button
                    key={sub.id}
                    onClick={() => {
                      setSelectedSub(sub);
                      if (scrambleMode && sub.status === "ONLINE") {
                        // Keep things dynamic
                      }
                    }}
                    className={`w-full text-left p-3 border transition duration-250 select-none cursor-pointer rounded flex flex-col justify-between ${
                      isSelected 
                        ? (scrambleMode ? "border-[#ff0055] bg-[#ff0055]/5" : "border-[#00f0ff] bg-[#00f0ff]/5") 
                        : "border-zinc-800/80 hover:border-zinc-700/80 bg-black/40"
                    }`}
                  >
                    <div className="flex items-center justify-between pointer-events-none">
                      <div className="flex items-center gap-2">
                        {sub.id === "aegis" && <Shield className={`w-3.5 h-3.5 ${isSelected ? "text-[#00f0ff]" : "text-zinc-400"}`} />}
                        {sub.id === "loom" && <Cpu className={`w-3.5 h-3.5 ${isSelected ? "text-[#00f0ff]" : "text-zinc-400"}`} />}
                        {sub.id === "grid" && <Zap className={`w-3.5 h-3.5 ${isSelected ? "text-[#00f0ff]" : "text-zinc-400"}`} />}
                        {sub.id === "orbit" && <Globe className={`w-3.5 h-3.5 ${isSelected ? "text-[#00f0ff]" : "text-zinc-400"}`} />}
                        
                        <div className="flex flex-col">
                          <span className="text-xs font-semibold text-zinc-300 font-mono">{sub.name}</span>
                          <span className="text-[9px] text-zinc-500 font-mono">{sub.codeName}</span>
                        </div>
                      </div>
                      <span className={`text-[9px] font-bold font-mono px-2 py-0.5 rounded ${
                        scrambleMode 
                          ? "bg-[#ff0055]/10 text-[#ff0055] border border-[#ff0055]/30 animate-pulse"
                          : sub.status === "ONLINE" 
                            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30" 
                            : "bg-amber-500/10 text-amber-400 border border-amber-500/30 font-bold"
                      }`}>
                        {scrambleMode ? "OVERLOAD" : sub.status}
                      </span>
                    </div>

                    {/* Simple health percent bar */}
                    <div className="w-full bg-[#0b1a30]/30 h-1 rounded overflow-hidden mt-3.5 pointer-events-none">
                      <div 
                        className={`h-full duration-1000 ${scrambleMode ? "bg-[#ff0055]" : "bg-[#00f0ff]"}`} 
                        style={{ width: `${scrambleMode ? 32 : sub.integrity}%` }}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Core Telemetry metrics detail popup */}
          <div className="p-4 border border-zinc-700/50 bg-[#091523]/60 rounded relative">
            <div className="absolute top-1.5 right-2 text-zinc-600 font-mono text-[8px] tracking-widest">LIVE BROADCAST</div>
            <h4 className="text-[11px] font-bold text-[#00f0ff] uppercase tracking-wider mb-2 font-mono">
              [CHANNEL] // {selectedSub.codeName}
            </h4>
            <p className="text-zinc-400 text-xs leading-relaxed mb-3">{selectedSub.description}</p>
            <div className="space-y-1 font-mono text-[10px] text-zinc-500">
              {selectedSub.metrics.map((metric, i) => (
                <div key={i} className="flex items-center gap-1.5 uppercase text-[#c2d1e0]/80">
                  <span className="text-[#00f0ff]">•</span> {metric}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle column: Holographic Radar Scan & Control Dials (3 columns) */}
        <div className="lg:col-span-3 flex flex-col justify-between items-center space-y-4">
          <div className="w-full flex justify-center">
            <div className="relative p-2.5 bg-black/40 border border-zinc-800 rounded-lg flex items-center justify-center w-full max-w-[200px] h-[200px]">
              <canvas ref={canvasRef} width={180} height={180} className="w-full h-full" />
              {/* Abs tracking indicator overlay */}
              <div className="absolute bottom-2 font-mono text-[9px] text-[#00f0ff]/60 tracking-wider">
                ORBITAL RANGE - SECURE
              </div>
            </div>
          </div>

          {/* Interactive Dials & Control overrides */}
          <div className="w-full space-y-4 p-4 border border-zinc-800/80 bg-black/20 rounded">
            <h4 className="text-[10px] uppercase tracking-widest text-[#00f0ff] font-bold font-mono">CONTROL CONSOLE OVERRIDES</h4>
            
            <div className="space-y-3">
              {/* Load input */}
              <div className="space-y-1">
                <div className="flex justify-between font-mono text-[9px] text-zinc-400">
                  <span>ORION SYSTEM LOAD</span>
                  <span className={scrambleMode ? "text-[#ff0055]" : "text-[#00f0ff]"}>{sysLoad}%</span>
                </div>
                <input 
                  type="range" 
                  min="20" 
                  max="100" 
                  value={sysLoad} 
                  onChange={(e) => {
                    const lVal = Math.round(Number(e.target.value));
                    setSysLoad(lVal);
                    if (lVal > 90) {
                      setScrambleMode(true);
                    } else if (lVal < 85 && reactorCoolant > 30) {
                      setScrambleMode(false);
                    }
                  }}
                  className="w-full h-1 bg-zinc-800 accent-[#00f0ff] rounded-lg cursor-pointer" 
                />
              </div>

              {/* Coolant level */}
              <div className="space-y-1">
                <div className="flex justify-between font-mono text-[9px] text-zinc-400">
                  <span>REACTOR COOLANT</span>
                  <span className={reactorCoolant < 25 ? "text-[#ff0055] animate-pulse" : "text-emerald-400"}>{reactorCoolant}%</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1 bg-zinc-800 rounded-lg flex-1 overflow-hidden">
                    <div 
                      className={`h-full ${reactorCoolant < 30 ? "bg-[#ff0055]" : "bg-emerald-400"}`} 
                      style={{ width: `${reactorCoolant}%` }} 
                    />
                  </div>
                  <button 
                    onClick={handleIncreaseCoolant}
                    className="p-1 px-2.5 text-[9px] font-mono uppercase bg-[#00f0ff]/10 hover:bg-[#00f0ff]/30 text-[#00f0ff] rounded border border-[#00f0ff]/20 hover:border-[#00f0ff] transition cursor-pointer"
                  >
                    COOL
                  </button>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <button 
                onClick={() => {
                  setScrambleMode(!scrambleMode);
                  if(!scrambleMode) {
                    setSysLoad(99);
                    setReactorCoolant(10);
                  } else {
                    setSysLoad(65);
                    setReactorCoolant(80);
                  }
                }}
                className={`flex-1 flex justify-center py-2 text-[10px] items-center gap-1 border font-semibold font-mono rounded cursor-pointer uppercase ${
                  scrambleMode 
                    ? "bg-[#ff0055]/20 text-[#ff0055] border-[#ff0055]" 
                    : "bg-[#00f0ff]/10 text-[#00f0ff] border-zinc-700/80 hover:border-[#00f0ff]"
                }`}
              >
                <Power className="w-3.5 h-3.5" /> {scrambleMode ? "DISARM OVERLOAD" : "OVERLOAD GRID"}
              </button>
            </div>
          </div>
        </div>

        {/* Right column: Interactive real Gemini AI Terminal (4 columns) */}
        <div className="lg:col-span-4 flex flex-col justify-between border border-zinc-800/80 bg-black/40 rounded-lg overflow-hidden h-[380px] lg:h-auto">
          {/* Header of terminal */}
          <div className="flex items-center justify-between border-b border-zinc-800 bg-black/60 px-4 py-2">
            <span className="text-[10px] font-mono font-bold tracking-wider text-zinc-400 uppercase flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-[#00f0ff] animate-pulse" /> AI Sync Terminal [V4.9]
            </span>
            <div className="flex items-center gap-2 text-[9px] text-[#00f0ff] font-mono">
              <Activity className="w-3 h-3 animate-pulse" /> {scrambleMode ? "EMERGENCY" : "AI SECURE LINKED"}
            </div>
          </div>

          {/* Logs of terminal */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2 font-mono scrollbar-none text-[11px] h-48 lg:h-64 select-text orion-terminal-scroll bg-[#03070faf]">
            <AnimatePresence initial={false}>
              {terminalLogs.map((log) => {
                const isOrion = log.sender === "orion-core";
                const isUser = log.sender === "user";
                const isSys = log.sender === "system";

                let textColor = "text-zinc-500";
                let senderLabel = "SYSTEM::";
                if (isOrion) {
                  textColor = scrambleMode ? "text-[#ff0055]" : "text-[#00f0ff]";
                  senderLabel = "ORION-CORE::";
                } else if (isUser) {
                  textColor = "text-zinc-200";
                  senderLabel = "AUTHORIZED-OPERATOR::";
                }

                return (
                  <motion.div
                    key={log.id}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="p-1 px-1.5 rounded-sm flex flex-col bg-black/20 text-xs"
                  >
                    <div className="flex justify-between items-center text-[9px] text-zinc-500 mb-0.5">
                      <span className={`${textColor} font-bold tracking-widest uppercase`}>{senderLabel}</span>
                      <span>{log.timestamp}</span>
                    </div>
                    <div className={`${isUser ? "text-zinc-300" : textColor} leading-relaxed whitespace-pre-wrap select-text`}>
                      {log.text}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {isAILoading && (
              <div className="flex items-center gap-1.5 text-[#00f0ff]/70 text-[10px]">
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>FORMING SYNAPSE BLOCK... SCANNING ORBIT RANGE...</span>
              </div>
            )}
            <div ref={terminalBottomRef} />
          </div>

          {/* Form console input */}
          <form onSubmit={handleSendCommand} className="border-t border-zinc-800 bg-[#070f1a] p-2 flex items-center gap-2">
            <span className="text-[#00f0ff] font-extrabold text-[13px] ml-1 select-none font-mono">&gt;</span>
            <input
              type="text"
              placeholder="Query Core AI (e.g. status, neural-loom)..."
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              disabled={isAILoading}
              className="flex-1 bg-transparent border-0 outline-none text-xs font-mono text-[#00f0ff] placeholder-[#00f0ff]/30 focus:ring-0 py-1.5"
            />
            <button
              type="submit"
              disabled={isAILoading || !command.trim()}
              className="p-2 mr-1 bg-[#00f0ff]/10 hover:bg-[#00f0ff]/20 disabled:opacity-40 text-[#00f0ff] rounded border border-[#00f0ff]/20 hover:border-[#00f0ff] transition cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
