import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const glowRef = useRef<HTMLDivElement>(null);
  
  // Keep track of position for the background shine glow
  const mousePos = useRef({ x: 0, y: 0 });
  const glowCurrent = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check if device supports touch
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    let initialized = false;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      
      mousePos.current.x = x;
      mousePos.current.y = y;
      
      if (!initialized) {
        glowCurrent.current = { x, y };
        initialized = true;
      }
      
      // Make ambient spotlight visible on mouse move
      if (glowRef.current) glowRef.current.style.opacity = "0.15";
    };

    const handleMouseLeave = () => {
      if (glowRef.current) glowRef.current.style.opacity = "0";
    };

    const handleMouseEnter = () => {
      if (glowRef.current) glowRef.current.style.opacity = "0.15";
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    if (glowRef.current) {
      glowRef.current.style.opacity = "0";
    }

    let animationFrameId: number;

    const animate = () => {
      const targetX = mousePos.current.x;
      const targetY = mousePos.current.y;

      if (initialized) {
        // High-precision smooth follow for background spotlight
        glowCurrent.current.x += (targetX - glowCurrent.current.x) * 0.15;
        glowCurrent.current.y += (targetY - glowCurrent.current.y) * 0.15;

        if (glowRef.current) {
          glowRef.current.style.transform = `translate3d(${glowCurrent.current.x}px, ${glowCurrent.current.y}px, 0) translate(-50%, -50%)`;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Extreme ambient follow spotlight behind text */}
      <div 
        ref={glowRef}
        className="fixed top-0 left-0 pointer-events-none z-0 opacity-0 blur-[130px] rounded-full w-[450px] h-[450px] bg-radial from-[#00f0ff] to-transparent will-change-transform"
      />
    </>
  );
}

