import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LabConcept } from "../types";
import { FlaskConical, Play, Pause, RefreshCw, Layers, Sparkles } from "lucide-react";

export default function InnovationLab() {
  const [concepts, setConcepts] = useState<LabConcept[]>([
    {
      id: "concept-1",
      name: "Coherent Spiral Lattice",
      category: "Quantum Geometries",
      vulnerabilityIndex: "0.012%",
      complexity: "Class VIII",
      description: "Organic fractal spirals engineered using logarithmic mathematical frameworks. Models natural swarm dynamics to balance cybernetic satellite nodes in real-time.",
      schematicType: "spiral",
      neuralCapacity: "4.8 ExaFLOPs"
    },
    {
      id: "concept-2",
      name: "Dynamic Synapse Fields",
      category: "Adaptive Automation",
      vulnerabilityIndex: "0.004%",
      complexity: "Class X (Singular)",
      description: "Interactive gravity vectors that disperse cyber signals evenly. Instantly relocates cognitive server capacity when high bandwidth bottlenecks appear.",
      schematicType: "grid",
      neuralCapacity: "12.1 ExaFLOPs"
    },
    {
      id: "concept-3",
      name: "Synchronous Pulse Frequencies",
      category: "Sub-atomic waves",
      vulnerabilityIndex: "0.009%",
      complexity: "Class VI",
      description: "Unified electromagnetic frequency filters that decrypt outer atmospheric telemetry files. Suppresses sonic noise layers by introducing continuous sine cycles.",
      schematicType: "sine",
      neuralCapacity: "2.5 ExaFLOPs"
    }
  ]);

  const [activeConcept, setActiveConcept] = useState<LabConcept>(concepts[0]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [warpRatio, setWarpRatio] = useState(1.0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Handle canvas mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left - canvas.width / 2,
      y: e.clientY - rect.top - canvas.height / 2
    };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      ctx.lineWidth = 1.2;
      
      if (activeConcept.schematicType === "spiral") {
        // Draw mathematical logarithmic spiral
        ctx.strokeStyle = "rgba(0, 240, 255, 0.45)";
        
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(time * 0.01 * warpRatio);

        ctx.beginPath();
        for (let i = 0; i < 500; i++) {
          const angle = 0.1 * i;
          // Math logarithmic coefficient with mouse warp
          const warpXScalar = 1 + (mouseRef.current.x * 0.0015);
          const warpYScalar = 1 + (mouseRef.current.y * 0.0015);
          const r = (2 + 0.3 * angle) * Math.sin(time / 20) * 2;
          const x = Math.cos(angle) * r * warpXScalar * 5;
          const y = Math.sin(angle) * r * warpYScalar * 5;

          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Draw orbital tracking concentric bounds
        ctx.strokeStyle = "rgba(255, 0, 85, 0.2)";
        ctx.beginPath();
        ctx.arc(0, 0, 100, 0, Math.PI * 2);
        ctx.stroke();
        
        ctx.restore();

      } else if (activeConcept.schematicType === "grid") {
        // Draw interactive scattering coordinate grids
        ctx.strokeStyle = "rgba(0, 240, 255, 0.3)";
        const rows = 12;
        const cols = 12;
        const spacing = 18;

        ctx.save();
        ctx.translate(cx - (cols * spacing)/2, cy - (rows * spacing)/2);

        for (let r = 0; r <= rows; r++) {
          for (let c = 0; c <= cols; c++) {
            const px = c * spacing;
            const py = r * spacing;

            // Vector influence of mouse
            const dx = px - (mouseRef.current.x + cx);
            const dy = py - (mouseRef.current.y + cy);
            const dist = Math.sqrt(dx*dx + dy*dy);
            const influence = Math.max(0, 120 - dist) * 0.2 * warpRatio;

            const shiftX = (dx / (dist || 1)) * influence * Math.sin(time * 0.05);
            const shiftY = (dy / (dist || 1)) * influence * Math.cos(time * 0.05);

            ctx.fillStyle = r % 3 === 0 ? "#ff0055" : "#00f0ff";
            ctx.beginPath();
            ctx.arc(px + shiftX, py + shiftY, 1.8, 0, Math.PI * 2);
            ctx.fill();

            if (c > 0 && r > 0) {
              ctx.beginPath();
              ctx.moveTo(px + shiftX, py + shiftY);
              ctx.lineTo((c-1)*spacing, py);
              ctx.stroke();
            }
          }
        }
        ctx.restore();

      } else if (activeConcept.schematicType === "sine") {
        // Draw overlapping beautiful frequency sine-waves
        ctx.strokeStyle = "rgba(0, 240, 255, 0.6)";
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x++) {
          const normX = x / canvas.width;
          const frequency = 8 + (mouseRef.current.x * 0.015);
          const amplitude = 40 + (mouseRef.current.y * 0.15) * warpRatio;
          const y = cy + Math.sin(normX * Math.PI * frequency + time * 0.1) * amplitude;
          
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Secondary counter wave in pink
        ctx.strokeStyle = "rgba(255, 0, 85, 0.35)";
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x++) {
          const normX = x / canvas.width;
          const frequency = 6 + (mouseRef.current.y * 0.01);
          const amplitude = 30 * warpRatio;
          const y = cy + Math.cos(normX * Math.PI * frequency - time * 0.08) * amplitude;
          
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      if (isPlaying) {
        time += 0.5;
      }
      animFrame = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animFrame);
  }, [activeConcept, isPlaying, warpRatio]);

  return (
    <div className="border border-[#00f0ff]/20 bg-[#020308]/60 p-6 rounded-lg relative overflow-hidden orion-corners select-none shadow-[0_0_20px_rgba(0,240,255,0.03)]">
      <div className="absolute top-2 right-2 text-[9px] font-mono text-zinc-500">SCHEMATIC INTERCEPTOR // LAB-A5</div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left: Dynamic Render Stage Canvas (5 columns) */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative border border-[#00f0ff]/25 bg-[#020308]/90 rounded-lg p-2 overflow-hidden w-full max-w-[300px] h-[300px] flex items-center justify-center cursor-crosshair group shadow-[0_0_20px_rgba(0,240,255,0.05)]">
            
            {/* Corner details */}
            <div className="absolute top-2 left-2 border-t border-l border-[#00f0ff] w-3 h-3" />
            <div className="absolute top-2 right-2 border-t border-r border-[#00f0ff] w-3 h-3" />
            <div className="absolute bottom-2 left-2 border-b border-l border-[#00f0ff] w-3 h-3" />
            <div className="absolute bottom-2 right-2 border-b border-r border-[#00f0ff] w-3 h-3" />

            <canvas 
              ref={canvasRef} 
              width={280} 
              height={280} 
              onMouseMove={handleMouseMove}
              className="w-full h-full pointer-events-auto"
            />

            {/* Glowing sweep overlay */}
            <div className="absolute inset-x-0 top-0 h-[1.5px] bg-[#00f0ff]/20 shadow-[0_0_8px_#00f0ff] animate-bounce pointer-events-none" style={{ animationDuration: "6s" }} />
          </div>

          {/* Quick simulation settings */}
          <div className="w-full max-w-[300px] mt-4 flex items-center justify-between border border-[#00f0ff]/15 p-2.5 bg-[#020308]/60 rounded text-xs">
            <span className="font-mono text-zinc-500 uppercase text-[9px]">SPEED FREQ</span>
            
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-1.5 bg-[#00f0ff]/10 hover:bg-[#00f0ff]/30 text-[#00f0ff] rounded border border-[#00f0ff]/20 hover:border-[#00f0ff] cursor-pointer"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
              
              <button 
                onClick={() => setWarpRatio(prev => prev === 1.0 ? 2.5 : prev === 2.5 ? 0.3 : 1.0)}
                className="p-1.5 bg-[#ff0055]/10 hover:bg-[#ff0055]/30 text-[#ff0055] rounded border border-[#ff0055]/20 hover:border-[#ff0055] cursor-pointer font-mono text-[9px]"
              >
                WARP: {warpRatio.toFixed(1)}x
              </button>
            </div>
          </div>
        </div>

        {/* Right: Technical concept details and tabs chooser (7 columns) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] text-zinc-500 uppercase font-mono tracking-widest block font-bold flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#00f0ff]" /> DESIGN SCHEMATIC INTERFACE
            </span>
            <h3 className="font-display font-medium text-lg lg:text-xl text-white uppercase tracking-wider">
              Experimental Core Prototypes
            </h3>
            <p className="text-zinc-400 text-xs leading-relaxed max-w-xl">
              We run autonomous logical computations on three primary mathematical prototypes to tethar neural coordinates accurately. Click a prototype tab below to load its vector telemetry into the scan-stage box.
            </p>
          </div>

          {/* Selector Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {concepts.map((concept) => {
              const isSelected = activeConcept.id === concept.id;
              return (
                <button
                  key={concept.id}
                  onClick={() => setActiveConcept(concept)}
                  className={`p-3 text-left border rounded transition duration-250 cursor-pointer ${
                    isSelected 
                      ? "border-[#00f0ff] bg-[#00f0ff]/5 shadow-[0_0_12px_rgba(0,240,255,0.05)]" 
                      : "border-[#00f0ff]/10 hover:border-[#00f0ff]/30 bg-[#020308]/80"
                  }`}
                >
                  <span className="text-[9px] text-[#00f0ff] font-mono tracking-wider block font-bold uppercase pointer-events-none">// {concept.category}</span>
                  <span className="text-xs font-bold text-zinc-200 mt-1 block uppercase font-mono pointer-events-none">{concept.name}</span>
                </button>
              );
            })}
          </div>

          {/* Loaded details card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeConcept.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="p-5 border border-[#00f0ff]/20 bg-[#020308]/90 rounded relative shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
            >
              <div className="absolute top-2 right-2 text-zinc-600 font-mono text-[9px] tracking-widest">DIAG-ACTIVE</div>
              <h4 className="text-xs font-black text-[#00f0ff] font-mono uppercase tracking-widest flex items-center gap-2">
                <FlaskConical className="w-4 h-4 text-[#00f0ff] animate-pulse" /> PARAMETER BREAKDOWN
              </h4>
              
              <p className="text-zinc-400 text-xs leading-relaxed mt-3 mb-4">
                {activeConcept.description}
              </p>

              <div className="grid grid-cols-3 gap-4 border-t border-[#00f0ff]/10 pt-4 font-mono text-[10px]">
                <div>
                  <span className="text-zinc-500 uppercase font-semibold">NEURAL CAPACITY</span>
                  <span className="text-zinc-300 mt-1 font-bold block">{activeConcept.neuralCapacity}</span>
                </div>
                <div>
                  <span className="text-zinc-500 uppercase font-semibold">VULNERABILITY INDEX</span>
                  <span className="text-[#ff0055] mt-1 font-bold block">{activeConcept.vulnerabilityIndex}</span>
                </div>
                <div>
                  <span className="text-zinc-500 uppercase font-semibold">COMPLEXITY SCORE</span>
                  <span className="text-[#00f0ff] mt-1 font-bold block">{activeConcept.complexity}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
