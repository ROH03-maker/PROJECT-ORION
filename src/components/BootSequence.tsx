import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface BootSequenceProps {
  onComplete: () => void;
  key?: string;
}

const FLIP_WORDS = [
  "SYSTEM", "QUANTUM", "SATELLITE", "DATA", "CORE", 
  "SYNAPSE", "ORBITAL", "VECTOR", "CYBER", "NETWORK", 
  "INTELLIGENCE", "MATRIX", "ENGINE", "SHIELD", "NEXUS", 
  "INTEGRATION", "HYPERION", "LABS", "ORION", "PROJECT"
];

export default function BootSequence({ onComplete }: BootSequenceProps) {
  const [flipIndex, setFlipIndex] = useState(0);
  const [isFlippedComplete, setIsFlippedComplete] = useState(false);
  const [showFullLogo, setShowFullLogo] = useState(false);
  const [startOutro, setStartOutro] = useState(false);

  useEffect(() => {
    // Phase 1: Rapid word flipping (Marvel Studios comic sequence intro)
    let flipInterval: NodeJS.Timeout;
    let index = 0;

    flipInterval = setInterval(() => {
      if (index < FLIP_WORDS.length - 1) {
        index += 1;
        setFlipIndex(index);
      } else {
        clearInterval(flipInterval);
        setIsFlippedComplete(true);
        // Trigger the full logo reveal immediately after the flip reel ends
        setTimeout(() => {
          setShowFullLogo(true);
        }, 150);
      }
    }, 55); // high speed flip

    return () => {
      clearInterval(flipInterval);
    };
  }, []);

  useEffect(() => {
    if (showFullLogo) {
      // Phase 2: Show logo complete, run the shine & cinematic zoom, then trigger exit transition
      const outroTimeout = setTimeout(() => {
        setStartOutro(true);
      }, 2300); // Allow text zoom & shine sweep to showcase

      const completeTimeout = setTimeout(() => {
        onComplete();
      }, 3000); // Fully complete and fade out

      return () => {
        clearTimeout(outroTimeout);
        clearTimeout(completeTimeout);
      };
    }
  }, [showFullLogo, onComplete]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden select-none">
      {/* Cinematic styling helper for light sweep, glowing frames, and letter packed styling */}
      <style>{`
        .marvel-text {
          font-family: 'Oswald', 'Impact', sans-serif;
          letter-spacing: -0.06em;
          text-transform: uppercase;
          font-weight: 900;
          color: #ffffff;
        }
        
        .marvel-shine-container {
          position: relative;
          overflow: hidden;
        }

        .marvel-shine-container::after {
          content: "";
          position: absolute;
          top: 0;
          left: -150%;
          width: 80%;
          height: 100%;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.4) 30%,
            rgba(255, 255, 255, 0.9) 50%,
            rgba(255, 255, 255, 0.4) 70%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: skewX(-20deg);
          animation: marvelShine 1.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          animation-delay: 0.6s;
        }

        @keyframes marvelShine {
          0% {
            left: -150%;
          }
          100% {
            left: 150%;
          }
        }
      `}</style>

      <AnimatePresence mode="wait">
        {!isFlippedComplete ? (
          /* Rapid flipping state: Pre-roll reel */
          <motion.div
            key="pre-roll-reel"
            className="flex flex-col items-center justify-center p-4"
            exit={{ opacity: 0, scale: 1.15 }}
            transition={{ duration: 0.15 }}
          >
            {/* Rapid changing visual matrix frame */}
            <div className="border border-white/10 px-12 py-6 bg-black/40 rounded flex items-center justify-center min-w-[280px] md:min-w-[450px]">
              <span className="marvel-text text-4xl sm:text-6xl md:text-7xl tracking-[-0.04em] italic text-white/90 scale-95 uppercase">
                {FLIP_WORDS[flipIndex]}
              </span>
            </div>
            
            {/* Subtle rolling celluloid film strip lines */}
            <div className="absolute left-0 right-0 top-[20%] h-[1px] bg-white/5" />
            <div className="absolute left-0 right-0 bottom-[20%] h-[1px] bg-white/5" />
          </motion.div>
        ) : (
          /* Main Marvel Logo Assembly Sequence */
          <motion.div
            key="marvel-logo-sequence"
            initial={{ opacity: 0 }}
            animate={startOutro ? { opacity: 0, scale: 1.08, filter: "blur(4px)" } : { opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="relative flex flex-col items-center justify-center p-6 w-full max-w-4xl"
          >
            {showFullLogo && (
              <div className="text-center flex flex-col items-center justify-center select-none">
                {/* Comic Style Box Frame bounding the ultrabold white text */}
                <motion.div 
                  initial={{ scale: 1.12, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.9, cubicBezier: [0.16, 1, 0.3, 1] }}
                  className="marvel-shine-container border-y-4 md:border-y-8 border-white px-6 md:px-12 py-1.5 md:py-3 select-none flex items-center justify-center"
                >
                  <h1 className="marvel-text text-5xl sm:text-7xl md:text-9xl tracking-[-0.07em] -skew-x-[11deg] md:-skew-x-[13deg] leading-none select-none text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]">
                    PROJECT ORION
                  </h1>
                </motion.div>

                {/* Subtitle - Spaces out underneath similarly to "Marvel Studios" design layout */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="mt-4 md:mt-6 text-[8px] sm:text-[10px] md:text-xs font-mono font-bold tracking-[0.9em] md:tracking-[1.2em] text-zinc-400 pl-4 uppercase"
                >
                  INITIATIVE
                </motion.div>
              </div>
            )}
            
            {/* Ultra subtle depth rays */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent_60%)] pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
