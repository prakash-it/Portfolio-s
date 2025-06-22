import React, { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [ringPos, setRingPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      const isInteractive = e.target.closest('a, button, input, textarea, select, label');
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  useEffect(() => {
    const animate = () => {
      setRingPos((prev) => {
        const dx = mousePos.x - prev.x;
        const dy = mousePos.y - prev.y;
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, [mousePos]);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed z-[10000] w-2 h-2 bg-cyan-400 rounded-full pointer-events-none shadow-[0_0_8px_2px_rgba(34,211,238,0.7)]"

        style={{
          transform: `translate(${mousePos.x - 4}px, ${mousePos.y - 4}px)`,
        }}
      />

      {/* Ring */}
      <div
        ref={ringRef}
        className={`fixed z-[9999] border-2 rounded-full pointer-events-none transition-all duration-200 ease-out ${
          isHovering ? 'w-10 h-10 bg-cyan-400/10 border-cyan-400 shadow-[0_0_10px_3px_rgba(34,211,238,0.4)]'
    : 'w-6 h-6 border-cyan-400'
        }`}
        style={{
          transform: `translate(${ringPos.x - (isHovering ? 20 : 12)}px, ${ringPos.y - (isHovering ? 20 : 12)}px)`,
        }}
      />
    </>
  );
}
