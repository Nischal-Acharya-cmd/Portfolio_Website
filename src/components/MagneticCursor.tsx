import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MagneticCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"], .data-panel')) {
        setHovering(true);
      }
    };

    const out = () => setHovering(false);
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseout", out);
    document.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mouseout", out);
      document.removeEventListener("mouseleave", leave);
    };
  }, [visible]);

  // Don't render on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 z-[999] pointer-events-none mix-blend-screen hidden md:block"
        animate={{
          x: pos.x - (hovering ? 20 : 14),
          y: pos.y - (hovering ? 20 : 14),
          width: hovering ? 40 : 28,
          height: hovering ? 40 : 28,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.5 }}
        style={{
          borderRadius: "50%",
          border: `1px solid hsl(var(--neon-blue) / ${hovering ? 0.6 : 0.25})`,
          boxShadow: hovering
            ? "0 0 12px hsl(var(--neon-blue) / 0.3), inset 0 0 8px hsl(var(--neon-purple) / 0.1)"
            : "none",
        }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 z-[999] pointer-events-none hidden md:block"
        animate={{
          x: pos.x - 2.5,
          y: pos.y - 2.5,
          opacity: visible ? 0.8 : 0,
          scale: hovering ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        style={{
          width: 5,
          height: 5,
          borderRadius: "50%",
          background: "hsl(var(--neon-blue))",
          boxShadow: "0 0 6px hsl(var(--neon-blue) / 0.5)",
        }}
      />
    </>
  );
};

export default MagneticCursor;
